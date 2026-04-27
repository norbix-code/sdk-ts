# API · Database

[← Back to API index](./_index.md) · [↑ Back to project README](../../README.md)

Database schemas, integrations, triggers, taxonomies, and module on/off switches. For data-level CRUD on collections see `api.database`.

Accessed as `norbix.api.database` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method | Verb | Path | Scope |
| --- | --- | --- | --- |
| [`findTerms`](#findterms) | `GET` | `/{version}/database/taxonomies/{taxonomyName}/terms` | `project` |
| [`findTermsChildren`](#findtermschildren) | `GET` | `/{version}/database/taxonomies/{taxonomyName}/terms/{parentId}/children` | `project` |
| [`getDatabaseSchema`](#getdatabaseschema) | `GET` | `/{version}/database/schemas/{id}` | `project` |
| [`getDatabaseSchemas`](#getdatabaseschemas) | `GET` | `/{version}/database/schemas` | `project` |
| [`aggregate`](#aggregate) | `POST` | `/{version}/database/collections/{collectionName}/aggregate` | `project` |
| [`changeResponsibility`](#changeresponsibility) | `PUT` | `/{version}/database/collections/{collectionName}/{id}/responsibility` | `project` |
| [`count`](#count) | `GET` | `/{version}/database/collections/{collectionName}/count` | `project` |
| [`deleteMany`](#deletemany) | `DELETE` | `/{version}/database/collections/{collectionName}/many` | `project` |
| [`deleteOne`](#deleteone) | `DELETE` | `/{version}/database/collections/{collectionName}/{id}` | `project` |
| [`distinct`](#distinct) | `GET` | `/{version}/database/collections/{collectionName}/distinct` | `project` |
| [`executeAggregate`](#executeaggregate) | `POST` | `/{version}/database/collections/{collectionName}/aggregates/{aggregateId}/execute` | `project` |
| [`find`](#find) | `GET` | `/{version}/database/collections/{collectionName}` | `project` |
| [`findOne`](#findone) | `GET` | `/{version}/database/collections/{collectionName}/{id}` | `project` |
| [`insertMany`](#insertmany) | `POST` | `/{version}/database/collections/{collectionName}/many` | `project` |
| [`insertOne`](#insertone) | `POST` | `/{version}/database/collections/{collectionName}` | `project` |
| [`replaceOne`](#replaceone) | `PUT` | `/{version}/database/collections/{collectionName}/{id}/replace` | `project` |
| [`updateMany`](#updatemany) | `PUT` | `/{version}/database/collections/{collectionName}/many` | `project` |
| [`updateOne`](#updateone) | `PUT` | `/{version}/database/collections/{collectionName}/{id}` | `project` |

## Reference

### findTerms

`GET` `/{version}/database/taxonomies/{taxonomyName}/terms`

Search / paginate items.

**Request DTO**: `CodeMashApi2.FindTermsRequest`
**Response**: `CodeMashApi2.FindTermsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.database.findTerms({
  taxonomyName: 'taxonomyName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.FindTermsResponse
```

[↑ Top](#endpoints)

### findTermsChildren

`GET` `/{version}/database/taxonomies/{taxonomyName}/terms/{parentId}/children`

Search / paginate items.

**Request DTO**: `CodeMashApi2.FindTermsChildrenRequest`
**Response**: `CodeMashApi2.FindTermsChildrenResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.database.findTermsChildren({
  taxonomyName: 'taxonomyName-here',
  parentId: 'parentId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.FindTermsChildrenResponse
```

[↑ Top](#endpoints)

### getDatabaseSchema

`GET` `/{version}/database/schemas/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetDatabaseSchemaRequest`
**Response**: `CodeMashApi2.GetDatabaseSchemaResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.database.getDatabaseSchema({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetDatabaseSchemaResponse
```

[↑ Top](#endpoints)

### getDatabaseSchemas

`GET` `/{version}/database/schemas`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetDatabaseSchemasRequest`
**Response**: `CodeMashApi2.GetDatabaseSchemasResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.database.getDatabaseSchemas({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetDatabaseSchemasResponse
```

[↑ Top](#endpoints)

### aggregate

`POST` `/{version}/database/collections/{collectionName}/aggregate`

Run an aggregation pipeline.

**Request DTO**: `CodeMashApi2.AggregateRequest`
**Response**: `CodeMashApi2.AggregateResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.database.aggregate({
  collectionName: 'collectionName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.AggregateResponse
```

[↑ Top](#endpoints)

### changeResponsibility

`PUT` `/{version}/database/collections/{collectionName}/{id}/responsibility`



**Request DTO**: `CodeMashApi2.ChangeResponsibilityRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.database.changeResponsibility({
  collectionName: 'collectionName-here',
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### count

`GET` `/{version}/database/collections/{collectionName}/count`

Count items matching the filter.

**Request DTO**: `CodeMashApi2.CountRequest`
**Response**: `CodeMashApi2.CountResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.database.count({
  collectionName: 'collectionName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.CountResponse
```

[↑ Top](#endpoints)

### deleteMany

`DELETE` `/{version}/database/collections/{collectionName}/many`

Delete an item.

**Request DTO**: `CodeMashApi2.DeleteManyRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.database.deleteMany({
  collectionName: 'collectionName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteOne

`DELETE` `/{version}/database/collections/{collectionName}/{id}`

Delete an item.

**Request DTO**: `CodeMashApi2.DeleteOneRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.database.deleteOne({
  collectionName: 'collectionName-here',
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### distinct

`GET` `/{version}/database/collections/{collectionName}/distinct`

Return distinct values for a field.

**Request DTO**: `CodeMashApi2.DistinctRequest`
**Response**: `CodeMashApi2.DistinctResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.database.distinct({
  collectionName: 'collectionName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.DistinctResponse
```

[↑ Top](#endpoints)

### executeAggregate

`POST` `/{version}/database/collections/{collectionName}/aggregates/{aggregateId}/execute`



**Request DTO**: `CodeMashApi2.ExecuteAggregateRequest`
**Response**: `CodeMashApi2.ExecuteAggregateResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.database.executeAggregate({
  collectionName: 'collectionName-here',
  aggregateId: 'aggregateId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.ExecuteAggregateResponse
```

[↑ Top](#endpoints)

### find

`GET` `/{version}/database/collections/{collectionName}`

Search / paginate items.

**Request DTO**: `CodeMashApi2.FindRequest`
**Response**: `CodeMashApi2.FindResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.database.find({
  collectionName: 'collectionName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.FindResponse
```

[↑ Top](#endpoints)

### findOne

`GET` `/{version}/database/collections/{collectionName}/{id}`

Search / paginate items.

**Request DTO**: `CodeMashApi2.FindOneRequest`
**Response**: `CodeMashApi2.FindOneResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.database.findOne({
  collectionName: 'collectionName-here',
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.FindOneResponse
```

[↑ Top](#endpoints)

### insertMany

`POST` `/{version}/database/collections/{collectionName}/many`

Insert one or more items.

**Request DTO**: `CodeMashApi2.InsertManyRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.database.insertMany({
  collectionName: 'collectionName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### insertOne

`POST` `/{version}/database/collections/{collectionName}`

Insert one or more items.

**Request DTO**: `CodeMashApi2.InsertOneRequest`
**Response**: `CodeMashApi2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.database.insertOne({
  collectionName: 'collectionName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.IdResponse
```

[↑ Top](#endpoints)

### replaceOne

`PUT` `/{version}/database/collections/{collectionName}/{id}/replace`

Replace an existing item wholesale.

**Request DTO**: `CodeMashApi2.ReplaceOneRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.database.replaceOne({
  collectionName: 'collectionName-here',
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### updateMany

`PUT` `/{version}/database/collections/{collectionName}/many`

Update an existing item.

**Request DTO**: `CodeMashApi2.UpdateManyRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.database.updateMany({
  collectionName: 'collectionName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### updateOne

`PUT` `/{version}/database/collections/{collectionName}/{id}`

Update an existing item.

**Request DTO**: `CodeMashApi2.UpdateOneRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.database.updateOne({
  collectionName: 'collectionName-here',
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)
