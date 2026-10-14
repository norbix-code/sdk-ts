import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: auth
 * Endpoints: 5
 */
export class AuthModule {
  constructor(private readonly transport: Transport) {}

  /**
   * POST /{version}/auth/device/start
   * Request DTO: AuthDeviceStartRequest
   */
  authDeviceStart = (
    request: Partial<CodeMashHub2.AuthDeviceStartRequest> = {} as Partial<CodeMashHub2.AuthDeviceStartRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AuthDeviceStartResponse> => {
    return this.transport.send<CodeMashHub2.AuthDeviceStartResponse>({
      target: 'hub',
      path: '/{version}/auth/device/start',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/auth/device/token
   * Request DTO: AuthDeviceTokenRequest
   */
  authDeviceToken = (
    request: Partial<CodeMashHub2.AuthDeviceTokenRequest> = {} as Partial<CodeMashHub2.AuthDeviceTokenRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AuthDeviceTokenResponse> => {
    return this.transport.send<CodeMashHub2.AuthDeviceTokenResponse>({
      target: 'hub',
      path: '/{version}/auth/device/token',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/auth/device/consent
   * Request DTO: AuthDeviceConsentRequest
   */
  authDeviceConsent = (
    request: Partial<CodeMashHub2.AuthDeviceConsentRequest> = {} as Partial<CodeMashHub2.AuthDeviceConsentRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AuthDeviceConsentResponse> => {
    return this.transport.send<CodeMashHub2.AuthDeviceConsentResponse>({
      target: 'hub',
      path: '/{version}/auth/device/consent',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/auth/device/consent
   * Request DTO: AuthDeviceConsentDecisionRequest
   */
  authDeviceConsentDecision = (
    request: Partial<CodeMashHub2.AuthDeviceConsentDecisionRequest> = {} as Partial<CodeMashHub2.AuthDeviceConsentDecisionRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AuthDeviceConsentDecisionResponse> => {
    return this.transport.send<CodeMashHub2.AuthDeviceConsentDecisionResponse>({
      target: 'hub',
      path: '/{version}/auth/device/consent',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /v3/auth
   * Aliases:
   *   - GET,POST /auth
   *   - GET,POST /auth/{provider}
   *   - POST,GET,OPTIONS /v3/auth/{provider}
   *   - POST,GET,OPTIONS /v3/staff/auth
   *   - POST,GET,OPTIONS /v3/staff/auth/{provider}
   * Request DTO: Authenticate
   */
  authenticate = (
    request: Partial<CodeMashHub2.Authenticate> = {} as Partial<CodeMashHub2.Authenticate>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AuthenticateResponse> => {
    return this.transport.send<CodeMashHub2.AuthenticateResponse>({
      target: 'hub',
      path: '/v3/auth',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'unauthenticated',
      ...options,
    });
  };
}
