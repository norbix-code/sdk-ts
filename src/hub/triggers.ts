import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: triggers
 * Endpoints: 1
 */
export class TriggersModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/triggers/attention
   * Request DTO: GetTriggersNeedingAttention
   */
  getTriggersNeedingAttention = (
    request: Partial<CodeMashHub2.GetTriggersNeedingAttention> = {} as Partial<CodeMashHub2.GetTriggersNeedingAttention>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetTriggersNeedingAttentionResponse> => {
    return this.transport.send<CodeMashHub2.GetTriggersNeedingAttentionResponse>({
      target: 'hub',
      path: '/{version}/triggers/attention',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
