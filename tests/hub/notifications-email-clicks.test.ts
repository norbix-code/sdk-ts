import { describe, expect, it } from 'vitest';

import { Norbix } from '../../src/index.js';
import { createMockFetch, makeClient } from '../_helpers.js';

/**
 * Email click ids (gateway docs/tasks/email-tracking-links.md), hand-written so
 * a regeneration of `notifications.test.ts` keeps them: what goes on the wire
 * and what comes back.
 */
describe('hub.notifications email click ids', () => {
  it('updateEmailClickTracking sends PATCH with enabled in the body and the project header', async () => {
    const { norbix, mock } = makeClient({});
    await norbix.hub.notifications.updateEmailClickTracking({ enabled: true });

    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url).toContain('/v2/notifications/email/settings/click-tracking');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
    expect(JSON.parse(String(mock.lastCall?.body))).toMatchObject({ enabled: true });
  });

  it('updateEmailClickTracking sends enabled: false as false, not dropped', async () => {
    const { norbix, mock } = makeClient({});
    await norbix.hub.notifications.updateEmailClickTracking({ enabled: false });

    expect(JSON.parse(String(mock.lastCall?.body))).toMatchObject({ enabled: false });
  });

  it('recordEmailClicks posts the clicks and returns the per-click answer', async () => {
    const answer = {
      recorded: 1,
      duplicates: 0,
      flagged: 1,
      rejected: 1,
      clicks: [
        {
          index: 0,
          status: 'recorded',
          flag: 'suspected-scanner',
          flagReason: 'user-agent',
          campaignId: 'cmp_1',
          notificationId: 'ntf_1',
          linkIndex: 3,
          to: ['ann@example.com'],
        },
        { index: 1, status: 'rejected', reason: 'not-valid' },
      ],
    };
    const mock = createMockFetch({ body: answer });
    const norbix = new Norbix({
      bearerToken: 'test-token',
      projectId: 'test-project',
      hubVersion: 'v2',
      baseUrl: { api: 'https://api.norbix.io', hub: 'https://hub.norbix.io' },
      fetch: mock.fetch,
    });
    const clicks = [
      {
        nblid: 'ntf_1.3.v1.Ab12Cd34Ef56Gh78',
        url: 'https://shop.example.com/sale',
        clickedAt: '2026-11-11T10:00:05Z',
        userAgent: 'Mozilla/5.0',
      },
      { nblid: 'made-up' },
    ];

    const result = await norbix.hub.notifications.recordEmailClicks({ clicks });

    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toContain('/v2/notifications/email/clicks');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
    expect(JSON.parse(String(mock.lastCall?.body))).toMatchObject({ clicks });
    expect(result.recorded).toBe(1);
    expect(result.rejected).toBe(1);
    expect(result.clicks?.[0]?.to).toEqual(['ann@example.com']);
    expect(result.clicks?.[1]).toMatchObject({ status: 'rejected', reason: 'not-valid' });
  });
});
