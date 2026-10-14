# Hub · Email

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.email` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                    | Verb   | Path                                     | Scope     |
| --------------------------------------------------------- | ------ | ---------------------------------------- | --------- |
| [`oneClickUnsubscribe`](#oneclickunsubscribe)             | `POST` | `/{version}/email/one-click-unsubscribe` | `project` |
| [`getEmailPreferencesByLink`](#getemailpreferencesbylink) | `GET`  | `/{version}/email/preferences`           | `project` |

## Reference

### oneClickUnsubscribe

`POST` `/{version}/email/one-click-unsubscribe`

**Request DTO**: `CodeMashHub2.OneClickUnsubscribeRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.email.oneClickUnsubscribe({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getEmailPreferencesByLink

`GET` `/{version}/email/preferences`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetEmailPreferencesByLinkRequest`
**Response**: `CodeMashHub2.GetEmailPreferencesByLinkResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.email.getEmailPreferencesByLink({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetEmailPreferencesByLinkResponse
```

[↑ Top](#endpoints)
