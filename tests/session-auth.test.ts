/**
 * Cookie sessions: `auth: { type: 'none' | 'session' | 'browserSession' }`,
 * `api.auth.signIn`, `api.auth.signOut`, and the request timeout that now also
 * covers reading the body (all auth modes).
 *
 * Hand-written: the generated module tests are refreshed by
 * `npm run generate-endpoints` and would lose these.
 *
 * The stall tests use a real local HTTP server. A mock `Response` would not
 * stop on abort, so such a test would pass without proving anything.
 */
import { createServer } from 'node:http';
import type { IncomingMessage, Server, ServerResponse } from 'node:http';
import type { AddressInfo } from 'node:net';

import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

import {
  Norbix,
  NorbixAuthError,
  NorbixNetworkError,
  NorbixSessionExpiredError,
  NorbixTimeoutError,
} from '../src/index.js';
import type { NorbixConfig, NorbixError } from '../src/index.js';

import { createMockFetch } from './_helpers.js';
import type { MockFetchOptions } from './_helpers.js';

const SESSION = 'Jorj9XCD0MRB2tNlhvI7';
const baseUrl = { api: 'https://api.test', hub: 'https://hub.test' };

function client(config: NorbixConfig, mockOpts: MockFetchOptions = { body: {} }) {
  const mock = createMockFetch(mockOpts);
  const norbix = new Norbix(
    { projectId: 'pr_1', baseUrl, fetch: mock.fetch, ...config },
    { envSource: {} },
  );
  return { norbix, mock };
}

function initOf(mock: ReturnType<typeof createMockFetch>): RequestInit {
  return vi.mocked(mock.fetch).mock.calls.at(-1)![1]!;
}

const rejected = (p: Promise<unknown>) =>
  p.then(
    () => {
      throw new Error('expected the call to fail');
    },
    (e: unknown) => e as NorbixError,
  );

const refusal = (errorCode: string, message = 'refused') => ({
  responseStatus: { isSuccess: false, errors: [{ errorCode, message }] },
});

describe('auth modes: configuration', () => {
  it.each([
    [{ type: 'none' } as const],
    [{ type: 'session', sessionId: SESSION } as const],
    [{ type: 'browserSession' } as const],
  ])('%j cannot be combined with apiKey or bearerToken', (auth) => {
    expect(() => client({ auth, apiKey: 'ak-1' })).toThrow(/cannot be combined/);
    expect(() => client({ auth, bearerToken: 'jwt' })).toThrow(/cannot be combined/);
  });

  it('ignores NORBIX_API_KEY and NORBIX_BEARER_TOKEN from the environment', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix(
      { projectId: 'pr_1', baseUrl, fetch: mock.fetch, auth: { type: 'none' } },
      { envSource: { NORBIX_API_KEY: 'ak-env', NORBIX_BEARER_TOKEN: 'jwt-env' } },
    );
    await norbix.api.membership.getUser({ id: 'usr_1' });
    expect(mock.lastCall!.headers.has('authorization')).toBe(false);
    expect(norbix.getConfig().apiKey).toBeUndefined();
    expect(norbix.getConfig().bearerToken).toBeUndefined();
  });

  it.each(['', 'a;b', 'a\r\nX-Evil: 1', 'a b', 'a"b', 'é'])(
    'refuses session id %j without echoing it',
    (sessionId) => {
      let error: NorbixError | undefined;
      try {
        client({ auth: { type: 'session', sessionId } });
      } catch (e) {
        error = e as NorbixError;
      }
      expect(error?.code).toBe('NORBIX_AUTH_CONFIG');
      if (sessionId) expect(error?.message).not.toContain(sessionId);
    },
  );

  it('refuses an unknown auth type', () => {
    expect(() => client({ auth: { type: 'jwt' } as never })).toThrow(/unknown auth type/);
  });

  it('refuses every way of putting a token on a session client', () => {
    const { norbix } = client({ auth: { type: 'session', sessionId: SESSION } });
    expect(() => norbix.setBearerToken('jwt')).toThrow(/setBearerToken/);
    expect(() => norbix.setApiKey('ak-1')).toThrow(/setApiKey/);
    return expect(norbix.login({ userName: 'a', password: 'b' })).rejects.toThrow(/signIn/);
  });

  it('isAuthenticated follows the mode', () => {
    expect(client({ auth: { type: 'none' } }).norbix.isAuthenticated()).toBe(false);
    expect(client({ auth: { type: 'browserSession' } }).norbix.isAuthenticated()).toBe(true);
    expect(client({ auth: { type: 'session', sessionId: SESSION } }).norbix.isAuthenticated()).toBe(
      true,
    );
  });

  it('getRedactedConfig hides the session id', () => {
    const { norbix } = client({ auth: { type: 'session', sessionId: SESSION } });
    expect(JSON.stringify(norbix.getRedactedConfig())).not.toContain(SESSION);
  });

  it('with() keeps the session and drops inherited tokens', async () => {
    const { norbix, mock } = client({ auth: { type: 'session', sessionId: SESSION } });
    await norbix.with({ env: 'TEST' }).api.membership.getUser({ id: 'usr_1' });
    expect(mock.lastCall!.headers.get('cookie')).toBe(`ss-id=${SESSION}`);
    expect(mock.lastCall!.headers.get('norbix-env')).toBe('TEST');

    const bearer = client({ bearerToken: 'jwt' });
    const scoped = bearer.norbix.with({ auth: { type: 'session', sessionId: SESSION } });
    await scoped.api.membership.getUser({ id: 'usr_1' });
    expect(bearer.mock.lastCall!.headers.has('authorization')).toBe(false);
  });

  it('gives the realtime clients no token', () => {
    const { norbix } = client({ auth: { type: 'session', sessionId: SESSION } });
    expect(norbix.sse()).toBeDefined();
    expect(norbix.getConfig().bearerToken ?? norbix.getConfig().apiKey).toBeUndefined();
  });
});

