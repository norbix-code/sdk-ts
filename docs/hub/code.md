# Hub · Code

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.code` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                                              | Verb     | Path                                                                                              | Scope     |
| ----------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------- | --------- |
| [`enableCode`](#enablecode)                                                         | `GET`    | `/{version}/code/enable`                                                                          | `project` |
| [`disableCode`](#disablecode)                                                       | `GET`    | `/{version}/code/disable`                                                                         | `project` |
| [`getCodeIntegrations`](#getcodeintegrations)                                       | `GET`    | `/{version}/code/integrations`                                                                    | `project` |
| [`getCodeIntegration`](#getcodeintegration)                                         | `GET`    | `/{version}/code/integrations/{id}`                                                               | `project` |
| [`saveCodeIntegration`](#savecodeintegration)                                       | `POST`   | `/{version}/code/integrations`                                                                    | `project` |
| [`testCodeIntegration`](#testcodeintegration)                                       | `POST`   | `/{version}/code/integrations/test`                                                               | `project` |
| [`confirmCodeIntegrationHumanDelivery`](#confirmcodeintegrationhumandelivery)       | `POST`   | `/{version}/code/integrations/confirm-human-delivery`                                             | `project` |
| [`setCodeIntegrationAsDefault`](#setcodeintegrationasdefault)                       | `PUT`    | `/{version}/code/integrations/{Id}/default`                                                       | `project` |
| [`deleteCodeIntegration`](#deletecodeintegration)                                   | `DELETE` | `/{version}/code/integrations/{Id}`                                                               | `project` |
| [`enableCodeIntegration`](#enablecodeintegration)                                   | `PUT`    | `/{version}/code/integrations/{Id}/enable`                                                        | `project` |
| [`disableCodeIntegration`](#disablecodeintegration)                                 | `PUT`    | `/{version}/code/integrations/{Id}/disable`                                                       | `project` |
| [`getMarketplaceListings`](#getmarketplacelistings)                                 | `GET`    | `/{version}/code/marketplace/listings`                                                            | `project` |
| [`getMarketplaceListingFunctionTokens`](#getmarketplacelistingfunctiontokens)       | `GET`    | `/{version}/code/marketplace/listings/{ListingViewId}/functions/{FunctionKey}/tokens`             | `project` |
| [`getMarketplaceIntegrations`](#getmarketplaceintegrations)                         | `GET`    | `/{version}/code/marketplace/integrations`                                                        | `project` |
| [`getMarketplaceIntegration`](#getmarketplaceintegration)                           | `GET`    | `/{version}/code/marketplace/integrations/{IntegrationViewId}`                                    | `project` |
| [`saveMarketplaceIntegration`](#savemarketplaceintegration)                         | `POST`   | `/{version}/code/marketplace/integrations`                                                        | `project` |
| [`deleteMarketplaceIntegration`](#deletemarketplaceintegration)                     | `DELETE` | `/{version}/code/marketplace/integrations/{IntegrationViewId}`                                    | `project` |
| [`enableMarketplaceIntegration`](#enablemarketplaceintegration)                     | `POST`   | `/{version}/code/marketplace/integrations/{IntegrationViewId}/enable`                             | `project` |
| [`disableMarketplaceIntegration`](#disablemarketplaceintegration)                   | `POST`   | `/{version}/code/marketplace/integrations/{IntegrationViewId}/disable`                            | `project` |
| [`getMarketplaceFunctions`](#getmarketplacefunctions)                               | `GET`    | `/{version}/code/marketplace/integrations/{IntegrationViewId}/functions`                          | `project` |
| [`getMarketplaceFunction`](#getmarketplacefunction)                                 | `GET`    | `/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}`         | `project` |
| [`saveMarketplaceFunction`](#savemarketplacefunction)                               | `POST`   | `/{version}/code/marketplace/integrations/{IntegrationViewId}/functions`                          | `project` |
| [`deleteMarketplaceFunction`](#deletemarketplacefunction)                           | `DELETE` | `/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}`         | `project` |
| [`enableMarketplaceFunction`](#enablemarketplacefunction)                           | `POST`   | `/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/enable`  | `project` |
| [`disableMarketplaceFunction`](#disablemarketplacefunction)                         | `POST`   | `/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/disable` | `project` |
| [`getMarketplaceFunctionTokens`](#getmarketplacefunctiontokens)                     | `GET`    | `/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/tokens`  | `project` |
| [`invokeMarketplaceFunction`](#invokemarketplacefunction)                           | `POST`   | `/{version}/code/marketplace/functions/{FunctionViewId}/invoke`                                   | `project` |
| [`getMarketplaceListing`](#getmarketplacelisting)                                   | `GET`    | `/{version}/code/marketplace/listings/{ListingViewId}`                                            | `project` |
| [`testMarketplaceIntegration`](#testmarketplaceintegration)                         | `POST`   | `/{version}/code/marketplace/integrations/{IntegrationViewId}/test`                               | `project` |
| [`replaceMarketplaceIntegrationSecrets`](#replacemarketplaceintegrationsecrets)     | `PUT`    | `/{version}/code/marketplace/integrations/{IntegrationViewId}/secrets`                            | `project` |
| [`revealMarketplaceIntegrationSecrets`](#revealmarketplaceintegrationsecrets)       | `POST`   | `/{version}/code/marketplace/integrations/{IntegrationViewId}/secrets/reveal`                     | `project` |
| [`setMarketplaceIntegrationTokenMappings`](#setmarketplaceintegrationtokenmappings) | `PUT`    | `/{version}/code/marketplace/integrations/{IntegrationViewId}/token-mappings`                     | `project` |
| [`getMarketplaceFunctionCatalog`](#getmarketplacefunctioncatalog)                   | `GET`    | `/{version}/code/marketplace/integrations/{IntegrationViewId}/catalog`                            | `project` |

## Reference

### enableCode

`GET` `/{version}/code/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableCode`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.enableCode({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### disableCode

`GET` `/{version}/code/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableCode`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.disableCode({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getCodeIntegrations

`GET` `/{version}/code/integrations`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetCodeIntegrations`
**Response**: `CodeMashHub2.GetCodeIntegrationsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getCodeIntegrations({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetCodeIntegrationsResponse
```

