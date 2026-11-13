import { describe, expect, it } from 'vitest';

import { makeClient } from '../_helpers.js';

/**
 * Every workflow (beta) route, the workflow listing install and every
 * scheduler task route, on the exact path: the generated tests check the URL
 * with `startsWith`, so a longer path (`/code/workflows/validate` for
 * `/code/workflows`) would still pass there. Each case pins the verb, the
 * pathname with the ids filled in, the query (reads) and the JSON body
 * (writes) — the ids never leak into either. Hand-written, so a regeneration
 * of `code.test.ts` / `scheduler.test.ts` keeps it.
 *
 * Twins: Go `norbix/hub/code_workflows_test.go` + `norbix/api/code_test.go` +
 * `norbix/hub/scheduler_test.go`, Python `tests/hub/test_code.py`,
 * `tests/api/test_code.py`, `tests/hub/test_scheduler.py`. Every call goes to
 * a mock fetch — nothing leaves the process.
 */

const WF = 'wf_3kQ9mZ2vXc8LpR4wT7yH1n';
const WFR = 'wfr_4hT2b9QkLm3XcT1yRfGh7a';
const TOKEN = 'signed.resume.token';
const TSK = 'tsk_1';
const LISTING = 'ml_workflow_order_thanks_v1';
const definition = { name: 'Order thanks', steps: [{ id: 'send', action: 'email.send' }] };

type Host = 'hub' | 'api';
interface RouteCase {
  host: Host;
  module: 'code' | 'scheduler';
  method: string;
  request: Record<string, unknown>;
  verb: string;
  path: string;
  /** Expected query parameters; undefined = no query string. */
  query?: Record<string, string>;
  /** Expected JSON body; undefined = no body. */
  body?: Record<string, unknown>;
}

const invoke = { payload: { orderId: 'ord_1' }, waitSeconds: 10, runVersion: 'draft' };
const resume = { stepId: 'approve', decision: 'approved', payload: { note: 'ok' } };

/** The run routes exist on both hosts (sdk-ts has them on hub.code and api.code). */
const runRoutes = (host: Host): RouteCase[] => [
  {
    host,
    module: 'code',
    method: 'invokeCodeWorkflow',
    request: { id: WF, ...invoke },
    verb: 'POST',
    path: `/v2/code/workflows/${WF}/invoke`,
    body: invoke,
  },
  {
    host,
    module: 'code',
    method: 'getCodeWorkflowRuns',
    request: { id: WF, status: 'failed', pageSize: 50 },
    verb: 'GET',
    path: `/v2/code/workflows/${WF}/runs`,
    query: { status: 'failed', pageSize: '50' },
  },
  {
    host,
    module: 'code',
    method: 'getCodeWorkflowWaitingRuns',
    request: { assignee: 'me', waitingKind: 'approval' },
    verb: 'GET',
    path: '/v2/code/workflows/runs',
    query: { assignee: 'me', waitingKind: 'approval' },
  },
  {
    host,
    module: 'code',
    method: 'getCodeWorkflowRun',
    request: { runId: WFR },
    verb: 'GET',
    path: `/v2/code/workflows/runs/${WFR}`,
  },
  {
    host,
    module: 'code',
    method: 'getCodeWorkflowRunLogs',
    request: { runId: WFR, stepId: 'approve', level: 'error' },
    verb: 'GET',
    path: `/v2/code/workflows/runs/${WFR}/logs`,
    query: { stepId: 'approve', level: 'error' },
  },
  {
    host,
    module: 'code',
    method: 'resumeCodeWorkflowRun',
    request: { runId: WFR, ...resume },
    verb: 'POST',
    path: `/v2/code/workflows/runs/${WFR}/resume`,
    body: resume,
  },
  {
    host,
    module: 'code',
    method: 'resumeCodeWorkflowRunByKey',
    request: { id: WF, key: 'order-ord_1', decision: 'rejected' },
    verb: 'POST',
    path: `/v2/code/workflows/${WF}/resume`,
    body: { key: 'order-ord_1', decision: 'rejected' },
  },
  {
    host,
    module: 'code',
    method: 'retryCodeWorkflowRunStep',
    request: { runId: WFR, stepId: 'charge' },
    verb: 'POST',
    path: `/v2/code/workflows/runs/${WFR}/retry`,
    body: { stepId: 'charge' },
  },
  {
    host,
    module: 'code',
    method: 'cancelCodeWorkflowRun',
    request: { runId: WFR, reason: 'duplicate order' },
    verb: 'POST',
    path: `/v2/code/workflows/runs/${WFR}/cancel`,
    body: { reason: 'duplicate order' },
  },
  {
    host,
    module: 'code',
    method: 'openCodeWorkflowResumeLink',
    request: { token: TOKEN },
    verb: 'GET',
    path: `/v2/code/workflows/resume/${TOKEN}`,
  },
  {
    host,
    module: 'code',
    method: 'useCodeWorkflowResumeLink',
    request: { token: TOKEN },
    verb: 'POST',
    path: `/v2/code/workflows/resume/${TOKEN}`,
    body: {},
  },
];

