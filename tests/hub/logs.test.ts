import { describe, expect, it } from 'vitest';

import { LogsModule } from '../../src/hub/logs.js';
import { createMockFetch, expectedUrl, makeClient, stubRequestForPath } from '../_helpers.js';

/**
 * Auto-generated. Do not edit by hand — follow the internal maintenance workflow
 * to refresh this file from the DTO definitions.
 *
 * Tests for hub.logs (9 endpoints).
 *
 * Each method is asserted against:
 *   - presence on the module (smoke check)
 *   - issued HTTP verb + URL with version segment substituted and path
 *     tokens interpolated from a stubbed request
 *   - auth, project, and (when applicable) account headers
 *   - account-scope guard: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId
 */
describe('hub.logs', () => {
  it('module exposes 9 method(s)', () => {
    const mock = createMockFetch();
    const mod = new LogsModule({} as never);
    void mod; // silence unused — we only need the type
    // Sanity check the auto-mapped surface exists on the namespaced client.
    const { norbix } = makeClient();
    const ns = (norbix.hub as unknown as Record<string, unknown>)['logs'] as Record<
      string,
      unknown
    >;
    expect(ns).toBeDefined();
    void mock;
    expect(typeof ns['disableLogging']).toBe('function');
    expect(typeof ns['enableLogging']).toBe('function');
    expect(typeof ns['deleteLoggingIntegration']).toBe('function');
    expect(typeof ns['disableLoggingIntegration']).toBe('function');
    expect(typeof ns['enableLoggingIntegration']).toBe('function');
    expect(typeof ns['getLoggingIntegration']).toBe('function');
    expect(typeof ns['getLoggingIntegrations']).toBe('function');
    expect(typeof ns['saveLoggingIntegration']).toBe('function');
    expect(typeof ns['testLoggingIntegration']).toBe('function');
  });

  it('disableLogging: GET /{version}/logs/disable', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/logs/disable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['logs']!['disableLogging']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('enableLogging: GET /{version}/logs/enable', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/logs/enable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['logs']!['enableLogging']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteLoggingIntegration: DELETE /{version}/logs/integrations/{Id}', async () => {
    const stub = stubRequestForPath('/{version}/logs/integrations/{Id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/logs/integrations/{Id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['logs']!['deleteLoggingIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('disableLoggingIntegration: PUT /{version}/logs/integrations/{Id}/disable', async () => {
    const stub = stubRequestForPath('/{version}/logs/integrations/{Id}/disable');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/logs/integrations/{Id}/disable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['logs']!['disableLoggingIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('enableLoggingIntegration: PUT /{version}/logs/integrations/{Id}/enable', async () => {
    const stub = stubRequestForPath('/{version}/logs/integrations/{Id}/enable');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/logs/integrations/{Id}/enable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['logs']!['enableLoggingIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getLoggingIntegration: GET /{version}/logs/integrations/{id}', async () => {
    const stub = stubRequestForPath('/{version}/logs/integrations/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/logs/integrations/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['logs']!['getLoggingIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getLoggingIntegrations: GET /{version}/logs/integrations', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/logs/integrations',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['logs']!['getLoggingIntegrations']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('saveLoggingIntegration: POST /{version}/logs/integrations', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/logs/integrations',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['logs']!['saveLoggingIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('testLoggingIntegration: POST /{version}/logs/integrations/test', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/logs/integrations/test',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['logs']!['testLoggingIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });
});
