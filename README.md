# @norbix/ts

[![CI](https://github.com/norbix-dev/norbix-js/actions/workflows/ci.yml/badge.svg)](https://github.com/norbix-dev/norbix-js/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@norbix/ts.svg?logo=npm)](https://www.npmjs.com/package/@norbix/ts)
[![node](https://img.shields.io/badge/node-%3E=18-success?logo=node.js)](https://nodejs.org)
[![license](https://img.shields.io/npm/l/@norbix/ts.svg)](./LICENSE)

Official TypeScript SDK for [Norbix](https://norbix.dev). One client wraps both the **API** (project-scoped data — collections, users, AI chat) and the **Hub** (project & account configuration — schemas, integrations, team, billing). Works in Node 18+ and modern browsers.

## Install

```bash
npm install @norbix/ts
```

## Quickstart

```ts
import { Norbix } from '@norbix/ts';

// Service mode — long-lived API key
const norbix = new Norbix({ apiKey: '<api_key>', projectId: 'proj_123' });

await norbix.api.database.find({ collectionName: 'orders' });
await norbix.hub.database.getAllDatabaseSchemas();
```

```ts
// User mode — exchange credentials for a JWT
const norbix = new Norbix({ projectId: 'proj_123' });
await norbix.login({ userName: 'alice@team.io', password: 'secret' });
await norbix.api.database.find({ collectionName: 'orders' }); // acts as Alice
```

## Authentication

| Mode | When to use | How |
| --- | --- | --- |
| **API key** | Server-to-server, scripts, scheduled jobs | `apiKey: '...'` or `NORBIX_API_KEY` |
| **JWT bearer** | Logged-in user session | `bearerToken: '...'`, `NORBIX_BEARER_TOKEN`, or `norbix.login(...)` |

Both are sent as `Authorization: Bearer <token>`. If both are set, JWT wins. With neither set the SDK throws `NORBIX_NOT_AUTHENTICATED` on the first call.

## Configuration from `.env`

Any field you don't pass to the constructor is read from `process.env`. In the browser (where `process` doesn't exist) env loading is a silent no-op.

```bash
NORBIX_API_KEY=sk_live_...
NORBIX_PROJECT_ID=proj_123
NORBIX_ACCOUNT_ID=acc_456            # optional
NORBIX_API_URL=https://api.norbix.dev
NORBIX_HUB_URL=https://hub.norbix.dev
```

```ts
const norbix = new Norbix(); // reads everything from env
```

The SDK does not load `.env` files itself. Use `node --env-file=.env` (Node 20+) or `import 'dotenv/config'` in your app's bootstrap.

## Project vs account scope

- `projectId` is required. The SDK works at project scope by default.
- `accountId` is optional. When set, account-scoped Hub endpoints (team invite, billing portal, account verify) become callable. Calling them without `accountId` throws `NORBIX_ACCOUNT_SCOPE_REQUIRED` *before* the request leaves your machine.

## Integration guides

- [**Using with React**](./docs/integrations/react.md) — singleton, AuthContext, JWT rehydration on reload
- [**Using with React + Redux Toolkit**](./docs/integrations/react-redux.md) — `createAsyncThunk`, RTK Query `queryFn`, persistence

## Module reference

The full API surface is documented per module. Every page is auto-generated from the gateway DTOs and refreshed on every release.

### API — project-scoped data (42 endpoints)

| Module | Endpoints | Description |
| --- | ---: | --- |
| [`accessToken`](./docs/api/access_token.md) | 1 | Refresh-token exchange to get a new bearer token. |
| [`apikeys`](./docs/api/apikeys.md) | 2 | List and regenerate per-environment API keys. |
| [`auth`](./docs/api/auth.md) | 1 | Sign-in / sign-out and federated provider flows. |
| [`membership`](./docs/api/membership.md) | 16 | User CRUD, registration, login, roles, preferences. |

→ [Full API index](./docs/api/_index.md)

### Hub — project & account configuration (248 endpoints)

| Module | Endpoints | Description |
| --- | ---: | --- |
| [`account`](./docs/hub/account.md) | 34 | Account profile, status, verification, team invites, Stripe billing. |
| [`database`](./docs/hub/database.md) | 7 | Schemas, integrations, triggers, taxonomies. |
| [`files`](./docs/hub/files.md) | 7 | File storage integrations and triggers. |
| [`membership`](./docs/hub/membership.md) | 18 | Roles, policies, user preferences (Hub side). |
| [`notifications`](./docs/hub/notifications.md) | 81 | Email + push templates, integrations, campaigns, devices. |
| [`payments`](./docs/hub/payments.md) | 7 | Payment provider integrations and triggers. |
| [`logs`](./docs/hub/logs.md) | 2 | Logging integrations and module on/off switches. |
| [`auth`](./docs/hub/auth.md) | 1 | Hub-side sign-in / sign-out. |
| [`accessToken`](./docs/hub/access_token.md) | 1 | Refresh-token exchange (Hub side). |
| [`apikeys`](./docs/hub/apikeys.md) | 2 | List and regenerate Hub API keys. |
| [`echo`](./docs/hub/echo.md) | 1 | Smoke-test echo endpoint. |

→ [Full Hub index](./docs/hub/_index.md)

## Coverage and non-generated roadmap

Generated coverage now reflects the current DTO contracts: API and Hub module
pages are regenerated together with endpoint tests and indexes. Most historical
"missing action" gaps are now closed.

The remaining work is primarily hand-written features outside DTO-driven code
generation (for example, realtime/SSE helper abstractions and transport-level
enhancements that are not endpoint metadata).

→ [Current coverage audit and remaining non-generated items](./docs/missing-actions.md)

## Error handling

```ts
import { NorbixError } from '@norbix/ts';

try {
  await norbix.api.database.find({ collectionName: 'orders' });
} catch (err) {
  if (err instanceof NorbixError) {
    console.log(err.status, err.code, err.fieldErrors);
  }
  throw err;
}
```

| Code | Meaning |
| --- | --- |
| `NORBIX_NOT_AUTHENTICATED` | No `apiKey`, `bearerToken`, or env var, and `login()` not called. |
| `NORBIX_ACCOUNT_SCOPE_REQUIRED` | Account-scoped endpoint called without `accountId`. |
| `NORBIX_MISSING_PATH_PARAM` | A `{token}` in the route was not provided on the request. |
| `NORBIX_NETWORK_ERROR` | Fetch failed (network, CORS, timeout). |

## How it stays in sync with the backend

The internal DTO maintenance workflow walks the DTOs and rewrites:

- `src/api/*` and `src/hub/*` — the SDK module classes
- `tests/api/*.test.ts` and `tests/hub/*.test.ts` — one Vitest spec per endpoint
- `docs/api/*.md` and `docs/hub/*.md` — per-module reference pages with TS examples

CI runs lint, typecheck, tests, and build on every PR. Keep generated artifacts committed together with DTO changes so SDK code, tests, and docs stay aligned.

## Development

```bash
npm install
npm run lint
npm run typecheck
npm test
npm run build
```

Conventional commits are required. Use `npm run commit` for a guided flow.

## Releases

Pushes to `main` are released to npm by [semantic-release](https://github.com/semantic-release/semantic-release) with provenance enabled. `next` and `beta` branches publish prereleases.

## License

MIT — see [LICENSE](./LICENSE).
