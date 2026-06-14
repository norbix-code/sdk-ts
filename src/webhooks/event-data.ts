import type { CodeMashHub2 } from '../types/hub2.dtos.js';

import type { NorbixWebhookEventName } from './events.js';
import type {
  NorbixWebhookFileDeleted,
  NorbixWebhookMutation,
  NorbixWebhookUserInvited,
} from './payloads.js';

/**
 * The normalised payload the receiver hands to a typed handler, per event name.
 *
 * - Entity events resolve to the entity itself (`UserDto`, `FileResourceRefDto`).
 * - Mutation events resolve to `{ from, to }`.
 * - Batch events resolve to an array.
 *
 * For database events the document type is unknown at the catalog level — pass
 * it as the generic on `on<TDocument>(...)` (see `NorbixWebhookPayload`).
 */
export interface NorbixWebhookPayloadMap<TDocument = Record<string, unknown>> {
  // membership — entity (create / delete / state flip)
  'membership.user.registered': CodeMashHub2.UserDto;
  'membership.user.verified': CodeMashHub2.UserDto;
  'membership.user.blocked': CodeMashHub2.UserDto;
  'membership.user.reactivated': CodeMashHub2.UserDto;
  'membership.user.deleted': CodeMashHub2.UserDto;
  'membership.user.invited': NorbixWebhookUserInvited;
  // membership — mutation
  'membership.user.updated': NorbixWebhookMutation<CodeMashHub2.UserDto>;
  // database — entity
  'database.record.inserted': TDocument;
  'database.record.deleted': TDocument;
  // database — mutation
  'database.record.updated': NorbixWebhookMutation<TDocument>;
  'database.record.replaced': NorbixWebhookMutation<TDocument>;
  // database — batch
  'database.records.inserted': TDocument[];
  // database — bulk summaries (no per-document payload)
  'database.records.updated': { matchedCount: number; modifiedCount: number };
  'database.records.deleted': { deletedCount: number };
  'database.record.responsibilityChanged': { fromOwnerId: string; toOwnerId: string };
  // files — entity
  'files.file.uploaded': CodeMashHub2.FileResourceRefDto;
  'files.file.deleted': NorbixWebhookFileDeleted;
}

/** Resolve the typed payload for a known event (with optional document type). */
export type NorbixWebhookPayload<
  E extends NorbixWebhookEventName,
  TDocument = Record<string, unknown>,
> = NorbixWebhookPayloadMap<TDocument>[E];

/**
 * Identifiers lifted off the wire payload onto `event.metadata`.
 * Fields are present only for events that carry them.
 */
export interface NorbixWebhookEventMetadata {
  /** The mutated / created entity id (membership events). */
  user?: { id: string };
  /** Schema info for database.* events. `id` is null until the gateway sends it. */
  schema?: { id: string | null; name: string };
  /** Single record id for single-record database events. */
  record?: { id: string };
  /** Record ids for batch database events. */
  records?: { ids: string[] };
  /** Integration id for files.* events (and database events that carry it). */
  integrationId?: string;
}
