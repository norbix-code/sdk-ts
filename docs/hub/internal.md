# Hub · Internal

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.internal` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                  | Verb  | Path                 | Scope     |
| --------------------------------------- | ----- | -------------------- | --------- |
| [`internalsTypeGen`](#internalstypegen) | `GET` | `/internal/_typegen` | `project` |

## Reference

### internalsTypeGen

`GET` `/internal/_typegen`

**Request DTO**: `CodeMashHub2.InternalsTypeGen`
**Response**: `CodeMashHub2.unknown`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.internal.internalsTypeGen({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.unknown
```

[↑ Top](#endpoints)
