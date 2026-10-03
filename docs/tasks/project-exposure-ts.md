# Project exposure switches — TypeScript SDK (item B3a)

## Goal

Add `hub.account.updateProjectExposeBrand` and `hub.account.updateProjectExposeAuth`
(the two new Admin Portal exposure calls from gateway item B1) to `@norbix.ai/ts`,
with types, a generated test and a generated doc entry each.

Not in scope: React-Redux hooks (separate file in that repo), releasing to npm,
any change to `ProjectDto` (it already has `exposeBrandToAdminPortal` /
`exposeAuthToAdminPortal`).

## Plan

1. docs(tasks): this item file — done
2. feat(project): add the two request types to `src/types/hub2.dtos.ts` and
   `src/types/hub2.contract.json`, then run the endpoint generator to produce the
   methods, tests and docs — done (types added by hand, see Findings; methods,
   tests and docs from `generate-endpoints`)
3. chore: build, typecheck, lint, prettier, tests; push; open the pull request — doing
   (build, `tsc --noEmit`, lint, prettier clean; vitest 46 files, 822 passed)

## Changes

| file                                | what changed | plan step # |
| ----------------------------------- | ------------ | ----------- |
| `docs/tasks/project-exposure-ts.md` | this file    | 1           |

## Findings

- How the types were made: `npm run sync-types:remote` needs a running Hub on
  `localhost:5001` (ServiceStack metadata). None was running, so the two classes
  were written by hand in the exact generated shape (copy of
  `UpdateProjectExposeLegal`, texts from
  `gateway/src/Isidos.CodeMash.Gateway.Hub.Account/Project/Settings/AdminPortalExposure/UpdateExposure.cs`).
  The next real `sync-types:remote` run should produce the same text — open, check
  then.
- Dev-only generator bug: `scripts/generate-endpoints.mjs` (gitignored, copied
  from the main checkout `sdks/norbix-js/scripts/`) calls `main();` above
  `const OPTIONAL_AUTH_ROUTES = new Set(...)`, so it crashes with
  `ReferenceError: Cannot access 'OPTIONAL_AUTH_ROUTES' before initialization`.
  Fixed only in this worktree's untracked copy (moved `main();` to the end of the
  file); the main-checkout copy still has the bug — open.
- Generator drift (not taken): a full `generate-endpoints` run also rewrites
  `src/hub/email.ts` (drops the hand-made `getEmailPreferencesByLink` with
  `scope: 'optional'` from #65), `src/api/files.ts` (binary download, known from
  #64), `src/hub/index.ts` (import order) and the import order in
  `tests/hub/account.test.ts`. All reverted; only the account changes are
  committed. The generator does not know these hand edits — open.

## Rejected / moved out

- README module table: no change — it lists modules, not single methods, and has
  no row for `updateProjectExposeLegal` either.

## Needs you

- [ ] Review and merge the pull request (do not merge before gateway `audit/project`
      with item B1 is deployed, or the two calls answer 404).
- [ ] After the npm release, bump `@norbix.ai/ts` in React-Redux (item B3a part 2).

## Open questions

None.
