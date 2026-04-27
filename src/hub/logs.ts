import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — follow the internal maintenance workflow
 * to refresh this file from the DTO definitions.
 *
 * Group: logs
 * Endpoints: 9
 */
export class LogsModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/logs/disable
   * Request DTO: DisableLogging
   */
  disableLogging = (
    request: Partial<CodeMashHub2.DisableLogging> = {} as Partial<CodeMashHub2.DisableLogging>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/logs/disable',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/logs/enable
   * Request DTO: EnableLogging
   */
  enableLogging = (
    request: Partial<CodeMashHub2.EnableLogging> = {} as Partial<CodeMashHub2.EnableLogging>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/logs/enable',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/logs/integrations/{Id}
   * Request DTO: DeleteLoggingIntegrationRequest
   */
  deleteLoggingIntegration = (
    request: Partial<CodeMashHub2.DeleteLoggingIntegrationRequest> = {} as Partial<CodeMashHub2.DeleteLoggingIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/logs/integrations/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/logs/integrations/{Id}/disable
   * Request DTO: DisableLoggingIntegrationRequest
   */
  disableLoggingIntegration = (
    request: Partial<CodeMashHub2.DisableLoggingIntegrationRequest> = {} as Partial<CodeMashHub2.DisableLoggingIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/logs/integrations/{Id}/disable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/logs/integrations/{Id}/enable
   * Request DTO: EnableLoggingIntegrationRequest
   */
  enableLoggingIntegration = (
    request: Partial<CodeMashHub2.EnableLoggingIntegrationRequest> = {} as Partial<CodeMashHub2.EnableLoggingIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/logs/integrations/{Id}/enable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/logs/integrations/{id}
   * Request DTO: GetLoggingIntegration
   */
  getLoggingIntegration = (
    request: Partial<CodeMashHub2.GetLoggingIntegration> = {} as Partial<CodeMashHub2.GetLoggingIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetLoggingIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.GetLoggingIntegrationResponse>({
      target: 'hub',
      path: '/{version}/logs/integrations/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/logs/integrations
   * Request DTO: GetLoggingIntegrations
   */
  getLoggingIntegrations = (
    request: Partial<CodeMashHub2.GetLoggingIntegrations> = {} as Partial<CodeMashHub2.GetLoggingIntegrations>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetLoggingIntegrationsResponse> => {
    return this.transport.send<CodeMashHub2.GetLoggingIntegrationsResponse>({
      target: 'hub',
      path: '/{version}/logs/integrations',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/logs/integrations
   * Request DTO: SaveLoggingIntegration
   */
  saveLoggingIntegration = (
    request: Partial<CodeMashHub2.SaveLoggingIntegration> = {} as Partial<CodeMashHub2.SaveLoggingIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/logs/integrations',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/logs/integrations/test
   * Request DTO: TestLoggingIntegration
   */
  testLoggingIntegration = (
    request: Partial<CodeMashHub2.TestLoggingIntegration> = {} as Partial<CodeMashHub2.TestLoggingIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.TestLoggingIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.TestLoggingIntegrationResponse>({
      target: 'hub',
      path: '/{version}/logs/integrations/test',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
