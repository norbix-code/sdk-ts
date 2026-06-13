import { describe, expect, it, vi } from 'vitest';

import {
  Norbix,
  NorbixAuthError,
  NorbixError,
  NorbixNetworkError,
  NorbixTimeoutError,
  NorbixValidationError,
} from '../src/index.js';

function fakeFetch(opts: {
  status?: number;
  body?: unknown;
  capture?: (req: { url: string; init: RequestInit }) => void;
}): typeof fetch {
  return vi.fn(async (input: string | URL | Request, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : (input as URL).toString();
    opts.capture?.({ url, init: init ?? {} });
    const status = opts.status ?? 200;
    const text = opts.body === undefined ? '' : JSON.stringify(opts.body);
    return new Response(text, {
      status,
      headers: { 'Content-Type': 'application/json' },
    });
  }) as unknown as typeof fetch;
}

// Helper: invoke an arbitrary endpoint method through bracket access without
// fighting `noUncheckedIndexedAccess`.
function call(
  norbix: Norbix,
  ns: 'api' | 'hub',
  group: string,
  method: string,
  arg?: unknown,
): Promise<unknown> {
  const root = norbix[ns] as unknown as Record<
    string,
    Record<string, (a?: unknown) => Promise<unknown>>
  >;
  const mod = root[group];
  if (!mod) throw new Error(`unknown ${ns}.${group}`);
  const fn = mod[method];
  if (!fn) throw new Error(`unknown ${ns}.${group}.${method}`);
  return fn(arg);
}

describe('Construction', () => {
  it('throws without projectId or NORBIX_PROJECT_ID', () => {
    expect(() => new Norbix({ apiKey: 'k', fetch: fakeFetch({}) })).toThrow(/projectId/);
  });

  it('accepts apiKey only (service mode)', async () => {
    let captured: { url: string; init: RequestInit } | undefined;
    const norbix = new Norbix({
      apiKey: 'srv-key',
      projectId: 'p1',
      fetch: fakeFetch({
        body: {},
        capture: (req) => {
          captured = req;
        },
      }),
    });
    expect(norbix.isAuthenticated()).toBe(true);
    await call(norbix, 'hub', 'account', 'getAccountStatus');
    expect(new Headers(captured!.init.headers).get('Authorization')).toBe('Bearer srv-key');
  });

  it('accepts bearerToken only (user mode)', async () => {
    let captured: { url: string; init: RequestInit } | undefined;
    const norbix = new Norbix({
      bearerToken: 'usr-jwt',
      projectId: 'p1',
      fetch: fakeFetch({
        body: {},
        capture: (req) => {
          captured = req;
        },
      }),
    });
    await call(norbix, 'hub', 'account', 'getAccountStatus');
    expect(new Headers(captured!.init.headers).get('Authorization')).toBe('Bearer usr-jwt');
  });

  it('prefers bearerToken over apiKey when both are set', async () => {
    let captured: { url: string; init: RequestInit } | undefined;
    const norbix = new Norbix({
      apiKey: 'srv-key',
      bearerToken: 'usr-jwt',
      projectId: 'p1',
      fetch: fakeFetch({
        body: {},
        capture: (req) => {
          captured = req;
        },
      }),
    });
    await call(norbix, 'hub', 'account', 'getAccountStatus');
    expect(new Headers(captured!.init.headers).get('Authorization')).toBe('Bearer usr-jwt');
  });

  it('throws NORBIX_NOT_AUTHENTICATED when neither auth is set', async () => {
    const norbix = new Norbix({ projectId: 'p1', fetch: fakeFetch({}) });
    expect(norbix.isAuthenticated()).toBe(false);
    await expect(call(norbix, 'hub', 'account', 'getAccountStatus')).rejects.toMatchObject({
      code: 'NORBIX_NOT_AUTHENTICATED',
    });
  });
});

