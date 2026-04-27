# Hub · Ai

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)



Accessed as `norbix.hub.ai` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method | Verb | Path | Scope |
| --- | --- | --- | --- |
| [`deleteLlmIntegration`](#deletellmintegration) | `DELETE` | `/{version}/ai/integrations/llms/{Id}` | `project` |
| [`disableLlmIntegration`](#disablellmintegration) | `PUT` | `/{version}/ai/integrations/llms/{Id}/disable` | `project` |
| [`enableLlmIntegration`](#enablellmintegration) | `PUT` | `/{version}/ai/integrations/llms/{Id}/enable` | `project` |
| [`getLlmIntegration`](#getllmintegration) | `GET` | `/{version}/ai/integrations/llms/{id}` | `project` |
| [`getLlmIntegrations`](#getllmintegrations) | `GET` | `/{version}/ai/integrations/llms/integrations` | `project` |
| [`saveLlmIntegration`](#savellmintegration) | `POST` | `/{version}/ai/integrations/llms/` | `project` |
| [`testLlmIntegration`](#testllmintegration) | `POST` | `/{version}/ai/integrations/llms/test` | `project` |
| [`deleteMcpIntegration`](#deletemcpintegration) | `DELETE` | `/{version}/ai/integrations/mcp/{Id}` | `project` |
| [`disableMcpIntegration`](#disablemcpintegration) | `PUT` | `/{version}/ai/integrations/mcp/{Id}/disable` | `project` |
| [`enableMcpIntegration`](#enablemcpintegration) | `PUT` | `/{version}/ai/integrations/mcp/{Id}/enable` | `project` |
| [`getMcpIntegration`](#getmcpintegration) | `GET` | `/{version}/ai/integrations/mcp/{id}` | `project` |
| [`getMcpIntegrations`](#getmcpintegrations) | `GET` | `/{version}/ai/integrations/mcp/integrations` | `project` |
| [`saveMcpIntegration`](#savemcpintegration) | `POST` | `/{version}/ai/integrations/mcp/` | `project` |
| [`testMcpIntegration`](#testmcpintegration) | `POST` | `/{version}/ai/integrations/mcp/test` | `project` |

## Reference

### deleteLlmIntegration

`DELETE` `/{version}/ai/integrations/llms/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteLlmIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.ai.deleteLlmIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### disableLlmIntegration

`PUT` `/{version}/ai/integrations/llms/{Id}/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableLlmIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.ai.disableLlmIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableLlmIntegration

`PUT` `/{version}/ai/integrations/llms/{Id}/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableLlmIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.ai.enableLlmIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getLlmIntegration

`GET` `/{version}/ai/integrations/llms/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetLlmIntegration`
**Response**: `CodeMashHub2.GetLlmIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.ai.getLlmIntegration({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetLlmIntegrationResponse
```

[↑ Top](#endpoints)

### getLlmIntegrations

`GET` `/{version}/ai/integrations/llms/integrations`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetLlmIntegrations`
**Response**: `CodeMashHub2.GetLlmIntegrationsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.ai.getLlmIntegrations({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetLlmIntegrationsResponse
```

[↑ Top](#endpoints)

### saveLlmIntegration

`POST` `/{version}/ai/integrations/llms/`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveLlmIntegration`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.ai.saveLlmIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### testLlmIntegration

`POST` `/{version}/ai/integrations/llms/test`

Run a connection / delivery test against the integration.

**Request DTO**: `CodeMashHub2.TestLlmIntegration`
**Response**: `CodeMashHub2.TestLlmIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.ai.testLlmIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.TestLlmIntegrationResponse
```

[↑ Top](#endpoints)

### deleteMcpIntegration

`DELETE` `/{version}/ai/integrations/mcp/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteMcpIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.ai.deleteMcpIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### disableMcpIntegration

`PUT` `/{version}/ai/integrations/mcp/{Id}/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableMcpIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.ai.disableMcpIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableMcpIntegration

`PUT` `/{version}/ai/integrations/mcp/{Id}/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableMcpIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.ai.enableMcpIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getMcpIntegration

`GET` `/{version}/ai/integrations/mcp/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetMcpIntegration`
**Response**: `CodeMashHub2.GetMcpIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.ai.getMcpIntegration({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetMcpIntegrationResponse
```

[↑ Top](#endpoints)

### getMcpIntegrations

`GET` `/{version}/ai/integrations/mcp/integrations`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetMcpIntegrations`
**Response**: `CodeMashHub2.GetMcpIntegrationsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.ai.getMcpIntegrations({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetMcpIntegrationsResponse
```

[↑ Top](#endpoints)

### saveMcpIntegration

`POST` `/{version}/ai/integrations/mcp/`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveMcpIntegration`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.ai.saveMcpIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### testMcpIntegration

`POST` `/{version}/ai/integrations/mcp/test`

Run a connection / delivery test against the integration.

**Request DTO**: `CodeMashHub2.TestMcpIntegration`
**Response**: `CodeMashHub2.TestLlmIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.ai.testMcpIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.TestLlmIntegrationResponse
```

[↑ Top](#endpoints)
