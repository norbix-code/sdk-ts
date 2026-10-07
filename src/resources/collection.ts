import type { DatabaseModule } from '../api/database.js';
import type { RequestOverrideOptions } from '../client/transport.js';
import type { CodeMashApi2 } from '../types/api2.dtos.js';

/**
 * A reference value read with `expandReferences: true`: the stored id plus the
 * target's display value (the field the schema names as `displayField`; a
 * role shows its name, a file its name). `display` is `null` when the target
 * no longer exists.
 */
export interface ReferenceDisplay {
  id: string;
  display: string | null;
}

/**
 * The record shape a read with `expandReferences: true` returns: every key in
 * `K` (the reference fields — user, role, taxonomy term, collection record,
 * file) reads as `{ id, display }`, or as an array of them when the field
 * holds several ids. Nested objects and arrays of objects are expanded in
 * place, so spell them out in `TItem` and map the nested keys yourself.
 *
 * ```ts
 * interface Article { title: string; author: string; tags: string[] }
 * type ArticleView = WithExpandedReferences<Article, 'author' | 'tags'>;
 * const articles = norbix.collection<Article, ArticleView>('articles');
 * const [first] = await articles.findItems({ expandReferences: true });
 * first.author.display; // "Jane Doe"
 * ```
 */
export type WithExpandedReferences<T, K extends keyof T> = Omit<T, K> & {
  [P in K]: NonNullable<T[P]> extends readonly unknown[]
    ? ReferenceDisplay[]
    : ReferenceDisplay | null;
};

/** A request for this collection: the generated DTO without `collectionName`. */
type CollectionRequest<R> = Omit<Partial<R>, 'collectionName'>;

/** The same request asking for `{ id, display }` references. */
type ExpandingRequest<R> = CollectionRequest<R> & { expandReferences: true };

function itemsOf<T>(res: CodeMashApi2.FindResponse): T[] {
  const items = res.list?.items as unknown;
  return (Array.isArray(items) ? items : []) as T[];
}

/**
 * Resource-first access to one collection over `norbix.api.database.*`.
 *
 * - `TItem` is the stored record shape (nested objects and arrays included —
 *   a record is stored as the JSON you send, not flattened).
 * - `TExpanded` is the shape a read with `expandReferences: true` returns
 *   (see `WithExpandedReferences`). It defaults to `TItem`.
 *
 * Record bodies (`document`, `update`, `filter`, `arrayFilters`) are MongoDB
 * extended-JSON strings, as the gateway types say.
 */
export class CollectionResource<TItem = unknown, TExpanded = TItem> {
  constructor(
    private readonly database: DatabaseModule,
    private readonly collectionName: string,
  ) {}

