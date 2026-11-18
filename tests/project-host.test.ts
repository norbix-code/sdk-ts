import { describe, expect, it } from 'vitest';

import { Norbix, projectHostLabel } from '../src/index.js';

import { createMockFetch } from './_helpers.js';

// The first three labels are the server's own values (project DTO `hostLabel`,
// a project's DNS record), not this decoder's — devops docs/tasks/clients-project-host.md.
const VECTORS: Array<[string, string]> = [
  ['pr_5XvmrTA6JVggZdmEE5bGdm', 'pr-022c4aca9f9e4df787ab0a20c83c44b6'],
  ['pr_3vlTD52e9VK8lXzdv0SmWG', 'pr-184336d00e2141c3be5138e8dcf52e81'],
  ['pr_89W9MJvt0StwxsEvyohlJ', 'pr-60d101b1938747659947d507192a5204'],
  ['pr_xCeyU0VjHvjVi5MpOYSGY', 'pr-6b8b6182960c416098d153d3eb0e601f'],
];
const NOT_A_PROJECT_ID = [
  'p1',
  'proj_123',
  'pr_',
  'pr_!!!',
  'pr_zzzzzzzzzzzzzzzzzzzzzzz',
  'acc_oOAAIfAzbauZ6f0NHEHjP',
  '',
];

const VIRGINIA = 'pr_5XvmrTA6JVggZdmEE5bGdm';
const VIRGINIA_HOST = 'https://pr-022c4aca9f9e4df787ab0a20c83c44b6.api.norbix.ai/';
const GERMANY = 'pr_3vlTD52e9VK8lXzdv0SmWG';
const GERMANY_HOST = 'https://pr-184336d00e2141c3be5138e8dcf52e81.api.norbix.ai/';

describe('project host — the label', () => {
  it.each(VECTORS)('%s → %s', (projectId, label) => {
    expect(projectHostLabel(projectId)).toBe(label);
  });

  it.each(NOT_A_PROJECT_ID)('"%s" is not a project id: no label, no throw', (value) => {
    expect(projectHostLabel(value)).toBeUndefined();
  });

  it('undefined and null give no label', () => {
    expect(projectHostLabel(undefined)).toBeUndefined();
    expect(projectHostLabel(null)).toBeUndefined();
  });
});

describe('project host — default base URL', () => {
  it('API calls go to the project host and still send norbix-project-id', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({ projectId: VIRGINIA, apiKey: 'k', fetch: mock.fetch });

    await norbix.api.database.find({ collectionName: 'orders' });

    expect(mock.lastCall?.url.startsWith(VIRGINIA_HOST)).toBe(true);
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe(VIRGINIA);
  });

  it('Hub calls stay on the shared host', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({ projectId: VIRGINIA, apiKey: 'k', fetch: mock.fetch });

    await norbix.hub.regions.list();

    expect(mock.lastCall?.url.startsWith('https://hub.norbix.ai/')).toBe(true);
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe(VIRGINIA);
  });

  it('the project id from NORBIX_PROJECT_ID gives the project host too', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix(
      { apiKey: 'k', fetch: mock.fetch },
      { envSource: { NORBIX_PROJECT_ID: GERMANY } },
    );

    await norbix.api.database.find({ collectionName: 'orders' });

    expect(mock.lastCall?.url.startsWith(GERMANY_HOST)).toBe(true);
  });

  it('login (/auth) goes to the project host', async () => {
    const mock = createMockFetch({ body: { bearerToken: 't' } });
    const norbix = new Norbix({ projectId: VIRGINIA, fetch: mock.fetch });

    await norbix.login({ userName: 'alice', password: 'x' });

    expect(mock.lastCall?.url).toBe(`${VIRGINIA_HOST}auth`);
  });

  it('a project id that is not a Norbix id keeps the shared host', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({ projectId: 'p1', apiKey: 'k', fetch: mock.fetch });

    await norbix.api.database.find({ collectionName: 'orders' });

    expect(mock.lastCall?.url.startsWith('https://api.norbix.ai/')).toBe(true);
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('p1');
  });

  it('setScope moves the calls to the new project: host and header agree', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({ projectId: VIRGINIA, apiKey: 'k', fetch: mock.fetch });

    norbix.setScope({ projectId: GERMANY });
    await norbix.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.url.startsWith(GERMANY_HOST)).toBe(true);
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe(GERMANY);

    norbix.setScope({ projectId: 'p1' });
    await norbix.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.url.startsWith('https://api.norbix.ai/')).toBe(true);
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('p1');
  });

  it('the AI chat stream is opened on the project host', () => {
    const norbix = new Norbix({ projectId: VIRGINIA, apiKey: 'k', fetch: createMockFetch().fetch });
    expect(norbix.getConfig().baseUrl.api).toBe(VIRGINIA_HOST.slice(0, -1));
  });

  it('the social sign-in link stays on the shared host (the callback comes back there)', () => {
    const norbix = new Norbix({ projectId: VIRGINIA, apiKey: 'k', fetch: createMockFetch().fetch });

    const url = norbix.api.auth.socialSignInUrl('google');

    expect(url.startsWith('https://api.norbix.ai/v3/membership/auth/social/google?')).toBe(true);
    expect(url).toContain(`projectId=${VIRGINIA}`);
  });
});

