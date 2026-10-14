import { describe, expect, it } from 'vitest';

import { Norbix } from '../src/index.js';

import { createMockFetch } from './_helpers.js';

function client(body: unknown = {}) {
  const mock = createMockFetch({ body });
  const norbix = new Norbix({
    projectId: 'p1',
    bearerToken: 'user-jwt',
    apiVersion: 'v3',
    baseUrl: { api: 'https://api.example.test', hub: 'https://hub.example.test' },
    fetch: mock.fetch,
  });
  return { norbix, mock };
}

describe('notifications.push — end-user push devices and messages', () => {
  it('registerDevice: POST /v3/notifications/push/devices with the device in the body', async () => {
    const { norbix, mock } = client({ id: 'pnd_1' });

    const res = await norbix.notifications.push.registerDevice({
      provider: 'expo',
      token: 'ExponentPushToken[abc]',
      platform: 'ios',
      osName: 'iOS',
      installationId: 'inst-1',
      locale: 'lt-LT',
      timeZone: 'Europe/Vilnius',
    });

    expect(res.id).toBe('pnd_1');
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toBe('https://api.example.test/v3/notifications/push/devices');
    expect(JSON.parse(mock.lastCall?.body ?? '{}')).toMatchObject({
      provider: 'expo',
      token: 'ExponentPushToken[abc]',
      platform: 'ios',
      installationId: 'inst-1',
    });
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer user-jwt');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('p1');
  });

  it('listDevices: GET /v3/notifications/push/devices', async () => {
    const { norbix, mock } = client();
    await norbix.notifications.push.listDevices();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url).toBe('https://api.example.test/v3/notifications/push/devices');
  });

  it('removeDevice: DELETE /v3/notifications/push/devices/{id}', async () => {
    const { norbix, mock } = client();
    await norbix.notifications.push.removeDevice('pnd_1');
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url).toBe('https://api.example.test/v3/notifications/push/devices/pnd_1');
  });

  it('removeDeviceByToken: DELETE /v3/notifications/push/devices?token=', async () => {
    const { norbix, mock } = client();
    await norbix.notifications.push.removeDeviceByToken('ExponentPushToken[abc]');
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url).toBe(
      'https://api.example.test/v3/notifications/push/devices?token=ExponentPushToken%5Babc%5D',
    );
  });

  it('listMessages: GET /v3/notifications/push/messages with paging + unreadOnly', async () => {
    const { norbix, mock } = client();
    await norbix.notifications.push.listMessages({ unreadOnly: true, pageSize: 20 });
    expect(mock.lastCall?.method).toBe('GET');
    const url = new URL(mock.lastCall!.url);
    expect(url.pathname).toBe('/v3/notifications/push/messages');
    expect(url.searchParams.get('unreadOnly')).toBe('true');
    expect(url.searchParams.get('pageSize')).toBe('20');
  });

  it('markMessageRead: POST /v3/notifications/push/messages/{id}/read', async () => {
    const { norbix, mock } = client();
    await norbix.notifications.push.markMessageRead('pnm_1');
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toBe(
      'https://api.example.test/v3/notifications/push/messages/pnm_1/read',
    );
  });

  it('markAllMessagesRead: POST /v3/notifications/push/messages/read', async () => {
    const { norbix, mock } = client();
    await norbix.notifications.push.markAllMessagesRead();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toBe('https://api.example.test/v3/notifications/push/messages/read');
  });

  it('per-call options reach the request (language, env)', async () => {
    const { norbix, mock } = client();
    await norbix.notifications.push.listDevices({ language: 'lt', env: 'TEST' });
    expect(mock.lastCall?.headers.get('Accept-Language')).toBe('lt');
    expect(mock.lastCall?.headers.get('norbix-env')).toBe('TEST');
  });
});

describe('sign-in — no refresh token for project users', () => {
  it('login returns usr_… and no refresh token; an expired token surfaces as 401', async () => {
    const calls: string[] = [];
    const fetchImpl = (async (input: string | URL | Request) => {
      const url = String(input);
      calls.push(url);
      return url.endsWith('/auth')
        ? new Response(JSON.stringify({ bearerToken: 'jwt', userId: 'usr_1' }), { status: 200 })
        : new Response('{}', { status: 401 });
    }) as typeof fetch;

    const norbix = new Norbix(
      { projectId: 'p1', fetch: fetchImpl, retry: { maxRetries: 0 } },
      { envSource: {} },
    );
    const res = await norbix.login({ userName: 'a@b.c', password: 'pw' });
    expect(res.userId).toBe('usr_1');
    expect(res.refreshToken).toBeUndefined();
    expect(norbix.getConfig().refreshBearerToken).toBeUndefined();

    await expect(norbix.api.database.find({ collectionName: 'o' })).rejects.toMatchObject({
      status: 401,
    });
    // No second sign-in: the SDK keeps no credentials.
    expect(calls.filter((u) => u.endsWith('/auth'))).toHaveLength(1);
  });
});

describe('API key auth', () => {
  it('a service-user key (ak-…) is sent as Authorization: Bearer', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix(
      { projectId: 'p1', apiKey: 'ak-test-123', fetch: mock.fetch },
      { envSource: {} },
    );
    await norbix.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer ak-test-123');
  });
});
