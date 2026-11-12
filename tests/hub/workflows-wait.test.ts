import { afterEach, describe, expect, it, vi } from 'vitest';

import { NorbixTimeoutError, stepOutput } from '../../src/index.js';
import type { CodeMashApi2 } from '../../src/types/api2.dtos.js';
import type { CodeMashHub2 } from '../../src/types/hub2.dtos.js';
import { createMockFetch, makeClient } from '../_helpers.js';

/**
 * Hand-written workflow helpers (Code.Workflows.md §15):
 * `hub.code.workflows.waitForRun(runId, { timeoutMs, pollMs })` reads
 * GET /{version}/code/workflows/runs/{runId} until the run is finished or
 * waiting; `run.stepOutput<T>(stepId)` reads the latest succeeded execution.
 * Group approval (§3.3b): a resume answers the run still `waiting`, with
 * `require` and the `answers` so far on `waitingOn[]`.
 */
const RUN_ID = 'wfr_1p4R3gTobGZpD6fXvHT4rd';

function step(stepId: string, status: string, pass: number, attempt: number, output?: unknown) {
  return {
    stepId,
    kind: 'transform',
    status,
    pass,
    attempt,
    output,
  } as unknown as CodeMashHub2.WorkflowRunStepDto;
}

function run(status: string, steps: CodeMashHub2.WorkflowRunStepDto[] = []) {
  return {
    runId: RUN_ID,
    workflowId: 'wf_1',
    status,
    steps,
  } as unknown as CodeMashHub2.WorkflowRunDto;
}

