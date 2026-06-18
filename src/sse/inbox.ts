/**
 * Thin client for the notification inbox HTTP endpoints (the bell). Pairs
 * with SSE: on (re)connect or app-resume, call `getInbox`/`getUnreadCount`
 * to catch up on anything missed while disconnected, since SSE does not
 * replay (InApp plan §6).
 *
 * These hit the Hub endpoints added in
 * `gateway/src/Isidos.CodeMash.Gateway.Hub.Notifications/Inbox`.
 */

import type { NorbixRealtimePayload } from './types.js';

export interface NorbixInboxItem {
  id: string;
  projectId: string;
  userAuthId: string;
  channel: string;
  eventName: string;
  /** Serialized payload (parse with JSON.parse). */
  payloadJson?: string | null;
  isRead: boolean;
  seenAtUtc?: string | null;
  readAtUtc?: string | null;
  createdAtUtc: string;
}

export interface NorbixInboxOptions {
  hubUrl: string;
  hubVersion?: string;
  token?: string;
  /** Sent as norbix-project-id; required by the project-scoped endpoints. */
  projectId: string;
  fetchImpl?: typeof fetch;
}

export class NorbixInboxClient {
  private readonly base: string;
  private readonly version: string;
  private readonly fetchImpl: typeof fetch;

  constructor(private readonly opts: NorbixInboxOptions) {
    this.base = opts.hubUrl.replace(/\/+$/, '');
    this.version = opts.hubVersion ?? 'v2';
    const f = opts.fetchImpl ?? globalThis.fetch;
    if (typeof f !== 'function') {
      throw new Error('NorbixInboxClient: no fetch available; pass options.fetchImpl.');
    }
    this.fetchImpl = f;
  }

  private headers(): Record<string, string> {
    const h: Record<string, string> = { Accept: 'application/json' };
    if (this.opts.token) h['Authorization'] = `Bearer ${this.opts.token}`;
    if (this.opts.projectId) h['norbix-project-id'] = this.opts.projectId;
    return h;
  }

  private url(path: string): string {
    return `${this.base}/${this.version}${path}`;
  }

  /** Bell list. `unreadOnly` filters to unread; `channel` filters source. */
  async getInbox(
    params: { unreadOnly?: boolean; channel?: string; pageSize?: number } = {},
  ): Promise<NorbixInboxItem[]> {
    const u = new URL(this.url('/notifications/inbox'));
    if (params.unreadOnly) u.searchParams.set('unreadOnly', 'true');
    if (params.channel) u.searchParams.set('channel', params.channel);
    if (params.pageSize) u.searchParams.set('pageSize', String(params.pageSize));

    const res = await this.fetchImpl(u.toString(), { headers: this.headers() });
    if (!res.ok) throw new Error(`getInbox failed: HTTP ${res.status}`);
    const body = (await res.json()) as { list?: { items?: NorbixInboxItem[] } };
    return body.list?.items ?? [];
  }

  /** Unread badge count. */
  async getUnreadCount(): Promise<number> {
    const res = await this.fetchImpl(this.url('/notifications/inbox/unread-count'), {
      headers: this.headers(),
    });
    if (!res.ok) throw new Error(`getUnreadCount failed: HTTP ${res.status}`);
    const body = (await res.json()) as { count?: number };
    return body.count ?? 0;
  }

  async markRead(notificationId: string): Promise<void> {
    const res = await this.fetchImpl(
      this.url(`/notifications/inbox/${encodeURIComponent(notificationId)}/read`),
      { method: 'POST', headers: this.headers() },
    );
    if (!res.ok) throw new Error(`markRead failed: HTTP ${res.status}`);
  }

  async markAllRead(): Promise<void> {
    const res = await this.fetchImpl(this.url('/notifications/inbox/read-all'), {
      method: 'POST',
      headers: this.headers(),
    });
    if (!res.ok) throw new Error(`markAllRead failed: HTTP ${res.status}`);
  }
}

/** Parse an inbox item's stored payload into the typed union. */
export function parseInboxPayload(item: NorbixInboxItem): NorbixRealtimePayload | null {
  if (!item.payloadJson) return null;
  try {
    return JSON.parse(item.payloadJson) as NorbixRealtimePayload;
  } catch {
    return null;
  }
}
