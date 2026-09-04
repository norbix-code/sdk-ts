# Hub · Regions

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Norbix regions: list the regions available to the account and update the set of
regions a project spans (one primary + any additional).

Accessed as `norbix.hub.regions` on the [`Norbix`](../../README.md#authentication) client.

> These endpoints manage the **set** of regions a project spans. To make
> requests **against** a given region, set `region` on the client
> (`new Norbix({ region: 'nb-eu-germany' })`, the `NORBIX_REGION` env var, or
> `norbix.setRegion(...)`) or per call (`{ region: '...' }` on any method's
> second argument), which sends the `nb-region` header — see
> [Regions in the project README](../../README.md#regions). The same two
> endpoints are also reachable as `norbix.hub.account.getAccountRegions` and
> `norbix.hub.account.updateProjectRegions` in the
> [`account` module](./account.md).

## Endpoints

| Method                                          | Verb    | Path                                                       | Scope     |
| ----------------------------------------------- | ------- | ---------------------------------------------------------- | --------- |
| [`list`](#list)                                 | `GET`   | `/{version}/account/regions`                               | `project` |
| [`updateProjectRegions`](#updateprojectregions) | `PATCH` | `/{version}/account/projects/{projectId}/settings/regions` | `project` |

## Reference

### list

`GET` `/{version}/account/regions`

Lists the Norbix regions available to the account.

**Request DTO**: `CodeMashHub2.GetAccountRegions`
**Response**: `CodeMashHub2.GetAccountRegionsResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.regions.list();
// → typed as CodeMashHub2.GetAccountRegionsResponse
// result.items is ProjectRegionDto[] — each item:
//   id: string         — region code, e.g. 'nb-eu-germany'
//   continent?: string — Continent enum, e.g. 'Europe'
//   name?: string      — display name
```

[↑ Top](#endpoints)

### updateProjectRegions

`PATCH` `/{version}/account/projects/{projectId}/settings/regions`

Updates the regions a project spans: `primaryRegion` (a region code) becomes
the project's primary region, `additionalRegions` the regions it additionally
spans.

**Request DTO**: `CodeMashHub2.UpdateProjectRegions`
**Response**: `CodeMashHub2.EmptyResponse`

```ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.hub.regions.updateProjectRegions({
  projectId: 'projectId-here',
  primaryRegion: 'nb-eu-germany',
  additionalRegions: ['nb-us-east'],
});
// → typed as CodeMashHub2.EmptyResponse
```

[↑ Top](#endpoints)

## Related types

- `CodeMashHub2.ProjectRegionDto` — `{ id, continent?, name? }`, the region
  shape returned by [`list`](#list) and embedded in project DTOs.
- `CodeMashHub2.CreateProjectRequest` — `hub.account.createProject` accepts
  `primaryRegion?: string` and `additionalRegions?: string[]` (region codes).
- `CodeMashHub2.ProjectDto` — carries `primaryRegion?`, `additionalRegions?`,
  and the combined `regions?: ProjectRegionDto[]`.
- `CodeMashHub2.ProjectListItemDto` — `hub.account.getProjects` list items
  carry `regions?: ProjectRegionDto[]`.
- `CodeMashHub2.EchoRegionDto` — `hub.echo.echo` reports the regions a
  deployment exposes (`EchoResponse.regions`), each with `code`, `displayName`,
  and the regional `apiUrl` / `hubUrl`.
