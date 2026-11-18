# Hub · Projects

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.projects` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                | Verb  | Path                                       | Scope     |
| ------------------------------------- | ----- | ------------------------------------------ | --------- |
| [`getProjectBrief`](#getprojectbrief) | `GET` | `/{version}/projects/{projectId}/ai/brief` | `project` |

## Reference

### getProjectBrief

`GET` `/{version}/projects/{projectId}/ai/brief`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetProjectBriefRequest`
**Response**: `CodeMashHub2.GetProjectBriefResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.projects.getProjectBrief({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetProjectBriefResponse
```

[↑ Top](#endpoints)
