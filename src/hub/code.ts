import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

import { LogsModule } from './logs.js'; // @hand-written

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: code
 * Endpoints: 68
 */
export class CodeModule {
  constructor(private readonly transport: Transport) {}

  /**
   * PUT /{version}/code/enable
   * Request DTO: EnableCode
   */
  enableCode = (
    request: Partial<CodeMashHub2.EnableCode> = {} as Partial<CodeMashHub2.EnableCode>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/code/enable',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/code/disable
   * Request DTO: DisableCode
   */
  disableCode = (
    request: Partial<CodeMashHub2.DisableCode> = {} as Partial<CodeMashHub2.DisableCode>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/code/disable',
      method: 'PUT',
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
   * GET /{version}/code/marketplace/integrations/{IntegrationViewId}/functions
   * Request DTO: GetMarketplaceFunctions
   */
  getMarketplaceFunctions = (
    request: Partial<CodeMashHub2.GetMarketplaceFunctions> = {} as Partial<CodeMashHub2.GetMarketplaceFunctions>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMarketplaceFunctionsResponse> => {
    return this.transport.send<CodeMashHub2.GetMarketplaceFunctionsResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions',
      method: 'GET',
      request,
      pathParams: ['IntegrationViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}
   * Request DTO: GetMarketplaceFunction
   */
  getMarketplaceFunction = (
    request: Partial<CodeMashHub2.GetMarketplaceFunction> = {} as Partial<CodeMashHub2.GetMarketplaceFunction>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMarketplaceFunctionResponse> => {
    return this.transport.send<CodeMashHub2.GetMarketplaceFunctionResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}',
      method: 'GET',
      request,
      pathParams: ['IntegrationViewId', 'FunctionViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/marketplace/integrations/{IntegrationViewId}/functions
   * Request DTO: SaveMarketplaceFunction
   */
  saveMarketplaceFunction = (
    request: Partial<CodeMashHub2.SaveMarketplaceFunction> = {} as Partial<CodeMashHub2.SaveMarketplaceFunction>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions',
      method: 'POST',
      request,
      pathParams: ['IntegrationViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}
   * Request DTO: DeleteMarketplaceFunction
   */
  deleteMarketplaceFunction = (
    request: Partial<CodeMashHub2.DeleteMarketplaceFunction> = {} as Partial<CodeMashHub2.DeleteMarketplaceFunction>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}',
      method: 'DELETE',
      request,
      pathParams: ['IntegrationViewId', 'FunctionViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/enable
   * Request DTO: EnableMarketplaceFunction
   */
  enableMarketplaceFunction = (
    request: Partial<CodeMashHub2.EnableMarketplaceFunction> = {} as Partial<CodeMashHub2.EnableMarketplaceFunction>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/enable',
      method: 'POST',
      request,
      pathParams: ['IntegrationViewId', 'FunctionViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/disable
   * Request DTO: DisableMarketplaceFunction
   */
  disableMarketplaceFunction = (
    request: Partial<CodeMashHub2.DisableMarketplaceFunction> = {} as Partial<CodeMashHub2.DisableMarketplaceFunction>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/disable',
      method: 'POST',
      request,
      pathParams: ['IntegrationViewId', 'FunctionViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/tokens
   * Request DTO: GetMarketplaceFunctionTokens
   */
  getMarketplaceFunctionTokens = (
    request: Partial<CodeMashHub2.GetMarketplaceFunctionTokens> = {} as Partial<CodeMashHub2.GetMarketplaceFunctionTokens>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMarketplaceTokensResponse> => {
    return this.transport.send<CodeMashHub2.GetMarketplaceTokensResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/tokens',
      method: 'GET',
      request,
      pathParams: ['IntegrationViewId', 'FunctionViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/marketplace/functions/{FunctionViewId}/invoke
   * Request DTO: InvokeMarketplaceFunction
   */
  invokeMarketplaceFunction = (
    request: Partial<CodeMashHub2.InvokeMarketplaceFunction> = {} as Partial<CodeMashHub2.InvokeMarketplaceFunction>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.InvokeMarketplaceFunctionResponse> => {
    return this.transport.send<CodeMashHub2.InvokeMarketplaceFunctionResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/functions/{FunctionViewId}/invoke',
      method: 'POST',
      request,
      pathParams: ['FunctionViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/marketplace/listings/{ListingViewId}
   * Request DTO: GetMarketplaceListing
   */
  getMarketplaceListing = (
    request: Partial<CodeMashHub2.GetMarketplaceListing> = {} as Partial<CodeMashHub2.GetMarketplaceListing>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMarketplaceListingResponse> => {
    return this.transport.send<CodeMashHub2.GetMarketplaceListingResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/listings/{ListingViewId}',
      method: 'GET',
      request,
      pathParams: ['ListingViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/marketplace/integrations/{IntegrationViewId}/test
   * Request DTO: TestMarketplaceIntegration
   */
  testMarketplaceIntegration = (
    request: Partial<CodeMashHub2.TestMarketplaceIntegration> = {} as Partial<CodeMashHub2.TestMarketplaceIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.TestMarketplaceIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.TestMarketplaceIntegrationResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/test',
      method: 'POST',
      request,
      pathParams: ['IntegrationViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/code/workflows
   * Request DTO: SaveCodeWorkflow
   */
  saveCodeWorkflow = (
    request: Partial<CodeMashHub2.SaveCodeWorkflow> = {} as Partial<CodeMashHub2.SaveCodeWorkflow>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.WorkflowResponse> => {
    return this.transport.send<CodeMashHub2.WorkflowResponse>({
      target: 'hub',
      path: '/{version}/code/workflows',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/workflows/{Id}/publish
   * Request DTO: PublishCodeWorkflow
   */
  publishCodeWorkflow = (
    request: Partial<CodeMashHub2.PublishCodeWorkflow> = {} as Partial<CodeMashHub2.PublishCodeWorkflow>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.WorkflowResponse> => {
    return this.transport.send<CodeMashHub2.WorkflowResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/{Id}/publish',
      method: 'POST',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/workflows/{Id}/draft
   * Request DTO: GetCodeWorkflowDraft
   */
  getCodeWorkflowDraft = (
    request: Partial<CodeMashHub2.GetCodeWorkflowDraft> = {} as Partial<CodeMashHub2.GetCodeWorkflowDraft>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.WorkflowResponse> => {
    return this.transport.send<CodeMashHub2.WorkflowResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/{Id}/draft',
      method: 'GET',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/code/workflows/{Id}/draft
   * Request DTO: DiscardCodeWorkflowDraft
   */
  discardCodeWorkflowDraft = (
    request: Partial<CodeMashHub2.DiscardCodeWorkflowDraft> = {} as Partial<CodeMashHub2.DiscardCodeWorkflowDraft>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/{Id}/draft',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/workflows/{Id}/versions
   * Request DTO: GetCodeWorkflowVersions
   */
  getCodeWorkflowVersions = (
    request: Partial<CodeMashHub2.GetCodeWorkflowVersions> = {} as Partial<CodeMashHub2.GetCodeWorkflowVersions>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.WorkflowVersionsResponse> => {
    return this.transport.send<CodeMashHub2.WorkflowVersionsResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/{Id}/versions',
      method: 'GET',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/workflows/{Id}/versions/diff
   * Request DTO: GetCodeWorkflowVersionDiff
   */
  getCodeWorkflowVersionDiff = (
    request: Partial<CodeMashHub2.GetCodeWorkflowVersionDiff> = {} as Partial<CodeMashHub2.GetCodeWorkflowVersionDiff>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.WorkflowVersionDiffResponse> => {
    return this.transport.send<CodeMashHub2.WorkflowVersionDiffResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/{Id}/versions/diff',
      method: 'GET',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/workflows/validate
   * Request DTO: ValidateCodeWorkflow
   */
  validateCodeWorkflow = (
    request: Partial<CodeMashHub2.ValidateCodeWorkflow> = {} as Partial<CodeMashHub2.ValidateCodeWorkflow>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.ValidateCodeWorkflowResponse> => {
    return this.transport.send<CodeMashHub2.ValidateCodeWorkflowResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/validate',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/workflows
   * Request DTO: GetCodeWorkflows
   */
  getCodeWorkflows = (
    request: Partial<CodeMashHub2.GetCodeWorkflows> = {} as Partial<CodeMashHub2.GetCodeWorkflows>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.WorkflowsResponse> => {
    return this.transport.send<CodeMashHub2.WorkflowsResponse>({
      target: 'hub',
      path: '/{version}/code/workflows',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/workflows/{Id}
   * Request DTO: GetCodeWorkflow
   */
  getCodeWorkflow = (
    request: Partial<CodeMashHub2.GetCodeWorkflow> = {} as Partial<CodeMashHub2.GetCodeWorkflow>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.WorkflowResponse> => {
    return this.transport.send<CodeMashHub2.WorkflowResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/{Id}',
      method: 'GET',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/code/workflows/{Id}
   * Request DTO: DeleteCodeWorkflow
   */
  deleteCodeWorkflow = (
    request: Partial<CodeMashHub2.DeleteCodeWorkflow> = {} as Partial<CodeMashHub2.DeleteCodeWorkflow>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/code/workflows/{Id}/enable
   * Request DTO: EnableCodeWorkflow
   */
  enableCodeWorkflow = (
    request: Partial<CodeMashHub2.EnableCodeWorkflow> = {} as Partial<CodeMashHub2.EnableCodeWorkflow>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.WorkflowResponse> => {
    return this.transport.send<CodeMashHub2.WorkflowResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/{Id}/enable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/code/workflows/{Id}/disable
   * Request DTO: DisableCodeWorkflow
   */
  disableCodeWorkflow = (
    request: Partial<CodeMashHub2.DisableCodeWorkflow> = {} as Partial<CodeMashHub2.DisableCodeWorkflow>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.WorkflowResponse> => {
    return this.transport.send<CodeMashHub2.WorkflowResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/{Id}/disable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/workflows/schema
   * Request DTO: GetCodeWorkflowSchema
   */
  getCodeWorkflowSchema = (
    request: Partial<CodeMashHub2.GetCodeWorkflowSchema> = {} as Partial<CodeMashHub2.GetCodeWorkflowSchema>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.WorkflowSchemaResponse> => {
    return this.transport.send<CodeMashHub2.WorkflowSchemaResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/schema',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/code/workflows/enable
   * Request DTO: EnableCodeWorkflows
   */
  enableCodeWorkflows = (
    request: Partial<CodeMashHub2.EnableCodeWorkflows> = {} as Partial<CodeMashHub2.EnableCodeWorkflows>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/enable',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/code/workflows/disable
   * Request DTO: DisableCodeWorkflows
   */
  disableCodeWorkflows = (
    request: Partial<CodeMashHub2.DisableCodeWorkflows> = {} as Partial<CodeMashHub2.DisableCodeWorkflows>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/disable',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/workflows/{Id}/invoke
   * Request DTO: InvokeCodeWorkflow
   */
  invokeCodeWorkflow = (
    request: Partial<CodeMashHub2.InvokeCodeWorkflow> = {} as Partial<CodeMashHub2.InvokeCodeWorkflow>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.InvokeCodeWorkflowResponse> => {
    return this.transport.send<CodeMashHub2.InvokeCodeWorkflowResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/{Id}/invoke',
      method: 'POST',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/workflows/{Id}/runs
   * Request DTO: GetCodeWorkflowRuns
   */
  getCodeWorkflowRuns = (
    request: Partial<CodeMashHub2.GetCodeWorkflowRuns> = {} as Partial<CodeMashHub2.GetCodeWorkflowRuns>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.WorkflowRunsResponse> => {
    return this.transport.send<CodeMashHub2.WorkflowRunsResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/{Id}/runs',
      method: 'GET',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/workflows/runs
   * Request DTO: GetCodeWorkflowWaitingRuns
   */
  getCodeWorkflowWaitingRuns = (
    request: Partial<CodeMashHub2.GetCodeWorkflowWaitingRuns> = {} as Partial<CodeMashHub2.GetCodeWorkflowWaitingRuns>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.WorkflowRunsResponse> => {
    return this.transport.send<CodeMashHub2.WorkflowRunsResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/runs',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/workflows/runs/{RunId}
   * Request DTO: GetCodeWorkflowRun
   */
  getCodeWorkflowRun = (
    request: Partial<CodeMashHub2.GetCodeWorkflowRun> = {} as Partial<CodeMashHub2.GetCodeWorkflowRun>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.WorkflowRunResponse> => {
    return this.transport.send<CodeMashHub2.WorkflowRunResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/runs/{RunId}',
      method: 'GET',
      request,
      pathParams: ['RunId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/workflows/runs/{RunId}/logs
   * Request DTO: GetCodeWorkflowRunLogs
   */
  getCodeWorkflowRunLogs = (
    request: Partial<CodeMashHub2.GetCodeWorkflowRunLogs> = {} as Partial<CodeMashHub2.GetCodeWorkflowRunLogs>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.WorkflowRunLogsResponse> => {
    return this.transport.send<CodeMashHub2.WorkflowRunLogsResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/runs/{RunId}/logs',
      method: 'GET',
      request,
      pathParams: ['RunId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/workflows/runs/{RunId}/resume
   * Request DTO: ResumeCodeWorkflowRun
   */
  resumeCodeWorkflowRun = (
    request: Partial<CodeMashHub2.ResumeCodeWorkflowRun> = {} as Partial<CodeMashHub2.ResumeCodeWorkflowRun>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.WorkflowRunResponse> => {
    return this.transport.send<CodeMashHub2.WorkflowRunResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/runs/{RunId}/resume',
      method: 'POST',
      request,
      pathParams: ['RunId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/workflows/{Id}/resume
   * Request DTO: ResumeCodeWorkflowRunByKey
   */
  resumeCodeWorkflowRunByKey = (
    request: Partial<CodeMashHub2.ResumeCodeWorkflowRunByKey> = {} as Partial<CodeMashHub2.ResumeCodeWorkflowRunByKey>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.WorkflowRunResponse> => {
    return this.transport.send<CodeMashHub2.WorkflowRunResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/{Id}/resume',
      method: 'POST',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/workflows/runs/{RunId}/retry
   * Request DTO: RetryCodeWorkflowRunStep
   */
  retryCodeWorkflowRunStep = (
    request: Partial<CodeMashHub2.RetryCodeWorkflowRunStep> = {} as Partial<CodeMashHub2.RetryCodeWorkflowRunStep>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.WorkflowRunResponse> => {
    return this.transport.send<CodeMashHub2.WorkflowRunResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/runs/{RunId}/retry',
      method: 'POST',
      request,
      pathParams: ['RunId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/workflows/runs/{RunId}/cancel
   * Request DTO: CancelCodeWorkflowRun
   */
  cancelCodeWorkflowRun = (
    request: Partial<CodeMashHub2.CancelCodeWorkflowRun> = {} as Partial<CodeMashHub2.CancelCodeWorkflowRun>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.WorkflowRunResponse> => {
    return this.transport.send<CodeMashHub2.WorkflowRunResponse>({
      target: 'hub',
      path: '/{version}/code/workflows/runs/{RunId}/cancel',
      method: 'POST',
      request,
      pathParams: ['RunId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/marketplace/integrations/{IntegrationViewId}/access
   * Request DTO: GetMarketplaceIntegrationAccess
   */
  getMarketplaceIntegrationAccess = (
    request: Partial<CodeMashHub2.GetMarketplaceIntegrationAccess> = {} as Partial<CodeMashHub2.GetMarketplaceIntegrationAccess>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMarketplaceIntegrationAccessResponse> => {
    return this.transport.send<CodeMashHub2.GetMarketplaceIntegrationAccessResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/access',
      method: 'GET',
      request,
      pathParams: ['IntegrationViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/code/marketplace/integrations/{IntegrationViewId}/access/roles
   * Request DTO: SetMarketplaceIntegrationRoleAccess
   */
  setMarketplaceIntegrationRoleAccess = (
    request: Partial<CodeMashHub2.SetMarketplaceIntegrationRoleAccess> = {} as Partial<CodeMashHub2.SetMarketplaceIntegrationRoleAccess>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/access/roles',
      method: 'PUT',
      request,
      pathParams: ['IntegrationViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/marketplace/integrations/{IntegrationViewId}/access/roles/custom
   * Request DTO: SaveMarketplaceIntegrationCustomAccess
   */
  saveMarketplaceIntegrationCustomAccess = (
    request: Partial<CodeMashHub2.SaveMarketplaceIntegrationCustomAccess> = {} as Partial<CodeMashHub2.SaveMarketplaceIntegrationCustomAccess>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.SaveMarketplaceIntegrationCustomAccessResponse> => {
    return this.transport.send<CodeMashHub2.SaveMarketplaceIntegrationCustomAccessResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/access/roles/custom',
      method: 'POST',
      request,
      pathParams: ['IntegrationViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/marketplace/integrations/{IntegrationViewId}/tools
   * Request DTO: GetMarketplaceIntegrationTools
   */
  getMarketplaceIntegrationTools = (
    request: Partial<CodeMashHub2.GetMarketplaceIntegrationTools> = {} as Partial<CodeMashHub2.GetMarketplaceIntegrationTools>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMarketplaceIntegrationToolsResponse> => {
    return this.transport.send<CodeMashHub2.GetMarketplaceIntegrationToolsResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/tools',
      method: 'GET',
      request,
      pathParams: ['IntegrationViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/marketplace/integrations/{IntegrationViewId}/oauth/start
   * Request DTO: StartMarketplaceIntegrationSignIn
   */
  startMarketplaceIntegrationSignIn = (
    request: Partial<CodeMashHub2.StartMarketplaceIntegrationSignIn> = {} as Partial<CodeMashHub2.StartMarketplaceIntegrationSignIn>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.StartMarketplaceIntegrationSignInResponse> => {
    return this.transport.send<CodeMashHub2.StartMarketplaceIntegrationSignInResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/oauth/start',
      method: 'POST',
      request,
      pathParams: ['IntegrationViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/marketplace/integrations/{IntegrationViewId}/oauth/sign-out
   * Request DTO: SignOutMarketplaceIntegration
   */
  signOutMarketplaceIntegration = (
    request: Partial<CodeMashHub2.SignOutMarketplaceIntegration> = {} as Partial<CodeMashHub2.SignOutMarketplaceIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.SignOutMarketplaceIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.SignOutMarketplaceIntegrationResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/oauth/sign-out',
      method: 'POST',
      request,
      pathParams: ['IntegrationViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/code/marketplace/integrations/{IntegrationViewId}/secrets
   * Request DTO: ReplaceMarketplaceIntegrationSecretsRequest
   */
  replaceMarketplaceIntegrationSecrets = (
    request: Partial<CodeMashHub2.ReplaceMarketplaceIntegrationSecretsRequest> = {} as Partial<CodeMashHub2.ReplaceMarketplaceIntegrationSecretsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyMarketplaceSecretsResponse> => {
    return this.transport.send<CodeMashHub2.EmptyMarketplaceSecretsResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/secrets',
      method: 'PUT',
      request,
      pathParams: ['IntegrationViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/marketplace/integrations/{IntegrationViewId}/secrets/reveal
   * Request DTO: RevealMarketplaceIntegrationSecretsRequest
   */
  revealMarketplaceIntegrationSecrets = (
    request: Partial<CodeMashHub2.RevealMarketplaceIntegrationSecretsRequest> = {} as Partial<CodeMashHub2.RevealMarketplaceIntegrationSecretsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.RevealMarketplaceIntegrationSecretsResponse> => {
    return this.transport.send<CodeMashHub2.RevealMarketplaceIntegrationSecretsResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/secrets/reveal',
      method: 'POST',
      request,
      pathParams: ['IntegrationViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/code/marketplace/integrations/{IntegrationViewId}/token-mappings
   * Request DTO: SetMarketplaceIntegrationTokenMappingsRequest
   */
  setMarketplaceIntegrationTokenMappings = (
    request: Partial<CodeMashHub2.SetMarketplaceIntegrationTokenMappingsRequest> = {} as Partial<CodeMashHub2.SetMarketplaceIntegrationTokenMappingsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.SetMarketplaceIntegrationTokenMappingsResponse> => {
    return this.transport.send<CodeMashHub2.SetMarketplaceIntegrationTokenMappingsResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/token-mappings',
      method: 'PUT',
      request,
      pathParams: ['IntegrationViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/marketplace/integrations/{IntegrationViewId}/catalog
   * Request DTO: GetMarketplaceFunctionCatalog
   */
  getMarketplaceFunctionCatalog = (
    request: Partial<CodeMashHub2.GetMarketplaceFunctionCatalog> = {} as Partial<CodeMashHub2.GetMarketplaceFunctionCatalog>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMarketplaceFunctionCatalogResponse> => {
    return this.transport.send<CodeMashHub2.GetMarketplaceFunctionCatalogResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/catalog',
      method: 'GET',
      request,
      pathParams: ['IntegrationViewId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/marketplace/functions/runs
   * Request DTO: GetMarketplaceFunctionRuns
   */
  getMarketplaceFunctionRuns = (
    request: Partial<CodeMashHub2.GetMarketplaceFunctionRuns> = {} as Partial<CodeMashHub2.GetMarketplaceFunctionRuns>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMarketplaceFunctionRunsResponse> => {
    return this.transport.send<CodeMashHub2.GetMarketplaceFunctionRunsResponse>({
      target: 'hub',
      path: '/{version}/code/marketplace/functions/runs',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/functions
   * Request DTO: GetCodeFunctions
   */
  getCodeFunctions = (
    request: Partial<CodeMashHub2.GetCodeFunctions> = {} as Partial<CodeMashHub2.GetCodeFunctions>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetCodeFunctionsResponse> => {
    return this.transport.send<CodeMashHub2.GetCodeFunctionsResponse>({
      target: 'hub',
      path: '/{version}/code/functions',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/functions/event-sample
   * Request DTO: GetCodeFunctionEventSample
   */
  getCodeFunctionEventSample = (
    request: Partial<CodeMashHub2.GetCodeFunctionEventSample> = {} as Partial<CodeMashHub2.GetCodeFunctionEventSample>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetCodeFunctionEventSampleResponse> => {
    return this.transport.send<CodeMashHub2.GetCodeFunctionEventSampleResponse>({
      target: 'hub',
      path: '/{version}/code/functions/event-sample',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/functions/qualifiers
   * Request DTO: GetCodeFunctionQualifiers
   */
  getCodeFunctionQualifiers = (
    request: Partial<CodeMashHub2.GetCodeFunctionQualifiers> = {} as Partial<CodeMashHub2.GetCodeFunctionQualifiers>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetCodeFunctionQualifiersResponse> => {
    return this.transport.send<CodeMashHub2.GetCodeFunctionQualifiersResponse>({
      target: 'hub',
      path: '/{version}/code/functions/qualifiers',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/code/functions/runs
   * Request DTO: GetCodeFunctionRuns
   */
  getCodeFunctionRuns = (
    request: Partial<CodeMashHub2.GetCodeFunctionRuns> = {} as Partial<CodeMashHub2.GetCodeFunctionRuns>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetCodeFunctionRunsResponse> => {
    return this.transport.send<CodeMashHub2.GetCodeFunctionRunsResponse>({
      target: 'hub',
      path: '/{version}/code/functions/runs',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/code/functions/invoke
   * Request DTO: InvokeCodeFunction
   */
  invokeCodeFunction = (
    request: Partial<CodeMashHub2.InvokeCodeFunction> = {} as Partial<CodeMashHub2.InvokeCodeFunction>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.InvokeCodeFunctionResponse> => {
    return this.transport.send<CodeMashHub2.InvokeCodeFunctionResponse>({
      target: 'hub',
      path: '/{version}/code/functions/invoke',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  // @hand-written:begin
  /**
   * Hand-written helper (not from `generate-endpoints`; the generator keeps
   * the `@hand-written` block and import when it regenerates this module).
   * The details of one marketplace function run: the project log lines filed
   * under the run's correlation id
   * (`marketplace:run:started` / `step` / `completed` | `failed` | `skipped`).
   *
   * Pass `row.correlationId` of a run from `getMarketplaceFunctionRuns`. Only a
   * row with `hasDetails: true` has lines — they are written only while the
   * environment's Norbix Logging is on; otherwise the list comes back empty.
   * Same call as `norbix.hub.logs.getLogsByCorrelationId({ targetCorrelationId })`
   * (GET /{version}/logs/audit).
   */
  getMarketplaceFunctionRunDetails = (
    correlationId: string,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetLogsByCorrelationIdResponse> => {
    return new LogsModule(this.transport).getLogsByCorrelationId(
      { targetCorrelationId: correlationId },
      options,
    );
  };
  // @hand-written:end
}
