/**
 * Browser-safe access to environment variables. The SDK runs in Node and
 * the browser; `process` is a Node global and may not exist in the browser.
 *
 * `readEnv(key)` returns the value of `process.env[key]` when running in Node
 * with the variable defined, otherwise `undefined`. Never throws.
 *
 * Tests can override the source by passing a custom env record to
 * `loadEnvConfig`, which keeps the codebase free of `vi.stubEnv` dance.
 */
export type NorbixEnvKey =
  | 'NORBIX_API_KEY'
  | 'NORBIX_BEARER_TOKEN'
  | 'NORBIX_PROJECT_ID'
  | 'NORBIX_ACCOUNT_ID'
  | 'NORBIX_API_URL'
  | 'NORBIX_HUB_URL'
  | 'NORBIX_API_VERSION'
  | 'NORBIX_HUB_VERSION'
  | 'NORBIX_TIMEOUT_MS';

export function readEnv(
  key: NorbixEnvKey,
  source?: Record<string, string | undefined>,
): string | undefined {
  if (source) return source[key];
  // Browsers don't have `process`. Bundlers like Vite shim it, but we keep
  // the access defensive so the SDK never crashes at import time.
  if (typeof process === 'undefined') return undefined;
  if (!process.env) return undefined;
  return process.env[key];
}

/**
 * Resolve all NORBIX_* env vars into a typed snapshot. Returns an object with
 * only the keys that were set, so callers can spread it as a partial config.
 */
export interface EnvConfig {
  apiKey?: string;
  bearerToken?: string;
  projectId?: string;
  accountId?: string;
  apiUrl?: string;
  hubUrl?: string;
  apiVersion?: string;
  hubVersion?: string;
  timeoutMs?: number;
}

export function loadEnvConfig(source?: Record<string, string | undefined>): EnvConfig {
  const out: EnvConfig = {};
  const setIfPresent = <K extends keyof EnvConfig>(key: K, value: string | undefined) => {
    if (value !== undefined && value !== '') {
      // Numeric coercion only applies to timeoutMs.
      out[key] = (key === 'timeoutMs' ? Number(value) : value) as EnvConfig[K];
    }
  };

  setIfPresent('apiKey', readEnv('NORBIX_API_KEY', source));
  setIfPresent('bearerToken', readEnv('NORBIX_BEARER_TOKEN', source));
  setIfPresent('projectId', readEnv('NORBIX_PROJECT_ID', source));
  setIfPresent('accountId', readEnv('NORBIX_ACCOUNT_ID', source));
  setIfPresent('apiUrl', readEnv('NORBIX_API_URL', source));
  setIfPresent('hubUrl', readEnv('NORBIX_HUB_URL', source));
  setIfPresent('apiVersion', readEnv('NORBIX_API_VERSION', source));
  setIfPresent('hubVersion', readEnv('NORBIX_HUB_VERSION', source));
  setIfPresent('timeoutMs', readEnv('NORBIX_TIMEOUT_MS', source));

  return out;
}
