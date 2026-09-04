import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: support
 * Endpoints: 7
 */
export class SupportModule {
  constructor(private readonly transport: Transport) {}

  /**
   * POST /{version}/support/cases/{CaseId}/close
   * Request DTO: CloseSupportCaseRequest
   */
  closeSupportCase = (
    request: Partial<CodeMashHub2.CloseSupportCaseRequest> = {} as Partial<CodeMashHub2.CloseSupportCaseRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/support/cases/{CaseId}/close',
      method: 'POST',
      request,
      pathParams: ['CaseId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/support/cases/{CaseId}/reopen
   * Request DTO: ReopenSupportCaseRequest
   */
  reopenSupportCase = (
    request: Partial<CodeMashHub2.ReopenSupportCaseRequest> = {} as Partial<CodeMashHub2.ReopenSupportCaseRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/support/cases/{CaseId}/reopen',
      method: 'POST',
      request,
      pathParams: ['CaseId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/support/cases/{CaseId}/resolve
   * Request DTO: ResolveSupportCaseRequest
   */
  resolveSupportCase = (
    request: Partial<CodeMashHub2.ResolveSupportCaseRequest> = {} as Partial<CodeMashHub2.ResolveSupportCaseRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/support/cases/{CaseId}/resolve',
      method: 'POST',
      request,
      pathParams: ['CaseId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/support/cases/{CaseId}/messages
   * Request DTO: AppendSupportCaseMessageRequest
   */
  appendSupportCaseMessage = (
    request: Partial<CodeMashHub2.AppendSupportCaseMessageRequest> = {} as Partial<CodeMashHub2.AppendSupportCaseMessageRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/support/cases/{CaseId}/messages',
      method: 'POST',
      request,
      pathParams: ['CaseId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/support/cases/{CaseId}
   * Request DTO: GetSupportCase
   */
  getSupportCase = (
    request: Partial<CodeMashHub2.GetSupportCase> = {} as Partial<CodeMashHub2.GetSupportCase>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSupportCaseResponse> => {
    return this.transport.send<CodeMashHub2.GetSupportCaseResponse>({
      target: 'hub',
      path: '/{version}/support/cases/{CaseId}',
      method: 'GET',
      request,
      pathParams: ['CaseId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/support/cases
   * Request DTO: GetSupportCases
   */
  getSupportCases = (
    request: Partial<CodeMashHub2.GetSupportCases> = {} as Partial<CodeMashHub2.GetSupportCases>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSupportCasesResponse> => {
    return this.transport.send<CodeMashHub2.GetSupportCasesResponse>({
      target: 'hub',
      path: '/{version}/support/cases',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/support/cases
   * Request DTO: OpenSupportCaseRequest
   */
  openSupportCase = (
    request: Partial<CodeMashHub2.OpenSupportCaseRequest> = {} as Partial<CodeMashHub2.OpenSupportCaseRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/support/cases',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