[↑ Top](#endpoints)

### getCodeIntegration

`GET` `/{version}/code/integrations/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetCodeIntegration`
**Response**: `CodeMashHub2.GetCodeIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getCodeIntegration({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetCodeIntegrationResponse
```

[↑ Top](#endpoints)

### saveCodeIntegration

`POST` `/{version}/code/integrations`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveCodeIntegration`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.saveCodeIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### testCodeIntegration

`POST` `/{version}/code/integrations/test`

Run a connection / delivery test against the integration.

**Request DTO**: `CodeMashHub2.TestCodeIntegration`
**Response**: `CodeMashHub2.TestCodeIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.testCodeIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.TestCodeIntegrationResponse
```

[↑ Top](#endpoints)

### confirmCodeIntegrationHumanDelivery

`POST` `/{version}/code/integrations/confirm-human-delivery`

**Request DTO**: `CodeMashHub2.ConfirmCodeIntegrationHumanDeliveryRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.confirmCodeIntegrationHumanDelivery({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### setCodeIntegrationAsDefault

`PUT` `/{version}/code/integrations/{Id}/default`

**Request DTO**: `CodeMashHub2.SetCodeIntegrationAsDefault`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.setCodeIntegrationAsDefault({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteCodeIntegration

`DELETE` `/{version}/code/integrations/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteCodeIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.deleteCodeIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableCodeIntegration

`PUT` `/{version}/code/integrations/{Id}/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableCodeIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.enableCodeIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### disableCodeIntegration

`PUT` `/{version}/code/integrations/{Id}/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableCodeIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.disableCodeIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getMarketplaceListings

`GET` `/{version}/code/marketplace/listings`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetMarketplaceListings`
**Response**: `CodeMashHub2.GetMarketplaceListingsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getMarketplaceListings({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetMarketplaceListingsResponse
```

[↑ Top](#endpoints)

### getMarketplaceListingFunctionTokens

`GET` `/{version}/code/marketplace/listings/{ListingViewId}/functions/{FunctionKey}/tokens`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetMarketplaceListingFunctionTokens`
**Response**: `CodeMashHub2.GetMarketplaceTokensResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getMarketplaceListingFunctionTokens({
  ListingViewId: 'ListingViewId-here',
  FunctionKey: 'FunctionKey-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetMarketplaceTokensResponse
```

[↑ Top](#endpoints)

### getMarketplaceIntegrations

`GET` `/{version}/code/marketplace/integrations`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetMarketplaceIntegrations`
**Response**: `CodeMashHub2.GetMarketplaceIntegrationsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getMarketplaceIntegrations({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetMarketplaceIntegrationsResponse
```

[↑ Top](#endpoints)

### getMarketplaceIntegration

`GET` `/{version}/code/marketplace/integrations/{IntegrationViewId}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetMarketplaceIntegration`
**Response**: `CodeMashHub2.GetMarketplaceIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getMarketplaceIntegration({
  IntegrationViewId: 'IntegrationViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetMarketplaceIntegrationResponse
```

[↑ Top](#endpoints)

### saveMarketplaceIntegration

`POST` `/{version}/code/marketplace/integrations`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveMarketplaceIntegration`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.saveMarketplaceIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### deleteMarketplaceIntegration

`DELETE` `/{version}/code/marketplace/integrations/{IntegrationViewId}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteMarketplaceIntegration`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.deleteMarketplaceIntegration({
  IntegrationViewId: 'IntegrationViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### enableMarketplaceIntegration

`POST` `/{version}/code/marketplace/integrations/{IntegrationViewId}/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableMarketplaceIntegration`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.enableMarketplaceIntegration({
  IntegrationViewId: 'IntegrationViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### disableMarketplaceIntegration

`POST` `/{version}/code/marketplace/integrations/{IntegrationViewId}/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableMarketplaceIntegration`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.disableMarketplaceIntegration({
  IntegrationViewId: 'IntegrationViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### getMarketplaceFunctions

`GET` `/{version}/code/marketplace/integrations/{IntegrationViewId}/functions`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetMarketplaceFunctions`
**Response**: `CodeMashHub2.GetMarketplaceFunctionsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getMarketplaceFunctions({
  IntegrationViewId: 'IntegrationViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetMarketplaceFunctionsResponse
```

[↑ Top](#endpoints)

### getMarketplaceFunction

`GET` `/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetMarketplaceFunction`
**Response**: `CodeMashHub2.GetMarketplaceFunctionResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getMarketplaceFunction({
  IntegrationViewId: 'IntegrationViewId-here',
  FunctionViewId: 'FunctionViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetMarketplaceFunctionResponse
```

[↑ Top](#endpoints)

### saveMarketplaceFunction

`POST` `/{version}/code/marketplace/integrations/{IntegrationViewId}/functions`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveMarketplaceFunction`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.saveMarketplaceFunction({
  IntegrationViewId: 'IntegrationViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### deleteMarketplaceFunction

`DELETE` `/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteMarketplaceFunction`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.deleteMarketplaceFunction({
  IntegrationViewId: 'IntegrationViewId-here',
  FunctionViewId: 'FunctionViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### enableMarketplaceFunction

`POST` `/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableMarketplaceFunction`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.enableMarketplaceFunction({
  IntegrationViewId: 'IntegrationViewId-here',
  FunctionViewId: 'FunctionViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### disableMarketplaceFunction

`POST` `/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableMarketplaceFunction`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.disableMarketplaceFunction({
  IntegrationViewId: 'IntegrationViewId-here',
  FunctionViewId: 'FunctionViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### getMarketplaceFunctionTokens

`GET` `/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/tokens`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetMarketplaceFunctionTokens`
**Response**: `CodeMashHub2.GetMarketplaceTokensResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getMarketplaceFunctionTokens({
  IntegrationViewId: 'IntegrationViewId-here',
  FunctionViewId: 'FunctionViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetMarketplaceTokensResponse
```

[↑ Top](#endpoints)

### invokeMarketplaceFunction

`POST` `/{version}/code/marketplace/functions/{FunctionViewId}/invoke`

**Request DTO**: `CodeMashHub2.InvokeMarketplaceFunction`
**Response**: `CodeMashHub2.InvokeMarketplaceFunctionResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.invokeMarketplaceFunction({
  FunctionViewId: 'FunctionViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.InvokeMarketplaceFunctionResponse
```

[↑ Top](#endpoints)

### getMarketplaceListing

`GET` `/{version}/code/marketplace/listings/{ListingViewId}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetMarketplaceListing`
**Response**: `CodeMashHub2.GetMarketplaceListingResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getMarketplaceListing({
  ListingViewId: 'ListingViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetMarketplaceListingResponse
```

[↑ Top](#endpoints)

### testMarketplaceIntegration

`POST` `/{version}/code/marketplace/integrations/{IntegrationViewId}/test`

Run a connection / delivery test against the integration.

**Request DTO**: `CodeMashHub2.TestMarketplaceIntegration`
**Response**: `CodeMashHub2.TestMarketplaceIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.testMarketplaceIntegration({
  IntegrationViewId: 'IntegrationViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.TestMarketplaceIntegrationResponse
```

[↑ Top](#endpoints)

### replaceMarketplaceIntegrationSecrets

`PUT` `/{version}/code/marketplace/integrations/{IntegrationViewId}/secrets`

Replace an existing item wholesale.

**Request DTO**: `CodeMashHub2.ReplaceMarketplaceIntegrationSecretsRequest`
**Response**: `CodeMashHub2.EmptyMarketplaceSecretsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.replaceMarketplaceIntegrationSecrets({
  IntegrationViewId: 'IntegrationViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyMarketplaceSecretsResponse
```

[↑ Top](#endpoints)

### revealMarketplaceIntegrationSecrets

`POST` `/{version}/code/marketplace/integrations/{IntegrationViewId}/secrets/reveal`

Reveal the masked value.

**Request DTO**: `CodeMashHub2.RevealMarketplaceIntegrationSecretsRequest`
**Response**: `CodeMashHub2.RevealMarketplaceIntegrationSecretsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.revealMarketplaceIntegrationSecrets({
  IntegrationViewId: 'IntegrationViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.RevealMarketplaceIntegrationSecretsResponse
```

[↑ Top](#endpoints)

### setMarketplaceIntegrationTokenMappings

`PUT` `/{version}/code/marketplace/integrations/{IntegrationViewId}/token-mappings`

**Request DTO**: `CodeMashHub2.SetMarketplaceIntegrationTokenMappingsRequest`
**Response**: `CodeMashHub2.SetMarketplaceIntegrationTokenMappingsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.setMarketplaceIntegrationTokenMappings({
  IntegrationViewId: 'IntegrationViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.SetMarketplaceIntegrationTokenMappingsResponse
```

[↑ Top](#endpoints)

### getMarketplaceFunctionCatalog

`GET` `/{version}/code/marketplace/integrations/{IntegrationViewId}/catalog`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetMarketplaceFunctionCatalog`
**Response**: `CodeMashHub2.GetMarketplaceFunctionCatalogResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getMarketplaceFunctionCatalog({
  IntegrationViewId: 'IntegrationViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetMarketplaceFunctionCatalogResponse
```

[↑ Top](#endpoints)
