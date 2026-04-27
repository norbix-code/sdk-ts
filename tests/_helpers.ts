/**
 * Shared test helpers for the auto-generated module tests.
 *
 * The generated tests deliberately keep their assertions narrow — one
 * captured request per call — and lean on these helpers for mock fetch
 * construction and URL/header inspection. This keeps each test file small
 * and readable even when a module has 30+ endpoints.
 */
import { vi } from 'vitest';

import { Norbix } from '../src/index.js';
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
export function createMockFetch(opts: MockFetchOptions = {}) {
  const calls: CapturedRequest[] = [];

  const fetchImpl = vi.fn(async (input: string | URL | Request, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : (input as URL).toString();
    const method = (init?.method ?? 'GET').toUpperCase();
    const headers = new Headers(init?.headers ?? {});
    const body = typeof init?.body === 'string' ? init.body : undefined;
    const captured: CapturedRequest = { url, method, headers, body };
    calls.push(captured);
    opts.capture?.(captured);
    const status = opts.status ?? 200;
    const text = opts.body === undefined ? '' : JSON.stringify(opts.body);
    return new Response(text, {
      status,
      headers: { 'Content-Type': 'application/json' },
    });
  }) as unknown as typeof fetch;

  return {
    fetch: fetchImpl,
    get calls() {
      return calls;
    },
    get lastCall(): CapturedRequest | undefined {
      return calls[calls.length - 1];
    },
  };
}

/**
 * Build a Norbix client wired to a mock fetch. Optional config overrides let
 * a single test configure account scope, custom base URLs, etc.
 */
export function makeClient(overrides: Partial<NorbixConfig> = {}) {
  const mock = createMockFetch({ body: {} });
  const norbix = new Norbix({
    bearerToken: 'test-token',
    projectId: 'test-project',
    apiVersion: 'v2',
    hubVersion: 'v2',
    fetch: mock.fetch,
    ...overrides,
  });
  return { norbix, mock };
}

/**
 * Walk a parameterised path template and produce a stub request object that
 * fills every `{token}` (other than `{version}`) with a deterministic value.
 * Used by generated tests to exercise path-token interpolation.
 */
export function stubRequestForPath(path: string): Record<string, string> {
  const stub: Record<string, string> = {};
  const re = /\{([^/{}]+)\}/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(path)) !== null) {
    if (m[1] === 'version') continue;
    stub[m[1]!] = `stub-${m[1]}`;
  }
  return stub;
}

/**
 * Build the URL we expect to see for `path` once `{version}` and any
 * `{tokens}` from `stub` are interpolated. Mirrors the transport's logic
 * intentionally — if the transport drifts, tests catch it.
 */
export function expectedUrl(args: {
  baseUrl: string;
  path: string;
  version: string;
  stub: Record<string, string>;
}): string {
  let path = args.path.replace('{version}', encodeURIComponent(args.version));
  path = path.replace(/\{([^/{}]+)\}/g, (_match, token: string) => {
    const v = args.stub[token];
    if (v === undefined) throw new Error(`stub missing token ${token}`);
    return encodeURIComponent(v);
  });
  const base = args.baseUrl.endsWith('/') ? args.baseUrl.slice(0, -1) : args.baseUrl;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
