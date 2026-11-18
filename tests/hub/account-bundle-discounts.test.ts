/**
 * Bundle discount codes (gateway docs/tasks/bundle-discounts.md): check a code, put it on the
 * running subscription, send one with a checkout, read it back on the account status, and see
 * why a refused code was refused. Every test runs against a fake fetch — never a real server.
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

describe('hub.account bundle discounts', () => {
  it('checkBundleDiscount: POST /account/stripe/discount/check with code, bundle and period in the body', async () => {
    const discount = {
      code: 'LAUNCH30',
      percentOff: 30,
      months: 3,
    };
    const { norbix, mock } = clientAnswering({ discount, responseStatus: { isSuccess: true } });

    const response = await norbix.hub.account.checkBundleDiscount({
      code: 'LAUNCH30',
      bundle: CodeMashHub2.ManagedServiceBundle.Growth,
      billingPeriod: CodeMashHub2.SubscriptionBillingPeriod.Monthly,
    });

    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.split('?')[0]).toBe(`${HUB}/account/stripe/discount/check`);
    expect(JSON.parse(mock.lastCall?.body ?? '{}')).toMatchObject({
      code: 'LAUNCH30',
      bundle: 'Growth',
      billingPeriod: 'Monthly',
    });
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(response.discount).toEqual(discount);
  });

  it('applyBundleDiscount: POST /account/stripe/discount with the code in the body', async () => {
    const { norbix, mock } = clientAnswering({ responseStatus: { isSuccess: true } });

    await norbix.hub.account.applyBundleDiscount({ code: 'LAUNCH30' });

    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.split('?')[0]).toBe(`${HUB}/account/stripe/discount`);
    expect(JSON.parse(mock.lastCall?.body ?? '{}')).toEqual({ code: 'LAUNCH30' });
  });

  it('createStripeCheckoutSession sends discountCode', async () => {
    const { norbix, mock } = clientAnswering({ sessionUrl: 'https://checkout.stripe.com/x' });

    await norbix.hub.account.createStripeCheckoutSession({
      subscriptionType: CodeMashHub2.SubscriptionType.ManagedService,
      bundle: CodeMashHub2.ManagedServiceBundle.Starter,
      billingPeriod: CodeMashHub2.SubscriptionBillingPeriod.Monthly,
      discountCode: 'LAUNCH30',
    });

    expect(JSON.parse(mock.lastCall?.body ?? '{}')).toMatchObject({ discountCode: 'LAUNCH30' });
  });

  it('getAccountStatus reads the discount on the account', async () => {
    const discount = {
      code: 'LAUNCH30',
      percentOff: 30,
      months: 3,
      endsAt: '2027-02-18T00:00:00Z',
    };
    const { norbix } = clientAnswering({ item: { discount } });

    const response = await norbix.hub.account.getAccountStatus({});

    expect(response.item?.discount).toEqual(discount);
  });

  it('a refused code fails with CM-ERRORS-ACCOUNT-027 and the reason in the error meta', async () => {
    const { norbix } = clientAnswering(
      {
        responseStatus: {
          isSuccess: false,
          errors: [
            {
              message: 'This discount code cannot be used.',
              errorCode: 'CM-ERRORS-ACCOUNT-027',
              context: { reason: 'already_used' },
            },
          ],
        },
      },
      400,
    );

    const err = (await norbix.hub.account
      .checkBundleDiscount({ code: 'LAUNCH30' })
      .catch((e: unknown) => e)) as NorbixError;

    expect(err).toBeInstanceOf(NorbixError);
    expect(err.code).toBe('CM-ERRORS-ACCOUNT-027');
    expect(err.errors[0]?.meta).toMatchObject({ reason: 'already_used' });
  });
});
