import { describe, expect, it } from 'vitest';

import { FilesModule } from '../../src/api/files.js';
import { createMockFetch, expectedUrl, makeClient, stubRequestForPath } from '../_helpers.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Tests for api.files (8 endpoints).
 *
 * Each method is asserted against:
 *   - presence on the module (smoke check)
 *   - issued HTTP verb + URL with version segment substituted and path
 *     tokens interpolated from a stubbed request
 *   - auth, project, and (when applicable) account headers
 *   - account-scope guard: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId
 */
describe('api.files', () => {
  it('module exposes 8 method(s)', () => {
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
    expect(typeof ns['deleteFileApi']).toBe('function');
    expect(typeof ns['deleteManyFilesApi']).toBe('function');
    expect(typeof ns['downloadFileApi']).toBe('function');
    expect(typeof ns['getFileInfo']).toBe('function');
    expect(typeof ns['getSignedUrl']).toBe('function');
    expect(typeof ns['listFiles']).toBe('function');
    expect(typeof ns['requestUploadUrl']).toBe('function');
  });

  it('commitUpload: POST /{version}/files/{filesIntegrationId}/commit', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}/commit');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
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
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteFileApi: DELETE /{version}/files/{filesIntegrationId}', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
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
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteManyFilesApi: DELETE /{version}/files/{filesIntegrationId}/bulk', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}/bulk');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
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
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('downloadFileApi: GET /{version}/files/{filesIntegrationId}/download', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}/download');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
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
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getFileInfo: GET /{version}/files/{filesIntegrationId}/info', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}/info');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
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
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getSignedUrl: GET /{version}/files/{filesIntegrationId}/sign', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}/sign');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
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
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('listFiles: GET /{version}/files/{filesIntegrationId}', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
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
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('requestUploadUrl: POST /{version}/files/{filesIntegrationId}/upload-url', async () => {
    const stub = stubRequestForPath('/{version}/files/{filesIntegrationId}/upload-url');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
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
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });
});
