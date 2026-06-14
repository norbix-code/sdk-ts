import { describe, expect, it, vi } from 'vitest';

import {
  NorbixWebhookReceiver,
  NORBIX_WEBHOOK_HEADERS,
  NorbixWebhookSignatureError,
  computeNorbixWebhookSignature,
  parseNorbixWebhookHeaders,
  verifyNorbixWebhookSignature,
} from '../../src/webhooks/index.js';

describe('webhooks.headers', () => {
  it('matches gateway WebhookDeliveryClient header names', () => {
    expect(NORBIX_WEBHOOK_HEADERS.event).toBe('X-Norbix-Event');
    expect(NORBIX_WEBHOOK_HEADERS.delivery).toBe('X-Norbix-Delivery');
    expect(NORBIX_WEBHOOK_HEADERS.idempotencyKey).toBe('Idempotency-Key');
    expect(NORBIX_WEBHOOK_HEADERS.account).toBe('X-Norbix-Account');
    expect(NORBIX_WEBHOOK_HEADERS.project).toBe('X-Norbix-Project');
    expect(NORBIX_WEBHOOK_HEADERS.integration).toBe('X-Norbix-Integration');
    expect(NORBIX_WEBHOOK_HEADERS.destination).toBe('X-Norbix-Destination');
    expect(NORBIX_WEBHOOK_HEADERS.signature).toBe('X-Norbix-Signature');
    expect(NORBIX_WEBHOOK_HEADERS.timestamp).toBe('X-Norbix-Timestamp');
  });

  it('parses Express-style lowercased headers', () => {
    const parsed = parseNorbixWebhookHeaders({
      'x-norbix-event': 'database.record.inserted',
      'x-norbix-delivery': 'dlv_1',
      'idempotency-key': 'dlv_1',
      'x-norbix-account': 'acc_1',
      'x-norbix-project': 'pr_1',
      'x-norbix-integration': 'whi_1',
      'x-norbix-destination': 'whd_1',
      'x-norbix-signature': 'sha256=abc',
      'x-norbix-timestamp': '1700000000',
    });

    expect(parsed).toEqual({
      event: 'database.record.inserted',
      deliveryId: 'dlv_1',
      idempotencyKey: 'dlv_1',
      accountId: 'acc_1',
      projectId: 'pr_1',
      integrationId: 'whi_1',
      destinationId: 'whd_1',
      signature: 'sha256=abc',
      timestamp: '1700000000',
    });
  });

  it('falls back deliveryId to Idempotency-Key', () => {
    const parsed = parseNorbixWebhookHeaders({
      'Idempotency-Key': 'dlv_only',
    });
    expect(parsed.deliveryId).toBe('dlv_only');
  });

  it('does not read norbix-account-id (API auth header, not webhook delivery)', () => {
    const parsed = parseNorbixWebhookHeaders({
      'norbix-account-id': 'acc_wrong',
      'norbix-project-id': 'pr_wrong',
    });
    expect(parsed.accountId).toBeNull();
    expect(parsed.projectId).toBeNull();
  });
});

describe('webhooks.verify', () => {
  const secret = 'test-secret';
  const body = JSON.stringify({
    id: 'dlv_1',
    event: 'database.record.inserted',
    createdOn: '2026-01-01T00:00:00Z',
    accountId: 'acc_1',
    projectId: 'pr_1',
    data: { recordId: 'rec_1' },
  });
  const timestamp = String(Math.floor(Date.now() / 1000));
  const signature = computeNorbixWebhookSignature(secret, timestamp, body);

  it('accepts a valid signature', () => {
    const result = verifyNorbixWebhookSignature({
      secret,
      rawBody: body,
      signature,
      timestamp,
      toleranceSeconds: 300,
    });
    expect(result.ok).toBe(true);
  });

  it('rejects a tampered body', () => {
    const result = verifyNorbixWebhookSignature({
      secret,
      rawBody: body.replace('rec_1', 'rec_2'),
      signature,
      timestamp,
    });
    expect(result.ok).toBe(false);
  });
});

