import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: integrations
 * Endpoints: 3
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
      scope: 'project',
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
}
