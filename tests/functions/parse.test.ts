import { describe, expect, it } from 'vitest';

import {
  CODE_FUNCTION_SPEC_VERSION,
  CodeFunctionEvent,
  Norbix,
  NorbixFunctionEventError,
  parseFunctionEvent,
} from '../../src/index.js';
import { createMockFetch } from '../_helpers.js';

/**
 * `parseFunctionEvent` and the typed views on a `CodeFunctionEvent` — the
 * hand-written layer over the generated `CodeFunctionEventDto`. The samples
 * follow §4 of the contract (gateway docs/architecture/Code.Functions.md):
 * one envelope per source, the wire spelling of enums (camelCase), nulls for
 * the absent context fields as the gateway sample shows them.
 */
const context = {
  accountId: 'acc_Cz5oZpeeTeLtkYHYTJrZ4',
  projectId: 'pr_34LHsiO8bArRioS07hHLf5',
  environment: 'TEST',
  region: 'nb-eu-germany',
  hubUrl: 'https://hub.example.test',
  apiUrl: 'https://api.example.test',
  echoUrl: 'https://api.example.test/v3/echo',
  triggerId: 'trg_1p4R3gTobGZpD6fXvHT4rd',
  taskId: null,
  correlationId: '9b836d22ab33b92c0de44b86f90fb150',
  caller: { userId: 'usr_5Hc2nQ8kLm3XcT1yRfGh7a', email: 'jane.doe@example.com', kind: 'User' },
  runAs: {
    userId: 'usr_2R5So1Lbfc7MNr5lkY522S',
    accessToken: 'eyJhbGciOi.run-as.token',
    expiresAt: '2026-10-12T08:15:00Z',
  },
};

function envelope(
  source: string,
  event: string,
  data: Record<string, unknown>,
  extra: Record<string, unknown> = {},
) {
  return {
    specVersion: '1',
    id: '9f1c2b0e9a4d4c7e8f3a1b2c3d4e5f60',
    eventId: '7a2e8c1d4b5f4e6a9d0c1b2a3f4e5d6c',
    event,
    source,
    createdOn: '2026-10-12T08:00:00Z',
    context,
    data,
    config: { acceptStatus: 'processing', imageWidth: 568 },
    ...extra,
  };
}

type Order = { _id: string; status: string; total: number };

const databaseSample = envelope('database', 'database.record.updated', {
  database: {
    collection: 'orders',
    schemaId: 'sch_7lPCzWonEvTQsheGDCaKq',
    schemaVersion: 4,
    recordId: '6ac54a59212c29912eaddd81',
    old: { _id: '6ac54a59212c29912eaddd81', status: 'new', total: 48.5 },
    new: { _id: '6ac54a59212c29912eaddd81', status: 'processing', total: 48.5 },
    truncated: false,
  },
});

