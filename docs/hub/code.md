# Hub · Code

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.code` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                                              | Verb     | Path                                                                                              | Scope     |
| ----------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------- | --------- |
| [`enableCode`](#enablecode)                                                         | `PUT`    | `/{version}/code/enable`                                                                          | `project` |
| [`disableCode`](#disablecode)                                                       | `PUT`    | `/{version}/code/disable`                                                                         | `project` |
| [`getCodeIntegrations`](#getcodeintegrations)                                       | `GET`    | `/{version}/code/integrations`                                                                    | `project` |
| [`getCodeIntegration`](#getcodeintegration)                                         | `GET`    | `/{version}/code/integrations/{id}`                                                               | `project` |
| [`saveCodeIntegration`](#savecodeintegration)                                       | `POST`   | `/{version}/code/integrations`                                                                    | `project` |
| [`testCodeIntegration`](#testcodeintegration)                                       | `POST`   | `/{version}/code/integrations/test`                                                               | `project` |
| [`confirmCodeIntegrationHumanDelivery`](#confirmcodeintegrationhumandelivery)       | `POST`   | `/{version}/code/integrations/confirm-human-delivery`                                             | `project` |
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
| [`saveCodeWorkflow`](#savecodeworkflow)                                             | `PUT`    | `/{version}/code/workflows`                                                                       | `project` |
| [`publishCodeWorkflow`](#publishcodeworkflow)                                       | `POST`   | `/{version}/code/workflows/{Id}/publish`                                                          | `project` |
| [`getCodeWorkflowDraft`](#getcodeworkflowdraft)                                     | `GET`    | `/{version}/code/workflows/{Id}/draft`                                                            | `project` |
| [`discardCodeWorkflowDraft`](#discardcodeworkflowdraft)                             | `DELETE` | `/{version}/code/workflows/{Id}/draft`                                                            | `project` |
| [`getCodeWorkflowVersions`](#getcodeworkflowversions)                               | `GET`    | `/{version}/code/workflows/{Id}/versions`                                                         | `project` |
| [`getCodeWorkflowVersionDiff`](#getcodeworkflowversiondiff)                         | `GET`    | `/{version}/code/workflows/{Id}/versions/diff`                                                    | `project` |
| [`validateCodeWorkflow`](#validatecodeworkflow)                                     | `POST`   | `/{version}/code/workflows/validate`                                                              | `project` |
| [`getCodeWorkflows`](#getcodeworkflows)                                             | `GET`    | `/{version}/code/workflows`                                                                       | `project` |
| [`getCodeWorkflow`](#getcodeworkflow)                                               | `GET`    | `/{version}/code/workflows/{Id}`                                                                  | `project` |
| [`deleteCodeWorkflow`](#deletecodeworkflow)                                         | `DELETE` | `/{version}/code/workflows/{Id}`                                                                  | `project` |
| [`enableCodeWorkflow`](#enablecodeworkflow)                                         | `PUT`    | `/{version}/code/workflows/{Id}/enable`                                                           | `project` |
| [`disableCodeWorkflow`](#disablecodeworkflow)                                       | `PUT`    | `/{version}/code/workflows/{Id}/disable`                                                          | `project` |
| [`getCodeWorkflowSchema`](#getcodeworkflowschema)                                   | `GET`    | `/{version}/code/workflows/schema`                                                                | `project` |
| [`enableCodeWorkflows`](#enablecodeworkflows)                                       | `PUT`    | `/{version}/code/workflows/enable`                                                                | `project` |
| [`disableCodeWorkflows`](#disablecodeworkflows)                                     | `PUT`    | `/{version}/code/workflows/disable`                                                               | `project` |
| [`invokeCodeWorkflow`](#invokecodeworkflow)                                         | `POST`   | `/{version}/code/workflows/{Id}/invoke`                                                           | `project` |
| [`getMarketplaceIntegrationAccess`](#getmarketplaceintegrationaccess)               | `GET`    | `/{version}/code/marketplace/integrations/{IntegrationViewId}/access`                             | `project` |
| [`setMarketplaceIntegrationRoleAccess`](#setmarketplaceintegrationroleaccess)       | `PUT`    | `/{version}/code/marketplace/integrations/{IntegrationViewId}/access/roles`                       | `project` |
| [`saveMarketplaceIntegrationCustomAccess`](#savemarketplaceintegrationcustomaccess) | `POST`   | `/{version}/code/marketplace/integrations/{IntegrationViewId}/access/roles/custom`                | `project` |
| [`getMarketplaceIntegrationTools`](#getmarketplaceintegrationtools)                 | `GET`    | `/{version}/code/marketplace/integrations/{IntegrationViewId}/tools`                              | `project` |
| [`startMarketplaceIntegrationSignIn`](#startmarketplaceintegrationsignin)           | `POST`   | `/{version}/code/marketplace/integrations/{IntegrationViewId}/oauth/start`                        | `project` |
| [`signOutMarketplaceIntegration`](#signoutmarketplaceintegration)                   | `POST`   | `/{version}/code/marketplace/integrations/{IntegrationViewId}/oauth/sign-out`                     | `project` |
| [`replaceMarketplaceIntegrationSecrets`](#replacemarketplaceintegrationsecrets)     | `PUT`    | `/{version}/code/marketplace/integrations/{IntegrationViewId}/secrets`                            | `project` |
| [`revealMarketplaceIntegrationSecrets`](#revealmarketplaceintegrationsecrets)       | `POST`   | `/{version}/code/marketplace/integrations/{IntegrationViewId}/secrets/reveal`                     | `project` |
| [`setMarketplaceIntegrationTokenMappings`](#setmarketplaceintegrationtokenmappings) | `PUT`    | `/{version}/code/marketplace/integrations/{IntegrationViewId}/token-mappings`                     | `project` |
| [`getMarketplaceFunctionCatalog`](#getmarketplacefunctioncatalog)                   | `GET`    | `/{version}/code/marketplace/integrations/{IntegrationViewId}/catalog`                            | `project` |
| [`getMarketplaceFunctionRuns`](#getmarketplacefunctionruns)                         | `GET`    | `/{version}/code/marketplace/functions/runs`                                                      | `project` |
| [`getCodeFunctions`](#getcodefunctions)                                             | `GET`    | `/{version}/code/functions`                                                                       | `project` |
| [`getCodeFunctionEventSample`](#getcodefunctioneventsample)                         | `GET`    | `/{version}/code/functions/event-sample`                                                          | `project` |
| [`getCodeFunctionQualifiers`](#getcodefunctionqualifiers)                           | `GET`    | `/{version}/code/functions/qualifiers`                                                            | `project` |
| [`getCodeFunctionRuns`](#getcodefunctionruns)                                       | `GET`    | `/{version}/code/functions/runs`                                                                  | `project` |
| [`invokeCodeFunction`](#invokecodefunction)                                         | `POST`   | `/{version}/code/functions/invoke`                                                                | `project` |
| [`getCodeWorkflowWaitingRuns`](#getcodeworkflowwaitingruns)                         | `GET`    | `/{version}/code/workflows/runs`                                                                  | `project` |
| [`resumeCodeWorkflowRun`](#resumecodeworkflowrun)                                   | `POST`   | `/{version}/code/workflows/runs/{RunId}/resume`                                                   | `project` |
| [`openCodeWorkflowResumeLink`](#opencodeworkflowresumelink)                         | `GET`    | `/{version}/code/workflows/resume/{Token}`                                                        | `project` |
| [`useCodeWorkflowResumeLink`](#usecodeworkflowresumelink)                           | `POST`   | `/{version}/code/workflows/resume/{Token}`                                                        | `project` |
| [`getCodeWorkflowRuns`](#getcodeworkflowruns)                                       | `GET`    | `/{version}/code/workflows/{Id}/runs`                                                             | `project` |
| [`getCodeWorkflowRun`](#getcodeworkflowrun)                                         | `GET`    | `/{version}/code/workflows/runs/{RunId}`                                                          | `project` |
| [`getCodeWorkflowRunLogs`](#getcodeworkflowrunlogs)                                 | `GET`    | `/{version}/code/workflows/runs/{RunId}/logs`                                                     | `project` |
| [`resumeCodeWorkflowRunByKey`](#resumecodeworkflowrunbykey)                         | `POST`   | `/{version}/code/workflows/{Id}/resume`                                                           | `project` |
| [`retryCodeWorkflowRunStep`](#retrycodeworkflowrunstep)                             | `POST`   | `/{version}/code/workflows/runs/{RunId}/retry`                                                    | `project` |
| [`cancelCodeWorkflowRun`](#cancelcodeworkflowrun)                                   | `POST`   | `/{version}/code/workflows/runs/{RunId}/cancel`                                                   | `project` |

## Reference

### enableCode

`PUT` `/{version}/code/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableCode`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.enableCode({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### disableCode

`PUT` `/{version}/code/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableCode`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.confirmCodeIntegrationHumanDelivery({
  // See CodeMash type for the full request shape.
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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.testMarketplaceIntegration({
  IntegrationViewId: 'IntegrationViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.TestMarketplaceIntegrationResponse
```

