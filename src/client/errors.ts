/**
 * The error body the Norbix gateways send.
 *
 * A failed answer always carries a `responseStatus` block. The gateway builds
 * it from its own `CodeMashResponseStatus` record, so the real message and the
 * real error code live **inside `responseStatus.errors[]`**, not at the top of
 * the block:
 *
 * ```json
 * {
 *   "responseStatus": {
 *     "isSuccess": false,
 *     "errors": [
 *       { "message": "File not found: \"a.txt\" ...",
 *         "errorCode": "CM-ERRORS-FILES-016",
 *         "context": { "Path": "a.txt", "Provider": "Local" } }
 *     ]
 *   }
 * }
 * ```
 *
 * Older / ServiceStack-shaped answers put `message` and `errorCode` at the top
 * of `responseStatus` and use `fieldName` on each error. Both shapes are read.
 */
export interface NorbixErrorItem {
  errorCode?: string;
  fieldName?: string;
  message?: string;
  /** Extra values the gateway attached to this error (`context` on the wire). */
  meta?: Record<string, string | null>;
}

export interface NorbixErrorPayload {
  /** `false` on a failed answer. The gateway sends it even with HTTP 200. */
  isSuccess?: boolean;
  errorCode?: string;
  message?: string;
  stackTrace?: string;
  errors?: NorbixErrorItem[];
  meta?: Record<string, string>;
}

/** Wire shape of one error inside `responseStatus.errors[]`. */
interface WireError {
  errorCode?: string | null;
  fieldName?: string | null;
  message?: string | null;
  context?: Record<string, string | null> | null;
  meta?: Record<string, string | null> | null;
}

export class NorbixError extends Error {
  /** HTTP status of the answer. `200` when the gateway failed with a 200 body. */
  public readonly status: number;
  public readonly code?: string;
  public readonly fieldErrors: NorbixErrorItem[];
  public readonly raw?: unknown;
  public readonly url?: string;

  constructor(opts: {
    message: string;
    status: number;
    code?: string;
    fieldErrors?: NorbixErrorItem[];
    raw?: unknown;
    url?: string;
  }) {
    super(opts.message);
    this.name = 'NorbixError';
    this.status = opts.status;
    this.code = opts.code;
    this.fieldErrors = opts.fieldErrors ?? [];
    this.raw = opts.raw;
    this.url = opts.url;
  }

  /** Same value as `status`. The name every Norbix SDK uses for it. */
  get httpStatus(): number {
    return this.status;
  }

  /** Same value as `code`. The name every Norbix SDK uses for it. */
  get errorCode(): string | undefined {
    return this.code;
  }

  /** Same list as `fieldErrors`. The name every Norbix SDK uses for it. */
  get errors(): NorbixErrorItem[] {
    return this.fieldErrors;
  }

  /** Same value as `raw` — the body as it arrived (parsed JSON, or the text). */
  get body(): unknown {
    return this.raw;
  }
}

export class NorbixNetworkError extends NorbixError {
  constructor(opts: { message: string; url?: string; raw?: unknown }) {
    super({
      message: opts.message,
      status: 0,
      code: 'NORBIX_NETWORK_ERROR',
      url: opts.url,
      raw: opts.raw,
    });
    this.name = 'NorbixNetworkError';
  }
}

export class NorbixTimeoutError extends NorbixError {
  constructor(opts: { message: string; url?: string; raw?: unknown }) {
    super({
      message: opts.message,
      status: 0,
      code: 'NORBIX_TIMEOUT',
      url: opts.url,
      raw: opts.raw,
    });
    this.name = 'NorbixTimeoutError';
  }
}

export class NorbixAuthError extends NorbixError {
  constructor(opts: {
    message: string;
    status: number;
    code?: string;
    fieldErrors?: NorbixErrorItem[];
    url?: string;
    raw?: unknown;
  }) {
    super({
      message: opts.message,
      status: opts.status,
      code: opts.code ?? 'NORBIX_AUTH_ERROR',
      fieldErrors: opts.fieldErrors ?? [],
      raw: opts.raw,
      url: opts.url,
    });
    this.name = 'NorbixAuthError';
  }
}

