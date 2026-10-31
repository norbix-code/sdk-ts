# API reference

[← Back to docs index](../README.md) · [↑ Back to project README](../../README.md)

Project-scoped data operations: database collections, users, AI chat, auth, API keys.

**192 endpoints across 13 modules.** Click a module
name for the full method reference and TypeScript examples.

| Module                                | Endpoints | Description                                                                                                                              |
| ------------------------------------- | --------: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [`accessToken`](./access_token.md)    |         1 | Refresh-token exchange to get a new bearer token.                                                                                        |
| [`ai`](./ai.md)                       |        18 |                                                                                                                                          |
| [`apikeys`](./apikeys.md)             |         2 | List and regenerate per-environment API keys for service auth.                                                                           |
| [`auth`](./auth.md)                   |         1 | Sign-in / sign-out and federated provider flows. Most apps prefer `norbix.login(...)` over calling these directly.                       |
| [`code`](./code.md)                   |        10 |                                                                                                                                          |
| [`database`](./database.md)           |        28 | Database schemas, integrations, triggers, taxonomies, and module on/off switches. For data-level CRUD on collections see `api.database`. |
| [`echo`](./echo.md)                   |         1 | Echo helpers used by the gateway smoke checks.                                                                                           |
| [`files`](./files.md)                 |        20 | File storage integrations and triggers. Upload + download is in `api.database` (FileResource fields).                                    |
| [`logs`](./logs.md)                   |         1 | Logging integrations and module on/off switches.                                                                                         |
| [`membership`](./membership.md)       |        55 | Roles, policies, and user preferences (Hub side). For user CRUD and registration see `api.membership`.                                   |
| [`notifications`](./notifications.md) |        48 | Email and push templates, integrations, campaigns, devices, signatures, footers, and one-click unsubscribe.                              |
| [`payments`](./payments.md)           |         4 | Payment provider integrations and triggers (Stripe, etc.).                                                                               |
| [`public`](./public.md)               |         3 |                                                                                                                                          |
