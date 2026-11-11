/**
 * Routes the gateway does not authenticate (`requiresAuth: false` in
 * `src/types/*.contract.json`) are generated with scope `'optional'`: a token
 * is sent when the client has one, and the call still goes out when it has
 * none. Before, they were `'project'`, so a client with no token threw
 * `NORBIX_NOT_AUTHENTICATED` on, for example, the public password-reset
 * request, and callers had to pass `scope: 'unauthenticated'` by hand.
 *
 * Hand-written: the generated module tests are refreshed by
 * `npm run generate-endpoints` and would lose these.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

import { MembershipModule } from '../src/api/membership.js';
import { NorbixError } from '../src/client/errors.js';
import { Transport } from '../src/client/transport.js';
import type { ResolvedNorbixConfig } from '../src/client/types.js';
import { AccountModule } from '../src/hub/account.js';

import { createMockFetch } from './_helpers.js';

function transport(overrides: Partial<ResolvedNorbixConfig> = {}) {
  const mock = createMockFetch({ body: {} });
  const cfg = {
    baseUrl: { api: 'https://api.norbix.io', hub: 'https://hub.norbix.io' },
    apiVersion: 'v2',
    hubVersion: 'v2',
    defaultHeaders: {},
    timeoutMs: 5_000,
    retry: { maxRetries: 0, baseDelayMs: 1, maxDelayMs: 1 },
    fetch: mock.fetch,
    ...overrides,
  } as unknown as ResolvedNorbixConfig;
  return { t: new Transport(cfg), mock };
}

describe('open routes — scope optional', () => {
  it('requestPasswordReset with no token: goes out with no Authorization header', async () => {
    const { t, mock } = transport({ projectId: 'p-1' });

    await new MembershipModule(t).requestPasswordReset({ email: 'ada@example.com' });

    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toBe(
      'https://api.norbix.io/v2/membership/userauth/password/reset/request',
    );
    expect(mock.lastCall?.headers.get('Authorization')).toBeNull();
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('p-1');
    expect(JSON.parse(mock.lastCall?.body ?? '{}')).toEqual({ email: 'ada@example.com' });
  });

  it('requestPasswordReset with an apiKey: sends it as the bearer token', async () => {
    const { t, mock } = transport({ apiKey: 'key-123', projectId: 'p-1' });

    await new MembershipModule(t).requestPasswordReset({ email: 'ada@example.com' });

    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer key-123');
  });

  it('getAccountPasswordPolicy (Hub) with no token: goes out with no Authorization header', async () => {
    const { t, mock } = transport();

    await new AccountModule(t).getAccountPasswordPolicy();

    expect(mock.lastCall?.url).toBe('https://hub.norbix.io/v2/account/team/password-policy');
    expect(mock.lastCall?.headers.get('Authorization')).toBeNull();
  });

  it('a route that needs sign-in still refuses a client with no token', async () => {
    const { t, mock } = transport({ projectId: 'p-1' });

    const err = await new MembershipModule(t).blockUser({}).catch((e: unknown) => e);

    expect(err).toBeInstanceOf(NorbixError);
    expect((err as NorbixError).code).toBe('NORBIX_NOT_AUTHENTICATED');
    expect(mock.calls).toHaveLength(0);
  });
});

/**
 * Every generated method names its request DTO in its doc comment
 * (`Request DTO: X`) and sets a `scope:` a few lines below. For every DTO the
 * contract marks as open, the scope must not be `'project'` or `'account'` —
 * those demand a token the caller of an open route may not have.
 */
describe('open routes — every generated method follows the contract', () => {
  const root = join(__dirname, '..');
  for (const target of ['api', 'hub'] as const) {
    it(`${target}: no open route is generated as 'project' or 'account'`, () => {
      const contract = JSON.parse(
        readFileSync(join(root, `src/types/${target}2.contract.json`), 'utf8'),
      ) as Record<string, { requiresAuth: boolean }>;
      const dir = join(root, 'src', target);
      const wrong: string[] = [];
      let open = 0;
      for (const file of readdirSync(dir).filter((f) => f.endsWith('.ts'))) {
        const text = readFileSync(join(dir, file), 'utf8');
        for (const m of text.matchAll(/Request DTO: (\w+)[\s\S]*?scope: '(\w+)'/g)) {
          const dto = m[1] ?? '';
          const scope = m[2] ?? '';
          if (contract[dto]?.requiresAuth !== false) continue;
          open++;
          if (scope === 'project' || scope === 'account') wrong.push(`${file}: ${dto} → ${scope}`);
        }
      }
      expect(wrong).toEqual([]);
      expect(open).toBeGreaterThan(10);
    });
  }
});
