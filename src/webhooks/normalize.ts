import type { NorbixWebhookEventMetadata } from './event-data.js';
import type { NorbixWebhookEnvelope } from './types.js';

/** Result of normalising a wire envelope for a typed handler. */
export interface NorbixWebhookNormalized {
  /** The payload-first value handed to a typed handler. */
  payload: unknown;
  /** Identifiers lifted off the wire payload. */
  metadata: NorbixWebhookEventMetadata;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

/**
 * Turn a raw wire envelope into `{ payload, metadata }`.
 *
 * - Entity events  → `payload` is the entity (user / document / file).
 * - Mutation events → `payload` is `{ from, to }`.
 * - Batch events   → `payload` is the array.
 *
 * Wrapper ids (record id, schema, user id, …) are moved onto `metadata`.
 * Unknown events fall back to `payload = envelope.data`, `metadata = {}`.
 */
export function normalizeNorbixWebhook(envelope: NorbixWebhookEnvelope): NorbixWebhookNormalized {
  const event = envelope.event;
  const data: unknown = envelope.data;
  const d = isObject(data) ? data : {};

  // Database events share schema/record metadata.
  if (event.startsWith('database.')) {
    const metadata: NorbixWebhookEventMetadata = {};
    if (typeof d.schemaName === 'string') {
      const schema = isObject(d.schema) ? d.schema : null;
      const schemaId = schema && typeof schema.id === 'string' ? schema.id : null;
      metadata.schema = { id: schemaId, name: d.schemaName };
    }
    if (typeof d.integrationId === 'string') metadata.integrationId = d.integrationId;
    if (typeof d.id === 'string') metadata.record = { id: d.id };
    if (Array.isArray(d.ids)) metadata.records = { ids: d.ids as string[] };

    switch (event) {
      case 'database.record.inserted':
      case 'database.record.deleted':
        return { payload: d.document, metadata };
      case 'database.record.updated':
      case 'database.record.replaced':
        return { payload: { from: d.from, to: d.to }, metadata };
      case 'database.records.inserted':
        return { payload: d.documents ?? [], metadata };
      default:
        // records.updated / records.deleted / responsibilityChanged — pass data through.
        return { payload: data, metadata };
    }
  }

  // Membership events: entity directly, except updated (mutation).
  if (event.startsWith('membership.')) {
    const metadata: NorbixWebhookEventMetadata = {};
    if (typeof d.id === 'string') metadata.user = { id: d.id };

    switch (event) {
      case 'membership.user.registered':
      case 'membership.user.verified':
      case 'membership.user.blocked':
      case 'membership.user.reactivated':
        // wire sends { id, to } / { id, from?, to } — the entity is `to`.
        return { payload: d.to, metadata };
      case 'membership.user.deleted':
        // wire sends { id, from } — the entity is `from`.
        return { payload: d.from, metadata };
      case 'membership.user.updated':
        return { payload: { from: d.from, to: d.to }, metadata };
      case 'membership.user.invited':
        return { payload: { email: d.email }, metadata };
      default:
        return { payload: data, metadata };
    }
  }

  // Files events.
  if (event.startsWith('files.')) {
    const metadata: NorbixWebhookEventMetadata = {};
    if (typeof d.integrationId === 'string') metadata.integrationId = d.integrationId;

    switch (event) {
      case 'files.file.uploaded':
        return { payload: d.file, metadata };
      case 'files.file.deleted':
        return { payload: { path: d.path }, metadata };
      default:
        return { payload: data, metadata };
    }
  }

  return { payload: data, metadata: {} };
}