describe('auth modes: what leaves the client', () => {
  it('session: only the ss-id cookie, also over a default header', async () => {
    const { norbix, mock } = client({
      auth: { type: 'session', sessionId: SESSION },
      defaultHeaders: { Authorization: 'Bearer default', Cookie: 'ss-id=other' },
    });
    await norbix.api.membership.getUser({ id: 'usr_1' });
    expect(mock.lastCall!.headers.has('authorization')).toBe(false);
    expect(mock.lastCall!.headers.get('cookie')).toBe(`ss-id=${SESSION}`);
    expect(initOf(mock).redirect).toBe('manual');
    expect(initOf(mock).credentials).toBe('omit');
  });

  it('none: no cookie and no token, and no refusal before the request', async () => {
    const { norbix, mock } = client({ auth: { type: 'none' } });
    await norbix.api.membership.getUser({ id: 'usr_1' });
    expect(mock.lastCall!.headers.has('authorization')).toBe(false);
    expect(mock.lastCall!.headers.has('cookie')).toBe(false);
    expect(initOf(mock).credentials).toBe('omit');
  });

  it('browserSession: the browser sends the cookie, the SDK does not', async () => {
    const { norbix, mock } = client({ auth: { type: 'browserSession' } });
    await norbix.api.membership.getUser({ id: 'usr_1' });
    expect(initOf(mock).credentials).toBe('include');
    expect(initOf(mock).redirect).toBe('manual');
    expect(mock.lastCall!.headers.has('cookie')).toBe(false);
    expect(mock.lastCall!.headers.has('authorization')).toBe(false);
  });

  it('a per-call bearer token is refused, not sent', async () => {
    const { norbix, mock } = client({ auth: { type: 'session', sessionId: SESSION } });
    const error = await rejected(
      norbix.api.membership.getUser({ id: 'usr_1' }, { bearerToken: 'jwt' }),
    );
    expect(error.code).toBe('NORBIX_AUTH_CONFIG');
    expect(mock.calls).toHaveLength(0);
  });

  it('the token clients behave as before: no redirect or credentials option', async () => {
    const { norbix, mock } = client({ bearerToken: 'jwt' });
    await norbix.api.membership.getUser({ id: 'usr_1' });
    expect(mock.lastCall!.headers.get('authorization')).toBe('Bearer jwt');
    expect(initOf(mock).redirect).toBeUndefined();
    expect(initOf(mock).credentials).toBeUndefined();
  });
});

