import { describe, expect, it } from 'vitest';

import { FilesModule } from '../../src/hub/files.js';
import { createMockFetch, expectedUrl, makeClient, stubRequestForPath } from '../_helpers.js';

/**
 * Auto-generated. Do not edit by hand — follow the internal maintenance workflow
 * to refresh this file from the DTO definitions.
 *
 * Tests for hub.files (15 endpoints).
 *
 * Each method is asserted against:
 *   - presence on the module (smoke check)
 *   - issued HTTP verb + URL with version segment substituted and path
 *     tokens interpolated from a stubbed request
 *   - auth, project, and (when applicable) account headers
 *   - account-scope guard: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId
 */
describe('hub.files', () => {
  it('module exposes 15 method(s)', () => {
    const mock = createMockFetch();
    const mod = new FilesModule({} as never);
    void mod; // silence unused — we only need the type
    // Sanity check the auto-mapped surface exists on the namespaced client.
    const { norbix } = makeClient();
    const ns = (norbix.hub as unknown as Record<string, unknown>)['files'] as Record<
      string,
      unknown
    >;
    expect(ns).toBeDefined();
    void mock;
    expect(typeof ns['disableFiles']).toBe('function');
    expect(typeof ns['enableFiles']).toBe('function');
    expect(typeof ns['deleteFilesTrigger']).toBe('function');
    expect(typeof ns['disableFilesTrigger']).toBe('function');
    expect(typeof ns['enableFilesTrigger']).toBe('function');
    expect(typeof ns['getFilesTrigger']).toBe('function');
    expect(typeof ns['getFilesTriggers']).toBe('function');
    expect(typeof ns['saveFilesTrigger']).toBe('function');
    expect(typeof ns['deleteFilesIntegration']).toBe('function');
    expect(typeof ns['disableFilesIntegration']).toBe('function');
    expect(typeof ns['enableFilesIntegration']).toBe('function');
    expect(typeof ns['getFilesIntegration']).toBe('function');
    expect(typeof ns['getFilesIntegrations']).toBe('function');
    expect(typeof ns['saveFilesIntegration']).toBe('function');
    expect(typeof ns['setFilesIntegrationAsDefault']).toBe('function');
  });

  it('disableFiles: GET /{version}/files/disable', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/files/disable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['disableFiles']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('enableFiles: GET /{version}/files/enable', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/files/enable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['enableFiles']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteFilesTrigger: DELETE /{version}/files/triggers/{triggerId}', async () => {
    const stub = stubRequestForPath('/{version}/files/triggers/{triggerId}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/files/triggers/{triggerId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['deleteFilesTrigger']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('disableFilesTrigger: PATCH /{version}/files/triggers/{triggerId}/disable', async () => {
    const stub = stubRequestForPath('/{version}/files/triggers/{triggerId}/disable');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/files/triggers/{triggerId}/disable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['disableFilesTrigger']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('enableFilesTrigger: PATCH /{version}/files/triggers/{triggerId}/enable', async () => {
    const stub = stubRequestForPath('/{version}/files/triggers/{triggerId}/enable');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/files/triggers/{triggerId}/enable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['enableFilesTrigger']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getFilesTrigger: GET /{version}/files/triggers/{id}', async () => {
    const stub = stubRequestForPath('/{version}/files/triggers/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/files/triggers/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['getFilesTrigger']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getFilesTriggers: GET /{version}/files/triggers', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/files/triggers',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['getFilesTriggers']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('saveFilesTrigger: POST /{version}/files/triggers', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/files/triggers',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['saveFilesTrigger']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteFilesIntegration: DELETE /{version}/files/integrations/{Id}', async () => {
    const stub = stubRequestForPath('/{version}/files/integrations/{Id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/files/integrations/{Id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['deleteFilesIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('disableFilesIntegration: PUT /{version}/files/integrations/{Id}/disable', async () => {
    const stub = stubRequestForPath('/{version}/files/integrations/{Id}/disable');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/files/integrations/{Id}/disable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['disableFilesIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('enableFilesIntegration: PUT /{version}/files/integrations/{Id}/enable', async () => {
    const stub = stubRequestForPath('/{version}/files/integrations/{Id}/enable');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/files/integrations/{Id}/enable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['enableFilesIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getFilesIntegration: GET /{version}/files/integrations/{id}', async () => {
    const stub = stubRequestForPath('/{version}/files/integrations/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/files/integrations/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['getFilesIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getFilesIntegrations: GET /{version}/files/integrations', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/files/integrations',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['getFilesIntegrations']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('saveFilesIntegration: POST /{version}/files/integrations', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/files/integrations',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['saveFilesIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('setFilesIntegrationAsDefault: PUT /{version}/files/integrations/{Id}/default', async () => {
    const stub = stubRequestForPath('/{version}/files/integrations/{Id}/default');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/files/integrations/{Id}/default',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['files']!['setFilesIntegrationAsDefault']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });
});
