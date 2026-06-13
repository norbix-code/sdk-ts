import { fromResponse, NorbixError, NorbixNetworkError, NorbixTimeoutError } from './errors.js';
import type { ResolvedNorbixConfig } from './types.js';

export type HttpVerb = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

/**
 * Marks endpoints that require an `accountId` on the client. The auto-mapped
 * code passes `'account'` for any DTO implementing `IHasAccountId`. The
 * special `'unauthenticated'` scope bypasses the auth header check, used by
 * the login flow which has no token yet.
 */
export type Scope = 'project' | 'account' | 'public' | 'unauthenticated';

export interface RequestOptions<TBody = unknown> {
  /** Which gateway (api2 or hub) the call targets. */
  target: 'api' | 'hub';
  /** Path template with `{version}` and any `{paramName}` placeholders. */
  path: string;
  /** HTTP verb. If multiple verbs were declared, the codegen picks the most idiomatic one. */
  method: HttpVerb;
  /** Whole request DTO. Path tokens, query string, and body are extracted from it. */
  request?: TBody;
  /** Names of properties on the request that should fill `{path}` tokens. */
  pathParams?: string[];
  /** Scoping requirement. `account` throws if `accountId` is not configured. */
  scope?: Scope;
  /** Per-call timeout override. */
  timeoutMs?: number;
  /** Per-call bearer token override, useful for SSR and multi-tenant request scopes. */
  bearerToken?: string;
  /**
   * Per-call environment override. Sent as the `norbix-env` header, selecting
   * which project environment the request targets. Falls back to the client's
   * configured `env`. `PROD` (the default) sends no header.
   */
  env?: string;
  /**
   * Per-call region override. Sent as the `nb-region` header (a region code,
   * e.g. `nb-eu-germany`). Falls back to the client's configured `region`.
   * There is no default region — when neither is set, no header is sent.
   * Affects the header only; it never changes the request URL.
   */
  region?: string;
}

export interface RequestOverrideOptions {
  /** Per-call bearer token override, useful for SSR and multi-tenant request scopes. */
  bearerToken?: string;
  /** Per-call timeout override. */
  timeoutMs?: number;
  /**
   * Per-call environment override. Sent as the `norbix-env` header, overriding
   * the client's configured `env` for this single call. `PROD` sends no header.
   */
  env?: string;
  /**
   * Per-call region override. Sent as the `nb-region` header, overriding the
   * client's configured `region` for this single call. Affects the header
   * only — the request URL is never rewritten per call.
   */
  region?: string;
}

export type TransportMiddleware = (ctx: {
  url: string;
  init: RequestInit;
  attempt: number;
  next: () => Promise<Response>;
}) => Promise<Response>;

/**
 * Tiny fetch-based transport. Handles:
 *  - bearer auth (JWT preferred, falls back to API key)
 *  - project + account headers
 *  - path token interpolation
 *  - query-string vs body based on verb
 *  - timeout via AbortController
 *  - structured error parsing into NorbixError
 *
 * Keeps a reference to the resolved config object — the Norbix client
 * mutates fields on this object (bearerToken, projectId, accountId) so the
 * transport always sees the current state without rebuilding.
 */
export class Transport {
  constructor(private readonly cfg: ResolvedNorbixConfig) {}

