import { describe, expect, it } from 'vitest';

import { ChatModule } from '../../src/api/chat.js';
import { createMockFetch, expectedUrl, makeClient } from '../_helpers.js';

/**
 * Auto-generated. Do not edit by hand — follow the internal maintenance workflow
 * to refresh this file from the DTO definitions.
 *
 * Tests for api.chat (1 endpoints).
 *
 * Each method is asserted against:
 *   - presence on the module (smoke check)
 *   - issued HTTP verb + URL with version segment substituted and path
 *     tokens interpolated from a stubbed request
 *   - auth, project, and (when applicable) account headers
 *   - account-scope guard: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId
 */
describe('api.chat', () => {
  it('module exposes 1 method(s)', () => {
    const mock = createMockFetch();
    const mod = new ChatModule({} as never);
    void mod; // silence unused — we only need the type
    // Sanity check the auto-mapped surface exists on the namespaced client.
    const { norbix } = makeClient();
    const ns = (norbix.api as unknown as Record<string, unknown>)['chat'] as Record<
      string,
      unknown
    >;
    expect(ns).toBeDefined();
    void mock;
    expect(typeof ns['askChat']).toBe('function');
  });

  it('askChat: POST /{version}/chat/complete', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/chat/complete',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['chat']!['askChat']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });
});
