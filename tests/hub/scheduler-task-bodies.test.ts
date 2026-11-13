import { describe, expect, it } from 'vitest';

import { CodeMashHub2 } from '../../src/types/hub2.dtos.js';
import { makeClient } from '../_helpers.js';

/**
 * The "Code call" and "Workflow call" scheduler tasks, built from the
 * generated request types, reach `POST /scheduler/tasks` under `task` with the
 * discriminator the gateway's `SchedulerTaskRequestJsonConverter` reads
 * (`CodeFunctionalCall`, `WorkflowCall`) and the field names of
 * `Hub.Scheduler/Tasks/Save.Code.cs` / `Save.Workflow.cs`.
 *
 * Twins: Go `TestSaveSchedulerTaskSendsCodeAndWorkflowTasks`
 * (norbix/hub/scheduler_task_bodies_test.go), Python
 * `test_save_scheduler_task_sends_code_and_workflow_tasks`, .NET
 * `SchedulerBodyVariantTests.Save_code_call_task_…` / `Save_workflow_call_task_…`.
 * Every call goes to a mock fetch — nothing leaves the process.
 */

const code = new CodeMashHub2.CodeFunctionSchedulerTaskRequest({
  type: CodeMashHub2.SchedulerTaskType.CodeFunctionalCall,
  functionRef: {
    integrationId: 'int_lambda',
    functionId: 'nightly-report',
    qualifier: 'live',
  } as CodeMashHub2.FunctionRefDto,
  invocationType: CodeMashHub2.CodeInvocationType.Async,
  config: '{"source":"ts"}',
});

const workflow = new CodeMashHub2.WorkflowSchedulerTaskRequest({
  type: CodeMashHub2.SchedulerTaskType.WorkflowCall,
  workflowRef: 'wf_3kQ9mZ2vXc8LpR4wT7yH1n',
  payload: { source: 'ts' },
});

const tasks: { name: string; task: CodeMashHub2.SchedulerTaskRequest; wire: unknown }[] = [
  {
    name: 'CodeFunctionalCall',
    task: code,
    wire: {
      type: 'CodeFunctionalCall',
      functionRef: { integrationId: 'int_lambda', functionId: 'nightly-report', qualifier: 'live' },
      invocationType: 'Async',
      config: '{"source":"ts"}',
    },
  },
  {
    name: 'WorkflowCall',
    task: workflow,
    wire: {
      type: 'WorkflowCall',
      workflowRef: 'wf_3kQ9mZ2vXc8LpR4wT7yH1n',
      payload: { source: 'ts' },
    },
  },
];

describe('hub.scheduler.saveSchedulerTask — Code call and Workflow call tasks', () => {
  for (const { name, task, wire } of tasks) {
    it(`sends a ${name} task under task, on POST /v2/scheduler/tasks`, async () => {
      const { norbix, mock } = makeClient({});
      await norbix.hub.scheduler.saveSchedulerTask({
        name: 'Nightly',
        cron: '0 2 * * *',
        initiatorUserId: 'usr_1',
        isEnabled: true,
        stopOnError: false,
        task,
      });

      const call = mock.lastCall!;
      const url = new URL(call.url);
      expect(call.method).toBe('POST');
      expect(url.pathname).toBe('/v2/scheduler/tasks');
      expect(url.search).toBe('');
      expect(JSON.parse(call.body!)).toEqual({
        name: 'Nightly',
        cron: '0 2 * * *',
        initiatorUserId: 'usr_1',
        isEnabled: true,
        stopOnError: false,
        task: wire,
      });
    });
  }
});
