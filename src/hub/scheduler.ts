import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/** A string enum, or the same value written as a plain string literal. */
type EnumOrLiteral<E extends string> = E | `${E}`;

type WithCampaignSource<T> = Omit<Partial<T>, 'source'> & {
  source: EnumOrLiteral<CodeMashHub2.EmailCampaignRecipientsSourceTypes>;
};

/**
 * The email campaign a scheduled task sends: `source` picks the audience,
 * the other fields are the ones of that audience's campaign request
 * (`templateId` is always required by the gateway).
 */
export type SchedulerEmailCampaignInput =
  | WithCampaignSource<CodeMashHub2.EmailToAllUsersDeliverySettingsRequest>
  | WithCampaignSource<CodeMashHub2.EmailToUsersDeliverySettingsRequest>
  | WithCampaignSource<CodeMashHub2.EmailToAccountUsersDeliverySettingsRequest>
  | WithCampaignSource<CodeMashHub2.EmailToEmailsDeliverySettingsRequest>
  | WithCampaignSource<CodeMashHub2.EmailToCollectionRecordsDeliverySettingsRequest>;

/** Task body of type `EmailCampaign` — sends an email campaign each time the cron fires. */
export type EmailCampaignSchedulerTaskInput = Omit<
  Partial<CodeMashHub2.EmailCampaignSchedulerTaskRequest>,
  'type' | 'campaign'
> & {
  type: CodeMashHub2.SchedulerTaskType.EmailCampaign | 'EmailCampaign';
  campaign?: SchedulerEmailCampaignInput;
};

/**
 * The `task` of {@link SchedulerModule.saveSchedulerTask}. Only `EmailCampaign`
 * is supported by the gateway today. A `SchedulerTaskRequest` /
 * `EmailCampaignSchedulerTaskRequest` class instance is accepted too.
 */
export type SchedulerTaskInput =
  EmailCampaignSchedulerTaskInput | CodeMashHub2.SchedulerTaskRequest;

/** Request of {@link SchedulerModule.saveSchedulerTask} with a typed `task`. */
export type SaveSchedulerTaskInput = Omit<
  Partial<CodeMashHub2.SaveSchedulerTaskRequest>,
  'task'
> & {
  task?: SchedulerTaskInput;
};

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: scheduler
 * Endpoints: 8
 */
export class SchedulerModule {
  constructor(private readonly transport: Transport) {}

  /**
   * PUT /{version}/scheduler/disable
   * Request DTO: DisableScheduler
   */
  disableScheduler = (
    request: Partial<CodeMashHub2.DisableScheduler> = {} as Partial<CodeMashHub2.DisableScheduler>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/scheduler/disable',
      method: 'PUT',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  /**
   * PUT /{version}/scheduler/enable
   * Request DTO: EnableScheduler
   */
  enableScheduler = (
    request: Partial<CodeMashHub2.EnableScheduler> = {} as Partial<CodeMashHub2.EnableScheduler>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashHub2.EmptyResponse> => {
    return this.transport.send<CodeMashHub2.EmptyResponse>({
      target: 'hub',
      path: '/{version}/scheduler/enable',
      method: 'PUT',
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
   *
   * Creates a task, or updates it when `taskId` is set. `task` is typed
   * (hand-set): `{ type: 'EmailCampaign', campaign: { source, templateId, … } }`.
   */
  saveSchedulerTask = (
    request: SaveSchedulerTaskInput = {} as SaveSchedulerTaskInput,
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
