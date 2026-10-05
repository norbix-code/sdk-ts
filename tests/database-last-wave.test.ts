import { describe, expect, it } from 'vitest';

import { Norbix, NorbixError } from '../src/index.js';
import type { CodeMashApi2 } from '../src/types/api2.dtos.js';
import type { CodeMashHub2 } from '../src/types/hub2.dtos.js';

import { createMockFetch, makeClient } from './_helpers.js';

/**
 * Hand-written companion to the generated tests, for the last wave of the
 * gateway Database audit (gateway branch refactoringV2):
 *
 * - bulk update / delete with an empty filter `{}` needs `allRecords: true`
 *   (else CM-ERRORS-DATABASE-037);
 * - schema trigger rows and the single trigger carry `env`; `schemaId` is the
 *   owning schema id;
 * - a saved aggregate lists the collections it joins (`joinedCollections`);
 * - a taxonomy list row carries `dependencyRefs` (see database-audit.test.ts);
 * - new error codes reach the caller as `errorCode`.
 *
 * Every call goes to a mock fetch — nothing leaves the process.
 */

function sentBody(raw: string | undefined): Record<string, unknown> {
  expect(raw).toBeDefined();
  return JSON.parse(raw!) as Record<string, unknown>;
}

/** What the server reads: the JSON body, or the query string when there is none. */
function sentFields(call: { url: string; body?: string } | undefined): Record<string, unknown> {
  expect(call).toBeDefined();
  if (call!.body) return sentBody(call!.body);
  return Object.fromEntries(new URL(call!.url).searchParams.entries());
}

function clientAnswering(status: number, body: unknown) {
  const mock = createMockFetch({ status, body });
  const norbix = new Norbix({
    bearerToken: 'test-token',
    projectId: 'test-project',
    apiVersion: 'v2',
    hubVersion: 'v2',
    baseUrl: { api: 'https://api.norbix.io', hub: 'https://hub.norbix.io' },
    fetch: mock.fetch,
  });
  return { norbix, mock };
}

function refusal(errorCode: string, message: string) {
  return {
    responseStatus: {
      errorCode,
      message,
      errors: [{ errorCode, message }],
    },
  };
}

describe('bulk writes with an empty filter', () => {
  it('api updateMany sends allRecords with the empty filter', async () => {
    const { norbix, mock } = makeClient({});
    const request: Partial<CodeMashApi2.UpdateManyRequest> = {
      collectionName: 'books',
      filter: '{}',
      update: '{"status":"archived"}',
      allRecords: true,
    };

    await norbix.api.database.updateMany(request);

    expect(mock.lastCall?.method).toBe('PUT');
    expect(new URL(mock.lastCall!.url).pathname).toBe('/v2/database/collections/books/many');
    expect(sentBody(mock.lastCall?.body)).toMatchObject({
      filter: '{}',
      update: '{"status":"archived"}',
      allRecords: true,
    });
  });

  it('api deleteMany sends allRecords with the empty filter', async () => {
    const { norbix, mock } = makeClient({});

    await norbix.api.database.deleteMany({
      collectionName: 'books',
      filter: '{}',
      allRecords: true,
    });

    expect(mock.lastCall?.method).toBe('DELETE');
    expect(new URL(mock.lastCall!.url).pathname).toBe('/v2/database/collections/books/many');
    expect(sentFields(mock.lastCall)).toMatchObject({
      filter: '{}',
      allRecords: expect.anything(),
    });
    expect(String(sentFields(mock.lastCall)['allRecords'])).toBe('true');
  });

  it('the collection helper passes allRecords through', async () => {
    const { norbix, mock } = makeClient({});

    await norbix.collection('books').deleteMany({ filter: '{}', allRecords: true });

    expect(new URL(mock.lastCall!.url).pathname).toBe('/v2/database/collections/books/many');
    expect(String(sentFields(mock.lastCall)['allRecords'])).toBe('true');
  });

  it('hub updateManyRecords and deleteManyRecords send allRecords', async () => {
    const { norbix, mock } = makeClient({});

    await norbix.hub.database.updateManyRecords({
      collectionName: 'books',
      filter: '{}',
      update: '{"status":"archived"}',
      allRecords: true,
    });
    expect(String(sentFields(mock.lastCall)['allRecords'])).toBe('true');

    await norbix.hub.database.deleteManyRecords({
      collectionName: 'books',
      filter: '{}',
      allRecords: true,
    });
    expect(String(sentFields(mock.lastCall)['allRecords'])).toBe('true');
  });

  it('an empty filter without allRecords is refused with CM-ERRORS-DATABASE-037', async () => {
    const { norbix } = clientAnswering(
      400,
      refusal('CM-ERRORS-DATABASE-037', 'An empty filter matches every record.'),
    );

    const call = norbix.api.database.deleteMany({ collectionName: 'books', filter: '{}' });

    await expect(call).rejects.toBeInstanceOf(NorbixError);
    await expect(call).rejects.toMatchObject({
      httpStatus: 400,
      errorCode: 'CM-ERRORS-DATABASE-037',
    });
  });
});

