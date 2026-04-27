import { describe, expect, it } from 'vitest';

import { AccountModule } from '../../src/hub/account.js';
import { NorbixError } from '../../src/index.js';
import { createMockFetch, expectedUrl, makeClient, stubRequestForPath } from '../_helpers.js';

/**
 * Auto-generated. Do not edit by hand — follow the internal maintenance workflow
 * to refresh this file from the DTO definitions.
 *
 * Tests for hub.account (37 endpoints).
 *
 * Each method is asserted against:
 *   - presence on the module (smoke check)
 *   - issued HTTP verb + URL with version segment substituted and path
 *     tokens interpolated from a stubbed request
 *   - auth, project, and (when applicable) account headers
 *   - account-scope guard: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId
 */
describe('hub.account', () => {
  it('module exposes 37 method(s)', () => {
    const mock = createMockFetch();
    const mod = new AccountModule({} as never);
    void mod; // silence unused — we only need the type
    // Sanity check the auto-mapped surface exists on the namespaced client.
    const { norbix } = makeClient();
    const ns = (norbix.hub as unknown as Record<string, unknown>)['account'] as Record<
      string,
      unknown
    >;
    expect(ns).toBeDefined();
    void mock;
    expect(typeof ns['getAccountProfile']).toBe('function');
    expect(typeof ns['updateAccountProfile']).toBe('function');
    expect(typeof ns['resendAccountVerificationToken']).toBe('function');
    expect(typeof ns['getAccountStatus']).toBe('function');
    expect(typeof ns['createStripeCheckoutSession']).toBe('function');
    expect(typeof ns['getStripeBillingPortalUrl']).toBe('function');
    expect(typeof ns['createTeamMemberFromInvitation']).toBe('function');
    expect(typeof ns['verifyAccount']).toBe('function');
    expect(typeof ns['deleteNotificationsGroup']).toBe('function');
    expect(typeof ns['deleteNotificationsTag']).toBe('function');
    expect(typeof ns['removeTagFromNotificationsGroup']).toBe('function');
    expect(typeof ns['saveNotificationsGroup']).toBe('function');
    expect(typeof ns['saveNotificationsTag']).toBe('function');
    expect(typeof ns['createProject']).toBe('function');
    expect(typeof ns['deleteProject']).toBe('function');
    expect(typeof ns['getProject']).toBe('function');
    expect(typeof ns['getProjects']).toBe('function');
    expect(typeof ns['getAccountRegions']).toBe('function');
    expect(typeof ns['getProjectTokens']).toBe('function');
    expect(typeof ns['updateProjectAccentColor']).toBe('function');
    expect(typeof ns['updateProjectIcon']).toBe('function');
    expect(typeof ns['updateProjectLogo']).toBe('function');
    expect(typeof ns['updateProjectMainColor']).toBe('function');
    expect(typeof ns['updateProjectAllowedOrigins']).toBe('function');
    expect(typeof ns['updateProjectDefaultLanguage']).toBe('function');
    expect(typeof ns['updateProjectDescription']).toBe('function');
    expect(typeof ns['disableProject']).toBe('function');
    expect(typeof ns['enableProject']).toBe('function');
    expect(typeof ns['updateProjectLanguages']).toBe('function');
    expect(typeof ns['updateProjectUrl']).toBe('function');
    expect(typeof ns['updateProjectName']).toBe('function');
    expect(typeof ns['updateProjectRegions']).toBe('function');
    expect(typeof ns['createAccount']).toBe('function');
    expect(typeof ns['getAccountCollaborators']).toBe('function');
    expect(typeof ns['sendInviteToTeamMember']).toBe('function');
    expect(typeof ns['getLicenses']).toBe('function');
    expect(typeof ns['askChat']).toBe('function');
  });

  it('getAccountProfile: GET /{version}/account/profile', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/profile',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getAccountProfile']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateAccountProfile: PUT /{version}/account/profile', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/profile',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['updateAccountProfile']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('resendAccountVerificationToken: GET /{version}/account/verify/resend', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/verify/resend',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['resendAccountVerificationToken']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getAccountStatus: GET /{version}/account/status', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/status',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getAccountStatus']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('createStripeCheckoutSession: POST /{version}/account/stripe/create-checkout-session', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/stripe/create-checkout-session',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['createStripeCheckoutSession']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getStripeBillingPortalUrl: POST /{version}/account/stripe/get-portal-url', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/stripe/get-portal-url',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getStripeBillingPortalUrl']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('createTeamMemberFromInvitation: POST /{version}/account/team/member', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/team/member',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['createTeamMemberFromInvitation']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('verifyAccount: GET /{version}/account/verify', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/verify',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({ accountId: 'acc-1' });
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['verifyAccount']!;
    await fn({ ...stub, accountId: 'acc-1' });
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('verifyAccount: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId', async () => {
    const stub = {};
    const { norbix } = makeClient();
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['verifyAccount']!;
    await expect(fn(stub)).rejects.toBeInstanceOf(NorbixError);
    await expect(fn(stub)).rejects.toMatchObject({ code: 'NORBIX_ACCOUNT_SCOPE_REQUIRED' });
  });

  it('verifyAccount: succeeds when accountId is configured', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/verify',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({ accountId: 'acc-1' });
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['verifyAccount']!;
    await fn({ ...stub, accountId: 'acc-1' });
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('X-CM-AccountId')).toBe('acc-1');
  });

  it('deleteNotificationsGroup: DELETE /{version}/account/projects/{projectId}/notifications/settings/group', async () => {
    const stub = stubRequestForPath(
      '/{version}/account/projects/{projectId}/notifications/settings/group',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/notifications/settings/group',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['deleteNotificationsGroup']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteNotificationsTag: DELETE /{version}/account/projects/{projectId}/notifications/settings/tag', async () => {
    const stub = stubRequestForPath(
      '/{version}/account/projects/{projectId}/notifications/settings/tag',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/notifications/settings/tag',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['deleteNotificationsTag']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('removeTagFromNotificationsGroup: DELETE /{version}/account/projects/{projectId}/notifications/settings/group/tag', async () => {
    const stub = stubRequestForPath(
      '/{version}/account/projects/{projectId}/notifications/settings/group/tag',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/notifications/settings/group/tag',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['removeTagFromNotificationsGroup']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('saveNotificationsGroup: POST /{version}/account/projects/{projectId}/notifications/settings/group', async () => {
    const stub = stubRequestForPath(
      '/{version}/account/projects/{projectId}/notifications/settings/group',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/notifications/settings/group',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['saveNotificationsGroup']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('saveNotificationsTag: POST /{version}/account/projects/{projectId}/notifications/settings/tag', async () => {
    const stub = stubRequestForPath(
      '/{version}/account/projects/{projectId}/notifications/settings/tag',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/notifications/settings/tag',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['saveNotificationsTag']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('createProject: POST /{version}/account/projects', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['createProject']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteProject: DELETE /{version}/account/projects/{projectId}', async () => {
    const stub = stubRequestForPath('/{version}/account/projects/{projectId}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['deleteProject']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getProject: GET /{version}/account/projects/{projectId}', async () => {
    const stub = stubRequestForPath('/{version}/account/projects/{projectId}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getProject']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getProjects: GET /{version}/account/projects', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getProjects']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getAccountRegions: GET /{version}/account/regions', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/regions',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getAccountRegions']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getProjectTokens: GET /{version}/account/projects/{projectId}/tokens', async () => {
    const stub = stubRequestForPath('/{version}/account/projects/{projectId}/tokens');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/tokens',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getProjectTokens']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateProjectAccentColor: PATCH /{version}/account/projects/{projectId}/settings/accent-color', async () => {
    const stub = stubRequestForPath(
      '/{version}/account/projects/{projectId}/settings/accent-color',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/settings/accent-color',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['updateProjectAccentColor']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateProjectIcon: PATCH /{version}/account/projects/{projectId}/settings/icon', async () => {
    const stub = stubRequestForPath('/{version}/account/projects/{projectId}/settings/icon');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/settings/icon',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['updateProjectIcon']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateProjectLogo: PATCH /{version}/account/projects/{projectId}/settings/logo', async () => {
    const stub = stubRequestForPath('/{version}/account/projects/{projectId}/settings/logo');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/settings/logo',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['updateProjectLogo']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateProjectMainColor: PATCH /{version}/account/projects/{projectId}/settings/main-color', async () => {
    const stub = stubRequestForPath('/{version}/account/projects/{projectId}/settings/main-color');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/settings/main-color',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['updateProjectMainColor']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateProjectAllowedOrigins: PATCH /{version}/account/projects/{projectId}/settings/origins', async () => {
    const stub = stubRequestForPath('/{version}/account/projects/{projectId}/settings/origins');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/settings/origins',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['updateProjectAllowedOrigins']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateProjectDefaultLanguage: PATCH /{version}/account/projects/{projectId}/settings/default-language', async () => {
    const stub = stubRequestForPath(
      '/{version}/account/projects/{projectId}/settings/default-language',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/settings/default-language',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['updateProjectDefaultLanguage']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateProjectDescription: PATCH /{version}/account/projects/{projectId}/settings/description', async () => {
    const stub = stubRequestForPath('/{version}/account/projects/{projectId}/settings/description');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/settings/description',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['updateProjectDescription']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('disableProject: PATCH /{version}/account/projects/{projectId}/disable', async () => {
    const stub = stubRequestForPath('/{version}/account/projects/{projectId}/disable');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/disable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['disableProject']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('enableProject: PATCH /{version}/account/projects/{projectId}/enable', async () => {
    const stub = stubRequestForPath('/{version}/account/projects/{projectId}/enable');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/enable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['enableProject']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateProjectLanguages: PATCH /{version}/account/projects/{projectId}/settings/languages', async () => {
    const stub = stubRequestForPath('/{version}/account/projects/{projectId}/settings/languages');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/settings/languages',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['updateProjectLanguages']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateProjectUrl: PATCH /{version}/account/projects/{projectId}/settings/url', async () => {
    const stub = stubRequestForPath('/{version}/account/projects/{projectId}/settings/url');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/settings/url',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['updateProjectUrl']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateProjectName: PATCH /{version}/account/projects/{projectId}/settings/name', async () => {
    const stub = stubRequestForPath('/{version}/account/projects/{projectId}/settings/name');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/settings/name',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['updateProjectName']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateProjectRegions: PATCH /{version}/account/projects/{projectId}/settings/regions', async () => {
    const stub = stubRequestForPath('/{version}/account/projects/{projectId}/settings/regions');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/settings/regions',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['updateProjectRegions']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('createAccount: POST /{version}/account', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['createAccount']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getAccountCollaborators: GET /{version}/account/collaborators', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/collaborators',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getAccountCollaborators']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('sendInviteToTeamMember: POST /{version}/account/team/member/invite', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/team/member/invite',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['sendInviteToTeamMember']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getLicenses: GET /{version}/account/licenses', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/licenses',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getLicenses']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('askChat: POST /{version}/account/chat/complete', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/chat/complete',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['askChat']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });
});
