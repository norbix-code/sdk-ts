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
] as const;

export type NorbixWebhookEventName = (typeof NORBIX_WEBHOOK_EVENT_NAMES)[number];

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
];
