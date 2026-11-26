/**
 * Sessions (D18): the `norbix-session-token` header swap, `onSessionToken`,
 * and `rememberMe` on every password sign-in. Hand-written: the generated
 * module tests are refreshed by `npm run generate-endpoints` and would lose
 * these. Every call goes to a fake fetch.
 */
import { describe, expect, it, vi } from 'vitest';

import { Norbix } from '../src/index.js';
import type { NorbixConfig } from '../src/index.js';

const baseUrl = { api: 'https://api.test', hub: 'https://hub.test' };
const OLD = 'old.jwt.token';
const NEW = 'new.jwt.token';

/** A fake fetch that answers `{}` with the given headers and records what was sent. */
function fakeFetch(answerHeaders: Record<string, string> = {}, status = 200) {
  const sent: { url: string; authorization: string | null; body?: string }[] = [];
  const fetch = vi.fn(async (input: string | URL | Request, init?: RequestInit) => {
    const headers = new Headers(init?.headers ?? {});
    sent.push({
      url: String(input),
      authorization: headers.get('Authorization'),
      body: typeof init?.body === 'string' ? init.body : undefined,
    });
    return new Response('{}', {
      status,
      headers: { 'Content-Type': 'application/json', ...answerHeaders },
    });
  }) as unknown as typeof globalThis.fetch;
  return { fetch, sent };
}

function client(config: NorbixConfig, answerHeaders: Record<string, string> = {}) {
  const fake = fakeFetch(answerHeaders);
  const norbix = new Norbix(
    { projectId: 'pr_1', baseUrl, fetch: fake.fetch, ...config },
    { envSource: {} },
  );
  return { norbix, ...fake };
}

const read = (norbix: Norbix) =>
  norbix.api.database.find({ collectionName: 'orders' } as never).catch(() => undefined);