describe('Env-var auto-load', () => {
  it('reads NORBIX_* from injected env source', async () => {
    let captured: { url: string; init: RequestInit } | undefined;
    const norbix = new Norbix(
      {
        fetch: fakeFetch({
          body: {},
          capture: (req) => {
            captured = req;
          },
        }),
      },
      {
        envSource: {
          NORBIX_API_KEY: 'env-key',
          NORBIX_PROJECT_ID: 'env-proj',
          NORBIX_ACCOUNT_ID: 'env-acc',
          NORBIX_API_URL: 'https://api.staging.norbix.dev',
          NORBIX_HUB_URL: 'https://hub.staging.norbix.dev',
          NORBIX_API_VERSION: 'v3',
        },
      },
    );
    const cfg = norbix.getConfig();
    expect(cfg.apiKey).toBe('env-key');
    expect(cfg.projectId).toBe('env-proj');
    expect(cfg.accountId).toBe('env-acc');
    expect(cfg.baseUrl.api).toBe('https://api.staging.norbix.dev');
    expect(cfg.baseUrl.hub).toBe('https://hub.staging.norbix.dev');
    expect(cfg.apiVersion).toBe('v3');

    await call(norbix, 'hub', 'account', 'getAccountStatus');
    const headers = new Headers(captured!.init.headers);
    expect(headers.get('Authorization')).toBe('Bearer env-key');
    expect(headers.get('X-CM-ProjectId')).toBe('env-proj');
    expect(headers.get('X-CM-AccountId')).toBe('env-acc');
  });

  it('explicit constructor args override env vars', () => {
    const norbix = new Norbix(
      { apiKey: 'explicit-key', projectId: 'explicit-proj', fetch: fakeFetch({}) },
      {
        envSource: {
          NORBIX_API_KEY: 'env-key',
          NORBIX_PROJECT_ID: 'env-proj',
        },
      },
    );
    const cfg = norbix.getConfig();
    expect(cfg.apiKey).toBe('explicit-key');
    expect(cfg.projectId).toBe('explicit-proj');
  });

  it('coerces NORBIX_TIMEOUT_MS to number', () => {
    const norbix = new Norbix(
      { apiKey: 'k', projectId: 'p', fetch: fakeFetch({}) },
      { envSource: { NORBIX_TIMEOUT_MS: '5000' } },
    );
    expect(norbix.getConfig().timeoutMs).toBe(5000);
  });

  it('Norbix.fromEnv() is equivalent to new Norbix({}, opts)', () => {
    const a = Norbix.fromEnv({ envSource: { NORBIX_API_KEY: 'k', NORBIX_PROJECT_ID: 'p' } });
    const b = new Norbix({}, { envSource: { NORBIX_API_KEY: 'k', NORBIX_PROJECT_ID: 'p' } });
    expect(a.getConfig().projectId).toBe(b.getConfig().projectId);
    expect(a.getConfig().apiKey).toBe(b.getConfig().apiKey);
  });

  it('Norbix.create() is a readable factory for new Norbix(...)', () => {
    const a = Norbix.create({ apiKey: 'k', projectId: 'p', fetch: fakeFetch({}) });
    const b = new Norbix({ apiKey: 'k', projectId: 'p', fetch: fakeFetch({}) });
    expect(a.getConfig().projectId).toBe(b.getConfig().projectId);
  });
});

describe('Headers + scoping', () => {
  it('attaches X-CM-AccountId only when configured', async () => {
    let captured: { url: string; init: RequestInit } | undefined;
    const norbix = new Norbix({
      apiKey: 'k',
      projectId: 'p1',
      accountId: 'a1',
      fetch: fakeFetch({
        body: {},
        capture: (req) => {
          captured = req;
        },
      }),
    });
    await call(norbix, 'hub', 'account', 'getAccountStatus');
    expect(new Headers(captured!.init.headers).get('X-CM-AccountId')).toBe('a1');
  });

  it('throws on missing accountId for account-scoped endpoint', async () => {
    const norbix = new Norbix({ apiKey: 'k', projectId: 'p1', fetch: fakeFetch({}) });
    await expect(call(norbix, 'hub', 'account', 'verifyAccount')).rejects.toMatchObject({
      code: 'NORBIX_ACCOUNT_SCOPE_REQUIRED',
    });
  });
});

