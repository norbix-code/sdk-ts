import { describe, expect, it } from 'vitest';

import { CodeModule } from '../../src/hub/code.js';
import { createMockFetch, expectedUrl, makeClient, stubRequestForPath } from '../_helpers.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Tests for hub.code (68 endpoints).
 *
 * Each method is asserted against:
 *   - presence on the module (smoke check)
 *   - issued HTTP verb + URL with version segment substituted and path
 *     tokens interpolated from a stubbed request
 *   - auth, project, and (when applicable) account headers
 *   - account-scope guard: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId
 */
describe('hub.code', () => {
  it('module exposes 68 method(s)', () => {
    const mock = createMockFetch();
    const mod = new CodeModule({} as never);
    void mod; // silence unused — we only need the type
    // Sanity check the auto-mapped surface exists on the namespaced client.
    const { norbix } = makeClient();
    const ns = (norbix.hub as unknown as Record<string, unknown>)['code'] as Record<
      string,
      unknown
    >;
    expect(ns).toBeDefined();
    void mock;
    expect(typeof ns['enableCode']).toBe('function');
    expect(typeof ns['disableCode']).toBe('function');
    expect(typeof ns['getCodeIntegrations']).toBe('function');
    expect(typeof ns['getCodeIntegration']).toBe('function');
    expect(typeof ns['saveCodeIntegration']).toBe('function');
    expect(typeof ns['testCodeIntegration']).toBe('function');
    expect(typeof ns['confirmCodeIntegrationHumanDelivery']).toBe('function');
    expect(typeof ns['deleteCodeIntegration']).toBe('function');
    expect(typeof ns['enableCodeIntegration']).toBe('function');
    expect(typeof ns['disableCodeIntegration']).toBe('function');
    expect(typeof ns['getMarketplaceListings']).toBe('function');
    expect(typeof ns['getMarketplaceListingFunctionTokens']).toBe('function');
    expect(typeof ns['getMarketplaceIntegrations']).toBe('function');
    expect(typeof ns['getMarketplaceIntegration']).toBe('function');
    expect(typeof ns['saveMarketplaceIntegration']).toBe('function');
    expect(typeof ns['deleteMarketplaceIntegration']).toBe('function');
    expect(typeof ns['enableMarketplaceIntegration']).toBe('function');
    expect(typeof ns['disableMarketplaceIntegration']).toBe('function');
    expect(typeof ns['getMarketplaceFunctions']).toBe('function');
    expect(typeof ns['getMarketplaceFunction']).toBe('function');
    expect(typeof ns['saveMarketplaceFunction']).toBe('function');
    expect(typeof ns['deleteMarketplaceFunction']).toBe('function');
    expect(typeof ns['enableMarketplaceFunction']).toBe('function');
    expect(typeof ns['disableMarketplaceFunction']).toBe('function');
    expect(typeof ns['getMarketplaceFunctionTokens']).toBe('function');
    expect(typeof ns['invokeMarketplaceFunction']).toBe('function');
    expect(typeof ns['getMarketplaceListing']).toBe('function');
    expect(typeof ns['testMarketplaceIntegration']).toBe('function');
    expect(typeof ns['saveCodeWorkflow']).toBe('function');
    expect(typeof ns['publishCodeWorkflow']).toBe('function');
    expect(typeof ns['getCodeWorkflowDraft']).toBe('function');
    expect(typeof ns['discardCodeWorkflowDraft']).toBe('function');
    expect(typeof ns['getCodeWorkflowVersions']).toBe('function');
    expect(typeof ns['getCodeWorkflowVersionDiff']).toBe('function');
    expect(typeof ns['validateCodeWorkflow']).toBe('function');
    expect(typeof ns['getCodeWorkflows']).toBe('function');
    expect(typeof ns['getCodeWorkflow']).toBe('function');
    expect(typeof ns['deleteCodeWorkflow']).toBe('function');
    expect(typeof ns['enableCodeWorkflow']).toBe('function');
    expect(typeof ns['disableCodeWorkflow']).toBe('function');
    expect(typeof ns['getCodeWorkflowSchema']).toBe('function');
    expect(typeof ns['enableCodeWorkflows']).toBe('function');
    expect(typeof ns['disableCodeWorkflows']).toBe('function');
    expect(typeof ns['invokeCodeWorkflow']).toBe('function');
    expect(typeof ns['getCodeWorkflowRuns']).toBe('function');
    expect(typeof ns['getCodeWorkflowWaitingRuns']).toBe('function');
    expect(typeof ns['getCodeWorkflowRun']).toBe('function');
    expect(typeof ns['getCodeWorkflowRunLogs']).toBe('function');
    expect(typeof ns['resumeCodeWorkflowRun']).toBe('function');
    expect(typeof ns['resumeCodeWorkflowRunByKey']).toBe('function');
    expect(typeof ns['retryCodeWorkflowRunStep']).toBe('function');
    expect(typeof ns['cancelCodeWorkflowRun']).toBe('function');
    expect(typeof ns['getMarketplaceIntegrationAccess']).toBe('function');
    expect(typeof ns['setMarketplaceIntegrationRoleAccess']).toBe('function');
    expect(typeof ns['saveMarketplaceIntegrationCustomAccess']).toBe('function');
    expect(typeof ns['getMarketplaceIntegrationTools']).toBe('function');
    expect(typeof ns['startMarketplaceIntegrationSignIn']).toBe('function');
    expect(typeof ns['signOutMarketplaceIntegration']).toBe('function');
    expect(typeof ns['replaceMarketplaceIntegrationSecrets']).toBe('function');
    expect(typeof ns['revealMarketplaceIntegrationSecrets']).toBe('function');
    expect(typeof ns['setMarketplaceIntegrationTokenMappings']).toBe('function');
    expect(typeof ns['getMarketplaceFunctionCatalog']).toBe('function');
    expect(typeof ns['getMarketplaceFunctionRuns']).toBe('function');
    expect(typeof ns['getCodeFunctions']).toBe('function');
    expect(typeof ns['getCodeFunctionEventSample']).toBe('function');
    expect(typeof ns['getCodeFunctionQualifiers']).toBe('function');
    expect(typeof ns['getCodeFunctionRuns']).toBe('function');
    expect(typeof ns['invokeCodeFunction']).toBe('function');
  });

  it('enableCode: PUT /{version}/code/enable', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/enable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['enableCode']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('disableCode: PUT /{version}/code/disable', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/disable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['disableCode']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getCodeIntegrations: GET /{version}/code/integrations', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/integrations',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getCodeIntegrations']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getCodeIntegration: GET /{version}/code/integrations/{id}', async () => {
    const stub = stubRequestForPath('/{version}/code/integrations/{id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/integrations/{id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getCodeIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('saveCodeIntegration: POST /{version}/code/integrations', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/integrations',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['saveCodeIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('testCodeIntegration: POST /{version}/code/integrations/test', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/integrations/test',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['testCodeIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('confirmCodeIntegrationHumanDelivery: POST /{version}/code/integrations/confirm-human-delivery', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/integrations/confirm-human-delivery',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['confirmCodeIntegrationHumanDelivery']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('deleteCodeIntegration: DELETE /{version}/code/integrations/{Id}', async () => {
    const stub = stubRequestForPath('/{version}/code/integrations/{Id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/integrations/{Id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['deleteCodeIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('enableCodeIntegration: PUT /{version}/code/integrations/{Id}/enable', async () => {
    const stub = stubRequestForPath('/{version}/code/integrations/{Id}/enable');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/integrations/{Id}/enable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['enableCodeIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('disableCodeIntegration: PUT /{version}/code/integrations/{Id}/disable', async () => {
    const stub = stubRequestForPath('/{version}/code/integrations/{Id}/disable');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/integrations/{Id}/disable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['disableCodeIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getMarketplaceListings: GET /{version}/code/marketplace/listings', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/listings',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getMarketplaceListings']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getMarketplaceListingFunctionTokens: GET /{version}/code/marketplace/listings/{ListingViewId}/functions/{FunctionKey}/tokens', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/listings/{ListingViewId}/functions/{FunctionKey}/tokens',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/listings/{ListingViewId}/functions/{FunctionKey}/tokens',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getMarketplaceListingFunctionTokens']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getMarketplaceIntegrations: GET /{version}/code/marketplace/integrations', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getMarketplaceIntegrations']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getMarketplaceIntegration: GET /{version}/code/marketplace/integrations/{IntegrationViewId}', async () => {
    const stub = stubRequestForPath('/{version}/code/marketplace/integrations/{IntegrationViewId}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getMarketplaceIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('saveMarketplaceIntegration: POST /{version}/code/marketplace/integrations', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['saveMarketplaceIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('deleteMarketplaceIntegration: DELETE /{version}/code/marketplace/integrations/{IntegrationViewId}', async () => {
    const stub = stubRequestForPath('/{version}/code/marketplace/integrations/{IntegrationViewId}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['deleteMarketplaceIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('enableMarketplaceIntegration: POST /{version}/code/marketplace/integrations/{IntegrationViewId}/enable', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/integrations/{IntegrationViewId}/enable',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/enable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['enableMarketplaceIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('disableMarketplaceIntegration: POST /{version}/code/marketplace/integrations/{IntegrationViewId}/disable', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/integrations/{IntegrationViewId}/disable',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/disable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['disableMarketplaceIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getMarketplaceFunctions: GET /{version}/code/marketplace/integrations/{IntegrationViewId}/functions', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getMarketplaceFunctions']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getMarketplaceFunction: GET /{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getMarketplaceFunction']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('saveMarketplaceFunction: POST /{version}/code/marketplace/integrations/{IntegrationViewId}/functions', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['saveMarketplaceFunction']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('deleteMarketplaceFunction: DELETE /{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['deleteMarketplaceFunction']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('enableMarketplaceFunction: POST /{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/enable', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/enable',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/enable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['enableMarketplaceFunction']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('disableMarketplaceFunction: POST /{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/disable', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/disable',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/disable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['disableMarketplaceFunction']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getMarketplaceFunctionTokens: GET /{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/tokens', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/tokens',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/tokens',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getMarketplaceFunctionTokens']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('invokeMarketplaceFunction: POST /{version}/code/marketplace/functions/{FunctionViewId}/invoke', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/functions/{FunctionViewId}/invoke',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/functions/{FunctionViewId}/invoke',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['invokeMarketplaceFunction']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getMarketplaceListing: GET /{version}/code/marketplace/listings/{ListingViewId}', async () => {
    const stub = stubRequestForPath('/{version}/code/marketplace/listings/{ListingViewId}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/listings/{ListingViewId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getMarketplaceListing']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('testMarketplaceIntegration: POST /{version}/code/marketplace/integrations/{IntegrationViewId}/test', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/integrations/{IntegrationViewId}/test',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/test',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['testMarketplaceIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('saveCodeWorkflow: PUT /{version}/code/workflows', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['saveCodeWorkflow']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('publishCodeWorkflow: POST /{version}/code/workflows/{Id}/publish', async () => {
    const stub = stubRequestForPath('/{version}/code/workflows/{Id}/publish');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/{Id}/publish',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['publishCodeWorkflow']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getCodeWorkflowDraft: GET /{version}/code/workflows/{Id}/draft', async () => {
    const stub = stubRequestForPath('/{version}/code/workflows/{Id}/draft');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/{Id}/draft',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getCodeWorkflowDraft']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('discardCodeWorkflowDraft: DELETE /{version}/code/workflows/{Id}/draft', async () => {
    const stub = stubRequestForPath('/{version}/code/workflows/{Id}/draft');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/{Id}/draft',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['discardCodeWorkflowDraft']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getCodeWorkflowVersions: GET /{version}/code/workflows/{Id}/versions', async () => {
    const stub = stubRequestForPath('/{version}/code/workflows/{Id}/versions');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/{Id}/versions',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getCodeWorkflowVersions']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getCodeWorkflowVersionDiff: GET /{version}/code/workflows/{Id}/versions/diff', async () => {
    const stub = stubRequestForPath('/{version}/code/workflows/{Id}/versions/diff');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/{Id}/versions/diff',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getCodeWorkflowVersionDiff']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('validateCodeWorkflow: POST /{version}/code/workflows/validate', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/validate',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['validateCodeWorkflow']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getCodeWorkflows: GET /{version}/code/workflows', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getCodeWorkflows']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getCodeWorkflow: GET /{version}/code/workflows/{Id}', async () => {
    const stub = stubRequestForPath('/{version}/code/workflows/{Id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/{Id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getCodeWorkflow']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('deleteCodeWorkflow: DELETE /{version}/code/workflows/{Id}', async () => {
    const stub = stubRequestForPath('/{version}/code/workflows/{Id}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/{Id}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['deleteCodeWorkflow']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('enableCodeWorkflow: PUT /{version}/code/workflows/{Id}/enable', async () => {
    const stub = stubRequestForPath('/{version}/code/workflows/{Id}/enable');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/{Id}/enable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['enableCodeWorkflow']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('disableCodeWorkflow: PUT /{version}/code/workflows/{Id}/disable', async () => {
    const stub = stubRequestForPath('/{version}/code/workflows/{Id}/disable');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/{Id}/disable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['disableCodeWorkflow']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getCodeWorkflowSchema: GET /{version}/code/workflows/schema', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/schema',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getCodeWorkflowSchema']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('enableCodeWorkflows: PUT /{version}/code/workflows/enable', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/enable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['enableCodeWorkflows']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('disableCodeWorkflows: PUT /{version}/code/workflows/disable', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/disable',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['disableCodeWorkflows']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('invokeCodeWorkflow: POST /{version}/code/workflows/{Id}/invoke', async () => {
    const stub = stubRequestForPath('/{version}/code/workflows/{Id}/invoke');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/{Id}/invoke',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['invokeCodeWorkflow']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getCodeWorkflowRuns: GET /{version}/code/workflows/{Id}/runs', async () => {
    const stub = stubRequestForPath('/{version}/code/workflows/{Id}/runs');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/{Id}/runs',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getCodeWorkflowRuns']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getCodeWorkflowWaitingRuns: GET /{version}/code/workflows/runs', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/runs',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getCodeWorkflowWaitingRuns']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getCodeWorkflowRun: GET /{version}/code/workflows/runs/{RunId}', async () => {
    const stub = stubRequestForPath('/{version}/code/workflows/runs/{RunId}');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/runs/{RunId}',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getCodeWorkflowRun']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getCodeWorkflowRunLogs: GET /{version}/code/workflows/runs/{RunId}/logs', async () => {
    const stub = stubRequestForPath('/{version}/code/workflows/runs/{RunId}/logs');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/runs/{RunId}/logs',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getCodeWorkflowRunLogs']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('resumeCodeWorkflowRun: POST /{version}/code/workflows/runs/{RunId}/resume', async () => {
    const stub = stubRequestForPath('/{version}/code/workflows/runs/{RunId}/resume');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/runs/{RunId}/resume',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['resumeCodeWorkflowRun']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('resumeCodeWorkflowRunByKey: POST /{version}/code/workflows/{Id}/resume', async () => {
    const stub = stubRequestForPath('/{version}/code/workflows/{Id}/resume');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/{Id}/resume',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['resumeCodeWorkflowRunByKey']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('retryCodeWorkflowRunStep: POST /{version}/code/workflows/runs/{RunId}/retry', async () => {
    const stub = stubRequestForPath('/{version}/code/workflows/runs/{RunId}/retry');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/runs/{RunId}/retry',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['retryCodeWorkflowRunStep']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('cancelCodeWorkflowRun: POST /{version}/code/workflows/runs/{RunId}/cancel', async () => {
    const stub = stubRequestForPath('/{version}/code/workflows/runs/{RunId}/cancel');
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/workflows/runs/{RunId}/cancel',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['cancelCodeWorkflowRun']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getMarketplaceIntegrationAccess: GET /{version}/code/marketplace/integrations/{IntegrationViewId}/access', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/integrations/{IntegrationViewId}/access',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/access',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getMarketplaceIntegrationAccess']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('setMarketplaceIntegrationRoleAccess: PUT /{version}/code/marketplace/integrations/{IntegrationViewId}/access/roles', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/integrations/{IntegrationViewId}/access/roles',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/access/roles',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['setMarketplaceIntegrationRoleAccess']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('saveMarketplaceIntegrationCustomAccess: POST /{version}/code/marketplace/integrations/{IntegrationViewId}/access/roles/custom', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/integrations/{IntegrationViewId}/access/roles/custom',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/access/roles/custom',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['saveMarketplaceIntegrationCustomAccess']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getMarketplaceIntegrationTools: GET /{version}/code/marketplace/integrations/{IntegrationViewId}/tools', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/integrations/{IntegrationViewId}/tools',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/tools',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getMarketplaceIntegrationTools']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('startMarketplaceIntegrationSignIn: POST /{version}/code/marketplace/integrations/{IntegrationViewId}/oauth/start', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/integrations/{IntegrationViewId}/oauth/start',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/oauth/start',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['startMarketplaceIntegrationSignIn']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('signOutMarketplaceIntegration: POST /{version}/code/marketplace/integrations/{IntegrationViewId}/oauth/sign-out', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/integrations/{IntegrationViewId}/oauth/sign-out',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/oauth/sign-out',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['signOutMarketplaceIntegration']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('replaceMarketplaceIntegrationSecrets: PUT /{version}/code/marketplace/integrations/{IntegrationViewId}/secrets', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/integrations/{IntegrationViewId}/secrets',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/secrets',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['replaceMarketplaceIntegrationSecrets']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('revealMarketplaceIntegrationSecrets: POST /{version}/code/marketplace/integrations/{IntegrationViewId}/secrets/reveal', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/integrations/{IntegrationViewId}/secrets/reveal',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/secrets/reveal',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['revealMarketplaceIntegrationSecrets']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('setMarketplaceIntegrationTokenMappings: PUT /{version}/code/marketplace/integrations/{IntegrationViewId}/token-mappings', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/integrations/{IntegrationViewId}/token-mappings',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/token-mappings',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['setMarketplaceIntegrationTokenMappings']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('PUT');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getMarketplaceFunctionCatalog: GET /{version}/code/marketplace/integrations/{IntegrationViewId}/catalog', async () => {
    const stub = stubRequestForPath(
      '/{version}/code/marketplace/integrations/{IntegrationViewId}/catalog',
    );
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/integrations/{IntegrationViewId}/catalog',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getMarketplaceFunctionCatalog']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getMarketplaceFunctionRuns: GET /{version}/code/marketplace/functions/runs', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/marketplace/functions/runs',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getMarketplaceFunctionRuns']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getCodeFunctions: GET /{version}/code/functions', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/functions',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getCodeFunctions']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getCodeFunctionEventSample: GET /{version}/code/functions/event-sample', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/functions/event-sample',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getCodeFunctionEventSample']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getCodeFunctionQualifiers: GET /{version}/code/functions/qualifiers', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/functions/qualifiers',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getCodeFunctionQualifiers']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('getCodeFunctionRuns: GET /{version}/code/functions/runs', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/functions/runs',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['getCodeFunctionRuns']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });

  it('invokeCodeFunction: POST /{version}/code/functions/invoke', async () => {
    const stub = {};
    const expected = expectedUrl({
      baseUrl: 'https://hub.norbix.io',
      path: '/{version}/code/functions/invoke',
      version: 'v2',
      stub,
    });
    const { norbix, mock } = makeClient({});
    const fn = (
      norbix.hub as unknown as Record<
        string,
        Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>
      >
    )['code']!['invokeCodeFunction']!;
    await fn(stub);
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
  });
});
