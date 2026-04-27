# Hub · Scheduler

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)



Accessed as `norbix.hub.scheduler` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method | Verb | Path | Scope |
| --- | --- | --- | --- |
| [`disableScheduler`](#disablescheduler) | `GET` | `/{version}/scheduler/disable` | `project` |
| [`enableScheduler`](#enablescheduler) | `GET` | `/{version}/scheduler/enable` | `project` |
| [`deleteSchedulerTask`](#deleteschedulertask) | `DELETE` | `/{version}/scheduler/tasks/{Id}` | `project` |
| [`disableSchedulerTask`](#disableschedulertask) | `PUT` | `/{version}/scheduler/tasks/{Id}/disable` | `project` |
| [`enableSchedulerTask`](#enableschedulertask) | `PUT` | `/{version}/scheduler/tasks/{Id}/enable` | `project` |
| [`getSchedulerTask`](#getschedulertask) | `GET` | `/{version}/scheduler/tasks/{id}` | `project` |
| [`getSchedulerTasks`](#getschedulertasks) | `GET` | `/{version}/scheduler/tasks` | `project` |
| [`saveSchedulerTask`](#saveschedulertask) | `POST` | `/{version}/scheduler/tasks` | `project` |

## Reference

### disableScheduler

`GET` `/{version}/scheduler/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableScheduler`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.scheduler.disableScheduler({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableScheduler

`GET` `/{version}/scheduler/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableScheduler`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

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
import { Norbix } from '@norbix/ts';

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
import { Norbix } from '@norbix/ts';

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
import { Norbix } from '@norbix/ts';

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
import { Norbix } from '@norbix/ts';

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
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.scheduler.getSchedulerTasks({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetSchedulerTasksResponse
```

[↑ Top](#endpoints)

### saveSchedulerTask

`POST` `/{version}/scheduler/tasks`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveSchedulerTaskRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.scheduler.saveSchedulerTask({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)
