import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
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
    request: Partial<CodeMashHub2.Echo> = {} as Partial<CodeMashHub2.Echo>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EchoResponse> => {
    return this.transport.send<CodeMashHub2.EchoResponse>({
      target: 'hub',
      path: '/{version}/echo',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
