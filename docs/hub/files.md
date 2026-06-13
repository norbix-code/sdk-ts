# Hub · Files

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

File storage integrations and triggers. Upload + download is in `api.database` (FileResource fields).

Accessed as `norbix.hub.files` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method | Verb | Path | Scope |
| --- | --- | --- | --- |
| [`disableFiles`](#disablefiles) | `GET` | `/{version}/files/disable` | `project` |
| [`enableFiles`](#enablefiles) | `GET` | `/{version}/files/enable` | `project` |
| [`deleteFilesTrigger`](#deletefilestrigger) | `DELETE` | `/{version}/files/triggers/{triggerId}` | `project` |
| [`disableFilesTrigger`](#disablefilestrigger) | `PATCH` | `/{version}/files/triggers/{triggerId}/disable` | `project` |
| [`enableFilesTrigger`](#enablefilestrigger) | `PATCH` | `/{version}/files/triggers/{triggerId}/enable` | `project` |
| [`getFilesTrigger`](#getfilestrigger) | `GET` | `/{version}/files/triggers/{id}` | `project` |
| [`getFilesTriggers`](#getfilestriggers) | `GET` | `/{version}/files/triggers` | `project` |
| [`saveFilesTrigger`](#savefilestrigger) | `POST` | `/{version}/files/triggers` | `project` |
| [`deleteFilesIntegration`](#deletefilesintegration) | `DELETE` | `/{version}/files/integrations/{Id}` | `project` |
| [`disableFilesIntegration`](#disablefilesintegration) | `PUT` | `/{version}/files/integrations/{Id}/disable` | `project` |
| [`enableFilesIntegration`](#enablefilesintegration) | `PUT` | `/{version}/files/integrations/{Id}/enable` | `project` |
| [`getFilesIntegration`](#getfilesintegration) | `GET` | `/{version}/files/integrations/{id}` | `project` |
| [`getFilesIntegrations`](#getfilesintegrations) | `GET` | `/{version}/files/integrations` | `project` |
| [`saveFilesIntegration`](#savefilesintegration) | `POST` | `/{version}/files/integrations` | `project` |
| [`setFilesIntegrationAsDefault`](#setfilesintegrationasdefault) | `PUT` | `/{version}/files/integrations/{Id}/default` | `project` |
| [`getFile`](#getfile) | `GET` | `/{version}/files/item` | `project` |
| [`getFolderFiles`](#getfolderfiles) | `GET` | `/{version}/files/folder` | `project` |

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
