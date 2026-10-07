import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: oauth
 * Endpoints: 6
 */
export class OauthModule {
  constructor(private readonly transport: Transport) {}

  /**
   * POST /{version}/oauth/register
   * Request DTO: OAuthRegisterRequest
   */
  oAuthRegister = (
    request: Partial<CodeMashHub2.OAuthRegisterRequest> = {} as Partial<CodeMashHub2.OAuthRegisterRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<string> => {
    return this.transport.send<string>({
      target: 'hub',
      path: '/{version}/oauth/register',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/oauth/authorize
   * Request DTO: OAuthAuthorizeRequest
   */
  oAuthAuthorize = (
    request: Partial<CodeMashHub2.OAuthAuthorizeRequest> = {} as Partial<CodeMashHub2.OAuthAuthorizeRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<string> => {
    return this.transport.send<string>({
      target: 'hub',
      path: '/{version}/oauth/authorize',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/oauth/consent
   * Request DTO: OAuthConsentRequest
   */
  oAuthConsent = (
    request: Partial<CodeMashHub2.OAuthConsentRequest> = {} as Partial<CodeMashHub2.OAuthConsentRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.OAuthConsentResponse> => {
    return this.transport.send<CodeMashHub2.OAuthConsentResponse>({
      target: 'hub',
      path: '/{version}/oauth/consent',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/oauth/consent
   * Request DTO: OAuthConsentDecisionRequest
   */
  oAuthConsentDecision = (
    request: Partial<CodeMashHub2.OAuthConsentDecisionRequest> = {} as Partial<CodeMashHub2.OAuthConsentDecisionRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.OAuthConsentDecisionResponse> => {
    return this.transport.send<CodeMashHub2.OAuthConsentDecisionResponse>({
      target: 'hub',
      path: '/{version}/oauth/consent',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/oauth/token
   * Request DTO: OAuthTokenRequest
   */
  oAuthToken = (
    request: Partial<CodeMashHub2.OAuthTokenRequest> = {} as Partial<CodeMashHub2.OAuthTokenRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<string> => {
    return this.transport.send<string>({
      target: 'hub',
      path: '/{version}/oauth/token',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/oauth/revoke
   * Request DTO: OAuthRevokeRequest
   */
  oAuthRevoke = (
    request: Partial<CodeMashHub2.OAuthRevokeRequest> = {} as Partial<CodeMashHub2.OAuthRevokeRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<string> => {
    return this.transport.send<string>({
      target: 'hub',
      path: '/{version}/oauth/revoke',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
