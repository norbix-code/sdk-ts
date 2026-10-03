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
 * The end-user AI chat channel: "ai-chat:{projectId}:{authId}".
 *
 * Only the signed-in user whose `authId` it is may subscribe. The gateway
 * answers a subscription to someone else's channel with 403 and
 * `responseStatus.errorCode = "AiChatChannelRefused"` before the stream
 * starts, and the SSE client stops without retrying (status `refused`).
 * Turn progress (`ai.chat.turn.*`) and session changes (`ai.chat.session.*`)
 * arrive here; the stream lives on the **API** host (`norbix.aiChat()`).
 */
export function aiChatChannel(projectId: string, authId: string): string {
  return `ai-chat:${projectId}:${authId}`;
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
  /** End-user AI chat. A turn answers at once with a `turnId`; the rest
   *  arrives on `aiChatChannel(projectId, authId)`. */
  AiChat: {
    TurnStarted: 'ai.chat.turn.started',
    TurnToken: 'ai.chat.turn.token',
    TurnTool: 'ai.chat.turn.tool',
    TurnCompleted: 'ai.chat.turn.completed',
    TurnFailed: 'ai.chat.turn.failed',
    SessionCreated: 'ai.chat.session.created',
    SessionRenamed: 'ai.chat.session.renamed',
    SessionPinned: 'ai.chat.session.pinned',
    SessionUnpinned: 'ai.chat.session.unpinned',
    SessionArchived: 'ai.chat.session.archived',
    SessionUnarchived: 'ai.chat.session.unarchived',
    SessionDeleted: 'ai.chat.session.deleted',
  },
} as const;
