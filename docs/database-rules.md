# Database — rules the gateway checks

[↑ Back to project README](../README.md) · [API · Database](./api/database.md) · [Hub · Database](./hub/database.md)

The method pages are generated from the gateway types. This page is written by
hand: it lists the rules the gateway applies to Database calls and the error
code each refusal carries. Every refusal throws a `NorbixError`; read
`err.errorCode` (see [Error handling](../README.md#error-handling)).

## Records

| What you send                                                                                                                    | What happens                                                                                                                                       | Error code                       |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| `updateMany` / `deleteMany` (API) or `updateManyRecords` / `deleteManyRecords` (Hub) with an empty filter `{}`                   | Refused — `{}` matches every record of the collection. Set `allRecords: true` to mean it. For an update, a missing filter counts as `{}`.          | `CM-ERRORS-DATABASE-037`         |
| An update body with `$` operators (`{"$inc": {"n": 1}}`, `$set`, …) on `updateOne` / `updateMany`                                | Refused. Send the plain fields to set: `{"n": 2}`.                                                                                                 | `CM-ERRORS-DATABASE-035`         |
| A broken record body on `insertOne` / `insertMany` / `replaceOne`                                                                | Refused as "Invalid record document". For `insertMany` the error says which document (`Index`). Before, this was `-005` "Invalid filter document". | `CM-ERRORS-DATABASE-036`         |
| `changeResponsibility` (API) or `changeRecordResponsibility` (Hub) to a user who is not a user of the project in the request env | Refused before anything is written.                                                                                                                | `CM-ERRORS-MEMBERSHIP-USERS-012` |
| An update, replace or change of owner on a soft-deleted record                                                                   | The record counts as not found; a bulk update skips it.                                                                                            | —                                |
| `findTerms` / `findTermsChildren` (API) with `$where`, `$function` or `$accumulator` in the filter                               | Refused.                                                                                                                                           | `CM-ERRORS-DATABASE-031`         |

```ts
// Archive every book on purpose: say so with allRecords.
await norbix.collection('books').updateMany({
  filter: '{}',
  update: '{"status":"archived"}',
  allRecords: true,
});
```

**Own-record rights.** A caller who may only create as itself, update its own
or delete its own records (`createAsUser` / `updateOwn` / `deleteOwn`) may now
call `insertMany`, `updateMany` and `deleteMany`. The call touches only that
caller's own records (inserted records get the caller as owner). Before, these
calls were refused with HTTP 403.

## Saved aggregates

- `getDatabaseAggregate` returns `joinedCollections`: the collections the
  pipeline joins (`$lookup`, `$graphLookup`, `$unionWith`, …). Running a
  pipeline needs read on the start collection and on every joined one.
- `testDatabaseAggregate` (Hub) needs `database:create` or `database:update`
  on `database:aggregate:{schemaId}`, plus read. A caller with read only is
  refused.

## Schemas

- `renameDatabaseSchema` no longer has `renameUniqueName`. A rename to a name
  another schema in the same env already uses is always refused
  (`CM-ERRORS-SCHEMA-002`).
- Deleting a schema is also refused when a saved aggregate joins it.
  `CM-ERRORS-SCHEMA-018` lists the blocking aggregates in
  `BlockerAggregateIds` and `BlockerAggregateNames`.

## Schema triggers — one copy per env

The env is the client's `env` option, or `{ env }` on a single call (sent as
the `norbix-env` header; `PROD` when none is set).

- `getSchemaTriggers` lists only the triggers of the request env. Each row
  carries `env`.
- `getSchemaTrigger` returns `env`, and `schemaId` is the owning schema's id
  (`sch_…`). Before, it held the trigger's own id by mistake.
- `enableSchemaTrigger` / `disableSchemaTrigger` / `deleteSchemaTrigger` (and
  the shared trigger calls with type `Schema`) act on the copy in the request
  env. No copy in that env answers `CM-ERRORS-TRIGGERS-002` (not found).
- `saveSchemaTrigger` with the id of a trigger that belongs to another schema
  answers `CM-ERRORS-TRIGGERS-002`.

```ts
const testTriggers = await norbix.hub.database.getSchemaTriggers({}, { env: 'TEST' });
```

## Taxonomies and terms

- A taxonomy list row (`getDatabaseTaxonomies`) carries `dependencyRefs`:
  one `{ id, name }` per entry of `dependencies`, in the same order. `name` is
  `null` when the id no longer points to a taxonomy. `dependencyNames` is gone.
- Term reads by taxonomy name (term tree, list, children, merged tree — Hub and
  API) ask `database:read` on `database:term:<taxonomy id>`. The merged tree asks
  it on every nested taxonomy.
- `saveDatabaseTaxonomy` with the `viewId` of an existing taxonomy is an update
  and asks `database:update` on that taxonomy. Without a `viewId` it is a create
  and asks `database:create`.
- `getDatabaseTaxonomyTree` with `includeTerms: true` fails when the term read
  fails (before, it returned the taxonomies without terms).

| Refusal                                                              | Error code                 |
| -------------------------------------------------------------------- | -------------------------- |
| The taxonomy name is unknown (the merged tree used to answer `-003`) | `CM-ERRORS-TAXONOMIES-010` |
| The term tree has more than 5000 terms — read a sub-tree             | `CM-ERRORS-TAXONOMIES-011` |
| A taxonomy name over 40 characters on a term read                    | `CM-ERRORS-TAXONOMIES-005` |

## Integrations and other env fields

- `getDatabaseIntegrations` lists only the request env's copies; each row
  carries `env`. `DatabaseIntegrationDto` keeps `isSystemOwned`.
- Scheduler tasks (`SchedulerTaskDto`) and templates (`TemplateDto`,
  `TemplateListProjection`) carry `env`.
- A promotion result lists `integrationsToProvision`: managed database copies
  that get a new database in the target env (data and secrets are not copied).
