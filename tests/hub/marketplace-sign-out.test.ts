import { describe, expect, it } from 'vitest';

import { createMockFetch, makeClient } from '../_helpers.js';

/**
 * Route 30 of the marketplace contract (gateway item access-2b): sign an MCP
 * connection out of OAuth. The answer says whether it was signed in and what
 * happened to the vendor token (Revoked, NoRevocationEndpoint, Failed or null).
 */
const INTEGRATION = 'int_6Qp1dW2kRm8NsT4vYc0Hb';

describe('hub.code.signOutMarketplaceIntegration', () => {
  it('POSTs with the connection id in the path only and returns wasSignedIn and revoke', async () => {
    const mock = createMockFetch({ body: { wasSignedIn: true, revoke: 'Revoked' } });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response = await norbix.hub.code.signOutMarketplaceIntegration({
      integrationViewId: INTEGRATION,
    });

    const call = mock.lastCall!;
    const url = new URL(call.url);
    expect(call.method).toBe('POST');
    expect(url.pathname).toBe(`/v2/code/marketplace/integrations/${INTEGRATION}/oauth/sign-out`);
    expect(url.searchParams.has('integrationViewId')).toBe(false);
    expect(JSON.parse((call.body as string | undefined) ?? '{}')).not.toHaveProperty(
      'integrationViewId',
    );
    expect(response.wasSignedIn).toBe(true);
    expect(response.revoke).toBe('Revoked');
  });

  it('reads the access-2b fields of the matrix and the run rows', async () => {
    const mock = createMockFetch({
      body: {
        canManage: false,
        roles: [{ roleId: 'acc_1_nr_2', name: 'Support', canChange: false }],
        tools: [
          {
            name: 'delete_repo',
            readOnly: false,
            grantable: true,
            curated: true,
            excludedFromFullAccess: true,
          },
        ],
      },
    });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const access = await norbix.hub.code.getMarketplaceIntegrationAccess({
      integrationViewId: INTEGRATION,
    });

    expect(access.canManage).toBe(false);
    expect(access.roles?.[0]?.canChange).toBe(false);
    expect(access.tools?.[0]?.excludedFromFullAccess).toBe(true);
    expect(access.tools?.[0]?.curated).toBe(true);
  });

  it('sends integrationId on the runs query', async () => {
    const mock = createMockFetch({
      body: { runs: [{ integrationId: INTEGRATION, toolName: 'create_issue' }] },
    });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response = await norbix.hub.code.getMarketplaceFunctionRuns({
      integrationId: INTEGRATION,
      limit: 5,
    });

    const url = new URL(mock.lastCall!.url);
    expect(url.pathname).toBe('/v2/code/marketplace/functions/runs');
    expect(url.searchParams.get('integrationId')).toBe(INTEGRATION);
    expect(response.runs?.[0]?.toolName).toBe('create_issue');
  });
});
