import { describe, expect, it } from 'vitest';

import { LogsModule } from '../../src/api/logs.js';
import { createMockFetch, expectedUrl, makeClient } from '../_helpers.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Tests for api.logs (1 endpoints).
 *
 * Each method is asserted against:
 *   - presence on the module (smoke check)
 *   - issued HTTP verb + URL with version segment substituted and path
 *     tokens interpolated from a stubbed request
 *   - auth, project, and (when applicable) account headers
 *   - account-scope guard: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId
 */
describe('api.logs', () => {
  it('module exposes 1 method(s)', () => {
    const mock = createMockFetch();
    const mod = new LogsModule({} as never);
    void mod; // silence unused — we only need the type
    // Sanity check the auto-mapped surface exists on the namespaced client.
    const { norbix } = makeClient();
    const ns = (norbix.api as unknown as Record<string, unknown>)['logs'] as Record<
      string,
      unknown
    >;
    expect(ns).toBeDefined();
    void mock;
    expect(typeof ns['writeLogs']).toBe('function');
  });

  it('writeLogs: POST /{version}/logs', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/logs',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['logs']!['writeLogs']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  // @hand-written:begin
  /** A fetch that answers every call with one fixed response and counts the calls. */
  function fixedAnswer(status: number, body: unknown, headers: Record<string, string> = {}) {
    const sent: RequestInit[] = [];
    const fetch = (async (_url: string, init?: RequestInit) => {
      sent.push(init ?? {});
      return new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json', ...headers },
      });
    }) as unknown as typeof globalThis.fetch;
    return { norbix: makeClient({ fetch }).norbix, sent };
  }

  /** What a refused call throws — the fields every Norbix SDK error carries. */
  type Thrown = {
    name: string;
    httpStatus: number;
    errorCode?: string;
    retryAfterSeconds?: number;
  };
  it('writeLogs: every entry field goes in the JSON body on the API host', async () => {
    const { norbix, mock } = makeClient({});
    const entry = {
      level: 'warning',
      title: 'Payment retried',
      message: 'Card declined once, second try passed',
      eventCode: 'order:paid',
      correlationId: 'ord_123',
      timestamp: '2026-10-21T10:00:00Z',
      meta: { orderId: 'ord_123', attempt: '2' },
    };
    await norbix.api.logs.writeLogs({ entries: [entry] });
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toBe('https://api.norbix.io/v2/logs');
    expect(JSON.parse(mock.lastCall!.body!)).toEqual({ entries: [entry] });
  });

  it('write: one line is sent as a one-item entries list', async () => {
    const { norbix, mock } = makeClient({});
    await norbix.api.logs.write({ title: 'Signed up', eventCode: 'user:signup' });
    expect(mock.lastCall?.url).toBe('https://api.norbix.io/v2/logs');
    expect(JSON.parse(mock.lastCall!.body!)).toEqual({
      entries: [{ title: 'Signed up', eventCode: 'user:signup' }],
    });
  });

  it('write: a list is sent as it is and the accepted count comes back', async () => {
    const { norbix, sent } = fixedAnswer(200, { accepted: 2 });
    const res = await norbix.api.logs.write([{ title: 'a' }, { title: 'b', level: 'error' }]);
    expect(res.accepted).toBe(2);
    expect(JSON.parse(sent[0]!.body as string)).toEqual({
      entries: [{ title: 'a' }, { title: 'b', level: 'error' }],
    });
  });

  it('writeLogs: a 429 throws once (no retry) with the Retry-After seconds', async () => {
    const { norbix, sent } = fixedAnswer(
      429,
      {
        responseStatus: {
          isSuccess: false,
          errors: [{ errorCode: 'CM-ERRORS-LOGGING-003', message: 'Log quota used up' }],
        },
      },
      { 'Retry-After': '7' },
    );
    const err = (await norbix.api.logs.write({ title: 'x' }).catch((e: unknown) => e)) as Thrown;
    expect(err.name).toBe('NorbixError');
    expect(err.httpStatus).toBe(429);
    expect(err.errorCode).toBe('CM-ERRORS-LOGGING-003');
    expect(err.retryAfterSeconds).toBe(7);
    expect(sent).toHaveLength(1);
  });

  it('writeLogs: Logs module off is a 400 validation error with its code', async () => {
    const { norbix } = fixedAnswer(400, {
      responseStatus: {
        isSuccess: false,
        errors: [{ errorCode: 'CM-ERRORS-LOGGING-002', message: 'Logs module is off' }],
      },
    });
    const err = (await norbix.api.logs.write({ title: 'x' }).catch((e: unknown) => e)) as Thrown;
    expect(err.name).toBe('NorbixValidationError');
    expect(err.httpStatus).toBe(400);
    expect(err.errorCode).toBe('CM-ERRORS-LOGGING-002');
    expect(err.retryAfterSeconds).toBeUndefined();
  });
  // @hand-written:end
});
