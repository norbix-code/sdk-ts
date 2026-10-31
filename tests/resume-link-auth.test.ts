/**
 * The signed workflow resume link opens without sign-in: the token in the link
 * is the key. A regeneration turned these into `'project'` once, and every call
 * from a client with no token failed before it left the SDK.
 */
import { describe, expect, it } from 'vitest';

import { Norbix } from '../src/index.js';

import { createMockFetch } from './_helpers.js';

function signedOut() {
  const mock = createMockFetch({ body: {} });
  const norbix = new Norbix(
    {
      projectId: 'pr_1',
      baseUrl: { api: 'https://api.test', hub: 'https://hub.test' },
      fetch: mock.fetch,
    },
    { envSource: {} },
  );
  return { norbix, mock };
}

describe('signed workflow resume links', () => {
  it.each([
    ['hub', 'openCodeWorkflowResumeLink', 'GET'],
    ['hub', 'useCodeWorkflowResumeLink', 'POST'],
    ['api', 'openCodeWorkflowResumeLink', 'GET'],
    ['api', 'useCodeWorkflowResumeLink', 'POST'],
  ] as const)('%s.%s works with no session', async (surface, method, verb) => {
    const { norbix, mock } = signedOut();
    await norbix[surface].code[method]({ token: 'tok_1' });

    expect(mock.lastCall!.url).toContain('/code/workflows/resume/tok_1');
    expect(mock.lastCall!.method).toBe(verb);
    expect(new Headers(mock.lastCall!.headers).get('Authorization')).toBeNull();
  });
});
