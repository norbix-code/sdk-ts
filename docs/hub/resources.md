# Hub · Resources

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)



Accessed as `norbix.hub.resources` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method | Verb | Path | Scope |
| --- | --- | --- | --- |
| [`resolveResources`](#resolveresources) | `POST` | `/{version}/resources/resolve` | `project` |

## Reference

### resolveResources

`POST` `/{version}/resources/resolve`



**Request DTO**: `CodeMashHub2.ResolveResources`
**Response**: `CodeMashHub2.ResolveResourcesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.resources.resolveResources({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.ResolveResourcesResponse
```

[↑ Top](#endpoints)
