import { NorbixError, NorbixSessionExpiredError } from '../client/errors.js'; // @hand-written
import {
  clearPkceVerifier,
  createPkcePair,
  storePkceVerifier,
  takePkceVerifier,
} from '../client/pkce.js'; // @hand-written
import { browserLocation, parseSocialReturn } from '../client/social.js'; // @hand-written
import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type {
  BrowserSignInResult,
  SignInCredentials,
  SignInResult,
  SocialProvider,
  SocialRedirectOptions,
  SocialReturn,
  SocialSignInCompletion,
  SocialSignInResult,
  SocialSignInUrlOptions,
} from '../client/types.js'; // @hand-written
import type { CodeMashApi2 } from '../types/api2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: auth
 * Endpoints: 1
 */
export class AuthModule {
  constructor(private readonly transport: Transport) {}

  /**
   * POST /v3/auth
   * Aliases:
   *   - GET,POST /auth
   *   - GET,POST /auth/{provider}
   *   - POST,GET,OPTIONS /v3/auth/{provider}
   * Request DTO: Authenticate
   */
  authenticate = (
    request: Partial<CodeMashApi2.Authenticate> = {} as Partial<CodeMashApi2.Authenticate>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.AuthenticateResponse> => {
    return this.transport.send<CodeMashApi2.AuthenticateResponse>({
      target: 'api',
      path: '/v3/auth',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'unauthenticated',
      ...options,
    });
  };

  // @hand-written:begin
  /** `ignore: jwt` asks the gateway for no JWT at all: nothing is left to outlive a logout. */
  private sessionSignInBody = (credentials: SignInCredentials) => ({
    provider: 'credentials',
    userName: credentials.userName,
    password: credentials.password,
    rememberMe: false,
    meta: { ignore: 'jwt' },
  });

  /**
   * POST /v3/auth, for a cookie session. Answers the session id, and no JWT is
   * issued. The call carries no cookie and no token: a sign-in that arrives with
   * a session cookie deletes that session. In the browser use `browserSignIn`,
   * which keeps the session id out of JavaScript.
   */
  signIn = async (
    credentials: SignInCredentials,
    options: RequestOverrideOptions = {},
  ): Promise<SignInResult> => {
    const answer = await this.transport.send<CodeMashApi2.AuthenticateResponse>({
      target: 'api',
      path: '/v3/auth',
      method: 'POST',
      request: this.sessionSignInBody(credentials),
      scope: 'unauthenticated',
      omitCookies: true,
      ...options,
    });
    if (!answer?.sessionId) {
      throw new NorbixError({
        message: 'The sign-in answer carries no session id.',
        status: 0,
        code: 'NORBIX_NO_SESSION',
      });
    }
    return {
      sessionId: answer.sessionId,
      userId: answer.userId,
      credentialVersion: answer.meta?.['credentialVersion'],
      ...passwordChangeOf(answer.meta),
    };
  };

  /**
   * POST /v3/auth, for a `browserSession` client. The browser keeps the cookie;
   * the answer needs no session id, so a backend in front of Norbix can hold it
   * in an `HttpOnly` cookie and return only public user data. A session id in
   * the answer is not passed on to the app.
   */
  browserSignIn = async (
    credentials: SignInCredentials,
    options: RequestOverrideOptions = {},
  ): Promise<BrowserSignInResult> => {
    const answer = await this.transport.send<CodeMashApi2.AuthenticateResponse | undefined>({
      target: 'api',
      path: '/v3/auth',
      method: 'POST',
      request: this.sessionSignInBody(credentials),
      scope: 'unauthenticated',
      requiresBrowserSession: true,
      ...options,
    });
    return {
      userId: answer?.userId,
      displayName: answer?.displayName,
      credentialVersion: answer?.meta?.['credentialVersion'],
      ...passwordChangeOf(answer?.meta),
    };
  };

  /**
   * POST /v3/auth/logout. Ends this client's session on the server; a session
   * that has already ended counts as success. A JWT issued by the same sign-in
   * is not revoked. Not the same as `norbix.logout()`, which only clears the
   * local token and sends nothing. Needs a cookie-session client.
   */
  signOut = async (options: RequestOverrideOptions = {}): Promise<void> => {
    try {
      await this.transport.send<CodeMashApi2.AuthenticateResponse>({
        target: 'api',
        path: '/v3/auth/logout',
        method: 'POST',
        scope: 'optional',
        requiresSession: true,
        ...options,
      });
    } catch (err) {
      if (!(err instanceof NorbixSessionExpiredError)) throw err;
    }
  };

  /**
   * The URL that starts a project social sign-in:
   * `GET {api}/{version}/membership/auth/social/{provider}?projectId=…[&env=…][&mode=…][&returnUrl=…][&codeChallenge=…]`.
   * Not a call: the browser navigates there and the gateway answers with a
   * redirect to the provider. A navigation carries no headers, so the project id
   * and a non-PROD env travel in the query. The same URL is
   * `{api}{startPath}` from the public config's `auth.socialSignIn`, plus your
   * `mode` / `returnUrl` / `codeChallenge`. With a `codeChallenge` (see
   * `createPkcePair`), the exchange needs the matching `codeVerifier`.
   */
  socialSignInUrl = (
    provider: SocialProvider | string,
    options: SocialSignInUrlOptions = {},
  ): string =>
    this.transport.navigationUrl({
      target: 'api',
      path: '/{version}/membership/auth/social/{provider}',
      request: {
        provider,
        mode: options.mode,
        returnUrl: options.returnUrl,
        codeChallenge: options.codeChallenge,
      },
      env: options.env,
    });

  /**
   * POST /{version}/membership/auth/social/{provider}/exchange. Trades the
   * one-time code from the return page (2 minutes, once) for the same JWT a
   * project password sign-in gives: 14 days, no refresh token, no cookie
   * session. Use it as a bearer token, e.g. `norbix.setBearerToken(bearerToken)`.
   * Sends no token of its own. A used, expired or unknown code is refused with
   * CM-ERRORS-MEMBERSHIP-051.
   *
   * `codeVerifier`: required when the start carried a `codeChallenge`, and
   * must be left out when it did not. Otherwise CM-ERRORS-MEMBERSHIP-058
   * (`context.Reason` `verifier_missing`, `verifier_wrong` or
   * `challenge_missing`), and the code is used up.
   */
  exchangeSocialCode = async (
    provider: SocialProvider | string,
    code: string,
    options: RequestOverrideOptions & { codeVerifier?: string } = {},
  ): Promise<SocialSignInResult> => {
    const { codeVerifier, ...overrides } = options;
    const answer = await this.transport.send<CodeMashApi2.SocialSignInTokenResponse>({
      target: 'api',
      path: '/{version}/membership/auth/social/{provider}/exchange',
      method: 'POST',
      request: { provider, code, codeVerifier },
      pathParams: ['provider'],
      scope: 'unauthenticated',
      ...overrides,
    });
    if (!answer?.bearerToken) {
      throw new NorbixError({
        message: 'The social sign-in answer carries no bearer token.',
        status: 0,
        code: 'NORBIX_NO_TOKEN',
      });
    }
    return {
      bearerToken: answer.bearerToken,
      userId: answer.userId,
      displayName: answer.displayName,
      expiresAt: answer.expiresAt,
      credentialVersion: answer.meta?.['credentialVersion'],
    };
  };

  /**
   * Browser only: send the page to `socialSignInUrl(provider, options)`. Pass a
   * `returnUrl` (or use a mode whose page is your return page), and on that page
   * call `completeSocialSignIn()`.
   *
   * PKCE by default: makes a verifier, keeps it in `sessionStorage` (one per
   * provider) and sends its challenge; `completeSocialSignIn` sends it back and
   * forgets it. `pkce: false` sends no challenge (and forgets an old verifier).
   * Without a usable `sessionStorage` the start goes without a challenge.
   */
  redirectToSocialSignIn = async (
    provider: SocialProvider | string,
    options: SocialRedirectOptions = {},
  ): Promise<void> => {
    const location = browserLocation();
    if (!location) {
      throw new NorbixError({
        message: 'redirectToSocialSignIn needs a browser; use socialSignInUrl on a server.',
        status: 0,
        code: 'NORBIX_NOT_BROWSER',
      });
    }
    const { pkce = true, ...urlOptions } = options;
    clearPkceVerifier('signIn', provider);
    let codeChallenge: string | undefined;
    if (pkce) {
      const pair = await createPkcePair();
      if (storePkceVerifier('signIn', provider, pair.codeVerifier))
        codeChallenge = pair.codeChallenge;
    }
    location.assign(this.socialSignInUrl(provider, { ...urlOptions, codeChallenge }));
  };

  /**
   * Read what the gateway sent the browser back with. `url` defaults to the
   * current page. Tokens never travel in the URL: only a one-time code
   * (`code`, `provider`, and `intent=link` for a link) or `error`.
   */
  readSocialReturn = (url?: string | URL): SocialReturn => parseSocialReturn(url);

  /**
   * The return page in one call: read the answer (`url` defaults to the current
   * page) and, for a sign-in code, exchange it. A link code is handed back
   * untouched (`kind: 'link'`) — finish it with
   * `api.membership.finishLinkIdentity` as the signed-in user. The SDK does not
   * store the token: call `norbix.setBearerToken(result.bearerToken)`.
   *
   * Sends the verifier `redirectToSocialSignIn` kept for this provider, if
   * any, and forgets it — also when the exchange fails, because the code is
   * used up either way. A `codeVerifier` in `options` wins.
   */
  completeSocialSignIn = async (
    url?: string | URL,
    options: RequestOverrideOptions & { codeVerifier?: string } = {},
  ): Promise<SocialSignInCompletion> => {
    const answer = this.readSocialReturn(url);
    if (answer.kind !== 'signIn') return answer;
    const kept = takePkceVerifier('signIn', answer.provider);
    const result = await this.exchangeSocialCode(answer.provider, answer.code, {
      ...options,
      codeVerifier: options.codeVerifier ?? kept,
    });
    return { kind: 'signedIn', provider: answer.provider, result };
  };
  // @hand-written:end
}

/**
 * `meta.passwordChangeRequired` is `"true"` when the typed password breaks the
 * project's current rule; the key is absent otherwise (`meta` is a string map).
 */
function passwordChangeOf(meta: { [key: string]: string } | undefined): {
  passwordChangeRequired?: true;
} {
  return meta?.['passwordChangeRequired'] === 'true' ? { passwordChangeRequired: true } : {};
}
