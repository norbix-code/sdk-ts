# API · Files

[← Back to API index](./_index.md) · [↑ Back to project README](../../README.md)

File storage integrations and triggers. Upload + download is in `api.database` (FileResource fields).

Accessed as `norbix.api.files` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                          | Verb     | Path                                               | Scope     |
| ----------------------------------------------- | -------- | -------------------------------------------------- | --------- |
| [`commitUpload`](#commitupload)                 | `POST`   | `/{version}/files/{filesIntegrationId}/commit`     | `project` |
| [`getFileContent`](#getfilecontent)             | `GET`    | `/{version}/files/{filesIntegrationId}/content`    | `project` |
| [`putFileContent`](#putfilecontent)             | `PUT`    | `/{version}/files/{filesIntegrationId}/content`    | `project` |
| [`deleteFileApi`](#deletefileapi)               | `DELETE` | `/{version}/files/{filesIntegrationId}`            | `project` |
| [`deleteManyFilesApi`](#deletemanyfilesapi)     | `DELETE` | `/{version}/files/{filesIntegrationId}/bulk`       | `project` |
| [`downloadFileApi`](#downloadfileapi)           | `GET`    | `/{version}/files/{filesIntegrationId}/download`   | `project` |
| [`getFileInfo`](#getfileinfo)                   | `GET`    | `/{version}/files/{filesIntegrationId}/info`       | `project` |
| [`getSignedUrl`](#getsignedurl)                 | `GET`    | `/{version}/files/{filesIntegrationId}/sign`       | `project` |
| [`listFiles`](#listfiles)                       | `GET`    | `/{version}/files/{filesIntegrationId}`            | `project` |
| [`getPublicFile`](#getpublicfile)               | `GET`    | `/{version}/files/public/{PublicId}/{Name*}`       | `project` |
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

### getFileContent

`GET` `/{version}/files/{filesIntegrationId}/content`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetFileContentRequest`
**Response**: `CodeMashApi2.Blob`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.files.getFileContent({
  filesIntegrationId: 'filesIntegrationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.Blob
```

[↑ Top](#endpoints)

### putFileContent

`PUT` `/{version}/files/{filesIntegrationId}/content`

**Request DTO**: `CodeMashApi2.PutFileContentRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.files.putFileContent({
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

### getPublicFile

`GET` `/{version}/files/public/{PublicId}/{Name*}`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetPublicFileRequest`
**Response**: `CodeMashApi2.Blob`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.files.getPublicFile({
  PublicId: 'PublicId-here',
  Name*: 'Name*-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.Blob
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

### testFilesIntegration

`POST` `/{version}/files/{filesIntegrationId}/test`

Run a connection / delivery test against the integration.

**Request DTO**: `CodeMashApi2.TestFilesIntegrationRequest`
**Response**: `CodeMashApi2.TestFilesIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.files.testFilesIntegration({
  filesIntegrationId: 'filesIntegrationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.TestFilesIntegrationResponse
```

[↑ Top](#endpoints)
