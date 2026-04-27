# Hub · Account

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Account profile, status, verification, team invites, and Stripe billing portal. Most write endpoints require `accountId` on the client.

Accessed as `norbix.hub.account` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method | Verb | Path | Scope |
| --- | --- | --- | --- |
| [`getAccountProfile`](#getaccountprofile) | `GET` | `/{version}/account/profile` | `project` |
| [`updateAccountProfile`](#updateaccountprofile) | `PUT` | `/{version}/account/profile` | `project` |
| [`resendAccountVerificationToken`](#resendaccountverificationtoken) | `GET` | `/{version}/account/verify/resend` | `project` |
| [`getAccountStatus`](#getaccountstatus) | `GET` | `/{version}/account/status` | `project` |
| [`createStripeCheckoutSession`](#createstripecheckoutsession) | `POST` | `/{version}/account/stripe/create-checkout-session` | `project` |
| [`getStripeBillingPortalUrl`](#getstripebillingportalurl) | `POST` | `/{version}/account/stripe/get-portal-url` | `project` |
| [`createTeamMemberFromInvitation`](#createteammemberfrominvitation) | `POST` | `/{version}/account/team/member` | `project` |
| [`verifyAccount`](#verifyaccount) | `GET` | `/{version}/account/verify` | `account` |
| [`deleteNotificationsGroup`](#deletenotificationsgroup) | `DELETE` | `/{version}/account/projects/{projectId}/notifications/settings/group` | `project` |
| [`deleteNotificationsTag`](#deletenotificationstag) | `DELETE` | `/{version}/account/projects/{projectId}/notifications/settings/tag` | `project` |
| [`removeTagFromNotificationsGroup`](#removetagfromnotificationsgroup) | `DELETE` | `/{version}/account/projects/{projectId}/notifications/settings/group/tag` | `project` |
| [`saveNotificationsGroup`](#savenotificationsgroup) | `POST` | `/{version}/account/projects/{projectId}/notifications/settings/group` | `project` |
| [`saveNotificationsTag`](#savenotificationstag) | `POST` | `/{version}/account/projects/{projectId}/notifications/settings/tag` | `project` |
| [`createProject`](#createproject) | `POST` | `/{version}/account/projects` | `project` |
| [`deleteProject`](#deleteproject) | `DELETE` | `/{version}/account/projects/{projectId}` | `project` |
| [`getProject`](#getproject) | `GET` | `/{version}/account/projects/{projectId}` | `project` |
| [`getProjects`](#getprojects) | `GET` | `/{version}/account/projects` | `project` |
| [`getAccountRegions`](#getaccountregions) | `GET` | `/{version}/account/regions` | `project` |
| [`getProjectTokens`](#getprojecttokens) | `GET` | `/{version}/account/projects/{projectId}/tokens` | `project` |
| [`updateProjectAccentColor`](#updateprojectaccentcolor) | `PATCH` | `/{version}/account/projects/{projectId}/settings/accent-color` | `project` |
| [`updateProjectIcon`](#updateprojecticon) | `PATCH` | `/{version}/account/projects/{projectId}/settings/icon` | `project` |
| [`updateProjectLogo`](#updateprojectlogo) | `PATCH` | `/{version}/account/projects/{projectId}/settings/logo` | `project` |
| [`updateProjectMainColor`](#updateprojectmaincolor) | `PATCH` | `/{version}/account/projects/{projectId}/settings/main-color` | `project` |
| [`updateProjectAllowedOrigins`](#updateprojectallowedorigins) | `PATCH` | `/{version}/account/projects/{projectId}/settings/origins` | `project` |
| [`updateProjectDefaultLanguage`](#updateprojectdefaultlanguage) | `PATCH` | `/{version}/account/projects/{projectId}/settings/default-language` | `project` |
| [`updateProjectDescription`](#updateprojectdescription) | `PATCH` | `/{version}/account/projects/{projectId}/settings/description` | `project` |
| [`disableProject`](#disableproject) | `PATCH` | `/{version}/account/projects/{projectId}/disable` | `project` |
| [`enableProject`](#enableproject) | `PATCH` | `/{version}/account/projects/{projectId}/enable` | `project` |
| [`updateProjectLanguages`](#updateprojectlanguages) | `PATCH` | `/{version}/account/projects/{projectId}/settings/languages` | `project` |
| [`updateProjectUrl`](#updateprojecturl) | `PATCH` | `/{version}/account/projects/{projectId}/settings/url` | `project` |
| [`updateProjectName`](#updateprojectname) | `PATCH` | `/{version}/account/projects/{projectId}/settings/name` | `project` |
| [`updateProjectRegions`](#updateprojectregions) | `PATCH` | `/{version}/account/projects/{projectId}/settings/regions` | `project` |
| [`createAccount`](#createaccount) | `POST` | `/{version}/account` | `project` |
| [`getAccountCollaborators`](#getaccountcollaborators) | `GET` | `/{version}/account/collaborators` | `project` |
| [`sendInviteToTeamMember`](#sendinvitetoteammember) | `POST` | `/{version}/account/team/member/invite` | `project` |
| [`getLicenses`](#getlicenses) | `GET` | `/{version}/account/licenses` | `project` |
| [`askChat`](#askchat) | `POST` | `/{version}/account/chat/complete` | `project` |

## Reference

### getAccountProfile

`GET` `/{version}/account/profile`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetAccountProfile`
**Response**: `CodeMashHub2.GetAccountProfileResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getAccountProfile({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetAccountProfileResponse
```

[↑ Top](#endpoints)

### updateAccountProfile

`PUT` `/{version}/account/profile`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateAccountProfile`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.updateAccountProfile({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### resendAccountVerificationToken

`GET` `/{version}/account/verify/resend`



**Request DTO**: `CodeMashHub2.ResendAccountVerificationToken`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.resendAccountVerificationToken({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getAccountStatus

`GET` `/{version}/account/status`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetAccountStatus`
**Response**: `CodeMashHub2.GetAccountStatusResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getAccountStatus({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetAccountStatusResponse
```

[↑ Top](#endpoints)

### createStripeCheckoutSession

`POST` `/{version}/account/stripe/create-checkout-session`

Create a new item.

**Request DTO**: `CodeMashHub2.CreateStripeCheckoutSession`
**Response**: `CodeMashHub2.CreateStripeCheckoutSessionResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.createStripeCheckoutSession({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.CreateStripeCheckoutSessionResponse
```

[↑ Top](#endpoints)

### getStripeBillingPortalUrl

`POST` `/{version}/account/stripe/get-portal-url`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetStripeBillingPortalUrl`
**Response**: `CodeMashHub2.GetStripeBillingPortalUrlResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getStripeBillingPortalUrl({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetStripeBillingPortalUrlResponse
```

[↑ Top](#endpoints)

### createTeamMemberFromInvitation

`POST` `/{version}/account/team/member`

Create a new item.

**Request DTO**: `CodeMashHub2.CreateTeamMemberFromInvitation`
**Response**: `CodeMashHub2.CreateTeamMemberFromInvitationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.createTeamMemberFromInvitation({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.CreateTeamMemberFromInvitationResponse
```

[↑ Top](#endpoints)

### verifyAccount

`GET` `/{version}/account/verify`

Verify / confirm the resource.

> ⚠️ **Account-scoped.** This call requires `accountId` on the client. Construct with `new Norbix({ accountId, ... })` or set `NORBIX_ACCOUNT_ID`. Calling without it throws `NORBIX_ACCOUNT_SCOPE_REQUIRED`.

**Request DTO**: `CodeMashHub2.VerifyAccount`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.verifyAccount({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteNotificationsGroup

`DELETE` `/{version}/account/projects/{projectId}/notifications/settings/group`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteNotificationsGroup`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.deleteNotificationsGroup({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteNotificationsTag

`DELETE` `/{version}/account/projects/{projectId}/notifications/settings/tag`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteNotificationsTag`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.deleteNotificationsTag({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### removeTagFromNotificationsGroup

`DELETE` `/{version}/account/projects/{projectId}/notifications/settings/group/tag`



**Request DTO**: `CodeMashHub2.RemoveTagFromNotificationsGroup`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.removeTagFromNotificationsGroup({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### saveNotificationsGroup

`POST` `/{version}/account/projects/{projectId}/notifications/settings/group`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveNotificationsGroup`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.saveNotificationsGroup({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### saveNotificationsTag

`POST` `/{version}/account/projects/{projectId}/notifications/settings/tag`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveNotificationsTag`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.saveNotificationsTag({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### createProject

`POST` `/{version}/account/projects`

Create a new item.

**Request DTO**: `CodeMashHub2.CreateProjectRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.createProject({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### deleteProject

`DELETE` `/{version}/account/projects/{projectId}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteProject`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.deleteProject({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getProject

`GET` `/{version}/account/projects/{projectId}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetProject`
**Response**: `CodeMashHub2.GetProjectResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getProject({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetProjectResponse
```

[↑ Top](#endpoints)

### getProjects

`GET` `/{version}/account/projects`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetProjects`
**Response**: `CodeMashHub2.GetProjectsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getProjects({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetProjectsResponse
```

[↑ Top](#endpoints)

### getAccountRegions

`GET` `/{version}/account/regions`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetAccountRegions`
**Response**: `CodeMashHub2.GetAccountRegionsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getAccountRegions({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetAccountRegionsResponse
```

[↑ Top](#endpoints)

### getProjectTokens

`GET` `/{version}/account/projects/{projectId}/tokens`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetProjectTokens`
**Response**: `CodeMashHub2.GetProjectTokensResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getProjectTokens({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetProjectTokensResponse
```

[↑ Top](#endpoints)

### updateProjectAccentColor

`PATCH` `/{version}/account/projects/{projectId}/settings/accent-color`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateProjectAccentColor`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.updateProjectAccentColor({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### updateProjectIcon

`PATCH` `/{version}/account/projects/{projectId}/settings/icon`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateProjectIcon`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.updateProjectIcon({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### updateProjectLogo

`PATCH` `/{version}/account/projects/{projectId}/settings/logo`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateProjectLogo`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.updateProjectLogo({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### updateProjectMainColor

`PATCH` `/{version}/account/projects/{projectId}/settings/main-color`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateProjectMainColor`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.updateProjectMainColor({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### updateProjectAllowedOrigins

`PATCH` `/{version}/account/projects/{projectId}/settings/origins`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateProjectAllowedOrigins`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.updateProjectAllowedOrigins({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### updateProjectDefaultLanguage

`PATCH` `/{version}/account/projects/{projectId}/settings/default-language`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateProjectDefaultLanguage`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.updateProjectDefaultLanguage({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### updateProjectDescription

`PATCH` `/{version}/account/projects/{projectId}/settings/description`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateProjectDescription`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.updateProjectDescription({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### disableProject

`PATCH` `/{version}/account/projects/{projectId}/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableProject`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.disableProject({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableProject

`PATCH` `/{version}/account/projects/{projectId}/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableProject`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.enableProject({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### updateProjectLanguages

`PATCH` `/{version}/account/projects/{projectId}/settings/languages`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateProjectLanguages`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.updateProjectLanguages({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### updateProjectUrl

`PATCH` `/{version}/account/projects/{projectId}/settings/url`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateProjectUrl`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.updateProjectUrl({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### updateProjectName

`PATCH` `/{version}/account/projects/{projectId}/settings/name`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateProjectName`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.updateProjectName({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### updateProjectRegions

`PATCH` `/{version}/account/projects/{projectId}/settings/regions`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateProjectRegions`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.updateProjectRegions({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### createAccount

`POST` `/{version}/account`

Create a new item.

**Request DTO**: `CodeMashHub2.CreateAccount`
**Response**: `CodeMashHub2.CreateAccountResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.createAccount({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.CreateAccountResponse
```

[↑ Top](#endpoints)

### getAccountCollaborators

`GET` `/{version}/account/collaborators`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetAccountCollaborators`
**Response**: `CodeMashHub2.GetAccountCollaboratorsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getAccountCollaborators({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetAccountCollaboratorsResponse
```

[↑ Top](#endpoints)

### sendInviteToTeamMember

`POST` `/{version}/account/team/member/invite`

Send a message / invitation.

**Request DTO**: `CodeMashHub2.SendInviteToTeamMember`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.sendInviteToTeamMember({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getLicenses

`GET` `/{version}/account/licenses`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetLicenses`
**Response**: `CodeMashHub2.GetLicensesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getLicenses({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetLicensesResponse
```

[↑ Top](#endpoints)

### askChat

`POST` `/{version}/account/chat/complete`

Send a chat / inference request.

**Request DTO**: `CodeMashHub2.AskChatRequest`
**Response**: `CodeMashHub2.AskChatResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.askChat({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AskChatResponse
```

[↑ Top](#endpoints)
