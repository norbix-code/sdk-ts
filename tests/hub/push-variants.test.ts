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

/**
 * The five campaign targets, with the fields the gateway reads for each one.
 * Source of truth: gateway Hub.Push/Campaigns/Create.PushTo*.cs (field names)
 * and Create_.cs (PushCampaignRequestDtoJsonConverter picks the record from
 * `source`, case-insensitive). Note `rolesNames` on allUsers but `roleNames`
 * on collection — the gateway spells them differently.
 */
const campaignTargets: { source: string; fields: Record<string, unknown> }[] = [
  { source: 'allUsers', fields: { rolesNames: ['admin'], userTags: ['beta'] } },
  { source: 'specifiedUsers', fields: { userRecipients: ['user_1'] } },
  { source: 'accountUsers', fields: { userRecipients: ['acct_user_1'] } },
  {
    source: 'collection',
    fields: { schemaName: 'subscribers', fields: ['owner'], fieldType: 'User' },
  },
  { source: 'devices', fields: { devices: [{ token: 'device_1', deliveryFamily: 'Ios' }] } },
];

/** PushCampaignRecipientsSourceTypes in the gateway — exactly these five. */
const gatewayTargets = ['allusers', 'specifiedusers', 'accountusers', 'collection', 'devices'];

describe('hub.notifications push campaign targets', () => {
  for (const target of campaignTargets) {
    it(`createPushCampaign sends the ${target.source} shape`, async () => {
      const { ns, mock } = pushModule();

      await ns['createPushCampaign']!({
        campaign: { source: target.source, templateId: 'tpl_1', ...target.fields },
      });

      expect(mock.lastCall?.method).toBe('POST');
      const campaign = sentBody(mock.lastCall?.body)['campaign'] as Record<string, unknown>;
      // The discriminator must reach the wire as the name, not a number —
      // the server reads it with GetString().
      expect(campaign).toMatchObject({
        source: target.source,
        templateId: 'tpl_1',
        ...target.fields,
      });
    });
  }

  it('covers exactly the targets the gateway accepts', () => {
    expect(campaignTargets.map((t) => t.source.toLowerCase()).sort()).toEqual(
      [...gatewayTargets].sort(),
    );
  });
});

/**
 * The eight providers the gateway's save converter accepts, with the fields
 * each one validates. Source of truth: gateway Hub.Push/Integrations/Save_.cs
 * (the switch arms of PushIntegrationRequestDtoJsonConverter) and
 * Save.<Provider>.cs (the fields). The Chrome extension is `ChromePush`:
 * `CodeMashChromePlugin` also exists in the generated enum, but no switch arm
 * takes it, so the gateway answers "Unsupported provider".
 *
 * Every value is a dummy; nothing here leaves the process.
 */
const vapid = { vapidPublicKey: 'vapid-public', vapidPrivateKey: 'vapid-private' };
const integrationProviders: { provider: string; fields: Record<string, unknown> }[] = [
  { provider: 'Fake', fields: {} },
  {
    provider: 'AndroidFirebase',
    fields: {
      projectId: 'firebase-project',
      clientEmail: 'push@firebase-project.iam.example.com',
      serviceAccountJson: '{"type":"service_account"}',
    },
  },
  {
    provider: 'AppleApns',
    fields: {
      teamId: 'TEAM123456',
      appBundleId: 'com.example.app',
      keyId: 'KEY1234567',
      privateKey: '-----BEGIN PRIVATE KEY-----dummy',
      isProduction: false,
    },
  },
  {
    provider: 'ChromePush',
    fields: {
      extensionId: '3f2504e0-4f89-11d3-9a0c-0305e82c3301',
      ...vapid,
      subject: 'mailto:push@example.com',
    },
  },
  { provider: 'ChromeWeb', fields: { ...vapid, subject: 'mailto:push@example.com' } },
  { provider: 'EdgeWeb', fields: { ...vapid } },
  { provider: 'FirefoxWeb', fields: { ...vapid } },
  {
    provider: 'SafariPush',
    fields: {
      websitePushId: 'web.com.example',
      certificateP12Base64: 'ZHVtbXk=',
      certificatePassword: 'dummy',
    },
  },
];

/** The switch arms of PushIntegrationRequestDtoJsonConverter.Read. */
const gatewayProviders = [
  'AppleApns',
  'AndroidFirebase',
  'SafariPush',
  'ChromeWeb',
  'FirefoxWeb',
  'EdgeWeb',
  'ChromePush',
  'Fake',
];

describe('hub.notifications push integration providers', () => {
  for (const p of integrationProviders) {
    it(`savePushIntegration sends the ${p.provider} shape`, async () => {
      const { ns, mock } = pushModule();
      const integration = {
        provider: p.provider,
        integrationName: `test-${p.provider}`,
        isEnabled: true,
        ...p.fields,
      };

      await ns['savePushIntegration']!({ integration });

      expect(mock.lastCall?.method).toBe('POST');
      expect(sentBody(mock.lastCall?.body)['integration']).toMatchObject(integration);
    });
  }

  it('covers exactly the providers the gateway accepts', () => {
    expect(integrationProviders.map((p) => p.provider).sort()).toEqual(
      [...gatewayProviders].sort(),
    );
  });
});

describe('hub.notifications push device registration', () => {
  // Source of truth: gateway Hub.Push/Devices/Create.cs and
  // Contracts/Notifications/Push/Devices/PushDeviceDto.cs (`deviceOs` and
  // `token` are required).
  it('registerDevice sends the device under pushDeviceDto with its user', async () => {
    const { ns, mock } = pushModule();
    const request = {
      userId: 'user_1',
      pushDeviceDto: { deviceOs: 'iOS', token: 'device_1', modelName: 'iPhone' },
    };

    await ns['registerDevice']!(request);

    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toContain('/v2/notifications/push/devices');
    expect(sentBody(mock.lastCall?.body)).toMatchObject(request);
  });
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
