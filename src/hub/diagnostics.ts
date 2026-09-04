import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: diagnostics
 * Endpoints: 7
 */
export class DiagnosticsModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/diagnostics/packs
   * Request DTO: GetDiagnosticPacks
   */
  getDiagnosticPacks = (
    request: Partial<CodeMashHub2.GetDiagnosticPacks> = {} as Partial<CodeMashHub2.GetDiagnosticPacks>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetDiagnosticPacksResponse> => {
    return this.transport.send<CodeMashHub2.GetDiagnosticPacksResponse>({
      target: 'hub',
      path: '/{version}/diagnostics/packs',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/diagnostics/packs/{PackName}/run
   * Request DTO: RunDiagnosticPackRequest
   */
  runDiagnosticPack = (
    request: Partial<CodeMashHub2.RunDiagnosticPackRequest> = {} as Partial<CodeMashHub2.RunDiagnosticPackRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.RunDiagnosticPackResponse> => {
    return this.transport.send<CodeMashHub2.RunDiagnosticPackResponse>({
      target: 'hub',
      path: '/{version}/diagnostics/packs/{PackName}/run',
      method: 'POST',
      request,
      pathParams: ['PackName'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/diagnostics/echo
   * Request DTO: GetDiagnosticEcho
   */
  getDiagnosticEcho = (
    request: Partial<CodeMashHub2.GetDiagnosticEcho> = {} as Partial<CodeMashHub2.GetDiagnosticEcho>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetDiagnosticEchoResponse> => {
    return this.transport.send<CodeMashHub2.GetDiagnosticEchoResponse>({
      target: 'hub',
      path: '/{version}/diagnostics/echo',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/diagnostics/events
   * Request DTO: ReadDiagnosticEventsRequest
   */
  readDiagnosticEvents = (
    request: Partial<CodeMashHub2.ReadDiagnosticEventsRequest> = {} as Partial<CodeMashHub2.ReadDiagnosticEventsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.ReadDiagnosticEventsResponse> => {
    return this.transport.send<CodeMashHub2.ReadDiagnosticEventsResponse>({
      target: 'hub',
      path: '/{version}/diagnostics/events',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/diagnostics/logs
   * Request DTO: QueryDiagnosticLogsRequest
   */
  queryDiagnosticLogs = (
    request: Partial<CodeMashHub2.QueryDiagnosticLogsRequest> = {} as Partial<CodeMashHub2.QueryDiagnosticLogsRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.QueryDiagnosticLogsResponse> => {
    return this.transport.send<CodeMashHub2.QueryDiagnosticLogsResponse>({
      target: 'hub',
      path: '/{version}/diagnostics/logs',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/diagnostics/redis
   * Request DTO: InspectDiagnosticRedisRequest
   */
  inspectDiagnosticRedis = (
    request: Partial<CodeMashHub2.InspectDiagnosticRedisRequest> = {} as Partial<CodeMashHub2.InspectDiagnosticRedisRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.InspectDiagnosticRedisResponse> => {
    return this.transport.send<CodeMashHub2.InspectDiagnosticRedisResponse>({
      target: 'hub',
      path: '/{version}/diagnostics/redis',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/diagnostics/health/{CheckId}
   * Request DTO: RunDiagnosticHealthCheckRequest
   */
  runDiagnosticHealthCheck = (
    request: Partial<CodeMashHub2.RunDiagnosticHealthCheckRequest> = {} as Partial<CodeMashHub2.RunDiagnosticHealthCheckRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.RunDiagnosticHealthCheckResponse> => {
    return this.transport.send<CodeMashHub2.RunDiagnosticHealthCheckResponse>({
      target: 'hub',
      path: '/{version}/diagnostics/health/{CheckId}',
      method: 'POST',
      request,
      pathParams: ['CheckId'],
      scope: 'project',
      ...options,
    });
  };
}
