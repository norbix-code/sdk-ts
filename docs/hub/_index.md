# Hub reference

[← Back to docs index](../README.md) · [↑ Back to project README](../../README.md)

Project & account configuration: schemas, integrations, team management, billing, observability.

**497 endpoints across 24 modules.** Click a module
name for the full method reference and TypeScript examples.

| Module                                | Endpoints | Description                                                                                                                              |
| ------------------------------------- | --------: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [`accessToken`](./access_token.md)    |         1 | Refresh-token exchange to get a new bearer token.                                                                                        |
| [`account`](./account.md)             |        93 | Account profile, status, verification, team invites, and Stripe billing portal. Most write endpoints require `accountId` on the client.  |
| [`ai`](./ai.md)                       |        14 |                                                                                                                                          |
| [`apikeys`](./apikeys.md)             |         2 | List and regenerate per-environment API keys for service auth.                                                                           |
| [`auth`](./auth.md)                   |         1 | Sign-in / sign-out and federated provider flows. Most apps prefer `norbix.login(...)` over calling these directly.                       |
| [`code`](./code.md)                   |        33 |                                                                                                                                          |
| [`compliance`](./compliance.md)       |        18 |                                                                                                                                          |
| [`database`](./database.md)           |        72 | Database schemas, integrations, triggers, taxonomies, and module on/off switches. For data-level CRUD on collections see `api.database`. |
| [`diagnostics`](./diagnostics.md)     |         7 |                                                                                                                                          |
| [`echo`](./echo.md)                   |         1 | Echo helpers used by the gateway smoke checks.                                                                                           |
| [`email`](./email.md)                 |         1 |                                                                                                                                          |
| [`files`](./files.md)                 |        18 | File storage integrations and triggers. Upload + download is in `api.database` (FileResource fields).                                    |
| [`internal`](./internal.md)           |         1 |                                                                                                                                          |
| [`licensing`](./licensing.md)         |         3 |                                                                                                                                          |
| [`logs`](./logs.md)                   |        14 | Logging integrations and module on/off switches.                                                                                         |
| [`membership`](./membership.md)       |        44 | Roles, policies, and user preferences (Hub side). For user CRUD and registration see `api.membership`.                                   |
| [`notifications`](./notifications.md) |       125 | Email and push templates, integrations, campaigns, devices, signatures, footers, and one-click unsubscribe.                              |
| [`payments`](./payments.md)           |        17 | Payment provider integrations and triggers (Stripe, etc.).                                                                               |
| [`projects`](./projects.md)           |         5 |                                                                                                                                          |
| [`public`](./public.md)               |         2 |                                                                                                                                          |
| [`resources`](./resources.md)         |         1 |                                                                                                                                          |
| [`scheduler`](./scheduler.md)         |         8 |                                                                                                                                          |
| [`support`](./support.md)             |         7 |                                                                                                                                          |
| [`webhooks`](./webhooks.md)           |         9 |                                                                                                                                          |
