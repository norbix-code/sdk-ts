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

  return new NorbixError({
    message: payload?.message ?? `Request failed with status ${res.status}`,
    status: res.status,
    code: payload?.errorCode,
    fieldErrors: payload?.errors,
    raw,
    url,
  });
}
