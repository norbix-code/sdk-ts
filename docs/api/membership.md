# API · Membership

[← Back to API index](./_index.md) · [↑ Back to project README](../../README.md)

Roles, policies, and user preferences (Hub side). For user CRUD and registration see `api.membership`.

Accessed as `norbix.api.membership` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method | Verb | Path | Scope |
| --- | --- | --- | --- |
| [`blockUser`](#blockuser) | `PATCH` | `/{version}/membership/users/block` | `project` |
| [`saveSystemUserWithPermissions`](#savesystemuserwithpermissions) | `POST` | `/{version}/membership/users/register/service` | `project` |
| [`saveGuestUser`](#saveguestuser) | `POST` | `/{version}/membership/users/register/guest` | `project` |
| [`saveUserNameUser`](#saveusernameuser) | `POST` | `/{version}/membership/users/register/user-name` | `project` |
| [`saveEmailUser`](#saveemailuser) | `POST` | `/{version}/membership/users/register/email` | `project` |
| [`savePhoneUser`](#savephoneuser) | `POST` | `/{version}/membership/users/register/phone` | `project` |
| [`savePhoneUserNameWithPermissions`](#savephoneusernamewithpermissions) | `POST` | `/{version}/membership/users/register/phone-with-permissions` | `project` |
| [`saveEmailUserNameWithPermissions`](#saveemailusernamewithpermissions) | `POST` | `/{version}/membership/users/register/email-with-permissions` | `project` |
| [`saveUserNameWithPermissions`](#saveusernamewithpermissions) | `POST` | `/{version}/membership/users/register/user-name-with-permissions` | `project` |
| [`deleteUser`](#deleteuser) | `DELETE` | `/{version}/membership/users` | `project` |
| [`getUser`](#getuser) | `GET` | `/{version}/membership/users/{id}` | `project` |
| [`getUsers`](#getusers) | `GET` | `/{version}/membership/users` | `project` |
| [`getUserPreferences`](#getuserpreferences) | `GET` | `/{version}/membership/users/{id}/preferences` | `project` |
| [`inviteUser`](#inviteuser) | `POST` | `/{version}/membership/users/invite` | `project` |
| [`assignRolePermissions`](#assignrolepermissions) | `PUT` | `/{version}/membership/users/assign-roles` | `project` |
| [`unblockUser`](#unblockuser) | `PATCH` | `/{version}/membership/users/unblock` | `project` |
| [`updateUser`](#updateuser) | `PUT` | `/{version}/membership/users` | `project` |
| [`updateUserPreferences`](#updateuserpreferences) | `PUT` | `/{version}/membership/users/{id}/preferences` | `project` |

## Reference

### blockUser

`PATCH` `/{version}/membership/users/block`

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

`POST` `/{version}/membership/users/register/service`

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

`POST` `/{version}/membership/users/register/guest`

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

`POST` `/{version}/membership/users/register/user-name`

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

`POST` `/{version}/membership/users/register/email`

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

`POST` `/{version}/membership/users/register/phone`

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

`POST` `/{version}/membership/users/register/phone-with-permissions`

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

`POST` `/{version}/membership/users/register/email-with-permissions`

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

`POST` `/{version}/membership/users/register/user-name-with-permissions`

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

`DELETE` `/{version}/membership/users`

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

`GET` `/{version}/membership/users/{id}`

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

`GET` `/{version}/membership/users`

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

`GET` `/{version}/membership/users/{id}/preferences`

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

### inviteUser

`POST` `/{version}/membership/users/invite`



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

### assignRolePermissions

`PUT` `/{version}/membership/users/assign-roles`

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

### unblockUser

`PATCH` `/{version}/membership/users/unblock`

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

### updateUser

`PUT` `/{version}/membership/users`

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

`PUT` `/{version}/membership/users/{id}/preferences`

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
