/**
 * Configuration for the Norbix client.
 *
 * Auth modes:
 *  - **API key** — long-lived, server-side. Set `apiKey` in code or
 *    `NORBIX_API_KEY` in the environment. Acts as a service identity.
 *  - **JWT bearer** — short-lived, on behalf of a user. Set `bearerToken`
 *    directly, or call `norbix.login(...)` to exchange credentials for one.
 *  - **Cookie session** — a native Norbix session, no token at all. Set
 *    `auth` (see {@link NorbixAuthMode}); it cannot be combined with the two
 *    above and it ignores `NORBIX_API_KEY` / `NORBIX_BEARER_TOKEN`.
 *
 * If both are configured, the bearer token wins (most specific wins). If
 * neither is set at construction, you must call `login()` before making any
 * other call — otherwise the first request throws.
 *
 * Scoping rule:
 *  - `projectId` is required (or `NORBIX_PROJECT_ID` env var).
 *  - `accountId` is optional. When set, it is sent as the
 *    `norbix-account-id` header. Sign-up, accepting an invitation, listing
 *    regions and verifying the account need no token and no `accountId`
 *    (`verifyAccount` takes the account id in its request).
 *
 * Env vars (Node only — silently ignored in the browser):
 *   NORBIX_API_KEY
 *   NORBIX_BEARER_TOKEN
 *   NORBIX_PROJECT_ID
 *   NORBIX_ACCOUNT_ID
 *   NORBIX_REGION
 *   NORBIX_LANGUAGE
 *   NORBIX_API_URL
 *   NORBIX_HUB_URL
 *   NORBIX_API_VERSION
 *   NORBIX_HUB_VERSION
 *   NORBIX_TIMEOUT_MS
 */
export interface NorbixConfig {
  /**
   * Run the client without a token. Leave unset for the API key / JWT modes.
   *
   * In every mode here no `Authorization` header ever leaves the client, no
   * call is refused up front for lack of a token, `refreshBearerToken` is never
   * called, redirects are not followed (a 3xx is a `NORBIX_UNEXPECTED_REDIRECT`
   * error) and `retry.maxRetries` defaults to 0.
   */
  auth?: NorbixAuthMode;

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
   * Optional account ID, sent as the `norbix-account-id` header. Falls back
   * to `NORBIX_ACCOUNT_ID`.
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
   * composes the regional URL (`https://nb-eu-germany.api.norbix.ai`); a
   * user-supplied custom `baseUrl` is never rewritten.
   *
   * Override per call via the `region` option on any request (header only —
   * never changes the URL), or switch the client default at runtime with
   * `setRegion(...)`.
   */
  region?: string;

  /**
   * Language the caller wants answers in, sent as the standard
   * `Accept-Language` header on every request — a single tag (`lt`) or a
   * weighted list (`lt-LT, en;q=0.8`). The gateway picks the best match among
   * the project's languages and falls back to the project's default language
   * when nothing matches; it says which one it used in `Content-Language`
   * (see `onResponse`). There is no default — when unset no header is sent.
   * `Accept-Language` is the only language input: the old `cultureCode`
   * request field and the `CultureCode` / `norbix-language` headers are gone.
   * Falls back to `NORBIX_LANGUAGE`.
   *
   * Override per call via the `language` option on any request, or switch the
   * client default at runtime with `setLanguage(...)`.
   */
  language?: string;

  /**
   * Override default base URLs. Useful for self-hosted deployments,
   * staging environments, or pointing the SDK at localhost in tests.
   * Each URL falls back to its env var (`NORBIX_API_URL`, `NORBIX_HUB_URL`).
   */
  baseUrl?: {
    api?: string;
    hub?: string;
  };

  /** API version segment used in `{version}` route tokens. Defaults to `v3`. */
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

