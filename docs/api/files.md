# API · Files

[← Back to API index](./_index.md) · [↑ Back to project README](../../README.md)

File storage integrations and triggers. Upload + download is in `api.database` (FileResource fields).

Accessed as `norbix.api.files` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                      | Verb     | Path                                               | Scope     |
| ------------------------------------------- | -------- | -------------------------------------------------- | --------- |
| [`commitUpload`](#commitupload)             | `POST`   | `/{version}/files/{filesIntegrationId}/commit`     | `project` |
| [`getFileContent`](#getfilecontent)         | `GET`    | `/{version}/files/{filesIntegrationId}/content`    | `project` |
| [`putFileContent`](#putfilecontent)         | `PUT`    | `/{version}/files/{filesIntegrationId}/content`    | `project` |
| [`deleteFileApi`](#deletefileapi)           | `DELETE` | `/{version}/files/{filesIntegrationId}`            | `project` |
| [`deleteManyFilesApi`](#deletemanyfilesapi) | `DELETE` | `/{version}/files/{filesIntegrationId}/bulk`       | `project` |
| [`downloadFileApi`](#downloadfileapi)       | `GET`    | `/{version}/files/{filesIntegrationId}/download`   | `project` |
| [`getFileById`](#getfilebyid)               | `GET`    | `/{version}/files/{filesIntegrationId}/by-id/{id}` | `project` |
| [`getFileInfo`](#getfileinfo)               | `GET`    | `/{version}/files/{filesIntegrationId}/info`       | `project` |
| [`getSignedUrl`](#getsignedurl)             | `GET`    | `/{version}/files/{filesIntegrationId}/sign`       | `project` |
| [`listFiles`](#listfiles)                   | `GET`    | `/{version}/files/{filesIntegrationId}`            | `project` |
| [`getPublicFile`](#getpublicfile)           | `GET`    | `/{version}/files/public/{PublicId}/{Name*}`       | `project` |
| [`registerFiles`](#registerfiles)           | `POST`   | `/{version}/files/{filesIntegrationId}/register`   | `project` |
| [`requestUploadUrl`](#requestuploadurl)     | `POST`   | `/{version}/files/{filesIntegrationId}/upload-url` | `project` |
| [`useFile`](#usefile)                       | `POST`   | `/{version}/files/{filesIntegrationId}/use`        | `project` |
| [`makeFilePrivate`](#makefileprivate)       | `POST`   | `/{version}/files/item/private`                    | `project` |
| [`makeFilePublic`](#makefilepublic)         | `POST`   | `/{version}/files/item/public`                     | `project` |
| [`makeFolderPrivate`](#makefolderprivate)   | `POST`   | `/{version}/files/folder/private`                  | `project` |
| [`makeFolderPublic`](#makefolderpublic)     | `POST`   | `/{version}/files/folder/public`                   | `project` |
| [`getFile`](#getfile)                       | `GET`    | `/{version}/files/item`                            | `project` |
| [`getFolderFiles`](#getfolderfiles)         | `GET`    | `/{version}/files/folder`                          | `project` |

## Reference

### commitUpload

`POST` `/{version}/files/{filesIntegrationId}/commit`

**Request DTO**: `CodeMashApi2.CommitUploadRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.files.downloadFileApi({
  filesIntegrationId: 'filesIntegrationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.Blob
```

[↑ Top](#endpoints)

### getFileById

`GET` `/{version}/files/{filesIntegrationId}/by-id/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetFileByIdRequest`
**Response**: `CodeMashApi2.GetFileByIdResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.files.getFileById({
  filesIntegrationId: 'filesIntegrationId-here',
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetFileByIdResponse
```

[↑ Top](#endpoints)

### getFileInfo

`GET` `/{version}/files/{filesIntegrationId}/info`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetFileInfoRequest`
**Response**: `CodeMashApi2.GetFileInfoResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

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
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.files.getPublicFile({
  PublicId: 'PublicId-here',
  Name*: 'Name*-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.Blob
```

[↑ Top](#endpoints)

### registerFiles

`POST` `/{version}/files/{filesIntegrationId}/register`

Register a new entry.

**Request DTO**: `CodeMashApi2.RegisterFilesRequest`
**Response**: `CodeMashApi2.RegisterFilesResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.files.registerFiles({
  filesIntegrationId: 'filesIntegrationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.RegisterFilesResponse
```

[↑ Top](#endpoints)

### requestUploadUrl

`POST` `/{version}/files/{filesIntegrationId}/upload-url`

**Request DTO**: `CodeMashApi2.RequestUploadUrlRequest`
**Response**: `CodeMashApi2.RequestUploadUrlResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.files.requestUploadUrl({
  filesIntegrationId: 'filesIntegrationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.RequestUploadUrlResponse
```

[↑ Top](#endpoints)

### useFile

`POST` `/{version}/files/{filesIntegrationId}/use`

**Request DTO**: `CodeMashApi2.UseFileRequest`
**Response**: `CodeMashApi2.IdResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.files.useFile({
  filesIntegrationId: 'filesIntegrationId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.IdResponse
```

[↑ Top](#endpoints)

### makeFilePrivate

`POST` `/{version}/files/item/private`

**Request DTO**: `CodeMashApi2.MakeFilePrivateRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.files.makeFilePrivate({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### makeFilePublic

`POST` `/{version}/files/item/public`

**Request DTO**: `CodeMashApi2.MakeFilePublicRequest`
**Response**: `CodeMashApi2.IdResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.files.makeFilePublic({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.IdResponse
```

[↑ Top](#endpoints)

### makeFolderPrivate

`POST` `/{version}/files/folder/private`

**Request DTO**: `CodeMashApi2.MakeFolderPrivateRequest`
**Response**: `CodeMashApi2.EmptyResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.files.makeFolderPrivate({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.EmptyResponse
```

[↑ Top](#endpoints)

### makeFolderPublic

`POST` `/{version}/files/folder/public`

**Request DTO**: `CodeMashApi2.MakeFolderPublicRequest`
**Response**: `CodeMashApi2.IdResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.files.makeFolderPublic({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.IdResponse
```

[↑ Top](#endpoints)

### getFile

`GET` `/{version}/files/item`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetFile`
**Response**: `CodeMashApi2.GetFileResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.files.getFile({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetFileResponse
```

[↑ Top](#endpoints)

### getFolderFiles

`GET` `/{version}/files/folder`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetFolderFiles`
**Response**: `CodeMashApi2.GetFolderFilesResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.files.getFolderFiles({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.GetFolderFilesResponse
```

[↑ Top](#endpoints)
