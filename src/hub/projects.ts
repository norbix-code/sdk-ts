import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: projects
 * Endpoints: 1
 */
export class ProjectsModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/projects/{projectId}/ai/brief
   * Request DTO: GetProjectBriefRequest
   */
  getProjectBrief = (
    request: Partial<CodeMashHub2.GetProjectBriefRequest> = {} as Partial<CodeMashHub2.GetProjectBriefRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetProjectBriefResponse> => {
    return this.transport.send<CodeMashHub2.GetProjectBriefResponse>({
      target: 'hub',
      path: '/{version}/projects/{projectId}/ai/brief',
      method: 'GET',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };
}