describe('norbix-session-token', () => {
  it('header present: the stored token is swapped and onSessionToken is called', async () => {
    const onSessionToken = vi.fn();
    const { norbix, sent } = client(
      { bearerToken: OLD, onSessionToken },
      { 'norbix-session-token': NEW },
    );
    await read(norbix);
    await read(norbix);
    expect(onSessionToken).toHaveBeenCalledTimes(1);
    expect(onSessionToken).toHaveBeenCalledWith(NEW);
    expect(sent.map((s) => s.authorization)).toEqual([`Bearer ${OLD}`, `Bearer ${NEW}`]);
  });

  it('header absent: nothing changes', async () => {
    const onSessionToken = vi.fn();
    const { norbix, sent } = client({ bearerToken: OLD, onSessionToken });
    await read(norbix);
    await read(norbix);
    expect(onSessionToken).not.toHaveBeenCalled();
    expect(sent.map((s) => s.authorization)).toEqual([`Bearer ${OLD}`, `Bearer ${OLD}`]);
  });

  it('an empty header is ignored', async () => {
    const onSessionToken = vi.fn();
    const { norbix, sent } = client(
      { bearerToken: OLD, onSessionToken },
      { 'norbix-session-token': '' },
    );
    await read(norbix);
    await read(norbix);
    expect(onSessionToken).not.toHaveBeenCalled();
    expect(sent[1]?.authorization).toBe(`Bearer ${OLD}`);
  });

  it('an API-key client keeps its key', async () => {
    const onSessionToken = vi.fn();
    const { norbix, sent } = client(
      { apiKey: 'nbx_key', onSessionToken },
      { 'norbix-session-token': NEW },
    );
    await read(norbix);
    await read(norbix);
    expect(onSessionToken).not.toHaveBeenCalled();
    expect(sent.map((s) => s.authorization)).toEqual(['Bearer nbx_key', 'Bearer nbx_key']);
  });

  it('a per-call bearer token is not stored', async () => {
    const onSessionToken = vi.fn();
    const { norbix, sent } = client(
      { bearerToken: OLD, onSessionToken },
      { 'norbix-session-token': NEW },
    );
    await norbix.api.database
      .find({ collectionName: 'orders' } as never, { bearerToken: 'other.user.jwt' })
      .catch(() => undefined);
    expect(onSessionToken).not.toHaveBeenCalled();
    await read(norbix);
    expect(sent.map((s) => s.authorization)).toEqual(['Bearer other.user.jwt', `Bearer ${OLD}`]);
  });

  it('a cookie-session client never takes a token', async () => {
    const onSessionToken = vi.fn();
    const { norbix, sent } = client(
      { auth: { type: 'session', sessionId: 'Jorj9XCD0MRB2tNlhvI7' }, onSessionToken },
      { 'norbix-session-token': NEW },
    );
    await read(norbix);
    await read(norbix);
    expect(onSessionToken).not.toHaveBeenCalled();
    expect(sent.map((s) => s.authorization)).toEqual([null, null]);
  });

  it('a token set during the request is not overwritten', async () => {
    const onSessionToken = vi.fn();
    let norbix!: Norbix;
    const fetch = vi.fn(async () => {
      norbix.setBearerToken('signed.in.again');
      return new Response('{}', {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'norbix-session-token': NEW },
      });
    }) as unknown as typeof globalThis.fetch;
    norbix = new Norbix(
      { projectId: 'pr_1', baseUrl, fetch, bearerToken: OLD, onSessionToken },
      { envSource: {} },
    );
    await read(norbix);
    expect(onSessionToken).not.toHaveBeenCalled();
  });

  it('with() does not copy the callback, and takes its own', async () => {
    const parentCallback = vi.fn();
    const childCallback = vi.fn();
    const { norbix } = client(
      { bearerToken: OLD, onSessionToken: parentCallback },
      { 'norbix-session-token': NEW },
    );
    await read(norbix.with({ bearerToken: 'other.user.jwt' }));
    expect(parentCallback).not.toHaveBeenCalled();
    await read(norbix.with({ bearerToken: 'other.user.jwt', onSessionToken: childCallback }));
    expect(childCallback).toHaveBeenCalledWith(NEW);
    expect(parentCallback).not.toHaveBeenCalled();
  });

  it('a token from login() is renewed too', async () => {
    const onSessionToken = vi.fn();
    let call = 0;
    const fetch = vi.fn(async () => {
      call++;
      const body = call === 1 ? { bearerToken: OLD } : {};
      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      if (call === 2) headers['norbix-session-token'] = NEW;
      return new Response(JSON.stringify(body), { status: 200, headers });
    }) as unknown as typeof globalThis.fetch;
    const norbix = new Norbix(
      { projectId: 'pr_1', baseUrl, fetch, onSessionToken },
      { envSource: {} },
    );
    await norbix.login({ userName: 'alice', password: 'pw', rememberMe: true });
    await read(norbix);
    expect(onSessionToken).toHaveBeenCalledWith(NEW);
  });
});

describe('rememberMe', () => {
  const body = (sent: { body?: string }[]) => JSON.parse(sent[0]!.body ?? '{}') as unknown;

  it.each([
    [undefined, false],
    [false, false],
    [true, true],
  ])('signIn with rememberMe %s sends %s', async (rememberMe, expected) => {
    const fake = fakeFetch();
    const norbix = new Norbix(
      { projectId: 'pr_1', baseUrl, fetch: fake.fetch, auth: { type: 'none' } },
      { envSource: {} },
    );
    await norbix.api.auth
      .signIn({ userName: 'alice', password: 'pw', rememberMe })
      .catch(() => undefined);
    expect(body(fake.sent)).toMatchObject({
      provider: 'credentials',
      rememberMe: expected,
      meta: { ignore: 'jwt' },
    });
  });

  it.each([false, true])('browserSignIn sends rememberMe %s', async (rememberMe) => {
    const fake = fakeFetch();
    const norbix = new Norbix(
      { projectId: 'pr_1', baseUrl, fetch: fake.fetch, auth: { type: 'browserSession' } },
      { envSource: {} },
    );
    await norbix.api.auth.browserSignIn({ userName: 'alice', password: 'pw', rememberMe });
    expect(body(fake.sent)).toMatchObject({ rememberMe, meta: { ignore: 'jwt' } });
  });

  it('login() sends rememberMe', async () => {
    const fake = fakeFetch();
    const norbix = new Norbix({ projectId: 'pr_1', baseUrl, fetch: fake.fetch }, { envSource: {} });
    await norbix.login({ userName: 'alice', password: 'pw', rememberMe: true });
    expect(body(fake.sent)).toMatchObject({ provider: 'credentials', rememberMe: true });
  });
});
