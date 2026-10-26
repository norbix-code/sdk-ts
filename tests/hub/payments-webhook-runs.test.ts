import { describe, expect, it } from 'vitest';

import type { CodeMashHub2 } from '../../src/types/hub2.dtos.js';
import { createMockFetch, makeClient } from '../_helpers.js';

/**
 * Received payment webhooks as records (gateway 86f24ecd2):
 * GET /{version}/payments/webhooks/runs and GET /{version}/payments/webhooks/runs/{Id}.
 *
 * The generated tests in payments.test.ts send an empty request; these cases
 * pin where the filters and the paging go (query string, never a body), that
 * the run id lands in the path and nowhere else, and that the run, its
 * trigger actions and the masked raw call come back as the gateway sent them.
 */
const run = {
  id: 'pwr_1',
  callId: 'pwc_1',
  env: 'PROD',
  integrationId: 'int_stripe',
  source: 'Stripe',
  receivedOn: '2026-10-26T08:00:00Z',
  statusCode: 400,
  outcome: 'Refused',
  reason: 'signature-mismatch',
  description: 'Signature does not match.',
  eventName: 'payment_intent.succeeded',
  providerEventId: 'evt_1',
  order: { orderId: 'ord_1', kind: 'NotMatched', reason: 'no order' },
  actions: [
    {
      triggerId: 'trg_email',
      action: 'Email',
      status: 'Sent',
      norbixEvent: 'payments.order.paid',
      at: '2026-10-26T08:00:01Z',
    },
    {
      triggerId: 'trg_code',
      action: 'Code',
      status: 'Skipped',
      reason: 'condition false',
      norbixEvent: 'payments.webhook.received',
      at: '2026-10-26T08:00:01Z',
    },
  ],
  part: 1,
  parts: 1,
} as unknown as CodeMashHub2.PaymentsWebhookRunDto;

describe('hub.payments.getPaymentsWebhookRuns', () => {
  it('sends every filter and the paging as query parameters on a GET with no body', async () => {
    const mock = createMockFetch({
      body: { list: { items: [run], hasMore: true, hasPrevious: false, startingAfter: 'pwr_1' } },
    });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response = await norbix.hub.payments.getPaymentsWebhookRuns({
      integrationId: 'int_stripe',
      eventName: 'payment_intent.succeeded',
      triggerId: 'trg_email',
      outcome: 'refused',
      fromUtc: '2026-10-25T00:00:00Z',
      toUtc: '2026-10-26T00:00:00Z',
      pageSize: 20,
      startingAfter: 'pwr_prev',
    });

    const call = mock.lastCall!;
    const url = new URL(call.url);
    expect(call.method).toBe('GET');
    expect(url.pathname).toBe('/v2/payments/webhooks/runs');
    expect(Object.fromEntries(url.searchParams)).toEqual({
      integrationId: 'int_stripe',
      eventName: 'payment_intent.succeeded',
      triggerId: 'trg_email',
      outcome: 'refused',
      fromUtc: '2026-10-25T00:00:00Z',
      toUtc: '2026-10-26T00:00:00Z',
      pageSize: '20',
      startingAfter: 'pwr_prev',
    });
    expect(call.body).toBeUndefined();
    expect(call.headers.get('norbix-project-id')).toBe('test-project');
    expect(response.list?.items).toEqual([run]);
    expect(response.list?.hasMore).toBe(true);
  });
});

describe('hub.payments.getPaymentsWebhookRun', () => {
  it('puts the run id in the path, not on the query, and returns the run with its raw call', async () => {
    const raw = {
      callId: 'pwc_1',
      receivedOn: '2026-10-26T08:00:00Z',
      contentType: 'application/json',
      body: '{"id":"evt_1"}',
      truncated: false,
      maskedFields: 2,
      headers: { 'Stripe-Signature': 't=1' },
      answerStatus: 400,
      parts: 1,
    };
    const mock = createMockFetch({ body: { item: { run, raw } } });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const response = await norbix.hub.payments.getPaymentsWebhookRun({ id: 'pwr_1' });

    const call = mock.lastCall!;
    const url = new URL(call.url);
    expect(call.method).toBe('GET');
    expect(url.pathname).toBe('/v2/payments/webhooks/runs/pwr_1');
    expect(url.searchParams.has('id')).toBe(false);
    expect(call.body).toBeUndefined();
    expect(response.item?.run).toEqual(run);
    expect(response.item?.raw).toEqual(raw);
  });
});
