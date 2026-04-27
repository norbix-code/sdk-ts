import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashApi2 } from '../types/api2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: database
 * Endpoints: 18
 */
export class DatabaseModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/database/taxonomies/{taxonomyName}/terms
   * Request DTO: FindTermsRequest
   */
  findTerms = (
    request: Partial<CodeMashApi2.FindTermsRequest> = {} as Partial<CodeMashApi2.FindTermsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.FindTermsResponse> => {
    return this.transport.send<CodeMashApi2.FindTermsResponse>({
      target: 'api',
      path: '/{version}/database/taxonomies/{taxonomyName}/terms',
      method: 'GET',
      request,
      pathParams: ['taxonomyName'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/taxonomies/{taxonomyName}/terms/{parentId}/children
   * Request DTO: FindTermsChildrenRequest
   */
  findTermsChildren = (
    request: Partial<CodeMashApi2.FindTermsChildrenRequest> = {} as Partial<CodeMashApi2.FindTermsChildrenRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.FindTermsChildrenResponse> => {
    return this.transport.send<CodeMashApi2.FindTermsChildrenResponse>({
      target: 'api',
      path: '/{version}/database/taxonomies/{taxonomyName}/terms/{parentId}/children',
      method: 'GET',
      request,
      pathParams: ['taxonomyName', 'parentId'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/database/schemas/{id}
   * Request DTO: GetDatabaseSchemaRequest
   */
  getDatabaseSchema = (
    request: Partial<CodeMashApi2.GetDatabaseSchemaRequest> = {} as Partial<CodeMashApi2.GetDatabaseSchemaRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetDatabaseSchemaResponse> => {
    return this.transport.send<CodeMashApi2.GetDatabaseSchemaResponse>({
      target: 'api',
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
   * Request DTO: GetDatabaseSchemasRequest
   */
  getDatabaseSchemas = (
    request: Partial<CodeMashApi2.GetDatabaseSchemasRequest> = {} as Partial<CodeMashApi2.GetDatabaseSchemasRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.GetDatabaseSchemasResponse> => {
    return this.transport.send<CodeMashApi2.GetDatabaseSchemasResponse>({
      target: 'api',
      path: '/{version}/database/schemas',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/database/collections/{collectionName}/aggregate
   * Request DTO: AggregateRequest
   */
  aggregate = (
    request: Partial<CodeMashApi2.AggregateRequest> = {} as Partial<CodeMashApi2.AggregateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.AggregateResponse> => {
    return this.transport.send<CodeMashApi2.AggregateResponse>({
      target: 'api',
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
   * Request DTO: ChangeResponsibilityRequest
   */
  changeResponsibility = (
    request: Partial<CodeMashApi2.ChangeResponsibilityRequest> = {} as Partial<CodeMashApi2.ChangeResponsibilityRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
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
   * Request DTO: CountRequest
   */
  count = (
    request: Partial<CodeMashApi2.CountRequest> = {} as Partial<CodeMashApi2.CountRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.CountResponse> => {
    return this.transport.send<CodeMashApi2.CountResponse>({
      target: 'api',
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
   * Request DTO: DeleteManyRequest
   */
  deleteMany = (
    request: Partial<CodeMashApi2.DeleteManyRequest> = {} as Partial<CodeMashApi2.DeleteManyRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
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
   * Request DTO: DeleteOneRequest
   */
  deleteOne = (
    request: Partial<CodeMashApi2.DeleteOneRequest> = {} as Partial<CodeMashApi2.DeleteOneRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
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
   * Request DTO: DistinctRequest
   */
  distinct = (
    request: Partial<CodeMashApi2.DistinctRequest> = {} as Partial<CodeMashApi2.DistinctRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.DistinctResponse> => {
    return this.transport.send<CodeMashApi2.DistinctResponse>({
      target: 'api',
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
   * Request DTO: ExecuteAggregateRequest
   */
  executeAggregate = (
    request: Partial<CodeMashApi2.ExecuteAggregateRequest> = {} as Partial<CodeMashApi2.ExecuteAggregateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.ExecuteAggregateResponse> => {
    return this.transport.send<CodeMashApi2.ExecuteAggregateResponse>({
      target: 'api',
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
   * Request DTO: FindRequest
   */
  find = (
    request: Partial<CodeMashApi2.FindRequest> = {} as Partial<CodeMashApi2.FindRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.FindResponse> => {
    return this.transport.send<CodeMashApi2.FindResponse>({
      target: 'api',
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
   * Request DTO: FindOneRequest
   */
  findOne = (
    request: Partial<CodeMashApi2.FindOneRequest> = {} as Partial<CodeMashApi2.FindOneRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.FindOneResponse> => {
    return this.transport.send<CodeMashApi2.FindOneResponse>({
      target: 'api',
      path: '/{version}/database/collections/{collectionName}/{id}',
      method: 'GET',
      request,
      pathParams: ['collectionName', 'id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/database/collections/{collectionName}/many
   * Request DTO: InsertManyRequest
   */
  insertMany = (
    request: Partial<CodeMashApi2.InsertManyRequest> = {} as Partial<CodeMashApi2.InsertManyRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
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
   * Request DTO: InsertOneRequest
   */
  insertOne = (
    request: Partial<CodeMashApi2.InsertOneRequest> = {} as Partial<CodeMashApi2.InsertOneRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> => {
    return this.transport.send<CodeMashApi2.IdResponse>({
      target: 'api',
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
   * Request DTO: ReplaceOneRequest
   */
  replaceOne = (
    request: Partial<CodeMashApi2.ReplaceOneRequest> = {} as Partial<CodeMashApi2.ReplaceOneRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/database/collections/{collectionName}/{id}/replace',
      method: 'PUT',
      request,
      pathParams: ['collectionName', 'id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/database/collections/{collectionName}/many
   * Request DTO: UpdateManyRequest
   */
  updateMany = (
    request: Partial<CodeMashApi2.UpdateManyRequest> = {} as Partial<CodeMashApi2.UpdateManyRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
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
   * Request DTO: UpdateOneRequest
   */
  updateOne = (
    request: Partial<CodeMashApi2.UpdateOneRequest> = {} as Partial<CodeMashApi2.UpdateOneRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> => {
    return this.transport.send<CodeMashApi2.EmptyResponse>({
      target: 'api',
      path: '/{version}/database/collections/{collectionName}/{id}',
      method: 'PUT',
      request,
      pathParams: ['collectionName', 'id'],
      scope: 'project',
      ...options,
    });
  };
}
