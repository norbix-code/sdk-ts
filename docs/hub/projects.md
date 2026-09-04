# Hub · Projects

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.projects` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                  | Verb   | Path                                                                                | Scope     |
| --------------------------------------- | ------ | ----------------------------------------------------------------------------------- | --------- |
| [`getProjectBrief`](#getprojectbrief)   | `GET`  | `/{version}/projects/{projectId}/ai/brief`                                          | `project` |
| [`getWorkItems`](#getworkitems)         | `GET`  | `/{version}/projects/{projectId}/ai/work-items`                                     | `project` |
| [`getWorkItem`](#getworkitem)           | `GET`  | `/{version}/projects/{projectId}/ai/work-items/{WorkItemId}`                        | `project` |
| [`exportWorkItem`](#exportworkitem)     | `GET`  | `/{version}/projects/{projectId}/ai/work-items/{WorkItemId}/export.md`              | `project` |
| [`markNeedsYouDone`](#markneedsyoudone) | `POST` | `/{version}/projects/{projectId}/ai/work-items/{WorkItemId}/needs-you/{Index}/done` | `project` |

## Reference

### getProjectBrief

`GET` `/{version}/projects/{projectId}/ai/brief`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetProjectBriefRequest`
**Response**: `CodeMashHub2.GetProjectBriefResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.projects.getProjectBrief({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetProjectBriefResponse
```

[↑ Top](#endpoints)

### getWorkItems

`GET` `/{version}/projects/{projectId}/ai/work-items`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetWorkItemsRequest`
**Response**: `CodeMashHub2.GetWorkItemsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.projects.getWorkItems({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetWorkItemsResponse
```

[↑ Top](#endpoints)

### getWorkItem

`GET` `/{version}/projects/{projectId}/ai/work-items/{WorkItemId}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetWorkItemRequest`
**Response**: `CodeMashHub2.GetWorkItemResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.projects.getWorkItem({
  projectId: 'projectId-here',
  WorkItemId: 'WorkItemId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetWorkItemResponse
```

[↑ Top](#endpoints)

### exportWorkItem

`GET` `/{version}/projects/{projectId}/ai/work-items/{WorkItemId}/export.md`

**Request DTO**: `CodeMashHub2.ExportWorkItemRequest`
**Response**: `CodeMashHub2.ExportWorkItemResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.projects.exportWorkItem({
  projectId: 'projectId-here',
  WorkItemId: 'WorkItemId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.ExportWorkItemResponse
```

[↑ Top](#endpoints)

### markNeedsYouDone

`POST` `/{version}/projects/{projectId}/ai/work-items/{WorkItemId}/needs-you/{Index}/done`

**Request DTO**: `CodeMashHub2.MarkNeedsYouDoneRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.projects.markNeedsYouDone({
  projectId: 'projectId-here',
  WorkItemId: 'WorkItemId-here',
  Index: 'Index-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)
