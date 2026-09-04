# Hub · Diagnostics

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.diagnostics` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                  | Verb   | Path                                          | Scope     |
| ------------------------------------------------------- | ------ | --------------------------------------------- | --------- |
| [`getDiagnosticPacks`](#getdiagnosticpacks)             | `GET`  | `/{version}/diagnostics/packs`                | `project` |
| [`runDiagnosticPack`](#rundiagnosticpack)               | `POST` | `/{version}/diagnostics/packs/{PackName}/run` | `project` |
| [`getDiagnosticEcho`](#getdiagnosticecho)               | `GET`  | `/{version}/diagnostics/echo`                 | `project` |
| [`readDiagnosticEvents`](#readdiagnosticevents)         | `GET`  | `/{version}/diagnostics/events`               | `project` |
| [`queryDiagnosticLogs`](#querydiagnosticlogs)           | `GET`  | `/{version}/diagnostics/logs`                 | `project` |
| [`inspectDiagnosticRedis`](#inspectdiagnosticredis)     | `GET`  | `/{version}/diagnostics/redis`                | `project` |
| [`runDiagnosticHealthCheck`](#rundiagnostichealthcheck) | `POST` | `/{version}/diagnostics/health/{CheckId}`     | `project` |

## Reference

### getDiagnosticPacks

`GET` `/{version}/diagnostics/packs`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetDiagnosticPacks`
**Response**: `CodeMashHub2.GetDiagnosticPacksResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.diagnostics.getDiagnosticPacks({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetDiagnosticPacksResponse
```

[↑ Top](#endpoints)

### runDiagnosticPack

`POST` `/{version}/diagnostics/packs/{PackName}/run`

Run / execute the resource.

**Request DTO**: `CodeMashHub2.RunDiagnosticPackRequest`
**Response**: `CodeMashHub2.RunDiagnosticPackResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.diagnostics.runDiagnosticPack({
  PackName: 'PackName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.RunDiagnosticPackResponse
```

[↑ Top](#endpoints)

### getDiagnosticEcho

`GET` `/{version}/diagnostics/echo`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetDiagnosticEcho`
**Response**: `CodeMashHub2.GetDiagnosticEchoResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.diagnostics.getDiagnosticEcho({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetDiagnosticEchoResponse
```

[↑ Top](#endpoints)

### readDiagnosticEvents

`GET` `/{version}/diagnostics/events`

**Request DTO**: `CodeMashHub2.ReadDiagnosticEventsRequest`
**Response**: `CodeMashHub2.ReadDiagnosticEventsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.diagnostics.readDiagnosticEvents({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.ReadDiagnosticEventsResponse
```

[↑ Top](#endpoints)

### queryDiagnosticLogs

`GET` `/{version}/diagnostics/logs`

**Request DTO**: `CodeMashHub2.QueryDiagnosticLogsRequest`
**Response**: `CodeMashHub2.QueryDiagnosticLogsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.diagnostics.queryDiagnosticLogs({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.QueryDiagnosticLogsResponse
```

[↑ Top](#endpoints)

### inspectDiagnosticRedis

`GET` `/{version}/diagnostics/redis`

**Request DTO**: `CodeMashHub2.InspectDiagnosticRedisRequest`
**Response**: `CodeMashHub2.InspectDiagnosticRedisResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.diagnostics.inspectDiagnosticRedis({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.InspectDiagnosticRedisResponse
```

[↑ Top](#endpoints)

### runDiagnosticHealthCheck

`POST` `/{version}/diagnostics/health/{CheckId}`

Run / execute the resource.

**Request DTO**: `CodeMashHub2.RunDiagnosticHealthCheckRequest`
**Response**: `CodeMashHub2.RunDiagnosticHealthCheckResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.diagnostics.runDiagnosticHealthCheck({
  CheckId: 'CheckId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.RunDiagnosticHealthCheckResponse
```

[↑ Top](#endpoints)
