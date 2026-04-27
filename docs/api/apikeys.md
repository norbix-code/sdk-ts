# API · Apikeys

[← Back to API index](./_index.md) · [↑ Back to project README](../../README.md)

List and regenerate per-environment API keys for service auth.

Accessed as `norbix.api.apikeys` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method | Verb | Path | Scope |
| --- | --- | --- | --- |
| [`getApiKeys`](#getapikeys) | `POST` | `/apikeys` | `project` |
| [`regenerateApiKeys`](#regenerateapikeys) | `POST` | `/apikeys/regenerate` | `project` |

## Reference

### getApiKeys

`POST` `/apikeys`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetApiKeys`
**Response**: `CodeMashApi2.GetApiKeysResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.apikeys.getApiKeys({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetApiKeysResponse
```

[↑ Top](#endpoints)

### regenerateApiKeys

`POST` `/apikeys/regenerate`



**Request DTO**: `CodeMashApi2.RegenerateApiKeys`
**Response**: `CodeMashApi2.RegenerateApiKeysResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.apikeys.regenerateApiKeys({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.RegenerateApiKeysResponse
```

[↑ Top](#endpoints)
