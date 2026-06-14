# Webhook Receiver DX Redesign

Status: **proposal (design first)** — no code changed yet.
Scope: `@norbix.ai/ts/webhooks` only.

## Goal

Make the receiver:

1. **Easy to start** — `new NorbixWebhookReceiver()` reads env vars. Override only what you need.
2. **Payload-first handlers** — `on<T>(name, (payload, event) => ...)`. The first
   arg **is** the typed payload (the user, the record, or a `{from,to}` pair).
   `event` carries all the metadata, with identifiers nested under
   `event.metadata`. No generic → raw `(event, ctx)` fallback.
3. **No raw event strings in app code** — use exported constants, not
   `"membership.user.registered"` literals, and let the SDK own the
   "register a logger for every other event" loop.
4. **`from`/`to` only when you must compare** — mutations (`user.updated`,
   `record.updated/replaced`) give `{from,to}`; create/delete/state-flip events
   give the entity directly, since the event name is already the diff.

What the SDK already does well (keep it): typed payload map
(`NorbixWebhookEventDataMap`), `from`/`to` payload shapes, the event-name
catalog (`NORBIX_WEBHOOK_EVENT_NAMES`), HMAC verify with timestamp tolerance.
This proposal is mostly additive sugar on top of that.

---

## 1. Env-based construction

### Today

```ts
this.receiver = createWebhookReceiver({
  secret: envs.WEBHOOK_SIGNING_SECRET || undefined,
  toleranceSeconds: Number.isFinite(toleranceSeconds) ? toleranceSeconds : 300,
});
```

The app reads env vars itself, coerces numbers, and passes them in. Every app
repeats this.

### Proposed

```ts
// Reads env. Zero config when env is set correctly.
const receiver = new NorbixWebhookReceiver();

// Override anything; explicit values always win over env.
const receiver = new NorbixWebhookReceiver({ toleranceSeconds: 600 });
```

Env vars read (all optional, explicit options override):

| Env var                            | Maps to             | Default |
| ---------------------------------- | ------------------- | ------- |
| `NORBIX_WEBHOOK_SIGNING_SECRET`    | `secret`            | —       |
| `NORBIX_WEBHOOK_TOLERANCE_SECONDS` | `toleranceSeconds`  | `300`   |
| `NORBIX_PROJECT_ID`                | `projectId` (guard) | —       |
| `NORBIX_ACCOUNT_ID`                | `accountId` (guard) | —       |

Notes:

- **`projectId` / `accountId` are optional guards.** If set, the receiver can
  reject a delivery whose envelope `projectId`/`accountId` does not match
  (defence against a misrouted destination). Off by default — set the env var
  to turn it on.
- **`NORBIX_HUB_URL` is intentionally NOT read here.** The receiver only
  verifies inbound POSTs; it never calls the hub. `HUB_URL` belongs to the API
  client, not the webhook receiver. Keeping them separate avoids the impression
  that the receiver phones home.
- **Browser safety.** The README says the SDK works in the browser, where
  `process` is undefined. Env reading must be guarded:
  `const env = (typeof process !== "undefined" && process.env) ? process.env : {};`
  A receiver built in a browser simply gets no env defaults (expected).

### Sketch

```ts
export interface NorbixWebhookReceiverOptions {
  secret?: string;
  toleranceSeconds?: number;
  projectId?: string;   // optional guard
  accountId?: string;   // optional guard
}

interface ResolvedConfig {
  secret?: string;
  toleranceSeconds: number;
  projectId?: string;
  accountId?: string;
}

function resolveConfig(opts: NorbixWebhookReceiverOptions): ResolvedConfig {
  const env =
    typeof process !== "undefined" && process.env ? process.env : {};

  const rawTol = opts.toleranceSeconds ?? num(env.NORBIX_WEBHOOK_TOLERANCE_SECONDS);
  return {
    secret: opts.secret ?? env.NORBIX_WEBHOOK_SIGNING_SECRET,
    projectId: opts.projectId ?? env.NORBIX_PROJECT_ID,
    accountId: opts.accountId ?? env.NORBIX_ACCOUNT_ID,
    toleranceSeconds: Number.isFinite(rawTol) ? (rawTol as number) : 300,
  };
}

function num(v: string | undefined): number | undefined {
  if (v == null || v === "") return undefined;
  const n = Number(v);
  return Number.isFinite(n) ? n : undefined;
}
```

