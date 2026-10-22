import { describe, expect, it } from 'vitest';

import type { CodeMashHub2 } from '../../src/types/hub2.dtos.js';
import { makeClient } from '../_helpers.js';

/**
 * True-by-default request switches are optional (gateway 2026-10-22): an empty
 * `dryRun` / `isSandbox` means `true` on the gateway — the safe choice (check
 * only, sandbox). The SDK must leave an unset switch out of the body, never
 * send it as `false`, and must send an explicit `false` as given.
 */
describe('hub — true-by-default switches (empty = true)', () => {
  it('importUsers leaves an unset dryRun out of the body', async () => {
    const { norbix, mock } = makeClient();

    await norbix.hub.membership.importUsers({ users: [] });

    const sent = JSON.parse(mock.lastCall?.body ?? '{}') as Record<string, unknown>;
    expect(mock.lastCall?.url).toContain('/membership/users/import');
    expect('dryRun' in sent).toBe(false);
  });

  it('importUsers sends an explicit dryRun: false', async () => {
    const { norbix, mock } = makeClient();

    await norbix.hub.membership.importUsers({ users: [], dryRun: false });

    expect(JSON.parse(mock.lastCall?.body ?? '{}').dryRun).toBe(false);
  });

  it('savePaymentsIntegration leaves an unset Montonio isSandbox out of the body', async () => {
    const { norbix, mock } = makeClient();
    const integration: Partial<CodeMashHub2.MontonioPaymentIntegrationRequest> = {
      provider: 'Montonio' as CodeMashHub2.PaymentGatewayPlatform,
      integrationName: 'montonio',
      accessKey: 'ak',
      secretKey: 'sk',
    };

    await norbix.hub.payments.savePaymentsIntegration({
      integration: integration as CodeMashHub2.PaymentIntegrationRequest,
    });

    const sent = JSON.parse(mock.lastCall?.body ?? '{}').integration as Record<string, unknown>;
    expect(sent.provider).toBe('Montonio');
    expect('isSandbox' in sent).toBe(false);
  });
});