const cases: RouteCase[] = [
  // Workflows list + beta notice
  {
    host: 'hub',
    module: 'code',
    method: 'getCodeWorkflows',
    request: { isEnabled: true, pageSize: 20 },
    verb: 'GET',
    path: '/v2/code/workflows',
    query: { isEnabled: 'true', pageSize: '20' },
  },
  {
    host: 'hub',
    module: 'code',
    method: 'enableCodeWorkflow',
    request: { id: WF },
    verb: 'PUT',
    path: `/v2/code/workflows/${WF}/enable`,
    body: {},
  },
  {
    host: 'hub',
    module: 'code',
    method: 'disableCodeWorkflow',
    request: { id: WF },
    verb: 'PUT',
    path: `/v2/code/workflows/${WF}/disable`,
    body: {},
  },
  {
    host: 'hub',
    module: 'code',
    method: 'deleteCodeWorkflow',
    request: { id: WF },
    verb: 'DELETE',
    path: `/v2/code/workflows/${WF}`,
  },
  // Workflow editor
  {
    host: 'hub',
    module: 'code',
    method: 'saveCodeWorkflow',
    request: { definition },
    verb: 'PUT',
    path: '/v2/code/workflows',
    body: { definition },
  },
  {
    host: 'hub',
    module: 'code',
    method: 'getCodeWorkflow',
    request: { id: WF, pinnedVersion: 2 },
    verb: 'GET',
    path: `/v2/code/workflows/${WF}`,
    query: { pinnedVersion: '2' },
  },
  {
    host: 'hub',
    module: 'code',
    method: 'getCodeWorkflowDraft',
    request: { id: WF },
    verb: 'GET',
    path: `/v2/code/workflows/${WF}/draft`,
  },
  {
    host: 'hub',
    module: 'code',
    method: 'discardCodeWorkflowDraft',
    request: { id: WF },
    verb: 'DELETE',
    path: `/v2/code/workflows/${WF}/draft`,
  },
  {
    host: 'hub',
    module: 'code',
    method: 'validateCodeWorkflow',
    request: { definition },
    verb: 'POST',
    path: '/v2/code/workflows/validate',
    body: { definition },
  },
  {
    host: 'hub',
    module: 'code',
    method: 'getCodeWorkflowSchema',
    request: {},
    verb: 'GET',
    path: '/v2/code/workflows/schema',
  },
  {
    host: 'hub',
    module: 'code',
    method: 'publishCodeWorkflow',
    request: { id: WF },
    verb: 'POST',
    path: `/v2/code/workflows/${WF}/publish`,
    body: {},
  },
  {
    host: 'hub',
    module: 'code',
    method: 'getCodeWorkflowVersions',
    request: { id: WF },
    verb: 'GET',
    path: `/v2/code/workflows/${WF}/versions`,
  },
  {
    host: 'hub',
    module: 'code',
    method: 'getCodeWorkflowVersionDiff',
    request: { id: WF, fromVersion: 1, toVersion: 2 },
    verb: 'GET',
    path: `/v2/code/workflows/${WF}/versions/diff`,
    query: { fromVersion: '1', toVersion: '2' },
  },
  // Workflows beta switch
  {
    host: 'hub',
    module: 'code',
    method: 'enableCodeWorkflows',
    request: {},
    verb: 'PUT',
    path: '/v2/code/workflows/enable',
    body: {},
  },
  {
    host: 'hub',
    module: 'code',
    method: 'disableCodeWorkflows',
    request: {},
    verb: 'PUT',
    path: '/v2/code/workflows/disable',
    body: {},
  },
  // Marketplace workflow listings + install
  {
    host: 'hub',
    module: 'code',
    method: 'installMarketplaceWorkflow',
    request: { listingViewId: LISTING, name: 'Thanks', references: { orders: 'orders' } },
    verb: 'POST',
    path: `/v2/code/marketplace/listings/${LISTING}/install-workflow`,
    body: { name: 'Thanks', references: { orders: 'orders' } },
  },
  {
    host: 'hub',
    module: 'code',
    method: 'getMarketplaceListings',
    request: { kind: 'Workflow' },
    verb: 'GET',
    path: '/v2/code/marketplace/listings',
    query: { kind: 'Workflow' },
  },
  // Runs + run detail, waiting inbox, resume link, invoke — on both hosts
  ...runRoutes('hub'),
  ...runRoutes('api'),
  // Scheduler tasks list, task runs, save
  {
    host: 'hub',
    module: 'scheduler',
    method: 'getSchedulerTasks',
    request: { type: 'WorkflowCall', pageSize: 10 },
    verb: 'GET',
    path: '/v2/scheduler/tasks',
    query: { type: 'WorkflowCall', pageSize: '10' },
  },
  {
    host: 'hub',
    module: 'scheduler',
    method: 'getSchedulerTask',
    request: { id: TSK },
    verb: 'GET',
    path: `/v2/scheduler/tasks/${TSK}`,
  },
  {
    host: 'hub',
    module: 'scheduler',
    method: 'getSchedulerTaskRuns',
    request: { id: TSK, take: 20 },
    verb: 'GET',
    path: `/v2/scheduler/tasks/${TSK}/runs`,
    query: { take: '20' },
  },
  {
    host: 'hub',
    module: 'scheduler',
    method: 'enableSchedulerTask',
    request: { id: TSK },
    verb: 'PUT',
    path: `/v2/scheduler/tasks/${TSK}/enable`,
    body: {},
  },
  {
    host: 'hub',
    module: 'scheduler',
    method: 'disableSchedulerTask',
    request: { id: TSK },
    verb: 'PUT',
    path: `/v2/scheduler/tasks/${TSK}/disable`,
    body: {},
  },
  {
    host: 'hub',
    module: 'scheduler',
    method: 'deleteSchedulerTask',
    request: { id: TSK },
    verb: 'DELETE',
    path: `/v2/scheduler/tasks/${TSK}`,
  },
];

