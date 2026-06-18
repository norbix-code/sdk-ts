/**
 * Channel-name helpers and known event-name constants.
 *
 * Channel naming matches the gateway authz parser
 * (`ServerEventsChannelAuthz.TryParseProjectChannel`):
 *   project:{projectId}:{family}
 */

export const NorbixChannelFamily = {
  /** In-app notifications for end-user apps (bell / popups). */
  InApp: 'inapp',
  /** Structural/project events for AI agents and observers. */
  Agent: 'agent',
  /** Generic project event stream. */
  Project: 'project',
} as const;

export type NorbixChannelFamily = (typeof NorbixChannelFamily)[keyof typeof NorbixChannelFamily];

/** Build "project:{projectId}:{family}". */
export function projectChannel(projectId: string, family: NorbixChannelFamily): string {
  return `project:${projectId}:${family}`;
}

/** The in-app channel for a project: "project:{id}:inapp". */
export function inAppChannel(projectId: string): string {
  return projectChannel(projectId, NorbixChannelFamily.InApp);
}

/** The agent channel for a project: "project:{id}:agent". */
export function agentChannel(projectId: string): string {
  return projectChannel(projectId, NorbixChannelFamily.Agent);
}

/**
 * Well-known realtime event names (extend as the gateway emits more).
 * These are convenience constants for `client.on(name, handler)`; any
 * dotted string works.
 */
export const NorbixRealtimeEvents = {
  Payments: {
    OrderPaid: 'payments.order.paid',
  },
  Database: {
    RecordInserted: 'database.record.inserted',
    RecordUpdated: 'database.record.updated',
    RecordDeleted: 'database.record.deleted',
  },
  Project: {
    IntegrationEstablished: 'project.integration.established',
  },
} as const;