describe('auth modes: failures', () => {
  const session = { auth: { type: 'session', sessionId: SESSION } } as const;

  it('401 is a session-expired error and refreshBearerToken is not called', async () => {
    const refreshBearerToken = vi.fn(async () => 'new');
    const { norbix, mock } = client(
      { ...session, refreshBearerToken },
      { status: 401, body: refusal('CM-ERRORS-AUTH-001') },
    );
    const error = await rejected(norbix.api.membership.getUser({ id: 'usr_1' }));
    expect(error).toBeInstanceOf(NorbixSessionExpiredError);
    expect(error).toBeInstanceOf(NorbixAuthError);
    expect((error as NorbixSessionExpiredError).reason).toBe('expired');
    expect(refreshBearerToken).not.toHaveBeenCalled();
    expect(mock.calls).toHaveLength(1);
  });

  it('a changed password has its own reason', async () => {
    const { norbix } = client(session, {
      status: 401,
      body: refusal('CM-ERRORS-MEMBERSHIP-USERS-050'),
    });
    const error = await rejected(norbix.api.membership.getUser({ id: 'usr_1' }));
    expect((error as NorbixSessionExpiredError).reason).toBe('credentialsChanged');
  });

  it('403 stays a plain auth error', async () => {
    const { norbix } = client(session, { status: 403, body: refusal('CM-X') });
    const error = await rejected(norbix.api.membership.getUser({ id: 'usr_1' }));
    expect(error).toBeInstanceOf(NorbixAuthError);
    expect(error).not.toBeInstanceOf(NorbixSessionExpiredError);
  });

  it('401 on a client with no session is not "session expired"', async () => {
    const { norbix } = client({ auth: { type: 'none' } }, { status: 401, body: refusal('CM-X') });
    const error = await rejected(norbix.api.membership.getUser({ id: 'usr_1' }));
    expect(error).toBeInstanceOf(NorbixAuthError);
    expect(error).not.toBeInstanceOf(NorbixSessionExpiredError);
  });

  it('a 3xx is an error and is not followed', async () => {
    const { norbix, mock } = client(session, { status: 302 });
    const error = await rejected(norbix.api.membership.getUser({ id: 'usr_1' }));
    expect(error.code).toBe('NORBIX_UNEXPECTED_REDIRECT');
    expect(error.status).toBe(302);
    expect(mock.calls).toHaveLength(1);
  });

  it("a browser's opaque redirect is the same error", async () => {
    const fetchImpl = vi.fn(async () => Response.error());
    Object.defineProperty(Response.prototype, 'type', {
      configurable: true,
      get: () => 'opaqueredirect',
    });
    try {
      const norbix = new Norbix(
        { projectId: 'pr_1', baseUrl, fetch: fetchImpl as never, auth: { type: 'browserSession' } },
        { envSource: {} },
      );
      const error = await rejected(norbix.api.membership.getUser({ id: 'usr_1' }));
      expect(error.code).toBe('NORBIX_UNEXPECTED_REDIRECT');
    } finally {
      delete (Response.prototype as { type?: unknown }).type;
    }
  });

  it('retry defaults to 0: a 503 on a GET is sent once', async () => {
    const { norbix, mock } = client(session, { status: 503, body: refusal('CM-DOWN', 'down') });
    const error = await rejected(norbix.api.membership.getUser({ id: 'usr_1' }));
    expect(error.status).toBe(503);
    expect(error).not.toBeInstanceOf(NorbixAuthError);
    expect(mock.calls).toHaveLength(1);
  });

  it('an explicit retry still applies', async () => {
    const { norbix, mock } = client(
      { ...session, retry: { maxRetries: 1, baseDelayMs: 1, maxDelayMs: 1 } },
      { status: 503 },
    );
    await rejected(norbix.api.membership.getUser({ id: 'usr_1' }));
    expect(mock.calls).toHaveLength(2);
  });

  it('an outage is a network error', async () => {
    const fetchImpl = vi.fn(async () => {
      throw new TypeError('fetch failed');
    });
    const norbix = new Norbix(
      { projectId: 'pr_1', baseUrl, fetch: fetchImpl as never, ...session },
      { envSource: {} },
    );
    const error = await rejected(norbix.api.membership.getUser({ id: 'usr_1' }));
    expect(error).toBeInstanceOf(NorbixNetworkError);
    expect(fetchImpl).toHaveBeenCalledTimes(1);
  });
});

