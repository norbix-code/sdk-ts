# Hub · Database

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Database schemas, integrations, triggers, taxonomies, and module on/off switches. For data-level CRUD on collections see `api.database`.

Accessed as `norbix.hub.database` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method | Verb | Path | Scope |
| --- | --- | --- | --- |
| [`disableDatabase`](#disabledatabase) | `GET` | `/{version}/database/disable` | `project` |
| [`enableDatabase`](#enabledatabase) | `GET` | `/{version}/database/enable` | `project` |
| [`deleteSchemaTrigger`](#deleteschematrigger) | `DELETE` | `/{version}/database/schemas/triggers/{triggerId}` | `project` |
| [`disableSchemaTrigger`](#disableschematrigger) | `PATCH` | `/{version}/database/schemas/triggers/{triggerId}/disable` | `project` |
| [`enableSchemaTrigger`](#enableschematrigger) | `PATCH` | `/{version}/database/schemas/triggers/{triggerId}/enable` | `project` |
| [`getSchemaTrigger`](#getschematrigger) | `GET` | `/{version}/database/schemas/triggers/{id}` | `project` |
| [`getSchemaTriggers`](#getschematriggers) | `GET` | `/{version}/database/schemas/triggers` | `project` |
| [`saveSchemaTrigger`](#saveschematrigger) | `POST` | `/{version}/database/schemas/triggers` | `project` |
| [`deleteDatabaseTaxonomy`](#deletedatabasetaxonomy) | `DELETE` | `/{version}/database/taxonomies/{Id}` | `project` |
| [`getDatabaseTaxonomy`](#getdatabasetaxonomy) | `GET` | `/{version}/database/taxonomies/{id}` | `project` |
| [`getDatabaseTaxonomies`](#getdatabasetaxonomies) | `GET` | `/{version}/database/taxonomies` | `project` |
| [`saveDatabaseTaxonomy`](#savedatabasetaxonomy) | `POST` | `/{version}/database/taxonomies` | `project` |
| [`deleteDatabaseTaxonomyTerm`](#deletedatabasetaxonomyterm) | `DELETE` | `/{version}/database/taxonomies/{TaxonomyId}/terms/{Id}` | `project` |
| [`deleteManyDatabaseTaxonomyTerms`](#deletemanydatabasetaxonomyterms) | `DELETE` | `/{version}/database/taxonomies/{TaxonomyId}/terms/many` | `project` |
| [`getDatabaseTaxonomyTerm`](#getdatabasetaxonomyterm) | `GET` | `/{version}/database/taxonomies/{TaxonomyId}/terms/{Id}` | `project` |
| [`saveDatabaseTaxonomyTerm`](#savedatabasetaxonomyterm) | `POST` | `/{version}/database/taxonomies/{TaxonomyId}/terms` | `project` |
| [`updateDatabaseTaxonomyTerm`](#updatedatabasetaxonomyterm) | `PUT` | `/{version}/database/taxonomies/{TaxonomyId}/terms/{Id}` | `project` |
| [`deleteDatabaseSchema`](#deletedatabaseschema) | `DELETE` | `/{version}/database/schemas/{Id}` | `project` |
| [`discardDatabaseSchemaDraft`](#discarddatabaseschemadraft) | `DELETE` | `/{version}/database/schemas/{Id}/draft` | `project` |
| [`getDatabaseSchema`](#getdatabaseschema) | `GET` | `/{version}/database/schemas/{id}` | `project` |
| [`getDatabaseSchemas`](#getdatabaseschemas) | `GET` | `/{version}/database/schemas` | `project` |
| [`getDatabaseSchemaDraft`](#getdatabaseschemadraft) | `GET` | `/{version}/database/schemas/{Id}/draft` | `project` |
| [`getDatabaseSchemaVersionDiff`](#getdatabaseschemaversiondiff) | `GET` | `/{version}/database/schemas/{Id}/versions/diff` | `project` |
| [`getDatabaseSchemaVersions`](#getdatabaseschemaversions) | `GET` | `/{version}/database/schemas/{Id}/versions` | `project` |
| [`publishDatabaseSchema`](#publishdatabaseschema) | `POST` | `/{version}/database/schemas/{Id}/publish` | `project` |
| [`renameDatabaseSchema`](#renamedatabaseschema) | `PUT` | `/{version}/database/schemas/{Id}/rename` | `project` |
| [`saveDatabaseSchema`](#savedatabaseschema) | `POST` | `/{version}/database/schemas` | `project` |
| [`updateDatabaseSchemaDraft`](#updatedatabaseschemadraft) | `PUT` | `/{version}/database/schemas/{Id}/draft` | `project` |
| [`updateDatabaseSchemaSettings`](#updatedatabaseschemasettings) | `PUT` | `/{version}/database/schemas/{Id}/settings` | `project` |
| [`deleteDatabaseIntegration`](#deletedatabaseintegration) | `DELETE` | `/{version}/database/integrations/{Id}` | `project` |
| [`disableDatabaseIntegration`](#disabledatabaseintegration) | `PUT` | `/{version}/database/integrations/{Id}/disable` | `project` |
| [`enableDatabaseIntegration`](#enabledatabaseintegration) | `PUT` | `/{version}/database/integrations/{Id}/enable` | `project` |
| [`getDatabaseIntegration`](#getdatabaseintegration) | `GET` | `/{version}/database/integrations/{id}` | `project` |
| [`getDatabaseIntegrations`](#getdatabaseintegrations) | `GET` | `/{version}/database/integrations` | `project` |
| [`saveDatabaseIntegration`](#savedatabaseintegration) | `POST` | `/{version}/database/integrations` | `project` |
| [`setDatabaseIntegrationAsDefault`](#setdatabaseintegrationasdefault) | `PUT` | `/{version}/database/integrations/{Id}/default` | `project` |
| [`deleteDatabaseAggregate`](#deletedatabaseaggregate) | `DELETE` | `/{version}/database/aggregates/{Id}` | `project` |
| [`getDatabaseAggregate`](#getdatabaseaggregate) | `GET` | `/{version}/database/aggregates/{Id}` | `project` |
| [`getDatabaseAggregates`](#getdatabaseaggregates) | `GET` | `/{version}/database/aggregates` | `project` |
| [`saveDatabaseAggregate`](#savedatabaseaggregate) | `POST` | `/{version}/database/aggregates` | `project` |
| [`testDatabaseAggregate`](#testdatabaseaggregate) | `POST` | `/{version}/database/aggregates/test` | `project` |

## Reference

### disableDatabase

`GET` `/{version}/database/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableDatabase`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.disableDatabase({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableDatabase

`GET` `/{version}/database/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableDatabase`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.enableDatabase({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteSchemaTrigger

`DELETE` `/{version}/database/schemas/triggers/{triggerId}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteSchemaTrigger`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.deleteSchemaTrigger({
  triggerId: 'triggerId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### disableSchemaTrigger

`PATCH` `/{version}/database/schemas/triggers/{triggerId}/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableSchemaTrigger`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.disableSchemaTrigger({
  triggerId: 'triggerId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableSchemaTrigger

`PATCH` `/{version}/database/schemas/triggers/{triggerId}/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableSchemaTrigger`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.enableSchemaTrigger({
  triggerId: 'triggerId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getSchemaTrigger

`GET` `/{version}/database/schemas/triggers/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetSchemaTrigger`
**Response**: `CodeMashHub2.GetSchemaTriggerResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getSchemaTrigger({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetSchemaTriggerResponse
```

[↑ Top](#endpoints)

### getSchemaTriggers

`GET` `/{version}/database/schemas/triggers`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetSchemaTriggers`
**Response**: `CodeMashHub2.GetSchemaTriggersResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getSchemaTriggers({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetSchemaTriggersResponse
```

[↑ Top](#endpoints)

### saveSchemaTrigger

`POST` `/{version}/database/schemas/triggers`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveSchemaTrigger`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.saveSchemaTrigger({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### deleteDatabaseTaxonomy

`DELETE` `/{version}/database/taxonomies/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteDatabaseTaxonomyRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.deleteDatabaseTaxonomy({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getDatabaseTaxonomy

`GET` `/{version}/database/taxonomies/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetDatabaseTaxonomy`
**Response**: `CodeMashHub2.GetDatabaseTaxonomyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getDatabaseTaxonomy({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetDatabaseTaxonomyResponse
```

[↑ Top](#endpoints)

### getDatabaseTaxonomies

`GET` `/{version}/database/taxonomies`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetDatabaseTaxonomies`
**Response**: `CodeMashHub2.GetDatabaseTaxonomiesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getDatabaseTaxonomies({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetDatabaseTaxonomiesResponse
```

[↑ Top](#endpoints)

### saveDatabaseTaxonomy

`POST` `/{version}/database/taxonomies`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveDatabaseTaxonomyRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.saveDatabaseTaxonomy({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### deleteDatabaseTaxonomyTerm

`DELETE` `/{version}/database/taxonomies/{TaxonomyId}/terms/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteDatabaseTaxonomyTermRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.deleteDatabaseTaxonomyTerm({
  TaxonomyId: 'TaxonomyId-here',
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteManyDatabaseTaxonomyTerms

`DELETE` `/{version}/database/taxonomies/{TaxonomyId}/terms/many`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteManyDatabaseTaxonomyTermsRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.deleteManyDatabaseTaxonomyTerms({
  TaxonomyId: 'TaxonomyId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getDatabaseTaxonomyTerm

`GET` `/{version}/database/taxonomies/{TaxonomyId}/terms/{Id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetDatabaseTaxonomyTermRequest`
**Response**: `CodeMashHub2.GetDatabaseTaxonomyTermResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getDatabaseTaxonomyTerm({
  TaxonomyId: 'TaxonomyId-here',
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetDatabaseTaxonomyTermResponse
```

[↑ Top](#endpoints)

### saveDatabaseTaxonomyTerm

`POST` `/{version}/database/taxonomies/{TaxonomyId}/terms`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveDatabaseTaxonomyTermRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.saveDatabaseTaxonomyTerm({
  TaxonomyId: 'TaxonomyId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### updateDatabaseTaxonomyTerm

`PUT` `/{version}/database/taxonomies/{TaxonomyId}/terms/{Id}`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateDatabaseTaxonomyTermRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.updateDatabaseTaxonomyTerm({
  TaxonomyId: 'TaxonomyId-here',
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteDatabaseSchema

`DELETE` `/{version}/database/schemas/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteDatabaseSchemaRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.deleteDatabaseSchema({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### discardDatabaseSchemaDraft

`DELETE` `/{version}/database/schemas/{Id}/draft`



**Request DTO**: `CodeMashHub2.DiscardDatabaseSchemaDraftRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.discardDatabaseSchemaDraft({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getDatabaseSchema

`GET` `/{version}/database/schemas/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetDatabaseSchema`
**Response**: `CodeMashHub2.GetDatabaseSchemaResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getDatabaseSchema({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetDatabaseSchemaResponse
```

[↑ Top](#endpoints)

### getDatabaseSchemas

`GET` `/{version}/database/schemas`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetDatabaseSchemas`
**Response**: `CodeMashHub2.GetDatabaseSchemasResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getDatabaseSchemas({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetDatabaseSchemasResponse
```

[↑ Top](#endpoints)

### getDatabaseSchemaDraft

`GET` `/{version}/database/schemas/{Id}/draft`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetDatabaseSchemaDraft`
**Response**: `CodeMashHub2.GetDatabaseSchemaDraftResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getDatabaseSchemaDraft({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetDatabaseSchemaDraftResponse
```

[↑ Top](#endpoints)

### getDatabaseSchemaVersionDiff

`GET` `/{version}/database/schemas/{Id}/versions/diff`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetDatabaseSchemaVersionDiff`
**Response**: `CodeMashHub2.GetDatabaseSchemaVersionDiffResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getDatabaseSchemaVersionDiff({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetDatabaseSchemaVersionDiffResponse
```

[↑ Top](#endpoints)

### getDatabaseSchemaVersions

`GET` `/{version}/database/schemas/{Id}/versions`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetDatabaseSchemaVersions`
**Response**: `CodeMashHub2.GetDatabaseSchemaVersionsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getDatabaseSchemaVersions({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetDatabaseSchemaVersionsResponse
```

[↑ Top](#endpoints)

### publishDatabaseSchema

`POST` `/{version}/database/schemas/{Id}/publish`



**Request DTO**: `CodeMashHub2.PublishDatabaseSchemaRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.publishDatabaseSchema({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### renameDatabaseSchema

`PUT` `/{version}/database/schemas/{Id}/rename`



**Request DTO**: `CodeMashHub2.RenameDatabaseSchemaRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.renameDatabaseSchema({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### saveDatabaseSchema

`POST` `/{version}/database/schemas`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveDatabaseSchemaRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.saveDatabaseSchema({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### updateDatabaseSchemaDraft

`PUT` `/{version}/database/schemas/{Id}/draft`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateDatabaseSchemaDraftRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.updateDatabaseSchemaDraft({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### updateDatabaseSchemaSettings

`PUT` `/{version}/database/schemas/{Id}/settings`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateDatabaseSchemaSettingsRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.updateDatabaseSchemaSettings({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteDatabaseIntegration

`DELETE` `/{version}/database/integrations/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteDatabaseIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.deleteDatabaseIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### disableDatabaseIntegration

`PUT` `/{version}/database/integrations/{Id}/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableDatabaseIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.disableDatabaseIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableDatabaseIntegration

`PUT` `/{version}/database/integrations/{Id}/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableDatabaseIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.enableDatabaseIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getDatabaseIntegration

`GET` `/{version}/database/integrations/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetDatabaseIntegration`
**Response**: `CodeMashHub2.GetDatabaseIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getDatabaseIntegration({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetDatabaseIntegrationResponse
```

[↑ Top](#endpoints)

### getDatabaseIntegrations

`GET` `/{version}/database/integrations`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetDatabaseIntegrations`
**Response**: `CodeMashHub2.GetDatabaseIntegrationsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getDatabaseIntegrations({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetDatabaseIntegrationsResponse
```

[↑ Top](#endpoints)

### saveDatabaseIntegration

`POST` `/{version}/database/integrations`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveDatabaseIntegration`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.saveDatabaseIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### setDatabaseIntegrationAsDefault

`PUT` `/{version}/database/integrations/{Id}/default`



**Request DTO**: `CodeMashHub2.SetDatabaseIntegrationAsDefaultRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.setDatabaseIntegrationAsDefault({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteDatabaseAggregate

`DELETE` `/{version}/database/aggregates/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteDatabaseAggregateRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.deleteDatabaseAggregate({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getDatabaseAggregate

`GET` `/{version}/database/aggregates/{Id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetDatabaseAggregate`
**Response**: `CodeMashHub2.GetDatabaseAggregateResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getDatabaseAggregate({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetDatabaseAggregateResponse
```

[↑ Top](#endpoints)

### getDatabaseAggregates

`GET` `/{version}/database/aggregates`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetDatabaseAggregates`
**Response**: `CodeMashHub2.GetDatabaseAggregatesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getDatabaseAggregates({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetDatabaseAggregatesResponse
```

[↑ Top](#endpoints)

### saveDatabaseAggregate

`POST` `/{version}/database/aggregates`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveDatabaseAggregateRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.saveDatabaseAggregate({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### testDatabaseAggregate

`POST` `/{version}/database/aggregates/test`

Run a connection / delivery test against the integration.

**Request DTO**: `CodeMashHub2.TestDatabaseAggregateRequest`
**Response**: `CodeMashHub2.TestDatabaseAggregateResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.testDatabaseAggregate({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.TestDatabaseAggregateResponse
```

[↑ Top](#endpoints)
