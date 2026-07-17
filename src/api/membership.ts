import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashApi2 } from '../types/api2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: membership
 * Endpoints: 41
 */
export class MembershipModule {
  constructor(private readonly transport: Transport) {}

  /**
   * PATCH /{version}/membership/auth/block
   * Request DTO: BlockUserRequest
   */
  blockUser = (
    request: Partial<CodeMashApi2.BlockUserRequest> = {} as Partial<CodeMashApi2.BlockUserRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/membership/auth/block',
      method: 'PATCH',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/auth/register/service
   * Request DTO: SaveSystemUserWithPermissions
   */
  saveSystemUserWithPermissions = (
    request: Partial<CodeMashApi2.SaveSystemUserWithPermissions> = {} as Partial<CodeMashApi2.SaveSystemUserWithPermissions>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/membership/auth/register/service',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/auth/register/guest
   * Request DTO: SaveGuestUser
   */
  saveGuestUser = (
    request: Partial<CodeMashApi2.SaveGuestUser> = {} as Partial<CodeMashApi2.SaveGuestUser>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/membership/auth/register/guest',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/auth/register/user-name
   * Request DTO: SaveUserNameUser
   */
  saveUserNameUser = (
    request: Partial<CodeMashApi2.SaveUserNameUser> = {} as Partial<CodeMashApi2.SaveUserNameUser>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/membership/auth/register/user-name',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/auth/register/email
   * Request DTO: SaveEmailUser
   */
  saveEmailUser = (
    request: Partial<CodeMashApi2.SaveEmailUser> = {} as Partial<CodeMashApi2.SaveEmailUser>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/membership/auth/register/email',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/auth/register/phone
   * Request DTO: SavePhoneUser
   */
  savePhoneUser = (
    request: Partial<CodeMashApi2.SavePhoneUser> = {} as Partial<CodeMashApi2.SavePhoneUser>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/membership/auth/register/phone',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/auth/register/phone-with-permissions
   * Request DTO: SavePhoneUserNameWithPermissions
   */
  savePhoneUserNameWithPermissions = (
    request: Partial<CodeMashApi2.SavePhoneUserNameWithPermissions> = {} as Partial<CodeMashApi2.SavePhoneUserNameWithPermissions>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/membership/auth/register/phone-with-permissions',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/auth/register/email-with-permissions
   * Request DTO: SaveEmailUserNameWithPermissions
   */
  saveEmailUserNameWithPermissions = (
    request: Partial<CodeMashApi2.SaveEmailUserNameWithPermissions> = {} as Partial<CodeMashApi2.SaveEmailUserNameWithPermissions>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/membership/auth/register/email-with-permissions',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/auth/register/user-name-with-permissions
   * Request DTO: SaveUserNameWithPermissions
   */
  saveUserNameWithPermissions = (
    request: Partial<CodeMashApi2.SaveUserNameWithPermissions> = {} as Partial<CodeMashApi2.SaveUserNameWithPermissions>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/membership/auth/register/user-name-with-permissions',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/membership/auth
   * Request DTO: DeleteUserRequest
   */
  deleteUser = (
    request: Partial<CodeMashApi2.DeleteUserRequest> = {} as Partial<CodeMashApi2.DeleteUserRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/membership/auth',
      method: 'DELETE',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/auth/{id}
   * Request DTO: GetUserRequest
   */
  getUser = (
    request: Partial<CodeMashApi2.GetUserRequest> = {} as Partial<CodeMashApi2.GetUserRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetUserResponse> => {
    return this.transport.send<CodeMashApi2.GetUserResponse>({
      target: 'api',
      path: '/{version}/membership/auth/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/auth
   * Request DTO: GetUsersRequest
   */
  getUsers = (
    request: Partial<CodeMashApi2.GetUsersRequest> = {} as Partial<CodeMashApi2.GetUsersRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetUsersResponse> => {
    return this.transport.send<CodeMashApi2.GetUsersResponse>({
      target: 'api',
      path: '/{version}/membership/auth',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/auth/{id}/preferences
   * Request DTO: GetUserPreferencesRequest
   */
  getUserPreferences = (
    request: Partial<CodeMashApi2.GetUserPreferencesRequest> = {} as Partial<CodeMashApi2.GetUserPreferencesRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetUserPreferencesResponse> => {
    return this.transport.send<CodeMashApi2.GetUserPreferencesResponse>({
      target: 'api',
      path: '/{version}/membership/auth/{id}/preferences',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/users/{contactId}/marketing-state/{channel}/consent
   * Request DTO: GrantContactConsentRequest
   */
  grantContactConsent = (
    request: Partial<CodeMashApi2.GrantContactConsentRequest> = {} as Partial<CodeMashApi2.GrantContactConsentRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/membership/users/{contactId}/marketing-state/{channel}/consent',
      method: 'POST',
      request,
      pathParams: ['contactId', 'channel'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/auth/invite
   * Request DTO: InviteUserRequest
   */
  inviteUser = (
    request: Partial<CodeMashApi2.InviteUserRequest> = {} as Partial<CodeMashApi2.InviteUserRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/membership/auth/invite',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/auth/{userId}/link-identity
   * Request DTO: LinkIdentityRequest
   */
  linkIdentity = (
    request: Partial<CodeMashApi2.LinkIdentityRequest> = {} as Partial<CodeMashApi2.LinkIdentityRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/membership/auth/{userId}/link-identity',
      method: 'POST',
      request,
      pathParams: ['userId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/users/{userId}/map-auth
   * Request DTO: MapAuthToUserRequest
   */
  mapAuthToUser = (
    request: Partial<CodeMashApi2.MapAuthToUserRequest> = {} as Partial<CodeMashApi2.MapAuthToUserRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/membership/users/{userId}/map-auth',
      method: 'POST',
      request,
      pathParams: ['userId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/membership/auth/assign-roles
   * Request DTO: AssignRolePermissionsRequest
   */
  assignRolePermissions = (
    request: Partial<CodeMashApi2.AssignRolePermissionsRequest> = {} as Partial<CodeMashApi2.AssignRolePermissionsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/membership/auth/assign-roles',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/membership/users/{contactId}/marketing-state/{commChannel}/{channel}/tags/{tag}
   * Request DTO: SetContactTagSubscriptionRequest
   */
  setContactTagSubscription = (
    request: Partial<CodeMashApi2.SetContactTagSubscriptionRequest> = {} as Partial<CodeMashApi2.SetContactTagSubscriptionRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/membership/users/{contactId}/marketing-state/{commChannel}/{channel}/tags/{tag}',
      method: 'PUT',
      request,
      pathParams: ['contactId', 'commChannel', 'channel', 'tag'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/membership/auth/unblock
   * Request DTO: UnblockUserRequest
   */
  unblockUser = (
    request: Partial<CodeMashApi2.UnblockUserRequest> = {} as Partial<CodeMashApi2.UnblockUserRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/membership/auth/unblock',
      method: 'PATCH',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/users/{contactId}/marketing-state/{channel}/unsubscribe
   * Request DTO: UnsubscribeContactRequest
   */
  unsubscribeContact = (
    request: Partial<CodeMashApi2.UnsubscribeContactRequest> = {} as Partial<CodeMashApi2.UnsubscribeContactRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/membership/users/{contactId}/marketing-state/{channel}/unsubscribe',
      method: 'POST',
      request,
      pathParams: ['contactId', 'channel'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/membership/auth
   * Request DTO: UpdateUserRequest
   */
  updateUser = (
    request: Partial<CodeMashApi2.UpdateUserRequest> = {} as Partial<CodeMashApi2.UpdateUserRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/membership/auth',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/membership/auth/{id}/preferences
   * Request DTO: UpdateUserPreferencesRequest
   */
  updateUserPreferences = (
    request: Partial<CodeMashApi2.UpdateUserPreferencesRequest> = {} as Partial<CodeMashApi2.UpdateUserPreferencesRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/membership/auth/{id}/preferences',
      method: 'PUT',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/userauth/passkey/authentication-options
   * Request DTO: PasskeyAuthenticationOptionsRequest
   */
  passkeyAuthenticationOptions = (
    request: Partial<CodeMashApi2.PasskeyAuthenticationOptionsRequest> = {} as Partial<CodeMashApi2.PasskeyAuthenticationOptionsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PasskeyCeremonyOptionsResponse> => {
    return this.transport.send<CodeMashApi2.PasskeyCeremonyOptionsResponse>({
      target: 'api',
      path: '/{version}/membership/userauth/passkey/authentication-options',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/userauth/passkey/verify-authentication
   * Request DTO: VerifyPasskeyAuthenticationRequest
   */
  verifyPasskeyAuthentication = (
    request: Partial<CodeMashApi2.VerifyPasskeyAuthenticationRequest> = {} as Partial<CodeMashApi2.VerifyPasskeyAuthenticationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PasskeyAuthTokensResponse> => {
    return this.transport.send<CodeMashApi2.PasskeyAuthTokensResponse>({
      target: 'api',
      path: '/{version}/membership/userauth/passkey/verify-authentication',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/userauth/passkeys
   * Request DTO: ListPasskeysRequest
   */
  listPasskeys = (
    request: Partial<CodeMashApi2.ListPasskeysRequest> = {} as Partial<CodeMashApi2.ListPasskeysRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PasskeyListResponse> => {
    return this.transport.send<CodeMashApi2.PasskeyListResponse>({
      target: 'api',
      path: '/{version}/membership/userauth/passkeys',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/userauth/passkeys/{CredentialId}/rename
   * Request DTO: RenamePasskeyRequest
   */
  renamePasskey = (
    request: Partial<CodeMashApi2.RenamePasskeyRequest> = {} as Partial<CodeMashApi2.RenamePasskeyRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PasskeyOkResponse> => {
    return this.transport.send<CodeMashApi2.PasskeyOkResponse>({
      target: 'api',
      path: '/{version}/membership/userauth/passkeys/{CredentialId}/rename',
      method: 'POST',
      request,
      pathParams: ['CredentialId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/userauth/passkeys/{CredentialId}/revoke
   * Request DTO: RevokePasskeyRequest
   */
  revokePasskey = (
    request: Partial<CodeMashApi2.RevokePasskeyRequest> = {} as Partial<CodeMashApi2.RevokePasskeyRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PasskeyOkResponse> => {
    return this.transport.send<CodeMashApi2.PasskeyOkResponse>({
      target: 'api',
      path: '/{version}/membership/userauth/passkeys/{CredentialId}/revoke',
      method: 'POST',
      request,
      pathParams: ['CredentialId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/userauth/recovery/use-code
   * Request DTO: UseRecoveryCodeRequest
   */
  useRecoveryCode = (
    request: Partial<CodeMashApi2.UseRecoveryCodeRequest> = {} as Partial<CodeMashApi2.UseRecoveryCodeRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PasskeyRecoveryResponse> => {
    return this.transport.send<CodeMashApi2.PasskeyRecoveryResponse>({
      target: 'api',
      path: '/{version}/membership/userauth/recovery/use-code',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/userauth/recovery/magic-link/request
   * Request DTO: RequestMagicLinkRequest
   */
  requestMagicLink = (
    request: Partial<CodeMashApi2.RequestMagicLinkRequest> = {} as Partial<CodeMashApi2.RequestMagicLinkRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PasskeyOkResponse> => {
    return this.transport.send<CodeMashApi2.PasskeyOkResponse>({
      target: 'api',
      path: '/{version}/membership/userauth/recovery/magic-link/request',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/userauth/recovery/magic-link/consume
   * Request DTO: ConsumeMagicLinkRequest
   */
  consumeMagicLink = (
    request: Partial<CodeMashApi2.ConsumeMagicLinkRequest> = {} as Partial<CodeMashApi2.ConsumeMagicLinkRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PasskeyRecoveryResponse> => {
    return this.transport.send<CodeMashApi2.PasskeyRecoveryResponse>({
      target: 'api',
      path: '/{version}/membership/userauth/recovery/magic-link/consume',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/userauth/has-passkey
   * Request DTO: HasPasskeyRequest
   */
  hasPasskey = (
    request: Partial<CodeMashApi2.HasPasskeyRequest> = {} as Partial<CodeMashApi2.HasPasskeyRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PasskeyOkResponse> => {
    return this.transport.send<CodeMashApi2.PasskeyOkResponse>({
      target: 'api',
      path: '/{version}/membership/userauth/has-passkey',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/userauth/email/start-verification
   * Request DTO: StartEmailVerificationRequest
   */
  startEmailVerification = (
    request: Partial<CodeMashApi2.StartEmailVerificationRequest> = {} as Partial<CodeMashApi2.StartEmailVerificationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PasskeyOkResponse> => {
    return this.transport.send<CodeMashApi2.PasskeyOkResponse>({
      target: 'api',
      path: '/{version}/membership/userauth/email/start-verification',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/userauth/email/confirm-verification
   * Request DTO: ConfirmEmailVerificationRequest
   */
  confirmEmailVerification = (
    request: Partial<CodeMashApi2.ConfirmEmailVerificationRequest> = {} as Partial<CodeMashApi2.ConfirmEmailVerificationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PasskeyVerificationTokenResponse> => {
    return this.transport.send<CodeMashApi2.PasskeyVerificationTokenResponse>({
      target: 'api',
      path: '/{version}/membership/userauth/email/confirm-verification',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/userauth/passkey/registration-options
   * Request DTO: PasskeyRegistrationOptionsRequest
   */
  passkeyRegistrationOptions = (
    request: Partial<CodeMashApi2.PasskeyRegistrationOptionsRequest> = {} as Partial<CodeMashApi2.PasskeyRegistrationOptionsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PasskeyCeremonyOptionsResponse> => {
    return this.transport.send<CodeMashApi2.PasskeyCeremonyOptionsResponse>({
      target: 'api',
      path: '/{version}/membership/userauth/passkey/registration-options',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/userauth/passkey/verify-registration
   * Request DTO: VerifyPasskeyRegistrationRequest
   */
  verifyPasskeyRegistration = (
    request: Partial<CodeMashApi2.VerifyPasskeyRegistrationRequest> = {} as Partial<CodeMashApi2.VerifyPasskeyRegistrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PasskeyAuthTokensResponse> => {
    return this.transport.send<CodeMashApi2.PasskeyAuthTokensResponse>({
      target: 'api',
      path: '/{version}/membership/userauth/passkey/verify-registration',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/userauth/token/refresh
   * Request DTO: RefreshPasskeyTokenRequest
   */
  refreshPasskeyToken = (
    request: Partial<CodeMashApi2.RefreshPasskeyTokenRequest> = {} as Partial<CodeMashApi2.RefreshPasskeyTokenRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PasskeyAuthTokensResponse> => {
    return this.transport.send<CodeMashApi2.PasskeyAuthTokensResponse>({
      target: 'api',
      path: '/{version}/membership/userauth/token/refresh',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/userauth/logout
   * Request DTO: PasskeyLogoutRequest
   */
  passkeyLogout = (
    request: Partial<CodeMashApi2.PasskeyLogoutRequest> = {} as Partial<CodeMashApi2.PasskeyLogoutRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PasskeyOkResponse> => {
    return this.transport.send<CodeMashApi2.PasskeyOkResponse>({
      target: 'api',
      path: '/{version}/membership/userauth/logout',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/userauth/password/change
   * Request DTO: ChangePasswordRequest
   */
  changePassword = (
    request: Partial<CodeMashApi2.ChangePasswordRequest> = {} as Partial<CodeMashApi2.ChangePasswordRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PasskeyOkResponse> => {
    return this.transport.send<CodeMashApi2.PasskeyOkResponse>({
      target: 'api',
      path: '/{version}/membership/userauth/password/change',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/userauth/password/reset/request
   * Request DTO: RequestPasswordResetRequest
   */
  requestPasswordReset = (
    request: Partial<CodeMashApi2.RequestPasswordResetRequest> = {} as Partial<CodeMashApi2.RequestPasswordResetRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PasskeyOkResponse> => {
    return this.transport.send<CodeMashApi2.PasskeyOkResponse>({
      target: 'api',
      path: '/{version}/membership/userauth/password/reset/request',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/userauth/password/reset/confirm
   * Request DTO: ConfirmPasswordResetRequest
   */
  confirmPasswordReset = (
    request: Partial<CodeMashApi2.ConfirmPasswordResetRequest> = {} as Partial<CodeMashApi2.ConfirmPasswordResetRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PasskeyOkResponse> => {
    return this.transport.send<CodeMashApi2.PasskeyOkResponse>({
      target: 'api',
      path: '/{version}/membership/userauth/password/reset/confirm',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
