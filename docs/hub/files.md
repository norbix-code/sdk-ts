# Hub · Files

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

File storage integrations and triggers. Upload + download is in `api.database` (FileResource fields).

Accessed as `norbix.hub.files` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                          | Verb     | Path                                            | Scope     |
| --------------------------------------------------------------- | -------- | ----------------------------------------------- | --------- |
| [`disableFiles`](#disablefiles)                                 | `GET`    | `/{version}/files/disable`                      | `project` |
| [`enableFiles`](#enablefiles)                                   | `GET`    | `/{version}/files/enable`                       | `project` |
| [`deleteFilesTrigger`](#deletefilestrigger)                     | `DELETE` | `/{version}/files/triggers/{triggerId}`         | `project` |
| [`disableFilesTrigger`](#disablefilestrigger)                   | `PATCH`  | `/{version}/files/triggers/{triggerId}/disable` | `project` |
| [`enableFilesTrigger`](#enablefilestrigger)                     | `PATCH`  | `/{version}/files/triggers/{triggerId}/enable`  | `project` |
| [`getFilesTrigger`](#getfilestrigger)                           | `GET`    | `/{version}/files/triggers/{id}`                | `project` |
| [`getFilesTriggers`](#getfilestriggers)                         | `GET`    | `/{version}/files/triggers`                     | `project` |
| [`saveFilesTrigger`](#savefilestrigger)                         | `POST`   | `/{version}/files/triggers`                     | `project` |
| [`deleteFilesIntegration`](#deletefilesintegration)             | `DELETE` | `/{version}/files/integrations/{Id}`            | `project` |
| [`disableFilesIntegration`](#disablefilesintegration)           | `PUT`    | `/{version}/files/integrations/{Id}/disable`    | `project` |
| [`enableFilesIntegration`](#enablefilesintegration)             | `PUT`    | `/{version}/files/integrations/{Id}/enable`     | `project` |
| [`getFilesIntegration`](#getfilesintegration)                   | `GET`    | `/{version}/files/integrations/{id}`            | `project` |
| [`getFilesIntegrations`](#getfilesintegrations)                 | `GET`    | `/{version}/files/integrations`                 | `project` |
| [`saveFilesIntegration`](#savefilesintegration)                 | `POST`   | `/{version}/files/integrations`                 | `project` |
| [`setFilesIntegrationAsDefault`](#setfilesintegrationasdefault) | `PUT`    | `/{version}/files/integrations/{Id}/default`    | `project` |
| [`testFilesIntegration`](#testfilesintegration)                 | `POST`   | `/{version}/files/integrations/test`            | `project` |
| [`getFile`](#getfile)                                           | `GET`    | `/{version}/files/item`                         | `project` |
| [`getFolderFiles`](#getfolderfiles)                             | `GET`    | `/{version}/files/folder`                       | `project` |
| [`makeFilePublic`](#makefilepublic)                             | `POST`   | `/{version}/files/item/public`                  | `project` |
| [`makeFilePrivate`](#makefileprivate)                           | `POST`   | `/{version}/files/item/private`                 | `project` |
| [`makeFolderPublic`](#makefolderpublic)                         | `POST`   | `/{version}/files/folder/public`                | `project` |
| [`makeFolderPrivate`](#makefolderprivate)                       | `POST`   | `/{version}/files/folder/private`               | `project` |

## Reference

### disableFiles

`GET` `/{version}/files/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableFiles`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.files.disableFiles({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableFiles

`GET` `/{version}/files/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableFiles`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.files.enableFiles({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### deleteFilesTrigger

`DELETE` `/{version}/files/triggers/{triggerId}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteFilesTrigger`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.files.deleteFilesTrigger({
  triggerId: 'triggerId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### disableFilesTrigger

`PATCH` `/{version}/files/triggers/{triggerId}/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableFilesTrigger`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.files.disableFilesTrigger({
  triggerId: 'triggerId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableFilesTrigger

`PATCH` `/{version}/files/triggers/{triggerId}/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableFilesTrigger`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.files.enableFilesTrigger({
  triggerId: 'triggerId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getFilesTrigger

`GET` `/{version}/files/triggers/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetFilesTrigger`
**Response**: `CodeMashHub2.GetFilesTriggerResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.files.getFilesTrigger({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetFilesTriggerResponse
```

[↑ Top](#endpoints)

### getFilesTriggers

`GET` `/{version}/files/triggers`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetFilesTriggers`
**Response**: `CodeMashHub2.GetFilesTriggersResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.files.getFilesTriggers({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetFilesTriggersResponse
```

[↑ Top](#endpoints)

### saveFilesTrigger

`POST` `/{version}/files/triggers`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveFilesTrigger`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.files.saveFilesTrigger({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### deleteFilesIntegration

`DELETE` `/{version}/files/integrations/{Id}`

Delete an item.

**Request DTO**: `CodeMashHub2.DeleteFilesIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.files.deleteFilesIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### disableFilesIntegration

`PUT` `/{version}/files/integrations/{Id}/disable`

Disable the resource.

**Request DTO**: `CodeMashHub2.DisableFilesIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.files.disableFilesIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### enableFilesIntegration

`PUT` `/{version}/files/integrations/{Id}/enable`

Enable the resource.

**Request DTO**: `CodeMashHub2.EnableFilesIntegrationRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.files.enableFilesIntegration({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### getFilesIntegration

`GET` `/{version}/files/integrations/{id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetFilesIntegration`
**Response**: `CodeMashHub2.GetFilesIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.files.getFilesIntegration({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetFilesIntegrationResponse
```

[↑ Top](#endpoints)

### getFilesIntegrations

`GET` `/{version}/files/integrations`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetFilesIntegrations`
**Response**: `CodeMashHub2.GetFilesIntegrationsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.files.getFilesIntegrations({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetFilesIntegrationsResponse
```

[↑ Top](#endpoints)

### saveFilesIntegration

`POST` `/{version}/files/integrations`

Upsert an item (create or update).

**Request DTO**: `CodeMashHub2.SaveFilesIntegration`
**Response**: `CodeMashHub2.IdResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.files.saveFilesIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.IdResponse
```

[↑ Top](#endpoints)

### setFilesIntegrationAsDefault

`PUT` `/{version}/files/integrations/{Id}/default`

**Request DTO**: `CodeMashHub2.SetFilesIntegrationAsDefaultRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.files.setFilesIntegrationAsDefault({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

### testFilesIntegration

`POST` `/{version}/files/integrations/test`

Run a connection / delivery test against the integration.

**Request DTO**: `CodeMashHub2.TestFilesIntegration`
**Response**: `CodeMashHub2.TestFilesIntegrationResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.files.testFilesIntegration({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.TestFilesIntegrationResponse
```

[↑ Top](#endpoints)

### getFile

`GET` `/{version}/files/item`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetFile`
**Response**: `CodeMashHub2.GetFileResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.files.getFile({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetFileResponse
```

[↑ Top](#endpoints)

### getFolderFiles

`GET` `/{version}/files/folder`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetFolderFiles`
**Response**: `CodeMashHub2.GetFolderFilesResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.files.getFolderFiles({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetFolderFilesResponse
```

[↑ Top](#endpoints)

## Public file links

A file, or a whole folder, can be made readable by anyone holding a link — no
sign-in, no project id, no account. The gateway keeps a record and mints an
unguessable id that looks like `nbpf_7hK2…`; the link is then

```
https://<your api host>/v3/files/public/nbpf_7hK2…/invoice.pdf
```

Four rules worth knowing before you call these:

- **Publishing a folder is one record**, whatever is under it. A folder with a
  million objects costs one row, and every file inside it is reachable at
  `…/nbpf_…/path/inside/the/folder.pdf`, at any depth.
- **Asking twice gives the same id back.** The first link is already in
  somebody's hands; a second id would leave it live and invisible.
- **A file cannot be made private on its own while a folder above it is
  public.** The call is refused and the message names the folder to switch off.
- **The root cannot be published**, and a folder link with nothing after it is
  a `404`. Publishing a prefix must not publish its listing.

Read [`getFile`](#getfile) or `api.files.listFiles` afterwards to see
`isPublic` and `publicUrl` on the file, and `publicFolders` on a listing. The
link itself is fetched with [`api.files.getPublicFile`](../api/files.md#getpublicfile).

### makeFilePublic

`POST` `/{version}/files/item/public`

Makes one file readable by anyone holding its link. The file has to exist
already — the gateway reads it from the provider first, so a link that points
at nothing is never handed out.

**Request DTO**: `CodeMashHub2.MakeFilePublicRequest`
**Response**: `CodeMashHub2.IdResponse` — `id` is the `nbpf_…` public id

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const { id } = await norbix.hub.files.makeFilePublic({
  filesIntegrationId: 'nbin_42',
  path: 'invoices/invoice.pdf',
});
// → id: 'nbpf_7hK2abc'
```

[↑ Top](#endpoints)

### makeFilePrivate

`POST` `/{version}/files/item/private`

Takes the file's public link away; opening it afterwards gives a `404`.
Refused while a folder above the file is public (`CM-ERRORS-FILES-021`) —
switch the folder off instead.

**Request DTO**: `CodeMashHub2.MakeFilePrivateRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
await norbix.hub.files.makeFilePrivate({
  filesIntegrationId: 'nbin_42',
  path: 'invoices/invoice.pdf',
});
```

[↑ Top](#endpoints)

### makeFolderPublic

`POST` `/{version}/files/folder/public`

Publishes a whole folder prefix. Files already published inside it keep their
own links — they agree with the folder, and those links are already shared.

**Request DTO**: `CodeMashHub2.MakeFolderPublicRequest`
**Response**: `CodeMashHub2.IdResponse`

```ts
const { id } = await norbix.hub.files.makeFolderPublic({
  filesIntegrationId: 'nbin_42',
  path: 'invoices',
});
// every file under invoices/ is now readable at
// https://<api host>/v3/files/public/<id>/<path inside the folder>
```

[↑ Top](#endpoints)

### makeFolderPrivate

`POST` `/{version}/files/folder/private`

Takes back every link inside the folder, per-file links included. That is the
point: after this call nothing under the prefix is public, which is what was
asked for.

**Request DTO**: `CodeMashHub2.MakeFolderPrivateRequest`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
await norbix.hub.files.makeFolderPrivate({
  filesIntegrationId: 'nbin_42',
  path: 'invoices',
});
```

[↑ Top](#endpoints)
