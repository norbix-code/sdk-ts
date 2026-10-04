import { describe, expect, it } from 'vitest';

import { makeClient } from '../_helpers.js';

/**
 * Hand-written companion to the generated tests, for the gateway change that
 * aligns Email, Push and SMS:
 *
 * - creating a campaign now needs the provider integration id — nested in
 *   `campaign` for Email and Push, top level for SMS (next to, and different
 *   from, `databaseIntegrationId`);
 * - an Email / Push / SMS trigger action carries `integrationId` and may carry
 *   `language` and `initiatorId`;
 * - two new endpoints: `GET /triggers/attention` and
 *   `POST /account/projects/{projectId}/settings/languages/check`.
 *
 * The generated files prove the verb and the URL. These tests check the body
 * the server reads. Every call goes to a mock fetch — nothing leaves the
 * process.
 */

type Module = Record<string, (request?: unknown, options?: unknown) => Promise<unknown>>;

function hubModule(name: string) {
  const { norbix, mock } = makeClient({});
  const ns = (norbix.hub as unknown as Record<string, Module>)[name]!;
  return { ns, mock };
}

function sentBody(raw: string | undefined): Record<string, unknown> {
  expect(raw).toBeDefined();
  return JSON.parse(raw!) as Record<string, unknown>;
}

describe('campaigns send the provider integration id', () => {
  it('createSmsCampaign sends integrationId at the top level, apart from databaseIntegrationId', async () => {
    const { ns, mock } = hubModule('notifications');

    await ns['createSmsCampaign']!({
      templateId: 'tpl_sms',
      integrationId: 'int_sms_provider',
      databaseIntegrationId: 'int_database',
      deliveryType: 'PhoneNumbers',
    });

    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toBe('https://hub.norbix.io/v2/notifications/sms/campaigns');
    expect(sentBody(mock.lastCall?.body)).toMatchObject({
      templateId: 'tpl_sms',
      integrationId: 'int_sms_provider',
      databaseIntegrationId: 'int_database',
    });
  });

  it('createEmailCampaign sends integrationId inside campaign', async () => {
    const { ns, mock } = hubModule('notifications');

    await ns['createEmailCampaign']!({
      campaign: {
        source: 'Email',
        templateId: 'tpl_email',
        recipients: ['ann@example.com'],
        integrationId: 'int_email',
      },
    });

    expect(mock.lastCall?.method).toBe('POST');
    const body = sentBody(mock.lastCall?.body);
    expect(body['campaign']).toMatchObject({ integrationId: 'int_email' });
    expect(body).not.toHaveProperty('integrationId');
  });

  it('createPushCampaign sends integrationId inside campaign', async () => {
    const { ns, mock } = hubModule('notifications');

    await ns['createPushCampaign']!({
      campaign: { source: 'allUsers', templateId: 'tpl_push', integrationId: 'int_push' },
    });

    expect(mock.lastCall?.method).toBe('POST');
    const body = sentBody(mock.lastCall?.body);
    expect(body['campaign']).toMatchObject({ integrationId: 'int_push' });
    expect(body).not.toHaveProperty('integrationId');
  });
});

describe('trigger actions carry integrationId, language and initiatorId', () => {
  const actions = [
    { type: 'Email', extra: { templateId: 'tpl_email', deliverySettings: {} } },
    { type: 'Push', extra: { templateId: 'tpl_push', deliverySettings: {} } },
    { type: 'Sms', extra: { templateId: 'tpl_sms', deliverySettings: {} } },
  ];

  for (const action of actions) {
    it(`saveSchemaTrigger sends a ${action.type} action with the three fields`, async () => {
      const { ns, mock } = hubModule('database');

      await ns['saveSchemaTrigger']!({
        trigger: {
          type: 'Schema',
          name: `on insert ${action.type}`,
          isEnabled: true,
          action: {
            type: action.type,
            integrationId: `int_${action.type.toLowerCase()}`,
            language: 'lt',
            initiatorId: 'user_1',
            ...action.extra,
          },
        },
      });

      expect(mock.lastCall?.method).toBe('POST');
      expect(mock.lastCall?.url).toBe('https://hub.norbix.io/v2/database/schemas/triggers');
      const trigger = sentBody(mock.lastCall?.body)['trigger'] as Record<string, unknown>;
      expect(trigger['action']).toMatchObject({
        type: action.type,
        integrationId: `int_${action.type.toLowerCase()}`,
        language: 'lt',
        initiatorId: 'user_1',
      });
    });
  }
});

describe('new endpoints', () => {
  it('triggers.getTriggersNeedingAttention is GET /triggers/attention with triggerType in the query', async () => {
    const { ns, mock } = hubModule('triggers');

    await ns['getTriggersNeedingAttention']!({ triggerType: 'Schema' });

    expect(mock.lastCall?.method).toBe('GET');
    const url = new URL(mock.lastCall!.url);
    expect(url.origin + url.pathname).toBe('https://hub.norbix.io/v2/triggers/attention');
    expect(url.searchParams.get('triggerType')).toBe('Schema');
    expect(mock.lastCall?.body).toBeUndefined();
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('account.checkProjectLanguages is POST /account/projects/{projectId}/settings/languages/check', async () => {
    const { ns, mock } = hubModule('account');

    await ns['checkProjectLanguages']!({
      projectId: 'proj_1',
      defaultLanguage: 'en',
      languages: ['en', 'lt'],
    });

    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toBe(
      'https://hub.norbix.io/v2/account/projects/proj_1/settings/languages/check',
    );
    expect(sentBody(mock.lastCall?.body)).toMatchObject({
      defaultLanguage: 'en',
      languages: ['en', 'lt'],
    });
  });
});
