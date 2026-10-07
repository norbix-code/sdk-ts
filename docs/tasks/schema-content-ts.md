# schema-content-ts — TypeScript SDK follows the schema-content campaign

## Goal

The TypeScript SDK (`@norbix.ai/ts`, repo `norbix-code/sdk-ts`) follows the
gateway contract of campaign branch `audit/schema-content` (gateway worktree
`worktrees/gateway/audit/schema-content/campaign`): nested fields (object /
array / json), field rules (`default`, `unique`, `displayField`, `multipleOf`,
`minItems` / `maxItems`, `allowedFileType` / `maxSizeMb`), `slug` on terms,
`expandReferences` on the record reads, files by id, `arrayFilters` on the
record updates, and the new error codes.

Not in scope: other SDKs, the CLI, the portal (`cloud`), gateway code, merging
(the campaign is not on `refactoringV2` yet — the pull request stays open).

## Plan

1. feat(types): regenerate `src/types/{api2,hub2}.dtos.ts` against the campaign hosts (Hub `:49826`, Api `:49877`) — done
2. feat(files): `getFileById` on `api.files` and `hub.files` (+ generated-style tests and method pages) — done
3. feat(database): collection helper — `findOwn` / `findOwnItems`, `findOneItem`, typed `{ id, display }` references with `expandReferences`, `arrayFilters` comments — done
4. test(database): mock-fetch tests for `expandReferences`, `arrayFilters`, nested documents, the new field DTOs and the new error codes — done
5. docs(database): rules page (references, nested documents, field rules, files by id, error codes), method pages, README — done
6. check: `npm run typecheck`, `npm run lint`, `npx prettier --check .`, `npx vitest run`, `npm run build` — done
7. ship: `nbx-ship --no-merge` (pull request only; merge after the gateway campaign lands) — doing

## Changes

| file                                                                                 | what changed                                                                                                                                                                                                                                                                                                                                                                                                                                                      | plan step # |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `src/types/api2.dtos.ts`                                                             | new `ObjectFieldDto`, `ArrayFieldDto`, `JsonFieldDto`, `CurrencyDefaultDto`; `default` / `unique` / `displayField` / `multipleOf` / `minimum` / `maximum` / `minItems` / `maxItems` / `allowedFileType` / `maxSizeMb` on the field DTOs; `slug` on `TermDto` / `TermTreeDto`; `expandReferences` on `FindRequest` / `FindOneRequest` / `FindOwnRequest`; `arrayFilters` on `UpdateOneRequest` / `UpdateManyRequest`; `GetFileByIdRequest` / `GetFileByIdResponse` | 1           |
| `src/types/hub2.dtos.ts`                                                             | the same field DTOs and term `slug`; `expandReferences` on `FindRecords` / `FindOneRecord`; `arrayFilters` on `UpdateOneRecord` / `UpdateManyRecords`; `GetFileById` / `GetFileByIdResponse`                                                                                                                                                                                                                                                                      | 1           |
| `src/api/files.ts`, `src/hub/files.ts`                                               | `getFileById` (API `GET /{version}/files/{filesIntegrationId}/by-id/{id}`, Hub `GET /{version}/files/item/by-id`); endpoint counts 13 / 23                                                                                                                                                                                                                                                                                                                        | 2           |
| `tests/api/files.test.ts`, `tests/hub/files.test.ts`                                 | generated-style test per new method; method counts                                                                                                                                                                                                                                                                                                                                                                                                                | 2           |
| `docs/api/files.md`, `docs/hub/files.md`, `docs/api/_index.md`, `docs/hub/_index.md` | `getFileById` row + section; counts                                                                                                                                                                                                                                                                                                                                                                                                                               | 2           |
| `src/resources/collection.ts`                                                        | `CollectionResource<TItem, TExpanded>`; `ReferenceDisplay`, `WithExpandedReferences<T, K>`; `findItems` / `findOneItem` / `findOwnItems` overloads on `expandReferences: true`; `findOwn`; comments on nested documents, nested paths and `arrayFilters`                                                                                                                                                                                                          | 3           |
| `src/resources/index.ts`, `src/index.ts`, `src/client/Norbix.ts`                     | the two types exported; `collection<TItem, TExpanded>()`                                                                                                                                                                                                                                                                                                                                                                                                          | 3           |
| `tests/database-schema-content.test.ts`                                              | new, 36 tests                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 4           |
| `docs/database-rules.md`                                                             | new sections: Reading references, Nested documents and arrays (+ error table 030–056), Schema fields, Files by id                                                                                                                                                                                                                                                                                                                                                 | 5           |
| `docs/api/database.md`, `docs/hub/database.md`                                       | one sentence on `find` / `findOne` / `findOwn` / `findRecords` / `findOneRecord` (`expandReferences`) and on the four record updates (`arrayFilters`)                                                                                                                                                                                                                                                                                                             | 5           |
| `README.md`                                                                          | files line (file by id); the rules-page sentence                                                                                                                                                                                                                                                                                                                                                                                                                  | 5           |

## Findings

- The dev-only `scripts/sync-types.mjs` (gitignored) still puts the `@sdk-dto-patches` block OUTSIDE the `export module` wrapper: its test needs `{` on the same line as `export module`, and `x typescript` writes it on the next line. Fixed in this worktree's copy only (`\s*\{`), as in the last wave — open (the main checkout's copy is untouched).
- The dev-only `scripts/generate-endpoints.mjs` (gitignored) still calls `main()` before `const OPTIONAL_AUTH_ROUTES` and crashes. Fixed in this worktree's copy only — open.
- `generate-endpoints` would rewrite 86 files that are hand-maintained today (binary `responseType` on the file downloads, scheduler task input types, every generated test). Only the `getFileById` snippets were taken from its output and placed by hand; everything else was reverted — open (same as the last wave).
- The campaign hosts drop a few `@description` comments the committed files had (term insert / update documents, the draft UI schema, the `$set` update documents). Comments only; no field changed — open (gateway side).

## Rejected / moved out

- Merging the pull request: not in this wave (the gateway campaign is not on `refactoringV2`).

## Needs you

- [ ] Merge the pull request after the gateway campaign `audit/schema-content` lands on `refactoringV2`; the `getFileById` routes and `expandReferences` only work against that gateway.

## Open questions

- none
