# API · Logs

[← Back to API index](./_index.md) · [↑ Back to project README](../../README.md)

Logging integrations and module on/off switches.

Accessed as `norbix.api.logs` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                    | Verb   | Path              | Scope     |
| ------------------------- | ------ | ----------------- | --------- |
| [`writeLogs`](#writelogs) | `POST` | `/{version}/logs` | `project` |

## Reference

### writeLogs

`POST` `/{version}/logs`

**Request DTO**: `CodeMashApi2.WriteLogs`
**Response**: `CodeMashApi2.WriteLogsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.logs.writeLogs({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.WriteLogsResponse
```

[↑ Top](#endpoints)

<!-- @hand-written:begin -->

## Writing your app's own log lines

`norbix.api.logs` is not about integrations (those are on the Hub, see
[`docs/hub/logs.md`](../hub/logs.md)): it sends **your app's own lines** to the
project's Logs, where they show next to the lines Norbix writes.

```ts
import { Norbix, NorbixError } from '@norbix.ai/ts';

const norbix = new Norbix();

// One line …
await norbix.api.logs.write({ title: 'Order paid', eventCode: 'order:paid' });

// … or up to 100 at once. `writeLogs({ entries })` is the same call.
const { accepted } = await norbix.api.logs.write([
  {
    level: 'warning', // information (default) | warning | error
    title: 'Payment retried', // required, at most 200 characters
    message: 'Card declined once, second try passed', // at most 8 000
    eventCode: 'order:retry', // a-z 0-9 _ . : -, at most 64 — stored as app:order:retry
    correlationId: 'ord_123', // letters, digits, _ or -, at most 64 — groups lines into one flow
    timestamp: '2026-10-21T10:00:00Z', // UTC, at most 7 days old, at most 5 minutes ahead
    meta: { orderId: 'ord_123' }, // at most 20 keys; secret-looking keys are masked
  },
]);
```

The answer comes at once: `accepted` lines are queued, not yet stored.

| Refusal                       | When                                       |
| ----------------------------- | ------------------------------------------ |
| 400 (`NorbixValidationError`) | A line breaks one of the rules above.      |
| 400 `CM-ERRORS-LOGGING-002`   | The Logs module is off for the project.    |
| 429 `CM-ERRORS-LOGGING-003`   | The project's per-minute quota is used up. |

On a 429 the SDK does not send again by itself (a POST is never retried).
`err.retryAfterSeconds` holds the gateway's `Retry-After` value:

```ts
try {
  await norbix.api.logs.write(lines);
} catch (err) {
  if (err instanceof NorbixError && err.httpStatus === 429) {
    setTimeout(() => norbix.api.logs.write(lines), (err.retryAfterSeconds ?? 60) * 1000);
  } else throw err;
}
```

Tests: `tests/api/logs.test.ts`.

<!-- @hand-written:end -->
