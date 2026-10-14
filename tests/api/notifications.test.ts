import { describe, expect, it } from 'vitest';

import { NotificationsModule } from '../../src/api/notifications.js';
import { createMockFetch, expectedUrl, makeClient, stubRequestForPath } from '../_helpers.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Tests for api.notifications (7 endpoints).
 *
 * Each method is asserted against:
 *   - presence on the module (smoke check)
 *   - issued HTTP verb + URL with version segment substituted and path
 *     tokens interpolated from a stubbed request
 *   - auth, project, and (when applicable) account headers
 *   - account-scope guard: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId
 */
describe('api.notifications', () => {
  it('module exposes 7 method(s)', () => {
    const mock = createMockFetch();
    const mod = new NotificationsModule({} as never);
    void mod; // silence unused — we only need the type
    // Sanity check the auto-mapped surface exists on the namespaced client.
    const { norbix } = makeClient();
    const ns = (norbix.api as unknown as Record<string, unknown>)['notifications'] as Record<
      string,
      unknown
    >;
    expect(ns).toBeDefined();
    void mock;
    expect(typeof ns['registerOwnPushDevice']).toBe('function');
    expect(typeof ns['getOwnPushDevices']).toBe('function');
    expect(typeof ns['deleteOwnPushDevice']).toBe('function');
    expect(typeof ns['deleteOwnPushDeviceByToken']).toBe('function');
    expect(typeof ns['getOwnPushMessages']).toBe('function');
    expect(typeof ns['markOwnPushMessageRead']).toBe('function');
    expect(typeof ns['markAllOwnPushMessagesRead']).toBe('function');
  });

  it('registerOwnPushDevice: POST /{version}/notifications/push/devices', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/push/devices',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['registerOwnPushDevice']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getOwnPushDevices: GET /{version}/notifications/push/devices', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/push/devices',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getOwnPushDevices']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('deleteOwnPushDevice: DELETE /{version}/notifications/push/devices/{Id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/push/devices/{Id}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/push/devices/{Id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['deleteOwnPushDevice']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('deleteOwnPushDeviceByToken: DELETE /{version}/notifications/push/devices', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/push/devices',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['deleteOwnPushDeviceByToken']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getOwnPushMessages: GET /{version}/notifications/push/messages', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/push/messages',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getOwnPushMessages']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('markOwnPushMessageRead: POST /{version}/notifications/push/messages/{Id}/read', async () => {
    const stub = stubRequestForPath('/{version}/notifications/push/messages/{Id}/read');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/push/messages/{Id}/read',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['markOwnPushMessageRead']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('markAllOwnPushMessagesRead: POST /{version}/notifications/push/messages/read', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/push/messages/read',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['markAllOwnPushMessagesRead']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });
});
