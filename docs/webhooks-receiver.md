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
import { NorbixWebhookReceiver } from '@norbix.ai/ts/webhooks';

const receiver = new NorbixWebhookReceiver({
  secret: process.env.NORBIX_WEBHOOK_SECRET, // from revealWebhookIntegrationSecret
});

receiver.on('database.record.inserted', async (event, ctx) => {
  console.log('inserted', event.data);
});

receiver.on('membership.user.registered', async (event) => {
  console.log('user', event.data);
});

// Express / Ts.ED / any framework — pass raw body + headers
await receiver.handle({
  rawBody: req.rawBody, // exact UTF-8 bytes
  headers: req.headers,
});
```

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

Use the project signing secret (`hub.webhooks.revealWebhookIntegrationSecret()`).
When `secret` is omitted on `NorbixWebhookReceiver`, verification is skipped.

## API

| Export | Description |
|--------|-------------|
| `NorbixWebhookReceiver` | Register handlers + `handle()` |
| `verifyNorbixWebhookSignature()` | Low-level verify |
| `parseNorbixWebhookEnvelope()` | Parse JSON body |
| `parseNorbixWebhookHeaders()` | Read delivery headers |
| `NORBIX_WEBHOOK_EVENT_NAMES` | Closed catalog of event names |
| `NORBIX_WEBHOOK_HEADERS` | Header name constants |

Errors: `NorbixWebhookSignatureError`, `NorbixWebhookParseError`.