describe('parseFunctionEvent', () => {
  it('parses a JSON string and an object alike, keeping every envelope field', () => {
    const fromObject = parseFunctionEvent(databaseSample);
    const fromString = parseFunctionEvent(JSON.stringify(databaseSample));

    for (const event of [fromObject, fromString]) {
      expect(event).toBeInstanceOf(CodeFunctionEvent);
      expect(event.specVersion).toBe(CODE_FUNCTION_SPEC_VERSION);
      expect(event.id).toBe('9f1c2b0e9a4d4c7e8f3a1b2c3d4e5f60');
      expect(event.eventId).toBe('7a2e8c1d4b5f4e6a9d0c1b2a3f4e5d6c');
      expect(event.event).toBe('database.record.updated');
      expect(event.source).toBe('database');
      expect(event.createdOn).toBe('2026-10-12T08:00:00Z');
      expect(event.context.triggerId).toBe('trg_1p4R3gTobGZpD6fXvHT4rd');
      expect(event.context.caller?.kind).toBe('User');
      expect(event.config).toEqual({ acceptStatus: 'processing', imageWidth: 568 });
    }
    // The wire JSON is never reshaped: serializing gives the envelope back.
    expect(JSON.parse(JSON.stringify(fromObject))).toEqual(databaseSample);
  });

  it('accepts specVersion as the string "1" and as the number 1', () => {
    expect(parseFunctionEvent(envelope('manual', 'manual.invoke', {})).specVersion).toBe('1');
    expect(
      parseFunctionEvent(envelope('manual', 'manual.invoke', {}, { specVersion: 1 })).specVersion,
    ).toBe(1);
  });

  it('refuses an unknown specVersion', () => {
    const bad = envelope('database', 'database.record.updated', {}, { specVersion: '2' });
    let caught: unknown;
    try {
      parseFunctionEvent(bad);
    } catch (err) {
      caught = err;
    }
    expect(caught).toBeInstanceOf(NorbixFunctionEventError);
    expect((caught as NorbixFunctionEventError).code).toBe(
      'FUNCTION_EVENT_UNSUPPORTED_SPEC_VERSION',
    );
    expect((caught as Error).message).toContain('"2"');
  });

  it('refuses a missing specVersion (not an envelope at all)', () => {
    const { specVersion: _dropped, ...noVersion } = databaseSample;
    expect(() => parseFunctionEvent(noVersion)).toThrow(NorbixFunctionEventError);
    expect(() => parseFunctionEvent(noVersion)).toThrow(/no specVersion/);
  });

  it.each([
    ['not JSON', '{not json'],
    ['an array', '[]'],
    ['null', null],
    ['a number', 42],
  ])('refuses %s with FUNCTION_EVENT_INVALID', (_label, raw) => {
    let caught: unknown;
    try {
      parseFunctionEvent(raw);
    } catch (err) {
      caught = err;
    }
    expect(caught).toBeInstanceOf(NorbixFunctionEventError);
    expect((caught as NorbixFunctionEventError).code).toBe('FUNCTION_EVENT_INVALID');
  });

  it.each(['event', 'source', 'context', 'data'] as const)(
    'refuses an envelope without %s',
    (field) => {
      const broken: Record<string, unknown> = { ...databaseSample };
      delete broken[field];
      expect(() => parseFunctionEvent(broken)).toThrow(new RegExp(`no "${field}"`));
    },
  );
});

