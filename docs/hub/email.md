# Hub · Email

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.email` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                    | Verb   | Path                                     | Scope      |
| --------------------------------------------------------- | ------ | ---------------------------------------- | ---------- |
| [`getEmailPreferencesByLink`](#getemailpreferencesbylink) | `GET`  | `/{version}/email/preferences`           | `optional` |
| [`oneClickUnsubscribe`](#oneclickunsubscribe)             | `POST` | `/{version}/email/one-click-unsubscribe` | `project`  |

## Reference

### getEmailPreferencesByLink

`GET` `/{version}/email/preferences`

Reads the marketing e-mail preferences of the person a signed unsubscribe link
belongs to. Pass the `token` from the e-mail's Preferences or Unsubscribe link.
No sign-in is needed — the signed token is the key — so the call works on a
client with no `apiKey` / `bearerToken` (scope `optional`: a token is sent only
when the client has one).

**Request DTO**: `CodeMashHub2.GetEmailPreferencesByLinkRequest`
**Response**: `CodeMashHub2.GetEmailPreferencesByLinkResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.email.getEmailPreferencesByLink({
  token: 'token-from-the-link',
});
// result.item → { emailAddress, unsubscribedFromMarketing, blockReasons }
```

[↑ Top](#endpoints)

### oneClickUnsubscribe

`POST` `/{version}/email/one-click-unsubscribe`

**Request DTO**: `CodeMashHub2.OneClickUnsubscribeRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.email.oneClickUnsubscribe({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)
