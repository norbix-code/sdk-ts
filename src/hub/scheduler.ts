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

/** One SMS audience: `deliveryType` names it, the property of the same name holds its settings. */
type SmsAudience<
  S extends CodeMashHub2.SmsCampaignRecipientsSourceTypes,
  K extends string,
  D extends CodeMashHub2.SmsCampaignDeliverySettingsDto,
> = { deliveryType: EnumOrLiteral<S> } & {
  [P in K]: Omit<D, 'recipientsSourceType'> & { recipientsSourceType: EnumOrLiteral<S> };
};

type SmsAudienceKey =
  'allUsers' | 'specifiedUsers' | 'accountUsers' | 'collection' | 'phoneNumbers';

/**
 * The SMS campaign a scheduled task sends — the body of
 * `POST /notifications/sms/campaigns` (`CreateSmsCampaignRequest`).
 * `templateId`, `integrationId` and the audience are required by the gateway:
 * `deliveryType` picks the audience, and the settings object of the same
 * name (`allUsers`, `specifiedUsers`, `accountUsers`, `collection`,
 * `phoneNumbers`) carries it, with the same `recipientsSourceType`.
 */
export type SchedulerSmsCampaignInput = Omit<
  Partial<CodeMashHub2.CreateSmsCampaignRequest>,
  'templateId' | 'integrationId' | 'deliveryType' | SmsAudienceKey
> & {
  templateId: string;
  integrationId: string;
} & (
    | SmsAudience<
        CodeMashHub2.SmsCampaignRecipientsSourceTypes.AllUsers,
        'allUsers',
        CodeMashHub2.SmsToAllUsersDeliverySettingsDto
      >
    | SmsAudience<
        CodeMashHub2.SmsCampaignRecipientsSourceTypes.SpecifiedUsers,
        'specifiedUsers',
        CodeMashHub2.SmsToUsersDeliverySettingsDto
      >
    | SmsAudience<
        CodeMashHub2.SmsCampaignRecipientsSourceTypes.AccountUsers,
        'accountUsers',
        CodeMashHub2.SmsToAccountUsersDeliverySettingsDto
      >
    | SmsAudience<
        CodeMashHub2.SmsCampaignRecipientsSourceTypes.Collection,
        'collection',
        CodeMashHub2.SmsToCollectionRecordsDeliverySettingsDto
      >
    | SmsAudience<
        CodeMashHub2.SmsCampaignRecipientsSourceTypes.PhoneNumbers,
        'phoneNumbers',
        CodeMashHub2.SmsToPhoneNumbersDeliverySettingsDto
      >
  );

/** Task body of type `SmsCampaign` — sends an SMS campaign each time the cron fires. */
export type SmsCampaignSchedulerTaskInput = Omit<
  Partial<CodeMashHub2.SmsCampaignSchedulerTaskRequest>,
  'type' | 'campaign'
> & {
  type: CodeMashHub2.SchedulerTaskType.SmsCampaign | 'SmsCampaign';
  campaign: SchedulerSmsCampaignInput;
};

type PushPlatform = EnumOrLiteral<CodeMashHub2.PushDeviceDeliveryFamily>;

/** The fields every push audience shares; `templateId` is required by the gateway. */
type PushCampaignBase<S extends CodeMashHub2.PushCampaignRecipientsSourceTypes> = Omit<
  Partial<CodeMashHub2.PushCampaignRequest>,
  'source' | 'templateId'
> & {
  source: EnumOrLiteral<S>;
  templateId: string;
};

/**
 * The push campaign a scheduled task sends — the body of
 * `POST /notifications/push/campaigns`. `source` picks the audience and the
 * fields that go with it (the gateway's `PushTo…DeliverySettingsRequest`
 * records); `templateId` is always required.
 */
export type SchedulerPushCampaignInput =
  | (PushCampaignBase<CodeMashHub2.PushCampaignRecipientsSourceTypes.AllUsers> & {
      rolesNames?: string[];
      userTags?: string[];
      platforms?: PushPlatform[];
    })
  | (PushCampaignBase<CodeMashHub2.PushCampaignRecipientsSourceTypes.SpecifiedUsers> & {
      userRecipients: string[];
    })
  | (PushCampaignBase<CodeMashHub2.PushCampaignRecipientsSourceTypes.AccountUsers> & {
      userRecipients: string[];
      platforms?: PushPlatform[];
    })
  | (PushCampaignBase<CodeMashHub2.PushCampaignRecipientsSourceTypes.Collection> & {
      schemaName: string;
      fields: string[];
      fieldType: EnumOrLiteral<CodeMashHub2.CollectionEmailCampaignRecipientField>;
      roleNames?: string[];
      languages?: string[];
    })
  | (PushCampaignBase<CodeMashHub2.PushCampaignRecipientsSourceTypes.Devices> & {
      devices: { token: string; deliveryFamily: PushPlatform }[];
    });

/** Task body of type `PushCampaign` — sends a push campaign each time the cron fires. */
export type PushCampaignSchedulerTaskInput = Omit<
  Partial<CodeMashHub2.PushCampaignSchedulerTaskRequest>,
  'type' | 'campaign'
> & {
  type: CodeMashHub2.SchedulerTaskType.PushCampaign | 'PushCampaign';
  campaign: SchedulerPushCampaignInput;
};

/**
 * The `task` of {@link SchedulerModule.saveSchedulerTask}. The gateway runs
 * email, SMS and push campaign tasks (`EmailCampaign`, `SmsCampaign`,
 * `PushCampaign`); webhook and code tasks (`WebhookCall`,
 * `CodeFunctionalCall`) are not supported yet and are rejected. A
 * `SchedulerTaskRequest` subclass instance (e.g.
 * `SmsCampaignSchedulerTaskRequest`) is accepted too.
 */
export type SchedulerTaskInput =
  | EmailCampaignSchedulerTaskInput
  | SmsCampaignSchedulerTaskInput
  | PushCampaignSchedulerTaskInput
  | CodeMashHub2.SchedulerTaskRequest;

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
   * (hand-set): `{ type: 'EmailCampaign' | 'SmsCampaign' | 'PushCampaign',
   * campaign: { templateId, … } }` — see {@link SchedulerTaskInput}.
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
