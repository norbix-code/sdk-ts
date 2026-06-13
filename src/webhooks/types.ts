import type { NorbixWebhookEventName } from './events.js';

/** JSON envelope POSTed to every webhook destination. */
export interface NorbixWebhookEnvelope<TData = unknown> {
  /** Stable delivery id — dedupe retries on this (also X-Norbix-Delivery). */
  id: string;
  /** Logical event name, e.g. database.record.inserted. */
  event: string;
  /** ISO-8601 UTC timestamp when the event was emitted. */
  createdOn: string;
  accountId: string;
  projectId: string;
  /** Trigger that produced this delivery, if any. */
  triggerId?: string | null;
  /** Module-specific payload (record, user, file metadata, …). */
  data: TData;
}

/** Parsed delivery headers on an inbound POST. */
export interface NorbixWebhookDeliveryHeaders {
  event: string | null;
  deliveryId: string | null;
  idempotencyKey: string | null;
  accountId: string | null;
  projectId: string | null;
  integrationId: string | null;
  destinationId: string | null;
  signature: string | null;
  timestamp: string | null;
}

export interface NorbixWebhookVerifyOptions {
  /** Project signing secret (from hub.webhooks.revealWebhookIntegrationSecret). */
  secret: string;
  /** Reject timestamps older/newer than this many seconds. Default 300. */
  toleranceSeconds?: number;
}

export interface NorbixWebhookHandleInput {
  /** Exact UTF-8 request body bytes as received (required for signature verify). */
  rawBody: string;
  /** Incoming request headers (Express/Ts.ED/Fetch Headers or plain object). */
  headers: NorbixWebhookHeaderBag;
  /** Optional request path for logging. */
  path?: string;
  /** When false, skip signature verification even if secret is configured. */
  verify?: boolean;
}

export type NorbixWebhookHeaderBag = Record<string, string | string[] | undefined> | Headers;

export interface NorbixWebhookContext {
  path?: string;
  headers: NorbixWebhookDeliveryHeaders;
  /** true when signature verified; null when verification was skipped. */
  verified: boolean | null;
}

export interface NorbixWebhookHandleResult {
  received: true;
  event: string;
  deliveryId: string;
  /** true when verified, null when verification was skipped (no secret). */
  verified: boolean | null;
  handled: boolean;
  triggerId?: string | null;
}

export type NorbixWebhookHandler<TData = unknown> = (
  envelope: NorbixWebhookEnvelope<TData>,
  ctx: NorbixWebhookContext,
) => void | Promise<void>;

export type NorbixWebhookHandlerMap = Partial<
  Record<NorbixWebhookEventName | string, NorbixWebhookHandler>
>;

export interface NorbixWebhookReceiverOptions {
  /** When set, verification runs on every delivery. Omit to skip verify. */
  secret?: string;
  /** Reject timestamps outside this window (seconds). Default 300. */
  toleranceSeconds?: number;
}
