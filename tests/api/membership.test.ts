import { describe, expect, it } from 'vitest';

import { MembershipModule } from '../../src/api/membership.js';
import { createMockFetch, expectedUrl, makeClient, stubRequestForPath } from '../_helpers.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Tests for api.membership (42 endpoints).
 *
 * Each method is asserted against:
 *   - presence on the module (smoke check)
 *   - issued HTTP verb + URL with version segment substituted and path
 *     tokens interpolated from a stubbed request
 *   - auth, project, and (when applicable) account headers
 *   - account-scope guard: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId
 */
describe('api.membership', () => {
  it('module exposes 42 method(s)', () => {
    const mock = createMockFetch();
    const mod = new MembershipModule({} as never);
    void mod; // silence unused — we only need the type
    // Sanity check the auto-mapped surface exists on the namespaced client.
    const { norbix } = makeClient();
    const ns = (norbix.api as unknown as Record<string, unknown>)['membership'] as Record<
      string,
      unknown
    >;
    expect(ns).toBeDefined();
    void mock;
    expect(typeof ns['blockUser']).toBe('function');
    expect(typeof ns['saveSystemUserWithPermissions']).toBe('function');
    expect(typeof ns['saveGuestUser']).toBe('function');
    expect(typeof ns['saveUserNameUser']).toBe('function');
    expect(typeof ns['saveEmailUser']).toBe('function');
    expect(typeof ns['savePhoneUser']).toBe('function');
    expect(typeof ns['savePhoneUserNameWithPermissions']).toBe('function');
    expect(typeof ns['saveEmailUserNameWithPermissions']).toBe('function');
    expect(typeof ns['saveUserNameWithPermissions']).toBe('function');
    expect(typeof ns['deleteUser']).toBe('function');
    expect(typeof ns['getUser']).toBe('function');
    expect(typeof ns['getUsers']).toBe('function');
    expect(typeof ns['getUserPreferences']).toBe('function');
    expect(typeof ns['grantContactConsent']).toBe('function');
    expect(typeof ns['inviteUser']).toBe('function');
    expect(typeof ns['linkIdentity']).toBe('function');
    expect(typeof ns['mapAuthToUser']).toBe('function');
    expect(typeof ns['assignRolePermissions']).toBe('function');
    expect(typeof ns['setContactRoles']).toBe('function');
    expect(typeof ns['setContactTagSubscription']).toBe('function');
    expect(typeof ns['unblockUser']).toBe('function');
    expect(typeof ns['unsubscribeContact']).toBe('function');
    expect(typeof ns['updateUser']).toBe('function');
    expect(typeof ns['updateUserPreferences']).toBe('function');
    expect(typeof ns['passkeyAuthenticationOptions']).toBe('function');
    expect(typeof ns['verifyPasskeyAuthentication']).toBe('function');
    expect(typeof ns['listPasskeys']).toBe('function');
    expect(typeof ns['renamePasskey']).toBe('function');
    expect(typeof ns['revokePasskey']).toBe('function');
    expect(typeof ns['useRecoveryCode']).toBe('function');
    expect(typeof ns['requestMagicLink']).toBe('function');
    expect(typeof ns['consumeMagicLink']).toBe('function');
    expect(typeof ns['hasPasskey']).toBe('function');
    expect(typeof ns['startEmailVerification']).toBe('function');
    expect(typeof ns['confirmEmailVerification']).toBe('function');
    expect(typeof ns['passkeyRegistrationOptions']).toBe('function');
    expect(typeof ns['verifyPasskeyRegistration']).toBe('function');
    expect(typeof ns['refreshPasskeyToken']).toBe('function');
    expect(typeof ns['passkeyLogout']).toBe('function');
    expect(typeof ns['changePassword']).toBe('function');
    expect(typeof ns['requestPasswordReset']).toBe('function');
    expect(typeof ns['confirmPasswordReset']).toBe('function');
  });

  it('blockUser: PATCH /{version}/membership/auth/block', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/auth/block',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['blockUser']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('saveSystemUserWithPermissions: POST /{version}/membership/auth/register/service', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/auth/register/service',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['saveSystemUserWithPermissions']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('saveGuestUser: POST /{version}/membership/auth/register/guest', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/auth/register/guest',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['saveGuestUser']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('saveUserNameUser: POST /{version}/membership/auth/register/user-name', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/auth/register/user-name',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['saveUserNameUser']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('saveEmailUser: POST /{version}/membership/auth/register/email', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/auth/register/email',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['saveEmailUser']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('savePhoneUser: POST /{version}/membership/auth/register/phone', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/auth/register/phone',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['savePhoneUser']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('savePhoneUserNameWithPermissions: POST /{version}/membership/auth/register/phone-with-permissions', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/auth/register/phone-with-permissions',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['savePhoneUserNameWithPermissions']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('saveEmailUserNameWithPermissions: POST /{version}/membership/auth/register/email-with-permissions', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/auth/register/email-with-permissions',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['saveEmailUserNameWithPermissions']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('saveUserNameWithPermissions: POST /{version}/membership/auth/register/user-name-with-permissions', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/auth/register/user-name-with-permissions',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['saveUserNameWithPermissions']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('deleteUser: DELETE /{version}/membership/auth', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/auth',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['deleteUser']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getUser: GET /{version}/membership/auth/{id}', async () => {
    const stub = stubRequestForPath('/{version}/membership/auth/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/auth/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['getUser']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getUsers: GET /{version}/membership/auth', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/auth',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['getUsers']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('getUserPreferences: GET /{version}/membership/auth/{id}/preferences', async () => {
    const stub = stubRequestForPath('/{version}/membership/auth/{id}/preferences');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/auth/{id}/preferences',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['getUserPreferences']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('grantContactConsent: POST /{version}/membership/users/{contactId}/marketing-state/{channel}/consent', async () => {
    const stub = stubRequestForPath(
      '/{version}/membership/users/{contactId}/marketing-state/{channel}/consent',
    );
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/users/{contactId}/marketing-state/{channel}/consent',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['grantContactConsent']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('inviteUser: POST /{version}/membership/auth/invite', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/auth/invite',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['inviteUser']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('linkIdentity: POST /{version}/membership/auth/{userId}/link-identity', async () => {
    const stub = stubRequestForPath('/{version}/membership/auth/{userId}/link-identity');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/auth/{userId}/link-identity',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['linkIdentity']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('mapAuthToUser: POST /{version}/membership/users/{userId}/map-auth', async () => {
    const stub = stubRequestForPath('/{version}/membership/users/{userId}/map-auth');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/users/{userId}/map-auth',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['mapAuthToUser']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('assignRolePermissions: PUT /{version}/membership/auth/assign-roles', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/auth/assign-roles',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['assignRolePermissions']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('setContactRoles: PUT /{version}/membership/users/{userId}/roles', async () => {
    const stub = stubRequestForPath('/{version}/membership/users/{userId}/roles');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/users/{userId}/roles',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['setContactRoles']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('setContactTagSubscription: PUT /{version}/membership/users/{contactId}/marketing-state/{commChannel}/{channel}/tags/{tag}', async () => {
    const stub = stubRequestForPath(
      '/{version}/membership/users/{contactId}/marketing-state/{commChannel}/{channel}/tags/{tag}',
    );
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/users/{contactId}/marketing-state/{commChannel}/{channel}/tags/{tag}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['setContactTagSubscription']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('unblockUser: PATCH /{version}/membership/auth/unblock', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/auth/unblock',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['unblockUser']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('unsubscribeContact: POST /{version}/membership/users/{contactId}/marketing-state/{channel}/unsubscribe', async () => {
    const stub = stubRequestForPath(
      '/{version}/membership/users/{contactId}/marketing-state/{channel}/unsubscribe',
    );
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/users/{contactId}/marketing-state/{channel}/unsubscribe',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['unsubscribeContact']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateUser: PUT /{version}/membership/auth', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/auth',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['updateUser']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('updateUserPreferences: PUT /{version}/membership/auth/{id}/preferences', async () => {
    const stub = stubRequestForPath('/{version}/membership/auth/{id}/preferences');
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/auth/{id}/preferences',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['updateUserPreferences']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('passkeyAuthenticationOptions: POST /{version}/membership/userauth/passkey/authentication-options', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/userauth/passkey/authentication-options',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['passkeyAuthenticationOptions']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('verifyPasskeyAuthentication: POST /{version}/membership/userauth/passkey/verify-authentication', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/userauth/passkey/verify-authentication',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['verifyPasskeyAuthentication']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('listPasskeys: GET /{version}/membership/userauth/passkeys', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/userauth/passkeys',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['listPasskeys']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('renamePasskey: POST /{version}/membership/userauth/passkeys/{CredentialId}/rename', async () => {
    const stub = stubRequestForPath(
      '/{version}/membership/userauth/passkeys/{CredentialId}/rename',
    );
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/userauth/passkeys/{CredentialId}/rename',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['renamePasskey']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('revokePasskey: POST /{version}/membership/userauth/passkeys/{CredentialId}/revoke', async () => {
    const stub = stubRequestForPath(
      '/{version}/membership/userauth/passkeys/{CredentialId}/revoke',
    );
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/userauth/passkeys/{CredentialId}/revoke',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['revokePasskey']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('useRecoveryCode: POST /{version}/membership/userauth/recovery/use-code', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/userauth/recovery/use-code',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['useRecoveryCode']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('requestMagicLink: POST /{version}/membership/userauth/recovery/magic-link/request', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/userauth/recovery/magic-link/request',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['requestMagicLink']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('consumeMagicLink: POST /{version}/membership/userauth/recovery/magic-link/consume', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/userauth/recovery/magic-link/consume',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['consumeMagicLink']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('hasPasskey: POST /{version}/membership/userauth/has-passkey', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/userauth/has-passkey',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['hasPasskey']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('startEmailVerification: POST /{version}/membership/userauth/email/start-verification', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/userauth/email/start-verification',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['startEmailVerification']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('confirmEmailVerification: POST /{version}/membership/userauth/email/confirm-verification', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/userauth/email/confirm-verification',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['confirmEmailVerification']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('passkeyRegistrationOptions: POST /{version}/membership/userauth/passkey/registration-options', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/userauth/passkey/registration-options',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['passkeyRegistrationOptions']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('verifyPasskeyRegistration: POST /{version}/membership/userauth/passkey/verify-registration', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/userauth/passkey/verify-registration',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['verifyPasskeyRegistration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('refreshPasskeyToken: POST /{version}/membership/userauth/token/refresh', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/userauth/token/refresh',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['refreshPasskeyToken']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('passkeyLogout: POST /{version}/membership/userauth/logout', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/userauth/logout',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['passkeyLogout']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('changePassword: POST /{version}/membership/userauth/password/change', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/userauth/password/change',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['changePassword']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('requestPasswordReset: POST /{version}/membership/userauth/password/reset/request', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/userauth/password/reset/request',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['requestPasswordReset']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });

  it('confirmPasswordReset: POST /{version}/membership/userauth/password/reset/confirm', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://api.norbix.dev',
      path: '/{version}/membership/userauth/password/reset/confirm',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.api as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['membership']!['confirmPasswordReset']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });
});
