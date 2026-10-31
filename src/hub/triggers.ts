import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: triggers
 * Endpoints: 4
 */
export class TriggersModule {
  constructor(private readonly transport: Transport) {}

  /**
   * POST /{version}/triggers/execution-identity/check
   * Request DTO: CheckTriggerExecutionIdentityRequest
   */
  checkTriggerExecutionIdentity = (
    request: Partial<CodeMashHub2.CheckTriggerExecutionIdentityRequest> = {} as Partial<CodeMashHub2.CheckTriggerExecutionIdentityRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.CheckTriggerExecutionIdentityResponse> => {
    return this.transport.send<CodeMashHub2.CheckTriggerExecutionIdentityResponse>({
      target: 'hub',
      path: '/{version}/triggers/execution-identity/check',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/triggers/{id}/definition
   * Request DTO: GetTriggerDefinition
   */
  getTriggerDefinition = (
    request: Partial<CodeMashHub2.GetTriggerDefinition> = {} as Partial<CodeMashHub2.GetTriggerDefinition>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetTriggerDefinitionResponse> => {
    return this.transport.send<CodeMashHub2.GetTriggerDefinitionResponse>({
      target: 'hub',
      path: '/{version}/triggers/{id}/definition',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/triggers/attention
   * Request DTO: GetTriggersNeedingAttention
   */
  getTriggersNeedingAttention = (
    request: Partial<CodeMashHub2.GetTriggersNeedingAttention> = {} as Partial<CodeMashHub2.GetTriggersNeedingAttention>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetTriggersNeedingAttentionResponse> => {
    return this.transport.send<CodeMashHub2.GetTriggersNeedingAttentionResponse>({
      target: 'hub',
      path: '/{version}/triggers/attention',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/triggers/pre-execute-code/test
   * Request DTO: TestTriggerPreExecuteCode
   */
  testTriggerPreExecuteCode = (
    request: Partial<CodeMashHub2.TestTriggerPreExecuteCode> = {} as Partial<CodeMashHub2.TestTriggerPreExecuteCode>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.TestTriggerPreExecuteCodeResponse> => {
    return this.transport.send<CodeMashHub2.TestTriggerPreExecuteCodeResponse>({
      target: 'hub',
      path: '/{version}/triggers/pre-execute-code/test',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
