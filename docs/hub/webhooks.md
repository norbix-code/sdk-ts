# Hub · Webhooks

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)



Accessed as `norbix.hub.webhooks` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method | Verb | Path | Scope |
| --- | --- | --- | --- |
| [`getWebhookIntegration`](#getwebhookintegration) | `GET` | `/{version}/webhooks/integration` | `project` |
| [`revealWebhookIntegrationSecret`](#revealwebhookintegrationsecret) | `GET` | `/{version}/webhooks/integration/secret` | `project` |
| [`rotateWebhookIntegrationSecret`](#rotatewebhookintegrationsecret) | `POST` | `/{version}/webhooks/integration/secret/rotate` | `project` |
| [`updateWebhookIntegrationExtraHeaders`](#updatewebhookintegrationextraheaders) | `PUT` | `/{version}/webhooks/integration/extra-headers` | `project` |
| [`receiveWebhook`](#receivewebhook) | `POST` | `/{version}/webhooks/{source}/{integrationInstanceId}` | `project` |
| [`disableWebhookDestination`](#disablewebhookdestination) | `PUT` | `/{version}/webhooks/destinations/{DestinationId}/disable` | `project` |
| [`enableWebhookDestination`](#enablewebhookdestination) | `PUT` | `/{version}/webhooks/destinations/{DestinationId}/enable` | `project` |
| [`removeWebhookDestination`](#removewebhookdestination) | `DELETE` | `/{version}/webhooks/destinations/{DestinationId}` | `project` |
| [`saveWebhookDestination`](#savewebhookdestination) | `POST` | `/{version}/webhooks/destinations` | `project` |

## Reference

### getWebhookIntegration

`GET` `/{version}/webhooks/integration`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetWebhookIntegration`
**Response**: `CodeMashHub2.GetWebhookIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.webhooks.getWebhookIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetWebhookIntegrationResponse
```

[↑ Top](#endpoints)

### revealWebhookIntegrationSecret

`GET` `/{version}/webhooks/integration/secret`

Reveal the masked value.

**Request DTO**: `CodeMashHub2.RevealWebhookIntegrationSecretRequest`
**Response**: `CodeMashHub2.RevealWebhookIntegrationSecretResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.webhooks.revealWebhookIntegrationSecret({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.RevealWebhookIntegrationSecretResponse
```

[↑ Top](#endpoints)

### rotateWebhookIntegrationSecret

`POST` `/{version}/webhooks/integration/secret/rotate`

Rotate the secret / token.

**Request DTO**: `CodeMashHub2.RotateWebhookIntegrationSecretRequest`
**Response**: `CodeMashHub2.RotateWebhookIntegrationSecretResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.webhooks.rotateWebhookIntegrationSecret({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.RotateWebhookIntegrationSecretResponse
```

[↑ Top](#endpoints)

### updateWebhookIntegrationExtraHeaders

`PUT` `/{version}/webhooks/integration/extra-headers`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateWebhookIntegrationExtraHeadersRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.webhooks.updateWebhookIntegrationExtraHeaders({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### receiveWebhook

`POST` `/{version}/webhooks/{source}/{integrationInstanceId}`



**Request DTO**: `CodeMashHub2.ReceiveWebhook`
**Response**: `CodeMashHub2.HttpResult`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.webhooks.receiveWebhook({
  source: 'source-here',
  integrationInstanceId: 'integrationInstanceId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.HttpResult
```

[↑ Top](#endpoints)

### disableWebhookDestination

`PUT` `/{version}/webhooks/destinations/{DestinationId}/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableWebhookDestinationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.webhooks.disableWebhookDestination({
  DestinationId: 'DestinationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableWebhookDestination

`PUT` `/{version}/webhooks/destinations/{DestinationId}/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableWebhookDestinationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.webhooks.enableWebhookDestination({
  DestinationId: 'DestinationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### removeWebhookDestination

`DELETE` `/{version}/webhooks/destinations/{DestinationId}`



**Request DTO**: `CodeMashHub2.RemoveWebhookDestinationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.webhooks.removeWebhookDestination({
  DestinationId: 'DestinationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### saveWebhookDestination

`POST` `/{version}/webhooks/destinations`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveWebhookDestinationRequest`
**Response**: `CodeMashHub2.SaveWebhookDestinationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.webhooks.saveWebhookDestination({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.SaveWebhookDestinationResponse
```

[↑ Top](#endpoints)
