# API · Database

[← Back to API index](./_index.md) · [↑ Back to project README](../../README.md)

Database schemas, integrations, triggers, taxonomies, and module on/off switches. For data-level CRUD on collections see `api.database`.

Accessed as `norbix.api.database` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method | Verb | Path | Scope |
| --- | --- | --- | --- |
| [`findTerms`](#findterms) | `GET` | `/{version}/database/taxonomies/{taxonomyName}/terms` | `project` |
| [`findTermsChildren`](#findtermschildren) | `GET` | `/{version}/database/taxonomies/{taxonomyName}/terms/{parentId}/children` | `project` |
| [`findTermTree`](#findtermtree) | `GET` | `/{version}/database/taxonomies/{taxonomyName}/terms/tree` | `project` |
| [`findTaxonomyTree`](#findtaxonomytree) | `GET` | `/{version}/database/taxonomies/tree` | `project` |
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
| [`findOwn`](#findown) | `GET` | `/{version}/database/collections/{collectionName}/own` | `project` |
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

### findOwn

`GET` `/{version}/database/collections/{collectionName}/own`

Search / paginate items.

**Request DTO**: `CodeMashApi2.FindOwnRequest`
**Response**: `CodeMashApi2.FindResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.database.findOwn({
  collectionName: 'collectionName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.FindResponse
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

## Working with terms

A **taxonomy** is a named tree of **terms** (labels). A term can have one parent (a clean hierarchy) or several parents (the same item under many categories). Pick the call that matches what you want:

| I want to… | Call | Returns |
| --- | --- | --- |
| Get a taxonomy's terms as a flat list | `findTerms` | a paginated `list` of terms |
| Get only the children of one term | `findTermsChildren` | a `list` of child terms (direct + multi-parent) |
| Get a taxonomy's terms as a ready-made tree | `findTermTree` | a `tree` of nested term nodes |
| Get the taxonomy structure (e.g. Countries → Cities) | `findTaxonomyTree` | a `tree` of taxonomy nodes |

The examples below all use one example `services` taxonomy shaped like this:

```text
Indoors
  └─ Air conditioning
       └─ Wall-mounted
Outdoors
  └─ Solar panels
```

---

### List a taxonomy's terms (flat)

**Goal:** show every term of `services` in a simple list, in display order.

```ts
const res = await norbix.api.database.findTerms({ taxonomyName: 'services' });
```

```json
{
  "list": {
    "items": [
      { "id": "term_indoors",   "taxonomyName": "services", "parentId": null,           "order": 1, "name": "Indoors" },
      { "id": "term_air_con",   "taxonomyName": "services", "parentId": "term_indoors", "order": 1, "name": "Air conditioning" },
      { "id": "term_wall",      "taxonomyName": "services", "parentId": "term_air_con", "order": 1, "name": "Wall-mounted" },
      { "id": "term_outdoors",  "taxonomyName": "services", "parentId": null,           "order": 2, "name": "Outdoors" },
      { "id": "term_solar",     "taxonomyName": "services", "parentId": "term_outdoors","order": 1, "name": "Solar panels" }
    ],
    "hasMore": false,
    "hasPrevious": false,
    "startingAfter": null,
    "endingBefore": null
  },
  "responseStatus": { "isSuccess": true }
}
```

The list is flat — every term is one row, with its `parentId` telling you where it sits. The nesting is not built for you here (use `findTermTree` for that).

---

### List only top-level terms (filtered)

**Goal:** show just the roots (no parent) — for the first level of a menu.

```ts
const res = await norbix.api.database.findTerms({
  taxonomyName: 'services',
  filter: '{ "parentId": null }',
});
```

```json
{
  "list": {
    "items": [
      { "id": "term_indoors",  "taxonomyName": "services", "parentId": null, "order": 1, "name": "Indoors" },
      { "id": "term_outdoors", "taxonomyName": "services", "parentId": null, "order": 2, "name": "Outdoors" }
    ],
    "hasMore": false, "hasPrevious": false, "startingAfter": null, "endingBefore": null
  },
  "responseStatus": { "isSuccess": true }
}
```

`filter` is an optional MongoDB filter, ANDed with the taxonomy. Use it to fetch one level at a time (lazy tree loading) or to find terms by any field.

---

### Get a term's children

**Goal:** the user expanded *Indoors* — load what is directly under it.

```ts
const res = await norbix.api.database.findTermsChildren({
  taxonomyName: 'services',
  parentId: 'term_indoors',
});
```

```json
{
  "list": {
    "items": [
      {
        "id": "term_air_con",
        "taxonomyName": "services",
        "parentId": "term_indoors",
        "order": 1,
        "name": "Air conditioning",
        "multiParents": [
          { "taxonomyId": "tax_service_types", "parentId": "term_indoors",          "name": "Indoors" },
          { "taxonomyId": "tax_service_types", "parentId": "term_energy_efficient", "name": "Energy efficient" }
        ]
      }
    ],
    "hasMore": false, "hasPrevious": false
  },
  "responseStatus": { "isSuccess": true }
}
```

This returns **both** direct children (their `parentId` is `term_indoors`) **and** multi-parent children (terms that list `term_indoors` in `multiParents`). Parent names are already resolved, so no second lookup.

---

### Multi-parent: one product in several categories

**Goal:** in a `products` taxonomy, a *Relaxing massage oil* belongs to *For couples*, *Gift ideas*, **and** *Body care*. Listing the children of **any** of those categories returns it.

```ts
const res = await norbix.api.database.findTermsChildren({
  taxonomyName: 'products',
  parentId: 'term_gift_ideas',
});
```

```json
{
  "list": {
    "items": [
      {
        "id": "term_relaxing_oil",
        "taxonomyName": "products",
        "name": "Relaxing massage oil",
        "multiParents": [
          { "taxonomyId": "tax_categories", "parentId": "term_for_couples", "name": "For couples" },
          { "taxonomyId": "tax_categories", "parentId": "term_gift_ideas",  "name": "Gift ideas" },
          { "taxonomyId": "tax_categories", "parentId": "term_body_care",   "name": "Body care" }
        ]
      }
    ],
    "hasMore": false, "hasPrevious": false
  },
  "responseStatus": { "isSuccess": true }
}
```

One product, three category links — no duplicate listings. The same product would also come back from `findTermsChildren(..., parentId: 'term_for_couples')` and `'term_body_care'`.

---

### Get the whole term tree in one call

**Goal:** render the full `services` tree at once, already nested.

```ts
const res = await norbix.api.database.findTermTree({ taxonomyName: 'services' });
```

```json
{
  "tree": [
    {
      "id": "term_indoors",
      "name": "Indoors",
      "order": 1,
      "children": [
        {
          "id": "term_air_con",
          "name": "Air conditioning",
          "order": 1,
          "children": [
            { "id": "term_wall", "name": "Wall-mounted", "order": 1, "children": null }
          ]
        }
      ]
    },
    {
      "id": "term_outdoors",
      "name": "Outdoors",
      "order": 2,
      "children": [
        { "id": "term_solar", "name": "Solar panels", "order": 1, "children": null }
      ]
    }
  ],
  "responseStatus": { "isSuccess": true }
}
```

Roots are in `tree`; each node carries its own `children`; a leaf has `children: null`. The tree arrives ready to render — no client-side tree building.

---

### Get only a sub-tree, capped by depth

**Goal:** start from *Indoors* and go at most 2 levels deep (for a big tree you don't want all of).

```ts
const res = await norbix.api.database.findTermTree({
  taxonomyName: 'services',
  rootTermId: 'term_indoors',
  depth: 2,
});
```

```json
{
  "tree": [
    {
      "id": "term_indoors",
      "name": "Indoors",
      "order": 1,
      "children": [
        { "id": "term_air_con", "name": "Air conditioning", "order": 1, "children": null }
      ]
    }
  ],
  "responseStatus": { "isSuccess": true }
}
```

With `depth: 2` you get *Indoors* (level 1) and *Air conditioning* (level 2); *Wall-mounted* (level 3) is cut off, so *Air conditioning* shows `children: null`.

---

### Get the taxonomy structure tree — without terms

**Goal:** see how taxonomies relate to each other (e.g. a `Cities` taxonomy whose parent is `Countries`), structure only.

```ts
const res = await norbix.api.database.findTaxonomyTree();
```

```json
{
  "tree": [
    {
      "viewId": "txn_countries",
      "taxonomyName": "Countries",
      "taxonomySlug": "countries",
      "parentId": null,
      "children": [
        { "viewId": "txn_cities", "taxonomyName": "Cities", "taxonomySlug": "cities", "parentId": "txn_countries", "children": null, "terms": null }
      ],
      "terms": null
    }
  ],
  "responseStatus": { "isSuccess": true }
}
```

This is the **taxonomy** tree, not the term tree: nodes are taxonomies. Every `terms` is `null` because we did not ask for terms.

---

### Get the taxonomy structure tree — with terms

**Goal:** same structure, but also pull each taxonomy's terms in the same call.

```ts
const res = await norbix.api.database.findTaxonomyTree({ includeTerms: true });
```

```json
{
  "tree": [
    {
      "viewId": "txn_countries",
      "taxonomyName": "Countries",
      "taxonomySlug": "countries",
      "parentId": null,
      "terms": [
        { "id": "term_lt", "name": "Lithuania", "order": 1, "children": null },
        { "id": "term_lv", "name": "Latvia",    "order": 2, "children": null }
      ],
      "children": [
        {
          "viewId": "txn_cities",
          "taxonomyName": "Cities",
          "taxonomySlug": "cities",
          "parentId": "txn_countries",
          "terms": [
            { "id": "term_vilnius", "name": "Vilnius", "order": 1, "children": null },
            { "id": "term_kaunas",  "name": "Kaunas",  "order": 2, "children": null }
          ],
          "children": null
        }
      ]
    }
  ],
  "responseStatus": { "isSuccess": true }
}
```

Now each taxonomy node's `terms` holds that taxonomy's full term tree (same shape as `findTermTree`) — *Countries* carries its countries, *Cities* carries its cities.

> Every term-reading call also accepts an optional `databaseIntegrationId` to target a non-default database.

[↑ Top](#endpoints)
