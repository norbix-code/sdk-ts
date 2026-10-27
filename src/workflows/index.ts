import { NorbixError, NorbixTimeoutError } from '../client/errors.js';
import type { RequestOverrideOptions } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Hand-written workflow helpers (Code.Workflows.md §15, Workflows Beta):
 * `norbix.hub.code.workflows.waitForRun(runId, { timeoutMs, pollMs })` and
 * `run.stepOutput<T>(stepId)`.
 */

/** Run states after which `waitForRun` stops polling: finished, or parked on a wait. */
export const WORKFLOW_RUN_SETTLED_STATUSES: readonly string[] = [
  'succeeded',
  'failed',
  'cancelled',
  'waiting',
];

export interface WaitForWorkflowRunOptions {
  /** Give up after this many milliseconds (default 60 000). */
  timeoutMs?: number;
  /** Time between two reads of the run (default 1 000 ms). */
  pollMs?: number;
}

/** A run as `GET /code/workflows/runs/{runId}` returns it, plus `stepOutput`. */
export type WorkflowRun = CodeMashHub2.WorkflowRunDto & {
  /**
   * The output of the latest succeeded execution of `stepId` (highest pass,
   * then highest attempt), or `undefined` when the step never succeeded.
   */
  stepOutput<T = unknown>(stepId: string): T | undefined;
};

/**
 * The output of the latest succeeded execution of a step: a loop runs a step
 * once per pass and a retry adds attempts, so the highest pass wins, then the
 * highest attempt. `undefined` when no execution of the step succeeded.
 */
export function stepOutput<T = unknown>(
  run: CodeMashHub2.WorkflowRunDto,
  stepId: string,
): T | undefined {
  let latest: CodeMashHub2.WorkflowRunStepDto | undefined;
  for (const step of run.steps ?? []) {
    if (step.stepId !== stepId || step.status !== 'succeeded') continue;
    if (
      latest === undefined ||
      step.pass > latest.pass ||
      (step.pass === latest.pass && step.attempt > latest.attempt)
    ) {
      latest = step;
    }
  }
  return latest?.output as T | undefined;
}

/** Adds `stepOutput` to a run read from the gateway. */
export function toWorkflowRun(run: CodeMashHub2.WorkflowRunDto): WorkflowRun {
  return Object.assign(run, {
    stepOutput<T = unknown>(stepId: string): T | undefined {
      return stepOutput<T>(run, stepId);
    },
  });
}

type GetRun = (
  request: Partial<CodeMashHub2.GetCodeWorkflowRun>,
  options?: RequestOverrideOptions,
) => Promise<CodeMashHub2.WorkflowRunResponse>;

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

export class CodeWorkflows {
  constructor(private readonly getRun: GetRun) {}

  /**
   * Reads the run (`GET /{version}/code/workflows/runs/{runId}`) until it is
   * finished (`succeeded`, `failed`, `cancelled`) or `waiting`, and returns it.
   * Throws `NorbixTimeoutError` (`raw` = the last run read) when `timeoutMs`
   * passes first. Hub only: the Api host has no run detail route.
   */
  waitForRun = async (
    runId: string,
    opts: WaitForWorkflowRunOptions = {},
    options: RequestOverrideOptions = {},
  ): Promise<WorkflowRun> => {
    const timeoutMs = opts.timeoutMs ?? 60_000;
    const pollMs = opts.pollMs ?? 1_000;
    const deadline = Date.now() + timeoutMs;
    for (;;) {
      const response = await this.getRun({ runId }, options);
      const run = response.run;
      if (!run) {
        throw new NorbixError({
          message: `workflow run ${runId}: the answer has no run`,
          status: 200,
          raw: response,
        });
      }
      if (WORKFLOW_RUN_SETTLED_STATUSES.includes(run.status)) return toWorkflowRun(run);
      const left = deadline - Date.now();
      if (left <= 0) {
        throw new NorbixTimeoutError({
          message: `workflow run ${runId} is still ${run.status} after ${timeoutMs} ms`,
          raw: toWorkflowRun(run),
        });
      }
      await sleep(Math.min(pollMs, left));
    }
  };
}
