# Hub · Scheduler

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.scheduler` on the [`Norbix`](../../README.md#authentication) client.

The scheduler runs a task on a cron schedule. Turn the module on for the project
once (`enableScheduler`), then save tasks.

Good to know:

- **Only `EmailCampaign` tasks today.** A task sends an email campaign (a
  template to an audience) each time its cron fires. Other `SchedulerTaskType`
  values exist in the types but the gateway refuses them.
- **Cron is 5 fields, in UTC**: `minute hour day-of-month month day-of-week`.
  `0 9 * * 1` = every Monday at 09:00 UTC. Tasks have no time zone.
- **`initiatorUserId`** (`usr_…`) is the user the task runs as. It must be the
  caller or a service user of the project.
- **Module enable / disable are `PUT`** (they were `GET` before v4.6.0).
  Disabling the module stops every task's cron.

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
| [`saveSchedulerTask`](#saveschedulertask)       | `POST`   | `/{version}/scheduler/tasks`              | `project` |

## Reference

### disableScheduler

`PUT` `/{version}/scheduler/disable`

Turn the scheduler module off for the project. Every task's cron stops. No
request fields.

**Request DTO**: `CodeMashHub2.DisableScheduler`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

await norbix.hub.scheduler.disableScheduler();
```

[↑ Top](#endpoints)

### enableScheduler

`PUT` `/{version}/scheduler/enable`

Turn the scheduler module on for the project. No request fields.

**Request DTO**: `CodeMashHub2.EnableScheduler`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

await norbix.hub.scheduler.enableScheduler();
```

[↑ Top](#endpoints)

### deleteSchedulerTask

`DELETE` `/{version}/scheduler/tasks/{Id}`

Delete a task. `id` goes in the path.

**Request DTO**: `CodeMashHub2.DeleteSchedulerTask`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

await norbix.hub.scheduler.deleteSchedulerTask({ id: 'tsk_123' });
```

[↑ Top](#endpoints)

### disableSchedulerTask

`PUT` `/{version}/scheduler/tasks/{Id}/disable`

Stop one task's cron without deleting the task. `id` goes in the path.

**Request DTO**: `CodeMashHub2.DisableSchedulerTask`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

await norbix.hub.scheduler.disableSchedulerTask({ id: 'tsk_123' });
```

[↑ Top](#endpoints)

### enableSchedulerTask

`PUT` `/{version}/scheduler/tasks/{Id}/enable`

Start one task's cron again. `id` goes in the path.

**Request DTO**: `CodeMashHub2.EnableSchedulerTask`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

await norbix.hub.scheduler.enableSchedulerTask({ id: 'tsk_123' });
```

[↑ Top](#endpoints)

### getSchedulerTask

`GET` `/{version}/scheduler/tasks/{id}`

Fetch one task by id, with its task body. `id` goes in the path.

**Request DTO**: `CodeMashHub2.GetSchedulerTask`
**Response**: `CodeMashHub2.GetSchedulerTaskResponse` (`item`)

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const { item } = await norbix.hub.scheduler.getSchedulerTask({ id: 'tsk_123' });
// item: CodeMashHub2.SchedulerTaskDto
```

[↑ Top](#endpoints)

### getSchedulerTasks

`GET` `/{version}/scheduler/tasks`

List the project's tasks, one page at a time. Optional filters `type` and
`enabled` go in the query string.

**Request DTO**: `CodeMashHub2.GetSchedulerTasks`
**Response**: `CodeMashHub2.GetSchedulerTasksResponse` (`list`)

```ts
import { Norbix } from '@norbix.ai/ts';
import { CodeMashHub2 } from '@norbix.ai/ts/types/hub';

const norbix = new Norbix();

const { list } = await norbix.hub.scheduler.getSchedulerTasks({
  type: CodeMashHub2.SchedulerTaskType.EmailCampaign,
  enabled: true,
});
// list.items: CodeMashHub2.SchedulerTaskListProjection[]; list.hasMore for the next page
```

[↑ Top](#endpoints)

### saveSchedulerTask

`POST` `/{version}/scheduler/tasks`

Create a task, or update it when `taskId` is set. All fields go in the JSON body.

| Field             | Required | Notes                                                         |
| ----------------- | -------- | ------------------------------------------------------------- |
| `name`            | yes      |                                                               |
| `cron`            | yes      | 5 fields, UTC                                                 |
| `initiatorUserId` | yes      | `usr_…` — the caller or a project service user                |
| `isEnabled`       | yes      | `false` saves the task without starting its cron              |
| `stopOnError`     | yes      | `true` disables the task when a run fails                     |
| `task`            | yes      | `{ type: 'EmailCampaign', campaign, databaseIntegrationId? }` |
| `taskId`          | no       | set to update an existing task                                |
| `description`     | no       |                                                               |

`task.campaign` is the same email campaign you would create with the
notifications module: `source` picks the audience (`AllUsers`,
`SpecifiedUsers`, `AccountUsers`, `Email`, `Collection`) and `templateId` is
always required. The body is typed (`SaveSchedulerTaskInput`, exported from
`@norbix.ai/ts/hub`), so plain string values type-check without a cast.

**Request DTO**: `CodeMashHub2.SaveSchedulerTaskRequest` (task: `CodeMashHub2.EmailCampaignSchedulerTaskRequest`)
**Response**: `CodeMashHub2.IdResponse` (`id` — the task id)

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const { id } = await norbix.hub.scheduler.saveSchedulerTask({
  name: 'Weekly digest',
  cron: '0 9 * * 1', // every Monday 09:00 UTC
  initiatorUserId: 'usr_123',
  isEnabled: true,
  stopOnError: false,
  task: {
    type: 'EmailCampaign',
    campaign: {
      source: 'AllUsers',
      templateId: 'tpl_123',
      rolesNames: ['subscriber'], // optional: only users with these roles
    },
  },
});
```

[↑ Top](#endpoints)
