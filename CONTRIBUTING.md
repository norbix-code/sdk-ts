# Contributing to `@norbix/ts`

This SDK is auto-generated from the Norbix gateway DTOs and released by CI on every push to `main`. The flow below is the same one CI runs — keep your local steps aligned with CI and you'll never get a surprise on merge.

## Local setup

```bash
npm install
npm run lint
npm run typecheck
npm test
npm run build
```

Node 18 or newer is required. We don't ship a runtime dependency tree — the SDK uses `globalThis.fetch` only. Dev dependencies are kept minimal on purpose.

## Editing the SDK

The source of truth is **the DTO files** in `src/types/`. Almost everything else under `src/`, `tests/`, and `docs/` is regenerated from them.

### Regenerate the SDK

Run the internal DTO maintenance workflow used by the team to regenerate SDK modules, tests, and docs from DTO contracts.

This rewrites generated files under `src/api/`, `src/hub/`, `tests/api/`, `tests/hub/`, `docs/api/`, `docs/hub/`, and `docs/README.md`. Commit regenerated output together with DTO changes so source, tests, and docs stay in sync.

If you need to add behavior to the SDK that _isn't_ per-endpoint (e.g. a new auth helper, a transport feature), edit `src/client/*` by hand. Those files are not regenerated.

## Conventional commits

