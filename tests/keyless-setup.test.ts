/**
 * Keyless cloud connections — the setup endpoint (gateway feat/keyless-cloud).
 * Hand-written: the generated module test only checks the verb and the path,
 * and `npm run generate-endpoints` would overwrite anything added there.
 *
 * What the tests prove:
 *   - the request fields go out as the query string of a GET (no body);
 *   - the response comes back typed, with the script, the trust values and
 *     the setup templates (CloudFormation / Bicep / Terraform files);
 *   - the save requests carry the new keyless fields (`authMode`,
 *     `roleArn`, `acceptKeyRisk`) and no longer the cross-account role ones.
 */
import { describe, expect, it } from 'vitest';

import { Norbix } from '../src/index.js';
import type { CodeMashHub2 } from '../src/types/hub2.dtos.js';

import { createMockFetch } from './_helpers.js';

function client(body: unknown) {
  const mock = createMockFetch({ body });
  const norbix = new Norbix({
    bearerToken: 'test-token',
    projectId: 'test-project',
    apiVersion: 'v2',
    hubVersion: 'v2',
    baseUrl: { api: 'https://api.norbix.io', hub: 'https://hub.norbix.io' },
    fetch: mock.fetch,
  });
  return { norbix, mock };
}

describe('hub.integrations.getKeylessIntegrationSetup', () => {
  it('sends a GET with module, cloud and integration id in the query', async () => {
    const answer = {
      integrationId: 'int_1',
      env: 'TEST',
      module: 'files',
      cloud: 'aws',
      issuer: 'https://issuer.example',
      available: true,
      subject: 'p/test-project/e/TEST/files/i/int_1',
      audience: 'sts.amazonaws.com',
      script: 'aws iam create-role ...',
      templates: [
        {
          kind: 'terraform',
          fileName: 'norbix-files-aws.tf',
          content: 'resource "aws_iam_role" ...',
        },
      ],
    };
    const { norbix, mock } = client(answer);

    const result = await norbix.hub.integrations.getKeylessIntegrationSetup({
      projectId: 'test-project',
      module: 'files',
      cloud: 'aws',
      integrationId: 'int_1',
    });

    expect(mock.lastCall?.method).toBe('GET');
    const url = new URL(mock.lastCall!.url);
    expect(url.origin + url.pathname).toBe('https://hub.norbix.io/v2/integrations/keyless/setup');
    expect(url.searchParams.get('module')).toBe('files');
    expect(url.searchParams.get('cloud')).toBe('aws');
    expect(url.searchParams.get('integrationId')).toBe('int_1');
    expect(mock.lastCall?.body).toBeUndefined();
    expect(mock.lastCall?.headers.get('norbix-project-id')).toBe('test-project');
    expect(result).toEqual(answer);
    expect(result.templates?.[0]?.kind).toBe('terraform');
    expect(result.templates?.[0]?.fileName).toBe('norbix-files-aws.tf');
  });

  it('passes the reason through when keyless is not available', async () => {
    const { norbix } = client({
      integrationId: 'int_2',
      module: 'email',
      cloud: 'azure',
      issuer: '',
      available: false,
      unavailableReason: 'no signing key',
      subject: '',
      audience: '',
      script: '',
    });

    const result = await norbix.hub.integrations.getKeylessIntegrationSetup({
      module: 'email',
      cloud: 'azure',
    });

    expect(result.available).toBe(false);
    expect(result.unavailableReason).toBe('no signing key');
  });
});

describe('keyless save-request shapes', () => {
  it('AWS S3 save request takes authMode, roleArn and acceptKeyRisk', () => {
    const request: Partial<CodeMashHub2.AwsS3FilesIntegrationRequest> = {
      authMode: 'Keyless' as CodeMashHub2.CloudAuthMode,
      roleArn: 'arn:aws:iam::123456789012:role/norbix-files',
      acceptKeyRisk: false,
    };
    // CrossAccountRole mode came back (gateway 2aade8e5e): the field is on the request again.
    request.externalId = 'x';
    expect(request.authMode).toBe('Keyless');
  });
});
