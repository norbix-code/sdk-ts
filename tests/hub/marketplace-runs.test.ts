import { describe, expect, it } from 'vitest';

import type { CodeMashHub2 } from '../../src/types/hub2.dtos.js';
import { createMockFetch, makeClient } from '../_helpers.js';

/**
 * GET /{version}/code/marketplace/functions/runs — the last runs of one
 * marketplace function (every source), or of the function behind one trigger
 * or one scheduler task. Exactly one of functionId / triggerId / taskId.
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

  it('sends functionId for one function and returns the new row fields', async () => {
    const run = {
      firedAt: '2026-10-13T08:00:00Z',
      event: 'invoke',
      source: 'api-key',
      functionId: 'func_1p4R3gTobGZpD6fXvHT4rd',
      succeeded: true,
      status: 'ok',
      durationMs: 42,
      correlationId: '0f8e2c9a4b7d4e1f9a3c5b6d7e8f9012',
      hasDetails: true,
    } as CodeMashHub2.MarketplaceFunctionRunDto;
    const mock = createMockFetch({ body: { runs: [run] } });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response = await norbix.hub.code.getMarketplaceFunctionRuns({
      functionId: 'func_1p4R3gTobGZpD6fXvHT4rd',
      limit: 50,
    });

    const call = mock.lastCall!;
    const url = new URL(call.url);
    expect(call.method).toBe('GET');
    expect(url.pathname).toBe('/v2/code/marketplace/functions/runs');
    expect(Object.fromEntries(url.searchParams)).toEqual({
      functionId: 'func_1p4R3gTobGZpD6fXvHT4rd',
      limit: '50',
    });
    expect(call.body).toBeUndefined();
    expect(response.runs).toEqual([run]);
  });
});

describe('hub.code.getMarketplaceFunctionRunDetails', () => {
  it('reads the log lines of one run by its correlation id (GET /logs/audit, targetCorrelationId)', async () => {
    const line = {
      eventCode: 'marketplace:run:started',
      correlationId: '0f8e2c9a4b7d4e1f9a3c5b6d7e8f9012',
    };
    const mock = createMockFetch({ body: { items: [line] } });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response = await norbix.hub.code.getMarketplaceFunctionRunDetails(
      '0f8e2c9a4b7d4e1f9a3c5b6d7e8f9012',
    );

    const call = mock.lastCall!;
    const url = new URL(call.url);
    expect(call.method).toBe('GET');
    expect(url.pathname).toBe('/v2/logs/audit');
    expect(Object.fromEntries(url.searchParams)).toEqual({
      targetCorrelationId: '0f8e2c9a4b7d4e1f9a3c5b6d7e8f9012',
    });
    expect(call.body).toBeUndefined();
    expect(call.headers.get('norbix-project-id')).toBe('test-project');
    expect(response.items).toEqual([line]);
  });
});
