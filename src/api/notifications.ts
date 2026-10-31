import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashApi2 } from '../types/api2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: notifications
 * Endpoints: 48
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

  /**
   * GET /{version}/notifications/inbox
   * Request DTO: GetNotificationInboxRequest
   */
  getNotificationInbox = (
    request: Partial<CodeMashApi2.GetNotificationInboxRequest> = {} as Partial<CodeMashApi2.GetNotificationInboxRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetNotificationInboxResponse> => {
    return this.transport.send<CodeMashApi2.GetNotificationInboxResponse>({
      target: 'api',
      path: '/{version}/notifications/inbox',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/inbox/unread-count
   * Request DTO: GetUnreadCountRequest
   */
  getUnreadCount = (
    request: Partial<CodeMashApi2.GetUnreadCountRequest> = {} as Partial<CodeMashApi2.GetUnreadCountRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetUnreadCountResponse> => {
    return this.transport.send<CodeMashApi2.GetUnreadCountResponse>({
      target: 'api',
      path: '/{version}/notifications/inbox/unread-count',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/inbox/{notificationId}/read
   * Request DTO: MarkNotificationReadRequest
   */
  markNotificationRead = (
    request: Partial<CodeMashApi2.MarkNotificationReadRequest> = {} as Partial<CodeMashApi2.MarkNotificationReadRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.MarkNotificationReadResponse> => {
    return this.transport.send<CodeMashApi2.MarkNotificationReadResponse>({
      target: 'api',
      path: '/{version}/notifications/inbox/{notificationId}/read',
      method: 'POST',
      request,
      pathParams: ['notificationId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/inbox/read-all
   * Request DTO: MarkAllNotificationsReadRequest
   */
  markAllNotificationsRead = (
    request: Partial<CodeMashApi2.MarkAllNotificationsReadRequest> = {} as Partial<CodeMashApi2.MarkAllNotificationsReadRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.MarkAllNotificationsReadResponse> => {
    return this.transport.send<CodeMashApi2.MarkAllNotificationsReadResponse>({
      target: 'api',
      path: '/{version}/notifications/inbox/read-all',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/email/campaigns
   * Request DTO: CreateEmailCampaignRequest
   */
  createEmailCampaign = (
    request: Partial<CodeMashApi2.CreateEmailCampaignRequest> = {} as Partial<CodeMashApi2.CreateEmailCampaignRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/notifications/email/campaigns',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/notifications/email/campaigns/{Id}
   * Request DTO: DeleteEmailCampaignRequest
   */
  deleteEmailCampaign = (
    request: Partial<CodeMashApi2.DeleteEmailCampaignRequest> = {} as Partial<CodeMashApi2.DeleteEmailCampaignRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/notifications/email/campaigns/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/campaigns/{id}
   * Request DTO: GetEmailCampaign
   */
  getEmailCampaign = (
    request: Partial<CodeMashApi2.GetEmailCampaign> = {} as Partial<CodeMashApi2.GetEmailCampaign>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetEmailCampaignResponse> => {
    return this.transport.send<CodeMashApi2.GetEmailCampaignResponse>({
      target: 'api',
      path: '/{version}/notifications/email/campaigns/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/campaigns
   * Request DTO: GetEmailCampaigns
   */
  getEmailCampaigns = (
    request: Partial<CodeMashApi2.GetEmailCampaigns> = {} as Partial<CodeMashApi2.GetEmailCampaigns>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetEmailCampaignsResponse> => {
    return this.transport.send<CodeMashApi2.GetEmailCampaignsResponse>({
      target: 'api',
      path: '/{version}/notifications/email/campaigns',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/campaigns/{id}/batches
   * Request DTO: GetEmailCampaignBatches
   */
  getEmailCampaignBatches = (
    request: Partial<CodeMashApi2.GetEmailCampaignBatches> = {} as Partial<CodeMashApi2.GetEmailCampaignBatches>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetEmailCampaignBatchesResponse> => {
    return this.transport.send<CodeMashApi2.GetEmailCampaignBatchesResponse>({
      target: 'api',
      path: '/{version}/notifications/email/campaigns/{id}/batches',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/campaigns/{id}/batches/{batchId}/{notificationId}
   * Request DTO: GetEmailCampaignBatchNotification
   */
  getEmailCampaignBatchNotification = (
    request: Partial<CodeMashApi2.GetEmailCampaignBatchNotification> = {} as Partial<CodeMashApi2.GetEmailCampaignBatchNotification>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetEmailCampaignBatchNotificationResponse> => {
    return this.transport.send<CodeMashApi2.GetEmailCampaignBatchNotificationResponse>({
      target: 'api',
      path: '/{version}/notifications/email/campaigns/{id}/batches/{batchId}/{notificationId}',
      method: 'GET',
      request,
      pathParams: ['id', 'batchId', 'notificationId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/campaigns/{id}/batches/{batchId}
   * Request DTO: GetEmailCampaignBatchNotifications
   */
  getEmailCampaignBatchNotifications = (
    request: Partial<CodeMashApi2.GetEmailCampaignBatchNotifications> = {} as Partial<CodeMashApi2.GetEmailCampaignBatchNotifications>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetEmailCampaignBatchNotificationsResponse> => {
    return this.transport.send<CodeMashApi2.GetEmailCampaignBatchNotificationsResponse>({
      target: 'api',
      path: '/{version}/notifications/email/campaigns/{id}/batches/{batchId}',
      method: 'GET',
      request,
      pathParams: ['id', 'batchId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/campaigns/{id}/stats
   * Request DTO: GetEmailCampaignStatistics
   */
  getEmailCampaignStatistics = (
    request: Partial<CodeMashApi2.GetEmailCampaignStatistics> = {} as Partial<CodeMashApi2.GetEmailCampaignStatistics>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetEmailCampaignStatisticsResponse> => {
    return this.transport.send<CodeMashApi2.GetEmailCampaignStatisticsResponse>({
      target: 'api',
      path: '/{version}/notifications/email/campaigns/{id}/stats',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/preview
   * Request DTO: PreviewEmailNotification
   */
  previewEmailNotification = (
    request: Partial<CodeMashApi2.PreviewEmailNotification> = {} as Partial<CodeMashApi2.PreviewEmailNotification>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PreviewEmailNotificationResponse> => {
    return this.transport.send<CodeMashApi2.PreviewEmailNotificationResponse>({
      target: 'api',
      path: '/{version}/notifications/email/preview',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'optional',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/email/campaigns/{Id}/retry-failed
   * Request DTO: RetryFailedEmailNotificationsRequest
   */
  retryFailedEmailNotifications = (
    request: Partial<CodeMashApi2.RetryFailedEmailNotificationsRequest> = {} as Partial<CodeMashApi2.RetryFailedEmailNotificationsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.RetryFailedEmailNotificationsResponse> => {
    return this.transport.send<CodeMashApi2.RetryFailedEmailNotificationsResponse>({
      target: 'api',
      path: '/{version}/notifications/email/campaigns/{Id}/retry-failed',
      method: 'POST',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/email/campaigns/{Id}/stop
   * Request DTO: StopEmailCampaignRequest
   */
  stopEmailCampaign = (
    request: Partial<CodeMashApi2.StopEmailCampaignRequest> = {} as Partial<CodeMashApi2.StopEmailCampaignRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/notifications/email/campaigns/{Id}/stop',
      method: 'POST',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/emails/campaigns/{campaignId}/messages
   * Request DTO: GetEmailCampaignMessagesRequest
   */
  getEmailCampaignMessages = (
    request: Partial<CodeMashApi2.GetEmailCampaignMessagesRequest> = {} as Partial<CodeMashApi2.GetEmailCampaignMessagesRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetEmailCampaignMessagesResponse> => {
    return this.transport.send<CodeMashApi2.GetEmailCampaignMessagesResponse>({
      target: 'api',
      path: '/{version}/notifications/emails/campaigns/{campaignId}/messages',
      method: 'GET',
      request,
      pathParams: ['campaignId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/sms/campaigns
   * Request DTO: CreateSmsCampaignRequest
   */
  createSmsCampaign = (
    request: Partial<CodeMashApi2.CreateSmsCampaignRequest> = {} as Partial<CodeMashApi2.CreateSmsCampaignRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/notifications/sms/campaigns',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/notifications/sms/campaigns/{id}
   * Request DTO: DeleteSmsCampaign
   */
  deleteSmsCampaign = (
    request: Partial<CodeMashApi2.DeleteSmsCampaign> = {} as Partial<CodeMashApi2.DeleteSmsCampaign>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/notifications/sms/campaigns/{id}',
      method: 'DELETE',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/sms/campaigns/{id}
   * Request DTO: GetSmsCampaign
   */
  getSmsCampaign = (
    request: Partial<CodeMashApi2.GetSmsCampaign> = {} as Partial<CodeMashApi2.GetSmsCampaign>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetSmsCampaignResponse> => {
    return this.transport.send<CodeMashApi2.GetSmsCampaignResponse>({
      target: 'api',
      path: '/{version}/notifications/sms/campaigns/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/sms/campaigns
   * Request DTO: GetSmsCampaigns
   */
  getSmsCampaigns = (
    request: Partial<CodeMashApi2.GetSmsCampaigns> = {} as Partial<CodeMashApi2.GetSmsCampaigns>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetSmsCampaignsResponse> => {
    return this.transport.send<CodeMashApi2.GetSmsCampaignsResponse>({
      target: 'api',
      path: '/{version}/notifications/sms/campaigns',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/sms/campaigns/{id}/batches
   * Request DTO: GetSmsCampaignBatches
   */
  getSmsCampaignBatches = (
    request: Partial<CodeMashApi2.GetSmsCampaignBatches> = {} as Partial<CodeMashApi2.GetSmsCampaignBatches>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetSmsCampaignBatchesResponse> => {
    return this.transport.send<CodeMashApi2.GetSmsCampaignBatchesResponse>({
      target: 'api',
      path: '/{version}/notifications/sms/campaigns/{id}/batches',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/sms/campaigns/{id}/batches/{batchId}/{notificationId}
   * Request DTO: GetSmsCampaignBatchNotification
   */
  getSmsCampaignBatchNotification = (
    request: Partial<CodeMashApi2.GetSmsCampaignBatchNotification> = {} as Partial<CodeMashApi2.GetSmsCampaignBatchNotification>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetSmsCampaignBatchNotificationResponse> => {
    return this.transport.send<CodeMashApi2.GetSmsCampaignBatchNotificationResponse>({
      target: 'api',
      path: '/{version}/notifications/sms/campaigns/{id}/batches/{batchId}/{notificationId}',
      method: 'GET',
      request,
      pathParams: ['id', 'batchId', 'notificationId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/sms/campaigns/{id}/batches/{batchId}
   * Request DTO: GetSmsCampaignBatchNotifications
   */
  getSmsCampaignBatchNotifications = (
    request: Partial<CodeMashApi2.GetSmsCampaignBatchNotifications> = {} as Partial<CodeMashApi2.GetSmsCampaignBatchNotifications>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetSmsCampaignBatchNotificationsResponse> => {
    return this.transport.send<CodeMashApi2.GetSmsCampaignBatchNotificationsResponse>({
      target: 'api',
      path: '/{version}/notifications/sms/campaigns/{id}/batches/{batchId}',
      method: 'GET',
      request,
      pathParams: ['id', 'batchId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/sms/campaigns/{id}/stats
   * Request DTO: GetSmsCampaignStatistics
   */
  getSmsCampaignStatistics = (
    request: Partial<CodeMashApi2.GetSmsCampaignStatistics> = {} as Partial<CodeMashApi2.GetSmsCampaignStatistics>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetSmsCampaignStatisticsResponse> => {
    return this.transport.send<CodeMashApi2.GetSmsCampaignStatisticsResponse>({
      target: 'api',
      path: '/{version}/notifications/sms/campaigns/{id}/stats',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/sms/preview
   * Request DTO: PreviewSmsNotification
   */
  previewSmsNotification = (
    request: Partial<CodeMashApi2.PreviewSmsNotification> = {} as Partial<CodeMashApi2.PreviewSmsNotification>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PreviewSmsNotificationResponse> => {
    return this.transport.send<CodeMashApi2.PreviewSmsNotificationResponse>({
      target: 'api',
      path: '/{version}/notifications/sms/preview',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'optional',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/sms/campaigns/{Id}/retry-failed
   * Request DTO: RetryFailedSmsNotificationsRequest
   */
  retryFailedSmsNotifications = (
    request: Partial<CodeMashApi2.RetryFailedSmsNotificationsRequest> = {} as Partial<CodeMashApi2.RetryFailedSmsNotificationsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.RetryFailedSmsNotificationsResponse> => {
    return this.transport.send<CodeMashApi2.RetryFailedSmsNotificationsResponse>({
      target: 'api',
      path: '/{version}/notifications/sms/campaigns/{Id}/retry-failed',
      method: 'POST',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/sms/campaigns/{Id}/stop
   * Request DTO: StopSmsCampaignRequest
   */
  stopSmsCampaign = (
    request: Partial<CodeMashApi2.StopSmsCampaignRequest> = {} as Partial<CodeMashApi2.StopSmsCampaignRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/notifications/sms/campaigns/{Id}/stop',
      method: 'POST',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/sms/campaigns/{campaignId}/messages
   * Request DTO: GetSmsCampaignMessagesRequest
   */
  getSmsCampaignMessages = (
    request: Partial<CodeMashApi2.GetSmsCampaignMessagesRequest> = {} as Partial<CodeMashApi2.GetSmsCampaignMessagesRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetSmsCampaignMessagesResponse> => {
    return this.transport.send<CodeMashApi2.GetSmsCampaignMessagesResponse>({
      target: 'api',
      path: '/{version}/notifications/sms/campaigns/{campaignId}/messages',
      method: 'GET',
      request,
      pathParams: ['campaignId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/push/campaigns/audience-count
   * Request DTO: GetPushCampaignAudienceCountRequest
   */
  getPushCampaignAudienceCount = (
    request: Partial<CodeMashApi2.GetPushCampaignAudienceCountRequest> = {} as Partial<CodeMashApi2.GetPushCampaignAudienceCountRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetPushCampaignAudienceCountResponse> => {
    return this.transport.send<CodeMashApi2.GetPushCampaignAudienceCountResponse>({
      target: 'api',
      path: '/{version}/notifications/push/campaigns/audience-count',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/push/campaigns
   * Request DTO: CreatePushCampaignRequest
   */
  createPushCampaign = (
    request: Partial<CodeMashApi2.CreatePushCampaignRequest> = {} as Partial<CodeMashApi2.CreatePushCampaignRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/notifications/push/campaigns',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/notifications/push/campaigns/{Id}
   * Request DTO: DeletePushCampaignRequest
   */
  deletePushCampaign = (
    request: Partial<CodeMashApi2.DeletePushCampaignRequest> = {} as Partial<CodeMashApi2.DeletePushCampaignRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/notifications/push/campaigns/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/campaigns/{id}
   * Request DTO: GetPushCampaign
   */
  getPushCampaign = (
    request: Partial<CodeMashApi2.GetPushCampaign> = {} as Partial<CodeMashApi2.GetPushCampaign>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetPushCampaignResponse> => {
    return this.transport.send<CodeMashApi2.GetPushCampaignResponse>({
      target: 'api',
      path: '/{version}/notifications/push/campaigns/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/campaigns
   * Request DTO: GetPushCampaigns
   */
  getPushCampaigns = (
    request: Partial<CodeMashApi2.GetPushCampaigns> = {} as Partial<CodeMashApi2.GetPushCampaigns>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetPushCampaignsResponse> => {
    return this.transport.send<CodeMashApi2.GetPushCampaignsResponse>({
      target: 'api',
      path: '/{version}/notifications/push/campaigns',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/campaigns/{id}/batches
   * Request DTO: GetPushCampaignBatches
   */
  getPushCampaignBatches = (
    request: Partial<CodeMashApi2.GetPushCampaignBatches> = {} as Partial<CodeMashApi2.GetPushCampaignBatches>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetPushCampaignBatchesResponse> => {
    return this.transport.send<CodeMashApi2.GetPushCampaignBatchesResponse>({
      target: 'api',
      path: '/{version}/notifications/push/campaigns/{id}/batches',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/campaigns/{id}/batches/{batchId}/{notificationId}
   * Request DTO: GetPushCampaignBatchNotification
   */
  getPushCampaignBatchNotification = (
    request: Partial<CodeMashApi2.GetPushCampaignBatchNotification> = {} as Partial<CodeMashApi2.GetPushCampaignBatchNotification>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetPushCampaignBatchNotificationResponse> => {
    return this.transport.send<CodeMashApi2.GetPushCampaignBatchNotificationResponse>({
      target: 'api',
      path: '/{version}/notifications/push/campaigns/{id}/batches/{batchId}/{notificationId}',
      method: 'GET',
      request,
      pathParams: ['id', 'batchId', 'notificationId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/campaigns/{id}/batches/{batchId}
   * Request DTO: GetPushCampaignBatchNotifications
   */
  getPushCampaignBatchNotifications = (
    request: Partial<CodeMashApi2.GetPushCampaignBatchNotifications> = {} as Partial<CodeMashApi2.GetPushCampaignBatchNotifications>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetPushCampaignBatchNotificationsResponse> => {
    return this.transport.send<CodeMashApi2.GetPushCampaignBatchNotificationsResponse>({
      target: 'api',
      path: '/{version}/notifications/push/campaigns/{id}/batches/{batchId}',
      method: 'GET',
      request,
      pathParams: ['id', 'batchId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/campaigns/{id}/stats
   * Request DTO: GetPushCampaignStatistics
   */
  getPushCampaignStatistics = (
    request: Partial<CodeMashApi2.GetPushCampaignStatistics> = {} as Partial<CodeMashApi2.GetPushCampaignStatistics>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetPushCampaignStatisticsResponse> => {
    return this.transport.send<CodeMashApi2.GetPushCampaignStatisticsResponse>({
      target: 'api',
      path: '/{version}/notifications/push/campaigns/{id}/stats',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/preview
   * Request DTO: PreviewPushNotification
   */
  previewPushNotification = (
    request: Partial<CodeMashApi2.PreviewPushNotification> = {} as Partial<CodeMashApi2.PreviewPushNotification>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PreviewPushNotificationResponse> => {
    return this.transport.send<CodeMashApi2.PreviewPushNotificationResponse>({
      target: 'api',
      path: '/{version}/notifications/push/preview',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'optional',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/push/campaigns/{Id}/retry-failed
   * Request DTO: RetryFailedPushNotificationsRequest
   */
  retryFailedPushNotifications = (
    request: Partial<CodeMashApi2.RetryFailedPushNotificationsRequest> = {} as Partial<CodeMashApi2.RetryFailedPushNotificationsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.RetryFailedPushNotificationsResponse> => {
    return this.transport.send<CodeMashApi2.RetryFailedPushNotificationsResponse>({
      target: 'api',
      path: '/{version}/notifications/push/campaigns/{Id}/retry-failed',
      method: 'POST',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/push/campaigns/{Id}/stop
   * Request DTO: StopPushCampaignRequest
   */
  stopPushCampaign = (
    request: Partial<CodeMashApi2.StopPushCampaignRequest> = {} as Partial<CodeMashApi2.StopPushCampaignRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/notifications/push/campaigns/{Id}/stop',
      method: 'POST',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/campaigns/{campaignId}/messages
   * Request DTO: GetPushCampaignMessagesRequest
   */
  getPushCampaignMessages = (
    request: Partial<CodeMashApi2.GetPushCampaignMessagesRequest> = {} as Partial<CodeMashApi2.GetPushCampaignMessagesRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetPushCampaignMessagesResponse> => {
    return this.transport.send<CodeMashApi2.GetPushCampaignMessagesResponse>({
      target: 'api',
      path: '/{version}/notifications/push/campaigns/{campaignId}/messages',
      method: 'GET',
      request,
      pathParams: ['campaignId'],
      scope: 'project',
      ...options,
    });
  };
}
