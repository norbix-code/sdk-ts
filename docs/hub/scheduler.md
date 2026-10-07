# Hub · Scheduler

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.scheduler` on the [`Norbix`](../../README.md#authentication) client.

The scheduler runs a task on a cron schedule. Turn the module on for the project
once (`enableScheduler`), then save tasks.

Good to know:

- **Email, SMS and push campaign tasks.** A task sends a campaign (a template
  to an audience) each time its cron fires: `type` is `EmailCampaign`,
  `SmsCampaign` or `PushCampaign`. Webhook and code tasks (`WebhookCall`,
  `CodeFunctionalCall`) exist in the types but the gateway refuses them for now.
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

| Field             | Required | Notes                                                    |
| ----------------- | -------- | -------------------------------------------------------- |
| `name`            | yes      |                                                          |
| `cron`            | yes      | 5 fields, UTC                                            |
| `initiatorUserId` | yes      | `usr_…` — the caller or a project service user           |
| `isEnabled`       | yes      | `false` saves the task without starting its cron         |
| `stopOnError`     | yes      | `true` disables the task when a run fails                |
| `task`            | yes      | `{ type, campaign, databaseIntegrationId? }` — see below |
| `taskId`          | no       | set to update an existing task                           |
| `description`     | no       |                                                          |

`task.type` picks the channel, and `task.campaign` is the same campaign you
would create with that notifications module:

| `task.type`     | `task.campaign`                                | Required by the gateway                                                                                                                                                                                       |
| --------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `EmailCampaign` | email campaign (`SchedulerEmailCampaignInput`) | `source` (`AllUsers`, `SpecifiedUsers`, `AccountUsers`, `Email`, `Collection`) and `templateId`                                                                                                               |
| `SmsCampaign`   | SMS campaign (`SchedulerSmsCampaignInput`)     | `templateId`, `integrationId`, and the audience: `deliveryType` (`AllUsers`, `SpecifiedUsers`, `AccountUsers`, `PhoneNumbers`, `Collection`) plus the settings object of the same name, e.g. `specifiedUsers` |
| `PushCampaign`  | push campaign (`SchedulerPushCampaignInput`)   | `source` (`AllUsers`, `SpecifiedUsers`, `AccountUsers`, `Devices`, `Collection`) and `templateId`; the audience fields go with `source`                                                                       |

`databaseIntegrationId` (`int_…`) is optional: without it the project's
default database integration is used when the task fires. The body is typed
(`SaveSchedulerTaskInput`, exported from `@norbix.ai/ts/hub` with the per-type
inputs `EmailCampaignSchedulerTaskInput`, `SmsCampaignSchedulerTaskInput` and
`PushCampaignSchedulerTaskInput`), so plain string values type-check without a
cast, and a wrong `type` or a missing required field fails the typecheck.

**Request DTO**: `CodeMashHub2.SaveSchedulerTaskRequest` (task: `CodeMashHub2.EmailCampaignSchedulerTaskRequest`, `CodeMashHub2.SmsCampaignSchedulerTaskRequest` or `CodeMashHub2.PushCampaignSchedulerTaskRequest`)
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

An SMS task — every day at 08:00 UTC to two members, through one SMS provider:

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const { id } = await norbix.hub.scheduler.saveSchedulerTask({
  name: 'Daily SMS reminder',
  cron: '0 8 * * *',
  initiatorUserId: 'usr_123',
  isEnabled: true,
  stopOnError: false,
  task: {
    type: 'SmsCampaign',
    campaign: {
      templateId: 'tmpl_sms_reminder',
      integrationId: 'int_twilio', // the SMS provider integration
      deliveryType: 'SpecifiedUsers',
      specifiedUsers: {
        recipientsSourceType: 'SpecifiedUsers', // same value as deliveryType
        recipients: ['usr_456', 'usr_789'],
      },
    },
  },
});
```

A push task — every Friday at 18:00 UTC to all subscribers on iOS and Android:

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const { id } = await norbix.hub.scheduler.saveSchedulerTask({
  name: 'Weekly push',
  cron: '0 18 * * 5',
  initiatorUserId: 'usr_123',
  isEnabled: true,
  stopOnError: true,
  task: {
    type: 'PushCampaign',
    campaign: {
      source: 'AllUsers',
      templateId: 'tmpl_push_weekly',
      integrationId: 'int_fcm', // optional: the project default push integration otherwise
      rolesNames: ['subscriber'], // optional
      platforms: ['Ios', 'Android'], // optional: every platform otherwise
    },
  },
});
```

[↑ Top](#endpoints)
