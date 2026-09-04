import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: account
 * Endpoints: 93
 */
export class AccountModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/account/profile
   * Request DTO: GetAccountProfile
   */
  getAccountProfile = (
    request: Partial<CodeMashHub2.GetAccountProfile> = {} as Partial<CodeMashHub2.GetAccountProfile>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetAccountProfileResponse> => {
    return this.transport.send<CodeMashHub2.GetAccountProfileResponse>({
      target: 'hub',
      path: '/{version}/account/profile',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/account/profile
   * Request DTO: UpdateAccountProfile
   */
  updateAccountProfile = (
    request: Partial<CodeMashHub2.UpdateAccountProfile> = {} as Partial<CodeMashHub2.UpdateAccountProfile>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/profile',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/verify/resend
   * Request DTO: ResendAccountVerificationToken
   */
  resendAccountVerificationToken = (
    request: Partial<CodeMashHub2.ResendAccountVerificationToken> = {} as Partial<CodeMashHub2.ResendAccountVerificationToken>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/verify/resend',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/status
   * Request DTO: GetAccountStatus
   */
  getAccountStatus = (
    request: Partial<CodeMashHub2.GetAccountStatus> = {} as Partial<CodeMashHub2.GetAccountStatus>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetAccountStatusResponse> => {
    return this.transport.send<CodeMashHub2.GetAccountStatusResponse>({
      target: 'hub',
      path: '/{version}/account/status',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/stripe/create-checkout-session
   * Request DTO: CreateStripeCheckoutSession
   */
  createStripeCheckoutSession = (
    request: Partial<CodeMashHub2.CreateStripeCheckoutSession> = {} as Partial<CodeMashHub2.CreateStripeCheckoutSession>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.CreateStripeCheckoutSessionResponse> => {
    return this.transport.send<CodeMashHub2.CreateStripeCheckoutSessionResponse>({
      target: 'hub',
      path: '/{version}/account/stripe/create-checkout-session',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/stripe/get-portal-url
   * Request DTO: GetStripeBillingPortalUrl
   */
  getStripeBillingPortalUrl = (
    request: Partial<CodeMashHub2.GetStripeBillingPortalUrl> = {} as Partial<CodeMashHub2.GetStripeBillingPortalUrl>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetStripeBillingPortalUrlResponse> => {
    return this.transport.send<CodeMashHub2.GetStripeBillingPortalUrlResponse>({
      target: 'hub',
      path: '/{version}/account/stripe/get-portal-url',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/team/member
   * Request DTO: CreateTeamMemberFromInvitation
   */
  createTeamMemberFromInvitation = (
    request: Partial<CodeMashHub2.CreateTeamMemberFromInvitation> = {} as Partial<CodeMashHub2.CreateTeamMemberFromInvitation>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.CreateTeamMemberFromInvitationResponse> => {
    return this.transport.send<CodeMashHub2.CreateTeamMemberFromInvitationResponse>({
      target: 'hub',
      path: '/{version}/account/team/member',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/usage-billing
   * Request DTO: GetAccountUsageBilling
   */
  getAccountUsageBilling = (
    request: Partial<CodeMashHub2.GetAccountUsageBilling> = {} as Partial<CodeMashHub2.GetAccountUsageBilling>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetAccountUsageBillingResponse> => {
    return this.transport.send<CodeMashHub2.GetAccountUsageBillingResponse>({
      target: 'hub',
      path: '/{version}/account/usage-billing',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/verify
   * Account-scoped — requires `accountId` on the Norbix client.
   * Request DTO: VerifyAccount
   */
  verifyAccount = (
    request: Partial<CodeMashHub2.VerifyAccount> = {} as Partial<CodeMashHub2.VerifyAccount>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/verify',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'account',
      ...options,
    });
  };

  /**
   * DELETE /{version}/account/projects/{projectId}/notifications/settings/group
   * Request DTO: DeleteNotificationsGroup
   */
  deleteNotificationsGroup = (
    request: Partial<CodeMashHub2.DeleteNotificationsGroup> = {} as Partial<CodeMashHub2.DeleteNotificationsGroup>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/notifications/settings/group',
      method: 'DELETE',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/account/projects/{projectId}/notifications/settings/tag
   * Request DTO: DeleteNotificationsTag
   */
  deleteNotificationsTag = (
    request: Partial<CodeMashHub2.DeleteNotificationsTag> = {} as Partial<CodeMashHub2.DeleteNotificationsTag>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/notifications/settings/tag',
      method: 'DELETE',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/account/projects/{projectId}/notifications/settings/group/tag
   * Request DTO: RemoveTagFromNotificationsGroup
   */
  removeTagFromNotificationsGroup = (
    request: Partial<CodeMashHub2.RemoveTagFromNotificationsGroup> = {} as Partial<CodeMashHub2.RemoveTagFromNotificationsGroup>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/notifications/settings/group/tag',
      method: 'DELETE',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/projects/{projectId}/notifications/settings/group
   * Request DTO: SaveNotificationsGroup
   */
  saveNotificationsGroup = (
    request: Partial<CodeMashHub2.SaveNotificationsGroup> = {} as Partial<CodeMashHub2.SaveNotificationsGroup>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/notifications/settings/group',
      method: 'POST',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/projects/{projectId}/notifications/settings/tag
   * Request DTO: SaveNotificationsTag
   */
  saveNotificationsTag = (
    request: Partial<CodeMashHub2.SaveNotificationsTag> = {} as Partial<CodeMashHub2.SaveNotificationsTag>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/notifications/settings/tag',
      method: 'POST',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/projects
   * Request DTO: CreateProjectRequest
   */
  createProject = (
    request: Partial<CodeMashHub2.CreateProjectRequest> = {} as Partial<CodeMashHub2.CreateProjectRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/account/projects',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/account/projects/{projectId}
   * Request DTO: DeleteProject
   */
  deleteProject = (
    request: Partial<CodeMashHub2.DeleteProject> = {} as Partial<CodeMashHub2.DeleteProject>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}',
      method: 'DELETE',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/projects/environments
   * Request DTO: CreateProjectEnvironmentRequest
   */
  createProjectEnvironment = (
    request: Partial<CodeMashHub2.CreateProjectEnvironmentRequest> = {} as Partial<CodeMashHub2.CreateProjectEnvironmentRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/environments',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/account/projects/environments/{environmentName}
   * Request DTO: DeleteProjectEnvironmentRequest
   */
  deleteProjectEnvironment = (
    request: Partial<CodeMashHub2.DeleteProjectEnvironmentRequest> = {} as Partial<CodeMashHub2.DeleteProjectEnvironmentRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/environments/{environmentName}',
      method: 'DELETE',
      request,
      pathParams: ['environmentName'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/projects/environments/{environmentName}/rank
   * Request DTO: SetEnvironmentRankRequest
   */
  setEnvironmentRank = (
    request: Partial<CodeMashHub2.SetEnvironmentRankRequest> = {} as Partial<CodeMashHub2.SetEnvironmentRankRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/environments/{environmentName}/rank',
      method: 'PATCH',
      request,
      pathParams: ['environmentName'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/projects/environments/promote
   * Request DTO: PromoteEnvironmentRequest
   */
  promoteEnvironment = (
    request: Partial<CodeMashHub2.PromoteEnvironmentRequest> = {} as Partial<CodeMashHub2.PromoteEnvironmentRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.PromoteEnvironmentResponse> => {
    return this.transport.send<CodeMashHub2.PromoteEnvironmentResponse>({
      target: 'hub',
      path: '/{version}/account/projects/environments/promote',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/projects/environments/promote/rollback
   * Request DTO: RollbackPromotionRequest
   */
  rollbackPromotion = (
    request: Partial<CodeMashHub2.RollbackPromotionRequest> = {} as Partial<CodeMashHub2.RollbackPromotionRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.PromoteEnvironmentResponse> => {
    return this.transport.send<CodeMashHub2.PromoteEnvironmentResponse>({
      target: 'hub',
      path: '/{version}/account/projects/environments/promote/rollback',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/projects/environments
   * Request DTO: GetProjectEnvironments
   */
  getProjectEnvironments = (
    request: Partial<CodeMashHub2.GetProjectEnvironments> = {} as Partial<CodeMashHub2.GetProjectEnvironments>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetProjectEnvironmentsResponse> => {
    return this.transport.send<CodeMashHub2.GetProjectEnvironmentsResponse>({
      target: 'hub',
      path: '/{version}/account/projects/environments',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/projects/{projectId}
   * Request DTO: GetProject
   */
  getProject = (
    request: Partial<CodeMashHub2.GetProject> = {} as Partial<CodeMashHub2.GetProject>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetProjectResponse> => {
    return this.transport.send<CodeMashHub2.GetProjectResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}',
      method: 'GET',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/projects
   * Request DTO: GetProjects
   */
  getProjects = (
    request: Partial<CodeMashHub2.GetProjects> = {} as Partial<CodeMashHub2.GetProjects>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetProjectsResponse> => {
    return this.transport.send<CodeMashHub2.GetProjectsResponse>({
      target: 'hub',
      path: '/{version}/account/projects',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/regions
   * Request DTO: GetAccountRegions
   */
  getAccountRegions = (
    request: Partial<CodeMashHub2.GetAccountRegions> = {} as Partial<CodeMashHub2.GetAccountRegions>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetAccountRegionsResponse> => {
    return this.transport.send<CodeMashHub2.GetAccountRegionsResponse>({
      target: 'hub',
      path: '/{version}/account/regions',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/projects/{projectId}/wait-active
   * Request DTO: WaitForProjectActiveRequest
   */
  waitForProjectActive = (
    request: Partial<CodeMashHub2.WaitForProjectActiveRequest> = {} as Partial<CodeMashHub2.WaitForProjectActiveRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.WaitForProjectActiveResponse> => {
    return this.transport.send<CodeMashHub2.WaitForProjectActiveResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/wait-active',
      method: 'GET',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/projects/{projectId}/tokens
   * Request DTO: GetProjectTokens
   */
  getProjectTokens = (
    request: Partial<CodeMashHub2.GetProjectTokens> = {} as Partial<CodeMashHub2.GetProjectTokens>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetProjectTokensResponse> => {
    return this.transport.send<CodeMashHub2.GetProjectTokensResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/tokens',
      method: 'GET',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/account/projects/{projectId}/settings/admin-portal/service-user
   * Request DTO: AssignAdminPortalServiceUserRequest
   */
  assignAdminPortalServiceUser = (
    request: Partial<CodeMashHub2.AssignAdminPortalServiceUserRequest> = {} as Partial<CodeMashHub2.AssignAdminPortalServiceUserRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/settings/admin-portal/service-user',
      method: 'PUT',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/projects/{projectId}/admin-portal/structure
   * Request DTO: GetAdminPortalStructure
   */
  getAdminPortalStructure = (
    request: Partial<CodeMashHub2.GetAdminPortalStructure> = {} as Partial<CodeMashHub2.GetAdminPortalStructure>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AdminPortalStructureDto> => {
    return this.transport.send<CodeMashHub2.AdminPortalStructureDto>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/admin-portal/structure',
      method: 'GET',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/projects/{projectId}/settings/admin-url
   * Request DTO: UpdateProjectAdminUrl
   */
  updateProjectAdminUrl = (
    request: Partial<CodeMashHub2.UpdateProjectAdminUrl> = {} as Partial<CodeMashHub2.UpdateProjectAdminUrl>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/settings/admin-url',
      method: 'PATCH',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/projects/{projectId}/settings/accent-color
   * Request DTO: UpdateProjectAccentColor
   */
  updateProjectAccentColor = (
    request: Partial<CodeMashHub2.UpdateProjectAccentColor> = {} as Partial<CodeMashHub2.UpdateProjectAccentColor>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/settings/accent-color',
      method: 'PATCH',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/projects/{projectId}/settings/icon
   * Request DTO: UpdateProjectIcon
   */
  updateProjectIcon = (
    request: Partial<CodeMashHub2.UpdateProjectIcon> = {} as Partial<CodeMashHub2.UpdateProjectIcon>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/settings/icon',
      method: 'PATCH',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/projects/{projectId}/settings/logo
   * Request DTO: UpdateProjectLogo
   */
  updateProjectLogo = (
    request: Partial<CodeMashHub2.UpdateProjectLogo> = {} as Partial<CodeMashHub2.UpdateProjectLogo>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/settings/logo',
      method: 'PATCH',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/projects/{projectId}/settings/main-color
   * Request DTO: UpdateProjectMainColor
   */
  updateProjectMainColor = (
    request: Partial<CodeMashHub2.UpdateProjectMainColor> = {} as Partial<CodeMashHub2.UpdateProjectMainColor>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/settings/main-color',
      method: 'PATCH',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/projects/{projectId}/settings/origins
   * Request DTO: UpdateProjectAllowedOrigins
   */
  updateProjectAllowedOrigins = (
    request: Partial<CodeMashHub2.UpdateProjectAllowedOrigins> = {} as Partial<CodeMashHub2.UpdateProjectAllowedOrigins>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/settings/origins',
      method: 'PATCH',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/projects/{projectId}/settings/default-language
   * Request DTO: UpdateProjectDefaultLanguage
   */
  updateProjectDefaultLanguage = (
    request: Partial<CodeMashHub2.UpdateProjectDefaultLanguage> = {} as Partial<CodeMashHub2.UpdateProjectDefaultLanguage>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/settings/default-language',
      method: 'PATCH',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/projects/{projectId}/settings/description
   * Request DTO: UpdateProjectDescription
   */
  updateProjectDescription = (
    request: Partial<CodeMashHub2.UpdateProjectDescription> = {} as Partial<CodeMashHub2.UpdateProjectDescription>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/settings/description',
      method: 'PATCH',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/projects/{projectId}/disable
   * Request DTO: DisableProject
   */
  disableProject = (
    request: Partial<CodeMashHub2.DisableProject> = {} as Partial<CodeMashHub2.DisableProject>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/disable',
      method: 'PATCH',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/projects/{projectId}/enable
   * Request DTO: EnableProject
   */
  enableProject = (
    request: Partial<CodeMashHub2.EnableProject> = {} as Partial<CodeMashHub2.EnableProject>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/enable',
      method: 'PATCH',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/projects/{projectId}/settings/languages
   * Request DTO: UpdateProjectLanguages
   */
  updateProjectLanguages = (
    request: Partial<CodeMashHub2.UpdateProjectLanguages> = {} as Partial<CodeMashHub2.UpdateProjectLanguages>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/settings/languages',
      method: 'PATCH',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/projects/{projectId}/settings/legal
   * Request DTO: UpdateProjectLegalDocuments
   */
  updateProjectLegalDocuments = (
    request: Partial<CodeMashHub2.UpdateProjectLegalDocuments> = {} as Partial<CodeMashHub2.UpdateProjectLegalDocuments>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/settings/legal',
      method: 'PATCH',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/projects/{projectId}/settings/legal/expose
   * Request DTO: UpdateProjectExposeLegal
   */
  updateProjectExposeLegal = (
    request: Partial<CodeMashHub2.UpdateProjectExposeLegal> = {} as Partial<CodeMashHub2.UpdateProjectExposeLegal>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/settings/legal/expose',
      method: 'PATCH',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/projects/{projectId}/settings/url
   * Request DTO: UpdateProjectUrl
   */
  updateProjectUrl = (
    request: Partial<CodeMashHub2.UpdateProjectUrl> = {} as Partial<CodeMashHub2.UpdateProjectUrl>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/settings/url',
      method: 'PATCH',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/projects/{projectId}/settings/name
   * Request DTO: UpdateProjectName
   */
  updateProjectName = (
    request: Partial<CodeMashHub2.UpdateProjectName> = {} as Partial<CodeMashHub2.UpdateProjectName>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/settings/name',
      method: 'PATCH',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/projects/{projectId}/settings/regions
   * Request DTO: UpdateProjectRegions
   */
  updateProjectRegions = (
    request: Partial<CodeMashHub2.UpdateProjectRegions> = {} as Partial<CodeMashHub2.UpdateProjectRegions>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/settings/regions',
      method: 'PATCH',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account
   * Request DTO: CreateAccount
   */
  createAccount = (
    request: Partial<CodeMashHub2.CreateAccount> = {} as Partial<CodeMashHub2.CreateAccount>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.CreateAccountResponse> => {
    return this.transport.send<CodeMashHub2.CreateAccountResponse>({
      target: 'hub',
      path: '/{version}/account',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/team/member/password
   * Request DTO: ChangeTeamMemberPassword
   */
  changeTeamMemberPassword = (
    request: Partial<CodeMashHub2.ChangeTeamMemberPassword> = {} as Partial<CodeMashHub2.ChangeTeamMemberPassword>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/account/team/member/password',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/team/member/create
   * Request DTO: CreateTeamMember
   */
  createTeamMember = (
    request: Partial<CodeMashHub2.CreateTeamMember> = {} as Partial<CodeMashHub2.CreateTeamMember>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/account/team/member/create',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/team/policies
   * Request DTO: CreateAccountPolicy
   */
  createAccountPolicy = (
    request: Partial<CodeMashHub2.CreateAccountPolicy> = {} as Partial<CodeMashHub2.CreateAccountPolicy>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/account/team/policies',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/team/roles
   * Request DTO: CreateAccountRole
   */
  createAccountRole = (
    request: Partial<CodeMashHub2.CreateAccountRole> = {} as Partial<CodeMashHub2.CreateAccountRole>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/account/team/roles',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/account/team/policies/{Id}
   * Request DTO: DeleteAccountPolicy
   */
  deleteAccountPolicy = (
    request: Partial<CodeMashHub2.DeleteAccountPolicy> = {} as Partial<CodeMashHub2.DeleteAccountPolicy>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/account/team/policies/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/account/team/roles/{Id}
   * Request DTO: DeleteAccountRole
   */
  deleteAccountRole = (
    request: Partial<CodeMashHub2.DeleteAccountRole> = {} as Partial<CodeMashHub2.DeleteAccountRole>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/account/team/roles/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/collaborators
   * Request DTO: GetAccountCollaborators
   */
  getAccountCollaborators = (
    request: Partial<CodeMashHub2.GetAccountCollaborators> = {} as Partial<CodeMashHub2.GetAccountCollaborators>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetAccountCollaboratorsResponse> => {
    return this.transport.send<CodeMashHub2.GetAccountCollaboratorsResponse>({
      target: 'hub',
      path: '/{version}/account/collaborators',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/team/password-policy
   * Request DTO: GetAccountPasswordPolicy
   */
  getAccountPasswordPolicy = (
    request: Partial<CodeMashHub2.GetAccountPasswordPolicy> = {} as Partial<CodeMashHub2.GetAccountPasswordPolicy>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetAccountPasswordPolicyResponse> => {
    return this.transport.send<CodeMashHub2.GetAccountPasswordPolicyResponse>({
      target: 'hub',
      path: '/{version}/account/team/password-policy',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/team/policies
   * Request DTO: GetAccountTeamPolicies
   */
  getAccountTeamPolicies = (
    request: Partial<CodeMashHub2.GetAccountTeamPolicies> = {} as Partial<CodeMashHub2.GetAccountTeamPolicies>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetAccountTeamPoliciesResponse> => {
    return this.transport.send<CodeMashHub2.GetAccountTeamPoliciesResponse>({
      target: 'hub',
      path: '/{version}/account/team/policies',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/team/roles
   * Request DTO: GetAccountTeamRoles
   */
  getAccountTeamRoles = (
    request: Partial<CodeMashHub2.GetAccountTeamRoles> = {} as Partial<CodeMashHub2.GetAccountTeamRoles>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetAccountTeamRolesResponse> => {
    return this.transport.send<CodeMashHub2.GetAccountTeamRolesResponse>({
      target: 'hub',
      path: '/{version}/account/team/roles',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/team/member/invite
   * Request DTO: SendInviteToTeamMember
   */
  sendInviteToTeamMember = (
    request: Partial<CodeMashHub2.SendInviteToTeamMember> = {} as Partial<CodeMashHub2.SendInviteToTeamMember>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/team/member/invite',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/account/team/policies
   * Request DTO: UpdateAccountPolicy
   */
  updateAccountPolicy = (
    request: Partial<CodeMashHub2.UpdateAccountPolicy> = {} as Partial<CodeMashHub2.UpdateAccountPolicy>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/account/team/policies',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/account/team/roles
   * Request DTO: UpdateAccountRole
   */
  updateAccountRole = (
    request: Partial<CodeMashHub2.UpdateAccountRole> = {} as Partial<CodeMashHub2.UpdateAccountRole>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/account/team/roles',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/userauth/has-passkey
   * Request DTO: AccountHasPasskeyRequest
   */
  accountHasPasskey = (
    request: Partial<CodeMashHub2.AccountHasPasskeyRequest> = {} as Partial<CodeMashHub2.AccountHasPasskeyRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AccountPasskeyOkResponse> => {
    return this.transport.send<CodeMashHub2.AccountPasskeyOkResponse>({
      target: 'hub',
      path: '/{version}/account/userauth/has-passkey',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/userauth/email/start-verification
   * Request DTO: AccountStartEmailVerificationRequest
   */
  accountStartEmailVerification = (
    request: Partial<CodeMashHub2.AccountStartEmailVerificationRequest> = {} as Partial<CodeMashHub2.AccountStartEmailVerificationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AccountPasskeyOkResponse> => {
    return this.transport.send<CodeMashHub2.AccountPasskeyOkResponse>({
      target: 'hub',
      path: '/{version}/account/userauth/email/start-verification',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/userauth/email/confirm-verification
   * Request DTO: AccountConfirmEmailVerificationRequest
   */
  accountConfirmEmailVerification = (
    request: Partial<CodeMashHub2.AccountConfirmEmailVerificationRequest> = {} as Partial<CodeMashHub2.AccountConfirmEmailVerificationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AccountPasskeyVerificationTokenResponse> => {
    return this.transport.send<CodeMashHub2.AccountPasskeyVerificationTokenResponse>({
      target: 'hub',
      path: '/{version}/account/userauth/email/confirm-verification',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/userauth/passkey/registration-options
   * Request DTO: AccountPasskeyRegistrationOptionsRequest
   */
  accountPasskeyRegistrationOptions = (
    request: Partial<CodeMashHub2.AccountPasskeyRegistrationOptionsRequest> = {} as Partial<CodeMashHub2.AccountPasskeyRegistrationOptionsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AccountPasskeyCeremonyOptionsResponse> => {
    return this.transport.send<CodeMashHub2.AccountPasskeyCeremonyOptionsResponse>({
      target: 'hub',
      path: '/{version}/account/userauth/passkey/registration-options',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/userauth/passkey/verify-registration
   * Request DTO: AccountVerifyPasskeyRegistrationRequest
   */
  accountVerifyPasskeyRegistration = (
    request: Partial<CodeMashHub2.AccountVerifyPasskeyRegistrationRequest> = {} as Partial<CodeMashHub2.AccountVerifyPasskeyRegistrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AccountPasskeyAuthTokensResponse> => {
    return this.transport.send<CodeMashHub2.AccountPasskeyAuthTokensResponse>({
      target: 'hub',
      path: '/{version}/account/userauth/passkey/verify-registration',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/userauth/passkey/authentication-options
   * Request DTO: AccountPasskeyAuthenticationOptionsRequest
   */
  accountPasskeyAuthenticationOptions = (
    request: Partial<CodeMashHub2.AccountPasskeyAuthenticationOptionsRequest> = {} as Partial<CodeMashHub2.AccountPasskeyAuthenticationOptionsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AccountPasskeyCeremonyOptionsResponse> => {
    return this.transport.send<CodeMashHub2.AccountPasskeyCeremonyOptionsResponse>({
      target: 'hub',
      path: '/{version}/account/userauth/passkey/authentication-options',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/userauth/passkey/verify-authentication
   * Request DTO: AccountVerifyPasskeyAuthenticationRequest
   */
  accountVerifyPasskeyAuthentication = (
    request: Partial<CodeMashHub2.AccountVerifyPasskeyAuthenticationRequest> = {} as Partial<CodeMashHub2.AccountVerifyPasskeyAuthenticationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AccountPasskeyAuthTokensResponse> => {
    return this.transport.send<CodeMashHub2.AccountPasskeyAuthTokensResponse>({
      target: 'hub',
      path: '/{version}/account/userauth/passkey/verify-authentication',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/userauth/passkeys
   * Request DTO: ListAccountPasskeysRequest
   */
  listAccountPasskeys = (
    request: Partial<CodeMashHub2.ListAccountPasskeysRequest> = {} as Partial<CodeMashHub2.ListAccountPasskeysRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AccountPasskeyListResponse> => {
    return this.transport.send<CodeMashHub2.AccountPasskeyListResponse>({
      target: 'hub',
      path: '/{version}/account/userauth/passkeys',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/userauth/passkeys/{CredentialId}/rename
   * Request DTO: RenameAccountPasskeyRequest
   */
  renameAccountPasskey = (
    request: Partial<CodeMashHub2.RenameAccountPasskeyRequest> = {} as Partial<CodeMashHub2.RenameAccountPasskeyRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AccountPasskeyOkResponse> => {
    return this.transport.send<CodeMashHub2.AccountPasskeyOkResponse>({
      target: 'hub',
      path: '/{version}/account/userauth/passkeys/{CredentialId}/rename',
      method: 'POST',
      request,
      pathParams: ['CredentialId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/userauth/passkeys/{CredentialId}/revoke
   * Request DTO: RevokeAccountPasskeyRequest
   */
  revokeAccountPasskey = (
    request: Partial<CodeMashHub2.RevokeAccountPasskeyRequest> = {} as Partial<CodeMashHub2.RevokeAccountPasskeyRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AccountPasskeyOkResponse> => {
    return this.transport.send<CodeMashHub2.AccountPasskeyOkResponse>({
      target: 'hub',
      path: '/{version}/account/userauth/passkeys/{CredentialId}/revoke',
      method: 'POST',
      request,
      pathParams: ['CredentialId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/userauth/passkey/enrollment-options
   * Request DTO: AccountPasskeyEnrollmentOptionsRequest
   */
  accountPasskeyEnrollmentOptions = (
    request: Partial<CodeMashHub2.AccountPasskeyEnrollmentOptionsRequest> = {} as Partial<CodeMashHub2.AccountPasskeyEnrollmentOptionsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AccountPasskeyCeremonyOptionsResponse> => {
    return this.transport.send<CodeMashHub2.AccountPasskeyCeremonyOptionsResponse>({
      target: 'hub',
      path: '/{version}/account/userauth/passkey/enrollment-options',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/userauth/passkey/verify-enrollment
   * Request DTO: AccountVerifyPasskeyEnrollmentRequest
   */
  accountVerifyPasskeyEnrollment = (
    request: Partial<CodeMashHub2.AccountVerifyPasskeyEnrollmentRequest> = {} as Partial<CodeMashHub2.AccountVerifyPasskeyEnrollmentRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AccountPasskeyEnrollmentResponse> => {
    return this.transport.send<CodeMashHub2.AccountPasskeyEnrollmentResponse>({
      target: 'hub',
      path: '/{version}/account/userauth/passkey/verify-enrollment',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/licensing/dns-status
   * Request DTO: GetLicenseDomainDnsStatus
   */
  getLicenseDomainDnsStatus = (
    request: Partial<CodeMashHub2.GetLicenseDomainDnsStatus> = {} as Partial<CodeMashHub2.GetLicenseDomainDnsStatus>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetLicenseDomainDnsStatusResponse> => {
    return this.transport.send<CodeMashHub2.GetLicenseDomainDnsStatusResponse>({
      target: 'hub',
      path: '/{version}/account/licensing/dns-status',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/licenses
   * Request DTO: GetLicenses
   */
  getLicenses = (
    request: Partial<CodeMashHub2.GetLicenses> = {} as Partial<CodeMashHub2.GetLicenses>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetLicensesResponse> => {
    return this.transport.send<CodeMashHub2.GetLicensesResponse>({
      target: 'hub',
      path: '/{version}/account/licenses',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/licensing/status
   * Request DTO: GetInstallationLicenseStatus
   */
  getInstallationLicenseStatus = (
    request: Partial<CodeMashHub2.GetInstallationLicenseStatus> = {} as Partial<CodeMashHub2.GetInstallationLicenseStatus>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetInstallationLicenseStatusResponse> => {
    return this.transport.send<CodeMashHub2.GetInstallationLicenseStatusResponse>({
      target: 'hub',
      path: '/{version}/account/licensing/status',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/ai/tools
   * Request DTO: GetAiToolsRequest
   */
  getAiTools = (
    request: Partial<CodeMashHub2.GetAiToolsRequest> = {} as Partial<CodeMashHub2.GetAiToolsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetAiToolsResponse> => {
    return this.transport.send<CodeMashHub2.GetAiToolsResponse>({
      target: 'hub',
      path: '/{version}/account/ai/tools',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/ai/tools/{ToolName}
   * Request DTO: InvokeAiToolRequest
   */
  invokeAiTool = (
    request: Partial<CodeMashHub2.InvokeAiToolRequest> = {} as Partial<CodeMashHub2.InvokeAiToolRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.InvokeAiToolResponse> => {
    return this.transport.send<CodeMashHub2.InvokeAiToolResponse>({
      target: 'hub',
      path: '/{version}/account/ai/tools/{ToolName}',
      method: 'POST',
      request,
      pathParams: ['ToolName'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/chat/complete
   * Request DTO: AskChatRequest
   */
  askChat = (
    request: Partial<CodeMashHub2.AskChatRequest> = {} as Partial<CodeMashHub2.AskChatRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AskChatResponse> => {
    return this.transport.send<CodeMashHub2.AskChatResponse>({
      target: 'hub',
      path: '/{version}/account/chat/complete',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/chat/attachments
   * Request DTO: UploadChatAttachmentRequest
   */
  uploadChatAttachment = (
    request: Partial<CodeMashHub2.UploadChatAttachmentRequest> = {} as Partial<CodeMashHub2.UploadChatAttachmentRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.UploadChatAttachmentResponse> => {
    return this.transport.send<CodeMashHub2.UploadChatAttachmentResponse>({
      target: 'hub',
      path: '/{version}/account/chat/attachments',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/chat/availability
   * Request DTO: ChatAvailabilityRequest
   */
  chatAvailability = (
    request: Partial<CodeMashHub2.ChatAvailabilityRequest> = {} as Partial<CodeMashHub2.ChatAvailabilityRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.ChatAvailabilityResponse> => {
    return this.transport.send<CodeMashHub2.ChatAvailabilityResponse>({
      target: 'hub',
      path: '/{version}/account/chat/availability',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/chat/memory
   * Request DTO: GetChatMemoryRequest
   */
  getChatMemory = (
    request: Partial<CodeMashHub2.GetChatMemoryRequest> = {} as Partial<CodeMashHub2.GetChatMemoryRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetChatMemoryResponse> => {
    return this.transport.send<CodeMashHub2.GetChatMemoryResponse>({
      target: 'hub',
      path: '/{version}/account/chat/memory',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/account/chat/memory/{NoteId}
   * Request DTO: ForgetChatMemoryRequest
   */
  forgetChatMemory = (
    request: Partial<CodeMashHub2.ForgetChatMemoryRequest> = {} as Partial<CodeMashHub2.ForgetChatMemoryRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/chat/memory/{NoteId}',
      method: 'DELETE',
      request,
      pathParams: ['NoteId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/account/chat/sessions/{SessionId}
   * Request DTO: DeleteChatSessionRequest
   */
  deleteChatSession = (
    request: Partial<CodeMashHub2.DeleteChatSessionRequest> = {} as Partial<CodeMashHub2.DeleteChatSessionRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/account/chat/sessions/{SessionId}',
      method: 'DELETE',
      request,
      pathParams: ['SessionId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/chat/sessions/{SessionId}/archive
   * Request DTO: SetChatSessionArchivedRequest
   */
  setChatSessionArchived = (
    request: Partial<CodeMashHub2.SetChatSessionArchivedRequest> = {} as Partial<CodeMashHub2.SetChatSessionArchivedRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/account/chat/sessions/{SessionId}/archive',
      method: 'PATCH',
      request,
      pathParams: ['SessionId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/chat/sessions/{SessionId}/pin
   * Request DTO: SetChatSessionPinnedRequest
   */
  setChatSessionPinned = (
    request: Partial<CodeMashHub2.SetChatSessionPinnedRequest> = {} as Partial<CodeMashHub2.SetChatSessionPinnedRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/account/chat/sessions/{SessionId}/pin',
      method: 'PATCH',
      request,
      pathParams: ['SessionId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/chat/sessions/{SessionId}/sharing
   * Request DTO: SetChatSessionSharingRequest
   */
  setChatSessionSharing = (
    request: Partial<CodeMashHub2.SetChatSessionSharingRequest> = {} as Partial<CodeMashHub2.SetChatSessionSharingRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/account/chat/sessions/{SessionId}/sharing',
      method: 'PATCH',
      request,
      pathParams: ['SessionId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/chat/sessions
   * Request DTO: GetChatSessionsRequest
   */
  getChatSessions = (
    request: Partial<CodeMashHub2.GetChatSessionsRequest> = {} as Partial<CodeMashHub2.GetChatSessionsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetChatSessionsResponse> => {
    return this.transport.send<CodeMashHub2.GetChatSessionsResponse>({
      target: 'hub',
      path: '/{version}/account/chat/sessions',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/account/chat/sessions/{SessionId}/entries
   * Request DTO: GetChatSessionEntriesRequest
   */
  getChatSessionEntries = (
    request: Partial<CodeMashHub2.GetChatSessionEntriesRequest> = {} as Partial<CodeMashHub2.GetChatSessionEntriesRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetChatSessionEntriesResponse> => {
    return this.transport.send<CodeMashHub2.GetChatSessionEntriesResponse>({
      target: 'hub',
      path: '/{version}/account/chat/sessions/{SessionId}/entries',
      method: 'GET',
      request,
      pathParams: ['SessionId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/chat/sessions/{SessionId}/entries/{EntryId}/feedback
   * Request DTO: SetChatEntryFeedbackRequest
   */
  setChatEntryFeedback = (
    request: Partial<CodeMashHub2.SetChatEntryFeedbackRequest> = {} as Partial<CodeMashHub2.SetChatEntryFeedbackRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/account/chat/sessions/{SessionId}/entries/{EntryId}/feedback',
      method: 'POST',
      request,
      pathParams: ['SessionId', 'EntryId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/chat/sessions/{SessionId}/questions/{EntryId}/answer
   * Request DTO: AnswerChatQuestionRequest
   */
  answerChatQuestion = (
    request: Partial<CodeMashHub2.AnswerChatQuestionRequest> = {} as Partial<CodeMashHub2.AnswerChatQuestionRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/account/chat/sessions/{SessionId}/questions/{EntryId}/answer',
      method: 'POST',
      request,
      pathParams: ['SessionId', 'EntryId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/chat/sessions/{SessionId}/plans/{EntryId}/decision
   * Request DTO: DecideChatPlanRequest
   */
  decideChatPlan = (
    request: Partial<CodeMashHub2.DecideChatPlanRequest> = {} as Partial<CodeMashHub2.DecideChatPlanRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/account/chat/sessions/{SessionId}/plans/{EntryId}/decision',
      method: 'POST',
      request,
      pathParams: ['SessionId', 'EntryId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/chat/sessions/{SessionId}/steps/{EntryId}/stop
   * Request DTO: StopChatRunStepRequest
   */
  stopChatRunStep = (
    request: Partial<CodeMashHub2.StopChatRunStepRequest> = {} as Partial<CodeMashHub2.StopChatRunStepRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/account/chat/sessions/{SessionId}/steps/{EntryId}/stop',
      method: 'POST',
      request,
      pathParams: ['SessionId', 'EntryId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/chat/turn
   * Request DTO: ChatTurnRequest
   */
  chatTurn = (
    request: Partial<CodeMashHub2.ChatTurnRequest> = {} as Partial<CodeMashHub2.ChatTurnRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.ChatTurnResponse> => {
    return this.transport.send<CodeMashHub2.ChatTurnResponse>({
      target: 'hub',
      path: '/{version}/account/chat/turn',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/mcp
   * Request DTO: McpRequest
   */
  mcp = (
    request: Partial<CodeMashHub2.McpRequest> = {} as Partial<CodeMashHub2.McpRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.string> => {
    return this.transport.send<CodeMashHub2.string>({
      target: 'hub',
      path: '/{version}/account/mcp',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
