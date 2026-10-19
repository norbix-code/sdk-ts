import { Norbix } from '../client/Norbix.js';
import type { NorbixConfig } from '../client/types.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

import { NorbixFunctionEventError } from './errors.js';
import type {
  CodeFunctionClientOptions,
  CodeFunctionSourceName,
  DatabaseRecordChange,
  FileChange,
  UserChange,
} from './types.js';

type Slot = keyof CodeMashHub2.CodeFunctionDataDto;

/**
 * The envelope every cloud function receives (`CodeFunctionEventDto`) plus the
 * helpers §7 of the contract adds on top: typed views on `data`, and the
 * options of a `Norbix` client that acts as the run-as user.
 *
 * Every DTO field is on the instance as-is — the wire JSON is never reshaped,
 * so `JSON.stringify(event)` is the envelope you were given.
 */
export class CodeFunctionEvent implements CodeMashHub2.CodeFunctionEventDto {
  public specVersion!: string;
  public id!: string;
  public eventId!: string;
  public event!: string;
  public source!: CodeMashHub2.CodeFunctionSource;
  public createdOn!: string;
  public context!: CodeMashHub2.CodeFunctionContextDto;
  public data!: CodeMashHub2.CodeFunctionDataDto;
  public config?: { [index: string]: object };

  /** @internal Use `parseFunctionEvent(raw)`. */
  constructor(dto: CodeMashHub2.CodeFunctionEventDto) {
    Object.assign(this, dto);
  }

  /**
   * Case-insensitive source check: the wire carries `"database"`, the generated
   * enum says `'Database'` — both match `event.isSource('database')`.
   */
  isSource(source: CodeFunctionSourceName | CodeMashHub2.CodeFunctionSource): boolean {
    return String(this.source).toLowerCase() === String(source).toLowerCase();
  }

  /** Database trigger — `data.database`, the documents typed as `T`. */
  asDatabaseRecordChange<T = Record<string, unknown>>(): DatabaseRecordChange<T> {
    const slot = this.requireSlot('database', 'asDatabaseRecordChange');
    return { ...slot, old: pick<T>(slot.old), new: pick<T>(slot.new) };
  }

  /** Membership trigger — `data.user`, the user documents typed as `T`. */
  asUserChange<T = CodeMashHub2.UserDto>(): UserChange<T> {
    const slot = this.requireSlot('user', 'asUserChange');
    return { ...slot, old: pick<T>(slot.old), new: pick<T>(slot.new) };
  }

  /** Files trigger — `data.file`. */
  asFileChange<T = Record<string, unknown>>(): FileChange<T> {
    const slot = this.requireSlot('file', 'asFileChange');
    return { ...slot, old: pick<T>(slot.old), new: pick<T>(slot.new) };
  }

  /** Payments trigger — `data.payment`, the provider's webhook fact. */
  asPayment(): CodeMashHub2.PaymentFactDto {
    return this.requireSlot('payment', 'asPayment');
  }

  /**
   * Payments order trigger (`payments.order.*`) — `data.order`: the stored order
   * after the change, with `orderEventId` to de-duplicate on. `asPayment()` still
   * returns the callback that made the change.
   */
  asPaymentOrder(): CodeMashHub2.PaymentOrderEventDto {
    return this.requireSlot('order', 'asPaymentOrder');
  }

  /** AI trigger — `data.ai`. */
  asAiUsage(): CodeMashHub2.AiUsageEventDto {
    return this.requireSlot('ai', 'asAiUsage');
  }

  /** Scheduler task — `data.task`: which task fired and when. */
  asScheduledTask(): CodeMashHub2.ScheduledTaskInfoDto {
    return this.requireSlot('task', 'asScheduledTask');
  }

  /** Marketplace function call — `data.marketplace`: which installed function ran, with its rendered payload. */
  asMarketplaceCall(): CodeMashHub2.MarketplaceFunctionCallDto {
    return this.requireSlot('marketplace', 'asMarketplaceCall');
  }

  /**
   * The caller's JSON: `data.payload` of a manual `invokeCodeFunction` /
   * `norbix code invoke` call, or a scheduler task's static payload.
   * `undefined` when the event carries none.
   */
  payload<T = Record<string, unknown>>(): T | undefined {
    return pick<T>(this.data?.payload);
  }

  /**
   * Options for a `Norbix` client that acts as the run-as user, against the
   * deployment that sent the event: `projectId`, `accountId`, `env` (the
   * environment the event happened in — never defaulted), `region`,
   * `bearerToken` (`context.runAs.accessToken`, valid 15 minutes or the
   * function's timeout) and `baseUrl.{hub,api}` from `context.hubUrl` /
   * `context.apiUrl`. Throws when the action has no run-as user.
   */
  clientOptions(): CodeFunctionClientOptions {
    const ctx = this.context;
    const token = ctx?.runAs?.accessToken;
    if (!token) {
      throw new NorbixFunctionEventError(
        `Norbix function event "${this.event}" has no context.runAs.accessToken — set a run-as user on the trigger action or the scheduler task to call Norbix back.`,
        'FUNCTION_EVENT_NO_RUN_AS_TOKEN',
      );
    }
    const options: CodeFunctionClientOptions = {
      projectId: ctx.projectId,
      accountId: ctx.accountId,
      env: ctx.environment,
      bearerToken: token,
      baseUrl: { hub: ctx.hubUrl, api: ctx.apiUrl },
    };
    if (ctx.region) options.region = ctx.region;
    return options;
  }

  /** `new Norbix({ ...event.clientOptions(), ...overrides })`. */
  createClient(overrides: Omit<NorbixConfig, keyof CodeFunctionClientOptions> = {}): Norbix {
    return new Norbix({ ...this.clientOptions(), ...overrides });
  }

  private requireSlot<K extends Slot>(
    slot: K,
    view: string,
  ): NonNullable<CodeMashHub2.CodeFunctionDataDto[K]> {
    const value = this.data?.[slot];
    if (value === undefined || value === null) {
      throw new NorbixFunctionEventError(
        `Norbix function event "${this.event}" (source ${String(this.source)}) carries no data.${slot} — ${view}() is for a ${slotSource[slot]} event.`,
        'FUNCTION_EVENT_WRONG_SOURCE',
      );
    }
    return value;
  }
}

const slotSource: Record<Slot, string> = {
  database: 'database',
  user: 'membership',
  file: 'files',
  payment: 'payments',
  order: 'payments order (payments.order.*)',
  ai: 'ai',
  task: 'scheduler',
  payload: 'manual / scheduler',
  marketplace: 'marketplace',
};

/** `null` on the wire (older gateways) → `undefined`, so `old?.x` reads the same either way. */
function pick<T>(value: unknown): T | undefined {
  return value === null || value === undefined ? undefined : (value as T);
}
