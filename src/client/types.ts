/**
 * Configuration for the Norbix client.
 *
 * Auth modes:
 *  - **API key** — long-lived, server-side. Set `apiKey` in code or
 *    `NORBIX_API_KEY` in the environment. Acts as a service identity.
 *  - **JWT bearer** — short-lived, on behalf of a user. Set `bearerToken`
 *    directly, or call `norbix.login(...)` to exchange credentials for one.
 *
 * If both are configured, the bearer token wins (most specific wins). If
 * neither is set at construction, you must call `login()` before making any
 * other call — otherwise the first request throws.
 *
 * Scoping rule:
 *  - `projectId` is required (or `NORBIX_PROJECT_ID` env var).
 *  - `accountId` is optional. When set, account-scoped Hub endpoints
 *    (team invite, billing portal, account verify, ...) become callable.
 *
 * Env vars (Node only — silently ignored in the browser):
 *   NORBIX_API_KEY
 *   NORBIX_BEARER_TOKEN
 *   NORBIX_PROJECT_ID
 *   NORBIX_ACCOUNT_ID
 *   NORBIX_REGION
 *   NORBIX_API_URL
 *   NORBIX_HUB_URL
 *   NORBIX_API_VERSION
 *   NORBIX_HUB_VERSION
 *   NORBIX_TIMEOUT_MS
 */
export interface NorbixConfig {
  /**
   * Long-lived API key, typically used for service-to-service calls. The SDK
   * sends it as `Authorization: Bearer <apiKey>` until a JWT bearer token
   * takes over (set explicitly or via `login`). Falls back to `NORBIX_API_KEY`.
   */
  apiKey?: string;

  /**
   * Short-lived JWT bearer token, typically obtained from a login flow.
   * Takes precedence over `apiKey` when both are set. Falls back to
   * `NORBIX_BEARER_TOKEN`.
   */
  bearerToken?: string;

  /** Project the SDK operates against. Falls back to `NORBIX_PROJECT_ID`. */
  projectId?: string;

  /**
   * Optional account ID. Required for Hub account-scoped endpoints
   * (team, billing, account profile). Falls back to `NORBIX_ACCOUNT_ID`.
   */
  accountId?: string;

  /**
   * Project environment every request targets, sent as the `norbix-env`
   * header. Each project owns a set of named environments; `PROD` always
   * exists and is the default. A non-PROD env (e.g. `TEST`, `STAGING`) scopes
   * every read and write to that environment's integrations — there is no
   * cross-env fallback. Defaults to `PROD`. Falls back to `NORBIX_ENV`.
   *
   * Override per call via the `env` option on any request, or switch the
   * client default at runtime with `setEnv(...)`.
   */
  env?: string;

  /**
   * Norbix region every request targets, sent as the `nb-region` header
   * (a region code, e.g. `nb-eu-germany`). Unlike `env`, there is no default
   * region — when unset, no header is sent and the backend picks the project's
   * primary region. Falls back to `NORBIX_REGION`.
   *
   * When the client uses the SDK's default base URLs, setting a region also
   * composes the regional URL (`https://nb-eu-germany.api.norbix.dev`); a
   * user-supplied custom `baseUrl` is never rewritten.
   *
   * Override per call via the `region` option on any request (header only —
   * never changes the URL), or switch the client default at runtime with
   * `setRegion(...)`.
   */
  region?: string;

  /**
   * Override default base URLs. Useful for self-hosted deployments,
   * staging environments, or pointing the SDK at localhost in tests.
   * Each URL falls back to its env var (`NORBIX_API_URL`, `NORBIX_HUB_URL`).
   */
  baseUrl?: {
    api?: string;
    hub?: string;
  };

  /** API version segment used in `{version}` route tokens. Defaults to `v2`. */
  apiVersion?: string;
  hubVersion?: string;

  /** Request timeout in milliseconds. Defaults to 30_000. */
  timeoutMs?: number;

  /**
   * Optional fetch implementation. Useful for testing (`vi.fn()`) or for
   * environments where global `fetch` is unavailable.
   */
  fetch?: typeof globalThis.fetch;

  /** Extra headers attached to every request. */
  defaultHeaders?: Record<string, string>;

  /** Hook called once per request before it is sent. */
  onRequest?: (info: { url: string; method: string; headers: Headers }) => void;

  /** Hook called once per response, regardless of success/failure. */
  onResponse?: (info: { url: string; status: number; durationMs: number }) => void;

  /**
   * Transport retry policy for transient failures (429/5xx/network/timeout).
   * Defaults are conservative; set to 0 to disable.
   */
  retry?: {
    /** Number of retries after the initial attempt. Default: 2 */
    maxRetries?: number;
    /** Base delay for exponential backoff. Default: 250 */
    baseDelayMs?: number;
    /** Maximum delay cap. Default: 5_000 */
    maxDelayMs?: number;
  };

  /**
   * Optional token refresh callback. If provided and a request fails with 401,
   * the transport will call this to obtain a new bearer token and retry once.
   *
   * The callback should return the new JWT bearer token string (without "Bearer ").
   */
  refreshBearerToken?: (info: { url: string; status: 401 }) => Promise<string | undefined>;

  /**
   * Transport middleware chain. Each middleware can observe or mutate the
   * request and response, and can choose to retry/short-circuit if desired.
   */
  middleware?: Array<
    (ctx: {
      url: string;
      init: RequestInit;
      attempt: number;
      next: () => Promise<Response>;
    }) => Promise<Response>
  >;
}

/**
 * Internal resolved config. The Norbix class fills required fields from
 * NorbixConfig + env vars + defaults before constructing the transport.
 */
export interface ResolvedNorbixConfig {
  apiKey?: string;
  bearerToken?: string;
  projectId: string;
  accountId?: string;
  /** Resolved project environment. Defaults to `PROD`. */
  env: string;
  /** Resolved Norbix region (e.g. `nb-eu-germany`). No default — may be unset. */
  region?: string;
  baseUrl: { api: string; hub: string };
  apiVersion: string;
  hubVersion: string;
  timeoutMs: number;
  fetch: typeof globalThis.fetch;
  defaultHeaders: Record<string, string>;
  onRequest?: NorbixConfig['onRequest'];
  onResponse?: NorbixConfig['onResponse'];
  retry: Required<NonNullable<NorbixConfig['retry']>>;
  refreshBearerToken?: NorbixConfig['refreshBearerToken'];
  middleware: NonNullable<NorbixConfig['middleware']>;
}

/** Credentials for `norbix.login(...)`. Mirrors the /auth Authenticate DTO. */
export interface LoginCredentials {
  /** AuthProvider, e.g. 'credentials'. Defaults to 'credentials' if omitted. */
  provider?: string;
  userName?: string;
  password?: string;
  rememberMe?: boolean;
  /** OAuth-style access token + secret, used for federated providers. */
  accessToken?: string;
  accessTokenSecret?: string;
  meta?: Record<string, string>;
}

/** Shape of a successful /auth response. Just the fields the SDK uses. */
export interface LoginResponse {
  bearerToken?: string;
  refreshToken?: string;
  userId?: string;
  userName?: string;
  displayName?: string;
  sessionId?: string;
  // ServiceStack adds many more — pass-through.
  [key: string]: unknown;
}
