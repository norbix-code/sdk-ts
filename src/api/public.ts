import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashApi2 } from '../types/api2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: public
 * Endpoints: 2
 */
export class PublicModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/public/projects/{ProjectId}/config
   * Request DTO: GetPublicProjectConfig
   */
  getPublicProjectConfig = (
    request: Partial<CodeMashApi2.GetPublicProjectConfig> = {} as Partial<CodeMashApi2.GetPublicProjectConfig>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PublicProjectConfigDto> => {
    return this.transport.send<CodeMashApi2.PublicProjectConfigDto>({
      target: 'api',
      path: '/{version}/public/projects/{ProjectId}/config',
      method: 'GET',
      request,
      pathParams: ['ProjectId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/public/projects/{ProjectId}/legal/{Kind}
   * Request DTO: GetPublicProjectLegal
   */
  getPublicProjectLegal = (
    request: Partial<CodeMashApi2.GetPublicProjectLegal> = {} as Partial<CodeMashApi2.GetPublicProjectLegal>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.PublicLegalDocumentDto> => {
    return this.transport.send<CodeMashApi2.PublicLegalDocumentDto>({
      target: 'api',
      path: '/{version}/public/projects/{ProjectId}/legal/{Kind}',
      method: 'GET',
      request,
      pathParams: ['ProjectId', 'Kind'],
      scope: 'project',
      ...options,
    });
  };
}