Every commit message must follow [Conventional Commits](https://www.conventionalcommits.org/). `commitlint` runs as a Husky `commit-msg` hook and rejects messages that don't conform.

The commit type maps to the version bump:

| Type                                      | Version bump | Example                                   |
| ----------------------------------------- | ------------ | ----------------------------------------- |
| `feat:`                                   | minor        | `feat(database): add aggregate helper`    |
| `fix:`                                    | patch        | `fix(transport): retry on idempotent 5xx` |
| `perf:`                                   | patch        | `perf(codegen): skip unchanged files`     |
| `refactor:`                               | patch        | `refactor(client): split errors module`   |
| `docs(readme):`                           | patch        | `docs(readme): clarify env loading`       |
| `chore:` `test:` `ci:` `style:`           | none         | maintenance, no release                   |
| any with `!` or `BREAKING CHANGE:` footer | major        | `feat!: drop Node 16 support`             |

You can preview what a PR would release. PRs to `main` get a sticky comment from the `release-preview` workflow showing the computed next version before you merge.

## CI overview

Every PR runs four parallel pipelines. All must pass.

### `ci.yml` → job `build`

1. `npm ci`
2. `npm run lint` — ESLint (flat config, TypeScript strict).
3. `npm run typecheck` — `tsc --noEmit`. Test files included.
4. `npm test` — Vitest.
5. `npm run build` — tsup dual ESM/CJS build into `dist/`.
6. **Pack guard** — `npm pack --dry-run` to confirm only release files ship. Fails if the tarball exceeds 500 KB or contains forbidden paths (`src/`, `tests/`, `docs/`, etc.).

### `ci.yml` → job `security`

1. **`npm audit --omit=dev --audit-level=high`** — fails the build on any HIGH or CRITICAL CVE in production deps. Dev deps are excluded because they don't ship to consumers.
2. **`npm audit signatures`** — verifies every installed package was published with a valid registry signature. Catches typosquats and registry compromises.
3. **Trivy** — scans config (workflow + Dockerfiles + YAML), committed secrets (tokens, keys), and language-level deps. SARIF uploaded to the Security tab.
4. **OSV scanner** — Google's vulnerability database. Wider coverage than `npm audit` and reflects newly-published advisories faster.

### `codeql.yml`

GitHub's native SAST for JavaScript / TypeScript. Runs the `security-extended` query suite on PR + push + weekly cron. Findings appear in the Security tab.

### `security-nightly.yml`

Re-runs `npm audit`, signatures check, Trivy, and OSV scanner against `main` every night at 04:00 UTC. Catches CVEs published against deps you already use, even when no code changes. The nightly job does not fail `main` — it's informational; findings show up in the Security tab.

### Dependabot

Opens PRs for npm + GitHub Actions updates weekly (Monday 06:00 Europe/Vilnius). Minor + patch updates are grouped to cut review load. Security-patch PRs are out-of-band and arrive the moment a CVE is published against a dep you use.

## Releases

`release.yml` runs on every push to `main`, `next`, or `beta`.

1. `npm ci` and full CI suite (lint, typecheck, test, build, pack guard, audit).
2. `npx semantic-release`:
   - Reads conventional commits since the last tag.
   - Computes the next version (or skips if no release-worthy commits).
   - Tags the release.
   - Publishes to npm with **provenance** (`NPM_CONFIG_PROVENANCE=true`).
   - Creates a GitHub Release with the release notes.

`main` only accepts changes through pull requests, so the release does **not** commit back: `package.json` on `main` keeps a stale `version`, and `CHANGELOG.md` stopped at 1.2.0. The git tag is the source of truth for the version, and release notes live on [GitHub Releases](https://github.com/norbix-code/sdk-ts/releases).

`next` and `beta` branches publish prereleases (`1.2.0-beta.3`, etc.) and never promote to `latest` on npm.

### Authentication

npm publishing uses **trusted publishing (OIDC)**: there is no `NPM_TOKEN`. npm requires 2FA for token-based publishes, which CI cannot do.

One-time setup on npmjs.com: package `@norbix.ai/ts` → Settings → Trusted Publisher → GitHub Actions, organization `norbix-code`, repository `sdk-ts`, workflow `release.yml` (no environment).

| Secret         | Where to set it     | What it's for                                                            |
| -------------- | ------------------- | ------------------------------------------------------------------------ |
| `GITHUB_TOKEN` | provided by Actions | Used to push the release tag and create the GH Release. No setup needed. |

### How to debug a failed release

- **`semantic-release` says "no release-worthy commits"** — your commits don't bump anything. Use `feat:` / `fix:` / `feat!:` for the bump you want. Squash merging? Make sure the squash subject also follows conventional commits.
- **`npm publish` fails with E401 / EOTP, or `OIDC token exchange ... 404`**: trusted publishing is not configured on npmjs.com, or no longer matches the repository / workflow file name. Fix the Trusted Publisher settings; do not add a token.
- **Tag exists but npm or the GitHub Release is missing**: publishing failed after tagging. Run the Release workflow manually with `republish=true`. It publishes the latest tag from the tag's own tree and creates the missing GitHub Release.
- **`audit` failure mid-release** — a CVE landed between the PR's CI run and the merge. Land a fix or wait for the patched version (Dependabot usually opens a PR within minutes).

## Adding behavior the SDK doesn't have yet

If your change touches generated code: edit the DTO upstream, then `internal maintenance workflow` here. Don't hand-edit `src/api/`, `src/hub/`, or anything in `docs/api/` or `docs/hub/` — the next codegen run will overwrite it.

If your change is hand-written behavior (transport, error handling, login flow, env loading): edit under `src/client/` and add tests in `tests/client.test.ts`.

## Repository layout

```
.github/workflows/         CI, release, security workflows
.husky/                    git hooks (commit-msg, pre-commit)
docs/                      auto-generated module docs + hand-written guides
scripts/                   optional project scripts (currently minimal usage)
src/
  client/                  hand-written: Norbix class, transport, errors, env
  api/                     auto-generated SDK modules
  hub/                     auto-generated SDK modules
  types/                   generated DTO contracts
tests/
  api/                     auto-generated tests (one file per module)
  hub/                     auto-generated tests (one file per module)
  client.test.ts           hand-written cross-cutting tests
  _helpers.ts              shared mock fetch + assertions
package.json
tsconfig.json
tsup.config.ts             dual ESM/CJS build config
vitest.config.ts
.releaserc.json            semantic-release plugins + branches
.commitlintrc.json
eslint.config.js           flat ESLint config
```

## Questions

Open a [GitHub Discussion](https://github.com/norbix-code/sdk-ts/discussions) or an issue. PRs welcome.
