# API · Membership

[← Back to API index](./_index.md) · [↑ Back to project README](../../README.md)

Roles, policies, and user preferences (Hub side). For user CRUD and registration see `api.membership`.

Accessed as `norbix.api.membership` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method | Verb | Path | Scope |
| --- | --- | --- | --- |
| [`blockUser`](#blockuser) | `PATCH` | `/{version}/membership/auth/block` | `project` |
| [`saveSystemUserWithPermissions`](#savesystemuserwithpermissions) | `POST` | `/{version}/membership/auth/register/service` | `project` |
| [`saveGuestUser`](#saveguestuser) | `POST` | `/{version}/membership/auth/register/guest` | `project` |
| [`saveUserNameUser`](#saveusernameuser) | `POST` | `/{version}/membership/auth/register/user-name` | `project` |
| [`saveEmailUser`](#saveemailuser) | `POST` | `/{version}/membership/auth/register/email` | `project` |
| [`savePhoneUser`](#savephoneuser) | `POST` | `/{version}/membership/auth/register/phone` | `project` |
| [`savePhoneUserNameWithPermissions`](#savephoneusernamewithpermissions) | `POST` | `/{version}/membership/auth/register/phone-with-permissions` | `project` |
| [`saveEmailUserNameWithPermissions`](#saveemailusernamewithpermissions) | `POST` | `/{version}/membership/auth/register/email-with-permissions` | `project` |
| [`saveUserNameWithPermissions`](#saveusernamewithpermissions) | `POST` | `/{version}/membership/auth/register/user-name-with-permissions` | `project` |
| [`deleteUser`](#deleteuser) | `DELETE` | `/{version}/membership/auth` | `project` |
| [`getUser`](#getuser) | `GET` | `/{version}/membership/auth/{id}` | `project` |
| [`getUsers`](#getusers) | `GET` | `/{version}/membership/auth` | `project` |
| [`getUserPreferences`](#getuserpreferences) | `GET` | `/{version}/membership/auth/{id}/preferences` | `project` |
| [`grantContactConsent`](#grantcontactconsent) | `POST` | `/{version}/membership/users/{contactId}/marketing-state/{channel}/consent` | `project` |
| [`inviteUser`](#inviteuser) | `POST` | `/{version}/membership/auth/invite` | `project` |
| [`linkIdentity`](#linkidentity) | `POST` | `/{version}/membership/auth/{userId}/link-identity` | `project` |
| [`mapAuthToUser`](#mapauthtouser) | `POST` | `/{version}/membership/users/{userId}/map-auth` | `project` |
| [`assignRolePermissions`](#assignrolepermissions) | `PUT` | `/{version}/membership/auth/assign-roles` | `project` |
| [`setContactTagSubscription`](#setcontacttagsubscription) | `PUT` | `/{version}/membership/users/{contactId}/marketing-state/{commChannel}/{channel}/tags/{tag}` | `project` |
| [`unblockUser`](#unblockuser) | `PATCH` | `/{version}/membership/auth/unblock` | `project` |
| [`unsubscribeContact`](#unsubscribecontact) | `POST` | `/{version}/membership/users/{contactId}/marketing-state/{channel}/unsubscribe` | `project` |
| [`updateUser`](#updateuser) | `PUT` | `/{version}/membership/auth` | `project` |
| [`updateUserPreferences`](#updateuserpreferences) | `PUT` | `/{version}/membership/auth/{id}/preferences` | `project` |
| [`passkeyAuthenticationOptions`](#passkeyauthenticationoptions) | `POST` | `/{version}/membership/userauth/passkey/authentication-options` | `project` |
| [`verifyPasskeyAuthentication`](#verifypasskeyauthentication) | `POST` | `/{version}/membership/userauth/passkey/verify-authentication` | `project` |
| [`listPasskeys`](#listpasskeys) | `GET` | `/{version}/membership/userauth/passkeys` | `project` |
| [`renamePasskey`](#renamepasskey) | `POST` | `/{version}/membership/userauth/passkeys/{CredentialId}/rename` | `project` |
| [`revokePasskey`](#revokepasskey) | `POST` | `/{version}/membership/userauth/passkeys/{CredentialId}/revoke` | `project` |
| [`useRecoveryCode`](#userecoverycode) | `POST` | `/{version}/membership/userauth/recovery/use-code` | `project` |
| [`requestMagicLink`](#requestmagiclink) | `POST` | `/{version}/membership/userauth/recovery/magic-link/request` | `project` |
| [`consumeMagicLink`](#consumemagiclink) | `POST` | `/{version}/membership/userauth/recovery/magic-link/consume` | `project` |
| [`hasPasskey`](#haspasskey) | `POST` | `/{version}/membership/userauth/has-passkey` | `project` |
| [`startEmailVerification`](#startemailverification) | `POST` | `/{version}/membership/userauth/email/start-verification` | `project` |
| [`confirmEmailVerification`](#confirmemailverification) | `POST` | `/{version}/membership/userauth/email/confirm-verification` | `project` |
| [`passkeyRegistrationOptions`](#passkeyregistrationoptions) | `POST` | `/{version}/membership/userauth/passkey/registration-options` | `project` |
| [`verifyPasskeyRegistration`](#verifypasskeyregistration) | `POST` | `/{version}/membership/userauth/passkey/verify-registration` | `project` |
| [`refreshPasskeyToken`](#refreshpasskeytoken) | `POST` | `/{version}/membership/userauth/token/refresh` | `project` |
| [`passkeyLogout`](#passkeylogout) | `POST` | `/{version}/membership/userauth/logout` | `project` |
| [`changePassword`](#changepassword) | `POST` | `/{version}/membership/userauth/password/change` | `project` |
| [`requestPasswordReset`](#requestpasswordreset) | `POST` | `/{version}/membership/userauth/password/reset/request` | `project` |
| [`confirmPasswordReset`](#confirmpasswordreset) | `POST` | `/{version}/membership/userauth/password/reset/confirm` | `project` |

## Reference

### blockUser

`PATCH` `/{version}/membership/auth/block`

Block the resource.

**Request DTO**: `CodeMashApi2.BlockUserRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.blockUser({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### saveSystemUserWithPermissions

`POST` `/{version}/membership/auth/register/service`

Upsert an item (create or update).

**Request DTO**: `CodeMashApi2.SaveSystemUserWithPermissions`
**Response**: `CodeMashApi2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.saveSystemUserWithPermissions({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.IdResponse
```

[↑ Top](#endpoints)

### saveGuestUser

`POST` `/{version}/membership/auth/register/guest`

Upsert an item (create or update).

**Request DTO**: `CodeMashApi2.SaveGuestUser`
**Response**: `CodeMashApi2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.saveGuestUser({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.IdResponse
```

[↑ Top](#endpoints)

### saveUserNameUser

`POST` `/{version}/membership/auth/register/user-name`

Upsert an item (create or update).

**Request DTO**: `CodeMashApi2.SaveUserNameUser`
**Response**: `CodeMashApi2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.saveUserNameUser({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.IdResponse
```

[↑ Top](#endpoints)

### saveEmailUser

`POST` `/{version}/membership/auth/register/email`

Upsert an item (create or update).

**Request DTO**: `CodeMashApi2.SaveEmailUser`
**Response**: `CodeMashApi2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.saveEmailUser({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.IdResponse
```

[↑ Top](#endpoints)

### savePhoneUser

`POST` `/{version}/membership/auth/register/phone`

Upsert an item (create or update).

**Request DTO**: `CodeMashApi2.SavePhoneUser`
**Response**: `CodeMashApi2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.savePhoneUser({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.IdResponse
```

[↑ Top](#endpoints)

### savePhoneUserNameWithPermissions

`POST` `/{version}/membership/auth/register/phone-with-permissions`

Upsert an item (create or update).

**Request DTO**: `CodeMashApi2.SavePhoneUserNameWithPermissions`
**Response**: `CodeMashApi2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.savePhoneUserNameWithPermissions({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.IdResponse
```

[↑ Top](#endpoints)

### saveEmailUserNameWithPermissions

`POST` `/{version}/membership/auth/register/email-with-permissions`

Upsert an item (create or update).

**Request DTO**: `CodeMashApi2.SaveEmailUserNameWithPermissions`
**Response**: `CodeMashApi2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.saveEmailUserNameWithPermissions({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.IdResponse
```

[↑ Top](#endpoints)

### saveUserNameWithPermissions

`POST` `/{version}/membership/auth/register/user-name-with-permissions`

Upsert an item (create or update).

**Request DTO**: `CodeMashApi2.SaveUserNameWithPermissions`
**Response**: `CodeMashApi2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.saveUserNameWithPermissions({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.IdResponse
```

[↑ Top](#endpoints)

### deleteUser

`DELETE` `/{version}/membership/auth`

Delete an item.

**Request DTO**: `CodeMashApi2.DeleteUserRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.deleteUser({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### getUser

`GET` `/{version}/membership/auth/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetUserRequest`
**Response**: `CodeMashApi2.GetUserResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.getUser({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetUserResponse
```

[↑ Top](#endpoints)

### getUsers

`GET` `/{version}/membership/auth`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetUsersRequest`
**Response**: `CodeMashApi2.GetUsersResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.getUsers({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetUsersResponse
```

[↑ Top](#endpoints)

### getUserPreferences

`GET` `/{version}/membership/auth/{id}/preferences`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetUserPreferencesRequest`
**Response**: `CodeMashApi2.GetUserPreferencesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.getUserPreferences({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetUserPreferencesResponse
```

[↑ Top](#endpoints)

### grantContactConsent

`POST` `/{version}/membership/users/{contactId}/marketing-state/{channel}/consent`



**Request DTO**: `CodeMashApi2.GrantContactConsentRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.grantContactConsent({
  contactId: 'contactId-here',
  channel: 'channel-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### inviteUser

`POST` `/{version}/membership/auth/invite`



**Request DTO**: `CodeMashApi2.InviteUserRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.inviteUser({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### linkIdentity

`POST` `/{version}/membership/auth/{userId}/link-identity`



**Request DTO**: `CodeMashApi2.LinkIdentityRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.linkIdentity({
  userId: 'userId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### mapAuthToUser

`POST` `/{version}/membership/users/{userId}/map-auth`



**Request DTO**: `CodeMashApi2.MapAuthToUserRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.mapAuthToUser({
  userId: 'userId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### assignRolePermissions

`PUT` `/{version}/membership/auth/assign-roles`

Assign the resource to another entity.

**Request DTO**: `CodeMashApi2.AssignRolePermissionsRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.assignRolePermissions({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### setContactTagSubscription

`PUT` `/{version}/membership/users/{contactId}/marketing-state/{commChannel}/{channel}/tags/{tag}`



**Request DTO**: `CodeMashApi2.SetContactTagSubscriptionRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.setContactTagSubscription({
  contactId: 'contactId-here',
  commChannel: 'commChannel-here',
  channel: 'channel-here',
  tag: 'tag-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### unblockUser

`PATCH` `/{version}/membership/auth/unblock`

Unblock the resource.

**Request DTO**: `CodeMashApi2.UnblockUserRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.unblockUser({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### unsubscribeContact

`POST` `/{version}/membership/users/{contactId}/marketing-state/{channel}/unsubscribe`



**Request DTO**: `CodeMashApi2.UnsubscribeContactRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.unsubscribeContact({
  contactId: 'contactId-here',
  channel: 'channel-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### updateUser

`PUT` `/{version}/membership/auth`

Update an existing item.

**Request DTO**: `CodeMashApi2.UpdateUserRequest`
**Response**: `CodeMashApi2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.updateUser({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.IdResponse
```

[↑ Top](#endpoints)

### updateUserPreferences

`PUT` `/{version}/membership/auth/{id}/preferences`

Update an existing item.

**Request DTO**: `CodeMashApi2.UpdateUserPreferencesRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.updateUserPreferences({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### passkeyAuthenticationOptions

`POST` `/{version}/membership/userauth/passkey/authentication-options`



**Request DTO**: `CodeMashApi2.PasskeyAuthenticationOptionsRequest`
**Response**: `CodeMashApi2.PasskeyCeremonyOptionsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.passkeyAuthenticationOptions({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PasskeyCeremonyOptionsResponse
```

[↑ Top](#endpoints)

### verifyPasskeyAuthentication

`POST` `/{version}/membership/userauth/passkey/verify-authentication`

Verify / confirm the resource.

**Request DTO**: `CodeMashApi2.VerifyPasskeyAuthenticationRequest`
**Response**: `CodeMashApi2.PasskeyAuthTokensResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.verifyPasskeyAuthentication({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PasskeyAuthTokensResponse
```

[↑ Top](#endpoints)

### listPasskeys

`GET` `/{version}/membership/userauth/passkeys`



**Request DTO**: `CodeMashApi2.ListPasskeysRequest`
**Response**: `CodeMashApi2.PasskeyListResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.listPasskeys({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PasskeyListResponse
```

[↑ Top](#endpoints)

### renamePasskey

`POST` `/{version}/membership/userauth/passkeys/{CredentialId}/rename`



**Request DTO**: `CodeMashApi2.RenamePasskeyRequest`
**Response**: `CodeMashApi2.PasskeyOkResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.renamePasskey({
  CredentialId: 'CredentialId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PasskeyOkResponse
```

[↑ Top](#endpoints)

### revokePasskey

`POST` `/{version}/membership/userauth/passkeys/{CredentialId}/revoke`



**Request DTO**: `CodeMashApi2.RevokePasskeyRequest`
**Response**: `CodeMashApi2.PasskeyOkResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.revokePasskey({
  CredentialId: 'CredentialId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PasskeyOkResponse
```

[↑ Top](#endpoints)

### useRecoveryCode

`POST` `/{version}/membership/userauth/recovery/use-code`



**Request DTO**: `CodeMashApi2.UseRecoveryCodeRequest`
**Response**: `CodeMashApi2.PasskeyRecoveryResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.useRecoveryCode({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PasskeyRecoveryResponse
```

[↑ Top](#endpoints)

### requestMagicLink

`POST` `/{version}/membership/userauth/recovery/magic-link/request`



**Request DTO**: `CodeMashApi2.RequestMagicLinkRequest`
**Response**: `CodeMashApi2.PasskeyOkResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.requestMagicLink({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PasskeyOkResponse
```

[↑ Top](#endpoints)

### consumeMagicLink

`POST` `/{version}/membership/userauth/recovery/magic-link/consume`



**Request DTO**: `CodeMashApi2.ConsumeMagicLinkRequest`
**Response**: `CodeMashApi2.PasskeyRecoveryResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.consumeMagicLink({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PasskeyRecoveryResponse
```

[↑ Top](#endpoints)

### hasPasskey

`POST` `/{version}/membership/userauth/has-passkey`



**Request DTO**: `CodeMashApi2.HasPasskeyRequest`
**Response**: `CodeMashApi2.PasskeyOkResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.hasPasskey({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PasskeyOkResponse
```

[↑ Top](#endpoints)

### startEmailVerification

`POST` `/{version}/membership/userauth/email/start-verification`



**Request DTO**: `CodeMashApi2.StartEmailVerificationRequest`
**Response**: `CodeMashApi2.PasskeyOkResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.startEmailVerification({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PasskeyOkResponse
```

[↑ Top](#endpoints)

### confirmEmailVerification

`POST` `/{version}/membership/userauth/email/confirm-verification`



**Request DTO**: `CodeMashApi2.ConfirmEmailVerificationRequest`
**Response**: `CodeMashApi2.PasskeyVerificationTokenResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.confirmEmailVerification({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PasskeyVerificationTokenResponse
```

[↑ Top](#endpoints)

### passkeyRegistrationOptions

`POST` `/{version}/membership/userauth/passkey/registration-options`



**Request DTO**: `CodeMashApi2.PasskeyRegistrationOptionsRequest`
**Response**: `CodeMashApi2.PasskeyCeremonyOptionsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.passkeyRegistrationOptions({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PasskeyCeremonyOptionsResponse
```

[↑ Top](#endpoints)

### verifyPasskeyRegistration

`POST` `/{version}/membership/userauth/passkey/verify-registration`

Verify / confirm the resource.

**Request DTO**: `CodeMashApi2.VerifyPasskeyRegistrationRequest`
**Response**: `CodeMashApi2.PasskeyAuthTokensResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.verifyPasskeyRegistration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PasskeyAuthTokensResponse
```

[↑ Top](#endpoints)

### refreshPasskeyToken

`POST` `/{version}/membership/userauth/token/refresh`



**Request DTO**: `CodeMashApi2.RefreshPasskeyTokenRequest`
**Response**: `CodeMashApi2.PasskeyAuthTokensResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.refreshPasskeyToken({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PasskeyAuthTokensResponse
```

[↑ Top](#endpoints)

### passkeyLogout

`POST` `/{version}/membership/userauth/logout`



**Request DTO**: `CodeMashApi2.PasskeyLogoutRequest`
**Response**: `CodeMashApi2.PasskeyOkResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.passkeyLogout({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PasskeyOkResponse
```

[↑ Top](#endpoints)

### changePassword

`POST` `/{version}/membership/userauth/password/change`



**Request DTO**: `CodeMashApi2.ChangePasswordRequest`
**Response**: `CodeMashApi2.PasskeyOkResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.changePassword({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PasskeyOkResponse
```

[↑ Top](#endpoints)

### requestPasswordReset

`POST` `/{version}/membership/userauth/password/reset/request`



**Request DTO**: `CodeMashApi2.RequestPasswordResetRequest`
**Response**: `CodeMashApi2.PasskeyOkResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.requestPasswordReset({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PasskeyOkResponse
```

[↑ Top](#endpoints)

### confirmPasswordReset

`POST` `/{version}/membership/userauth/password/reset/confirm`



**Request DTO**: `CodeMashApi2.ConfirmPasswordResetRequest`
**Response**: `CodeMashApi2.PasskeyOkResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.membership.confirmPasswordReset({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PasskeyOkResponse
```

[↑ Top](#endpoints)
