import { inAppChannel } from './events.js';
import { readSse, type SseMessage } from './stream.js';
import type {
  NorbixRealtimeEnvelope,
  NorbixRealtimeHandler,
  NorbixSseClientOptions,
  NorbixSseStatus,
} from './types.js';

const DEFAULT_VERSION = 'v2';
const DEFAULT_RECONNECT = { baseDelayMs: 500, maxDelayMs: 10_000, enabled: true };

/**
 * Realtime / InApp client over SSE.
 *
 * ```ts
 * const sse = norbix.sse({ channels: [inAppChannel(projectId)] });
 * sse.onInApp((env) => console.log(env.eventName, env.payload));
 * await sse.connect();
 * // ...
 * sse.close();
 * ```
 *
 * Targeting (InApp plan §6b):
 *  - Pass `channels: [inAppChannel(projectId)]` for project/broadcast scope.
 *  - Pass NO channels and connect with a user token to receive only the
 *    events the gateway routes to that user (NotifyUserId). The two combine.
 *
 * Reconnect: on a dropped stream the client reconnects with exponential
 * backoff + jitter. SSE has no server replay, so on (re)connect you should
 * ALSO fetch unread from the inbox (see the example) to catch up on anything
 * missed while disconnected — `Last-Event-Id` is sent as a hint but the
 * gateway does not replay a per-user backlog.
 */
export class NorbixSseClient {
  private readonly opts: Required<Pick<NorbixSseClientOptions, 'hubUrl'>> & NorbixSseClientOptions;
  private readonly fetchImpl: typeof fetch;
  private readonly reconnect: { baseDelayMs: number; maxDelayMs: number; enabled: boolean };

  private abort?: AbortController;
  private closed = false;
  private attempt = 0;
  private lastEventId?: string;

  private readonly handlers = new Set<NorbixRealtimeHandler>();
  private readonly eventHandlers = new Map<string, Set<NorbixRealtimeHandler>>();
  private statusHandler?: (s: NorbixSseStatus) => void;
  private errorHandler?: (err: unknown) => void;

  constructor(options: NorbixSseClientOptions) {
    if (!options.hubUrl) throw new Error('NorbixSseClient: hubUrl is required');
    this.opts = options as Required<Pick<NorbixSseClientOptions, 'hubUrl'>> &
      NorbixSseClientOptions;
    const f = options.fetchImpl ?? globalThis.fetch;
    if (typeof f !== 'function') {
      throw new Error(
        'NorbixSseClient: no fetch available. Pass options.fetchImpl on older runtimes.',
      );
    }
    this.fetchImpl = f;
    this.reconnect = { ...DEFAULT_RECONNECT, ...(options.reconnect ?? {}) };
  }

  /** Subscribe to every realtime envelope, regardless of event name. */
  onMessage(handler: NorbixRealtimeHandler): this {
    this.handlers.add(handler);
    return this;
  }

  /** Subscribe to a single event name, e.g. "payments.order.paid". */
  on(eventName: string, handler: NorbixRealtimeHandler): this {
    let set = this.eventHandlers.get(eventName);
    if (!set) {
      set = new Set();
      this.eventHandlers.set(eventName, set);
    }
    set.add(handler);
    return this;
  }

  /** Subscribe to all in-app envelopes (channel family "inapp"). */
  onInApp(handler: NorbixRealtimeHandler): this {
    return this.onMessage((env) => {
      if (env.channel === 'inapp') return handler(env);
    });
  }

  /** Connection lifecycle notifications. */
  onStatus(handler: (status: NorbixSseStatus) => void): this {
    this.statusHandler = handler;
    return this;
  }

  /** Connect errors (each failed attempt before a reconnect). */
  onError(handler: (err: unknown) => void): this {
    this.errorHandler = handler;
    return this;
  }

  /** Open the stream. Resolves once the first connection is established;
   *  keeps running (with reconnect) until `close()`. */
  async connect(): Promise<void> {
    this.closed = false;
    await this.runLoop();
  }

  /** Stop the stream and disable reconnect. */
  close(): void {
    this.closed = true;
    this.abort?.abort();
    this.setStatus('closed');
  }

  /** The full stream URL including channels query. */
  streamUrl(): string {
    const version = this.opts.hubVersion ?? DEFAULT_VERSION;
    const base = this.opts.hubUrl.replace(/\/+$/, '');
    const url = new URL(`${base}/event-stream`);
    // ServiceStack reads channels from the query string.
    const channels = this.opts.channels ?? [];
    if (channels.length > 0) url.searchParams.set('channels', channels.join(','));
    // Stable id so the same logical client is recognizable in subscriber lists.
    url.searchParams.set('t', String(Date.now()));
    void version; // version is part of API paths; stream path is unversioned
    return url.toString();
  }

  private headers(): Record<string, string> {
    const h: Record<string, string> = {};
    if (this.opts.token) h['Authorization'] = `Bearer ${this.opts.token}`;
    if (this.lastEventId) h['Last-Event-Id'] = this.lastEventId;
    return h;
  }

  private async runLoop(): Promise<void> {
    let firstConnectSettled = false;
    while (!this.closed) {
      this.abort = new AbortController();
      this.setStatus(this.attempt === 0 ? 'connecting' : 'reconnecting');
      try {
        await readSse(
          this.streamUrl(),
          { method: 'GET', headers: this.headers() },
          {
            signal: this.abort.signal,
            onOpen: () => {
              this.attempt = 0;
              this.setStatus('open');
              firstConnectSettled = true;
            },
            onMessage: (msg) => this.dispatch(msg),
          },
          this.fetchImpl,
        );
        // Stream ended cleanly (server closed). Reconnect unless closed.
      } catch (err) {
        if (this.closed) break;
        this.errorHandler?.(err);
        if (!firstConnectSettled) {
          // Surface the very first failure to the caller of connect().
          // Still reconnect afterwards if enabled.
          firstConnectSettled = true;
        }
      }

      if (this.closed || !this.reconnect.enabled) break;
      await this.sleep(this.backoffMs());
      this.attempt += 1;
    }
  }

  private dispatch(msg: SseMessage): void {
    if (msg.id) this.lastEventId = msg.id;

    // ServiceStack selector is "cmd.<eventName>"; data is the JSON envelope.
    // Heartbeats / subscription notices that aren't our envelope are skipped.
    let envelope: NorbixRealtimeEnvelope;
    try {
      envelope = JSON.parse(msg.data) as NorbixRealtimeEnvelope;
    } catch {
      return; // not a JSON envelope (e.g. ServiceStack control frame)
    }
    if (!envelope || typeof envelope.eventName !== 'string') return;

    for (const h of this.handlers) void h(envelope);
    const named = this.eventHandlers.get(envelope.eventName);
    if (named) for (const h of named) void h(envelope);
  }

  private backoffMs(): number {
    const exp = Math.min(this.reconnect.maxDelayMs, this.reconnect.baseDelayMs * 2 ** this.attempt);
    // Full jitter.
    return Math.random() * exp;
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private setStatus(s: NorbixSseStatus): void {
    this.statusHandler?.(s);
  }
}

/** Convenience: build a client already subscribed to a project's in-app channel. */
export function inAppClient(
  options: Omit<NorbixSseClientOptions, 'channels'> & { projectId: string },
): NorbixSseClient {
  return new NorbixSseClient({
    ...options,
    channels: [inAppChannel(options.projectId)],
  });
}
