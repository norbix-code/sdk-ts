# Hub · Account

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Account profile, status, verification, team invites, and Stripe billing portal. Most write endpoints require `accountId` on the client.

Accessed as `norbix.hub.account` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                                        | Verb     | Path                                                                         | Scope     |
| ----------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------- | --------- |
| [`getAccountProfile`](#getaccountprofile)                                     | `GET`    | `/{version}/account/profile`                                                 | `project` |
| [`updateAccountProfile`](#updateaccountprofile)                               | `PUT`    | `/{version}/account/profile`                                                 | `project` |
| [`resendAccountVerificationToken`](#resendaccountverificationtoken)           | `GET`    | `/{version}/account/verify/resend`                                           | `project` |
| [`getAccountStatus`](#getaccountstatus)                                       | `GET`    | `/{version}/account/status`                                                  | `project` |
| [`createStripeCheckoutSession`](#createstripecheckoutsession)                 | `POST`   | `/{version}/account/stripe/create-checkout-session`                          | `project` |
| [`getStripeBillingPortalUrl`](#getstripebillingportalurl)                     | `POST`   | `/{version}/account/stripe/get-portal-url`                                   | `project` |
| [`createTeamMemberFromInvitation`](#createteammemberfrominvitation)           | `POST`   | `/{version}/account/team/member`                                             | `project` |
| [`getAccountUsageBilling`](#getaccountusagebilling)                           | `GET`    | `/{version}/account/usage-billing`                                           | `project` |
| [`verifyAccount`](#verifyaccount)                                             | `GET`    | `/{version}/account/verify`                                                  | `account` |
| [`deleteNotificationsGroup`](#deletenotificationsgroup)                       | `DELETE` | `/{version}/account/projects/{projectId}/notifications/settings/group`       | `project` |
| [`deleteNotificationsTag`](#deletenotificationstag)                           | `DELETE` | `/{version}/account/projects/{projectId}/notifications/settings/tag`         | `project` |
| [`removeTagFromNotificationsGroup`](#removetagfromnotificationsgroup)         | `DELETE` | `/{version}/account/projects/{projectId}/notifications/settings/group/tag`   | `project` |
| [`saveNotificationsGroup`](#savenotificationsgroup)                           | `POST`   | `/{version}/account/projects/{projectId}/notifications/settings/group`       | `project` |
| [`saveNotificationsTag`](#savenotificationstag)                               | `POST`   | `/{version}/account/projects/{projectId}/notifications/settings/tag`         | `project` |
| [`createProject`](#createproject)                                             | `POST`   | `/{version}/account/projects`                                                | `project` |
| [`deleteProject`](#deleteproject)                                             | `DELETE` | `/{version}/account/projects/{projectId}`                                    | `project` |
| [`createProjectEnvironment`](#createprojectenvironment)                       | `POST`   | `/{version}/account/projects/environments`                                   | `project` |
| [`deleteProjectEnvironment`](#deleteprojectenvironment)                       | `DELETE` | `/{version}/account/projects/environments/{environmentName}`                 | `project` |
| [`setEnvironmentRank`](#setenvironmentrank)                                   | `PATCH`  | `/{version}/account/projects/environments/{environmentName}/rank`            | `project` |
| [`promoteEnvironment`](#promoteenvironment)                                   | `POST`   | `/{version}/account/projects/environments/promote`                           | `project` |
| [`rollbackPromotion`](#rollbackpromotion)                                     | `POST`   | `/{version}/account/projects/environments/promote/rollback`                  | `project` |
| [`getProjectEnvironments`](#getprojectenvironments)                           | `GET`    | `/{version}/account/projects/environments`                                   | `project` |
| [`getProject`](#getproject)                                                   | `GET`    | `/{version}/account/projects/{projectId}`                                    | `project` |
| [`getProjects`](#getprojects)                                                 | `GET`    | `/{version}/account/projects`                                                | `project` |
| [`getAccountRegions`](#getaccountregions)                                     | `GET`    | `/{version}/account/regions`                                                 | `project` |
| [`waitForProjectActive`](#waitforprojectactive)                               | `GET`    | `/{version}/account/projects/{projectId}/wait-active`                        | `project` |
| [`getProjectTokens`](#getprojecttokens)                                       | `GET`    | `/{version}/account/projects/{projectId}/tokens`                             | `project` |
| [`assignAdminPortalServiceUser`](#assignadminportalserviceuser)               | `PUT`    | `/{version}/account/projects/{projectId}/settings/admin-portal/service-user` | `project` |
| [`getAdminPortalStructure`](#getadminportalstructure)                         | `GET`    | `/{version}/account/projects/{projectId}/admin-portal/structure`             | `project` |
| [`updateProjectAdminUrl`](#updateprojectadminurl)                             | `PATCH`  | `/{version}/account/projects/{projectId}/settings/admin-url`                 | `project` |
| [`updateProjectAccentColor`](#updateprojectaccentcolor)                       | `PATCH`  | `/{version}/account/projects/{projectId}/settings/accent-color`              | `project` |
| [`updateProjectIcon`](#updateprojecticon)                                     | `PATCH`  | `/{version}/account/projects/{projectId}/settings/icon`                      | `project` |
| [`updateProjectLogo`](#updateprojectlogo)                                     | `PATCH`  | `/{version}/account/projects/{projectId}/settings/logo`                      | `project` |
| [`updateProjectMainColor`](#updateprojectmaincolor)                           | `PATCH`  | `/{version}/account/projects/{projectId}/settings/main-color`                | `project` |
| [`updateProjectAllowedOrigins`](#updateprojectallowedorigins)                 | `PATCH`  | `/{version}/account/projects/{projectId}/settings/origins`                   | `project` |
| [`updateProjectDefaultLanguage`](#updateprojectdefaultlanguage)               | `PATCH`  | `/{version}/account/projects/{projectId}/settings/default-language`          | `project` |
| [`updateProjectDescription`](#updateprojectdescription)                       | `PATCH`  | `/{version}/account/projects/{projectId}/settings/description`               | `project` |
| [`disableProject`](#disableproject)                                           | `PATCH`  | `/{version}/account/projects/{projectId}/disable`                            | `project` |
| [`enableProject`](#enableproject)                                             | `PATCH`  | `/{version}/account/projects/{projectId}/enable`                             | `project` |
| [`updateProjectLanguages`](#updateprojectlanguages)                           | `PATCH`  | `/{version}/account/projects/{projectId}/settings/languages`                 | `project` |
| [`updateProjectLegalDocuments`](#updateprojectlegaldocuments)                 | `PATCH`  | `/{version}/account/projects/{projectId}/settings/legal`                     | `project` |
| [`updateProjectExposeLegal`](#updateprojectexposelegal)                       | `PATCH`  | `/{version}/account/projects/{projectId}/settings/legal/expose`              | `project` |
| [`updateProjectUrl`](#updateprojecturl)                                       | `PATCH`  | `/{version}/account/projects/{projectId}/settings/url`                       | `project` |
| [`updateProjectName`](#updateprojectname)                                     | `PATCH`  | `/{version}/account/projects/{projectId}/settings/name`                      | `project` |
| [`updateProjectRegions`](#updateprojectregions)                               | `PATCH`  | `/{version}/account/projects/{projectId}/settings/regions`                   | `project` |
| [`createAccount`](#createaccount)                                             | `POST`   | `/{version}/account`                                                         | `project` |
| [`changeTeamMemberPassword`](#changeteammemberpassword)                       | `POST`   | `/{version}/account/team/member/password`                                    | `project` |
| [`createTeamMember`](#createteammember)                                       | `POST`   | `/{version}/account/team/member/create`                                      | `project` |
| [`createAccountPolicy`](#createaccountpolicy)                                 | `POST`   | `/{version}/account/team/policies`                                           | `project` |
| [`createAccountRole`](#createaccountrole)                                     | `POST`   | `/{version}/account/team/roles`                                              | `project` |
| [`deleteAccountPolicy`](#deleteaccountpolicy)                                 | `DELETE` | `/{version}/account/team/policies/{Id}`                                      | `project` |
| [`deleteAccountRole`](#deleteaccountrole)                                     | `DELETE` | `/{version}/account/team/roles/{Id}`                                         | `project` |
| [`getAccountCollaborators`](#getaccountcollaborators)                         | `GET`    | `/{version}/account/collaborators`                                           | `project` |
| [`getAccountPasswordPolicy`](#getaccountpasswordpolicy)                       | `GET`    | `/{version}/account/team/password-policy`                                    | `project` |
| [`getAccountTeamPolicies`](#getaccountteampolicies)                           | `GET`    | `/{version}/account/team/policies`                                           | `project` |
| [`getAccountTeamRoles`](#getaccountteamroles)                                 | `GET`    | `/{version}/account/team/roles`                                              | `project` |
| [`sendInviteToTeamMember`](#sendinvitetoteammember)                           | `POST`   | `/{version}/account/team/member/invite`                                      | `project` |
| [`updateAccountPolicy`](#updateaccountpolicy)                                 | `PUT`    | `/{version}/account/team/policies`                                           | `project` |
| [`updateAccountRole`](#updateaccountrole)                                     | `PUT`    | `/{version}/account/team/roles`                                              | `project` |
| [`accountHasPasskey`](#accounthaspasskey)                                     | `POST`   | `/{version}/account/userauth/has-passkey`                                    | `project` |
| [`accountStartEmailVerification`](#accountstartemailverification)             | `POST`   | `/{version}/account/userauth/email/start-verification`                       | `project` |
| [`accountConfirmEmailVerification`](#accountconfirmemailverification)         | `POST`   | `/{version}/account/userauth/email/confirm-verification`                     | `project` |
| [`accountPasskeyRegistrationOptions`](#accountpasskeyregistrationoptions)     | `POST`   | `/{version}/account/userauth/passkey/registration-options`                   | `project` |
| [`accountVerifyPasskeyRegistration`](#accountverifypasskeyregistration)       | `POST`   | `/{version}/account/userauth/passkey/verify-registration`                    | `project` |
| [`accountPasskeyAuthenticationOptions`](#accountpasskeyauthenticationoptions) | `POST`   | `/{version}/account/userauth/passkey/authentication-options`                 | `project` |
| [`accountVerifyPasskeyAuthentication`](#accountverifypasskeyauthentication)   | `POST`   | `/{version}/account/userauth/passkey/verify-authentication`                  | `project` |
| [`listAccountPasskeys`](#listaccountpasskeys)                                 | `GET`    | `/{version}/account/userauth/passkeys`                                       | `project` |
| [`renameAccountPasskey`](#renameaccountpasskey)                               | `POST`   | `/{version}/account/userauth/passkeys/{CredentialId}/rename`                 | `project` |
| [`revokeAccountPasskey`](#revokeaccountpasskey)                               | `POST`   | `/{version}/account/userauth/passkeys/{CredentialId}/revoke`                 | `project` |
| [`accountPasskeyEnrollmentOptions`](#accountpasskeyenrollmentoptions)         | `POST`   | `/{version}/account/userauth/passkey/enrollment-options`                     | `project` |
| [`accountVerifyPasskeyEnrollment`](#accountverifypasskeyenrollment)           | `POST`   | `/{version}/account/userauth/passkey/verify-enrollment`                      | `project` |
| [`getLicenseDomainDnsStatus`](#getlicensedomaindnsstatus)                     | `GET`    | `/{version}/account/licensing/dns-status`                                    | `project` |
| [`getLicenses`](#getlicenses)                                                 | `GET`    | `/{version}/account/licenses`                                                | `project` |
| [`getInstallationLicenseStatus`](#getinstallationlicensestatus)               | `GET`    | `/{version}/account/licensing/status`                                        | `project` |
| [`getAiTools`](#getaitools)                                                   | `GET`    | `/{version}/account/ai/tools`                                                | `project` |
| [`invokeAiTool`](#invokeaitool)                                               | `POST`   | `/{version}/account/ai/tools/{ToolName}`                                     | `project` |
| [`askChat`](#askchat)                                                         | `POST`   | `/{version}/account/chat/complete`                                           | `project` |
| [`uploadChatAttachment`](#uploadchatattachment)                               | `POST`   | `/{version}/account/chat/attachments`                                        | `project` |
| [`chatAvailability`](#chatavailability)                                       | `GET`    | `/{version}/account/chat/availability`                                       | `project` |
| [`getChatMemory`](#getchatmemory)                                             | `GET`    | `/{version}/account/chat/memory`                                             | `project` |
| [`forgetChatMemory`](#forgetchatmemory)                                       | `DELETE` | `/{version}/account/chat/memory/{NoteId}`                                    | `project` |
| [`deleteChatSession`](#deletechatsession)                                     | `DELETE` | `/{version}/account/chat/sessions/{SessionId}`                               | `project` |
| [`setChatSessionArchived`](#setchatsessionarchived)                           | `PATCH`  | `/{version}/account/chat/sessions/{SessionId}/archive`                       | `project` |
| [`setChatSessionPinned`](#setchatsessionpinned)                               | `PATCH`  | `/{version}/account/chat/sessions/{SessionId}/pin`                           | `project` |
| [`setChatSessionSharing`](#setchatsessionsharing)                             | `PATCH`  | `/{version}/account/chat/sessions/{SessionId}/sharing`                       | `project` |
| [`getChatSessions`](#getchatsessions)                                         | `GET`    | `/{version}/account/chat/sessions`                                           | `project` |
| [`getChatSessionEntries`](#getchatsessionentries)                             | `GET`    | `/{version}/account/chat/sessions/{SessionId}/entries`                       | `project` |
| [`setChatEntryFeedback`](#setchatentryfeedback)                               | `POST`   | `/{version}/account/chat/sessions/{SessionId}/entries/{EntryId}/feedback`    | `project` |
| [`answerChatQuestion`](#answerchatquestion)                                   | `POST`   | `/{version}/account/chat/sessions/{SessionId}/questions/{EntryId}/answer`    | `project` |
| [`decideChatPlan`](#decidechatplan)                                           | `POST`   | `/{version}/account/chat/sessions/{SessionId}/plans/{EntryId}/decision`      | `project` |
| [`stopChatRunStep`](#stopchatrunstep)                                         | `POST`   | `/{version}/account/chat/sessions/{SessionId}/steps/{EntryId}/stop`          | `project` |
| [`chatTurn`](#chatturn)                                                       | `POST`   | `/{version}/account/chat/turn`                                               | `project` |
| [`mcp`](#mcp)                                                                 | `POST`   | `/{version}/account/mcp`                                                     | `project` |

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

### getAccountUsageBilling

`GET` `/{version}/account/usage-billing`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetAccountUsageBilling`
**Response**: `CodeMashHub2.GetAccountUsageBillingResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getAccountUsageBilling({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetAccountUsageBillingResponse
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

### createProjectEnvironment

`POST` `/{version}/account/projects/environments`

Create a new item.

**Request DTO**: `CodeMashHub2.CreateProjectEnvironmentRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.createProjectEnvironment({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteProjectEnvironment

`DELETE` `/{version}/account/projects/environments/{environmentName}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteProjectEnvironmentRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.deleteProjectEnvironment({
  environmentName: 'environmentName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### setEnvironmentRank

`PATCH` `/{version}/account/projects/environments/{environmentName}/rank`

**Request DTO**: `CodeMashHub2.SetEnvironmentRankRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.setEnvironmentRank({
  environmentName: 'environmentName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### promoteEnvironment

`POST` `/{version}/account/projects/environments/promote`

**Request DTO**: `CodeMashHub2.PromoteEnvironmentRequest`
**Response**: `CodeMashHub2.PromoteEnvironmentResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.promoteEnvironment({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.PromoteEnvironmentResponse
```

[↑ Top](#endpoints)

### rollbackPromotion

`POST` `/{version}/account/projects/environments/promote/rollback`

**Request DTO**: `CodeMashHub2.RollbackPromotionRequest`
**Response**: `CodeMashHub2.PromoteEnvironmentResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.rollbackPromotion({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.PromoteEnvironmentResponse
```

[↑ Top](#endpoints)

### getProjectEnvironments

`GET` `/{version}/account/projects/environments`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetProjectEnvironments`
**Response**: `CodeMashHub2.GetProjectEnvironmentsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getProjectEnvironments({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetProjectEnvironmentsResponse
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

### waitForProjectActive

`GET` `/{version}/account/projects/{projectId}/wait-active`

**Request DTO**: `CodeMashHub2.WaitForProjectActiveRequest`
**Response**: `CodeMashHub2.WaitForProjectActiveResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.waitForProjectActive({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.WaitForProjectActiveResponse
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

### assignAdminPortalServiceUser

`PUT` `/{version}/account/projects/{projectId}/settings/admin-portal/service-user`

Assign the resource to another entity.

**Request DTO**: `CodeMashHub2.AssignAdminPortalServiceUserRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.assignAdminPortalServiceUser({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getAdminPortalStructure

`GET` `/{version}/account/projects/{projectId}/admin-portal/structure`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetAdminPortalStructure`
**Response**: `CodeMashHub2.AdminPortalStructureDto`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getAdminPortalStructure({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AdminPortalStructureDto
```

[↑ Top](#endpoints)

### updateProjectAdminUrl

`PATCH` `/{version}/account/projects/{projectId}/settings/admin-url`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateProjectAdminUrl`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.updateProjectAdminUrl({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
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

### updateProjectLegalDocuments

`PATCH` `/{version}/account/projects/{projectId}/settings/legal`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateProjectLegalDocuments`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.updateProjectLegalDocuments({
  projectId: 'projectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### updateProjectExposeLegal

`PATCH` `/{version}/account/projects/{projectId}/settings/legal/expose`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateProjectExposeLegal`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.updateProjectExposeLegal({
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

### changeTeamMemberPassword

`POST` `/{version}/account/team/member/password`

**Request DTO**: `CodeMashHub2.ChangeTeamMemberPassword`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.changeTeamMemberPassword({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### createTeamMember

`POST` `/{version}/account/team/member/create`

Create a new item.

**Request DTO**: `CodeMashHub2.CreateTeamMember`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.createTeamMember({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### createAccountPolicy

`POST` `/{version}/account/team/policies`

Create a new item.

**Request DTO**: `CodeMashHub2.CreateAccountPolicy`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.createAccountPolicy({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### createAccountRole

`POST` `/{version}/account/team/roles`

Create a new item.

**Request DTO**: `CodeMashHub2.CreateAccountRole`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.createAccountRole({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### deleteAccountPolicy

`DELETE` `/{version}/account/team/policies/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteAccountPolicy`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.deleteAccountPolicy({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### deleteAccountRole

`DELETE` `/{version}/account/team/roles/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteAccountRole`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.deleteAccountRole({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
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

### getAccountPasswordPolicy

`GET` `/{version}/account/team/password-policy`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetAccountPasswordPolicy`
**Response**: `CodeMashHub2.GetAccountPasswordPolicyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getAccountPasswordPolicy({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetAccountPasswordPolicyResponse
```

[↑ Top](#endpoints)

### getAccountTeamPolicies

`GET` `/{version}/account/team/policies`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetAccountTeamPolicies`
**Response**: `CodeMashHub2.GetAccountTeamPoliciesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getAccountTeamPolicies({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetAccountTeamPoliciesResponse
```

[↑ Top](#endpoints)

### getAccountTeamRoles

`GET` `/{version}/account/team/roles`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetAccountTeamRoles`
**Response**: `CodeMashHub2.GetAccountTeamRolesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getAccountTeamRoles({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetAccountTeamRolesResponse
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

### updateAccountPolicy

`PUT` `/{version}/account/team/policies`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateAccountPolicy`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.updateAccountPolicy({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### updateAccountRole

`PUT` `/{version}/account/team/roles`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateAccountRole`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.updateAccountRole({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### accountHasPasskey

`POST` `/{version}/account/userauth/has-passkey`

**Request DTO**: `CodeMashHub2.AccountHasPasskeyRequest`
**Response**: `CodeMashHub2.AccountPasskeyOkResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.accountHasPasskey({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AccountPasskeyOkResponse
```

[↑ Top](#endpoints)

### accountStartEmailVerification

`POST` `/{version}/account/userauth/email/start-verification`

**Request DTO**: `CodeMashHub2.AccountStartEmailVerificationRequest`
**Response**: `CodeMashHub2.AccountPasskeyOkResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.accountStartEmailVerification({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AccountPasskeyOkResponse
```

[↑ Top](#endpoints)

### accountConfirmEmailVerification

`POST` `/{version}/account/userauth/email/confirm-verification`

**Request DTO**: `CodeMashHub2.AccountConfirmEmailVerificationRequest`
**Response**: `CodeMashHub2.AccountPasskeyVerificationTokenResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.accountConfirmEmailVerification({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AccountPasskeyVerificationTokenResponse
```

[↑ Top](#endpoints)

### accountPasskeyRegistrationOptions

`POST` `/{version}/account/userauth/passkey/registration-options`

**Request DTO**: `CodeMashHub2.AccountPasskeyRegistrationOptionsRequest`
**Response**: `CodeMashHub2.AccountPasskeyCeremonyOptionsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.accountPasskeyRegistrationOptions({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AccountPasskeyCeremonyOptionsResponse
```

[↑ Top](#endpoints)

### accountVerifyPasskeyRegistration

`POST` `/{version}/account/userauth/passkey/verify-registration`

**Request DTO**: `CodeMashHub2.AccountVerifyPasskeyRegistrationRequest`
**Response**: `CodeMashHub2.AccountPasskeyAuthTokensResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.accountVerifyPasskeyRegistration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AccountPasskeyAuthTokensResponse
```

[↑ Top](#endpoints)

### accountPasskeyAuthenticationOptions

`POST` `/{version}/account/userauth/passkey/authentication-options`

**Request DTO**: `CodeMashHub2.AccountPasskeyAuthenticationOptionsRequest`
**Response**: `CodeMashHub2.AccountPasskeyCeremonyOptionsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.accountPasskeyAuthenticationOptions({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AccountPasskeyCeremonyOptionsResponse
```

[↑ Top](#endpoints)

### accountVerifyPasskeyAuthentication

`POST` `/{version}/account/userauth/passkey/verify-authentication`

**Request DTO**: `CodeMashHub2.AccountVerifyPasskeyAuthenticationRequest`
**Response**: `CodeMashHub2.AccountPasskeyAuthTokensResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.accountVerifyPasskeyAuthentication({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AccountPasskeyAuthTokensResponse
```

[↑ Top](#endpoints)

### listAccountPasskeys

`GET` `/{version}/account/userauth/passkeys`

**Request DTO**: `CodeMashHub2.ListAccountPasskeysRequest`
**Response**: `CodeMashHub2.AccountPasskeyListResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.listAccountPasskeys({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AccountPasskeyListResponse
```

[↑ Top](#endpoints)

### renameAccountPasskey

`POST` `/{version}/account/userauth/passkeys/{CredentialId}/rename`

**Request DTO**: `CodeMashHub2.RenameAccountPasskeyRequest`
**Response**: `CodeMashHub2.AccountPasskeyOkResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.renameAccountPasskey({
  CredentialId: 'CredentialId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AccountPasskeyOkResponse
```

[↑ Top](#endpoints)

### revokeAccountPasskey

`POST` `/{version}/account/userauth/passkeys/{CredentialId}/revoke`

**Request DTO**: `CodeMashHub2.RevokeAccountPasskeyRequest`
**Response**: `CodeMashHub2.AccountPasskeyOkResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.revokeAccountPasskey({
  CredentialId: 'CredentialId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AccountPasskeyOkResponse
```

[↑ Top](#endpoints)

### accountPasskeyEnrollmentOptions

`POST` `/{version}/account/userauth/passkey/enrollment-options`

**Request DTO**: `CodeMashHub2.AccountPasskeyEnrollmentOptionsRequest`
**Response**: `CodeMashHub2.AccountPasskeyCeremonyOptionsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.accountPasskeyEnrollmentOptions({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AccountPasskeyCeremonyOptionsResponse
```

[↑ Top](#endpoints)

### accountVerifyPasskeyEnrollment

`POST` `/{version}/account/userauth/passkey/verify-enrollment`

**Request DTO**: `CodeMashHub2.AccountVerifyPasskeyEnrollmentRequest`
**Response**: `CodeMashHub2.AccountPasskeyEnrollmentResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.accountVerifyPasskeyEnrollment({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AccountPasskeyEnrollmentResponse
```

[↑ Top](#endpoints)

### getLicenseDomainDnsStatus

`GET` `/{version}/account/licensing/dns-status`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetLicenseDomainDnsStatus`
**Response**: `CodeMashHub2.GetLicenseDomainDnsStatusResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getLicenseDomainDnsStatus({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetLicenseDomainDnsStatusResponse
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

### getInstallationLicenseStatus

`GET` `/{version}/account/licensing/status`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetInstallationLicenseStatus`
**Response**: `CodeMashHub2.GetInstallationLicenseStatusResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getInstallationLicenseStatus({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetInstallationLicenseStatusResponse
```

[↑ Top](#endpoints)

### getAiTools

`GET` `/{version}/account/ai/tools`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetAiToolsRequest`
**Response**: `CodeMashHub2.GetAiToolsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getAiTools({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetAiToolsResponse
```

[↑ Top](#endpoints)

### invokeAiTool

`POST` `/{version}/account/ai/tools/{ToolName}`

**Request DTO**: `CodeMashHub2.InvokeAiToolRequest`
**Response**: `CodeMashHub2.InvokeAiToolResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.invokeAiTool({
  ToolName: 'ToolName-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.InvokeAiToolResponse
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

### uploadChatAttachment

`POST` `/{version}/account/chat/attachments`

**Request DTO**: `CodeMashHub2.UploadChatAttachmentRequest`
**Response**: `CodeMashHub2.UploadChatAttachmentResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.uploadChatAttachment({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.UploadChatAttachmentResponse
```

[↑ Top](#endpoints)

### chatAvailability

`GET` `/{version}/account/chat/availability`

**Request DTO**: `CodeMashHub2.ChatAvailabilityRequest`
**Response**: `CodeMashHub2.ChatAvailabilityResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.chatAvailability({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.ChatAvailabilityResponse
```

[↑ Top](#endpoints)

### getChatMemory

`GET` `/{version}/account/chat/memory`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetChatMemoryRequest`
**Response**: `CodeMashHub2.GetChatMemoryResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getChatMemory({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetChatMemoryResponse
```

[↑ Top](#endpoints)

### forgetChatMemory

`DELETE` `/{version}/account/chat/memory/{NoteId}`

**Request DTO**: `CodeMashHub2.ForgetChatMemoryRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.forgetChatMemory({
  NoteId: 'NoteId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteChatSession

`DELETE` `/{version}/account/chat/sessions/{SessionId}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteChatSessionRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.deleteChatSession({
  SessionId: 'SessionId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### setChatSessionArchived

`PATCH` `/{version}/account/chat/sessions/{SessionId}/archive`

**Request DTO**: `CodeMashHub2.SetChatSessionArchivedRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.setChatSessionArchived({
  SessionId: 'SessionId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### setChatSessionPinned

`PATCH` `/{version}/account/chat/sessions/{SessionId}/pin`

**Request DTO**: `CodeMashHub2.SetChatSessionPinnedRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.setChatSessionPinned({
  SessionId: 'SessionId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### setChatSessionSharing

`PATCH` `/{version}/account/chat/sessions/{SessionId}/sharing`

**Request DTO**: `CodeMashHub2.SetChatSessionSharingRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.setChatSessionSharing({
  SessionId: 'SessionId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### getChatSessions

`GET` `/{version}/account/chat/sessions`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetChatSessionsRequest`
**Response**: `CodeMashHub2.GetChatSessionsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getChatSessions({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetChatSessionsResponse
```

[↑ Top](#endpoints)

### getChatSessionEntries

`GET` `/{version}/account/chat/sessions/{SessionId}/entries`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetChatSessionEntriesRequest`
**Response**: `CodeMashHub2.GetChatSessionEntriesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.getChatSessionEntries({
  SessionId: 'SessionId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetChatSessionEntriesResponse
```

[↑ Top](#endpoints)

### setChatEntryFeedback

`POST` `/{version}/account/chat/sessions/{SessionId}/entries/{EntryId}/feedback`

**Request DTO**: `CodeMashHub2.SetChatEntryFeedbackRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.setChatEntryFeedback({
  SessionId: 'SessionId-here',
  EntryId: 'EntryId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### answerChatQuestion

`POST` `/{version}/account/chat/sessions/{SessionId}/questions/{EntryId}/answer`

**Request DTO**: `CodeMashHub2.AnswerChatQuestionRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.answerChatQuestion({
  SessionId: 'SessionId-here',
  EntryId: 'EntryId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### decideChatPlan

`POST` `/{version}/account/chat/sessions/{SessionId}/plans/{EntryId}/decision`

**Request DTO**: `CodeMashHub2.DecideChatPlanRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.decideChatPlan({
  SessionId: 'SessionId-here',
  EntryId: 'EntryId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### stopChatRunStep

`POST` `/{version}/account/chat/sessions/{SessionId}/steps/{EntryId}/stop`

**Request DTO**: `CodeMashHub2.StopChatRunStepRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.stopChatRunStep({
  SessionId: 'SessionId-here',
  EntryId: 'EntryId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### chatTurn

`POST` `/{version}/account/chat/turn`

**Request DTO**: `CodeMashHub2.ChatTurnRequest`
**Response**: `CodeMashHub2.ChatTurnResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.chatTurn({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.ChatTurnResponse
```

[↑ Top](#endpoints)

### mcp

`POST` `/{version}/account/mcp`

**Request DTO**: `CodeMashHub2.McpRequest`
**Response**: `CodeMashHub2.string`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.account.mcp({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.string
```

[↑ Top](#endpoints)
