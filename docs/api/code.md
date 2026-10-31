# API · Code

[← Back to API index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.api.code` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                      | Verb   | Path                                            | Scope     |
| ----------------------------------------------------------- | ------ | ----------------------------------------------- | --------- |
| [`getCodeWorkflowWaitingRuns`](#getcodeworkflowwaitingruns) | `GET`  | `/{version}/code/workflows/runs`                | `project` |
| [`resumeCodeWorkflowRun`](#resumecodeworkflowrun)           | `POST` | `/{version}/code/workflows/runs/{RunId}/resume` | `project` |
| [`openCodeWorkflowResumeLink`](#opencodeworkflowresumelink) | `GET`  | `/{version}/code/workflows/resume/{Token}`      | `project` |
| [`useCodeWorkflowResumeLink`](#usecodeworkflowresumelink)   | `POST` | `/{version}/code/workflows/resume/{Token}`      | `project` |
| [`getCodeWorkflowRuns`](#getcodeworkflowruns)               | `GET`  | `/{version}/code/workflows/{Id}/runs`           | `project` |
| [`getCodeWorkflowRun`](#getcodeworkflowrun)                 | `GET`  | `/{version}/code/workflows/runs/{RunId}`        | `project` |
| [`getCodeWorkflowRunLogs`](#getcodeworkflowrunlogs)         | `GET`  | `/{version}/code/workflows/runs/{RunId}/logs`   | `project` |
| [`resumeCodeWorkflowRunByKey`](#resumecodeworkflowrunbykey) | `POST` | `/{version}/code/workflows/{Id}/resume`         | `project` |
| [`retryCodeWorkflowRunStep`](#retrycodeworkflowrunstep)     | `POST` | `/{version}/code/workflows/runs/{RunId}/retry`  | `project` |
| [`cancelCodeWorkflowRun`](#cancelcodeworkflowrun)           | `POST` | `/{version}/code/workflows/runs/{RunId}/cancel` | `project` |

## Reference

### getCodeWorkflowWaitingRuns

`GET` `/{version}/code/workflows/runs`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetCodeWorkflowWaitingRuns`
**Response**: `CodeMashApi2.WorkflowRunsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.code.getCodeWorkflowWaitingRuns({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.WorkflowRunsResponse
```

[↑ Top](#endpoints)

### resumeCodeWorkflowRun

`POST` `/{version}/code/workflows/runs/{RunId}/resume`

**Request DTO**: `CodeMashApi2.ResumeCodeWorkflowRun`
**Response**: `CodeMashApi2.WorkflowRunResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.code.resumeCodeWorkflowRun({
  RunId: 'RunId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.WorkflowRunResponse
```

[↑ Top](#endpoints)

### openCodeWorkflowResumeLink

`GET` `/{version}/code/workflows/resume/{Token}`

**Request DTO**: `CodeMashApi2.OpenCodeWorkflowResumeLink`
**Response**: `CodeMashApi2.CodeWorkflowResumeLinkResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.code.openCodeWorkflowResumeLink({
  Token: 'Token-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.CodeWorkflowResumeLinkResponse
```

[↑ Top](#endpoints)

### useCodeWorkflowResumeLink

`POST` `/{version}/code/workflows/resume/{Token}`

**Request DTO**: `CodeMashApi2.UseCodeWorkflowResumeLink`
**Response**: `CodeMashApi2.WorkflowRunResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.code.useCodeWorkflowResumeLink({
  Token: 'Token-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.WorkflowRunResponse
```

[↑ Top](#endpoints)

### getCodeWorkflowRuns

`GET` `/{version}/code/workflows/{Id}/runs`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetCodeWorkflowRuns`
**Response**: `CodeMashApi2.WorkflowRunsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.code.getCodeWorkflowRuns({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.WorkflowRunsResponse
```

[↑ Top](#endpoints)

### getCodeWorkflowRun

`GET` `/{version}/code/workflows/runs/{RunId}`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetCodeWorkflowRun`
**Response**: `CodeMashApi2.WorkflowRunResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.code.getCodeWorkflowRun({
  RunId: 'RunId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.WorkflowRunResponse
```

[↑ Top](#endpoints)

### getCodeWorkflowRunLogs

`GET` `/{version}/code/workflows/runs/{RunId}/logs`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetCodeWorkflowRunLogs`
**Response**: `CodeMashApi2.WorkflowRunLogsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.code.getCodeWorkflowRunLogs({
  RunId: 'RunId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.WorkflowRunLogsResponse
```

[↑ Top](#endpoints)

### resumeCodeWorkflowRunByKey

`POST` `/{version}/code/workflows/{Id}/resume`

**Request DTO**: `CodeMashApi2.ResumeCodeWorkflowRunByKey`
**Response**: `CodeMashApi2.WorkflowRunResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.code.resumeCodeWorkflowRunByKey({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.WorkflowRunResponse
```

[↑ Top](#endpoints)

### retryCodeWorkflowRunStep

`POST` `/{version}/code/workflows/runs/{RunId}/retry`

**Request DTO**: `CodeMashApi2.RetryCodeWorkflowRunStep`
**Response**: `CodeMashApi2.WorkflowRunResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.code.retryCodeWorkflowRunStep({
  RunId: 'RunId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.WorkflowRunResponse
```

[↑ Top](#endpoints)

### cancelCodeWorkflowRun

`POST` `/{version}/code/workflows/runs/{RunId}/cancel`

**Request DTO**: `CodeMashApi2.CancelCodeWorkflowRun`
**Response**: `CodeMashApi2.WorkflowRunResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.code.cancelCodeWorkflowRun({
  RunId: 'RunId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.WorkflowRunResponse
```

[↑ Top](#endpoints)
