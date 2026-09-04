# API · Echo

[← Back to API index](./_index.md) · [↑ Back to project README](../../README.md)

Echo helpers used by the gateway smoke checks.

Accessed as `norbix.api.echo` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method          | Verb  | Path              | Scope     |
| --------------- | ----- | ----------------- | --------- |
| [`echo`](#echo) | `GET` | `/{version}/echo` | `project` |

## Reference

### echo

`GET` `/{version}/echo`

Echo the request back (smoke test).

**Request DTO**: `CodeMashApi2.Echo`
**Response**: `CodeMashApi2.EchoResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.echo.echo({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EchoResponse
```

[↑ Top](#endpoints)
