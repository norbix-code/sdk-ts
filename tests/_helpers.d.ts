import type { Norbix } from '../src/index.js';
import type { NorbixConfig } from '../src/index.js';
export interface CapturedRequest {
  url: string;
  method: string;
  headers: Headers;
  body?: string;
}
export interface MockFetchOptions {
  status?: number;
  body?: unknown;
  /** Called once per request right after capture. */
  capture?: (req: CapturedRequest) => void;
}
/**
 * Build a fetch implementation that captures every outgoing call and returns
 * a configurable response. Returns both the fetch function and a `lastCall`
 * accessor so tests can inspect what was sent without setting up listeners.
 */
export declare function createMockFetch(opts?: MockFetchOptions): {
  fetch: typeof fetch;
  readonly calls: CapturedRequest[];
  readonly lastCall: CapturedRequest | undefined;
};
/**
 * Build a Norbix client wired to a mock fetch. Optional config overrides let
 * a single test configure account scope, custom base URLs, etc.
 */
export declare function makeClient(overrides?: Partial<NorbixConfig>): {
  norbix: Norbix;
  mock: {
    fetch: typeof fetch;
    readonly calls: CapturedRequest[];
    readonly lastCall: CapturedRequest | undefined;
  };
};
/**
 * Walk a parameterised path template and produce a stub request object that
 * fills every `{token}` (other than `{version}`) with a deterministic value.
 * Used by generated tests to exercise path-token interpolation.
 */
export declare function stubRequestForPath(path: string): Record<string, string>;
/**
 * Build the URL we expect to see for `path` once `{version}` and any
 * `{tokens}` from `stub` are interpolated. Mirrors the transport's logic
 * intentionally — if the transport drifts, tests catch it.
 */
export declare function expectedUrl(args: {
  baseUrl: string;
  path: string;
  version: string;
  stub: Record<string, string>;
}): string;
//# sourceMappingURL=_helpers.d.ts.map
