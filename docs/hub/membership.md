# Hub · Membership

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Roles, policies, and user preferences (Hub side). For user CRUD and registration see `api.membership`.

Accessed as `norbix.hub.membership` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method | Verb | Path | Scope |
| --- | --- | --- | --- |
| [`disableMembership`](#disablemembership) | `GET` | `/{version}/membership/disable` | `project` |
| [`enableMembership`](#enablemembership) | `GET` | `/{version}/membership/enable` | `project` |
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
| [`deleteMembershipIntegration`](#deletemembershipintegration) | `DELETE` | `/{version}/membership/integrations/{Id}` | `project` |
| [`disableMembershipIntegration`](#disablemembershipintegration) | `PUT` | `/{version}/membership/integrations/{Id}/disable` | `project` |
| [`enableMembershipIntegration`](#enablemembershipintegration) | `PUT` | `/{version}/membership/integrations/{Id}/enable` | `project` |
| [`getMembershipIntegration`](#getmembershipintegration) | `GET` | `/{version}/membership/integrations/{id}` | `project` |
| [`getMembershipIntegrations`](#getmembershipintegrations) | `GET` | `/{version}/membership/integrations` | `project` |
| [`saveMembershipIntegration`](#savemembershipintegration) | `POST` | `/{version}/membership/integrations` | `project` |
| [`setMembershipIntegrationAsDefault`](#setmembershipintegrationasdefault) | `PUT` | `/{version}/membership/integrations/{Id}/default` | `project` |

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