export class NorbixValidationError extends NorbixError {
  constructor(opts: {
    message: string;
    status: number;
    code?: string;
    fieldErrors?: NorbixErrorItem[];
    url?: string;
    raw?: unknown;
  }) {
    super({
      message: opts.message,
      status: opts.status,
      code: opts.code ?? 'NORBIX_VALIDATION_ERROR',
      fieldErrors: opts.fieldErrors ?? [],
      raw: opts.raw,
      url: opts.url,
    });
    this.name = 'NorbixValidationError';
  }
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

/** The `responseStatus` block of a body, whatever the casing of the key. */
function responseStatusOf(raw: unknown): Record<string, unknown> | undefined {
  if (!isRecord(raw)) return undefined;
  for (const key of Object.keys(raw)) {
    if (key.toLowerCase() === 'responsestatus') {
      const rs = raw[key];
      return isRecord(rs) ? rs : undefined;
    }
  }
  return undefined;
}

function textOrUndefined(v: unknown): string | undefined {
  return typeof v === 'string' && v.length > 0 ? v : undefined;
}

function toItem(e: unknown): NorbixErrorItem {
  if (!isRecord(e)) return { message: typeof e === 'string' ? e : undefined };
  const w = e as WireError;
  const meta = (w.context ?? w.meta) as Record<string, string | null> | null | undefined;
  return {
    errorCode: textOrUndefined(w.errorCode),
    fieldName: textOrUndefined(w.fieldName),
    message: textOrUndefined(w.message),
    meta: meta ?? undefined,
  };
}

/**
 * `true` when the gateway said the call failed inside the body.
 *
 * The gateway answers a business refusal — an unknown id, a rule that says no —
 * with **HTTP 200** and `responseStatus.isSuccess = false`. Without this check
 * the SDK would hand such an answer back as a value and the caller would carry
 * on as if the call had worked (10b-files, issue #67).
 */
export function isFailedBody(raw: unknown): boolean {
  const rs = responseStatusOf(raw);
  return isRecord(rs) && rs['isSuccess'] === false;
}

/**
 * Read a parsed error body into message / code / error list.
 *
 * Order: `responseStatus.errors[]` first (that is where the gateway puts the
 * real text), then the top of `responseStatus`, then the top of the body, and
 * only when everything is empty the generic fallback text.
 */
export function readErrorBody(
  raw: unknown,
  status: number,
): { message: string; code?: string; fieldErrors: NorbixErrorItem[] } {
  const rs = responseStatusOf(raw);
  const source = rs ?? (isRecord(raw) ? raw : undefined);

  const listRaw = source?.['errors'];
  const fieldErrors = Array.isArray(listRaw) ? listRaw.map(toItem) : [];
  const first = fieldErrors.find((e) => e.message !== undefined || e.errorCode !== undefined);

  // `source` is `responseStatus` when the body has one, the body itself when it
  // has none — so the top-level fields are read only in the second case, and
  // the generic text only when nothing else said anything.
  const message =
    first?.message ?? textOrUndefined(source?.['message']) ?? `Request failed (HTTP ${status})`;

  const code = first?.errorCode ?? textOrUndefined(source?.['errorCode']);

  return { message, code, fieldErrors };
}

/** Build the right NorbixError for a status + an already parsed body. */
export function errorFromBody(args: { status: number; raw: unknown; url?: string }): NorbixError {
  const { message, code, fieldErrors } = readErrorBody(args.raw, args.status);
  const opts = { message, status: args.status, code, fieldErrors, raw: args.raw, url: args.url };

  if (args.status === 401 || args.status === 403) return new NorbixAuthError(opts);
  if (args.status === 400) return new NorbixValidationError(opts);
  return new NorbixError(opts);
}

/** Parse a fetch Response body into a NorbixError. Best-effort, never throws. */
export async function fromResponse(res: Response, url: string): Promise<NorbixError> {
  let raw: unknown = undefined;

  try {
    const text = await res.text();
    if (text) {
      try {
        raw = JSON.parse(text);
      } catch {
        raw = text;
      }
    }
  } catch {
    // ignore — an unreadable body still gives the status
  }

  return errorFromBody({ status: res.status, raw, url });
}
