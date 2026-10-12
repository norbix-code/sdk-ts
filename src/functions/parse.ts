import type { CodeMashHub2 } from '../types/hub2.dtos.js';

import { NorbixFunctionEventError } from './errors.js';
import { CodeFunctionEvent } from './event.js';
import { CODE_FUNCTION_SPEC_VERSION } from './types.js';

/**
 * Turn the raw input of a cloud function (the JSON text or the already-parsed
 * object AWS Lambda, Azure Functions or Google Cloud Functions hand you) into a
 * `CodeFunctionEvent`. Refuses an input that is not an object, has no
 * `specVersion` or one this SDK does not know, or lacks `event` / `source` /
 * `context` / `data` — with a `NorbixFunctionEventError` whose `code` says which.
 *
 * ```ts
 * export const handler = async (raw: unknown) => {
 *   const event = parseFunctionEvent(raw);
 *   if (!event.isSource('database')) return { ok: true, skipped: event.event };
 *   const { old, new: next } = event.asDatabaseRecordChange<Order>();
 *   const norbix = event.createClient();
 *   …
 * };
 * ```
 */
export function parseFunctionEvent(raw: unknown): CodeFunctionEvent {
  const obj = toObject(raw);

  const specVersion = obj.specVersion;
  if (specVersion === undefined || specVersion === null) {
    throw new NorbixFunctionEventError(
      'Norbix function event has no specVersion — this is not a cloud-function envelope.',
      'FUNCTION_EVENT_UNSUPPORTED_SPEC_VERSION',
    );
  }
  if (String(specVersion) !== CODE_FUNCTION_SPEC_VERSION) {
    throw new NorbixFunctionEventError(
      `Norbix function event specVersion "${String(specVersion)}" is not supported by this SDK (supports "${CODE_FUNCTION_SPEC_VERSION}") — upgrade @norbix.ai/ts.`,
      'FUNCTION_EVENT_UNSUPPORTED_SPEC_VERSION',
    );
  }

  for (const field of ['event', 'source'] as const) {
    if (typeof obj[field] !== 'string' || obj[field] === '') {
      throw new NorbixFunctionEventError(
        `Norbix function event has no "${field}" string.`,
        'FUNCTION_EVENT_INVALID',
      );
    }
  }
  for (const field of ['context', 'data'] as const) {
    if (!isObject(obj[field])) {
      throw new NorbixFunctionEventError(
        `Norbix function event has no "${field}" object.`,
        'FUNCTION_EVENT_INVALID',
      );
    }
  }

  return new CodeFunctionEvent(obj as unknown as CodeMashHub2.CodeFunctionEventDto);
}

function toObject(raw: unknown): Record<string, unknown> {
  let value = raw;
  if (typeof raw === 'string') {
    try {
      value = JSON.parse(raw);
    } catch (err) {
      throw new NorbixFunctionEventError(
        `Norbix function event is not valid JSON: ${(err as Error).message}`,
        'FUNCTION_EVENT_INVALID',
      );
    }
  }
  if (!isObject(value)) {
    throw new NorbixFunctionEventError(
      `Norbix function event must be a JSON object, got ${value === null ? 'null' : typeof value}.`,
      'FUNCTION_EVENT_INVALID',
    );
  }
  return value;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
