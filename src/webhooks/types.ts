import type { NorbixWebhookEventMetadata } from './event-data.js';

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

/**
 * Metadata object passed as the 2nd arg to a typed handler. Carries the
 * delivery facts at the top level and payload identifiers under `metadata`.
 */
export interface NorbixWebhookEvent {
  /** Logical event name, e.g. "membership.user.registered". */
  name: string;
  /** Stable delivery id — dedupe retries on this. */
  deliveryId: string;
  /** ISO-8601 UTC emit time. */
  createdOn: string;
  triggerId: string | null;
  /** Present once the gateway sends a correlation header/field; else null. */
  correlationId: string | null;
  accountId: string;
  projectId: string;
  integrationId: string | null;
  destinationId: string | null;
  /** true when signature verified; null when verification was skipped. */
  verified: boolean | null;
  /** Identifiers lifted off the wire payload (entity id, schema, record ids). */
  metadata: NorbixWebhookEventMetadata;
  /** Escape hatch: the raw envelope, if a handler needs an unmapped field. */
  raw: NorbixWebhookEnvelope;
}

/** Context passed to raw (`onRaw`) handlers alongside the envelope. */
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

/** Typed handler — first arg is the normalised payload, second is metadata. */
export type NorbixWebhookHandler<TPayload = unknown> = (
  payload: TPayload,
  event: NorbixWebhookEvent,
) => void | Promise<void>;

/** Raw handler — first arg is the envelope, second is the delivery context. */
export type NorbixWebhookRawHandler<TData = unknown> = (
  envelope: NorbixWebhookEnvelope<TData>,
  ctx: NorbixWebhookContext,
) => void | Promise<void>;

export interface NorbixWebhookReceiverOptions {
  /**
   * Signing secret. When set, verification runs on every delivery.
   * Defaults to `process.env.NORBIX_WEBHOOK_SIGNING_SECRET`. Omit to skip verify.
   */
  secret?: string;
  /**
   * Reject timestamps outside this window (seconds).
   * Defaults to `process.env.NORBIX_WEBHOOK_TOLERANCE_SECONDS`, else 300.
   */
  toleranceSeconds?: number;
  /**
   * Optional guard — when set, deliveries whose envelope projectId does not
   * match are rejected. Defaults to `process.env.NORBIX_PROJECT_ID`.
   */
  projectId?: string;
  /**
   * Optional guard — when set, deliveries whose envelope accountId does not
   * match are rejected. Defaults to `process.env.NORBIX_ACCOUNT_ID`.
   */
  accountId?: string;
}
