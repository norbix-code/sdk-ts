/**
 * Realtime / InApp delivery over Server-Sent Events.
 *
 * Wire contract: gateway `ServerEventsFeature` at `/event-stream`, the
 * `RealtimeEnvelope` shape, and `project:{id}:{family}` channels. See
 * gateway `docs/plans/InApp-Realtime-SSE-Plan.md`.
 *
 * Transport note: this module uses `fetch` streaming (not the browser
 * `EventSource`) so it can send an `Authorization: Bearer` header and run
 * unchanged in Node 18+ and the browser. Zero runtime deps.
 */

/** The single shape delivered for any realtime/InApp event. Mirrors the
 *  gateway `RealtimeEnvelope`. */
export interface NorbixRealtimeEnvelope<TPayload = NorbixRealtimePayload> {
  /** Channel family: "inapp" | "project" | "agent" | "cmd". */
  channel: string;
  /** Dotted event type, e.g. "payments.order.paid". */
  eventName: string;
  projectId: string;
  /** Present only when the event was persisted to the inbox. */
  notificationId?: string | null;
  createdAtUtc: string;
  payload?: TPayload | null;
}

/** Base of the typed, discriminated payload. The app switches on `type`. */
export interface NorbixRealtimePayloadBase {
  type: string;
}

export interface NorbixGlobalAdPayload extends NorbixRealtimePayloadBase {
  type: 'globalAd';
  title?: string;
  body?: string;
  imageUrl?: string;
}

export interface NorbixPromoPopupPayload extends NorbixRealtimePayloadBase {
  type: 'promoPopup';
  title?: string;
  body?: string;
  couponCode?: string;
  action?: NorbixRealtimeAction;
}

export interface NorbixWorkflowStepPayload extends NorbixRealtimePayloadBase {
  type: 'workflowStep';
  step: string;
  data?: Record<string, string>;
}

/** Forward-compat: any unknown/custom `type` (developer custom JSON). */
export interface NorbixCustomPayload extends NorbixRealtimePayloadBase {
  [key: string]: unknown;
}

export type NorbixRealtimePayload =
  | NorbixGlobalAdPayload
  | NorbixPromoPopupPayload
  | NorbixWorkflowStepPayload
  | NorbixCustomPayload;

export interface NorbixRealtimeAction {
  type: string; // "navigate" | "open" | ...
  ref?: string;
}

/** Connection state, surfaced via `onStatus`. */
export type NorbixSseStatus = 'connecting' | 'open' | 'reconnecting' | 'closed';

export interface NorbixSseClientOptions {
  /** Hub base URL, e.g. https://hub.norbix.dev. */
  hubUrl: string;
  /** API version segment for the stream path. Defaults to "v2". */
  hubVersion?: string;
  /** Bearer token (JWT) OR API key — sent as Authorization: Bearer. */
  token?: string;
  /** Project this client belongs to (for project channels). */
  projectId?: string;
  /** Channels to subscribe to on connect, e.g. ["project:{id}:inapp"].
   *  Use the helpers in `events.ts` to build these. */
  channels?: string[];
  /** Reconnect backoff. Defaults: base 500ms, max 10s, jitter on. */
  reconnect?: {
    baseDelayMs?: number;
    maxDelayMs?: number;
    enabled?: boolean;
  };
  /** Inject a fetch impl (tests / older runtimes). Defaults to global fetch. */
  fetchImpl?: typeof fetch;
}

/** A handler for a parsed envelope. */
export type NorbixRealtimeHandler<TPayload = NorbixRealtimePayload> = (
  envelope: NorbixRealtimeEnvelope<TPayload>,
) => void | Promise<void>;
