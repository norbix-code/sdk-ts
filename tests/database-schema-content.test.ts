import { describe, expect, it } from 'vitest';

import { Norbix, NorbixError } from '../src/index.js';
import type { WithExpandedReferences } from '../src/index.js';
import { CodeMashApi2 } from '../src/types/api2.dtos.js';
import { CodeMashHub2 } from '../src/types/hub2.dtos.js';

import { createMockFetch, makeClient } from './_helpers.js';

/**
 * Hand-written companion to the generated tests, for the gateway
 * schema-content campaign (gateway branch audit/schema-content):
 *
 * - `expandReferences` on the record reads (API find / findOne / findOwn, Hub
 *   findRecords / findOneRecord) and the typed `{ id, display }` result on the
 *   collection helper;
 * - nested documents: objects and arrays travel as sent; nested update paths
 *   and `arrayFilters` on updateOne / updateMany (API and Hub);
 * - the new schema field DTOs (object, array, json, currency default and the
 *   field rules) read back typed; terms carry `slug`;
 * - files by id;
 * - the new error codes reach the caller as `errorCode`.
 *
 * Every call goes to a mock fetch — nothing leaves the process.
 */

interface Article {
  title: string;
  author: string;
  tags: string[];
  meta: { words: number; cover?: string };
  lines: { sku: string; qty: number }[];
}
type ArticleView = WithExpandedReferences<Article, 'author' | 'tags'>;

function sentBody(raw: string | undefined): Record<string, unknown> {
  expect(raw).toBeDefined();
  return JSON.parse(raw!) as Record<string, unknown>;
}

function sentQuery(url: string | undefined): Record<string, string> {
  expect(url).toBeDefined();
  return Object.fromEntries(new URL(url!).searchParams.entries());
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
  return { responseStatus: { errorCode, message, errors: [{ errorCode, message }] } };
}

const expandedArticle: ArticleView = {
  title: 'Hello',
  author: { id: 'usr_1', display: 'Jane Doe' },
  tags: [
    { id: 'trm_1', display: 'News' },
    { id: 'trm_2', display: null },
  ],
  meta: { words: 120 },
  lines: [{ sku: 'A-1', qty: 2 }],
};

describe('expandReferences on the record reads', () => {
  it.each([
    ['find', '/v2/database/collections/articles'],
    ['findOwn', '/v2/database/collections/articles/own'],
  ] as const)('api %s sends expandReferences=true in the query string', async (method, path) => {
    const { norbix, mock } = makeClient({});

    await norbix.api.database[method]({ collectionName: 'articles', expandReferences: true });

    expect(mock.lastCall?.method).toBe('GET');
    expect(new URL(mock.lastCall!.url).pathname).toBe(path);
    expect(sentQuery(mock.lastCall?.url)).toMatchObject({ expandReferences: 'true' });
  });

  it('api findOne sends expandReferences=true in the query string', async () => {
    const { norbix, mock } = makeClient({});

    await norbix.api.database.findOne({
      collectionName: 'articles',
      id: 'rec_1',
      expandReferences: true,
    });

    expect(new URL(mock.lastCall!.url).pathname).toBe('/v2/database/collections/articles/rec_1');
    expect(sentQuery(mock.lastCall?.url)).toMatchObject({ expandReferences: 'true' });
  });

  it('api find without the flag sends no expandReferences (stored ids come back)', async () => {
    const { norbix, mock } = makeClient({});

    await norbix.api.database.find({ collectionName: 'articles' });

    expect(sentQuery(mock.lastCall?.url)).not.toHaveProperty('expandReferences');
  });

  it('hub findRecords and findOneRecord send expandReferences=true', async () => {
    const { norbix, mock } = makeClient({});

    await norbix.hub.database.findRecords({ collectionName: 'articles', expandReferences: true });
    expect(sentQuery(mock.lastCall?.url)).toMatchObject({ expandReferences: 'true' });

    await norbix.hub.database.findOneRecord({
      collectionName: 'articles',
      id: 'rec_1',
      expandReferences: true,
    });
    expect(new URL(mock.lastCall!.url).pathname).toBe('/v2/database/collections/articles/rec_1');
    expect(sentQuery(mock.lastCall?.url)).toMatchObject({ expandReferences: 'true' });
  });

  it('a caller without read on a linked source is refused with CM-ERRORS-DATABASE-056', async () => {
    const { norbix } = clientAnswering(
      403,
      refusal(
        'CM-ERRORS-DATABASE-056',
        "Reference source 'posts' (collection) cannot be read: missing database:read.",
      ),
    );

    const call = norbix.api.database.find({ collectionName: 'articles', expandReferences: true });

    await expect(call).rejects.toBeInstanceOf(NorbixError);
    await expect(call).rejects.toMatchObject({
      httpStatus: 403,
      errorCode: 'CM-ERRORS-DATABASE-056',
    });
  });
});

