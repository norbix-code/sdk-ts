import { createHmac, timingSafeEqual } from 'node:crypto';

import { NorbixWebhookParseError } from './errors.js';
import { NORBIX_WEBHOOK_HEADERS } from './headers.js';
import type {
  NorbixWebhookDeliveryHeaders,
  NorbixWebhookEnvelope,
  NorbixWebhookHeaderBag,
  NorbixWebhookVerifyOptions,
} from './types.js';

function headerValue(headers: NorbixWebhookHeaderBag, name: string): string | null {
  if (headers instanceof Headers) {
    return headers.get(name);
  }

  const direct = headers[name];
  if (direct !== undefined) {
    return Array.isArray(direct) ? (direct[0] ?? null) : direct;
  }

  const lower = name.toLowerCase();
  const lowerDirect = headers[lower];
  if (lowerDirect !== undefined) {
    return Array.isArray(lowerDirect) ? (lowerDirect[0] ?? null) : lowerDirect;
  }

  // Some frameworks preserve original casing on header keys.
  for (const [key, value] of Object.entries(headers)) {
    if (key.toLowerCase() === lower) {
      return Array.isArray(value) ? (value[0] ?? null) : (value ?? null);
    }
  }

  return null;
}

/** Read Norbix delivery headers from an incoming HTTP request. */
export function parseNorbixWebhookHeaders(
  headers: NorbixWebhookHeaderBag,
): NorbixWebhookDeliveryHeaders {
  const deliveryId =
    headerValue(headers, NORBIX_WEBHOOK_HEADERS.delivery) ??
    headerValue(headers, NORBIX_WEBHOOK_HEADERS.idempotencyKey);

  return {
    event: headerValue(headers, NORBIX_WEBHOOK_HEADERS.event),
    deliveryId,
    idempotencyKey: headerValue(headers, NORBIX_WEBHOOK_HEADERS.idempotencyKey),
    accountId: headerValue(headers, NORBIX_WEBHOOK_HEADERS.account),
    projectId: headerValue(headers, NORBIX_WEBHOOK_HEADERS.project),
    integrationId: headerValue(headers, NORBIX_WEBHOOK_HEADERS.integration),
    destinationId: headerValue(headers, NORBIX_WEBHOOK_HEADERS.destination),
    signature: headerValue(headers, NORBIX_WEBHOOK_HEADERS.signature),
    timestamp: headerValue(headers, NORBIX_WEBHOOK_HEADERS.timestamp),
  };
}

/** Parse the JSON envelope from the raw POST body. */
export function parseNorbixWebhookEnvelope<TData = unknown>(
  rawBody: string,
): NorbixWebhookEnvelope<TData> {
  let parsed: unknown;
  try {
    parsed = JSON.parse(rawBody);
  } catch {
    throw new NorbixWebhookParseError('Webhook body is not valid JSON');
  }

  if (!parsed || typeof parsed !== 'object') {
    throw new NorbixWebhookParseError('Webhook body must be a JSON object');
  }

  const envelope = parsed as Partial<NorbixWebhookEnvelope<TData>>;
  if (typeof envelope.id !== 'string' || !envelope.id) {
    throw new NorbixWebhookParseError('Webhook envelope missing id');
  }
  if (typeof envelope.event !== 'string' || !envelope.event) {
    throw new NorbixWebhookParseError('Webhook envelope missing event');
  }

  return envelope as NorbixWebhookEnvelope<TData>;
}

export interface NorbixWebhookSignatureVerification {
  ok: boolean;
  reason?: string;
}

/**
 * Verify X-Norbix-Signature against the raw body.
 * Algorithm (gateway WebhookDeliveryClient.Sign):
 *   sha256=<hex> HMAC-SHA256(secret, "<timestamp>.<rawBody>")
 */
export function verifyNorbixWebhookSignature(
  input: {
    rawBody: string;
    signature?: string | null;
    timestamp?: string | null;
  } & NorbixWebhookVerifyOptions,
): NorbixWebhookSignatureVerification {
  const { secret, rawBody, signature, timestamp, toleranceSeconds = 300 } = input;

  if (!signature) {
    return { ok: false, reason: 'missing X-Norbix-Signature header' };
  }
  if (!timestamp) {
    return { ok: false, reason: 'missing X-Norbix-Timestamp header' };
  }

  if (toleranceSeconds > 0) {
    const sent = Number(timestamp);
    if (!Number.isFinite(sent)) {
      return { ok: false, reason: 'X-Norbix-Timestamp is not a number' };
    }
    const ageSeconds = Math.abs(Date.now() / 1000 - sent);
    if (ageSeconds > toleranceSeconds) {
      return {
        ok: false,
        reason: `timestamp outside ${toleranceSeconds}s tolerance (age ${Math.round(ageSeconds)}s)`,
      };
    }
  }

  const expected = computeNorbixWebhookSignature(secret, timestamp, rawBody);
  if (!timingSafeEqualUtf8(expected, signature)) {
    return { ok: false, reason: 'signature mismatch' };
  }

  return { ok: true };
}

export function computeNorbixWebhookSignature(
  secret: string,
  timestamp: string,
  rawBody: string,
): string {
  return `sha256=${hmacSha256Hex(secret, `${timestamp}.${rawBody}`)}`;
}

function hmacSha256Hex(secret: string, payload: string): string {
  return createHmac('sha256', secret).update(payload, 'utf8').digest('hex');
}

function timingSafeEqualUtf8(a: string, b: string): boolean {
  const bufA = Buffer.from(a, 'utf8');
  const bufB = Buffer.from(b, 'utf8');
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}