`createWebhookReceiver(options)` stays as a thin wrapper around
`new NorbixWebhookReceiver(options)` for back-compat.

---

## 2. The handler shape: payload first, metadata on `event`

This is the core of the redesign. Two rules:

- **The first arg IS the typed payload.** No `data.user` / `data.document`
  wrapper. When you pass the generic, the first parameter is exactly the thing
  you care about.
- **All metadata lives on `event`** (nested under `event.metadata`), so the app
  never re-stitches it from two objects.

### Today

Handler is `(envelope, ctx)`. Metadata is split across two objects:
`envelope.id / envelope.event / envelope.triggerId` live on the envelope, while
`ctx.headers.integrationId / destinationId / verified` live on the context. The
app has to know which field is where (see the current `logDelivery`, reading
both).

### The generic decides what the first arg is

The generic `T` you pass to `on<T>(...)` **names the payload type**, and the
payload type differs by event kind:

| Event kind | Generic you pass | First handler arg |
| ---------- | ---------------- | ----------------- |
| **Entity** (create / delete / state flip) | the entity, e.g. `CodeMashHub2.UserDto` | the entity directly |
| **Mutation** (arbitrary edit) | the mutation type, e.g. `CodeMashHub2.UserUpdated` (= `{ from, to }`) | `{ from, to }` |
| **Batch** | the entity; payload is `T[]` | array of entities |

```ts
// ENTITY — first arg IS the UserDto. The id/schema are on event.metadata.
receiver.on<CodeMashHub2.UserDto>(
  NorbixWebhookEvents.Membership.UserVerified,
  (user, event) => {
    user.status;                  // UserDto, directly
    event.metadata.user.id;       // the wrapper id is metadata now
  },
);

// ENTITY — create
receiver.on<CodeMashHub2.UserDto>(
  NorbixWebhookEvents.Membership.UserRegistered,
  (user, event) => {
    user.email ?? user.userName;  // create → nothing to diff
  },
);

// ENTITY — db record. T is the document.
receiver.on<CodeMashHub2.UserDto>(
  NorbixWebhookEvents.Database.RecordInserted,
  (record, event) => {
    record.email;                 // the document, directly
    event.metadata.schema.id;     // schema info nested under metadata
  },
);

// MUTATION — first arg is { from, to }. Generic names the mutation type.
receiver.on<CodeMashHub2.UserUpdated>(
  NorbixWebhookEvents.Membership.UserUpdated,
  (user, event) => {
    if (user.from.birthDate > user.to.birthDate) { /* react to the diff */ }
  },
);

// BATCH — first arg is the array.
receiver.on<CodeMashHub2.UserDto>(
  NorbixWebhookEvents.Database.RecordsInserted,
  (records, event) => {
    records.length;               // UserDto[]
  },
);
```

### Without a generic → raw `(event, ctx)` fallback

If you don't pass a generic, the SDK can't know the payload type, so you get the
**raw envelope + context** and extract everything yourself — same as today:

```ts
receiver.on(NorbixWebhookEvents.Membership.UserUpdated, (event, ctx) => {
  event.data.from.birthDate;   // you dig it out, untyped
  ctx.verified;
});
```

So there's exactly one decision for the app author:

- **Pass a generic** → clean, typed `(payload, event)`. Recommended.
- **No generic** → raw `(event, ctx)`. Escape hatch, nothing hidden.

### `from`/`to` only when you must compare

`from`/`to` appear **only** for an arbitrary mutation. Create, delete, and
single-property state flips hand over the entity directly — the event name is
already the diff.

