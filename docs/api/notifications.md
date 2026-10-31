# API · Notifications

[← Back to API index](./_index.md) · [↑ Back to project README](../../README.md)

Email and push templates, integrations, campaigns, devices, signatures, footers, and one-click unsubscribe.

Accessed as `norbix.api.notifications` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                                      | Verb     | Path                                                                               | Scope     |
| --------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------- | --------- |
| [`registerOwnPushDevice`](#registerownpushdevice)                           | `POST`   | `/{version}/notifications/push/devices`                                            | `project` |
| [`getOwnPushDevices`](#getownpushdevices)                                   | `GET`    | `/{version}/notifications/push/devices`                                            | `project` |
| [`deleteOwnPushDevice`](#deleteownpushdevice)                               | `DELETE` | `/{version}/notifications/push/devices/{Id}`                                       | `project` |
| [`deleteOwnPushDeviceByToken`](#deleteownpushdevicebytoken)                 | `DELETE` | `/{version}/notifications/push/devices`                                            | `project` |
| [`getOwnPushMessages`](#getownpushmessages)                                 | `GET`    | `/{version}/notifications/push/messages`                                           | `project` |
| [`markOwnPushMessageRead`](#markownpushmessageread)                         | `POST`   | `/{version}/notifications/push/messages/{Id}/read`                                 | `project` |
| [`markAllOwnPushMessagesRead`](#markallownpushmessagesread)                 | `POST`   | `/{version}/notifications/push/messages/read`                                      | `project` |
| [`getNotificationInbox`](#getnotificationinbox)                             | `GET`    | `/{version}/notifications/inbox`                                                   | `project` |
| [`getUnreadCount`](#getunreadcount)                                         | `GET`    | `/{version}/notifications/inbox/unread-count`                                      | `project` |
| [`markNotificationRead`](#marknotificationread)                             | `POST`   | `/{version}/notifications/inbox/{notificationId}/read`                             | `project` |
| [`markAllNotificationsRead`](#markallnotificationsread)                     | `POST`   | `/{version}/notifications/inbox/read-all`                                          | `project` |
| [`createEmailCampaign`](#createemailcampaign)                               | `POST`   | `/{version}/notifications/email/campaigns`                                         | `project` |
| [`deleteEmailCampaign`](#deleteemailcampaign)                               | `DELETE` | `/{version}/notifications/email/campaigns/{Id}`                                    | `project` |
| [`getEmailCampaign`](#getemailcampaign)                                     | `GET`    | `/{version}/notifications/email/campaigns/{id}`                                    | `project` |
| [`getEmailCampaigns`](#getemailcampaigns)                                   | `GET`    | `/{version}/notifications/email/campaigns`                                         | `project` |
| [`getEmailCampaignBatches`](#getemailcampaignbatches)                       | `GET`    | `/{version}/notifications/email/campaigns/{id}/batches`                            | `project` |
| [`getEmailCampaignBatchNotification`](#getemailcampaignbatchnotification)   | `GET`    | `/{version}/notifications/email/campaigns/{id}/batches/{batchId}/{notificationId}` | `project` |
| [`getEmailCampaignBatchNotifications`](#getemailcampaignbatchnotifications) | `GET`    | `/{version}/notifications/email/campaigns/{id}/batches/{batchId}`                  | `project` |
| [`getEmailCampaignStatistics`](#getemailcampaignstatistics)                 | `GET`    | `/{version}/notifications/email/campaigns/{id}/stats`                              | `project` |
| [`previewEmailNotification`](#previewemailnotification)                     | `GET`    | `/{version}/notifications/email/preview`                                           | `project` |
| [`retryFailedEmailNotifications`](#retryfailedemailnotifications)           | `POST`   | `/{version}/notifications/email/campaigns/{Id}/retry-failed`                       | `project` |
| [`stopEmailCampaign`](#stopemailcampaign)                                   | `POST`   | `/{version}/notifications/email/campaigns/{Id}/stop`                               | `project` |
| [`getEmailCampaignMessages`](#getemailcampaignmessages)                     | `GET`    | `/{version}/notifications/emails/campaigns/{campaignId}/messages`                  | `project` |
| [`createSmsCampaign`](#createsmscampaign)                                   | `POST`   | `/{version}/notifications/sms/campaigns`                                           | `project` |
| [`deleteSmsCampaign`](#deletesmscampaign)                                   | `DELETE` | `/{version}/notifications/sms/campaigns/{id}`                                      | `project` |
| [`getSmsCampaign`](#getsmscampaign)                                         | `GET`    | `/{version}/notifications/sms/campaigns/{id}`                                      | `project` |
| [`getSmsCampaigns`](#getsmscampaigns)                                       | `GET`    | `/{version}/notifications/sms/campaigns`                                           | `project` |
| [`getSmsCampaignBatches`](#getsmscampaignbatches)                           | `GET`    | `/{version}/notifications/sms/campaigns/{id}/batches`                              | `project` |
| [`getSmsCampaignBatchNotification`](#getsmscampaignbatchnotification)       | `GET`    | `/{version}/notifications/sms/campaigns/{id}/batches/{batchId}/{notificationId}`   | `project` |
| [`getSmsCampaignBatchNotifications`](#getsmscampaignbatchnotifications)     | `GET`    | `/{version}/notifications/sms/campaigns/{id}/batches/{batchId}`                    | `project` |
| [`getSmsCampaignStatistics`](#getsmscampaignstatistics)                     | `GET`    | `/{version}/notifications/sms/campaigns/{id}/stats`                                | `project` |
| [`previewSmsNotification`](#previewsmsnotification)                         | `GET`    | `/{version}/notifications/sms/preview`                                             | `project` |
| [`retryFailedSmsNotifications`](#retryfailedsmsnotifications)               | `POST`   | `/{version}/notifications/sms/campaigns/{Id}/retry-failed`                         | `project` |
| [`stopSmsCampaign`](#stopsmscampaign)                                       | `POST`   | `/{version}/notifications/sms/campaigns/{Id}/stop`                                 | `project` |
| [`getSmsCampaignMessages`](#getsmscampaignmessages)                         | `GET`    | `/{version}/notifications/sms/campaigns/{campaignId}/messages`                     | `project` |
| [`getPushCampaignAudienceCount`](#getpushcampaignaudiencecount)             | `POST`   | `/{version}/notifications/push/campaigns/audience-count`                           | `project` |
| [`createPushCampaign`](#createpushcampaign)                                 | `POST`   | `/{version}/notifications/push/campaigns`                                          | `project` |
| [`deletePushCampaign`](#deletepushcampaign)                                 | `DELETE` | `/{version}/notifications/push/campaigns/{Id}`                                     | `project` |
| [`getPushCampaign`](#getpushcampaign)                                       | `GET`    | `/{version}/notifications/push/campaigns/{id}`                                     | `project` |
| [`getPushCampaigns`](#getpushcampaigns)                                     | `GET`    | `/{version}/notifications/push/campaigns`                                          | `project` |
| [`getPushCampaignBatches`](#getpushcampaignbatches)                         | `GET`    | `/{version}/notifications/push/campaigns/{id}/batches`                             | `project` |
| [`getPushCampaignBatchNotification`](#getpushcampaignbatchnotification)     | `GET`    | `/{version}/notifications/push/campaigns/{id}/batches/{batchId}/{notificationId}`  | `project` |
| [`getPushCampaignBatchNotifications`](#getpushcampaignbatchnotifications)   | `GET`    | `/{version}/notifications/push/campaigns/{id}/batches/{batchId}`                   | `project` |
| [`getPushCampaignStatistics`](#getpushcampaignstatistics)                   | `GET`    | `/{version}/notifications/push/campaigns/{id}/stats`                               | `project` |
| [`previewPushNotification`](#previewpushnotification)                       | `GET`    | `/{version}/notifications/push/preview`                                            | `project` |
| [`retryFailedPushNotifications`](#retryfailedpushnotifications)             | `POST`   | `/{version}/notifications/push/campaigns/{Id}/retry-failed`                        | `project` |
| [`stopPushCampaign`](#stoppushcampaign)                                     | `POST`   | `/{version}/notifications/push/campaigns/{Id}/stop`                                | `project` |
| [`getPushCampaignMessages`](#getpushcampaignmessages)                       | `GET`    | `/{version}/notifications/push/campaigns/{campaignId}/messages`                    | `project` |

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

### getNotificationInbox

`GET` `/{version}/notifications/inbox`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetNotificationInboxRequest`
**Response**: `CodeMashApi2.GetNotificationInboxResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getNotificationInbox({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetNotificationInboxResponse
```

[↑ Top](#endpoints)

### getUnreadCount

`GET` `/{version}/notifications/inbox/unread-count`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetUnreadCountRequest`
**Response**: `CodeMashApi2.GetUnreadCountResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getUnreadCount({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetUnreadCountResponse
```

[↑ Top](#endpoints)

### markNotificationRead

`POST` `/{version}/notifications/inbox/{notificationId}/read`

**Request DTO**: `CodeMashApi2.MarkNotificationReadRequest`
**Response**: `CodeMashApi2.MarkNotificationReadResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.markNotificationRead({
  notificationId: 'notificationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.MarkNotificationReadResponse
```

[↑ Top](#endpoints)

### markAllNotificationsRead

`POST` `/{version}/notifications/inbox/read-all`

**Request DTO**: `CodeMashApi2.MarkAllNotificationsReadRequest`
**Response**: `CodeMashApi2.MarkAllNotificationsReadResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.markAllNotificationsRead({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.MarkAllNotificationsReadResponse
```

[↑ Top](#endpoints)

### createEmailCampaign

`POST` `/{version}/notifications/email/campaigns`

Create a new item.

**Request DTO**: `CodeMashApi2.CreateEmailCampaignRequest`
**Response**: `CodeMashApi2.IdResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.createEmailCampaign({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.IdResponse
```

[↑ Top](#endpoints)

### deleteEmailCampaign

`DELETE` `/{version}/notifications/email/campaigns/{Id}`

Delete an item.

**Request DTO**: `CodeMashApi2.DeleteEmailCampaignRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.deleteEmailCampaign({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### getEmailCampaign

`GET` `/{version}/notifications/email/campaigns/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetEmailCampaign`
**Response**: `CodeMashApi2.GetEmailCampaignResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getEmailCampaign({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetEmailCampaignResponse
```

[↑ Top](#endpoints)

### getEmailCampaigns

`GET` `/{version}/notifications/email/campaigns`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetEmailCampaigns`
**Response**: `CodeMashApi2.GetEmailCampaignsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getEmailCampaigns({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetEmailCampaignsResponse
```

[↑ Top](#endpoints)

### getEmailCampaignBatches

`GET` `/{version}/notifications/email/campaigns/{id}/batches`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetEmailCampaignBatches`
**Response**: `CodeMashApi2.GetEmailCampaignBatchesResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getEmailCampaignBatches({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetEmailCampaignBatchesResponse
```

[↑ Top](#endpoints)

### getEmailCampaignBatchNotification

`GET` `/{version}/notifications/email/campaigns/{id}/batches/{batchId}/{notificationId}`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetEmailCampaignBatchNotification`
**Response**: `CodeMashApi2.GetEmailCampaignBatchNotificationResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getEmailCampaignBatchNotification({
  id: 'id-here',
  batchId: 'batchId-here',
  notificationId: 'notificationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetEmailCampaignBatchNotificationResponse
```

[↑ Top](#endpoints)

### getEmailCampaignBatchNotifications

`GET` `/{version}/notifications/email/campaigns/{id}/batches/{batchId}`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetEmailCampaignBatchNotifications`
**Response**: `CodeMashApi2.GetEmailCampaignBatchNotificationsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getEmailCampaignBatchNotifications({
  id: 'id-here',
  batchId: 'batchId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetEmailCampaignBatchNotificationsResponse
```

[↑ Top](#endpoints)

### getEmailCampaignStatistics

`GET` `/{version}/notifications/email/campaigns/{id}/stats`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetEmailCampaignStatistics`
**Response**: `CodeMashApi2.GetEmailCampaignStatisticsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getEmailCampaignStatistics({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetEmailCampaignStatisticsResponse
```

[↑ Top](#endpoints)

### previewEmailNotification

`GET` `/{version}/notifications/email/preview`

Render a preview without sending.

**Request DTO**: `CodeMashApi2.PreviewEmailNotification`
**Response**: `CodeMashApi2.PreviewEmailNotificationResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.previewEmailNotification({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PreviewEmailNotificationResponse
```

[↑ Top](#endpoints)

### retryFailedEmailNotifications

`POST` `/{version}/notifications/email/campaigns/{Id}/retry-failed`

**Request DTO**: `CodeMashApi2.RetryFailedEmailNotificationsRequest`
**Response**: `CodeMashApi2.RetryFailedEmailNotificationsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.retryFailedEmailNotifications({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.RetryFailedEmailNotificationsResponse
```

[↑ Top](#endpoints)

### stopEmailCampaign

`POST` `/{version}/notifications/email/campaigns/{Id}/stop`

**Request DTO**: `CodeMashApi2.StopEmailCampaignRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.stopEmailCampaign({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### getEmailCampaignMessages

`GET` `/{version}/notifications/emails/campaigns/{campaignId}/messages`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetEmailCampaignMessagesRequest`
**Response**: `CodeMashApi2.GetEmailCampaignMessagesResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getEmailCampaignMessages({
  campaignId: 'campaignId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetEmailCampaignMessagesResponse
```

[↑ Top](#endpoints)

### createSmsCampaign

`POST` `/{version}/notifications/sms/campaigns`

Create a new item.

**Request DTO**: `CodeMashApi2.CreateSmsCampaignRequest`
**Response**: `CodeMashApi2.IdResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.createSmsCampaign({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.IdResponse
```

[↑ Top](#endpoints)

### deleteSmsCampaign

`DELETE` `/{version}/notifications/sms/campaigns/{id}`

Delete an item.

**Request DTO**: `CodeMashApi2.DeleteSmsCampaign`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.deleteSmsCampaign({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### getSmsCampaign

`GET` `/{version}/notifications/sms/campaigns/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetSmsCampaign`
**Response**: `CodeMashApi2.GetSmsCampaignResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getSmsCampaign({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetSmsCampaignResponse
```

[↑ Top](#endpoints)

### getSmsCampaigns

`GET` `/{version}/notifications/sms/campaigns`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetSmsCampaigns`
**Response**: `CodeMashApi2.GetSmsCampaignsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getSmsCampaigns({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetSmsCampaignsResponse
```

[↑ Top](#endpoints)

### getSmsCampaignBatches

`GET` `/{version}/notifications/sms/campaigns/{id}/batches`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetSmsCampaignBatches`
**Response**: `CodeMashApi2.GetSmsCampaignBatchesResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getSmsCampaignBatches({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetSmsCampaignBatchesResponse
```

[↑ Top](#endpoints)

### getSmsCampaignBatchNotification

`GET` `/{version}/notifications/sms/campaigns/{id}/batches/{batchId}/{notificationId}`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetSmsCampaignBatchNotification`
**Response**: `CodeMashApi2.GetSmsCampaignBatchNotificationResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getSmsCampaignBatchNotification({
  id: 'id-here',
  batchId: 'batchId-here',
  notificationId: 'notificationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetSmsCampaignBatchNotificationResponse
```

[↑ Top](#endpoints)

### getSmsCampaignBatchNotifications

`GET` `/{version}/notifications/sms/campaigns/{id}/batches/{batchId}`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetSmsCampaignBatchNotifications`
**Response**: `CodeMashApi2.GetSmsCampaignBatchNotificationsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getSmsCampaignBatchNotifications({
  id: 'id-here',
  batchId: 'batchId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetSmsCampaignBatchNotificationsResponse
```

[↑ Top](#endpoints)

### getSmsCampaignStatistics

`GET` `/{version}/notifications/sms/campaigns/{id}/stats`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetSmsCampaignStatistics`
**Response**: `CodeMashApi2.GetSmsCampaignStatisticsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getSmsCampaignStatistics({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetSmsCampaignStatisticsResponse
```

[↑ Top](#endpoints)

### previewSmsNotification

`GET` `/{version}/notifications/sms/preview`

Render a preview without sending.

**Request DTO**: `CodeMashApi2.PreviewSmsNotification`
**Response**: `CodeMashApi2.PreviewSmsNotificationResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.previewSmsNotification({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PreviewSmsNotificationResponse
```

[↑ Top](#endpoints)

### retryFailedSmsNotifications

`POST` `/{version}/notifications/sms/campaigns/{Id}/retry-failed`

**Request DTO**: `CodeMashApi2.RetryFailedSmsNotificationsRequest`
**Response**: `CodeMashApi2.RetryFailedSmsNotificationsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.retryFailedSmsNotifications({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.RetryFailedSmsNotificationsResponse
```

[↑ Top](#endpoints)

### stopSmsCampaign

`POST` `/{version}/notifications/sms/campaigns/{Id}/stop`

**Request DTO**: `CodeMashApi2.StopSmsCampaignRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.stopSmsCampaign({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### getSmsCampaignMessages

`GET` `/{version}/notifications/sms/campaigns/{campaignId}/messages`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetSmsCampaignMessagesRequest`
**Response**: `CodeMashApi2.GetSmsCampaignMessagesResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getSmsCampaignMessages({
  campaignId: 'campaignId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetSmsCampaignMessagesResponse
```

[↑ Top](#endpoints)

### getPushCampaignAudienceCount

`POST` `/{version}/notifications/push/campaigns/audience-count`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetPushCampaignAudienceCountRequest`
**Response**: `CodeMashApi2.GetPushCampaignAudienceCountResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getPushCampaignAudienceCount({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetPushCampaignAudienceCountResponse
```

[↑ Top](#endpoints)

### createPushCampaign

`POST` `/{version}/notifications/push/campaigns`

Create a new item.

**Request DTO**: `CodeMashApi2.CreatePushCampaignRequest`
**Response**: `CodeMashApi2.IdResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.createPushCampaign({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.IdResponse
```

[↑ Top](#endpoints)

### deletePushCampaign

`DELETE` `/{version}/notifications/push/campaigns/{Id}`

Delete an item.

**Request DTO**: `CodeMashApi2.DeletePushCampaignRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.deletePushCampaign({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### getPushCampaign

`GET` `/{version}/notifications/push/campaigns/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetPushCampaign`
**Response**: `CodeMashApi2.GetPushCampaignResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getPushCampaign({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetPushCampaignResponse
```

[↑ Top](#endpoints)

### getPushCampaigns

`GET` `/{version}/notifications/push/campaigns`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetPushCampaigns`
**Response**: `CodeMashApi2.GetPushCampaignsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getPushCampaigns({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetPushCampaignsResponse
```

[↑ Top](#endpoints)

### getPushCampaignBatches

`GET` `/{version}/notifications/push/campaigns/{id}/batches`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetPushCampaignBatches`
**Response**: `CodeMashApi2.GetPushCampaignBatchesResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getPushCampaignBatches({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetPushCampaignBatchesResponse
```

[↑ Top](#endpoints)

### getPushCampaignBatchNotification

`GET` `/{version}/notifications/push/campaigns/{id}/batches/{batchId}/{notificationId}`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetPushCampaignBatchNotification`
**Response**: `CodeMashApi2.GetPushCampaignBatchNotificationResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getPushCampaignBatchNotification({
  id: 'id-here',
  batchId: 'batchId-here',
  notificationId: 'notificationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetPushCampaignBatchNotificationResponse
```

[↑ Top](#endpoints)

### getPushCampaignBatchNotifications

`GET` `/{version}/notifications/push/campaigns/{id}/batches/{batchId}`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetPushCampaignBatchNotifications`
**Response**: `CodeMashApi2.GetPushCampaignBatchNotificationsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getPushCampaignBatchNotifications({
  id: 'id-here',
  batchId: 'batchId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetPushCampaignBatchNotificationsResponse
```

[↑ Top](#endpoints)

### getPushCampaignStatistics

`GET` `/{version}/notifications/push/campaigns/{id}/stats`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetPushCampaignStatistics`
**Response**: `CodeMashApi2.GetPushCampaignStatisticsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getPushCampaignStatistics({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetPushCampaignStatisticsResponse
```

[↑ Top](#endpoints)

### previewPushNotification

`GET` `/{version}/notifications/push/preview`

Render a preview without sending.

**Request DTO**: `CodeMashApi2.PreviewPushNotification`
**Response**: `CodeMashApi2.PreviewPushNotificationResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.previewPushNotification({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PreviewPushNotificationResponse
```

[↑ Top](#endpoints)

### retryFailedPushNotifications

`POST` `/{version}/notifications/push/campaigns/{Id}/retry-failed`

**Request DTO**: `CodeMashApi2.RetryFailedPushNotificationsRequest`
**Response**: `CodeMashApi2.RetryFailedPushNotificationsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.retryFailedPushNotifications({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.RetryFailedPushNotificationsResponse
```

[↑ Top](#endpoints)

### stopPushCampaign

`POST` `/{version}/notifications/push/campaigns/{Id}/stop`

**Request DTO**: `CodeMashApi2.StopPushCampaignRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.stopPushCampaign({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### getPushCampaignMessages

`GET` `/{version}/notifications/push/campaigns/{campaignId}/messages`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetPushCampaignMessagesRequest`
**Response**: `CodeMashApi2.GetPushCampaignMessagesResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.notifications.getPushCampaignMessages({
  campaignId: 'campaignId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetPushCampaignMessagesResponse
```

[↑ Top](#endpoints)
