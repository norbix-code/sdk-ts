# API reference

[← Back to docs index](../README.md) · [↑ Back to project README](../../README.md)

Project-scoped data operations: database collections, users, AI chat, auth, API keys.

**42 endpoints across 7 modules.** Click a module
name for the full method reference and TypeScript examples.

| Module | Endpoints | Description |
| --- | ---: | --- |
| [`accessToken`](./access_token.md) | 1 | Refresh-token exchange to get a new bearer token. |
| [`apikeys`](./apikeys.md) | 2 | List and regenerate per-environment API keys for service auth. |
| [`auth`](./auth.md) | 1 | Sign-in / sign-out and federated provider flows. Most apps prefer `norbix.login(...)` over calling these directly. |
| [`chat`](./chat.md) | 1 |  |
| [`database`](./database.md) | 18 | Database schemas, integrations, triggers, taxonomies, and module on/off switches. For data-level CRUD on collections see `api.database`. |
| [`echo`](./echo.md) | 1 | Echo helpers used by the gateway smoke checks. |
| [`membership`](./membership.md) | 18 | Roles, policies, and user preferences (Hub side). For user CRUD and registration see `api.membership`. |
