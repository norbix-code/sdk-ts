import { describe, expect, it } from 'vitest';

import { CodeMashHub2 } from '../../src/types/hub2.dtos.js';
import { makeClient } from '../_helpers.js';

/**
 * Hand-written companion to the generated trigger tests: a "Run a cloud
 * function" (Code) action and a "Run a workflow" (Workflow) action, built
 * from the generated DTOs, reach the wire under `trigger.action` of every
 * host's save with the gateway's field names — functionRef / invocationType /
 * config, and workflowRef / payload. No runAsUserId: the trigger's
 * executionIdentityId says who runs.
 *
 * Twins: Go `TestTriggerSaveSendsCodeAndWorkflowActions`
 * (norbix/hub/triggers_routes_test.go), Python
 * `test_trigger_save_sends_code_and_workflow_actions_as_they_are`.
 * Every call goes to a mock fetch — nothing leaves the process.
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

const code: CodeMashHub2.TriggerActionCodeDto = {
  type: CodeMashHub2.TriggerActionType.Code,
  functionRef: { integrationId: 'int_lambda', functionId: 'notify-sales', qualifier: 'live' },
  invocationType: CodeMashHub2.CodeInvocationType.Async,
  config: '{"source":"ts"}',
};

const workflow: CodeMashHub2.TriggerActionWorkflowDto = {
  type: CodeMashHub2.TriggerActionType.Workflow,
  workflowRef: 'wf_onboard',
  payload: { source: 'ts' },
};

const actions: { name: string; action: CodeMashHub2.TriggerActionDto; wire: unknown }[] = [
  {
    name: 'Code',
    action: code,
    wire: {
      type: 'Code',
      functionRef: { integrationId: 'int_lambda', functionId: 'notify-sales', qualifier: 'live' },
      invocationType: 'Async',
      config: '{"source":"ts"}',
    },
  },
  {
    name: 'Workflow',
    action: workflow,
    wire: { type: 'Workflow', workflowRef: 'wf_onboard', payload: { source: 'ts' } },
  },
];

/** One save per host; the trigger is built from that host's generated request type. */
const saves: {
  host: string;
  module: string;
  method: string;
  url: string;
  trigger: (action: CodeMashHub2.TriggerActionDto) => CodeMashHub2.SaveTriggerRequest;
}[] = [
  {
    host: 'Database',
    module: 'database',
    method: 'saveSchemaTrigger',
    url: 'https://hub.norbix.io/v2/database/schemas/triggers',
    trigger: (action): CodeMashHub2.SchemaTriggerRequest => ({
      type: CodeMashHub2.TriggerType.Schema,
      schemaId: 'sch_orders',
      when: CodeMashHub2.SchemaTriggerType.OnInserted,
      name: `run ${action.type}`,
      isEnabled: true,
      breakOnError: false,
      executionIdentityId: 'usr_1',
      action,
    }),
  },
  {
    host: 'Files',
    module: 'files',
    method: 'saveFilesTrigger',
    url: 'https://hub.norbix.io/v2/files/triggers',
    trigger: (action): CodeMashHub2.FilesTriggerRequest => ({
      type: CodeMashHub2.TriggerType.Files,
      when: CodeMashHub2.FilesTriggerType.OnFileUploaded,
      name: `run ${action.type}`,
      isEnabled: true,
      breakOnError: false,
      executionIdentityId: 'usr_1',
      action,
    }),
  },
  {
    host: 'Membership',
    module: 'membership',
    method: 'saveMembershipTrigger',
    url: 'https://hub.norbix.io/v2/membership/triggers',
    trigger: (action): CodeMashHub2.MembershipTriggerRequest => ({
      type: CodeMashHub2.TriggerType.Membership,
      when: CodeMashHub2.MembershipTriggerType.OnRegistered,
      name: `run ${action.type}`,
      isEnabled: true,
      breakOnError: false,
      executionIdentityId: 'usr_1',
      action,
    }),
  },
  {
    host: 'Payments',
    module: 'payments',
    method: 'savePaymentsTrigger',
    url: 'https://hub.norbix.io/v2/payments/triggers',
    trigger: (action): CodeMashHub2.PaymentTriggerRequest => ({
      type: CodeMashHub2.TriggerType.Payments,
      when: CodeMashHub2.PaymentTriggerType.OnOrderPaid,
      name: `run ${action.type}`,
      isEnabled: true,
      breakOnError: false,
      executionIdentityId: 'usr_1',
      action,
    }),
  },
  {
    // No generated AiTriggerRequest exists yet (typegen gap); the save takes
    // the base SaveTriggerRequest, as the generated SaveAiProjectTrigger says.
    host: 'Ai',
    module: 'ai',
    method: 'saveAiProjectTrigger',
    url: 'https://hub.norbix.io/v2/ai/triggers',
    trigger: (action): CodeMashHub2.SaveTriggerRequest => ({
      type: CodeMashHub2.TriggerType.Ai,
      name: `run ${action.type}`,
      isEnabled: true,
      breakOnError: false,
      executionIdentityId: 'usr_1',
      action,
    }),
  },
];

describe('trigger saves send a Code and a Workflow action as they are', () => {
  it('covers five hosts and two actions', () => {
    expect(saves.map((s) => s.host)).toEqual(['Database', 'Files', 'Membership', 'Payments', 'Ai']);
    expect(actions.map((a) => a.name)).toEqual(['Code', 'Workflow']);
  });

  for (const save of saves) {
    for (const { name, action, wire } of actions) {
      it(`${save.host}: ${save.method} POSTs a ${name} action to ${new URL(save.url).pathname}`, async () => {
        const { ns, mock } = hubModule(save.module);
        const request: Partial<CodeMashHub2.SaveTrigger> = { trigger: save.trigger(action) };

        await ns[save.method]!(request);

        expect(mock.calls).toHaveLength(1);
        expect(mock.lastCall?.method).toBe('POST');
        expect(mock.lastCall?.url).toBe(save.url);
        const trigger = sentBody(mock.lastCall?.body)['trigger'] as Record<string, unknown>;
        expect(trigger['type']).toBe(save.trigger(action).type);
        expect(trigger['executionIdentityId']).toBe('usr_1');
        expect(trigger['action']).toEqual(wire);
        expect(trigger['action']).not.toHaveProperty('runAsUserId');
      });
    }
  }
});
