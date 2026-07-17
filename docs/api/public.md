# API · Public

[← Back to API index](./_index.md) · [↑ Back to project README](../../README.md)



Accessed as `norbix.api.public` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method | Verb | Path | Scope |
| --- | --- | --- | --- |
| [`getPublicProjectConfig`](#getpublicprojectconfig) | `GET` | `/{version}/public/projects/{ProjectId}/config` | `project` |
| [`getPublicProjectLegal`](#getpublicprojectlegal) | `GET` | `/{version}/public/projects/{ProjectId}/legal/{Kind}` | `project` |

## Reference

### getPublicProjectConfig

`GET` `/{version}/public/projects/{ProjectId}/config`

Fetch a single item by ID.

**Request DTO**: `CodeMashApi2.GetPublicProjectConfig`
**Response**: `CodeMashApi2.PublicProjectConfigDto`

```ts
import { Norbix } from '@norbix/ts';

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
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.api.public.getPublicProjectLegal({
  ProjectId: 'ProjectId-here',
  Kind: 'Kind-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.PublicLegalDocumentDto
```

[↑ Top](#endpoints)