describe('project host — with a region', () => {
  it('API: the project host with no region label; Hub: the regional host; nb-region still sent', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({
      projectId: GERMANY,
      apiKey: 'k',
      region: 'nb-eu-germany',
      fetch: mock.fetch,
    });

    await norbix.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.url.startsWith(GERMANY_HOST)).toBe(true);
    expect(mock.lastCall?.headers.get('nb-region')).toBe('nb-eu-germany');

    await norbix.hub.regions.list();
    expect(mock.lastCall?.url.startsWith('https://nb-eu-germany.hub.norbix.ai/')).toBe(true);
  });

  it('setRegion changes the Hub host only', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({ projectId: GERMANY, apiKey: 'k', fetch: mock.fetch });

    norbix.setRegion('nb-eu-germany');
    await norbix.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.url.startsWith(GERMANY_HOST)).toBe(true);
    await norbix.hub.regions.list();
    expect(mock.lastCall?.url.startsWith('https://nb-eu-germany.hub.norbix.ai/')).toBe(true);

    norbix.setRegion(undefined);
    await norbix.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.url.startsWith(GERMANY_HOST)).toBe(true);
    await norbix.hub.regions.list();
    expect(mock.lastCall?.url.startsWith('https://hub.norbix.ai/')).toBe(true);
  });

  it('the social sign-in link uses the regional shared host', () => {
    const norbix = new Norbix({
      projectId: GERMANY,
      apiKey: 'k',
      region: 'nb-eu-germany',
      fetch: createMockFetch().fetch,
    });
    expect(
      norbix.api.auth.socialSignInUrl('google').startsWith('https://nb-eu-germany.api.norbix.ai/'),
    ).toBe(true);
  });
});

describe('project host — another address is used as given', () => {
  it('baseUrl option (staging)', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({
      projectId: VIRGINIA,
      apiKey: 'k',
      region: 'nb-eu-germany',
      baseUrl: { api: 'https://api.norbix.io', hub: 'https://hub.norbix.io' },
      fetch: mock.fetch,
    });

    await norbix.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.url.startsWith('https://api.norbix.io/')).toBe(true);
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe(VIRGINIA);

    norbix.setScope({ projectId: GERMANY });
    await norbix.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.url.startsWith('https://api.norbix.io/')).toBe(true);

    expect(norbix.api.auth.socialSignInUrl('google').startsWith('https://api.norbix.io/')).toBe(
      true,
    );
  });

  it('a norbix.ai API address written out goes to the project host too', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix(
      { apiKey: 'k', fetch: mock.fetch },
      { envSource: { NORBIX_PROJECT_ID: VIRGINIA, NORBIX_API_URL: 'https://api.norbix.ai' } },
    );
    await norbix.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.url.startsWith(VIRGINIA_HOST)).toBe(true);

    const regional = new Norbix({
      projectId: GERMANY,
      apiKey: 'k',
      baseUrl: { api: 'https://nb-eu-germany.api.norbix.ai' },
      fetch: mock.fetch,
    });
    await regional.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.url.startsWith(GERMANY_HOST)).toBe(true);
    expect(
      regional.api.auth
        .socialSignInUrl('google')
        .startsWith('https://nb-eu-germany.api.norbix.ai/'),
    ).toBe(true);
  });

  it('a custom API URL with the default Hub URL: only the Hub follows the region', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({
      projectId: VIRGINIA,
      apiKey: 'k',
      region: 'nb-eu-germany',
      baseUrl: { api: 'http://localhost:5002' },
      fetch: mock.fetch,
    });

    await norbix.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.url.startsWith('http://localhost:5002/')).toBe(true);
    await norbix.hub.regions.list();
    expect(mock.lastCall?.url.startsWith('https://nb-eu-germany.hub.norbix.ai/')).toBe(true);
  });
});