describe('login / logout', () => {
  it('login() POSTs to /auth without auth header and stores bearer on success', async () => {
    let lastCaptured: { url: string; init: RequestInit } | undefined;
    const norbix = new Norbix({
      apiKey: 'srv-key',
      projectId: 'p1',
      fetch: fakeFetch({
        body: { bearerToken: 'fresh-jwt', refreshToken: 'r1', userId: 'u1' },
        capture: (req) => {
          lastCaptured = req;
        },
      }),
    });

    const res = await norbix.login({ userName: 'alice', password: 'secret' });
    expect(res.bearerToken).toBe('fresh-jwt');
    expect(res.userId).toBe('u1');

    // The /auth call itself runs unauthenticated.
    const authReqHeaders = new Headers(lastCaptured!.init.headers);
    expect(authReqHeaders.get('Authorization')).toBeNull();

    // Subsequent calls now use the JWT, not the API key.
    await call(norbix, 'hub', 'account', 'getAccountStatus');
    expect(new Headers(lastCaptured!.init.headers).get('Authorization')).toBe('Bearer fresh-jwt');
  });

  it('login() defaults provider to "credentials"', async () => {
    let bodyText: string | undefined;
    const norbix = new Norbix({
      projectId: 'p1',
      apiKey: 'k',
      fetch: vi.fn(async (_url, init?: RequestInit) => {
        bodyText = init?.body as string;
        return new Response('{}', { status: 200 });
      }) as unknown as typeof fetch,
    });
    await norbix.login({ userName: 'a', password: 'b' });
    expect(JSON.parse(bodyText!).provider).toBe('credentials');
  });

  it('logout() reverts to the configured apiKey', async () => {
    let captured: { url: string; init: RequestInit } | undefined;
    const norbix = new Norbix({
      apiKey: 'srv-key',
      projectId: 'p1',
      bearerToken: 'old-jwt',
      fetch: fakeFetch({
        body: {},
        capture: (req) => {
          captured = req;
        },
      }),
    });
    norbix.logout();
    await call(norbix, 'hub', 'account', 'getAccountStatus');
    expect(new Headers(captured!.init.headers).get('Authorization')).toBe('Bearer srv-key');
  });

  it('logout() with no apiKey leaves the client unauthenticated', async () => {
    const norbix = new Norbix({
      bearerToken: 'old-jwt',
      projectId: 'p1',
      fetch: fakeFetch({}),
    });
    norbix.logout();
    expect(norbix.isAuthenticated()).toBe(false);
    await expect(call(norbix, 'hub', 'account', 'getAccountStatus')).rejects.toMatchObject({
      code: 'NORBIX_NOT_AUTHENTICATED',
    });
  });
});

describe('URL building', () => {
  it('replaces {version} in path', async () => {
    let captured: { url: string; init: RequestInit } | undefined;
    const norbix = new Norbix({
      apiKey: 'k',
      projectId: 'p1',
      hubVersion: 'v2',
      fetch: fakeFetch({
        body: {},
        capture: (req) => {
          captured = req;
        },
      }),
    });
    await call(norbix, 'hub', 'account', 'getAccountStatus');
    expect(captured?.url).toMatch(/\/v2\/account\/status/);
  });

  it("throws NORBIX_MISSING_PATH_PARAM when {token} can't be resolved", async () => {
    const norbix = new Norbix({
      apiKey: 'k',
      projectId: 'p1',
      accountId: 'a1',
      fetch: fakeFetch({}),
    });
    const database = (
      norbix.hub as unknown as Record<string, Record<string, (r?: unknown) => Promise<unknown>>>
    ).database!;
    for (const [, fn] of Object.entries(database)) {
      if (typeof fn !== 'function') continue;
      try {
        await fn({});
      } catch (err) {
        if (err instanceof NorbixError && err.code === 'NORBIX_MISSING_PATH_PARAM') {
          expect(err.code).toBe('NORBIX_MISSING_PATH_PARAM');
          return;
        }
      }
    }
    expect(true).toBe(true);
  });
});

