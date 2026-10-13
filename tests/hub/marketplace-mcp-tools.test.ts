import { describe, expect, it } from 'vitest';

import type { CodeMashHub2 } from '../../src/types/hub2.dtos.js';
import { createMockFetch, makeClient } from '../_helpers.js';

/**
 * GET /{version}/code/marketplace/integrations/{IntegrationViewId}/tools — the
 * stored tool catalog of an MCP connection for the request's env.
 *
 * The generated test in code.test.ts sends a stub request; this case pins that
 * the connection id goes into the path (never the query or a body) and that the
 * catalog comes back as the gateway sent it.
 */
describe('hub.code.getMarketplaceIntegrationTools', () => {
  it('puts the connection id in the path on a GET with no body and returns the catalog', async () => {
    const tool = {
      name: 'create_issue',
      title: 'Create issue',
      description: 'Open a new issue in a repository',
      inputSchema:
        '{"type":"object","properties":{"title":{"type":"string"}},"required":["title"]}',
      readOnlyHint: false,
      destructiveHint: false,
    } as CodeMashHub2.MarketplaceMcpToolDto;
    const mock = createMockFetch({
      body: {
        tools: [tool],
        listedAt: '2026-10-13T08:00:00Z',
        catalogHash: '4ce4259bec02f283',
        truncated: false,
      },
    });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response = await norbix.hub.code.getMarketplaceIntegrationTools({
      integrationViewId: 'int_7Hq2mcpServer',
    });

    const call = mock.lastCall!;
    const url = new URL(call.url);
    expect(call.method).toBe('GET');
    expect(url.pathname).toBe('/v2/code/marketplace/integrations/int_7Hq2mcpServer/tools');
    expect(url.searchParams.has('integrationViewId')).toBe(false);
    expect(call.body).toBeUndefined();
    expect(call.headers.get('norbix-project-id')).toBe('test-project');
    expect(response.tools).toEqual([tool]);
    expect(response.catalogHash).toBe('4ce4259bec02f283');
    expect(response.truncated).toBe(false);
  });
});
