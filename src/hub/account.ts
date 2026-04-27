import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — follow the internal maintenance workflow
 * to refresh this file from the DTO definitions.
 *
 * Group: account
 * Endpoints: 37
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
}
