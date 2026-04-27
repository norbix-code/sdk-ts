# Hub · Logs

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Logging integrations and module on/off switches.

Accessed as `norbix.hub.logs` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method | Verb | Path | Scope |
| --- | --- | --- | --- |
| [`disableLogging`](#disablelogging) | `GET` | `/{version}/logs/disable` | `project` |
| [`enableLogging`](#enablelogging) | `GET` | `/{version}/logs/enable` | `project` |
| [`deleteLoggingIntegration`](#deleteloggingintegration) | `DELETE` | `/{version}/logs/integrations/{Id}` | `project` |
| [`disableLoggingIntegration`](#disableloggingintegration) | `PUT` | `/{version}/logs/integrations/{Id}/disable` | `project` |
| [`enableLoggingIntegration`](#enableloggingintegration) | `PUT` | `/{version}/logs/integrations/{Id}/enable` | `project` |
| [`getLoggingIntegration`](#getloggingintegration) | `GET` | `/{version}/logs/integrations/{id}` | `project` |
| [`getLoggingIntegrations`](#getloggingintegrations) | `GET` | `/{version}/logs/integrations` | `project` |
| [`saveLoggingIntegration`](#saveloggingintegration) | `POST` | `/{version}/logs/integrations` | `project` |
| [`testLoggingIntegration`](#testloggingintegration) | `POST` | `/{version}/logs/integrations/test` | `project` |

## Reference

### disableLogging

`GET` `/{version}/logs/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableLogging`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.logs.disableLogging({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableLogging

`GET` `/{version}/logs/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableLogging`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.logs.enableLogging({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteLoggingIntegration

`DELETE` `/{version}/logs/integrations/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteLoggingIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.logs.deleteLoggingIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### disableLoggingIntegration

`PUT` `/{version}/logs/integrations/{Id}/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableLoggingIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.logs.disableLoggingIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableLoggingIntegration

`PUT` `/{version}/logs/integrations/{Id}/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableLoggingIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.logs.enableLoggingIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getLoggingIntegration

`GET` `/{version}/logs/integrations/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetLoggingIntegration`
**Response**: `CodeMashHub2.GetLoggingIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.logs.getLoggingIntegration({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetLoggingIntegrationResponse
```

[↑ Top](#endpoints)

### getLoggingIntegrations

`GET` `/{version}/logs/integrations`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetLoggingIntegrations`
**Response**: `CodeMashHub2.GetLoggingIntegrationsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.logs.getLoggingIntegrations({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetLoggingIntegrationsResponse
```

[↑ Top](#endpoints)

### saveLoggingIntegration

`POST` `/{version}/logs/integrations`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveLoggingIntegration`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.logs.saveLoggingIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### testLoggingIntegration

`POST` `/{version}/logs/integrations/test`

Run a connection / delivery test against the integration.

**Request DTO**: `CodeMashHub2.TestLoggingIntegration`
**Response**: `CodeMashHub2.TestLoggingIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.logs.testLoggingIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.TestLoggingIntegrationResponse
```

[↑ Top](#endpoints)
