import { describe, expect, it, vi } from 'vitest';

import { NorbixSseClient } from '../../src/sse/client.js';
import { agentChannel, inAppChannel, projectChannel } from '../../src/sse/events.js';
import { readSse } from '../../src/sse/stream.js';
import type { NorbixRealtimeEnvelope } from '../../src/sse/types.js';

/** Build a Response whose body streams the given SSE text in N chunks. */
function sseResponse(text: string, chunkSize = 16): Response {
  const enc = new TextEncoder();
  const bytes = enc.encode(text);
  let offset = 0;
  const stream = new ReadableStream<Uint8Array>({
    pull(controller) {
      if (offset >= bytes.length) {
        controller.close();
        return;
      }
      controller.enqueue(bytes.slice(offset, offset + chunkSize));
      offset += chunkSize;
    },
  });
  return new Response(stream, { status: 200, headers: { 'Content-Type': 'text/event-stream' } });
}

const ENV: NorbixRealtimeEnvelope = {
  channel: 'inapp',
  eventName: 'payments.order.paid',
  projectId: 'p1',
  notificationId: 'n1',
  createdAtUtc: '2026-06-18T00:00:00Z',
  payload: { type: 'promoPopup', title: 'Thanks!', couponCode: 'NEXT20' },
};

describe('channel helpers', () => {
  it('build project channel names the gateway authz parser accepts', () => {
    expect(inAppChannel('abc')).toBe('project:abc:inapp');
    expect(agentChannel('abc')).toBe('project:abc:agent');
    expect(projectChannel('abc', 'project')).toBe('project:abc:project');
  });
});

describe('readSse', () => {
  it('parses a frame split across chunks and ignores heartbeats', async () => {
    const frame =
      `: heartbeat\n` +
      `event: cmd.payments.order.paid\n` +
      `id: 42\n` +
      `data: ${JSON.stringify(ENV)}\n\n`;

    const messages: { event: string; data: string; id?: string }[] = [];
    const fakeFetch = vi.fn().mockResolvedValue(sseResponse(frame, 8));

    await readSse(
      'https://hub.test/event-stream',
      { method: 'GET' },
      { onMessage: (m) => messages.push(m) },
      fakeFetch as unknown as typeof fetch,
    );

    expect(messages).toHaveLength(1);
    expect(messages[0].event).toBe('cmd.payments.order.paid');
    expect(messages[0].id).toBe('42');
    expect(JSON.parse(messages[0].data).payload.type).toBe('promoPopup');
  });
});

describe('NorbixSseClient', () => {
  it('streamUrl encodes channels as a query param', () => {
    const client = new NorbixSseClient({
      hubUrl: 'https://hub.test/',
      channels: [inAppChannel('p1')],
      fetchImpl: (async () => new Response(null)) as unknown as typeof fetch,
    });
    const url = new URL(client.streamUrl());
    expect(url.pathname).toBe('/event-stream');
    expect(url.searchParams.get('channels')).toBe('project:p1:inapp');
  });

  it('dispatches a parsed envelope to onMessage and on(eventName)', async () => {
    const frame = `event: cmd.payments.order.paid\n` + `data: ${JSON.stringify(ENV)}\n\n`;

    // Resolve once, then keep the stream "open" (empty) so reconnect does not loop.
    const fakeFetch = vi
      .fn()
      .mockResolvedValueOnce(sseResponse(frame, 64))
      .mockResolvedValue(new Response(new ReadableStream({ start: () => {} })));

    const client = new NorbixSseClient({
      hubUrl: 'https://hub.test',
      token: 'jwt-abc',
      channels: [inAppChannel('p1')],
      reconnect: { enabled: false },
      fetchImpl: fakeFetch as unknown as typeof fetch,
    });

    const all: NorbixRealtimeEnvelope[] = [];
    const named: NorbixRealtimeEnvelope[] = [];
    const inapp: NorbixRealtimeEnvelope[] = [];
    client.onMessage((e) => all.push(e));
    client.on('payments.order.paid', (e) => named.push(e));
    client.onInApp((e) => inapp.push(e));

    await client.connect();

    expect(all).toHaveLength(1);
    expect(named).toHaveLength(1);
    expect(inapp).toHaveLength(1);
    expect(all[0].eventName).toBe('payments.order.paid');
    expect(all[0].notificationId).toBe('n1');

    // Auth header sent.
    const init = fakeFetch.mock.calls[0][1] as RequestInit;
    expect((init.headers as Record<string, string>).Authorization).toBe('Bearer jwt-abc');
  });

  it('ignores non-JSON control frames without throwing', async () => {
    const frame = `event: ss-heartbeat\ndata: not-json\n\n`;
    const fakeFetch = vi
      .fn()
      .mockResolvedValueOnce(sseResponse(frame, 64))
      .mockResolvedValue(new Response(new ReadableStream({ start: () => {} })));

    const client = new NorbixSseClient({
      hubUrl: 'https://hub.test',
      reconnect: { enabled: false },
      fetchImpl: fakeFetch as unknown as typeof fetch,
    });

    const all: NorbixRealtimeEnvelope[] = [];
    client.onMessage((e) => all.push(e));
    await client.connect();

    expect(all).toHaveLength(0);
  });
});