| Event                         | Kind     | Generic → first arg                 |
| ----------------------------- | -------- | ----------------------------------- |
| `membership.user.registered`  | entity   | `UserDto`                           |
| `membership.user.invited`     | entity   | `{ email }`                         |
| `membership.user.verified`    | entity   | `UserDto`                           |
| `membership.user.blocked`     | entity   | `UserDto`                           |
| `membership.user.reactivated` | entity   | `UserDto`                           |
| `membership.user.deleted`     | entity   | `UserDto`                           |
| `membership.user.updated`     | mutation | `UserUpdated` = `{ from, to }`      |
| `database.record.inserted`    | entity   | `T` (document)                      |
| `database.record.deleted`     | entity   | `T` (document)                      |
| `database.record.updated`     | mutation | `{ from: T, to: T }`                |
| `database.record.replaced`    | mutation | `{ from: T, to: T }`                |
| `database.records.inserted`   | batch    | `T[]`                               |
| `files.file.uploaded`         | entity   | `FileResourceRefDto`                |
| `files.file.deleted`          | entity   | `{ path }`                          |

So `verified` / `blocked` / `reactivated` give you the user directly — no
redundant `{ from, to }`. Only `user.updated`, `record.updated`, and
`record.replaced` carry `from`/`to`.

### New payload types the SDK exports

To make "the generic names the payload" work, the SDK exports thin mutation
types so you can write `on<CodeMashHub2.UserUpdated>` instead of an inline
`{ from, to }`:

```ts
// in the hub types (generated or hand-added alongside UserDto)
export interface UserUpdated { from: UserDto; to: UserDto; }
// db record mutations stay generic on the document:
//   on<{ from: MyDoc; to: MyDoc }>(NorbixWebhookEvents.Database.RecordUpdated, ...)
```

#### Required change vs. today's wire format

Today's payload types don't match yet:

- `membership.user.registered` is `{ id, to: UserDto }` → payload becomes the
  `UserDto`; `id` moves to `event.metadata`.
- `membership.user.deleted` is `{ id, from: UserDto }` → same: payload is the
  `UserDto`, `id` to metadata.
- `verified` / `blocked` / `reactivated` share
  `NorbixWebhookUserTransitionPayload` (`{ id, from?, to }`) → collapse to the
  `UserDto` entity. Drop `from`/`to` here.
- `membership.user.updated` → `{ from, to }` (both required), exposed as
  `UserUpdated`.
- DB record wrappers (`schemaName`, `id`, `ids`) → move to `event.metadata`;
  payload is the document / `{from,to}` / array only.

Two ways to land it:

1. **Gateway aligns the wire format** (cleanest): the envelope `data` is the
   entity (or `{from,to}` for updates); ids/schema go to delivery headers. SDK
   types match 1:1.
2. **SDK normalizes on the way in** (no gateway change): the receiver reshapes
   the raw envelope into `(payload, event)` before calling your handler, lifting
   wrapper ids onto `event.metadata`. Old wire, new ergonomics.

Recommend (1) long-term, (2) as the bridge. Either way, **handler code is the
same.**

Recommend (1) long-term, (2) as the bridge so the DX ships without waiting on a
gateway deploy. Either way, **handler code sees the same clean shape.**

### The `event` object — delivery info + nested `metadata`

`event` carries the delivery facts at the top level and the
**entity/schema/payload identifiers nested under `event.metadata`** (the wrapper
ids that used to sit next to the payload):

```ts
export interface NorbixWebhookEvent {
  name: string;               // envelope.event
  deliveryId: string;         // envelope.id — dedupe retries on this
  createdOn: string;          // ISO-8601 UTC
  triggerId: string | null;
  correlationId: string | null;   // see "gateway dependency" below
  accountId: string;
  projectId: string;
  integrationId: string | null;
  destinationId: string | null;
  verified: boolean | null;       // true verified, null when verify skipped

  /** Payload-specific identifiers lifted off the wire payload. */
  metadata: {
    /** The mutated/created entity's id (registered, verified, updated, ...). */
    user?: { id: string };
    /** DB record schema + record id(s) for database.* events. */
    schema?: { id: string | null; name: string };
    record?: { id: string };
    records?: { ids: string[] };
  };

  /** Escape hatch: the raw envelope, if a handler needs an unmapped field. */
  raw: NorbixWebhookEnvelope;
}
```

