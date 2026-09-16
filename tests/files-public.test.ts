/**
 * Public file links — the five endpoints slice PUB added to the gateway
 * (10b-files, slice SDK-2). Hand-written: the generated module tests are
 * refreshed by `npm run generate-endpoints` and would lose these.
 *
 * What each test proves:
 *   - the method exists on the namespaced client;
 *   - the verb and the URL it really sends (a wrong path would fail here —
 *     knowledge.md K23: an SDK test that only checks "starts with https" is
 *     not a test);
 *   - the request body / query it really sends;
 *   - for the public link: that it goes out WITHOUT an Authorization header,
 *     that a folder path keeps its slashes, and that the bytes come back as
 *     bytes and are not parsed as JSON.
 */
import { describe, expect, it, vi } from 'vitest';

import { Norbix } from '../src/index.js';

import { createMockFetch, makeClient } from './_helpers.js';

describe('hub.files — make public / make private', () => {
  it('exposes the four methods', () => {
    const { norbix } = makeClient();
    const ns = (norbix.hub as unknown as Record<string, unknown>)['files'] as Record<
      string,
      unknown
    >;
    expect(typeof ns['makeFilePublic']).toBe('function');
    expect(typeof ns['makeFilePrivate']).toBe('function');
    expect(typeof ns['makeFolderPublic']).toBe('function');
    expect(typeof ns['makeFolderPrivate']).toBe('function');
  });

  const cases = [
    { method: 'makeFilePublic', path: '/v2/files/item/public' },
    { method: 'makeFilePrivate', path: '/v2/files/item/private' },
    { method: 'makeFolderPublic', path: '/v2/files/folder/public' },
    { method: 'makeFolderPrivate', path: '/v2/files/folder/private' },
  ] as const;

  for (const c of cases) {
    it(`${c.method}: POST ${c.path}`, async () => {
      const { norbix, mock } = makeClient();
      const ns = (norbix.hub as unknown as Record<string, unknown>)['files'] as Record<
        string,
        (req: unknown) => Promise<unknown>
      >;

      await ns[c.method]!({ filesIntegrationId: 'nbin_42', path: 'invoices/2026.pdf' });

      const call = mock.lastCall!;
      expect(call.method).toBe('POST');
      expect(call.url).toBe(`https://hub.norbix.io${c.path}`);
      expect(JSON.parse(call.body!)).toEqual({
        filesIntegrationId: 'nbin_42',
        path: 'invoices/2026.pdf',
      });
      expect(call.headers.get('Authorization')).toBe('Bearer test-token');
      expect(call.headers.get('norbix-project-id')).toBe('test-project');
    });
  }

  it('makeFilePublic gives back the nbpf_ id the gateway minted', async () => {
    const mock = createMockFetch({ body: { id: 'nbpf_7hK2abc', status: 'Success' } });
    const norbix = new Norbix({
      bearerToken: 't',
      projectId: 'p',
      apiVersion: 'v2',
      hubVersion: 'v2',
      fetch: mock.fetch,
    });

    const res = await norbix.hub.files.makeFilePublic({
      filesIntegrationId: 'nbin_42',
      path: 'invoices/2026.pdf',
    });

    expect(res.id).toBe('nbpf_7hK2abc');
  });
});

