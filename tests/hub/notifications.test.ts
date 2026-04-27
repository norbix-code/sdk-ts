import { describe, expect, it } from 'vitest';

import { NotificationsModule } from '../../src/hub/notifications.js';
import { NorbixError } from '../../src/index.js';
import { createMockFetch, expectedUrl, makeClient, stubRequestForPath } from '../_helpers.js';

/**
 * Auto-generated. Do not edit by hand — follow the internal maintenance workflow
 * to refresh this file from the DTO definitions.
 *
 * Tests for hub.notifications (68 endpoints).
 *
 * Each method is asserted against:
 *   - presence on the module (smoke check)
 *   - issued HTTP verb + URL with version segment substituted and path
 *     tokens interpolated from a stubbed request
 *   - auth, project, and (when applicable) account headers
 *   - account-scope guard: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId
 */
describe('hub.notifications', () => {
  it('module exposes 68 method(s)', () => {
    const mock = createMockFetch();
    const mod = new NotificationsModule({} as never);
    void mod; // silence unused — we only need the type
    // Sanity check the auto-mapped surface exists on the namespaced client.
    const { norbix } = makeClient();
    const ns = (norbix.hub as unknown as Record<string, unknown>)['notifications'] as Record<
      string,
      unknown
    >;
    expect(ns).toBeDefined();
    void mock;
    expect(typeof ns['getUserNotificationPreferences']).toBe('function');
    expect(typeof ns['updateUserNotificationsPreferences']).toBe('function');
    expect(typeof ns['disableEmail']).toBe('function');
    expect(typeof ns['enableEmail']).toBe('function');
    expect(typeof ns['attachFileToTemplate']).toBe('function');
    expect(typeof ns['createEmailTemplate']).toBe('function');
    expect(typeof ns['deleteEmailTemplate']).toBe('function');
    expect(typeof ns['getEmailTemplate']).toBe('function');
    expect(typeof ns['getEmailTemplates']).toBe('function');
    expect(typeof ns['getMjml']).toBe('function');
    expect(typeof ns['getSystemEmailTemplate']).toBe('function');
    expect(typeof ns['getSystemEmailTemplates']).toBe('function');
    expect(typeof ns['getEmailTemplateAvailableTokens']).toBe('function');
    expect(typeof ns['updateEmailTemplate']).toBe('function');
    expect(typeof ns['deleteEmailSignature']).toBe('function');
    expect(typeof ns['getEmailSignature']).toBe('function');
    expect(typeof ns['getEmailSignatures']).toBe('function');
    expect(typeof ns['saveEmailSignature']).toBe('function');
    expect(typeof ns['getEmailSettings']).toBe('function');
    expect(typeof ns['confirmEmailIntegrationHumanDelivery']).toBe('function');
    expect(typeof ns['deleteEmailIntegration']).toBe('function');
    expect(typeof ns['disableEmailIntegration']).toBe('function');
    expect(typeof ns['enableEmailIntegration']).toBe('function');
    expect(typeof ns['getEmailIntegration']).toBe('function');
    expect(typeof ns['getEmailIntegrations']).toBe('function');
    expect(typeof ns['saveEmailIntegration']).toBe('function');
    expect(typeof ns['setEmailsIntegrationAsDefault']).toBe('function');
    expect(typeof ns['testEmailIntegration']).toBe('function');
    expect(typeof ns['archiveEmailTemplate']).toBe('function');
    expect(typeof ns['cloneEmailTemplate']).toBe('function');
    expect(typeof ns['unArchiveEmailTemplate']).toBe('function');
    expect(typeof ns['deleteEmailFooter']).toBe('function');
    expect(typeof ns['getEmailFooter']).toBe('function');
    expect(typeof ns['getEmailFooters']).toBe('function');
    expect(typeof ns['saveEmailFooter']).toBe('function');
    expect(typeof ns['createEmailCampaign']).toBe('function');
    expect(typeof ns['deleteEmailCampaign']).toBe('function');
    expect(typeof ns['getEmailCampaign']).toBe('function');
    expect(typeof ns['getEmailCampaigns']).toBe('function');
    expect(typeof ns['getEmailCampaignBatches']).toBe('function');
    expect(typeof ns['getEmailCampaignBatchNotification']).toBe('function');
    expect(typeof ns['getEmailCampaignBatchNotifications']).toBe('function');
    expect(typeof ns['getEmailCampaignStatistics']).toBe('function');
    expect(typeof ns['previewEmailNotification']).toBe('function');
    expect(typeof ns['getEmailCampaignMessage']).toBe('function');
    expect(typeof ns['getEmailCampaignMessages']).toBe('function');
    expect(typeof ns['disablePush']).toBe('function');
    expect(typeof ns['enablePush']).toBe('function');
    expect(typeof ns['archivePushTemplate']).toBe('function');
    expect(typeof ns['clonePushTemplate']).toBe('function');
    expect(typeof ns['createPushTemplate']).toBe('function');
    expect(typeof ns['deletePushTemplate']).toBe('function');
    expect(typeof ns['getPushTemplate']).toBe('function');
    expect(typeof ns['getPushTemplates']).toBe('function');
    expect(typeof ns['getPushMessageContentTokens']).toBe('function');
    expect(typeof ns['unArchivePushTemplate']).toBe('function');
    expect(typeof ns['updatePushTemplate']).toBe('function');
    expect(typeof ns['confirmPushIntegrationHumanDelivery']).toBe('function');
    expect(typeof ns['deletePushIntegration']).toBe('function');
    expect(typeof ns['disablePushIntegration']).toBe('function');
    expect(typeof ns['enablePushIntegration']).toBe('function');
    expect(typeof ns['getPushIntegration']).toBe('function');
    expect(typeof ns['getPushIntegrations']).toBe('function');
    expect(typeof ns['savePushIntegration']).toBe('function');
    expect(typeof ns['setPushIntegrationAsDefault']).toBe('function');
    expect(typeof ns['testPushIntegration']).toBe('function');
    expect(typeof ns['registerCodeMashAppPushIntegration']).toBe('function');
    expect(typeof ns['registerDevice']).toBe('function');
  });

  it('getUserNotificationPreferences: GET /{version}/notifications/user/preferences', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/user/preferences',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getUserNotificationPreferences']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateUserNotificationsPreferences: PUT /{version}/notifications/user/preferences', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/user/preferences',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['updateUserNotificationsPreferences']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('disableEmail: GET /{version}/notifications/email/disable', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/disable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['disableEmail']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('enableEmail: GET /{version}/notifications/email/enable', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/enable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['enableEmail']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('attachFileToTemplate: POST /{version}/notifications/email/templates/attachments', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/templates/attachments',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['attachFileToTemplate']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('createEmailTemplate: POST /{version}/notifications/email/templates', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/templates',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['createEmailTemplate']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteEmailTemplate: DELETE /{version}/notifications/email/templates/{Id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/templates/{Id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/templates/{Id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['deleteEmailTemplate']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEmailTemplate: GET /{version}/notifications/email/templates/{id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/templates/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/templates/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailTemplate']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEmailTemplates: GET /{version}/notifications/email/templates', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/templates',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailTemplates']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getMjml: POST /{version}/notifications/email/templates/mjml', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/templates/mjml',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getMjml']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getSystemEmailTemplate: GET /{version}/notifications/email/system-templates/{id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/system-templates/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/system-templates/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getSystemEmailTemplate']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getSystemEmailTemplates: GET /{version}/notifications/email/system-templates', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/system-templates',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getSystemEmailTemplates']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEmailTemplateAvailableTokens: GET /{version}/notifications/email/templates/{id}/tokens', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/templates/{id}/tokens');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/templates/{id}/tokens',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailTemplateAvailableTokens']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateEmailTemplate: PUT /{version}/notifications/email/templates', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/templates',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['updateEmailTemplate']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteEmailSignature: DELETE /{version}/notifications/email/signatures/{id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/signatures/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/signatures/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['deleteEmailSignature']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEmailSignature: GET /{version}/notifications/email/signatures/{id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/signatures/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/signatures/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailSignature']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEmailSignatures: GET /{version}/notifications/email/signatures', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/signatures',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailSignatures']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('saveEmailSignature: POST /{version}/notifications/email/signatures', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/signatures',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['saveEmailSignature']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEmailSettings: GET /{version}/notifications/email/settings', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/settings',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailSettings']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('confirmEmailIntegrationHumanDelivery: POST /{version}/notifications/email/integrations/confirm-human-delivery', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/integrations/confirm-human-delivery',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['confirmEmailIntegrationHumanDelivery']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteEmailIntegration: DELETE /{version}/notifications/email/integrations/{Id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/integrations/{Id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/integrations/{Id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['deleteEmailIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('disableEmailIntegration: PUT /{version}/notifications/email/integrations/{Id}/disable', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/integrations/{Id}/disable');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/integrations/{Id}/disable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['disableEmailIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('enableEmailIntegration: PUT /{version}/notifications/email/integrations/{Id}/enable', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/integrations/{Id}/enable');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/integrations/{Id}/enable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['enableEmailIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEmailIntegration: GET /{version}/notifications/email/integrations/{id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/integrations/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/integrations/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEmailIntegrations: GET /{version}/notifications/email/integrations', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/integrations',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailIntegrations']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('saveEmailIntegration: POST /{version}/notifications/email/integrations', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/integrations',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['saveEmailIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('setEmailsIntegrationAsDefault: PUT /{version}/notifications/email/integrations/{Id}/default', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/integrations/{Id}/default');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/integrations/{Id}/default',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['setEmailsIntegrationAsDefault']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('testEmailIntegration: POST /{version}/notifications/email/integrations/test', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/integrations/test',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['testEmailIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('archiveEmailTemplate: PUT /{version}/notifications/email/templates/{Id}/archive', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/templates/{Id}/archive');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/templates/{Id}/archive',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['archiveEmailTemplate']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('cloneEmailTemplate: POST /{version}/notifications/email/templates/{Id}/clone', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/templates/{Id}/clone');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/templates/{Id}/clone',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['cloneEmailTemplate']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('unArchiveEmailTemplate: PUT /{version}/notifications/email/templates/{Id}/unarchive', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/templates/{Id}/unarchive');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/templates/{Id}/unarchive',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['unArchiveEmailTemplate']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteEmailFooter: DELETE /{version}/notifications/email/footers/{id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/footers/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/footers/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['deleteEmailFooter']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEmailFooter: GET /{version}/notifications/email/footers/{id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/footers/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/footers/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailFooter']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEmailFooters: GET /{version}/notifications/email/footers', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/footers',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailFooters']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('saveEmailFooter: POST /{version}/notifications/email/footers', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/footers',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['saveEmailFooter']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('createEmailCampaign: POST /{version}/notifications/email/campaigns', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/campaigns',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['createEmailCampaign']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteEmailCampaign: DELETE /{version}/notifications/email/campaigns/{Id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/campaigns/{Id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/campaigns/{Id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['deleteEmailCampaign']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEmailCampaign: GET /{version}/notifications/email/campaigns/{id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/campaigns/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/campaigns/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailCampaign']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEmailCampaigns: GET /{version}/notifications/email/campaigns', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/campaigns',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailCampaigns']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEmailCampaignBatches: GET /{version}/notifications/email/campaigns/{id}/batches', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/campaigns/{id}/batches');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/campaigns/{id}/batches',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailCampaignBatches']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEmailCampaignBatchNotification: GET /{version}/notifications/email/campaigns/{id}/batches/{batchId}/{notificationId}', async () => {
    const stub = stubRequestForPath(
      '/{version}/notifications/email/campaigns/{id}/batches/{batchId}/{notificationId}',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/campaigns/{id}/batches/{batchId}/{notificationId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailCampaignBatchNotification']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEmailCampaignBatchNotifications: GET /{version}/notifications/email/campaigns/{id}/batches/{batchId}', async () => {
    const stub = stubRequestForPath(
      '/{version}/notifications/email/campaigns/{id}/batches/{batchId}',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/campaigns/{id}/batches/{batchId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailCampaignBatchNotifications']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEmailCampaignStatistics: GET /{version}/notifications/email/campaigns/{id}/stats', async () => {
    const stub = stubRequestForPath('/{version}/notifications/email/campaigns/{id}/stats');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/campaigns/{id}/stats',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailCampaignStatistics']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('previewEmailNotification: GET /{version}/notifications/email/preview', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/email/preview',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['previewEmailNotification']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEmailCampaignMessage: GET /{version}/notifications/emails/campaigns/{campaignId}/messages/{id}', async () => {
    const stub = stubRequestForPath(
      '/{version}/notifications/emails/campaigns/{campaignId}/messages/{id}',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/emails/campaigns/{campaignId}/messages/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailCampaignMessage']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEmailCampaignMessages: GET /{version}/notifications/emails/campaigns/{campaignId}/messages', async () => {
    const stub = stubRequestForPath(
      '/{version}/notifications/emails/campaigns/{campaignId}/messages',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/emails/campaigns/{campaignId}/messages',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getEmailCampaignMessages']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('disablePush: GET /{version}/notifications/push/disable', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/disable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['disablePush']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('enablePush: GET /{version}/notifications/push/enable', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/enable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['enablePush']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('archivePushTemplate: PUT /{version}/notifications/push/templates/{Id}/archive', async () => {
    const stub = stubRequestForPath('/{version}/notifications/push/templates/{Id}/archive');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/templates/{Id}/archive',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['archivePushTemplate']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('clonePushTemplate: POST /{version}/notifications/push/templates/{Id}/clone', async () => {
    const stub = stubRequestForPath('/{version}/notifications/push/templates/{Id}/clone');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/templates/{Id}/clone',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['clonePushTemplate']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('createPushTemplate: POST /{version}/notifications/push/templates', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/templates',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['createPushTemplate']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deletePushTemplate: DELETE /{version}/notifications/push/templates/{Id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/push/templates/{Id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/templates/{Id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['deletePushTemplate']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getPushTemplate: GET /{version}/notifications/push/templates/{id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/push/templates/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/templates/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getPushTemplate']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getPushTemplates: GET /{version}/notifications/push/templates', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/templates',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getPushTemplates']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getPushMessageContentTokens: GET /{version}/notifications/push/templates/{id}/tokens', async () => {
    const stub = stubRequestForPath('/{version}/notifications/push/templates/{id}/tokens');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/templates/{id}/tokens',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getPushMessageContentTokens']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('unArchivePushTemplate: PUT /{version}/notifications/push/templates/{Id}/unarchive', async () => {
    const stub = stubRequestForPath('/{version}/notifications/push/templates/{Id}/unarchive');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/templates/{Id}/unarchive',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['unArchivePushTemplate']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updatePushTemplate: PUT /{version}/notifications/push/templates', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/templates',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['updatePushTemplate']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('confirmPushIntegrationHumanDelivery: POST /{version}/notifications/push/integrations/confirm-human-delivery', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/integrations/confirm-human-delivery',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['confirmPushIntegrationHumanDelivery']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deletePushIntegration: DELETE /{version}/notifications/push/integrations/{Id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/push/integrations/{Id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/integrations/{Id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['deletePushIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('disablePushIntegration: PUT /{version}/notifications/push/integrations/{Id}/disable', async () => {
    const stub = stubRequestForPath('/{version}/notifications/push/integrations/{Id}/disable');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/integrations/{Id}/disable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['disablePushIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('enablePushIntegration: PUT /{version}/notifications/push/integrations/{Id}/enable', async () => {
    const stub = stubRequestForPath('/{version}/notifications/push/integrations/{Id}/enable');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/integrations/{Id}/enable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['enablePushIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getPushIntegration: GET /{version}/notifications/push/integrations/{id}', async () => {
    const stub = stubRequestForPath('/{version}/notifications/push/integrations/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/integrations/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getPushIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getPushIntegrations: GET /{version}/notifications/push/integrations', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/integrations',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['getPushIntegrations']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('savePushIntegration: POST /{version}/notifications/push/integrations', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/integrations',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['savePushIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('setPushIntegrationAsDefault: PUT /{version}/notifications/push/integrations/{Id}/default', async () => {
    const stub = stubRequestForPath('/{version}/notifications/push/integrations/{Id}/default');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/integrations/{Id}/default',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['setPushIntegrationAsDefault']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('testPushIntegration: POST /{version}/notifications/push/integrations/test', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/integrations/test',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['testPushIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('registerCodeMashAppPushIntegration: POST /{version}/notifications/push/integrations/app/request', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/integrations/app/request',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({ accountId: 'acc-1' });
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['registerCodeMashAppPushIntegration']!;
    await fn({ ...stub, accountId: 'acc-1' });
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('registerCodeMashAppPushIntegration: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId', async () => {
    const stub = {};
    const { norbix } = makeClient();
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['registerCodeMashAppPushIntegration']!;
    await expect(fn(stub)).rejects.toBeInstanceOf(NorbixError);
    await expect(fn(stub)).rejects.toMatchObject({ code: 'NORBIX_ACCOUNT_SCOPE_REQUIRED' });
  });

  it('registerCodeMashAppPushIntegration: succeeds when accountId is configured', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/integrations/app/request',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({ accountId: 'acc-1' });
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['registerCodeMashAppPushIntegration']!;
    await fn({ ...stub, accountId: 'acc-1' });
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('X-CM-AccountId')).toBe('acc-1');
  });

  it('registerDevice: POST /{version}/notifications/push/devices', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/notifications/push/devices',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['notifications']!['registerDevice']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });
});
