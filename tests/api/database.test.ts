import { describe, expect, it } from 'vitest';

import { DatabaseModule } from '../../src/api/database.js';
import { createMockFetch, expectedUrl, makeClient, stubRequestForPath } from '../_helpers.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Tests for api.database (21 endpoints).
 *
 * Each method is asserted against:
 *   - presence on the module (smoke check)
 *   - issued HTTP verb + URL with version segment substituted and path
 *     tokens interpolated from a stubbed request
 *   - auth, project, and (when applicable) account headers
 *   - account-scope guard: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId
 */
describe('api.database', () => {
  it('module exposes 21 method(s)', () => {
    const mock = createMockFetch();
    const mod = new DatabaseModule({} as never);
    void mod; // silence unused — we only need the type
    // Sanity check the auto-mapped surface exists on the namespaced client.
    const { norbix } = makeClient();
    const ns = (norbix.api as unknown as Record<string, unknown>)['database'] as Record<
      string,
      unknown
    >;
    expect(ns).toBeDefined();
    void mock;
    expect(typeof ns['findTaxonomyTree']).toBe('function');
    expect(typeof ns['findTerms']).toBe('function');
    expect(typeof ns['findTermsChildren']).toBe('function');
    expect(typeof ns['findTermTree']).toBe('function');
    expect(typeof ns['getDatabaseSchema']).toBe('function');
    expect(typeof ns['getDatabaseSchemas']).toBe('function');
    expect(typeof ns['aggregate']).toBe('function');
    expect(typeof ns['changeResponsibility']).toBe('function');
    expect(typeof ns['count']).toBe('function');
    expect(typeof ns['deleteMany']).toBe('function');
    expect(typeof ns['deleteOne']).toBe('function');
    expect(typeof ns['distinct']).toBe('function');
    expect(typeof ns['executeAggregate']).toBe('function');
    expect(typeof ns['find']).toBe('function');
    expect(typeof ns['findOne']).toBe('function');
    expect(typeof ns['findOwn']).toBe('function');
    expect(typeof ns['insertMany']).toBe('function');
    expect(typeof ns['insertOne']).toBe('function');
    expect(typeof ns['replaceOne']).toBe('function');
    expect(typeof ns['updateMany']).toBe('function');
    expect(typeof ns['updateOne']).toBe('function');
  });

  it('findTaxonomyTree: GET /{version}/database/taxonomies/tree', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/taxonomies/tree',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['findTaxonomyTree']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('findTerms: GET /{version}/database/taxonomies/{taxonomyName}/terms', async () => {
    const stub = stubRequestForPath('/{version}/database/taxonomies/{taxonomyName}/terms');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/taxonomies/{taxonomyName}/terms',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['findTerms']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('findTermsChildren: GET /{version}/database/taxonomies/{taxonomyName}/terms/{parentId}/children', async () => {
    const stub = stubRequestForPath(
      '/{version}/database/taxonomies/{taxonomyName}/terms/{parentId}/children',
    );
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/taxonomies/{taxonomyName}/terms/{parentId}/children',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['findTermsChildren']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('findTermTree: GET /{version}/database/taxonomies/{taxonomyName}/terms/tree', async () => {
    const stub = stubRequestForPath('/{version}/database/taxonomies/{taxonomyName}/terms/tree');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/taxonomies/{taxonomyName}/terms/tree',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['findTermTree']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getDatabaseSchema: GET /{version}/database/schemas/{id}', async () => {
    const stub = stubRequestForPath('/{version}/database/schemas/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/schemas/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['getDatabaseSchema']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getDatabaseSchemas: GET /{version}/database/schemas', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/schemas',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['getDatabaseSchemas']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('aggregate: POST /{version}/database/collections/{collectionName}/aggregate', async () => {
    const stub = stubRequestForPath('/{version}/database/collections/{collectionName}/aggregate');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/collections/{collectionName}/aggregate',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['aggregate']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('changeResponsibility: PUT /{version}/database/collections/{collectionName}/{id}/responsibility', async () => {
    const stub = stubRequestForPath(
      '/{version}/database/collections/{collectionName}/{id}/responsibility',
    );
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/collections/{collectionName}/{id}/responsibility',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['changeResponsibility']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('count: GET /{version}/database/collections/{collectionName}/count', async () => {
    const stub = stubRequestForPath('/{version}/database/collections/{collectionName}/count');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/collections/{collectionName}/count',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['count']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteMany: DELETE /{version}/database/collections/{collectionName}/many', async () => {
    const stub = stubRequestForPath('/{version}/database/collections/{collectionName}/many');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/collections/{collectionName}/many',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['deleteMany']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteOne: DELETE /{version}/database/collections/{collectionName}/{id}', async () => {
    const stub = stubRequestForPath('/{version}/database/collections/{collectionName}/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/collections/{collectionName}/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['deleteOne']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('distinct: GET /{version}/database/collections/{collectionName}/distinct', async () => {
    const stub = stubRequestForPath('/{version}/database/collections/{collectionName}/distinct');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/collections/{collectionName}/distinct',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['distinct']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('executeAggregate: POST /{version}/database/collections/{collectionName}/aggregates/{aggregateId}/execute', async () => {
    const stub = stubRequestForPath(
      '/{version}/database/collections/{collectionName}/aggregates/{aggregateId}/execute',
    );
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/collections/{collectionName}/aggregates/{aggregateId}/execute',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['executeAggregate']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('find: GET /{version}/database/collections/{collectionName}', async () => {
    const stub = stubRequestForPath('/{version}/database/collections/{collectionName}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/collections/{collectionName}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['find']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('findOne: GET /{version}/database/collections/{collectionName}/{id}', async () => {
    const stub = stubRequestForPath('/{version}/database/collections/{collectionName}/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/collections/{collectionName}/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['findOne']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('findOwn: GET /{version}/database/collections/{collectionName}/own', async () => {
    const stub = stubRequestForPath('/{version}/database/collections/{collectionName}/own');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/collections/{collectionName}/own',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['findOwn']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('insertMany: POST /{version}/database/collections/{collectionName}/many', async () => {
    const stub = stubRequestForPath('/{version}/database/collections/{collectionName}/many');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/collections/{collectionName}/many',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['insertMany']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('insertOne: POST /{version}/database/collections/{collectionName}', async () => {
    const stub = stubRequestForPath('/{version}/database/collections/{collectionName}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/collections/{collectionName}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['insertOne']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('replaceOne: PUT /{version}/database/collections/{collectionName}/{id}/replace', async () => {
    const stub = stubRequestForPath(
      '/{version}/database/collections/{collectionName}/{id}/replace',
    );
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/collections/{collectionName}/{id}/replace',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['replaceOne']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateMany: PUT /{version}/database/collections/{collectionName}/many', async () => {
    const stub = stubRequestForPath('/{version}/database/collections/{collectionName}/many');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/collections/{collectionName}/many',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['updateMany']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateOne: PUT /{version}/database/collections/{collectionName}/{id}', async () => {
    const stub = stubRequestForPath('/{version}/database/collections/{collectionName}/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/database/collections/{collectionName}/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['database']!['updateOne']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });
});
