# Hub · Payments

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Payment provider integrations and triggers (Stripe, etc.).

Accessed as `norbix.hub.payments` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method | Verb | Path | Scope |
| --- | --- | --- | --- |
| [`disablePayments`](#disablepayments) | `GET` | `/{version}/payments/disable` | `project` |
| [`enablePayments`](#enablepayments) | `GET` | `/{version}/payments/enable` | `project` |
| [`deletePaymentsTrigger`](#deletepaymentstrigger) | `DELETE` | `/{version}/payments/triggers/{triggerId}` | `project` |
| [`disablePaymentsTrigger`](#disablepaymentstrigger) | `PATCH` | `/{version}/payments/triggers/{triggerId}/disable` | `project` |
| [`enablePaymentsTrigger`](#enablepaymentstrigger) | `PATCH` | `/{version}/payments/triggers/{triggerId}/enable` | `project` |
| [`getPaymentsTrigger`](#getpaymentstrigger) | `GET` | `/{version}/payments/triggers/{id}` | `project` |
| [`getPaymentsTriggers`](#getpaymentstriggers) | `GET` | `/{version}/payments/triggers` | `project` |
| [`savePaymentsTrigger`](#savepaymentstrigger) | `POST` | `/{version}/payments/triggers` | `project` |
| [`confirmPaymentsIntegrationHumanDelivery`](#confirmpaymentsintegrationhumandelivery) | `POST` | `/{version}/payments/integrations/confirm-human-delivery` | `project` |
| [`deletePaymentsIntegration`](#deletepaymentsintegration) | `DELETE` | `/{version}/payments/integrations/{Id}` | `project` |
| [`disablePaymentsIntegration`](#disablepaymentsintegration) | `PUT` | `/{version}/payments/integrations/{Id}/disable` | `project` |
| [`enablePaymentsIntegration`](#enablepaymentsintegration) | `PUT` | `/{version}/payments/integrations/{Id}/enable` | `project` |
| [`getPaymentsIntegration`](#getpaymentsintegration) | `GET` | `/{version}/payments/integrations/{id}` | `project` |
| [`getPaymentsIntegrations`](#getpaymentsintegrations) | `GET` | `/{version}/payments/integrations` | `project` |
| [`savePaymentsIntegration`](#savepaymentsintegration) | `POST` | `/{version}/payments/integrations` | `project` |
| [`testPaymentsIntegration`](#testpaymentsintegration) | `POST` | `/{version}/payments/integrations/test` | `project` |

## Reference

### disablePayments

`GET` `/{version}/payments/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisablePayments`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.payments.disablePayments({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enablePayments

`GET` `/{version}/payments/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnablePayments`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.payments.enablePayments({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deletePaymentsTrigger

`DELETE` `/{version}/payments/triggers/{triggerId}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeletePaymentsTrigger`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.payments.deletePaymentsTrigger({
  triggerId: 'triggerId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### disablePaymentsTrigger

`PATCH` `/{version}/payments/triggers/{triggerId}/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisablePaymentsTrigger`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.payments.disablePaymentsTrigger({
  triggerId: 'triggerId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enablePaymentsTrigger

`PATCH` `/{version}/payments/triggers/{triggerId}/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnablePaymentsTrigger`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.payments.enablePaymentsTrigger({
  triggerId: 'triggerId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getPaymentsTrigger

`GET` `/{version}/payments/triggers/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetPaymentsTrigger`
**Response**: `CodeMashHub2.GetPaymentsTriggerResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.payments.getPaymentsTrigger({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetPaymentsTriggerResponse
```

[↑ Top](#endpoints)

### getPaymentsTriggers

`GET` `/{version}/payments/triggers`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetPaymentsTriggers`
**Response**: `CodeMashHub2.GetPaymentsTriggersResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.payments.getPaymentsTriggers({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetPaymentsTriggersResponse
```

[↑ Top](#endpoints)

### savePaymentsTrigger

`POST` `/{version}/payments/triggers`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SavePaymentsTrigger`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.payments.savePaymentsTrigger({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### confirmPaymentsIntegrationHumanDelivery

`POST` `/{version}/payments/integrations/confirm-human-delivery`



**Request DTO**: `CodeMashHub2.ConfirmPaymentsIntegrationHumanDeliveryRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.payments.confirmPaymentsIntegrationHumanDelivery({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deletePaymentsIntegration

`DELETE` `/{version}/payments/integrations/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeletePaymentsIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.payments.deletePaymentsIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### disablePaymentsIntegration

`PUT` `/{version}/payments/integrations/{Id}/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisablePaymentsIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.payments.disablePaymentsIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enablePaymentsIntegration

`PUT` `/{version}/payments/integrations/{Id}/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnablePaymentsIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.payments.enablePaymentsIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getPaymentsIntegration

`GET` `/{version}/payments/integrations/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetPaymentsIntegration`
**Response**: `CodeMashHub2.GetPaymentsIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.payments.getPaymentsIntegration({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetPaymentsIntegrationResponse
```

[↑ Top](#endpoints)

### getPaymentsIntegrations

`GET` `/{version}/payments/integrations`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetPaymentsIntegrations`
**Response**: `CodeMashHub2.GetPaymentsIntegrationsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.payments.getPaymentsIntegrations({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetPaymentsIntegrationsResponse
```

[↑ Top](#endpoints)

### savePaymentsIntegration

`POST` `/{version}/payments/integrations`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SavePaymentsIntegration`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.payments.savePaymentsIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### testPaymentsIntegration

`POST` `/{version}/payments/integrations/test`

Run a connection / delivery test against the integration.

**Request DTO**: `CodeMashHub2.TestPaymentsIntegration`
**Response**: `CodeMashHub2.TestPaymentsIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.payments.testPaymentsIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.TestPaymentsIntegrationResponse
```

[↑ Top](#endpoints)
