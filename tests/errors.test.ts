/**
 * What the caller sees when a call fails (slice ERRORS, issues #66 and #67).
 *
 * Two rules are pinned here:
 *  1. The message and the error code come from the gateway's own body. The
 *     gateway puts them inside `responseStatus.errors[]`, so reading the top
 *     of the block gives "Request failed" and no code — that was #66.
 *  2. A call fails when the gateway says it failed, even with HTTP 200 and
 *     `responseStatus.isSuccess = false` — that was #67.
 *
 * Every test runs against a fake fetch — never a real server.
 */
import { describe, expect, it } from 'vitest';

import { NorbixError, NorbixValidationError } from '../src/index.js';

import { createMockFetch, makeClient } from './_helpers.js';

function clientAnswering(opts: { status?: number; body?: unknown }) {
  const mock = createMockFetch(opts);
  const { norbix } = makeClient({ fetch: mock.fetch });
  return { norbix, mock };
}

/** Any project-scoped GET does; the transport is the same for all of them. */
function aCall(norbix: ReturnType<typeof makeClient>['norbix']) {
  return norbix.api.files.getFileInfo({ filesIntegrationId: 'int_7', path: 'a/b.txt' });
}

describe('errors from the gateway', () => {
  // (a) HTTP 400 with two errors inside responseStatus.errors
  it('a 400 takes message and code from the first error, and keeps them all', async () => {
    const { norbix } = clientAnswering({
      status: 400,
      body: {
        responseStatus: {
          isSuccess: false,
          errors: [
            {
              message: 'File name is required',
              errorCode: 'CM-ERRORS-FILES-002',
              fieldName: 'fileName',
            },
            {
              message: 'Folder does not exist',
              errorCode: 'CM-ERRORS-FILES-016',
              context: { Provider: 'Local' },
            },
          ],
        },
      },
    });

    const call = aCall(norbix);

    await expect(call).rejects.toBeInstanceOf(NorbixValidationError);
    const err = (await call.catch((e: unknown) => e)) as NorbixError;
    expect(err.message).toBe('File name is required');
    expect(err.code).toBe('CM-ERRORS-FILES-002');
    expect(err.httpStatus).toBe(400);
    expect(err.errorCode).toBe('CM-ERRORS-FILES-002');
    expect(err.errors).toHaveLength(2);
    expect(err.errors[0]).toMatchObject({
      message: 'File name is required',
      errorCode: 'CM-ERRORS-FILES-002',
      fieldName: 'fileName',
    });
    expect(err.errors[1]).toMatchObject({
      message: 'Folder does not exist',
      errorCode: 'CM-ERRORS-FILES-016',
      meta: { Provider: 'Local' },
    });
    // The body as it arrived is kept for anyone who needs the rest of it.
    expect(err.body).toMatchObject({ responseStatus: { isSuccess: false } });
  });

  // (b) HTTP 200 with isSuccess: false
  it('a 200 that says isSuccess=false fails with the gateway message', async () => {
    const { norbix } = clientAnswering({
      body: {
        responseStatus: {
          isSuccess: false,
          errors: [
            {
              message: 'File not found: "a/b.txt" does not exist in Local (int_7).',
              errorCode: 'CM-ERRORS-FILES-016',
            },
          ],
        },
      },
    });

    const call = aCall(norbix);

    await expect(call).rejects.toBeInstanceOf(NorbixError);
    await expect(call).rejects.toMatchObject({
      status: 200,
      code: 'CM-ERRORS-FILES-016',
      message: 'File not found: "a/b.txt" does not exist in Local (int_7).',
    });
  });

  // (c) HTTP 200 with isSuccess: true — unchanged
  it('a 200 that says isSuccess=true still comes back as a value', async () => {
    const { norbix } = clientAnswering({
      body: { id: 'f_1', name: 'a.txt', responseStatus: { isSuccess: true } },
    });

    const res = await aCall(norbix);

    expect(res).toMatchObject({ id: 'f_1', name: 'a.txt' });
  });

  it('a 200 with no responseStatus at all still comes back as a value', async () => {
    const { norbix } = clientAnswering({ body: { id: 'f_1' } });

    await expect(aCall(norbix)).resolves.toMatchObject({ id: 'f_1' });
  });

  // (d) a 500 whose body is not JSON
  it('a 500 with a body that is not JSON uses the fallback text', async () => {
    const mock = createMockFetch({ status: 500 });
    const { norbix } = makeClient({
      fetch: (async () =>
        new Response('<html>Bad Gateway</html>', { status: 500 })) as typeof fetch,
      retry: { maxRetries: 0 },
    });
    void mock;

    const call = aCall(norbix);

    await expect(call).rejects.toBeInstanceOf(NorbixError);
    await expect(call).rejects.toMatchObject({
      status: 500,
      message: 'Request failed (HTTP 500)',
    });
    const err = (await call.catch((e: unknown) => e)) as NorbixError;
    expect(err.code).toBeUndefined();
    // The text is still there for whoever wants to look at it.
    expect(err.body).toBe('<html>Bad Gateway</html>');
  });

  it('an empty error body uses the fallback text too', async () => {
    const { norbix } = clientAnswering({ status: 404, body: {} });

    await expect(aCall(norbix)).rejects.toMatchObject({
      status: 404,
      message: 'Request failed (HTTP 404)',
    });
  });

  it('reads message and code from the top of the body when there is no responseStatus', async () => {
    const { norbix } = clientAnswering({
      status: 409,
      body: { message: 'Already exists', errorCode: 'CM-ERRORS-FILES-009' },
    });

    await expect(aCall(norbix)).rejects.toMatchObject({
      status: 409,
      message: 'Already exists',
      code: 'CM-ERRORS-FILES-009',
    });
  });

  it('reads the top of responseStatus when it carries no errors list', async () => {
    const { norbix } = clientAnswering({
      status: 403,
      body: {
        responseStatus: { message: 'Missing permission files:read', errorCode: 'Forbidden' },
      },
    });

    await expect(aCall(norbix)).rejects.toMatchObject({
      status: 403,
      message: 'Missing permission files:read',
      code: 'Forbidden',
    });
  });
});
