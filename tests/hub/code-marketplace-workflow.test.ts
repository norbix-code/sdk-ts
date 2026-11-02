import { describe, expect, it } from 'vitest';

import { makeClient } from '../_helpers.js';

/**
 * Workflow listings (gateway contract Code.Marketplace.md §11a), hand-written so
 * a regeneration of `code.test.ts` keeps them: where each parameter lands.
 */
describe('hub.code workflow listings', () => {
  const references = { orders: 'orders', thanks: 'tpl_1', emailIntegration: 'int_1' };

  it('installMarketplaceWorkflow puts the listing in the path and the rest in the body', async () => {
    const { norbix, mock } = makeClient({});
    await norbix.hub.code.installMarketplaceWorkflow({
      listingViewId: 'ml_workflow_order_thanks_v1',
      name: 'Thanks',
      executionIdentityId: 'usr_1',
      references,
    });

    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toContain(
      '/code/marketplace/listings/ml_workflow_order_thanks_v1/install-workflow',
    );
    const body = JSON.parse(String(mock.lastCall?.body)) as Record<string, unknown>;
    expect(body).toMatchObject({ name: 'Thanks', executionIdentityId: 'usr_1', references });
  });

  it('the env goes in the norbix-env header', async () => {
    const { norbix, mock } = makeClient({ env: 'TEST' });
    await norbix.hub.code.installMarketplaceWorkflow({
      listingViewId: 'ml_workflow_order_thanks_v1',
      references,
    });

    expect(mock.lastCall?.headers.get('norbix-env')).toBe('TEST');
  });

  it('getMarketplaceListings sends kind in the query, and nothing when it is not given', async () => {
    const { norbix, mock } = makeClient({});
    await norbix.hub.code.getMarketplaceListings({ kind: 'Workflow' as never });
    expect(new URL(String(mock.lastCall?.url)).searchParams.get('kind')).toBe('Workflow');

    await norbix.hub.code.getMarketplaceListings({});
    expect(new URL(String(mock.lastCall?.url)).searchParams.has('kind')).toBe(false);
  });
});
