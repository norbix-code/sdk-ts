import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashApi2 } from '../types/api2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — follow the internal maintenance workflow
 * to refresh this file from the DTO definitions.
 *
 * Group: echo
 * Endpoints: 1
 */
export class EchoModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/echo
   * Request DTO: Echo
   */
  echo = (
    request: Partial<CodeMashApi2.Echo> = {} as Partial<CodeMashApi2.Echo>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EchoResponse> => {
    return this.transport.send<CodeMashApi2.EchoResponse>({
      target: 'api',
      path: '/{version}/echo',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
