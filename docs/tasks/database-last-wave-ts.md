# database-last-wave-ts — TypeScript SDK follows the last Database wave

## Goal

The TypeScript SDK (`@norbix.ai/ts`, repo `norbix-code/sdk-ts`) follows the
gateway contract changes of the last Database wave (records, taxonomies,
triggers, schemas, integrations), now on gateway `refactoringV2`.

Not in scope: other SDKs, the CLI, the portal (`cloud`), gateway code.

## Plan

1. feat(database): regenerate `src/types/{api2,hub2}.dtos.ts` against local hosts (Hub `:64964`, Api `:64965`, gateway `origin/refactoringV2`); move the taxonomy test to `dependencyRefs` — done (`c157dcc`)
2. test(database): mock-fetch tests for `allRecords`, trigger `env` / `schemaId`, `joinedCollections`, rename without `renameUniqueName`, new error codes — done (`06a5386`)
3. docs(database): hand-written `docs/database-rules.md`, README link, comments on the collection helper's `updateMany` / `deleteMany` — done (`ec3cb16`)
4. check: every Database method (Hub 73, Api 22 routes) matches a route the hosts serve, both ways — done (0 missing, 0 extra)
5. ship: pull request, checks, merge, release — doing

## Changes

| file                               | what changed                                                                                                                                                                                                                                                                                                                                                                                                                                               | plan step # |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `src/types/api2.dtos.ts`           | `allRecords` on `UpdateManyRequest` / `DeleteManyRequest`                                                                                                                                                                                                                                                                                                                                                                                                  | 1           |
| `src/types/hub2.dtos.ts`           | `allRecords` on `UpdateManyRecords` / `DeleteManyRecords`; `env` on `SchemaTriggerDto`, `SchemaTriggerProjectionList`, `DatabaseIntegrationListProjection`, `SchedulerTaskDto`, `TemplateDto`, `TemplateListProjection`; `joinedCollections` on `MongoDbAggregateDto`; `isSystemOwned` on `DatabaseIntegrationDto`; `integrationsToProvision` on `PromotionResultDto`; new `TaxonomyRef`; `dependencyNames` → `dependencyRefs`; `renameUniqueName` removed | 1           |
| `tests/hub/database-audit.test.ts` | taxonomy row test reads `dependencyRefs` (with an unresolved id)                                                                                                                                                                                                                                                                                                                                                                                           | 1           |
| `tests/database-last-wave.test.ts` | new, 14 tests                                                                                                                                                                                                                                                                                                                                                                                                                                              | 2           |
| `docs/database-rules.md`           | new page: rules and error codes of Database calls                                                                                                                                                                                                                                                                                                                                                                                                          | 3           |
| `README.md`                        | link to the new page                                                                                                                                                                                                                                                                                                                                                                                                                                       | 3           |
| `src/resources/collection.ts`      | comments on `updateMany` / `deleteMany`                                                                                                                                                                                                                                                                                                                                                                                                                    | 3           |

Test evidence (after step 3): `npx tsc --noEmit` clean; `npm run lint` clean;
`npx prettier --check .` clean; `npx vitest run` 52 files, 871 tests passed.

## Findings

- The dev-only `scripts/sync-types.mjs` (gitignored, copied from the main checkout) put the `@sdk-dto-patches` block OUTSIDE `export module CodeMashApi2/CodeMashHub2 { … }`: its wrapper test needs `{` on the same line as `export module`, and `x typescript` writes it on the next line. Fixed only in this worktree's copy (`\s*\{`); the main checkout's copy is untouched — open.
- The dev-only `scripts/generate-endpoints.mjs` crashes (`Cannot access 'OPTIONAL_AUTH_ROUTES' before initialization`): `main()` is called before that `const`. Fixed only in this worktree's copy (call moved to the end) — open.
- `generate-endpoints` output no longer matches `main` for 13 non-Database modules (account, ai, email, membership, notifications, public, scheduler, files …): it would overwrite hand-written code such as the scheduler task input types. Not taken; the Database modules are byte-identical to the generator output — open.
- The hosts' metadata no longer lists internal message types (`ProcessCollectionImport`, `TermInserted`, `TermUpdated`, `TermDeleted`, `TermsDeleted`, `IngestSourceMessage`, and `AggregateId` / `ProjectId` / `IntegrationId` / `TaxonomyId` / `IHasDomainEntityId`). A regenerate against a stack host may bring them back (they depend on which message handlers the host registers). No SDK method uses them; they left the file — open (types flip-flop between hosts).
- `src/types/*.contract.json` has no generator in the repo; no new request type arrived in this wave, so it is unchanged — open.

## Rejected / moved out

- Running `generate-endpoints` output for non-Database modules: it would revert hand-written code (see Findings).

## Needs you

- [ ] Breaking for callers (released as a minor, major frozen): `TaxonomyListProjection.dependencyNames` is gone — read `dependencyRefs` (`{ id, name? }` per entry of `dependencies`, same order, `name` null for an id that no longer resolves). `RenameDatabaseSchemaRequest.renameUniqueName` is gone — a rename to a name another schema in the same env uses is always refused (`CM-ERRORS-SCHEMA-002`). Nothing to decide unless you want a different release note.

## Open questions

None.
