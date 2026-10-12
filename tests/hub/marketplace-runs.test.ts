import { describe, expect, it } from 'vitest';

import type { CodeMashHub2 } from '../../src/types/hub2.dtos.js';
import { createMockFetch, makeClient } from '../_helpers.js';

/**
 * GET /{version}/code/marketplace/functions/runs — the last runs of the
 * marketplace function behind one trigger or one scheduler task.
 *
 * The generated test in code.test.ts sends an empty request; these cases pin
 * where the query values go (query string, never a body) and that the
 * response's `runs` array comes back as the gateway sent it.
 */
describe('hub.code.getMarketplaceFunctionRuns', () => {
  it('sends triggerId and limit as query parameters on a GET with no body', async () => {
    const { norbix, mock } = makeClient();
    const request: Partial<CodeMashHub2.GetMarketplaceFunctionRuns> = {
      triggerId: 'trg_123',
      limit: 5,
    };

    await norbix.hub.code.getMarketplaceFunctionRuns(request);

    const call = mock.lastCall!;
    const url = new URL(call.url);
    expect(call.method).toBe('GET');
    expect(url.pathname).toBe('/v2/code/marketplace/functions/runs');
    expect(url.searchParams.get('triggerId')).toBe('trg_123');
    expect(url.searchParams.get('limit')).toBe('5');
    expect(url.searchParams.has('taskId')).toBe(false);
    expect(call.body).toBeUndefined();
    expect(call.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('sends taskId for a scheduler task and returns the runs newest first', async () => {
    const run: CodeMashHub2.MarketplaceFunctionRunDto = {
      firedAt: '2026-10-12T10:00:00Z',
      event: 'scheduler.fired',
      source: 'scheduler',
      functionId: 'func_1',
      succeeded: true,
    } as CodeMashHub2.MarketplaceFunctionRunDto;
    const mock = createMockFetch({ body: { runs: [run] } });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response = await norbix.hub.code.getMarketplaceFunctionRuns({ taskId: 'tsk_9' });

    const url = new URL(mock.lastCall!.url);
    expect(url.pathname).toBe('/v2/code/marketplace/functions/runs');
    expect(url.searchParams.get('taskId')).toBe('tsk_9');
    expect(url.searchParams.has('triggerId')).toBe(false);
    expect(response.runs).toEqual([run]);
  });
});
