# API · Public

[← Back to API index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.api.public` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                      | Verb  | Path                                                  | Scope     |
| ----------------------------------------------------------- | ----- | ----------------------------------------------------- | --------- |
| [`getPublicProjectBrandAsset`](#getpublicprojectbrandasset) | `GET` | `/{version}/public/projects/{ProjectId}/brand/{Kind}` | `project` |
| [`getPublicProjectConfig`](#getpublicprojectconfig)         | `GET` | `/{version}/public/projects/{ProjectId}/config`       | `project` |
| [`getPublicProjectLegal`](#getpublicprojectlegal)           | `GET` | `/{version}/public/projects/{ProjectId}/legal/{Kind}` | `project` |

## Reference

### getPublicProjectBrandAsset

`GET` `/{version}/public/projects/{ProjectId}/brand/{Kind}`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetPublicProjectBrandAsset`
**Response**: `CodeMashApi2.Blob`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.public.getPublicProjectBrandAsset({
  ProjectId: 'ProjectId-here',
  Kind: 'Kind-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.Blob
```

[↑ Top](#endpoints)

### getPublicProjectConfig

`GET` `/{version}/public/projects/{ProjectId}/config`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetPublicProjectConfig`
**Response**: `CodeMashApi2.PublicProjectConfigDto`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.public.getPublicProjectConfig({
  ProjectId: 'ProjectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PublicProjectConfigDto
```

[↑ Top](#endpoints)

### getPublicProjectLegal

`GET` `/{version}/public/projects/{ProjectId}/legal/{Kind}`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetPublicProjectLegal`
**Response**: `CodeMashApi2.PublicLegalDocumentDto`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.public.getPublicProjectLegal({
  ProjectId: 'ProjectId-here',
  Kind: 'Kind-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PublicLegalDocumentDto
```

[↑ Top](#endpoints)
