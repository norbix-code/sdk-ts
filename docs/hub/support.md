# Hub · Support

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.support` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                  | Verb   | Path                                         | Scope     |
| ------------------------------------------------------- | ------ | -------------------------------------------- | --------- |
| [`closeSupportCase`](#closesupportcase)                 | `POST` | `/{version}/support/cases/{CaseId}/close`    | `project` |
| [`reopenSupportCase`](#reopensupportcase)               | `POST` | `/{version}/support/cases/{CaseId}/reopen`   | `project` |
| [`resolveSupportCase`](#resolvesupportcase)             | `POST` | `/{version}/support/cases/{CaseId}/resolve`  | `project` |
| [`appendSupportCaseMessage`](#appendsupportcasemessage) | `POST` | `/{version}/support/cases/{CaseId}/messages` | `project` |
| [`getSupportCase`](#getsupportcase)                     | `GET`  | `/{version}/support/cases/{CaseId}`          | `project` |
| [`getSupportCases`](#getsupportcases)                   | `GET`  | `/{version}/support/cases`                   | `project` |
| [`openSupportCase`](#opensupportcase)                   | `POST` | `/{version}/support/cases`                   | `project` |

## Reference

### closeSupportCase

`POST` `/{version}/support/cases/{CaseId}/close`

**Request DTO**: `CodeMashHub2.CloseSupportCaseRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.support.closeSupportCase({
  CaseId: 'CaseId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### reopenSupportCase

`POST` `/{version}/support/cases/{CaseId}/reopen`

**Request DTO**: `CodeMashHub2.ReopenSupportCaseRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.support.reopenSupportCase({
  CaseId: 'CaseId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### resolveSupportCase

`POST` `/{version}/support/cases/{CaseId}/resolve`

**Request DTO**: `CodeMashHub2.ResolveSupportCaseRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.support.resolveSupportCase({
  CaseId: 'CaseId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### appendSupportCaseMessage

`POST` `/{version}/support/cases/{CaseId}/messages`

**Request DTO**: `CodeMashHub2.AppendSupportCaseMessageRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.support.appendSupportCaseMessage({
  CaseId: 'CaseId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### getSupportCase

`GET` `/{version}/support/cases/{CaseId}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetSupportCase`
**Response**: `CodeMashHub2.GetSupportCaseResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.support.getSupportCase({
  CaseId: 'CaseId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetSupportCaseResponse
```

[↑ Top](#endpoints)

### getSupportCases

`GET` `/{version}/support/cases`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetSupportCases`
**Response**: `CodeMashHub2.GetSupportCasesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.support.getSupportCases({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetSupportCasesResponse
```

[↑ Top](#endpoints)

### openSupportCase

`POST` `/{version}/support/cases`

**Request DTO**: `CodeMashHub2.OpenSupportCaseRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.support.openSupportCase({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)
