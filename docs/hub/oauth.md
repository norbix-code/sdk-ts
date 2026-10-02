# Hub · Oauth

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.oauth` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                              | Verb   | Path                         | Scope     |
| --------------------------------------------------- | ------ | ---------------------------- | --------- |
| [`oAuthRegister`](#oauthregister)                   | `POST` | `/{version}/oauth/register`  | `project` |
| [`oAuthAuthorize`](#oauthauthorize)                 | `GET`  | `/{version}/oauth/authorize` | `project` |
| [`oAuthAuthorizeDecision`](#oauthauthorizedecision) | `POST` | `/{version}/oauth/authorize` | `project` |
| [`oAuthToken`](#oauthtoken)                         | `POST` | `/{version}/oauth/token`     | `project` |
| [`oAuthRevoke`](#oauthrevoke)                       | `POST` | `/{version}/oauth/revoke`    | `project` |

## Reference

### oAuthRegister

`POST` `/{version}/oauth/register`

**Request DTO**: `CodeMashHub2.OAuthRegisterRequest`
**Response**: `CodeMashHub2.string`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.oauth.oAuthRegister({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.string
```

[↑ Top](#endpoints)

### oAuthAuthorize

`GET` `/{version}/oauth/authorize`

**Request DTO**: `CodeMashHub2.OAuthAuthorizeRequest`
**Response**: `CodeMashHub2.string`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.oauth.oAuthAuthorize({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.string
```

[↑ Top](#endpoints)

### oAuthAuthorizeDecision

`POST` `/{version}/oauth/authorize`

**Request DTO**: `CodeMashHub2.OAuthAuthorizeDecisionRequest`
**Response**: `CodeMashHub2.string`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.oauth.oAuthAuthorizeDecision({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.string
```

[↑ Top](#endpoints)

### oAuthToken

`POST` `/{version}/oauth/token`

**Request DTO**: `CodeMashHub2.OAuthTokenRequest`
**Response**: `CodeMashHub2.string`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.oauth.oAuthToken({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.string
```

[↑ Top](#endpoints)

### oAuthRevoke

`POST` `/{version}/oauth/revoke`

**Request DTO**: `CodeMashHub2.OAuthRevokeRequest`
**Response**: `CodeMashHub2.string`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.oauth.oAuthRevoke({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.string
```

[↑ Top](#endpoints)