  /**
   * Page through the collection. With `expandReferences: true` every
   * reference field reads as `{ id, display }`; the caller then needs read
   * permission on every source the schema links to (users, roles, taxonomy,
   * collection, files) — a missing one is refused with
   * `CM-ERRORS-DATABASE-056` naming the source.
   */
  find(
    request: CollectionRequest<CodeMashApi2.FindRequest> = {},
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.FindResponse> {
    return this.database.find({ ...request, collectionName: this.collectionName }, options);
  }

  /** The items of one page, typed. See `find` for `expandReferences`. */
  findItems(
    request: ExpandingRequest<CodeMashApi2.FindRequest>,
    options?: RequestOverrideOptions,
  ): Promise<TExpanded[]>;
  findItems(
    request?: CollectionRequest<CodeMashApi2.FindRequest>,
    options?: RequestOverrideOptions,
  ): Promise<TItem[]>;
  async findItems(
    request: CollectionRequest<CodeMashApi2.FindRequest> = {},
    options: RequestOverrideOptions = {},
  ): Promise<unknown[]> {
    return itemsOf(await this.find(request, options));
  }

  /** One record by id. See `find` for `expandReferences`. */
  findOne(
    request: CollectionRequest<CodeMashApi2.FindOneRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.FindOneResponse> {
    return this.database.findOne({ ...request, collectionName: this.collectionName }, options);
  }

  /** One record by id, typed; `undefined` when the answer carries no record. */
  findOneItem(
    request: ExpandingRequest<CodeMashApi2.FindOneRequest>,
    options?: RequestOverrideOptions,
  ): Promise<TExpanded | undefined>;
  findOneItem(
    request: CollectionRequest<CodeMashApi2.FindOneRequest>,
    options?: RequestOverrideOptions,
  ): Promise<TItem | undefined>;
  async findOneItem(
    request: CollectionRequest<CodeMashApi2.FindOneRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<unknown> {
    const res = await this.findOne(request, options);
    return res.result ?? undefined;
  }

  /**
   * Page through the records the caller owns (`/own`). Same options as
   * `find`, including `expandReferences`.
   */
  findOwn(
    request: CollectionRequest<CodeMashApi2.FindOwnRequest> = {},
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.FindResponse> {
    return this.database.findOwn({ ...request, collectionName: this.collectionName }, options);
  }

  /** The caller's own records of one page, typed. */
  findOwnItems(
    request: ExpandingRequest<CodeMashApi2.FindOwnRequest>,
    options?: RequestOverrideOptions,
  ): Promise<TExpanded[]>;
  findOwnItems(
    request?: CollectionRequest<CodeMashApi2.FindOwnRequest>,
    options?: RequestOverrideOptions,
  ): Promise<TItem[]>;
  async findOwnItems(
    request: CollectionRequest<CodeMashApi2.FindOwnRequest> = {},
    options: RequestOverrideOptions = {},
  ): Promise<unknown[]> {
    return itemsOf(await this.findOwn(request, options));
  }

  count(
    request: CollectionRequest<CodeMashApi2.CountRequest> = {},
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.CountResponse> {
    return this.database.count({ ...request, collectionName: this.collectionName }, options);
  }

  distinct(
    request: CollectionRequest<CodeMashApi2.DistinctRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.DistinctResponse> {
    return this.database.distinct({ ...request, collectionName: this.collectionName }, options);
  }

  /**
   * Insert one record. `document` is the record as extended-JSON; nested
   * objects (`"address": {"city": "Vilnius"}`) and arrays of objects
   * (`"lines": [{"sku": "A-1", "qty": 2}]`) are stored as sent and checked
   * against the schema at every depth — a broken value names the full path
   * (`lines[1].qty`).
   */
  insertOne(
    request: CollectionRequest<CodeMashApi2.InsertOneRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.IdResponse> {
    return this.database.insertOne({ ...request, collectionName: this.collectionName }, options);
  }

  insertMany(
    request: CollectionRequest<CodeMashApi2.InsertManyRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> {
    return this.database.insertMany({ ...request, collectionName: this.collectionName }, options);
  }

  /**
   * Update one record by id. `update` holds the fields to set (applied with
   * `$set`; a body with `$` operators is refused, CM-ERRORS-DATABASE-035).
   * A key may be a nested path: `"address.city"`, `"lines.0.qty"` (by
   * index), `"lines.$[].qty"` (every element) or `"lines.$[line].qty"` (the
   * elements `arrayFilters` picks — a JSON array with one filter per
   * `$[name]`, e.g. `[{"line.sku":"A-1"}]`). A `$[name]` without its filter,
   * or a filter without its `$[name]`, is refused.
   */
  updateOne(
    request: CollectionRequest<CodeMashApi2.UpdateOneRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> {
    return this.database.updateOne({ ...request, collectionName: this.collectionName }, options);
  }

  /**
   * Update every record that matches `filter`. An update body with `$`
   * operators (`$inc`, `$set`, …) is refused (CM-ERRORS-DATABASE-035): send
   * the plain fields to set. An empty filter (`{}`, or no filter) matches the
   * whole collection and is refused (CM-ERRORS-DATABASE-037) unless
   * `allRecords: true` is set. A caller with only own-record rights changes
   * only the records it owns. Soft-deleted records are skipped. Nested paths
   * and `arrayFilters` work as on `updateOne`.
   */
  updateMany(
    request: CollectionRequest<CodeMashApi2.UpdateManyRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> {
    return this.database.updateMany({ ...request, collectionName: this.collectionName }, options);
  }

  replaceOne(
    request: CollectionRequest<CodeMashApi2.ReplaceOneRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> {
    return this.database.replaceOne({ ...request, collectionName: this.collectionName }, options);
  }

  deleteOne(
    request: CollectionRequest<CodeMashApi2.DeleteOneRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> {
    return this.database.deleteOne({ ...request, collectionName: this.collectionName }, options);
  }

  /**
   * Delete every record that matches `filter`. An empty filter (`{}`)
   * matches the whole collection and is refused (CM-ERRORS-DATABASE-037)
   * unless `allRecords: true` is set. A caller with only own-record rights
   * deletes only the records it owns.
   */
  deleteMany(
    request: CollectionRequest<CodeMashApi2.DeleteManyRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.EmptyResponse> {
    return this.database.deleteMany({ ...request, collectionName: this.collectionName }, options);
  }

  aggregate(
    request: CollectionRequest<CodeMashApi2.AggregateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.AggregateResponse> {
    return this.database.aggregate({ ...request, collectionName: this.collectionName }, options);
  }

  executeAggregate(
    request: CollectionRequest<CodeMashApi2.ExecuteAggregateRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.ExecuteAggregateResponse> {
    return this.database.executeAggregate(
      { ...request, collectionName: this.collectionName },
      options,
    );
  }
}