  async send<TResponse>(opts: RequestOptions): Promise<TResponse> {
    if (opts.scope === 'account' && !this.cfg.accountId) {
      throw new NorbixError({
        message:
          'This endpoint is account-scoped. Pass `accountId` to the Norbix client to call it.',
        status: 0,
        code: 'NORBIX_ACCOUNT_SCOPE_REQUIRED',
      });
    }

    const baseUrl = opts.target === 'api' ? this.cfg.baseUrl.api : this.cfg.baseUrl.hub;
    const version = opts.target === 'api' ? this.cfg.apiVersion : this.cfg.hubVersion;

    const { url, body } = buildUrlAndBody({
      baseUrl,
      path: opts.path,
      method: opts.method,
      version,
      request: (opts.request ?? {}) as Record<string, unknown>,
      pathParams: opts.pathParams ?? [],
    });

    const headers = new Headers({
      Accept: 'application/json',
      ...this.cfg.defaultHeaders,
    });

    if (opts.scope !== 'unauthenticated') {
      const token = opts.bearerToken ?? this.cfg.bearerToken ?? this.cfg.apiKey;
      if (!token) {
        throw new NorbixError({
          message:
            'Norbix is not authenticated. Provide `apiKey` / `bearerToken`, set NORBIX_API_KEY in env, or call `norbix.login(...)` before making requests.',
          status: 0,
          code: 'NORBIX_NOT_AUTHENTICATED',
        });
      }
      headers.set('Authorization', `Bearer ${token}`);
    }

    if (this.cfg.projectId) headers.set('X-CM-ProjectId', this.cfg.projectId);
    if (this.cfg.accountId) headers.set('X-CM-AccountId', this.cfg.accountId);

    // Environment selector. Per-call override wins over the client default.
    // `PROD` is the backend default, so we omit the header for it to keep
    // production requests byte-identical to the pre-environments behavior.
    const env = opts.env ?? this.cfg.env;
    if (env && env !== 'PROD') headers.set('norbix-env', env);

    // Region selector. Per-call override wins over the client default. Unlike
    // env there is no default region — the header is injected only when a
    // region is resolved, so region-less traffic stays byte-identical.
    const region = opts.region ?? this.cfg.region;
    if (region) headers.set('nb-region', region);

    if (body !== undefined) headers.set('Content-Type', 'application/json');

    const timeoutMs = opts.timeoutMs ?? this.cfg.timeoutMs;

    const isIdempotent = opts.method === 'GET' || opts.method === 'DELETE';
    const maxRetries = isIdempotent ? this.cfg.retry.maxRetries : 0;

    let didRefresh = false;
    let attempt = 0;
    // Total attempts = 1 + maxRetries
    while (true) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      const startedAt = Date.now();

      this.cfg.onRequest?.({ url, method: opts.method, headers });

      let res: Response | undefined;
      let fetchErr: unknown = undefined;
      try {
        const init: RequestInit = {
          method: opts.method,
          headers,
          body,
          signal: controller.signal,
        };
        let next: () => Promise<Response> = async () => this.cfg.fetch(url, init);
        for (const mw of this.cfg.middleware ?? []) {
          const prev = next;
          next = () => mw({ url, init, attempt, next: prev });
        }
        res = await next();
      } catch (err) {
        fetchErr = err;
      } finally {
        clearTimeout(timer);
      }

      if (res) {
        this.cfg.onResponse?.({ url, status: res.status, durationMs: Date.now() - startedAt });

        // Optional 401 refresh flow: refresh once, then retry the original request.
        if (
          res.status === 401 &&
          !didRefresh &&
          opts.scope !== 'unauthenticated' &&
          typeof this.cfg.refreshBearerToken === 'function'
        ) {
          const nextToken = await this.cfg.refreshBearerToken({ url, status: 401 });
          if (nextToken) {
            this.cfg.bearerToken = nextToken;
            headers.set('Authorization', `Bearer ${nextToken}`);
            didRefresh = true;
            continue;
          }
        }

        if (res.ok) {
          if (res.status === 204) return undefined as TResponse;
          const text = await res.text();
          if (!text) return undefined as TResponse;
          return JSON.parse(text) as TResponse;
        }

        // Non-OK: retry transient codes for idempotent methods.
        if (isRetryableStatus(res.status) && attempt < maxRetries) {
          const delay = retryDelayMs({
            attempt,
            baseDelayMs: this.cfg.retry.baseDelayMs,
            maxDelayMs: this.cfg.retry.maxDelayMs,
            retryAfter: res.headers.get('retry-after') ?? undefined,
          });
          await sleep(delay);
          attempt++;
          continue;
        }

        throw await fromResponse(res, url);
      }

      // Network/timeout errors: retry only for idempotent requests.
      const isAbort = fetchErr instanceof DOMException && fetchErr.name === 'AbortError';
      const reason = isAbort
        ? `Request timed out after ${timeoutMs}ms`
        : fetchErr instanceof Error
          ? fetchErr.message
          : 'Network error';

      if (attempt < maxRetries) {
        const delay = retryDelayMs({
          attempt,
          baseDelayMs: this.cfg.retry.baseDelayMs,
          maxDelayMs: this.cfg.retry.maxDelayMs,
          retryAfter: undefined,
        });
        await sleep(delay);
        attempt++;
        continue;
      }

      throw isAbort
        ? new NorbixTimeoutError({ message: reason, url, raw: fetchErr })
        : new NorbixNetworkError({ message: reason, url, raw: fetchErr });
    }
  }
}

