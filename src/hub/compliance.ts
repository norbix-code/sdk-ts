import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: compliance
 * Endpoints: 18
 */
export class ComplianceModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/compliance/settings
   * Request DTO: GetComplianceSettings
   */
  getComplianceSettings = (
    request: Partial<CodeMashHub2.GetComplianceSettings> = {} as Partial<CodeMashHub2.GetComplianceSettings>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetComplianceSettingsResponse> => {
    return this.transport.send<CodeMashHub2.GetComplianceSettingsResponse>({
      target: 'hub',
      path: '/{version}/compliance/settings',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/compliance/retention
   * Request DTO: RemoveRetentionWindowRequest
   */
  removeRetentionWindow = (
    request: Partial<CodeMashHub2.RemoveRetentionWindowRequest> = {} as Partial<CodeMashHub2.RemoveRetentionWindowRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/compliance/retention',
      method: 'DELETE',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/compliance/retention
   * Request DTO: SaveRetentionWindowRequest
   */
  saveRetentionWindow = (
    request: Partial<CodeMashHub2.SaveRetentionWindowRequest> = {} as Partial<CodeMashHub2.SaveRetentionWindowRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/compliance/retention',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/compliance/regimes
   * Request DTO: AssignRegimeRequest
   */
  assignRegime = (
    request: Partial<CodeMashHub2.AssignRegimeRequest> = {} as Partial<CodeMashHub2.AssignRegimeRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/compliance/regimes',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/compliance/regimes
   * Request DTO: ClearRegimeRequest
   */
  clearRegime = (
    request: Partial<CodeMashHub2.ClearRegimeRequest> = {} as Partial<CodeMashHub2.ClearRegimeRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/compliance/regimes',
      method: 'DELETE',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/compliance/purposes
   * Request DTO: DefineConsentPurposeRequest
   */
  defineConsentPurpose = (
    request: Partial<CodeMashHub2.DefineConsentPurposeRequest> = {} as Partial<CodeMashHub2.DefineConsentPurposeRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/compliance/purposes',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/compliance/purposes/deprecate
   * Request DTO: DeprecateConsentPurposeRequest
   */
  deprecateConsentPurpose = (
    request: Partial<CodeMashHub2.DeprecateConsentPurposeRequest> = {} as Partial<CodeMashHub2.DeprecateConsentPurposeRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/compliance/purposes/deprecate',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/compliance/holds
   * Request DTO: GetLegalHolds
   */
  getLegalHolds = (
    request: Partial<CodeMashHub2.GetLegalHolds> = {} as Partial<CodeMashHub2.GetLegalHolds>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetLegalHoldsResponse> => {
    return this.transport.send<CodeMashHub2.GetLegalHoldsResponse>({
      target: 'hub',
      path: '/{version}/compliance/holds',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/compliance/holds
   * Request DTO: PlaceLegalHoldRequest
   */
  placeLegalHold = (
    request: Partial<CodeMashHub2.PlaceLegalHoldRequest> = {} as Partial<CodeMashHub2.PlaceLegalHoldRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/compliance/holds',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/compliance/holds/release
   * Request DTO: ReleaseLegalHoldRequest
   */
  releaseLegalHold = (
    request: Partial<CodeMashHub2.ReleaseLegalHoldRequest> = {} as Partial<CodeMashHub2.ReleaseLegalHoldRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/compliance/holds/release',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/compliance/dsar/approve
   * Request DTO: ApproveDsarRequestRequest
   */
  approveDsarRequest = (
    request: Partial<CodeMashHub2.ApproveDsarRequestRequest> = {} as Partial<CodeMashHub2.ApproveDsarRequestRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/compliance/dsar/approve',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/compliance/dsar/reject
   * Request DTO: RejectDsarRequestRequest
   */
  rejectDsarRequest = (
    request: Partial<CodeMashHub2.RejectDsarRequestRequest> = {} as Partial<CodeMashHub2.RejectDsarRequestRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/compliance/dsar/reject',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/compliance/dsar
   * Request DTO: GetDsarRequests
   */
  getDsarRequests = (
    request: Partial<CodeMashHub2.GetDsarRequests> = {} as Partial<CodeMashHub2.GetDsarRequests>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetDsarRequestsResponse> => {
    return this.transport.send<CodeMashHub2.GetDsarRequestsResponse>({
      target: 'hub',
      path: '/{version}/compliance/dsar',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/compliance/dsar
   * Request DTO: OpenDsarRequestRequest
   */
  openDsarRequest = (
    request: Partial<CodeMashHub2.OpenDsarRequestRequest> = {} as Partial<CodeMashHub2.OpenDsarRequestRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/compliance/dsar',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/compliance/audit
   * Request DTO: GetComplianceAuditLog
   */
  getComplianceAuditLog = (
    request: Partial<CodeMashHub2.GetComplianceAuditLog> = {} as Partial<CodeMashHub2.GetComplianceAuditLog>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetComplianceAuditLogResponse> => {
    return this.transport.send<CodeMashHub2.GetComplianceAuditLogResponse>({
      target: 'hub',
      path: '/{version}/compliance/audit',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/compliance/account
   * Request DTO: GetAccountCompliance
   */
  getAccountCompliance = (
    request: Partial<CodeMashHub2.GetAccountCompliance> = {} as Partial<CodeMashHub2.GetAccountCompliance>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetAccountComplianceResponse> => {
    return this.transport.send<CodeMashHub2.GetAccountComplianceResponse>({
      target: 'hub',
      path: '/{version}/compliance/account',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/compliance/account/dsar-policy
   * Request DTO: SaveDsarPolicyRequest
   */
  saveDsarPolicy = (
    request: Partial<CodeMashHub2.SaveDsarPolicyRequest> = {} as Partial<CodeMashHub2.SaveDsarPolicyRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/compliance/account/dsar-policy',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/compliance/account/incident-routing
   * Request DTO: SaveIncidentRoutingRequest
   */
  saveIncidentRouting = (
    request: Partial<CodeMashHub2.SaveIncidentRoutingRequest> = {} as Partial<CodeMashHub2.SaveIncidentRoutingRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/compliance/account/incident-routing',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
