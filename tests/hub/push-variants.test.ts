import { describe, expect, it } from 'vitest';

import { makeClient } from '../_helpers.js';

/**
 * Hand-written companion to the generated notifications tests.
 *
 * The generated file proves every push method reaches the right verb and URL.
 * Two push routes also take a polymorphic body — `POST /campaigns` carries one
 * of five audience shapes and `POST /integrations` one of eight provider
 * shapes — and the server picks the shape from a discriminator inside the
 * body. A URL assertion cannot see that, so those bodies are checked here.
 *
 * Only the Fake provider is used for a send path; it is the sandbox that
 * accepts a send and contacts no push service. Every call in this file goes to
 * a mock fetch, so nothing leaves the process.
 */

type PushModule = Record<string, (request?: unknown, options?: unknown) => Promise<unknown>>;

function pushModule() {
  const { norbix, mock } = makeClient({});
  const ns = (norbix.hub as unknown as Record<string, PushModule>)['notifications']!;
  return { ns, mock };
}

function sentBody(raw: string | undefined): Record<string, unknown> {
  expect(raw).toBeDefined();
  return JSON.parse(raw!) as Record<string, unknown>;
}

describe('hub.notifications push campaign audiences', () => {
  const audiences = [
    {
      source: 'allUsers',
      campaign: { source: 'allUsers', templateId: 'tpl_1', userTags: ['beta'] },
      expectField: 'userTags',
    },
    {
      source: 'specifiedUsers',
      campaign: { source: 'specifiedUsers', templateId: 'tpl_1', userRecipients: ['user_1'] },
      expectField: 'userRecipients',
    },
    {
      source: 'accountUsers',
      campaign: { source: 'accountUsers', templateId: 'tpl_1', userRecipients: ['acct_user_1'] },
      expectField: 'userRecipients',
    },
    {
      source: 'collection',
      campaign: { source: 'collection', templateId: 'tpl_1', schemaName: 'subscribers' },
      expectField: 'schemaName',
    },
    {
      source: 'devices',
      campaign: {
        source: 'devices',
        templateId: 'tpl_1',
        devices: [{ token: 'device_1', deliveryFamily: 'ios' }],
      },
      expectField: 'devices',
    },
  ];

  for (const audience of audiences) {
    it(`createPushCampaign carries the ${audience.source} shape`, async () => {
      const { ns, mock } = pushModule();

      await ns['createPushCampaign']!({ campaign: audience.campaign });

      expect(mock.lastCall?.method).toBe('POST');
      const body = sentBody(mock.lastCall?.body);
      const campaign = body['campaign'] as Record<string, unknown>;
      // The discriminator must reach the wire as the name, not a number —
      // the server reads it with a string parse.
      expect(campaign['source']).toBe(audience.source);
      expect(campaign['templateId']).toBe('tpl_1');
      expect(campaign[audience.expectField]).toBeDefined();
    });
  }
});

describe('hub.notifications push integration providers', () => {
  const providers = [
    'Fake',
    'AndroidFirebase',
    'AppleApns',
    'CodeMashChromePlugin',
    'ChromeWeb',
    'EdgeWeb',
    'FirefoxWeb',
    'SafariPush',
  ];

  for (const provider of providers) {
    it(`savePushIntegration carries the ${provider} shape`, async () => {
      const { ns, mock } = pushModule();

      await ns['savePushIntegration']!({
        integration: { provider, integrationName: `test-${provider}`, isEnabled: true },
      });

      expect(mock.lastCall?.method).toBe('POST');
      const integration = sentBody(mock.lastCall?.body)['integration'] as Record<string, unknown>;
      expect(integration['provider']).toBe(provider);
      expect(integration['integrationName']).toBe(`test-${provider}`);
    });
  }
});

describe('hub.notifications push route tokens', () => {
  // deletePushCampaign and stopPushCampaign declare an {Id} token but their
  // generated request type is empty, so TypeScript offers no field to fill it.
  // At runtime the transport reads the token off the request object, so the
  // calls do work — these tests pin that behaviour until the type is fixed.
  it('stopPushCampaign interpolates the campaign id', async () => {
    const { ns, mock } = pushModule();

    await ns['stopPushCampaign']!({ Id: 'camp_1' });

    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toContain('/v2/notifications/push/campaigns/camp_1/stop');
  });

  it('deletePushCampaign interpolates the campaign id', async () => {
    const { ns, mock } = pushModule();

    await ns['deletePushCampaign']!({ Id: 'camp_1' });

    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url).toContain('/v2/notifications/push/campaigns/camp_1');
  });
});
