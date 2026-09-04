# Hub · Licensing

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.licensing` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                                      | Verb   | Path                                              | Scope     |
| --------------------------------------------------------------------------- | ------ | ------------------------------------------------- | --------- |
| [`startLicenseDomainVerification`](#startlicensedomainverification)         | `POST` | `/{version}/licensing/domain-verification/start`  | `project` |
| [`getLicenseDomainVerificationStatus`](#getlicensedomainverificationstatus) | `GET`  | `/{version}/licensing/domain-verification/status` | `project` |
| [`postLicenseHeartbeat`](#postlicenseheartbeat)                             | `POST` | `/{version}/licensing/heartbeat`                  | `project` |

## Reference

### startLicenseDomainVerification

`POST` `/{version}/licensing/domain-verification/start`

**Request DTO**: `CodeMashHub2.StartLicenseDomainVerificationRequest`
**Response**: `CodeMashHub2.StartLicenseDomainVerificationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.licensing.startLicenseDomainVerification({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.StartLicenseDomainVerificationResponse
```

[↑ Top](#endpoints)

### getLicenseDomainVerificationStatus

`GET` `/{version}/licensing/domain-verification/status`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetLicenseDomainVerificationStatus`
**Response**: `CodeMashHub2.GetLicenseDomainVerificationStatusResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.licensing.getLicenseDomainVerificationStatus({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetLicenseDomainVerificationStatusResponse
```

[↑ Top](#endpoints)

### postLicenseHeartbeat

`POST` `/{version}/licensing/heartbeat`

**Request DTO**: `CodeMashHub2.PostLicenseHeartbeat`
**Response**: `CodeMashHub2.PostLicenseHeartbeatResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.licensing.postLicenseHeartbeat({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.PostLicenseHeartbeatResponse
```

[↑ Top](#endpoints)
