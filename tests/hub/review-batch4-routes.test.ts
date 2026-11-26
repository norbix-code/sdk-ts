import { describe, expect, it } from 'vitest';

import { CodeMashHub2 } from '../../src/types/hub2.dtos.js';
import { makeClient } from '../_helpers.js';

/**
 * Review batch 4 routes on the exact path, with the query (reads) or the JSON
 * body (writes): one team member, one user's AI plan, the team member's phone
 * and the paged project health. Hand-written, so a regeneration of the
 * per-module tests keeps it. Every call goes to a mock fetch.
 */

const MEMBER = 'usr_4hT2b9QkLm3XcT1yRfGh7a';
const CONTACT = 'ct_3kQ9mZ2vXc8LpR4wT7yH1n';

function sent(mock: ReturnType<typeof makeClient>['mock']) {
  const call = mock.lastCall!;
  const url = new URL(call.url);
  return {
    verb: call.method,
    path: url.pathname,
    query: Object.fromEntries(url.searchParams.entries()),
    body: call.body === undefined ? undefined : (JSON.parse(call.body) as unknown),
  };
}

describe('review batch 4 routes', () => {
  it('hub.account.getTeamMember: GET /account/team/member/{memberId}', async () => {
    const { norbix, mock } = makeClient();
    await norbix.hub.account.getTeamMember({ memberId: MEMBER });
    expect(sent(mock)).toEqual({
      verb: 'GET',
      path: `/v2/account/team/member/${MEMBER}`,
      query: {},
      body: undefined,
    });
  });

  it('hub.account.updateTeamMember sends the phone', async () => {
    const { norbix, mock } = makeClient();
    await norbix.hub.account.updateTeamMember({
      memberId: MEMBER,
      displayName: 'Ada',
      phone: '+37060000000',
    });
    const { verb, body } = sent(mock);
    expect(verb).toBe('PUT');
    expect(body).toMatchObject({ displayName: 'Ada', phone: '+37060000000' });
  });

  it.each(['api', 'hub'] as const)(
    '%s.membership.getUserAiPlan: GET /membership/users/{userId}/ai-plan',
    async (host) => {
      const { norbix, mock } = makeClient();
      await norbix[host].membership.getUserAiPlan({ userId: CONTACT });
      expect(sent(mock)).toEqual({
        verb: 'GET',
        path: `/v2/membership/users/${CONTACT}/ai-plan`,
        query: {},
        body: undefined,
      });
    },
  );

  it('the removed AI plan methods are gone', () => {
    const { norbix } = makeClient();
    const has = (mod: object, name: string) => name in mod;
    expect(has(norbix.api.membership, 'setUserAiPlan')).toBe(false);
    expect(has(norbix.hub.membership, 'setUserAiPlan')).toBe(false);
    expect(has(norbix.hub.account, 'getProjectAiUserPlans')).toBe(false);
  });

  it('hub.account.getProjectHealth passes severity, module and the page', async () => {
    const { norbix, mock } = makeClient();
    await norbix.hub.account.getProjectHealth({
      projectId: 'pr_1',
      severity: CodeMashHub2.ProjectHealthSeverity.Error,
      module: CodeMashHub2.ApplicationModule.Database,
      pageNumber: 2,
      pageSize: 20,
    });
    expect(sent(mock)).toEqual({
      verb: 'GET',
      path: '/v2/account/projects/pr_1/health',
      query: { severity: 'Error', module: '2', pageNumber: '2', pageSize: '20' },
      body: undefined,
    });
  });
});
