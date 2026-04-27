import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: membership
 * Endpoints: 25
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
   * DELETE /{version}/membership/triggers/{triggerId}
   * Aliases:
   *   - DELETE /{version}/triggers
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
   * Aliases:
   *   - PUT /{version}/triggers/disable
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
   * Aliases:
   *   - PUT /{version}/triggers/enable
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
   * Aliases:
   *   - POST /{version}/triggers
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
}
