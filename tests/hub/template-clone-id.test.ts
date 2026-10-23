import { describe, expect, it } from 'vitest';

import { Norbix } from '../../src/index.js';
import type { CodeMashHub2 } from '../../src/types/hub2.dtos.js';
import { createMockFetch } from '../_helpers.js';

/**
 * Template clone answers with the new copy's id (gateway 2026-10-23,
 * `IReturn<IdResponse>`, was `EmptyResponse`). The caller gets `{ id }` back
 * and can open the copy without listing the templates again.
 */
function cloneClient(newId: string) {
  const mock = createMockFetch({ body: { id: newId } });
  const norbix = new Norbix({
    bearerToken: 'test-token',
    projectId: 'test-project',
    hubVersion: 'v2',
    baseUrl: { api: 'https://api.norbix.io', hub: 'https://hub.norbix.io' },
    fetch: mock.fetch,
  });
  return { norbix, mock };
}

describe('hub.notifications — template clone returns the new copy id', () => {
  it('cloneEmailTemplate returns { id } of the copy', async () => {
    const { norbix, mock } = cloneClient('email-copy-1');

    const result: CodeMashHub2.IdResponse = await norbix.hub.notifications.cloneEmailTemplate({
      id: 'email-source',
    });

    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toContain('/v2/notifications/email/templates/email-source/clone');
    expect(result.id).toBe('email-copy-1');
  });

  it('cloneSmsTemplate returns { id } of the copy', async () => {
    const { norbix, mock } = cloneClient('sms-copy-1');

    const result: CodeMashHub2.IdResponse = await norbix.hub.notifications.cloneSmsTemplate({
      id: 'sms-source',
    });

    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toContain('/v2/notifications/sms/templates/sms-source/clone');
    expect(result.id).toBe('sms-copy-1');
  });

  it('clonePushTemplate returns { id } of the copy', async () => {
    const { norbix, mock } = cloneClient('push-copy-1');

    const result: CodeMashHub2.IdResponse = await norbix.hub.notifications.clonePushTemplate({
      id: 'push-source',
    });

    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toContain('/v2/notifications/push/templates/push-source/clone');
    expect(result.id).toBe('push-copy-1');
  });
});
