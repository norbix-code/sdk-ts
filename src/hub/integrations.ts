import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: integrations
 * Endpoints: 5
 */
export class IntegrationsModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/integrations/connect/providers
   * Request DTO: GetQuickConnectProviders
   */
  getQuickConnectProviders = (
    request: Partial<CodeMashHub2.GetQuickConnectProviders> = {} as Partial<CodeMashHub2.GetQuickConnectProviders>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetQuickConnectProvidersResponse> => {
    return this.transport.send<CodeMashHub2.GetQuickConnectProvidersResponse>({
      target: 'hub',
      path: '/{version}/integrations/connect/providers',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'optional',
      ...options,
    });
  };

  /**
   * GET /{version}/integrations/connect/{ConnectId}/targets
   * Request DTO: GetIntegrationConnectTargets
   */
  getIntegrationConnectTargets = (
    request: Partial<CodeMashHub2.GetIntegrationConnectTargets> = {} as Partial<CodeMashHub2.GetIntegrationConnectTargets>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetIntegrationConnectTargetsResponse> => {
    return this.transport.send<CodeMashHub2.GetIntegrationConnectTargetsResponse>({
      target: 'hub',
      path: '/{version}/integrations/connect/{ConnectId}/targets',
      method: 'GET',
      request,
      pathParams: ['ConnectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/integrations/{IntegrationId}/secrets
   * Request DTO: GetIntegrationSecrets
   */
  getIntegrationSecrets = (
    request: Partial<CodeMashHub2.GetIntegrationSecrets> = {} as Partial<CodeMashHub2.GetIntegrationSecrets>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetIntegrationSecretsResponse> => {
    return this.transport.send<CodeMashHub2.GetIntegrationSecretsResponse>({
      target: 'hub',
      path: '/{version}/integrations/{IntegrationId}/secrets',
      method: 'GET',
      request,
      pathParams: ['IntegrationId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/integrations/keyless/setup
   * Request DTO: GetKeylessIntegrationSetup
   */
  getKeylessIntegrationSetup = (
    request: Partial<CodeMashHub2.GetKeylessIntegrationSetup> = {} as Partial<CodeMashHub2.GetKeylessIntegrationSetup>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetKeylessIntegrationSetupResponse> => {
    return this.transport.send<CodeMashHub2.GetKeylessIntegrationSetupResponse>({
      target: 'hub',
      path: '/{version}/integrations/keyless/setup',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/integrations/{IntegrationId}/secrets/remove
   * Request DTO: RemoveIntegrationSecretsRequest
   */
  removeIntegrationSecrets = (
    request: Partial<CodeMashHub2.RemoveIntegrationSecretsRequest> = {} as Partial<CodeMashHub2.RemoveIntegrationSecretsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/integrations/{IntegrationId}/secrets/remove',
      method: 'POST',
      request,
      pathParams: ['IntegrationId'],
      scope: 'project',
      ...options,
    });
  };
}
