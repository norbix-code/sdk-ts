import { describe, expect, it } from 'vitest';

import { Norbix } from '../../src/index.js';
import type { CodeMashHub2 } from '../../src/types/hub2.dtos.js';
import { createMockFetch, makeClient } from '../_helpers.js';

/**
 * Hand-written companion to the generated tests, for the gateway Database
 * audit (gateway branch audit/database):
 *
 * - new endpoint `PUT /database/schemas/{Id}/embed` — saves a schema's
 *   embedding setting (full replace);
 * - a taxonomy list row now carries `description`, `dependencies`,
 *   `parentName` and `dependencyRefs` (one `{ id, name? }` per entry of
 *   `dependencies`, same order; `name` is null when the id no longer resolves).
 *
 * The calls are typed on the generated request / response types, so
 * `npm run typecheck` fails if a field disappears. The generated files prove
 * the verb and the URL; these tests check what the server reads and what the
 * caller gets back. Every call goes to a mock fetch — nothing leaves the
 * process.
 */

function sentBody(raw: string | undefined): Record<string, unknown> {
  expect(raw).toBeDefined();
  return JSON.parse(raw!) as Record<string, unknown>;
}

describe('schema embed setting', () => {
  it('updateDatabaseSchemaEmbed puts the full embed setting under the schema id', async () => {
    const { norbix, mock } = makeClient({});
    const embed: CodeMashHub2.SchemaEmbedSettingsDto = {
      enabled: true,
      fields: ['title', 'body'],
      embeddingIntegrationId: 'int_embed',
      perUser: false,
    };

    await norbix.hub.database.updateDatabaseSchemaEmbed({ id: 'sch_1', embed });

    expect(mock.lastCall?.method).toBe('PUT');
    expect(new URL(mock.lastCall!.url).pathname).toBe('/v2/database/schemas/sch_1/embed');
    expect(sentBody(mock.lastCall?.body)['embed']).toEqual({
      enabled: true,
      fields: ['title', 'body'],
      embeddingIntegrationId: 'int_embed',
      perUser: false,
    });
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });
});

describe('taxonomy list rows', () => {
  it('getDatabaseTaxonomies returns description, dependencies, parentName and dependencyRefs in the order of dependencies', async () => {
    const row: CodeMashHub2.TaxonomyListProjection = {
      viewId: 'tax_city',
      taxonomyName: 'City',
      taxonomySlug: 'city',
      parentId: 'tax_country',
      description: 'Cities of the world',
      dependencies: ['tax_country', 'tax_gone'],
      parentName: 'Country',
      dependencyRefs: [
        { id: 'tax_country', name: 'Country' },
        { id: 'tax_gone', name: null as unknown as undefined },
      ],
    };
    const mock = createMockFetch({
      body: { list: { items: [row], hasMore: false, hasPrevious: false } },
    });
    const norbix = new Norbix({
      bearerToken: 'test-token',
      projectId: 'test-project',
      hubVersion: 'v2',
      baseUrl: { api: 'https://api.norbix.io', hub: 'https://hub.norbix.io' },
      fetch: mock.fetch,
    });

    const res = await norbix.hub.database.getDatabaseTaxonomies({});
    const got = (res.list?.items as CodeMashHub2.TaxonomyListProjection[])[0]!;

    expect(mock.lastCall?.method).toBe('GET');
    expect({
      description: got.description,
      dependencies: got.dependencies,
      parentName: got.parentName,
      dependencyRefs: got.dependencyRefs,
    }).toEqual({
      description: 'Cities of the world',
      dependencies: ['tax_country', 'tax_gone'],
      parentName: 'Country',
      dependencyRefs: [
        { id: 'tax_country', name: 'Country' },
        { id: 'tax_gone', name: null },
      ],
    });
  });
});
