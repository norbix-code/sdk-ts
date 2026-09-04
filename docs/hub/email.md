# Hub · Email

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.email` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                        | Verb   | Path                                     | Scope     |
| --------------------------------------------- | ------ | ---------------------------------------- | --------- |
| [`oneClickUnsubscribe`](#oneclickunsubscribe) | `POST` | `/{version}/email/one-click-unsubscribe` | `project` |

## Reference

### oneClickUnsubscribe

`POST` `/{version}/email/one-click-unsubscribe`

**Request DTO**: `CodeMashHub2.OneClickUnsubscribeRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.email.oneClickUnsubscribe({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)
