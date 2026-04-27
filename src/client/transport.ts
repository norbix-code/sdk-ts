import { fromResponse, NorbixError } from './errors.js';
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
}

export interface RequestOverrideOptions {
  /** Per-call bearer token override, useful for SSR and multi-tenant request scopes. */
  bearerToken?: string;
  /** Per-call timeout override. */
  timeoutMs?: number;
}

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

    if (body !== undefined) headers.set('Content-Type', 'application/json');

    const controller = new AbortController();
    const timeoutMs = opts.timeoutMs ?? this.cfg.timeoutMs;
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    const startedAt = Date.now();

    this.cfg.onRequest?.({ url, method: opts.method, headers });

    let res: Response;
    try {
      res = await this.cfg.fetch(url, {
        method: opts.method,
        headers,
        body,
        signal: controller.signal,
      });
    } catch (err) {
      clearTimeout(timer);
      const reason =
        err instanceof DOMException && err.name === 'AbortError'
          ? `Request timed out after ${timeoutMs}ms`
          : err instanceof Error
            ? err.message
            : 'Network error';
      throw new NorbixError({ message: reason, status: 0, code: 'NORBIX_NETWORK_ERROR', url });
    }

    clearTimeout(timer);
    this.cfg.onResponse?.({ url, status: res.status, durationMs: Date.now() - startedAt });

    if (!res.ok) {
      throw await fromResponse(res, url);
    }

    if (res.status === 204) return undefined as TResponse;
    const text = await res.text();
    if (!text) return undefined as TResponse;
    return JSON.parse(text) as TResponse;
  }
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
    const value = lookupCaseInsensitive(args.request, token);
    if (value === undefined || value === null) {
      throw new NorbixError({
        message: `Missing path parameter "${token}" for ${args.path}`,
        status: 0,
        code: 'NORBIX_MISSING_PATH_PARAM',
      });
    }
    consumedFromBody.add(matchKey(args.request, token) ?? token);
    return encodeURIComponent(String(value));
  });
  for (const p of args.pathParams) {
    const k = matchKey(args.request, p);
    if (k) consumedFromBody.add(k);
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

function lookupCaseInsensitive(obj: Record<string, unknown>, key: string): unknown {
  const k = matchKey(obj, key);
  return k === undefined ? undefined : obj[k];
}

function matchKey(obj: Record<string, unknown>, key: string): string | undefined {
  if (key in obj) return key;
  const lower = key.toLowerCase();
  for (const k of Object.keys(obj)) {
    if (k.toLowerCase() === lower) return k;
  }
  return undefined;
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
