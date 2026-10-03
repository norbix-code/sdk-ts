import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: well_known
 * Endpoints: 2
 */
export class WellKnownModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /.well-known/oauth-protected-resource
   * Aliases:
   *   - GET /.well-known/oauth-protected-resource/{Path*}
   * Request DTO: OAuthProtectedResourceMetadataRequest
   */
  oAuthProtectedResourceMetadata = (
    request: Partial<CodeMashHub2.OAuthProtectedResourceMetadataRequest> = {} as Partial<CodeMashHub2.OAuthProtectedResourceMetadataRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<string> => {
    return this.transport.send<string>({
      target: 'hub',
      path: '/.well-known/oauth-protected-resource',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /.well-known/oauth-authorization-server
   * Aliases:
   *   - GET /.well-known/oauth-authorization-server/{Path*}
   * Request DTO: OAuthAuthorizationServerMetadataRequest
   */
  oAuthAuthorizationServerMetadata = (
    request: Partial<CodeMashHub2.OAuthAuthorizationServerMetadataRequest> = {} as Partial<CodeMashHub2.OAuthAuthorizationServerMetadataRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<string> => {
    return this.transport.send<string>({
      target: 'hub',
      path: '/.well-known/oauth-authorization-server',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
