import { describe, expectTypeOf, it } from 'vitest';

import type { CodeMashHub2 } from '../../src/types/hub2.dtos.js';
import type { NorbixWebhookMutation, NorbixWebhookPayload } from '../../src/webhooks/index.js';
import { NorbixWebhookEvents, NorbixWebhookReceiver } from '../../src/webhooks/index.js';

describe('webhooks payload types', () => {
  it('membership.user.registered payload is UserDto (entity, no wrapper)', () => {
    expectTypeOf<
      NorbixWebhookPayload<'membership.user.registered'>
    >().toEqualTypeOf<CodeMashHub2.UserDto>();
  });

  it('membership.user.updated payload is { from, to } (mutation)', () => {
    expectTypeOf<NorbixWebhookPayload<'membership.user.updated'>>().toEqualTypeOf<
      NorbixWebhookMutation<CodeMashHub2.UserDto>
    >();
  });

  it('database.record.inserted payload is the document type', () => {
    expectTypeOf<
      NorbixWebhookPayload<'database.record.inserted', CodeMashHub2.UserDto>
    >().toEqualTypeOf<CodeMashHub2.UserDto>();
  });

  it('database.record.updated payload is { from, to } of the document', () => {
    expectTypeOf<
      NorbixWebhookPayload<'database.record.updated', CodeMashHub2.UserDto>
    >().toEqualTypeOf<NorbixWebhookMutation<CodeMashHub2.UserDto>>();
  });

  it('database.records.inserted payload is the document array', () => {
    expectTypeOf<
      NorbixWebhookPayload<'database.records.inserted', CodeMashHub2.UserDto>
    >().toEqualTypeOf<CodeMashHub2.UserDto[]>();
  });

  it('on<UserDto>(registered) types the first arg as the user directly', () => {
    const receiver = new NorbixWebhookReceiver();
    receiver.on<CodeMashHub2.UserDto>(
      NorbixWebhookEvents.Membership.UserRegistered,
      (user, event) => {
        expectTypeOf(user).toEqualTypeOf<CodeMashHub2.UserDto>();
        expectTypeOf(event.metadata.user).toEqualTypeOf<{ id: string } | undefined>();
      },
    );
  });

  it('on(user.updated) types the first arg as { from, to }', () => {
    const receiver = new NorbixWebhookReceiver();
    receiver.on(NorbixWebhookEvents.Membership.UserUpdated, (user) => {
      expectTypeOf(user.from).toEqualTypeOf<CodeMashHub2.UserDto>();
      expectTypeOf(user.to).toEqualTypeOf<CodeMashHub2.UserDto>();
    });
  });

  it('on<UserDto>(database.record.inserted) types first arg as the document', () => {
    const receiver = new NorbixWebhookReceiver();
    receiver.on<CodeMashHub2.UserDto>(NorbixWebhookEvents.Database.RecordInserted, (record) => {
      expectTypeOf(record).toEqualTypeOf<CodeMashHub2.UserDto>();
    });
  });

  it('onRaw gives the raw envelope + ctx', () => {
    const receiver = new NorbixWebhookReceiver();
    receiver.onRaw(NorbixWebhookEvents.Membership.UserRegistered, (envelope, ctx) => {
      expectTypeOf(envelope.event).toEqualTypeOf<string>();
      expectTypeOf(ctx.verified).toEqualTypeOf<boolean | null>();
    });
  });
});
