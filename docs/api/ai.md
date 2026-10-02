# API · Ai

[← Back to API index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.api.ai` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                        | Verb     | Path                                                                 | Scope     |
| ------------------------------------------------------------- | -------- | -------------------------------------------------------------------- | --------- |
| [`uploadEndUserChatAttachment`](#uploadenduserchatattachment) | `POST`   | `/{version}/ai/chat/sessions/{SessionId}/attachments`                | `project` |
| [`listEndUserChatAttachments`](#listenduserchatattachments)   | `GET`    | `/{version}/ai/chat/sessions/{SessionId}/attachments`                | `project` |
| [`deleteEndUserChatAttachment`](#deleteenduserchatattachment) | `DELETE` | `/{version}/ai/chat/attachments/{AttachmentId}`                      | `project` |
| [`setEndUserChatEntryFeedback`](#setenduserchatentryfeedback) | `PUT`    | `/{version}/ai/chat/sessions/{SessionId}/entries/{EntryId}/feedback` | `project` |
| [`listEndUserChatMemory`](#listenduserchatmemory)             | `GET`    | `/{version}/ai/chat/memory`                                          | `project` |
| [`forgetEndUserChatMemory`](#forgetenduserchatmemory)         | `DELETE` | `/{version}/ai/chat/memory/{NoteId}`                                 | `project` |
| [`getEndUserChatAvailability`](#getenduserchatavailability)   | `GET`    | `/{version}/ai/chat/availability`                                    | `project` |
| [`listEndUserChatSessions`](#listenduserchatsessions)         | `GET`    | `/{version}/ai/chat/sessions`                                        | `project` |
| [`createEndUserChatSession`](#createenduserchatsession)       | `POST`   | `/{version}/ai/chat/sessions`                                        | `project` |
| [`getEndUserChatSession`](#getenduserchatsession)             | `GET`    | `/{version}/ai/chat/sessions/{SessionId}`                            | `project` |
| [`renameEndUserChatSession`](#renameenduserchatsession)       | `PATCH`  | `/{version}/ai/chat/sessions/{SessionId}`                            | `project` |
| [`pinEndUserChatSession`](#pinenduserchatsession)             | `PUT`    | `/{version}/ai/chat/sessions/{SessionId}/pin`                        | `project` |
| [`archiveEndUserChatSession`](#archiveenduserchatsession)     | `PUT`    | `/{version}/ai/chat/sessions/{SessionId}/archive`                    | `project` |
| [`deleteEndUserChatSession`](#deleteenduserchatsession)       | `DELETE` | `/{version}/ai/chat/sessions/{SessionId}`                            | `project` |
| [`getEndUserChatEntries`](#getenduserchatentries)             | `GET`    | `/{version}/ai/chat/sessions/{SessionId}/entries`                    | `project` |
| [`startEndUserChatTurn`](#startenduserchatturn)               | `POST`   | `/{version}/ai/chat/turn`                                            | `project` |
| [`getEndUserAiTools`](#getenduseraitools)                     | `GET`    | `/{version}/ai/tools`                                                | `project` |
| [`invokeEndUserAiTool`](#invokeenduseraitool)                 | `POST`   | `/{version}/ai/tools/{ToolName}`                                     | `project` |

## Reference

### uploadEndUserChatAttachment

`POST` `/{version}/ai/chat/sessions/{SessionId}/attachments`

**Request DTO**: `CodeMashApi2.UploadEndUserChatAttachmentRequest`
**Response**: `CodeMashApi2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.ai.uploadEndUserChatAttachment({
  SessionId: 'SessionId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.IdResponse
```

[↑ Top](#endpoints)

### listEndUserChatAttachments

`GET` `/{version}/ai/chat/sessions/{SessionId}/attachments`

**Request DTO**: `CodeMashApi2.ListEndUserChatAttachmentsRequest`
**Response**: `CodeMashApi2.ListEndUserChatAttachmentsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.ai.listEndUserChatAttachments({
  SessionId: 'SessionId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.ListEndUserChatAttachmentsResponse
```

[↑ Top](#endpoints)

### deleteEndUserChatAttachment

`DELETE` `/{version}/ai/chat/attachments/{AttachmentId}`

Delete an item.

**Request DTO**: `CodeMashApi2.DeleteEndUserChatAttachmentRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.ai.deleteEndUserChatAttachment({
  AttachmentId: 'AttachmentId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### setEndUserChatEntryFeedback

`PUT` `/{version}/ai/chat/sessions/{SessionId}/entries/{EntryId}/feedback`

**Request DTO**: `CodeMashApi2.SetEndUserChatEntryFeedbackRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.ai.setEndUserChatEntryFeedback({
  SessionId: 'SessionId-here',
  EntryId: 'EntryId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### listEndUserChatMemory

`GET` `/{version}/ai/chat/memory`

**Request DTO**: `CodeMashApi2.ListEndUserChatMemoryRequest`
**Response**: `CodeMashApi2.ListEndUserChatMemoryResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.ai.listEndUserChatMemory({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.ListEndUserChatMemoryResponse
```

[↑ Top](#endpoints)

### forgetEndUserChatMemory

`DELETE` `/{version}/ai/chat/memory/{NoteId}`

**Request DTO**: `CodeMashApi2.ForgetEndUserChatMemoryRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.ai.forgetEndUserChatMemory({
  NoteId: 'NoteId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### getEndUserChatAvailability

`GET` `/{version}/ai/chat/availability`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetEndUserChatAvailabilityRequest`
**Response**: `CodeMashApi2.GetEndUserChatAvailabilityResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.ai.getEndUserChatAvailability({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetEndUserChatAvailabilityResponse
```

[↑ Top](#endpoints)

### listEndUserChatSessions

`GET` `/{version}/ai/chat/sessions`

**Request DTO**: `CodeMashApi2.ListEndUserChatSessionsRequest`
**Response**: `CodeMashApi2.ListEndUserChatSessionsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.ai.listEndUserChatSessions({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.ListEndUserChatSessionsResponse
```

[↑ Top](#endpoints)

### createEndUserChatSession

`POST` `/{version}/ai/chat/sessions`

Create a new item.

**Request DTO**: `CodeMashApi2.CreateEndUserChatSessionRequest`
**Response**: `CodeMashApi2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.ai.createEndUserChatSession({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.IdResponse
```

[↑ Top](#endpoints)

### getEndUserChatSession

`GET` `/{version}/ai/chat/sessions/{SessionId}`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetEndUserChatSessionRequest`
**Response**: `CodeMashApi2.GetEndUserChatSessionResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.ai.getEndUserChatSession({
  SessionId: 'SessionId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetEndUserChatSessionResponse
```

[↑ Top](#endpoints)

### renameEndUserChatSession

`PATCH` `/{version}/ai/chat/sessions/{SessionId}`

**Request DTO**: `CodeMashApi2.RenameEndUserChatSessionRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.ai.renameEndUserChatSession({
  SessionId: 'SessionId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### pinEndUserChatSession

`PUT` `/{version}/ai/chat/sessions/{SessionId}/pin`

**Request DTO**: `CodeMashApi2.PinEndUserChatSessionRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.ai.pinEndUserChatSession({
  SessionId: 'SessionId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### archiveEndUserChatSession

`PUT` `/{version}/ai/chat/sessions/{SessionId}/archive`

Archive (soft-hide) the resource.

**Request DTO**: `CodeMashApi2.ArchiveEndUserChatSessionRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.ai.archiveEndUserChatSession({
  SessionId: 'SessionId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteEndUserChatSession

`DELETE` `/{version}/ai/chat/sessions/{SessionId}`

Delete an item.

**Request DTO**: `CodeMashApi2.DeleteEndUserChatSessionRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.ai.deleteEndUserChatSession({
  SessionId: 'SessionId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### getEndUserChatEntries

`GET` `/{version}/ai/chat/sessions/{SessionId}/entries`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetEndUserChatEntriesRequest`
**Response**: `CodeMashApi2.GetEndUserChatEntriesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.ai.getEndUserChatEntries({
  SessionId: 'SessionId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetEndUserChatEntriesResponse
```

[↑ Top](#endpoints)

### startEndUserChatTurn

`POST` `/{version}/ai/chat/turn`

**Request DTO**: `CodeMashApi2.StartEndUserChatTurnRequest`
**Response**: `CodeMashApi2.StartEndUserChatTurnResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.ai.startEndUserChatTurn({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.StartEndUserChatTurnResponse
```

[↑ Top](#endpoints)

### getEndUserAiTools

`GET` `/{version}/ai/tools`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetEndUserAiToolsRequest`
**Response**: `CodeMashApi2.GetEndUserAiToolsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.ai.getEndUserAiTools({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetEndUserAiToolsResponse
```

[↑ Top](#endpoints)

### invokeEndUserAiTool

`POST` `/{version}/ai/tools/{ToolName}`

**Request DTO**: `CodeMashApi2.InvokeEndUserAiToolRequest`
**Response**: `CodeMashApi2.InvokeEndUserAiToolResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.ai.invokeEndUserAiTool({
  ToolName: 'ToolName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.InvokeEndUserAiToolResponse
```

[↑ Top](#endpoints)
