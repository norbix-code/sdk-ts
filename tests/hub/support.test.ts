import { describe, expect, it } from 'vitest';

import { SupportModule } from '../../src/hub/support.js';
import { createMockFetch, expectedUrl, makeClient, stubRequestForPath } from '../_helpers.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Tests for hub.support (12 endpoints).
 *
 * Each method is asserted against:
 *   - presence on the module (smoke check)
 *   - issued HTTP verb + URL with version segment substituted and path
 *     tokens interpolated from a stubbed request
 *   - auth, project, and (when applicable) account headers
 *   - account-scope guard: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId
 */
describe('hub.support', () => {
  it('module exposes 12 method(s)', () => {
    const mock = createMockFetch();
    const mod = new SupportModule({} as never);
    void mod; // silence unused — we only need the type
    // Sanity check the auto-mapped surface exists on the namespaced client.
    const { norbix } = makeClient();
    const ns = (norbix.hub as unknown as Record<string, unknown>)['support'] as Record<
      string,
      unknown
    >;
    expect(ns).toBeDefined();
    void mock;
    expect(typeof ns['closeSupportCase']).toBe('function');
    expect(typeof ns['reopenSupportCase']).toBe('function');
    expect(typeof ns['resolveSupportCase']).toBe('function');
    expect(typeof ns['appendSupportCaseMessage']).toBe('function');
    expect(typeof ns['getSupportCase']).toBe('function');
    expect(typeof ns['getSupportCases']).toBe('function');
    expect(typeof ns['openSupportCase']).toBe('function');
    expect(typeof ns['reportNorbixIssue']).toBe('function');
    expect(typeof ns['addSupportCaseAttachment']).toBe('function');
    expect(typeof ns['getSupportCaseAttachments']).toBe('function');
    expect(typeof ns['downloadSupportCaseAttachment']).toBe('function');
    expect(typeof ns['deleteSupportCaseAttachment']).toBe('function');
  });

  it('closeSupportCase: POST /{version}/support/cases/{CaseId}/close', async () => {
    const stub = stubRequestForPath('/{version}/support/cases/{CaseId}/close');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/support/cases/{CaseId}/close',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['support']!['closeSupportCase']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('reopenSupportCase: POST /{version}/support/cases/{CaseId}/reopen', async () => {
    const stub = stubRequestForPath('/{version}/support/cases/{CaseId}/reopen');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/support/cases/{CaseId}/reopen',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['support']!['reopenSupportCase']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('resolveSupportCase: POST /{version}/support/cases/{CaseId}/resolve', async () => {
    const stub = stubRequestForPath('/{version}/support/cases/{CaseId}/resolve');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/support/cases/{CaseId}/resolve',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['support']!['resolveSupportCase']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('appendSupportCaseMessage: POST /{version}/support/cases/{CaseId}/messages', async () => {
    const stub = stubRequestForPath('/{version}/support/cases/{CaseId}/messages');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/support/cases/{CaseId}/messages',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['support']!['appendSupportCaseMessage']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getSupportCase: GET /{version}/support/cases/{CaseId}', async () => {
    const stub = stubRequestForPath('/{version}/support/cases/{CaseId}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/support/cases/{CaseId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['support']!['getSupportCase']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getSupportCases: GET /{version}/support/cases', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/support/cases',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['support']!['getSupportCases']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('openSupportCase: POST /{version}/support/cases', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/support/cases',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['support']!['openSupportCase']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('reportNorbixIssue: POST /{version}/support/issues', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/support/issues',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['support']!['reportNorbixIssue']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('addSupportCaseAttachment: POST /{version}/support/cases/{CaseId}/attachments', async () => {
    const stub = stubRequestForPath('/{version}/support/cases/{CaseId}/attachments');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/support/cases/{CaseId}/attachments',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['support']!['addSupportCaseAttachment']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getSupportCaseAttachments: GET /{version}/support/cases/{CaseId}/attachments', async () => {
    const stub = stubRequestForPath('/{version}/support/cases/{CaseId}/attachments');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/support/cases/{CaseId}/attachments',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['support']!['getSupportCaseAttachments']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('downloadSupportCaseAttachment: GET /{version}/support/cases/{CaseId}/attachments/{AttachmentId}/download', async () => {
    const stub = stubRequestForPath(
      '/{version}/support/cases/{CaseId}/attachments/{AttachmentId}/download',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/support/cases/{CaseId}/attachments/{AttachmentId}/download',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['support']!['downloadSupportCaseAttachment']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('deleteSupportCaseAttachment: DELETE /{version}/support/cases/{CaseId}/attachments/{AttachmentId}', async () => {
    const stub = stubRequestForPath('/{version}/support/cases/{CaseId}/attachments/{AttachmentId}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/support/cases/{CaseId}/attachments/{AttachmentId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['support']!['deleteSupportCaseAttachment']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  // @hand-written:begin
  it('addSupportCaseAttachment sends one multipart file part, not JSON', async () => {
    let sent: { url: string; init?: RequestInit } | undefined;
    const fetchImpl = (async (url: string, init?: RequestInit) => {
      sent = { url, init };
      return new Response(JSON.stringify({ id: 'supf_1' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }) as typeof fetch;
    const { norbix } = makeClient({ fetch: fetchImpl });
    const res = await norbix.hub.support.addSupportCaseAttachment({
      caseId: 'case_1',
      file: new TextEncoder().encode('line one'),
      fileName: 'app.log',
      contentType: 'text/plain',
    });
    expect(res.id).toBe('supf_1');
    expect(sent?.url).toContain('/support/cases/case_1/attachments');
    expect(sent?.init?.method).toBe('POST');
    const headers = new Headers(sent?.init?.headers);
    expect(headers.get('Content-Type')).toBeNull();
    const form = sent?.init?.body as FormData;
    expect(form).toBeInstanceOf(FormData);
    const part = form.get('file') as File;
    expect(part.name).toBe('app.log');
    expect(part.type).toBe('text/plain');
    expect(await part.text()).toBe('line one');
  });

  it('downloadSupportCaseAttachment hands back the bytes', async () => {
    const fetchImpl = (async () =>
      new Response(new Uint8Array([1, 2, 3]), {
        status: 200,
        headers: { 'Content-Type': 'application/octet-stream' },
      })) as typeof fetch;
    const { norbix } = makeClient({ fetch: fetchImpl });
    const bytes = await norbix.hub.support.downloadSupportCaseAttachment({
      caseId: 'case_1',
      attachmentId: 'supf_1',
    });
    expect(Array.from(bytes)).toEqual([1, 2, 3]);
  });
  // @hand-written:end
});
