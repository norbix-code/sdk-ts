# API · Chat

[← Back to API index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.api.chat` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                | Verb   | Path                       | Scope     |
| --------------------- | ------ | -------------------------- | --------- |
| [`askChat`](#askchat) | `POST` | `/{version}/chat/complete` | `project` |

## Reference

### askChat

`POST` `/{version}/chat/complete`

Send a chat / inference request.

**Request DTO**: `CodeMashApi2.AskChatRequest`
**Response**: `CodeMashApi2.AskChatResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.chat.askChat({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.AskChatResponse
```

[↑ Top](#endpoints)
