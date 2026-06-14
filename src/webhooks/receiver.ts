import type { CodeMashHub2 } from '../types/hub2.dtos.js';

import { NorbixWebhookSignatureError } from './errors.js';
import type { NorbixWebhookPayload } from './event-data.js';
import type { NorbixWebhookEventName } from './events.js';
import { normalizeNorbixWebhook } from './normalize.js';
import {
  parseNorbixWebhookEnvelope,
  parseNorbixWebhookHeaders,
  verifyNorbixWebhookSignature,
} from './parse.js';
import type { NorbixWebhookMutation } from './payloads.js';
import type {
  NorbixWebhookContext,
  NorbixWebhookEvent,
  NorbixWebhookHandleInput,
  NorbixWebhookHandleResult,
  NorbixWebhookHandler,
  NorbixWebhookRawHandler,
  NorbixWebhookReceiverOptions,
} from './types.js';

interface ResolvedConfig {
  secret?: string;
  toleranceSeconds: number;
  projectId?: string;
  accountId?: string;
}

function readEnv(): Record<string, string | undefined> {
  return typeof process !== 'undefined' && process.env ? process.env : {};
}

function toNumber(value: string | undefined): number | undefined {
  if (value == null || value === '') return undefined;
  const n = Number(value);
  return Number.isFinite(n) ? n : undefined;
}

function resolveConfig(options: NorbixWebhookReceiverOptions): ResolvedConfig {
  const env = readEnv();
  const tolerance = options.toleranceSeconds ?? toNumber(env.NORBIX_WEBHOOK_TOLERANCE_SECONDS);
  return {
    secret: options.secret ?? env.NORBIX_WEBHOOK_SIGNING_SECRET,
    projectId: options.projectId ?? env.NORBIX_PROJECT_ID,
    accountId: options.accountId ?? env.NORBIX_ACCOUNT_ID,
    toleranceSeconds: Number.isFinite(tolerance) ? (tolerance as number) : 300,
  };
}

/** Internal record of a registered handler and how to invoke it. */
interface Registration {
  raw: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- holds either handler shape
  fn: (...args: any[]) => void | Promise<void>;
}

/**
 * Register handlers for inbound Norbix webhook deliveries (trigger → destination POST).
 *
 * Verifies the HMAC signature, parses the envelope, normalises the payload, and
 * dispatches to per-event handlers.
 *
 * @example
 * ```ts
 * import { NorbixWebhookReceiver, NorbixWebhookEvents } from '@norbix.ai/ts/webhooks';
 * import type { CodeMashHub2 } from '@norbix.ai/ts/types/hub';
 *
 * const receiver = new NorbixWebhookReceiver(); // reads env
 *
 * // Typed: first arg IS the payload, second is metadata.
 * receiver.on<CodeMashHub2.UserDto>(
 *   NorbixWebhookEvents.Membership.UserRegistered,
 *   (user, event) => {
 *     user.email ?? user.userName;
 *     event.metadata.user?.id;
 *   },
 * );
 *
 * // Mutation: payload is { from, to }.
 * receiver.on(NorbixWebhookEvents.Membership.UserUpdated, (user, event) => {
 *   if (user.from.email !== user.to.email) { ... }
 * });
 *
 * // Raw escape hatch: (envelope, ctx).
 * receiver.onRaw(NorbixWebhookEvents.Files.FileUploaded, (envelope, ctx) => {});
 *
 * await receiver.handle({ rawBody, headers: req.headers });
 * ```
 */
export class NorbixWebhookReceiver {
  private readonly handlers = new Map<string, Registration>();
  private defaultHandler?: Registration;
  private readonly config: ResolvedConfig;

  constructor(options: NorbixWebhookReceiverOptions = {}) {
    this.config = resolveConfig(options);
  }

  /* ---- Typed handlers: (payload, event) ---- */

  /**
   * Membership user entity events (create / delete / state flip) — `payload`
   * is the user directly. Pass the entity type as the generic, e.g.
   * `on<CodeMashHub2.UserDto>(NorbixWebhookEvents.Membership.UserRegistered, ...)`.
   */
  on<TUser = CodeMashHub2.UserDto>(
    event:
      | 'membership.user.registered'
      | 'membership.user.verified'
      | 'membership.user.blocked'
      | 'membership.user.reactivated'
      | 'membership.user.deleted',
    handler: NorbixWebhookHandler<TUser>,
  ): this;
  /** Membership user-updated mutation — `payload` is `{ from, to }`. */
  on<TUser = CodeMashHub2.UserDto>(
    event: 'membership.user.updated',
    handler: NorbixWebhookHandler<NorbixWebhookMutation<TUser>>,
  ): this;
  /** Database record mutation — pass the document type; `payload` is `{ from, to }`. */
  on<TDocument>(
    event: 'database.record.updated' | 'database.record.replaced',
    handler: NorbixWebhookHandler<NorbixWebhookMutation<TDocument>>,
  ): this;
  /** Database single-record entity — pass the document type; `payload` is the document. */
  on<TDocument>(
    event: 'database.record.inserted' | 'database.record.deleted',
    handler: NorbixWebhookHandler<TDocument>,
  ): this;
  /** Database batch insert — pass the document type; `payload` is the array. */
  on<TDocument>(
    event: 'database.records.inserted',
    handler: NorbixWebhookHandler<TDocument[]>,
  ): this;
  /** Any known catalog event — `payload` typed from the payload map. */
  on<E extends NorbixWebhookEventName>(
    event: E,
    handler: NorbixWebhookHandler<NorbixWebhookPayload<E>>,
  ): this;
  /** Any event name — untyped payload. */
  on(event: string, handler: NorbixWebhookHandler): this;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- overloads pass narrower handlers
  on(event: string, handler: NorbixWebhookHandler<any>): this {
    this.handlers.set(event, { raw: false, fn: handler });
    return this;
  }

