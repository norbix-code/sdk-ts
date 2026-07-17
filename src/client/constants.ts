// Canonical public Norbix endpoint URLs. Re-use these instead of hardcoding the
// host anywhere downstream (admin portal backend, tooling, etc.) so the literal
// lives in exactly one place. The zero-config SDK fallback (Norbix.ts) keeps its
// own DEFAULT_BASE_URL_* values; these are the PUBLIC PRODUCTION hosts callers
// reference explicitly.

/** Public production Hub base URL. */
export const NORBIX_HUB_URL = 'https://hub.norbix.ai';

/** Public production API base URL. */
export const NORBIX_API_URL = 'https://api.norbix.ai';