describe('api.auth.signIn', () => {
  const answer = {
    sessionId: SESSION,
    userId: 'usr_1',
    bearerToken: 'header.payload.signature',
    meta: { credentialVersion: 'v7' },
  };

  it('answers the session and leaves the JWT out', async () => {
    const { norbix, mock } = client({ auth: { type: 'none' } }, { body: answer });
    const result = await norbix.api.auth.signIn({ userName: 'anna', password: 'pw' });

    expect(result).toEqual({ sessionId: SESSION, userId: 'usr_1', credentialVersion: 'v7' });
    expect(norbix.getConfig().bearerToken).toBeUndefined();
    expect(mock.lastCall!.url).toBe('https://api.test/v3/auth');
    expect(JSON.parse(mock.lastCall!.body!)).toEqual({
      provider: 'credentials',
      userName: 'anna',
      password: 'pw',
      rememberMe: false,
    });
  });

  it('sends no cookie from a session client: a cookie would delete that session', async () => {
    const { norbix, mock } = client(
      { auth: { type: 'session', sessionId: 'previous' } },
      { body: answer },
    );
    await norbix.api.auth.signIn({ userName: 'anna', password: 'pw' });
    expect(mock.lastCall!.headers.has('cookie')).toBe(false);
    expect(initOf(mock).credentials).toBe('omit');
  });

  it('sends nothing of a token client and does not adopt the JWT', async () => {
    const { norbix, mock } = client(
      { bearerToken: 'jwt', defaultHeaders: { Cookie: 'ss-id=ambient' } },
      { body: answer },
    );
    await norbix.api.auth.signIn({ userName: 'anna', password: 'pw' });
    expect(mock.lastCall!.headers.has('authorization')).toBe(false);
    expect(mock.lastCall!.headers.has('cookie')).toBe(false);
    expect(norbix.getConfig().bearerToken).toBe('jwt');
  });

  it('browserSession includes credentials, or the browser drops Set-Cookie', async () => {
    const { norbix, mock } = client({ auth: { type: 'browserSession' } }, { body: answer });
    await norbix.api.auth.signIn({ userName: 'anna', password: 'pw' });
    expect(initOf(mock).credentials).toBe('include');
  });

  it('wrong credentials are an auth error, not an expired session', async () => {
    const { norbix } = client(
      { auth: { type: 'session', sessionId: SESSION } },
      { status: 401, body: refusal('CM-BAD-LOGIN') },
    );
    const error = await rejected(norbix.api.auth.signIn({ userName: 'a', password: 'b' }));
    expect(error).toBeInstanceOf(NorbixAuthError);
    expect(error).not.toBeInstanceOf(NorbixSessionExpiredError);
  });

  it('an answer without a session id is an error', async () => {
    const { norbix } = client({ auth: { type: 'none' } }, { body: { userId: 'usr_1' } });
    const error = await rejected(norbix.api.auth.signIn({ userName: 'a', password: 'b' }));
    expect(error.code).toBe('NORBIX_NO_SESSION');
  });
});

describe('api.auth.signOut', () => {
  const session = { auth: { type: 'session', sessionId: SESSION } } as const;

  it('posts to /v3/auth/logout with the session cookie', async () => {
    const { norbix, mock } = client(session);
    await expect(norbix.api.auth.signOut()).resolves.toBeUndefined();
    expect(mock.lastCall!.method).toBe('POST');
    expect(mock.lastCall!.url).toBe('https://api.test/v3/auth/logout');
    expect(mock.lastCall!.headers.get('cookie')).toBe(`ss-id=${SESSION}`);
    expect(mock.lastCall!.headers.has('authorization')).toBe(false);
  });

  it('a session that has already ended counts as signed out', async () => {
    const { norbix } = client(session, { status: 401, body: refusal('CM-X') });
    await expect(norbix.api.auth.signOut()).resolves.toBeUndefined();
  });

  it('a server failure is not swallowed: the session may still be alive', async () => {
    const { norbix } = client(session, { status: 503 });
    expect((await rejected(norbix.api.auth.signOut())).status).toBe(503);
  });

  it.each([[{ bearerToken: 'jwt' }], [{ auth: { type: 'none' } as const }]])(
    'refuses a client with no session (%j) instead of a false success',
    async (config) => {
      const { norbix, mock } = client(config);
      expect((await rejected(norbix.api.auth.signOut())).code).toBe('NORBIX_AUTH_CONFIG');
      expect(mock.calls).toHaveLength(0);
    },
  );

  it('logout() stays local: it sends nothing', () => {
    const { norbix, mock } = client({ bearerToken: 'jwt' });
    norbix.logout();
    expect(mock.calls).toHaveLength(0);
    expect(norbix.getConfig().bearerToken).toBeUndefined();
  });
});

