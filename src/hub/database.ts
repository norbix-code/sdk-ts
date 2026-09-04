import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: database
 * Endpoints: 72
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
   * GET /{version}/database/taxonomies/tree
   * Request DTO: GetDatabaseTaxonomyTreeRequest
   */
  getDatabaseTaxonomyTree = (
    request: Partial<CodeMashHub2.GetDatabaseTaxonomyTreeRequest> = {} as Partial<CodeMashHub2.GetDatabaseTaxonomyTreeRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetDatabaseTaxonomyTreeResponse> => {
    return this.transport.send<CodeMashHub2.GetDatabaseTaxonomyTreeResponse>({
      target: 'hub',
      path: '/{version}/database/taxonomies/tree',
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
   * GET /{version}/database/taxonomies/{TaxonomyName}/merged-tree
   * Request DTO: GetDatabaseMergedTermTreeRequest
   */
  getDatabaseMergedTermTree = (
    request: Partial<CodeMashHub2.GetDatabaseMergedTermTreeRequest> = {} as Partial<CodeMashHub2.GetDatabaseMergedTermTreeRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetDatabaseMergedTermTreeResponse> => {
    return this.transport.send<CodeMashHub2.GetDatabaseMergedTermTreeResponse>({
      target: 'hub',
      path: '/{version}/database/taxonomies/{TaxonomyName}/merged-tree',
      method: 'GET',
      request,
      pathParams: ['TaxonomyName'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/taxonomies/{TaxonomyName}/terms/tree
   * Request DTO: GetDatabaseTaxonomyTermTreeRequest
   */
  getDatabaseTaxonomyTermTree = (
    request: Partial<CodeMashHub2.GetDatabaseTaxonomyTermTreeRequest> = {} as Partial<CodeMashHub2.GetDatabaseTaxonomyTermTreeRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetDatabaseTaxonomyTermTreeResponse> => {
    return this.transport.send<CodeMashHub2.GetDatabaseTaxonomyTermTreeResponse>({
      target: 'hub',
      path: '/{version}/database/taxonomies/{TaxonomyName}/terms/tree',
      method: 'GET',
      request,
      pathParams: ['TaxonomyName'],
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
   * POST /{version}/database/schemas/apply-bundle
   * Request DTO: ApplyDatabaseSchemaBundleRequest
   */
  applyDatabaseSchemaBundle = (
    request: Partial<CodeMashHub2.ApplyDatabaseSchemaBundleRequest> = {} as Partial<CodeMashHub2.ApplyDatabaseSchemaBundleRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.ApplyDatabaseSchemaBundleResponse> => {
    return this.transport.send<CodeMashHub2.ApplyDatabaseSchemaBundleResponse>({
      target: 'hub',
      path: '/{version}/database/schemas/apply-bundle',
      method: 'POST',
      request,
      pathParams: [],
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
   * GET /{version}/database/schemas/{Id}/list-settings
   * Request DTO: GetDatabaseSchemaListSettings
   */
  getDatabaseSchemaListSettings = (
    request: Partial<CodeMashHub2.GetDatabaseSchemaListSettings> = {} as Partial<CodeMashHub2.GetDatabaseSchemaListSettings>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetDatabaseSchemaListSettingsResponse> => {
    return this.transport.send<CodeMashHub2.GetDatabaseSchemaListSettingsResponse>({
      target: 'hub',
      path: '/{version}/database/schemas/{Id}/list-settings',
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
   * PUT /{version}/database/schemas/{Id}/list-settings
   * Request DTO: UpdateDatabaseSchemaListSettingsRequest
   */
  updateDatabaseSchemaListSettings = (
    request: Partial<CodeMashHub2.UpdateDatabaseSchemaListSettingsRequest> = {} as Partial<CodeMashHub2.UpdateDatabaseSchemaListSettingsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/schemas/{Id}/list-settings',
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
   * POST /{version}/database/collections/{collectionName}/aggregate
   * Request DTO: AggregateRecords
   */
  aggregateRecords = (
    request: Partial<CodeMashHub2.AggregateRecords> = {} as Partial<CodeMashHub2.AggregateRecords>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AggregateRecordsResponse> => {
    return this.transport.send<CodeMashHub2.AggregateRecordsResponse>({
      target: 'hub',
      path: '/{version}/database/collections/{collectionName}/aggregate',
      method: 'POST',
      request,
      pathParams: ['collectionName'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/database/collections/{collectionName}/{id}/responsibility
   * Request DTO: ChangeRecordResponsibility
   */
  changeRecordResponsibility = (
    request: Partial<CodeMashHub2.ChangeRecordResponsibility> = {} as Partial<CodeMashHub2.ChangeRecordResponsibility>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/collections/{collectionName}/{id}/responsibility',
      method: 'PUT',
      request,
      pathParams: ['collectionName', 'id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/collections/{collectionName}/count
   * Request DTO: CountRecords
   */
  countRecords = (
    request: Partial<CodeMashHub2.CountRecords> = {} as Partial<CodeMashHub2.CountRecords>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.CountRecordsResponse> => {
    return this.transport.send<CodeMashHub2.CountRecordsResponse>({
      target: 'hub',
      path: '/{version}/database/collections/{collectionName}/count',
      method: 'GET',
      request,
      pathParams: ['collectionName'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/database/collections/{collectionName}/many
   * Request DTO: DeleteManyRecords
   */
  deleteManyRecords = (
    request: Partial<CodeMashHub2.DeleteManyRecords> = {} as Partial<CodeMashHub2.DeleteManyRecords>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/collections/{collectionName}/many',
      method: 'DELETE',
      request,
      pathParams: ['collectionName'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/database/collections/{collectionName}/{id}
   * Request DTO: DeleteRecord
   */
  deleteRecord = (
    request: Partial<CodeMashHub2.DeleteRecord> = {} as Partial<CodeMashHub2.DeleteRecord>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/collections/{collectionName}/{id}',
      method: 'DELETE',
      request,
      pathParams: ['collectionName', 'id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/collections/{collectionName}/distinct
   * Request DTO: DistinctRecordValues
   */
  distinctRecordValues = (
    request: Partial<CodeMashHub2.DistinctRecordValues> = {} as Partial<CodeMashHub2.DistinctRecordValues>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.DistinctRecordValuesResponse> => {
    return this.transport.send<CodeMashHub2.DistinctRecordValuesResponse>({
      target: 'hub',
      path: '/{version}/database/collections/{collectionName}/distinct',
      method: 'GET',
      request,
      pathParams: ['collectionName'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/database/collections/{collectionName}/aggregates/{aggregateId}/execute
   * Request DTO: ExecuteRecordsAggregate
   */
  executeRecordsAggregate = (
    request: Partial<CodeMashHub2.ExecuteRecordsAggregate> = {} as Partial<CodeMashHub2.ExecuteRecordsAggregate>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.ExecuteRecordsAggregateResponse> => {
    return this.transport.send<CodeMashHub2.ExecuteRecordsAggregateResponse>({
      target: 'hub',
      path: '/{version}/database/collections/{collectionName}/aggregates/{aggregateId}/execute',
      method: 'POST',
      request,
      pathParams: ['collectionName', 'aggregateId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/collections/{collectionName}
   * Request DTO: FindRecords
   */
  findRecords = (
    request: Partial<CodeMashHub2.FindRecords> = {} as Partial<CodeMashHub2.FindRecords>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.FindRecordsResponse> => {
    return this.transport.send<CodeMashHub2.FindRecordsResponse>({
      target: 'hub',
      path: '/{version}/database/collections/{collectionName}',
      method: 'GET',
      request,
      pathParams: ['collectionName'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/collections/{collectionName}/{id}
   * Request DTO: FindOneRecord
   */
  findOneRecord = (
    request: Partial<CodeMashHub2.FindOneRecord> = {} as Partial<CodeMashHub2.FindOneRecord>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.FindOneRecordResponse> => {
    return this.transport.send<CodeMashHub2.FindOneRecordResponse>({
      target: 'hub',
      path: '/{version}/database/collections/{collectionName}/{id}',
      method: 'GET',
      request,
      pathParams: ['collectionName', 'id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/collections/{collectionName}/indexes
   * Request DTO: GetCollectionIndexes
   */
  getCollectionIndexes = (
    request: Partial<CodeMashHub2.GetCollectionIndexes> = {} as Partial<CodeMashHub2.GetCollectionIndexes>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetCollectionIndexesResponse> => {
    return this.transport.send<CodeMashHub2.GetCollectionIndexesResponse>({
      target: 'hub',
      path: '/{version}/database/collections/{collectionName}/indexes',
      method: 'GET',
      request,
      pathParams: ['collectionName'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/database/collections/{collectionName}/many
   * Request DTO: InsertManyRecords
   */
  insertManyRecords = (
    request: Partial<CodeMashHub2.InsertManyRecords> = {} as Partial<CodeMashHub2.InsertManyRecords>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/collections/{collectionName}/many',
      method: 'POST',
      request,
      pathParams: ['collectionName'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/database/collections/{collectionName}
   * Request DTO: InsertRecord
   */
  insertRecord = (
    request: Partial<CodeMashHub2.InsertRecord> = {} as Partial<CodeMashHub2.InsertRecord>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/database/collections/{collectionName}',
      method: 'POST',
      request,
      pathParams: ['collectionName'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/database/collections/{collectionName}/{id}/replace
   * Request DTO: ReplaceRecord
   */
  replaceRecord = (
    request: Partial<CodeMashHub2.ReplaceRecord> = {} as Partial<CodeMashHub2.ReplaceRecord>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/collections/{collectionName}/{id}/replace',
      method: 'PUT',
      request,
      pathParams: ['collectionName', 'id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/database/collections/seed
   * Request DTO: SeedCollectionRecords
   */
  seedCollectionRecords = (
    request: Partial<CodeMashHub2.SeedCollectionRecords> = {} as Partial<CodeMashHub2.SeedCollectionRecords>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.SeedCollectionRecordsResponse> => {
    return this.transport.send<CodeMashHub2.SeedCollectionRecordsResponse>({
      target: 'hub',
      path: '/{version}/database/collections/seed',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/database/collections/{collectionName}/many
   * Request DTO: UpdateManyRecords
   */
  updateManyRecords = (
    request: Partial<CodeMashHub2.UpdateManyRecords> = {} as Partial<CodeMashHub2.UpdateManyRecords>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/collections/{collectionName}/many',
      method: 'PUT',
      request,
      pathParams: ['collectionName'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/database/collections/{collectionName}/{id}
   * Request DTO: UpdateOneRecord
   */
  updateOneRecord = (
    request: Partial<CodeMashHub2.UpdateOneRecord> = {} as Partial<CodeMashHub2.UpdateOneRecord>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/collections/{collectionName}/{id}',
      method: 'PUT',
      request,
      pathParams: ['collectionName', 'id'],
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
   * GET /{version}/database/integrations/flex-tiers
   * Request DTO: GetAllowedFlexTiers
   */
  getAllowedFlexTiers = (
    request: Partial<CodeMashHub2.GetAllowedFlexTiers> = {} as Partial<CodeMashHub2.GetAllowedFlexTiers>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetAllowedFlexTiersResponse> => {
    return this.transport.send<CodeMashHub2.GetAllowedFlexTiersResponse>({
      target: 'hub',
      path: '/{version}/database/integrations/flex-tiers',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/integrations/{Id}/connection-string
   * Request DTO: RevealManagedFlexConnectionString
   */
  revealManagedFlexConnectionString = (
    request: Partial<CodeMashHub2.RevealManagedFlexConnectionString> = {} as Partial<CodeMashHub2.RevealManagedFlexConnectionString>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.RevealManagedFlexConnectionStringResponse> => {
    return this.transport.send<CodeMashHub2.RevealManagedFlexConnectionStringResponse>({
      target: 'hub',
      path: '/{version}/database/integrations/{Id}/connection-string',
      method: 'GET',
      request,
      pathParams: ['Id'],
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
   * POST /{version}/database/integrations/test
   * Request DTO: TestDatabaseIntegration
   */
  testDatabaseIntegration = (
    request: Partial<CodeMashHub2.TestDatabaseIntegration> = {} as Partial<CodeMashHub2.TestDatabaseIntegration>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.TestDatabaseIntegrationResponse> => {
    return this.transport.send<CodeMashHub2.TestDatabaseIntegrationResponse>({
      target: 'hub',
      path: '/{version}/database/integrations/test',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/database/imports
   * Request DTO: CreateCollectionImport
   */
  createCollectionImport = (
    request: Partial<CodeMashHub2.CreateCollectionImport> = {} as Partial<CodeMashHub2.CreateCollectionImport>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/database/imports',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/database/imports/{Id}
   * Request DTO: DeleteCollectionImportRequest
   */
  deleteCollectionImport = (
    request: Partial<CodeMashHub2.DeleteCollectionImportRequest> = {} as Partial<CodeMashHub2.DeleteCollectionImportRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/database/imports/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/imports/{Id}
   * Request DTO: GetCollectionImport
   */
  getCollectionImport = (
    request: Partial<CodeMashHub2.GetCollectionImport> = {} as Partial<CodeMashHub2.GetCollectionImport>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetCollectionImportResponse> => {
    return this.transport.send<CodeMashHub2.GetCollectionImportResponse>({
      target: 'hub',
      path: '/{version}/database/imports/{Id}',
      method: 'GET',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/imports
   * Request DTO: GetCollectionImports
   */
  getCollectionImports = (
    request: Partial<CodeMashHub2.GetCollectionImports> = {} as Partial<CodeMashHub2.GetCollectionImports>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetCollectionImportsResponse> => {
    return this.transport.send<CodeMashHub2.GetCollectionImportsResponse>({
      target: 'hub',
      path: '/{version}/database/imports',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/database/imports/upload-url
   * Request DTO: RequestImportUploadUrlRequest
   */
  requestImportUploadUrl = (
    request: Partial<CodeMashHub2.RequestImportUploadUrlRequest> = {} as Partial<CodeMashHub2.RequestImportUploadUrlRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.RequestImportUploadUrlResponse> => {
    return this.transport.send<CodeMashHub2.RequestImportUploadUrlResponse>({
      target: 'hub',
      path: '/{version}/database/imports/upload-url',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/database/imports/analyze
   * Request DTO: AnalyzeImportFileRequest
   */
  analyzeImportFile = (
    request: Partial<CodeMashHub2.AnalyzeImportFileRequest> = {} as Partial<CodeMashHub2.AnalyzeImportFileRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.AnalyzeImportFileResponse> => {
    return this.transport.send<CodeMashHub2.AnalyzeImportFileResponse>({
      target: 'hub',
      path: '/{version}/database/imports/analyze',
      method: 'POST',
      request,
      pathParams: [],
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