describe('CodeFunctionEvent typed views', () => {
  it('isSource matches the wire spelling and the generated enum spelling', () => {
    const event = parseFunctionEvent(databaseSample);
    expect(event.isSource('database')).toBe(true);
    expect(event.isSource('Database' as never)).toBe(true);
    expect(event.isSource('membership')).toBe(false);
    // An envelope written with the enum's PascalCase member still matches.
    const pascal = parseFunctionEvent({ ...databaseSample, source: 'Database' });
    expect(pascal.isSource('database')).toBe(true);
  });

  it('asDatabaseRecordChange<T>() types old / new and keeps the slot fields', () => {
    const change = parseFunctionEvent(databaseSample).asDatabaseRecordChange<Order>();
    expect(change.collection).toBe('orders');
    expect(change.schemaId).toBe('sch_7lPCzWonEvTQsheGDCaKq');
    expect(change.schemaVersion).toBe(4);
    expect(change.recordId).toBe('6ac54a59212c29912eaddd81');
    expect(change.truncated).toBe(false);
    expect(change.old?.status).toBe('new');
    expect(change.new?.status).toBe('processing');
    expect(change.new?.total).toBe(48.5);
    expect(change.oldRef).toBeUndefined();
  });

  it('asDatabaseRecordChange(): an insert has no old, a null document reads as undefined', () => {
    const inserted = parseFunctionEvent(
      envelope('database', 'database.record.inserted', {
        database: {
          collection: 'orders',
          schemaId: 'sch_7lPCzWonEvTQsheGDCaKq',
          old: null,
          new: { _id: '1', status: 'new', total: 1 },
          truncated: false,
        },
      }),
    ).asDatabaseRecordChange<Order>();
    expect(inserted.old).toBeUndefined();
    expect(inserted.new?._id).toBe('1');
  });

  it('asDatabaseRecordChange(): a truncated change carries the refs instead of the documents', () => {
    const change = parseFunctionEvent(
      envelope('database', 'database.record.replaced', {
        database: {
          collection: 'orders',
          schemaId: 'sch_7lPCzWonEvTQsheGDCaKq',
          truncated: true,
          oldRef: {
            projectId: context.projectId,
            kind: 'document',
            databaseIntegrationId: 'int_db',
            schemaId: 'sch_7lPCzWonEvTQsheGDCaKq',
            externalId: '6ac54a59212c29912eaddd81',
          },
          newRef: {
            projectId: context.projectId,
            kind: 'document',
            databaseIntegrationId: 'int_db',
            schemaId: 'sch_7lPCzWonEvTQsheGDCaKq',
            externalId: '6ac54a59212c29912eaddd81',
          },
        },
      }),
    ).asDatabaseRecordChange<Order>();
    expect(change.truncated).toBe(true);
    expect(change.old).toBeUndefined();
    expect(change.new).toBeUndefined();
    expect(change.newRef?.externalId).toBe('6ac54a59212c29912eaddd81');
  });

  it('asUserChange() for a membership event', () => {
    const change = parseFunctionEvent(
      envelope('membership', 'membership.user.updated', {
        user: {
          userId: 'usr_5Hc2nQ8kLm3XcT1yRfGh7a',
          old: { primaryEmail: 'old@example.com', displayName: 'Jane' },
          new: { primaryEmail: 'new@example.com', displayName: 'Jane D.' },
        },
      }),
    ).asUserChange();
    expect(change.userId).toBe('usr_5Hc2nQ8kLm3XcT1yRfGh7a');
    expect(change.old?.primaryEmail).toBe('old@example.com');
    expect(change.new?.displayName).toBe('Jane D.');
  });

  it('asFileChange() for a files event', () => {
    const change = parseFunctionEvent(
      envelope('files', 'files.file.uploaded', {
        file: { new: { id: 'fil_1', fileName: 'invoice.pdf', size: 1024 }, path: 'invoices/2026' },
      }),
    ).asFileChange<{ id: string; fileName: string; size: number }>();
    expect(change.path).toBe('invoices/2026');
    expect(change.old).toBeUndefined();
    expect(change.new?.fileName).toBe('invoice.pdf');
  });

  it('asPayment() for a payments event', () => {
    const payment = parseFunctionEvent(
      envelope('payments', 'payments.webhook.received', {
        payment: {
          integrationId: 'int_pay',
          provider: 'stripe',
          providerEventId: 'evt_1',
          eventName: 'payment_intent.succeeded',
          status: 'succeeded',
          amountMinor: 4850,
          currency: 'EUR',
          externalIds: { paymentIntent: 'pi_1' },
          occurredOn: '2026-10-12T07:59:58Z',
          receivedOn: '2026-10-12T08:00:00Z',
        },
      }),
    ).asPayment();
    expect(payment.provider).toBe('stripe');
    expect(payment.amountMinor).toBe(4850);
    expect(payment.externalIds?.paymentIntent).toBe('pi_1');
  });

  it('asAiUsage() for an ai event', () => {
    const usage = parseFunctionEvent(
      envelope('ai', 'ai.credits.warning', {
        ai: { payload: { used: 80, limit: 100 }, targetUserId: 'usr_5Hc2nQ8kLm3XcT1yRfGh7a' },
      }),
    ).asAiUsage();
    expect(usage.targetUserId).toBe('usr_5Hc2nQ8kLm3XcT1yRfGh7a');
    expect(usage.payload.used).toBe(80);
  });

  it('asScheduledTask() and payload() for a scheduler event', () => {
    const event = parseFunctionEvent(
      envelope('scheduler', 'scheduler.task.fired', {
        task: { taskId: 'tsk_1', name: 'nightly payouts', firedAt: '2026-10-12T02:00:00Z' },
        payload: { dryRun: true },
      }),
    );
    const task = event.asScheduledTask();
    expect(task.taskId).toBe('tsk_1');
    expect(task.firedAt).toBe('2026-10-12T02:00:00Z');
    expect(event.payload<{ dryRun: boolean }>()?.dryRun).toBe(true);
  });

  it('payload() for a manual invoke, undefined when the call sent none', () => {
    const withPayload = parseFunctionEvent(
      envelope('manual', 'manual.invoke', { payload: { orderId: '6ac54a59212c29912eaddd81' } }),
    );
    expect(withPayload.payload<{ orderId: string }>()?.orderId).toBe('6ac54a59212c29912eaddd81');
    expect(parseFunctionEvent(envelope('manual', 'manual.invoke', {})).payload()).toBeUndefined();
  });

  it('a view for a slot the event does not carry throws FUNCTION_EVENT_WRONG_SOURCE', () => {
    const event = parseFunctionEvent(databaseSample);
    let caught: unknown;
    try {
      event.asUserChange();
    } catch (err) {
      caught = err;
    }
    expect(caught).toBeInstanceOf(NorbixFunctionEventError);
    expect((caught as NorbixFunctionEventError).code).toBe('FUNCTION_EVENT_WRONG_SOURCE');
    expect((caught as Error).message).toContain('data.user');
    expect(() => event.asPayment()).toThrow(/asPayment\(\) is for a payments event/);
    expect(() => event.asScheduledTask()).toThrow(NorbixFunctionEventError);
  });
});

