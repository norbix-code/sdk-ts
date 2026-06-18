import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashApi2 } from '../types/api2.dtos.js';

/**
 * Admin-Portal PUBLIC endpoints — unauthenticated, project-scoped reads used
 * by the open-source Admin Portal to bootstrap its brand, auth options, and
 * legal documents before a user signs in.
 *
 * These are the only endpoints the portal calls without a bearer token, so
 * the scope is `unauthenticated` (the transport sends no Authorization header).
 * The backend gates what is returned by the project's expose flags; the SDK
 * just carries the request/response shape.
 *
 * Group: public
 */
export class PublicModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/public/projects/{projectId}/config
   * Request DTO: GetPublicProjectConfig
   *
   * Returns the public-safe project config: branding (when exposed) plus auth
   * options (social providers + passkey always; identifier methods + password
   * policy only when the project opts in).
   */
  config = (
    request: Partial<CodeMashApi2.GetPublicProjectConfig>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PublicProjectConfigDto> => {
    return this.transport.send<CodeMashApi2.PublicProjectConfigDto>({
      target: 'api',
      path: '/{version}/public/projects/{projectId}/config',
      method: 'GET',
      request,
      pathParams: ['projectId'],
      scope: 'unauthenticated',
      ...options,
    });
  };

  /**
   * GET /{version}/public/projects/{projectId}/legal/{kind}
   * Request DTO: GetPublicProjectLegal
   *
   * Returns a single legal document (`kind` = `terms` | `privacy`) as Markdown
   * when the project exposes legal docs; otherwise `available: false`.
   */
  legal = (
    request: Partial<CodeMashApi2.GetPublicProjectLegal>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PublicLegalDocumentDto> => {
    return this.transport.send<CodeMashApi2.PublicLegalDocumentDto>({
      target: 'api',
      path: '/{version}/public/projects/{projectId}/legal/{kind}',
      method: 'GET',
      request,
      pathParams: ['projectId', 'kind'],
      scope: 'unauthenticated',
      ...options,
    });
  };
}
