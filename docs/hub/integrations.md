# Hub · Integrations

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.integrations` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                          | Verb  | Path                                                  | Scope     |
| --------------------------------------------------------------- | ----- | ----------------------------------------------------- | --------- |
| [`getQuickConnectProviders`](#getquickconnectproviders)         | `GET` | `/{version}/integrations/connect/providers`           | `project` |
| [`getIntegrationConnectTargets`](#getintegrationconnecttargets) | `GET` | `/{version}/integrations/connect/{ConnectId}/targets` | `project` |
| [`getKeylessIntegrationSetup`](#getkeylessintegrationsetup)     | `GET` | `/{version}/integrations/keyless/setup`               | `project` |

## Reference

### getQuickConnectProviders

`GET` `/{version}/integrations/connect/providers`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetQuickConnectProviders`
**Response**: `CodeMashHub2.GetQuickConnectProvidersResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.integrations.getQuickConnectProviders({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetQuickConnectProvidersResponse
```

[↑ Top](#endpoints)

### getIntegrationConnectTargets

`GET` `/{version}/integrations/connect/{ConnectId}/targets`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetIntegrationConnectTargets`
**Response**: `CodeMashHub2.GetIntegrationConnectTargetsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.integrations.getIntegrationConnectTargets({
  ConnectId: 'ConnectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetIntegrationConnectTargetsResponse
```

[↑ Top](#endpoints)

### getKeylessIntegrationSetup

`GET` `/{version}/integrations/keyless/setup`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetKeylessIntegrationSetup`
**Response**: `CodeMashHub2.GetKeylessIntegrationSetupResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.integrations.getKeylessIntegrationSetup({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetKeylessIntegrationSetupResponse
```

[↑ Top](#endpoints)
