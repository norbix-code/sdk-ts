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
  baseUrl: { api: string; hub: string };
  apiVersion: string;
  hubVersion: string;
  timeoutMs: number;
  fetch: typeof globalThis.fetch;
  defaultHeaders: Record<string, string>;
  onRequest?: NorbixConfig['onRequest'];
  onResponse?: NorbixConfig['onResponse'];
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
