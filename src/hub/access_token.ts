import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — follow the internal maintenance workflow
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
    request: Partial<CodeMashHub2.GetAccessToken> = {} as Partial<CodeMashHub2.GetAccessToken>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetAccessTokenResponse> => {
    return this.transport.send<CodeMashHub2.GetAccessTokenResponse>({
      target: 'hub',
      path: '/access-token',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
