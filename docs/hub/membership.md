# Hub · Membership

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Roles, policies, and user preferences (Hub side). For user CRUD and registration see `api.membership`.

Accessed as `norbix.hub.membership` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method | Verb | Path | Scope |
| --- | --- | --- | --- |
| [`disableMembership`](#disablemembership) | `GET` | `/{version}/membership/disable` | `project` |
| [`enableMembership`](#enablemembership) | `GET` | `/{version}/membership/enable` | `project` |
| [`issueServiceUserApiKey`](#issueserviceuserapikey) | `POST` | `/{version}/membership/users/{Id}/api-keys` | `project` |
| [`listServiceUserApiKeys`](#listserviceuserapikeys) | `GET` | `/{version}/membership/users/{Id}/api-keys` | `project` |
| [`deleteServiceUserApiKey`](#deleteserviceuserapikey) | `DELETE` | `/{version}/membership/users/{Id}/api-keys/{KeyId}` | `project` |
| [`deleteMembershipTrigger`](#deletemembershiptrigger) | `DELETE` | `/{version}/membership/triggers/{triggerId}` | `project` |
| [`disableMembershipTrigger`](#disablemembershiptrigger) | `PATCH` | `/{version}/membership/triggers/{triggerId}/disable` | `project` |
| [`enableMembershipTrigger`](#enablemembershiptrigger) | `PATCH` | `/{version}/membership/triggers/{triggerId}/enable` | `project` |
| [`getMembershipTrigger`](#getmembershiptrigger) | `GET` | `/{version}/membership/triggers/{id}` | `project` |
| [`getMembershipTriggers`](#getmembershiptriggers) | `GET` | `/{version}/membership/triggers` | `project` |
| [`saveMembershipTrigger`](#savemembershiptrigger) | `POST` | `/{version}/membership/triggers` | `project` |
| [`createRole`](#createrole) | `POST` | `/{version}/membership/roles` | `project` |
| [`deleteRole`](#deleterole) | `DELETE` | `/{version}/membership/roles` | `project` |
| [`getRole`](#getrole) | `GET` | `/{version}/membership/roles/{Id}` | `project` |
| [`getRoles`](#getroles) | `GET` | `/{version}/membership/roles` | `project` |
| [`updateRolePolicies`](#updaterolepolicies) | `PATCH` | `/{version}/membership/roles` | `project` |
| [`createPolicy`](#createpolicy) | `POST` | `/{version}/membership/policies` | `project` |
| [`deletePolicy`](#deletepolicy) | `DELETE` | `/{version}/membership/policies` | `project` |
| [`getPolicy`](#getpolicy) | `GET` | `/{version}/membership/policies/{Id}` | `project` |
| [`getPolicies`](#getpolicies) | `GET` | `/{version}/membership/policies` | `project` |
| [`updatePolicy`](#updatepolicy) | `PUT` | `/{version}/membership/policies` | `project` |
| [`getPasskeySettings`](#getpasskeysettings) | `GET` | `/{version}/membership/passkey/settings` | `project` |
| [`savePasskeySettings`](#savepasskeysettings) | `POST` | `/{version}/membership/passkey/settings` | `project` |
| [`deleteMembershipIntegration`](#deletemembershipintegration) | `DELETE` | `/{version}/membership/integrations/{Id}` | `project` |
| [`disableMembershipIntegration`](#disablemembershipintegration) | `PUT` | `/{version}/membership/integrations/{Id}/disable` | `project` |
| [`enableMembershipIntegration`](#enablemembershipintegration) | `PUT` | `/{version}/membership/integrations/{Id}/enable` | `project` |
| [`getMembershipIntegration`](#getmembershipintegration) | `GET` | `/{version}/membership/integrations/{id}` | `project` |
| [`getMembershipIntegrations`](#getmembershipintegrations) | `GET` | `/{version}/membership/integrations` | `project` |
| [`saveMembershipIntegration`](#savemembershipintegration) | `POST` | `/{version}/membership/integrations` | `project` |
| [`setMembershipIntegrationAsDefault`](#setmembershipintegrationasdefault) | `PUT` | `/{version}/membership/integrations/{Id}/default` | `project` |
| [`getAuthorizationSettings`](#getauthorizationsettings) | `GET` | `/{version}/membership/authorization` | `project` |
| [`updateAuthorizationSettings`](#updateauthorizationsettings) | `PUT` | `/{version}/membership/authorization` | `project` |
| [`updatePasswordComplexity`](#updatepasswordcomplexity) | `PUT` | `/{version}/membership/authorization/password-complexity` | `project` |
| [`getAuthenticationSettings`](#getauthenticationsettings) | `GET` | `/{version}/membership/authentication` | `project` |
| [`updateAuthenticationSettings`](#updateauthenticationsettings) | `PUT` | `/{version}/membership/authentication` | `project` |
| [`createContact`](#createcontact) | `POST` | `/{version}/membership/users` | `project` |
| [`deleteContact`](#deletecontact) | `DELETE` | `/{version}/membership/users/{contactId}` | `project` |
| [`getContact`](#getcontact) | `GET` | `/{version}/membership/users/{contactId}` | `project` |
| [`getAllContacts`](#getallcontacts) | `GET` | `/{version}/membership/users` | `project` |
| [`mergeContacts`](#mergecontacts) | `POST` | `/{version}/membership/users/merge` | `project` |
| [`updateContact`](#updatecontact) | `PATCH` | `/{version}/membership/users/{contactId}` | `project` |
| [`addContactIdentity`](#addcontactidentity) | `POST` | `/{version}/membership/users/{contactId}/identities` | `project` |
| [`promoteContactIdentity`](#promotecontactidentity) | `POST` | `/{version}/membership/users/{contactId}/identities/{identityId}/promote` | `project` |
| [`removeContactIdentity`](#removecontactidentity) | `DELETE` | `/{version}/membership/users/{contactId}/identities/{identityId}` | `project` |

## Reference

### disableMembership

`GET` `/{version}/membership/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableMembership`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.disableMembership({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableMembership

`GET` `/{version}/membership/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableMembership`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.enableMembership({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### issueServiceUserApiKey

`POST` `/{version}/membership/users/{Id}/api-keys`



**Request DTO**: `CodeMashHub2.IssueServiceUserApiKeyRequest`
**Response**: `CodeMashHub2.IssueServiceUserApiKeyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.issueServiceUserApiKey({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IssueServiceUserApiKeyResponse
```

[↑ Top](#endpoints)

### listServiceUserApiKeys

`GET` `/{version}/membership/users/{Id}/api-keys`



**Request DTO**: `CodeMashHub2.ListServiceUserApiKeysRequest`
**Response**: `CodeMashHub2.ListServiceUserApiKeysResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.listServiceUserApiKeys({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.ListServiceUserApiKeysResponse
```

[↑ Top](#endpoints)

### deleteServiceUserApiKey

`DELETE` `/{version}/membership/users/{Id}/api-keys/{KeyId}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteServiceUserApiKeyRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.deleteServiceUserApiKey({
  Id: 'Id-here',
  KeyId: 'KeyId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteMembershipTrigger

`DELETE` `/{version}/membership/triggers/{triggerId}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteMembershipTrigger`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.deleteMembershipTrigger({
  triggerId: 'triggerId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### disableMembershipTrigger

`PATCH` `/{version}/membership/triggers/{triggerId}/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableMembershipTrigger`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.disableMembershipTrigger({
  triggerId: 'triggerId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableMembershipTrigger

`PATCH` `/{version}/membership/triggers/{triggerId}/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableMembershipTrigger`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.enableMembershipTrigger({
  triggerId: 'triggerId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getMembershipTrigger

`GET` `/{version}/membership/triggers/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetMembershipTrigger`
**Response**: `CodeMashHub2.GetMembershipTriggerResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.getMembershipTrigger({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetMembershipTriggerResponse
```

[↑ Top](#endpoints)

### getMembershipTriggers

`GET` `/{version}/membership/triggers`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetMembershipTriggers`
**Response**: `CodeMashHub2.GetMembershipTriggersResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.getMembershipTriggers({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetMembershipTriggersResponse
```

[↑ Top](#endpoints)

### saveMembershipTrigger

`POST` `/{version}/membership/triggers`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveMembershipTrigger`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.saveMembershipTrigger({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### createRole

`POST` `/{version}/membership/roles`

Create a new item.

**Request DTO**: `CodeMashHub2.CreateRole`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.createRole({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### deleteRole

`DELETE` `/{version}/membership/roles`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteRole`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.deleteRole({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getRole

`GET` `/{version}/membership/roles/{Id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetRole`
**Response**: `CodeMashHub2.GetRoleResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.getRole({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetRoleResponse
```

[↑ Top](#endpoints)

### getRoles

`GET` `/{version}/membership/roles`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetRoles`
**Response**: `CodeMashHub2.GetRolesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.getRoles({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetRolesResponse
```

[↑ Top](#endpoints)

### updateRolePolicies

`PATCH` `/{version}/membership/roles`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateRolePolicies`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.updateRolePolicies({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### createPolicy

`POST` `/{version}/membership/policies`

Create a new item.

**Request DTO**: `CodeMashHub2.CreatePolicy`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.createPolicy({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### deletePolicy

`DELETE` `/{version}/membership/policies`

Delete an item.

**Request DTO**: `CodeMashHub2.DeletePolicy`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.deletePolicy({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getPolicy

`GET` `/{version}/membership/policies/{Id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetPolicy`
**Response**: `CodeMashHub2.GetPolicyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.getPolicy({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetPolicyResponse
```

[↑ Top](#endpoints)

### getPolicies

`GET` `/{version}/membership/policies`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetPolicies`
**Response**: `CodeMashHub2.GetPoliciesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.getPolicies({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetPoliciesResponse
```

[↑ Top](#endpoints)

### updatePolicy

`PUT` `/{version}/membership/policies`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdatePolicy`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.updatePolicy({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### getPasskeySettings

`GET` `/{version}/membership/passkey/settings`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetPasskeySettings`
**Response**: `CodeMashHub2.GetPasskeySettingsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.getPasskeySettings({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetPasskeySettingsResponse
```

[↑ Top](#endpoints)

### savePasskeySettings

`POST` `/{version}/membership/passkey/settings`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SavePasskeySettings`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.savePasskeySettings({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteMembershipIntegration

`DELETE` `/{version}/membership/integrations/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteMembershipIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.deleteMembershipIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### disableMembershipIntegration

`PUT` `/{version}/membership/integrations/{Id}/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableMembershipIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.disableMembershipIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableMembershipIntegration

`PUT` `/{version}/membership/integrations/{Id}/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableMembershipIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.enableMembershipIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getMembershipIntegration

`GET` `/{version}/membership/integrations/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetMembershipIntegration`
**Response**: `CodeMashHub2.GetMembershipIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.getMembershipIntegration({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetMembershipIntegrationResponse
```

[↑ Top](#endpoints)

### getMembershipIntegrations

`GET` `/{version}/membership/integrations`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetMembershipIntegrations`
**Response**: `CodeMashHub2.GetMembershipIntegrationsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.getMembershipIntegrations({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetMembershipIntegrationsResponse
```

[↑ Top](#endpoints)

### saveMembershipIntegration

`POST` `/{version}/membership/integrations`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveMembershipIntegration`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.saveMembershipIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### setMembershipIntegrationAsDefault

`PUT` `/{version}/membership/integrations/{Id}/default`



**Request DTO**: `CodeMashHub2.SetMembershipIntegrationAsDefaultRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.setMembershipIntegrationAsDefault({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getAuthorizationSettings

`GET` `/{version}/membership/authorization`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetAuthorizationSettings`
**Response**: `CodeMashHub2.GetAuthorizationSettingsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.getAuthorizationSettings({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetAuthorizationSettingsResponse
```

[↑ Top](#endpoints)

### updateAuthorizationSettings

`PUT` `/{version}/membership/authorization`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateAuthorizationSettings`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.updateAuthorizationSettings({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### updatePasswordComplexity

`PUT` `/{version}/membership/authorization/password-complexity`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdatePasswordComplexity`
**Response**: `CodeMashHub2.UpdatePasswordComplexityResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.updatePasswordComplexity({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.UpdatePasswordComplexityResponse
```

[↑ Top](#endpoints)

### getAuthenticationSettings

`GET` `/{version}/membership/authentication`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetAuthenticationSettings`
**Response**: `CodeMashHub2.GetAuthenticationSettingsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.getAuthenticationSettings({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetAuthenticationSettingsResponse
```

[↑ Top](#endpoints)

### updateAuthenticationSettings

`PUT` `/{version}/membership/authentication`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateAuthenticationSettings`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.updateAuthenticationSettings({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### createContact

`POST` `/{version}/membership/users`

Create a new item.

**Request DTO**: `CodeMashHub2.CreateContactRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.createContact({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteContact

`DELETE` `/{version}/membership/users/{contactId}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteContact`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.deleteContact({
  contactId: 'contactId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getContact

`GET` `/{version}/membership/users/{contactId}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetContact`
**Response**: `CodeMashHub2.GetContactResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.getContact({
  contactId: 'contactId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetContactResponse
```

[↑ Top](#endpoints)

### getAllContacts

`GET` `/{version}/membership/users`

List all items.

**Request DTO**: `CodeMashHub2.GetAllContacts`
**Response**: `CodeMashHub2.GetAllContactsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.getAllContacts({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetAllContactsResponse
```

[↑ Top](#endpoints)

### mergeContacts

`POST` `/{version}/membership/users/merge`



**Request DTO**: `CodeMashHub2.MergeContactsRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.mergeContacts({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### updateContact

`PATCH` `/{version}/membership/users/{contactId}`

Update an existing item.

**Request DTO**: `CodeMashHub2.UpdateContactRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.updateContact({
  contactId: 'contactId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### addContactIdentity

`POST` `/{version}/membership/users/{contactId}/identities`



**Request DTO**: `CodeMashHub2.AddContactIdentityRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.addContactIdentity({
  contactId: 'contactId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### promoteContactIdentity

`POST` `/{version}/membership/users/{contactId}/identities/{identityId}/promote`



**Request DTO**: `CodeMashHub2.PromoteContactIdentityRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.promoteContactIdentity({
  contactId: 'contactId-here',
  identityId: 'identityId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### removeContactIdentity

`DELETE` `/{version}/membership/users/{contactId}/identities/{identityId}`



**Request DTO**: `CodeMashHub2.RemoveContactIdentityRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.membership.removeContactIdentity({
  contactId: 'contactId-here',
  identityId: 'identityId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)
