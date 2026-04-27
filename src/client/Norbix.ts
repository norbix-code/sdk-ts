import { ApiNamespace } from '../api/index.js';
import { HubNamespace } from '../hub/index.js';

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

    this.cfg = {
      apiKey: config.apiKey ?? env.apiKey,
      bearerToken: config.bearerToken ?? env.bearerToken,
      projectId,
      accountId: config.accountId ?? env.accountId,
      baseUrl: {
        api: config.baseUrl?.api ?? env.apiUrl ?? DEFAULT_BASE_URL_API,
        hub: config.baseUrl?.hub ?? env.hubUrl ?? DEFAULT_BASE_URL_HUB,
      },
      apiVersion: config.apiVersion ?? env.apiVersion ?? DEFAULT_VERSION,
      hubVersion: config.hubVersion ?? env.hubVersion ?? DEFAULT_VERSION,
      timeoutMs: config.timeoutMs ?? env.timeoutMs ?? DEFAULT_TIMEOUT_MS,
      fetch: fetchImpl.bind(globalThis),
      defaultHeaders: config.defaultHeaders ?? {},
      onRequest: config.onRequest,
      onResponse: config.onResponse,
    };

    this.transport = new Transport(this.cfg);
    this.api = new ApiNamespace(this.transport);
    this.hub = new HubNamespace(this.transport);
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

  /** True when the client has either a JWT bearer token or an API key. */
  isAuthenticated(): boolean {
    return Boolean(this.cfg.bearerToken ?? this.cfg.apiKey);
  }

  /** Read-only snapshot of the current config (useful for tests/diagnostics). */
  getConfig(): Readonly<ResolvedNorbixConfig> {
    return this.cfg;
  }
}
