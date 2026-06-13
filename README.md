<!-- BEGIN: HERO -->
<p align="center">
  <a href="https://norbix.ai">
    <img src="https://norbix.ai/brand/wordmark.svg" alt="Norbix" height="64" />
  </a>
</p>

<div align="center">
  <h1>Norbix TypeScript SDK</h1>
  <p><strong>The MCP-native Backend-as-a-Service for the agentic era.</strong></p>

  <p>
    <a href="https://github.com/norbix-code/sdk-ts/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/badge/license-MIT-blue.svg" /></a>
    <a href="https://github.com/norbix-code/sdk-ts/actions"><img alt="CI" src="https://github.com/norbix-code/sdk-ts/actions/workflows/ci.yml/badge.svg" /></a>
    <a href="https://www.npmjs.com/package/norbix"><img alt="norbix" src="https://img.shields.io/npm/v/norbix.svg?label=norbix&logo=npm" /></a>
    <a href="https://nodejs.org"><img alt="node" src="https://img.shields.io/badge/node-%3E=18-success?logo=node.js" /></a>
  </p>

  <p>
    <a href="#getting-started"><strong>Quickstart</strong></a>
    &nbsp;·&nbsp;
    <a href="https://norbix.ai">Website</a>
    &nbsp;·&nbsp;
    <a href="https://docs.norbix.ai">Docs</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/norbix-code/examples">Examples</a>
    &nbsp;·&nbsp;
    <a href="https://norbix.ai/blog">Blog</a>
    &nbsp;·&nbsp;
    <a href="https://x.com/norbix">X</a>
    &nbsp;·&nbsp;
    <a href="https://www.youtube.com/@norbix">YouTube</a>
    &nbsp;·&nbsp;
    <a href="https://norbix.ai/discord">Discord</a>
  </p>

  <p>
    <a href="https://www.youtube.com/watch?v=NORBIX_TS_DEMO_ID">
      <img src="https://norbix.ai/og/sdk-ts-video.png" alt="Watch the 90-second TypeScript SDK demo on YouTube" width="720" />
    </a>
  </p>
  <p><em>↑ 90-second demo — <a href="https://www.youtube.com/watch?v=NORBIX_TS_DEMO_ID">watch on YouTube</a></em></p>

  <hr />
</div>
<!-- END: HERO -->

<!-- BEGIN: WHAT_IS_NORBIX -->

## What is Norbix?

Norbix is a **Backend-as-a-Service** built for the agentic era. One platform exposes everything an app needs — auth, database, file storage, email, push, payments, code functions, logging — as both a typed SDK _and_ an MCP server, so a developer and their agent can call the same backend the same way.

