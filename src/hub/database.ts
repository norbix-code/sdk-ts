import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: database
 * Endpoints: 41
 */
export class DatabaseModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/database/disable
   * Request DTO: DisableDatabase
   */
  disableDatabase = (
    request: Partial<CodeMashHub2.DisableDatabase> = {} as Partial<CodeMashHub2.DisableDatabase>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/disable',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/enable
   * Request DTO: EnableDatabase
   */
  enableDatabase = (
    request: Partial<CodeMashHub2.EnableDatabase> = {} as Partial<CodeMashHub2.EnableDatabase>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/enable',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/database/schemas/triggers/{triggerId}
   * Aliases:
   *   - DELETE /{version}/triggers
   * Request DTO: DeleteSchemaTrigger
   */
  deleteSchemaTrigger = (
    request: Partial<CodeMashHub2.DeleteSchemaTrigger> = {} as Partial<CodeMashHub2.DeleteSchemaTrigger>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/schemas/triggers/{triggerId}',
      method: 'DELETE',
      request,
      pathParams: ['triggerId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/database/schemas/triggers/{triggerId}/disable
   * Aliases:
   *   - PUT /{version}/triggers/disable
   * Request DTO: DisableSchemaTrigger
   */
  disableSchemaTrigger = (
    request: Partial<CodeMashHub2.DisableSchemaTrigger> = {} as Partial<CodeMashHub2.DisableSchemaTrigger>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/schemas/triggers/{triggerId}/disable',
      method: 'PATCH',
      request,
      pathParams: ['triggerId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PATCH /{version}/database/schemas/triggers/{triggerId}/enable
   * Aliases:
   *   - PUT /{version}/triggers/enable
   * Request DTO: EnableSchemaTrigger
   */
  enableSchemaTrigger = (
    request: Partial<CodeMashHub2.EnableSchemaTrigger> = {} as Partial<CodeMashHub2.EnableSchemaTrigger>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/schemas/triggers/{triggerId}/enable',
      method: 'PATCH',
      request,
      pathParams: ['triggerId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/schemas/triggers/{id}
   * Request DTO: GetSchemaTrigger
   */
  getSchemaTrigger = (
    request: Partial<CodeMashHub2.GetSchemaTrigger> = {} as Partial<CodeMashHub2.GetSchemaTrigger>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSchemaTriggerResponse> => {
    return this.transport.send<CodeMashHub2.GetSchemaTriggerResponse>({
      target: 'hub',
      path: '/{version}/database/schemas/triggers/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/schemas/triggers
   * Request DTO: GetSchemaTriggers
   */
  getSchemaTriggers = (
    request: Partial<CodeMashHub2.GetSchemaTriggers> = {} as Partial<CodeMashHub2.GetSchemaTriggers>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSchemaTriggersResponse> => {
    return this.transport.send<CodeMashHub2.GetSchemaTriggersResponse>({
      target: 'hub',
      path: '/{version}/database/schemas/triggers',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/database/schemas/triggers
   * Aliases:
   *   - POST /{version}/triggers
   * Request DTO: SaveSchemaTrigger
   */
  saveSchemaTrigger = (
    request: Partial<CodeMashHub2.SaveSchemaTrigger> = {} as Partial<CodeMashHub2.SaveSchemaTrigger>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/database/schemas/triggers',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/database/taxonomies/{Id}
   * Request DTO: DeleteDatabaseTaxonomyRequest
   */
  deleteDatabaseTaxonomy = (
    request: Partial<CodeMashHub2.DeleteDatabaseTaxonomyRequest> = {} as Partial<CodeMashHub2.DeleteDatabaseTaxonomyRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/taxonomies/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/taxonomies/{id}
   * Request DTO: GetDatabaseTaxonomy
   */
  getDatabaseTaxonomy = (
    request: Partial<CodeMashHub2.GetDatabaseTaxonomy> = {} as Partial<CodeMashHub2.GetDatabaseTaxonomy>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetDatabaseTaxonomyResponse> => {
    return this.transport.send<CodeMashHub2.GetDatabaseTaxonomyResponse>({
      target: 'hub',
      path: '/{version}/database/taxonomies/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/taxonomies
   * Request DTO: GetDatabaseTaxonomies
   */
  getDatabaseTaxonomies = (
    request: Partial<CodeMashHub2.GetDatabaseTaxonomies> = {} as Partial<CodeMashHub2.GetDatabaseTaxonomies>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetDatabaseTaxonomiesResponse> => {
    return this.transport.send<CodeMashHub2.GetDatabaseTaxonomiesResponse>({
      target: 'hub',
      path: '/{version}/database/taxonomies',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/database/taxonomies
   * Request DTO: SaveDatabaseTaxonomyRequest
   */
  saveDatabaseTaxonomy = (
    request: Partial<CodeMashHub2.SaveDatabaseTaxonomyRequest> = {} as Partial<CodeMashHub2.SaveDatabaseTaxonomyRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/database/taxonomies',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/database/taxonomies/{TaxonomyId}/terms/{Id}
   * Request DTO: DeleteDatabaseTaxonomyTermRequest
   */
  deleteDatabaseTaxonomyTerm = (
    request: Partial<CodeMashHub2.DeleteDatabaseTaxonomyTermRequest> = {} as Partial<CodeMashHub2.DeleteDatabaseTaxonomyTermRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/taxonomies/{TaxonomyId}/terms/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['TaxonomyId', 'Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/database/taxonomies/{TaxonomyId}/terms/many
   * Request DTO: DeleteManyDatabaseTaxonomyTermsRequest
   */
  deleteManyDatabaseTaxonomyTerms = (
    request: Partial<CodeMashHub2.DeleteManyDatabaseTaxonomyTermsRequest> = {} as Partial<CodeMashHub2.DeleteManyDatabaseTaxonomyTermsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/taxonomies/{TaxonomyId}/terms/many',
      method: 'DELETE',
      request,
      pathParams: ['TaxonomyId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/taxonomies/{TaxonomyId}/terms/{Id}
   * Request DTO: GetDatabaseTaxonomyTermRequest
   */
  getDatabaseTaxonomyTerm = (
    request: Partial<CodeMashHub2.GetDatabaseTaxonomyTermRequest> = {} as Partial<CodeMashHub2.GetDatabaseTaxonomyTermRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetDatabaseTaxonomyTermResponse> => {
    return this.transport.send<CodeMashHub2.GetDatabaseTaxonomyTermResponse>({
      target: 'hub',
      path: '/{version}/database/taxonomies/{TaxonomyId}/terms/{Id}',
      method: 'GET',
      request,
      pathParams: ['TaxonomyId', 'Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/database/taxonomies/{TaxonomyId}/terms
   * Request DTO: SaveDatabaseTaxonomyTermRequest
   */
  saveDatabaseTaxonomyTerm = (
    request: Partial<CodeMashHub2.SaveDatabaseTaxonomyTermRequest> = {} as Partial<CodeMashHub2.SaveDatabaseTaxonomyTermRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/database/taxonomies/{TaxonomyId}/terms',
      method: 'POST',
      request,
      pathParams: ['TaxonomyId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/database/taxonomies/{TaxonomyId}/terms/{Id}
   * Request DTO: UpdateDatabaseTaxonomyTermRequest
   */
  updateDatabaseTaxonomyTerm = (
    request: Partial<CodeMashHub2.UpdateDatabaseTaxonomyTermRequest> = {} as Partial<CodeMashHub2.UpdateDatabaseTaxonomyTermRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/taxonomies/{TaxonomyId}/terms/{Id}',
      method: 'PUT',
      request,
      pathParams: ['TaxonomyId', 'Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/database/schemas/{Id}
   * Request DTO: DeleteDatabaseSchemaRequest
   */
  deleteDatabaseSchema = (
    request: Partial<CodeMashHub2.DeleteDatabaseSchemaRequest> = {} as Partial<CodeMashHub2.DeleteDatabaseSchemaRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/schemas/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/database/schemas/{Id}/draft
   * Request DTO: DiscardDatabaseSchemaDraftRequest
   */
  discardDatabaseSchemaDraft = (
    request: Partial<CodeMashHub2.DiscardDatabaseSchemaDraftRequest> = {} as Partial<CodeMashHub2.DiscardDatabaseSchemaDraftRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/schemas/{Id}/draft',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/schemas/{id}
   * Request DTO: GetDatabaseSchema
   */
  getDatabaseSchema = (
    request: Partial<CodeMashHub2.GetDatabaseSchema> = {} as Partial<CodeMashHub2.GetDatabaseSchema>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetDatabaseSchemaResponse> => {
    return this.transport.send<CodeMashHub2.GetDatabaseSchemaResponse>({
      target: 'hub',
      path: '/{version}/database/schemas/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/schemas
   * Request DTO: GetDatabaseSchemas
   */
  getDatabaseSchemas = (
    request: Partial<CodeMashHub2.GetDatabaseSchemas> = {} as Partial<CodeMashHub2.GetDatabaseSchemas>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetDatabaseSchemasResponse> => {
    return this.transport.send<CodeMashHub2.GetDatabaseSchemasResponse>({
      target: 'hub',
      path: '/{version}/database/schemas',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/schemas/{Id}/draft
   * Request DTO: GetDatabaseSchemaDraft
   */
  getDatabaseSchemaDraft = (
    request: Partial<CodeMashHub2.GetDatabaseSchemaDraft> = {} as Partial<CodeMashHub2.GetDatabaseSchemaDraft>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetDatabaseSchemaDraftResponse> => {
    return this.transport.send<CodeMashHub2.GetDatabaseSchemaDraftResponse>({
      target: 'hub',
      path: '/{version}/database/schemas/{Id}/draft',
      method: 'GET',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/schemas/{Id}/versions/diff
   * Request DTO: GetDatabaseSchemaVersionDiff
   */
  getDatabaseSchemaVersionDiff = (
    request: Partial<CodeMashHub2.GetDatabaseSchemaVersionDiff> = {} as Partial<CodeMashHub2.GetDatabaseSchemaVersionDiff>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetDatabaseSchemaVersionDiffResponse> => {
    return this.transport.send<CodeMashHub2.GetDatabaseSchemaVersionDiffResponse>({
      target: 'hub',
      path: '/{version}/database/schemas/{Id}/versions/diff',
      method: 'GET',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/schemas/{Id}/versions
   * Request DTO: GetDatabaseSchemaVersions
   */
  getDatabaseSchemaVersions = (
    request: Partial<CodeMashHub2.GetDatabaseSchemaVersions> = {} as Partial<CodeMashHub2.GetDatabaseSchemaVersions>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetDatabaseSchemaVersionsResponse> => {
    return this.transport.send<CodeMashHub2.GetDatabaseSchemaVersionsResponse>({
      target: 'hub',
      path: '/{version}/database/schemas/{Id}/versions',
      method: 'GET',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/database/schemas/{Id}/publish
   * Request DTO: PublishDatabaseSchemaRequest
   */
  publishDatabaseSchema = (
    request: Partial<CodeMashHub2.PublishDatabaseSchemaRequest> = {} as Partial<CodeMashHub2.PublishDatabaseSchemaRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/schemas/{Id}/publish',
      method: 'POST',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/database/schemas/{Id}/rename
   * Request DTO: RenameDatabaseSchemaRequest
   */
  renameDatabaseSchema = (
    request: Partial<CodeMashHub2.RenameDatabaseSchemaRequest> = {} as Partial<CodeMashHub2.RenameDatabaseSchemaRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/schemas/{Id}/rename',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/database/schemas
   * Request DTO: SaveDatabaseSchemaRequest
   */
  saveDatabaseSchema = (
    request: Partial<CodeMashHub2.SaveDatabaseSchemaRequest> = {} as Partial<CodeMashHub2.SaveDatabaseSchemaRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/database/schemas',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/database/schemas/{Id}/draft
   * Request DTO: UpdateDatabaseSchemaDraftRequest
   */
  updateDatabaseSchemaDraft = (
    request: Partial<CodeMashHub2.UpdateDatabaseSchemaDraftRequest> = {} as Partial<CodeMashHub2.UpdateDatabaseSchemaDraftRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/schemas/{Id}/draft',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/database/schemas/{Id}/settings
   * Request DTO: UpdateDatabaseSchemaSettingsRequest
   */
  updateDatabaseSchemaSettings = (
    request: Partial<CodeMashHub2.UpdateDatabaseSchemaSettingsRequest> = {} as Partial<CodeMashHub2.UpdateDatabaseSchemaSettingsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/schemas/{Id}/settings',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/database/integrations/{Id}
   * Request DTO: DeleteDatabaseIntegrationRequest
   */
  deleteDatabaseIntegration = (
    request: Partial<CodeMashHub2.DeleteDatabaseIntegrationRequest> = {} as Partial<CodeMashHub2.DeleteDatabaseIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/integrations/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/database/integrations/{Id}/disable
   * Request DTO: DisableDatabaseIntegrationRequest
   */
  disableDatabaseIntegration = (
    request: Partial<CodeMashHub2.DisableDatabaseIntegrationRequest> = {} as Partial<CodeMashHub2.DisableDatabaseIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/integrations/{Id}/disable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/database/integrations/{Id}/enable
   * Request DTO: EnableDatabaseIntegrationRequest
   */
  enableDatabaseIntegration = (
    request: Partial<CodeMashHub2.EnableDatabaseIntegrationRequest> = {} as Partial<CodeMashHub2.EnableDatabaseIntegrationRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/integrations/{Id}/enable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/integrations/{id}
   * Request DTO: GetDatabaseIntegration
   */
  getDatabaseIntegration = (
    request: Partial<CodeMashHub2.GetDatabaseIntegration> = {} as Partial<CodeMashHub2.GetDatabaseIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetDatabaseIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.GetDatabaseIntegrationResponse>({
      target: 'hub',
      path: '/{version}/database/integrations/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/integrations
   * Request DTO: GetDatabaseIntegrations
   */
  getDatabaseIntegrations = (
    request: Partial<CodeMashHub2.GetDatabaseIntegrations> = {} as Partial<CodeMashHub2.GetDatabaseIntegrations>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetDatabaseIntegrationsResponse> => {
    return this.transport.send<CodeMashHub2.GetDatabaseIntegrationsResponse>({
      target: 'hub',
      path: '/{version}/database/integrations',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/database/integrations
   * Request DTO: SaveDatabaseIntegration
   */
  saveDatabaseIntegration = (
    request: Partial<CodeMashHub2.SaveDatabaseIntegration> = {} as Partial<CodeMashHub2.SaveDatabaseIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/database/integrations',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/database/integrations/{Id}/default
   * Request DTO: SetDatabaseIntegrationAsDefaultRequest
   */
  setDatabaseIntegrationAsDefault = (
    request: Partial<CodeMashHub2.SetDatabaseIntegrationAsDefaultRequest> = {} as Partial<CodeMashHub2.SetDatabaseIntegrationAsDefaultRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/integrations/{Id}/default',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/database/aggregates/{Id}
   * Request DTO: DeleteDatabaseAggregateRequest
   */
  deleteDatabaseAggregate = (
    request: Partial<CodeMashHub2.DeleteDatabaseAggregateRequest> = {} as Partial<CodeMashHub2.DeleteDatabaseAggregateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/aggregates/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/aggregates/{Id}
   * Request DTO: GetDatabaseAggregate
   */
  getDatabaseAggregate = (
    request: Partial<CodeMashHub2.GetDatabaseAggregate> = {} as Partial<CodeMashHub2.GetDatabaseAggregate>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetDatabaseAggregateResponse> => {
    return this.transport.send<CodeMashHub2.GetDatabaseAggregateResponse>({
      target: 'hub',
      path: '/{version}/database/aggregates/{Id}',
      method: 'GET',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/aggregates
   * Request DTO: GetDatabaseAggregates
   */
  getDatabaseAggregates = (
    request: Partial<CodeMashHub2.GetDatabaseAggregates> = {} as Partial<CodeMashHub2.GetDatabaseAggregates>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetDatabaseAggregatesResponse> => {
    return this.transport.send<CodeMashHub2.GetDatabaseAggregatesResponse>({
      target: 'hub',
      path: '/{version}/database/aggregates',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/database/aggregates
   * Request DTO: SaveDatabaseAggregateRequest
   */
  saveDatabaseAggregate = (
    request: Partial<CodeMashHub2.SaveDatabaseAggregateRequest> = {} as Partial<CodeMashHub2.SaveDatabaseAggregateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/database/aggregates',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/database/aggregates/test
   * Request DTO: TestDatabaseAggregateRequest
   */
  testDatabaseAggregate = (
    request: Partial<CodeMashHub2.TestDatabaseAggregateRequest> = {} as Partial<CodeMashHub2.TestDatabaseAggregateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.TestDatabaseAggregateResponse> => {
    return this.transport.send<CodeMashHub2.TestDatabaseAggregateResponse>({
      target: 'hub',
      path: '/{version}/database/aggregates/test',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
