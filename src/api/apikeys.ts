import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashApi2 } from '../types/api2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: apikeys
 * Endpoints: 2
 */
export class ApikeysModule {
  constructor(private readonly transport: Transport) {}

  /**
   * POST /apikeys
   * Aliases:
   *   - POST /apikeys/{Environment}
   * Request DTO: GetApiKeys
   */
  getApiKeys = (
    request: Partial<CodeMashApi2.GetApiKeys> = {} as Partial<CodeMashApi2.GetApiKeys>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetApiKeysResponse> => {
    return this.transport.send<CodeMashApi2.GetApiKeysResponse>({
      target: 'api',
      path: '/apikeys',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /apikeys/regenerate
   * Aliases:
   *   - POST /apikeys/regenerate/{Environment}
   * Request DTO: RegenerateApiKeys
   */
  regenerateApiKeys = (
    request: Partial<CodeMashApi2.RegenerateApiKeys> = {} as Partial<CodeMashApi2.RegenerateApiKeys>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.RegenerateApiKeysResponse> => {
    return this.transport.send<CodeMashApi2.RegenerateApiKeysResponse>({
      target: 'api',
      path: '/apikeys/regenerate',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