/** A fetch that answers each read with the next run of the list (the last one repeats). */
function sequence(runs: CodeMashHub2.WorkflowRunDto[]) {
  const urls: string[] = [];
  const fetchImpl = vi.fn(async (input: string | URL | Request, init?: RequestInit) => {
    urls.push(
      `${(init?.method ?? 'GET').toUpperCase()} ${typeof input === 'string' ? input : input.toString()}`,
    );
    const body = runs[Math.min(urls.length - 1, runs.length - 1)];
    return new Response(JSON.stringify({ run: body }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }) as unknown as typeof fetch;
  return { fetch: fetchImpl, urls };
}

afterEach(() => {
  vi.useRealTimers();
});

describe('hub.code.workflows.waitForRun', () => {
  it('reads the run until it succeeds and returns it with stepOutput', async () => {
    vi.useFakeTimers();
    const mock = sequence([
      run('running'),
      run('running'),
      run('succeeded', [step('total', 'succeeded', 1, 1, { sum: 3 })]),
    ]);
    const { norbix } = makeClient({ fetch: mock.fetch });

    const pending = norbix.hub.code.workflows.waitForRun(RUN_ID, {
      timeoutMs: 10_000,
      pollMs: 250,
    });
    await vi.advanceTimersByTimeAsync(500);
    const result = await pending;

    expect(mock.urls).toEqual(
      Array(3).fill(`GET https://hub.norbix.io/v2/code/workflows/runs/${RUN_ID}`),
    );
    expect(result.status).toBe('succeeded');
    expect(result.stepOutput<{ sum: number }>('total')).toEqual({ sum: 3 });
  });

  it('stops at waiting — a run parked on a wait is settled', async () => {
    const mock = sequence([run('waiting')]);
    const { norbix } = makeClient({ fetch: mock.fetch });

    const result = await norbix.hub.code.workflows.waitForRun(RUN_ID);

    expect(mock.urls).toHaveLength(1);
    expect(result.status).toBe('waiting');
  });

  it('throws NorbixTimeoutError with the last run when the time is up', async () => {
    vi.useFakeTimers();
    const mock = sequence([run('running')]);
    const { norbix } = makeClient({ fetch: mock.fetch });

    const pending = norbix.hub.code.workflows.waitForRun(RUN_ID, { timeoutMs: 1_000, pollMs: 400 });
    const caught = pending.catch((e: unknown) => e);
    await vi.advanceTimersByTimeAsync(1_000);
    const error = await caught;

    expect(error).toBeInstanceOf(NorbixTimeoutError);
    expect((error as NorbixTimeoutError).code).toBe('NORBIX_TIMEOUT');
    expect(((error as NorbixTimeoutError).raw as CodeMashHub2.WorkflowRunDto).status).toBe(
      'running',
    );
    // reads at 0, 400, 800 and the last one at 1 000 ms
    expect(mock.urls).toHaveLength(4);
  });
});

describe('stepOutput', () => {
  it('takes the highest pass, then the highest attempt, of the succeeded executions', () => {
    const r = run('succeeded', [
      step('fetch', 'succeeded', 1, 1, 'pass 1'),
      step('fetch', 'failed', 2, 1),
      step('fetch', 'succeeded', 2, 2, 'pass 2 attempt 2'),
      step('fetch', 'succeeded', 1, 3, 'pass 1 attempt 3'),
      step('other', 'succeeded', 9, 9, 'other step'),
    ]);

    expect(stepOutput<string>(r, 'fetch')).toBe('pass 2 attempt 2');
  });

  it('is undefined when the step never succeeded or does not exist', () => {
    const r = run('failed', [step('fetch', 'failed', 1, 1)]);

    expect(stepOutput(r, 'fetch')).toBeUndefined();
    expect(stepOutput(r, 'missing')).toBeUndefined();
  });
});

describe('group approval — resumeCodeWorkflowRun answers a run that still waits', () => {
  const waitingRun = {
    runId: RUN_ID,
    workflowId: 'wf_1',
    status: 'waiting',
    waitingOn: [
      {
        stepId: 'approve',
        kind: 'approval',
        assignees: ['usr_anna', 'usr_ben'],
        require: 2,
        answers: [{ userId: 'usr_anna', decision: 'approved', at: '2026-11-12T10:15:00Z' }],
      },
    ],
    steps: [],
  };

  it('hub: the run comes back waiting, with require and answers typed', async () => {
    const mock = createMockFetch({ body: { run: waitingRun } });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response = await norbix.hub.code.resumeCodeWorkflowRun({
      runId: RUN_ID,
      stepId: 'approve',
      decision: 'approved',
    });

    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toBe(
      `https://hub.norbix.io/v2/code/workflows/runs/${RUN_ID}/resume`,
    );
    expect(JSON.parse(mock.lastCall?.body ?? '{}')).toMatchObject({
      stepId: 'approve',
      decision: 'approved',
    });

    // Typed reads: these lines fail `npm run typecheck` if the fields leave the DTOs.
    const wait: CodeMashHub2.WorkflowWaitingOnDto | undefined = response.run?.waitingOn[0];
    const require: number | undefined = wait?.require;
    const answers: CodeMashHub2.WorkflowWaitAnswerDto[] = wait?.answers ?? [];
    const first: CodeMashHub2.WorkflowWaitAnswerDto | undefined = answers[0];

    expect(response.run?.status).toBe('waiting');
    expect(require).toBe(2);
    expect(answers).toHaveLength(1);
    expect(first?.userId).toBe('usr_anna');
    expect(first?.decision).toBe('approved');
    expect(first?.at).toBe('2026-11-12T10:15:00Z');
    // who has not answered yet
    const answered = new Set(answers.map((a) => a.userId));
    expect((wait?.assignees ?? []).filter((id) => !answered.has(id))).toEqual(['usr_ben']);
  });

  it('api: the app-user route gives the same typed waiting record', async () => {
    const mock = createMockFetch({ body: { run: waitingRun } });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response = await norbix.api.code.resumeCodeWorkflowRun({
      runId: RUN_ID,
      decision: 'approved',
    });

    expect(mock.lastCall?.url).toBe(
      `https://api.norbix.io/v2/code/workflows/runs/${RUN_ID}/resume`,
    );
    const wait: CodeMashApi2.WorkflowWaitingOnDto | undefined = response.run?.waitingOn[0];
    const answers: CodeMashApi2.WorkflowWaitAnswerDto[] = wait?.answers ?? [];
    const require: number | undefined = wait?.require;

    expect(response.run?.status).toBe('waiting');
    expect(require).toBe(2);
    expect(answers.map((a) => `${a.userId}:${a.decision}`)).toEqual(['usr_anna:approved']);
  });
});
