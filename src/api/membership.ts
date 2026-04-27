import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashApi2 } from '../types/api2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — follow the internal maintenance workflow
 * to refresh this file from the DTO definitions.
 *
 * Group: membership
 * Endpoints: 18
 */
export class MembershipModule {
  constructor(private readonly transport: Transport) {}

  /**
   * PATCH /{version}/membership/users/block
   * Request DTO: BlockUserRequest
   */
  blockUser = (
    request: Partial<CodeMashApi2.BlockUserRequest> = {} as Partial<CodeMashApi2.BlockUserRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/membership/users/block',
      method: 'PATCH',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/users/register/service
   * Request DTO: SaveSystemUserWithPermissions
   */
  saveSystemUserWithPermissions = (
    request: Partial<CodeMashApi2.SaveSystemUserWithPermissions> = {} as Partial<CodeMashApi2.SaveSystemUserWithPermissions>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/membership/users/register/service',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/users/register/guest
   * Request DTO: SaveGuestUser
   */
  saveGuestUser = (
    request: Partial<CodeMashApi2.SaveGuestUser> = {} as Partial<CodeMashApi2.SaveGuestUser>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/membership/users/register/guest',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/users/register/user-name
   * Request DTO: SaveUserNameUser
   */
  saveUserNameUser = (
    request: Partial<CodeMashApi2.SaveUserNameUser> = {} as Partial<CodeMashApi2.SaveUserNameUser>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/membership/users/register/user-name',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/users/register/email
   * Request DTO: SaveEmailUser
   */
  saveEmailUser = (
    request: Partial<CodeMashApi2.SaveEmailUser> = {} as Partial<CodeMashApi2.SaveEmailUser>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/membership/users/register/email',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/users/register/phone
   * Request DTO: SavePhoneUser
   */
  savePhoneUser = (
    request: Partial<CodeMashApi2.SavePhoneUser> = {} as Partial<CodeMashApi2.SavePhoneUser>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/membership/users/register/phone',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/users/register/phone-with-permissions
   * Request DTO: SavePhoneUserNameWithPermissions
   */
  savePhoneUserNameWithPermissions = (
    request: Partial<CodeMashApi2.SavePhoneUserNameWithPermissions> = {} as Partial<CodeMashApi2.SavePhoneUserNameWithPermissions>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/membership/users/register/phone-with-permissions',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/users/register/email-with-permissions
   * Request DTO: SaveEmailUserNameWithPermissions
   */
  saveEmailUserNameWithPermissions = (
    request: Partial<CodeMashApi2.SaveEmailUserNameWithPermissions> = {} as Partial<CodeMashApi2.SaveEmailUserNameWithPermissions>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/membership/users/register/email-with-permissions',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/users/register/user-name-with-permissions
   * Request DTO: SaveUserNameWithPermissions
   */
  saveUserNameWithPermissions = (
    request: Partial<CodeMashApi2.SaveUserNameWithPermissions> = {} as Partial<CodeMashApi2.SaveUserNameWithPermissions>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/membership/users/register/user-name-with-permissions',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/membership/users
   * Request DTO: DeleteUserRequest
   */
  deleteUser = (
    request: Partial<CodeMashApi2.DeleteUserRequest> = {} as Partial<CodeMashApi2.DeleteUserRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/membership/users',
      method: 'DELETE',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/users/{id}
   * Request DTO: GetUserRequest
   */
  getUser = (
    request: Partial<CodeMashApi2.GetUserRequest> = {} as Partial<CodeMashApi2.GetUserRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetUserResponse> => {
    return this.transport.send<CodeMashApi2.GetUserResponse>({
      target: 'api',
      path: '/{version}/membership/users/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/users
   * Request DTO: GetUsersRequest
   */
  getUsers = (
    request: Partial<CodeMashApi2.GetUsersRequest> = {} as Partial<CodeMashApi2.GetUsersRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetUsersResponse> => {
    return this.transport.send<CodeMashApi2.GetUsersResponse>({
      target: 'api',
      path: '/{version}/membership/users',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/users/{id}/preferences
   * Request DTO: GetUserPreferencesRequest
   */
  getUserPreferences = (
    request: Partial<CodeMashApi2.GetUserPreferencesRequest> = {} as Partial<CodeMashApi2.GetUserPreferencesRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetUserPreferencesResponse> => {
    return this.transport.send<CodeMashApi2.GetUserPreferencesResponse>({
      target: 'api',
      path: '/{version}/membership/users/{id}/preferences',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/users/invite
   * Request DTO: InviteUserRequest
   */
  inviteUser = (
    request: Partial<CodeMashApi2.InviteUserRequest> = {} as Partial<CodeMashApi2.InviteUserRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/membership/users/invite',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/membership/users/assign-roles
   * Request DTO: AssignRolePermissionsRequest
   */
  assignRolePermissions = (
    request: Partial<CodeMashApi2.AssignRolePermissionsRequest> = {} as Partial<CodeMashApi2.AssignRolePermissionsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/membership/users/assign-roles',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/membership/users/unblock
   * Request DTO: UnblockUserRequest
   */
  unblockUser = (
    request: Partial<CodeMashApi2.UnblockUserRequest> = {} as Partial<CodeMashApi2.UnblockUserRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/membership/users/unblock',
      method: 'PATCH',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/membership/users
   * Request DTO: UpdateUserRequest
   */
  updateUser = (
    request: Partial<CodeMashApi2.UpdateUserRequest> = {} as Partial<CodeMashApi2.UpdateUserRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
      path: '/{version}/membership/users',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/membership/users/{id}/preferences
   * Request DTO: UpdateUserPreferencesRequest
   */
  updateUserPreferences = (
    request: Partial<CodeMashApi2.UpdateUserPreferencesRequest> = {} as Partial<CodeMashApi2.UpdateUserPreferencesRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/membership/users/{id}/preferences',
      method: 'PUT',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };
}
