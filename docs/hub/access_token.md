# Hub · AccessToken

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Refresh-token exchange to get a new bearer token.

Accessed as `norbix.hub.accessToken` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                              | Verb   | Path            | Scope     |
| ----------------------------------- | ------ | --------------- | --------- |
| [`getAccessToken`](#getaccesstoken) | `POST` | `/access-token` | `project` |

## Reference

### getAccessToken

`POST` `/access-token`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetAccessToken`
**Response**: `CodeMashHub2.GetAccessTokenResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.accessToken.getAccessToken({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetAccessTokenResponse
```

[↑ Top](#endpoints)
