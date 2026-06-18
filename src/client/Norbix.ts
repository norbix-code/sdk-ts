import { ApiNamespace } from '../api/index.js';
import { HubNamespace } from '../hub/index.js';
import { CollectionResource } from '../resources/collection.js';
import { NorbixSseClient } from '../sse/client.js';
import { NorbixInboxClient } from '../sse/inbox.js';
import type { NorbixSseClientOptions } from '../sse/types.js';

import { loadEnvConfig } from './env.js';
import { Transport } from './transport.js';
import type {
  LoginCredentials,
  LoginResponse,
  NorbixConfig,
  ResolvedNorbixConfig,
} from './types.js';

const DEFAULT_BASE_URL_API = 'https://api.norbix.dev';
const DEFAULT_BASE_URL_HUB = 'https://hub.norbix.dev';
const DEFAULT_VERSION = 'v2';
const DEFAULT_TIMEOUT_MS = 30_000;
const DEFAULT_RETRY = { maxRetries: 2, baseDelayMs: 250, maxDelayMs: 5_000 } as const;

/**
 * Single entry point for the Norbix SDK.
 *
 * ```ts
 * // Service-to-service: long-lived API key
 * const norbix = new Norbix({ apiKey: '...', projectId: '...' });
 *
 * // User-on-behalf-of: log in, then act as the user
 * const norbix = new Norbix({ projectId: '...' });
 * await norbix.login({ userName: 'alice', password: '...' });
 * await norbix.api.database.find({ collectionName: 'orders' });
 *
 * // Zero-config: read everything from NORBIX_* env vars
 * const norbix = new Norbix();
 * ```
 */
export class Norbix {
  public readonly api: ApiNamespace;
  public readonly hub: HubNamespace;

  private cfg: ResolvedNorbixConfig;
  private transport: Transport;

  /**
   * Whether each base URL is the SDK default (not user/env supplied). Only
   * default base URLs are ever rewritten when a region is set; a custom
   * `baseUrl` is never touched.
   */
  private readonly usesDefaultBaseUrl: { api: boolean; hub: boolean };

  /** Create a client using explicit configuration (readable alternative to `new Norbix(...)`). */
  static create(
    config: NorbixConfig = {},
    opts?: { envSource?: Record<string, string | undefined> },
  ) {
    return new Norbix(config, opts);
  }

  /**
   * Create a client from environment variables only (still allows injecting envSource for tests).
   * Equivalent to `new Norbix({}, opts)`.
   */
  static fromEnv(opts?: { envSource?: Record<string, string | undefined> }) {
    return new Norbix({}, opts);
  }

  constructor(
    config: NorbixConfig = {},
    opts?: { envSource?: Record<string, string | undefined> },
  ) {
    const env = loadEnvConfig(opts?.envSource);

    const fetchImpl = config.fetch ?? globalThis.fetch;
    if (typeof fetchImpl !== 'function') {
      throw new Error(
        'Norbix: no `fetch` implementation found. Pass `config.fetch` (e.g. node-fetch) on Node < 18.',
      );
    }

    const projectId = config.projectId ?? env.projectId;
    if (!projectId) {
      throw new Error(
        'Norbix: `projectId` is required. Pass it to the constructor or set NORBIX_PROJECT_ID.',
      );
    }

    const baseUrlApi = config.baseUrl?.api ?? env.apiUrl ?? DEFAULT_BASE_URL_API;
    const baseUrlHub = config.baseUrl?.hub ?? env.hubUrl ?? DEFAULT_BASE_URL_HUB;
    assertHttpUrl('baseUrl.api', baseUrlApi);
    assertHttpUrl('baseUrl.hub', baseUrlHub);
    this.usesDefaultBaseUrl = {
      api: config.baseUrl?.api === undefined && env.apiUrl === undefined,
      hub: config.baseUrl?.hub === undefined && env.hubUrl === undefined,
    };

    const timeoutMs = config.timeoutMs ?? env.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) {
      throw new Error(
        `Norbix: invalid timeoutMs "${String(timeoutMs)}" (must be a positive number)`,
      );
    }

    const apiVersion = config.apiVersion ?? env.apiVersion ?? DEFAULT_VERSION;
    const hubVersion = config.hubVersion ?? env.hubVersion ?? DEFAULT_VERSION;
    if (!apiVersion) throw new Error('Norbix: apiVersion must be a non-empty string');
    if (!hubVersion) throw new Error('Norbix: hubVersion must be a non-empty string');

    const retry = {
      maxRetries: config.retry?.maxRetries ?? DEFAULT_RETRY.maxRetries,
      baseDelayMs: config.retry?.baseDelayMs ?? DEFAULT_RETRY.baseDelayMs,
      maxDelayMs: config.retry?.maxDelayMs ?? DEFAULT_RETRY.maxDelayMs,
    };
    if (!Number.isFinite(retry.maxRetries) || retry.maxRetries < 0) {
      throw new Error(
        `Norbix: invalid retry.maxRetries "${String(retry.maxRetries)}" (must be >= 0)`,
      );
    }
    if (!Number.isFinite(retry.baseDelayMs) || retry.baseDelayMs < 0) {
      throw new Error(
        `Norbix: invalid retry.baseDelayMs "${String(retry.baseDelayMs)}" (must be >= 0)`,
      );
    }
    if (!Number.isFinite(retry.maxDelayMs) || retry.maxDelayMs < 0) {
      throw new Error(
        `Norbix: invalid retry.maxDelayMs "${String(retry.maxDelayMs)}" (must be >= 0)`,
      );
    }

