import { NorbixError, NorbixSessionExpiredError } from '../client/errors.js'; // @hand-written
import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { SignInCredentials, SignInResult } from '../client/types.js'; // @hand-written
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
  /**
   * POST /v3/auth, for a cookie session. Answers the session id; the JWT of the
   * answer is dropped, not stored on the client. The call carries no cookie and
   * no token: a sign-in that arrives with a session cookie deletes that session.
   * In the browser (`browserSession`) the browser keeps the cookie itself.
   */
  signIn = async (
    credentials: SignInCredentials,
    options: RequestOverrideOptions = {},
  ): Promise<SignInResult> => {
    const answer = await this.transport.send<CodeMashApi2.AuthenticateResponse>({
      target: 'api',
      path: '/v3/auth',
      method: 'POST',
      request: {
        provider: 'credentials',
        userName: credentials.userName,
        password: credentials.password,
        rememberMe: false,
      },
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
  // @hand-written:end
}