It runs three ways: as a fully **managed cloud** at [`cloud.norbix.ai`](https://cloud.norbix.ai) (zero DevOps), **self-hosted** on your own machine or server, or as **enterprise** in your VPC. Same modules, same APIs, same SDKs — pick the runway, not the runtime.

This repo is the **TypeScript SDK** — one package on npm (`norbix`) that exposes both the runtime **API** and the configuration **Hub** as separate import paths so you only ship the surface you actually use. Plus a third surface, the [Norbix MCP server](#norbix-mcp--same-modules-agent-native), that exposes the same modules to your IDE. Works in Node 18+ and modern browsers.

<!-- END: WHAT_IS_NORBIX -->

<!-- BEGIN: API_VS_HUB -->

## Two surfaces in one package — API or Hub?

Norbix has two surfaces, and each is its own import path. The npm package is one (`norbix`), but tree-shaking is per-subpath — pick the one that matches what your code is doing. Most apps need only the API in production code; the Hub is for admin tooling, internal dashboards, and infrastructure-as-code.

|                      | **`norbix/api`**                                                                                                  | **`norbix/hub`**                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Surface**          | Runtime — what your app does at request time                                                                      | Control plane — how Norbix is configured                                                                   |
| **Scope**            | Project-scoped data                                                                                               | Project & account configuration                                                                            |
| **Default base URL** | `https://api.norbix.ai`                                                                                           | `https://hub.norbix.ai`                                                                                    |
| **Typical caller**   | Your app's backend, your mobile app, your AI agent                                                                | Your admin UI, your CLI, your IaC scripts                                                                  |
| **Examples**         | Sign in users · query collections · send transactional email · charge a card · invoke a function · run an AI chat | Define schemas · configure an SMTP provider · invite a teammate · open a billing portal · set up a webhook |

```sh
# One install — pick the import path you need
npm install norbix
```

```ts
// App / runtime code
import { Norbix } from 'norbix';

// Both surfaces are reachable from one client:
norbix.api.database.find({ collectionName: 'orders' });
norbix.hub.database.getAllDatabaseSchemas();
```

Both surfaces share the same authentication model, the same error model, and the same configuration shape. Want a third option that's not a package at all? See [Norbix MCP](#norbix-mcp--same-modules-agent-native) — same modules, exposed to your IDE.

<!-- END: API_VS_HUB -->

<!-- BEGIN: GETTING_STARTED -->

## Getting started

The Getting Started examples below use the **API** surface because that's what most apps need first. The Hub follows the same shape — see [Hub example](#hub-example) below.

### Install

```sh
npm install norbix
```

### Three real things in 30 lines

The examples below assume an API key from the [Norbix Cloud Dashboard](https://cloud.norbix.ai) and a project ID. The same code works against self-hosted and enterprise deployments — only the base URL changes (see [Authentication & configuration](#authentication--configuration)).

#### 1. Register a user

```ts
import { Norbix } from 'norbix';

const norbix = new Norbix({
  apiKey: process.env.NORBIX_API_KEY,
  projectId: 'proj_123',
});

const user = await norbix.api.membership.saveEmailUser({
  email: 'ada@example.com',
  password: 'correct-horse-battery-staple',
  firstName: 'Ada',
  lastName: 'Lovelace',
});

console.log(user.id);
```

#### 2. Insert a record

```ts
const order = await norbix.api.database.insertOne({
  collectionName: 'orders',
  document: {
    userId: user.id,
    amount: 4900,
    currency: 'EUR',
    status: 'pending',
    items: [
      { sku: 'NBX-T-SHIRT', qty: 1, price: 2900 },
      { sku: 'NBX-MUG', qty: 1, price: 2000 },
    ],
    createdAt: new Date().toISOString(),
  },
});

console.log(order.id);
```

#### 3. Ask the AI

```ts
const answer = await norbix.api.chat.askChat({
  messages: [
    { role: 'system', content: 'You are a concise sales assistant.' },
    { role: 'user', content: `Summarise order ${order.id} in one sentence.` },
  ],
});

console.log(answer.content);
```

That's the loop — auth, data, AI — using three real modules behind one client. The same modules are exposed as MCP tools, so any MCP-native agent can drive the same flow. Email/push/payments and other configurable surfaces live on the **Hub** — see [Hub example](#hub-example).

> **Want it in your language?** See the [Norbix SDKs](#norbix-sdks) family below — every SDK exposes the same module names and method shapes.

<!-- END: GETTING_STARTED -->

<!-- BEGIN: AUTH_AND_CONFIG -->

## Authentication & configuration

Both surfaces share the same configuration shape. The only difference is the **default base URL**: the API surface points at `https://api.norbix.ai`, the Hub surface points at `https://hub.norbix.ai`.

### Auth modes

The SDK supports two auth modes. Both are sent as `Authorization: Bearer <token>`. If both are configured, the JWT wins. With neither configured, the SDK throws `NORBIX_NOT_AUTHENTICATED` on the first call.

| Mode           | When to use                                    | How                                                                           |
| -------------- | ---------------------------------------------- | ----------------------------------------------------------------------------- |
| **API key**    | Server-to-server, scripts, scheduled jobs, IaC | `apiKey: '...'` or `NORBIX_API_KEY` env                                       |
| **JWT bearer** | Logged-in user session                         | `bearerToken: '...'`, `NORBIX_BEARER_TOKEN` env, or `await norbix.login(...)` |

```ts
// Service mode — long-lived API key
const norbix = new Norbix({ apiKey: '<api_key>', projectId: 'proj_123' });

// User mode — exchange credentials for a JWT
const norbix = new Norbix({ projectId: 'proj_123' });
await norbix.login({ userName: 'alice@team.io', password: 'secret' });
```

### Default base URLs

When you install the package, no base URL is required — the SDK points at Norbix Cloud by default.

| Surface          | Default base URL        |
| ---------------- | ----------------------- |
| **`norbix.api`** | `https://api.norbix.ai` |
| **`norbix.hub`** | `https://hub.norbix.ai` |

### Overriding the base URL

Override the base URL when you self-host Norbix on your own infrastructure or run it locally. Pass it as a constructor option, or set the corresponding env var. Two real-world examples:

```ts
// Self-hosted on your company domain
const norbix = new Norbix({
  apiKey: process.env.NORBIX_API_KEY,
  projectId: 'proj_123',
  apiBaseUrl: 'https://api.norbix.isidos.lt',
  hubBaseUrl: 'https://hub.norbix.isidos.lt',
});

// Local development against a Norbix instance on localhost
const norbix = new Norbix({
  apiKey: 'sk_dev_local',
  projectId: 'proj_dev',
  apiBaseUrl: 'http://localhost:5000',
  hubBaseUrl: 'http://localhost:5001',
});
```

Or via environment variables (no code change required):

```sh
NORBIX_API_KEY=sk_live_...
NORBIX_PROJECT_ID=proj_123
NORBIX_ACCOUNT_ID=acc_456            # optional, unlocks Hub account-scoped endpoints
NORBIX_REGION=nb-eu-germany          # optional, pins requests to a Norbix region (see Regions)
NORBIX_API_URL=https://api.norbix.ai            # override for self-hosted, e.g. https://api.norbix.isidos.lt
NORBIX_HUB_URL=https://hub.norbix.ai            # override for self-hosted, e.g. https://hub.norbix.isidos.lt
```

```ts
const norbix = new Norbix(); // reads everything from env, including the overridden URLs
```

The SDK does **not** load `.env` files itself — use `node --env-file=.env` (Node 20+) or `import 'dotenv/config'` in your app's bootstrap. In the browser (where `process` doesn't exist) env loading is a silent no-op.

### Regions

Norbix Cloud is multi-region. A region is identified by a **region code** such as `nb-eu-germany`, and the SDK lets you pin requests to one in three ways — constructor option, environment variable, or at runtime:

```ts
// 1. Constructor option
const norbix = new Norbix({
  apiKey: process.env.NORBIX_API_KEY,
  projectId: 'proj_123',
  region: 'nb-eu-germany',
});

// 2. NORBIX_REGION env var — picked up when the option is not set
//    NORBIX_REGION=nb-eu-germany
const norbix = new Norbix();

// 3. Switch at runtime
norbix.setRegion('nb-us-east');
norbix.getRegion(); // 'nb-us-east'
norbix.setRegion(undefined); // clear — back to no region
```

And a fourth way: every endpoint method accepts a per-call `region` override on its second argument, just like `bearerToken` and `timeoutMs`:

```ts
await norbix.api.database.find(
  { collectionName: 'orders' },
  { region: 'nb-us-east' },
);

await norbix.hub.account.getProjects({}, { region: 'nb-us-east' });
```

**How a region affects the request.** The resolved region (per-call override → client `region` → `NORBIX_REGION`) is sent as the `nb-region` header. There is **no default region** — when nothing is set, no header is sent and the backend routes to the project's primary region. Self-hosted deployments are unaffected: no region configured means requests are byte-identical to the pre-regions behavior.

**Regional base URLs.** When the client uses the SDK's built-in default base URLs, setting a client-level region also composes the regional URL by prefixing the region code as a subdomain — `https://api.norbix.dev` becomes `https://nb-eu-germany.api.norbix.dev` (and likewise for the Hub URL). `setRegion(...)` re-composes the URL, and `setRegion(undefined)` restores the defaults. Two rules to remember:

- A custom `baseUrl` (or `NORBIX_API_URL` / `NORBIX_HUB_URL`) is **never rewritten** — with a region set, only the `nb-region` header is added.
- A **per-call** `region` override affects the **header only** — it never changes the request URL.

**Managing a project's regions.** The Hub's `regions` module lists the regions available to the account and updates the set of regions a project spans (one primary + any additional):

```ts
// List available regions — each item carries { id, continent, name }
const { items } = await norbix.hub.regions.list();

// Change the project's primary region / the regions it spans
await norbix.hub.regions.updateProjectRegions({
  projectId: 'proj_123',
  primaryRegion: 'nb-eu-germany',
  additionalRegions: ['nb-us-east'],
});
```

`hub.account.createProject` accepts the same `primaryRegion` / `additionalRegions` fields, project DTOs report `primaryRegion`, `additionalRegions`, and the combined `regions[]`, and the `echo` endpoint lists the regions a deployment exposes with their regional endpoints. Full reference: [`docs/hub/regions.md`](./docs/hub/regions.md).

### SSR / multi-tenant safe usage

For per-request scoping (different bearer tokens per request), pass the token as a per-call override on the second argument instead of mutating a shared singleton with `setBearerToken(...)`:

```ts
await norbix.api.database.find(
  { collectionName: 'orders' },
  { bearerToken: requestUserToken, timeoutMs: 5_000 },
);
```

Every generated endpoint method accepts the same `{ bearerToken?, timeoutMs?, env?, region? }` options as its second argument.

> **Project vs account scope.** `projectId` is required by the API surface. `accountId` is required by the Hub surface for endpoints that act on the account (team invite, billing portal, account verify). Calling those without `accountId` throws `NORBIX_ACCOUNT_SCOPE_REQUIRED` _before_ the request leaves your machine.

<!-- END: AUTH_AND_CONFIG -->

<!-- BEGIN: MODULES -->

## Modules

The SDK is a thin client over the Norbix gateway. Every module below resolves to a typed namespace on the client _and_ an MCP tool group, so the same surface is reachable from code or from an agent. Per-module reference pages live in [`/docs`](./docs) and on [docs.norbix.ai](https://docs.norbix.ai).

### `norbix.api` — runtime, project-scoped

Default base URL: `https://api.norbix.ai`. **8 modules · 66 endpoints.**

| Module           | Purpose                                                                                       | Reference                                                |
| ---------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 🔐 `auth`        | Sign-in flows. Most apps prefer `norbix.login(...)`.                                          | [`docs/api/auth.md`](./docs/api/auth.md)                 |
| 👤 `membership`  | User CRUD, registration, login, passkeys, email verification, magic links, roles, preferences | [`docs/api/membership.md`](./docs/api/membership.md)     |
| 🗄️ `database`    | Collections, find/insert/update/delete, aggregate, taxonomies                                 | [`docs/api/database.md`](./docs/api/database.md)         |
| 📁 `files`       | Signed upload URLs, download, file info, listing                                              | [`docs/api/files.md`](./docs/api/files.md)               |
| 🤖 `chat`        | AI chat completion                                                                            | [`docs/api/chat.md`](./docs/api/chat.md)                 |
| 🔑 `apikeys`     | List + regenerate per-environment API keys                                                    | [`docs/api/apikeys.md`](./docs/api/apikeys.md)           |
| 🪪 `accessToken` | Refresh-token exchange                                                                        | [`docs/api/access_token.md`](./docs/api/access_token.md) |
| 🩺 `echo`        | Gateway smoke check                                                                           | [`docs/api/echo.md`](./docs/api/echo.md)                 |

> Email/push/SMS notifications, payments, and code execution are configured on the **Hub** surface and surfaced at runtime through integration triggers — they are not separate API modules. File storage now has its own `files` API module: it issues signed upload URLs so clients upload binary content directly to storage, never streaming bytes through the Norbix API.

→ [Full API index](./docs/api/_index.md)

### `norbix.hub` — control plane, configuration

Default base URL: `https://hub.norbix.ai`. **18 modules · 315 endpoints.**

| Module             | Purpose                                                                 | Reference                                                  |
| ------------------ | ----------------------------------------------------------------------- | ---------------------------------------------------------- |
| 🏢 `account`       | Account profile, status, projects, regions, team, billing, verification | [`docs/hub/account.md`](./docs/hub/account.md)             |
| 🌍 `regions`       | List available Norbix regions, update the regions a project spans       | [`docs/hub/regions.md`](./docs/hub/regions.md)             |
| 🗄️ `database`      | Schemas, integrations, saved aggregates, taxonomies, triggers           | [`docs/hub/database.md`](./docs/hub/database.md)           |
| 📁 `files`         | File-storage integrations, triggers, module settings                    | [`docs/hub/files.md`](./docs/hub/files.md)                 |
| 📧 `notifications` | Email, push & SMS templates, integrations, campaigns, contacts, devices | [`docs/hub/notifications.md`](./docs/hub/notifications.md) |
| 📨 `email`         | Email module switches                                                   | [`docs/hub/email.md`](./docs/hub/email.md)                 |
| 💳 `payments`      | Payment integrations, triggers, tests, module settings                  | [`docs/hub/payments.md`](./docs/hub/payments.md)           |
| 🤖 `ai`            | LLM and MCP integration configuration and tests                         | [`docs/hub/ai.md`](./docs/hub/ai.md)                       |
| 📊 `logs`          | Logging integrations and module settings                                | [`docs/hub/logs.md`](./docs/hub/logs.md)                   |
| 👥 `membership`    | Roles, policies, users, preferences, integrations, triggers             | [`docs/hub/membership.md`](./docs/hub/membership.md)       |
| ⏰ `scheduler`     | Scheduler module and task management                                    | [`docs/hub/scheduler.md`](./docs/hub/scheduler.md)         |
| 🪝 `webhooks`      | Webhook integrations, destinations, tests, module settings              | [`docs/hub/webhooks.md`](./docs/hub/webhooks.md)           |
| 🔐 `auth`          | Hub-side sign-in flows                                                  | [`docs/hub/auth.md`](./docs/hub/auth.md)                   |
| 🔑 `apikeys`       | List + regenerate Hub API keys                                          | [`docs/hub/apikeys.md`](./docs/hub/apikeys.md)             |
| 🪪 `accessToken`   | Refresh-token exchange                                                  | [`docs/hub/access_token.md`](./docs/hub/access_token.md)   |
| 🩺 `echo`          | Gateway smoke check                                                     | [`docs/hub/echo.md`](./docs/hub/echo.md)                   |
| 🛠️ `internal`      | Internal helpers                                                        | [`docs/hub/internal.md`](./docs/hub/internal.md)           |
| 📦 `resources`     | Resolve resource references                                             | [`docs/hub/resources.md`](./docs/hub/resources.md)         |

→ [Full Hub index](./docs/hub/_index.md)

<!-- END: MODULES -->

<!-- BEGIN: HUB_EXAMPLE -->

## Hub example

The Hub surface follows the same shape as the API surface — same constructor, same auth, same client. Use it from admin tooling, internal dashboards, or IaC scripts.

```ts
import { Norbix } from 'norbix';

const norbix = new Norbix({
  apiKey: process.env.NORBIX_API_KEY,
  accountId: 'acc_456',
});

// Define a database schema for a new collection
await norbix.hub.database.saveDatabaseSchema({
  collectionName: 'orders',
  fields: [
    { name: 'userId', type: 'string', required: true, indexed: true },
    { name: 'amount', type: 'integer', required: true },
    { name: 'currency', type: 'string', required: true },
    { name: 'status', type: 'string', required: true, enum: ['pending', 'paid', 'refunded'] },
    { name: 'createdAt', type: 'datetime', required: true },
  ],
});

// Invite a teammate
await norbix.hub.account.sendInviteToTeamMember({
  email: 'maya@team.io',
  role: 'developer',
});
```

<!-- END: HUB_EXAMPLE -->

<!-- BEGIN: MCP -->

## Norbix MCP — same modules, agent-native

Norbix ships an MCP (Model Context Protocol) server that exposes every API and Hub module as agent-callable tools. Same surface as this SDK, just over a different transport — when you connect the Norbix MCP to your IDE, the agent in your editor can read your project, run scripts, and call Norbix the same way your app does.

**What it gives you:**

- **Total SDK & API knowledge.** The Norbix MCP knows every module, every method, every request/response type — across _all_ Norbix SDKs (TypeScript, .NET, Python, Dart, Kotlin, Swift) and the underlying gateway. Ask "how do I send a templated email from the .NET SDK?" in your IDE chat and the agent answers from the same source the docs are generated from.
- **Code-aware actions.** Connect it to your repo and the agent can update project constants, regenerate types after a Hub schema change, scaffold a new module integration, run a Norbix CLI command, or open a PR — without leaving the chat. Run a script or talk to it; same surface, two interaction modes.
- **Drop-in IDE setup.** One config block in your IDE's MCP settings and you're done. The MCP server runs locally and proxies to your Cloud / self-hosted / enterprise Norbix instance using the same `NORBIX_API_URL` / `NORBIX_HUB_URL` env vars as the SDK.

**Setup in your IDE:**

| IDE                    | Setup guide                                                                      |
| ---------------------- | -------------------------------------------------------------------------------- |
| **Claude Code**        | [`docs.norbix.ai/mcp/claude-code`](https://docs.norbix.ai/mcp/claude-code)       |
| **Cursor**             | [`docs.norbix.ai/mcp/cursor`](https://docs.norbix.ai/mcp/cursor)                 |
| **Windsurf**           | [`docs.norbix.ai/mcp/windsurf`](https://docs.norbix.ai/mcp/windsurf)             |
| **Codex**              | [`docs.norbix.ai/mcp/codex`](https://docs.norbix.ai/mcp/codex)                   |
| **Claude Desktop**     | [`docs.norbix.ai/mcp/claude-desktop`](https://docs.norbix.ai/mcp/claude-desktop) |
| **VS Code (Continue)** | [`docs.norbix.ai/mcp/vscode`](https://docs.norbix.ai/mcp/vscode)                 |
| **Zed**                | [`docs.norbix.ai/mcp/zed`](https://docs.norbix.ai/mcp/zed)                       |

→ [Full MCP documentation](https://docs.norbix.ai/mcp) · [Why MCP?](https://docs.norbix.ai/mcp/why) · [Self-hosted MCP](https://docs.norbix.ai/mcp/self-hosted)

<!-- END: MCP -->

<!-- BEGIN: SDK_FAMILY -->

## Norbix SDKs

Same modules, same method shapes, every language. Each row links to the repo for that language. Package shape varies per language ecosystem norm — TypeScript, Python, Dart, and Kotlin ship a single package; .NET and Swift ship two surfaces (NuGet packages / SwiftPM library products) inside one repo.

| Language          | Package                                   | Repo                                                                    | Status         |
| ----------------- | ----------------------------------------- | ----------------------------------------------------------------------- | -------------- |
| TypeScript / Node | `norbix`                                  | [norbix-code/sdk-ts](https://github.com/norbix-code/sdk-ts)         | ✅ Stable      |
| .NET              | `Norbix.Api` + `Norbix.Hub`               | [norbix-dev/norbix-net](https://github.com/norbix-dev/norbix-net)       | ✅ Stable      |
| Python            | `norbix`                                  | [norbix-dev/norbix-python](https://github.com/norbix-dev/norbix-python) | 🚧 In progress |
| Dart / Flutter    | `norbix`                                  | [norbix-dev/norbix-dart](https://github.com/norbix-dev/norbix-dart)     | 🚧 In progress |
| Kotlin            | `dev.norbix:norbix`                       | [norbix-dev/norbix-kotlin](https://github.com/norbix-dev/norbix-kotlin) | 🚧 In progress |
| Swift             | `Norbix` (libs: `NorbixApi`, `NorbixHub`) | [norbix-dev/norbix-swift](https://github.com/norbix-dev/norbix-swift)   | 🚧 In progress |

<!-- END: SDK_FAMILY -->

<!-- BEGIN: INSTALL_NORBIX -->

## Install Norbix

Three ways to run the backend this SDK talks to. Pick by who owns the infrastructure and how strict the compliance bar is.

### A. Try it on Norbix Cloud — fastest

Zero DevOps. Spin up a managed project on [`cloud.norbix.ai`](https://cloud.norbix.ai), grab an API key, point the SDK at it. The default base URLs (`https://api.norbix.ai` and `https://hub.norbix.ai`) already point at Cloud — no override needed. **7-day free trial, no credit card.**

```sh
# 1. Sign up at https://cloud.norbix.ai
# 2. Create a project, copy the API key + project ID
export NORBIX_API_KEY=sk_live_...
export NORBIX_PROJECT_ID=proj_...
# 3. Run any of the examples above. You're done.
```

→ [Sign up](https://cloud.norbix.ai) · [Cloud docs](https://docs.norbix.ai/cloud)

### B. Self-host on your machine or your server

Run Norbix on Docker, Kamal, Terraform, AWS CDK, Kubernetes, DigitalOcean, a VPS, or bare metal. Issue a license from the Cloud Dashboard, then deploy with one command. Override the SDK's base URL to point at your deployment.

**1. Get a self-hosted license.** Sign in at [`cloud.norbix.ai`](https://cloud.norbix.ai), open the Self-Hosted tab, generate a license key.

**2. Deploy.** Build your install in the Cloud Dashboard's installer UI **or** clone the install repo:

```sh
# Quickest — Docker Compose
git clone https://github.com/norbix-code/install
cd install/docker-compose
NORBIX_LICENSE_KEY=lic_... docker compose up -d
# Norbix is up at http://localhost:5000 (API) and http://localhost:5001 (Hub) by default
```

**Other deployment paths** (each in a sibling folder of the install repo):

| Method              | Folder            | Best for                        |
| ------------------- | ----------------- | ------------------------------- |
| 🐳 Docker           | `docker-compose/` | Local dev, single VM            |
| 🚢 Kamal            | `kamal/`          | One-server deploys, Rails-style |
| 🏗️ Terraform        | `terraform/`      | Multi-cloud IaC                 |
| ☁️ AWS CDK          | `aws-cdk/`        | AWS-native                      |
| ⎈ Kubernetes        | `kubernetes/`     | k3s / k8s at scale              |
| 🌊 DigitalOcean     | `digitalocean/`   | Droplets + DO Kubernetes        |
| 🖥️ VPS / bare metal | `vps/`            | Any provider, total control     |
| 🏢 On-premises      | `on-prem/`        | Air-gapped or private DC        |

**3. Point the SDK at it.** Two patterns — pick whichever fits.

```sh
# Local development on your machine
export NORBIX_API_URL=http://localhost:5000
export NORBIX_HUB_URL=http://localhost:5001
```

```sh
# Self-hosted on your company's domain
export NORBIX_API_URL=https://api.norbix.isidos.lt
export NORBIX_HUB_URL=https://hub.norbix.isidos.lt
```

→ [Install repo](https://github.com/norbix-code/install) · [Self-host docs](https://docs.norbix.ai/self-hosted)

### C. Enterprise — your cloud, your compliance

Run Norbix in your VPC or dedicated infrastructure. SOC2-ready, GDPR/HIPAA-compatible, full audit trails, custom SLA, dedicated support, deployment review with the Norbix team. Same APIs as Cloud and Self-Hosted — just behind your perimeter. Override the SDK's base URL to your private endpoint.

→ [Contact sales](https://norbix.ai/enterprise) · [Enterprise docs](https://docs.norbix.ai/enterprise)

<!-- END: INSTALL_NORBIX -->

<!-- BEGIN: ERROR_HANDLING -->

## Error handling

```ts
import { NorbixError } from 'norbix';

try {
  await norbix.api.database.find({ collectionName: 'orders' });
} catch (err) {
  if (err instanceof NorbixError) {
    console.log(err.status, err.code, err.fieldErrors);
  }
  throw err;
}
```

| Code                            | Meaning                                                           |
| ------------------------------- | ----------------------------------------------------------------- |
| `NORBIX_NOT_AUTHENTICATED`      | No `apiKey`, `bearerToken`, or env var, and `login()` not called. |
| `NORBIX_ACCOUNT_SCOPE_REQUIRED` | Account-scoped Hub endpoint called without `accountId`.           |
| `NORBIX_MISSING_PATH_PARAM`     | A `{token}` in the route was not provided on the request.         |
| `NORBIX_NETWORK_ERROR`          | Fetch failed (network, CORS, timeout).                            |

<!-- END: ERROR_HANDLING -->

<!-- BEGIN: COMMUNITY_AND_SUPPORT -->

## Community & support

- [**Documentation**](https://docs.norbix.ai). Best for: building, integrating, and reference.
- [**GitHub Discussions**](https://github.com/norbix-code/sdk-ts/discussions). Best for: technical Q&A, feature requests, sharing what you built.
- [**GitHub Issues**](https://github.com/norbix-code/sdk-ts/issues). Best for: bugs and reproducible errors in this SDK.
- [**Discord**](https://norbix.ai/discord). Best for: real-time chat with the team and the community.
- [**Email support**](mailto:support@norbix.ai). Best for: account, billing, and infrastructure issues that aren't public.
<!-- END: COMMUNITY_AND_SUPPORT -->

<!-- BEGIN: RESOURCES -->

## Resources

[Website](https://norbix.ai) · [Cloud Dashboard](https://cloud.norbix.ai) · [Docs](https://docs.norbix.ai) · [API](https://api.norbix.ai) · [Hub](https://hub.norbix.ai) · [MCP](https://docs.norbix.ai/mcp) · [Blog](https://norbix.ai/blog) · [Discord](https://norbix.ai/discord) · [X](https://x.com/norbix) · [YouTube](https://www.youtube.com/@norbix) · [LinkedIn](https://www.linkedin.com/company/norbix)

<!-- END: RESOURCES -->

<!-- BEGIN: DEVELOPMENT -->

## Development

```sh
npm install
npm run lint
npm run typecheck
npm test
npm run build
```

Conventional commits are required. Use `npm run commit` for a guided flow. Pushes to `main` are released to npm by [semantic-release](https://github.com/semantic-release/semantic-release) with provenance enabled. `next` and `beta` branches publish prereleases.

The SDK module classes (`src/api/*`, `src/hub/*`), their tests, and per-module docs are generated from the gateway DTOs by an internal maintenance workflow. Generated artifacts are committed to git and consumed by CI as-is — CI never regenerates. The generation scripts themselves are dev-only and gitignored (see `.gitignore`).

<!-- END: DEVELOPMENT -->

<!-- BEGIN: SECURITY -->

## Security

Found something? Don't open a public issue. See [`SECURITY.md`](./SECURITY.md) and email `security@norbix.ai`. We respond within one business day.

<!-- END: SECURITY -->

<!-- BEGIN: CONTRIBUTING -->

## Contributing

Issues, PRs, and design partners welcome. Start with [`CONTRIBUTING.md`](./CONTRIBUTING.md) for branching, local dev, and how to add a module. Bigger ideas land in [Discussions](https://github.com/norbix-code/sdk-ts/discussions) before they land in code.

<!-- END: CONTRIBUTING -->

<!-- BEGIN: LICENSE -->

## License

[MIT](./LICENSE) © Norbix

<!-- END: LICENSE -->

## <!-- BEGIN: FOOTER -->

<p align="center">
  <a href="https://norbix.ai"><img src="https://norbix.ai/brand/wordmark.svg" alt="Norbix" height="32" /></a>
</p>
<p align="center"><em>The MCP-native Backend-as-a-Service for the agentic era.</em></p>
<p align="center">
  <a href="https://norbix.ai">norbix.ai</a> ·
  <a href="https://cloud.norbix.ai">cloud.norbix.ai</a> ·
  <a href="https://docs.norbix.ai">docs.norbix.ai</a> ·
  <a href="https://docs.norbix.ai/mcp">MCP</a> ·
  <a href="https://norbix.ai/discord">Discord</a> ·
  <a href="https://x.com/norbix">X</a> ·
  <a href="https://www.youtube.com/@norbix">YouTube</a>
</p>

<p align="center">
  <a href="https://github.com/norbix-code/sdk-ts/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=norbix-code/sdk-ts" alt="Contributors" width="600" />
  </a>
</p>
<!-- END: FOOTER -->