  /**
   * Hook called once per response, regardless of success/failure.
   * `contentLanguage` is the `Content-Language` the gateway answered with (the
   * language it actually used for translated fields), when it sent one.
   */
  onResponse?: (info: {
    url: string;
    status: number;
    durationMs: number;
    contentLanguage?: string;
  }) => void;

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
   *
   * Project users get no refresh token from sign-in: when their bearer token
   * expires the call fails with 401 and the app shows sign-in again.
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
 * The token-free client modes.
 *
 *  - `none` — anonymous: public routes and `api.auth.signIn`, in a Node process.
 *  - `session` — Node only. `sessionId` comes from `api.auth.signIn` and is sent
 *    as the `ss-id` cookie. One client per user: never share it between requests
 *    of different users.
 *  - `browserSession` — browser only, same-site hosts only. The browser holds the
 *    cookie (`credentials: 'include'`); the SDK never sees it.
 */
export type NorbixAuthMode =
  { type: 'none' } | { type: 'session'; sessionId: string } | { type: 'browserSession' };

/**
 * Internal resolved config. The Norbix class fills required fields from
 * NorbixConfig + env vars + defaults before constructing the transport.
 */
export interface ResolvedNorbixConfig {
  auth?: NorbixAuthMode;
  apiKey?: string;
  bearerToken?: string;
  projectId: string;
  accountId?: string;
  /** Resolved project environment. Defaults to `PROD`. */
  env: string;
  /** Resolved Norbix region (e.g. `nb-eu-germany`). No default — may be unset. */
  region?: string;
  /** Resolved `Accept-Language` value. No default — may be unset. */
  language?: string;
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
  /**
   * Not sent to project users — on 401 the app shows sign-in again. Only
   * account (Hub) sign-ins may still carry one.
   */
  refreshToken?: string;
  /** The user's id, `usr_…`. */
  userId?: string;
  userName?: string;
  displayName?: string;
  sessionId?: string;
  // ServiceStack adds many more — pass-through.
  [key: string]: unknown;
}

/** Credentials for `norbix.api.auth.signIn(...)` and `browserSignIn(...)`. */
export interface SignInCredentials {
  userName: string;
  password: string;
}

/**
 * What `norbix.api.auth.signIn(...)` answers. No JWT is issued: a cookie session
 * has no use for one, and a JWT stays valid after sign-out.
 */
export interface SignInResult {
  /** The session credential. Send it as `auth: { type: 'session', sessionId }`. */
  sessionId: string;
  /** The user's id, `usr_…`. */
  userId?: string;
  /** Version of the credentials that were just verified. Changes with the password. */
  credentialVersion?: string;
  /**
   * True when the typed password breaks the project's current password rule
   * (the rule got stricter after the password was set). The sign-in still
   * succeeded: send the user to change their password. Absent otherwise.
   */
  passwordChangeRequired?: boolean;
}

/**
 * What `norbix.api.auth.browserSignIn(...)` answers: public user data only. The
 * browser holds the session cookie, and a backend in front of Norbix may answer
 * less than this.
 */
export interface BrowserSignInResult {
  /** The user's id, `usr_…`. */
  userId?: string;
  displayName?: string;
  /** Version of the credentials that were just verified. Changes with the password. */
  credentialVersion?: string;
  /**
   * True when the typed password breaks the project's current password rule
   * (the rule got stricter after the password was set). The sign-in still
   * succeeded: send the user to change their password. Absent otherwise.
   */
  passwordChangeRequired?: boolean;
}

/**
 * A social sign-in provider the gateway knows. Any case is accepted; a project
 * offers only the providers it has an enabled Membership integration for (the
 * public config lists them in `auth.socialSignIn`).
 */
export type SocialProvider =
  'google' | 'apple' | 'microsoft' | 'github' | 'facebook' | 'x' | 'okta';

/** Options of `api.auth.socialSignInUrl(...)` and `redirectToSocialSignIn(...)`. */
export interface SocialSignInUrlOptions {
  /**
   * Name of the integration's OAuth mode (which app page to come back to, and
   * which role a new user may get). Default: the only mode, else the first by name.
   */
  mode?: string;
  /**
   * App page to come back to, on success and on failure. Absolute https (http
   * only on localhost), and its origin must be one of the project's allowed
   * origins. Wins over the mode's pages.
   */
  returnUrl?: string;
  /** Project environment. Default: the client's `env`; PROD adds nothing to the URL. */
  env?: string;
  /**
   * PKCE S256 challenge (43 characters, see `createPkcePair`). The exchange
   * then needs the matching `codeVerifier`. CM-ERRORS-MEMBERSHIP-059 when it is
   * not a valid S256 challenge.
   */
  codeChallenge?: string;
}

/** Options of `api.auth.redirectToSocialSignIn(...)`: the URL options plus PKCE. */
export interface SocialRedirectOptions extends Omit<SocialSignInUrlOptions, 'codeChallenge'> {
  /** Default true: make a verifier, keep it in sessionStorage and send its challenge. */
  pkce?: boolean;
}

/** Options of `api.membership.redirectToLinkIdentity(...)`. */
export interface LinkRedirectOptions {
  mode?: string;
  returnUrl?: string;
  /** Default true: make a verifier, keep it in sessionStorage and send its challenge. */
  pkce?: boolean;
}

/**
 * What `api.auth.exchangeSocialCode(...)` answers: the same JWT a project
 * password sign-in gives (14 days, no refresh token, no cookie session).
 */
export interface SocialSignInResult {
  /** The JWT. Use it as a bearer token: `norbix.setBearerToken(bearerToken)`. */
  bearerToken: string;
  /** The user's id, `usr_…`. */
  userId?: string;
  displayName?: string;
  /** When the JWT expires (ISO 8601). */
  expiresAt?: string;
  /** Version of the user's credentials when the token was issued. */
  credentialVersion?: string;
}

/**
 * What the app page that the gateway sends the browser back to holds, read by
 * `api.auth.readSocialReturn(...)`:
 *  - `signIn`: a one-time sign-in code (2 minutes, once) — exchange it;
 *  - `link`: a one-time link code — finish with `api.membership.finishLinkIdentity`
 *    as the same signed-in user who started the link;
 *  - `error`: the gateway refused; `error` is a reason such as `email_in_use`,
 *    `invite_only`, `user_blocked`, `access_denied` or `state_mismatch`;
 *  - `none`: the page was opened without a social sign-in answer.
 */
export type SocialReturn =
  | { kind: 'signIn'; provider: string; code: string }
  | { kind: 'link'; provider: string; code: string }
  | { kind: 'error'; error: string; provider?: string }
  | { kind: 'none' };

/** What `api.membership.completeLinkIdentity(...)` answers. */
export type LinkIdentityCompletion =
  | { kind: 'linked'; provider: string }
  | { kind: 'signIn'; provider: string; code: string }
  | { kind: 'error'; error: string; provider?: string }
  | { kind: 'none' };

/** What `api.auth.completeSocialSignIn(...)` answers. */
export type SocialSignInCompletion =
  | { kind: 'signedIn'; provider: string; result: SocialSignInResult }
  | { kind: 'link'; provider: string; code: string }
  | { kind: 'error'; error: string; provider?: string }
  | { kind: 'none' };
