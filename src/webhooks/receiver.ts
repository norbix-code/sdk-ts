import { NorbixWebhookSignatureError } from './errors.js';
import {
  parseNorbixWebhookEnvelope,
  parseNorbixWebhookHeaders,
  verifyNorbixWebhookSignature,
} from './parse.js';
import type {
  NorbixWebhookContext,
  NorbixWebhookHandleInput,
  NorbixWebhookHandleResult,
  NorbixWebhookHandler,
  NorbixWebhookReceiverOptions,
} from './types.js';

/**
 * Register handlers for inbound Norbix webhook deliveries (trigger → destination POST).
 *
 * Triggers with a `WebhookCall` action publish events to configured destinations.
 * This receiver verifies the HMAC signature, parses the envelope, and dispatches
 * to per-event handlers (similar to Stripe's webhook pattern).
 *
 * @example
 * ```ts
 * const receiver = new NorbixWebhookReceiver({
 *   secret: process.env.NORBIX_WEBHOOK_SECRET,
 * });
 *
 * receiver.on('database.record.inserted', async (event) => {
 *   console.log('inserted', event.data);
 * });
 *
 * receiver.onDefault(async (event) => {
 *   console.log('unhandled', event.event);
 * });
 *
 * await receiver.handle({ rawBody, headers: req.headers });
 * ```
 */
export class NorbixWebhookReceiver {
  private readonly handlers = new Map<string, NorbixWebhookHandler>();
  private defaultHandler?: NorbixWebhookHandler;

  constructor(private readonly options: NorbixWebhookReceiverOptions = {}) {}

  /** Handle a specific event name (e.g. membership.user.registered). */
  on(event: string, handler: NorbixWebhookHandler): this {
    this.handlers.set(event, handler);
    return this;
  }

  /** Fallback when no event-specific handler is registered. */
  onDefault(handler: NorbixWebhookHandler): this {
    this.defaultHandler = handler;
    return this;
  }

  /**
   * Verify (when secret configured), parse, and dispatch the delivery.
   * Returns 200-worthy result — throw NorbixWebhookSignatureError for 401.
   */
  async handle(input: NorbixWebhookHandleInput): Promise<NorbixWebhookHandleResult> {
    const deliveryHeaders = parseNorbixWebhookHeaders(input.headers);
    const shouldVerify = input.verify !== false && !!this.options.secret;
    let verified: boolean | null = null;

    if (shouldVerify && this.options.secret) {
      const result = verifyNorbixWebhookSignature({
        secret: this.options.secret,
        rawBody: input.rawBody,
        signature: deliveryHeaders.signature,
        timestamp: deliveryHeaders.timestamp,
        toleranceSeconds: this.options.toleranceSeconds ?? 300,
      });
      if (!result.ok) {
        throw new NorbixWebhookSignatureError(result.reason ?? 'Invalid signature');
      }
      verified = true;
    }

    const envelope = parseNorbixWebhookEnvelope(input.rawBody);
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

    const handler = this.handlers.get(envelope.event) ?? this.defaultHandler;
    let handled = false;
    if (handler) {
      await handler(envelope, ctx);
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
