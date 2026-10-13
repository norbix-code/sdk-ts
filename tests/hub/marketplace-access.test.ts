import { describe, expect, it } from 'vitest';

import type { CodeMashHub2 } from '../../src/types/hub2.dtos.js';
import { createMockFetch, makeClient } from '../_helpers.js';

/**
 * Routes 25–27 of the marketplace contract (gateway item access): the access
 * matrix of a connection, a role's package and a custom access policy.
 *
 * The generated tests in code.test.ts send a stub request; these cases pin
 * that the connection id goes into the path (never the query or the body),
 * that the GET sends no body, and that the PUT / POST carry the role and the
 * ticks in the JSON body.
 */
const INTEGRATION = 'int_6Qp1dW2kRm8NsT4vYc0Hb';
const ROLE = 'acc_6Qp1dW2kRm8NsT4vYc0Hb_nr_3kLm9QwErTyU';
const BASE = `/v2/code/marketplace/integrations/${INTEGRATION}/access`;

describe('hub.code — marketplace connection access (routes 25–27)', () => {
  it('getMarketplaceIntegrationAccess: GET with the id in the path, no body, matrix read back', async () => {
    const role = {
      roleId: ROLE,
      name: 'Projects Developer',
      scope: 'account',
      isSystem: true,
      fixed: false,
      package: 'None',
      isCustom: false,
      manage: false,
      custom: [],
      defaultNotApplied: 'The person who enabled the connection may not manage policies.',
    } as unknown as CodeMashHub2.MarketplaceAccessRoleDto;
    const mock = createMockFetch({
      body: {
        roles: [role],
        packages: [
          { kind: 'ReadOnly', policyId: 'pol_1', name: 'GitHub — Read-only', exists: true },
        ],
        tools: [{ name: 'get_me', readOnly: true, grantable: true }],
        functions: [{ functionId: 'func_1', name: 'Create issue', functionKey: 'create_issue' }],
      },
    });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response = await norbix.hub.code.getMarketplaceIntegrationAccess({
      integrationViewId: INTEGRATION,
    });

    const call = mock.lastCall!;
    const url = new URL(call.url);
    expect(call.method).toBe('GET');
    expect(url.pathname).toBe(BASE);
    expect(url.searchParams.has('integrationViewId')).toBe(false);
    expect(call.body).toBeUndefined();
    expect(call.headers.get('norbix-project-id')).toBe('test-project');
    expect(response.roles).toEqual([role]);
    expect(response.roles?.[0]?.defaultNotApplied).toContain('manage policies');
    expect(response.tools?.[0]?.grantable).toBe(true);
  });

  it('setMarketplaceIntegrationRoleAccess: PUT with the id in the path and the role in the body', async () => {
    const mock = createMockFetch({ body: { id: ROLE } });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response = await norbix.hub.code.setMarketplaceIntegrationRoleAccess({
      integrationViewId: INTEGRATION,
      roleId: ROLE,
      package: 'ReadOnly' as CodeMashHub2.MarketplaceAccessLevel,
      manage: false,
    });

    const call = mock.lastCall!;
    expect(call.method).toBe('PUT');
    expect(new URL(call.url).pathname).toBe(`${BASE}/roles`);
    expect(JSON.parse(call.body as string)).toEqual({
      roleId: ROLE,
      package: 'ReadOnly',
      manage: false,
    });
    expect(response.id).toBe(ROLE);
  });

  it('saveMarketplaceIntegrationCustomAccess: POST with the id in the path and the ticks in the body', async () => {
    const mock = createMockFetch({ body: { policyId: 'pol_9', created: true, usedByRoles: 1 } });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response = await norbix.hub.code.saveMarketplaceIntegrationCustomAccess({
      integrationViewId: INTEGRATION,
      roleId: ROLE,
      basePackage: 'ReadOnly' as CodeMashHub2.MarketplaceAccessLevel,
      tools: ['create_issue'],
      functions: ['func_4hT2b9QkLm3XcT1yRfGh7a'],
      manage: false,
      newPolicyForThisRoleOnly: true,
    });

    const call = mock.lastCall!;
    expect(call.method).toBe('POST');
    expect(new URL(call.url).pathname).toBe(`${BASE}/roles/custom`);
    expect(JSON.parse(call.body as string)).toEqual({
      roleId: ROLE,
      basePackage: 'ReadOnly',
      tools: ['create_issue'],
      functions: ['func_4hT2b9QkLm3XcT1yRfGh7a'],
      manage: false,
      newPolicyForThisRoleOnly: true,
    });
    expect(response).toMatchObject({ policyId: 'pol_9', created: true, usedByRoles: 1 });
  });

  it('testMarketplaceIntegration: accessChanges and the step errorCode come back as sent', async () => {
    const mock = createMockFetch({
      body: {
        steps: [
          {
            key: 'mcp.tools',
            label: 'Tools listed',
            requiredForFunctions: true,
            succeeded: false,
            skipped: false,
            message: 'The server listed no tools.',
            errorCode: 'CM-ERRORS-MARKETPLACE-018',
          },
        ],
        accessChanges: {
          readOnlyAdded: ['get_me'],
          readOnlyRemoved: [],
          notGrantable: ['bad name'],
        },
      },
    });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response: CodeMashHub2.TestMarketplaceIntegrationResponse =
      await norbix.hub.code.testMarketplaceIntegration({ integrationViewId: INTEGRATION });

    expect(response.steps?.[0]?.errorCode).toBe('CM-ERRORS-MARKETPLACE-018');
    expect(response.accessChanges).toEqual({
      readOnlyAdded: ['get_me'],
      readOnlyRemoved: [],
      notGrantable: ['bad name'],
    });
  });
});