describe('collection helper — typed references', () => {
  it('findItems with expandReferences returns the expanded shape', async () => {
    const { norbix, mock } = clientAnswering(200, {
      list: { items: [expandedArticle], hasMore: false, hasPrevious: false },
    });

    const items = await norbix
      .collection<Article, ArticleView>('articles')
      .findItems({ expandReferences: true });

    expect(sentQuery(mock.lastCall?.url)).toMatchObject({ expandReferences: 'true' });
    expect(items).toEqual([expandedArticle]);
    expect(items[0]!.author?.display).toBe('Jane Doe');
    expect(items[0]!.tags[1]!.display).toBeNull();
    // Nested values stay nested.
    expect(items[0]!.meta.words).toBe(120);
    expect(items[0]!.lines[0]!.sku).toBe('A-1');
  });

  it('findItems without the flag returns the stored shape', async () => {
    const stored: Article = {
      title: 'Hello',
      author: 'usr_1',
      tags: ['trm_1'],
      meta: { words: 120 },
      lines: [],
    };
    const { norbix } = clientAnswering(200, {
      list: { items: [stored], hasMore: false, hasPrevious: false },
    });

    const items = await norbix.collection<Article, ArticleView>('articles').findItems();

    expect(items).toEqual([stored]);
    expect(items[0]!.author).toBe('usr_1');
  });

  it('findOneItem returns the record, or undefined when the answer has none', async () => {
    const found = clientAnswering(200, { result: expandedArticle });
    const one = await found.norbix
      .collection<Article, ArticleView>('articles')
      .findOneItem({ id: 'rec_1', expandReferences: true });
    expect(new URL(found.mock.lastCall!.url).pathname).toBe(
      '/v2/database/collections/articles/rec_1',
    );
    expect(one?.author).toEqual({ id: 'usr_1', display: 'Jane Doe' });

    const empty = clientAnswering(200, {});
    const none = await empty.norbix.collection<Article>('articles').findOneItem({ id: 'rec_9' });
    expect(none).toBeUndefined();
  });

  it('findOwn / findOwnItems read the /own route', async () => {
    const { norbix, mock } = clientAnswering(200, {
      list: { items: [expandedArticle], hasMore: false, hasPrevious: false },
    });

    const items = await norbix
      .collection<Article, ArticleView>('articles')
      .findOwnItems({ expandReferences: true });

    expect(new URL(mock.lastCall!.url).pathname).toBe('/v2/database/collections/articles/own');
    expect(sentQuery(mock.lastCall?.url)).toMatchObject({ expandReferences: 'true' });
    expect(items).toEqual([expandedArticle]);
  });
});

describe('nested documents and arrayFilters', () => {
  const nested = {
    title: 'Hello',
    meta: { words: 120, cover: 'nbfl_1' },
    lines: [
      { sku: 'A-1', qty: 2 },
      { sku: 'B-2', qty: 1 },
    ],
  };

  it('insertOne sends the nested document as given', async () => {
    const { norbix, mock } = makeClient({});

    await norbix.collection('articles').insertOne({ document: JSON.stringify(nested) });

    expect(mock.lastCall?.method).toBe('POST');
    const body = sentBody(mock.lastCall?.body);
    expect(JSON.parse(body['document'] as string)).toEqual(nested);
  });

  it('api updateOne sends a nested path with arrayFilters in the body', async () => {
    const { norbix, mock } = makeClient({});
    const request: Partial<CodeMashApi2.UpdateOneRequest> = {
      collectionName: 'articles',
      id: 'rec_1',
      update: '{"lines.$[line].qty":3,"meta.words":130}',
      arrayFilters: '[{"line.sku":"A-1"}]',
    };

    await norbix.api.database.updateOne(request);

    expect(mock.lastCall?.method).toBe('PUT');
    expect(new URL(mock.lastCall!.url).pathname).toBe('/v2/database/collections/articles/rec_1');
    expect(sentBody(mock.lastCall?.body)).toMatchObject({
      update: '{"lines.$[line].qty":3,"meta.words":130}',
      arrayFilters: '[{"line.sku":"A-1"}]',
    });
  });

  it('api updateMany sends arrayFilters next to filter and update', async () => {
    const { norbix, mock } = makeClient({});

    await norbix.collection('articles').updateMany({
      filter: '{"status":"draft"}',
      update: '{"lines.$[].qty":0}',
      arrayFilters: '[]',
    });

    expect(new URL(mock.lastCall!.url).pathname).toBe('/v2/database/collections/articles/many');
    expect(sentBody(mock.lastCall?.body)).toMatchObject({
      filter: '{"status":"draft"}',
      update: '{"lines.$[].qty":0}',
      arrayFilters: '[]',
    });
  });

  it('hub updateOneRecord and updateManyRecords send arrayFilters', async () => {
    const { norbix, mock } = makeClient({});
    const one: Partial<CodeMashHub2.UpdateOneRecord> = {
      collectionName: 'articles',
      id: 'rec_1',
      update: '{"lines.$[line].qty":3}',
      arrayFilters: '[{"line.sku":"A-1"}]',
    };
    await norbix.hub.database.updateOneRecord(one);
    expect(mock.lastCall?.method).toBe('PUT');
    expect(sentBody(mock.lastCall?.body)).toMatchObject({ arrayFilters: '[{"line.sku":"A-1"}]' });

    const many: Partial<CodeMashHub2.UpdateManyRecords> = {
      collectionName: 'articles',
      filter: '{"status":"draft"}',
      update: '{"lines.$[line].qty":3}',
      arrayFilters: '[{"line.sku":"A-1"}]',
    };
    await norbix.hub.database.updateManyRecords(many);
    expect(new URL(mock.lastCall!.url).pathname).toBe('/v2/database/collections/articles/many');
    expect(sentBody(mock.lastCall?.body)).toMatchObject({ arrayFilters: '[{"line.sku":"A-1"}]' });
  });
});