[↑ Top](#endpoints)

### saveCodeWorkflow

`PUT` `/{version}/code/workflows`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveCodeWorkflow`
**Response**: `CodeMashHub2.WorkflowResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.saveCodeWorkflow({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.WorkflowResponse
```

[↑ Top](#endpoints)

### publishCodeWorkflow

`POST` `/{version}/code/workflows/{Id}/publish`

**Request DTO**: `CodeMashHub2.PublishCodeWorkflow`
**Response**: `CodeMashHub2.WorkflowResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.publishCodeWorkflow({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.WorkflowResponse
```

[↑ Top](#endpoints)

### getCodeWorkflowDraft

`GET` `/{version}/code/workflows/{Id}/draft`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetCodeWorkflowDraft`
**Response**: `CodeMashHub2.WorkflowResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getCodeWorkflowDraft({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.WorkflowResponse
```

[↑ Top](#endpoints)

### discardCodeWorkflowDraft

`DELETE` `/{version}/code/workflows/{Id}/draft`

**Request DTO**: `CodeMashHub2.DiscardCodeWorkflowDraft`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.discardCodeWorkflowDraft({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getCodeWorkflowVersions

`GET` `/{version}/code/workflows/{Id}/versions`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetCodeWorkflowVersions`
**Response**: `CodeMashHub2.WorkflowVersionsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getCodeWorkflowVersions({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.WorkflowVersionsResponse
```

[↑ Top](#endpoints)

### getCodeWorkflowVersionDiff

`GET` `/{version}/code/workflows/{Id}/versions/diff`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetCodeWorkflowVersionDiff`
**Response**: `CodeMashHub2.WorkflowVersionDiffResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getCodeWorkflowVersionDiff({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.WorkflowVersionDiffResponse
```

[↑ Top](#endpoints)

### validateCodeWorkflow

`POST` `/{version}/code/workflows/validate`

**Request DTO**: `CodeMashHub2.ValidateCodeWorkflow`
**Response**: `CodeMashHub2.ValidateCodeWorkflowResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.validateCodeWorkflow({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.ValidateCodeWorkflowResponse
```

[↑ Top](#endpoints)

### getCodeWorkflows

`GET` `/{version}/code/workflows`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetCodeWorkflows`
**Response**: `CodeMashHub2.WorkflowsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getCodeWorkflows({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.WorkflowsResponse
```

[↑ Top](#endpoints)

### getCodeWorkflow

`GET` `/{version}/code/workflows/{Id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetCodeWorkflow`
**Response**: `CodeMashHub2.WorkflowResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getCodeWorkflow({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.WorkflowResponse
```

[↑ Top](#endpoints)

### deleteCodeWorkflow

`DELETE` `/{version}/code/workflows/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteCodeWorkflow`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.deleteCodeWorkflow({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableCodeWorkflow

`PUT` `/{version}/code/workflows/{Id}/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableCodeWorkflow`
**Response**: `CodeMashHub2.WorkflowResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.enableCodeWorkflow({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.WorkflowResponse
```

[↑ Top](#endpoints)

### disableCodeWorkflow

`PUT` `/{version}/code/workflows/{Id}/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableCodeWorkflow`
**Response**: `CodeMashHub2.WorkflowResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.disableCodeWorkflow({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.WorkflowResponse
```

[↑ Top](#endpoints)

### getCodeWorkflowSchema

`GET` `/{version}/code/workflows/schema`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetCodeWorkflowSchema`
**Response**: `CodeMashHub2.WorkflowSchemaResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getCodeWorkflowSchema({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.WorkflowSchemaResponse
```

[↑ Top](#endpoints)

### enableCodeWorkflows

`PUT` `/{version}/code/workflows/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableCodeWorkflows`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.enableCodeWorkflows({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### disableCodeWorkflows

`PUT` `/{version}/code/workflows/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableCodeWorkflows`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.disableCodeWorkflows({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### invokeCodeWorkflow

`POST` `/{version}/code/workflows/{Id}/invoke`

**Request DTO**: `CodeMashHub2.InvokeCodeWorkflow`
**Response**: `CodeMashHub2.InvokeCodeWorkflowResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.invokeCodeWorkflow({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.InvokeCodeWorkflowResponse
```

[↑ Top](#endpoints)

### getMarketplaceIntegrationAccess

`GET` `/{version}/code/marketplace/integrations/{IntegrationViewId}/access`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetMarketplaceIntegrationAccess`
**Response**: `CodeMashHub2.GetMarketplaceIntegrationAccessResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getMarketplaceIntegrationAccess({
  IntegrationViewId: 'IntegrationViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetMarketplaceIntegrationAccessResponse
```

[↑ Top](#endpoints)

### setMarketplaceIntegrationRoleAccess

`PUT` `/{version}/code/marketplace/integrations/{IntegrationViewId}/access/roles`

**Request DTO**: `CodeMashHub2.SetMarketplaceIntegrationRoleAccess`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.setMarketplaceIntegrationRoleAccess({
  IntegrationViewId: 'IntegrationViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### saveMarketplaceIntegrationCustomAccess

`POST` `/{version}/code/marketplace/integrations/{IntegrationViewId}/access/roles/custom`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveMarketplaceIntegrationCustomAccess`
**Response**: `CodeMashHub2.SaveMarketplaceIntegrationCustomAccessResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.saveMarketplaceIntegrationCustomAccess({
  IntegrationViewId: 'IntegrationViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.SaveMarketplaceIntegrationCustomAccessResponse
```

[↑ Top](#endpoints)

### getMarketplaceIntegrationTools

`GET` `/{version}/code/marketplace/integrations/{IntegrationViewId}/tools`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetMarketplaceIntegrationTools`
**Response**: `CodeMashHub2.GetMarketplaceIntegrationToolsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getMarketplaceIntegrationTools({
  IntegrationViewId: 'IntegrationViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetMarketplaceIntegrationToolsResponse
```

[↑ Top](#endpoints)

### startMarketplaceIntegrationSignIn

`POST` `/{version}/code/marketplace/integrations/{IntegrationViewId}/oauth/start`

**Request DTO**: `CodeMashHub2.StartMarketplaceIntegrationSignIn`
**Response**: `CodeMashHub2.StartMarketplaceIntegrationSignInResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.startMarketplaceIntegrationSignIn({
  IntegrationViewId: 'IntegrationViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.StartMarketplaceIntegrationSignInResponse
```

[↑ Top](#endpoints)

### signOutMarketplaceIntegration

`POST` `/{version}/code/marketplace/integrations/{IntegrationViewId}/oauth/sign-out`

**Request DTO**: `CodeMashHub2.SignOutMarketplaceIntegration`
**Response**: `CodeMashHub2.SignOutMarketplaceIntegrationResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.signOutMarketplaceIntegration({
  IntegrationViewId: 'IntegrationViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.SignOutMarketplaceIntegrationResponse
```

[↑ Top](#endpoints)

### replaceMarketplaceIntegrationSecrets

`PUT` `/{version}/code/marketplace/integrations/{IntegrationViewId}/secrets`

Replace an existing item wholesale.

**Request DTO**: `CodeMashHub2.ReplaceMarketplaceIntegrationSecretsRequest`
**Response**: `CodeMashHub2.EmptyMarketplaceSecretsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getMarketplaceFunctionCatalog({
  IntegrationViewId: 'IntegrationViewId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetMarketplaceFunctionCatalogResponse
```

[↑ Top](#endpoints)

### getMarketplaceFunctionRuns

`GET` `/{version}/code/marketplace/functions/runs`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetMarketplaceFunctionRuns`
**Response**: `CodeMashHub2.GetMarketplaceFunctionRunsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getMarketplaceFunctionRuns({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetMarketplaceFunctionRunsResponse
```

[↑ Top](#endpoints)

### getCodeFunctions

`GET` `/{version}/code/functions`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetCodeFunctions`
**Response**: `CodeMashHub2.GetCodeFunctionsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getCodeFunctions({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetCodeFunctionsResponse
```

[↑ Top](#endpoints)

### getCodeFunctionEventSample

`GET` `/{version}/code/functions/event-sample`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetCodeFunctionEventSample`
**Response**: `CodeMashHub2.GetCodeFunctionEventSampleResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getCodeFunctionEventSample({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetCodeFunctionEventSampleResponse
```

[↑ Top](#endpoints)

### getCodeFunctionQualifiers

`GET` `/{version}/code/functions/qualifiers`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetCodeFunctionQualifiers`
**Response**: `CodeMashHub2.GetCodeFunctionQualifiersResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getCodeFunctionQualifiers({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetCodeFunctionQualifiersResponse
```

[↑ Top](#endpoints)

### getCodeFunctionRuns

`GET` `/{version}/code/functions/runs`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetCodeFunctionRuns`
**Response**: `CodeMashHub2.GetCodeFunctionRunsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getCodeFunctionRuns({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetCodeFunctionRunsResponse
```

[↑ Top](#endpoints)

### invokeCodeFunction

`POST` `/{version}/code/functions/invoke`

**Request DTO**: `CodeMashHub2.InvokeCodeFunction`
**Response**: `CodeMashHub2.InvokeCodeFunctionResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.invokeCodeFunction({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.InvokeCodeFunctionResponse
```

[↑ Top](#endpoints)

### getCodeWorkflowWaitingRuns

`GET` `/{version}/code/workflows/runs`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetCodeWorkflowWaitingRuns`
**Response**: `CodeMashHub2.WorkflowRunsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getCodeWorkflowWaitingRuns({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.WorkflowRunsResponse
```

[↑ Top](#endpoints)

### resumeCodeWorkflowRun

`POST` `/{version}/code/workflows/runs/{RunId}/resume`

**Request DTO**: `CodeMashHub2.ResumeCodeWorkflowRun`
**Response**: `CodeMashHub2.WorkflowRunResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.resumeCodeWorkflowRun({
  RunId: 'RunId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.WorkflowRunResponse
```

[↑ Top](#endpoints)

### openCodeWorkflowResumeLink

`GET` `/{version}/code/workflows/resume/{Token}`

**Request DTO**: `CodeMashHub2.OpenCodeWorkflowResumeLink`
**Response**: `CodeMashHub2.CodeWorkflowResumeLinkResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.openCodeWorkflowResumeLink({
  Token: 'Token-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.CodeWorkflowResumeLinkResponse
```

[↑ Top](#endpoints)

### useCodeWorkflowResumeLink

`POST` `/{version}/code/workflows/resume/{Token}`

**Request DTO**: `CodeMashHub2.UseCodeWorkflowResumeLink`
**Response**: `CodeMashHub2.WorkflowRunResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.useCodeWorkflowResumeLink({
  Token: 'Token-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.WorkflowRunResponse
```

[↑ Top](#endpoints)

### getCodeWorkflowRuns

`GET` `/{version}/code/workflows/{Id}/runs`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetCodeWorkflowRuns`
**Response**: `CodeMashHub2.WorkflowRunsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getCodeWorkflowRuns({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.WorkflowRunsResponse
```

[↑ Top](#endpoints)

### getCodeWorkflowRun

`GET` `/{version}/code/workflows/runs/{RunId}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetCodeWorkflowRun`
**Response**: `CodeMashHub2.WorkflowRunResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getCodeWorkflowRun({
  RunId: 'RunId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.WorkflowRunResponse
```

[↑ Top](#endpoints)

### getCodeWorkflowRunLogs

`GET` `/{version}/code/workflows/runs/{RunId}/logs`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetCodeWorkflowRunLogs`
**Response**: `CodeMashHub2.WorkflowRunLogsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.getCodeWorkflowRunLogs({
  RunId: 'RunId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.WorkflowRunLogsResponse
```

[↑ Top](#endpoints)

### resumeCodeWorkflowRunByKey

`POST` `/{version}/code/workflows/{Id}/resume`

**Request DTO**: `CodeMashHub2.ResumeCodeWorkflowRunByKey`
**Response**: `CodeMashHub2.WorkflowRunResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.resumeCodeWorkflowRunByKey({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.WorkflowRunResponse
```

[↑ Top](#endpoints)

### retryCodeWorkflowRunStep

`POST` `/{version}/code/workflows/runs/{RunId}/retry`

**Request DTO**: `CodeMashHub2.RetryCodeWorkflowRunStep`
**Response**: `CodeMashHub2.WorkflowRunResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.retryCodeWorkflowRunStep({
  RunId: 'RunId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.WorkflowRunResponse
```

[↑ Top](#endpoints)

### cancelCodeWorkflowRun

`POST` `/{version}/code/workflows/runs/{RunId}/cancel`

**Request DTO**: `CodeMashHub2.CancelCodeWorkflowRun`
**Response**: `CodeMashHub2.WorkflowRunResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.code.cancelCodeWorkflowRun({
  RunId: 'RunId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.WorkflowRunResponse
```

[↑ Top](#endpoints)

<!-- @hand-written:begin -->

## Cloud functions

`hub.code.getCodeFunctions`, `getCodeFunctionQualifiers`, `invokeCodeFunction`, `getCodeFunctionEventSample` and `getCodeFunctionRuns` above are the Hub side: the functions a Code integration may call, their aliases and versions, a call by hand, a sample envelope and the last runs of a trigger or task.

The function side — parsing the envelope your function receives, the typed views on `data`, and a `Norbix` client for the run-as user — is `parseFunctionEvent` from the package root:

```ts
import { parseFunctionEvent } from '@norbix.ai/ts';

export const handler = async (raw: unknown) => {
  const event = parseFunctionEvent(raw);
  const { old, new: next } = event.asDatabaseRecordChange<{ status: string }>();
  const norbix = event.createClient(); // bearer = context.runAs.accessToken, baseUrl = context.hubUrl / apiUrl
  // …
};
```

→ [`docs/code-functions.md`](../code-functions.md)

## Marketplace function runs

Each call of a marketplace function becomes one run row: an invoke (user, API key, AI), a trigger run or a scheduler fire. `getMarketplaceFunctionRuns` lists them — pass exactly one of `functionId` (every source, newest first, up to 50), `triggerId` or `taskId`. A row carries `status` (`ok` / `failed` / `skipped`, empty on rows written before the field existed), `durationMs`, `source`, `event`, `correlationId` and `hasDetails`.

The input, steps and response of a run are written to the project log, under the row's `correlationId`, only while the environment's Norbix Logging is on — then the row says `hasDetails: true`. Read them with `getMarketplaceFunctionRunDetails` (hand-written helper over `hub.logs.getLogsByCorrelationId`, `GET /{version}/logs/audit?targetCorrelationId=…`):

```ts
const { runs = [] } = await norbix.hub.code.getMarketplaceFunctionRuns({
  functionId: 'func_…',
  limit: 10,
});
for (const run of runs) {
  if (!run.hasDetails || !run.correlationId) continue; // logs were off for this run
  const { items = [] } = await norbix.hub.code.getMarketplaceFunctionRunDetails(run.correlationId);
  // items: marketplace:run:started (meta.input) → marketplace:run:step … → completed | failed | skipped
}
```

### Workflows (beta): wait for a run, read a step's output

Workflows are in beta; bugs may occur. `invokeCodeWorkflow` waits at most `waitSeconds` (0–30) and answers `202` with the `runId` when the run is still `running` or `waiting`. `workflows.waitForRun` (hand-written) then reads `GET /{version}/code/workflows/runs/{runId}` every `pollMs` (default 1 000) until the run is `succeeded`, `failed`, `cancelled` or `waiting`, and throws `NorbixTimeoutError` (`raw` = the last run) after `timeoutMs` (default 60 000). The run it returns has `stepOutput<T>(stepId)`: the output of the latest succeeded execution of that step (highest pass, then highest attempt), `undefined` when none.

```ts
const started = await norbix.hub.code.invokeCodeWorkflow({
  id: 'wf_…',
  payload: { orderId: 'o-1' },
  waitSeconds: 0,
});
const run = await norbix.hub.code.workflows.waitForRun(started.runId!, {
  timeoutMs: 120_000,
  pollMs: 2_000,
});
if (run.status === 'succeeded') {
  const total = run.stepOutput<{ sum: number }>('total');
}
```

`stepOutput(run, stepId)` is also exported for a run read with `getCodeWorkflowRun`.

<!-- @hand-written:end -->
