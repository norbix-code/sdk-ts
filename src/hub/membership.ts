import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: membership
 * Endpoints: 44
 */
export class MembershipModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/membership/disable
   * Request DTO: DisableMembership
   */
  disableMembership = (
    request: Partial<CodeMashHub2.DisableMembership> = {} as Partial<CodeMashHub2.DisableMembership>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/disable',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/enable
   * Request DTO: EnableMembership
   */
  enableMembership = (
    request: Partial<CodeMashHub2.EnableMembership> = {} as Partial<CodeMashHub2.EnableMembership>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/enable',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/users/{Id}/api-keys
   * Request DTO: IssueServiceUserApiKeyRequest
   */
  issueServiceUserApiKey = (
    request: Partial<CodeMashHub2.IssueServiceUserApiKeyRequest> = {} as Partial<CodeMashHub2.IssueServiceUserApiKeyRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IssueServiceUserApiKeyResponse> => {
    return this.transport.send<CodeMashHub2.IssueServiceUserApiKeyResponse>({
      target: 'hub',
      path: '/{version}/membership/users/{Id}/api-keys',
      method: 'POST',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/users/{Id}/api-keys
   * Request DTO: ListServiceUserApiKeysRequest
   */
  listServiceUserApiKeys = (
    request: Partial<CodeMashHub2.ListServiceUserApiKeysRequest> = {} as Partial<CodeMashHub2.ListServiceUserApiKeysRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.ListServiceUserApiKeysResponse> => {
    return this.transport.send<CodeMashHub2.ListServiceUserApiKeysResponse>({
      target: 'hub',
      path: '/{version}/membership/users/{Id}/api-keys',
      method: 'GET',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/membership/users/{Id}/api-keys/{KeyId}
   * Request DTO: DeleteServiceUserApiKeyRequest
   */
  deleteServiceUserApiKey = (
    request: Partial<CodeMashHub2.DeleteServiceUserApiKeyRequest> = {} as Partial<CodeMashHub2.DeleteServiceUserApiKeyRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/users/{Id}/api-keys/{KeyId}',
      method: 'DELETE',
      request,
      pathParams: ['Id', 'KeyId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/membership/triggers/{triggerId}
   * Request DTO: DeleteMembershipTrigger
   */
  deleteMembershipTrigger = (
    request: Partial<CodeMashHub2.DeleteMembershipTrigger> = {} as Partial<CodeMashHub2.DeleteMembershipTrigger>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/triggers/{triggerId}',
      method: 'DELETE',
      request,
      pathParams: ['triggerId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/membership/triggers/{triggerId}/disable
   * Request DTO: DisableMembershipTrigger
   */
  disableMembershipTrigger = (
    request: Partial<CodeMashHub2.DisableMembershipTrigger> = {} as Partial<CodeMashHub2.DisableMembershipTrigger>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/triggers/{triggerId}/disable',
      method: 'PATCH',
      request,
      pathParams: ['triggerId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/membership/triggers/{triggerId}/enable
   * Request DTO: EnableMembershipTrigger
   */
  enableMembershipTrigger = (
    request: Partial<CodeMashHub2.EnableMembershipTrigger> = {} as Partial<CodeMashHub2.EnableMembershipTrigger>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/triggers/{triggerId}/enable',
      method: 'PATCH',
      request,
      pathParams: ['triggerId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/triggers/{id}
   * Request DTO: GetMembershipTrigger
   */
  getMembershipTrigger = (
    request: Partial<CodeMashHub2.GetMembershipTrigger> = {} as Partial<CodeMashHub2.GetMembershipTrigger>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMembershipTriggerResponse> => {
    return this.transport.send<CodeMashHub2.GetMembershipTriggerResponse>({
      target: 'hub',
      path: '/{version}/membership/triggers/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/triggers
   * Request DTO: GetMembershipTriggers
   */
  getMembershipTriggers = (
    request: Partial<CodeMashHub2.GetMembershipTriggers> = {} as Partial<CodeMashHub2.GetMembershipTriggers>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMembershipTriggersResponse> => {
    return this.transport.send<CodeMashHub2.GetMembershipTriggersResponse>({
      target: 'hub',
      path: '/{version}/membership/triggers',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/triggers
   * Request DTO: SaveMembershipTrigger
   */
  saveMembershipTrigger = (
    request: Partial<CodeMashHub2.SaveMembershipTrigger> = {} as Partial<CodeMashHub2.SaveMembershipTrigger>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/membership/triggers',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/roles
   * Request DTO: CreateRole
   */
  createRole = (
    request: Partial<CodeMashHub2.CreateRole> = {} as Partial<CodeMashHub2.CreateRole>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/membership/roles',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/membership/roles
   * Request DTO: DeleteRole
   */
  deleteRole = (
    request: Partial<CodeMashHub2.DeleteRole> = {} as Partial<CodeMashHub2.DeleteRole>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/roles',
      method: 'DELETE',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/roles/{Id}
   * Request DTO: GetRole
   */
  getRole = (
    request: Partial<CodeMashHub2.GetRole> = {} as Partial<CodeMashHub2.GetRole>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetRoleResponse> => {
    return this.transport.send<CodeMashHub2.GetRoleResponse>({
      target: 'hub',
      path: '/{version}/membership/roles/{Id}',
      method: 'GET',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/roles
   * Request DTO: GetRoles
   */
  getRoles = (
    request: Partial<CodeMashHub2.GetRoles> = {} as Partial<CodeMashHub2.GetRoles>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetRolesResponse> => {
    return this.transport.send<CodeMashHub2.GetRolesResponse>({
      target: 'hub',
      path: '/{version}/membership/roles',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/membership/roles
   * Request DTO: UpdateRolePolicies
   */
  updateRolePolicies = (
    request: Partial<CodeMashHub2.UpdateRolePolicies> = {} as Partial<CodeMashHub2.UpdateRolePolicies>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/roles',
      method: 'PATCH',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/policies
   * Request DTO: CreatePolicy
   */
  createPolicy = (
    request: Partial<CodeMashHub2.CreatePolicy> = {} as Partial<CodeMashHub2.CreatePolicy>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/membership/policies',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/membership/policies
   * Request DTO: DeletePolicy
   */
  deletePolicy = (
    request: Partial<CodeMashHub2.DeletePolicy> = {} as Partial<CodeMashHub2.DeletePolicy>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/policies',
      method: 'DELETE',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/policies/{Id}
   * Request DTO: GetPolicy
   */
  getPolicy = (
    request: Partial<CodeMashHub2.GetPolicy> = {} as Partial<CodeMashHub2.GetPolicy>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPolicyResponse> => {
    return this.transport.send<CodeMashHub2.GetPolicyResponse>({
      target: 'hub',
      path: '/{version}/membership/policies/{Id}',
      method: 'GET',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/policies
   * Request DTO: GetPolicies
   */
  getPolicies = (
    request: Partial<CodeMashHub2.GetPolicies> = {} as Partial<CodeMashHub2.GetPolicies>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPoliciesResponse> => {
    return this.transport.send<CodeMashHub2.GetPoliciesResponse>({
      target: 'hub',
      path: '/{version}/membership/policies',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/membership/policies
   * Request DTO: UpdatePolicy
   */
  updatePolicy = (
    request: Partial<CodeMashHub2.UpdatePolicy> = {} as Partial<CodeMashHub2.UpdatePolicy>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/membership/policies',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/passkey/settings
   * Request DTO: GetPasskeySettings
   */
  getPasskeySettings = (
    request: Partial<CodeMashHub2.GetPasskeySettings> = {} as Partial<CodeMashHub2.GetPasskeySettings>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetPasskeySettingsResponse> => {
    return this.transport.send<CodeMashHub2.GetPasskeySettingsResponse>({
      target: 'hub',
      path: '/{version}/membership/passkey/settings',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/passkey/settings
   * Request DTO: SavePasskeySettings
   */
  savePasskeySettings = (
    request: Partial<CodeMashHub2.SavePasskeySettings> = {} as Partial<CodeMashHub2.SavePasskeySettings>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/passkey/settings',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/membership/integrations/{Id}
   * Request DTO: DeleteMembershipIntegrationRequest
   */
  deleteMembershipIntegration = (
    request: Partial<CodeMashHub2.DeleteMembershipIntegrationRequest> = {} as Partial<CodeMashHub2.DeleteMembershipIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/integrations/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/membership/integrations/{Id}/disable
   * Request DTO: DisableMembershipIntegrationRequest
   */
  disableMembershipIntegration = (
    request: Partial<CodeMashHub2.DisableMembershipIntegrationRequest> = {} as Partial<CodeMashHub2.DisableMembershipIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/integrations/{Id}/disable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/membership/integrations/{Id}/enable
   * Request DTO: EnableMembershipIntegrationRequest
   */
  enableMembershipIntegration = (
    request: Partial<CodeMashHub2.EnableMembershipIntegrationRequest> = {} as Partial<CodeMashHub2.EnableMembershipIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/integrations/{Id}/enable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/integrations/{id}
   * Request DTO: GetMembershipIntegration
   */
  getMembershipIntegration = (
    request: Partial<CodeMashHub2.GetMembershipIntegration> = {} as Partial<CodeMashHub2.GetMembershipIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMembershipIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.GetMembershipIntegrationResponse>({
      target: 'hub',
      path: '/{version}/membership/integrations/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/integrations
   * Request DTO: GetMembershipIntegrations
   */
  getMembershipIntegrations = (
    request: Partial<CodeMashHub2.GetMembershipIntegrations> = {} as Partial<CodeMashHub2.GetMembershipIntegrations>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetMembershipIntegrationsResponse> => {
    return this.transport.send<CodeMashHub2.GetMembershipIntegrationsResponse>({
      target: 'hub',
      path: '/{version}/membership/integrations',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/integrations
   * Request DTO: SaveMembershipIntegration
   */
  saveMembershipIntegration = (
    request: Partial<CodeMashHub2.SaveMembershipIntegration> = {} as Partial<CodeMashHub2.SaveMembershipIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/membership/integrations',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/membership/integrations/{Id}/default
   * Request DTO: SetMembershipIntegrationAsDefaultRequest
   */
  setMembershipIntegrationAsDefault = (
    request: Partial<CodeMashHub2.SetMembershipIntegrationAsDefaultRequest> = {} as Partial<CodeMashHub2.SetMembershipIntegrationAsDefaultRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/integrations/{Id}/default',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/authorization
   * Request DTO: GetAuthorizationSettings
   */
  getAuthorizationSettings = (
    request: Partial<CodeMashHub2.GetAuthorizationSettings> = {} as Partial<CodeMashHub2.GetAuthorizationSettings>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetAuthorizationSettingsResponse> => {
    return this.transport.send<CodeMashHub2.GetAuthorizationSettingsResponse>({
      target: 'hub',
      path: '/{version}/membership/authorization',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/membership/authorization
   * Request DTO: UpdateAuthorizationSettings
   */
  updateAuthorizationSettings = (
    request: Partial<CodeMashHub2.UpdateAuthorizationSettings> = {} as Partial<CodeMashHub2.UpdateAuthorizationSettings>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/authorization',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/membership/authorization/password-complexity
   * Request DTO: UpdatePasswordComplexity
   */
  updatePasswordComplexity = (
    request: Partial<CodeMashHub2.UpdatePasswordComplexity> = {} as Partial<CodeMashHub2.UpdatePasswordComplexity>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.UpdatePasswordComplexityResponse> => {
    return this.transport.send<CodeMashHub2.UpdatePasswordComplexityResponse>({
      target: 'hub',
      path: '/{version}/membership/authorization/password-complexity',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/authentication
   * Request DTO: GetAuthenticationSettings
   */
  getAuthenticationSettings = (
    request: Partial<CodeMashHub2.GetAuthenticationSettings> = {} as Partial<CodeMashHub2.GetAuthenticationSettings>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetAuthenticationSettingsResponse> => {
    return this.transport.send<CodeMashHub2.GetAuthenticationSettingsResponse>({
      target: 'hub',
      path: '/{version}/membership/authentication',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/membership/authentication
   * Request DTO: UpdateAuthenticationSettings
   */
  updateAuthenticationSettings = (
    request: Partial<CodeMashHub2.UpdateAuthenticationSettings> = {} as Partial<CodeMashHub2.UpdateAuthenticationSettings>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/authentication',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/users
   * Request DTO: CreateContactRequest
   */
  createContact = (
    request: Partial<CodeMashHub2.CreateContactRequest> = {} as Partial<CodeMashHub2.CreateContactRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/users',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/membership/users/{contactId}
   * Request DTO: DeleteContact
   */
  deleteContact = (
    request: Partial<CodeMashHub2.DeleteContact> = {} as Partial<CodeMashHub2.DeleteContact>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/users/{contactId}',
      method: 'DELETE',
      request,
      pathParams: ['contactId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/users/{contactId}
   * Request DTO: GetContact
   */
  getContact = (
    request: Partial<CodeMashHub2.GetContact> = {} as Partial<CodeMashHub2.GetContact>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetContactResponse> => {
    return this.transport.send<CodeMashHub2.GetContactResponse>({
      target: 'hub',
      path: '/{version}/membership/users/{contactId}',
      method: 'GET',
      request,
      pathParams: ['contactId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/membership/users
   * Request DTO: GetAllContacts
   */
  getAllContacts = (
    request: Partial<CodeMashHub2.GetAllContacts> = {} as Partial<CodeMashHub2.GetAllContacts>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetAllContactsResponse> => {
    return this.transport.send<CodeMashHub2.GetAllContactsResponse>({
      target: 'hub',
      path: '/{version}/membership/users',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/users/merge
   * Request DTO: MergeContactsRequest
   */
  mergeContacts = (
    request: Partial<CodeMashHub2.MergeContactsRequest> = {} as Partial<CodeMashHub2.MergeContactsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/users/merge',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/membership/users/{contactId}
   * Request DTO: UpdateContactRequest
   */
  updateContact = (
    request: Partial<CodeMashHub2.UpdateContactRequest> = {} as Partial<CodeMashHub2.UpdateContactRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/users/{contactId}',
      method: 'PATCH',
      request,
      pathParams: ['contactId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/users/{contactId}/identities
   * Request DTO: AddContactIdentityRequest
   */
  addContactIdentity = (
    request: Partial<CodeMashHub2.AddContactIdentityRequest> = {} as Partial<CodeMashHub2.AddContactIdentityRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/users/{contactId}/identities',
      method: 'POST',
      request,
      pathParams: ['contactId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/membership/users/{contactId}/identities/{identityId}/promote
   * Request DTO: PromoteContactIdentityRequest
   */
  promoteContactIdentity = (
    request: Partial<CodeMashHub2.PromoteContactIdentityRequest> = {} as Partial<CodeMashHub2.PromoteContactIdentityRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/users/{contactId}/identities/{identityId}/promote',
      method: 'POST',
      request,
      pathParams: ['contactId', 'identityId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/membership/users/{contactId}/identities/{identityId}
   * Request DTO: RemoveContactIdentityRequest
   */
  removeContactIdentity = (
    request: Partial<CodeMashHub2.RemoveContactIdentityRequest> = {} as Partial<CodeMashHub2.RemoveContactIdentityRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/membership/users/{contactId}/identities/{identityId}',
      method: 'DELETE',
      request,
      pathParams: ['contactId', 'identityId'],
      scope: 'project',
      ...options,
    });
  };
}
