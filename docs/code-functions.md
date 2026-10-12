# Cloud functions (`parseFunctionEvent`)

Handle the envelope Norbix sends to **your** cloud function on AWS Lambda,
Azure Functions or Google Cloud Functions. This is the function side — distinct
from `hub.code.*`, which configures Code integrations and lists / invokes the
functions over the Hub API ([`docs/hub/code.md`](./hub/code.md)).

## Install

```bash
npm install @norbix.ai/ts
```

## Quick start

Every call — from a trigger (**Run a cloud function**), a scheduled task
(**Code call**), **Test function** in the dashboard, `norbix code invoke` or
`hub.code.invokeCodeFunction` — sends one JSON object: `specVersion`, `id`,
`eventId`, `event`, `source`, `createdOn`, `context`, `data`, `config`.
`parseFunctionEvent` turns it into a `CodeFunctionEvent` or throws.

```ts
import { parseFunctionEvent } from '@norbix.ai/ts';

type Order = { _id: string; status: string; total: number };

export const handler = async (raw: unknown) => {
  const event = parseFunctionEvent(raw); // CodeFunctionEvent, or NorbixFunctionEventError
  if (event.event !== 'database.record.updated') return { ok: true, skipped: event.event };

  const { old, new: next } = event.asDatabaseRecordChange<Order>();
  if (old?.status !== next?.status && next?.status === 'processing') {
    const norbix = event.createClient(); // acts as the run-as user, against the Norbix that called you
    await norbix.api.database.insertOne({
      collectionName: 'order_events',
      document: JSON.stringify({ orderId: next._id, status: 'processing', eventId: event.eventId }),
    });
  }
  return { ok: true };
};
```

`raw` may be the JSON text or the already-parsed object — whichever your
provider hands you. Every envelope field stays on the event as it came
(`JSON.stringify(event)` gives the envelope back); the helpers sit next to them.

## Typed views on `data`

`data` has one slot per source. Each view returns the slot with `old` / `new`
typed, and throws `NorbixFunctionEventError` (`FUNCTION_EVENT_WRONG_SOURCE`)
when the event does not carry that slot — so a handler wired to the wrong
trigger fails loudly instead of reading `undefined`.

| Source                | `event`                                                                               | View                                                                                                                                       | Slot            |
| --------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| `database`            | `database.record.inserted \| updated \| deleted \| replaced \| responsibilityChanged` | `event.asDatabaseRecordChange<T>()` → `{ collection, schemaId, schemaVersion?, recordId?, old?: T, new?: T, truncated, oldRef?, newRef? }` | `data.database` |
| `membership`          | `membership.user.registered \| created \| invited \| …`                               | `event.asUserChange<T = UserDto>()` → `{ userId, old?: T, new?: T }`                                                                       | `data.user`     |
| `files`               | `files.file.uploaded \| deleted`                                                      | `event.asFileChange<T>()` → `{ old?: T, new?: T, path? }`                                                                                  | `data.file`     |
| `payments`            | `payments.webhook.received`                                                           | `event.asPayment()` → `PaymentFactDto`                                                                                                     | `data.payment`  |
| `ai`                  | `ai.credits.warning \| …`                                                             | `event.asAiUsage()` → `{ payload, targetUserId? }`                                                                                         | `data.ai`       |
| `scheduler`           | `scheduler.task.fired`                                                                | `event.asScheduledTask()` → `{ taskId, name, firedAt }`                                                                                    | `data.task`     |
| `manual`, `scheduler` | `manual.invoke`, `scheduler.task.fired`                                               | `event.payload<T>()` → `T \| undefined`                                                                                                    | `data.payload`  |

Two things to know about `asDatabaseRecordChange`:

- an insert has no `old`, a delete no `new` — a `null` on the wire reads as
  `undefined`, so `old?.status` works either way;
- when both documents together exceed 200 KB they are left out, `truncated` is
  `true`, and `oldRef` / `newRef` (`DocumentRefDto`) say where to fetch them.
  Compare `schemaVersion` with the version your code was written for.

