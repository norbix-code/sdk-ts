/**
 * Minimal SSE wire parser over a `fetch` ReadableStream. Portable across
 * Node 18+ and browsers, and (unlike the browser `EventSource`) lets us send
 * an `Authorization` header. Zero deps.
 *
 * Parses the SSE framing only: `event:`, `data:`, `id:`, and the blank-line
 * dispatch. Comment lines (`:`) — used by ServiceStack heartbeats — are
 * ignored. Multi-line `data:` is joined with "\n" per the spec.
 */

export interface SseMessage {
  /** The `event:` field, or "message" when omitted. */
  event: string;
  /** Joined `data:` lines. */
  data: string;
  /** The last `id:` seen, if any. */
  id?: string;
}

export interface ReadSseOptions {
  signal?: AbortSignal;
  /** Called for each fully-parsed SSE message. */
  onMessage: (msg: SseMessage) => void;
  /** Called once when the response is open (status 200, stream started). */
  onOpen?: () => void;
}

/**
 * Open an SSE connection with `fetch` and pump parsed messages to
 * `onMessage` until the stream ends or `signal` aborts. Resolves when the
 * stream closes normally; rejects on network/HTTP error so the caller can
 * decide whether to reconnect.
 */
export async function readSse(
  url: string,
  init: RequestInit,
  options: ReadSseOptions,
  fetchImpl: typeof fetch = fetch,
): Promise<void> {
  const res = await fetchImpl(url, {
    ...init,
    headers: {
      Accept: 'text/event-stream',
      'Cache-Control': 'no-cache',
      ...(init.headers ?? {}),
    },
    signal: options.signal,
  });

  if (!res.ok) {
    throw new Error(`SSE connect failed: HTTP ${res.status} ${res.statusText}`);
  }
  if (!res.body) {
    throw new Error('SSE connect failed: response has no body stream');
  }

  options.onOpen?.();

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  // Per-event accumulators.
  let event = 'message';
  let dataLines: string[] = [];
  let lastId: string | undefined;

  const dispatch = () => {
    if (dataLines.length === 0 && event === 'message') {
      // Nothing meaningful (e.g. a stray blank line) — reset and skip.
      event = 'message';
      dataLines = [];
      return;
    }
    options.onMessage({ event, data: dataLines.join('\n'), id: lastId });
    event = 'message';
    dataLines = [];
  };

  const handleLine = (line: string) => {
    if (line === '') {
      dispatch();
      return;
    }
    if (line.startsWith(':')) {
      return; // comment / heartbeat
    }
    const colon = line.indexOf(':');
    const field = colon === -1 ? line : line.slice(0, colon);
    // SSE: a single leading space after the colon is stripped.
    let value = colon === -1 ? '' : line.slice(colon + 1);
    if (value.startsWith(' ')) value = value.slice(1);

    switch (field) {
      case 'event':
        event = value;
        break;
      case 'data':
        dataLines.push(value);
        break;
      case 'id':
        lastId = value;
        break;
      // 'retry' ignored — reconnect policy is owned by the client.
    }
  };

  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    // Normalize CRLF, split on newline, keep the trailing partial line.
    buffer = buffer.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    let idx: number;
    while ((idx = buffer.indexOf('\n')) !== -1) {
      const line = buffer.slice(0, idx);
      buffer = buffer.slice(idx + 1);
      handleLine(line);
    }
  }
}
