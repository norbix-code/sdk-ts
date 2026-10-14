import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashApi2 } from '../types/api2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: notifications
 * Endpoints: 7
 */
export class NotificationsModule {
  constructor(private readonly transport: Transport) {}

  /**
   * POST /{version}/notifications/push/devices
   * Request DTO: RegisterOwnPushDeviceRequest
   */
  registerOwnPushDevice = (
    request: Partial<CodeMashApi2.RegisterOwnPushDeviceRequest> = {} as Partial<CodeMashApi2.RegisterOwnPushDeviceRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/notifications/push/devices',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/devices
   * Request DTO: GetOwnPushDevicesRequest
   */
  getOwnPushDevices = (
    request: Partial<CodeMashApi2.GetOwnPushDevicesRequest> = {} as Partial<CodeMashApi2.GetOwnPushDevicesRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetOwnPushDevicesResponse> => {
    return this.transport.send<CodeMashApi2.GetOwnPushDevicesResponse>({
      target: 'api',
      path: '/{version}/notifications/push/devices',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/notifications/push/devices/{Id}
   * Request DTO: DeleteOwnPushDeviceRequest
   */
  deleteOwnPushDevice = (
    request: Partial<CodeMashApi2.DeleteOwnPushDeviceRequest> = {} as Partial<CodeMashApi2.DeleteOwnPushDeviceRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/notifications/push/devices/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/notifications/push/devices
   * Request DTO: DeleteOwnPushDeviceByTokenRequest
   */
  deleteOwnPushDeviceByToken = (
    request: Partial<CodeMashApi2.DeleteOwnPushDeviceByTokenRequest> = {} as Partial<CodeMashApi2.DeleteOwnPushDeviceByTokenRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/notifications/push/devices',
      method: 'DELETE',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/messages
   * Request DTO: GetOwnPushMessagesRequest
   */
  getOwnPushMessages = (
    request: Partial<CodeMashApi2.GetOwnPushMessagesRequest> = {} as Partial<CodeMashApi2.GetOwnPushMessagesRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetOwnPushMessagesResponse> => {
    return this.transport.send<CodeMashApi2.GetOwnPushMessagesResponse>({
      target: 'api',
      path: '/{version}/notifications/push/messages',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/push/messages/{Id}/read
   * Request DTO: MarkOwnPushMessageReadRequest
   */
  markOwnPushMessageRead = (
    request: Partial<CodeMashApi2.MarkOwnPushMessageReadRequest> = {} as Partial<CodeMashApi2.MarkOwnPushMessageReadRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/notifications/push/messages/{Id}/read',
      method: 'POST',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/push/messages/read
   * Request DTO: MarkAllOwnPushMessagesReadRequest
   */
  markAllOwnPushMessagesRead = (
    request: Partial<CodeMashApi2.MarkAllOwnPushMessagesReadRequest> = {} as Partial<CodeMashApi2.MarkAllOwnPushMessagesReadRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/notifications/push/messages/read',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
