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

## Reading references — `expandReferences`

A reference field (user, role, taxonomy term, record of another collection,
file) stores an id. `find`, `findOne`, `findOwn` (API) and `findRecords`,
`findOneRecord` (Hub) take `expandReferences: true`: every reference then reads
as `{ id, display }` — `display` is the value of the field the schema names as
`displayField` on the target (a role shows its name, a file its name), `null`
when the target is gone; an array of them on a field that holds several ids.
Default `false` returns the stored ids, unchanged.

The caller needs read permission on the collection AND on every source the
published schema links to. A missing one refuses the whole read with
`CM-ERRORS-DATABASE-056`, naming the source — a permission gap never looks like
missing data.

```ts
import type { WithExpandedReferences } from '@norbix.ai/ts';

interface Article {
  title: string;
  author: string;
  tags: string[];
}
type ArticleView = WithExpandedReferences<Article, 'author' | 'tags'>;

const articles = norbix.collection<Article, ArticleView>('articles');
const [first] = await articles.findItems({ expandReferences: true });
first?.author?.display; // "Jane Doe"
const one = await articles.findOneItem({ id: 'rec_1', expandReferences: true });
```

`findItems`, `findOneItem` and `findOwnItems` return `TExpanded` when the
request says `expandReferences: true`, `TItem` otherwise.

## Nested documents and arrays

A record is stored as the JSON you send: objects (`"address": {"city":
"Vilnius"}`) and arrays of objects (`"lines": [{"sku": "A-1", "qty": 2}]`)
stay nested at any depth, and the schema is checked at every level — a broken
value names the full path (`lines[1].qty`).

An update key may be a nested path:

| Path                  | Meaning                                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------------------------- |
| `"address.city"`      | one nested field                                                                                            |
| `"lines.0.qty"`       | the element at an index                                                                                     |
| `"lines.$[].qty"`     | every element                                                                                               |
| `"lines.$[line].qty"` | the elements `arrayFilters` picks — a JSON array with one filter per `$[name]`, e.g. `[{"line.sku":"A-1"}]` |

`arrayFilters` is a field of `updateOne` / `updateMany` (API) and
`updateOneRecord` / `updateManyRecords` (Hub). A `$[name]` without its filter,
or a filter without its `$[name]`, is refused. A sort may not reach into or
cross a list.

```ts
await norbix.collection('orders').updateOne({
  id: 'rec_1',
  update: '{"lines.$[line].qty":3,"meta.words":130}',
  arrayFilters: '[{"line.sku":"A-1"}]',
});
```

### Record data errors

Every refusal reads `Field '<name>' is invalid: <reason>` and carries the
field name and the keyword in its metadata. `-030` stays for `required`.

| Code                     | Keyword            | Fires when                                                                                                   |
| ------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------ |
| `CM-ERRORS-DATABASE-030` | `required`         | a required field is missing or null on insert / replace                                                      |
| `CM-ERRORS-DATABASE-039` | `type`             | wrong JSON type; one value on a multi-value field or a list on a single one; empty reference id              |
| `CM-ERRORS-DATABASE-040` | `length`           | `minLength` / `maxLength` (also per language on a translatable string)                                       |
| `CM-ERRORS-DATABASE-041` | `pattern`          | the string does not match `pattern`                                                                          |
| `CM-ERRORS-DATABASE-042` | `format`           | `format` email / uri / uuid; a file id that is not a UUID or `nbfl_…`; a currency code that is not 3 letters |
| `CM-ERRORS-DATABASE-043` | `range`            | `minimum` / `maximum` on integer, decimal, date, currency amount                                             |
| `CM-ERRORS-DATABASE-044` | `multipleOf`       | a decimal or currency amount off the step (`multipleOf`)                                                     |
| `CM-ERRORS-DATABASE-045` | `enum`             | value outside the enum values, the allowed currencies or the allowed geometry types                          |
| `CM-ERRORS-DATABASE-046` | `uniqueItems`      | a repeated entry in tags, a multi-value enum, file ids, several references, an array with `uniqueItems`      |
| `CM-ERRORS-DATABASE-047` | `properties`       | a currency / geolocation / nested object misses a member or carries an unknown one                           |
| `CM-ERRORS-DATABASE-048` | `coordinates`      | not a `[longitude, latitude]` pair; longitude outside -180..180 or latitude outside -90..90                  |
| `CM-ERRORS-DATABASE-049` | `translateOptions` | a translatable string is not a language → text object                                                        |
| `CM-ERRORS-DATABASE-050` | `reference`        | a user id that is not a user of the project                                                                  |
| `CM-ERRORS-DATABASE-051` | `reference`        | a role id the project does not have (a role NAME is refused — store the role id)                             |
| `CM-ERRORS-DATABASE-052` | `reference`        | a term id that is not a term of the declared taxonomy                                                        |
| `CM-ERRORS-DATABASE-053` | `reference`        | a record id that is not in the declared collection                                                           |
| `CM-ERRORS-DATABASE-054` | `reference`        | a file id none of the field's storages holds                                                                 |
| `CM-ERRORS-DATABASE-055` | `reference`        | the declared target itself cannot be read (unknown taxonomy, collection without a repository, …)             |
| `CM-ERRORS-DATABASE-056` | —                  | a read with `expandReferences` by a caller without read on a linked source (the source is named)             |

A plain string on a translatable field is refused (before, accepted); a
duplicate tag / option / id is refused.

## Schema fields

`DataSchemaDto.fields` (read with `getDatabaseSchema`) is typed per field
kind. New in this contract:

- `ObjectFieldDto` — a nested form: `properties` (fields at the next level)
  and `required`.
- `ArrayFieldDto` — a list: `items` (one field DTO, a primitive or an
  `ObjectFieldDto`), `minItems` / `maxItems` / `uniqueItems`.
- `JsonFieldDto` — a free JSON value, `maxBytes`.
- `CurrencyDefaultDto` — `{ value, currency }`, the `default` of a currency
  field.
- Field rules: `default` on string / integer / decimal / boolean / date /
  currency / tags / enum; `unique` on string / integer / decimal; `multipleOf`
  (the amount step), `minimum` / `maximum` on currency; `minItems` /
  `maxItems` on tags and files; `allowedFileType` / `maxSizeMb` on files;
  `displayField` on the user / role / taxonomy / collection references (the
  value `expandReferences` shows).
- A taxonomy term (`TermDto`, `TermTreeDto`) carries `slug`.

Schema saves that touch a display field: a collection reference whose
`displayField` is not a field of the target schema answers
`CM-ERRORS-SCHEMA-039` (the target's fields listed); a draft or rename that
would remove a field another schema shows answers `CM-ERRORS-SCHEMA-040`; a
schema delete while another schema's reference points at it answers
`CM-ERRORS-SCHEMA-041`.

## Files by id

A file field stores a stable file id (the `id` an expanded reference returns).
`api.files.getFileById({ filesIntegrationId, id })` and
`hub.files.getFileById({ filesIntegrationId, id })` read that file: `file`
(resource, path), `isPublic`, `publicUrl`. See [API · Files](./api/files.md#getfilebyid).

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
