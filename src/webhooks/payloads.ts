import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Webhook payload shapes, organised by the three trigger kinds:
 *
 * - **Entity**   — create / delete / single-property state flip. The payload
 *   IS the entity; the event name already says what changed.
 * - **Mutation** — an arbitrary edit you must diff. The payload is `{ from, to }`.
 * - **Batch**    — many records at once. The payload is an array.
 *
 * Wrapper identifiers (record id, schema name, …) are NOT part of the payload —
 * they are lifted onto `event.metadata` by the receiver. See `event-data.ts`.
 */

/** A before/after pair for a mutation event. */
export interface NorbixWebhookMutation<T> {
  from: T;
  to: T;
}

/** `membership.user.updated` payload — a user mutation. */
export type NorbixWebhookUserUpdated = NorbixWebhookMutation<CodeMashHub2.UserDto>;

/** `database.record.updated` / `replaced` payload — a document mutation. */
export type NorbixWebhookRecordUpdated<TDocument = Record<string, unknown>> =
  NorbixWebhookMutation<TDocument>;

/** `membership.user.invited` payload (no full entity yet — just an email). */
export interface NorbixWebhookUserInvited {
  email: string;
}

/** `files.file.deleted` payload (no entity — just the path). */
export interface NorbixWebhookFileDeleted {
  path: string;
}

/* -------------------------------------------------------------------------- */
/* Raw wire payloads (what the gateway sends today)                           */
/*                                                                            */
/* The receiver normalises these into the entity / mutation / batch payloads  */
/* above before calling a typed handler. Kept exported so `onRaw` handlers and */
/* the normaliser have a name for the on-the-wire shape.                       */
/* -------------------------------------------------------------------------- */

/** Wire payload for single-record database events (insert / delete). */
export interface NorbixWebhookWireDatabaseRecord<TDocument = Record<string, unknown>> {
  schemaName: string;
  integrationId: string;
  id: string;
  document: TDocument;
  schema?: CodeMashHub2.DataSchemaDto | null;
}

/** Wire payload for database record updated / replaced. */
export interface NorbixWebhookWireDatabaseRecordUpdated<TDocument = Record<string, unknown>> {
  schemaName: string;
  integrationId: string;
  id: string;
  from: TDocument;
  to: TDocument;
  schema?: CodeMashHub2.DataSchemaDto | null;
}

/** Wire payload for database.records.inserted (batch). */
export interface NorbixWebhookWireDatabaseRecordsInserted<TDocument = Record<string, unknown>> {
  schemaName: string;
  integrationId: string;
  ids: string[];
  documents: TDocument[];
  schema?: CodeMashHub2.DataSchemaDto | null;
}

/** Wire payload for database.records.updated. */
export interface NorbixWebhookWireDatabaseRecordsUpdated {
  schemaName: string;
  integrationId: string;
  matchedCount: number;
  modifiedCount: number;
  update: Record<string, unknown>;
  schema?: CodeMashHub2.DataSchemaDto | null;
}

/** Wire payload for database.records.deleted. */
export interface NorbixWebhookWireDatabaseRecordsDeleted {
  schemaName: string;
  integrationId: string;
  deletedCount: number;
  filter: Record<string, unknown>;
  schema?: CodeMashHub2.DataSchemaDto | null;
}

/** Wire payload for database.record.responsibilityChanged. */
export interface NorbixWebhookWireDatabaseRecordResponsibilityChanged {
  schemaName: string;
  integrationId: string;
  id: string;
  fromOwnerId: string;
  toOwnerId: string;
  schema?: CodeMashHub2.DataSchemaDto | null;
}

/** Wire payload for membership.user.registered. */
export interface NorbixWebhookWireUserRegistered {
  id: string;
  to: CodeMashHub2.UserDto;
}

/** Wire payload for membership.user.verified | blocked | reactivated | updated. */
export interface NorbixWebhookWireUserTransition {
  id: string;
  from?: CodeMashHub2.UserDto | null;
  to: CodeMashHub2.UserDto;
}

/** Wire payload for membership.user.deleted. */
export interface NorbixWebhookWireUserDeleted {
  id: string;
  from: CodeMashHub2.UserDto;
}

/** Wire payload for files.file.uploaded. */
export interface NorbixWebhookWireFileUploaded {
  integrationId: string;
  file: CodeMashHub2.FileResourceRefDto;
}

/** Wire payload for files.file.deleted. */
export interface NorbixWebhookWireFileDeleted {
  integrationId: string;
  path: string;
}
