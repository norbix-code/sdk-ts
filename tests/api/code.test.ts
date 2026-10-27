import { describe, expect, it } from 'vitest';

import { CodeModule } from '../../src/api/code.js';
import { createMockFetch, expectedUrl, makeClient, stubRequestForPath } from '../_helpers.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Tests for api.code (4 endpoints).
 *
 * Each method is asserted against:
 *   - presence on the module (smoke check)
 *   - issued HTTP verb + URL with version segment substituted and path
 *     tokens interpolated from a stubbed request
 *   - auth, project, and (when applicable) account headers
 *   - account-scope guard: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId
 */
describe('api.code', () => {
  it('module exposes 4 method(s)', () => {
    const mock = createMockFetch();
    const mod = new CodeModule({} as never);
    void mod; // silence unused — we only need the type
    // Sanity check the auto-mapped surface exists on the namespaced client.
    const { norbix } = makeClient();
    const ns = (norbix.api as unknown as Record<string, unknown>)['code'] as Record<
      string,
      unknown
    >;
    expect(ns).toBeDefined();
    void mock;
    expect(typeof ns['getCodeWorkflowWaitingRuns']).toBe('function');
    expect(typeof ns['resumeCodeWorkflowRun']).toBe('function');
    expect(typeof ns['openCodeWorkflowResumeLink']).toBe('function');
    expect(typeof ns['useCodeWorkflowResumeLink']).toBe('function');
  });

  it('getCodeWorkflowWaitingRuns: GET /{version}/code/workflows/runs', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/code/workflows/runs',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getCodeWorkflowWaitingRuns']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('resumeCodeWorkflowRun: POST /{version}/code/workflows/runs/{RunId}/resume', async () => {
    const stub = stubRequestForPath('/{version}/code/workflows/runs/{RunId}/resume');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/code/workflows/runs/{RunId}/resume',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['resumeCodeWorkflowRun']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('openCodeWorkflowResumeLink: GET /{version}/code/workflows/resume/{Token}', async () => {
    const stub = stubRequestForPath('/{version}/code/workflows/resume/{Token}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/code/workflows/resume/{Token}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['openCodeWorkflowResumeLink']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('useCodeWorkflowResumeLink: POST /{version}/code/workflows/resume/{Token}', async () => {
    const stub = stubRequestForPath('/{version}/code/workflows/resume/{Token}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/code/workflows/resume/{Token}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['useCodeWorkflowResumeLink']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });
});
