import { describe, expect, it } from 'vitest';

import { createMockFetch, makeClient } from '../_helpers.js';

/**
 * Route 28 of the marketplace contract (gateway item oauth): start the OAuth
 * sign-in of an MCP connection. The answer carries the vendor's authorize URL
 * to open in a browser; route 29 (the callback) is not in the type metadata
 * and has no SDK method.
 */
const INTEGRATION = 'int_6Qp1dW2kRm8NsT4vYc0Hb';

describe('hub.code.startMarketplaceIntegrationSignIn', () => {
  it('POSTs with the connection id in the path only and returns the authorize URL', async () => {
    const mock = createMockFetch({
      body: {
        authorizeUrl: 'https://slack.com/oauth/v2/authorize?client_id=1&state=s1',
        redirectUrl: 'https://hub.norbix.ai/v3/code/marketplace/oauth/callback',
        expiresAt: '2026-10-13T08:10:00Z',
      },
    });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response = await norbix.hub.code.startMarketplaceIntegrationSignIn({
      integrationViewId: INTEGRATION,
    });

    const call = mock.lastCall!;
    const url = new URL(call.url);
    expect(call.method).toBe('POST');
    expect(url.pathname).toBe(`/v2/code/marketplace/integrations/${INTEGRATION}/oauth/start`);
    expect(url.searchParams.has('integrationViewId')).toBe(false);
    expect(JSON.parse((call.body as string | undefined) ?? '{}')).not.toHaveProperty(
      'integrationViewId',
    );
    expect(response.authorizeUrl).toContain('slack.com/oauth/v2/authorize');
    expect(response.redirectUrl).toBe('https://hub.norbix.ai/v3/code/marketplace/oauth/callback');
  });

  it('reads the sign-in fields of a connection and a listing', async () => {
    const mock = createMockFetch({
      body: {
        integration: {
          viewId: INTEGRATION,
          signedIn: true,
          signedInBy: 'ada@example.test',
          signedInAt: '2026-10-13T08:00:00Z',
          tokenExpiresAt: '2026-10-13T20:00:00Z',
        },
      },
    });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response = await norbix.hub.code.getMarketplaceIntegration({
      integrationViewId: INTEGRATION,
    });

    expect(response.integration?.signedIn).toBe(true);
    expect(response.integration?.signedInBy).toBe('ada@example.test');
    expect(response.integration?.tokenExpiresAt).toBe('2026-10-13T20:00:00Z');
  });
});
