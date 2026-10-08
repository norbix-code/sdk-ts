import { describe, expect, it } from 'vitest';

import { EmailModule } from '../../src/hub/email.js';
import { createMockFetch, expectedUrl, makeClient } from '../_helpers.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Tests for hub.email (2 endpoints).
 *
 * Each method is asserted against:
 *   - presence on the module (smoke check)
 *   - issued HTTP verb + URL with version segment substituted and path
 *     tokens interpolated from a stubbed request
 *   - auth, project, and (when applicable) account headers
 *   - account-scope guard: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId
 */
describe('hub.email', () => {
  it('module exposes 2 method(s)', () => {
    const mock = createMockFetch();
    const mod = new EmailModule({} as never);
    void mod; // silence unused — we only need the type
    // Sanity check the auto-mapped surface exists on the namespaced client.
    const { norbix } = makeClient();
    const ns = (norbix.hub as unknown as Record<string, unknown>)['email'] as Record<
      string,
      unknown
    >;
    expect(ns).toBeDefined();
    void mock;
    expect(typeof ns['getEmailPreferencesByLink']).toBe('function');
    expect(typeof ns['oneClickUnsubscribe']).toBe('function');
  });

  it('getEmailPreferencesByLink: GET /{version}/email/preferences', async () => {
    const stub = { token: 'signed.link.token' };
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['email']!['getEmailPreferencesByLink']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url).toBe(
      'https://hub.norbix.io/v2/email/preferences?token=signed.link.token',
    );
    // A signed-in client still sends its token (scope 'optional').
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
  });

  it('getEmailPreferencesByLink: works with no apiKey / bearerToken and sends no Authorization', async () => {
    const { norbix, mock } = makeClient({ bearerToken: undefined, apiKey: undefined });
    await norbix.hub.email.getEmailPreferencesByLink({ token: 'signed.link.token' });
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url).toBe(
      'https://hub.norbix.io/v2/email/preferences?token=signed.link.token',
    );
    expect(mock.lastCall?.headers.get('Authorization')).toBeNull();
  });

  it('oneClickUnsubscribe: POST /{version}/email/one-click-unsubscribe', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/email/one-click-unsubscribe',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['email']!['oneClickUnsubscribe']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('oneClickUnsubscribe: works with no apiKey / bearerToken and sends no Authorization', async () => {
    const { norbix, mock } = makeClient({ bearerToken: undefined, apiKey: undefined });
    await norbix.hub.email.oneClickUnsubscribe({});
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toBe('https://hub.norbix.io/v2/email/one-click-unsubscribe');
    expect(mock.lastCall?.headers.get('Authorization')).toBeNull();
  });
});
