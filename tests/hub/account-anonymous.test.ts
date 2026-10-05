import { describe, expect, it } from 'vitest';

import { Norbix } from '../../src/index.js';
import { createMockFetch } from '../_helpers.js';

/**
 * The four Hub routes that have no `[Authenticate]` on the gateway — sign-up,
 * accept an invitation, list regions, verify the account — must work for a
 * caller that has no token and no account id yet. The SDK sends them with
 * the `'unauthenticated'` scope: no `Authorization` header, no token check,
 * no account-scope check. `verifyAccount` carries its account id in the
 * request only (query string), never from the client.
 */

const HUB = 'https://hub.norbix.io';

/** A client with no token and no account id, isolated from NORBIX_* env vars. */
function anonymousClient() {
  const mock = createMockFetch({ body: {} });
  const norbix = new Norbix(
    {
      projectId: 'test-project',
      hubVersion: 'v2',
      baseUrl: { api: 'https://api.norbix.io', hub: HUB },
      fetch: mock.fetch,
    },
    { envSource: {} },
  );
  return { norbix, mock };
}

type Call = (n: Norbix) => Promise<unknown>;

const cases: Array<{ name: string; call: Call; method: string; path: string }> = [
  {
    name: 'hub.account.createAccount',
    call: (n) => n.hub.account.createAccount({ email: 'new@example.com' }),
    method: 'POST',
    path: '/v2/account',
  },
  {
    name: 'hub.account.createTeamMemberFromInvitation',
    call: (n) => n.hub.account.createTeamMemberFromInvitation({ token: 'invite-1' }),
    method: 'POST',
    path: '/v2/account/team/member',
  },
  {
    name: 'hub.account.getAccountRegions',
    call: (n) => n.hub.account.getAccountRegions(),
    method: 'GET',
    path: '/v2/account/regions',
  },
  {
    name: 'hub.regions.list',
    call: (n) => n.hub.regions.list(),
    method: 'GET',
    path: '/v2/account/regions',
  },
  {
    name: 'hub.account.verifyAccount',
    call: (n) => n.hub.account.verifyAccount({ accountId: 'acc-1', token: 'verify-1' }),
    method: 'GET',
    path: '/v2/account/verify',
  },
];

describe('hub.account — anonymous calls (no token, no accountId)', () => {
  it.each(cases)('$name: $method $path with no Authorization header', async (c) => {
    const { norbix, mock } = anonymousClient();
    await c.call(norbix);

    const sent = mock.lastCall!;
    expect(sent).toBeDefined();
    expect(sent.method).toBe(c.method);
    expect(new URL(sent.url).origin + new URL(sent.url).pathname).toBe(`${HUB}${c.path}`);
    expect(sent.headers.has('Authorization')).toBe(false);
    expect([...sent.headers.keys()].filter((h) => /api-?key/i.test(h))).toEqual([]);
    expect(sent.headers.has('X-CM-AccountId')).toBe(false);
    expect(sent.headers.has('norbix-account-id')).toBe(false);
  });

  it('hub.account.verifyAccount: accountId and token travel in the query', async () => {
    const { norbix, mock } = anonymousClient();
    await norbix.hub.account.verifyAccount({ accountId: 'acc-1', token: 'verify-1' });

    const query = new URL(mock.lastCall!.url).searchParams;
    expect(query.get('accountId')).toBe('acc-1');
    expect(query.get('token')).toBe('verify-1');
  });
});
