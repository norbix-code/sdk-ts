# Hub · Apikeys

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

List and regenerate per-environment API keys for service auth.

Accessed as `norbix.hub.apikeys` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                    | Verb   | Path                  | Scope     |
| ----------------------------------------- | ------ | --------------------- | --------- |
| [`getApiKeys`](#getapikeys)               | `POST` | `/apikeys`            | `project` |
| [`regenerateApiKeys`](#regenerateapikeys) | `POST` | `/apikeys/regenerate` | `project` |

## Reference

### getApiKeys

`POST` `/apikeys`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetApiKeys`
**Response**: `CodeMashHub2.GetApiKeysResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.apikeys.getApiKeys({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetApiKeysResponse
```

[↑ Top](#endpoints)

### regenerateApiKeys

`POST` `/apikeys/regenerate`

**Request DTO**: `CodeMashHub2.RegenerateApiKeys`
**Response**: `CodeMashHub2.RegenerateApiKeysResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.apikeys.regenerateApiKeys({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.RegenerateApiKeysResponse
```

[↑ Top](#endpoints)
