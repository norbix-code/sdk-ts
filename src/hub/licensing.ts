import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: licensing
 * Endpoints: 3
 */
export class LicensingModule {
  constructor(private readonly transport: Transport) {}

  /**
   * POST /{version}/licensing/domain-verification/start
   * Request DTO: StartLicenseDomainVerificationRequest
   */
  startLicenseDomainVerification = (
    request: Partial<CodeMashHub2.StartLicenseDomainVerificationRequest> = {} as Partial<CodeMashHub2.StartLicenseDomainVerificationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.StartLicenseDomainVerificationResponse> => {
    return this.transport.send<CodeMashHub2.StartLicenseDomainVerificationResponse>({
      target: 'hub',
      path: '/{version}/licensing/domain-verification/start',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/licensing/domain-verification/status
   * Request DTO: GetLicenseDomainVerificationStatus
   */
  getLicenseDomainVerificationStatus = (
    request: Partial<CodeMashHub2.GetLicenseDomainVerificationStatus> = {} as Partial<CodeMashHub2.GetLicenseDomainVerificationStatus>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetLicenseDomainVerificationStatusResponse> => {
    return this.transport.send<CodeMashHub2.GetLicenseDomainVerificationStatusResponse>({
      target: 'hub',
      path: '/{version}/licensing/domain-verification/status',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/licensing/heartbeat
   * Request DTO: PostLicenseHeartbeat
   */
  postLicenseHeartbeat = (
    request: Partial<CodeMashHub2.PostLicenseHeartbeat> = {} as Partial<CodeMashHub2.PostLicenseHeartbeat>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.PostLicenseHeartbeatResponse> => {
    return this.transport.send<CodeMashHub2.PostLicenseHeartbeatResponse>({
      target: 'hub',
      path: '/{version}/licensing/heartbeat',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
