import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashApi2 } from '../types/api2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: payments
 * Endpoints: 4
 */
export class PaymentsModule {
  constructor(private readonly transport: Transport) {}

  /**
   * POST /{version}/payments/orders
   * Request DTO: CreatePaymentOrderRequest
   */
  createPaymentOrder = (
    request: Partial<CodeMashApi2.CreatePaymentOrderRequest> = {} as Partial<CodeMashApi2.CreatePaymentOrderRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/payments/orders',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/payments/orders/{Id}
   * Request DTO: GetPaymentOrderRequest
   */
  getPaymentOrder = (
    request: Partial<CodeMashApi2.GetPaymentOrderRequest> = {} as Partial<CodeMashApi2.GetPaymentOrderRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetPaymentOrderResponse> => {
    return this.transport.send<CodeMashApi2.GetPaymentOrderResponse>({
      target: 'api',
      path: '/{version}/payments/orders/{Id}',
      method: 'GET',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/payments/orders
   * Request DTO: GetPaymentOrdersRequest
   */
  getPaymentOrders = (
    request: Partial<CodeMashApi2.GetPaymentOrdersRequest> = {} as Partial<CodeMashApi2.GetPaymentOrdersRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetPaymentOrdersResponse> => {
    return this.transport.send<CodeMashApi2.GetPaymentOrdersResponse>({
      target: 'api',
      path: '/{version}/payments/orders',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/payments/orders/{Id}/checkout
   * Request DTO: StartPaymentCheckoutRequest
   */
  startPaymentCheckout = (
    request: Partial<CodeMashApi2.StartPaymentCheckoutRequest> = {} as Partial<CodeMashApi2.StartPaymentCheckoutRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.StartPaymentCheckoutResponse> => {
    return this.transport.send<CodeMashApi2.StartPaymentCheckoutResponse>({
      target: 'api',
      path: '/{version}/payments/orders/{Id}/checkout',
      method: 'POST',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };
}
