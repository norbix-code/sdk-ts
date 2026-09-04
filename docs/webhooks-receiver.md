# Webhook receiver (`@norbix.ai/ts/webhooks`)

Handle **inbound** Norbix webhook deliveries at your HTTP endpoint. This is the
subscriber side — distinct from `hub.webhooks.*`, which configures destinations
via the Hub API.

## Install

```bash
npm install @norbix.ai/ts
```

## Quick start

Two methods: **`on`** for typed per-event logic, **`onAll`** to catch every
delivery (logging, metrics, debug). `onAll` runs even when `on` is already
registered for the same event.

```ts
import type { CodeMashHub2 } from '@norbix.ai/ts/types/hub';
import {
  NORBIX_WEBHOOK_EVENT_NAMES,
  NorbixWebhookEvents,
  NorbixWebhookReceiver,
} from '@norbix.ai/ts/webhooks';

const receiver = new NorbixWebhookReceiver(); // reads env — see Configuration

// Typed handler for one event — first arg IS the payload.
receiver.on<CodeMashHub2.UserDto>(NorbixWebhookEvents.Membership.UserRegistered, (user, event) => {
  console.log('registered', user.email ?? user.userName, event.metadata.user?.id);
});

// Catch every catalog event — runs in addition to `on` above.
receiver.onAll(NORBIX_WEBHOOK_EVENT_NAMES, (e) => console.log(e));

// In your HTTP route (Express, Ts.ED, etc.):
const result = await receiver.handle({ rawBody: req.rawBody, headers: req.headers });
// → { received: true, event, deliveryId, verified, handled, triggerId }
```

## Catching events

### `on(event, handler)` — typed, per event

Use `NorbixWebhookEvents` for autocomplete instead of raw strings.

```ts
import { NorbixWebhookEvents } from '@norbix.ai/ts/webhooks';

// Membership — payload is UserDto (or { from, to } for UserUpdated)
receiver.on(NorbixWebhookEvents.Membership.UserRegistered, (user, event) => {
  /* … */
});
receiver.on(NorbixWebhookEvents.Membership.UserUpdated, ({ from, to }, event) => {
  /* … */
});

// Database — pass your document type as the generic
receiver.on<MyDoc>(NorbixWebhookEvents.Database.RecordInserted, (record, event) => {
  record.title;
  event.metadata.schema?.id;
});

// Files
receiver.on(NorbixWebhookEvents.Files.FileUploaded, (file, event) => {
  /* … */
});
```

Handler signature: `(payload, event) => void | Promise<void>`.

- **`payload`** — normalised data (entity, `{ from, to }` mutation, or batch array).
- **`event`** — delivery metadata (`deliveryId`, `triggerId`, `verified`, `metadata`, `raw` envelope).

### `onAll(events, handler)` — catch-all

Raw handler for many events at once. Always invoked **after** any matching `on`
handler. Signature: `(envelope, ctx) => void | Promise<void>`.

```ts
import { NORBIX_WEBHOOK_EVENT_NAMES } from '@norbix.ai/ts/webhooks';

// Log every delivery
receiver.onAll(NORBIX_WEBHOOK_EVENT_NAMES, (e) => console.log(e));

// Or use ctx for headers / verify status
receiver.onAll(NORBIX_WEBHOOK_EVENT_NAMES, (e, ctx) => {
  console.log(e.event, e.id, ctx.verified);
});
```

Pass `NORBIX_WEBHOOK_EVENT_NAMES` to subscribe to the full Norbix catalog, or a
subset:

```ts
receiver.onAll(
  [NorbixWebhookEvents.Membership.UserRegistered, NorbixWebhookEvents.Membership.UserDeleted],
  (e) => console.log(e),
);
```

### Event name reference

| Group      | Constants (`NorbixWebhookEvents.*`)                                                                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Database   | `Database.RecordInserted`, `RecordUpdated`, `RecordDeleted`, `RecordReplaced`, `RecordResponsibilityChanged`, `RecordsInserted`, `RecordsUpdated`, `RecordsDeleted` |
| Membership | `Membership.UserRegistered`, `UserInvited`, `UserVerified`, `UserUpdated`, `UserDeleted`, `UserBlocked`, `UserReactivated`                                          |
| Files      | `Files.FileUploaded`, `FileDeleted`                                                                                                                                 |

