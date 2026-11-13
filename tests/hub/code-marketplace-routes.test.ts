import { describe, expect, it } from 'vitest';

import { makeClient } from '../_helpers.js';

/**
 * Every marketplace route on `hub.code` on the exact path (the generated
 * tests check the URL with `startsWith`): the verb, the pathname with the ids
 * filled in, the query of a read and the JSON body of a write — the ids never
 * leak into either. `GET /code/marketplace/oauth/callback` is the vendor's
 * browser redirect and has no SDK method. Hand-written, so a regeneration of
 * `code.test.ts` keeps it. Twins: Go `norbix/hub/code_marketplace_test.go`,
 * Python `tests/hub/test_code.py`. Every call goes to a mock fetch.
 */

const LISTING = 'ml_norbix_database_v1';
const INT = 'int_6rBACnEaxQ0x1jTiHtAuWV';
const FN = 'func_4hT8rW2nQ6xLmP0vZ3kJ1c';
const M = '/v2/code/marketplace';
const I = `${M}/integrations/${INT}`;

interface RouteCase {
  method: string;
  request: Record<string, unknown>;
  verb: string;
  path: string;
  query?: Record<string, string>;
  body?: Record<string, unknown>;
}

const cases: RouteCase[] = [
  // listings
  {
    method: 'getMarketplaceListings',
    request: { search: 'slack', pageSize: 5 },
    verb: 'GET',
    path: `${M}/listings`,
    query: { search: 'slack', pageSize: '5' },
  },
  {
    method: 'getMarketplaceListing',
    request: { listingViewId: LISTING },
    verb: 'GET',
    path: `${M}/listings/${LISTING}`,
  },
  {
    method: 'getMarketplaceListingFunctionTokens',
    request: { listingViewId: LISTING, functionKey: 'db.find' },
    verb: 'GET',
    path: `${M}/listings/${LISTING}/functions/db.find/tokens`,
  },
  // connections (integrations)
  {
    method: 'getMarketplaceIntegrations',
    request: { pageSize: 5 },
    verb: 'GET',
    path: `${M}/integrations`,
    query: { pageSize: '5' },
  },
  {
    method: 'saveMarketplaceIntegration',
    request: { listingViewId: LISTING, name: 'DB' },
    verb: 'POST',
    path: `${M}/integrations`,
    body: { listingViewId: LISTING, name: 'DB' },
  },
  {
    method: 'getMarketplaceIntegration',
    request: { integrationViewId: INT },
    verb: 'GET',
    path: I,
  },
  {
    method: 'deleteMarketplaceIntegration',
    request: { integrationViewId: INT },
    verb: 'DELETE',
    path: I,
  },
  {
    method: 'enableMarketplaceIntegration',
    request: { integrationViewId: INT },
    verb: 'POST',
    path: `${I}/enable`,
    body: {},
  },
  {
    method: 'disableMarketplaceIntegration',
    request: { integrationViewId: INT },
    verb: 'POST',
    path: `${I}/disable`,
    body: {},
  },
  {
    method: 'testMarketplaceIntegration',
    request: { integrationViewId: INT },
    verb: 'POST',
    path: `${I}/test`,
    body: {},
  },
  {
    method: 'getMarketplaceFunctionCatalog',
    request: { integrationViewId: INT },
    verb: 'GET',
    path: `${I}/catalog`,
  },
  {
    method: 'getMarketplaceIntegrationTools',
    request: { integrationViewId: INT },
    verb: 'GET',
    path: `${I}/tools`,
  },
  {
    method: 'getMarketplaceIntegrationAccess',
    request: { integrationViewId: INT },
    verb: 'GET',
    path: `${I}/access`,
  },
  {
    method: 'setMarketplaceIntegrationRoleAccess',
    request: { integrationViewId: INT, roleId: 'rol_1', package: 'ReadOnly', manage: false },
    verb: 'PUT',
    path: `${I}/access/roles`,
    body: { roleId: 'rol_1', package: 'ReadOnly', manage: false },
  },
  {
    method: 'saveMarketplaceIntegrationCustomAccess',
    request: { integrationViewId: INT, roleId: 'rol_1', tools: ['get_me'] },
    verb: 'POST',
    path: `${I}/access/roles/custom`,
    body: { roleId: 'rol_1', tools: ['get_me'] },
  },
  {
    method: 'startMarketplaceIntegrationSignIn',
    request: { integrationViewId: INT },
    verb: 'POST',
    path: `${I}/oauth/start`,
    body: {},
  },
  {
    method: 'signOutMarketplaceIntegration',
    request: { integrationViewId: INT },
    verb: 'POST',
    path: `${I}/oauth/sign-out`,
    body: {},
  },
  {
    method: 'replaceMarketplaceIntegrationSecrets',
    request: { integrationViewId: INT, secrets: { apiKey: 'k' } },
    verb: 'PUT',
    path: `${I}/secrets`,
    body: { secrets: { apiKey: 'k' } },
  },
  {
    method: 'revealMarketplaceIntegrationSecrets',
    request: { integrationViewId: INT },
    verb: 'POST',
    path: `${I}/secrets/reveal`,
    body: {},
  },
  {
    method: 'setMarketplaceIntegrationTokenMappings',
    request: {
      integrationViewId: INT,
      tokenMappings: [{ key: 'Channel', value: '#sales', resolver: 'Custom' }],
    },
    verb: 'PUT',
    path: `${I}/token-mappings`,
    body: { tokenMappings: [{ key: 'Channel', value: '#sales', resolver: 'Custom' }] },
  },
  // functions
  {
    method: 'getMarketplaceFunctions',
    request: { integrationViewId: INT },
    verb: 'GET',
    path: `${I}/functions`,
  },
  {
    method: 'saveMarketplaceFunction',
    request: { integrationViewId: INT, functionKey: 'db.find', name: 'Find' },
    verb: 'POST',
    path: `${I}/functions`,
    body: { functionKey: 'db.find', name: 'Find' },
  },
  {
    method: 'getMarketplaceFunction',
    request: { integrationViewId: INT, functionViewId: FN },
    verb: 'GET',
    path: `${I}/functions/${FN}`,
  },
  {
    method: 'deleteMarketplaceFunction',
    request: { integrationViewId: INT, functionViewId: FN },
    verb: 'DELETE',
    path: `${I}/functions/${FN}`,
  },
  {
    method: 'enableMarketplaceFunction',
    request: { integrationViewId: INT, functionViewId: FN },
    verb: 'POST',
    path: `${I}/functions/${FN}/enable`,
    body: {},
  },
  {
    method: 'disableMarketplaceFunction',
    request: { integrationViewId: INT, functionViewId: FN },
    verb: 'POST',
    path: `${I}/functions/${FN}/disable`,
    body: {},
  },
  {
    method: 'getMarketplaceFunctionTokens',
    request: { integrationViewId: INT, functionViewId: FN },
    verb: 'GET',
    path: `${I}/functions/${FN}/tokens`,
  },
  {
    method: 'invokeMarketplaceFunction',
    request: { functionViewId: FN, payload: '{"a":1}' },
    verb: 'POST',
    path: `${M}/functions/${FN}/invoke`,
    body: { payload: '{"a":1}' },
  },
  {
    method: 'getMarketplaceFunctionRuns',
    request: { functionId: FN, limit: 5 },
    verb: 'GET',
    path: `${M}/functions/runs`,
    query: { functionId: FN, limit: '5' },
  },
  // workflow listing install (row "Marketplace workflow listings + install")
  {
    method: 'installMarketplaceWorkflow',
    request: { listingViewId: 'ml_workflow_order_thanks_v1', references: { orders: 'orders' } },
    verb: 'POST',
    path: `${M}/listings/ml_workflow_order_thanks_v1/install-workflow`,
    body: { references: { orders: 'orders' } },
  },
];

type Module = Record<string, (request?: unknown) => Promise<unknown>>;

describe('hub.code marketplace routes — exact path', () => {
  for (const c of cases) {
    it(`${c.method} → ${c.verb} ${c.path}`, async () => {
      const { norbix, mock } = makeClient({});
      const code = (norbix.hub as unknown as Record<string, Module>)['code']!;
      await code[c.method]!(c.request);

      const call = mock.lastCall!;
      const url = new URL(call.url);
      expect(call.method).toBe(c.verb);
      expect(url.pathname).toBe(c.path);
      expect(Object.fromEntries(url.searchParams)).toEqual(c.query ?? {});
      if (c.body === undefined) {
        expect(call.body ?? '').toBe('');
      } else {
        expect(JSON.parse(call.body ?? '{}')).toEqual(c.body);
      }
    });
  }

  it('covers the 30 marketplace routes with an SDK method (all but the OAuth browser callback)', () => {
    expect(new Set(cases.map((c) => `${c.verb} ${c.path}`)).size).toBe(30);
  });
});