describe('schema field DTOs', () => {
  it('a schema reads back with object, array, json and currency fields typed', async () => {
    const amount = new CodeMashHub2.CurrencyFieldDto({
      fieldName: 'price',
      multipleOf: 0.01,
      minimum: 0,
      default: new CodeMashHub2.CurrencyDefaultDto({ value: 9.99, currency: 'EUR' }),
    });
    const lines = new CodeMashHub2.ArrayFieldDto({
      fieldName: 'lines',
      minItems: 1,
      maxItems: 50,
      items: new CodeMashHub2.ObjectFieldDto({
        fieldName: 'line',
        properties: [
          new CodeMashHub2.StringFieldDto({ fieldName: 'sku', unique: false, default: 'A-0' }),
          new CodeMashHub2.IntegerFieldDto({ fieldName: 'qty', minimum: 0, default: 1 }),
        ],
        required: ['sku'],
      }),
    });
    const meta = new CodeMashHub2.JsonFieldDto({ fieldName: 'meta', maxBytes: 4096 });
    const cover = new CodeMashHub2.FileFieldDto({
      fieldName: 'cover',
      allowedFileType: 'image/*',
      maxSizeMb: 5,
      maxItems: 1,
    });
    const author = new CodeMashHub2.UserSelectionFieldDto({
      fieldName: 'author',
      displayField: 'email',
    });
    const tags = new CodeMashHub2.TagsFieldDto({ fieldName: 'tags', maxItems: 10, default: [] });
    const fields: CodeMashHub2.JsonSchemaFieldDto[] = [amount, lines, meta, cover, author, tags];

    const { norbix } = clientAnswering(200, {
      item: { viewId: 'sch_1', name: 'articles', dataSchema: { json: '{}', fields } },
    });

    const res = await norbix.hub.database.getDatabaseSchema({ id: 'sch_1' });

    const read = res.item!.dataSchema.fields;
    expect(read).toHaveLength(6);
    const price = read[0] as CodeMashHub2.CurrencyFieldDto;
    expect(price.default).toEqual({ value: 9.99, currency: 'EUR' });
    expect(price.multipleOf).toBe(0.01);
    const list = read[1] as CodeMashHub2.ArrayFieldDto;
    expect(list.minItems).toBe(1);
    const line = list.items as CodeMashHub2.ObjectFieldDto;
    expect(line.required).toEqual(['sku']);
    expect(line.properties.map((p) => p.fieldName)).toEqual(['sku', 'qty']);
    expect((read[2] as CodeMashHub2.JsonFieldDto).maxBytes).toBe(4096);
    expect((read[3] as CodeMashHub2.FileFieldDto).allowedFileType).toBe('image/*');
    expect((read[4] as CodeMashHub2.UserSelectionFieldDto).displayField).toBe('email');
    expect((read[5] as CodeMashHub2.TagsFieldDto).default).toEqual([]);
  });

  it('the API carries the same field types', () => {
    const field = new CodeMashApi2.ArrayFieldDto({
      fieldName: 'lines',
      uniqueItems: true,
      items: new CodeMashApi2.JsonFieldDto({ fieldName: 'line' }),
    });
    expect(field.items.fieldName).toBe('line');
    expect(new CodeMashApi2.CurrencyDefaultDto({ value: 1, currency: 'USD' }).currency).toBe('USD');
  });

  it('terms carry slug', async () => {
    const term: Partial<CodeMashApi2.TermDto> = { id: 'trm_1', name: 'News', slug: 'news' };
    const { norbix } = clientAnswering(200, {
      list: { items: [term], hasMore: false, hasPrevious: false },
    });

    const res = await norbix.api.database.findTerms({ taxonomyName: 'topics' });

    expect(res.list?.items[0]?.slug).toBe('news');
  });
});

