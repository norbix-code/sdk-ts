import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: payments
 * Endpoints: 17
 */
export class PaymentsModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/payments/disable
   * Request DTO: DisablePayments
   */
  disablePayments = (
    request: Partial<CodeMashHub2.DisablePayments> = {} as Partial<CodeMashHub2.DisablePayments>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/payments/disable',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/payments/enable
   * Request DTO: EnablePayments
   */
  enablePayments = (
    request: Partial<CodeMashHub2.EnablePayments> = {} as Partial<CodeMashHub2.EnablePayments>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/payments/enable',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/payments/webhooks/log
   * Request DTO: GetPaymentsWebhookLog
   */
  getPaymentsWebhookLog = (
    request: Partial<CodeMashHub2.GetPaymentsWebhookLog> = {} as Partial<CodeMashHub2.GetPaymentsWebhookLog>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPaymentsWebhookLogResponse> => {
    return this.transport.send<CodeMashHub2.GetPaymentsWebhookLogResponse>({
      target: 'hub',
      path: '/{version}/payments/webhooks/log',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/payments/triggers/{triggerId}
   * Request DTO: DeletePaymentsTrigger
   */
  deletePaymentsTrigger = (
    request: Partial<CodeMashHub2.DeletePaymentsTrigger> = {} as Partial<CodeMashHub2.DeletePaymentsTrigger>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/payments/triggers/{triggerId}',
      method: 'DELETE',
      request,
      pathParams: ['triggerId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/payments/triggers/{triggerId}/disable
   * Request DTO: DisablePaymentsTrigger
   */
  disablePaymentsTrigger = (
    request: Partial<CodeMashHub2.DisablePaymentsTrigger> = {} as Partial<CodeMashHub2.DisablePaymentsTrigger>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/payments/triggers/{triggerId}/disable',
      method: 'PATCH',
      request,
      pathParams: ['triggerId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/payments/triggers/{triggerId}/enable
   * Request DTO: EnablePaymentsTrigger
   */
  enablePaymentsTrigger = (
    request: Partial<CodeMashHub2.EnablePaymentsTrigger> = {} as Partial<CodeMashHub2.EnablePaymentsTrigger>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/payments/triggers/{triggerId}/enable',
      method: 'PATCH',
      request,
      pathParams: ['triggerId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/payments/triggers/{id}
   * Request DTO: GetPaymentsTrigger
   */
  getPaymentsTrigger = (
    request: Partial<CodeMashHub2.GetPaymentsTrigger> = {} as Partial<CodeMashHub2.GetPaymentsTrigger>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPaymentsTriggerResponse> => {
    return this.transport.send<CodeMashHub2.GetPaymentsTriggerResponse>({
      target: 'hub',
      path: '/{version}/payments/triggers/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/payments/triggers
   * Request DTO: GetPaymentsTriggers
   */
  getPaymentsTriggers = (
    request: Partial<CodeMashHub2.GetPaymentsTriggers> = {} as Partial<CodeMashHub2.GetPaymentsTriggers>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPaymentsTriggersResponse> => {
    return this.transport.send<CodeMashHub2.GetPaymentsTriggersResponse>({
      target: 'hub',
      path: '/{version}/payments/triggers',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/payments/triggers
   * Request DTO: SavePaymentsTrigger
   */
  savePaymentsTrigger = (
    request: Partial<CodeMashHub2.SavePaymentsTrigger> = {} as Partial<CodeMashHub2.SavePaymentsTrigger>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/payments/triggers',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/payments/integrations/confirm-human-delivery
   * Request DTO: ConfirmPaymentsIntegrationHumanDeliveryRequest
   */
  confirmPaymentsIntegrationHumanDelivery = (
    request: Partial<CodeMashHub2.ConfirmPaymentsIntegrationHumanDeliveryRequest> = {} as Partial<CodeMashHub2.ConfirmPaymentsIntegrationHumanDeliveryRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/payments/integrations/confirm-human-delivery',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/payments/integrations/{Id}
   * Request DTO: DeletePaymentsIntegrationRequest
   */
  deletePaymentsIntegration = (
    request: Partial<CodeMashHub2.DeletePaymentsIntegrationRequest> = {} as Partial<CodeMashHub2.DeletePaymentsIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/payments/integrations/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/payments/integrations/{Id}/disable
   * Request DTO: DisablePaymentsIntegrationRequest
   */
  disablePaymentsIntegration = (
    request: Partial<CodeMashHub2.DisablePaymentsIntegrationRequest> = {} as Partial<CodeMashHub2.DisablePaymentsIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/payments/integrations/{Id}/disable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/payments/integrations/{Id}/enable
   * Request DTO: EnablePaymentsIntegrationRequest
   */
  enablePaymentsIntegration = (
    request: Partial<CodeMashHub2.EnablePaymentsIntegrationRequest> = {} as Partial<CodeMashHub2.EnablePaymentsIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/payments/integrations/{Id}/enable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/payments/integrations/{id}
   * Request DTO: GetPaymentsIntegration
   */
  getPaymentsIntegration = (
    request: Partial<CodeMashHub2.GetPaymentsIntegration> = {} as Partial<CodeMashHub2.GetPaymentsIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPaymentsIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.GetPaymentsIntegrationResponse>({
      target: 'hub',
      path: '/{version}/payments/integrations/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/payments/integrations
   * Request DTO: GetPaymentsIntegrations
   */
  getPaymentsIntegrations = (
    request: Partial<CodeMashHub2.GetPaymentsIntegrations> = {} as Partial<CodeMashHub2.GetPaymentsIntegrations>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPaymentsIntegrationsResponse> => {
    return this.transport.send<CodeMashHub2.GetPaymentsIntegrationsResponse>({
      target: 'hub',
      path: '/{version}/payments/integrations',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/payments/integrations
   * Request DTO: SavePaymentsIntegration
   */
  savePaymentsIntegration = (
    request: Partial<CodeMashHub2.SavePaymentsIntegration> = {} as Partial<CodeMashHub2.SavePaymentsIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/payments/integrations',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/payments/integrations/test
   * Request DTO: TestPaymentsIntegration
   */
  testPaymentsIntegration = (
    request: Partial<CodeMashHub2.TestPaymentsIntegration> = {} as Partial<CodeMashHub2.TestPaymentsIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.TestPaymentsIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.TestPaymentsIntegrationResponse>({
      target: 'hub',
      path: '/{version}/payments/integrations/test',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
