import { describe, expect, it, vi } from 'vitest';

import { Norbix } from '../src/index.js';

import { createMockFetch } from './_helpers.js';

const LEGACY = ['CultureCode', 'norbix-language'];

describe('language — Accept-Language header', () => {
  it('sends no Accept-Language when no language is set', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix(
      { projectId: 'p1', apiKey: 'k', fetch: mock.fetch },
      { envSource: {} },
    );

    await norbix.api.database.find({ collectionName: 'orders' });

    expect(mock.lastCall?.headers.get('Accept-Language')).toBeNull();
    expect(norbix.getLanguage()).toBeUndefined();
  });

  it('sends the client language verbatim, q-values included', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({
      projectId: 'p1',
      apiKey: 'k',
      language: 'lt-LT, en;q=0.8',
      fetch: mock.fetch,
    });

    await norbix.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.headers.get('Accept-Language')).toBe('lt-LT, en;q=0.8');

    await norbix.hub.regions.list();
    expect(mock.lastCall?.headers.get('Accept-Language')).toBe('lt-LT, en;q=0.8');
  });

  it('resolves the language from NORBIX_LANGUAGE', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix(
      { projectId: 'p1', apiKey: 'k', fetch: mock.fetch },
      { envSource: { NORBIX_LANGUAGE: 'de' } },
    );

    await norbix.api.database.find({ collectionName: 'orders' });

    expect(norbix.getLanguage()).toBe('de');
    expect(mock.lastCall?.headers.get('Accept-Language')).toBe('de');
  });

  it('an explicit language beats NORBIX_LANGUAGE', () => {
    const norbix = new Norbix(
      { projectId: 'p1', apiKey: 'k', language: 'lt', fetch: createMockFetch().fetch },
      { envSource: { NORBIX_LANGUAGE: 'de' } },
    );
    expect(norbix.getLanguage()).toBe('lt');
  });

  it('a per-call language wins for that call only', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({ projectId: 'p1', apiKey: 'k', language: 'lt', fetch: mock.fetch });

    await norbix.api.database.find({ collectionName: 'orders' }, { language: 'en' });
    expect(mock.lastCall?.headers.get('Accept-Language')).toBe('en');
    expect(mock.lastCall?.url).not.toContain('language');

    await norbix.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.headers.get('Accept-Language')).toBe('lt');
  });

  it('setLanguage switches and clears the client language', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix(
      { projectId: 'p1', apiKey: 'k', fetch: mock.fetch },
      { envSource: {} },
    );

    norbix.setLanguage('fr');
    await norbix.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.headers.get('Accept-Language')).toBe('fr');

    norbix.setLanguage(undefined);
    await norbix.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.headers.get('Accept-Language')).toBeNull();
  });

  it('with() carries or overrides the language', async () => {
    const mock = createMockFetch({ body: {} });
    const base = new Norbix({ projectId: 'p1', apiKey: 'k', language: 'lt', fetch: mock.fetch });

    expect(base.with({}).getLanguage()).toBe('lt');
    const en = base.with({ language: 'en' });
    await en.api.database.find({ collectionName: 'orders' });
    expect(mock.lastCall?.headers.get('Accept-Language')).toBe('en');
    expect(base.getLanguage()).toBe('lt');
  });

  it('never sends cultureCode or the removed language headers', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({ projectId: 'p1', apiKey: 'k', language: 'lt', fetch: mock.fetch });

    await norbix.api.database.insertOne({ collectionName: 'orders', document: '{}' });

    for (const h of LEGACY) expect(mock.lastCall?.headers.get(h)).toBeNull();
    expect(mock.lastCall?.body ?? '').not.toContain('cultureCode');
  });

  it('reports Content-Language to onResponse', async () => {
    const onResponse = vi.fn();
    const fetchImpl = vi.fn(
      async () =>
        new Response('{}', {
          status: 200,
          headers: { 'Content-Type': 'application/json', 'Content-Language': 'lt' },
        }),
    ) as unknown as typeof fetch;
    const norbix = new Norbix({
      projectId: 'p1',
      apiKey: 'k',
      language: 'lt-LT, en;q=0.8',
      fetch: fetchImpl,
      onResponse,
    });

    await norbix.api.database.find({ collectionName: 'orders' });

    expect(onResponse).toHaveBeenCalledWith(expect.objectContaining({ contentLanguage: 'lt' }));
  });
});

describe('allLanguages on record and term reads', () => {
  it('find / findOne / findOwn pass allLanguages=true on the query string', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({ projectId: 'p1', apiKey: 'k', fetch: mock.fetch });
    const orders = norbix.collection('orders');

    await orders.find({ allLanguages: true });
    expect(mock.lastCall?.url).toContain('allLanguages=true');

    await orders.findOne({ id: 'rec_1', allLanguages: true });
    expect(mock.lastCall?.url).toContain('allLanguages=true');

    await orders.findOwn({ allLanguages: true });
    expect(mock.lastCall?.url).toContain('allLanguages=true');
  });

  it('term reads pass allLanguages=true', async () => {
    const mock = createMockFetch({ body: {} });
    const norbix = new Norbix({ projectId: 'p1', apiKey: 'k', fetch: mock.fetch });

    await norbix.api.database.findTerms({ taxonomyName: 'tags', allLanguages: true });

    expect(mock.lastCall?.url).toContain('allLanguages=true');
  });
});