function isRetryableStatus(status: number): boolean {
  // 429 + transient server errors
  return status === 429 || (status >= 500 && status <= 599);
}

function retryDelayMs(args: {
  attempt: number;
  baseDelayMs: number;
  maxDelayMs: number;
  retryAfter: string | undefined;
}): number {
  const retryAfter = parseRetryAfterMs(args.retryAfter);
  if (retryAfter !== undefined) return clamp(retryAfter, 0, args.maxDelayMs);

  // Exponential backoff with jitter.
  const exp = args.baseDelayMs * Math.pow(2, args.attempt);
  const jitter = Math.random() * args.baseDelayMs;
  return clamp(Math.round(exp + jitter), 0, args.maxDelayMs);
}

function parseRetryAfterMs(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const s = Number(value);
  if (Number.isFinite(s) && s >= 0) return Math.round(s * 1000);
  const dt = Date.parse(value);
  if (!Number.isNaN(dt)) {
    return Math.max(0, dt - Date.now());
  }
  return undefined;
}

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

async function sleep(ms: number): Promise<void> {
  if (ms <= 0) return;
  await new Promise((r) => setTimeout(r, ms));
}

function buildUrlAndBody(args: {
  baseUrl: string;
  path: string;
  method: HttpVerb;
  version: string;
  request: Record<string, unknown>;
  pathParams: string[];
}): { url: string; body: string | undefined } {
  let path = args.path.replace('{version}', encodeURIComponent(args.version));

  const consumedFromBody = new Set<string>();
  const tokenRegex = /\{([^/{}]+)\}/g;
  path = path.replace(tokenRegex, (_match, token: string) => {
    const value = args.request[token];
    if (value === undefined || value === null) {
      throw new NorbixError({
        message: `Missing path parameter "${token}" for ${args.path}`,
        status: 0,
        code: 'NORBIX_MISSING_PATH_PARAM',
      });
    }
    consumedFromBody.add(token);
    return encodeURIComponent(String(value));
  });
  for (const p of args.pathParams) {
    if (p in args.request) consumedFromBody.add(p);
  }

  const remaining: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(args.request)) {
    if (consumedFromBody.has(k)) continue;
    if (v === undefined) continue;
    remaining[k] = v;
  }

  const url = joinUrl(args.baseUrl, path);

  if (args.method === 'GET' || args.method === 'DELETE') {
    const qs = toQueryString(remaining);
    return { url: qs ? `${url}?${qs}` : url, body: undefined };
  }
  const body = Object.keys(remaining).length > 0 ? JSON.stringify(remaining) : undefined;
  return { url, body };
}

function joinUrl(base: string, path: string): string {
  const b = base.endsWith('/') ? base.slice(0, -1) : base;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${b}${p}`;
}

function toQueryString(obj: Record<string, unknown>): string {
  const parts: string[] = [];
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null) continue;
    if (Array.isArray(v)) {
      for (const item of v)
        parts.push(`${encodeURIComponent(k)}=${encodeURIComponent(stringify(item))}`);
    } else if (typeof v === 'object') {
      parts.push(`${encodeURIComponent(k)}=${encodeURIComponent(JSON.stringify(v))}`);
    } else {
      parts.push(`${encodeURIComponent(k)}=${encodeURIComponent(stringify(v))}`);
    }
  }
  return parts.join('&');
}

function stringify(v: unknown): string {
  if (v instanceof Date) return v.toISOString();
  return String(v);
}
