/**
 * Trial limits (gateway docs/tasks/trial-limits.md): ask whether a trial can start in a region,
 * join the waiting list, and buy without a trial or with an invitation. Every test runs against a
 * fake fetch — never a real server.
 */
import { describe, expect, it } from 'vitest';

import { NorbixError } from '../../src/index.js';
import { CodeMashHub2 } from '../../src/types/hub2.dtos.js';
import { createMockFetch, makeClient } from '../_helpers.js';

const HUB = 'https://hub.norbix.io/v2';

function clientAnswering(body: unknown, status = 200) {
  const mock = createMockFetch({ status, body });
  const { norbix } = makeClient({ fetch: mock.fetch });
  return { norbix, mock };
}

describe('hub.account trial limits', () => {
  it('getTrialAvailability: GET /account/trial-availability with the region in the query', async () => {
    const answer = {
      limitsOn: true,
      region: 'nb-eu-germany',
      trialsOpen: false,
      waitlistOpen: true,
      onWaitlist: false,
      responseStatus: { isSuccess: true },
    };
    const { norbix, mock } = clientAnswering(answer);

    const response = await norbix.hub.account.getTrialAvailability({ region: 'nb-eu-germany' });

    expect(mock.lastCall?.method).toBe('GET');
    const url = new URL(mock.lastCall?.url ?? '');
    expect(`${url.origin}${url.pathname}`).toBe(`${HUB}/account/trial-availability`);
    expect(url.searchParams.get('region')).toBe('nb-eu-germany');
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(response).toMatchObject({ limitsOn: true, trialsOpen: false, waitlistOpen: true });
  });

  it('joinTrialWaitlist: POST /account/trial-waitlist with region and consent in the body', async () => {
    const { norbix, mock } = clientAnswering({
      status: 'added',
      message: 'You are on the list.',
      responseStatus: { isSuccess: true },
    });

    const response = await norbix.hub.account.joinTrialWaitlist({
      region: 'nb-eu-germany',
      consent: true,
      consentVersion: '2026-11',
    });

    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.split('?')[0]).toBe(`${HUB}/account/trial-waitlist`);
    expect(JSON.parse(mock.lastCall?.body ?? '{}')).toEqual({
      region: 'nb-eu-germany',
      consent: true,
      consentVersion: '2026-11',
    });
    expect(response.status).toBe('added');
  });

  it('createStripeCheckoutSession sends withoutTrial and trialInvite', async () => {
    const { norbix, mock } = clientAnswering({ sessionUrl: 'https://checkout.stripe.com/x' });

    await norbix.hub.account.createStripeCheckoutSession({
      subscriptionType: CodeMashHub2.SubscriptionType.ManagedService,
      bundle: CodeMashHub2.ManagedServiceBundle.Starter,
      billingPeriod: CodeMashHub2.SubscriptionBillingPeriod.Monthly,
      region: 'nb-eu-germany',
      withoutTrial: true,
      trialInvite: 'inv_123',
    });

    expect(JSON.parse(mock.lastCall?.body ?? '{}')).toMatchObject({
      region: 'nb-eu-germany',
      withoutTrial: true,
      trialInvite: 'inv_123',
    });
  });

  it('a full region fails the trial checkout with CM-ERRORS-ACCOUNT-040', async () => {
    const { norbix } = clientAnswering(
      {
        responseStatus: {
          isSuccess: false,
          errors: [
            {
              message: 'Free trials in this region are full right now.',
              errorCode: 'CM-ERRORS-ACCOUNT-040',
            },
          ],
        },
      },
      400,
    );

    const error = await norbix.hub.account
      .createStripeCheckoutSession({
        subscriptionType: CodeMashHub2.SubscriptionType.ManagedService,
        bundle: CodeMashHub2.ManagedServiceBundle.Starter,
        billingPeriod: CodeMashHub2.SubscriptionBillingPeriod.Monthly,
      })
      .catch((e: unknown) => e);

    expect(error).toBeInstanceOf(NorbixError);
    expect((error as NorbixError).code).toBe('CM-ERRORS-ACCOUNT-040');
  });
});
