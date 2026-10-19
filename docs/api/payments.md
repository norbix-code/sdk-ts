# API · Payments

[← Back to API index](./_index.md) · [↑ Back to project README](../../README.md)

Payment provider integrations and triggers (Stripe, etc.).

Accessed as `norbix.api.payments` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                          | Verb   | Path                                       | Scope     |
| ----------------------------------------------- | ------ | ------------------------------------------ | --------- |
| [`createPaymentOrder`](#createpaymentorder)     | `POST` | `/{version}/payments/orders`               | `project` |
| [`getPaymentOrder`](#getpaymentorder)           | `GET`  | `/{version}/payments/orders/{Id}`          | `project` |
| [`getPaymentOrders`](#getpaymentorders)         | `GET`  | `/{version}/payments/orders`               | `project` |
| [`startPaymentCheckout`](#startpaymentcheckout) | `POST` | `/{version}/payments/orders/{Id}/checkout` | `project` |

## Reference

### createPaymentOrder

`POST` `/{version}/payments/orders`

Create a new item.

**Request DTO**: `CodeMashApi2.CreatePaymentOrderRequest`
**Response**: `CodeMashApi2.IdResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.payments.createPaymentOrder({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.IdResponse
```

[↑ Top](#endpoints)

### getPaymentOrder

`GET` `/{version}/payments/orders/{Id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetPaymentOrderRequest`
**Response**: `CodeMashApi2.GetPaymentOrderResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.payments.getPaymentOrder({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetPaymentOrderResponse
```

[↑ Top](#endpoints)

### getPaymentOrders

`GET` `/{version}/payments/orders`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetPaymentOrdersRequest`
**Response**: `CodeMashApi2.GetPaymentOrdersResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.payments.getPaymentOrders({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetPaymentOrdersResponse
```

[↑ Top](#endpoints)

### startPaymentCheckout

`POST` `/{version}/payments/orders/{Id}/checkout`

**Request DTO**: `CodeMashApi2.StartPaymentCheckoutRequest`
**Response**: `CodeMashApi2.StartPaymentCheckoutResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.payments.startPaymentCheckout({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.StartPaymentCheckoutResponse
```

[↑ Top](#endpoints)
