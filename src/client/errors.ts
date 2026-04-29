/**
 * Shape of a ServiceStack ResponseStatus block returned by the Norbix gateways
 * on failure. Modelled after the `ResponseStatus` DTO so error envelopes are
 * consumer-friendly without forcing them to import generated DTO types.
 */
export interface NorbixErrorPayload {
  errorCode?: string;
  message?: string;
  stackTrace?: string;
  errors?: Array<{
    errorCode?: string;
    fieldName?: string;
    message?: string;
    meta?: Record<string, string>;
  }>;
  meta?: Record<string, string>;
}

export class NorbixError extends Error {
  public readonly status: number;
  public readonly code?: string;
  public readonly fieldErrors: NonNullable<NorbixErrorPayload['errors']>;
  public readonly raw?: unknown;
  public readonly url?: string;

  constructor(opts: {
    message: string;
    status: number;
    code?: string;
    fieldErrors?: NonNullable<NorbixErrorPayload['errors']>;
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
}

export class NorbixNetworkError extends NorbixError {
  constructor(opts: { message: string; url?: string; raw?: unknown }) {
    super({ message: opts.message, status: 0, code: 'NORBIX_NETWORK_ERROR', url: opts.url, raw: opts.raw });
    this.name = 'NorbixNetworkError';
  }
}

export class NorbixTimeoutError extends NorbixError {
  constructor(opts: { message: string; url?: string; raw?: unknown }) {
    super({ message: opts.message, status: 0, code: 'NORBIX_TIMEOUT', url: opts.url, raw: opts.raw });
    this.name = 'NorbixTimeoutError';
  }
}

export class NorbixAuthError extends NorbixError {
  constructor(opts: { message: string; status: number; code?: string; fieldErrors?: NorbixErrorPayload['errors']; url?: string; raw?: unknown }) {
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
  constructor(opts: { message: string; status: number; code?: string; fieldErrors?: NorbixErrorPayload['errors']; url?: string; raw?: unknown }) {
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

/** Parse a fetch Response body into a NorbixError. Best-effort, never throws. */
export async function fromResponse(res: Response, url: string): Promise<NorbixError> {
  let raw: unknown = undefined;
  let payload: NorbixErrorPayload | undefined;

  try {
    const text = await res.text();
    if (text) {
      try {
        raw = JSON.parse(text);
        // ServiceStack convention: { responseStatus: { ... } }
        const rs = (raw as { responseStatus?: NorbixErrorPayload }).responseStatus;
        payload = rs ?? (raw as NorbixErrorPayload);
      } catch {
        raw = text;
      }
    }
  } catch {
    // ignore
  }

  const message = payload?.message ?? `Request failed with status ${res.status}`;
  const code = payload?.errorCode;
  const fieldErrors = payload?.errors;

  if (res.status === 401 || res.status === 403) {
    return new NorbixAuthError({ message, status: res.status, code, fieldErrors, raw, url });
  }

  if (res.status === 400) {
    return new NorbixValidationError({ message, status: res.status, code, fieldErrors, raw, url });
  }

  return new NorbixError({
    message: payload?.message ?? `Request failed with status ${res.status}`,
    status: res.status,
    code: payload?.errorCode,
    fieldErrors: payload?.errors,
    raw,
    url,
  });
}