So a db-update handler reads `event.metadata.schema.id` and
`event.metadata.record.id`; a membership handler reads `event.metadata.user.id`.
The payload itself stays pure (just the entity, or `{from,to}`, or the array).

### Handler signature summary

- **`on<T>(name, (payload, event) => ...)`** — typed. `payload` is `T` (entity),
  `{from,to}` (mutation), or `T[]` (batch); `event` is the object above.
- **`on(name, (event, ctx) => ...)`** — no generic → raw envelope + context.
  Nothing hidden; you extract `event.data...` yourself.

### Back-compat (improve, don't break)

The existing `(envelope, ctx)` handlers are in use. Plan:

- The **no-generic** form already *is* the legacy `(event, ctx)` shape, so old
  call sites that never passed a generic keep working unchanged.
- The typed `(payload, event)` form is opt-in by adding a generic.
- Ship as a **minor** (both forms available), document the mapping
  (`envelope.id → event.deliveryId`, `ctx.verified → event.verified`,
  wrapper ids → `event.metadata.*`). No forced migration.

---

## 3. Named constants — no raw strings, no app-side event sets

### Today (in app code — should not live here)

```ts
const TYPED_HANDLER_EVENTS = new Set<string>([
  "database.record.inserted",
  "membership.user.registered",
]);
// ...then a loop over NORBIX_WEBHOOK_EVENT_NAMES skipping that set
```

### Proposed — SDK owns both the constants and the loop

Add a frozen object for dot-access + autocomplete (the array stays for
iteration):

```ts
export const NorbixWebhookEvents = {
  Database: {
    RecordInserted: "database.record.inserted",
    RecordUpdated: "database.record.updated",
    RecordDeleted: "database.record.deleted",
    RecordReplaced: "database.record.replaced",
    RecordResponsibilityChanged: "database.record.responsibilityChanged",
    RecordsInserted: "database.records.inserted",
    RecordsUpdated: "database.records.updated",
    RecordsDeleted: "database.records.deleted",
  },
  Membership: {
    UserRegistered: "membership.user.registered",
    UserInvited: "membership.user.invited",
    UserVerified: "membership.user.verified",
    UserUpdated: "membership.user.updated",
    UserDeleted: "membership.user.deleted",
    UserBlocked: "membership.user.blocked",
    UserReactivated: "membership.user.reactivated",
  },
  Files: {
    FileUploaded: "files.file.uploaded",
    FileDeleted: "files.file.deleted",
  },
} as const;
```

Add an `onEach` helper so the "log everything I didn't explicitly handle" loop
lives in the SDK, not the app. It only registers events that have no handler
yet, so it never clobbers your typed handlers regardless of call order:

```ts
/** Register one handler for many events. Skips events already handled. */
onEach(events: readonly string[], handler: NorbixWebhookHandler): this;

/** Convenience: every catalog event not already handled. */
onEachRemaining(handler: NorbixWebhookHandler): this;
```

### Resulting app code

```ts
import {
  NorbixWebhookReceiver,
  NorbixWebhookEvents,
} from "@norbix.ai/ts/webhooks";
import type { CodeMashHub2 } from "@norbix.ai/ts/types/hub";

export function createWebhookReceiver() {
  const receiver = new NorbixWebhookReceiver(); // env-driven

  receiver.on<CodeMashHub2.UserDto>(
    NorbixWebhookEvents.Database.RecordInserted,
    (record, event) => {
      console.log(`[webhook] inserted schema=${event.metadata.schema?.name} ` +
        `email=${record.email ?? record.userName}`);
    },
  );

  receiver.on<CodeMashHub2.UserDto>(
    NorbixWebhookEvents.Membership.UserRegistered,
    (user, event) => {
      console.log(`[webhook] registered id=${event.metadata.user?.id} ` +
        `email=${user.email ?? user.userName}`);
    },
  );

  // One line replaces the whole TYPED_HANDLER_EVENTS set + loop.
  // No generic → raw (event, ctx).
  receiver.onEachRemaining((event, ctx) => logDelivery(event.event, event, ctx));

  return receiver;
}
```