Full list: `NORBIX_WEBHOOK_EVENT_NAMES` · grouped: `NORBIX_WEBHOOK_EVENT_GROUPS`.

## Examples

A typical app wires four handlers: database insert, user registration, user
update (compare roles), and database update (compare a field like `status`).

Define your database document shape locally — Norbix does not generate it:

```ts
type Task = {
  id: string;
  title: string;
  status: 'open' | 'in_progress' | 'done';
};
```

```ts
import type { CodeMashHub2 } from '@norbix.ai/ts/types/hub';
import {
  NORBIX_WEBHOOK_EVENT_NAMES,
  NorbixWebhookEvents,
  NorbixWebhookReceiver,
} from '@norbix.ai/ts/webhooks';

const receiver = new NorbixWebhookReceiver();

// ── Database: record inserted ─────────────────────────────────────────────
// Payload IS the document. Schema / record ids are on event.metadata.
receiver.on<Task>(NorbixWebhookEvents.Database.RecordInserted, (task, event) => {
  console.log('task created', {
    recordId: event.metadata.record?.id,
    schema: event.metadata.schema?.name,
    title: task.title,
    status: task.status,
  });
});

// ── Membership: user registered ─────────────────────────────────────────────
// Payload IS the UserDto.
receiver.on<CodeMashHub2.UserDto>(NorbixWebhookEvents.Membership.UserRegistered, (user, event) => {
  console.log('user registered', {
    userId: event.metadata.user?.id ?? user.id,
    email: user.email ?? user.userName,
    roles: user.roles ?? [],
  });
});

// ── Membership: user updated — compare roles before / after ───────────────
// Payload is { from, to } — both sides are full UserDto snapshots.
receiver.on<CodeMashHub2.UserDto>(
  NorbixWebhookEvents.Membership.UserUpdated,
  ({ from, to }, event) => {
    const before = from.roles ?? [];
    const after = to.roles ?? [];
    const added = after.filter((r) => !before.includes(r));
    const removed = before.filter((r) => !after.includes(r));

    if (added.length || removed.length) {
      console.log('roles changed', {
        userId: event.metadata.user?.id,
        before,
        after,
        added,
        removed,
      });
    }
  },
);

// ── Database: record updated — compare status before / after ────────────────
// Same { from, to } mutation shape; `status` is your own document field.
receiver.on<Task>(NorbixWebhookEvents.Database.RecordUpdated, ({ from, to }, event) => {
  if (from.status === to.status) return;

  console.log('status changed', {
    recordId: event.metadata.record?.id,
    schema: event.metadata.schema?.name,
    from: from.status,
    to: to.status,
  });
});

// Optional: log every delivery (runs after the handlers above).
receiver.onAll(NORBIX_WEBHOOK_EVENT_NAMES, (e) => console.log(e));

// HTTP route
await receiver.handle({ rawBody: req.rawBody, headers: req.headers });
```

**Entity vs mutation recap**

| Event                       | What you receive               | Compare before / after      |
| --------------------------- | ------------------------------ | --------------------------- |
| `Database.RecordInserted`   | `task` (document)              | —                           |
| `Membership.UserRegistered` | `user` (UserDto)               | —                           |
| `Membership.UserUpdated`    | `{ from, to }` (UserDto pair)  | `from.roles` → `to.roles`   |
| `Database.RecordUpdated`    | `{ from, to }` (document pair) | `from.status` → `to.status` |

State-flip events (`UserVerified`, `UserBlocked`, …) behave like **entity**
events — you get the user directly, not `{ from, to }`. Use `UserUpdated` when
arbitrary fields (roles, profile, etc.) may change.

## Typed payloads

The payload shape depends on the trigger kind. Create, delete, and state-flip
events give the **entity directly**. Arbitrary mutations give `{ from, to }`.

| Event                                                  | First arg (`payload`)            |
| ------------------------------------------------------ | -------------------------------- |
| `membership.user.registered`                           | `UserDto`                        |
| `membership.user.verified` / `blocked` / `reactivated` | `UserDto`                        |
| `membership.user.deleted`                              | `UserDto`                        |
| `membership.user.updated`                              | `{ from: UserDto; to: UserDto }` |
| `database.record.inserted` / `deleted`                 | `T` (your document)              |
| `database.record.updated` / `replaced`                 | `{ from: T; to: T }`             |
| `database.records.inserted`                            | `T[]`                            |
| `files.file.uploaded`                                  | `FileResourceRefDto`             |

