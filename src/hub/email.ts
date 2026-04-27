import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — follow the internal maintenance workflow
 * to refresh this file from the DTO definitions.
 *
 * Group: email
 * Endpoints: 1
 */
export class EmailModule {
  constructor(private readonly transport: Transport) {}

  /**
   * POST /{version}/email/one-click-unsubscribe
   * Request DTO: OneClickUnsubscribeRequest
   */
  oneClickUnsubscribe = (
    request: Partial<CodeMashHub2.OneClickUnsubscribeRequest> = {} as Partial<CodeMashHub2.OneClickUnsubscribeRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/email/one-click-unsubscribe',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
