# Hub · Echo

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Echo helpers used by the gateway smoke checks.

Accessed as `norbix.hub.echo` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method          | Verb  | Path              | Scope     |
| --------------- | ----- | ----------------- | --------- |
| [`echo`](#echo) | `GET` | `/{version}/echo` | `project` |

## Reference

### echo

`GET` `/{version}/echo`

Echo the request back (smoke test).

**Request DTO**: `CodeMashHub2.Echo`
**Response**: `CodeMashHub2.EchoResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.echo.echo({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EchoResponse
```

[↑ Top](#endpoints)
