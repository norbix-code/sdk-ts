import { describe, expect, it } from 'vitest';

import { Norbix } from '../src/index.js';

import { createMockFetch } from './_helpers.js';

describe('multi-region — nb-region header', () => {
  it('omits nb-region when no region is set', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({ projectId: 'p1', apiKey: 'k', fetch: mock.fetch });

    await norbix.hub.regions.list();

    expect(mock.lastCall?.headers.get('nb-region')).toBeNull();
  });

  it('sends nb-region from the client region', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({
      projectId: 'p1',
      apiKey: 'k',
      region: 'nb-eu-germany',
      fetch: mock.fetch,
    });

    await norbix.api.database.find({ collectionName: 'orders' });

    expect(mock.lastCall?.headers.get('nb-region')).toBe('nb-eu-germany');
  });

  it('resolves the region from the NORBIX_REGION environment variable', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix(
      { projectId: 'p1', apiKey: 'k', fetch: mock.fetch },
      { envSource: { NORBIX_PROJECT_ID: 'p1', NORBIX_REGION: 'nb-eu-germany' } },
    );

    await norbix.hub.regions.list();

    expect(norbix.getRegion()).toBe('nb-eu-germany');
    expect(mock.lastCall?.headers.get('nb-region')).toBe('nb-eu-germany');
  });

  it('per-call region overrides the client region', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({
      projectId: 'p1',
      apiKey: 'k',
      region: 'nb-eu-germany',
      fetch: mock.fetch,
    });

    await norbix.api.database.find({ collectionName: 'orders' }, { region: 'nb-us-east' });

    expect(mock.lastCall?.headers.get('nb-region')).toBe('nb-us-east');
  });

  it('setRegion switches the region at runtime; clearing removes the header', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({ projectId: 'p1', apiKey: 'k', fetch: mock.fetch });

    norbix.setRegion('nb-eu-germany');
    expect(norbix.getRegion()).toBe('nb-eu-germany');
    await norbix.hub.regions.list();
    expect(mock.lastCall?.headers.get('nb-region')).toBe('nb-eu-germany');

    norbix.setRegion(undefined);
    expect(norbix.getRegion()).toBeUndefined();
    await norbix.hub.regions.list();
    expect(mock.lastCall?.headers.get('nb-region')).toBeNull();
  });
});

describe('multi-region — regional base URL', () => {
  it('composes the regional URL from the SDK default base URLs', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({
      projectId: 'p1',
      apiKey: 'k',
      region: 'nb-eu-germany',
      fetch: mock.fetch,
    });

    await norbix.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.url.startsWith('https://nb-eu-germany.api.norbix.dev/')).toBe(true);

    await norbix.hub.regions.list();
    expect(mock.lastCall?.url.startsWith('https://nb-eu-germany.hub.norbix.dev/')).toBe(true);
  });

  it('never rewrites a user-supplied custom baseUrl (header still sent)', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({
      projectId: 'p1',
      apiKey: 'k',
      region: 'nb-eu-germany',
      baseUrl: { api: 'https://api.selfhosted.example', hub: 'https://hub.selfhosted.example' },
      fetch: mock.fetch,
    });

    await norbix.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.url.startsWith('https://api.selfhosted.example/')).toBe(true);
    expect(mock.lastCall?.headers.get('nb-region')).toBe('nb-eu-germany');

    await norbix.hub.regions.list();
    expect(mock.lastCall?.url.startsWith('https://hub.selfhosted.example/')).toBe(true);
  });

  it('per-call region overrides set the header only, never the URL', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({
      projectId: 'p1',
      apiKey: 'k',
      region: 'nb-eu-germany',
      fetch: mock.fetch,
    });

    await norbix.api.database.find({ collectionName: 'orders' }, { region: 'nb-us-east' });

    expect(mock.lastCall?.headers.get('nb-region')).toBe('nb-us-east');
    expect(mock.lastCall?.url.startsWith('https://nb-eu-germany.api.norbix.dev/')).toBe(true);
  });

  it('setRegion recomposes the default URL; clearing restores the default', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({ projectId: 'p1', apiKey: 'k', fetch: mock.fetch });

    norbix.setRegion('nb-eu-germany');
    await norbix.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.url.startsWith('https://nb-eu-germany.api.norbix.dev/')).toBe(true);

    norbix.setRegion('nb-us-east');
    await norbix.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.url.startsWith('https://nb-us-east.api.norbix.dev/')).toBe(true);

    norbix.setRegion(undefined);
    await norbix.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.url.startsWith('https://api.norbix.dev/')).toBe(true);
  });

  it('setRegion never rewrites a user-supplied custom baseUrl', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({
      projectId: 'p1',
      apiKey: 'k',
      baseUrl: { api: 'https://api.selfhosted.example' },
      fetch: mock.fetch,
    });

    norbix.setRegion('nb-eu-germany');
    await norbix.api.database.find({ collectionName: 'orders' });

    expect(mock.lastCall?.url.startsWith('https://api.selfhosted.example/')).toBe(true);
    // The hub URL was the SDK default, so it is still composed.
    await norbix.hub.regions.list();
    expect(mock.lastCall?.url.startsWith('https://nb-eu-germany.hub.norbix.dev/')).toBe(true);
  });
});

describe('multi-region — regions module routes', () => {
  it('list hits GET /{version}/account/regions', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({ projectId: 'p1', apiKey: 'k', fetch: mock.fetch });

    await norbix.hub.regions.list();

    expect(mock.lastCall?.method).toBe('GET');
    expect(mock.lastCall?.url).toContain('/account/regions');
  });

  it('updateProjectRegions hits PATCH .../projects/{projectId}/settings/regions', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({ projectId: 'p1', apiKey: 'k', fetch: mock.fetch });

    await norbix.hub.regions.updateProjectRegions({
      projectId: 'pr1',
      primaryRegion: 'nb-eu-germany',
      additionalRegions: ['nb-us-east'],
    });

    expect(mock.lastCall?.method).toBe('PATCH');
    expect(mock.lastCall?.url).toContain('/account/projects/pr1/settings/regions');
    expect(JSON.parse(mock.lastCall?.body ?? '{}')).toMatchObject({
      primaryRegion: 'nb-eu-germany',
      additionalRegions: ['nb-us-east'],
    });
  });
});
