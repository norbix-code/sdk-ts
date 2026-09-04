# Hub · Compliance

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.compliance` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                | Verb     | Path                                             | Scope     |
| ----------------------------------------------------- | -------- | ------------------------------------------------ | --------- |
| [`getComplianceSettings`](#getcompliancesettings)     | `GET`    | `/{version}/compliance/settings`                 | `project` |
| [`removeRetentionWindow`](#removeretentionwindow)     | `DELETE` | `/{version}/compliance/retention`                | `project` |
| [`saveRetentionWindow`](#saveretentionwindow)         | `POST`   | `/{version}/compliance/retention`                | `project` |
| [`assignRegime`](#assignregime)                       | `POST`   | `/{version}/compliance/regimes`                  | `project` |
| [`clearRegime`](#clearregime)                         | `DELETE` | `/{version}/compliance/regimes`                  | `project` |
| [`defineConsentPurpose`](#defineconsentpurpose)       | `POST`   | `/{version}/compliance/purposes`                 | `project` |
| [`deprecateConsentPurpose`](#deprecateconsentpurpose) | `POST`   | `/{version}/compliance/purposes/deprecate`       | `project` |
| [`getLegalHolds`](#getlegalholds)                     | `GET`    | `/{version}/compliance/holds`                    | `project` |
| [`placeLegalHold`](#placelegalhold)                   | `POST`   | `/{version}/compliance/holds`                    | `project` |
| [`releaseLegalHold`](#releaselegalhold)               | `POST`   | `/{version}/compliance/holds/release`            | `project` |
| [`approveDsarRequest`](#approvedsarrequest)           | `POST`   | `/{version}/compliance/dsar/approve`             | `project` |
| [`rejectDsarRequest`](#rejectdsarrequest)             | `POST`   | `/{version}/compliance/dsar/reject`              | `project` |
| [`getDsarRequests`](#getdsarrequests)                 | `GET`    | `/{version}/compliance/dsar`                     | `project` |
| [`openDsarRequest`](#opendsarrequest)                 | `POST`   | `/{version}/compliance/dsar`                     | `project` |
| [`getComplianceAuditLog`](#getcomplianceauditlog)     | `GET`    | `/{version}/compliance/audit`                    | `project` |
| [`getAccountCompliance`](#getaccountcompliance)       | `GET`    | `/{version}/compliance/account`                  | `project` |
| [`saveDsarPolicy`](#savedsarpolicy)                   | `POST`   | `/{version}/compliance/account/dsar-policy`      | `project` |
| [`saveIncidentRouting`](#saveincidentrouting)         | `POST`   | `/{version}/compliance/account/incident-routing` | `project` |

## Reference

### getComplianceSettings

`GET` `/{version}/compliance/settings`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetComplianceSettings`
**Response**: `CodeMashHub2.GetComplianceSettingsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.compliance.getComplianceSettings({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetComplianceSettingsResponse
```

[↑ Top](#endpoints)

### removeRetentionWindow

`DELETE` `/{version}/compliance/retention`

**Request DTO**: `CodeMashHub2.RemoveRetentionWindowRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.compliance.removeRetentionWindow({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### saveRetentionWindow

`POST` `/{version}/compliance/retention`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveRetentionWindowRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.compliance.saveRetentionWindow({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### assignRegime

`POST` `/{version}/compliance/regimes`

Assign the resource to another entity.

**Request DTO**: `CodeMashHub2.AssignRegimeRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.compliance.assignRegime({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### clearRegime

`DELETE` `/{version}/compliance/regimes`

**Request DTO**: `CodeMashHub2.ClearRegimeRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.compliance.clearRegime({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### defineConsentPurpose

`POST` `/{version}/compliance/purposes`

**Request DTO**: `CodeMashHub2.DefineConsentPurposeRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.compliance.defineConsentPurpose({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deprecateConsentPurpose

`POST` `/{version}/compliance/purposes/deprecate`

**Request DTO**: `CodeMashHub2.DeprecateConsentPurposeRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.compliance.deprecateConsentPurpose({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getLegalHolds

`GET` `/{version}/compliance/holds`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetLegalHolds`
**Response**: `CodeMashHub2.GetLegalHoldsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.compliance.getLegalHolds({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetLegalHoldsResponse
```

[↑ Top](#endpoints)

### placeLegalHold

`POST` `/{version}/compliance/holds`

**Request DTO**: `CodeMashHub2.PlaceLegalHoldRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.compliance.placeLegalHold({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### releaseLegalHold

`POST` `/{version}/compliance/holds/release`

**Request DTO**: `CodeMashHub2.ReleaseLegalHoldRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.compliance.releaseLegalHold({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### approveDsarRequest

`POST` `/{version}/compliance/dsar/approve`

**Request DTO**: `CodeMashHub2.ApproveDsarRequestRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.compliance.approveDsarRequest({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### rejectDsarRequest

`POST` `/{version}/compliance/dsar/reject`

**Request DTO**: `CodeMashHub2.RejectDsarRequestRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.compliance.rejectDsarRequest({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getDsarRequests

`GET` `/{version}/compliance/dsar`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetDsarRequests`
**Response**: `CodeMashHub2.GetDsarRequestsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.compliance.getDsarRequests({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetDsarRequestsResponse
```

[↑ Top](#endpoints)

### openDsarRequest

`POST` `/{version}/compliance/dsar`

**Request DTO**: `CodeMashHub2.OpenDsarRequestRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.compliance.openDsarRequest({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getComplianceAuditLog

`GET` `/{version}/compliance/audit`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetComplianceAuditLog`
**Response**: `CodeMashHub2.GetComplianceAuditLogResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.compliance.getComplianceAuditLog({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetComplianceAuditLogResponse
```

[↑ Top](#endpoints)

### getAccountCompliance

`GET` `/{version}/compliance/account`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetAccountCompliance`
**Response**: `CodeMashHub2.GetAccountComplianceResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.compliance.getAccountCompliance({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetAccountComplianceResponse
```

[↑ Top](#endpoints)

### saveDsarPolicy

`POST` `/{version}/compliance/account/dsar-policy`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveDsarPolicyRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.compliance.saveDsarPolicy({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### saveIncidentRouting

`POST` `/{version}/compliance/account/incident-routing`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveIncidentRoutingRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.compliance.saveIncidentRouting({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)
