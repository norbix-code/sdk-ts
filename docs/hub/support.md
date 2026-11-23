# Hub · Support

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.support` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                            | Verb     | Path                                                                    | Scope     |
| ----------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- | --------- |
| [`closeSupportCase`](#closesupportcase)                           | `POST`   | `/{version}/support/cases/{CaseId}/close`                               | `project` |
| [`reopenSupportCase`](#reopensupportcase)                         | `POST`   | `/{version}/support/cases/{CaseId}/reopen`                              | `project` |
| [`resolveSupportCase`](#resolvesupportcase)                       | `POST`   | `/{version}/support/cases/{CaseId}/resolve`                             | `project` |
| [`appendSupportCaseMessage`](#appendsupportcasemessage)           | `POST`   | `/{version}/support/cases/{CaseId}/messages`                            | `project` |
| [`getSupportCase`](#getsupportcase)                               | `GET`    | `/{version}/support/cases/{CaseId}`                                     | `project` |
| [`getSupportCases`](#getsupportcases)                             | `GET`    | `/{version}/support/cases`                                              | `project` |
| [`openSupportCase`](#opensupportcase)                             | `POST`   | `/{version}/support/cases`                                              | `project` |
| [`reportNorbixIssue`](#reportnorbixissue)                         | `POST`   | `/{version}/support/issues`                                             | `project` |
| [`addSupportCaseAttachment`](#addsupportcaseattachment)           | `POST`   | `/{version}/support/cases/{CaseId}/attachments`                         | `project` |
| [`getSupportCaseAttachments`](#getsupportcaseattachments)         | `GET`    | `/{version}/support/cases/{CaseId}/attachments`                         | `project` |
| [`downloadSupportCaseAttachment`](#downloadsupportcaseattachment) | `GET`    | `/{version}/support/cases/{CaseId}/attachments/{AttachmentId}/download` | `project` |
| [`deleteSupportCaseAttachment`](#deletesupportcaseattachment)     | `DELETE` | `/{version}/support/cases/{CaseId}/attachments/{AttachmentId}`          | `project` |

## Reference

### closeSupportCase

`POST` `/{version}/support/cases/{CaseId}/close`

**Request DTO**: `CodeMashHub2.CloseSupportCaseRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.support.openSupportCase({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### reportNorbixIssue

`POST` `/{version}/support/issues`

**Request DTO**: `CodeMashHub2.ReportNorbixIssueRequest`
**Response**: `CodeMashHub2.ReportNorbixIssueResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.support.reportNorbixIssue({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.ReportNorbixIssueResponse
```

[↑ Top](#endpoints)

### addSupportCaseAttachment

`POST` `/{version}/support/cases/{CaseId}/attachments` (`multipart/form-data`, one file part)

Adds one file to a support case. At most 10 MB per file and 20 files per case;
allowed: txt log md json xml yaml yml csv jpg jpeg png gif webp pdf doc docx xls
xlsx ppt pptx odt ods zip. Answers the new attachment's id (`supf_…`).

**Response**: `CodeMashHub2.IdResponse`

```ts
import { readFile } from 'node:fs/promises';
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const { id } = await norbix.hub.support.addSupportCaseAttachment({
  caseId: 'case-id-here',
  file: await readFile('./app.log'), // Blob, Uint8Array or ArrayBuffer
  fileName: 'app.log',
  contentType: 'text/plain',
});
```

[↑ Top](#endpoints)

### getSupportCaseAttachments

`GET` `/{version}/support/cases/{CaseId}/attachments`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetSupportCaseAttachmentsRequest`
**Response**: `CodeMashHub2.GetSupportCaseAttachmentsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.support.getSupportCaseAttachments({
  CaseId: 'CaseId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetSupportCaseAttachmentsResponse
```

[↑ Top](#endpoints)

### downloadSupportCaseAttachment

`GET` `/{version}/support/cases/{CaseId}/attachments/{AttachmentId}/download`

**Request DTO**: `CodeMashHub2.DownloadSupportCaseAttachmentRequest`
**Response**: `Uint8Array` (the file's bytes)

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.support.downloadSupportCaseAttachment({
  CaseId: 'CaseId-here',
  AttachmentId: 'AttachmentId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → the file's bytes as a Uint8Array
```

[↑ Top](#endpoints)

### deleteSupportCaseAttachment

`DELETE` `/{version}/support/cases/{CaseId}/attachments/{AttachmentId}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteSupportCaseAttachmentRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.support.deleteSupportCaseAttachment({
  CaseId: 'CaseId-here',
  AttachmentId: 'AttachmentId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)