type Module = Record<string, (request?: unknown) => Promise<unknown>>;

describe('workflow, listing install and scheduler task routes — exact path', () => {
  for (const c of cases) {
    it(`${c.host}.${c.module}.${c.method} → ${c.verb} ${c.path}`, async () => {
      const { norbix, mock } = makeClient({});
      const ns = (norbix[c.host] as unknown as Record<string, Module>)[c.module]!;
      await ns[c.method]!(c.request);

      const call = mock.lastCall!;
      const url = new URL(call.url);
      expect(call.method).toBe(c.verb);
      expect(url.host).toBe(c.host === 'hub' ? 'hub.norbix.io' : 'api.norbix.io');
      expect(url.pathname).toBe(c.path);
      expect(Object.fromEntries(url.searchParams)).toEqual(c.query ?? {});
      if (c.body === undefined) {
        expect(call.body ?? '').toBe('');
      } else {
        expect(JSON.parse(call.body ?? '{}')).toEqual(c.body);
      }
    });
  }

  it('covers the 26 workflow routes on the hub, 11 on the api, the install, the listings and 6 task routes', () => {
    const keys = new Set(cases.map((c) => `${c.host} ${c.verb} ${c.path}`));
    expect(keys.size).toBe(cases.length);
    expect(
      cases.filter((c) => c.host === 'hub' && c.path.startsWith('/v2/code/workflows')).length,
    ).toBe(26);
    expect(cases.filter((c) => c.host === 'api').length).toBe(11);
  });
});
