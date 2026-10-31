import { describe, expect, it } from 'vitest';

import { NotificationsModule } from '../../src/api/notifications.js';
import { createMockFetch, expectedUrl, makeClient, stubRequestForPath } from '../_helpers.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Tests for api.notifications (48 endpoints).
 *
 * Each method is asserted against:
 *   - presence on the module (smoke check)
 *   - issued HTTP verb + URL with version segment substituted and path
 *     tokens interpolated from a stubbed request
 *   - auth, project, and (when applicable) account headers
 *   - account-scope guard: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId
 */
describe('api.notifications', () => {
  it('module exposes 48 method(s)', () => {
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
    expect(typeof ns['getNotificationInbox']).toBe('function');
    expect(typeof ns['getUnreadCount']).toBe('function');
    expect(typeof ns['markNotificationRead']).toBe('function');
    expect(typeof ns['markAllNotificationsRead']).toBe('function');
    expect(typeof ns['createEmailCampaign']).toBe('function');
    expect(typeof ns['deleteEmailCampaign']).toBe('function');
    expect(typeof ns['getEmailCampaign']).toBe('function');
    expect(typeof ns['getEmailCampaigns']).toBe('function');
    expect(typeof ns['getEmailCampaignBatches']).toBe('function');
    expect(typeof ns['getEmailCampaignBatchNotification']).toBe('function');
    expect(typeof ns['getEmailCampaignBatchNotifications']).toBe('function');
    expect(typeof ns['getEmailCampaignStatistics']).toBe('function');
    expect(typeof ns['previewEmailNotification']).toBe('function');
    expect(typeof ns['retryFailedEmailNotifications']).toBe('function');
    expect(typeof ns['stopEmailCampaign']).toBe('function');
    expect(typeof ns['getEmailCampaignMessages']).toBe('function');
    expect(typeof ns['createSmsCampaign']).toBe('function');
    expect(typeof ns['deleteSmsCampaign']).toBe('function');
    expect(typeof ns['getSmsCampaign']).toBe('function');
    expect(typeof ns['getSmsCampaigns']).toBe('function');
    expect(typeof ns['getSmsCampaignBatches']).toBe('function');
    expect(typeof ns['getSmsCampaignBatchNotification']).toBe('function');
    expect(typeof ns['getSmsCampaignBatchNotifications']).toBe('function');
    expect(typeof ns['getSmsCampaignStatistics']).toBe('function');
    expect(typeof ns['previewSmsNotification']).toBe('function');
    expect(typeof ns['retryFailedSmsNotifications']).toBe('function');
    expect(typeof ns['stopSmsCampaign']).toBe('function');
    expect(typeof ns['getSmsCampaignMessages']).toBe('function');
    expect(typeof ns['getPushCampaignAudienceCount']).toBe('function');
    expect(typeof ns['createPushCampaign']).toBe('function');
    expect(typeof ns['deletePushCampaign']).toBe('function');
    expect(typeof ns['getPushCampaign']).toBe('function');
    expect(typeof ns['getPushCampaigns']).toBe('function');
    expect(typeof ns['getPushCampaignBatches']).toBe('function');
    expect(typeof ns['getPushCampaignBatchNotification']).toBe('function');
    expect(typeof ns['getPushCampaignBatchNotifications']).toBe('function');
    expect(typeof ns['getPushCampaignStatistics']).toBe('function');
    expect(typeof ns['previewPushNotification']).toBe('function');
    expect(typeof ns['retryFailedPushNotifications']).toBe('function');
    expect(typeof ns['stopPushCampaign']).toBe('function');
    expect(typeof ns['getPushCampaignMessages']).toBe('function');
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

  it('getNotificationInbox: GET /{version}/notifications/inbox', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/inbox',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getNotificationInbox']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getUnreadCount: GET /{version}/notifications/inbox/unread-count', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/inbox/unread-count',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getUnreadCount']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('markNotificationRead: POST /{version}/notifications/inbox/{notificationId}/read', async () => {
    const stub = stubRequestForPath('/{version}/notifications/inbox/{notificationId}/read');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/inbox/{notificationId}/read',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['markNotificationRead']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('markAllNotificationsRead: POST /{version}/notifications/inbox/read-all', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/inbox/read-all',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['markAllNotificationsRead']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('createEmailCampaign: POST /{version}/notifications/email/campaigns', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/email/campaigns',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['createEmailCampaign']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('deleteEmailCampaign: DELETE /{version}/notifications/email/campaigns/{Id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/campaigns/{Id}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/email/campaigns/{Id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['deleteEmailCampaign']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getEmailCampaign: GET /{version}/notifications/email/campaigns/{id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/campaigns/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/email/campaigns/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailCampaign']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getEmailCampaigns: GET /{version}/notifications/email/campaigns', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/email/campaigns',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailCampaigns']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getEmailCampaignBatches: GET /{version}/notifications/email/campaigns/{id}/batches', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/campaigns/{id}/batches');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/email/campaigns/{id}/batches',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailCampaignBatches']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getEmailCampaignBatchNotification: GET /{version}/notifications/email/campaigns/{id}/batches/{batchId}/{notificationId}', async () => {
    const stub = stubRequestForPath(
      '/{version}/notifications/email/campaigns/{id}/batches/{batchId}/{notificationId}',
    );
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/email/campaigns/{id}/batches/{batchId}/{notificationId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailCampaignBatchNotification']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getEmailCampaignBatchNotifications: GET /{version}/notifications/email/campaigns/{id}/batches/{batchId}', async () => {
    const stub = stubRequestForPath(
      '/{version}/notifications/email/campaigns/{id}/batches/{batchId}',
    );
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/email/campaigns/{id}/batches/{batchId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailCampaignBatchNotifications']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getEmailCampaignStatistics: GET /{version}/notifications/email/campaigns/{id}/stats', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/campaigns/{id}/stats');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/email/campaigns/{id}/stats',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailCampaignStatistics']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('previewEmailNotification: GET /{version}/notifications/email/preview', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/email/preview',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['previewEmailNotification']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('retryFailedEmailNotifications: POST /{version}/notifications/email/campaigns/{Id}/retry-failed', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/campaigns/{Id}/retry-failed');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/email/campaigns/{Id}/retry-failed',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['retryFailedEmailNotifications']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('stopEmailCampaign: POST /{version}/notifications/email/campaigns/{Id}/stop', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/campaigns/{Id}/stop');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/email/campaigns/{Id}/stop',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['stopEmailCampaign']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getEmailCampaignMessages: GET /{version}/notifications/emails/campaigns/{campaignId}/messages', async () => {
    const stub = stubRequestForPath(
      '/{version}/notifications/emails/campaigns/{campaignId}/messages',
    );
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/emails/campaigns/{campaignId}/messages',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailCampaignMessages']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('createSmsCampaign: POST /{version}/notifications/sms/campaigns', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/sms/campaigns',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['createSmsCampaign']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('deleteSmsCampaign: DELETE /{version}/notifications/sms/campaigns/{id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/sms/campaigns/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/sms/campaigns/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['deleteSmsCampaign']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getSmsCampaign: GET /{version}/notifications/sms/campaigns/{id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/sms/campaigns/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/sms/campaigns/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getSmsCampaign']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getSmsCampaigns: GET /{version}/notifications/sms/campaigns', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/sms/campaigns',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getSmsCampaigns']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getSmsCampaignBatches: GET /{version}/notifications/sms/campaigns/{id}/batches', async () => {
    const stub = stubRequestForPath('/{version}/notifications/sms/campaigns/{id}/batches');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/sms/campaigns/{id}/batches',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getSmsCampaignBatches']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getSmsCampaignBatchNotification: GET /{version}/notifications/sms/campaigns/{id}/batches/{batchId}/{notificationId}', async () => {
    const stub = stubRequestForPath(
      '/{version}/notifications/sms/campaigns/{id}/batches/{batchId}/{notificationId}',
    );
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/sms/campaigns/{id}/batches/{batchId}/{notificationId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getSmsCampaignBatchNotification']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getSmsCampaignBatchNotifications: GET /{version}/notifications/sms/campaigns/{id}/batches/{batchId}', async () => {
    const stub = stubRequestForPath(
      '/{version}/notifications/sms/campaigns/{id}/batches/{batchId}',
    );
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/sms/campaigns/{id}/batches/{batchId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getSmsCampaignBatchNotifications']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getSmsCampaignStatistics: GET /{version}/notifications/sms/campaigns/{id}/stats', async () => {
    const stub = stubRequestForPath('/{version}/notifications/sms/campaigns/{id}/stats');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/sms/campaigns/{id}/stats',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getSmsCampaignStatistics']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('previewSmsNotification: GET /{version}/notifications/sms/preview', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/sms/preview',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['previewSmsNotification']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('retryFailedSmsNotifications: POST /{version}/notifications/sms/campaigns/{Id}/retry-failed', async () => {
    const stub = stubRequestForPath('/{version}/notifications/sms/campaigns/{Id}/retry-failed');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/sms/campaigns/{Id}/retry-failed',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['retryFailedSmsNotifications']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('stopSmsCampaign: POST /{version}/notifications/sms/campaigns/{Id}/stop', async () => {
    const stub = stubRequestForPath('/{version}/notifications/sms/campaigns/{Id}/stop');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/sms/campaigns/{Id}/stop',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['stopSmsCampaign']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getSmsCampaignMessages: GET /{version}/notifications/sms/campaigns/{campaignId}/messages', async () => {
    const stub = stubRequestForPath('/{version}/notifications/sms/campaigns/{campaignId}/messages');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/sms/campaigns/{campaignId}/messages',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getSmsCampaignMessages']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getPushCampaignAudienceCount: POST /{version}/notifications/push/campaigns/audience-count', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/push/campaigns/audience-count',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getPushCampaignAudienceCount']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('createPushCampaign: POST /{version}/notifications/push/campaigns', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/push/campaigns',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['createPushCampaign']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('deletePushCampaign: DELETE /{version}/notifications/push/campaigns/{Id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/push/campaigns/{Id}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/push/campaigns/{Id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['deletePushCampaign']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getPushCampaign: GET /{version}/notifications/push/campaigns/{id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/push/campaigns/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/push/campaigns/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getPushCampaign']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getPushCampaigns: GET /{version}/notifications/push/campaigns', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/push/campaigns',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getPushCampaigns']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getPushCampaignBatches: GET /{version}/notifications/push/campaigns/{id}/batches', async () => {
    const stub = stubRequestForPath('/{version}/notifications/push/campaigns/{id}/batches');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/push/campaigns/{id}/batches',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getPushCampaignBatches']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getPushCampaignBatchNotification: GET /{version}/notifications/push/campaigns/{id}/batches/{batchId}/{notificationId}', async () => {
    const stub = stubRequestForPath(
      '/{version}/notifications/push/campaigns/{id}/batches/{batchId}/{notificationId}',
    );
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/push/campaigns/{id}/batches/{batchId}/{notificationId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getPushCampaignBatchNotification']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getPushCampaignBatchNotifications: GET /{version}/notifications/push/campaigns/{id}/batches/{batchId}', async () => {
    const stub = stubRequestForPath(
      '/{version}/notifications/push/campaigns/{id}/batches/{batchId}',
    );
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/push/campaigns/{id}/batches/{batchId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getPushCampaignBatchNotifications']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getPushCampaignStatistics: GET /{version}/notifications/push/campaigns/{id}/stats', async () => {
    const stub = stubRequestForPath('/{version}/notifications/push/campaigns/{id}/stats');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/push/campaigns/{id}/stats',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getPushCampaignStatistics']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('previewPushNotification: GET /{version}/notifications/push/preview', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/push/preview',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['previewPushNotification']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('retryFailedPushNotifications: POST /{version}/notifications/push/campaigns/{Id}/retry-failed', async () => {
    const stub = stubRequestForPath('/{version}/notifications/push/campaigns/{Id}/retry-failed');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/push/campaigns/{Id}/retry-failed',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['retryFailedPushNotifications']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('stopPushCampaign: POST /{version}/notifications/push/campaigns/{Id}/stop', async () => {
    const stub = stubRequestForPath('/{version}/notifications/push/campaigns/{Id}/stop');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/push/campaigns/{Id}/stop',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['stopPushCampaign']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getPushCampaignMessages: GET /{version}/notifications/push/campaigns/{campaignId}/messages', async () => {
    const stub = stubRequestForPath(
      '/{version}/notifications/push/campaigns/{campaignId}/messages',
    );
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/notifications/push/campaigns/{campaignId}/messages',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getPushCampaignMessages']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });
});
