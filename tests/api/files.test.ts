import { describe, expect, it } from 'vitest';

import { FilesModule } from '../../src/api/files.js';
import { createMockFetch, expectedUrl, makeClient, stubRequestForPath } from '../_helpers.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Tests for api.files (20 endpoints).
 *
 * Each method is asserted against:
 *   - presence on the module (smoke check)
 *   - issued HTTP verb + URL with version segment substituted and path
 *     tokens interpolated from a stubbed request
 *   - auth, project, and (when applicable) account headers
 *   - account-scope guard: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId
 */
describe('api.files', () => {
  it('module exposes 20 method(s)', () => {
    const mock = createMockFetch();
    const mod = new FilesModule({} as never);
    void mod; // silence unused — we only need the type
    // Sanity check the auto-mapped surface exists on the namespaced client.
    const { norbix } = makeClient();
    const ns = (norbix.api as unknown as Record<string, unknown>)['files'] as Record<
      string,
      unknown
    >;
    expect(ns).toBeDefined();
    void mock;
    expect(typeof ns['commitUpload']).toBe('function');
    expect(typeof ns['getFileContent']).toBe('function');
    expect(typeof ns['putFileContent']).toBe('function');
    expect(typeof ns['deleteFileApi']).toBe('function');
    expect(typeof ns['deleteManyFilesApi']).toBe('function');
    expect(typeof ns['downloadFileApi']).toBe('function');
    expect(typeof ns['getFileById']).toBe('function');
    expect(typeof ns['getFileInfo']).toBe('function');
    expect(typeof ns['getSignedUrl']).toBe('function');
    expect(typeof ns['listFiles']).toBe('function');
    expect(typeof ns['getPublicFile']).toBe('function');
    expect(typeof ns['registerFiles']).toBe('function');
    expect(typeof ns['requestUploadUrl']).toBe('function');
    expect(typeof ns['useFile']).toBe('function');
    expect(typeof ns['makeFilePrivate']).toBe('function');
    expect(typeof ns['makeFilePublic']).toBe('function');
    expect(typeof ns['makeFolderPrivate']).toBe('function');
    expect(typeof ns['makeFolderPublic']).toBe('function');
    expect(typeof ns['getFile']).toBe('function');
    expect(typeof ns['getFolderFiles']).toBe('function');
  });

  it('commitUpload: POST /{version}/files/{filesIntegrationId}/commit', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}/commit');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/files/{filesIntegrationId}/commit',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['commitUpload']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getFileContent: GET /{version}/files/{filesIntegrationId}/content', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}/content');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/files/{filesIntegrationId}/content',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['getFileContent']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBeNull();
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('putFileContent: PUT /{version}/files/{filesIntegrationId}/content', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}/content');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/files/{filesIntegrationId}/content',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['putFileContent']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('deleteFileApi: DELETE /{version}/files/{filesIntegrationId}', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/files/{filesIntegrationId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['deleteFileApi']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('deleteManyFilesApi: DELETE /{version}/files/{filesIntegrationId}/bulk', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}/bulk');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/files/{filesIntegrationId}/bulk',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['deleteManyFilesApi']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('downloadFileApi: GET /{version}/files/{filesIntegrationId}/download', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}/download');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/files/{filesIntegrationId}/download',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['downloadFileApi']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getFileById: GET /{version}/files/{filesIntegrationId}/by-id/{id}', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}/by-id/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/files/{filesIntegrationId}/by-id/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['getFileById']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getFileInfo: GET /{version}/files/{filesIntegrationId}/info', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}/info');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/files/{filesIntegrationId}/info',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['getFileInfo']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getSignedUrl: GET /{version}/files/{filesIntegrationId}/sign', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}/sign');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/files/{filesIntegrationId}/sign',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['getSignedUrl']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('listFiles: GET /{version}/files/{filesIntegrationId}', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/files/{filesIntegrationId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['listFiles']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getPublicFile: GET /{version}/files/public/{PublicId}/{Name*}', async () => {
    const stub = stubRequestForPath('/{version}/files/public/{PublicId}/{Name*}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/files/public/{PublicId}/{Name*}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['getPublicFile']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBeNull();
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('registerFiles: POST /{version}/files/{filesIntegrationId}/register', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}/register');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/files/{filesIntegrationId}/register',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['registerFiles']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('requestUploadUrl: POST /{version}/files/{filesIntegrationId}/upload-url', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}/upload-url');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/files/{filesIntegrationId}/upload-url',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['requestUploadUrl']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('useFile: POST /{version}/files/{filesIntegrationId}/use', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}/use');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/files/{filesIntegrationId}/use',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['useFile']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('makeFilePrivate: POST /{version}/files/item/private', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/files/item/private',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['makeFilePrivate']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('makeFilePublic: POST /{version}/files/item/public', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/files/item/public',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['makeFilePublic']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('makeFolderPrivate: POST /{version}/files/folder/private', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/files/folder/private',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['makeFolderPrivate']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('makeFolderPublic: POST /{version}/files/folder/public', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/files/folder/public',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['makeFolderPublic']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getFile: GET /{version}/files/item', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/files/item',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['getFile']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getFolderFiles: GET /{version}/files/folder', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/files/folder',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['getFolderFiles']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });
});