describe('record body errors', () => {
  it.each([
    ['CM-ERRORS-DATABASE-035', 'An update body cannot use $ operators.'],
    ['CM-ERRORS-DATABASE-036', 'Invalid record document'],
  ])('%s reaches the caller as errorCode', async (errorCode, message) => {
    const { norbix } = clientAnswering(400, refusal(errorCode, message));

    const call = norbix.api.database.updateOne({
      collectionName: 'books',
      id: 'rec_1',
      update: '{"$inc":{"n":1}}',
    });

    await expect(call).rejects.toMatchObject({ httpStatus: 400, errorCode, message });
  });
});

describe('schema triggers per env', () => {
  it('getSchemaTriggers sends the env header and returns rows with env', async () => {
    const row: Partial<CodeMashHub2.SchemaTriggerProjectionList> = {
      viewId: 'trg_1',
      name: 'On insert',
      env: 'TEST',
    };
    const { norbix, mock } = clientAnswering(200, {
      list: { items: [row], hasMore: false, hasPrevious: false },
    });

    const res = await norbix.hub.database.getSchemaTriggers({}, { env: 'TEST' });

    expect(mock.lastCall?.headers.get('norbix-env')).toBe('TEST');
    expect(res.list?.items?.[0]?.env).toBe('TEST');
  });

  it('getSchemaTrigger returns the owning schema id and the env', async () => {
    const trigger: Partial<CodeMashHub2.SchemaTriggerDto> = {
      viewId: 'trg_1',
      schemaId: 'sch_books',
      env: 'PROD',
    };
    const { norbix, mock } = clientAnswering(200, { trigger });

    const res = await norbix.hub.database.getSchemaTrigger({ id: 'trg_1' });

    expect(new URL(mock.lastCall!.url).pathname).toBe('/v2/database/schemas/triggers/trg_1');
    expect({ schemaId: res.trigger?.schemaId, env: res.trigger?.env }).toEqual({
      schemaId: 'sch_books',
      env: 'PROD',
    });
  });

  it('enableSchemaTrigger acts on the copy of the request env', async () => {
    const { norbix, mock } = makeClient({});

    await norbix.hub.database.enableSchemaTrigger({ triggerId: 'trg_1' }, { env: 'TEST' });

    expect(mock.lastCall?.method).toBe('PATCH');
    expect(new URL(mock.lastCall!.url).pathname).toBe('/v2/database/schemas/triggers/trg_1/enable');
    expect(mock.lastCall?.headers.get('norbix-env')).toBe('TEST');
  });
});

describe('saved aggregates', () => {
  it('getDatabaseAggregate returns joinedCollections', async () => {
    const item: Partial<CodeMashHub2.MongoDbAggregateDto> = {
      viewId: 'agg_1',
      joinedCollections: ['authors', 'publishers'],
    };
    const { norbix } = clientAnswering(200, { item });

    const res = await norbix.hub.database.getDatabaseAggregate({ id: 'agg_1' });

    expect(res.item?.joinedCollections).toEqual(['authors', 'publishers']);
  });
});

describe('schema rename', () => {
  it('renameDatabaseSchema sends the id and the new title, no renameUniqueName', async () => {
    const { norbix, mock } = makeClient({});

    await norbix.hub.database.renameDatabaseSchema({ id: 'sch_books', title: 'Novels' });

    expect(mock.lastCall?.method).toBe('PUT');
    expect(new URL(mock.lastCall!.url).pathname).toBe('/v2/database/schemas/sch_books/rename');
    expect(sentBody(mock.lastCall?.body)).not.toHaveProperty('renameUniqueName');
  });
});

describe('taxonomy term read errors', () => {
  it.each([
    ['CM-ERRORS-TAXONOMIES-010', 404, 'Taxonomy not found.'],
    ['CM-ERRORS-TAXONOMIES-011', 400, 'The term tree has more than 5000 terms; read a sub-tree.'],
  ])('%s reaches the caller as errorCode', async (errorCode, status, message) => {
    const { norbix } = clientAnswering(status, refusal(errorCode, message));

    const call = norbix.hub.database.getDatabaseMergedTermTree({ taxonomyName: 'city' });

    await expect(call).rejects.toMatchObject({ httpStatus: status, errorCode });
  });
});
