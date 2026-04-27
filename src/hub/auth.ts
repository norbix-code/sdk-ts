import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

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
   * POST /auth
   * Aliases:
   *   - GET,POST /auth/{provider}
   *   - POST,GET,OPTIONS /v3/auth
   *   - POST,GET,OPTIONS /v3/auth/{provider}
   * Request DTO: Authenticate
   */
  authenticate = (
    request: Partial<CodeMashHub2.Authenticate> = {} as Partial<CodeMashHub2.Authenticate>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AuthenticateResponse> => {
    return this.transport.send<CodeMashHub2.AuthenticateResponse>({
      target: 'hub',
      path: '/auth',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'unauthenticated',
      ...options,
    });
  };
}
