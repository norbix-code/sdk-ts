# Hub · WellKnown

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.wellKnown` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                                  | Verb  | Path                                      | Scope     |
| ----------------------------------------------------------------------- | ----- | ----------------------------------------- | --------- |
| [`oAuthProtectedResourceMetadata`](#oauthprotectedresourcemetadata)     | `GET` | `/.well-known/oauth-protected-resource`   | `project` |
| [`oAuthAuthorizationServerMetadata`](#oauthauthorizationservermetadata) | `GET` | `/.well-known/oauth-authorization-server` | `project` |

## Reference

### oAuthProtectedResourceMetadata

`GET` `/.well-known/oauth-protected-resource`

**Request DTO**: `CodeMashHub2.OAuthProtectedResourceMetadataRequest`
**Response**: `CodeMashHub2.string`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.wellKnown.oAuthProtectedResourceMetadata({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.string
```

[↑ Top](#endpoints)

### oAuthAuthorizationServerMetadata

`GET` `/.well-known/oauth-authorization-server`

**Request DTO**: `CodeMashHub2.OAuthAuthorizationServerMetadataRequest`
**Response**: `CodeMashHub2.string`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.wellKnown.oAuthAuthorizationServerMetadata({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.string
```

[↑ Top](#endpoints)
