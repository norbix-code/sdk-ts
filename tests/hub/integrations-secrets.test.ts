/**
 * Saved secrets of an integration (gateway docs/tasks/secret-fields.md): which secrets are saved,
 * and removing optional ones. The read never carries a value. Every test runs against a fake
 * fetch — never a real server.
 */
import { describe, expect, it } from 'vitest';

import { NorbixError } from '../../src/index.js';
import { createMockFetch, makeClient } from '../_helpers.js';

const HUB = 'https://hub.norbix.io/v2';

function clientAnswering(body: unknown, status = 200) {
  const mock = createMockFetch({ status, body });
  const { norbix } = makeClient({ fetch: mock.fetch });
  return { norbix, mock };
}

describe('hub.integrations saved secrets', () => {
  it('getIntegrationSecrets: GET /integrations/{id}/secrets, rows have no value', async () => {
    const { norbix, mock } = clientAnswering({
      result: [
        { key: 'secretKey', field: 'secretKey', isSet: true, isOptional: false },
        {
          key: 'webhookSigningSecret',
          field: 'webhookSigningSecret',
          isSet: false,
          isOptional: true,
        },
      ],
      responseStatus: { isSuccess: true },
    });

    const response = await norbix.hub.integrations.getIntegrationSecrets({
      integrationId: 'int_abc',
      env: 'TEST',
    });

    expect(mock.lastCall?.method).toBe('GET');
    const url = new URL(mock.lastCall?.url ?? '');
    expect(`${url.origin}${url.pathname}`).toBe(`${HUB}/integrations/int_abc/secrets`);
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
    expect(response.result).toHaveLength(2);
    expect(response.result[0]).toEqual({
      key: 'secretKey',
      field: 'secretKey',
      isSet: true,
      isOptional: false,
    });
  });

  it('removeIntegrationSecrets: POST /integrations/{id}/secrets/remove with the keys in the body', async () => {
    const { norbix, mock } = clientAnswering({
      id: 'int_abc',
      responseStatus: { isSuccess: true },
    });

    const response = await norbix.hub.integrations.removeIntegrationSecrets({
      integrationId: 'int_abc',
      keys: ['webhookSigningSecret'],
    });

    expect(mock.lastCall?.method).toBe('POST');
    expect(mock.lastCall?.url.split('?')[0]).toBe(`${HUB}/integrations/int_abc/secrets/remove`);
    expect(JSON.parse(mock.lastCall?.body ?? '{}')).toMatchObject({
      keys: ['webhookSigningSecret'],
    });
    expect(response).toMatchObject({ id: 'int_abc' });
  });

  it('removeIntegrationSecrets: a needed key answers CM-ERRORS-SECRETS-012', async () => {
    const { norbix } = clientAnswering(
      {
        responseStatus: {
          isSuccess: false,
          errorCode: 'CM-ERRORS-SECRETS-012',
          message: 'This secret is needed and cannot be removed.',
        },
      },
      400,
    );

    await expect(
      norbix.hub.integrations.removeIntegrationSecrets({
        integrationId: 'int_abc',
        keys: ['secretKey'],
      }),
    ).rejects.toBeInstanceOf(NorbixError);
  });
});
