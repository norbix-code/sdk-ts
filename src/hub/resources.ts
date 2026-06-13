import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: resources
 * Endpoints: 1
 */
export class ResourcesModule {
  constructor(private readonly transport: Transport) {}

  /**
   * POST /{version}/resources/resolve
   * Request DTO: ResolveResources
   */
  resolveResources = (
    request: Partial<CodeMashHub2.ResolveResources> = {} as Partial<CodeMashHub2.ResolveResources>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.ResolveResourcesResponse> => {
    return this.transport.send<CodeMashHub2.ResolveResourcesResponse>({
      target: 'hub',
      path: '/{version}/resources/resolve',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