describe('NorbixWebhookReceiver', () => {
  it('dispatches normalised (payload, event) to a typed handler after verify', async () => {
    const secret = 'whsec_test';
    const user = { id: 'usr_1', userName: 'alice', status: 'registered' };
    const envelope = {
      id: 'dlv_abc',
      event: 'membership.user.registered',
      createdOn: '2026-01-01T00:00:00Z',
      accountId: 'acc_1',
      projectId: 'pr_1',
      triggerId: 'trg_1',
      // wire shape: { id, to } — receiver normalises payload to the user
      data: { id: 'usr_1', to: user },
    };
    const rawBody = JSON.stringify(envelope);
    const timestamp = String(Math.floor(Date.now() / 1000));
    const signature = computeNorbixWebhookSignature(secret, timestamp, rawBody);

    const receiver = new NorbixWebhookReceiver({ secret });
    const handler = vi.fn();
    receiver.on('membership.user.registered', handler);

    const result = await receiver.handle({
      rawBody,
      headers: {
        'X-Norbix-Event': envelope.event,
        'X-Norbix-Delivery': envelope.id,
        'X-Norbix-Integration': 'whi_1',
        'X-Norbix-Signature': signature,
        'X-Norbix-Timestamp': timestamp,
      },
    });

    expect(result.handled).toBe(true);
    expect(result.verified).toBe(true);
    expect(handler).toHaveBeenCalledOnce();
    // first arg IS the user entity (no `to` wrapper)
    expect(handler.mock.calls[0]?.[0]).toEqual(user);
    // second arg is metadata; the wrapper id moved onto event.metadata.user
    const event = handler.mock.calls[0]?.[1];
    expect(event.name).toBe('membership.user.registered');
    expect(event.deliveryId).toBe('dlv_abc');
    expect(event.triggerId).toBe('trg_1');
    expect(event.integrationId).toBe('whi_1');
    expect(event.verified).toBe(true);
    expect(event.metadata.user).toEqual({ id: 'usr_1' });
  });

  it('normalises a mutation to { from, to } on the payload', async () => {
    const from = { id: 'usr_1', email: 'old@x.io', status: 'verified' };
    const to = { id: 'usr_1', email: 'new@x.io', status: 'verified' };
    const receiver = new NorbixWebhookReceiver();
    const handler = vi.fn();
    receiver.on('membership.user.updated', handler);

    await receiver.handle({
      rawBody: JSON.stringify({
        id: 'dlv_u',
        event: 'membership.user.updated',
        createdOn: '2026-01-01T00:00:00Z',
        accountId: 'acc_1',
        projectId: 'pr_1',
        data: { id: 'usr_1', from, to },
      }),
      headers: {},
    });

    expect(handler.mock.calls[0]?.[0]).toEqual({ from, to });
  });

  it('lifts schema + record id onto event.metadata for db events', async () => {
    const doc = { id: 'rec_1', email: 'a@b.io' };
    const receiver = new NorbixWebhookReceiver();
    const handler = vi.fn();
    receiver.on('database.record.inserted', handler);

    await receiver.handle({
      rawBody: JSON.stringify({
        id: 'dlv_d',
        event: 'database.record.inserted',
        createdOn: '2026-01-01T00:00:00Z',
        accountId: 'acc_1',
        projectId: 'pr_1',
        data: {
          schemaName: 'users',
          integrationId: 'int_1',
          id: 'rec_1',
          document: doc,
          schema: { id: 'sch_1' },
        },
      }),
      headers: {},
    });

    expect(handler.mock.calls[0]?.[0]).toEqual(doc);
    const event = handler.mock.calls[0]?.[1];
    expect(event.metadata.schema).toEqual({ id: 'sch_1', name: 'users' });
    expect(event.metadata.record).toEqual({ id: 'rec_1' });
  });

  it('onRaw receives the untouched envelope + ctx', async () => {
    const receiver = new NorbixWebhookReceiver();
    const handler = vi.fn();
    receiver.onRaw('files.file.uploaded', handler);

    await receiver.handle({
      rawBody: JSON.stringify({
        id: 'dlv_r',
        event: 'files.file.uploaded',
        createdOn: '2026-01-01T00:00:00Z',
        accountId: 'acc_1',
        projectId: 'pr_1',
        data: { integrationId: 'int_1', file: { path: '/a.png' } },
      }),
      headers: {},
    });

    expect(handler.mock.calls[0]?.[0]?.data?.file?.path).toBe('/a.png');
    expect(handler.mock.calls[0]?.[1]?.verified).toBe(null);
  });

  it('rejects a delivery whose projectId does not match the guard', async () => {
    const receiver = new NorbixWebhookReceiver({ projectId: 'pr_expected' });
    await expect(
      receiver.handle({
        rawBody: JSON.stringify({
          id: 'dlv_g',
          event: 'files.file.uploaded',
          createdOn: '2026-01-01T00:00:00Z',
          accountId: 'acc_1',
          projectId: 'pr_other',
          data: {},
        }),
        headers: {},
      }),
    ).rejects.toBeInstanceOf(NorbixWebhookSignatureError);
  });

  it('throws on invalid signature when secret configured', async () => {
    const receiver = new NorbixWebhookReceiver({ secret: 'whsec_test' });
    await expect(
      receiver.handle({
        rawBody: '{"id":"x","event":"database.record.inserted"}',
        headers: {
          'X-Norbix-Signature': 'sha256=deadbeef',
          'X-Norbix-Timestamp': String(Math.floor(Date.now() / 1000)),
        },
      }),
    ).rejects.toBeInstanceOf(NorbixWebhookSignatureError);
  });

  it('skips verify when no secret', async () => {
    const receiver = new NorbixWebhookReceiver();
    const handler = vi.fn();
    receiver.onDefault(handler);

    const result = await receiver.handle({
      rawBody: JSON.stringify({
        id: 'dlv_x',
        event: 'files.file.uploaded',
        createdOn: '2026-01-01T00:00:00Z',
        accountId: 'acc_env',
        projectId: 'pr_env',
        data: {},
      }),
      headers: {},
    });

    expect(result.verified).toBe(null);
    expect(result.handled).toBe(true);
    expect(handler.mock.calls[0]?.[1]?.headers.accountId).toBe('acc_env');
    expect(handler.mock.calls[0]?.[1]?.headers.projectId).toBe('pr_env');
  });
});
