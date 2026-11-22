/**
 * E-mail verification of e-mail + password logins (gateway
 * docs/tasks/password-email-verification.md): the two public routes go out
 * without a token, and the "not verified" sign-in refusal is recognisable.
 */
import { describe, expect, it } from 'vitest';

import { MembershipModule } from '../src/api/membership.js';
import { Transport } from '../src/client/transport.js';
import type { ResolvedNorbixConfig } from '../src/client/types.js';
import {
  EMAIL_NOT_VERIFIED_ERROR_CODE,
  isEmailNotVerifiedError,
  NorbixError,
} from '../src/index.js';

import { createMockFetch, makeClient } from './_helpers.js';

function transport(overrides: Partial<ResolvedNorbixConfig> = {}) {
  const mock = createMockFetch({ body: { responseStatus: { isSuccess: true, errors: [] } } });
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

describe('e-mail address verification', () => {
  it('verifyEmailAddress goes out with no Authorization header and the token in the body', async () => {
    const { t, mock } = transport({ projectId: 'p-1' });

    await new MembershipModule(t).verifyEmailAddress({ token: 'tok-from-the-link' });

    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toBe(
      'https://api.norbix.io/v2/membership/userauth/email-verification/confirm',
    );
    expect(mock.lastCall?.headers.get('Authorization')).toBeNull();
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('p-1');
    expect(JSON.parse(mock.lastCall?.body ?? '{}')).toEqual({ token: 'tok-from-the-link' });
  });

  it('resendEmailAddressVerification goes out with no Authorization header', async () => {
    const { t, mock } = transport({ projectId: 'p-1' });

    await new MembershipModule(t).resendEmailAddressVerification({ email: 'ada@example.com' });

    expect(mock.lastCall?.url).toBe(
      'https://api.norbix.io/v2/membership/userauth/email-verification/resend',
    );
    expect(mock.lastCall?.headers.get('Authorization')).toBeNull();
    expect(JSON.parse(mock.lastCall?.body ?? '{}')).toEqual({ email: 'ada@example.com' });
  });

  it('a sign-in refused with 052 is recognised as "e-mail not verified"', async () => {
    const mock = createMockFetch({
      status: 401,
      body: {
        responseStatus: {
          errorCode: EMAIL_NOT_VERIFIED_ERROR_CODE,
          message:
            'Your e-mail address is not verified yet. Open the link we sent you, or ask for a new one.',
        },
      },
    });
    const { norbix } = makeClient({ fetch: mock.fetch });

    const err = await norbix.api.auth
      .signIn({ userName: 'ada@example.com', password: 'secret-1' })
      .catch((e: unknown) => e);

    expect(err).toBeInstanceOf(NorbixError);
    expect(isEmailNotVerifiedError(err)).toBe(true);
    expect((err as NorbixError).httpStatus).toBe(401);
    expect(
      isEmailNotVerifiedError(new NorbixError({ message: 'x', status: 401, code: 'Unauthorized' })),
    ).toBe(false);
    expect(isEmailNotVerifiedError(new Error('x'))).toBe(false);
  });
});
