import type { DatabaseModule } from '../api/database.js';
import type { RequestOverrideOptions } from '../client/transport.js';
import type { CodeMashApi2 } from '../types/api2.dtos.js';

export class CollectionResource<TItem = unknown> {
  constructor(
    private readonly database: DatabaseModule,
    private readonly collectionName: string,
  ) {}

  find(
    request: Omit<Partial<CodeMashApi2.FindRequest>, 'collectionName'> = {},
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.FindResponse> {
    return this.database.find({ ...request, collectionName: this.collectionName }, options);
  }

  async findItems(
    request: Omit<Partial<CodeMashApi2.FindRequest>, 'collectionName'> = {},
    options: RequestOverrideOptions = {},
  ): Promise<TItem[]> {
    const res = await this.find(request, options);
    const items = res.list?.items as unknown;
    return (Array.isArray(items) ? items : []) as TItem[];
  }

  findOne(
    request: Omit<Partial<CodeMashApi2.FindOneRequest>, 'collectionName'>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.FindOneResponse> {
    return this.database.findOne({ ...request, collectionName: this.collectionName }, options);
  }

  count(
    request: Omit<Partial<CodeMashApi2.CountRequest>, 'collectionName'> = {},
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.CountResponse> {
    return this.database.count({ ...request, collectionName: this.collectionName }, options);
  }

  distinct(
    request: Omit<Partial<CodeMashApi2.DistinctRequest>, 'collectionName'>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.DistinctResponse> {
    return this.database.distinct({ ...request, collectionName: this.collectionName }, options);
  }

  insertOne(
    request: Omit<Partial<CodeMashApi2.InsertOneRequest>, 'collectionName'>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> {
    return this.database.insertOne({ ...request, collectionName: this.collectionName }, options);
  }

  insertMany(
    request: Omit<Partial<CodeMashApi2.InsertManyRequest>, 'collectionName'>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> {
    return this.database.insertMany({ ...request, collectionName: this.collectionName }, options);
  }

  updateOne(
    request: Omit<Partial<CodeMashApi2.UpdateOneRequest>, 'collectionName'>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> {
    return this.database.updateOne({ ...request, collectionName: this.collectionName }, options);
  }

  updateMany(
    request: Omit<Partial<CodeMashApi2.UpdateManyRequest>, 'collectionName'>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> {
    return this.database.updateMany({ ...request, collectionName: this.collectionName }, options);
  }

  replaceOne(
    request: Omit<Partial<CodeMashApi2.ReplaceOneRequest>, 'collectionName'>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> {
    return this.database.replaceOne({ ...request, collectionName: this.collectionName }, options);
  }

  deleteOne(
    request: Omit<Partial<CodeMashApi2.DeleteOneRequest>, 'collectionName'>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> {
    return this.database.deleteOne({ ...request, collectionName: this.collectionName }, options);
  }

  deleteMany(
    request: Omit<Partial<CodeMashApi2.DeleteManyRequest>, 'collectionName'>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> {
    return this.database.deleteMany({ ...request, collectionName: this.collectionName }, options);
  }

  aggregate(
    request: Omit<Partial<CodeMashApi2.AggregateRequest>, 'collectionName'>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.AggregateResponse> {
    return this.database.aggregate({ ...request, collectionName: this.collectionName }, options);
  }

  executeAggregate(
    request: Omit<Partial<CodeMashApi2.ExecuteAggregateRequest>, 'collectionName'>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.ExecuteAggregateResponse> {
    return this.database.executeAggregate(
      { ...request, collectionName: this.collectionName },
      options,
    );
  }
}
