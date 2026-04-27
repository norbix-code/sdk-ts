import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — follow the internal maintenance workflow
 * to refresh this file from the DTO definitions.
 *
 * Group: internal
 * Endpoints: 1
 */
export class InternalModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /internal/_typegen
   * Request DTO: InternalsTypeGen
   */
  internalsTypeGen = (
    request: Partial<CodeMashHub2.InternalsTypeGen> = {} as Partial<CodeMashHub2.InternalsTypeGen>,
    options: RequestOverrideOptions = {},
  ): Promise<unknown> => {
    return this.transport.send<unknown>({
      target: 'hub',
      path: '/internal/_typegen',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