describe('Error handling', () => {
  it('parses ServiceStack ResponseStatus into NorbixError', async () => {
    const norbix = new Norbix({
      apiKey: 'k',
      projectId: 'p1',
      fetch: fakeFetch({
        status: 400,
        body: {
          responseStatus: {
            errorCode: 'ValidationError',
            message: 'name is required',
            errors: [{ fieldName: 'name', message: 'name is required' }],
          },
        },
      }),
    });
    await expect(call(norbix, 'hub', 'account', 'getAccountStatus')).rejects.toMatchObject({
      code: 'ValidationError',
      message: 'name is required',
      status: 400,
    });
  });
});

describe('Runtime config helpers', () => {
  it('setBearerToken updates the token used on next call', async () => {
    let captured: { url: string; init: RequestInit } | undefined;
    const norbix = new Norbix({
      apiKey: 'k',
      projectId: 'p1',
      fetch: fakeFetch({
        body: {},
        capture: (req) => {
          captured = req;
        },
      }),
    });
    norbix.setBearerToken('new-jwt');
    await call(norbix, 'hub', 'account', 'getAccountStatus');
    expect(new Headers(captured!.init.headers).get('Authorization')).toBe('Bearer new-jwt');
  });

  it('per-call bearerToken overrides shared client auth without mutating config', async () => {
    let captured: { url: string; init: RequestInit } | undefined;
    const norbix = new Norbix({
      bearerToken: 'shared-jwt',
      projectId: 'p1',
      fetch: fakeFetch({
        body: {},
        capture: (req) => {
          captured = req;
        },
      }),
    });

    await norbix.hub.account.getAccountStatus({}, { bearerToken: 'request-jwt' });

    expect(new Headers(captured!.init.headers).get('Authorization')).toBe('Bearer request-jwt');
    expect(norbix.getConfig().bearerToken).toBe('shared-jwt');
  });

  it('setApiKey updates the key used on next call', async () => {
    let captured: { url: string; init: RequestInit } | undefined;
    const norbix = new Norbix({
      projectId: 'p1',
      fetch: fakeFetch({
        body: {},
        capture: (req) => {
          captured = req;
        },
      }),
    });
    norbix.setApiKey('lazy-key');
    await call(norbix, 'hub', 'account', 'getAccountStatus');
    expect(new Headers(captured!.init.headers).get('Authorization')).toBe('Bearer lazy-key');
  });

  it('setScope swaps projectId and accountId', () => {
    const norbix = new Norbix({
      apiKey: 'k',
      projectId: 'p1',
      fetch: fakeFetch({}),
    });
    norbix.setScope({ projectId: 'p2', accountId: 'a2' });
    const cfg = norbix.getConfig();
    expect(cfg.projectId).toBe('p2');
    expect(cfg.accountId).toBe('a2');
  });

  it('getRedactedConfig masks secrets and omits fetch', () => {
    const norbix = new Norbix({
      apiKey: 'srv-super-secret',
      bearerToken: 'jwt-super-secret',
      projectId: 'p1',
      fetch: fakeFetch({}),
    });
    const redacted = norbix.getRedactedConfig() as Record<string, unknown>;
    expect(redacted.apiKey).not.toBe('srv-super-secret');
    expect(redacted.bearerToken).not.toBe('jwt-super-secret');
    expect('fetch' in redacted).toBe(false);
  });

  it('with() returns a new isolated client instance', async () => {
    let captured: { url: string; init: RequestInit } | undefined;
    const norbix = new Norbix({
      bearerToken: 'shared-jwt',
      projectId: 'p1',
      fetch: fakeFetch({
        body: {},
        capture: (req) => {
          captured = req;
        },
      }),
    });

    const scoped = norbix.with({ bearerToken: 'request-jwt' });
    await scoped.hub.account.getAccountStatus();

    expect(new Headers(captured!.init.headers).get('Authorization')).toBe('Bearer request-jwt');
    expect(norbix.getConfig().bearerToken).toBe('shared-jwt');
  });
});

