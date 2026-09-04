import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: projects
 * Endpoints: 5
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

  /**
   * GET /{version}/projects/{projectId}/ai/work-items
   * Request DTO: GetWorkItemsRequest
   */
  getWorkItems = (
    request: Partial<CodeMashHub2.GetWorkItemsRequest> = {} as Partial<CodeMashHub2.GetWorkItemsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetWorkItemsResponse> => {
    return this.transport.send<CodeMashHub2.GetWorkItemsResponse>({
      target: 'hub',
      path: '/{version}/projects/{projectId}/ai/work-items',
      method: 'GET',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/projects/{projectId}/ai/work-items/{WorkItemId}
   * Request DTO: GetWorkItemRequest
   */
  getWorkItem = (
    request: Partial<CodeMashHub2.GetWorkItemRequest> = {} as Partial<CodeMashHub2.GetWorkItemRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetWorkItemResponse> => {
    return this.transport.send<CodeMashHub2.GetWorkItemResponse>({
      target: 'hub',
      path: '/{version}/projects/{projectId}/ai/work-items/{WorkItemId}',
      method: 'GET',
      request,
      pathParams: ['projectId', 'WorkItemId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/projects/{projectId}/ai/work-items/{WorkItemId}/export.md
   * Request DTO: ExportWorkItemRequest
   */
  exportWorkItem = (
    request: Partial<CodeMashHub2.ExportWorkItemRequest> = {} as Partial<CodeMashHub2.ExportWorkItemRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.ExportWorkItemResponse> => {
    return this.transport.send<CodeMashHub2.ExportWorkItemResponse>({
      target: 'hub',
      path: '/{version}/projects/{projectId}/ai/work-items/{WorkItemId}/export.md',
      method: 'GET',
      request,
      pathParams: ['projectId', 'WorkItemId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/projects/{projectId}/ai/work-items/{WorkItemId}/needs-you/{Index}/done
   * Request DTO: MarkNeedsYouDoneRequest
   */
  markNeedsYouDone = (
    request: Partial<CodeMashHub2.MarkNeedsYouDoneRequest> = {} as Partial<CodeMashHub2.MarkNeedsYouDoneRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/projects/{projectId}/ai/work-items/{WorkItemId}/needs-you/{Index}/done',
      method: 'POST',
      request,
      pathParams: ['projectId', 'WorkItemId', 'Index'],
      scope: 'project',
      ...options,
    });
  };
}
