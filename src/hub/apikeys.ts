import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

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
    request: Partial<CodeMashHub2.GetApiKeys> = {} as Partial<CodeMashHub2.GetApiKeys>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetApiKeysResponse> => {
    return this.transport.send<CodeMashHub2.GetApiKeysResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.RegenerateApiKeys> = {} as Partial<CodeMashHub2.RegenerateApiKeys>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.RegenerateApiKeysResponse> => {
    return this.transport.send<CodeMashHub2.RegenerateApiKeysResponse>({
      target: 'hub',
      path: '/apikeys/regenerate',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
