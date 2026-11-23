# Hub · Integrations

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.integrations` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                          | Verb   | Path                                                     | Scope     |
| --------------------------------------------------------------- | ------ | -------------------------------------------------------- | --------- |
| [`getQuickConnectProviders`](#getquickconnectproviders)         | `GET`  | `/{version}/integrations/connect/providers`              | `project` |
| [`getIntegrationConnectTargets`](#getintegrationconnecttargets) | `GET`  | `/{version}/integrations/connect/{ConnectId}/targets`    | `project` |
| [`getIntegrationSecrets`](#getintegrationsecrets)               | `GET`  | `/{version}/integrations/{IntegrationId}/secrets`        | `project` |
| [`getKeylessIntegrationSetup`](#getkeylessintegrationsetup)     | `GET`  | `/{version}/integrations/keyless/setup`                  | `project` |
| [`removeIntegrationSecrets`](#removeintegrationsecrets)         | `POST` | `/{version}/integrations/{IntegrationId}/secrets/remove` | `project` |

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

### getIntegrationSecrets

`GET` `/{version}/integrations/{IntegrationId}/secrets`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetIntegrationSecrets`
**Response**: `CodeMashHub2.GetIntegrationSecretsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.integrations.getIntegrationSecrets({
  IntegrationId: 'IntegrationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetIntegrationSecretsResponse
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

### removeIntegrationSecrets

`POST` `/{version}/integrations/{IntegrationId}/secrets/remove`

**Request DTO**: `CodeMashHub2.RemoveIntegrationSecretsRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.integrations.removeIntegrationSecrets({
  IntegrationId: 'IntegrationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

<!-- @hand-written:begin -->

## Keyless setup templates

`getKeylessIntegrationSetup` also returns `templates` (`{ kind, fileName, content }[]`, `kind` = `cloudformation` | `bicep` | `terraform`) — templates: ready CloudFormation / Bicep / Terraform files for this integration.

## Saved secrets

`getIntegrationSecrets` works for an integration of any module. It lists each secret as `{ key, field, isSet, isOptional }` — never the value, not even part of it. `field` is the save request property that fills the key.

```ts
const { result } = await norbix.hub.integrations.getIntegrationSecrets({
  integrationId: 'int_…',
  env: 'TEST',
});
// [{ key: 'webhookSigningSecret', field: 'webhookSigningSecret', isSet: true, isOptional: true }, …]

await norbix.hub.integrations.removeIntegrationSecrets({
  integrationId: 'int_…',
  keys: ['webhookSigningSecret'],
});
```

- Only optional keys can be removed. A needed key is refused with `CM-ERRORS-SECRETS-012` (400) and nothing changes.
- The list is empty for keyless integrations, for Norbix's own integrations, and for MCP, Marketplace and Webhook integrations (they have their own secret routes).
- To keep a saved secret when you save an integration again, leave that secret empty.

<!-- @hand-written:end -->
