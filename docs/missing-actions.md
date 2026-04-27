# Endpoint coverage audit for `@norbix/ts`

[← Back to docs index](./README.md) · [↑ Back to project README](../README.md)

> Audit date: 2026-04-27. This document was refreshed after updating `api2.dtos.ts` and `hub2.dtos.ts` and running `npm run generate-endpoints`.

> **File upload remains out of scope by design.** The SDK exposes file metadata and references through regular DTO endpoints. Raw binary upload/download flows are intentionally handled outside the generated endpoint client.

## Current Coverage

The regenerated SDK now exposes all contract endpoints available from:

| Gateway | Project references checked | Generated SDK surface |
| --- | --- | --- |
| Community API | `Gateway.Api.AI`, `Gateway.Api.Database`, `Gateway.Api.Membership`, API auth/access-token/API-key/echo contracts | 42 endpoints across 7 modules |
| Community Hub | Account, Database, Code, Emails, Files, Logs, Membership, Payments, Push, AI, Triggers, Webhook, Scheduler, auth/access-token/API-key/echo contracts | 248 endpoints across 16 modules |

The old DTO-refresh gaps are closed:

| Area from old audit | Current status |
| --- | --- |
| Database records | Covered by `norbix.api.database`: `find`, `findOne`, `count`, `distinct`, `insertOne`, `insertMany`, `updateOne`, `updateMany`, `replaceOne`, `deleteOne`, `deleteMany`, `aggregate`, `executeAggregate`. |
| Database taxonomies | Covered by `norbix.api.database.findTerms` and `findTermsChildren`. |
| AI chat | Covered by `norbix.api.chat.askChat` and Hub AI configuration endpoints under `norbix.hub.ai`. |
| Auth | Covered by high-level `norbix.login(...)` plus generated `norbix.api.auth.authenticate(...)`. Generated `/auth` routes are unauthenticated. |
| Hub admin/configuration | Covered by generated Hub modules including `account`, `database`, `email`, `files`, `logs`, `membership`, `notifications`, `payments`, `scheduler`, and `webhooks`. |
| Per-call bearer token | Covered. Every generated endpoint now accepts a second `{ bearerToken?, timeoutMs? }` options argument. |

Example per-request token override:

```ts
await norbix.api.database.find(
  { collectionName: 'orders' },
  { bearerToken: requestUserToken },
);
```

## Remaining Non-generated Work

These are not visible in the DTO contracts, so the endpoint generator cannot discover them:

| Area | Status |
| --- | --- |
| Real-time / Server Events | `ConfigureServerEvents` is enabled in both Community API and Hub hosts, but EventSource/SSE subscription helpers are not emitted by metadata. Add a hand-written module only once the public stream URL and auth/token flow are finalized. |
| Cluster routing | No current generated endpoint requires a legacy `cluster` parameter. The old gateway comment mentions cluster/database key routing, but there is no active SDK contract to implement yet. |

## Verification

Run the full verification loop after DTO changes:

```bash
cd /Users/djovaisas/Projects/norbix/sdks/norbix-js
npm run generate-endpoints
npm run typecheck
npm test
```
