import { describe, expect, it } from 'vitest';

import type {
  SaveSchedulerTaskInput,
  SchedulerTaskInput,
  SchedulerTaskRunsResponse,
} from '../../src/hub/index.js';
import { CodeMashHub2 } from '../../src/types/hub2.dtos.js';
import { createMockFetch, makeClient } from '../_helpers.js';

/**
 * Tests for hub.scheduler (9 endpoints).
 *
 * Each method is asserted against:
 *   - the HTTP verb and the full URL (version segment + path tokens)
 *   - where the request fields go: path, query string or JSON body
 *   - auth and project headers
 *
 * `saveSchedulerTask` also checks the JSON body: the gateway picks the task
 * subtype from `task.type` (`EmailCampaign`, `SmsCampaign` or `PushCampaign`)
 * and the campaign audience from `task.campaign.source` (email, push) or
 * `task.campaign.deliveryType` (SMS). Every call goes to a mock fetch.
 */
const HUB = 'https://hub.norbix.io/v2';

function client() {
  const { norbix, mock } = makeClient({});
  return { scheduler: norbix.hub.scheduler, mock };
}

function expectAuthHeaders(headers: Headers | undefined) {
  expect(headers?.get('Authorization')).toBe('Bearer test-token');
  expect(headers?.get('X-CM-ProjectId')).toBe('test-project');
}

function sentBody(raw: string | undefined): Record<string, unknown> {
  expect(raw).toBeDefined();
  return JSON.parse(raw!) as Record<string, unknown>;
}

