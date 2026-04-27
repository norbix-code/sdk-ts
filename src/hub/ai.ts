import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — follow the internal maintenance workflow
 * to refresh this file from the DTO definitions.
 *
 * Group: ai
 * Endpoints: 14
 */
export class AiModule {
  constructor(private readonly transport: Transport) {}

  /**
   * DELETE /{version}/ai/integrations/llms/{Id}
   * Request DTO: DeleteLlmIntegrationRequest
   */
  deleteLlmIntegration = (
    request: Partial<CodeMashHub2.DeleteLlmIntegrationRequest> = {} as Partial<CodeMashHub2.DeleteLlmIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/ai/integrations/llms/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/ai/integrations/llms/{Id}/disable
   * Request DTO: DisableLlmIntegrationRequest
   */
  disableLlmIntegration = (
    request: Partial<CodeMashHub2.DisableLlmIntegrationRequest> = {} as Partial<CodeMashHub2.DisableLlmIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/ai/integrations/llms/{Id}/disable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/ai/integrations/llms/{Id}/enable
   * Request DTO: EnableLlmIntegrationRequest
   */
  enableLlmIntegration = (
    request: Partial<CodeMashHub2.EnableLlmIntegrationRequest> = {} as Partial<CodeMashHub2.EnableLlmIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/ai/integrations/llms/{Id}/enable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/ai/integrations/llms/{id}
   * Request DTO: GetLlmIntegration
   */
  getLlmIntegration = (
    request: Partial<CodeMashHub2.GetLlmIntegration> = {} as Partial<CodeMashHub2.GetLlmIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetLlmIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.GetLlmIntegrationResponse>({
      target: 'hub',
      path: '/{version}/ai/integrations/llms/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/ai/integrations/llms/integrations
   * Request DTO: GetLlmIntegrations
   */
  getLlmIntegrations = (
    request: Partial<CodeMashHub2.GetLlmIntegrations> = {} as Partial<CodeMashHub2.GetLlmIntegrations>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetLlmIntegrationsResponse> => {
    return this.transport.send<CodeMashHub2.GetLlmIntegrationsResponse>({
      target: 'hub',
      path: '/{version}/ai/integrations/llms/integrations',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/ai/integrations/llms/
   * Request DTO: SaveLlmIntegration
   */
  saveLlmIntegration = (
    request: Partial<CodeMashHub2.SaveLlmIntegration> = {} as Partial<CodeMashHub2.SaveLlmIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/ai/integrations/llms/',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/ai/integrations/llms/test
   * Request DTO: TestLlmIntegration
   */
  testLlmIntegration = (
    request: Partial<CodeMashHub2.TestLlmIntegration> = {} as Partial<CodeMashHub2.TestLlmIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.TestLlmIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.TestLlmIntegrationResponse>({
      target: 'hub',
      path: '/{version}/ai/integrations/llms/test',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/ai/integrations/mcp/{Id}
   * Request DTO: DeleteMcpIntegrationRequest
   */
  deleteMcpIntegration = (
    request: Partial<CodeMashHub2.DeleteMcpIntegrationRequest> = {} as Partial<CodeMashHub2.DeleteMcpIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/ai/integrations/mcp/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/ai/integrations/mcp/{Id}/disable
   * Request DTO: DisableMcpIntegrationRequest
   */
  disableMcpIntegration = (
    request: Partial<CodeMashHub2.DisableMcpIntegrationRequest> = {} as Partial<CodeMashHub2.DisableMcpIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/ai/integrations/mcp/{Id}/disable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/ai/integrations/mcp/{Id}/enable
   * Request DTO: EnableMcpIntegrationRequest
   */
  enableMcpIntegration = (
    request: Partial<CodeMashHub2.EnableMcpIntegrationRequest> = {} as Partial<CodeMashHub2.EnableMcpIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/ai/integrations/mcp/{Id}/enable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/ai/integrations/mcp/{id}
   * Request DTO: GetMcpIntegration
   */
  getMcpIntegration = (
    request: Partial<CodeMashHub2.GetMcpIntegration> = {} as Partial<CodeMashHub2.GetMcpIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMcpIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.GetMcpIntegrationResponse>({
      target: 'hub',
      path: '/{version}/ai/integrations/mcp/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/ai/integrations/mcp/integrations
   * Request DTO: GetMcpIntegrations
   */
  getMcpIntegrations = (
    request: Partial<CodeMashHub2.GetMcpIntegrations> = {} as Partial<CodeMashHub2.GetMcpIntegrations>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMcpIntegrationsResponse> => {
    return this.transport.send<CodeMashHub2.GetMcpIntegrationsResponse>({
      target: 'hub',
      path: '/{version}/ai/integrations/mcp/integrations',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/ai/integrations/mcp/
   * Request DTO: SaveMcpIntegration
   */
  saveMcpIntegration = (
    request: Partial<CodeMashHub2.SaveMcpIntegration> = {} as Partial<CodeMashHub2.SaveMcpIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/ai/integrations/mcp/',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/ai/integrations/mcp/test
   * Request DTO: TestMcpIntegration
   */
  testMcpIntegration = (
    request: Partial<CodeMashHub2.TestMcpIntegration> = {} as Partial<CodeMashHub2.TestMcpIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.TestLlmIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.TestLlmIntegrationResponse>({
      target: 'hub',
      path: '/{version}/ai/integrations/mcp/test',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
