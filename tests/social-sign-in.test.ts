/**
 * Project social sign-in and link identity (gateway 3fb6f5569):
 * `api.auth.socialSignInUrl` / `exchangeSocialCode` / `readSocialReturn` /
 * `completeSocialSignIn` / `redirectToSocialSignIn` and
 * `api.membership.startLinkIdentity` / `finishLinkIdentity`.
 *
 * Hand-written: the generated module tests are refreshed by
 * `npm run generate-endpoints` and would lose these.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Norbix } from '../src/index.js';
import type { NorbixConfig, NorbixError } from '../src/index.js';
import type { CodeMashApi2 } from '../src/types/api2.dtos.js';

import { createMockFetch } from './_helpers.js';
import type { MockFetchOptions } from './_helpers.js';

const baseUrl = { api: 'https://api.test', hub: 'https://hub.test' };

function client(config: Partial<NorbixConfig> = {}, mockOpts: MockFetchOptions = { body: {} }) {
  const mock = createMockFetch(mockOpts);
  const norbix = new Norbix(
    { projectId: 'pr_1', baseUrl, apiVersion: 'v3', fetch: mock.fetch, ...config },
    { envSource: {} },
  );
  return { norbix, mock };
}

const rejected = (p: Promise<unknown>) =>
  p.then(
    () => {
      throw new Error('expected the call to fail');
    },
    (e: unknown) => e as NorbixError,
  );

const tokenAnswer = {
  bearerToken: 'a.b.c',
  userId: 'usr_1',
  displayName: 'Anna',
  expiresAt: '2026-11-27T10:00:00Z',
  meta: { credentialVersion: 'v7' },
};

describe('public config: auth.socialSignIn', () => {
  it('lists the buttons: provider, displayName and startPath', async () => {
    const button = {
      provider: 'google',
      displayName: 'Google',
      startPath: '/v3/membership/auth/social/google?projectId=pr_1',
    };
    const { norbix, mock } = client(
      {},
      { body: { auth: { socialProviders: ['google'], socialSignIn: [button], passkey: false } } },
    );
    const config = await norbix.api.public.getPublicProjectConfig({ projectId: 'pr_1' });
    const buttons: CodeMashApi2.PublicSocialSignInDto[] = config.auth.socialSignIn;

    expect(mock.lastCall!.url).toBe('https://api.test/v3/public/projects/pr_1/config');
    expect(buttons).toEqual([button]);
    // The start path plus a return page is the same URL the builder gives.
    expect(`${baseUrl.api}${buttons[0]!.startPath}`).toBe(
      norbix.api.auth.socialSignInUrl('google'),
    );
  });
});

describe('api.auth.socialSignInUrl', () => {
  it('builds the start route with the project id; PROD adds no env', () => {
    const { norbix, mock } = client();
    expect(norbix.api.auth.socialSignInUrl('google')).toBe(
      'https://api.test/v3/membership/auth/social/google?projectId=pr_1',
    );
    expect(mock.calls).toHaveLength(0);
  });

  it('encodes mode and returnUrl, after the project id', () => {
    const { norbix } = client();
    const url = norbix.api.auth.socialSignInUrl('github', {
      mode: 'Admin portal & app',
      returnUrl: 'https://app.example.com/oauth/callback?next=/a b&x=1',
    });
    expect(url).toBe(
      'https://api.test/v3/membership/auth/social/github?projectId=pr_1' +
        '&mode=Admin%20portal%20%26%20app' +
        '&returnUrl=https%3A%2F%2Fapp.example.com%2Foauth%2Fcallback%3Fnext%3D%2Fa%20b%26x%3D1',
    );
    const query = new URL(url).searchParams;
    expect(query.get('mode')).toBe('Admin portal & app');
    expect(query.get('returnUrl')).toBe('https://app.example.com/oauth/callback?next=/a b&x=1');
  });

  it('puts a non-PROD env in the query (a navigation carries no norbix-env header)', () => {
    const { norbix } = client({ env: 'TEST' });
    expect(norbix.api.auth.socialSignInUrl('okta')).toBe(
      'https://api.test/v3/membership/auth/social/okta?projectId=pr_1&env=TEST',
    );
    expect(norbix.api.auth.socialSignInUrl('okta', { env: 'PROD' })).toBe(
      'https://api.test/v3/membership/auth/social/okta?projectId=pr_1',
    );
    expect(client().norbix.api.auth.socialSignInUrl('okta', { env: 'STAGE' })).toBe(
      'https://api.test/v3/membership/auth/social/okta?projectId=pr_1&env=STAGE',
    );
  });

  it('encodes the provider path segment', () => {
    const { norbix } = client();
    expect(norbix.api.auth.socialSignInUrl('a/b')).toBe(
      'https://api.test/v3/membership/auth/social/a%2Fb?projectId=pr_1',
    );
  });
});

describe('api.auth.exchangeSocialCode', () => {
  it('POST /v3/membership/auth/social/{provider}/exchange with body { code } and no token', async () => {
    const { norbix, mock } = client({ apiKey: 'ak-1' }, { body: tokenAnswer });
    const result = await norbix.api.auth.exchangeSocialCode('google', 'one-time');

    expect(mock.lastCall!.method).toBe('POST');
    expect(mock.lastCall!.url).toBe('https://api.test/v3/membership/auth/social/google/exchange');
    expect(JSON.parse(mock.lastCall!.body!)).toEqual({ code: 'one-time' });
    expect(mock.lastCall!.headers.get('Authorization')).toBeNull();
    expect(mock.lastCall!.headers.get('norbix-project-id')).toBe('pr_1');
    expect(result).toEqual({
      bearerToken: 'a.b.c',
      userId: 'usr_1',
      displayName: 'Anna',
      expiresAt: '2026-11-27T10:00:00Z',
      credentialVersion: 'v7',
    });
    expect(result).not.toHaveProperty('passwordChangeRequired');
  });

  it('sends no credentials, though the client has a JWT (the gateway refuses an old one)', async () => {
    const { norbix, mock } = client({ bearerToken: 'old.jwt' }, { body: tokenAnswer });
    await norbix.api.auth.exchangeSocialCode('google', 'one-time');
    expect(mock.lastCall!.headers.get('Authorization')).toBeNull();
  });

  it('the raw api.membership.exchangeSocialSignInCode sends no credentials either', async () => {
    const { norbix, mock } = client({ apiKey: 'ak-1' }, { body: tokenAnswer });
    await norbix.api.membership.exchangeSocialSignInCode({ provider: 'google', code: 'one-time' });
    expect(mock.lastCall!.method).toBe('POST');
    expect(mock.lastCall!.url).toBe('https://api.test/v3/membership/auth/social/google/exchange');
    expect(JSON.parse(mock.lastCall!.body!)).toEqual({ code: 'one-time' });
    expect(mock.lastCall!.headers.get('Authorization')).toBeNull();
    expect(mock.lastCall!.headers.get('norbix-project-id')).toBe('pr_1');
  });

  it('sends a non-PROD env as the norbix-env header', async () => {
    const { norbix, mock } = client({ env: 'TEST' }, { body: tokenAnswer });
    await norbix.api.auth.exchangeSocialCode('google', 'c');
    expect(mock.lastCall!.headers.get('norbix-env')).toBe('TEST');
  });

  it('an answer without a bearer token is an error', async () => {
    const { norbix } = client({}, { body: { userId: 'usr_1' } });
    const error = await rejected(norbix.api.auth.exchangeSocialCode('google', 'c'));
    expect(error.code).toBe('NORBIX_NO_TOKEN');
  });

  it('a used or expired code is the gateway refusal (051)', async () => {
    const { norbix } = client(
      {},
      {
        status: 400,
        body: {
          responseStatus: {
            errorCode: 'CM-ERRORS-MEMBERSHIP-051',
            message: 'expired',
            errors: [{ errorCode: 'CM-ERRORS-MEMBERSHIP-051', message: 'expired' }],
          },
        },
      },
    );
    const error = await rejected(norbix.api.auth.exchangeSocialCode('google', 'c'));
    expect(error.status).toBe(400);
    expect(JSON.stringify(error)).toContain('CM-ERRORS-MEMBERSHIP-051');
  });
});

describe('api.membership.startLinkIdentity / finishLinkIdentity', () => {
  it('start: POST /v3/membership/auth/{UserId}/link-identity/start with { provider, mode, returnUrl }', async () => {
    const { norbix, mock } = client(
      { bearerToken: 'jwt-1' },
      { body: { authorizeUrl: 'https://accounts.example/authorize?x=1' } },
    );
    const answer = await norbix.api.membership.startLinkIdentity('usr_1', 'google', {
      mode: 'app',
      returnUrl: 'https://app.example.com/settings',
    });

    expect(mock.lastCall!.method).toBe('POST');
    expect(mock.lastCall!.url).toBe(
      'https://api.test/v3/membership/auth/usr_1/link-identity/start',
    );
    expect(JSON.parse(mock.lastCall!.body!)).toEqual({
      provider: 'google',
      mode: 'app',
      returnUrl: 'https://app.example.com/settings',
    });
    expect(mock.lastCall!.headers.get('Authorization')).toBe('Bearer jwt-1');
    expect(answer).toEqual({ authorizeUrl: 'https://accounts.example/authorize?x=1' });
  });

  it('start: the body is { provider } when no mode or returnUrl is given', async () => {
    const { norbix, mock } = client(
      { bearerToken: 'jwt-1' },
      { body: { authorizeUrl: 'https://a' } },
    );
    await norbix.api.membership.startLinkIdentity('ct_1', 'github');
    expect(mock.lastCall!.url).toBe('https://api.test/v3/membership/auth/ct_1/link-identity/start');
    expect(JSON.parse(mock.lastCall!.body!)).toEqual({ provider: 'github' });
  });

  it('start: an answer without authorizeUrl is an error', async () => {
    const { norbix } = client({ bearerToken: 'jwt-1' }, { body: {} });
    const error = await rejected(norbix.api.membership.startLinkIdentity('usr_1', 'google'));
    expect(error.code).toBe('NORBIX_NO_AUTHORIZE_URL');
  });

  it('finish: POST /v3/membership/auth/{UserId}/link-identity with body { code }', async () => {
    const { norbix, mock } = client({ bearerToken: 'jwt-1' }, { body: {} });
    await expect(
      norbix.api.membership.finishLinkIdentity('usr_1', 'link-code'),
    ).resolves.toBeUndefined();

    expect(mock.lastCall!.method).toBe('POST');
    expect(mock.lastCall!.url).toBe('https://api.test/v3/membership/auth/usr_1/link-identity');
    expect(JSON.parse(mock.lastCall!.body!)).toEqual({ code: 'link-code' });
    expect(mock.lastCall!.headers.get('Authorization')).toBe('Bearer jwt-1');
  });

  it('finish: a provider account linked to someone else is the 409 refusal (055)', async () => {
    const { norbix } = client(
      { bearerToken: 'jwt-1' },
      {
        status: 409,
        body: {
          responseStatus: {
            errorCode: 'CM-ERRORS-MEMBERSHIP-055',
            message: 'linked elsewhere',
            errors: [{ errorCode: 'CM-ERRORS-MEMBERSHIP-055', message: 'linked elsewhere' }],
          },
        },
      },
    );
    const error = await rejected(norbix.api.membership.finishLinkIdentity('usr_1', 'c'));
    expect(error.status).toBe(409);
  });
});

describe('api.auth.readSocialReturn / completeSocialSignIn', () => {
  it('reads a sign-in code, a link code, an error and nothing', () => {
    const { norbix } = client();
    const read = norbix.api.auth.readSocialReturn;
    expect(read('https://app.example.com/cb?code=c1&provider=google')).toEqual({
      kind: 'signIn',
      provider: 'google',
      code: 'c1',
    });
    expect(read('https://app.example.com/cb?intent=link&code=c2&provider=github')).toEqual({
      kind: 'link',
      provider: 'github',
      code: 'c2',
    });
    expect(read('https://app.example.com/cb?error=email_in_use&provider=google')).toEqual({
      kind: 'error',
      error: 'email_in_use',
      provider: 'google',
    });
    expect(read('https://app.example.com/cb?error=state_mismatch')).toEqual({
      kind: 'error',
      error: 'state_mismatch',
    });
    expect(read('https://app.example.com/cb')).toEqual({ kind: 'none' });
    expect(read()).toEqual({ kind: 'none' });
  });

  it('exchanges a sign-in code', async () => {
    const { norbix, mock } = client({}, { body: tokenAnswer });
    const done = await norbix.api.auth.completeSocialSignIn(
      'https://app.example.com/cb?code=c1&provider=google',
    );
    expect(mock.lastCall!.url).toBe('https://api.test/v3/membership/auth/social/google/exchange');
    expect(done).toEqual({
      kind: 'signedIn',
      provider: 'google',
      result: {
        bearerToken: 'a.b.c',
        userId: 'usr_1',
        displayName: 'Anna',
        expiresAt: '2026-11-27T10:00:00Z',
        credentialVersion: 'v7',
      },
    });
  });

  it('never exchanges a link code, and sends nothing for an error', async () => {
    const { norbix, mock } = client({}, { body: tokenAnswer });
    expect(
      await norbix.api.auth.completeSocialSignIn(
        'https://app.example.com/cb?intent=link&code=c2&provider=github',
      ),
    ).toEqual({ kind: 'link', provider: 'github', code: 'c2' });
    expect(
      await norbix.api.auth.completeSocialSignIn('https://app.example.com/cb?error=invite_only'),
    ).toEqual({ kind: 'error', error: 'invite_only' });
    expect(mock.calls).toHaveLength(0);
  });
});

describe('api.auth.redirectToSocialSignIn', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('sends the page to the start URL', () => {
    const assign = vi.fn();
    vi.stubGlobal('location', { href: 'https://app.example.com/', assign });
    const { norbix } = client();
    norbix.api.auth.redirectToSocialSignIn('google', { returnUrl: 'https://app.example.com/cb' });
    expect(assign).toHaveBeenCalledWith(
      'https://api.test/v3/membership/auth/social/google?projectId=pr_1' +
        '&returnUrl=https%3A%2F%2Fapp.example.com%2Fcb',
    );
  });

  it('reads the current page when no URL is given', () => {
    vi.stubGlobal('location', {
      href: 'https://app.example.com/cb?code=c1&provider=apple',
      assign: vi.fn(),
    });
    const { norbix } = client();
    expect(norbix.api.auth.readSocialReturn()).toEqual({
      kind: 'signIn',
      provider: 'apple',
      code: 'c1',
    });
  });

  it('outside a browser it is an error', () => {
    const { norbix } = client();
    expect(() => norbix.api.auth.redirectToSocialSignIn('google')).toThrow(/needs a browser/);
  });
});