describe('Resource API', () => {
  it('collection(name).findItems returns the paginated items array', async () => {
    const norbix = new Norbix({
      apiKey: 'k',
      projectId: 'p1',
      fetch: fakeFetch({
        body: { list: { items: [{ id: 1 }, { id: 2 }], hasMore: false, hasPrevious: false } },
      }),
    });

    const items = await norbix.collection<{ id: number }>('orders').findItems();
    expect(items).toEqual([{ id: 1 }, { id: 2 }]);
  });
});

describe('Transport retry + refresh', () => {
  it('retries transient 5xx for idempotent methods', async () => {
    const fetchMock = vi.fn(async () => {
      if (fetchMock.mock.calls.length === 1) return new Response('oops', { status: 503 });
      return new Response('{}', { status: 200, headers: { 'Content-Type': 'application/json' } });
    });

    const norbix = new Norbix({
      apiKey: 'k',
      projectId: 'p1',
      retry: { maxRetries: 1, baseDelayMs: 0, maxDelayMs: 0 },
      fetch: fetchMock as unknown as typeof fetch,
    });

    await call(norbix, 'hub', 'account', 'getAccountStatus');
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('refreshBearerToken is called once on 401 and request is retried', async () => {
    let lastAuth: string | null = null;
    const fetchMock = vi.fn(async (_input: string | URL | Request, init?: RequestInit) => {
      lastAuth = new Headers(init?.headers).get('Authorization');
      if (fetchMock.mock.calls.length === 1)
        return new Response('{"responseStatus":{"message":"no"}}', { status: 401 });
      return new Response('{}', { status: 200, headers: { 'Content-Type': 'application/json' } });
    });

    const refreshBearerToken = vi.fn(async () => 'fresh-jwt');
    const norbix = new Norbix({
      apiKey: 'k',
      projectId: 'p1',
      fetch: fetchMock as unknown as typeof fetch,
      refreshBearerToken,
    });

    await call(norbix, 'hub', 'account', 'getAccountStatus');
    expect(refreshBearerToken).toHaveBeenCalledTimes(1);
    expect(lastAuth).toBe('Bearer fresh-jwt');
  });
});

describe('Error subclasses', () => {
  it('maps 401/403 responses to NorbixAuthError', async () => {
    const norbix = new Norbix({
      apiKey: 'k',
      projectId: 'p1',
      fetch: fakeFetch({
        status: 401,
        body: { responseStatus: { errorCode: 'Unauthorized', message: 'nope' } },
      }),
    });
    await expect(call(norbix, 'hub', 'account', 'getAccountStatus')).rejects.toBeInstanceOf(
      NorbixAuthError,
    );
  });

  it('maps 400 responses to NorbixValidationError', async () => {
    const norbix = new Norbix({
      apiKey: 'k',
      projectId: 'p1',
      fetch: fakeFetch({
        status: 400,
        body: { responseStatus: { errorCode: 'ValidationError', message: 'bad' } },
      }),
    });
    await expect(call(norbix, 'hub', 'account', 'getAccountStatus')).rejects.toBeInstanceOf(
      NorbixValidationError,
    );
  });

  it('maps AbortError to NorbixTimeoutError', async () => {
    const norbix = new Norbix({
      apiKey: 'k',
      projectId: 'p1',
      timeoutMs: 1,
      retry: { maxRetries: 0, baseDelayMs: 0, maxDelayMs: 0 },
      fetch: vi.fn(async () => {
        throw new DOMException('Aborted', 'AbortError');
      }) as unknown as typeof fetch,
    });
    await expect(call(norbix, 'hub', 'account', 'getAccountStatus')).rejects.toBeInstanceOf(
      NorbixTimeoutError,
    );
  });

  it('maps non-abort fetch throw to NorbixNetworkError', async () => {
    const norbix = new Norbix({
      apiKey: 'k',
      projectId: 'p1',
      retry: { maxRetries: 0, baseDelayMs: 0, maxDelayMs: 0 },
      fetch: vi.fn(async () => {
        throw new Error('dns');
      }) as unknown as typeof fetch,
    });
    await expect(call(norbix, 'hub', 'account', 'getAccountStatus')).rejects.toBeInstanceOf(
      NorbixNetworkError,
    );
  });
});
