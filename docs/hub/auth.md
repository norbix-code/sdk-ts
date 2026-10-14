# Hub · Auth

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Sign-in / sign-out and federated provider flows. Most apps prefer `norbix.login(...)` over calling these directly.

Accessed as `norbix.hub.auth` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                    | Verb   | Path                             | Scope     |
| --------------------------------------------------------- | ------ | -------------------------------- | --------- |
| [`authDeviceStart`](#authdevicestart)                     | `POST` | `/{version}/auth/device/start`   | `project` |
| [`authDeviceToken`](#authdevicetoken)                     | `POST` | `/{version}/auth/device/token`   | `project` |
| [`authDeviceConsent`](#authdeviceconsent)                 | `GET`  | `/{version}/auth/device/consent` | `project` |
| [`authDeviceConsentDecision`](#authdeviceconsentdecision) | `POST` | `/{version}/auth/device/consent` | `project` |
| [`authenticate`](#authenticate)                           | `POST` | `/v3/auth`                       | `project` |

## Reference

### authDeviceStart

`POST` `/{version}/auth/device/start`

**Request DTO**: `CodeMashHub2.AuthDeviceStartRequest`
**Response**: `CodeMashHub2.AuthDeviceStartResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.auth.authDeviceStart({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AuthDeviceStartResponse
```

[↑ Top](#endpoints)

### authDeviceToken

`POST` `/{version}/auth/device/token`

**Request DTO**: `CodeMashHub2.AuthDeviceTokenRequest`
**Response**: `CodeMashHub2.AuthDeviceTokenResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.auth.authDeviceToken({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AuthDeviceTokenResponse
```

[↑ Top](#endpoints)

### authDeviceConsent

`GET` `/{version}/auth/device/consent`

**Request DTO**: `CodeMashHub2.AuthDeviceConsentRequest`
**Response**: `CodeMashHub2.AuthDeviceConsentResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.auth.authDeviceConsent({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AuthDeviceConsentResponse
```

[↑ Top](#endpoints)

### authDeviceConsentDecision

`POST` `/{version}/auth/device/consent`

**Request DTO**: `CodeMashHub2.AuthDeviceConsentDecisionRequest`
**Response**: `CodeMashHub2.AuthDeviceConsentDecisionResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.auth.authDeviceConsentDecision({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AuthDeviceConsentDecisionResponse
```

[↑ Top](#endpoints)

### authenticate

`POST` `/v3/auth`

Authenticate the user. The SDK exposes `norbix.login(...)` as a higher-level helper.

**Request DTO**: `CodeMashHub2.Authenticate`
**Response**: `CodeMashHub2.AuthenticateResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.auth.authenticate({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.AuthenticateResponse
```

[↑ Top](#endpoints)
