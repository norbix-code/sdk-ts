import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — follow the internal maintenance workflow
 * to refresh this file from the DTO definitions.
 *
 * Group: scheduler
 * Endpoints: 8
 */
export class SchedulerModule {
  constructor(private readonly transport: Transport) {}

  /**
   * GET /{version}/scheduler/disable
   * Request DTO: DisableScheduler
   */
  disableScheduler = (
    request: Partial<CodeMashHub2.DisableScheduler> = {} as Partial<CodeMashHub2.DisableScheduler>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/scheduler/disable',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/scheduler/enable
   * Request DTO: EnableScheduler
   */
  enableScheduler = (
    request: Partial<CodeMashHub2.EnableScheduler> = {} as Partial<CodeMashHub2.EnableScheduler>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/scheduler/enable',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * DELETE /{version}/scheduler/tasks/{Id}
   * Request DTO: DeleteSchedulerTask
   */
  deleteSchedulerTask = (
    request: Partial<CodeMashHub2.DeleteSchedulerTask> = {} as Partial<CodeMashHub2.DeleteSchedulerTask>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/scheduler/tasks/{Id}',
      method: 'DELETE',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/scheduler/tasks/{Id}/disable
   * Request DTO: DisableSchedulerTask
   */
  disableSchedulerTask = (
    request: Partial<CodeMashHub2.DisableSchedulerTask> = {} as Partial<CodeMashHub2.DisableSchedulerTask>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/scheduler/tasks/{Id}/disable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/scheduler/tasks/{Id}/enable
   * Request DTO: EnableSchedulerTask
   */
  enableSchedulerTask = (
    request: Partial<CodeMashHub2.EnableSchedulerTask> = {} as Partial<CodeMashHub2.EnableSchedulerTask>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/scheduler/tasks/{Id}/enable',
      method: 'PUT',
      request,
      pathParams: ['Id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/scheduler/tasks/{id}
   * Request DTO: GetSchedulerTask
   */
  getSchedulerTask = (
    request: Partial<CodeMashHub2.GetSchedulerTask> = {} as Partial<CodeMashHub2.GetSchedulerTask>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSchedulerTaskResponse> => {
    return this.transport.send<CodeMashHub2.GetSchedulerTaskResponse>({
      target: 'hub',
      path: '/{version}/scheduler/tasks/{id}',
      method: 'GET',
      request,
      pathParams: ['id'],
      scope: 'project',
      ...options,
    });
  };

  /**
   * GET /{version}/scheduler/tasks
   * Request DTO: GetSchedulerTasks
   */
  getSchedulerTasks = (
    request: Partial<CodeMashHub2.GetSchedulerTasks> = {} as Partial<CodeMashHub2.GetSchedulerTasks>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.GetSchedulerTasksResponse> => {
    return this.transport.send<CodeMashHub2.GetSchedulerTasksResponse>({
      target: 'hub',
      path: '/{version}/scheduler/tasks',
      method: 'GET',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * POST /{version}/scheduler/tasks
   * Request DTO: SaveSchedulerTaskRequest
   */
  saveSchedulerTask = (
    request: Partial<CodeMashHub2.SaveSchedulerTaskRequest> = {} as Partial<CodeMashHub2.SaveSchedulerTaskRequest>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.IdResponse> => {
    return this.transport.send<CodeMashHub2.IdResponse>({
      target: 'hub',
      path: '/{version}/scheduler/tasks',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };
}
