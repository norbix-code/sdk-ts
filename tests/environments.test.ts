import { describe, expect, it } from 'vitest';

import { Norbix } from '../src/index.js';

import { createMockFetch } from './_helpers.js';

describe('project environments — norbix-env header', () => {
  it('omits norbix-env for the default PROD env', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({ projectId: 'p1', apiKey: 'k', fetch: mock.fetch });

    await norbix.hub.environments.list();

    expect(mock.lastCall?.headers.get('norbix-env')).toBeNull();
  });

  it('sends norbix-env from the client default env', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({ projectId: 'p1', apiKey: 'k', env: 'TEST', fetch: mock.fetch });

    await norbix.api.database.find({ collectionName: 'orders' });

    expect(mock.lastCall?.headers.get('norbix-env')).toBe('TEST');
  });

  it('per-call env overrides the client default', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({ projectId: 'p1', apiKey: 'k', env: 'TEST', fetch: mock.fetch });

    await norbix.api.database.find({ collectionName: 'orders' }, { env: 'STAGING' });

    expect(mock.lastCall?.headers.get('norbix-env')).toBe('STAGING');
  });

  it('setEnv switches the env at runtime; PROD clears the header', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({ projectId: 'p1', apiKey: 'k', fetch: mock.fetch });

    norbix.setEnv('TEST');
    expect(norbix.getEnv()).toBe('TEST');
    await norbix.hub.environments.list();
    expect(mock.lastCall?.headers.get('norbix-env')).toBe('TEST');

    norbix.setEnv('PROD');
    await norbix.hub.environments.list();
    expect(mock.lastCall?.headers.get('norbix-env')).toBeNull();
  });

  it('create + delete environment hit the right routes', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({ projectId: 'p1', apiKey: 'k', fetch: mock.fetch });

    await norbix.hub.environments.create({
      environmentName: 'TEST',
      integration: { name: 'db' } as never,
    });
    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url).toContain('/account/projects/environments');

    await norbix.hub.environments.delete({ environmentName: 'TEST' });
    expect(mock.lastCall?.method).toBe('DELETE');
    expect(mock.lastCall?.url).toContain('/account/projects/environments/TEST');
  });
});
