# Webhook receiver (`@norbix.ai/ts/webhooks`)

Handle **inbound** Norbix webhook deliveries at your HTTP endpoint. This is the
subscriber side — distinct from `hub.webhooks.*`, which configures destinations
via the Hub API.

## Install

```bash
npm install @norbix.ai/ts
```

## Quick start

```ts
import type { CodeMashHub2 } from '@norbix.ai/ts/types/hub';
import { NorbixWebhookReceiver, NorbixWebhookEvents } from '@norbix.ai/ts/webhooks';

// No options → reads NORBIX_WEBHOOK_SIGNING_SECRET (and friends) from env.
const receiver = new NorbixWebhookReceiver();

// Typed: the FIRST arg IS the payload. Metadata lives on `event`.
receiver.on<CodeMashHub2.UserDto>(
  NorbixWebhookEvents.Membership.UserRegistered,
  (user, event) => {
    user.email ?? user.userName;   // UserDto, directly
    event.metadata.user?.id;       // wrapper id moved onto metadata
  },
);

// Database insert — pass your document type; payload is the document.
receiver.on<CodeMashHub2.UserDto>(
  NorbixWebhookEvents.Database.RecordInserted,
  (record, event) => {
    record.email;                  // the document
    event.metadata.schema?.id;     // schema info on metadata
  },
);

await receiver.handle({ rawBody: req.rawBody, headers: req.headers });
```

## Configuration

`new NorbixWebhookReceiver(options?)` reads these env vars; any option you pass
overrides the matching env var.

| Env var | Option | Default |
|---------|--------|---------|
| `NORBIX_WEBHOOK_SIGNING_SECRET` | `secret` | — (verify skipped if unset) |
| `NORBIX_WEBHOOK_TOLERANCE_SECONDS` | `toleranceSeconds` | `300` |
| `NORBIX_PROJECT_ID` | `projectId` (guard) | — |
| `NORBIX_ACCOUNT_ID` | `accountId` (guard) | — |

When `projectId` / `accountId` are set, a delivery whose envelope does not match
is rejected with `NorbixWebhookSignatureError`. In the browser (no `process`),
env reading is skipped — pass options explicitly.

## Handler shapes

Two methods, picked by whether you want typing:

```ts
// Typed: on<T>(name, (payload, event) => ...)  — recommended
receiver.on<CodeMashHub2.UserDto>(NorbixWebhookEvents.Membership.UserVerified,
  (user, event) => user.status);

// Raw: onRaw(name, (envelope, ctx) => ...)  — escape hatch, extract yourself
receiver.onRaw(NorbixWebhookEvents.Files.FileUploaded,
  (envelope, ctx) => envelope.data);

// One handler for many events (skips events already handled):
receiver.onEach(NORBIX_WEBHOOK_EVENT_NAMES, typedHandler);
receiver.onEachRaw(NORBIX_WEBHOOK_EVENT_NAMES, rawHandler);
```

## Typed payloads — `from`/`to` only when you must compare

The payload differs by trigger kind. Create, delete, and single-property state
flips give the **entity directly** — the event name is already the diff. Only an
arbitrary mutation gives `{ from, to }`.

| Event | Kind | First handler arg (`payload`) |
|-------|------|-------------------------------|
| `membership.user.registered` | entity | `UserDto` |
| `membership.user.verified` / `blocked` / `reactivated` | entity (state flip) | `UserDto` |
| `membership.user.deleted` | entity | `UserDto` |
| `membership.user.updated` | mutation | `{ from: UserDto; to: UserDto }` |
| `database.record.inserted` / `deleted` | entity | `T` (your document) |
| `database.record.updated` / `replaced` | mutation | `{ from: T; to: T }` |
| `database.records.inserted` | batch | `T[]` |
| `files.file.uploaded` | entity | `FileResourceRefDto` |

Wrapper identifiers (entity id, schema, record ids) are lifted onto
`event.metadata` (`event.metadata.user`, `event.metadata.schema`,
`event.metadata.record`, `event.metadata.records`). Use `NorbixWebhookPayload<E>`
for manual typing outside `receiver.on`.

## Triggers → webhooks

Project triggers (database, membership, files, payments, …) can include a
`WebhookCall` action. When the trigger fires, Norbix POSTs a signed JSON
envelope to every destination subscribed to that event name.

Envelope shape:

```json
{
  "id": "<deliveryId>",
  "event": "database.record.inserted",
  "createdOn": "2026-01-01T00:00:00Z",
  "accountId": "acc_…",
  "projectId": "pr_…",
  "triggerId": "trg_…",
  "data": { }
}
```

## Signature verification

Norbix sends these headers on every delivery (see gateway
`WebhookDeliveryClient`). These are **not** the same as inbound API headers
like `norbix-account-id` / `norbix-project-id` from `AuthStatics` (studio →
gateway auth).

| Header | Purpose |
|--------|---------|
| `X-Norbix-Event` | Logical event name (matches `envelope.event`) |
| `X-Norbix-Delivery` | Stable delivery id (same as `envelope.id`) |
| `Idempotency-Key` | Same value as `X-Norbix-Delivery` (IETF dedup hint) |
| `X-Norbix-Account` | Account view id |
| `X-Norbix-Project` | Project view id |
| `X-Norbix-Integration` | Webhook integration view id |
| `X-Norbix-Destination` | Destination view id that received this attempt |
| `X-Norbix-Signature` | `sha256=<hex>` HMAC-SHA256 of `"<timestamp>.<rawBody>"` |
| `X-Norbix-Timestamp` | Unix epoch seconds (replay window) |

Use the project signing secret (`hub.webhooks.revealWebhookIntegrationSecret()`),
or set `NORBIX_WEBHOOK_SIGNING_SECRET`. When no secret is configured,
verification is skipped.

## API

| Export | Description |
|--------|-------------|
| `NorbixWebhookReceiver` | Register handlers + `handle()`; reads env config |
| `NorbixWebhookEvents` | Named event constants (use instead of raw strings) |
| `receiver.on<T>(name, (payload, event))` | Typed handler — payload first |
| `receiver.onRaw(name, (envelope, ctx))` | Raw handler — escape hatch |
| `receiver.onEach` / `onEachRaw` | Register one handler for many events |
| `receiver.onDefault(handler)` | Raw fallback for unhandled events |
| `normalizeNorbixWebhook(envelope)` | Envelope → `{ payload, metadata }` |
| `verifyNorbixWebhookSignature()` | Low-level verify |
| `parseNorbixWebhookEnvelope()` | Parse JSON body |
| `parseNorbixWebhookHeaders()` | Read delivery headers |
| `NORBIX_WEBHOOK_EVENT_NAMES` | Closed catalog of event names |
| `NORBIX_WEBHOOK_HEADERS` | Header name constants |
| `NorbixWebhookPayloadMap` | Event name → normalised payload type |
| `NorbixWebhookPayload<E>` | Resolve payload type for event `E` |
| `NorbixWebhookEvent` | Typed metadata object (2nd handler arg) |

Errors: `NorbixWebhookSignatureError`, `NorbixWebhookParseError`.
