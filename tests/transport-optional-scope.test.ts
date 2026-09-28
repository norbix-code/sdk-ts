/**
 * The `'optional'` scope — auth is sent when the client has a token, never
 * required. It exists for the signed notification preview links: the gateway
 * opens `GET /{version}/notifications/{push|email|sms}/preview?hash=<link>`
 * without sign-in when the hash is a valid signed link, and a signed-in
 * member may still call it with their token.
 *
 * Hand-written: the generated module tests are refreshed by
 * `npm run generate-endpoints` and would lose these.
 *
 * What each test proves:
 *   - with no apiKey / bearerToken the request still goes out (no
 *     NORBIX_NOT_AUTHENTICATED), with NO Authorization header, and `hash`
 *     in the query string;
 *   - with a token the Authorization header is sent as usual;
 *   - a 401 on a call sent without a token is not "refreshed" — the link is
 *     bad, a new token cannot fix it;
 *   - the other scopes behave exactly as before.
 */
import { describe, expect, it, vi } from 'vitest';

import { Transport } from '../src/client/transport.js';
import type { Scope } from '../src/client/transport.js';
import type { ResolvedNorbixConfig } from '../src/client/types.js';
import { NotificationsModule } from '../src/hub/notifications.js';

import { createMockFetch } from './_helpers.js';

function transport(
  overrides: Partial<ResolvedNorbixConfig> = {},
  mockOpts: Parameters<typeof createMockFetch>[0] = { body: {} },
) {
  const mock = createMockFetch(mockOpts);
  const cfg = {
    baseUrl: { api: 'https://api.norbix.io', hub: 'https://hub.norbix.io' },
    apiVersion: 'v2',
    hubVersion: 'v2',
    defaultHeaders: {},
    timeoutMs: 5_000,
    retry: { maxRetries: 0, baseDelayMs: 1, maxDelayMs: 1 },
    fetch: mock.fetch,
    ...overrides,
  } as unknown as ResolvedNorbixConfig;
  return { t: new Transport(cfg), mock, cfg };
}

const previewRoutes = [
  { channel: 'push', path: '/{version}/notifications/push/preview' },
  { channel: 'email', path: '/{version}/notifications/email/preview' },
  { channel: 'sms', path: '/{version}/notifications/sms/preview' },
] as const;

describe("transport scope 'optional' — signed notification preview links", () => {
  describe.each(previewRoutes)('$channel preview', ({ channel, path }) => {
    it('with no apiKey / bearerToken: sends the hash, no Authorization, does not throw', async () => {
      const { t, mock } = transport();

      await t.send({
        target: 'hub',
        path,
        method: 'GET',
        request: { hash: 'abc.def' },
        scope: 'optional',
      });

      expect(mock.lastCall?.method).toBe('GET');
      expect(mock.lastCall?.url).toBe(
        `https://hub.norbix.io/v2/notifications/${channel}/preview?hash=abc.def`,
      );
      expect(mock.lastCall?.headers.get('Authorization')).toBeNull();
    });

    it('with an apiKey: sends it as the bearer token', async () => {
      const { t, mock } = transport({ apiKey: 'key-123', projectId: 'p-1' });

      await t.send({
        target: 'hub',
        path,
        method: 'GET',
        request: { hash: 'abc.def' },
        scope: 'optional',
      });

      expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer key-123');
      expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('p-1');
    });
  });

  it('a per-call bearerToken wins over the client apiKey', async () => {
    const { t, mock } = transport({ apiKey: 'key-123' });

    await t.send({
      target: 'hub',
      path: '/{version}/notifications/push/preview',
      method: 'GET',
      request: { hash: 'abc.def' },
      scope: 'optional',
      bearerToken: 'session-jwt',
    });

    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer session-jwt');
  });

  it('sends no project header when the client has no projectId', async () => {
    const { t, mock } = transport();

    await t.send({
      target: 'hub',
      path: '/{version}/notifications/push/preview',
      method: 'GET',
      request: { hash: 'abc.def' },
      scope: 'optional',
    });

    expect(mock.lastCall?.headers.get('norbix-project-id')).toBeNull();
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBeNull();
  });

  it('a 401 on a call sent without a token is not refreshed — the link itself is bad', async () => {
    const refreshBearerToken = vi.fn(async () => 'new-token');
    const { t, mock } = transport(
      { refreshBearerToken },
      { status: 401, body: { responseStatus: { message: 'Link expired' } } },
    );

    await expect(
      t.send({
        target: 'hub',
        path: '/{version}/notifications/push/preview',
        method: 'GET',
        request: { hash: 'expired.link' },
        scope: 'optional',
      }),
    ).rejects.toMatchObject({ status: 401 });

    expect(refreshBearerToken).not.toHaveBeenCalled();
    expect(mock.calls).toHaveLength(1);
  });

  it('a 401 on a call sent WITH a token still goes through the refresh flow', async () => {
    const refreshBearerToken = vi.fn(async () => 'new-token');
    const { t, mock } = transport(
      { bearerToken: 'stale', refreshBearerToken },
      { status: 401, body: {} },
    );

    await expect(
      t.send({
        target: 'hub',
        path: '/{version}/notifications/push/preview',
        method: 'GET',
        request: { projectId: 'p-1', notificationId: 'n-1' },
        scope: 'optional',
      }),
    ).rejects.toMatchObject({ status: 401 });

    expect(refreshBearerToken).toHaveBeenCalledTimes(1);
    expect(mock.calls).toHaveLength(2);
    expect(mock.calls[1]!.headers.get('Authorization')).toBe('Bearer new-token');
  });
});

describe('transport — the other scopes are unchanged', () => {
  it.each<Scope>(['project', 'public'])(
    "'%s' still throws NORBIX_NOT_AUTHENTICATED with no token",
    async (scope) => {
      const { t, mock } = transport();

      await expect(
        t.send({ target: 'hub', path: '/{version}/x', method: 'GET', scope }),
      ).rejects.toMatchObject({ code: 'NORBIX_NOT_AUTHENTICATED' });
      expect(mock.calls).toHaveLength(0);
    },
  );

  it("'unauthenticated' never sends Authorization, even with a token", async () => {
    const { t, mock } = transport({ apiKey: 'key-123' });

    await t.send({ target: 'hub', path: '/{version}/x', method: 'GET', scope: 'unauthenticated' });

    expect(mock.lastCall?.headers.get('Authorization')).toBeNull();
  });
});

describe('the generated preview methods use the optional scope', () => {
  it.each([
    ['previewPushNotification', 'push'],
    ['previewEmailNotification', 'email'],
    ['previewSmsNotification', 'sms'],
  ] as const)(
    '%s with only the signed link: no sign-in, no Authorization',
    async (method, channel) => {
      const { t, mock } = transport();
      const notifications = new NotificationsModule(t);

      await notifications[method]({ hash: 'abc.def' });

      expect({
        url: mock.lastCall?.url,
        authorization: mock.lastCall?.headers.get('Authorization'),
      }).toEqual({
        url: `https://hub.norbix.io/v2/notifications/${channel}/preview?hash=abc.def`,
        authorization: null,
      });
    },
  );
});
