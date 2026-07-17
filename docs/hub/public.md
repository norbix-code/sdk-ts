# Hub · Public

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)



Accessed as `norbix.hub.public` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method | Verb | Path | Scope |
| --- | --- | --- | --- |
| [`getPublicProjectConfig`](#getpublicprojectconfig) | `GET` | `/{version}/public/projects/{ProjectId}/config` | `project` |
| [`getPublicProjectLegal`](#getpublicprojectlegal) | `GET` | `/{version}/public/projects/{ProjectId}/legal/{Kind}` | `project` |

## Reference

### getPublicProjectConfig

`GET` `/{version}/public/projects/{ProjectId}/config`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetPublicProjectConfig`
**Response**: `CodeMashHub2.PublicProjectConfigDto`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.public.getPublicProjectConfig({
  ProjectId: 'ProjectId-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.PublicProjectConfigDto
```

[↑ Top](#endpoints)

### getPublicProjectLegal

`GET` `/{version}/public/projects/{ProjectId}/legal/{Kind}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetPublicProjectLegal`
**Response**: `CodeMashHub2.PublicLegalDocumentDto`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.public.getPublicProjectLegal({
  ProjectId: 'ProjectId-here',
  Kind: 'Kind-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.PublicLegalDocumentDto
```

[↑ Top](#endpoints)
