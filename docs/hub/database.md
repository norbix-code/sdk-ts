# Hub · Database

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Database schemas, integrations, triggers, taxonomies, and module on/off switches. For data-level CRUD on collections see `api.database`.

Accessed as `norbix.hub.database` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                                    | Verb     | Path                                                                                | Scope     |
| ------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------- | --------- |
| [`disableDatabase`](#disabledatabase)                                     | `GET`    | `/{version}/database/disable`                                                       | `project` |
| [`enableDatabase`](#enabledatabase)                                       | `GET`    | `/{version}/database/enable`                                                        | `project` |
| [`deleteSchemaTrigger`](#deleteschematrigger)                             | `DELETE` | `/{version}/database/schemas/triggers/{triggerId}`                                  | `project` |
| [`disableSchemaTrigger`](#disableschematrigger)                           | `PATCH`  | `/{version}/database/schemas/triggers/{triggerId}/disable`                          | `project` |
| [`enableSchemaTrigger`](#enableschematrigger)                             | `PATCH`  | `/{version}/database/schemas/triggers/{triggerId}/enable`                           | `project` |
| [`getSchemaTrigger`](#getschematrigger)                                   | `GET`    | `/{version}/database/schemas/triggers/{id}`                                         | `project` |
| [`getSchemaTriggers`](#getschematriggers)                                 | `GET`    | `/{version}/database/schemas/triggers`                                              | `project` |
| [`saveSchemaTrigger`](#saveschematrigger)                                 | `POST`   | `/{version}/database/schemas/triggers`                                              | `project` |
| [`deleteDatabaseTaxonomy`](#deletedatabasetaxonomy)                       | `DELETE` | `/{version}/database/taxonomies/{Id}`                                               | `project` |
| [`getDatabaseTaxonomy`](#getdatabasetaxonomy)                             | `GET`    | `/{version}/database/taxonomies/{id}`                                               | `project` |
| [`getDatabaseTaxonomies`](#getdatabasetaxonomies)                         | `GET`    | `/{version}/database/taxonomies`                                                    | `project` |
| [`getDatabaseTaxonomyTree`](#getdatabasetaxonomytree)                     | `GET`    | `/{version}/database/taxonomies/tree`                                               | `project` |
| [`saveDatabaseTaxonomy`](#savedatabasetaxonomy)                           | `POST`   | `/{version}/database/taxonomies`                                                    | `project` |
| [`deleteDatabaseTaxonomyTerm`](#deletedatabasetaxonomyterm)               | `DELETE` | `/{version}/database/taxonomies/{TaxonomyId}/terms/{Id}`                            | `project` |
| [`deleteManyDatabaseTaxonomyTerms`](#deletemanydatabasetaxonomyterms)     | `DELETE` | `/{version}/database/taxonomies/{TaxonomyId}/terms/many`                            | `project` |
| [`getDatabaseTaxonomyTerm`](#getdatabasetaxonomyterm)                     | `GET`    | `/{version}/database/taxonomies/{TaxonomyId}/terms/{Id}`                            | `project` |
| [`getDatabaseMergedTermTree`](#getdatabasemergedtermtree)                 | `GET`    | `/{version}/database/taxonomies/{TaxonomyName}/merged-tree`                         | `project` |
| [`getDatabaseTaxonomyTermTree`](#getdatabasetaxonomytermtree)             | `GET`    | `/{version}/database/taxonomies/{TaxonomyName}/terms/tree`                          | `project` |
| [`saveDatabaseTaxonomyTerm`](#savedatabasetaxonomyterm)                   | `POST`   | `/{version}/database/taxonomies/{TaxonomyId}/terms`                                 | `project` |
| [`updateDatabaseTaxonomyTerm`](#updatedatabasetaxonomyterm)               | `PUT`    | `/{version}/database/taxonomies/{TaxonomyId}/terms/{Id}`                            | `project` |
| [`applyDatabaseSchemaBundle`](#applydatabaseschemabundle)                 | `POST`   | `/{version}/database/schemas/apply-bundle`                                          | `project` |
| [`deleteDatabaseSchema`](#deletedatabaseschema)                           | `DELETE` | `/{version}/database/schemas/{Id}`                                                  | `project` |
| [`discardDatabaseSchemaDraft`](#discarddatabaseschemadraft)               | `DELETE` | `/{version}/database/schemas/{Id}/draft`                                            | `project` |
| [`getDatabaseSchema`](#getdatabaseschema)                                 | `GET`    | `/{version}/database/schemas/{id}`                                                  | `project` |
| [`getDatabaseSchemas`](#getdatabaseschemas)                               | `GET`    | `/{version}/database/schemas`                                                       | `project` |
| [`getDatabaseSchemaDraft`](#getdatabaseschemadraft)                       | `GET`    | `/{version}/database/schemas/{Id}/draft`                                            | `project` |
| [`getDatabaseSchemaListSettings`](#getdatabaseschemalistsettings)         | `GET`    | `/{version}/database/schemas/{Id}/list-settings`                                    | `project` |
| [`getDatabaseSchemaVersionDiff`](#getdatabaseschemaversiondiff)           | `GET`    | `/{version}/database/schemas/{Id}/versions/diff`                                    | `project` |
| [`getDatabaseSchemaVersions`](#getdatabaseschemaversions)                 | `GET`    | `/{version}/database/schemas/{Id}/versions`                                         | `project` |
| [`publishDatabaseSchema`](#publishdatabaseschema)                         | `POST`   | `/{version}/database/schemas/{Id}/publish`                                          | `project` |
| [`renameDatabaseSchema`](#renamedatabaseschema)                           | `PUT`    | `/{version}/database/schemas/{Id}/rename`                                           | `project` |
| [`saveDatabaseSchema`](#savedatabaseschema)                               | `POST`   | `/{version}/database/schemas`                                                       | `project` |
| [`updateDatabaseSchemaDraft`](#updatedatabaseschemadraft)                 | `PUT`    | `/{version}/database/schemas/{Id}/draft`                                            | `project` |
| [`updateDatabaseSchemaListSettings`](#updatedatabaseschemalistsettings)   | `PUT`    | `/{version}/database/schemas/{Id}/list-settings`                                    | `project` |
| [`updateDatabaseSchemaSettings`](#updatedatabaseschemasettings)           | `PUT`    | `/{version}/database/schemas/{Id}/settings`                                         | `project` |
| [`aggregateRecords`](#aggregaterecords)                                   | `POST`   | `/{version}/database/collections/{collectionName}/aggregate`                        | `project` |
| [`changeRecordResponsibility`](#changerecordresponsibility)               | `PUT`    | `/{version}/database/collections/{collectionName}/{id}/responsibility`              | `project` |
| [`countRecords`](#countrecords)                                           | `GET`    | `/{version}/database/collections/{collectionName}/count`                            | `project` |
| [`deleteManyRecords`](#deletemanyrecords)                                 | `DELETE` | `/{version}/database/collections/{collectionName}/many`                             | `project` |
| [`deleteRecord`](#deleterecord)                                           | `DELETE` | `/{version}/database/collections/{collectionName}/{id}`                             | `project` |
| [`distinctRecordValues`](#distinctrecordvalues)                           | `GET`    | `/{version}/database/collections/{collectionName}/distinct`                         | `project` |
| [`executeRecordsAggregate`](#executerecordsaggregate)                     | `POST`   | `/{version}/database/collections/{collectionName}/aggregates/{aggregateId}/execute` | `project` |
| [`findRecords`](#findrecords)                                             | `GET`    | `/{version}/database/collections/{collectionName}`                                  | `project` |
| [`findOneRecord`](#findonerecord)                                         | `GET`    | `/{version}/database/collections/{collectionName}/{id}`                             | `project` |
| [`getCollectionIndexes`](#getcollectionindexes)                           | `GET`    | `/{version}/database/collections/{collectionName}/indexes`                          | `project` |
| [`insertManyRecords`](#insertmanyrecords)                                 | `POST`   | `/{version}/database/collections/{collectionName}/many`                             | `project` |
| [`insertRecord`](#insertrecord)                                           | `POST`   | `/{version}/database/collections/{collectionName}`                                  | `project` |
| [`replaceRecord`](#replacerecord)                                         | `PUT`    | `/{version}/database/collections/{collectionName}/{id}/replace`                     | `project` |
| [`seedCollectionRecords`](#seedcollectionrecords)                         | `POST`   | `/{version}/database/collections/seed`                                              | `project` |
| [`updateManyRecords`](#updatemanyrecords)                                 | `PUT`    | `/{version}/database/collections/{collectionName}/many`                             | `project` |
| [`updateOneRecord`](#updateonerecord)                                     | `PUT`    | `/{version}/database/collections/{collectionName}/{id}`                             | `project` |
| [`deleteDatabaseIntegration`](#deletedatabaseintegration)                 | `DELETE` | `/{version}/database/integrations/{Id}`                                             | `project` |
| [`disableDatabaseIntegration`](#disabledatabaseintegration)               | `PUT`    | `/{version}/database/integrations/{Id}/disable`                                     | `project` |
| [`enableDatabaseIntegration`](#enabledatabaseintegration)                 | `PUT`    | `/{version}/database/integrations/{Id}/enable`                                      | `project` |
| [`getDatabaseIntegration`](#getdatabaseintegration)                       | `GET`    | `/{version}/database/integrations/{id}`                                             | `project` |
| [`getDatabaseIntegrations`](#getdatabaseintegrations)                     | `GET`    | `/{version}/database/integrations`                                                  | `project` |
| [`getAllowedFlexTiers`](#getallowedflextiers)                             | `GET`    | `/{version}/database/integrations/flex-tiers`                                       | `project` |
| [`revealManagedFlexConnectionString`](#revealmanagedflexconnectionstring) | `GET`    | `/{version}/database/integrations/{Id}/connection-string`                           | `project` |
| [`saveDatabaseIntegration`](#savedatabaseintegration)                     | `POST`   | `/{version}/database/integrations`                                                  | `project` |
| [`setDatabaseIntegrationAsDefault`](#setdatabaseintegrationasdefault)     | `PUT`    | `/{version}/database/integrations/{Id}/default`                                     | `project` |
| [`testDatabaseIntegration`](#testdatabaseintegration)                     | `POST`   | `/{version}/database/integrations/test`                                             | `project` |
| [`createCollectionImport`](#createcollectionimport)                       | `POST`   | `/{version}/database/imports`                                                       | `project` |
| [`deleteCollectionImport`](#deletecollectionimport)                       | `DELETE` | `/{version}/database/imports/{Id}`                                                  | `project` |
| [`getCollectionImport`](#getcollectionimport)                             | `GET`    | `/{version}/database/imports/{Id}`                                                  | `project` |
| [`getCollectionImports`](#getcollectionimports)                           | `GET`    | `/{version}/database/imports`                                                       | `project` |
| [`requestImportUploadUrl`](#requestimportuploadurl)                       | `POST`   | `/{version}/database/imports/upload-url`                                            | `project` |
| [`analyzeImportFile`](#analyzeimportfile)                                 | `POST`   | `/{version}/database/imports/analyze`                                               | `project` |
| [`deleteDatabaseAggregate`](#deletedatabaseaggregate)                     | `DELETE` | `/{version}/database/aggregates/{Id}`                                               | `project` |
| [`getDatabaseAggregate`](#getdatabaseaggregate)                           | `GET`    | `/{version}/database/aggregates/{Id}`                                               | `project` |
| [`getDatabaseAggregates`](#getdatabaseaggregates)                         | `GET`    | `/{version}/database/aggregates`                                                    | `project` |
| [`saveDatabaseAggregate`](#savedatabaseaggregate)                         | `POST`   | `/{version}/database/aggregates`                                                    | `project` |
| [`testDatabaseAggregate`](#testdatabaseaggregate)                         | `POST`   | `/{version}/database/aggregates/test`                                               | `project` |

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

### getDatabaseTaxonomyTree

`GET` `/{version}/database/taxonomies/tree`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetDatabaseTaxonomyTreeRequest`
**Response**: `CodeMashHub2.GetDatabaseTaxonomyTreeResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getDatabaseTaxonomyTree({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetDatabaseTaxonomyTreeResponse
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

### getDatabaseMergedTermTree

`GET` `/{version}/database/taxonomies/{TaxonomyName}/merged-tree`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetDatabaseMergedTermTreeRequest`
**Response**: `CodeMashHub2.GetDatabaseMergedTermTreeResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getDatabaseMergedTermTree({
  TaxonomyName: 'TaxonomyName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetDatabaseMergedTermTreeResponse
```

[↑ Top](#endpoints)

### getDatabaseTaxonomyTermTree

`GET` `/{version}/database/taxonomies/{TaxonomyName}/terms/tree`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetDatabaseTaxonomyTermTreeRequest`
**Response**: `CodeMashHub2.GetDatabaseTaxonomyTermTreeResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getDatabaseTaxonomyTermTree({
  TaxonomyName: 'TaxonomyName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetDatabaseTaxonomyTermTreeResponse
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

### applyDatabaseSchemaBundle

`POST` `/{version}/database/schemas/apply-bundle`

**Request DTO**: `CodeMashHub2.ApplyDatabaseSchemaBundleRequest`
**Response**: `CodeMashHub2.ApplyDatabaseSchemaBundleResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.applyDatabaseSchemaBundle({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.ApplyDatabaseSchemaBundleResponse
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

### getDatabaseSchemaListSettings

`GET` `/{version}/database/schemas/{Id}/list-settings`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetDatabaseSchemaListSettings`
**Response**: `CodeMashHub2.GetDatabaseSchemaListSettingsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getDatabaseSchemaListSettings({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetDatabaseSchemaListSettingsResponse
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

### updateDatabaseSchemaListSettings

`PUT` `/{version}/database/schemas/{Id}/list-settings`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateDatabaseSchemaListSettingsRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.updateDatabaseSchemaListSettings({
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

### aggregateRecords

`POST` `/{version}/database/collections/{collectionName}/aggregate`

Run an aggregation pipeline.

**Request DTO**: `CodeMashHub2.AggregateRecords`
**Response**: `CodeMashHub2.AggregateRecordsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.aggregateRecords({
  collectionName: 'collectionName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AggregateRecordsResponse
```

[↑ Top](#endpoints)

### changeRecordResponsibility

`PUT` `/{version}/database/collections/{collectionName}/{id}/responsibility`

**Request DTO**: `CodeMashHub2.ChangeRecordResponsibility`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.changeRecordResponsibility({
  collectionName: 'collectionName-here',
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### countRecords

`GET` `/{version}/database/collections/{collectionName}/count`

Count items matching the filter.

**Request DTO**: `CodeMashHub2.CountRecords`
**Response**: `CodeMashHub2.CountRecordsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.countRecords({
  collectionName: 'collectionName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.CountRecordsResponse
```

[↑ Top](#endpoints)

### deleteManyRecords

`DELETE` `/{version}/database/collections/{collectionName}/many`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteManyRecords`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.deleteManyRecords({
  collectionName: 'collectionName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteRecord

`DELETE` `/{version}/database/collections/{collectionName}/{id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteRecord`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.deleteRecord({
  collectionName: 'collectionName-here',
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### distinctRecordValues

`GET` `/{version}/database/collections/{collectionName}/distinct`

Return distinct values for a field.

**Request DTO**: `CodeMashHub2.DistinctRecordValues`
**Response**: `CodeMashHub2.DistinctRecordValuesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.distinctRecordValues({
  collectionName: 'collectionName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.DistinctRecordValuesResponse
```

[↑ Top](#endpoints)

### executeRecordsAggregate

`POST` `/{version}/database/collections/{collectionName}/aggregates/{aggregateId}/execute`

**Request DTO**: `CodeMashHub2.ExecuteRecordsAggregate`
**Response**: `CodeMashHub2.ExecuteRecordsAggregateResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.executeRecordsAggregate({
  collectionName: 'collectionName-here',
  aggregateId: 'aggregateId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.ExecuteRecordsAggregateResponse
```

[↑ Top](#endpoints)

### findRecords

`GET` `/{version}/database/collections/{collectionName}`

Search / paginate items.

**Request DTO**: `CodeMashHub2.FindRecords`
**Response**: `CodeMashHub2.FindRecordsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.findRecords({
  collectionName: 'collectionName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.FindRecordsResponse
```

[↑ Top](#endpoints)

### findOneRecord

`GET` `/{version}/database/collections/{collectionName}/{id}`

Search / paginate items.

**Request DTO**: `CodeMashHub2.FindOneRecord`
**Response**: `CodeMashHub2.FindOneRecordResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.findOneRecord({
  collectionName: 'collectionName-here',
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.FindOneRecordResponse
```

[↑ Top](#endpoints)

### getCollectionIndexes

`GET` `/{version}/database/collections/{collectionName}/indexes`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetCollectionIndexes`
**Response**: `CodeMashHub2.GetCollectionIndexesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getCollectionIndexes({
  collectionName: 'collectionName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetCollectionIndexesResponse
```

[↑ Top](#endpoints)

### insertManyRecords

`POST` `/{version}/database/collections/{collectionName}/many`

Insert one or more items.

**Request DTO**: `CodeMashHub2.InsertManyRecords`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.insertManyRecords({
  collectionName: 'collectionName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### insertRecord

`POST` `/{version}/database/collections/{collectionName}`

Insert one or more items.

**Request DTO**: `CodeMashHub2.InsertRecord`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.insertRecord({
  collectionName: 'collectionName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### replaceRecord

`PUT` `/{version}/database/collections/{collectionName}/{id}/replace`

Replace an existing item wholesale.

**Request DTO**: `CodeMashHub2.ReplaceRecord`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.replaceRecord({
  collectionName: 'collectionName-here',
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### seedCollectionRecords

`POST` `/{version}/database/collections/seed`

**Request DTO**: `CodeMashHub2.SeedCollectionRecords`
**Response**: `CodeMashHub2.SeedCollectionRecordsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.seedCollectionRecords({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.SeedCollectionRecordsResponse
```

[↑ Top](#endpoints)

### updateManyRecords

`PUT` `/{version}/database/collections/{collectionName}/many`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateManyRecords`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.updateManyRecords({
  collectionName: 'collectionName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### updateOneRecord

`PUT` `/{version}/database/collections/{collectionName}/{id}`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateOneRecord`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.updateOneRecord({
  collectionName: 'collectionName-here',
  id: 'id-here',
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

### getAllowedFlexTiers

`GET` `/{version}/database/integrations/flex-tiers`

List all items.

**Request DTO**: `CodeMashHub2.GetAllowedFlexTiers`
**Response**: `CodeMashHub2.GetAllowedFlexTiersResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getAllowedFlexTiers({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetAllowedFlexTiersResponse
```

[↑ Top](#endpoints)

### revealManagedFlexConnectionString

`GET` `/{version}/database/integrations/{Id}/connection-string`

Reveal the masked value.

**Request DTO**: `CodeMashHub2.RevealManagedFlexConnectionString`
**Response**: `CodeMashHub2.RevealManagedFlexConnectionStringResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.revealManagedFlexConnectionString({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.RevealManagedFlexConnectionStringResponse
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

### testDatabaseIntegration

`POST` `/{version}/database/integrations/test`

Run a connection / delivery test against the integration.

**Request DTO**: `CodeMashHub2.TestDatabaseIntegration`
**Response**: `CodeMashHub2.TestDatabaseIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.testDatabaseIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.TestDatabaseIntegrationResponse
```

[↑ Top](#endpoints)

### createCollectionImport

`POST` `/{version}/database/imports`

Create a new item.

**Request DTO**: `CodeMashHub2.CreateCollectionImport`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.createCollectionImport({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### deleteCollectionImport

`DELETE` `/{version}/database/imports/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteCollectionImportRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.deleteCollectionImport({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getCollectionImport

`GET` `/{version}/database/imports/{Id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetCollectionImport`
**Response**: `CodeMashHub2.GetCollectionImportResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getCollectionImport({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetCollectionImportResponse
```

[↑ Top](#endpoints)

### getCollectionImports

`GET` `/{version}/database/imports`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetCollectionImports`
**Response**: `CodeMashHub2.GetCollectionImportsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.getCollectionImports({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetCollectionImportsResponse
```

[↑ Top](#endpoints)

### requestImportUploadUrl

`POST` `/{version}/database/imports/upload-url`

**Request DTO**: `CodeMashHub2.RequestImportUploadUrlRequest`
**Response**: `CodeMashHub2.RequestImportUploadUrlResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.requestImportUploadUrl({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.RequestImportUploadUrlResponse
```

[↑ Top](#endpoints)

### analyzeImportFile

`POST` `/{version}/database/imports/analyze`

**Request DTO**: `CodeMashHub2.AnalyzeImportFileRequest`
**Response**: `CodeMashHub2.AnalyzeImportFileResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.database.analyzeImportFile({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AnalyzeImportFileResponse
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
