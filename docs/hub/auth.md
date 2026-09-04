# Hub · Auth

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Sign-in / sign-out and federated provider flows. Most apps prefer `norbix.login(...)` over calling these directly.

Accessed as `norbix.hub.auth` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                          | Verb   | Path    | Scope     |
| ------------------------------- | ------ | ------- | --------- |
| [`authenticate`](#authenticate) | `POST` | `/auth` | `project` |

## Reference

### authenticate

`POST` `/auth`

Authenticate the user. The SDK exposes `norbix.login(...)` as a higher-level helper.

**Request DTO**: `CodeMashHub2.Authenticate`
**Response**: `CodeMashHub2.AuthenticateResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.auth.authenticate({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AuthenticateResponse
```

[↑ Top](#endpoints)
