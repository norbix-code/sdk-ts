import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: webhooks
 * Endpoints: 9
 */
export class WebhooksModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/webhooks/integration
   * Request DTO: GetWebhookIntegration
   */
  getWebhookIntegration = (
    request: Partial<CodeMashHub2.GetWebhookIntegration> = {} as Partial<CodeMashHub2.GetWebhookIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetWebhookIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.GetWebhookIntegrationResponse>({
      target: 'hub',
      path: '/{version}/webhooks/integration',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/webhooks/integration/secret
   * Request DTO: RevealWebhookIntegrationSecretRequest
   */
  revealWebhookIntegrationSecret = (
    request: Partial<CodeMashHub2.RevealWebhookIntegrationSecretRequest> = {} as Partial<CodeMashHub2.RevealWebhookIntegrationSecretRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.RevealWebhookIntegrationSecretResponse> => {
    return this.transport.send<CodeMashHub2.RevealWebhookIntegrationSecretResponse>({
      target: 'hub',
      path: '/{version}/webhooks/integration/secret',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/webhooks/integration/secret/rotate
   * Request DTO: RotateWebhookIntegrationSecretRequest
   */
  rotateWebhookIntegrationSecret = (
    request: Partial<CodeMashHub2.RotateWebhookIntegrationSecretRequest> = {} as Partial<CodeMashHub2.RotateWebhookIntegrationSecretRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.RotateWebhookIntegrationSecretResponse> => {
    return this.transport.send<CodeMashHub2.RotateWebhookIntegrationSecretResponse>({
      target: 'hub',
      path: '/{version}/webhooks/integration/secret/rotate',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/webhooks/integration/extra-headers
   * Request DTO: UpdateWebhookIntegrationExtraHeadersRequest
   */
  updateWebhookIntegrationExtraHeaders = (
    request: Partial<CodeMashHub2.UpdateWebhookIntegrationExtraHeadersRequest> = {} as Partial<CodeMashHub2.UpdateWebhookIntegrationExtraHeadersRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/webhooks/integration/extra-headers',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/webhooks/{source}/{integrationInstanceId}
   * Request DTO: ReceiveWebhook
   */
  receiveWebhook = (
    request: Partial<CodeMashHub2.ReceiveWebhook> = {} as Partial<CodeMashHub2.ReceiveWebhook>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.HttpResult> => {
    return this.transport.send<CodeMashHub2.HttpResult>({
      target: 'hub',
      path: '/{version}/webhooks/{source}/{integrationInstanceId}',
      method: 'POST',
      request,
      pathParams: ['source', 'integrationInstanceId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/webhooks/destinations/{DestinationId}/disable
   * Request DTO: DisableWebhookDestinationRequest
   */
  disableWebhookDestination = (
    request: Partial<CodeMashHub2.DisableWebhookDestinationRequest> = {} as Partial<CodeMashHub2.DisableWebhookDestinationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/webhooks/destinations/{DestinationId}/disable',
      method: 'PUT',
      request,
      pathParams: ['DestinationId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/webhooks/destinations/{DestinationId}/enable
   * Request DTO: EnableWebhookDestinationRequest
   */
  enableWebhookDestination = (
    request: Partial<CodeMashHub2.EnableWebhookDestinationRequest> = {} as Partial<CodeMashHub2.EnableWebhookDestinationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/webhooks/destinations/{DestinationId}/enable',
      method: 'PUT',
      request,
      pathParams: ['DestinationId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/webhooks/destinations/{DestinationId}
   * Request DTO: RemoveWebhookDestinationRequest
   */
  removeWebhookDestination = (
    request: Partial<CodeMashHub2.RemoveWebhookDestinationRequest> = {} as Partial<CodeMashHub2.RemoveWebhookDestinationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/webhooks/destinations/{DestinationId}',
      method: 'DELETE',
      request,
      pathParams: ['DestinationId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/webhooks/destinations
   * Request DTO: SaveWebhookDestinationRequest
   */
  saveWebhookDestination = (
    request: Partial<CodeMashHub2.SaveWebhookDestinationRequest> = {} as Partial<CodeMashHub2.SaveWebhookDestinationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.SaveWebhookDestinationResponse> => {
    return this.transport.send<CodeMashHub2.SaveWebhookDestinationResponse>({
      target: 'hub',
      path: '/{version}/webhooks/destinations',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
