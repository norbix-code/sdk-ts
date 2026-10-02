import { describe, expect, it } from 'vitest';

import { AiModule } from '../../src/api/ai.js';
import { createMockFetch, expectedUrl, makeClient, stubRequestForPath } from '../_helpers.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Tests for api.ai (18 endpoints).
 *
 * Each method is asserted against:
 *   - presence on the module (smoke check)
 *   - issued HTTP verb + URL with version segment substituted and path
 *     tokens interpolated from a stubbed request
 *   - auth, project, and (when applicable) account headers
 *   - account-scope guard: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId
 */
describe('api.ai', () => {
  it('module exposes 18 method(s)', () => {
    const mock = createMockFetch();
    const mod = new AiModule({} as never);
    void mod; // silence unused — we only need the type
    // Sanity check the auto-mapped surface exists on the namespaced client.
    const { norbix } = makeClient();
    const ns = (norbix.api as unknown as Record<string, unknown>)['ai'] as Record<string, unknown>;
    expect(ns).toBeDefined();
    void mock;
    expect(typeof ns['uploadEndUserChatAttachment']).toBe('function');
    expect(typeof ns['listEndUserChatAttachments']).toBe('function');
    expect(typeof ns['deleteEndUserChatAttachment']).toBe('function');
    expect(typeof ns['setEndUserChatEntryFeedback']).toBe('function');
    expect(typeof ns['listEndUserChatMemory']).toBe('function');
    expect(typeof ns['forgetEndUserChatMemory']).toBe('function');
    expect(typeof ns['getEndUserChatAvailability']).toBe('function');
    expect(typeof ns['listEndUserChatSessions']).toBe('function');
    expect(typeof ns['createEndUserChatSession']).toBe('function');
    expect(typeof ns['getEndUserChatSession']).toBe('function');
    expect(typeof ns['renameEndUserChatSession']).toBe('function');
    expect(typeof ns['pinEndUserChatSession']).toBe('function');
    expect(typeof ns['archiveEndUserChatSession']).toBe('function');
    expect(typeof ns['deleteEndUserChatSession']).toBe('function');
    expect(typeof ns['getEndUserChatEntries']).toBe('function');
    expect(typeof ns['startEndUserChatTurn']).toBe('function');
    expect(typeof ns['getEndUserAiTools']).toBe('function');
    expect(typeof ns['invokeEndUserAiTool']).toBe('function');
  });

  it('uploadEndUserChatAttachment: POST /{version}/ai/chat/sessions/{SessionId}/attachments', async () => {
    const stub = stubRequestForPath('/{version}/ai/chat/sessions/{SessionId}/attachments');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/ai/chat/sessions/{SessionId}/attachments',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['ai']!['uploadEndUserChatAttachment']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('listEndUserChatAttachments: GET /{version}/ai/chat/sessions/{SessionId}/attachments', async () => {
    const stub = stubRequestForPath('/{version}/ai/chat/sessions/{SessionId}/attachments');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/ai/chat/sessions/{SessionId}/attachments',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['ai']!['listEndUserChatAttachments']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteEndUserChatAttachment: DELETE /{version}/ai/chat/attachments/{AttachmentId}', async () => {
    const stub = stubRequestForPath('/{version}/ai/chat/attachments/{AttachmentId}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/ai/chat/attachments/{AttachmentId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['ai']!['deleteEndUserChatAttachment']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('setEndUserChatEntryFeedback: PUT /{version}/ai/chat/sessions/{SessionId}/entries/{EntryId}/feedback', async () => {
    const stub = stubRequestForPath(
      '/{version}/ai/chat/sessions/{SessionId}/entries/{EntryId}/feedback',
    );
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/ai/chat/sessions/{SessionId}/entries/{EntryId}/feedback',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['ai']!['setEndUserChatEntryFeedback']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('listEndUserChatMemory: GET /{version}/ai/chat/memory', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/ai/chat/memory',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['ai']!['listEndUserChatMemory']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('forgetEndUserChatMemory: DELETE /{version}/ai/chat/memory/{NoteId}', async () => {
    const stub = stubRequestForPath('/{version}/ai/chat/memory/{NoteId}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/ai/chat/memory/{NoteId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['ai']!['forgetEndUserChatMemory']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEndUserChatAvailability: GET /{version}/ai/chat/availability', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/ai/chat/availability',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['ai']!['getEndUserChatAvailability']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('listEndUserChatSessions: GET /{version}/ai/chat/sessions', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/ai/chat/sessions',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['ai']!['listEndUserChatSessions']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('createEndUserChatSession: POST /{version}/ai/chat/sessions', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/ai/chat/sessions',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['ai']!['createEndUserChatSession']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEndUserChatSession: GET /{version}/ai/chat/sessions/{SessionId}', async () => {
    const stub = stubRequestForPath('/{version}/ai/chat/sessions/{SessionId}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/ai/chat/sessions/{SessionId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['ai']!['getEndUserChatSession']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('renameEndUserChatSession: PATCH /{version}/ai/chat/sessions/{SessionId}', async () => {
    const stub = stubRequestForPath('/{version}/ai/chat/sessions/{SessionId}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/ai/chat/sessions/{SessionId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['ai']!['renameEndUserChatSession']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('pinEndUserChatSession: PUT /{version}/ai/chat/sessions/{SessionId}/pin', async () => {
    const stub = stubRequestForPath('/{version}/ai/chat/sessions/{SessionId}/pin');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/ai/chat/sessions/{SessionId}/pin',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['ai']!['pinEndUserChatSession']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('archiveEndUserChatSession: PUT /{version}/ai/chat/sessions/{SessionId}/archive', async () => {
    const stub = stubRequestForPath('/{version}/ai/chat/sessions/{SessionId}/archive');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/ai/chat/sessions/{SessionId}/archive',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['ai']!['archiveEndUserChatSession']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteEndUserChatSession: DELETE /{version}/ai/chat/sessions/{SessionId}', async () => {
    const stub = stubRequestForPath('/{version}/ai/chat/sessions/{SessionId}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/ai/chat/sessions/{SessionId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['ai']!['deleteEndUserChatSession']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEndUserChatEntries: GET /{version}/ai/chat/sessions/{SessionId}/entries', async () => {
    const stub = stubRequestForPath('/{version}/ai/chat/sessions/{SessionId}/entries');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/ai/chat/sessions/{SessionId}/entries',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['ai']!['getEndUserChatEntries']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('startEndUserChatTurn: POST /{version}/ai/chat/turn', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/ai/chat/turn',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['ai']!['startEndUserChatTurn']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getEndUserAiTools: GET /{version}/ai/tools', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/ai/tools',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['ai']!['getEndUserAiTools']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('invokeEndUserAiTool: POST /{version}/ai/tools/{ToolName}', async () => {
    const stub = stubRequestForPath('/{version}/ai/tools/{ToolName}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.io',
      path: '/{version}/ai/tools/{ToolName}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['ai']!['invokeEndUserAiTool']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });
});
