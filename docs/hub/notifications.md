# Hub · Notifications

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Email and push templates, integrations, campaigns, devices, signatures, footers, and one-click unsubscribe.

Accessed as `norbix.hub.notifications` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method | Verb | Path | Scope |
| --- | --- | --- | --- |
| [`getUserNotificationPreferences`](#getusernotificationpreferences) | `GET` | `/{version}/notifications/user/preferences` | `project` |
| [`updateUserNotificationsPreferences`](#updateusernotificationspreferences) | `PUT` | `/{version}/notifications/user/preferences` | `project` |
| [`disableEmail`](#disableemail) | `GET` | `/{version}/notifications/email/disable` | `project` |
| [`enableEmail`](#enableemail) | `GET` | `/{version}/notifications/email/enable` | `project` |
| [`attachFileToTemplate`](#attachfiletotemplate) | `POST` | `/{version}/notifications/email/templates/attachments` | `project` |
| [`createEmailTemplate`](#createemailtemplate) | `POST` | `/{version}/notifications/email/templates` | `project` |
| [`deleteEmailTemplate`](#deleteemailtemplate) | `DELETE` | `/{version}/notifications/email/templates/{Id}` | `project` |
| [`getEmailTemplate`](#getemailtemplate) | `GET` | `/{version}/notifications/email/templates/{id}` | `project` |
| [`getEmailTemplates`](#getemailtemplates) | `GET` | `/{version}/notifications/email/templates` | `project` |
| [`getMjml`](#getmjml) | `POST` | `/{version}/notifications/email/templates/mjml` | `project` |
| [`getSystemEmailTemplate`](#getsystememailtemplate) | `GET` | `/{version}/notifications/email/system-templates/{id}` | `project` |
| [`getSystemEmailTemplates`](#getsystememailtemplates) | `GET` | `/{version}/notifications/email/system-templates` | `project` |
| [`getEmailTemplateAvailableTokens`](#getemailtemplateavailabletokens) | `GET` | `/{version}/notifications/email/templates/{id}/tokens` | `project` |
| [`updateEmailTemplate`](#updateemailtemplate) | `PUT` | `/{version}/notifications/email/templates` | `project` |
| [`deleteEmailSignature`](#deleteemailsignature) | `DELETE` | `/{version}/notifications/email/signatures/{id}` | `project` |
| [`getEmailSignature`](#getemailsignature) | `GET` | `/{version}/notifications/email/signatures/{id}` | `project` |
| [`getEmailSignatures`](#getemailsignatures) | `GET` | `/{version}/notifications/email/signatures` | `project` |
| [`saveEmailSignature`](#saveemailsignature) | `POST` | `/{version}/notifications/email/signatures` | `project` |
| [`getEmailSettings`](#getemailsettings) | `GET` | `/{version}/notifications/email/settings` | `project` |
| [`confirmEmailIntegrationHumanDelivery`](#confirmemailintegrationhumandelivery) | `POST` | `/{version}/notifications/email/integrations/confirm-human-delivery` | `project` |
| [`deleteEmailIntegration`](#deleteemailintegration) | `DELETE` | `/{version}/notifications/email/integrations/{Id}` | `project` |
| [`disableEmailIntegration`](#disableemailintegration) | `PUT` | `/{version}/notifications/email/integrations/{Id}/disable` | `project` |
| [`enableEmailIntegration`](#enableemailintegration) | `PUT` | `/{version}/notifications/email/integrations/{Id}/enable` | `project` |
| [`getEmailIntegration`](#getemailintegration) | `GET` | `/{version}/notifications/email/integrations/{id}` | `project` |
| [`getEmailIntegrations`](#getemailintegrations) | `GET` | `/{version}/notifications/email/integrations` | `project` |
| [`saveEmailIntegration`](#saveemailintegration) | `POST` | `/{version}/notifications/email/integrations` | `project` |
| [`setEmailsIntegrationAsDefault`](#setemailsintegrationasdefault) | `PUT` | `/{version}/notifications/email/integrations/{Id}/default` | `project` |
| [`testEmailIntegration`](#testemailintegration) | `POST` | `/{version}/notifications/email/integrations/test` | `project` |
| [`archiveEmailTemplate`](#archiveemailtemplate) | `PUT` | `/{version}/notifications/email/templates/{Id}/archive` | `project` |
| [`cloneEmailTemplate`](#cloneemailtemplate) | `POST` | `/{version}/notifications/email/templates/{Id}/clone` | `project` |
| [`unArchiveEmailTemplate`](#unarchiveemailtemplate) | `PUT` | `/{version}/notifications/email/templates/{Id}/unarchive` | `project` |
| [`deleteEmailFooter`](#deleteemailfooter) | `DELETE` | `/{version}/notifications/email/footers/{id}` | `project` |
| [`getEmailFooter`](#getemailfooter) | `GET` | `/{version}/notifications/email/footers/{id}` | `project` |
| [`getEmailFooters`](#getemailfooters) | `GET` | `/{version}/notifications/email/footers` | `project` |
| [`saveEmailFooter`](#saveemailfooter) | `POST` | `/{version}/notifications/email/footers` | `project` |
| [`createEmailCampaign`](#createemailcampaign) | `POST` | `/{version}/notifications/email/campaigns` | `project` |
| [`deleteEmailCampaign`](#deleteemailcampaign) | `DELETE` | `/{version}/notifications/email/campaigns/{Id}` | `project` |
| [`getEmailCampaign`](#getemailcampaign) | `GET` | `/{version}/notifications/email/campaigns/{id}` | `project` |
| [`getEmailCampaigns`](#getemailcampaigns) | `GET` | `/{version}/notifications/email/campaigns` | `project` |
| [`getEmailCampaignBatches`](#getemailcampaignbatches) | `GET` | `/{version}/notifications/email/campaigns/{id}/batches` | `project` |
| [`getEmailCampaignBatchNotification`](#getemailcampaignbatchnotification) | `GET` | `/{version}/notifications/email/campaigns/{id}/batches/{batchId}/{notificationId}` | `project` |
| [`getEmailCampaignBatchNotifications`](#getemailcampaignbatchnotifications) | `GET` | `/{version}/notifications/email/campaigns/{id}/batches/{batchId}` | `project` |
| [`getEmailCampaignStatistics`](#getemailcampaignstatistics) | `GET` | `/{version}/notifications/email/campaigns/{id}/stats` | `project` |
| [`previewEmailNotification`](#previewemailnotification) | `GET` | `/{version}/notifications/email/preview` | `project` |
| [`getEmailCampaignMessage`](#getemailcampaignmessage) | `GET` | `/{version}/notifications/emails/campaigns/{campaignId}/messages/{id}` | `project` |
| [`getEmailCampaignMessages`](#getemailcampaignmessages) | `GET` | `/{version}/notifications/emails/campaigns/{campaignId}/messages` | `project` |
| [`disablePush`](#disablepush) | `GET` | `/{version}/notifications/push/disable` | `project` |
| [`enablePush`](#enablepush) | `GET` | `/{version}/notifications/push/enable` | `project` |
| [`archivePushTemplate`](#archivepushtemplate) | `PUT` | `/{version}/notifications/push/templates/{Id}/archive` | `project` |
| [`clonePushTemplate`](#clonepushtemplate) | `POST` | `/{version}/notifications/push/templates/{Id}/clone` | `project` |
| [`createPushTemplate`](#createpushtemplate) | `POST` | `/{version}/notifications/push/templates` | `project` |
| [`deletePushTemplate`](#deletepushtemplate) | `DELETE` | `/{version}/notifications/push/templates/{Id}` | `project` |
| [`getPushTemplate`](#getpushtemplate) | `GET` | `/{version}/notifications/push/templates/{id}` | `project` |
| [`getPushTemplates`](#getpushtemplates) | `GET` | `/{version}/notifications/push/templates` | `project` |
| [`getPushMessageContentTokens`](#getpushmessagecontenttokens) | `GET` | `/{version}/notifications/push/templates/{id}/tokens` | `project` |
| [`unArchivePushTemplate`](#unarchivepushtemplate) | `PUT` | `/{version}/notifications/push/templates/{Id}/unarchive` | `project` |
| [`updatePushTemplate`](#updatepushtemplate) | `PUT` | `/{version}/notifications/push/templates` | `project` |
| [`confirmPushIntegrationHumanDelivery`](#confirmpushintegrationhumandelivery) | `POST` | `/{version}/notifications/push/integrations/confirm-human-delivery` | `project` |
| [`deletePushIntegration`](#deletepushintegration) | `DELETE` | `/{version}/notifications/push/integrations/{Id}` | `project` |
| [`disablePushIntegration`](#disablepushintegration) | `PUT` | `/{version}/notifications/push/integrations/{Id}/disable` | `project` |
| [`enablePushIntegration`](#enablepushintegration) | `PUT` | `/{version}/notifications/push/integrations/{Id}/enable` | `project` |
| [`getPushIntegration`](#getpushintegration) | `GET` | `/{version}/notifications/push/integrations/{id}` | `project` |
| [`getPushIntegrations`](#getpushintegrations) | `GET` | `/{version}/notifications/push/integrations` | `project` |
| [`savePushIntegration`](#savepushintegration) | `POST` | `/{version}/notifications/push/integrations` | `project` |
| [`setPushIntegrationAsDefault`](#setpushintegrationasdefault) | `PUT` | `/{version}/notifications/push/integrations/{Id}/default` | `project` |
| [`testPushIntegration`](#testpushintegration) | `POST` | `/{version}/notifications/push/integrations/test` | `project` |
| [`registerCodeMashAppPushIntegration`](#registercodemashapppushintegration) | `POST` | `/{version}/notifications/push/integrations/app/request` | `account` |
| [`registerDevice`](#registerdevice) | `POST` | `/{version}/notifications/push/devices` | `project` |

## Reference

### getUserNotificationPreferences

`GET` `/{version}/notifications/user/preferences`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetUserNotificationPreferences`
**Response**: `CodeMashHub2.GetUserEmailPreferencesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getUserNotificationPreferences({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetUserEmailPreferencesResponse
```

[↑ Top](#endpoints)

### updateUserNotificationsPreferences

`PUT` `/{version}/notifications/user/preferences`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateUserNotificationsPreferences`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.updateUserNotificationsPreferences({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### disableEmail

`GET` `/{version}/notifications/email/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableEmail`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.disableEmail({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableEmail

`GET` `/{version}/notifications/email/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableEmail`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.enableEmail({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### attachFileToTemplate

`POST` `/{version}/notifications/email/templates/attachments`



**Request DTO**: `CodeMashHub2.AttachFileToTemplateRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.attachFileToTemplate({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### createEmailTemplate

`POST` `/{version}/notifications/email/templates`

Create a new item.

**Request DTO**: `CodeMashHub2.CreateEmailTemplateRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.createEmailTemplate({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### deleteEmailTemplate

`DELETE` `/{version}/notifications/email/templates/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteEmailTemplateRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.deleteEmailTemplate({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getEmailTemplate

`GET` `/{version}/notifications/email/templates/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetEmailTemplate`
**Response**: `CodeMashHub2.GetEmailTemplateResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getEmailTemplate({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetEmailTemplateResponse
```

[↑ Top](#endpoints)

### getEmailTemplates

`GET` `/{version}/notifications/email/templates`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetEmailTemplates`
**Response**: `CodeMashHub2.GetEmailTemplatesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getEmailTemplates({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetEmailTemplatesResponse
```

[↑ Top](#endpoints)

### getMjml

`POST` `/{version}/notifications/email/templates/mjml`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetMjml`
**Response**: `CodeMashHub2.GetHtmlFromMjmlResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getMjml({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetHtmlFromMjmlResponse
```

[↑ Top](#endpoints)

### getSystemEmailTemplate

`GET` `/{version}/notifications/email/system-templates/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetSystemEmailTemplate`
**Response**: `CodeMashHub2.GetSystemEmailTemplateResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getSystemEmailTemplate({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetSystemEmailTemplateResponse
```

[↑ Top](#endpoints)

### getSystemEmailTemplates

`GET` `/{version}/notifications/email/system-templates`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetSystemEmailTemplates`
**Response**: `CodeMashHub2.GetSystemEmailTemplatesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getSystemEmailTemplates({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetSystemEmailTemplatesResponse
```

[↑ Top](#endpoints)

### getEmailTemplateAvailableTokens

`GET` `/{version}/notifications/email/templates/{id}/tokens`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetEmailTemplateAvailableTokens`
**Response**: `CodeMashHub2.GetEmailTemplateAvailableTokensResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getEmailTemplateAvailableTokens({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetEmailTemplateAvailableTokensResponse
```

[↑ Top](#endpoints)

### updateEmailTemplate

`PUT` `/{version}/notifications/email/templates`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateEmailTemplateRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.updateEmailTemplate({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteEmailSignature

`DELETE` `/{version}/notifications/email/signatures/{id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteEmailSignature`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.deleteEmailSignature({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getEmailSignature

`GET` `/{version}/notifications/email/signatures/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetEmailSignature`
**Response**: `CodeMashHub2.GetEmailSignatureResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getEmailSignature({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetEmailSignatureResponse
```

[↑ Top](#endpoints)

### getEmailSignatures

`GET` `/{version}/notifications/email/signatures`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetEmailSignatures`
**Response**: `CodeMashHub2.GetEmailSignaturesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getEmailSignatures({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetEmailSignaturesResponse
```

[↑ Top](#endpoints)

### saveEmailSignature

`POST` `/{version}/notifications/email/signatures`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveEmailSignatureRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.saveEmailSignature({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### getEmailSettings

`GET` `/{version}/notifications/email/settings`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetEmailSettings`
**Response**: `CodeMashHub2.GetEmailSettingsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getEmailSettings({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetEmailSettingsResponse
```

[↑ Top](#endpoints)

### confirmEmailIntegrationHumanDelivery

`POST` `/{version}/notifications/email/integrations/confirm-human-delivery`



**Request DTO**: `CodeMashHub2.ConfirmEmailIntegrationHumanDeliveryRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.confirmEmailIntegrationHumanDelivery({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteEmailIntegration

`DELETE` `/{version}/notifications/email/integrations/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteEmailIntegration`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.deleteEmailIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### disableEmailIntegration

`PUT` `/{version}/notifications/email/integrations/{Id}/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableEmailIntegration`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.disableEmailIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableEmailIntegration

`PUT` `/{version}/notifications/email/integrations/{Id}/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableEmailIntegration`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.enableEmailIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getEmailIntegration

`GET` `/{version}/notifications/email/integrations/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetEmailIntegration`
**Response**: `CodeMashHub2.GetEmailIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getEmailIntegration({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetEmailIntegrationResponse
```

[↑ Top](#endpoints)

### getEmailIntegrations

`GET` `/{version}/notifications/email/integrations`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetEmailIntegrations`
**Response**: `CodeMashHub2.GetEmailIntegrationsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getEmailIntegrations({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetEmailIntegrationsResponse
```

[↑ Top](#endpoints)

### saveEmailIntegration

`POST` `/{version}/notifications/email/integrations`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveEmailIntegration`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.saveEmailIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### setEmailsIntegrationAsDefault

`PUT` `/{version}/notifications/email/integrations/{Id}/default`



**Request DTO**: `CodeMashHub2.SetEmailsIntegrationAsDefault`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.setEmailsIntegrationAsDefault({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### testEmailIntegration

`POST` `/{version}/notifications/email/integrations/test`

Run a connection / delivery test against the integration.

**Request DTO**: `CodeMashHub2.TestEmailIntegration`
**Response**: `CodeMashHub2.TestEmailIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.testEmailIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.TestEmailIntegrationResponse
```

[↑ Top](#endpoints)

### archiveEmailTemplate

`PUT` `/{version}/notifications/email/templates/{Id}/archive`

Archive (soft-hide) the resource.

**Request DTO**: `CodeMashHub2.ArchiveEmailTemplateRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.archiveEmailTemplate({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### cloneEmailTemplate

`POST` `/{version}/notifications/email/templates/{Id}/clone`

Duplicate an existing resource.

**Request DTO**: `CodeMashHub2.CloneEmailTemplateRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.cloneEmailTemplate({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### unArchiveEmailTemplate

`PUT` `/{version}/notifications/email/templates/{Id}/unarchive`



**Request DTO**: `CodeMashHub2.UnArchiveEmailTemplateRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.unArchiveEmailTemplate({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteEmailFooter

`DELETE` `/{version}/notifications/email/footers/{id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteEmailFooter`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.deleteEmailFooter({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getEmailFooter

`GET` `/{version}/notifications/email/footers/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetEmailFooter`
**Response**: `CodeMashHub2.GetEmailFooterResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getEmailFooter({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetEmailFooterResponse
```

[↑ Top](#endpoints)

### getEmailFooters

`GET` `/{version}/notifications/email/footers`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetEmailFooters`
**Response**: `CodeMashHub2.GetEmailFootersResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getEmailFooters({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetEmailFootersResponse
```

[↑ Top](#endpoints)

### saveEmailFooter

`POST` `/{version}/notifications/email/footers`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveEmailFooterRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.saveEmailFooter({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### createEmailCampaign

`POST` `/{version}/notifications/email/campaigns`

Create a new item.

**Request DTO**: `CodeMashHub2.CreateEmailCampaignRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.createEmailCampaign({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### deleteEmailCampaign

`DELETE` `/{version}/notifications/email/campaigns/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteEmailCampaignRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.deleteEmailCampaign({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getEmailCampaign

`GET` `/{version}/notifications/email/campaigns/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetEmailCampaign`
**Response**: `CodeMashHub2.GetEmailCampaignResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getEmailCampaign({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetEmailCampaignResponse
```

[↑ Top](#endpoints)

### getEmailCampaigns

`GET` `/{version}/notifications/email/campaigns`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetEmailCampaigns`
**Response**: `CodeMashHub2.GetEmailCampaignsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getEmailCampaigns({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetEmailCampaignsResponse
```

[↑ Top](#endpoints)

### getEmailCampaignBatches

`GET` `/{version}/notifications/email/campaigns/{id}/batches`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetEmailCampaignBatches`
**Response**: `CodeMashHub2.GetEmailCampaignBatchesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getEmailCampaignBatches({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetEmailCampaignBatchesResponse
```

[↑ Top](#endpoints)

### getEmailCampaignBatchNotification

`GET` `/{version}/notifications/email/campaigns/{id}/batches/{batchId}/{notificationId}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetEmailCampaignBatchNotification`
**Response**: `CodeMashHub2.GetEmailCampaignBatchNotificationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getEmailCampaignBatchNotification({
  id: 'id-here',
  batchId: 'batchId-here',
  notificationId: 'notificationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetEmailCampaignBatchNotificationResponse
```

[↑ Top](#endpoints)

### getEmailCampaignBatchNotifications

`GET` `/{version}/notifications/email/campaigns/{id}/batches/{batchId}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetEmailCampaignBatchNotifications`
**Response**: `CodeMashHub2.GetEmailCampaignBatchNotificationsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getEmailCampaignBatchNotifications({
  id: 'id-here',
  batchId: 'batchId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetEmailCampaignBatchNotificationsResponse
```

[↑ Top](#endpoints)

### getEmailCampaignStatistics

`GET` `/{version}/notifications/email/campaigns/{id}/stats`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetEmailCampaignStatistics`
**Response**: `CodeMashHub2.GetEmailCampaignStatisticsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getEmailCampaignStatistics({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetEmailCampaignStatisticsResponse
```

[↑ Top](#endpoints)

### previewEmailNotification

`GET` `/{version}/notifications/email/preview`

Render a preview without sending.

**Request DTO**: `CodeMashHub2.PreviewEmailNotification`
**Response**: `CodeMashHub2.PreviewEmailNotificationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.previewEmailNotification({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.PreviewEmailNotificationResponse
```

[↑ Top](#endpoints)

### getEmailCampaignMessage

`GET` `/{version}/notifications/emails/campaigns/{campaignId}/messages/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetEmailCampaignMessage`
**Response**: `CodeMashHub2.GetEmailCampaignMessageResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getEmailCampaignMessage({
  campaignId: 'campaignId-here',
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetEmailCampaignMessageResponse
```

[↑ Top](#endpoints)

### getEmailCampaignMessages

`GET` `/{version}/notifications/emails/campaigns/{campaignId}/messages`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetEmailCampaignMessagesRequest`
**Response**: `CodeMashHub2.GetEmailCampaignMessagesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getEmailCampaignMessages({
  campaignId: 'campaignId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetEmailCampaignMessagesResponse
```

[↑ Top](#endpoints)

### disablePush

`GET` `/{version}/notifications/push/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisablePush`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.disablePush({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enablePush

`GET` `/{version}/notifications/push/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnablePush`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.enablePush({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### archivePushTemplate

`PUT` `/{version}/notifications/push/templates/{Id}/archive`

Archive (soft-hide) the resource.

**Request DTO**: `CodeMashHub2.ArchivePushTemplateRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.archivePushTemplate({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### clonePushTemplate

`POST` `/{version}/notifications/push/templates/{Id}/clone`

Duplicate an existing resource.

**Request DTO**: `CodeMashHub2.ClonePushTemplateRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.clonePushTemplate({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### createPushTemplate

`POST` `/{version}/notifications/push/templates`

Create a new item.

**Request DTO**: `CodeMashHub2.CreatePushTemplateRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.createPushTemplate({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### deletePushTemplate

`DELETE` `/{version}/notifications/push/templates/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeletePushTemplateRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.deletePushTemplate({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getPushTemplate

`GET` `/{version}/notifications/push/templates/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetPushTemplate`
**Response**: `CodeMashHub2.GetPushTemplateResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getPushTemplate({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetPushTemplateResponse
```

[↑ Top](#endpoints)

### getPushTemplates

`GET` `/{version}/notifications/push/templates`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetPushTemplates`
**Response**: `CodeMashHub2.GetPushTemplatesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getPushTemplates({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetPushTemplatesResponse
```

[↑ Top](#endpoints)

### getPushMessageContentTokens

`GET` `/{version}/notifications/push/templates/{id}/tokens`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetPushMessageContentTokens`
**Response**: `CodeMashHub2.GetPushMessageContentTokensResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getPushMessageContentTokens({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetPushMessageContentTokensResponse
```

[↑ Top](#endpoints)

### unArchivePushTemplate

`PUT` `/{version}/notifications/push/templates/{Id}/unarchive`



**Request DTO**: `CodeMashHub2.UnArchivePushTemplateRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.unArchivePushTemplate({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### updatePushTemplate

`PUT` `/{version}/notifications/push/templates`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdatePushTemplateRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.updatePushTemplate({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### confirmPushIntegrationHumanDelivery

`POST` `/{version}/notifications/push/integrations/confirm-human-delivery`



**Request DTO**: `CodeMashHub2.ConfirmPushIntegrationHumanDeliveryRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.confirmPushIntegrationHumanDelivery({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deletePushIntegration

`DELETE` `/{version}/notifications/push/integrations/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeletePushIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.deletePushIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### disablePushIntegration

`PUT` `/{version}/notifications/push/integrations/{Id}/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisablePushIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.disablePushIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enablePushIntegration

`PUT` `/{version}/notifications/push/integrations/{Id}/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnablePushIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.enablePushIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getPushIntegration

`GET` `/{version}/notifications/push/integrations/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetPushIntegration`
**Response**: `CodeMashHub2.GetPushIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getPushIntegration({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetPushIntegrationResponse
```

[↑ Top](#endpoints)

### getPushIntegrations

`GET` `/{version}/notifications/push/integrations`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetPushIntegrations`
**Response**: `CodeMashHub2.GetPushIntegrationsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.getPushIntegrations({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetPushIntegrationsResponse
```

[↑ Top](#endpoints)

### savePushIntegration

`POST` `/{version}/notifications/push/integrations`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SavePushIntegration`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.savePushIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### setPushIntegrationAsDefault

`PUT` `/{version}/notifications/push/integrations/{Id}/default`



**Request DTO**: `CodeMashHub2.SetPushIntegrationAsDefaultRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.setPushIntegrationAsDefault({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### testPushIntegration

`POST` `/{version}/notifications/push/integrations/test`

Run a connection / delivery test against the integration.

**Request DTO**: `CodeMashHub2.TestPushIntegration`
**Response**: `CodeMashHub2.TestEmailIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.testPushIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.TestEmailIntegrationResponse
```

[↑ Top](#endpoints)

### registerCodeMashAppPushIntegration

`POST` `/{version}/notifications/push/integrations/app/request`

Register a new entry.

> ⚠️ **Account-scoped.** This call requires `accountId` on the client. Construct with `new Norbix({ accountId, ... })` or set `NORBIX_ACCOUNT_ID`. Calling without it throws `NORBIX_ACCOUNT_SCOPE_REQUIRED`.

**Request DTO**: `CodeMashHub2.RegisterCodeMashAppPushIntegration`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.registerCodeMashAppPushIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### registerDevice

`POST` `/{version}/notifications/push/devices`

Register a new entry.

**Request DTO**: `CodeMashHub2.RegisterDevice`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.notifications.registerDevice({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)
