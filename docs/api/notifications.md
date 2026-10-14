# API · Notifications

[← Back to API index](./_index.md) · [↑ Back to project README](../../README.md)

Email and push templates, integrations, campaigns, devices, signatures, footers, and one-click unsubscribe.

Accessed as `norbix.api.notifications` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                      | Verb     | Path                                               | Scope     |
| ----------------------------------------------------------- | -------- | -------------------------------------------------- | --------- |
| [`registerOwnPushDevice`](#registerownpushdevice)           | `POST`   | `/{version}/notifications/push/devices`            | `project` |
| [`getOwnPushDevices`](#getownpushdevices)                   | `GET`    | `/{version}/notifications/push/devices`            | `project` |
| [`deleteOwnPushDevice`](#deleteownpushdevice)               | `DELETE` | `/{version}/notifications/push/devices/{Id}`       | `project` |
| [`deleteOwnPushDeviceByToken`](#deleteownpushdevicebytoken) | `DELETE` | `/{version}/notifications/push/devices`            | `project` |
| [`getOwnPushMessages`](#getownpushmessages)                 | `GET`    | `/{version}/notifications/push/messages`           | `project` |
| [`markOwnPushMessageRead`](#markownpushmessageread)         | `POST`   | `/{version}/notifications/push/messages/{Id}/read` | `project` |
| [`markAllOwnPushMessagesRead`](#markallownpushmessagesread) | `POST`   | `/{version}/notifications/push/messages/read`      | `project` |

## Reference

### registerOwnPushDevice

`POST` `/{version}/notifications/push/devices`

Register a new entry.

**Request DTO**: `CodeMashApi2.RegisterOwnPushDeviceRequest`
**Response**: `CodeMashApi2.IdResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.registerOwnPushDevice({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.IdResponse
```

[↑ Top](#endpoints)

### getOwnPushDevices

`GET` `/{version}/notifications/push/devices`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetOwnPushDevicesRequest`
**Response**: `CodeMashApi2.GetOwnPushDevicesResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getOwnPushDevices({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetOwnPushDevicesResponse
```

[↑ Top](#endpoints)

### deleteOwnPushDevice

`DELETE` `/{version}/notifications/push/devices/{Id}`

Delete an item.

**Request DTO**: `CodeMashApi2.DeleteOwnPushDeviceRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.deleteOwnPushDevice({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteOwnPushDeviceByToken

`DELETE` `/{version}/notifications/push/devices`

Delete an item.

**Request DTO**: `CodeMashApi2.DeleteOwnPushDeviceByTokenRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.deleteOwnPushDeviceByToken({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### getOwnPushMessages

`GET` `/{version}/notifications/push/messages`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetOwnPushMessagesRequest`
**Response**: `CodeMashApi2.GetOwnPushMessagesResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getOwnPushMessages({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetOwnPushMessagesResponse
```

[↑ Top](#endpoints)

### markOwnPushMessageRead

`POST` `/{version}/notifications/push/messages/{Id}/read`

**Request DTO**: `CodeMashApi2.MarkOwnPushMessageReadRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.markOwnPushMessageRead({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### markAllOwnPushMessagesRead

`POST` `/{version}/notifications/push/messages/read`

**Request DTO**: `CodeMashApi2.MarkAllOwnPushMessagesReadRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.markAllOwnPushMessagesRead({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)
