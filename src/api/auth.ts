import type { RequestOverrideOptions, Transport } from '../client/transport.js';
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
}
