# Hub · Scheduler

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.scheduler` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                          | Verb     | Path                                      | Scope     |
| ----------------------------------------------- | -------- | ----------------------------------------- | --------- |
| [`disableScheduler`](#disablescheduler)         | `PUT`    | `/{version}/scheduler/disable`            | `project` |
| [`enableScheduler`](#enablescheduler)           | `PUT`    | `/{version}/scheduler/enable`             | `project` |
| [`deleteSchedulerTask`](#deleteschedulertask)   | `DELETE` | `/{version}/scheduler/tasks/{Id}`         | `project` |
| [`disableSchedulerTask`](#disableschedulertask) | `PUT`    | `/{version}/scheduler/tasks/{Id}/disable` | `project` |
| [`enableSchedulerTask`](#enableschedulertask)   | `PUT`    | `/{version}/scheduler/tasks/{Id}/enable`  | `project` |
| [`getSchedulerTask`](#getschedulertask)         | `GET`    | `/{version}/scheduler/tasks/{id}`         | `project` |
| [`getSchedulerTasks`](#getschedulertasks)       | `GET`    | `/{version}/scheduler/tasks`              | `project` |
| [`getSchedulerTaskRuns`](#getschedulertaskruns) | `GET`    | `/{version}/scheduler/tasks/{id}/runs`    | `project` |
| [`saveSchedulerTask`](#saveschedulertask)       | `POST`   | `/{version}/scheduler/tasks`              | `project` |

## Reference

### disableScheduler

`PUT` `/{version}/scheduler/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableScheduler`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.scheduler.disableScheduler({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableScheduler

`PUT` `/{version}/scheduler/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableScheduler`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.scheduler.enableScheduler({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteSchedulerTask

`DELETE` `/{version}/scheduler/tasks/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteSchedulerTask`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.scheduler.deleteSchedulerTask({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### disableSchedulerTask

`PUT` `/{version}/scheduler/tasks/{Id}/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableSchedulerTask`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.scheduler.disableSchedulerTask({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableSchedulerTask

`PUT` `/{version}/scheduler/tasks/{Id}/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableSchedulerTask`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.scheduler.enableSchedulerTask({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getSchedulerTask

`GET` `/{version}/scheduler/tasks/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetSchedulerTask`
**Response**: `CodeMashHub2.GetSchedulerTaskResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.scheduler.getSchedulerTask({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetSchedulerTaskResponse
```

[↑ Top](#endpoints)

### getSchedulerTasks

`GET` `/{version}/scheduler/tasks`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetSchedulerTasks`
**Response**: `CodeMashHub2.GetSchedulerTasksResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.scheduler.getSchedulerTasks({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetSchedulerTasksResponse
```

[↑ Top](#endpoints)

### getSchedulerTaskRuns

`GET` `/{version}/scheduler/tasks/{id}/runs`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetSchedulerTaskRuns`
**Response**: `CodeMashHub2.GetSchedulerTaskRunsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.scheduler.getSchedulerTaskRuns({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetSchedulerTaskRunsResponse
```

[↑ Top](#endpoints)

### saveSchedulerTask

`POST` `/{version}/scheduler/tasks`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveSchedulerTaskRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.scheduler.saveSchedulerTask({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

<!-- @hand-written:begin -->

## Task bodies: Code call and Workflow call

`task` is picked by its `type`. Besides the email, SMS and push campaign tasks, the gateway runs a cloud-function call and a workflow start; build them from the generated types:

```ts
import { CodeMashHub2 } from '@norbix.ai/ts';

// Call a cloud function on every fire (the task's initiator needs code:execute on the integration).
await norbix.hub.scheduler.saveSchedulerTask({
  name: 'Nightly report',
  cron: '0 2 * * *', // 5 fields, UTC
  initiatorUserId: 'usr_…',
  isEnabled: true,
  stopOnError: false,
  task: new CodeMashHub2.CodeFunctionSchedulerTaskRequest({
    type: CodeMashHub2.SchedulerTaskType.CodeFunctionalCall,
    functionRef: {
      integrationId: 'int_lambda',
      functionId: 'nightly-report',
      qualifier: 'live',
    } as CodeMashHub2.FunctionRefDto,
    invocationType: CodeMashHub2.CodeInvocationType.Async,
    config: '{"source":"scheduler"}', // map every @Model.X binding in mappedTokens
  }),
});

// Start a workflow on every fire (the run acts as the workflow's own identity).
await norbix.hub.scheduler.saveSchedulerTask({
  name: 'Nightly onboarding sweep',
  cron: '0 3 * * *',
  initiatorUserId: 'usr_…',
  isEnabled: true,
  stopOnError: false,
  task: new CodeMashHub2.WorkflowSchedulerTaskRequest({
    type: CodeMashHub2.SchedulerTaskType.WorkflowCall,
    workflowRef: 'wf_…',
    payload: { source: 'scheduler' }, // strings only: the run's @Model.Request.* values
  }),
});
```

They go on the wire as `"task": {"type": "CodeFunctionalCall", "functionRef": {…}, "invocationType": "Async", "config": "…"}` and `"task": {"type": "WorkflowCall", "workflowRef": "wf_…", "payload": {"source": "scheduler"}}` (`tests/hub/scheduler-task-bodies.test.ts`). `WebhookCall` is refused on save. `getSchedulerTaskRuns({ id, take })` reads a task's latest runs (1–50, default 10), newest first; `outcome` is the string `'Fired'`, `'Failed'` or `'Skipped'`.

<!-- @hand-written:end -->
