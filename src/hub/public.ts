import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

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
    request: Partial<CodeMashHub2.GetPublicProjectConfig> = {} as Partial<CodeMashHub2.GetPublicProjectConfig>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.PublicProjectConfigDto> => {
    return this.transport.send<CodeMashHub2.PublicProjectConfigDto>({
      target: 'hub',
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
    request: Partial<CodeMashHub2.GetPublicProjectLegal> = {} as Partial<CodeMashHub2.GetPublicProjectLegal>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.PublicLegalDocumentDto> => {
    return this.transport.send<CodeMashHub2.PublicLegalDocumentDto>({
      target: 'hub',
      path: '/{version}/public/projects/{ProjectId}/legal/{Kind}',
      method: 'GET',
      request,
      pathParams: ['ProjectId', 'Kind'],
      scope: 'project',
      ...options,
    });
  };
}
