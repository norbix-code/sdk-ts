import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Project environments — list, create, and delete the named environments a
 * project owns (PROD plus any TEST/STAGING/… the user adds).
 *
 * These endpoints manage the *set* of environments. To make requests *inside*
 * a given environment, set `env` on the client (`new Norbix({ env: 'TEST' })`
 * or `norbix.setEnv('TEST')`) or per call (`{ env: 'TEST' }`), which sends the
 * `norbix-env` header.
 *
 * Group: account (project environments)
 */
export class EnvironmentsModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/account/projects/environments
   * Lists the project's environments. The response always includes "PROD",
   * PROD-first. Request DTO: GetProjectEnvironments
   */
  list = (
    request: Partial<CodeMashHub2.GetProjectEnvironments> = {} as Partial<CodeMashHub2.GetProjectEnvironments>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetProjectEnvironmentsResponse> => {
    return this.transport.send<CodeMashHub2.GetProjectEnvironmentsResponse>({
      target: 'hub',
      path: '/{version}/account/projects/environments',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/account/projects/environments
   * Creates a new environment. Requires `environmentName` (e.g. "TEST") and an
   * `integration` (a database integration that seeds the new env and becomes
   * its default). The new env is born with only that DB integration; every
   * other integration must be created inside that env afterward.
   * Request DTO: CreateProjectEnvironmentRequest
   */
  create = (
    request: Partial<CodeMashHub2.CreateProjectEnvironmentRequest> = {} as Partial<CodeMashHub2.CreateProjectEnvironmentRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/environments',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/account/projects/environments/{environmentName}
   * Deletes a non-PROD environment, cascading its integrations. PROD is
   * rejected by the backend. Request DTO: DeleteProjectEnvironmentRequest
   */
  delete = (
    request: Partial<CodeMashHub2.DeleteProjectEnvironmentRequest> = {} as Partial<CodeMashHub2.DeleteProjectEnvironmentRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/account/projects/environments/{environmentName}',
      method: 'DELETE',
      request,
      pathParams: ['environmentName'],
      scope: 'project',
      ...options,
    });
  };
}
