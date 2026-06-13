import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashApi2 } from '../types/api2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: access_token
 * Endpoints: 1
 */
export class AccessTokenModule {
  constructor(private readonly transport: Transport) {}

  /**
   * POST /access-token
   * Request DTO: GetAccessToken
   */
  getAccessToken = (
    request: Partial<CodeMashApi2.GetAccessToken> = {} as Partial<CodeMashApi2.GetAccessToken>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetAccessTokenResponse> => {
    return this.transport.send<CodeMashApi2.GetAccessTokenResponse>({
      target: 'api',
      path: '/access-token',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