describe('project host — an install on its own domain', () => {
  const TEMPLATE = 'https://{projectHostLabel}.api.customer.com';

  it('a template is filled with the project label; host and header agree after setScope', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({
      projectId: VIRGINIA,
      apiKey: 'k',
      baseUrl: { api: TEMPLATE, hub: 'https://hub.customer.com' },
      fetch: mock.fetch,
    });

    await norbix.api.database.find({ collectionName: 'orders' });
    expect(
      mock.lastCall?.url.startsWith(
        'https://pr-022c4aca9f9e4df787ab0a20c83c44b6.api.customer.com/',
      ),
    ).toBe(true);
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe(VIRGINIA);

    norbix.setScope({ projectId: GERMANY });
    await norbix.api.database.find({ collectionName: 'orders' });
    expect(
      mock.lastCall?.url.startsWith(
        'https://pr-184336d00e2141c3be5138e8dcf52e81.api.customer.com/',
      ),
    ).toBe(true);
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe(GERMANY);

    expect(
      norbix.api.auth.socialSignInUrl('google').startsWith('https://api.customer.com/v3/'),
    ).toBe(true);
    await norbix.hub.regions.list();
    expect(mock.lastCall?.url.startsWith('https://hub.customer.com/')).toBe(true);
  });

  it('a template from NORBIX_API_URL, with a port and a version path', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix(
      { apiKey: 'k', fetch: mock.fetch },
      {
        envSource: {
          NORBIX_PROJECT_ID: VIRGINIA,
          NORBIX_API_URL: 'http://{projectHostLabel}.api.local.norbix.test:8443',
        },
      },
    );
    await norbix.api.database.find({ collectionName: 'orders' });
    expect(
      mock.lastCall?.url.startsWith(
        'http://pr-022c4aca9f9e4df787ab0a20c83c44b6.api.local.norbix.test:8443/v3/',
      ),
    ).toBe(true);
  });

  it('a template with an id that is not a Norbix id: the address without the label', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({
      projectId: 'p1',
      apiKey: 'k',
      baseUrl: { api: TEMPLATE },
      fetch: mock.fetch,
    });
    await norbix.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.url.startsWith('https://api.customer.com/')).toBe(true);
  });

  it("a pasted project host follows the client's project, so it never serves another project", async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({
      projectId: GERMANY,
      apiKey: 'k',
      baseUrl: { api: 'https://pr-022c4aca9f9e4df787ab0a20c83c44b6.api.customer.com' },
      fetch: mock.fetch,
    });
    await norbix.api.database.find({ collectionName: 'orders' });
    expect(
      mock.lastCall?.url.startsWith(
        'https://pr-184336d00e2141c3be5138e8dcf52e81.api.customer.com/',
      ),
    ).toBe(true);
    expect(norbix.api.auth.socialSignInUrl('google').startsWith('https://api.customer.com/')).toBe(
      true,
    );
  });

  it('a plain own-domain address, staging and localhost are used as given', async () => {
    for (const api of [
      'https://api.customer.com',
      'https://api.norbix.io',
      'http://localhost:5002',
      'http://api.norbix.ai',
    ]) {
      const mock = createMockFetch({ body: {} });
      const norbix = new Norbix({
        projectId: VIRGINIA,
        apiKey: 'k',
        baseUrl: { api },
        fetch: mock.fetch,
      });
      await norbix.api.database.find({ collectionName: 'orders' });
      expect(mock.lastCall?.url.startsWith(`${api}/`)).toBe(true);
    }
  });
});
