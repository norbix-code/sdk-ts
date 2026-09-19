# API · Files

[← Back to API index](./_index.md) · [↑ Back to project README](../../README.md)

File storage integrations and triggers. Upload + download is in `api.database` (FileResource fields).

Accessed as `norbix.api.files` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                          | Verb     | Path                                               | Scope     |
| ----------------------------------------------- | -------- | -------------------------------------------------- | --------- |
| [`commitUpload`](#commitupload)                 | `POST`   | `/{version}/files/{filesIntegrationId}/commit`     | `project` |
| [`deleteFileApi`](#deletefileapi)               | `DELETE` | `/{version}/files/{filesIntegrationId}`            | `project` |
| [`deleteManyFilesApi`](#deletemanyfilesapi)     | `DELETE` | `/{version}/files/{filesIntegrationId}/bulk`       | `project` |
| [`downloadFileApi`](#downloadfileapi)           | `GET`    | `/{version}/files/{filesIntegrationId}/download`   | `project` |
| [`getFileInfo`](#getfileinfo)                   | `GET`    | `/{version}/files/{filesIntegrationId}/info`       | `project` |
| [`getPublicFile`](#getpublicfile)               | `GET`    | `/{version}/files/public/{publicId}/{name}`        | none      |
| [`getSignedUrl`](#getsignedurl)                 | `GET`    | `/{version}/files/{filesIntegrationId}/sign`       | `project` |
| [`listFiles`](#listfiles)                       | `GET`    | `/{version}/files/{filesIntegrationId}`            | `project` |
| [`requestUploadUrl`](#requestuploadurl)         | `POST`   | `/{version}/files/{filesIntegrationId}/upload-url` | `project` |
| [`testFilesIntegration`](#testfilesintegration) | `POST`   | `/{version}/files/{filesIntegrationId}/test`       | `project` |

## Reference

### commitUpload

`POST` `/{version}/files/{filesIntegrationId}/commit`

**Request DTO**: `CodeMashApi2.CommitUploadRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.files.commitUpload({
  filesIntegrationId: 'filesIntegrationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteFileApi

`DELETE` `/{version}/files/{filesIntegrationId}`

Delete an item.

**Request DTO**: `CodeMashApi2.DeleteFileApiRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.files.deleteFileApi({
  filesIntegrationId: 'filesIntegrationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteManyFilesApi

`DELETE` `/{version}/files/{filesIntegrationId}/bulk`

Delete an item.

**Request DTO**: `CodeMashApi2.DeleteManyFilesApiRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.files.deleteManyFilesApi({
  filesIntegrationId: 'filesIntegrationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### downloadFileApi

`GET` `/{version}/files/{filesIntegrationId}/download`

**Request DTO**: `CodeMashApi2.DownloadFileApiRequest`
**Response**: `CodeMashApi2.Blob`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.files.downloadFileApi({
  filesIntegrationId: 'filesIntegrationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.Blob
```

[↑ Top](#endpoints)

### getFileInfo

`GET` `/{version}/files/{filesIntegrationId}/info`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetFileInfoRequest`
**Response**: `CodeMashApi2.GetFileInfoResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.files.getFileInfo({
  filesIntegrationId: 'filesIntegrationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetFileInfoResponse
```

[↑ Top](#endpoints)

### getSignedUrl

`GET` `/{version}/files/{filesIntegrationId}/sign`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetSignedUrlRequest`
**Response**: `CodeMashApi2.GetSignedUrlResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.files.getSignedUrl({
  filesIntegrationId: 'filesIntegrationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetSignedUrlResponse
```

[↑ Top](#endpoints)

### listFiles

`GET` `/{version}/files/{filesIntegrationId}`

**Request DTO**: `CodeMashApi2.ListFilesRequest`
**Response**: `CodeMashApi2.ListFilesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.files.listFiles({
  filesIntegrationId: 'filesIntegrationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.ListFilesResponse
```

[↑ Top](#endpoints)

### requestUploadUrl

`POST` `/{version}/files/{filesIntegrationId}/upload-url`

**Request DTO**: `CodeMashApi2.RequestUploadUrlRequest`
**Response**: `CodeMashApi2.RequestUploadUrlResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.files.requestUploadUrl({
  filesIntegrationId: 'filesIntegrationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.RequestUploadUrlResponse
```

[↑ Top](#endpoints)

### getPublicFile

`GET` `/{version}/files/public/{publicId}/{name}`

Reads a file somebody made public. **This call carries no sign-in and no
project id** — the SDK deliberately sends no `Authorization` header, even when
the client you call it on is signed in. That is what public means: the link has
to work in an e-mail, in an `<img src>`, or in a browser on a stranger's phone,
and the unguessable `nbpf_…` id is the whole credential.

Answers with the file's raw bytes as a `Uint8Array`. When the storage provider
signs its own links (Amazon S3, Azure Blob, Google Cloud Storage) the gateway
replies `302` and `fetch` follows it, so the bytes come from the provider and
never pass through Norbix.

`name` is the file's name for a file link, or the path inside the folder for a
folder link — its slashes stay slashes.

Every miss is the same plain `404`: an id that does not exist, a name that does
not match, a file made private again, a file gone from storage. That is on
purpose — a more precise answer would tell a stranger the file is there.

**Request DTO**: `CodeMashApi2.GetPublicFileRequest`
**Response**: `Uint8Array`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const bytes = await norbix.api.files.getPublicFile({
  publicId: 'nbpf_7hK2abc',
  name: 'invoice.pdf',
});
// → Uint8Array

// A file inside a published folder — the path keeps its slashes:
const report = await norbix.api.files.getPublicFile({
  publicId: 'nbpf_folder1',
  name: '2026/q1/report.pdf',
});
```

Making a file or a folder public is a dashboard operation, on the Hub side:
[`hub.files.makeFilePublic`](../hub/files.md#makefilepublic).

> The link is a plain HTTP address. Anything that can do a `GET` can read it —
> `fetch`, `curl`, an `<img>` tag — so you do not need this SDK, or a Norbix
> client at all, to open one. The method is here for code that already has a
> client in its hands.

[↑ Top](#endpoints)

### testFilesIntegration

`POST` `/{version}/files/{filesIntegrationId}/test`

Runs a live test against a files integration. The gateway uploads a small file,
reads it, lists the folder and deletes the file again, and answers one item per
step:

| `operation`   | what it checks                 |
| ------------- | ------------------------------ |
| `UploadFile`  | the storage accepts a new file |
| `GetFile`     | the file can be read back      |
| `GetAllFiles` | the folder can be listed       |
| `DeleteFile`  | the test file can be removed   |

`result` is `OK`, `FAILED` (then `errors` says why) or `NOT_TESTED` (skipped,
because an earlier step failed). The call needs the `files:create` permission,
because the test writes to the storage.

This is the API-side twin of the dashboard's
[`hub.files.testFilesIntegration`](../hub/files.md#testfilesintegration)
(`POST /{version}/files/integrations/test`, integration id in the body). Use
this one from an app or a script that signs in with an API key.

**Request DTO**: `CodeMashApi2.TestFilesIntegrationRequest`
**Response**: `CodeMashApi2.TestFilesIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.files.testFilesIntegration({
  filesIntegrationId: 'filesIntegrationId-here',
});

for (const step of result.items ?? []) {
  console.log(step.operation, step.result, step.errors ?? []);
}
// → UploadFile OK []
//   GetFile OK []
//   GetAllFiles OK []
//   DeleteFile OK []
```

[↑ Top](#endpoints)
