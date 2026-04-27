import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashApi2 } from '../types/api2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — follow the internal maintenance workflow
 * to refresh this file from the DTO definitions.
 *
 * Group: chat
 * Endpoints: 1
 */
export class ChatModule {
  constructor(private readonly transport: Transport) {}

  /**
   * POST /{version}/chat/complete
   * Request DTO: AskChatRequest
   */
  askChat = (
    request: Partial<CodeMashApi2.AskChatRequest> = {} as Partial<CodeMashApi2.AskChatRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.AskChatResponse> => {
    return this.transport.send<CodeMashApi2.AskChatResponse>({
      target: 'api',
      path: '/{version}/chat/complete',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