describe('CodeFunctionEvent.clientOptions()', () => {
  it('maps context onto the Norbix constructor options', () => {
    const options = parseFunctionEvent(databaseSample).clientOptions();
    expect(options).toEqual({
      projectId: 'pr_34LHsiO8bArRioS07hHLf5',
      accountId: 'acc_Cz5oZpeeTeLtkYHYTJrZ4',
      env: 'TEST',
      region: 'nb-eu-germany',
      bearerToken: 'eyJhbGciOi.run-as.token',
      baseUrl: { hub: 'https://hub.example.test', api: 'https://api.example.test' },
    });
  });

  it('leaves region out when the project has none', () => {
    const noRegion = { ...databaseSample, context: { ...context, region: undefined } };
    const options = parseFunctionEvent(noRegion).clientOptions();
    expect('region' in options).toBe(false);
  });

  it('throws FUNCTION_EVENT_NO_RUN_AS_TOKEN when the action has no run-as user', () => {
    const noRunAs = { ...databaseSample, context: { ...context, runAs: undefined } };
    let caught: unknown;
    try {
      parseFunctionEvent(noRunAs).clientOptions();
    } catch (err) {
      caught = err;
    }
    expect(caught).toBeInstanceOf(NorbixFunctionEventError);
    expect((caught as NorbixFunctionEventError).code).toBe('FUNCTION_EVENT_NO_RUN_AS_TOKEN');
  });

  it('a Norbix client built from clientOptions() calls the envelope hub url with the run-as bearer token', async () => {
    const mock = createMockFetch({ body: { runs: [] } });
    const event = parseFunctionEvent(databaseSample);
    const norbix = new Norbix({ ...event.clientOptions(), fetch: mock.fetch });

    await norbix.hub.code.getCodeFunctionRuns({ triggerId: event.context.triggerId });

    const call = mock.lastCall!;
    expect(call.url).toBe(
      'https://hub.example.test/v3/code/functions/runs?triggerId=trg_1p4R3gTobGZpD6fXvHT4rd',
    );
    expect(call.headers.get('Authorization')).toBe('Bearer eyJhbGciOi.run-as.token');
    expect(call.headers.get('norbix-project-id')).toBe('pr_34LHsiO8bArRioS07hHLf5');
    expect(call.headers.get('norbix-account-id')).toBe('acc_Cz5oZpeeTeLtkYHYTJrZ4');
    expect(call.headers.get('norbix-env')).toBe('TEST');
    expect(call.headers.get('nb-region')).toBe('nb-eu-germany');
  });

  it('createClient() targets the envelope api url too and accepts overrides', async () => {
    const mock = createMockFetch({ body: { result: { _id: '1' } } });
    const norbix = parseFunctionEvent(databaseSample).createClient({
      fetch: mock.fetch,
      timeoutMs: 5_000,
    });

    await norbix.api.database.insertOne({
      collectionName: 'order_events',
      document: JSON.stringify({ orderId: '6ac54a59212c29912eaddd81' }),
    });

    const call = mock.lastCall!;
    expect(call.url.startsWith('https://api.example.test/v3/')).toBe(true);
    expect(call.headers.get('Authorization')).toBe('Bearer eyJhbGciOi.run-as.token');
  });
});
