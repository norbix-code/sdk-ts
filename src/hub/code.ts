import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: code
 * Endpoints: 28
 */
export class CodeModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/code/enable
   * Request DTO: EnableCode
   */
  enableCode = (
    request: Partial<CodeMashHub2.EnableCode> = {} as Partial<CodeMashHub2.EnableCode>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/code/enable',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/disable
   * Request DTO: DisableCode
   */
  disableCode = (
    request: Partial<CodeMashHub2.DisableCode> = {} as Partial<CodeMashHub2.DisableCode>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/code/disable',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/integrations
   * Request DTO: GetCodeIntegrations
   */
  getCodeIntegrations = (
    request: Partial<CodeMashHub2.GetCodeIntegrations> = {} as Partial<CodeMashHub2.GetCodeIntegrations>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetCodeIntegrationsResponse> => {
    return this.transport.send<CodeMashHub2.GetCodeIntegrationsResponse>({
      target: 'hub',
      path: '/{version}/code/integrations',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/integrations/{id}
   * Request DTO: GetCodeIntegration
   */
  getCodeIntegration = (
    request: Partial<CodeMashHub2.GetCodeIntegration> = {} as Partial<CodeMashHub2.GetCodeIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetCodeIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.GetCodeIntegrationResponse>({
      target: 'hub',
      path: '/{version}/code/integrations/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/integrations
   * Request DTO: SaveCodeIntegration
   */
  saveCodeIntegration = (
    request: Partial<CodeMashHub2.SaveCodeIntegration> = {} as Partial<CodeMashHub2.SaveCodeIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/code/integrations',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/integrations/test
   * Request DTO: TestCodeIntegration
   */
  testCodeIntegration = (
    request: Partial<CodeMashHub2.TestCodeIntegration> = {} as Partial<CodeMashHub2.TestCodeIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.TestCodeIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.TestCodeIntegrationResponse>({
      target: 'hub',
      path: '/{version}/code/integrations/test',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/integrations/confirm-human-delivery
   * Request DTO: ConfirmCodeIntegrationHumanDeliveryRequest
   */
  confirmCodeIntegrationHumanDelivery = (
    request: Partial<CodeMashHub2.ConfirmCodeIntegrationHumanDeliveryRequest> = {} as Partial<CodeMashHub2.ConfirmCodeIntegrationHumanDeliveryRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/code/integrations/confirm-human-delivery',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/code/integrations/{Id}/default
   * Request DTO: SetCodeIntegrationAsDefault
   */
  setCodeIntegrationAsDefault = (
    request: Partial<CodeMashHub2.SetCodeIntegrationAsDefault> = {} as Partial<CodeMashHub2.SetCodeIntegrationAsDefault>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/code/integrations/{Id}/default',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/code/integrations/{Id}
   * Request DTO: DeleteCodeIntegrationRequest
   */
  deleteCodeIntegration = (
    request: Partial<CodeMashHub2.DeleteCodeIntegrationRequest> = {} as Partial<CodeMashHub2.DeleteCodeIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/code/integrations/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/code/integrations/{Id}/enable
   * Request DTO: EnableCodeIntegrationRequest
   */
  enableCodeIntegration = (
    request: Partial<CodeMashHub2.EnableCodeIntegrationRequest> = {} as Partial<CodeMashHub2.EnableCodeIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/code/integrations/{Id}/enable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/code/integrations/{Id}/disable
   * Request DTO: DisableCodeIntegrationRequest
   */
  disableCodeIntegration = (
    request: Partial<CodeMashHub2.DisableCodeIntegrationRequest> = {} as Partial<CodeMashHub2.DisableCodeIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/code/integrations/{Id}/disable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/marketplace/listings
   * Request DTO: GetMarketplaceListings
   */
  getMarketplaceListings = (
    request: Partial<CodeMashHub2.GetMarketplaceListings> = {} as Partial<CodeMashHub2.GetMarketplaceListings>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMarketplaceListingsResponse> => {
    return this.transport.send<CodeMashHub2.GetMarketplaceListingsResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/listings',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/marketplace/listings/{ListingViewId}/functions/{FunctionKey}/tokens
   * Request DTO: GetMarketplaceListingFunctionTokens
   */
  getMarketplaceListingFunctionTokens = (
    request: Partial<CodeMashHub2.GetMarketplaceListingFunctionTokens> = {} as Partial<CodeMashHub2.GetMarketplaceListingFunctionTokens>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMarketplaceTokensResponse> => {
    return this.transport.send<CodeMashHub2.GetMarketplaceTokensResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/listings/{ListingViewId}/functions/{FunctionKey}/tokens',
      method: 'GET',
      request,
      pathParams: ['ListingViewId', 'FunctionKey'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/marketplace/integrations
   * Request DTO: GetMarketplaceIntegrations
   */
  getMarketplaceIntegrations = (
    request: Partial<CodeMashHub2.GetMarketplaceIntegrations> = {} as Partial<CodeMashHub2.GetMarketplaceIntegrations>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMarketplaceIntegrationsResponse> => {
    return this.transport.send<CodeMashHub2.GetMarketplaceIntegrationsResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/marketplace/integrations/{IntegrationViewId}
   * Request DTO: GetMarketplaceIntegration
   */
  getMarketplaceIntegration = (
    request: Partial<CodeMashHub2.GetMarketplaceIntegration> = {} as Partial<CodeMashHub2.GetMarketplaceIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMarketplaceIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.GetMarketplaceIntegrationResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}',
      method: 'GET',
      request,
      pathParams: ['IntegrationViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/marketplace/integrations
   * Request DTO: SaveMarketplaceIntegration
   */
  saveMarketplaceIntegration = (
    request: Partial<CodeMashHub2.SaveMarketplaceIntegration> = {} as Partial<CodeMashHub2.SaveMarketplaceIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/code/marketplace/integrations/{IntegrationViewId}
   * Request DTO: DeleteMarketplaceIntegration
   */
  deleteMarketplaceIntegration = (
    request: Partial<CodeMashHub2.DeleteMarketplaceIntegration> = {} as Partial<CodeMashHub2.DeleteMarketplaceIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}',
      method: 'DELETE',
      request,
      pathParams: ['IntegrationViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/marketplace/integrations/{IntegrationViewId}/enable
   * Request DTO: EnableMarketplaceIntegration
   */
  enableMarketplaceIntegration = (
    request: Partial<CodeMashHub2.EnableMarketplaceIntegration> = {} as Partial<CodeMashHub2.EnableMarketplaceIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/enable',
      method: 'POST',
      request,
      pathParams: ['IntegrationViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/marketplace/integrations/{IntegrationViewId}/disable
   * Request DTO: DisableMarketplaceIntegration
   */
  disableMarketplaceIntegration = (
    request: Partial<CodeMashHub2.DisableMarketplaceIntegration> = {} as Partial<CodeMashHub2.DisableMarketplaceIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/disable',
      method: 'POST',
      request,
      pathParams: ['IntegrationViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/marketplace/integrations/{IntegrationViewId}/bindings
   * Request DTO: GetMarketplaceBindings
   */
  getMarketplaceBindings = (
    request: Partial<CodeMashHub2.GetMarketplaceBindings> = {} as Partial<CodeMashHub2.GetMarketplaceBindings>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMarketplaceBindingsResponse> => {
    return this.transport.send<CodeMashHub2.GetMarketplaceBindingsResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/bindings',
      method: 'GET',
      request,
      pathParams: ['IntegrationViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/marketplace/integrations/{IntegrationViewId}/bindings/{BindingViewId}
   * Request DTO: GetMarketplaceBinding
   */
  getMarketplaceBinding = (
    request: Partial<CodeMashHub2.GetMarketplaceBinding> = {} as Partial<CodeMashHub2.GetMarketplaceBinding>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMarketplaceBindingResponse> => {
    return this.transport.send<CodeMashHub2.GetMarketplaceBindingResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/bindings/{BindingViewId}',
      method: 'GET',
      request,
      pathParams: ['IntegrationViewId', 'BindingViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/marketplace/integrations/{IntegrationViewId}/bindings
   * Request DTO: SaveMarketplaceFunctionBinding
   */
  saveMarketplaceFunctionBinding = (
    request: Partial<CodeMashHub2.SaveMarketplaceFunctionBinding> = {} as Partial<CodeMashHub2.SaveMarketplaceFunctionBinding>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/bindings',
      method: 'POST',
      request,
      pathParams: ['IntegrationViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/code/marketplace/integrations/{IntegrationViewId}/bindings/{BindingViewId}
   * Request DTO: DeleteMarketplaceFunctionBinding
   */
  deleteMarketplaceFunctionBinding = (
    request: Partial<CodeMashHub2.DeleteMarketplaceFunctionBinding> = {} as Partial<CodeMashHub2.DeleteMarketplaceFunctionBinding>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/bindings/{BindingViewId}',
      method: 'DELETE',
      request,
      pathParams: ['IntegrationViewId', 'BindingViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/marketplace/integrations/{IntegrationViewId}/bindings/{BindingViewId}/enable
   * Request DTO: EnableMarketplaceFunctionBinding
   */
  enableMarketplaceFunctionBinding = (
    request: Partial<CodeMashHub2.EnableMarketplaceFunctionBinding> = {} as Partial<CodeMashHub2.EnableMarketplaceFunctionBinding>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/bindings/{BindingViewId}/enable',
      method: 'POST',
      request,
      pathParams: ['IntegrationViewId', 'BindingViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/marketplace/integrations/{IntegrationViewId}/bindings/{BindingViewId}/disable
   * Request DTO: DisableMarketplaceFunctionBinding
   */
  disableMarketplaceFunctionBinding = (
    request: Partial<CodeMashHub2.DisableMarketplaceFunctionBinding> = {} as Partial<CodeMashHub2.DisableMarketplaceFunctionBinding>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/bindings/{BindingViewId}/disable',
      method: 'POST',
      request,
      pathParams: ['IntegrationViewId', 'BindingViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/marketplace/integrations/{IntegrationViewId}/bindings/{BindingViewId}/tokens
   * Request DTO: GetMarketplaceBindingTokens
   */
  getMarketplaceBindingTokens = (
    request: Partial<CodeMashHub2.GetMarketplaceBindingTokens> = {} as Partial<CodeMashHub2.GetMarketplaceBindingTokens>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMarketplaceTokensResponse> => {
    return this.transport.send<CodeMashHub2.GetMarketplaceTokensResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/bindings/{BindingViewId}/tokens',
      method: 'GET',
      request,
      pathParams: ['IntegrationViewId', 'BindingViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/marketplace/integrations/{IntegrationViewId}/bindings/{BindingViewId}/invoke
   * Request DTO: InvokeMarketplaceFunctionBinding
   */
  invokeMarketplaceFunctionBinding = (
    request: Partial<CodeMashHub2.InvokeMarketplaceFunctionBinding> = {} as Partial<CodeMashHub2.InvokeMarketplaceFunctionBinding>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.InvokeMarketplaceFunctionBindingResponse> => {
    return this.transport.send<CodeMashHub2.InvokeMarketplaceFunctionBindingResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/bindings/{BindingViewId}/invoke',
      method: 'POST',
      request,
      pathParams: ['IntegrationViewId', 'BindingViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/marketplace/integrations/{IntegrationViewId}/functions
   * Request DTO: GetMarketplaceFunctionCatalog
   */
  getMarketplaceFunctionCatalog = (
    request: Partial<CodeMashHub2.GetMarketplaceFunctionCatalog> = {} as Partial<CodeMashHub2.GetMarketplaceFunctionCatalog>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMarketplaceFunctionCatalogResponse> => {
    return this.transport.send<CodeMashHub2.GetMarketplaceFunctionCatalogResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions',
      method: 'GET',
      request,
      pathParams: ['IntegrationViewId'],
      scope: 'project',
      ...options,
    });
  };
}