describe('a real server', () => {
  let server: Server;
  let url: string;
  const open = new Set<ServerResponse>();

  /** Sends the status and part of the body, then stops. */
  function stall(res: ServerResponse, status: number) {
    open.add(res);
    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.write('{"partial":');
  }

  function route(req: IncomingMessage, res: ServerResponse) {
    if (req.url?.includes('stall-200')) return stall(res, 200);
    if (req.url?.includes('stall-503')) return stall(res, 503);
    if (req.url?.includes('stall-401')) return stall(res, 401);
    // Two users at once: the answer is built from the cookie, after a delay
    // that lets the other user's request overtake this one.
    const id = /ss-id=([^;]+)/.exec(req.headers.cookie ?? '')?.[1];
    setTimeout(() => {
      res.writeHead(id ? 200 : 401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ item: { id }, authorization: req.headers.authorization }));
    }, Math.random() * 15);
  }

  beforeAll(async () => {
    server = createServer(route);
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
    url = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  });

  afterAll(async () => {
    for (const res of open) res.destroy();
    server.closeAllConnections();
    await new Promise((resolve) => server.close(resolve));
  });

  const modes: Array<[string, NorbixConfig]> = [
    ['bearer', { bearerToken: 'jwt' }],
    ['session', { auth: { type: 'session', sessionId: SESSION } }],
  ];

  const make = (config: NorbixConfig, timeoutMs = 100) =>
    new Norbix(
      {
        projectId: 'pr_1',
        baseUrl: { api: url, hub: url },
        timeoutMs,
        retry: { maxRetries: 0 },
        ...config,
      },
      { envSource: {} },
    );

  describe.each(modes)('stalled body, %s client', (_name, config) => {
    it('a stalled success body times out', async () => {
      const error = await rejected(make(config).api.membership.getUser({ id: 'stall-200' }));
      expect(error).toBeInstanceOf(NorbixTimeoutError);
    });

    it('a stalled binary body times out', async () => {
      // The route answers a file. `stall-200` in the project id picks the stalled answer.
      const brand = { projectId: 'stall-200', kind: 'logo' };
      const error = await rejected(make(config).api.public.getPublicProjectBrandAsset(brand));
      expect(error).toBeInstanceOf(NorbixTimeoutError);
    });

    it('a stalled error body ends at the timeout and keeps the status', async () => {
      const error = await rejected(make(config).api.membership.getUser({ id: 'stall-503' }));
      expect(error.status).toBe(503);
    });
  });

  it('a stalled 401 body still ends the session', async () => {
    const client401 = make({ auth: { type: 'session', sessionId: SESSION } });
    const error = await rejected(client401.api.membership.getUser({ id: 'stall-401' }));
    expect(error).toBeInstanceOf(NorbixSessionExpiredError);
  });

  it('a slow body inside the timeout is read in full', async () => {
    const user = make({ auth: { type: 'session', sessionId: SESSION } }, 2_000);
    const answer = await user.api.membership.getUser({ id: 'usr_1' });
    expect(answer).toMatchObject({ item: { id: SESSION } });
  });

  it('two users in one process never see each other', async () => {
    const clients = ['annaSession', 'bobSession'].map((sessionId) =>
      make({ auth: { type: 'session', sessionId } }, 2_000),
    );
    const rounds = await Promise.all(
      Array.from({ length: 40 }, (_, i) =>
        clients[i % 2]!.api.membership.getUser({ id: 'usr_1' }).then((a) => [i % 2, a] as const),
      ),
    );
    for (const [who, answer] of rounds) {
      expect(answer).toMatchObject({ item: { id: ['annaSession', 'bobSession'][who] } });
      expect((answer as { authorization?: string }).authorization).toBeUndefined();
    }
  });
});