Wrapper ids (user id, schema, record ids) live on `event.metadata`. For manual
typing outside `receiver.on`, use `NorbixWebhookPayload<'event.name'>`.

## Configuration

`new NorbixWebhookReceiver(options?)` reads these env vars; any option you pass
overrides the matching env var.

| Env var                            | Option              | Default                     |
| ---------------------------------- | ------------------- | --------------------------- |
| `NORBIX_WEBHOOK_SIGNING_SECRET`    | `secret`            | — (verify skipped if unset) |
| `NORBIX_WEBHOOK_TOLERANCE_SECONDS` | `toleranceSeconds`  | `300`                       |
| `NORBIX_PROJECT_ID`                | `projectId` (guard) | —                           |
| `NORBIX_ACCOUNT_ID`                | `accountId` (guard) | —                           |

When `projectId` / `accountId` are set, a delivery whose envelope does not match
is rejected with `NorbixWebhookSignatureError`. In the browser (no `process`),
env reading is skipped — pass options explicitly.

## Wire format

Project triggers (database, membership, files, …) with a `WebhookCall` action
POST a signed JSON envelope to subscribed destinations:

```json
{
  "id": "<deliveryId>",
  "event": "database.record.inserted",
  "createdOn": "2026-01-01T00:00:00Z",
  "accountId": "acc_…",
  "projectId": "pr_…",
  "triggerId": "trg_…",
  "data": {}
}
```

## Signature verification

Norbix sends these headers on every delivery (see gateway
`WebhookDeliveryClient`). These are **not** the same as inbound API headers
like `norbix-account-id` / `norbix-project-id` from `AuthStatics` (studio →
gateway auth).

| Header                 | Purpose                                                 |
| ---------------------- | ------------------------------------------------------- |
| `X-Norbix-Event`       | Logical event name (matches `envelope.event`)           |
| `X-Norbix-Delivery`    | Stable delivery id (same as `envelope.id`)              |
| `Idempotency-Key`      | Same value as `X-Norbix-Delivery` (IETF dedup hint)     |
| `X-Norbix-Account`     | Account view id                                         |
| `X-Norbix-Project`     | Project view id                                         |
| `X-Norbix-Integration` | Webhook integration view id                             |
| `X-Norbix-Destination` | Destination view id that received this attempt          |
| `X-Norbix-Signature`   | `sha256=<hex>` HMAC-SHA256 of `"<timestamp>.<rawBody>"` |
| `X-Norbix-Timestamp`   | Unix epoch seconds (replay window)                      |

Use the project signing secret (`hub.webhooks.revealWebhookIntegrationSecret()`),
or set `NORBIX_WEBHOOK_SIGNING_SECRET`. When no secret is configured,
verification is skipped.

## API

| Export                                    | Description                                        |
| ----------------------------------------- | -------------------------------------------------- |
| `NorbixWebhookReceiver`                   | Register handlers + `handle()`; reads env config   |
| `NorbixWebhookEvents`                     | Named event constants (use instead of raw strings) |
| `NORBIX_WEBHOOK_EVENT_NAMES`              | Full catalog — pass to `onAll`                     |
| `NORBIX_WEBHOOK_EVENT_GROUPS`             | Catalog grouped by module                          |
| `receiver.on<T>(name, (payload, event))`  | Typed handler for one event                        |
| `receiver.onAll(events, (envelope, ctx))` | Catch-all — runs even when `on` is set             |
| `normalizeNorbixWebhook(envelope)`        | Envelope → `{ payload, metadata }`                 |
| `verifyNorbixWebhookSignature()`          | Low-level verify                                   |
| `parseNorbixWebhookEnvelope()`            | Parse JSON body                                    |
| `parseNorbixWebhookHeaders()`             | Read delivery headers                              |
| `NORBIX_WEBHOOK_HEADERS`                  | Header name constants                              |
| `NorbixWebhookPayloadMap`                 | Event name → normalised payload type               |
| `NorbixWebhookPayload<E>`                 | Resolve payload type for event `E`                 |
| `NorbixWebhookEvent`                      | Typed metadata object (2nd `on` arg)               |
| `NorbixWebhookEnvelope`                   | Raw delivery body (1st `onAll` arg)                |

Errors: `NorbixWebhookSignatureError`, `NorbixWebhookParseError`.