    this.cfg = {
      apiKey: config.apiKey ?? env.apiKey,
      bearerToken: config.bearerToken ?? env.bearerToken,
      projectId,
      accountId: config.accountId ?? env.accountId,
      env: config.env ?? env.env ?? 'PROD',
      region: config.region ?? env.region,
      baseUrl: {
        api: baseUrlApi,
        hub: baseUrlHub,
      },
      apiVersion,
      hubVersion,
      timeoutMs,
      fetch: fetchImpl.bind(globalThis),
      defaultHeaders: config.defaultHeaders ?? {},
      onRequest: config.onRequest,
      onResponse: config.onResponse,
      retry,
      refreshBearerToken: config.refreshBearerToken,
      middleware: config.middleware ?? [],
    };

    this.applyRegionToBaseUrls();

    this.transport = new Transport(this.cfg);
    this.api = new ApiNamespace(this.transport);
    this.hub = new HubNamespace(this.transport);
  }

  /**
   * (Re)compose the base URLs for the configured region. Only the SDK's
   * default URLs are ever rewritten — `https://api.norbix.dev` becomes
   * `https://nb-eu-germany.api.norbix.dev` — and clearing the region restores
   * the defaults. A user-supplied custom base URL is never touched.
   */
  private applyRegionToBaseUrls(): void {
    if (this.usesDefaultBaseUrl.api) {
      this.cfg.baseUrl.api = this.cfg.region
        ? composeRegionalUrl(this.cfg.region, DEFAULT_BASE_URL_API)
        : DEFAULT_BASE_URL_API;
    }
    if (this.usesDefaultBaseUrl.hub) {
      this.cfg.baseUrl.hub = this.cfg.region
        ? composeRegionalUrl(this.cfg.region, DEFAULT_BASE_URL_HUB)
        : DEFAULT_BASE_URL_HUB;
    }
  }

  /**
   * Exchange credentials for a JWT bearer token. On success, the token is
   * stored on the client and used for every subsequent call (it takes
   * precedence over any configured `apiKey`). The full /auth response is
   * returned so the caller can also access refreshToken, userId, etc.
   *
   * The login call itself runs unauthenticated — no Authorization header is
   * sent for /auth even if a token is already configured.
   */
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    const body: Record<string, unknown> = {
      provider: credentials.provider ?? 'credentials',
      ...credentials,
    };
    // Don't leak the explicit `provider` undefined back into the body.
    if (!body.provider) delete body.provider;

    const res = await this.transport.send<LoginResponse>({
      target: 'api',
      path: '/auth',
      method: 'POST',
      request: body,
      scope: 'unauthenticated',
    });

    if (res?.bearerToken) {
      this.cfg.bearerToken = res.bearerToken;
    }
    return res;
  }

  /**
   * Clear the JWT bearer token. If an `apiKey` was configured, the client
   * falls back to it; otherwise subsequent calls throw NORBIX_NOT_AUTHENTICATED.
   */
  logout(): void {
    this.cfg.bearerToken = undefined;
  }

  /** Replace the bearer token without rebuilding the client. */
  setBearerToken(token: string | undefined): void {
    this.cfg.bearerToken = token;
  }

  /** Replace the API key without rebuilding the client. */
  setApiKey(apiKey: string | undefined): void {
    this.cfg.apiKey = apiKey;
  }

  /** Switch the client to a different project (and optionally account) at runtime. */
  setScope(scope: { projectId: string; accountId?: string }): void {
    this.cfg.projectId = scope.projectId;
    this.cfg.accountId = scope.accountId;
  }

  /**
   * Switch the project environment all subsequent requests target (sent as the
   * `norbix-env` header). Pass `'PROD'` or `undefined` to return to production.
   * Per-call `env` overrides still take precedence for individual requests.
   */
  setEnv(env: string | undefined): void {
    this.cfg.env = env ?? 'PROD';
  }

  /** Current project environment the client targets (defaults to `PROD`). */
  getEnv(): string {
    return this.cfg.env;
  }

  /**
   * Switch the Norbix region all subsequent requests target (sent as the
   * `nb-region` header). Pass `undefined` to clear the region — no header is
   * sent when no region is set. When the client uses the SDK's default base
   * URLs, the regional URL is recomposed under the same rule as construction;
   * a custom `baseUrl` is never rewritten. Per-call `region` overrides still
   * take precedence for individual requests (header only — never the URL).
   */
  setRegion(region: string | undefined): void {
    this.cfg.region = region || undefined;
    this.applyRegionToBaseUrls();
  }

  /** Current Norbix region the client targets (e.g. `nb-eu-germany`), if any. */
  getRegion(): string | undefined {
    return this.cfg.region;
  }

  /** True when the client has either a JWT bearer token or an API key. */
  isAuthenticated(): boolean {
    return Boolean(this.cfg.bearerToken ?? this.cfg.apiKey);
  }

  /**
   * Ergonomic database access wrapper over `norbix.api.database.*`.
   * Keeps the generated API available, but gives a resource-first call style.
   */
  collection<TItem = unknown>(collectionName: string): CollectionResource<TItem> {
    if (!collectionName) throw new Error('Norbix: collectionName must be a non-empty string');
    return new CollectionResource<TItem>(this.api.database, collectionName);
  }

  /**
   * Open a realtime / InApp SSE client using this client's hub URL, auth
   * token, and project. Pass `channels` for broadcast/project scope, or omit
   * them and rely on the user token for user-scoped delivery.
   *
   * ```ts
   * import { inAppChannel } from '@norbix.ai/ts/sse';
   * const sse = norbix.sse({ channels: [inAppChannel(norbix.getConfig().projectId)] });
   * sse.onInApp((env) => console.log(env.eventName, env.payload));
   * await sse.connect();
   * ```
   */
  sse(options: Partial<Omit<NorbixSseClientOptions, 'hubUrl'>> = {}): NorbixSseClient {
    return new NorbixSseClient({
      hubUrl: this.cfg.baseUrl.hub,
      hubVersion: this.cfg.hubVersion,
      token: this.cfg.bearerToken ?? this.cfg.apiKey,
      projectId: this.cfg.projectId,
      fetchImpl: this.cfg.fetch,
      ...options,
    });
  }

  /** Notification inbox (bell) client using this client's hub URL + auth. */
  inbox(): NorbixInboxClient {
    return new NorbixInboxClient({
      hubUrl: this.cfg.baseUrl.hub,
      hubVersion: this.cfg.hubVersion,
      token: this.cfg.bearerToken ?? this.cfg.apiKey,
      projectId: this.cfg.projectId,
      fetchImpl: this.cfg.fetch,
    });
  }

  /** Read-only snapshot of the current config (useful for tests/diagnostics). */
  getConfig(): Readonly<ResolvedNorbixConfig> {
    return this.cfg;
  }

  /**
   * Snapshot suitable for logs/telemetry. Sensitive fields are redacted.
   * Use `getConfig()` only in tests or trusted diagnostics.
   */
  getRedactedConfig(): Readonly<Omit<ResolvedNorbixConfig, 'fetch'>> {
    const { fetch: _fetch, ...rest } = this.cfg;
    return {
      ...rest,
      apiKey: rest.apiKey ? redactSecret(rest.apiKey) : undefined,
      bearerToken: rest.bearerToken ? redactSecret(rest.bearerToken) : undefined,
    };
  }

  /**
   * Create a new client for per-request scoping (SSR/multi-tenant safe).
   * The new instance does not share mutable auth or scope with the original.
   */
  with(
    overrides: Pick<
      NorbixConfig,
      'apiKey' | 'bearerToken' | 'projectId' | 'accountId' | 'env' | 'region'
    >,
  ): Norbix {
    const next: NorbixConfig = {
      apiKey: overrides.apiKey ?? this.cfg.apiKey,
      bearerToken: overrides.bearerToken ?? this.cfg.bearerToken,
      projectId: overrides.projectId ?? this.cfg.projectId,
      accountId: overrides.accountId ?? this.cfg.accountId,
      env: overrides.env ?? this.cfg.env,
      region: overrides.region ?? this.cfg.region,
      // Pass `undefined` for SDK-default base URLs so the new instance
      // recomposes them for its own (possibly overridden) region instead of
      // inheriting a URL composed for the old region as if it were custom.
      baseUrl: {
        api: this.usesDefaultBaseUrl.api ? undefined : this.cfg.baseUrl.api,
        hub: this.usesDefaultBaseUrl.hub ? undefined : this.cfg.baseUrl.hub,
      },
      apiVersion: this.cfg.apiVersion,
      hubVersion: this.cfg.hubVersion,
      timeoutMs: this.cfg.timeoutMs,
      fetch: this.cfg.fetch,
      defaultHeaders: this.cfg.defaultHeaders,
      onRequest: this.cfg.onRequest,
      onResponse: this.cfg.onResponse,
    };
    // We pass envSource={} to guarantee this new instance is derived only from explicit inputs.
    return new Norbix(next, { envSource: {} });
  }
}

function assertHttpUrl(field: string, value: string): void {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`Norbix: invalid ${field} "${value}" (must be an absolute http(s) URL)`);
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new Error(`Norbix: invalid ${field} "${value}" (must be an absolute http(s) URL)`);
  }
}

/**
 * Compose a regional base URL by prefixing the region code as a subdomain:
 * `https://api.norbix.dev` + `nb-eu-germany` → `https://nb-eu-germany.api.norbix.dev`.
 */
function composeRegionalUrl(region: string, defaultUrl: string): string {
  return defaultUrl.replace('://', `://${region}.`);
}

function redactSecret(secret: string): string {
  if (secret.length <= 8) return '********';
  return `${secret.slice(0, 3)}…${secret.slice(-3)}`;
}
