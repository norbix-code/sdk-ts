import { describe, expect, it } from 'vitest';

import type { SaveSchedulerTaskInput } from '../../src/hub/index.js';
import { CodeMashHub2 } from '../../src/types/hub2.dtos.js';
import { makeClient } from '../_helpers.js';

/**
 * Tests for hub.scheduler (8 endpoints).
 *
 * Each method is asserted against:
 *   - the HTTP verb and the full URL (version segment + path tokens)
 *   - where the request fields go: path, query string or JSON body
 *   - auth and project headers
 *
 * `saveSchedulerTask` also checks the JSON body: the gateway picks the task
 * subtype from `task.type` (only `EmailCampaign` today) and the campaign
 * audience from `task.campaign.source`. Every call goes to a mock fetch.
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
  it('module exposes 8 method(s)', () => {
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
});
