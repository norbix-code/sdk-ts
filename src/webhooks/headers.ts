/**
 * Outbound Norbix webhook delivery headers.
 *
 * Source of truth: gateway `WebhookDeliveryClient` (NOT `AuthStatics` /
 * `ConfigureCors`, which define **inbound API** headers like
 * `norbix-account-id` / `norbix-project-id` for studio → gateway calls).
 *
 * @see gateway/src/Isidos.CodeMash.Services.Webhook/Dispatching/WebhookDeliveryClient.cs
 */
export const NORBIX_WEBHOOK_HEADERS = {
  event: 'X-Norbix-Event',
  delivery: 'X-Norbix-Delivery',
  idempotencyKey: 'Idempotency-Key',
  account: 'X-Norbix-Account',
  project: 'X-Norbix-Project',
  integration: 'X-Norbix-Integration',
  destination: 'X-Norbix-Destination',
  signature: 'X-Norbix-Signature',
  timestamp: 'X-Norbix-Timestamp',
} as const;

export type NorbixWebhookHeaderName =
  (typeof NORBIX_WEBHOOK_HEADERS)[keyof typeof NORBIX_WEBHOOK_HEADERS];
