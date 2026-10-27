import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashApi2 } from '../types/api2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: code
 * Endpoints: 4
 */
export class CodeModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/code/workflows/runs
   * Request DTO: GetCodeWorkflowWaitingRuns
   */
  getCodeWorkflowWaitingRuns = (
    request: Partial<CodeMashApi2.GetCodeWorkflowWaitingRuns> = {} as Partial<CodeMashApi2.GetCodeWorkflowWaitingRuns>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.WorkflowRunsResponse> => {
    return this.transport.send<CodeMashApi2.WorkflowRunsResponse>({
      target: 'api',
      path: '/{version}/code/workflows/runs',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/workflows/runs/{RunId}/resume
   * Request DTO: ResumeCodeWorkflowRun
   */
  resumeCodeWorkflowRun = (
    request: Partial<CodeMashApi2.ResumeCodeWorkflowRun> = {} as Partial<CodeMashApi2.ResumeCodeWorkflowRun>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.WorkflowRunResponse> => {
    return this.transport.send<CodeMashApi2.WorkflowRunResponse>({
      target: 'api',
      path: '/{version}/code/workflows/runs/{RunId}/resume',
      method: 'POST',
      request,
      pathParams: ['RunId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/workflows/resume/{Token}
   * Request DTO: OpenCodeWorkflowResumeLink
   */
  openCodeWorkflowResumeLink = (
    request: Partial<CodeMashApi2.OpenCodeWorkflowResumeLink> = {} as Partial<CodeMashApi2.OpenCodeWorkflowResumeLink>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.CodeWorkflowResumeLinkResponse> => {
    return this.transport.send<CodeMashApi2.CodeWorkflowResumeLinkResponse>({
      target: 'api',
      path: '/{version}/code/workflows/resume/{Token}',
      method: 'GET',
      request,
      pathParams: ['Token'],
      scope: 'optional',
      ...options,
    });
  };

  /**
   * POST /{version}/code/workflows/resume/{Token}
   * Request DTO: UseCodeWorkflowResumeLink
   */
  useCodeWorkflowResumeLink = (
    request: Partial<CodeMashApi2.UseCodeWorkflowResumeLink> = {} as Partial<CodeMashApi2.UseCodeWorkflowResumeLink>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.WorkflowRunResponse> => {
    return this.transport.send<CodeMashApi2.WorkflowRunResponse>({
      target: 'api',
      path: '/{version}/code/workflows/resume/{Token}',
      method: 'POST',
      request,
      pathParams: ['Token'],
      scope: 'optional',
      ...options,
    });
  };
}
