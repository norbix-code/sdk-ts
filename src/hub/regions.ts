import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Norbix regions — list the regions available to the account and update the
 * set of regions a project spans (one primary + any additional).
 *
 * These endpoints manage the *set* of regions. To make requests *against* a
 * given region, set `region` on the client
 * (`new Norbix({ region: 'nb-eu-germany' })` or `norbix.setRegion('...')`) or
 * per call (`{ region: 'nb-eu-germany' }`), which sends the `nb-region`
 * header.
 *
 * Group: account (project regions)
 */
export class RegionsModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/account/regions
   * Lists the Norbix regions available to the account (region code, continent,
   * display name). Request DTO: GetAccountRegions
   */
  list = (
    request: Partial<CodeMashHub2.GetAccountRegions> = {} as Partial<CodeMashHub2.GetAccountRegions>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetAccountRegionsResponse> => {
    return this.transport.send<CodeMashHub2.GetAccountRegionsResponse>({
      target: 'hub',
      path: '/{version}/account/regions',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/account/projects/{projectId}/settings/regions
   * Updates the regions a project spans: `primaryRegion` (a region code, e.g.
   * "nb-eu-germany") and `additionalRegions`. Request DTO: UpdateProjectRegions
   */
  updateProjectRegions = (
    request: Partial<CodeMashHub2.UpdateProjectRegions> = {} as Partial<CodeMashHub2.UpdateProjectRegions>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/{projectId}/settings/regions',
      method: 'PATCH',
      request,
      pathParams: ['projectId'],
      scope: 'project',
      ...options,
    });
  };
}
