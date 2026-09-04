import { describe, expect, it } from 'vitest';

import { AccountModule } from '../../src/hub/account.js';
import { NorbixError } from '../../src/index.js';
import { createMockFetch, expectedUrl, makeClient, stubRequestForPath } from '../_helpers.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Tests for hub.account (93 endpoints).
 *
 * Each method is asserted against:
 *   - presence on the module (smoke check)
 *   - issued HTTP verb + URL with version segment substituted and path
 *     tokens interpolated from a stubbed request
 *   - auth, project, and (when applicable) account headers
 *   - account-scope guard: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId
 */
describe('hub.account', () => {
  it('module exposes 93 method(s)', () => {
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
    expect(typeof ns['getAccountUsageBilling']).toBe('function');
    expect(typeof ns['verifyAccount']).toBe('function');
    expect(typeof ns['deleteNotificationsGroup']).toBe('function');
    expect(typeof ns['deleteNotificationsTag']).toBe('function');
    expect(typeof ns['removeTagFromNotificationsGroup']).toBe('function');
    expect(typeof ns['saveNotificationsGroup']).toBe('function');
    expect(typeof ns['saveNotificationsTag']).toBe('function');
    expect(typeof ns['createProject']).toBe('function');
    expect(typeof ns['deleteProject']).toBe('function');
    expect(typeof ns['createProjectEnvironment']).toBe('function');
    expect(typeof ns['deleteProjectEnvironment']).toBe('function');
    expect(typeof ns['setEnvironmentRank']).toBe('function');
    expect(typeof ns['promoteEnvironment']).toBe('function');
    expect(typeof ns['rollbackPromotion']).toBe('function');
    expect(typeof ns['getProjectEnvironments']).toBe('function');
    expect(typeof ns['getProject']).toBe('function');
    expect(typeof ns['getProjects']).toBe('function');
    expect(typeof ns['getAccountRegions']).toBe('function');
    expect(typeof ns['waitForProjectActive']).toBe('function');
    expect(typeof ns['getProjectTokens']).toBe('function');
    expect(typeof ns['assignAdminPortalServiceUser']).toBe('function');
    expect(typeof ns['getAdminPortalStructure']).toBe('function');
    expect(typeof ns['updateProjectAdminUrl']).toBe('function');
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
    expect(typeof ns['updateProjectLegalDocuments']).toBe('function');
    expect(typeof ns['updateProjectExposeLegal']).toBe('function');
    expect(typeof ns['updateProjectUrl']).toBe('function');
    expect(typeof ns['updateProjectName']).toBe('function');
    expect(typeof ns['updateProjectRegions']).toBe('function');
    expect(typeof ns['createAccount']).toBe('function');
    expect(typeof ns['changeTeamMemberPassword']).toBe('function');
    expect(typeof ns['createTeamMember']).toBe('function');
    expect(typeof ns['createAccountPolicy']).toBe('function');
    expect(typeof ns['createAccountRole']).toBe('function');
    expect(typeof ns['deleteAccountPolicy']).toBe('function');
    expect(typeof ns['deleteAccountRole']).toBe('function');
    expect(typeof ns['getAccountCollaborators']).toBe('function');
    expect(typeof ns['getAccountPasswordPolicy']).toBe('function');
    expect(typeof ns['getAccountTeamPolicies']).toBe('function');
    expect(typeof ns['getAccountTeamRoles']).toBe('function');
    expect(typeof ns['sendInviteToTeamMember']).toBe('function');
    expect(typeof ns['updateAccountPolicy']).toBe('function');
    expect(typeof ns['updateAccountRole']).toBe('function');
    expect(typeof ns['accountHasPasskey']).toBe('function');
    expect(typeof ns['accountStartEmailVerification']).toBe('function');
    expect(typeof ns['accountConfirmEmailVerification']).toBe('function');
    expect(typeof ns['accountPasskeyRegistrationOptions']).toBe('function');
    expect(typeof ns['accountVerifyPasskeyRegistration']).toBe('function');
    expect(typeof ns['accountPasskeyAuthenticationOptions']).toBe('function');
    expect(typeof ns['accountVerifyPasskeyAuthentication']).toBe('function');
    expect(typeof ns['listAccountPasskeys']).toBe('function');
    expect(typeof ns['renameAccountPasskey']).toBe('function');
    expect(typeof ns['revokeAccountPasskey']).toBe('function');
    expect(typeof ns['accountPasskeyEnrollmentOptions']).toBe('function');
    expect(typeof ns['accountVerifyPasskeyEnrollment']).toBe('function');
    expect(typeof ns['getLicenseDomainDnsStatus']).toBe('function');
    expect(typeof ns['getLicenses']).toBe('function');
    expect(typeof ns['getInstallationLicenseStatus']).toBe('function');
    expect(typeof ns['getAiTools']).toBe('function');
    expect(typeof ns['invokeAiTool']).toBe('function');
    expect(typeof ns['askChat']).toBe('function');
    expect(typeof ns['uploadChatAttachment']).toBe('function');
    expect(typeof ns['chatAvailability']).toBe('function');
    expect(typeof ns['getChatMemory']).toBe('function');
    expect(typeof ns['forgetChatMemory']).toBe('function');
    expect(typeof ns['deleteChatSession']).toBe('function');
    expect(typeof ns['setChatSessionArchived']).toBe('function');
    expect(typeof ns['setChatSessionPinned']).toBe('function');
    expect(typeof ns['setChatSessionSharing']).toBe('function');
    expect(typeof ns['getChatSessions']).toBe('function');
    expect(typeof ns['getChatSessionEntries']).toBe('function');
    expect(typeof ns['setChatEntryFeedback']).toBe('function');
    expect(typeof ns['answerChatQuestion']).toBe('function');
    expect(typeof ns['decideChatPlan']).toBe('function');
    expect(typeof ns['stopChatRunStep']).toBe('function');
    expect(typeof ns['chatTurn']).toBe('function');
    expect(typeof ns['mcp']).toBe('function');
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

  it('getAccountUsageBilling: GET /{version}/account/usage-billing', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/usage-billing',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getAccountUsageBilling']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
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

  it('createProjectEnvironment: POST /{version}/account/projects/environments', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/environments',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['createProjectEnvironment']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteProjectEnvironment: DELETE /{version}/account/projects/environments/{environmentName}', async () => {
    const stub = stubRequestForPath('/{version}/account/projects/environments/{environmentName}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/environments/{environmentName}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['deleteProjectEnvironment']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('setEnvironmentRank: PATCH /{version}/account/projects/environments/{environmentName}/rank', async () => {
    const stub = stubRequestForPath(
      '/{version}/account/projects/environments/{environmentName}/rank',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/environments/{environmentName}/rank',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['setEnvironmentRank']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('promoteEnvironment: POST /{version}/account/projects/environments/promote', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/environments/promote',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['promoteEnvironment']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('rollbackPromotion: POST /{version}/account/projects/environments/promote/rollback', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/environments/promote/rollback',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['rollbackPromotion']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getProjectEnvironments: GET /{version}/account/projects/environments', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/environments',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getProjectEnvironments']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
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

  it('waitForProjectActive: GET /{version}/account/projects/{projectId}/wait-active', async () => {
    const stub = stubRequestForPath('/{version}/account/projects/{projectId}/wait-active');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/wait-active',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['waitForProjectActive']!;
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

  it('assignAdminPortalServiceUser: PUT /{version}/account/projects/{projectId}/settings/admin-portal/service-user', async () => {
    const stub = stubRequestForPath(
      '/{version}/account/projects/{projectId}/settings/admin-portal/service-user',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/settings/admin-portal/service-user',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['assignAdminPortalServiceUser']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getAdminPortalStructure: GET /{version}/account/projects/{projectId}/admin-portal/structure', async () => {
    const stub = stubRequestForPath(
      '/{version}/account/projects/{projectId}/admin-portal/structure',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/admin-portal/structure',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getAdminPortalStructure']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateProjectAdminUrl: PATCH /{version}/account/projects/{projectId}/settings/admin-url', async () => {
    const stub = stubRequestForPath('/{version}/account/projects/{projectId}/settings/admin-url');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/settings/admin-url',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['updateProjectAdminUrl']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
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

  it('updateProjectLegalDocuments: PATCH /{version}/account/projects/{projectId}/settings/legal', async () => {
    const stub = stubRequestForPath('/{version}/account/projects/{projectId}/settings/legal');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/settings/legal',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['updateProjectLegalDocuments']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateProjectExposeLegal: PATCH /{version}/account/projects/{projectId}/settings/legal/expose', async () => {
    const stub = stubRequestForPath(
      '/{version}/account/projects/{projectId}/settings/legal/expose',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/projects/{projectId}/settings/legal/expose',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['updateProjectExposeLegal']!;
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

  it('changeTeamMemberPassword: POST /{version}/account/team/member/password', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/team/member/password',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['changeTeamMemberPassword']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('createTeamMember: POST /{version}/account/team/member/create', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/team/member/create',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['createTeamMember']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('createAccountPolicy: POST /{version}/account/team/policies', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/team/policies',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['createAccountPolicy']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('createAccountRole: POST /{version}/account/team/roles', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/team/roles',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['createAccountRole']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteAccountPolicy: DELETE /{version}/account/team/policies/{Id}', async () => {
    const stub = stubRequestForPath('/{version}/account/team/policies/{Id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/team/policies/{Id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['deleteAccountPolicy']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteAccountRole: DELETE /{version}/account/team/roles/{Id}', async () => {
    const stub = stubRequestForPath('/{version}/account/team/roles/{Id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/team/roles/{Id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['deleteAccountRole']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
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

  it('getAccountPasswordPolicy: GET /{version}/account/team/password-policy', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/team/password-policy',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getAccountPasswordPolicy']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getAccountTeamPolicies: GET /{version}/account/team/policies', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/team/policies',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getAccountTeamPolicies']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getAccountTeamRoles: GET /{version}/account/team/roles', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/team/roles',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getAccountTeamRoles']!;
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

  it('updateAccountPolicy: PUT /{version}/account/team/policies', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/team/policies',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['updateAccountPolicy']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateAccountRole: PUT /{version}/account/team/roles', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/team/roles',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['updateAccountRole']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('accountHasPasskey: POST /{version}/account/userauth/has-passkey', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/userauth/has-passkey',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['accountHasPasskey']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('accountStartEmailVerification: POST /{version}/account/userauth/email/start-verification', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/userauth/email/start-verification',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['accountStartEmailVerification']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('accountConfirmEmailVerification: POST /{version}/account/userauth/email/confirm-verification', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/userauth/email/confirm-verification',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['accountConfirmEmailVerification']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('accountPasskeyRegistrationOptions: POST /{version}/account/userauth/passkey/registration-options', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/userauth/passkey/registration-options',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['accountPasskeyRegistrationOptions']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('accountVerifyPasskeyRegistration: POST /{version}/account/userauth/passkey/verify-registration', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/userauth/passkey/verify-registration',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['accountVerifyPasskeyRegistration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('accountPasskeyAuthenticationOptions: POST /{version}/account/userauth/passkey/authentication-options', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/userauth/passkey/authentication-options',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['accountPasskeyAuthenticationOptions']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('accountVerifyPasskeyAuthentication: POST /{version}/account/userauth/passkey/verify-authentication', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/userauth/passkey/verify-authentication',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['accountVerifyPasskeyAuthentication']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('listAccountPasskeys: GET /{version}/account/userauth/passkeys', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/userauth/passkeys',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['listAccountPasskeys']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('renameAccountPasskey: POST /{version}/account/userauth/passkeys/{CredentialId}/rename', async () => {
    const stub = stubRequestForPath('/{version}/account/userauth/passkeys/{CredentialId}/rename');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/userauth/passkeys/{CredentialId}/rename',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['renameAccountPasskey']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('revokeAccountPasskey: POST /{version}/account/userauth/passkeys/{CredentialId}/revoke', async () => {
    const stub = stubRequestForPath('/{version}/account/userauth/passkeys/{CredentialId}/revoke');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/userauth/passkeys/{CredentialId}/revoke',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['revokeAccountPasskey']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('accountPasskeyEnrollmentOptions: POST /{version}/account/userauth/passkey/enrollment-options', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/userauth/passkey/enrollment-options',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['accountPasskeyEnrollmentOptions']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('accountVerifyPasskeyEnrollment: POST /{version}/account/userauth/passkey/verify-enrollment', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/userauth/passkey/verify-enrollment',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['accountVerifyPasskeyEnrollment']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getLicenseDomainDnsStatus: GET /{version}/account/licensing/dns-status', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/licensing/dns-status',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getLicenseDomainDnsStatus']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
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

  it('getInstallationLicenseStatus: GET /{version}/account/licensing/status', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/licensing/status',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getInstallationLicenseStatus']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getAiTools: GET /{version}/account/ai/tools', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/ai/tools',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getAiTools']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('invokeAiTool: POST /{version}/account/ai/tools/{ToolName}', async () => {
    const stub = stubRequestForPath('/{version}/account/ai/tools/{ToolName}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/ai/tools/{ToolName}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['invokeAiTool']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
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

  it('uploadChatAttachment: POST /{version}/account/chat/attachments', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/chat/attachments',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['uploadChatAttachment']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('chatAvailability: GET /{version}/account/chat/availability', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/chat/availability',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['chatAvailability']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getChatMemory: GET /{version}/account/chat/memory', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/chat/memory',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getChatMemory']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('forgetChatMemory: DELETE /{version}/account/chat/memory/{NoteId}', async () => {
    const stub = stubRequestForPath('/{version}/account/chat/memory/{NoteId}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/chat/memory/{NoteId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['forgetChatMemory']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteChatSession: DELETE /{version}/account/chat/sessions/{SessionId}', async () => {
    const stub = stubRequestForPath('/{version}/account/chat/sessions/{SessionId}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/chat/sessions/{SessionId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['deleteChatSession']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('setChatSessionArchived: PATCH /{version}/account/chat/sessions/{SessionId}/archive', async () => {
    const stub = stubRequestForPath('/{version}/account/chat/sessions/{SessionId}/archive');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/chat/sessions/{SessionId}/archive',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['setChatSessionArchived']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('setChatSessionPinned: PATCH /{version}/account/chat/sessions/{SessionId}/pin', async () => {
    const stub = stubRequestForPath('/{version}/account/chat/sessions/{SessionId}/pin');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/chat/sessions/{SessionId}/pin',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['setChatSessionPinned']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('setChatSessionSharing: PATCH /{version}/account/chat/sessions/{SessionId}/sharing', async () => {
    const stub = stubRequestForPath('/{version}/account/chat/sessions/{SessionId}/sharing');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/chat/sessions/{SessionId}/sharing',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['setChatSessionSharing']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getChatSessions: GET /{version}/account/chat/sessions', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/chat/sessions',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getChatSessions']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getChatSessionEntries: GET /{version}/account/chat/sessions/{SessionId}/entries', async () => {
    const stub = stubRequestForPath('/{version}/account/chat/sessions/{SessionId}/entries');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/chat/sessions/{SessionId}/entries',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['getChatSessionEntries']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('setChatEntryFeedback: POST /{version}/account/chat/sessions/{SessionId}/entries/{EntryId}/feedback', async () => {
    const stub = stubRequestForPath(
      '/{version}/account/chat/sessions/{SessionId}/entries/{EntryId}/feedback',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/chat/sessions/{SessionId}/entries/{EntryId}/feedback',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['setChatEntryFeedback']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('answerChatQuestion: POST /{version}/account/chat/sessions/{SessionId}/questions/{EntryId}/answer', async () => {
    const stub = stubRequestForPath(
      '/{version}/account/chat/sessions/{SessionId}/questions/{EntryId}/answer',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/chat/sessions/{SessionId}/questions/{EntryId}/answer',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['answerChatQuestion']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('decideChatPlan: POST /{version}/account/chat/sessions/{SessionId}/plans/{EntryId}/decision', async () => {
    const stub = stubRequestForPath(
      '/{version}/account/chat/sessions/{SessionId}/plans/{EntryId}/decision',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/chat/sessions/{SessionId}/plans/{EntryId}/decision',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['decideChatPlan']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('stopChatRunStep: POST /{version}/account/chat/sessions/{SessionId}/steps/{EntryId}/stop', async () => {
    const stub = stubRequestForPath(
      '/{version}/account/chat/sessions/{SessionId}/steps/{EntryId}/stop',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/chat/sessions/{SessionId}/steps/{EntryId}/stop',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['stopChatRunStep']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('chatTurn: POST /{version}/account/chat/turn', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/chat/turn',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['chatTurn']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('mcp: POST /{version}/account/mcp', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.dev',
      path: '/{version}/account/mcp',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['account']!['mcp']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });
});