No `Set`, no string literals, no skip-list maintenance in the app.

---

## 4. Bug spotted in the current handler: `email=undefined`

The live log shows:

```
[webhook] user registered id=usr_T76vbN20iASg8kvqF9ntO email=undefined
```

This is **not** an SDK bug. The user registered with a `userName`
(`"adsfsghgj"`) and no email, so the email is correctly `undefined`. The
README/example `event.data.to.email` is misleading because it implies email is
always present (and, per §2, registered should expose `user`, not `to`).

Confirmed from `src/types/hub2.dtos.ts`: `UserDto.email?` and `userName?` are
both optional, so `email=undefined` is the correct, expected value for a
username-only registration. Only the example/README wording needs fixing — use
`user.email ?? user.userName`.

---

## Gateway dependency (the one thing the SDK can't invent)

`event.metadata.schema.id` and `event.correlationId` depend on what the gateway
sends. From the SDK source today:

- **Headers sent** (`headers.ts`): event, delivery, idempotency-key, account,
  project, integration, destination, signature, timestamp. **No correlation.**
- **Envelope fields** (`types.ts`): id, event, createdOn, accountId, projectId,
  triggerId, data. **No correlationId.**
- DB payloads carry `schemaName` and an optional `schema` object.

So in the first version:

- `event.metadata.schema` → `{ id: schema?.id ?? null, name: schemaName }` from
  the db payload; omitted for non-db events.
- `event.correlationId` → `null` until the gateway adds an
  `X-Norbix-Correlation` header or envelope field. Once it does, the SDK
  surfaces it with no app change.

If you want correlation first-class, the gateway change is: add
`X-Norbix-Correlation` to `WebhookDeliveryClient`. Worth a follow-up so the
`event` object is complete.

---

## Summary of proposed changes (mostly in `src/webhooks/`)

| Change | File(s) | Breaking? |
| ------ | ------- | --------- |
| Env-based config + browser guard | `receiver.ts`, `types.ts` | No (options optional) |
| `NorbixWebhookEvents` constant object | `events.ts`, `index.ts` | No (additive) |
| `on<T>` → typed `(payload, event)`; no generic → `(event, ctx)` | `receiver.ts`, `types.ts` | No (no-generic = current shape) |
| Payload = entity / `{from,to}` / `T[]`; wrapper ids → `event.metadata` | `receiver.ts`, `payloads.ts`, `event-data.ts` | Payload shape change — normalize in receiver or align gateway |
| Mutation types (`UserUpdated = {from,to}`) | `hub2.dtos.ts` or webhook types | No (additive) |
| `onEach` / `onEachRemaining` helpers | `receiver.ts` | No (additive) |
| `event.metadata.schema` derived from payload | `receiver.ts` | No |
| Docs: `email ?? userName`, optional email | `README.md` | No |
| (Follow-up) gateway sends correlationId | gateway | Separate PR |

## Open decisions for you

1. **Payload-shape alignment** — normalize in the SDK receiver (no gateway
   change, ships now) or change the gateway wire format so `data` is already the
   entity / `{from,to}`? Recommend SDK-normalize first, gateway later.
2. **Mutation type home** — add `UserUpdated` (and any other `{from,to}` types)
   to the generated `hub2.dtos.ts`, or to a webhook-only types file so the
   generator never overwrites them?
3. **Project/account guard** — reject mismatched deliveries by default when
   `NORBIX_PROJECT_ID` is set, or only with an explicit `strict: true`?
4. **Correlation follow-up** — scope the gateway `X-Norbix-Correlation` change
   now, or land the SDK with `correlationId: null` and add it later?