describe('files by id', () => {
  it('api getFileById reads the by-id route and returns the file', async () => {
    const { norbix, mock } = clientAnswering(200, {
      file: { integrationId: 'fls_1', path: 'covers/hello.png', isPublic: true },
      isPublic: true,
      publicUrl: 'https://cdn.example/covers/hello.png',
    });

    const res = await norbix.api.files.getFileById({ filesIntegrationId: 'fls_1', id: 'nbfl_1' });

    expect(mock.lastCall?.method).toBe('GET');
    expect(new URL(mock.lastCall!.url).pathname).toBe('/v2/files/fls_1/by-id/nbfl_1');
    expect(res.file?.path).toBe('covers/hello.png');
    expect(res.publicUrl).toBe('https://cdn.example/covers/hello.png');
  });

  it('hub getFileById sends the integration and the id in the query', async () => {
    const { norbix, mock } = makeClient({});

    await norbix.hub.files.getFileById({ filesIntegrationId: 'fls_1', id: 'nbfl_1' });

    expect(new URL(mock.lastCall!.url).pathname).toBe('/v2/files/item/by-id');
    expect(sentQuery(mock.lastCall?.url)).toMatchObject({
      filesIntegrationId: 'fls_1',
      id: 'nbfl_1',
    });
  });
});

describe('record data errors reach the caller as errorCode', () => {
  it.each([
    ['CM-ERRORS-DATABASE-039', "Field 'qty' is invalid: expected an integer."],
    ['CM-ERRORS-DATABASE-040', "Field 'title' is invalid: longer than 80 characters."],
    ['CM-ERRORS-DATABASE-041', "Field 'sku' is invalid: does not match the pattern."],
    ['CM-ERRORS-DATABASE-042', "Field 'email' is invalid: not an email."],
    ['CM-ERRORS-DATABASE-043', "Field 'qty' is invalid: below the minimum 0."],
    ['CM-ERRORS-DATABASE-044', "Field 'price' is invalid: not a multiple of 0.01."],
    ['CM-ERRORS-DATABASE-045', "Field 'status' is invalid: not one of the allowed values."],
    ['CM-ERRORS-DATABASE-046', "Field 'tags' is invalid: repeated entry."],
    ['CM-ERRORS-DATABASE-047', "Field 'price' is invalid: unknown member 'amount'."],
    ['CM-ERRORS-DATABASE-048', "Field 'where' is invalid: latitude outside -90..90."],
    ['CM-ERRORS-DATABASE-049', "Field 'title' is invalid: not a language → text object."],
  ])('%s on insertOne', async (errorCode, message) => {
    const { norbix } = clientAnswering(400, refusal(errorCode, message));

    const call = norbix.collection('articles').insertOne({ document: '{"qty":"two"}' });

    await expect(call).rejects.toMatchObject({ httpStatus: 400, errorCode, message });
  });

  it.each([
    ['CM-ERRORS-DATABASE-050', "Field 'author' is invalid: user 'usr_9' not found."],
    ['CM-ERRORS-DATABASE-051', "Field 'role' is invalid: role 'Administrator' not found."],
    ['CM-ERRORS-DATABASE-052', "Field 'tags' is invalid: term 'trm_9' not found."],
    ['CM-ERRORS-DATABASE-053', "Field 'post' is invalid: record 'rec_9' not found."],
    ['CM-ERRORS-DATABASE-054', "Field 'cover' is invalid: file 'nbfl_9' not found."],
    ['CM-ERRORS-DATABASE-055', "Field 'tags' is invalid: taxonomy 'topics' is not available."],
  ])('%s on updateOne', async (errorCode, message) => {
    const { norbix } = clientAnswering(400, refusal(errorCode, message));

    const call = norbix
      .collection('articles')
      .updateOne({ id: 'rec_1', update: '{"post":"rec_9"}' });

    await expect(call).rejects.toMatchObject({ httpStatus: 400, errorCode, message });
  });
});
