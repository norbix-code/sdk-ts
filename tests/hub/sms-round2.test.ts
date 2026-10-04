import { describe, expect, it } from 'vitest';

import type { CodeMashHub2 } from '../../src/types/hub2.dtos.js';
import { makeClient } from '../_helpers.js';

/**
 * Hand-written companion to the generated tests, for the gateway SMS campaign
 * contract (gateway refactoringV2 ff3c94a04):
 *
 * - an SMS template has a body only — `subject` is gone from its content;
 * - SMS campaigns can go to "Account users" (the account owner and team);
 * - the SMS campaign list can be filtered by one campaign id, and an SMS
 *   campaign row says who created it (`createdById`);
 * - the team list pages with flat `startingAfter` / `endingBefore` /
 *   `pageSize` query fields (no nested `pagingArgs`) and can be narrowed to
 *   one project;
 * - two new endpoints: `GET /account/me` and `PUT /account/me/phone`.
 *
 * The calls are typed on the generated request types, so `npm run typecheck`
 * fails if a field disappears. The generated files prove the verb and the URL;
 * these tests check what the server reads. Every call goes to a mock fetch —
 * nothing leaves the process.
 */

function sentBody(raw: string | undefined): Record<string, unknown> {
  expect(raw).toBeDefined();
  return JSON.parse(raw!) as Record<string, unknown>;
}

function query(url: string | undefined): URLSearchParams {
  expect(url).toBeDefined();
  return new URL(url!).searchParams;
}

describe('SMS templates have a body only', () => {
  it('createSmsTemplate sends translations with body and no subject', async () => {
    const { norbix, mock } = makeClient({});
    const content: CodeMashHub2.SmsMessageContentDto = { body: 'Hi @Model.FirstName' };

    await norbix.hub.notifications.createSmsTemplate({
      templateName: 'welcome',
      translations: [{ language: 'en', content }],
    });

    expect(mock.lastCall?.method).toBe('POST');
    const body = sentBody(mock.lastCall?.body);
    expect(body['translations']).toEqual([
      { language: 'en', content: { body: 'Hi @Model.FirstName' } },
    ]);
  });

  it('the SMS content type has no subject field', () => {
    // @ts-expect-error — `subject` was removed from SmsMessageContentDto
    const content: CodeMashHub2.SmsMessageContentDto = { subject: 'Hi', body: 'Hi' };
    expect(content.body).toBe('Hi');
  });
});

describe('SMS campaigns', () => {
  it('createSmsCampaign sends the Account users audience', async () => {
    const { norbix, mock } = makeClient({});
    const accountUsers: CodeMashHub2.SmsToAccountUsersDeliverySettingsDto = {
      recipientsSourceType: 'AccountUsers' as CodeMashHub2.SmsCampaignRecipientsSourceTypes,
      recipients: ['owner-1', 'member-2'],
      campaignTime: 1_800_000_000,
    };

    await norbix.hub.notifications.createSmsCampaign({
      templateId: 'tpl_sms',
      integrationId: 'int_sms_provider',
      deliveryType: 'AccountUsers' as CodeMashHub2.SmsCampaignRecipientsSourceTypes,
      accountUsers,
    });

    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toBe('https://hub.norbix.io/v2/notifications/sms/campaigns');
    expect(sentBody(mock.lastCall?.body)).toMatchObject({
      deliveryType: 'AccountUsers',
      accountUsers: {
        recipientsSourceType: 'AccountUsers',
        recipients: ['owner-1', 'member-2'],
        campaignTime: 1_800_000_000,
      },
    });
  });

  it('getSmsCampaigns sends the campaignId filter as a query field', async () => {
    const { norbix, mock } = makeClient({});

    await norbix.hub.notifications.getSmsCampaigns({ campaignId: 'cmp_1', templateId: 'tpl_sms' });

    expect(mock.lastCall?.method).toBe('GET');
    const q = query(mock.lastCall?.url);
    expect(q.get('campaignId')).toBe('cmp_1');
    expect(q.get('templateId')).toBe('tpl_sms');
  });

  it('an SMS campaign row carries createdById', () => {
    const row: Partial<CodeMashHub2.SmsCampaignDto> = { createdById: 'member-2' };
    expect(row.createdById).toBe('member-2');
  });
});

describe('team list paging', () => {
  it('getAccountCollaborators sends flat paging fields and the project filter', async () => {
    const { norbix, mock } = makeClient({});

    await norbix.hub.account.getAccountCollaborators({
      projectId: 'prj_1',
      pageSize: 50,
      startingAfter: 'member-20',
      includeAccountOwner: true,
    });

    expect(mock.lastCall?.method).toBe('GET');
    const q = query(mock.lastCall?.url);
    expect(q.get('projectId')).toBe('prj_1');
    expect(q.get('pageSize')).toBe('50');
    expect(q.get('startingAfter')).toBe('member-20');
    expect(q.get('includeAccountOwner')).toBe('true');
    expect(q.has('pagingArgs')).toBe(false);
  });

  it('getAccountCollaborators sends endingBefore for the previous page', async () => {
    const { norbix, mock } = makeClient({});

    await norbix.hub.account.getAccountCollaborators({ endingBefore: 'member-21' });

    expect(query(mock.lastCall?.url).get('endingBefore')).toBe('member-21');
  });

  it('getAccountCollaborators needs only a token — the gateway takes the account from it', async () => {
    const { norbix, mock } = makeClient({});

    await norbix.hub.account.getAccountCollaborators({});

    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.has('norbix-account-id')).toBe(false);
  });
});

describe('the signed-in team member', () => {
  it('getMyAccountUserProfile reads GET /account/me', async () => {
    const { norbix, mock } = makeClient({});

    await norbix.hub.account.getMyAccountUserProfile();

    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url).toBe('https://hub.norbix.io/v2/account/me');
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
  });

  it('updateMyAccountUserPhone sends the phone in the PUT body', async () => {
    const { norbix, mock } = makeClient({});

    await norbix.hub.account.updateMyAccountUserPhone({ phone: '+37060000000' });

    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url).toBe('https://hub.norbix.io/v2/account/me/phone');
    expect(sentBody(mock.lastCall?.body)).toEqual({ phone: '+37060000000' });
  });

  it('updateMyAccountUserPhone with an empty phone clears it', async () => {
    const { norbix, mock } = makeClient({});

    await norbix.hub.account.updateMyAccountUserPhone({ phone: '' });

    expect(sentBody(mock.lastCall?.body)).toEqual({ phone: '' });
  });
});