`event.source` comes in the wire spelling (`"database"`); the generated
`CodeFunctionSource` enum spells it `'Database'`. Use `event.isSource('database')`
— it matches both — rather than `===`.

## Calling Norbix back — `clientOptions()` / `createClient()`

`context` tells you where the event came from and how to call back:
`projectId`, `accountId`, `environment` (`PROD`, `TEST`, …), `region`,
`hubUrl` / `apiUrl` / `echoUrl` of the installation that called you, and
`runAs` — the service user the function acts as, with a short-lived bearer
token (15 minutes, or the function's timeout when longer).

```ts
const options = event.clientOptions();
// {
//   projectId: event.context.projectId,
//   accountId: event.context.accountId,
//   env: event.context.environment,         // never defaulted — a TEST trigger calls TEST
//   region: event.context.region,           // only when the project has one
//   bearerToken: event.context.runAs.accessToken,
//   baseUrl: { hub: event.context.hubUrl, api: event.context.apiUrl },
// }
const norbix = new Norbix({ ...options, timeoutMs: 5_000 });
// or, the same in one call:
const norbix = event.createClient({ timeoutMs: 5_000 });
```

Both throw `NorbixFunctionEventError` (`FUNCTION_EVENT_NO_RUN_AS_TOKEN`) when the
action has no run-as user — set one on the trigger action (`runAsUserId`) or the
scheduled task (**Run as user**).

## Errors

`parseFunctionEvent` throws `NorbixFunctionEventError`; read `code`:

| `code`                                    | When                                                                        |
| ----------------------------------------- | --------------------------------------------------------------------------- |
| `FUNCTION_EVENT_INVALID`                  | not JSON, not an object, or `event` / `source` / `context` / `data` missing |
| `FUNCTION_EVENT_UNSUPPORTED_SPEC_VERSION` | `specVersion` missing, or not `"1"` (`CODE_FUNCTION_SPEC_VERSION`)          |
| `FUNCTION_EVENT_WRONG_SOURCE`             | a typed view asked for a slot the event does not carry                      |
| `FUNCTION_EVENT_NO_RUN_AS_TOKEN`          | `clientOptions()` / `createClient()` without `context.runAs.accessToken`    |

## A fixture for a local run

`hub.code.getCodeFunctionEventSample` returns an envelope with sample data for
any source — write it to a file and run your handler with `sam local invoke`,
`func start` or the Functions Framework:

```ts
const { sample } = await norbix.hub.code.getCodeFunctionEventSample({
  source: CodeMashHub2.CodeFunctionSource.Database,
  event: 'database.record.updated',
  schemaId: 'sch_7lPCzWonEvTQsheGDCaKq',
});
await writeFile('event.json', JSON.stringify(sample, null, 2));
```

The same from the terminal: `norbix code event-sample --source database --event database.record.updated --schema sch_… > event.json`.

## What a dry run received

A Code integration on the **Fake** provider calls no cloud: every run of a
trigger or a scheduled task through it keeps the envelope it would have sent.
`hub.code.getCodeFunctionRuns` hands it back as `CodeFunctionRunDto.input` —
Fake runs carry the received envelope, token masked: the JSON text as sent,
with `context.runAs.accessToken` replaced by `***`, cut at 64 KB. A run through
a real provider has no `input` (the payload is your project's data), and
neither has a run where the function was not called.

```ts
const { runs } = await norbix.hub.code.getCodeFunctionRuns({
  triggerId: 'trg_1p4R3gTobGZpD6fXvHT4rd',
});
const received = runs[0]?.input; // string | undefined — JSON unless the 64 KB cut hit it
if (received) console.log(parseFunctionEvent(JSON.parse(received)).event);
```

The same from the terminal: `norbix code runs --trigger trg_… --limit 5` prints
`input` under each row when it is there.

## Idempotency

`eventId` is the change: a webhook delivery of the same record change carries
the same `eventId`, and a retried call keeps it too. `id` is this delivery.
De-duplicate on `eventId` when a function must act once per change.
