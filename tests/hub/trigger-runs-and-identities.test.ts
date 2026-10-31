import { describe, expect, it } from 'vitest';

import type { CodeMashHub2 } from '../../src/types/hub2.dtos.js';
import { createMockFetch, makeClient } from '../_helpers.js';

/**
 * Trigger runs and execution identities (gateway b0cb4194f). The generated
 * tests send an empty request; these cases pin where the filters go, that the
 * ids land in the path, and that the shapes come back as the gateway sent them.
 */
const run = {
  runId: 'trr_1',
  triggerId: 'trg_1',
  triggerType: 'Membership',
  triggerName: 'Welcome',
  event: 'OnRegistered',
  action: 'Email',
  status: 'succeeded',
  startedAt: '2026-10-31T08:00:00Z',
  executionIdentityName: 'Project triggers',
  executionIdentityIsDefault: true,
  produced: { kind: 'EmailCampaign', id: 'cmp_1' },
} as unknown as CodeMashHub2.TriggerRunListProjection;

describe('hub.triggers.getTriggerRuns', () => {
  it('sends the type, the trigger, the status and the paging on the query of a GET', async () => {
    const mock = createMockFetch({ body: { list: { items: [run], hasMore: false } } });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response = await norbix.hub.triggers.getTriggerRuns({
      triggerType: 'Membership' as CodeMashHub2.TriggerType,
      triggerId: 'trg_1',
      status: 'failed',
      pageSize: 20,
    });

    const call = mock.lastCall!;
    const url = new URL(call.url);
    expect(call.method).toBe('GET');
    expect(url.pathname).toBe('/v2/triggers/runs');
    expect(Object.fromEntries(url.searchParams)).toEqual({
      triggerType: 'Membership',
      triggerId: 'trg_1',
      status: 'failed',
      pageSize: '20',
    });
    expect(call.body).toBeUndefined();
    expect(response.list?.items).toEqual([run]);
  });
});

describe('hub.triggers.getTriggerRun', () => {
  it('puts the run id in the path and keeps the type on the query', async () => {
    const mock = createMockFetch({ body: { item: run } });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response = await norbix.hub.triggers.getTriggerRun({
      id: 'trr_1',
      triggerType: 'Membership' as CodeMashHub2.TriggerType,
    });

    const url = new URL(mock.lastCall!.url);
    expect(url.pathname).toBe('/v2/triggers/runs/trr_1');
    expect(url.searchParams.get('triggerType')).toBe('Membership');
    expect(url.searchParams.has('id')).toBe(false);
    expect(response.item).toEqual(run);
  });
});

describe('hub.triggers.checkTriggerExecutionIdentity', () => {
  it('posts the action and returns what the identity lacks', async () => {
    const mock = createMockFetch({
      body: {
        executionIdentityId: 'usr_1',
        isDefault: false,
        canAssign: true,
        missingPermissions: ['email:create on email:campaign:all'],
        callerMissingPermissions: [],
        refusals: [],
      },
    });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response = await norbix.hub.triggers.checkTriggerExecutionIdentity({
      triggerType: 'Schema' as CodeMashHub2.TriggerType,
      executionIdentityId: 'usr_1',
      action: { type: 'Email' } as unknown as CodeMashHub2.TriggerActionDto,
    });

    const call = mock.lastCall!;
    expect(call.method).toBe('POST');
    expect(new URL(call.url).pathname).toBe('/v2/triggers/execution-identity/check');
    expect(JSON.parse(call.body as string)).toMatchObject({
      triggerType: 'Schema',
      executionIdentityId: 'usr_1',
      action: { type: 'Email' },
    });
    expect(response.missingPermissions).toEqual(['email:create on email:campaign:all']);
  });
});

describe('hub.membership execution identities', () => {
  it('lists the identities of the environment', async () => {
    const identity = { id: 'usr_1', name: 'Project triggers', isDefault: true, status: 'Active' };
    const mock = createMockFetch({ body: { identities: [identity] } });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response = await norbix.hub.membership.getExecutionIdentities();

    expect(mock.lastCall!.method).toBe('GET');
    expect(new URL(mock.lastCall!.url).pathname).toBe('/v2/membership/execution-identities');
    expect(response.identities).toEqual([identity]);
  });

  it('creates one identity with its roles', async () => {
    const mock = createMockFetch({ body: { id: 'usr_2' } });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response = await norbix.hub.membership.createExecutionIdentity({
      name: 'Orders bot',
      roleIds: ['Editor'],
    });

    expect(mock.lastCall!.method).toBe('POST');
    expect(JSON.parse(mock.lastCall!.body as string)).toMatchObject({
      name: 'Orders bot',
      roleIds: ['Editor'],
    });
    expect(response.id).toBe('usr_2');
  });
});

describe('template update', () => {
  it('returns the id and the warnings on all three channels', async () => {
    const answer = { id: 'tpl_1', warnings: ['Tag news is not enabled on this channel.'] };
    const mock = createMockFetch({ body: answer });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const email = await norbix.hub.notifications.updateEmailTemplate({ viewId: 'tpl_1' });
    const sms = await norbix.hub.notifications.updateSmsTemplate({ viewId: 'tpl_1' });
    const push = await norbix.hub.notifications.updatePushTemplate({ viewId: 'tpl_1' });

    expect(email.warnings).toEqual(answer.warnings);
    expect(sms.warnings).toEqual(answer.warnings);
    expect(push.warnings).toEqual(answer.warnings);
  });
});

describe('save-request shapes', () => {
  it('a trigger and a scheduler task name their execution identity', () => {
    const trigger: Partial<CodeMashHub2.SchemaTriggerRequest> = { executionIdentityId: 'usr_1' };
    const task: Partial<CodeMashHub2.SaveSchedulerTaskRequest> = { executionIdentityId: 'usr_1' };
    expect(trigger.executionIdentityId).toBe(task.executionIdentityId);
  });

  it('a Code and a Marketplace action no longer carry a run-as user', () => {
    const code: Partial<CodeMashHub2.TriggerActionCodeDto> = {};
    const marketplace: Partial<CodeMashHub2.TriggerActionMarketplaceDto> = {};
    // @ts-expect-error — the trigger's executionIdentityId replaced it.
    code.runAsUserId = 'usr_1';
    // @ts-expect-error — the trigger's executionIdentityId replaced it.
    marketplace.runAsUserId = 'usr_1';
    expect(Object.keys(code)).toEqual(['runAsUserId']);
  });
});