  /** Register the typed handler for many events at once (skips already-registered). */
  onEach(events: readonly string[], handler: NorbixWebhookHandler): this {
    for (const event of events) {
      if (!this.handlers.has(event)) this.handlers.set(event, { raw: false, fn: handler });
    }
    return this;
  }

  /* ---- Raw handlers: (envelope, ctx) ---- */

  /** Raw handler for one event — receives the envelope and delivery context. */
  onRaw<TData = unknown>(event: string, handler: NorbixWebhookRawHandler<TData>): this {
    this.handlers.set(event, { raw: true, fn: handler as NorbixWebhookRawHandler });
    return this;
  }

  /** Register a raw handler for many events at once (skips already-registered). */
  onEachRaw(events: readonly string[], handler: NorbixWebhookRawHandler): this {
    for (const event of events) {
      if (!this.handlers.has(event)) this.handlers.set(event, { raw: true, fn: handler });
    }
    return this;
  }

  /** Fallback (raw) when no event-specific handler is registered. */
  onDefault(handler: NorbixWebhookRawHandler): this {
    this.defaultHandler = { raw: true, fn: handler };
    return this;
  }

  /**
   * Verify (when secret configured), parse, normalise, and dispatch the delivery.
   * Throws NorbixWebhookSignatureError (401-worthy) on bad signature or guard
   * mismatch; otherwise returns a 200-worthy result.
   */
  async handle(input: NorbixWebhookHandleInput): Promise<NorbixWebhookHandleResult> {
    const deliveryHeaders = parseNorbixWebhookHeaders(input.headers);
    const shouldVerify = input.verify !== false && !!this.config.secret;
    let verified: boolean | null = null;

    if (shouldVerify && this.config.secret) {
      const result = verifyNorbixWebhookSignature({
        secret: this.config.secret,
        rawBody: input.rawBody,
        signature: deliveryHeaders.signature,
        timestamp: deliveryHeaders.timestamp,
        toleranceSeconds: this.config.toleranceSeconds,
      });
      if (!result.ok) {
        throw new NorbixWebhookSignatureError(result.reason ?? 'Invalid signature');
      }
      verified = true;
    }

    const envelope = parseNorbixWebhookEnvelope(input.rawBody);

    if (this.config.projectId && envelope.projectId !== this.config.projectId) {
      throw new NorbixWebhookSignatureError(
        `delivery projectId ${envelope.projectId} does not match configured ${this.config.projectId}`,
      );
    }
    if (this.config.accountId && envelope.accountId !== this.config.accountId) {
      throw new NorbixWebhookSignatureError(
        `delivery accountId ${envelope.accountId} does not match configured ${this.config.accountId}`,
      );
    }

    const ctx: NorbixWebhookContext = {
      path: input.path,
      headers: {
        ...deliveryHeaders,
        event: deliveryHeaders.event ?? envelope.event,
        deliveryId: deliveryHeaders.deliveryId ?? envelope.id,
        accountId: deliveryHeaders.accountId ?? envelope.accountId,
        projectId: deliveryHeaders.projectId ?? envelope.projectId,
      },
      verified,
    };

    const registration = this.handlers.get(envelope.event) ?? this.defaultHandler;
    let handled = false;

    if (registration) {
      if (registration.raw) {
        await registration.fn(envelope, ctx);
      } else {
        const { payload, metadata } = normalizeNorbixWebhook(envelope);
        const event: NorbixWebhookEvent = {
          name: envelope.event,
          deliveryId: envelope.id,
          createdOn: envelope.createdOn,
          triggerId: envelope.triggerId ?? null,
          correlationId: null,
          accountId: ctx.headers.accountId ?? envelope.accountId,
          projectId: ctx.headers.projectId ?? envelope.projectId,
          integrationId: ctx.headers.integrationId,
          destinationId: ctx.headers.destinationId,
          verified,
          metadata,
          raw: envelope,
        };
        await registration.fn(payload, event);
      }
      handled = true;
    }

    return {
      received: true,
      event: envelope.event,
      deliveryId: envelope.id,
      verified,
      handled,
      triggerId: envelope.triggerId,
    };
  }
}
