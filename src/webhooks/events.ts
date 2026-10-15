/**
 * Closed catalog of event names a destination may subscribe to.
 * Source: gateway Domain trigger event name value objects.
 */
export const NORBIX_WEBHOOK_EVENT_NAMES = [
  'database.record.inserted',
  'database.record.updated',
  'database.record.deleted',
  'database.record.replaced',
  'database.record.responsibilityChanged',
  'database.records.inserted',
  'database.records.updated',
  'database.records.deleted',
  'membership.user.registered',
  'membership.user.invited',
  'membership.user.verified',
  'membership.user.updated',
  'membership.user.deleted',
  'membership.user.blocked',
  'membership.user.reactivated',
  'files.file.uploaded',
  'files.file.deleted',
  'payments.webhook.received',
] as const;

export type NorbixWebhookEventName = (typeof NORBIX_WEBHOOK_EVENT_NAMES)[number];

/**
 * Named event constants — use these instead of raw strings so app code gets
 * autocomplete and is typo-safe.
 *
 * @example
 * receiver.on(NorbixWebhookEvents.Membership.UserRegistered, (user, event) => {});
 */
export const NorbixWebhookEvents = {
  Database: {
    RecordInserted: 'database.record.inserted',
    RecordUpdated: 'database.record.updated',
    RecordDeleted: 'database.record.deleted',
    RecordReplaced: 'database.record.replaced',
    RecordResponsibilityChanged: 'database.record.responsibilityChanged',
    RecordsInserted: 'database.records.inserted',
    RecordsUpdated: 'database.records.updated',
    RecordsDeleted: 'database.records.deleted',
  },
  Membership: {
    UserRegistered: 'membership.user.registered',
    UserInvited: 'membership.user.invited',
    UserVerified: 'membership.user.verified',
    UserUpdated: 'membership.user.updated',
    UserDeleted: 'membership.user.deleted',
    UserBlocked: 'membership.user.blocked',
    UserReactivated: 'membership.user.reactivated',
  },
  Files: {
    FileUploaded: 'files.file.uploaded',
    FileDeleted: 'files.file.deleted',
  },
  Payments: {
    /**
     * A payment provider (Stripe, Apple In-App, Google In-App, …) called the
     * project's payments webhook. The payload is the normalized payment fact;
     * the provider's own event name (`payment_intent.succeeded`, …) is
     * `payload.eventName`.
     */
    WebhookReceived: 'payments.webhook.received',
  },
} as const satisfies Record<string, Record<string, NorbixWebhookEventName>>;

export interface NorbixWebhookEventGroup {
  group: string;
  label: string;
  events: readonly string[];
}

export const NORBIX_WEBHOOK_EVENT_GROUPS: NorbixWebhookEventGroup[] = [
  {
    group: 'database',
    label: 'Database',
    events: [
      'database.record.inserted',
      'database.record.updated',
      'database.record.deleted',
      'database.record.replaced',
      'database.record.responsibilityChanged',
      'database.records.inserted',
      'database.records.updated',
      'database.records.deleted',
    ],
  },
  {
    group: 'membership',
    label: 'Membership',
    events: [
      'membership.user.registered',
      'membership.user.invited',
      'membership.user.verified',
      'membership.user.updated',
      'membership.user.deleted',
      'membership.user.blocked',
      'membership.user.reactivated',
    ],
  },
  {
    group: 'files',
    label: 'Files',
    events: ['files.file.uploaded', 'files.file.deleted'],
  },
  {
    group: 'payments',
    label: 'Payments',
    events: ['payments.webhook.received'],
  },
];
