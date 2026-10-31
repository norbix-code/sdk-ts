# API · Auth

[← Back to API index](./_index.md) · [↑ Back to project README](../../README.md)

Sign-in / sign-out and federated provider flows. Most apps prefer `norbix.login(...)` over calling these directly.

Accessed as `norbix.api.auth` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                          | Verb   | Path       | Scope     |
| ------------------------------- | ------ | ---------- | --------- |
| [`authenticate`](#authenticate) | `POST` | `/v3/auth` | `project` |

## Reference

### authenticate

`POST` `/v3/auth`

Authenticate the user. The SDK exposes `norbix.login(...)` as a higher-level helper.

**Request DTO**: `CodeMashApi2.Authenticate`
**Response**: `CodeMashApi2.AuthenticateResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.auth.authenticate({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.AuthenticateResponse
```

[↑ Top](#endpoints)

<!-- @hand-written:begin -->

### signIn

`POST` `/v3/auth`

Sign in for a [cookie session](../../README.md#cookie-sessions). Answers `{ sessionId, userId, credentialVersion }`. The JWT of the answer is dropped, and no cookie is sent from a Node client.

```ts
const anon = new Norbix({ projectId, auth: { type: 'none' } });
const { sessionId } = await anon.api.auth.signIn({ userName, password });
const user = new Norbix({ projectId, auth: { type: 'session', sessionId } });
```

### signOut

`POST` `/v3/auth/logout`

Ends this client's session on the server. A session that has already ended counts as success. Needs a `session` or `browserSession` client. A JWT from the same sign-in is not revoked. `norbix.logout()` is different: it only clears a local token.

```ts
await user.api.auth.signOut();
```

<!-- @hand-written:end -->
