import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: notifications
 * Endpoints: 125
 */
export class NotificationsModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/notifications/email/disable
   * Request DTO: DisableEmail
   */
  disableEmail = (
    request: Partial<CodeMashHub2.DisableEmail> = {} as Partial<CodeMashHub2.DisableEmail>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/disable',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/disable-dependencies
   * Request DTO: GetEmailDisableDependencies
   */
  getEmailDisableDependencies = (
    request: Partial<CodeMashHub2.GetEmailDisableDependencies> = {} as Partial<CodeMashHub2.GetEmailDisableDependencies>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetNotificationModuleDisableDependenciesResponse> => {
    return this.transport.send<CodeMashHub2.GetNotificationModuleDisableDependenciesResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/disable-dependencies',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/enable
   * Request DTO: EnableEmail
   */
  enableEmail = (
    request: Partial<CodeMashHub2.EnableEmail> = {} as Partial<CodeMashHub2.EnableEmail>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/enable',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/email/validation/integrations
   * Request DTO: SaveEmailValidationIntegration
   */
  saveEmailValidationIntegration = (
    request: Partial<CodeMashHub2.SaveEmailValidationIntegration> = {} as Partial<CodeMashHub2.SaveEmailValidationIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/validation/integrations',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/email/validation/integrations/test
   * Request DTO: TestEmailValidationIntegration
   */
  testEmailValidationIntegration = (
    request: Partial<CodeMashHub2.TestEmailValidationIntegration> = {} as Partial<CodeMashHub2.TestEmailValidationIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.TestEmailValidationIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.TestEmailValidationIntegrationResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/validation/integrations/test',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/email/templates/attachments
   * Request DTO: AttachFileToTemplateRequest
   */
  attachFileToTemplate = (
    request: Partial<CodeMashHub2.AttachFileToTemplateRequest> = {} as Partial<CodeMashHub2.AttachFileToTemplateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/templates/attachments',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/email/templates
   * Request DTO: CreateEmailTemplateRequest
   */
  createEmailTemplate = (
    request: Partial<CodeMashHub2.CreateEmailTemplateRequest> = {} as Partial<CodeMashHub2.CreateEmailTemplateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/templates',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/notifications/email/templates/{Id}
   * Request DTO: DeleteEmailTemplateRequest
   */
  deleteEmailTemplate = (
    request: Partial<CodeMashHub2.DeleteEmailTemplateRequest> = {} as Partial<CodeMashHub2.DeleteEmailTemplateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/templates/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/templates/{id}
   * Request DTO: GetEmailTemplate
   */
  getEmailTemplate = (
    request: Partial<CodeMashHub2.GetEmailTemplate> = {} as Partial<CodeMashHub2.GetEmailTemplate>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetEmailTemplateResponse> => {
    return this.transport.send<CodeMashHub2.GetEmailTemplateResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/templates/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/templates
   * Request DTO: GetEmailTemplates
   */
  getEmailTemplates = (
    request: Partial<CodeMashHub2.GetEmailTemplates> = {} as Partial<CodeMashHub2.GetEmailTemplates>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetEmailTemplatesResponse> => {
    return this.transport.send<CodeMashHub2.GetEmailTemplatesResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/templates',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/email/templates/mjml
   * Request DTO: GetMjml
   */
  getMjml = (
    request: Partial<CodeMashHub2.GetMjml> = {} as Partial<CodeMashHub2.GetMjml>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetHtmlFromMjmlResponse> => {
    return this.transport.send<CodeMashHub2.GetHtmlFromMjmlResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/templates/mjml',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/system-templates/{id}
   * Request DTO: GetSystemEmailTemplate
   */
  getSystemEmailTemplate = (
    request: Partial<CodeMashHub2.GetSystemEmailTemplate> = {} as Partial<CodeMashHub2.GetSystemEmailTemplate>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSystemEmailTemplateResponse> => {
    return this.transport.send<CodeMashHub2.GetSystemEmailTemplateResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/system-templates/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/system-templates
   * Request DTO: GetSystemEmailTemplates
   */
  getSystemEmailTemplates = (
    request: Partial<CodeMashHub2.GetSystemEmailTemplates> = {} as Partial<CodeMashHub2.GetSystemEmailTemplates>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSystemEmailTemplatesResponse> => {
    return this.transport.send<CodeMashHub2.GetSystemEmailTemplatesResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/system-templates',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/templates/{id}/tokens
   * Request DTO: GetEmailTemplateAvailableTokens
   */
  getEmailTemplateAvailableTokens = (
    request: Partial<CodeMashHub2.GetEmailTemplateAvailableTokens> = {} as Partial<CodeMashHub2.GetEmailTemplateAvailableTokens>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetEmailTemplateAvailableTokensResponse> => {
    return this.transport.send<CodeMashHub2.GetEmailTemplateAvailableTokensResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/templates/{id}/tokens',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/notifications/email/templates
   * Request DTO: UpdateEmailTemplateRequest
   */
  updateEmailTemplate = (
    request: Partial<CodeMashHub2.UpdateEmailTemplateRequest> = {} as Partial<CodeMashHub2.UpdateEmailTemplateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/templates',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/notifications/email/signatures/{id}
   * Request DTO: DeleteEmailSignature
   */
  deleteEmailSignature = (
    request: Partial<CodeMashHub2.DeleteEmailSignature> = {} as Partial<CodeMashHub2.DeleteEmailSignature>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/signatures/{id}',
      method: 'DELETE',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/signatures/{id}
   * Request DTO: GetEmailSignature
   */
  getEmailSignature = (
    request: Partial<CodeMashHub2.GetEmailSignature> = {} as Partial<CodeMashHub2.GetEmailSignature>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetEmailSignatureResponse> => {
    return this.transport.send<CodeMashHub2.GetEmailSignatureResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/signatures/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/signatures
   * Request DTO: GetEmailSignatures
   */
  getEmailSignatures = (
    request: Partial<CodeMashHub2.GetEmailSignatures> = {} as Partial<CodeMashHub2.GetEmailSignatures>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetEmailSignaturesResponse> => {
    return this.transport.send<CodeMashHub2.GetEmailSignaturesResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/signatures',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/email/signatures
   * Request DTO: SaveEmailSignatureRequest
   */
  saveEmailSignature = (
    request: Partial<CodeMashHub2.SaveEmailSignatureRequest> = {} as Partial<CodeMashHub2.SaveEmailSignatureRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/signatures',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/settings
   * Request DTO: GetEmailSettings
   */
  getEmailSettings = (
    request: Partial<CodeMashHub2.GetEmailSettings> = {} as Partial<CodeMashHub2.GetEmailSettings>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetEmailSettingsResponse> => {
    return this.transport.send<CodeMashHub2.GetEmailSettingsResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/settings',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/email/integrations/confirm-human-delivery
   * Request DTO: ConfirmEmailIntegrationHumanDeliveryRequest
   */
  confirmEmailIntegrationHumanDelivery = (
    request: Partial<CodeMashHub2.ConfirmEmailIntegrationHumanDeliveryRequest> = {} as Partial<CodeMashHub2.ConfirmEmailIntegrationHumanDeliveryRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/integrations/confirm-human-delivery',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/notifications/email/integrations/{Id}
   * Request DTO: DeleteEmailIntegration
   */
  deleteEmailIntegration = (
    request: Partial<CodeMashHub2.DeleteEmailIntegration> = {} as Partial<CodeMashHub2.DeleteEmailIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/integrations/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/notifications/email/integrations/{Id}/disable
   * Request DTO: DisableEmailIntegration
   */
  disableEmailIntegration = (
    request: Partial<CodeMashHub2.DisableEmailIntegration> = {} as Partial<CodeMashHub2.DisableEmailIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/integrations/{Id}/disable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/email/integrations/domain-health
   * Request DTO: CheckEmailIntegrationDomainHealthRequest
   */
  checkEmailIntegrationDomainHealth = (
    request: Partial<CodeMashHub2.CheckEmailIntegrationDomainHealthRequest> = {} as Partial<CodeMashHub2.CheckEmailIntegrationDomainHealthRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.CheckEmailIntegrationDomainHealthResponse> => {
    return this.transport.send<CodeMashHub2.CheckEmailIntegrationDomainHealthResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/integrations/domain-health',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/notifications/email/integrations/{Id}/enable
   * Request DTO: EnableEmailIntegration
   */
  enableEmailIntegration = (
    request: Partial<CodeMashHub2.EnableEmailIntegration> = {} as Partial<CodeMashHub2.EnableEmailIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/integrations/{Id}/enable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/integrations/{id}
   * Request DTO: GetEmailIntegration
   */
  getEmailIntegration = (
    request: Partial<CodeMashHub2.GetEmailIntegration> = {} as Partial<CodeMashHub2.GetEmailIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetEmailIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.GetEmailIntegrationResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/integrations/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/integrations
   * Request DTO: GetEmailIntegrations
   */
  getEmailIntegrations = (
    request: Partial<CodeMashHub2.GetEmailIntegrations> = {} as Partial<CodeMashHub2.GetEmailIntegrations>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetEmailIntegrationsResponse> => {
    return this.transport.send<CodeMashHub2.GetEmailIntegrationsResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/integrations',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/email/integrations
   * Request DTO: SaveEmailIntegration
   */
  saveEmailIntegration = (
    request: Partial<CodeMashHub2.SaveEmailIntegration> = {} as Partial<CodeMashHub2.SaveEmailIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/integrations',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/notifications/email/integrations/{Id}/default
   * Request DTO: SetEmailsIntegrationAsDefault
   */
  setEmailsIntegrationAsDefault = (
    request: Partial<CodeMashHub2.SetEmailsIntegrationAsDefault> = {} as Partial<CodeMashHub2.SetEmailsIntegrationAsDefault>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/integrations/{Id}/default',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/email/integrations/test
   * Request DTO: TestEmailIntegration
   */
  testEmailIntegration = (
    request: Partial<CodeMashHub2.TestEmailIntegration> = {} as Partial<CodeMashHub2.TestEmailIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.TestEmailIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.TestEmailIntegrationResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/integrations/test',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/notifications/email/templates/{Id}/archive
   * Request DTO: ArchiveEmailTemplateRequest
   */
  archiveEmailTemplate = (
    request: Partial<CodeMashHub2.ArchiveEmailTemplateRequest> = {} as Partial<CodeMashHub2.ArchiveEmailTemplateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/templates/{Id}/archive',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/email/templates/{Id}/clone
   * Request DTO: CloneEmailTemplateRequest
   */
  cloneEmailTemplate = (
    request: Partial<CodeMashHub2.CloneEmailTemplateRequest> = {} as Partial<CodeMashHub2.CloneEmailTemplateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/templates/{Id}/clone',
      method: 'POST',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/notifications/email/templates/{Id}/unarchive
   * Request DTO: UnArchiveEmailTemplateRequest
   */
  unArchiveEmailTemplate = (
    request: Partial<CodeMashHub2.UnArchiveEmailTemplateRequest> = {} as Partial<CodeMashHub2.UnArchiveEmailTemplateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/templates/{Id}/unarchive',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/notifications/email/footers/{id}
   * Request DTO: DeleteEmailFooter
   */
  deleteEmailFooter = (
    request: Partial<CodeMashHub2.DeleteEmailFooter> = {} as Partial<CodeMashHub2.DeleteEmailFooter>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/footers/{id}',
      method: 'DELETE',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/footers/{id}
   * Request DTO: GetEmailFooter
   */
  getEmailFooter = (
    request: Partial<CodeMashHub2.GetEmailFooter> = {} as Partial<CodeMashHub2.GetEmailFooter>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetEmailFooterResponse> => {
    return this.transport.send<CodeMashHub2.GetEmailFooterResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/footers/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/email/footers
   * Request DTO: GetEmailFooters
   */
  getEmailFooters = (
    request: Partial<CodeMashHub2.GetEmailFooters> = {} as Partial<CodeMashHub2.GetEmailFooters>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetEmailFootersResponse> => {
    return this.transport.send<CodeMashHub2.GetEmailFootersResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/footers',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/email/footers
   * Request DTO: SaveEmailFooterRequest
   */
  saveEmailFooter = (
    request: Partial<CodeMashHub2.SaveEmailFooterRequest> = {} as Partial<CodeMashHub2.SaveEmailFooterRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/footers',
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
    request: Partial<CodeMashHub2.CreateEmailCampaignRequest> = {} as Partial<CodeMashHub2.CreateEmailCampaignRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.DeleteEmailCampaignRequest> = {} as Partial<CodeMashHub2.DeleteEmailCampaignRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.GetEmailCampaign> = {} as Partial<CodeMashHub2.GetEmailCampaign>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetEmailCampaignResponse> => {
    return this.transport.send<CodeMashHub2.GetEmailCampaignResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.GetEmailCampaigns> = {} as Partial<CodeMashHub2.GetEmailCampaigns>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetEmailCampaignsResponse> => {
    return this.transport.send<CodeMashHub2.GetEmailCampaignsResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.GetEmailCampaignBatches> = {} as Partial<CodeMashHub2.GetEmailCampaignBatches>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetEmailCampaignBatchesResponse> => {
    return this.transport.send<CodeMashHub2.GetEmailCampaignBatchesResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.GetEmailCampaignBatchNotification> = {} as Partial<CodeMashHub2.GetEmailCampaignBatchNotification>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetEmailCampaignBatchNotificationResponse> => {
    return this.transport.send<CodeMashHub2.GetEmailCampaignBatchNotificationResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.GetEmailCampaignBatchNotifications> = {} as Partial<CodeMashHub2.GetEmailCampaignBatchNotifications>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetEmailCampaignBatchNotificationsResponse> => {
    return this.transport.send<CodeMashHub2.GetEmailCampaignBatchNotificationsResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.GetEmailCampaignStatistics> = {} as Partial<CodeMashHub2.GetEmailCampaignStatistics>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetEmailCampaignStatisticsResponse> => {
    return this.transport.send<CodeMashHub2.GetEmailCampaignStatisticsResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.PreviewEmailNotification> = {} as Partial<CodeMashHub2.PreviewEmailNotification>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.PreviewEmailNotificationResponse> => {
    return this.transport.send<CodeMashHub2.PreviewEmailNotificationResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/preview',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/email/campaigns/{Id}/stop
   * Request DTO: StopEmailCampaignRequest
   */
  stopEmailCampaign = (
    request: Partial<CodeMashHub2.StopEmailCampaignRequest> = {} as Partial<CodeMashHub2.StopEmailCampaignRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/email/campaigns/{Id}/stop',
      method: 'POST',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/emails/campaigns/{campaignId}/messages/{id}
   * Request DTO: GetEmailCampaignMessage
   */
  getEmailCampaignMessage = (
    request: Partial<CodeMashHub2.GetEmailCampaignMessage> = {} as Partial<CodeMashHub2.GetEmailCampaignMessage>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetEmailCampaignMessageResponse> => {
    return this.transport.send<CodeMashHub2.GetEmailCampaignMessageResponse>({
      target: 'hub',
      path: '/{version}/notifications/emails/campaigns/{campaignId}/messages/{id}',
      method: 'GET',
      request,
      pathParams: ['campaignId', 'id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/emails/campaigns/{campaignId}/messages
   * Request DTO: GetEmailCampaignMessagesRequest
   */
  getEmailCampaignMessages = (
    request: Partial<CodeMashHub2.GetEmailCampaignMessagesRequest> = {} as Partial<CodeMashHub2.GetEmailCampaignMessagesRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetEmailCampaignMessagesResponse> => {
    return this.transport.send<CodeMashHub2.GetEmailCampaignMessagesResponse>({
      target: 'hub',
      path: '/{version}/notifications/emails/campaigns/{campaignId}/messages',
      method: 'GET',
      request,
      pathParams: ['campaignId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/sms/disable
   * Request DTO: DisableSms
   */
  disableSms = (
    request: Partial<CodeMashHub2.DisableSms> = {} as Partial<CodeMashHub2.DisableSms>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/disable',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/sms/disable-dependencies
   * Request DTO: GetSmsDisableDependencies
   */
  getSmsDisableDependencies = (
    request: Partial<CodeMashHub2.GetSmsDisableDependencies> = {} as Partial<CodeMashHub2.GetSmsDisableDependencies>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetNotificationModuleDisableDependenciesResponse> => {
    return this.transport.send<CodeMashHub2.GetNotificationModuleDisableDependenciesResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/disable-dependencies',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/sms/enable
   * Request DTO: EnableSms
   */
  enableSms = (
    request: Partial<CodeMashHub2.EnableSms> = {} as Partial<CodeMashHub2.EnableSms>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/enable',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/notifications/sms/templates/{Id}/archive
   * Request DTO: ArchiveSmsTemplateRequest
   */
  archiveSmsTemplate = (
    request: Partial<CodeMashHub2.ArchiveSmsTemplateRequest> = {} as Partial<CodeMashHub2.ArchiveSmsTemplateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/templates/{Id}/archive',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/sms/templates/{Id}/clone
   * Request DTO: CloneSmsTemplateRequest
   */
  cloneSmsTemplate = (
    request: Partial<CodeMashHub2.CloneSmsTemplateRequest> = {} as Partial<CodeMashHub2.CloneSmsTemplateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/templates/{Id}/clone',
      method: 'POST',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/sms/templates
   * Request DTO: CreateSmsTemplateRequest
   */
  createSmsTemplate = (
    request: Partial<CodeMashHub2.CreateSmsTemplateRequest> = {} as Partial<CodeMashHub2.CreateSmsTemplateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/templates',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/notifications/sms/templates/{Id}
   * Request DTO: DeleteSmsTemplateRequest
   */
  deleteSmsTemplate = (
    request: Partial<CodeMashHub2.DeleteSmsTemplateRequest> = {} as Partial<CodeMashHub2.DeleteSmsTemplateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/templates/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/sms/templates/{id}
   * Request DTO: GetSmsTemplate
   */
  getSmsTemplate = (
    request: Partial<CodeMashHub2.GetSmsTemplate> = {} as Partial<CodeMashHub2.GetSmsTemplate>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSmsTemplateResponse> => {
    return this.transport.send<CodeMashHub2.GetSmsTemplateResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/templates/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/sms/templates
   * Request DTO: GetSmsTemplates
   */
  getSmsTemplates = (
    request: Partial<CodeMashHub2.GetSmsTemplates> = {} as Partial<CodeMashHub2.GetSmsTemplates>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSmsTemplatesResponse> => {
    return this.transport.send<CodeMashHub2.GetSmsTemplatesResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/templates',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/sms/templates/{id}/tokens
   * Request DTO: GetSmsMessageContentTokens
   */
  getSmsMessageContentTokens = (
    request: Partial<CodeMashHub2.GetSmsMessageContentTokens> = {} as Partial<CodeMashHub2.GetSmsMessageContentTokens>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSmsMessageContentTokensResponse> => {
    return this.transport.send<CodeMashHub2.GetSmsMessageContentTokensResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/templates/{id}/tokens',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/sms/templates/render
   * Request DTO: RenderSms
   */
  renderSms = (
    request: Partial<CodeMashHub2.RenderSms> = {} as Partial<CodeMashHub2.RenderSms>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.RenderSmsTextResponse> => {
    return this.transport.send<CodeMashHub2.RenderSmsTextResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/templates/render',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/notifications/sms/templates/{Id}/unarchive
   * Request DTO: UnArchiveSmsTemplateRequest
   */
  unArchiveSmsTemplate = (
    request: Partial<CodeMashHub2.UnArchiveSmsTemplateRequest> = {} as Partial<CodeMashHub2.UnArchiveSmsTemplateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/templates/{Id}/unarchive',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/notifications/sms/templates
   * Request DTO: UpdateSmsTemplateRequest
   */
  updateSmsTemplate = (
    request: Partial<CodeMashHub2.UpdateSmsTemplateRequest> = {} as Partial<CodeMashHub2.UpdateSmsTemplateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/templates',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/sms/settings
   * Request DTO: GetSmsSettings
   */
  getSmsSettings = (
    request: Partial<CodeMashHub2.GetSmsSettings> = {} as Partial<CodeMashHub2.GetSmsSettings>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSmsSettingsResponse> => {
    return this.transport.send<CodeMashHub2.GetSmsSettingsResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/settings',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/sms/integrations/confirm-human-delivery
   * Request DTO: ConfirmSmsIntegrationHumanDeliveryRequest
   */
  confirmSmsIntegrationHumanDelivery = (
    request: Partial<CodeMashHub2.ConfirmSmsIntegrationHumanDeliveryRequest> = {} as Partial<CodeMashHub2.ConfirmSmsIntegrationHumanDeliveryRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/integrations/confirm-human-delivery',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/notifications/sms/integrations/{Id}
   * Request DTO: DeleteSmsIntegrationRequest
   */
  deleteSmsIntegration = (
    request: Partial<CodeMashHub2.DeleteSmsIntegrationRequest> = {} as Partial<CodeMashHub2.DeleteSmsIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/integrations/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/notifications/sms/integrations/{Id}/disable
   * Request DTO: DisableSmsIntegrationRequest
   */
  disableSmsIntegration = (
    request: Partial<CodeMashHub2.DisableSmsIntegrationRequest> = {} as Partial<CodeMashHub2.DisableSmsIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/integrations/{Id}/disable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/notifications/sms/integrations/{Id}/enable
   * Request DTO: EnableSmsIntegrationRequest
   */
  enableSmsIntegration = (
    request: Partial<CodeMashHub2.EnableSmsIntegrationRequest> = {} as Partial<CodeMashHub2.EnableSmsIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/integrations/{Id}/enable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/sms/integrations/{id}
   * Request DTO: GetSmsIntegration
   */
  getSmsIntegration = (
    request: Partial<CodeMashHub2.GetSmsIntegration> = {} as Partial<CodeMashHub2.GetSmsIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSmsIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.GetSmsIntegrationResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/integrations/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/sms/integrations
   * Request DTO: GetSmsIntegrations
   */
  getSmsIntegrations = (
    request: Partial<CodeMashHub2.GetSmsIntegrations> = {} as Partial<CodeMashHub2.GetSmsIntegrations>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSmsIntegrationsResponse> => {
    return this.transport.send<CodeMashHub2.GetSmsIntegrationsResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/integrations',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/sms/integrations
   * Request DTO: SaveSmsIntegration
   */
  saveSmsIntegration = (
    request: Partial<CodeMashHub2.SaveSmsIntegration> = {} as Partial<CodeMashHub2.SaveSmsIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/integrations',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/notifications/sms/integrations/{Id}/default
   * Request DTO: SetSmsIntegrationAsDefaultRequest
   */
  setSmsIntegrationAsDefault = (
    request: Partial<CodeMashHub2.SetSmsIntegrationAsDefaultRequest> = {} as Partial<CodeMashHub2.SetSmsIntegrationAsDefaultRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/integrations/{Id}/default',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/sms/integrations/test
   * Request DTO: TestSmsIntegration
   */
  testSmsIntegration = (
    request: Partial<CodeMashHub2.TestSmsIntegration> = {} as Partial<CodeMashHub2.TestSmsIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.TestSmsIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.TestSmsIntegrationResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/integrations/test',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/sms/campaigns
   * Request DTO: CreateSmsCampaignRequest
   */
  createSmsCampaign = (
    request: Partial<CodeMashHub2.CreateSmsCampaignRequest> = {} as Partial<CodeMashHub2.CreateSmsCampaignRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.DeleteSmsCampaign> = {} as Partial<CodeMashHub2.DeleteSmsCampaign>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.GetSmsCampaign> = {} as Partial<CodeMashHub2.GetSmsCampaign>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSmsCampaignResponse> => {
    return this.transport.send<CodeMashHub2.GetSmsCampaignResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.GetSmsCampaigns> = {} as Partial<CodeMashHub2.GetSmsCampaigns>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSmsCampaignsResponse> => {
    return this.transport.send<CodeMashHub2.GetSmsCampaignsResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.GetSmsCampaignBatches> = {} as Partial<CodeMashHub2.GetSmsCampaignBatches>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSmsCampaignBatchesResponse> => {
    return this.transport.send<CodeMashHub2.GetSmsCampaignBatchesResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.GetSmsCampaignBatchNotification> = {} as Partial<CodeMashHub2.GetSmsCampaignBatchNotification>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSmsCampaignBatchNotificationResponse> => {
    return this.transport.send<CodeMashHub2.GetSmsCampaignBatchNotificationResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.GetSmsCampaignBatchNotifications> = {} as Partial<CodeMashHub2.GetSmsCampaignBatchNotifications>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSmsCampaignBatchNotificationsResponse> => {
    return this.transport.send<CodeMashHub2.GetSmsCampaignBatchNotificationsResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.GetSmsCampaignStatistics> = {} as Partial<CodeMashHub2.GetSmsCampaignStatistics>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSmsCampaignStatisticsResponse> => {
    return this.transport.send<CodeMashHub2.GetSmsCampaignStatisticsResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.PreviewSmsNotification> = {} as Partial<CodeMashHub2.PreviewSmsNotification>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.PreviewSmsNotificationResponse> => {
    return this.transport.send<CodeMashHub2.PreviewSmsNotificationResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/preview',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/sms/campaigns/{Id}/stop
   * Request DTO: StopSmsCampaignRequest
   */
  stopSmsCampaign = (
    request: Partial<CodeMashHub2.StopSmsCampaignRequest> = {} as Partial<CodeMashHub2.StopSmsCampaignRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/campaigns/{Id}/stop',
      method: 'POST',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/sms/campaigns/{campaignId}/messages/{id}
   * Request DTO: GetSmsCampaignMessage
   */
  getSmsCampaignMessage = (
    request: Partial<CodeMashHub2.GetSmsCampaignMessage> = {} as Partial<CodeMashHub2.GetSmsCampaignMessage>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSmsCampaignMessageResponse> => {
    return this.transport.send<CodeMashHub2.GetSmsCampaignMessageResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/campaigns/{campaignId}/messages/{id}',
      method: 'GET',
      request,
      pathParams: ['campaignId', 'id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/sms/campaigns/{campaignId}/messages
   * Request DTO: GetSmsCampaignMessagesRequest
   */
  getSmsCampaignMessages = (
    request: Partial<CodeMashHub2.GetSmsCampaignMessagesRequest> = {} as Partial<CodeMashHub2.GetSmsCampaignMessagesRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSmsCampaignMessagesResponse> => {
    return this.transport.send<CodeMashHub2.GetSmsCampaignMessagesResponse>({
      target: 'hub',
      path: '/{version}/notifications/sms/campaigns/{campaignId}/messages',
      method: 'GET',
      request,
      pathParams: ['campaignId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/disable
   * Request DTO: DisablePush
   */
  disablePush = (
    request: Partial<CodeMashHub2.DisablePush> = {} as Partial<CodeMashHub2.DisablePush>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/disable',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/disable-dependencies
   * Request DTO: GetPushDisableDependencies
   */
  getPushDisableDependencies = (
    request: Partial<CodeMashHub2.GetPushDisableDependencies> = {} as Partial<CodeMashHub2.GetPushDisableDependencies>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetNotificationModuleDisableDependenciesResponse> => {
    return this.transport.send<CodeMashHub2.GetNotificationModuleDisableDependenciesResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/disable-dependencies',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/enable
   * Request DTO: EnablePush
   */
  enablePush = (
    request: Partial<CodeMashHub2.EnablePush> = {} as Partial<CodeMashHub2.EnablePush>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/enable',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/notifications/push/templates/{Id}/archive
   * Request DTO: ArchivePushTemplateRequest
   */
  archivePushTemplate = (
    request: Partial<CodeMashHub2.ArchivePushTemplateRequest> = {} as Partial<CodeMashHub2.ArchivePushTemplateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/templates/{Id}/archive',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/push/templates/{Id}/clone
   * Request DTO: ClonePushTemplateRequest
   */
  clonePushTemplate = (
    request: Partial<CodeMashHub2.ClonePushTemplateRequest> = {} as Partial<CodeMashHub2.ClonePushTemplateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/templates/{Id}/clone',
      method: 'POST',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/push/templates
   * Request DTO: CreatePushTemplateRequest
   */
  createPushTemplate = (
    request: Partial<CodeMashHub2.CreatePushTemplateRequest> = {} as Partial<CodeMashHub2.CreatePushTemplateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/templates',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/notifications/push/templates/{Id}
   * Request DTO: DeletePushTemplateRequest
   */
  deletePushTemplate = (
    request: Partial<CodeMashHub2.DeletePushTemplateRequest> = {} as Partial<CodeMashHub2.DeletePushTemplateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/templates/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/templates/{id}
   * Request DTO: GetPushTemplate
   */
  getPushTemplate = (
    request: Partial<CodeMashHub2.GetPushTemplate> = {} as Partial<CodeMashHub2.GetPushTemplate>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPushTemplateResponse> => {
    return this.transport.send<CodeMashHub2.GetPushTemplateResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/templates/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/templates
   * Request DTO: GetPushTemplates
   */
  getPushTemplates = (
    request: Partial<CodeMashHub2.GetPushTemplates> = {} as Partial<CodeMashHub2.GetPushTemplates>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPushTemplatesResponse> => {
    return this.transport.send<CodeMashHub2.GetPushTemplatesResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/templates',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/templates/{id}/tokens
   * Request DTO: GetPushMessageContentTokens
   */
  getPushMessageContentTokens = (
    request: Partial<CodeMashHub2.GetPushMessageContentTokens> = {} as Partial<CodeMashHub2.GetPushMessageContentTokens>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPushMessageContentTokensResponse> => {
    return this.transport.send<CodeMashHub2.GetPushMessageContentTokensResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/templates/{id}/tokens',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/push/templates/render
   * Request DTO: RenderPush
   */
  renderPush = (
    request: Partial<CodeMashHub2.RenderPush> = {} as Partial<CodeMashHub2.RenderPush>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.RenderPushResponse> => {
    return this.transport.send<CodeMashHub2.RenderPushResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/templates/render',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/notifications/push/templates/{Id}/unarchive
   * Request DTO: UnArchivePushTemplateRequest
   */
  unArchivePushTemplate = (
    request: Partial<CodeMashHub2.UnArchivePushTemplateRequest> = {} as Partial<CodeMashHub2.UnArchivePushTemplateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/templates/{Id}/unarchive',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/notifications/push/templates
   * Request DTO: UpdatePushTemplateRequest
   */
  updatePushTemplate = (
    request: Partial<CodeMashHub2.UpdatePushTemplateRequest> = {} as Partial<CodeMashHub2.UpdatePushTemplateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/templates',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/settings
   * Request DTO: GetPushSettings
   */
  getPushSettings = (
    request: Partial<CodeMashHub2.GetPushSettings> = {} as Partial<CodeMashHub2.GetPushSettings>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPushSettingsResponse> => {
    return this.transport.send<CodeMashHub2.GetPushSettingsResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/settings',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/push/integrations/confirm-human-delivery
   * Request DTO: ConfirmPushIntegrationHumanDeliveryRequest
   */
  confirmPushIntegrationHumanDelivery = (
    request: Partial<CodeMashHub2.ConfirmPushIntegrationHumanDeliveryRequest> = {} as Partial<CodeMashHub2.ConfirmPushIntegrationHumanDeliveryRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/integrations/confirm-human-delivery',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/notifications/push/integrations/{Id}
   * Request DTO: DeletePushIntegrationRequest
   */
  deletePushIntegration = (
    request: Partial<CodeMashHub2.DeletePushIntegrationRequest> = {} as Partial<CodeMashHub2.DeletePushIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/integrations/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/notifications/push/integrations/{Id}/disable
   * Request DTO: DisablePushIntegrationRequest
   */
  disablePushIntegration = (
    request: Partial<CodeMashHub2.DisablePushIntegrationRequest> = {} as Partial<CodeMashHub2.DisablePushIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/integrations/{Id}/disable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/notifications/push/integrations/{Id}/enable
   * Request DTO: EnablePushIntegrationRequest
   */
  enablePushIntegration = (
    request: Partial<CodeMashHub2.EnablePushIntegrationRequest> = {} as Partial<CodeMashHub2.EnablePushIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/integrations/{Id}/enable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/integrations/{id}
   * Request DTO: GetPushIntegration
   */
  getPushIntegration = (
    request: Partial<CodeMashHub2.GetPushIntegration> = {} as Partial<CodeMashHub2.GetPushIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPushIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.GetPushIntegrationResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/integrations/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/integrations
   * Request DTO: GetPushIntegrations
   */
  getPushIntegrations = (
    request: Partial<CodeMashHub2.GetPushIntegrations> = {} as Partial<CodeMashHub2.GetPushIntegrations>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPushIntegrationsResponse> => {
    return this.transport.send<CodeMashHub2.GetPushIntegrationsResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/integrations',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/push/integrations
   * Request DTO: SavePushIntegration
   */
  savePushIntegration = (
    request: Partial<CodeMashHub2.SavePushIntegration> = {} as Partial<CodeMashHub2.SavePushIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/integrations',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/notifications/push/integrations/{Id}/default
   * Request DTO: SetPushIntegrationAsDefaultRequest
   */
  setPushIntegrationAsDefault = (
    request: Partial<CodeMashHub2.SetPushIntegrationAsDefaultRequest> = {} as Partial<CodeMashHub2.SetPushIntegrationAsDefaultRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/integrations/{Id}/default',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/push/integrations/test
   * Request DTO: TestPushIntegration
   */
  testPushIntegration = (
    request: Partial<CodeMashHub2.TestPushIntegration> = {} as Partial<CodeMashHub2.TestPushIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.TestEmailIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.TestEmailIntegrationResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/integrations/test',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/push/integrations/app/request
   * Account-scoped — requires `accountId` on the Norbix client.
   * Request DTO: RegisterCodeMashAppPushIntegration
   */
  registerCodeMashAppPushIntegration = (
    request: Partial<CodeMashHub2.RegisterCodeMashAppPushIntegration> = {} as Partial<CodeMashHub2.RegisterCodeMashAppPushIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/integrations/app/request',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'account',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/push/devices
   * Request DTO: RegisterDevice
   */
  registerDevice = (
    request: Partial<CodeMashHub2.RegisterDevice> = {} as Partial<CodeMashHub2.RegisterDevice>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/devices',
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
    request: Partial<CodeMashHub2.CreatePushCampaignRequest> = {} as Partial<CodeMashHub2.CreatePushCampaignRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.DeletePushCampaignRequest> = {} as Partial<CodeMashHub2.DeletePushCampaignRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.GetPushCampaign> = {} as Partial<CodeMashHub2.GetPushCampaign>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPushCampaignResponse> => {
    return this.transport.send<CodeMashHub2.GetPushCampaignResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.GetPushCampaigns> = {} as Partial<CodeMashHub2.GetPushCampaigns>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPushCampaignsResponse> => {
    return this.transport.send<CodeMashHub2.GetPushCampaignsResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.GetPushCampaignBatches> = {} as Partial<CodeMashHub2.GetPushCampaignBatches>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPushCampaignBatchesResponse> => {
    return this.transport.send<CodeMashHub2.GetPushCampaignBatchesResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.GetPushCampaignBatchNotification> = {} as Partial<CodeMashHub2.GetPushCampaignBatchNotification>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPushCampaignBatchNotificationResponse> => {
    return this.transport.send<CodeMashHub2.GetPushCampaignBatchNotificationResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.GetPushCampaignBatchNotifications> = {} as Partial<CodeMashHub2.GetPushCampaignBatchNotifications>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPushCampaignBatchNotificationsResponse> => {
    return this.transport.send<CodeMashHub2.GetPushCampaignBatchNotificationsResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.GetPushCampaignStatistics> = {} as Partial<CodeMashHub2.GetPushCampaignStatistics>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPushCampaignStatisticsResponse> => {
    return this.transport.send<CodeMashHub2.GetPushCampaignStatisticsResponse>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.PreviewPushNotification> = {} as Partial<CodeMashHub2.PreviewPushNotification>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.PreviewPushNotificationResponse> => {
    return this.transport.send<CodeMashHub2.PreviewPushNotificationResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/preview',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/push/campaigns/{Id}/stop
   * Request DTO: StopPushCampaignRequest
   */
  stopPushCampaign = (
    request: Partial<CodeMashHub2.StopPushCampaignRequest> = {} as Partial<CodeMashHub2.StopPushCampaignRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/campaigns/{Id}/stop',
      method: 'POST',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/campaigns/{campaignId}/messages/{id}
   * Request DTO: GetPushCampaignMessage
   */
  getPushCampaignMessage = (
    request: Partial<CodeMashHub2.GetPushCampaignMessage> = {} as Partial<CodeMashHub2.GetPushCampaignMessage>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPushCampaignMessageResponse> => {
    return this.transport.send<CodeMashHub2.GetPushCampaignMessageResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/campaigns/{campaignId}/messages/{id}',
      method: 'GET',
      request,
      pathParams: ['campaignId', 'id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/push/campaigns/{campaignId}/messages
   * Request DTO: GetPushCampaignMessagesRequest
   */
  getPushCampaignMessages = (
    request: Partial<CodeMashHub2.GetPushCampaignMessagesRequest> = {} as Partial<CodeMashHub2.GetPushCampaignMessagesRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPushCampaignMessagesResponse> => {
    return this.transport.send<CodeMashHub2.GetPushCampaignMessagesResponse>({
      target: 'hub',
      path: '/{version}/notifications/push/campaigns/{campaignId}/messages',
      method: 'GET',
      request,
      pathParams: ['campaignId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/notifications/user/preferences
   * Request DTO: GetUserNotificationPreferences
   */
  getUserNotificationPreferences = (
    request: Partial<CodeMashHub2.GetUserNotificationPreferences> = {} as Partial<CodeMashHub2.GetUserNotificationPreferences>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetUserEmailPreferencesResponse> => {
    return this.transport.send<CodeMashHub2.GetUserEmailPreferencesResponse>({
      target: 'hub',
      path: '/{version}/notifications/user/preferences',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/notifications/user/preferences
   * Request DTO: UpdateUserNotificationsPreferences
   */
  updateUserNotificationsPreferences = (
    request: Partial<CodeMashHub2.UpdateUserNotificationsPreferences> = {} as Partial<CodeMashHub2.UpdateUserNotificationsPreferences>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/user/preferences',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/contacts/{contactId}/marketing-state/{channel}/consent
   * Request DTO: GrantContactConsentRequest
   */
  grantContactConsent = (
    request: Partial<CodeMashHub2.GrantContactConsentRequest> = {} as Partial<CodeMashHub2.GrantContactConsentRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/contacts/{contactId}/marketing-state/{channel}/consent',
      method: 'POST',
      request,
      pathParams: ['contactId', 'channel'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/notifications/contacts/{contactId}/marketing-state/{channel}/unsubscribe
   * Request DTO: UnsubscribeContactRequest
   */
  unsubscribeContact = (
    request: Partial<CodeMashHub2.UnsubscribeContactRequest> = {} as Partial<CodeMashHub2.UnsubscribeContactRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/notifications/contacts/{contactId}/marketing-state/{channel}/unsubscribe',
      method: 'POST',
      request,
      pathParams: ['contactId', 'channel'],
      scope: 'project',
      ...options,
    });
  };
}