describe('hub.scheduler', () => {
  it('module exposes 9 method(s)', () => {
    const { scheduler } = client();
    const methods = Object.entries(scheduler)
      .filter(([, v]) => typeof v === 'function')
      .map(([k]) => k);
    expect(methods.sort()).toEqual(
      [
        'deleteSchedulerTask',
        'disableScheduler',
        'disableSchedulerTask',
        'enableScheduler',
        'enableSchedulerTask',
        'getSchedulerTask',
        'getSchedulerTaskRuns',
        'getSchedulerTasks',
        'saveSchedulerTask',
      ].sort(),
    );
  });

  it('enableScheduler: PUT /{version}/scheduler/enable, no body', async () => {
    const { scheduler, mock } = client();
    await scheduler.enableScheduler();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url).toBe(`${HUB}/scheduler/enable`);
    expect(mock.lastCall?.body).toBeUndefined();
    expectAuthHeaders(mock.lastCall?.headers);
  });

  it('disableScheduler: PUT /{version}/scheduler/disable, no body', async () => {
    const { scheduler, mock } = client();
    await scheduler.disableScheduler();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url).toBe(`${HUB}/scheduler/disable`);
    expect(mock.lastCall?.body).toBeUndefined();
    expectAuthHeaders(mock.lastCall?.headers);
  });

  it('getSchedulerTasks: GET /{version}/scheduler/tasks, filters in the query string', async () => {
    const { scheduler, mock } = client();
    await scheduler.getSchedulerTasks({
      type: CodeMashHub2.SchedulerTaskType.EmailCampaign,
      enabled: true,
    });
    expect(mock.lastCall?.method).toBe('GET');
    const url = new URL(mock.lastCall!.url);
    expect(`${url.origin}${url.pathname}`).toBe(`${HUB}/scheduler/tasks`);
    expect(url.searchParams.get('type')).toBe('EmailCampaign');
    expect(url.searchParams.get('enabled')).toBe('true');
    expect(mock.lastCall?.body).toBeUndefined();
    expectAuthHeaders(mock.lastCall?.headers);
  });

  it('getSchedulerTask: GET /{version}/scheduler/tasks/{id}, id in the path', async () => {
    const { scheduler, mock } = client();
    await scheduler.getSchedulerTask({ id: 'tsk_123' });
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url).toBe(`${HUB}/scheduler/tasks/tsk_123`);
    expect(mock.lastCall?.body).toBeUndefined();
    expectAuthHeaders(mock.lastCall?.headers);
  });

  it('getSchedulerTaskRuns: GET /{version}/scheduler/tasks/{id}/runs, id in the path, take in the query', async () => {
    const { scheduler, mock } = client();
    await scheduler.getSchedulerTaskRuns({ id: 'tsk_123', take: 25 });
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url).toBe(`${HUB}/scheduler/tasks/tsk_123/runs?take=25`);
    expect(mock.lastCall?.body).toBeUndefined();
    expectAuthHeaders(mock.lastCall?.headers);
  });

  it('getSchedulerTaskRuns: no take sends no query string (the gateway defaults to 10)', async () => {
    const { scheduler, mock } = client();
    await scheduler.getSchedulerTaskRuns({ id: 'tsk_123' });
    expect(mock.lastCall?.url).toBe(`${HUB}/scheduler/tasks/tsk_123/runs`);
  });

  it('getSchedulerTaskRuns: returns the runs with the outcome as the wire string', async () => {
    const body = {
      logsEnabled: true,
      runs: [
        {
          logId: 'log_2',
          atUtc: '2026-10-07T10:00:00Z',
          atUnix: 1791367200,
          outcome: 'Failed',
          reason: 'run-failed',
          detail: 'Template not found',
          correlationId: 'corr_2',
        },
        { logId: 'log_1', atUtc: '2026-10-07T09:00:00Z', atUnix: 1791363600, outcome: 'Fired' },
      ],
    };
    const mock = createMockFetch({ body });
    const { norbix } = makeClient({ fetch: mock.fetch });
    const result: SchedulerTaskRunsResponse = await norbix.hub.scheduler.getSchedulerTaskRuns({
      id: 'tsk_123',
    });
    expect(mock.lastCall?.url).toBe(`${HUB}/scheduler/tasks/tsk_123/runs`);
    expect(result.logsEnabled).toBe(true);
    expect(result.runs.map((r) => [r.outcome, r.reason])).toEqual([
      ['Failed', 'run-failed'],
      ['Fired', undefined],
    ]);
  });

  it('getSchedulerTaskRuns: the task id is required', () => {
    const { scheduler } = client();
    // @ts-expect-error — `id` is required
    const call = () => scheduler.getSchedulerTaskRuns({ take: 5 });
    expect(typeof call).toBe('function');
  });

  it('enableSchedulerTask: PUT /{version}/scheduler/tasks/{Id}/enable, id in the path', async () => {
    const { scheduler, mock } = client();
    await scheduler.enableSchedulerTask({ id: 'tsk_123' });
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url).toBe(`${HUB}/scheduler/tasks/tsk_123/enable`);
    expect(mock.lastCall?.body).toBeUndefined();
    expectAuthHeaders(mock.lastCall?.headers);
  });

  it('disableSchedulerTask: PUT /{version}/scheduler/tasks/{Id}/disable, id in the path', async () => {
    const { scheduler, mock } = client();
    await scheduler.disableSchedulerTask({ id: 'tsk_123' });
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url).toBe(`${HUB}/scheduler/tasks/tsk_123/disable`);
    expect(mock.lastCall?.body).toBeUndefined();
    expectAuthHeaders(mock.lastCall?.headers);
  });

  it('deleteSchedulerTask: DELETE /{version}/scheduler/tasks/{Id}, id in the path', async () => {
    const { scheduler, mock } = client();
    await scheduler.deleteSchedulerTask({ id: 'tsk_123' });
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url).toBe(`${HUB}/scheduler/tasks/tsk_123`);
    expect(mock.lastCall?.body).toBeUndefined();
    expectAuthHeaders(mock.lastCall?.headers);
  });

  it('saveSchedulerTask: POST /{version}/scheduler/tasks, typed EmailCampaign task in the JSON body', async () => {
    const { scheduler, mock } = client();
    // Plain string literals for `type` and `source`, no cast: this call is
    // also the type-check that the typed task body is accepted.
    await scheduler.saveSchedulerTask({
      name: 'Weekly digest',
      cron: '0 9 * * 1',
      initiatorUserId: 'usr_123',
      isEnabled: true,
      stopOnError: false,
      task: {
        type: 'EmailCampaign',
        campaign: {
          source: 'AllUsers',
          templateId: 'tpl_123',
          rolesNames: ['subscriber'],
        },
      },
    });
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toBe(`${HUB}/scheduler/tasks`);
    expect(mock.lastCall?.headers.get('Content-Type')).toBe('application/json');
    expectAuthHeaders(mock.lastCall?.headers);
    expect(sentBody(mock.lastCall?.body)).toEqual({
      name: 'Weekly digest',
      cron: '0 9 * * 1',
      initiatorUserId: 'usr_123',
      isEnabled: true,
      stopOnError: false,
      task: {
        type: 'EmailCampaign',
        campaign: {
          source: 'AllUsers',
          templateId: 'tpl_123',
          rolesNames: ['subscriber'],
        },
      },
    });
  });

  it('saveSchedulerTask: update sends taskId in the body; DTO class instances are accepted', async () => {
    const { scheduler, mock } = client();
    const request: SaveSchedulerTaskInput = {
      taskId: 'tsk_123',
      name: 'Weekly digest',
      cron: '0 9 * * 1',
      initiatorUserId: 'usr_123',
      isEnabled: false,
      stopOnError: true,
      task: new CodeMashHub2.EmailCampaignSchedulerTaskRequest({
        type: CodeMashHub2.SchedulerTaskType.EmailCampaign,
        databaseIntegrationId: 'int_db',
        campaign: new CodeMashHub2.EmailToAllUsersDeliverySettingsRequest({
          source: CodeMashHub2.EmailCampaignRecipientsSourceTypes.AllUsers,
          templateId: 'tpl_123',
        }),
      }),
    };
    await scheduler.saveSchedulerTask(request);
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toBe(`${HUB}/scheduler/tasks`);
    expect(sentBody(mock.lastCall?.body)).toEqual({
      taskId: 'tsk_123',
      name: 'Weekly digest',
      cron: '0 9 * * 1',
      initiatorUserId: 'usr_123',
      isEnabled: false,
      stopOnError: true,
      task: {
        type: 'EmailCampaign',
        databaseIntegrationId: 'int_db',
        campaign: { source: 'AllUsers', templateId: 'tpl_123' },
      },
    });
  });
  it('saveSchedulerTask: POST /{version}/scheduler/tasks, typed SmsCampaign task in the JSON body', async () => {
    const { scheduler, mock } = client();
    // Plain object literal, no cast: also the type-check of the SMS task input.
    await scheduler.saveSchedulerTask({
      name: 'Daily SMS reminder',
      cron: '0 8 * * *',
      initiatorUserId: 'usr_123',
      isEnabled: true,
      stopOnError: false,
      task: {
        type: 'SmsCampaign',
        databaseIntegrationId: 'int_db',
        campaign: {
          templateId: 'tmpl_sms',
          integrationId: 'int_sms',
          deliveryType: 'SpecifiedUsers',
          specifiedUsers: {
            recipientsSourceType: 'SpecifiedUsers',
            recipients: ['usr_1', 'usr_2'],
          },
        },
      },
    });
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toBe(`${HUB}/scheduler/tasks`);
    expect(mock.lastCall?.headers.get('Content-Type')).toBe('application/json');
    expectAuthHeaders(mock.lastCall?.headers);
    expect(sentBody(mock.lastCall?.body)).toEqual({
      name: 'Daily SMS reminder',
      cron: '0 8 * * *',
      initiatorUserId: 'usr_123',
      isEnabled: true,
      stopOnError: false,
      task: {
        type: 'SmsCampaign',
        databaseIntegrationId: 'int_db',
        campaign: {
          templateId: 'tmpl_sms',
          integrationId: 'int_sms',
          deliveryType: 'SpecifiedUsers',
          specifiedUsers: {
            recipientsSourceType: 'SpecifiedUsers',
            recipients: ['usr_1', 'usr_2'],
          },
        },
      },
    });
  });

  it('saveSchedulerTask: POST /{version}/scheduler/tasks, typed PushCampaign task in the JSON body', async () => {
    const { scheduler, mock } = client();
    // Plain object literal, no cast: also the type-check of the push task input.
    await scheduler.saveSchedulerTask({
      name: 'Weekly push',
      cron: '0 18 * * 5',
      initiatorUserId: 'usr_123',
      isEnabled: true,
      stopOnError: true,
      task: {
        type: 'PushCampaign',
        campaign: {
          source: 'AllUsers',
          templateId: 'tmpl_push',
          integrationId: 'int_push',
          rolesNames: ['subscriber'],
          platforms: ['Ios', 'Android'],
        },
      },
    });
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toBe(`${HUB}/scheduler/tasks`);
    expect(mock.lastCall?.headers.get('Content-Type')).toBe('application/json');
    expectAuthHeaders(mock.lastCall?.headers);
    expect(sentBody(mock.lastCall?.body)).toEqual({
      name: 'Weekly push',
      cron: '0 18 * * 5',
      initiatorUserId: 'usr_123',
      isEnabled: true,
      stopOnError: true,
      task: {
        type: 'PushCampaign',
        campaign: {
          source: 'AllUsers',
          templateId: 'tmpl_push',
          integrationId: 'int_push',
          rolesNames: ['subscriber'],
          platforms: ['Ios', 'Android'],
        },
      },
    });
  });

  it('SchedulerTaskInput: an unknown type literal or a missing required field fails the typecheck', () => {
    // @ts-expect-error — 'WebhookCall' tasks are not supported yet (no typed input)
    const webhook: SchedulerTaskInput = { type: 'WebhookCall' };
    // @ts-expect-error — not a task type at all
    const bogus: SchedulerTaskInput = { type: 'SmsCampaigns', campaign: {} };
    const noIntegration: SchedulerTaskInput = {
      type: 'SmsCampaign',
      // @ts-expect-error — an SMS campaign needs `integrationId` and an audience
      campaign: { templateId: 'tmpl_sms' },
    };
    const noTemplate: SchedulerTaskInput = {
      type: 'PushCampaign',
      // @ts-expect-error — a push campaign needs `templateId`
      campaign: { source: 'AllUsers' },
    };
    expect([webhook, bogus, noIntegration, noTemplate].map((t) => t.type)).toEqual([
      'WebhookCall',
      'SmsCampaigns',
      'SmsCampaign',
      'PushCampaign',
    ]);
  });
});