describe('api.files.getPublicFile — the link anyone can open', () => {
  /** A mock fetch that answers with real bytes, not JSON. */
  function binaryFetch(bytes: Uint8Array, status = 200) {
    const calls: { url: string; headers: Headers }[] = [];
    const impl = vi.fn(async (input: string | URL | Request, init?: RequestInit) => {
      calls.push({
        url: typeof input === 'string' ? input : (input as URL).toString(),
        headers: new Headers(init?.headers ?? {}),
      });
      return new Response(bytes as unknown as BodyInit, {
        status,
        headers: { 'Content-Type': 'application/pdf' },
      });
    }) as unknown as typeof fetch;
    return { impl, calls };
  }

  /**
   * A client with no session — no bearer token, no API key. It still needs a
   * `projectId`, because the constructor insists on one for every client (see
   * finding F3 in the slice report); a public link itself carries none.
   */
  function publicClient(fetchImpl: typeof fetch) {
    return new Norbix({
      projectId: 'not-used-by-a-public-link',
      baseUrl: { api: 'https://api.norbix.io', hub: 'https://hub.norbix.io' },
      apiVersion: 'v3',
      hubVersion: 'v2',
      fetch: fetchImpl,
    });
  }

  it('sends GET to the public route and returns the bytes unchanged', async () => {
    const bytes = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d, 0x31, 0x2e, 0x37]); // "%PDF-1.7"
    const { impl, calls } = binaryFetch(bytes);

    const res = await publicClient(impl).api.files.getPublicFile({
      publicId: 'nbpf_7hK2abc',
      name: 'invoice.pdf',
    });

    expect(calls[0]!.url).toBe('https://api.norbix.io/v3/files/public/nbpf_7hK2abc/invoice.pdf');
    expect(res).toBeInstanceOf(Uint8Array);
    expect(Array.from(res)).toEqual(Array.from(bytes));
  });

  it('attaches no Authorization header — that is what "public" means', async () => {
    const { impl, calls } = binaryFetch(new Uint8Array([1]));

    await publicClient(impl).api.files.getPublicFile({
      publicId: 'nbpf_7hK2abc',
      name: 'invoice.pdf',
    });

    expect(calls[0]!.headers.get('Authorization')).toBeNull();
  });

  it('does not send Authorization even when the client IS signed in', async () => {
    const { impl, calls } = binaryFetch(new Uint8Array([1]));
    const norbix = new Norbix({
      bearerToken: 'a-real-session',
      projectId: 'test-project',
      apiVersion: 'v3',
      hubVersion: 'v2',
      fetch: impl,
    });

    await norbix.api.files.getPublicFile({ publicId: 'nbpf_7hK2abc', name: 'invoice.pdf' });

    expect(calls[0]!.headers.get('Authorization')).toBeNull();
  });

  it('keeps the slashes in a folder-relative path', async () => {
    const { impl, calls } = binaryFetch(new Uint8Array([1]));

    await publicClient(impl).api.files.getPublicFile({
      publicId: 'nbpf_folder1',
      name: '2026/q1/report.pdf',
    });

    expect(calls[0]!.url).toBe(
      'https://api.norbix.io/v3/files/public/nbpf_folder1/2026/q1/report.pdf',
    );
  });

  it('escapes a space in a file name but still no slash', async () => {
    const { impl, calls } = binaryFetch(new Uint8Array([1]));

    await publicClient(impl).api.files.getPublicFile({
      publicId: 'nbpf_folder1',
      name: 'q1 reports/my invoice.pdf',
    });

    expect(calls[0]!.url).toBe(
      'https://api.norbix.io/v3/files/public/nbpf_folder1/q1%20reports/my%20invoice.pdf',
    );
  });

  it('a link that points at nothing is a plain 404', async () => {
    const { impl } = binaryFetch(new Uint8Array([]), 404);

    await expect(
      publicClient(impl).api.files.getPublicFile({ publicId: 'nbpf_gone', name: 'invoice.pdf' }),
    ).rejects.toMatchObject({ status: 404 });
  });

  /**
   * Pins today's behaviour, and it is not the behaviour we want: somebody who
   * holds nothing but a public link cannot build a client at all. Reported as
   * F3; change the client contract first, then this test.
   */
  it('today a client still cannot be built without a projectId', () => {
    expect(
      () =>
        new Norbix(
          {
            baseUrl: { api: 'https://api.norbix.io', hub: 'https://hub.norbix.io' },
            fetch: binaryFetch(new Uint8Array([1])).impl,
          },
          // An empty env source, so the test does not depend on whoever runs it
          // happening to have NORBIX_PROJECT_ID set.
          { envSource: {} },
        ),
    ).toThrow(/projectId/);
  });

  it('refuses to build a link with no id', async () => {
    const { impl } = binaryFetch(new Uint8Array([1]));

    await expect(
      publicClient(impl).api.files.getPublicFile({ name: 'invoice.pdf' }),
    ).rejects.toMatchObject({ code: 'NORBIX_MISSING_PATH_PARAM' });
  });
});

describe('the two new fields on a file', () => {
  it('listFiles carries isPublic, publicUrl and the public folders', async () => {
    const mock = createMockFetch({
      body: {
        list: {
          items: [
            {
              resource: { storedFileName: 'invoice.pdf' },
              integrationId: 'nbin_42',
              path: 'invoices/invoice.pdf',
              isPublic: true,
              publicUrl: 'https://api.norbix.io/v3/files/public/nbpf_7hK2abc/invoice.pdf',
            },
          ],
        },
        folders: ['invoices', 'drafts'],
        publicFolders: [
          {
            path: 'invoices',
            publicId: 'nbpf_folder1',
            publicUrl: 'https://api.norbix.io/v3/files/public/nbpf_folder1/',
            inherited: false,
          },
        ],
      },
    });
    const norbix = new Norbix({
      bearerToken: 't',
      projectId: 'p',
      apiVersion: 'v3',
      hubVersion: 'v2',
      fetch: mock.fetch,
    });

    const res = await norbix.api.files.listFiles({ filesIntegrationId: 'nbin_42' });

    expect(res.list!.items![0]!.isPublic).toBe(true);
    expect(res.list!.items![0]!.publicUrl).toContain('/files/public/nbpf_');
    expect(res.publicFolders).toHaveLength(1);
    expect(res.publicFolders![0]!.inherited).toBe(false);
    // The plain folder list is untouched, so an older client keeps working.
    expect(res.folders).toEqual(['invoices', 'drafts']);
  });
});
