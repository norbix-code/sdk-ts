// @ts-nocheck
/* Options:
Date: 2026-10-31 09:57:36
Version: 10.20
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:5002

GlobalNamespace: CodeMashApi2
//MakePropertiesOptional: False
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/

export module CodeMashApi2 {
  export interface IReturn<T> {
    createResponse(): T;
  }

  export interface IReturnVoid {
    createResponse(): void;
  }
  export interface IGet {}

  export interface IHasSessionId {
    sessionId?: string;
  }

  export interface IHasBearerToken {
    bearerToken?: string;
  }

  export interface IPost {}

  export type IReadOnlySet<T> = T[];
  export type IReadOnlyList<T> = T[];
  export type IList<T> = T[];
  export type HashSet<T> = T[];
  export type Blob = globalThis.Blob;
  export type IReadOnlyDictionary<TKey extends string | number | symbol, TValue> = Record<
    TKey,
    TValue
  >;

  export class JsonSchemaFieldDto {
    // @DataMember
    public fieldName: string;

    public constructor(init?: Partial<JsonSchemaFieldDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class StringFieldDto extends JsonSchemaFieldDto {
    // @DataMember
    public format?: string;

    // @DataMember
    public pattern?: string;

    // @DataMember
    public minLength?: number;

    // @DataMember
    public maxLength?: number;

    // @DataMember
    public translateOptions?: IReadOnlyDictionary<string, string>;

    // @DataMember
    public default?: string;

    // @DataMember
    public unique?: boolean;

    public constructor(init?: Partial<StringFieldDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DecimalFieldDto extends JsonSchemaFieldDto {
    // @DataMember
    public minimum?: number;

    // @DataMember
    public maximum?: number;

    // @DataMember
    public multipleOf?: number;

    // @DataMember
    public default?: number;

    // @DataMember
    public unique?: boolean;

    public constructor(init?: Partial<DecimalFieldDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CurrencyDefaultDto {
    // @DataMember
    public value: number;

    // @DataMember
    public currency: string;

    public constructor(init?: Partial<CurrencyDefaultDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class CurrencyFieldDto extends JsonSchemaFieldDto {
    // @DataMember
    public allowedCurrencies?: IReadOnlyList<string>;

    // @DataMember
    public multipleOf?: number;

    // @DataMember
    public minimum?: number;

    // @DataMember
    public maximum?: number;

    // @DataMember
    public default?: CurrencyDefaultDto;

    public constructor(init?: Partial<CurrencyFieldDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class BooleanFieldDto extends JsonSchemaFieldDto {
    // @DataMember
    public default?: boolean;

    public constructor(init?: Partial<BooleanFieldDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DateFieldDto extends JsonSchemaFieldDto {
    // @DataMember
    public minimum?: number;

    // @DataMember
    public maximum?: number;

    // @DataMember
    public default?: number;

    public constructor(init?: Partial<DateFieldDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class IntegerFieldDto extends JsonSchemaFieldDto {
    // @DataMember
    public minimum?: number;

    // @DataMember
    public maximum?: number;

    // @DataMember
    public default?: number;

    // @DataMember
    public unique?: boolean;

    public constructor(init?: Partial<IntegerFieldDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GeolocationFieldDto extends JsonSchemaFieldDto {
    // @DataMember
    public allowedTypes?: IReadOnlyList<string>;

    public constructor(init?: Partial<GeolocationFieldDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class TagsFieldDto extends JsonSchemaFieldDto {
    // @DataMember
    public minItems?: number;

    // @DataMember
    public maxItems?: number;

    // @DataMember
    public default?: IReadOnlyList<string>;

    public constructor(init?: Partial<TagsFieldDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class FileFieldDto extends JsonSchemaFieldDto {
    // @DataMember
    public storages?: IReadOnlyList<string>;

    // @DataMember
    public minItems?: number;

    // @DataMember
    public maxItems?: number;

    // @DataMember
    public allowedFileType?: string;

    // @DataMember
    public maxSizeMb?: number;

    public constructor(init?: Partial<FileFieldDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class TaxonomySelectionFieldDto extends JsonSchemaFieldDto {
    // @DataMember
    public taxonomyId?: string;

    // @DataMember
    public multiple: boolean;

    // @DataMember
    public displayField?: string;

    public constructor(init?: Partial<TaxonomySelectionFieldDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CollectionSelectionFieldDto extends JsonSchemaFieldDto {
    // @DataMember
    public collectionId?: string;

    // @DataMember
    public displayField?: string;

    // @DataMember
    public multiple: boolean;

    public constructor(init?: Partial<CollectionSelectionFieldDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class UserSelectionFieldDto extends JsonSchemaFieldDto {
    // @DataMember
    public multiple: boolean;

    // @DataMember
    public displayField?: string;

    public constructor(init?: Partial<UserSelectionFieldDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class RoleSelectionFieldDto extends JsonSchemaFieldDto {
    // @DataMember
    public multiple: boolean;

    // @DataMember
    public displayField?: string;

    public constructor(init?: Partial<RoleSelectionFieldDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EnumSelectionFieldDto extends JsonSchemaFieldDto {
    // @DataMember
    public values?: IReadOnlyList<string>;

    // @DataMember
    public multiple: boolean;

    // @DataMember
    public default?: IReadOnlyList<string>;

    public constructor(init?: Partial<EnumSelectionFieldDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ObjectFieldDto extends JsonSchemaFieldDto {
    // @DataMember
    public properties: IReadOnlyList<JsonSchemaFieldDto>;

    // @DataMember
    public required?: IReadOnlyList<string>;

    public constructor(init?: Partial<ObjectFieldDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ArrayFieldDto extends JsonSchemaFieldDto {
    // @DataMember
    public items: JsonSchemaFieldDto;

    // @DataMember
    public minItems?: number;

    // @DataMember
    public maxItems?: number;

    // @DataMember
    public uniqueItems?: boolean;

    public constructor(init?: Partial<ArrayFieldDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class JsonFieldDto extends JsonSchemaFieldDto {
    // @DataMember
    public maxBytes?: number;

    public constructor(init?: Partial<JsonFieldDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract(Namespace="http://codemash.io/types/")
  export class RequestBase implements IVersionBasedRequest, IHasCorrelationIdRequest {
    /** @description TimeZone */
    // @DataMember
    // @ApiMember(DataType="string", Description="TimeZone", Name="TimeZoneId", ParameterType="header")
    public timeZoneId?: string;

    /** @description The CodeMash API version used to fetch data from the API. If not specified, the last version will be used.  E.g.: v3 */
    // @DataMember
    // @ApiMember(DataType="string", Description="The CodeMash API version used to fetch data from the API. If not specified, the last version will be used.  E.g.: v3", IsRequired=true, Name="version", ParameterType="path")
    public version: string;

    /** @description CorrelationId for each request */
    // @DataMember
    // @ApiMember(DataType="string", Description="CorrelationId for each request", Name="CorrelationId", ParameterType="header")
    public correlationId?: string;

    public constructor(init?: Partial<RequestBase>) {
      (Object as any).assign(this, init);
    }
  }

  export interface IVersionBasedRequest {
    version: string;
  }

  export interface IHasCorrelationIdRequest {
    correlationId?: string;
  }

  // @DataContract(Namespace="http://codemash.io/types/")
  export class CodeMashRequestBase extends RequestBase implements IHasProjectId, IHasEnv {
    /** @description ID of your project. Can be passed in a header as norbix-project-id. */
    // @DataMember
    // @ApiMember(DataType="string", Description="ID of your project. Can be passed in a header as norbix-project-id.", IsRequired=true, Name="norbix-project-id", ParameterType="header")
    public projectId: string;

    /** @description Target environment for this request (e.g. TEST, STAGING). Optional — when omitted the request runs against PROD. Can be passed in a header as norbix-env. */
    // @DataMember
    // @ApiMember(DataType="string", Description="Target environment for this request (e.g. TEST, STAGING). Optional — when omitted the request runs against PROD. Can be passed in a header as norbix-env.", Name="norbix-env", ParameterType="header")
    public env?: string;

    public constructor(init?: Partial<CodeMashRequestBase>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export interface IHasProjectId {
    projectId: string;
  }

  export interface IHasEnv {
    env?: string;
  }

  export enum Gender {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other',
  }

  export enum MarketingBlockReason {
    Unspecified = 'Unspecified',
    Unsubscribed = 'Unsubscribed',
    Complaint = 'Complaint',
    HardBounce = 'HardBounce',
    InvalidEmail = 'InvalidEmail',
    AdminBlock = 'AdminBlock',
  }

  export class UserGeneralInfoDto {
    public phone?: string;
    public primaryEmail?: string;
    public displayName?: string;
    public firstName?: string;
    public lastName?: string;
    public fullName?: string;
    public addressLine1?: string;
    public addressLine2?: string;
    public country?: string;
    public city?: string;
    public state?: string;
    public postalCode?: string;
    public company?: string;
    public gender?: Gender;
    public birthDate?: number;
    public timeZone?: string;
    public language?: string;
    public blockAllMarketingMessages: boolean;
    public blockedTags?: { [index: string]: HashSet<string> };
    public blockReasons?: MarketingBlockReason[];
    public extraMetadata?: string;
    public notes?: string;

    public constructor(init?: Partial<UserGeneralInfoDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class SaveUser extends CodeMashRequestBase {
    /** @description Database integration id. Optional — defaults to the request environment's default integration. */
    // @DataMember
    // @ApiMember(Description="Database integration id. Optional — defaults to the request environment's default integration.")
    public databaseIntegrationId?: string;

    /** @description User Info */
    // @DataMember
    // @ApiMember(DataType="object", Description="User Info", Name="UserGeneralInfo", ParameterType="body")
    public userGeneralInfo?: UserGeneralInfoDto;

    /** @description Attach this login to an existing user id. Optional. */
    // @DataMember
    // @ApiMember(Description="Attach this login to an existing user id. Optional.")
    public userId?: string;

    /** @description Ignore UserRegistersAsRole from Membership Settings */
    // @DataMember
    // @ApiMember(DataType="boolean", Description="Ignore UserRegistersAsRole from Membership Settings", Name="IgnoreUserRegistersAsRole", ParameterType="body")
    public ignoreUserRegistersAsRole: boolean;

    public constructor(init?: Partial<SaveUser>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class SaveUserWithRolesBase extends SaveUser {
    // @DataMember
    public roles: string[] = [];

    /** @description Tags to put on the new user's contact (free labels campaigns and segments select by, normalised like any tag). Only here, on the routes that need membership:create — a public self sign-up cannot tag itself. Ignored for a service user (no contact). */
    // @DataMember
    // @ApiMember(Description="Tags to put on the new user's contact (free labels campaigns and segments select by, normalised like any tag). Only here, on the routes that need membership:create — a public self sign-up cannot tag itself. Ignored for a service user (no contact).")
    public tags?: string[];

    public constructor(init?: Partial<SaveUserWithRolesBase>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export interface IPublicRegistrationRequest {
    roles?: string[];
  }

  export class CodeMashListPaginationRequestBase
    extends RequestBase
    implements IHasProjectId, IHasEnv
  {
    /** @description ID of your project. Can be passed in a header as norbix-project-id. */
    // @DataMember
    // @ApiMember(DataType="string", Description="ID of your project. Can be passed in a header as norbix-project-id.", IsRequired=true, Name="norbix-project-id", ParameterType="header")
    public projectId: string;

    /** @description Target environment for this request (e.g. TEST, STAGING). Optional — when omitted the request runs against PROD. Can be passed in a header as norbix-env. */
    // @DataMember
    // @ApiMember(DataType="string", Description="Target environment for this request (e.g. TEST, STAGING). Optional — when omitted the request runs against PROD. Can be passed in a header as norbix-env.", Name="norbix-env", ParameterType="header")
    public env?: string;

    /** @description Cursor token — fetch the page AFTER this item. */
    // @DataMember
    // @ApiMember(DataType="string", Description="Cursor token — fetch the page AFTER this item.", Name="startingAfter", ParameterType="query")
    public startingAfter?: string;

    /** @description Cursor token — fetch the page BEFORE this item. */
    // @DataMember
    // @ApiMember(DataType="string", Description="Cursor token — fetch the page BEFORE this item.", Name="endingBefore", ParameterType="query")
    public endingBefore?: string;

    /** @description Amount of records to return. */
    // @DataMember
    // @ApiMember(DataType="integer", Description="Amount of records to return.", Format="int32", Name="pageSize", ParameterType="query")
    public pageSize?: number;

    public constructor(init?: Partial<CodeMashListPaginationRequestBase>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export interface IPasskeyCeremonyRequest {}

  export class CursorArgs implements ICursorArgs {
    public field: string;
    public order: number;

    public constructor(init?: Partial<CursorArgs>) {
      (Object as any).assign(this, init);
    }
  }

  export class PagingArgs {
    public cursorArgs?: CursorArgs;
    public pageSize?: number;
    public startingAfter?: string;
    public endingBefore?: string;

    public constructor(init?: Partial<PagingArgs>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class RegisterFileItem {
    // @DataMember
    public path?: string;

    // @DataMember
    public ownerUserId?: string;

    // @DataMember
    public contentType?: string;

    // @DataMember
    public sizeBytes?: number;

    // @DataMember
    public fileName?: string;

    public constructor(init?: Partial<RegisterFileItem>) {
      (Object as any).assign(this, init);
    }
  }

  export class WriteLogEntry {
    /** @description information (default), warning or error. */
    // @ApiMember(Description="information (default), warning or error.")
    public level?: string;

    /** @description A short line, 1–200 characters — what the Logs list shows. */
    // @ApiMember(Description="A short line, 1–200 characters — what the Logs list shows.", IsRequired=true)
    public title: string;

    /** @description Details, at most 8 000 characters. */
    // @ApiMember(Description="Details, at most 8 000 characters.")
    public message?: string;

    /** @description Your own code for this kind of line, e.g. order:paid — lower case letters, digits and _ . : -, at most 64. Stored as app:<code>; app:log when empty. */
    // @ApiMember(Description="Your own code for this kind of line, e.g. order:paid — lower case letters, digits and _ . : -, at most 64. Stored as app:<code>; app:log when empty.")
    public eventCode?: string;

    /** @description Groups your lines into one flow in the Logs details view: at most 64 letters, digits, _ or -. Empty = the id of this request. */
    // @ApiMember(Description="Groups your lines into one flow in the Logs details view: at most 64 letters, digits, _ or -. Empty = the id of this request.")
    public correlationId?: string;

    /** @description When it happened (UTC). Empty = when Norbix received it. At most 7 days old and at most 5 minutes ahead. */
    // @ApiMember(Description="When it happened (UTC). Empty = when Norbix received it. At most 7 days old and at most 5 minutes ahead.")
    public timestamp?: string;

    /** @description Extra fields, at most 20; key at most 64, value at most 2 000 characters. Values under secret-looking keys (password, token, apiKey …) are masked. */
    // @ApiMember(Description="Extra fields, at most 20; key at most 64, value at most 2 000 characters. Values under secret-looking keys (password, token, apiKey …) are masked.")
    public meta?: { [index: string]: string };

    public constructor(init?: Partial<WriteLogEntry>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class PaymentOrderLineInput {
    // @DataMember
    public sku?: string;

    // @DataMember
    public title?: string;

    // @DataMember
    public quantity: number;

    // @DataMember
    public unitAmountMinor: number;

    public constructor(init?: Partial<PaymentOrderLineInput>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class FileChecksumDto {
    // @DataMember(Order=1)
    public algorithm: string;

    // @DataMember(Order=2)
    public hash: string;

    public constructor(init?: Partial<FileChecksumDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class FileResourceDto {
    // @DataMember(Order=1)
    public id?: string;

    // @DataMember(Order=2)
    public originalFileName: string;

    // @DataMember(Order=3)
    public extension: string;

    // @DataMember(Order=4)
    public storedFileName: string;

    // @DataMember(Order=5)
    public sizeBytes?: number;

    // @DataMember(Order=6)
    public checksum?: FileChecksumDto;

    public constructor(init?: Partial<FileResourceDto>) {
      (Object as any).assign(this, init);
    }
  }

  export enum FileProvider {
    Local = 'Local',
    AwsS3 = 'AwsS3',
    AzureBlobStorage = 'AzureBlobStorage',
    GoogleCloudStorage = 'GoogleCloudStorage',
    Ftp = 'Ftp',
    AppleICloud = 'AppleICloud',
    DropBox = 'DropBox',
    GoogleDrive = 'GoogleDrive',
  }

  // @DataContract
  export class FileResourceRefDto {
    // @DataMember(Order=1)
    public resource: FileResourceDto;

    // @DataMember(Order=2)
    public integrationId: string;

    // @DataMember(Order=3)
    public provider: FileProvider;

    // @DataMember(Order=4)
    public path: string;

    // @DataMember(Order=5)
    public publicUrl?: string;

    // @DataMember(Order=6)
    public isPublic: boolean;

    public constructor(init?: Partial<FileResourceRefDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ImportColumnMappingDto {
    // @DataMember
    public csvColumnIndex: number;

    // @DataMember
    public csvHeader?: string;

    // @DataMember
    public propertyName?: string;

    // @DataMember
    public dontImportOnError: boolean;

    public constructor(init?: Partial<ImportColumnMappingDto>) {
      (Object as any).assign(this, init);
    }
  }

  export enum EmailCampaignRecipientsSourceTypes {
    AllUsers = 'AllUsers',
    SpecifiedUsers = 'SpecifiedUsers',
    AccountUsers = 'AccountUsers',
    Email = 'Email',
    Collection = 'Collection',
    TriggerSubject = 'TriggerSubject',
  }

  export enum TokenMappingResolverType {
    NotSet = 'NotSet',
    Custom = 'Custom',
    Project = 'Project',
    ProjectSocials = 'ProjectSocials',
    Initiator = 'Initiator',
    Recipient = 'Recipient',
    SchemaRecord = 'SchemaRecord',
    TargetUser = 'TargetUser',
    TagDefinitions = 'TagDefinitions',
    EmailSignatures = 'EmailSignatures',
    Campaign = 'Campaign',
    Template = 'Template',
    EmailFooters = 'EmailFooters',
    Old = 'Old',
    New = 'New',
    RequestInput = 'RequestInput',
    IntegrationConfig = 'IntegrationConfig',
    IntegrationSecret = 'IntegrationSecret',
    StepOutput = 'StepOutput',
  }

  export enum SecretValueFormat {
    Raw = 'Raw',
    Bearer = 'Bearer',
    Basic = 'Basic',
    Prefixed = 'Prefixed',
  }

  // @DataContract
  export class TokenMappingDto {
    // @DataMember
    public key: string;

    // @DataMember
    public value: string;

    // @DataMember
    public resolver: TokenMappingResolverType;

    // @DataMember
    public secretKeys?: string[];

    // @DataMember
    public secretFormat?: SecretValueFormat;

    public constructor(init?: Partial<TokenMappingDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class EmailCampaignRequest {
    public source: EmailCampaignRecipientsSourceTypes;
    public templateId: string;
    public integrationId?: string;
    public validationIntegrationId?: string;
    public language?: string;
    public initiatorId?: string;
    public notes?: string;
    // @DataMember
    public mappedTokens?: TokenMappingDto[];

    // @DataMember
    public campaignTime?: number;

    public constructor(init?: Partial<EmailCampaignRequest>) {
      (Object as any).assign(this, init);
    }
  }

  export enum SmsCampaignRecipientsSourceTypes {
    AllUsers = 'AllUsers',
    SpecifiedUsers = 'SpecifiedUsers',
    AccountUsers = 'AccountUsers',
    PhoneNumbers = 'PhoneNumbers',
    Collection = 'Collection',
    TriggerSubject = 'TriggerSubject',
  }

  // @Flags()
  export enum RespectTimeZoneSettings {
    RespectToLastLoginZone = 1,
    RespectToRegistrationZone = 2,
    RespectToRegistrationProjectZone = 4,
  }

  // @DataContract
  export class SmsCampaignDeliverySettingsDto {
    // @DataMember
    public recipientsSourceType: SmsCampaignRecipientsSourceTypes;

    // @DataMember
    public mappedTokens?: TokenMappingDto[];

    // @DataMember
    public campaignTime?: number;

    // @DataMember
    public respectTimeZoneSettings?: RespectTimeZoneSettings;

    public constructor(init?: Partial<SmsCampaignDeliverySettingsDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class SmsToAllUsersDeliverySettingsDto extends SmsCampaignDeliverySettingsDto {
    // @DataMember
    public rolesNames?: string[];

    // @DataMember
    public userTags?: string[];

    public constructor(init?: Partial<SmsToAllUsersDeliverySettingsDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class SmsToUsersDeliverySettingsDto extends SmsCampaignDeliverySettingsDto {
    // @DataMember
    public recipients: string[] = [];

    public constructor(init?: Partial<SmsToUsersDeliverySettingsDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class SmsToAccountUsersDeliverySettingsDto extends SmsCampaignDeliverySettingsDto {
    // @DataMember
    public recipients: string[] = [];

    public constructor(init?: Partial<SmsToAccountUsersDeliverySettingsDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export enum CollectionEmailCampaignRecipientField {
    User = 'User',
    Email = 'Email',
  }

  // @DataContract
  export class SmsToCollectionRecordsDeliverySettingsDto extends SmsCampaignDeliverySettingsDto {
    // @DataMember
    public fields: string[] = [];

    // @DataMember
    public fieldType: CollectionEmailCampaignRecipientField;

    // @DataMember
    public schemaName: string;

    // @DataMember
    public roleNames?: string[];

    // @DataMember
    public languages?: string[];

    // @DataMember
    public recordIds?: string[];

    public constructor(init?: Partial<SmsToCollectionRecordsDeliverySettingsDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class SmsToPhoneNumbersDeliverySettingsDto extends SmsCampaignDeliverySettingsDto {
    // @DataMember
    public phoneNumbers: string[] = [];

    public constructor(init?: Partial<SmsToPhoneNumbersDeliverySettingsDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export enum PushCampaignRecipientsSourceTypes {
    AllUsers = 'AllUsers',
    SpecifiedUsers = 'SpecifiedUsers',
    Collection = 'Collection',
    Devices = 'Devices',
    AccountUsers = 'AccountUsers',
    TriggerSubject = 'TriggerSubject',
  }

  export class PushCampaignRequest {
    public source: PushCampaignRecipientsSourceTypes;
    public templateId: string;
    public integrationId?: string;
    public language?: string;
    public initiatorId?: string;
    public notes?: string;
    // @DataMember
    public mappedTokens?: TokenMappingDto[];

    // @DataMember
    public campaignTime?: number;

    public constructor(init?: Partial<PushCampaignRequest>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export enum CodeMashRelease {
    NotSet = 'NotSet',
    Community = 'Community',
    ManagedService = 'ManagedService',
    Enterprise = 'Enterprise',
  }

  export enum CodeMashRuntime {
    Development = 'Development',
    CI = 'CI',
    Staging = 'Staging',
    Production = 'Production',
  }

  export class EchoRegionDto {
    public code: string;
    public displayName: string;
    public apiUrl: string;
    public hubUrl: string;

    public constructor(init?: Partial<EchoRegionDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class EchoAgentSnippetDto {
    public client: string;
    public kind: string;
    public recommended: boolean;
    public auth: string;
    public config: string;

    public constructor(init?: Partial<EchoAgentSnippetDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class EchoAgentDto {
    public mcpUrl: string;
    public oAuthMetadataUrl?: string;
    public installationType: string;
    public onboardingDocsUrl: string;
    public toolsUrl: string;
    public cliPackage: string;
    public cliInstallCommand: string;
    public deviceAuthorizationUrl: string;
    public deviceTokenUrl: string;
    public snippets: EchoAgentSnippetDto[] = [];

    public constructor(init?: Partial<EchoAgentDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class EchoHostingPlatformDto {
    public provider: string;
    public isAws: boolean;

    public constructor(init?: Partial<EchoHostingPlatformDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class QuickConnectProviderDto {
    // @DataMember
    public module: string;

    // @DataMember
    public provider: string;

    // @DataMember
    public available: boolean;

    // @DataMember
    public callbackKind: string;

    // @DataMember
    public requiredInputs: string[] = [];

    // @DataMember
    public modes: string[] = [];

    // @DataMember
    public redirectUrl: string;

    // @DataMember
    public platformWebhookUrls: string[] = [];

    public constructor(init?: Partial<QuickConnectProviderDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class EchoConnectDto {
    public providers: QuickConnectProviderDto[] = [];

    public constructor(init?: Partial<EchoConnectDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class EchoKeylessDto {
    public issuer: string;
    public available: boolean;
    public unavailableReason?: string;

    public constructor(init?: Partial<EchoKeylessDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class PublicBrandDto {
    public displayName: string;
    public mainColor?: string;
    public accentColor?: string;
    public logoUrl?: string;
    public iconUrl?: string;

    public constructor(init?: Partial<PublicBrandDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class PublicPasswordPolicyDto {
    public minLength: number;
    public maxLength?: number;
    public minNumbers?: number;
    public minUpper?: number;
    public minLower?: number;
    public minSpecial?: number;
    public allowedSpecial?: string;

    public constructor(init?: Partial<PublicPasswordPolicyDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class PublicAuthDto {
    public socialProviders: string[] = [];
    public passkey: boolean;
    public methods?: string[];
    public passwordPolicy?: PublicPasswordPolicyDto;

    public constructor(init?: Partial<PublicAuthDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class PublicAiAssistantDto {
    public id: string;
    public name: string;
    public welcome?: string;

    public constructor(init?: Partial<PublicAiAssistantDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class PublicAiChatDto {
    public enabled: boolean;
    public assistants: PublicAiAssistantDto[] = [];

    public constructor(init?: Partial<PublicAiChatDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ErrorDto {
    public message: string;
    public errorCode?: string;
    public context?: { [index: string]: string };
    public stackTrace?: ErrorDto[];

    public constructor(init?: Partial<ErrorDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class CodeMashResponseStatus {
    public isSuccess: boolean;
    public errors?: ErrorDto[];

    public constructor(init?: Partial<CodeMashResponseStatus>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class ResponseBase {
    // @DataMember
    public responseStatus: CodeMashResponseStatus;

    public constructor(init?: Partial<ResponseBase>) {
      (Object as any).assign(this, init);
    }
  }

  export class EndUserChatAttachment {
    public id: string;
    public sessionId: string;
    public fileName: string;
    public contentType: string;
    public kind: string;
    public size: number;
    public summary?: string;
    public createdAtUtc: string;

    public constructor(init?: Partial<EndUserChatAttachment>) {
      (Object as any).assign(this, init);
    }
  }

  export class EndUserChatMemoryNote {
    public id: string;
    public sessionId: string;
    public kind: string;
    public text: string;
    public createdAtUtc: string;

    public constructor(init?: Partial<EndUserChatMemoryNote>) {
      (Object as any).assign(this, init);
    }
  }

  export class EndUserChatAssistant {
    public id: string;
    public name: string;
    public welcomeMessage?: string;
    public isDefault: boolean;
    public memoryEnabled: boolean;

    public constructor(init?: Partial<EndUserChatAssistant>) {
      (Object as any).assign(this, init);
    }
  }

  export class EndUserChatPlan {
    public id: string;
    public name: string;
    public quotaUnit: string;
    public monthlyQuota: number;
    public used: number;
    public remaining: number;
    public attachments: boolean;
    public rag: boolean;
    public memory: boolean;

    public constructor(init?: Partial<EndUserChatPlan>) {
      (Object as any).assign(this, init);
    }
  }

  export class EndUserChatSession {
    public id: string;
    public assistantId?: string;
    public title?: string;
    public isPinned: boolean;
    public isArchived: boolean;
    public lastSeq: number;
    public createdAtUtc: string;
    public updatedAtUtc: string;

    public constructor(init?: Partial<EndUserChatSession>) {
      (Object as any).assign(this, init);
    }
  }

  export class AiChatEntryWireDto {
    public kind: string;
    public id: string;
    public seq: number;
    public atUtc: string;
    public refEntryId?: string;
    public workItemId?: string;
    public feedback?: string;
    public feedbackAtUtc?: string;
    public feedbackByUserAuthId?: string;

    public constructor(init?: Partial<AiChatEntryWireDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class EndUserAiToolParameter {
    public name: string;
    public type: string;
    public required: boolean;
    public description?: string;

    public constructor(init?: Partial<EndUserAiToolParameter>) {
      (Object as any).assign(this, init);
    }
  }

  export class EndUserAiTool {
    public name: string;
    public description: string;
    public toolsets: string[] = [];
    public requiresConfirmation: boolean;
    public parameters: EndUserAiToolParameter[] = [];

    public constructor(init?: Partial<EndUserAiTool>) {
      (Object as any).assign(this, init);
    }
  }

  export enum AuthType {
    Service = 'Service',
    Email = 'Email',
    UserName = 'UserName',
    Phone = 'Phone',
    Guest = 'Guest',
    Social = 'Social',
  }

  export class AccessInformationDto {
    public ip?: string;
    public date?: string;
    public timeZone?: string;

    public constructor(init?: Partial<AccessInformationDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class RegistrationDto {
    public registrationInformation: AccessInformationDto;

    public constructor(init?: Partial<RegistrationDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class LoginDto {
    public needChangePasswordOnNextLogin: boolean;
    public lastAccessInformation?: AccessInformationDto;

    public constructor(init?: Partial<LoginDto>) {
      (Object as any).assign(this, init);
    }
  }

  export enum AuthStatus {
    Registered = 0,
    PendingValidation = 2,
    Invited = 4,
    Active = 8,
    Unregistered = 16,
    Suspended = 32,
    InActive = 64,
    Blocked = 128,
  }

  export class AuthDto implements IBindableContract {
    public id: string;
    public type: AuthType;
    public email?: string;
    public userName?: string;
    public registration?: RegistrationDto;
    public login?: LoginDto;
    public generalInfo?: UserGeneralInfoDto;
    public roles?: string[];
    public pushDevices?: string[];
    public tags?: string[];
    public status: AuthStatus;
    public createdOn: string;
    public modifiedOn: string;
    public credentialVersion?: string;

    public constructor(init?: Partial<AuthDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class PaginatedResponse<TViewModelProjection> {
    public items: IList<TViewModelProjection>;
    public hasMore: boolean;
    public hasPrevious: boolean;
    public startingAfter?: string;
    public endingBefore?: string;

    public constructor(init?: Partial<PaginatedResponse<TViewModelProjection>>) {
      (Object as any).assign(this, init);
    }
  }

  export class UserMarketingPreferencesDto {
    public blockAllMarketingMessages: boolean;
    public blockedTags?: { [index: string]: HashSet<string> };
    public blockReasons?: MarketingBlockReason[];

    public constructor(init?: Partial<UserMarketingPreferencesDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class PasskeyListItemDto {
    public credentialId: string;
    public friendlyName: string;
    public registeredOnUtc: string;
    public lastUsedOnUtc: string;
    public isRevoked: boolean;

    public constructor(init?: Partial<PasskeyListItemDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class TermMultiParentDto {
    // @DataMember
    public taxonomyId: string;

    // @DataMember
    public parentId: string;

    // @DataMember
    public name?: string;

    // @DataMember
    public names?: { [index: string]: string };

    public constructor(init?: Partial<TermMultiParentDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class TermTreeDto {
    // @DataMember
    public id: string;

    // @DataMember
    public taxonomyId?: string;

    // @DataMember
    public taxonomyName?: string;

    // @DataMember
    public parentId?: string;

    // @DataMember
    public order?: number;

    // @DataMember
    public name?: string;

    // @DataMember
    public names?: { [index: string]: string };

    // @DataMember
    public slug?: string;

    // @DataMember
    public description?: string;

    // @DataMember
    public descriptions?: { [index: string]: string };

    // @DataMember
    public multiParents?: TermMultiParentDto[];

    // @DataMember
    public meta?: Object;

    // @DataMember
    public children?: TermTreeDto[];

    public constructor(init?: Partial<TermTreeDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class TaxonomyTreeDto {
    // @DataMember
    public viewId: string;

    // @DataMember
    public taxonomyName: string;

    // @DataMember
    public taxonomySlug: string;

    // @DataMember
    public parentId?: string;

    // @DataMember
    public children?: TaxonomyTreeDto[];

    // @DataMember
    public terms?: TermTreeDto[];

    public constructor(init?: Partial<TaxonomyTreeDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class TermDto {
    // @DataMember
    public id: string;

    // @DataMember
    public taxonomyId?: string;

    // @DataMember
    public taxonomyName?: string;

    // @DataMember
    public parentId?: string;

    // @DataMember
    public order?: number;

    // @DataMember
    public name?: string;

    // @DataMember
    public names?: { [index: string]: string };

    // @DataMember
    public slug?: string;

    // @DataMember
    public description?: string;

    // @DataMember
    public descriptions?: { [index: string]: string };

    // @DataMember
    public multiParents?: TermMultiParentDto[];

    // @DataMember
    public meta?: Object;

    // @DataMember
    public origin?: string;

    public constructor(init?: Partial<TermDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class DataSchemaDto {
    // @DataMember
    public json: string;

    // @DataMember
    public fields: JsonSchemaFieldDto[] = [];

    public constructor(init?: Partial<DataSchemaDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class VisualSchemaDto {
    // @DataMember
    public json: string;

    public constructor(init?: Partial<VisualSchemaDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class SchemaUniqueIndexDto {
    // @DataMember
    public fields: string[] = [];

    public constructor(init?: Partial<SchemaUniqueIndexDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class SchemaSettingsDto {
    // @DataMember
    public softDelete: boolean;

    // @DataMember
    public hasRecordOwner: boolean;

    // @DataMember
    public description?: string;

    // @DataMember
    public uniqueIndexes?: SchemaUniqueIndexDto[];

    // @DataMember
    public endUserOwnRecords?: boolean;

    public constructor(init?: Partial<SchemaSettingsDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class SchemaEmbedSettingsDto {
    // @DataMember
    public enabled: boolean;

    // @DataMember
    public fields: string[] = [];

    // @DataMember
    public embeddingIntegrationId?: string;

    // @DataMember
    public perUser: boolean;

    public constructor(init?: Partial<SchemaEmbedSettingsDto>) {
      (Object as any).assign(this, init);
    }
  }

  export enum TriggerType {
    Membership = 'Membership',
    Schema = 'Schema',
    Files = 'Files',
    Payments = 'Payments',
    Ai = 'Ai',
  }

  export enum TriggerActionType {
    Code = 'Code',
    Push = 'Push',
    Sms = 'Sms',
    Email = 'Email',
    WebhookCall = 'WebhookCall',
    SseCall = 'SseCall',
    Marketplace = 'Marketplace',
    Workflow = 'Workflow',
  }

  // @DataContract
  export class TriggerActionDto {
    // @DataMember
    public type: TriggerActionType;

    // @DataMember
    public integrationId?: string;

    public constructor(init?: Partial<TriggerActionDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class ExecutionIdentitySummaryDto {
    // @DataMember
    public id: string;

    // @DataMember
    public name: string;

    // @DataMember
    public isDefault: boolean;

    // @DataMember
    public status: string;

    public constructor(init?: Partial<ExecutionIdentitySummaryDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class TriggerDto implements IHasViewId, IQueuedTrigger {
    // @DataMember
    public type: TriggerType;

    // @DataMember
    public viewId: string;

    // @DataMember
    public name: string;

    // @DataMember
    public thenAction: TriggerActionDto;

    // @DataMember
    public description?: string;

    // @DataMember
    public isEnabled: boolean;

    // @DataMember
    public activationCode?: string;

    // @DataMember
    public order?: number;

    // @DataMember
    public breakOnError: boolean;

    // @DataMember
    public savedByAuthId?: string;

    // @DataMember
    public executionIdentityId?: string;

    // @DataMember
    public executionIdentity?: ExecutionIdentitySummaryDto;

    public constructor(init?: Partial<TriggerDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class SchemaDto implements IHasViewId {
    // @DataMember
    public viewId: string;

    // @DataMember
    public schemaName: string;

    // @DataMember
    public schemaSlug?: string;

    // @DataMember
    public version: number;

    // @DataMember
    public metaSchemaVersion: number;

    // @DataMember
    public dataSchema: DataSchemaDto;

    // @DataMember
    public visualSchema: VisualSchemaDto;

    // @DataMember
    public publishedAt: string;

    // @DataMember
    public settings?: SchemaSettingsDto;

    // @DataMember
    public embed?: SchemaEmbedSettingsDto;

    // @DataMember
    public triggers?: TriggerDto[];

    public constructor(init?: Partial<SchemaDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class SchemaListProjection implements IHasViewId {
    // @DataMember
    public viewId: string;

    // @DataMember
    public schemaName: string;

    // @DataMember
    public schemaTitle: string;

    // @DataMember
    public latestVersion?: number;

    // @DataMember
    public hasDraft: boolean;

    // @DataMember
    public metaSchemaVersion: number;

    // @DataMember
    public description?: string;

    // @DataMember
    public env?: string;

    public constructor(init?: Partial<SchemaListProjection>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class PublicFolderDto {
    // @DataMember(Order=1)
    public path: string;

    // @DataMember(Order=2)
    public publicId: string;

    // @DataMember(Order=3)
    public publicUrl?: string;

    // @DataMember(Order=4)
    public inherited: boolean;

    public constructor(init?: Partial<PublicFolderDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class RegisterFileResult {
    public index: number;
    public path?: string;
    public ownerUserId?: string;
    public status?: string;
    public fileId?: string;
    public verified?: boolean;
    public warning?: string;
    public errorCode?: string;
    public errorStatus?: number;
    public error?: string;

    public constructor(init?: Partial<RegisterFileResult>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class OwnPushDeviceDto {
    // @DataMember
    public id: string;

    // @DataMember
    public provider: string;

    // @DataMember
    public token: string;

    // @DataMember
    public platform?: string;

    // @DataMember
    public osName?: string;

    // @DataMember
    public osVersion?: string;

    // @DataMember
    public appVersion?: string;

    // @DataMember
    public deviceName?: string;

    // @DataMember
    public modelName?: string;

    // @DataMember
    public brand?: string;

    // @DataMember
    public installationId?: string;

    // @DataMember
    public locale?: string;

    // @DataMember
    public timeZone?: string;

    // @DataMember
    public updatedAtUtc?: string;

    public constructor(init?: Partial<OwnPushDeviceDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class OwnPushMessageDto {
    // @DataMember
    public id: string;

    // @DataMember
    public campaignId: string;

    // @DataMember
    public title?: string;

    // @DataMember
    public body?: string;

    // @DataMember
    public sentAtUtc?: string;

    // @DataMember
    public isRead: boolean;

    // @DataMember
    public readAtUtc?: string;

    public constructor(init?: Partial<OwnPushMessageDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class PaymentOrderLineDto {
    // @DataMember
    public sku: string;

    // @DataMember
    public title: string;

    // @DataMember
    public quantity: number;

    // @DataMember
    public unitAmountMinor: number;

    // @DataMember
    public amountMinor: number;

    public constructor(init?: Partial<PaymentOrderLineDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class PaymentOrderCheckoutDto {
    // @DataMember
    public attempt: number;

    // @DataMember
    public integrationId: string;

    // @DataMember
    public provider: string;

    // @DataMember
    public providerOrderId: string;

    // @DataMember
    public providerReference: string;

    // @DataMember
    public paymentUrl: string;

    // @DataMember
    public method: string;

    // @DataMember
    public startedOnUtc: string;

    // @DataMember
    public expiresAtUtc: string;

    public constructor(init?: Partial<PaymentOrderCheckoutDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class PaymentOrderDto {
    // @DataMember
    public id: string;

    // @DataMember
    public env: string;

    // @DataMember
    public buyerUserId: string;

    // @DataMember
    public merchantReference: string;

    // @DataMember
    public currency: string;

    // @DataMember
    public priceVersion: string;

    // @DataMember
    public lines: PaymentOrderLineDto[] = [];

    // @DataMember
    public totalMinor: number;

    // @DataMember
    public metadata: { [index: string]: string } = {};

    // @DataMember
    public status: string;

    // @DataMember
    public createdOnUtc: string;

    // @DataMember
    public updatedOnUtc: string;

    // @DataMember
    public checkouts: PaymentOrderCheckoutDto[] = [];

    // @DataMember
    public settledMinor?: number;

    // @DataMember
    public refundedMinor: number;

    // @DataMember
    public paidOnUtc?: string;

    // @DataMember
    public providerPaymentId?: string;

    // @DataMember
    public mismatches: string[] = [];

    public constructor(init?: Partial<PaymentOrderDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class WorkflowRunActorDto {
    // @DataMember
    public userId?: string;

    // @DataMember
    public kind: string;

    public constructor(init?: Partial<WorkflowRunActorDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class WorkflowWaitingOnDto {
    // @DataMember
    public stepId: string;

    // @DataMember
    public kind: string;

    // @DataMember
    public until?: string;

    // @DataMember
    public key?: string;

    // @DataMember
    public assignees?: string[];

    public constructor(init?: Partial<WorkflowWaitingOnDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class WorkflowRunErrorDto {
    // @DataMember
    public code?: string;

    // @DataMember
    public stepId?: string;

    // @DataMember
    public reason?: string;

    // @DataMember
    public message?: string;

    public constructor(init?: Partial<WorkflowRunErrorDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class WorkflowRunListProjection {
    // @DataMember
    public runId: string;

    // @DataMember
    public workflowId: string;

    // @DataMember
    public version?: number;

    // @DataMember
    public isDraft: boolean;

    // @DataMember
    public status: string;

    // @DataMember
    public source: string;

    // @DataMember
    public startedAt: string;

    // @DataMember
    public finishedAt?: string;

    // @DataMember
    public durationMs?: number;

    // @DataMember
    public startedBy?: WorkflowRunActorDto;

    // @DataMember
    public executionIdentityId?: string;

    // @DataMember
    public executionIdentityName?: string;

    // @DataMember
    public executionIdentityIsDefault: boolean;

    // @DataMember
    public currentStepIds: string[] = [];

    // @DataMember
    public waitingOn: WorkflowWaitingOnDto[] = [];

    // @DataMember
    public error?: WorkflowRunErrorDto;

    public constructor(init?: Partial<WorkflowRunListProjection>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class WorkflowRunStepDto {
    // @DataMember
    public stepId: string;

    // @DataMember
    public kind: string;

    // @DataMember
    public name?: string;

    // @DataMember
    public status: string;

    // @DataMember
    public attempt: number;

    // @DataMember
    public pass: number;

    // @DataMember
    public startedAt?: string;

    // @DataMember
    public finishedAt?: string;

    // @DataMember
    public durationMs?: number;

    // @DataMember
    public input?: Object;

    // @DataMember
    public inputTruncated: boolean;

    // @DataMember
    public output?: Object;

    // @DataMember
    public outputTruncated: boolean;

    // @DataMember
    public error?: WorkflowRunErrorDto;

    // @DataMember
    public resumedBy?: WorkflowRunActorDto;

    // @DataMember
    public decision?: string;

    public constructor(init?: Partial<WorkflowRunStepDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class WorkflowRunDto {
    // @DataMember
    public runId: string;

    // @DataMember
    public workflowId: string;

    // @DataMember
    public version?: number;

    // @DataMember
    public isDraft: boolean;

    // @DataMember
    public status: string;

    // @DataMember
    public source: string;

    // @DataMember
    public startedBy?: WorkflowRunActorDto;

    // @DataMember
    public triggerId?: string;

    // @DataMember
    public taskId?: string;

    // @DataMember
    public parentRunId?: string;

    // @DataMember
    public depth: number;

    // @DataMember
    public env: string;

    // @DataMember
    public correlationId?: string;

    // @DataMember
    public executionIdentityId?: string;

    // @DataMember
    public executionIdentityName?: string;

    // @DataMember
    public executionIdentityIsDefault: boolean;

    // @DataMember
    public startedAt: string;

    // @DataMember
    public finishedAt?: string;

    // @DataMember
    public durationMs?: number;

    // @DataMember
    public waitingOn: WorkflowWaitingOnDto[] = [];

    // @DataMember
    public error?: WorkflowRunErrorDto;

    // @DataMember
    public output?: Object;

    // @DataMember
    public stepRuns: number;

    // @DataMember
    public steps: WorkflowRunStepDto[] = [];

    // @DataMember
    public request?: { [index: string]: Object };

    // @DataMember
    public trigger?: { [index: string]: Object };

    public constructor(init?: Partial<WorkflowRunDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class TenantLogEntryDto {
    // @DataMember
    public id: string;

    // @DataMember
    public timestamp: string;

    // @DataMember
    public module: string;

    // @DataMember
    public level: string;

    // @DataMember
    public eventCode: string;

    // @DataMember
    public title: string;

    // @DataMember
    public message: string;

    // @DataMember
    public correlationId?: string;

    // @DataMember
    public traceId?: string;

    // @DataMember
    public spanId?: string;

    // @DataMember
    public env: string;

    // @DataMember
    public origin: string;

    // @DataMember
    public meta?: IReadOnlyDictionary<string, string>;

    public constructor(init?: Partial<TenantLogEntryDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class InAppNotificationDto {
    public id: string;
    public projectId: string;
    public userId: string;
    public channel: string;
    public eventName: string;
    public payloadJson?: string;
    public isRead: boolean;
    public seenAtUtc?: string;
    public readAtUtc?: string;
    public createdAtUtc: string;

    public constructor(init?: Partial<InAppNotificationDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class ChannelSubscriptionStateDto {
    // @DataMember
    public unsubscribed: boolean;

    // @DataMember
    public blockedTags: { [index: string]: string[] } = {};

    public constructor(init?: Partial<ChannelSubscriptionStateDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class UserDto {
    // @DataMember
    public id: string;

    // @DataMember
    public projectId: string;

    // @DataMember
    public primaryEmail?: string;

    // @DataMember
    public primaryPhone?: string;

    // @DataMember
    public displayName?: string;

    // @DataMember
    public firstName?: string;

    // @DataMember
    public lastName?: string;

    // @DataMember
    public fullName?: string;

    // @DataMember
    public company?: string;

    // @DataMember
    public locale?: string;

    // @DataMember
    public timeZone?: string;

    // @DataMember
    public gender?: string;

    // @DataMember
    public birthDate?: number;

    // @DataMember
    public addressLine1?: string;

    // @DataMember
    public addressLine2?: string;

    // @DataMember
    public country?: string;

    // @DataMember
    public city?: string;

    // @DataMember
    public state?: string;

    // @DataMember
    public postalCode?: string;

    // @DataMember
    public tags?: string[];

    // @DataMember
    public roles?: string[];

    // @DataMember
    public lifecycle: string;

    // @DataMember
    public sourceOfCreation: string;

    // @DataMember
    public mergedIntoContactId?: string;

    // @DataMember
    public createdOn: string;

    // @DataMember
    public modifiedOn: string;

    // @DataMember
    public auths?: AuthDto[];

    // @DataMember
    public marketingPreferences?: { [index: string]: ChannelSubscriptionStateDto };

    public constructor(init?: Partial<UserDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class ContactRolesRepairDto {
    // @DataMember(Name="dryRun")
    public dryRun: boolean;

    // @DataMember(Name="contactsWithoutRoles")
    public contactsWithoutRoles: number;

    // @DataMember(Name="contactsToRepair")
    public contactsToRepair: number;

    // @DataMember(Name="contactsRepaired")
    public contactsRepaired: number;

    // @DataMember(Name="contactsWithoutLoginRoleIds")
    public contactsWithoutLoginRoleIds: number;

    // @DataMember(Name="legacyRoleNamesIgnored")
    public legacyRoleNamesIgnored: number;

    public constructor(init?: Partial<ContactRolesRepairDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class SchemaRefDto {
    // @DataMember(Order=1)
    public schemaId: string;

    // @DataMember(Order=2)
    public schemaName: string;

    // @DataMember(Order=3)
    public databaseIntegrationId: string;

    public constructor(init?: Partial<SchemaRefDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class CollectionImportDto {
    // @DataMember
    public id: string;

    // @DataMember
    public schema: SchemaRefDto;

    // @DataMember
    public file: FileResourceRefDto;

    // @DataMember
    public errorFile?: FileResourceRefDto;

    // @DataMember
    public delimiter: string;

    // @DataMember
    public hasHeader: boolean;

    // @DataMember
    public status: string;

    // @DataMember
    public totalRows: number;

    // @DataMember
    public totalImported: number;

    // @DataMember
    public totalErrors: number;

    // @DataMember
    public failureReason?: string;

    // @DataMember
    public mapping?: ImportColumnMappingDto[];

    // @DataMember
    public createdOn: string;

    // @DataMember
    public startedOn?: string;

    // @DataMember
    public completedOn?: string;

    public constructor(init?: Partial<CollectionImportDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ImportUploadTargetDto {
    // @DataMember
    public url: string;

    // @DataMember
    public contentType: string;

    // @DataMember
    public file: FileResourceRefDto;

    public constructor(init?: Partial<ImportUploadTargetDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ImportFileColumnDto {
    // @DataMember
    public index: number;

    // @DataMember
    public header: string;

    // @DataMember
    public samples: string[] = [];

    // @DataMember
    public detectedType: string;

    public constructor(init?: Partial<ImportFileColumnDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class ImportFileAnalysisDto {
    // @DataMember
    public file: FileResourceRefDto;

    // @DataMember
    public columns: ImportFileColumnDto[] = [];

    // @DataMember
    public sampleRowCount: number;

    public constructor(init?: Partial<ImportFileAnalysisDto>) {
      (Object as any).assign(this, init);
    }
  }

  export enum CampaignStatus {
    Pending = 'Pending',
    Registered = 'Registered',
    Scheduled = 'Scheduled',
    Started = 'Started',
    Stopped = 'Stopped',
    Processing = 'Processing',
    Completed = 'Completed',
    Failed = 'Failed',
  }

  export class CampaignStatusChangeEntryDto {
    public time: string;
    public status: CampaignStatus;
    public errors?: ErrorDto[];

    public constructor(init?: Partial<CampaignStatusChangeEntryDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class CampaignOutcomeDto {
    // @DataMember
    public sent: number;

    // @DataMember
    public failed: number;

    // @DataMember
    public blocked: number;

    // @DataMember
    public cancelled: number;

    // @DataMember
    public removedRecipients: number;

    // @DataMember
    public blockedReason?: string;

    public constructor(init?: Partial<CampaignOutcomeDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class CampaignDto implements IHasResponsibleUserId, IHasDatabaseId {
    // @DataMember
    public viewId: string;

    // @DataMember
    public createdOn: string;

    // @DataMember
    public language: string;

    // @DataMember
    public forceCampaignLanguage: boolean;

    // @DataMember
    public campaignProcessingIntegrationId?: string;

    // @DataMember
    public statusHistory: CampaignStatusChangeEntryDto[] = [];

    // @DataMember
    public status?: CampaignStatusChangeEntryDto;

    // @DataMember
    public tokenMappingValues?: TokenMappingDto[];

    // @DataMember
    public notes?: string;

    // @DataMember
    public createdById?: string;

    // @DataMember
    public timeZoneId?: string;

    // @DataMember
    public userId: string;

    // @DataMember
    public triggerId?: string;

    // @DataMember
    public triggerType?: TriggerType;

    // @DataMember
    public outcome?: CampaignOutcomeDto;

    // @DataMember
    public id?: string;

    public constructor(init?: Partial<CampaignDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class EmailCampaignDeliverySettingsDto {
    // @DataMember
    public recipientsSourceType: EmailCampaignRecipientsSourceTypes;

    // @DataMember
    public mappedTokens?: TokenMappingDto[];

    // @DataMember
    public campaignTime?: number;

    // @DataMember
    public respectTimeZoneSettings?: RespectTimeZoneSettings;

    public constructor(init?: Partial<EmailCampaignDeliverySettingsDto>) {
      (Object as any).assign(this, init);
    }
  }

  export enum CommunicationChannel {
    Transactional = 'Transactional',
    Marketing = 'Marketing',
    System = 'System',
  }

  export enum NotificationMedium {
    Email = 'Email',
    Sms = 'Sms',
    Push = 'Push',
  }

  // @DataContract
  export class TemplateDto implements IHasViewId, IHasDatabaseId {
    // @DataMember
    public id?: string;

    // @DataMember
    public viewId: string;

    // @DataMember
    public templateName: string;

    // @DataMember
    public description?: string;

    // @DataMember
    public communicationChannel: CommunicationChannel;

    // @DataMember
    public medium: NotificationMedium;

    // @DataMember
    public isActive: boolean;

    // @DataMember
    public tags?: string[];

    // @DataMember
    public env?: string;

    public constructor(init?: Partial<TemplateDto>) {
      (Object as any).assign(this, init);
    }
  }

  export enum EmailTemplateEngine {
    NotSet = 'NotSet',
    Handlebars = 'Handlebars',
    Mjml = 'Mjml',
    Liquid = 'Liquid',
    Razor = 'Razor',
    Mustache = 'Mustache',
  }

  // @DataContract
  export class EmailBodyDto implements IHasRazorTemplateCode {
    // @DataMember
    public structure?: string;

    // @DataMember
    public code: string;

    // @DataMember
    public templateEngine: EmailTemplateEngine;

    public constructor(init?: Partial<EmailBodyDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class EmailMessageContentDto implements IHasRazorTemplateCode {
    // @DataMember
    public subject: string;

    // @DataMember
    public body: EmailBodyDto;

    // @DataMember
    public staticAttachments?: FileResourceRefDto[];

    public constructor(init?: Partial<EmailMessageContentDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class EmailMessageTranslationDto implements IHasRazorTemplateCode {
    // @DataMember
    public language: string;

    // @DataMember
    public content: EmailMessageContentDto;

    // @DataMember
    public staticAttachments?: FileResourceRefDto[];

    public constructor(init?: Partial<EmailMessageTranslationDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class EmailTemplateDto extends TemplateDto implements IBindableContract {
    // @DataMember
    public translations: EmailMessageTranslationDto[] = [];

    // @DataMember
    public staticAttachments?: FileResourceRefDto[];

    public constructor(init?: Partial<EmailTemplateDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class EmailCampaignDto extends CampaignDto {
    // @DataMember
    public deliverySettings: EmailCampaignDeliverySettingsDto;

    // @DataMember
    public template: EmailTemplateDto;

    // @DataMember
    public validationIntegrationId?: string;

    // @DataMember
    public templateIsSystem: boolean;

    public constructor(init?: Partial<EmailCampaignDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class EmailCampaignListProjection {
    // @DataMember
    public viewId: string;

    // @DataMember
    public templateName: string;

    // @DataMember
    public templateId: string;

    // @DataMember
    public integrationId?: string;

    // @DataMember
    public language: string;

    // @DataMember
    public strategy: string;

    // @DataMember
    public latestStatus?: CampaignStatus;

    // @DataMember
    public createdOn: string;

    // @DataMember
    public outcome?: CampaignOutcomeDto;

    public constructor(init?: Partial<EmailCampaignListProjection>) {
      (Object as any).assign(this, init);
    }
  }

  export enum CampaignBatchStatus {
    Registered = 'Registered',
    Processing = 'Processing',
    Completed = 'Completed',
    Failed = 'Failed',
  }

  export class BatchStatusChangeEntryDto {
    public time: string;
    public status: CampaignBatchStatus;
    public errors?: ErrorDto[];

    public constructor(init?: Partial<BatchStatusChangeEntryDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class CampaignBatchDto implements IHasDatabaseId {
    // @DataMember
    public campaignId: string;

    // @DataMember
    public batchId: string;

    // @DataMember
    public startAfter?: string;

    // @DataMember
    public statusHistory: BatchStatusChangeEntryDto[] = [];

    // @DataMember
    public id: string;

    public constructor(init?: Partial<CampaignBatchDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class EmailRecipientDto {
    // @DataMember
    public emailAddress: string;

    // @DataMember
    public language?: string;

    // @DataMember
    public timeZoneId?: string;

    // @DataMember
    public userTokenMappings?: TokenMappingDto[];

    public constructor(init?: Partial<EmailRecipientDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class EmailRecipientsDto {
    // @DataMember
    public to?: EmailRecipientDto[];

    // @DataMember
    public cc?: EmailRecipientDto[];

    // @DataMember
    public bcc?: EmailRecipientDto[];

    // @DataMember
    public startingAfter?: string;

    // @DataMember
    public hasMore: boolean;

    public constructor(init?: Partial<EmailRecipientsDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class EmailCampaignBatchDto extends CampaignBatchDto {
    // @DataMember
    public recipients?: EmailRecipientsDto;

    public constructor(init?: Partial<EmailCampaignBatchDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export enum CampaignNotificationStatus {
    Completed = 'Completed',
    BlockedByUserPreferenceBlockAll = 'BlockedByUserPreferenceBlockAll',
    BlockedByUserPreferenceBlockByTag = 'BlockedByUserPreferenceBlockByTag',
    Failed = 'Failed',
    Viewed = 'Viewed',
    Clicked = 'Clicked',
    BlockedByValidation = 'BlockedByValidation',
  }

  export class NotificationStatusChangeEntryDto {
    public time: string;
    public status: CampaignNotificationStatus;
    public sourceId?: string;
    public errors?: ErrorDto[];
    public tags?: string[];

    public constructor(init?: Partial<NotificationStatusChangeEntryDto>) {
      (Object as any).assign(this, init);
    }
  }

  export enum NotificationDeliveryState {
    Pending = 'Pending',
    Sending = 'Sending',
    Retrying = 'Retrying',
    Accepted = 'Accepted',
    Failed = 'Failed',
    Blocked = 'Blocked',
    Cancelled = 'Cancelled',
  }

  export enum NotificationAttemptOutcome {
    Accepted = 'Accepted',
    Failed = 'Failed',
  }

  export enum SendErrorCategory {
    Unknown = 'Unknown',
    Transient = 'Transient',
    Permanent = 'Permanent',
    Ambiguous = 'Ambiguous',
  }

  export enum NotificationAttemptTrigger {
    Initial = 'Initial',
    AutoRetry = 'AutoRetry',
    ManualRetry = 'ManualRetry',
  }

  // @DataContract
  export class NotificationAttemptDto {
    // @DataMember
    public attemptId: string;

    // @DataMember
    public number: number;

    // @DataMember
    public startedAt: string;

    // @DataMember
    public finishedAt?: string;

    // @DataMember
    public outcome: NotificationAttemptOutcome;

    // @DataMember
    public category?: SendErrorCategory;

    // @DataMember
    public statusCode?: number;

    // @DataMember
    public errorCode?: string;

    // @DataMember
    public message?: string;

    // @DataMember
    public providerRef?: string;

    // @DataMember
    public retryAfterSeconds?: number;

    // @DataMember
    public exhausted?: boolean;

    // @DataMember
    public nextRetryAt?: string;

    // @DataMember
    public correlationId?: string;

    // @DataMember
    public trigger: NotificationAttemptTrigger;

    // @DataMember
    public retryRequestId?: string;

    public constructor(init?: Partial<NotificationAttemptDto>) {
      (Object as any).assign(this, init);
    }
  }

  export enum DeliveryEventOutcome {
    Delivered = 'Delivered',
    Bounced = 'Bounced',
    Complained = 'Complained',
    Rejected = 'Rejected',
    Deferred = 'Deferred',
  }

  // @DataContract
  export class NotificationDeliveryEventDto {
    // @DataMember
    public eventId?: string;

    // @DataMember
    public outcome: DeliveryEventOutcome;

    // @DataMember
    public at: string;

    // @DataMember
    public provider: string;

    // @DataMember
    public providerRef?: string;

    // @DataMember
    public reason?: string;

    public constructor(init?: Partial<NotificationDeliveryEventDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class CampaignBatchNotificationDto implements IHasDatabaseId {
    // @DataMember
    public campaignId: string;

    // @DataMember
    public batchId: string;

    // @DataMember
    public notificationId: string;

    // @DataMember
    public refNotificationId?: string;

    // @DataMember
    public body?: string;

    // @DataMember
    public model?: { [index: string]: string };

    // @DataMember
    public statusHistory: NotificationStatusChangeEntryDto[] = [];

    // @DataMember
    public state?: NotificationDeliveryState;

    // @DataMember
    public stateChangedAt?: string;

    // @DataMember
    public attempts?: NotificationAttemptDto[];

    // @DataMember
    public deliveryEvents?: NotificationDeliveryEventDto[];

    // @DataMember
    public deliveryOutcome?: DeliveryEventOutcome;

    // @DataMember
    public deliveryOutcomeRank?: number;

    // @DataMember
    public id: string;

    public constructor(init?: Partial<CampaignBatchNotificationDto>) {
      (Object as any).assign(this, init);
    }
  }

  export enum EmailRecipientField {
    To = 1,
    Cc = 2,
    Bcc = 3,
  }

  export enum RecipientRemovalReason {
    OptedOut = 1,
    Compliance = 2,
    Undeliverable = 3,
  }

  // @DataContract
  export class RemovedRecipientDto {
    // @DataMember
    public address: string;

    // @DataMember
    public field: EmailRecipientField;

    // @DataMember
    public reason: RecipientRemovalReason;

    // @DataMember
    public tag?: string;

    public constructor(init?: Partial<RemovedRecipientDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class EmailCampaignBatchNotificationDto extends CampaignBatchNotificationDto {
    // @DataMember
    public subject?: string;

    // @DataMember
    public recipients: EmailRecipientsDto;

    // @DataMember
    public removedRecipients?: RemovedRecipientDto[];

    // @DataMember
    public content?: EmailMessageContentDto;

    // @DataMember
    public transactionalKind?: string;

    public constructor(init?: Partial<EmailCampaignBatchNotificationDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class CampaignStatsDto {
    // @DataMember
    public batches: number;

    // @DataMember
    public sent: number;

    // @DataMember
    public failed: number;

    // @DataMember
    public failedRetryable: number;

    // @DataMember
    public cancelled: number;

    // @DataMember
    public blocked: number;

    // @DataMember
    public inProgress: number;

    // @DataMember
    public removedRecipients: number;

    // @DataMember
    public successRate: number;

    public constructor(init?: Partial<CampaignStatsDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class SmsMessageContentDto implements IHasRazorTemplateCode {
    // @DataMember
    public body: string;

    public constructor(init?: Partial<SmsMessageContentDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class SmsMessageTranslationDto implements IHasRazorTemplateCode {
    // @DataMember
    public language: string;

    // @DataMember
    public content: SmsMessageContentDto;

    public constructor(init?: Partial<SmsMessageTranslationDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class SmsTemplateDto
    extends TemplateDto
    implements IHasRazorTemplateCode, IBindableContract
  {
    // @DataMember
    public translations: SmsMessageTranslationDto[] = [];

    public constructor(init?: Partial<SmsTemplateDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class SmsCampaignDto extends CampaignDto {
    // @DataMember
    public recipients: SmsCampaignDeliverySettingsDto;

    // @DataMember
    public template: SmsTemplateDto;

    public constructor(init?: Partial<SmsCampaignDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class SmsRecipientDto {
    // @DataMember
    public phoneNumber: string;

    // @DataMember
    public userId: string;

    // @DataMember
    public language?: string;

    // @DataMember
    public userTokenMappings?: TokenMappingDto[];

    // @DataMember
    public timeZoneId?: string;

    // @DataMember
    public record?: string;

    public constructor(init?: Partial<SmsRecipientDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class SmsRecipientsDto {
    // @DataMember
    public to?: SmsRecipientDto[];

    // @DataMember
    public startingAfter?: string;

    // @DataMember
    public hasMore: boolean;

    public constructor(init?: Partial<SmsRecipientsDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class SmsCampaignBatchDto extends CampaignBatchDto {
    // @DataMember
    public recipients: SmsRecipientsDto;

    public constructor(init?: Partial<SmsCampaignBatchDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class SmsCampaignBatchNotificationDto extends CampaignBatchNotificationDto {
    // @DataMember
    public recipients: SmsRecipientsDto;

    // @DataMember
    public content?: SmsMessageContentDto;

    public constructor(init?: Partial<SmsCampaignBatchNotificationDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class PushAudienceCountDto {
    // @DataMember
    public devices: number;

    // @DataMember
    public recipients: number;

    // @DataMember
    public skippedUserIds: number;

    // @DataMember
    public isCapped: boolean;

    public constructor(init?: Partial<PushAudienceCountDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class PushCampaignDeliverySettingsDto {
    // @DataMember
    public recipientsSourceType: PushCampaignRecipientsSourceTypes;

    // @DataMember
    public mappedTokens?: TokenMappingDto[];

    // @DataMember
    public campaignTime?: number;

    // @DataMember
    public respectTimeZoneSettings?: RespectTimeZoneSettings;

    public constructor(init?: Partial<PushCampaignDeliverySettingsDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class PushMessageContentDto implements IHasRazorTemplateCode {
    // @DataMember
    public title: string;

    // @DataMember
    public body: string;

    public constructor(init?: Partial<PushMessageContentDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class PushMessageTranslationDto implements IHasRazorTemplateCode {
    // @DataMember
    public language: string;

    // @DataMember
    public content: PushMessageContentDto;

    public constructor(init?: Partial<PushMessageTranslationDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class PushTemplateDto
    extends TemplateDto
    implements IHasRazorTemplateCode, IBindableContract
  {
    // @DataMember
    public translations: PushMessageTranslationDto[] = [];

    public constructor(init?: Partial<PushTemplateDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class PushCampaignDto extends CampaignDto {
    // @DataMember
    public recipients: PushCampaignDeliverySettingsDto;

    // @DataMember
    public template: PushTemplateDto;

    public constructor(init?: Partial<PushCampaignDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export enum PushDeviceDeliveryFamily {
    Ios = 'Ios',
    Android = 'Android',
    Chrome = 'Chrome',
    Safari = 'Safari',
    Expo = 'Expo',
  }

  // @DataContract
  export class PushDeviceDeliveryTokenDto {
    // @DataMember
    public pushDeviceToken: string;

    // @DataMember
    public deliveryFamily: PushDeviceDeliveryFamily;

    public constructor(init?: Partial<PushDeviceDeliveryTokenDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class PushRecipientDto {
    // @DataMember
    public deviceTokens: PushDeviceDeliveryTokenDto[] = [];

    // @DataMember
    public userId: string;

    // @DataMember
    public language?: string;

    // @DataMember
    public userTokenMappings?: TokenMappingDto[];

    // @DataMember
    public timeZoneId?: string;

    // @DataMember
    public record?: string;

    public constructor(init?: Partial<PushRecipientDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class PushRecipientsDto {
    // @DataMember
    public to?: PushRecipientDto[];

    // @DataMember
    public startingAfter?: string;

    // @DataMember
    public hasMore: boolean;

    public constructor(init?: Partial<PushRecipientsDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class PushCampaignBatchDto extends CampaignBatchDto {
    // @DataMember
    public recipients: PushRecipientsDto;

    public constructor(init?: Partial<PushCampaignBatchDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class NotificationReadMarkDto {
    // @DataMember
    public userId: string;

    // @DataMember
    public readAtUtc: string;

    public constructor(init?: Partial<NotificationReadMarkDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class PushCampaignBatchNotificationDto extends CampaignBatchNotificationDto {
    // @DataMember
    public subject?: string;

    // @DataMember
    public recipients: PushRecipientsDto;

    // @DataMember
    public content?: PushMessageContentDto;

    // @DataMember
    public readBy?: NotificationReadMarkDto[];

    public constructor(init?: Partial<PushCampaignBatchNotificationDto>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class ResponseError {
    // @DataMember(Order=1)
    public errorCode: string;

    // @DataMember(Order=2)
    public fieldName: string;

    // @DataMember(Order=3)
    public message: string;

    // @DataMember(Order=4)
    public meta?: { [index: string]: string };

    public constructor(init?: Partial<ResponseError>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class ResponseStatus {
    // @DataMember(Order=1)
    public errorCode: string;

    // @DataMember(Order=2)
    public message?: string;

    // @DataMember(Order=3)
    public stackTrace?: string;

    // @DataMember(Order=4)
    public errors?: ResponseError[];

    // @DataMember(Order=5)
    public meta?: { [index: string]: string };

    public constructor(init?: Partial<ResponseStatus>) {
      (Object as any).assign(this, init);
    }
  }

  export interface IBindableContract {}

  export interface IHasViewId {
    viewId: string;
  }

  export interface IHasResponsibleUserId {
    userId: string;
  }

  export interface IHasDatabaseId {
    id?: string;
  }

  export interface ICursorArgs {
    field: string;
    order: number;
  }

  export interface IQueuedTrigger {
    viewId: string;
    name: string;
    order?: number;
    breakOnError: boolean;
  }

  export interface IHasRazorTemplateCode {}

  export class EchoResponse {
    public release: CodeMashRelease;
    public runtime: CodeMashRuntime;
    public managedServiceHubUrl: string;
    public managedServiceApiUrl: string;
    public hubUrl: string;
    public apiUrl: string;
    public apiVersion: string;
    public hubVersion: string;
    public adminUrlTemplate?: string;
    public emailServiceConfigured: boolean;
    public rootBootstrapPasswordSource?: string;
    public regions?: EchoRegionDto[];
    public agent?: EchoAgentDto;
    public hostingPlatform?: EchoHostingPlatformDto;
    public connect?: EchoConnectDto;
    public keyless?: EchoKeylessDto;

    public constructor(init?: Partial<EchoResponse>) {
      (Object as any).assign(this, init);
    }
  }

  export class PublicProjectConfigDto {
    public displayName: string;
    public adminPortalEnabled: boolean;
    public branding?: PublicBrandDto;
    public auth: PublicAuthDto;
    public aiChat: PublicAiChatDto;

    public constructor(init?: Partial<PublicProjectConfigDto>) {
      (Object as any).assign(this, init);
    }
  }

  export class PublicLegalDocumentDto {
    public kind: string;
    public title?: string;
    public body: string;
    public available: boolean;

    public constructor(init?: Partial<PublicLegalDocumentDto>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class IdResponse extends ResponseBase {
    // @DataMember
    public id?: string;

    // @DataMember
    public status?: string;

    // @DataMember
    public warnings?: string[];

    public constructor(init?: Partial<IdResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ListEndUserChatAttachmentsResponse extends ResponseBase {
    public attachments: EndUserChatAttachment[] = [];

    public constructor(init?: Partial<ListEndUserChatAttachmentsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class EmptyResponse extends ResponseBase {
    public constructor(init?: Partial<EmptyResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ListEndUserChatMemoryResponse extends ResponseBase {
    public notes: EndUserChatMemoryNote[] = [];

    public constructor(init?: Partial<ListEndUserChatMemoryResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetEndUserChatAvailabilityResponse extends ResponseBase {
    public enabled: boolean;
    public available: boolean;
    public reason?: string;
    public defaultAssistantId?: string;
    public assistants: EndUserChatAssistant[] = [];
    public plan?: EndUserChatPlan;

    public constructor(init?: Partial<GetEndUserChatAvailabilityResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ListEndUserChatSessionsResponse extends ResponseBase {
    public sessions: EndUserChatSession[] = [];

    public constructor(init?: Partial<ListEndUserChatSessionsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetEndUserChatSessionResponse extends ResponseBase {
    public session?: EndUserChatSession;

    public constructor(init?: Partial<GetEndUserChatSessionResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetEndUserChatEntriesResponse extends ResponseBase {
    public sessionId?: string;
    public entries: AiChatEntryWireDto[] = [];
    public lastSeq: number;
    public hasMore: boolean;

    public constructor(init?: Partial<GetEndUserChatEntriesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class StartEndUserChatTurnResponse extends ResponseBase {
    public turnId?: string;
    public sessionId?: string;
    public channel?: string;

    public constructor(init?: Partial<StartEndUserChatTurnResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetEndUserAiToolsResponse extends ResponseBase {
    public tools?: EndUserAiTool[];

    public constructor(init?: Partial<GetEndUserAiToolsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class InvokeEndUserAiToolResponse extends ResponseBase {
    public result?: string;

    public constructor(init?: Partial<InvokeEndUserAiToolResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class SaveGuestUserResponse extends IdResponse {
    // @DataMember
    public userName?: string;

    // @DataMember
    public password?: string;

    public constructor(init?: Partial<SaveGuestUserResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetUserResponse extends ResponseBase {
    public user?: AuthDto;

    public constructor(init?: Partial<GetUserResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetUsersResponse extends ResponseBase {
    public list?: PaginatedResponse<AuthDto>;

    public constructor(init?: Partial<GetUsersResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetUserPreferencesResponse extends ResponseBase {
    public preferences?: UserMarketingPreferencesDto;

    public constructor(init?: Partial<GetUserPreferencesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class CredentialChangedResponse extends ResponseBase {
    // @DataMember
    public authId?: string;

    // @DataMember
    public credentialVersion?: string;

    public constructor(init?: Partial<CredentialChangedResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class PasskeyOkResponse extends ResponseBase {
    public constructor(init?: Partial<PasskeyOkResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class SendTestPasswordResetResponse extends ResponseBase {
    // @DataMember
    public queued: boolean;

    // @DataMember
    public reason?: string;

    // @DataMember
    public env: string;

    // @DataMember
    public correlationId?: string;

    // @DataMember
    public expiresAtUtc?: string;

    // @DataMember
    public integrationId?: string;

    // @DataMember
    public integrationName?: string;

    // @DataMember
    public provider?: string;

    // @DataMember
    public integrationProblem?: string;

    // @DataMember
    public templateId?: string;

    // @DataMember
    public templateName?: string;

    // @DataMember
    public templateSource?: string;

    // @DataMember
    public language?: string;

    // @DataMember
    public languageRule?: string;

    // @DataMember
    public templateLanguages?: string[];

    // @DataMember
    public fallback?: string;

    // @DataMember
    public mjmlRenderer?: string;

    public constructor(init?: Partial<SendTestPasswordResetResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class PasskeyCeremonyOptionsResponse extends ResponseBase {
    public ceremonyId: string;
    public optionsJson: string;

    public constructor(init?: Partial<PasskeyCeremonyOptionsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class PasskeyAuthTokensResponse extends ResponseBase {
    public accessToken: string;
    public refreshToken: string;
    public expiresInSeconds: number;
    public recoveryCodes?: string[];

    public constructor(init?: Partial<PasskeyAuthTokensResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class PasskeyListResponse extends ResponseBase {
    public passkeys: PasskeyListItemDto[] = [];

    public constructor(init?: Partial<PasskeyListResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class PasskeyRecoveryResponse extends ResponseBase {
    public accessToken: string;
    public refreshToken: string;
    public expiresInSeconds: number;
    public remainingCodes: number;

    public constructor(init?: Partial<PasskeyRecoveryResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class PasskeyVerificationTokenResponse extends ResponseBase {
    public verificationToken: string;

    public constructor(init?: Partial<PasskeyVerificationTokenResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class FindMergedTermTreeResponse extends ResponseBase {
    public tree?: TermTreeDto[];

    public constructor(init?: Partial<FindMergedTermTreeResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class FindTaxonomyTreeResponse extends ResponseBase {
    public tree?: TaxonomyTreeDto[];

    public constructor(init?: Partial<FindTaxonomyTreeResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class FindTermsResponse extends ResponseBase {
    public list?: PaginatedResponse<TermDto>;

    public constructor(init?: Partial<FindTermsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class FindTermsChildrenResponse extends ResponseBase {
    public list?: PaginatedResponse<TermDto>;

    public constructor(init?: Partial<FindTermsChildrenResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class FindTermTreeResponse extends ResponseBase {
    public tree?: TermTreeDto[];

    public constructor(init?: Partial<FindTermTreeResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetDatabaseSchemaResponse extends ResponseBase {
    public item?: SchemaDto;

    public constructor(init?: Partial<GetDatabaseSchemaResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetDatabaseSchemasResponse extends ResponseBase {
    public list?: PaginatedResponse<SchemaListProjection>;

    public constructor(init?: Partial<GetDatabaseSchemasResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class AggregateResponse extends ResponseBase {
    public result?: Object[];

    public constructor(init?: Partial<AggregateResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class CountResponse extends ResponseBase {
    public count: number;

    public constructor(init?: Partial<CountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class DistinctResponse extends ResponseBase {
    public values?: Object[];

    public constructor(init?: Partial<DistinctResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ExecuteAggregateResponse extends ResponseBase {
    public result?: Object[];

    public constructor(init?: Partial<ExecuteAggregateResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class FindResponse extends ResponseBase {
    public list?: PaginatedResponse<Object>;

    public constructor(init?: Partial<FindResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class FindOneResponse extends ResponseBase {
    public result?: Object;

    public constructor(init?: Partial<FindOneResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetFileByIdResponse extends ResponseBase {
    public file?: FileResourceRefDto;
    public isPublic?: boolean;
    public publicUrl?: string;

    public constructor(init?: Partial<GetFileByIdResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetFileInfoResponse extends ResponseBase {
    public file?: FileResourceRefDto;
    public isPublic?: boolean;
    public publicUrl?: string;

    public constructor(init?: Partial<GetFileInfoResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSignedUrlResponse extends ResponseBase {
    public url?: string;

    public constructor(init?: Partial<GetSignedUrlResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class ListFilesResponse extends ResponseBase {
    public list?: PaginatedResponse<FileResourceRefDto>;
    public folders?: string[];
    public publicFolders?: IList<PublicFolderDto>;

    public constructor(init?: Partial<ListFilesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class RegisterFilesResponse extends ResponseBase {
    public dryRun: boolean;
    public registered: number;
    public unchanged: number;
    public failed: number;
    public items?: RegisterFileResult[];

    public constructor(init?: Partial<RegisterFilesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class RequestUploadUrlResponse extends ResponseBase {
    public url?: string;

    public constructor(init?: Partial<RequestUploadUrlResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetOwnPushDevicesResponse extends ResponseBase {
    public items: OwnPushDeviceDto[] = [];

    public constructor(init?: Partial<GetOwnPushDevicesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetOwnPushMessagesResponse extends ResponseBase {
    public list?: PaginatedResponse<OwnPushMessageDto>;

    public constructor(init?: Partial<GetOwnPushMessagesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class WriteLogsResponse extends ResponseBase {
    public accepted: number;

    public constructor(init?: Partial<WriteLogsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPaymentOrderResponse extends ResponseBase {
    public item?: PaymentOrderDto;

    public constructor(init?: Partial<GetPaymentOrderResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPaymentOrdersResponse extends ResponseBase {
    public list?: PaginatedResponse<PaymentOrderDto>;

    public constructor(init?: Partial<GetPaymentOrdersResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class StartPaymentCheckoutResponse extends ResponseBase {
    public checkout?: PaymentOrderCheckoutDto;
    public reused: boolean;
    public order?: PaymentOrderDto;

    public constructor(init?: Partial<StartPaymentCheckoutResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class WorkflowRunsResponse extends ResponseBase {
    // @DataMember
    public list?: PaginatedResponse<WorkflowRunListProjection>;

    public constructor(init?: Partial<WorkflowRunsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class WorkflowRunResponse extends ResponseBase {
    // @DataMember
    public run?: WorkflowRunDto;

    public constructor(init?: Partial<WorkflowRunResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class CodeWorkflowResumeLinkResponse extends ResponseBase {
    // @DataMember
    public runId?: string;

    // @DataMember
    public workflowId?: string;

    // @DataMember
    public workflowName?: string;

    // @DataMember
    public stepId?: string;

    // @DataMember
    public stepName?: string;

    // @DataMember
    public mode?: string;

    // @DataMember
    public decision?: string;

    // @DataMember
    public key?: string;

    // @DataMember
    public assigneeUserId?: string;

    // @DataMember
    public expiresAt?: string;

    public constructor(init?: Partial<CodeWorkflowResumeLinkResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class WorkflowRunLogsResponse extends ResponseBase {
    // @DataMember
    public list?: PaginatedResponse<TenantLogEntryDto>;

    public constructor(init?: Partial<WorkflowRunLogsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetNotificationInboxResponse extends ResponseBase {
    public list?: PaginatedResponse<InAppNotificationDto>;

    public constructor(init?: Partial<GetNotificationInboxResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetUnreadCountResponse extends ResponseBase {
    public count: number;

    public constructor(init?: Partial<GetUnreadCountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class MarkNotificationReadResponse extends ResponseBase {
    public constructor(init?: Partial<MarkNotificationReadResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class MarkAllNotificationsReadResponse extends ResponseBase {
    public constructor(init?: Partial<MarkAllNotificationsReadResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetContactResponse extends ResponseBase {
    public item?: UserDto;

    public constructor(init?: Partial<GetContactResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetAllContactsResponse extends ResponseBase {
    public items?: IReadOnlyList<UserDto>;
    public nextCursor?: string;

    public constructor(init?: Partial<GetAllContactsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class RepairContactRolesResponse extends ResponseBase {
    public result?: ContactRolesRepairDto;

    public constructor(init?: Partial<RepairContactRolesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetFileResponse extends ResponseBase {
    public file?: FileResourceRefDto;
    public isPublic?: boolean;
    public publicUrl?: string;

    public constructor(init?: Partial<GetFileResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetFolderFilesResponse extends ResponseBase {
    public list?: PaginatedResponse<FileResourceRefDto>;
    public folders?: string[];
    public publicFolders?: IList<PublicFolderDto>;

    public constructor(init?: Partial<GetFolderFilesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetCollectionImportResponse extends ResponseBase {
    public result?: CollectionImportDto;

    public constructor(init?: Partial<GetCollectionImportResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetCollectionImportsResponse extends ResponseBase {
    public result?: PaginatedResponse<CollectionImportDto>;

    public constructor(init?: Partial<GetCollectionImportsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class RequestImportUploadUrlResponse extends ResponseBase {
    public result?: ImportUploadTargetDto;

    public constructor(init?: Partial<RequestImportUploadUrlResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class AnalyzeImportFileResponse extends ResponseBase {
    public result?: ImportFileAnalysisDto;

    public constructor(init?: Partial<AnalyzeImportFileResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetEmailCampaignResponse extends ResponseBase {
    public item?: EmailCampaignDto;

    public constructor(init?: Partial<GetEmailCampaignResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetEmailCampaignsResponse extends ResponseBase {
    public list?: PaginatedResponse<EmailCampaignListProjection>;

    public constructor(init?: Partial<GetEmailCampaignsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetEmailCampaignBatchesResponse extends ResponseBase {
    public list?: PaginatedResponse<EmailCampaignBatchDto>;

    public constructor(init?: Partial<GetEmailCampaignBatchesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetEmailCampaignBatchNotificationResponse extends ResponseBase {
    public campaignNotification?: EmailCampaignBatchNotificationDto;

    public constructor(init?: Partial<GetEmailCampaignBatchNotificationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetEmailCampaignBatchNotificationsResponse extends ResponseBase {
    public batchStatusHistory?: BatchStatusChangeEntryDto[];
    public list?: PaginatedResponse<EmailCampaignBatchNotificationDto>;

    public constructor(init?: Partial<GetEmailCampaignBatchNotificationsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetEmailCampaignStatisticsResponse extends ResponseBase {
    public stats?: CampaignStatsDto;

    public constructor(init?: Partial<GetEmailCampaignStatisticsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class PreviewEmailNotificationResponse extends ResponseBase {
    public subject?: string;
    public body?: string;

    public constructor(init?: Partial<PreviewEmailNotificationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class RetryFailedEmailNotificationsResponse extends ResponseBase {
    // @DataMember
    public retryRequestId?: string;

    // @DataMember
    public selected: number;

    // @DataMember
    public skipped?: { [index: string]: number };

    // @DataMember
    public replayed: boolean;

    // @DataMember
    public warning?: string;

    public constructor(init?: Partial<RetryFailedEmailNotificationsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetEmailCampaignMessagesResponse extends ResponseBase {
    public list?: PaginatedResponse<EmailCampaignBatchNotificationDto>;

    public constructor(init?: Partial<GetEmailCampaignMessagesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSmsCampaignResponse extends ResponseBase {
    public smsCampaign?: SmsCampaignDto;

    public constructor(init?: Partial<GetSmsCampaignResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSmsCampaignsResponse extends ResponseBase {
    public list?: PaginatedResponse<SmsCampaignDto>;

    public constructor(init?: Partial<GetSmsCampaignsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSmsCampaignBatchesResponse extends ResponseBase {
    public list?: PaginatedResponse<SmsCampaignBatchDto>;

    public constructor(init?: Partial<GetSmsCampaignBatchesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSmsCampaignBatchNotificationResponse extends ResponseBase {
    public campaignNotification?: SmsCampaignBatchNotificationDto;

    public constructor(init?: Partial<GetSmsCampaignBatchNotificationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSmsCampaignBatchNotificationsResponse extends ResponseBase {
    public batchStatusHistory?: BatchStatusChangeEntryDto[];
    public list?: PaginatedResponse<SmsCampaignBatchNotificationDto>;

    public constructor(init?: Partial<GetSmsCampaignBatchNotificationsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSmsCampaignStatisticsResponse extends ResponseBase {
    public stats?: CampaignStatsDto;

    public constructor(init?: Partial<GetSmsCampaignStatisticsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class PreviewSmsNotificationResponse extends ResponseBase {
    public body?: string;

    public constructor(init?: Partial<PreviewSmsNotificationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class RetryFailedSmsNotificationsResponse extends ResponseBase {
    // @DataMember
    public retryRequestId?: string;

    // @DataMember
    public selected: number;

    // @DataMember
    public skipped?: { [index: string]: number };

    // @DataMember
    public replayed: boolean;

    // @DataMember
    public warning?: string;

    public constructor(init?: Partial<RetryFailedSmsNotificationsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetSmsCampaignMessagesResponse extends ResponseBase {
    public list?: PaginatedResponse<SmsCampaignBatchNotificationDto>;

    public constructor(init?: Partial<GetSmsCampaignMessagesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPushCampaignAudienceCountResponse extends ResponseBase {
    public result?: PushAudienceCountDto;

    public constructor(init?: Partial<GetPushCampaignAudienceCountResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPushCampaignResponse extends ResponseBase {
    public item?: PushCampaignDto;

    public constructor(init?: Partial<GetPushCampaignResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPushCampaignsResponse extends ResponseBase {
    public list?: PaginatedResponse<PushCampaignDto>;

    public constructor(init?: Partial<GetPushCampaignsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPushCampaignBatchesResponse extends ResponseBase {
    public list?: PaginatedResponse<PushCampaignBatchDto>;

    public constructor(init?: Partial<GetPushCampaignBatchesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPushCampaignBatchNotificationResponse extends ResponseBase {
    public campaignNotification?: PushCampaignBatchNotificationDto;

    public constructor(init?: Partial<GetPushCampaignBatchNotificationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPushCampaignBatchNotificationsResponse extends ResponseBase {
    public batchStatusHistory?: BatchStatusChangeEntryDto[];
    public list?: PaginatedResponse<PushCampaignBatchNotificationDto>;

    public constructor(init?: Partial<GetPushCampaignBatchNotificationsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPushCampaignStatisticsResponse extends ResponseBase {
    public stats?: CampaignStatsDto;

    public constructor(init?: Partial<GetPushCampaignStatisticsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class PreviewPushNotificationResponse extends ResponseBase {
    public title?: string;
    public body?: string;
    public subtitle?: string;

    public constructor(init?: Partial<PreviewPushNotificationResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class RetryFailedPushNotificationsResponse extends ResponseBase {
    // @DataMember
    public retryRequestId?: string;

    // @DataMember
    public selected: number;

    // @DataMember
    public skipped?: { [index: string]: number };

    // @DataMember
    public replayed: boolean;

    // @DataMember
    public warning?: string;

    public constructor(init?: Partial<RetryFailedPushNotificationsResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  export class GetPushCampaignMessagesResponse extends ResponseBase {
    public list?: PaginatedResponse<PushCampaignBatchNotificationDto>;

    public constructor(init?: Partial<GetPushCampaignMessagesResponse>) {
      super(init);
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class AuthenticateResponse implements IHasSessionId, IHasBearerToken {
    // @DataMember(Order=1)
    public userId?: string;

    // @DataMember(Order=2)
    public sessionId?: string;

    // @DataMember(Order=3)
    public userName?: string;

    // @DataMember(Order=4)
    public displayName?: string;

    // @DataMember(Order=5)
    public referrerUrl?: string;

    // @DataMember(Order=6)
    public bearerToken?: string;

    // @DataMember(Order=7)
    public refreshToken?: string;

    // @DataMember(Order=8)
    public refreshTokenExpiry?: string;

    // @DataMember(Order=9)
    public profileUrl?: string;

    // @DataMember(Order=10)
    public roles?: string[];

    // @DataMember(Order=11)
    public permissions?: string[];

    // @DataMember(Order=12)
    public authProvider?: string;

    // @DataMember(Order=13)
    public responseStatus?: ResponseStatus;

    // @DataMember(Order=14)
    public meta?: { [index: string]: string };

    public constructor(init?: Partial<AuthenticateResponse>) {
      (Object as any).assign(this, init);
    }
  }

  // @DataContract
  export class GetAccessTokenResponse {
    // @DataMember(Order=1)
    public accessToken?: string;

    // @DataMember(Order=2)
    public meta?: { [index: string]: string };

    // @DataMember(Order=3)
    public responseStatus?: ResponseStatus;

    public constructor(init?: Partial<GetAccessTokenResponse>) {
      (Object as any).assign(this, init);
    }
  }

  export class SharedTypeGen {
    public typegen_StringFieldDto?: StringFieldDto;
    public typegen_DecimalFieldDto?: DecimalFieldDto;
    public typegen_CurrencyFieldDto?: CurrencyFieldDto;
    public typegen_BooleanFieldDto?: BooleanFieldDto;
    public typegen_DateFieldDto?: DateFieldDto;
    public typegen_IntegerFieldDto?: IntegerFieldDto;
    public typegen_GeolocationFieldDto?: GeolocationFieldDto;
    public typegen_TagsFieldDto?: TagsFieldDto;
    public typegen_FileFieldDto?: FileFieldDto;
    public typegen_TaxonomySelectionFieldDto?: TaxonomySelectionFieldDto;
    public typegen_CollectionSelectionFieldDto?: CollectionSelectionFieldDto;
    public typegen_UserSelectionFieldDto?: UserSelectionFieldDto;
    public typegen_RoleSelectionFieldDto?: RoleSelectionFieldDto;
    public typegen_EnumSelectionFieldDto?: EnumSelectionFieldDto;
    public typegen_ObjectFieldDto?: ObjectFieldDto;
    public typegen_ArrayFieldDto?: ArrayFieldDto;
    public typegen_JsonFieldDto?: JsonFieldDto;

    public constructor(init?: Partial<SharedTypeGen>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SharedTypeGen';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {}
  }

  // @Route("/{version}/echo", "GET")
  export class Echo extends RequestBase implements IReturn<EchoResponse> {
    public constructor(init?: Partial<Echo>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'Echo';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new EchoResponse();
    }
  }

  // @Route("/{version}/public/projects/{ProjectId}/brand/{Kind}", "GET")
  export class GetPublicProjectBrandAsset extends RequestBase implements IReturn<Blob> {
    public projectId?: string;
    public kind?: string;
    public v?: string;

    public constructor(init?: Partial<GetPublicProjectBrandAsset>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPublicProjectBrandAsset';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new Blob();
    }
  }

  // @Route("/{version}/public/projects/{ProjectId}/config", "GET")
  export class GetPublicProjectConfig
    extends RequestBase
    implements IReturn<PublicProjectConfigDto>
  {
    public projectId?: string;

    public constructor(init?: Partial<GetPublicProjectConfig>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPublicProjectConfig';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new PublicProjectConfigDto();
    }
  }

  // @Route("/{version}/public/projects/{ProjectId}/legal/{Kind}", "GET")
  export class GetPublicProjectLegal
    extends RequestBase
    implements IReturn<PublicLegalDocumentDto>
  {
    public projectId?: string;
    public kind?: string;

    public constructor(init?: Partial<GetPublicProjectLegal>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPublicProjectLegal';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new PublicLegalDocumentDto();
    }
  }

  /** @description Adds a file to one of the caller's own AI chats. */
  // @Route("/{version}/ai/chat/sessions/{SessionId}/attachments", "POST")
  // @Api(Description="Adds a file to one of the caller's own AI chats.")
  export class UploadEndUserChatAttachmentRequest
    extends CodeMashRequestBase
    implements IReturn<IdResponse>
  {
    public sessionId: string;
    public fileName: string;
    public contentType: string;
    public base64Content: string;

    public constructor(init?: Partial<UploadEndUserChatAttachmentRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UploadEndUserChatAttachmentRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new IdResponse();
    }
  }

  /** @description Lists the files in one of the caller's own AI chats. */
  // @Route("/{version}/ai/chat/sessions/{SessionId}/attachments", "GET")
  // @Api(Description="Lists the files in one of the caller's own AI chats.")
  export class ListEndUserChatAttachmentsRequest
    extends CodeMashRequestBase
    implements IReturn<ListEndUserChatAttachmentsResponse>
  {
    public sessionId: string;

    public constructor(init?: Partial<ListEndUserChatAttachmentsRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ListEndUserChatAttachmentsRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new ListEndUserChatAttachmentsResponse();
    }
  }

  /** @description Removes a file from one of the caller's own AI chats. */
  // @Route("/{version}/ai/chat/attachments/{AttachmentId}", "DELETE")
  // @Api(Description="Removes a file from one of the caller's own AI chats.")
  export class DeleteEndUserChatAttachmentRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    public attachmentId: string;

    public constructor(init?: Partial<DeleteEndUserChatAttachmentRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteEndUserChatAttachmentRequest';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Likes, dislikes or clears one message of the caller's own AI chat. */
  // @Route("/{version}/ai/chat/sessions/{SessionId}/entries/{EntryId}/feedback", "PUT")
  // @Api(Description="Likes, dislikes or clears one message of the caller's own AI chat.")
  export class SetEndUserChatEntryFeedbackRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    public sessionId: string;
    public entryId: string;
    public feedback?: string;

    public constructor(init?: Partial<SetEndUserChatEntryFeedbackRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SetEndUserChatEntryFeedbackRequest';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Lists what the AI chat remembers about the caller. */
  // @Route("/{version}/ai/chat/memory", "GET")
  // @Api(Description="Lists what the AI chat remembers about the caller.")
  export class ListEndUserChatMemoryRequest
    extends CodeMashRequestBase
    implements IReturn<ListEndUserChatMemoryResponse>
  {
    public take?: number;

    public constructor(init?: Partial<ListEndUserChatMemoryRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ListEndUserChatMemoryRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new ListEndUserChatMemoryResponse();
    }
  }

  /** @description Forgets one thing the AI chat remembers about the caller. */
  // @Route("/{version}/ai/chat/memory/{NoteId}", "DELETE")
  // @Api(Description="Forgets one thing the AI chat remembers about the caller.")
  export class ForgetEndUserChatMemoryRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    public noteId: string;

    public constructor(init?: Partial<ForgetEndUserChatMemoryRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ForgetEndUserChatMemoryRequest';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Whether the AI chat can run for the caller, and which assistants it offers. */
  // @Route("/{version}/ai/chat/availability", "GET")
  // @Api(Description="Whether the AI chat can run for the caller, and which assistants it offers.")
  export class GetEndUserChatAvailabilityRequest
    extends CodeMashRequestBase
    implements IReturn<GetEndUserChatAvailabilityResponse>
  {
    public constructor(init?: Partial<GetEndUserChatAvailabilityRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetEndUserChatAvailabilityRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetEndUserChatAvailabilityResponse();
    }
  }

  /** @description Lists the caller's own AI chats. */
  // @Route("/{version}/ai/chat/sessions", "GET")
  // @Api(Description="Lists the caller's own AI chats.")
  export class ListEndUserChatSessionsRequest
    extends CodeMashRequestBase
    implements IReturn<ListEndUserChatSessionsResponse>
  {
    public take?: number;
    public includeArchived: boolean;

    public constructor(init?: Partial<ListEndUserChatSessionsRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ListEndUserChatSessionsRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new ListEndUserChatSessionsResponse();
    }
  }

  /** @description Opens a new AI chat for the caller. */
  // @Route("/{version}/ai/chat/sessions", "POST")
  // @Api(Description="Opens a new AI chat for the caller.")
  export class CreateEndUserChatSessionRequest
    extends CodeMashRequestBase
    implements IReturn<IdResponse>
  {
    public assistantId?: string;
    public title?: string;

    public constructor(init?: Partial<CreateEndUserChatSessionRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateEndUserChatSessionRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new IdResponse();
    }
  }

  /** @description Returns one of the caller's own AI chats. */
  // @Route("/{version}/ai/chat/sessions/{SessionId}", "GET")
  // @Api(Description="Returns one of the caller's own AI chats.")
  export class GetEndUserChatSessionRequest
    extends CodeMashRequestBase
    implements IReturn<GetEndUserChatSessionResponse>
  {
    public sessionId: string;

    public constructor(init?: Partial<GetEndUserChatSessionRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetEndUserChatSessionRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetEndUserChatSessionResponse();
    }
  }

  /** @description Renames one of the caller's own AI chats. */
  // @Route("/{version}/ai/chat/sessions/{SessionId}", "PATCH")
  // @Api(Description="Renames one of the caller's own AI chats.")
  export class RenameEndUserChatSessionRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    public sessionId: string;
    public title?: string;

    public constructor(init?: Partial<RenameEndUserChatSessionRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RenameEndUserChatSessionRequest';
    }
    public getMethod() {
      return 'PATCH';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Pins or unpins one of the caller's own AI chats. */
  // @Route("/{version}/ai/chat/sessions/{SessionId}/pin", "PUT")
  // @Api(Description="Pins or unpins one of the caller's own AI chats.")
  export class PinEndUserChatSessionRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    public sessionId: string;
    public pinned: boolean;

    public constructor(init?: Partial<PinEndUserChatSessionRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'PinEndUserChatSessionRequest';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Archives or unarchives one of the caller's own AI chats. */
  // @Route("/{version}/ai/chat/sessions/{SessionId}/archive", "PUT")
  // @Api(Description="Archives or unarchives one of the caller's own AI chats.")
  export class ArchiveEndUserChatSessionRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    public sessionId: string;
    public archived: boolean;

    public constructor(init?: Partial<ArchiveEndUserChatSessionRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ArchiveEndUserChatSessionRequest';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Deletes one of the caller's own AI chats. */
  // @Route("/{version}/ai/chat/sessions/{SessionId}", "DELETE")
  // @Api(Description="Deletes one of the caller's own AI chats.")
  export class DeleteEndUserChatSessionRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    public sessionId: string;

    public constructor(init?: Partial<DeleteEndUserChatSessionRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteEndUserChatSessionRequest';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Returns a page of one of the caller's own AI chat transcripts. */
  // @Route("/{version}/ai/chat/sessions/{SessionId}/entries", "GET")
  // @Api(Description="Returns a page of one of the caller's own AI chat transcripts.")
  export class GetEndUserChatEntriesRequest
    extends CodeMashRequestBase
    implements IReturn<GetEndUserChatEntriesResponse>
  {
    public sessionId: string;
    public afterSeq?: number;
    public take?: number;

    public constructor(init?: Partial<GetEndUserChatEntriesRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetEndUserChatEntriesRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetEndUserChatEntriesResponse();
    }
  }

  /** @description Sends a message to the AI chat; the answer streams on the caller's channel. */
  // @Route("/{version}/ai/chat/turn", "POST")
  // @Api(Description="Sends a message to the AI chat; the answer streams on the caller's channel.")
  export class StartEndUserChatTurnRequest
    extends CodeMashRequestBase
    implements IReturn<StartEndUserChatTurnResponse>
  {
    public sessionId?: string;
    public assistantId?: string;
    public message: string;

    public constructor(init?: Partial<StartEndUserChatTurnRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'StartEndUserChatTurnRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new StartEndUserChatTurnResponse();
    }
  }

  /** @description Lists the AI tools a project user may use: only their own data (own:* toolsets). */
  // @Route("/{version}/ai/tools", "GET")
  // @Api(Description="Lists the AI tools a project user may use: only their own data (own:* toolsets).")
  export class GetEndUserAiToolsRequest
    extends RequestBase
    implements IReturn<GetEndUserAiToolsResponse>
  {
    public constructor(init?: Partial<GetEndUserAiToolsRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetEndUserAiToolsRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetEndUserAiToolsResponse();
    }
  }

  /** @description Invokes one own-scope AI tool as the calling project user. */
  // @Route("/{version}/ai/tools/{ToolName}", "POST")
  // @Api(Description="Invokes one own-scope AI tool as the calling project user.")
  export class InvokeEndUserAiToolRequest
    extends RequestBase
    implements IReturn<InvokeEndUserAiToolResponse>
  {
    public toolName: string;
    public argumentsJson?: string;

    public constructor(init?: Partial<InvokeEndUserAiToolRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'InvokeEndUserAiToolRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new InvokeEndUserAiToolResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/auth/block", "PATCH")
  // @Api(Description="Membership")
  // @DataContract
  export class BlockUserRequest extends CodeMashRequestBase implements IReturn<EmptyResponse> {
    /** @description Id of the user to block, from get_users. */
    // @DataMember
    // @ApiMember(Description="Id of the user to block, from get_users.", IsRequired=true)
    public id: string;

    /** @description Database integration id. Optional — defaults to the request environment's default integration. */
    // @DataMember
    // @ApiMember(Description="Database integration id. Optional — defaults to the request environment's default integration.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<BlockUserRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'BlockUserRequest';
    }
    public getMethod() {
      return 'PATCH';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/auth/register/service", "POST")
  // @Api(Description="Membership")
  // @DataContract
  export class SaveSystemUserWithPermissions
    extends SaveUserWithRolesBase
    implements IReturn<IdResponse>
  {
    public constructor(init?: Partial<SaveSystemUserWithPermissions>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SaveSystemUserWithPermissions';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new IdResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/auth/register/guest", "POST")
  // @Api(Description="Membership")
  // @DataContract
  export class SaveGuestUser extends SaveUser implements IReturn<SaveGuestUserResponse> {
    public constructor(init?: Partial<SaveGuestUser>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SaveGuestUser';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new SaveGuestUserResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/auth/register/phone", "POST")
  // @Api(Description="Membership")
  // @DataContract
  export class SavePhoneUser extends SaveUser implements IReturn<IdResponse> {
    /** @description Phone number for the new user, in E.164 format. */
    // @DataMember
    // @ApiMember(Description="Phone number for the new user, in E.164 format.", IsRequired=true)
    public phone: string;

    public constructor(init?: Partial<SavePhoneUser>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SavePhoneUser';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new IdResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/auth/register/user-name", "POST")
  // @Api(Description="Membership")
  // @DataContract
  export class SaveUserNameUser
    extends SaveUser
    implements IReturn<IdResponse>, IPublicRegistrationRequest
  {
    // @DataMember
    public password: string;

    // @DataMember
    public userName: string;

    /** @description Optional roles from the project's "Permitted user registration roles". Empty = the default registration role. */
    // @DataMember
    // @ApiMember(Description="Optional roles from the project's \"Permitted user registration roles\". Empty = the default registration role.")
    public roles?: string[];

    public constructor(init?: Partial<SaveUserNameUser>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SaveUserNameUser';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new IdResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/auth/register/email", "POST")
  // @Api(Description="Membership")
  // @DataContract
  export class SaveEmailUser
    extends SaveUser
    implements IReturn<IdResponse>, IPublicRegistrationRequest
  {
    // @DataMember
    public password: string;

    // @DataMember
    public email: string;

    /** @description Optional roles from the project's "Permitted user registration roles". Empty = the default registration role. */
    // @DataMember
    // @ApiMember(Description="Optional roles from the project's \"Permitted user registration roles\". Empty = the default registration role.")
    public roles?: string[];

    public constructor(init?: Partial<SaveEmailUser>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SaveEmailUser';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new IdResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/auth/register/phone-with-permissions", "POST")
  // @Api(Description="Membership")
  // @DataContract
  export class SavePhoneUserNameWithPermissions
    extends SaveUserWithRolesBase
    implements IReturn<IdResponse>
  {
    // @DataMember
    public phone: string;

    public constructor(init?: Partial<SavePhoneUserNameWithPermissions>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SavePhoneUserNameWithPermissions';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new IdResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/auth/register/email-with-permissions", "POST")
  // @Api(Description="Membership")
  // @DataContract
  export class SaveEmailUserNameWithPermissions
    extends SaveUserWithRolesBase
    implements IReturn<IdResponse>
  {
    // @DataMember
    public password: string;

    // @DataMember
    public email: string;

    public constructor(init?: Partial<SaveEmailUserNameWithPermissions>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SaveEmailUserNameWithPermissions';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new IdResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/auth/register/user-name-with-permissions", "POST")
  // @Api(Description="Membership")
  // @DataContract
  export class SaveUserNameWithPermissions
    extends SaveUserWithRolesBase
    implements IReturn<IdResponse>
  {
    // @DataMember
    public password: string;

    // @DataMember
    public userName: string;

    public constructor(init?: Partial<SaveUserNameWithPermissions>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SaveUserNameWithPermissions';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new IdResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/auth", "DELETE")
  // @Api(Description="Membership")
  // @DataContract
  export class DeleteUserRequest extends CodeMashRequestBase implements IReturn<EmptyResponse> {
    /** @description Id of the user to delete, from get_users. */
    // @DataMember
    // @ApiMember(Description="Id of the user to delete, from get_users.", IsRequired=true)
    public id: string;

    /** @description Database integration id. Optional — defaults to the request environment's default integration. */
    // @DataMember
    // @ApiMember(Description="Database integration id. Optional — defaults to the request environment's default integration.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<DeleteUserRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteUserRequest';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/auth/{id}", "GET")
  // @Api(Description="Membership")
  // @DataContract
  export class GetUserRequest extends CodeMashRequestBase implements IReturn<GetUserResponse> {
    /** @description Id of the user to fetch, from get_users. */
    // @DataMember
    // @ApiMember(Description="Id of the user to fetch, from get_users.", IsRequired=true)
    public id: string;

    /** @description Database integration id. Optional — defaults to the request environment's default integration. */
    // @DataMember
    // @ApiMember(Description="Database integration id. Optional — defaults to the request environment's default integration.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetUserRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetUserRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetUserResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/auth", "GET")
  // @Api(Description="Membership")
  // @DataContract
  export class GetUsersRequest
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetUsersResponse>
  {
    /** @description Database integration id. Optional — defaults to the request environment's default integration. */
    // @DataMember
    // @ApiMember(Description="Database integration id. Optional — defaults to the request environment's default integration.")
    public databaseIntegrationId?: string;

    /** @description Include each user's effective permissions in the result. */
    // @DataMember
    // @ApiMember(Description="Include each user's effective permissions in the result.")
    public includePermissions: boolean;

    /** @description Only return users that have a registered push device. */
    // @DataMember
    // @ApiMember(Description="Only return users that have a registered push device.")
    public userShouldHavePushDevice: boolean;

    /** @description Only return users that have an email address. */
    // @DataMember
    // @ApiMember(Description="Only return users that have an email address.")
    public userShouldHaveEmail: boolean;

    /** @description Include each user's metadata in the result. */
    // @DataMember
    // @ApiMember(Description="Include each user's metadata in the result.")
    public includeMeta: boolean;

    /** @description Filter to users that have any of these role names. */
    // @DataMember
    // @ApiMember(Description="Filter to users that have any of these role names.")
    public roleNames?: string[];

    /** @description Filter to these specific user ids. */
    // @DataMember
    // @ApiMember(Description="Filter to these specific user ids.")
    public userIds?: string[];

    /** @description Free text, case-insensitive: matches email, user name, display / first / last name or phone. */
    // @DataMember
    // @ApiMember(Description="Free text, case-insensitive: matches email, user name, display / first / last name or phone.")
    public search?: string;

    /** @description Case-insensitive part of the email. */
    // @DataMember
    // @ApiMember(Description="Case-insensitive part of the email.")
    public email?: string;

    /** @description Case-insensitive part of the user name. */
    // @DataMember
    // @ApiMember(Description="Case-insensitive part of the user name.")
    public userName?: string;

    /** @description Status names, any of: Registered, PendingValidation, Active, Unregistered, Suspended, InActive, Blocked. */
    // @DataMember
    // @ApiMember(Description="Status names, any of: Registered, PendingValidation, Active, Unregistered, Suspended, InActive, Blocked.")
    public statuses?: string[];

    /** @description Login type names, any of: Service, Email, UserName, Phone, Guest, Social. */
    // @DataMember
    // @ApiMember(Description="Login type names, any of: Service, Email, UserName, Phone, Guest, Social.")
    public types?: string[];

    public constructor(init?: Partial<GetUsersRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetUsersRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetUsersResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/auth/{id}/preferences", "GET")
  // @Api(Description="Membership")
  // @DataContract
  export class GetUserPreferencesRequest
    extends CodeMashRequestBase
    implements IReturn<GetUserPreferencesResponse>
  {
    /** @description Id of the user whose preferences to fetch, from get_users. */
    // @DataMember
    // @ApiMember(Description="Id of the user whose preferences to fetch, from get_users.", IsRequired=true)
    public id: string;

    /** @description Database integration id. Optional — defaults to the project's default integration. */
    // @DataMember
    // @ApiMember(Description="Database integration id. Optional — defaults to the project's default integration.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetUserPreferencesRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetUserPreferencesRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetUserPreferencesResponse();
    }
  }

  // @Route("/{version}/membership/users/{contactId}/marketing-state/{channel}/consent", "POST")
  export class GrantContactConsentRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    /** @description Id of the user (contact) to grant consent for. */
    // @ApiMember(Description="Id of the user (contact) to grant consent for.", IsRequired=true)
    public contactId: string;

    /** @description Delivery channel to grant consent on: Email, Sms, or Push. */
    // @ApiMember(Description="Delivery channel to grant consent on: Email, Sms, or Push.", IsRequired=true)
    public channel: string;

    /** @description Lawful basis for the consent, e.g. Consent. Defaults to Consent. */
    // @ApiMember(Description="Lawful basis for the consent, e.g. Consent. Defaults to Consent.")
    public lawfulBasis: string;

    /** @description Source of the consent, e.g. UserOptIn. Defaults to UserOptIn. */
    // @ApiMember(Description="Source of the consent, e.g. UserOptIn. Defaults to UserOptIn.")
    public source: string;

    /** @description Optional free-text reference to evidence of consent (e.g. a form submission id). */
    // @ApiMember(Description="Optional free-text reference to evidence of consent (e.g. a form submission id).")
    public evidenceRef?: string;

    public constructor(init?: Partial<GrantContactConsentRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GrantContactConsentRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/auth/invite", "POST")
  // @Api(Description="Membership")
  // @DataContract
  export class InviteUserRequest extends CodeMashRequestBase implements IReturn<EmptyResponse> {
    /** @description Email address the invitation is sent to. It cannot be changed later. */
    // @DataMember
    // @ApiMember(Description="Email address the invitation is sent to. It cannot be changed later.", IsRequired=true)
    public email: string;

    /** @description The invited person's full name, e.g. "Rūta Petraitė". Stored as the full name, first name (first word) and last name (the rest). The user may change it when finishing. */
    // @DataMember
    // @ApiMember(Description="The invited person's full name, e.g. \"Rūta Petraitė\". Stored as the full name, first name (first word) and last name (the rest). The user may change it when finishing.")
    public fullName?: string;

    /** @description Optional. How e-mails greet the person ("Hi {salutation},"), e.g. "Rūta". Stored as the display name. When empty the full name is used. The user may change it when finishing. */
    // @DataMember
    // @ApiMember(Description="Optional. How e-mails greet the person (\"Hi {salutation},\"), e.g. \"Rūta\". Stored as the display name. When empty the full name is used. The user may change it when finishing.")
    public salutation?: string;

    /** @description Database integration id. Optional — defaults to the request environment's default integration. */
    // @DataMember
    // @ApiMember(Description="Database integration id. Optional — defaults to the request environment's default integration.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<InviteUserRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'InviteUserRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/auth/invitation/finish", "POST")
  // @Api(Description="Membership")
  // @DataContract
  export class FinishInvitationRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    /** @description One-time invitation token from the e-mail link (the #token= fragment). */
    // @DataMember
    // @ApiMember(Description="One-time invitation token from the e-mail link (the #token= fragment).", IsRequired=true)
    public token: string;

    /** @description The user's password. Validated against the project's complexity policy. */
    // @DataMember
    // @ApiMember(Description="The user's password. Validated against the project's complexity policy.", IsRequired=true)
    public password: string;

    /** @description Optional. The user's full name; replaces the one the admin entered (full name, first name = first word, last name = the rest). Empty = keep the admin's. */
    // @DataMember
    // @ApiMember(Description="Optional. The user's full name; replaces the one the admin entered (full name, first name = first word, last name = the rest). Empty = keep the admin's.")
    public fullName?: string;

    /** @description Optional. How e-mails greet the user (stored as the display name). Empty = keep the admin's, or the full name when the admin gave none. */
    // @DataMember
    // @ApiMember(Description="Optional. How e-mails greet the user (stored as the display name). Empty = keep the admin's, or the full name when the admin gave none.")
    public salutation?: string;

    /** @description Optional. Older form of Salutation (the display name); Salutation wins when both are sent. */
    // @DataMember
    // @ApiMember(Description="Optional. Older form of Salutation (the display name); Salutation wins when both are sent.")
    public displayName?: string;

    /** @description Optional first name; wins over the one taken from FullName. */
    // @DataMember
    // @ApiMember(Description="Optional first name; wins over the one taken from FullName.")
    public firstName?: string;

    /** @description Optional last name; wins over the one taken from FullName. */
    // @DataMember
    // @ApiMember(Description="Optional last name; wins over the one taken from FullName.")
    public lastName?: string;

    public constructor(init?: Partial<FinishInvitationRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'FinishInvitationRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/auth/{userId}/link-identity", "POST")
  // @Api(Description="Membership")
  // @DataContract
  export class LinkIdentityRequest extends CodeMashRequestBase implements IReturn<EmptyResponse> {
    // @DataMember
    public userId: string;

    // @DataMember
    public provider: string;

    // @DataMember
    public providerToken: string;

    // @DataMember
    public emailToVerify?: string;

    // @DataMember
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<LinkIdentityRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'LinkIdentityRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/users/{userId}/map-auth", "POST")
  // @Api(Description="Membership")
  export class MapAuthToUserRequest extends CodeMashRequestBase implements IReturn<EmptyResponse> {
    public userId: string;
    public authId: string;
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<MapAuthToUserRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'MapAuthToUserRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/auth/assign-roles", "PUT")
  // @Api(Description="Membership")
  // @DataContract
  export class AssignRolePermissionsRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    /** @description Id of the user login to assign roles to, from get_users. */
    // @DataMember
    // @ApiMember(Description="Id of the user login to assign roles to, from get_users.", IsRequired=true)
    public id: string;

    /** @description Database integration id. Optional — defaults to the request environment's default integration. */
    // @DataMember
    // @ApiMember(Description="Database integration id. Optional — defaults to the request environment's default integration.")
    public databaseIntegrationId?: string;

    /** @description The complete new list of role names (full replacement), from get_roles. */
    // @DataMember
    // @ApiMember(Description="The complete new list of role names (full replacement), from get_roles.")
    public roles?: string[];

    public constructor(init?: Partial<AssignRolePermissionsRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'AssignRolePermissionsRequest';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/users/{userId}/roles", "PUT")
  // @Api(Description="Membership")
  // @DataContract
  export class SetContactRolesRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    /** @description Id of the human user to assign roles to. */
    // @DataMember
    // @ApiMember(Description="Id of the human user to assign roles to.", IsRequired=true)
    public userId: string;

    /** @description The complete new list of role ids (full replacement), from get_roles. Empty/omitted clears all roles. */
    // @DataMember
    // @ApiMember(Description="The complete new list of role ids (full replacement), from get_roles. Empty/omitted clears all roles.")
    public roles?: string[];

    /** @description Database integration id. Optional — defaults to the request environment's default integration. */
    // @DataMember
    // @ApiMember(Description="Database integration id. Optional — defaults to the request environment's default integration.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<SetContactRolesRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SetContactRolesRequest';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  // @Route("/{version}/membership/users/{contactId}/marketing-state/{commChannel}/{channel}/tags/{tag}", "PUT")
  export class SetContactTagSubscriptionRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    /** @description Id of the user (contact) to update. */
    // @ApiMember(Description="Id of the user (contact) to update.", IsRequired=true)
    public contactId: string;

    /** @description Communication channel type: Marketing or Transactional. */
    // @ApiMember(Description="Communication channel type: Marketing or Transactional.", IsRequired=true)
    public commChannel: string;

    /** @description Delivery channel: Email, Sms, or Push. */
    // @ApiMember(Description="Delivery channel: Email, Sms, or Push.", IsRequired=true)
    public channel: string;

    /** @description The tag name; must already exist for the communication channel. */
    // @ApiMember(Description="The tag name; must already exist for the communication channel.", IsRequired=true)
    public tag: string;

    /** @description True to subscribe (unblock) the tag, false to block it. */
    // @ApiMember(Description="True to subscribe (unblock) the tag, false to block it.")
    public subscribed: boolean;

    public constructor(init?: Partial<SetContactTagSubscriptionRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SetContactTagSubscriptionRequest';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/auth/unblock", "PATCH")
  // @Api(Description="Membership")
  // @DataContract
  export class UnblockUserRequest extends CodeMashRequestBase implements IReturn<EmptyResponse> {
    /** @description Id of the user to unblock, from get_users. */
    // @DataMember
    // @ApiMember(Description="Id of the user to unblock, from get_users.", IsRequired=true)
    public id: string;

    /** @description Database integration id. Optional — defaults to the request environment's default integration. */
    // @DataMember
    // @ApiMember(Description="Database integration id. Optional — defaults to the request environment's default integration.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<UnblockUserRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UnblockUserRequest';
    }
    public getMethod() {
      return 'PATCH';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  // @Route("/{version}/membership/users/{contactId}/marketing-state/{channel}/unsubscribe", "POST")
  export class UnsubscribeContactRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    /** @description Id of the user (contact) to unsubscribe. */
    // @ApiMember(Description="Id of the user (contact) to unsubscribe.", IsRequired=true)
    public contactId: string;

    /** @description Delivery channel to unsubscribe from: Email, Sms, or Push. */
    // @ApiMember(Description="Delivery channel to unsubscribe from: Email, Sms, or Push.", IsRequired=true)
    public channel: string;

    /** @description Optional suppression reason name explaining why consent was revoked. */
    // @ApiMember(Description="Optional suppression reason name explaining why consent was revoked.")
    public reason?: string;

    public constructor(init?: Partial<UnsubscribeContactRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UnsubscribeContactRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/auth", "PUT")
  // @Api(Description="Membership")
  // @DataContract
  export class UpdateUserRequest extends SaveUser implements IReturn<IdResponse> {
    /** @description Id of the user to update, from get_users. */
    // @DataMember
    // @ApiMember(Description="Id of the user to update, from get_users.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<UpdateUserRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateUserRequest';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new IdResponse();
    }
  }

  /** @description Membership */
  // @Route("/{version}/membership/auth/{id}/preferences", "PUT")
  // @Api(Description="Membership")
  // @DataContract
  export class UpdateUserPreferencesRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    /** @description Id of the user to update, from get_users. */
    // @DataMember
    // @ApiMember(Description="Id of the user to update, from get_users.", IsRequired=true)
    public id: string;

    /** @description When true, blocks all marketing messages to this user. */
    // @DataMember
    // @ApiMember(Description="When true, blocks all marketing messages to this user.")
    public blockAllMarketingMessages: boolean;

    /** @description Per communication channel, the set of tags blocked for this user. Full replacement. */
    // @DataMember
    // @ApiMember(Description="Per communication channel, the set of tags blocked for this user. Full replacement.")
    public blockedTags?: { [index: string]: HashSet<string> };

    /** @description Database integration id. Optional — defaults to the project's default integration. */
    // @DataMember
    // @ApiMember(Description="Database integration id. Optional — defaults to the project's default integration.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<UpdateUserPreferencesRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateUserPreferencesRequest';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Membership · Password */
  // @Route("/{version}/membership/userauth/password/change", "POST")
  // @Api(Description="Membership · Password")
  // @DataContract
  export class ChangePasswordRequest
    extends CodeMashRequestBase
    implements IReturn<CredentialChangedResponse>
  {
    /** @description The member's current password. */
    // @DataMember
    // @ApiMember(Description="The member's current password.", IsRequired=true)
    public currentPassword: string;

    /** @description The new password. Validated against the project's complexity policy. */
    // @DataMember
    // @ApiMember(Description="The new password. Validated against the project's complexity policy.", IsRequired=true)
    public newPassword: string;

    /** @description Database integration id. Optional — defaults to the request environment's default integration. */
    // @DataMember
    // @ApiMember(Description="Database integration id. Optional — defaults to the request environment's default integration.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<ChangePasswordRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ChangePasswordRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CredentialChangedResponse();
    }
  }

  /** @description Membership · Password */
  // @Route("/{version}/membership/userauth/password/reset/request", "POST")
  // @Api(Description="Membership · Password")
  // @DataContract
  export class RequestPasswordResetRequest
    extends CodeMashRequestBase
    implements IReturn<PasskeyOkResponse>
  {
    /** @description Email address to send the reset link to. */
    // @DataMember
    // @ApiMember(Description="Email address to send the reset link to.", IsRequired=true)
    public email: string;

    public constructor(init?: Partial<RequestPasswordResetRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RequestPasswordResetRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new PasskeyOkResponse();
    }
  }

  /** @description Membership · Password */
  // @Route("/{version}/membership/userauth/password/reset/confirm", "POST")
  // @Api(Description="Membership · Password")
  // @DataContract
  export class ConfirmPasswordResetRequest
    extends CodeMashRequestBase
    implements IReturn<CredentialChangedResponse>
  {
    /** @description One-time reset token from the email link. */
    // @DataMember
    // @ApiMember(Description="One-time reset token from the email link.", IsRequired=true)
    public token: string;

    /** @description The new password. Validated against the project's complexity policy. */
    // @DataMember
    // @ApiMember(Description="The new password. Validated against the project's complexity policy.", IsRequired=true)
    public newPassword: string;

    /** @description Database integration id. Optional — defaults to the request environment's default integration. */
    // @DataMember
    // @ApiMember(Description="Database integration id. Optional — defaults to the request environment's default integration.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<ConfirmPasswordResetRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ConfirmPasswordResetRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new CredentialChangedResponse();
    }
  }

  /** @description Membership · Password */
  // @Route("/{version}/membership/userauth/password/reset/test", "POST")
  // @Api(Description="Membership · Password")
  // @DataContract
  export class SendTestPasswordResetRequest
    extends CodeMashRequestBase
    implements IReturn<SendTestPasswordResetResponse>
  {
    /** @description Email address of the project user (a login in the request environment). */
    // @DataMember
    // @ApiMember(Description="Email address of the project user (a login in the request environment).", IsRequired=true)
    public email: string;

    public constructor(init?: Partial<SendTestPasswordResetRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SendTestPasswordResetRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new SendTestPasswordResetResponse();
    }
  }

  /** @description Membership · Passkey */
  // @Route("/{version}/membership/userauth/passkey/authentication-options", "POST")
  // @Api(Description="Membership · Passkey")
  // @DataContract
  export class PasskeyAuthenticationOptionsRequest
    extends CodeMashRequestBase
    implements IReturn<PasskeyCeremonyOptionsResponse>, IPasskeyCeremonyRequest
  {
    // @DataMember
    public email: string;

    public constructor(init?: Partial<PasskeyAuthenticationOptionsRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'PasskeyAuthenticationOptionsRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new PasskeyCeremonyOptionsResponse();
    }
  }

  /** @description Membership · Passkey */
  // @Route("/{version}/membership/userauth/passkey/verify-authentication", "POST")
  // @Api(Description="Membership · Passkey")
  // @DataContract
  export class VerifyPasskeyAuthenticationRequest
    extends CodeMashRequestBase
    implements IReturn<PasskeyAuthTokensResponse>, IPasskeyCeremonyRequest
  {
    // @DataMember
    public ceremonyId: string;

    // @DataMember
    public assertionResponse: string;

    public constructor(init?: Partial<VerifyPasskeyAuthenticationRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'VerifyPasskeyAuthenticationRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new PasskeyAuthTokensResponse();
    }
  }

  /** @description Membership · Passkey */
  // @Route("/{version}/membership/userauth/passkeys", "GET")
  // @Api(Description="Membership · Passkey")
  // @DataContract
  export class ListPasskeysRequest
    extends CodeMashRequestBase
    implements IReturn<PasskeyListResponse>
  {
    public constructor(init?: Partial<ListPasskeysRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ListPasskeysRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new PasskeyListResponse();
    }
  }

  /** @description Membership · Passkey */
  // @Route("/{version}/membership/userauth/passkeys/{CredentialId}/rename", "POST")
  // @Api(Description="Membership · Passkey")
  // @DataContract
  export class RenamePasskeyRequest
    extends CodeMashRequestBase
    implements IReturn<PasskeyOkResponse>
  {
    /** @description Base64 credential id of the passkey to rename, from list_passkeys. */
    // @DataMember
    // @ApiMember(Description="Base64 credential id of the passkey to rename, from list_passkeys.", IsRequired=true)
    public credentialId: string;

    /** @description The new friendly name for the passkey. */
    // @DataMember
    // @ApiMember(Description="The new friendly name for the passkey.", IsRequired=true)
    public friendlyName: string;

    public constructor(init?: Partial<RenamePasskeyRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RenamePasskeyRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new PasskeyOkResponse();
    }
  }

  /** @description Membership · Passkey */
  // @Route("/{version}/membership/userauth/passkeys/{CredentialId}/revoke", "POST")
  // @Api(Description="Membership · Passkey")
  // @DataContract
  export class RevokePasskeyRequest
    extends CodeMashRequestBase
    implements IReturn<PasskeyOkResponse>
  {
    /** @description Base64 credential id of the passkey to revoke, from list_passkeys. */
    // @DataMember
    // @ApiMember(Description="Base64 credential id of the passkey to revoke, from list_passkeys.", IsRequired=true)
    public credentialId: string;

    public constructor(init?: Partial<RevokePasskeyRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RevokePasskeyRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new PasskeyOkResponse();
    }
  }

  /** @description Membership · Passkey */
  // @Route("/{version}/membership/userauth/recovery/use-code", "POST")
  // @Api(Description="Membership · Passkey")
  // @DataContract
  export class UseRecoveryCodeRequest
    extends CodeMashRequestBase
    implements IReturn<PasskeyRecoveryResponse>
  {
    // @DataMember
    public email: string;

    // @DataMember
    public recoveryCode: string;

    public constructor(init?: Partial<UseRecoveryCodeRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UseRecoveryCodeRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new PasskeyRecoveryResponse();
    }
  }

  /** @description Membership · Passkey */
  // @Route("/{version}/membership/userauth/recovery/magic-link/request", "POST")
  // @Api(Description="Membership · Passkey")
  // @DataContract
  export class RequestMagicLinkRequest
    extends CodeMashRequestBase
    implements IReturn<PasskeyOkResponse>
  {
    // @DataMember
    public email: string;

    public constructor(init?: Partial<RequestMagicLinkRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RequestMagicLinkRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new PasskeyOkResponse();
    }
  }

  /** @description Membership · Passkey */
  // @Route("/{version}/membership/userauth/recovery/magic-link/consume", "POST")
  // @Api(Description="Membership · Passkey")
  // @DataContract
  export class ConsumeMagicLinkRequest
    extends CodeMashRequestBase
    implements IReturn<PasskeyRecoveryResponse>
  {
    // @DataMember
    public token: string;

    public constructor(init?: Partial<ConsumeMagicLinkRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ConsumeMagicLinkRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new PasskeyRecoveryResponse();
    }
  }

  /** @description Membership · Passkey */
  // @Route("/{version}/membership/userauth/has-passkey", "POST")
  // @Api(Description="Membership · Passkey")
  // @DataContract
  export class HasPasskeyRequest extends CodeMashRequestBase implements IReturn<PasskeyOkResponse> {
    // @DataMember
    public email: string;

    public constructor(init?: Partial<HasPasskeyRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'HasPasskeyRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new PasskeyOkResponse();
    }
  }

  /** @description Membership · Passkey */
  // @Route("/{version}/membership/userauth/email/start-verification", "POST")
  // @Api(Description="Membership · Passkey")
  // @DataContract
  export class StartEmailVerificationRequest
    extends CodeMashRequestBase
    implements IReturn<PasskeyOkResponse>
  {
    // @DataMember
    public email: string;

    public constructor(init?: Partial<StartEmailVerificationRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'StartEmailVerificationRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new PasskeyOkResponse();
    }
  }

  /** @description Membership · Passkey */
  // @Route("/{version}/membership/userauth/email/confirm-verification", "POST")
  // @Api(Description="Membership · Passkey")
  // @DataContract
  export class ConfirmEmailVerificationRequest
    extends CodeMashRequestBase
    implements IReturn<PasskeyVerificationTokenResponse>
  {
    // @DataMember
    public email: string;

    // @DataMember
    public code: string;

    public constructor(init?: Partial<ConfirmEmailVerificationRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ConfirmEmailVerificationRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new PasskeyVerificationTokenResponse();
    }
  }

  /** @description Membership · Passkey */
  // @Route("/{version}/membership/userauth/passkey/registration-options", "POST")
  // @Api(Description="Membership · Passkey")
  // @DataContract
  export class PasskeyRegistrationOptionsRequest
    extends CodeMashRequestBase
    implements IReturn<PasskeyCeremonyOptionsResponse>, IPasskeyCeremonyRequest
  {
    // @DataMember
    public verificationToken: string;

    public constructor(init?: Partial<PasskeyRegistrationOptionsRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'PasskeyRegistrationOptionsRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new PasskeyCeremonyOptionsResponse();
    }
  }

  /** @description Membership · Passkey */
  // @Route("/{version}/membership/userauth/passkey/verify-registration", "POST")
  // @Api(Description="Membership · Passkey")
  // @DataContract
  export class VerifyPasskeyRegistrationRequest
    extends CodeMashRequestBase
    implements IReturn<PasskeyAuthTokensResponse>, IPasskeyCeremonyRequest
  {
    // @DataMember
    public verificationToken: string;

    // @DataMember
    public ceremonyId: string;

    // @DataMember
    public attestationResponse: string;

    // @DataMember
    public friendlyName?: string;

    public constructor(init?: Partial<VerifyPasskeyRegistrationRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'VerifyPasskeyRegistrationRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new PasskeyAuthTokensResponse();
    }
  }

  /** @description Membership · Passkey */
  // @Route("/{version}/membership/userauth/token/refresh", "POST")
  // @Api(Description="Membership · Passkey")
  // @DataContract
  export class RefreshPasskeyTokenRequest
    extends CodeMashRequestBase
    implements IReturn<PasskeyAuthTokensResponse>
  {
    // @DataMember
    public refreshToken?: string;

    public constructor(init?: Partial<RefreshPasskeyTokenRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RefreshPasskeyTokenRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new PasskeyAuthTokensResponse();
    }
  }

  /** @description Membership · Passkey */
  // @Route("/{version}/membership/userauth/logout", "POST")
  // @Api(Description="Membership · Passkey")
  // @DataContract
  export class PasskeyLogoutRequest
    extends CodeMashRequestBase
    implements IReturn<PasskeyOkResponse>
  {
    // @DataMember
    public refreshToken?: string;

    public constructor(init?: Partial<PasskeyLogoutRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'PasskeyLogoutRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new PasskeyOkResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/taxonomies/{taxonomyName}/merged-tree", "GET")
  // @Api(Description="Database")
  // @DataContract
  export class FindMergedTermTreeRequest
    extends CodeMashRequestBase
    implements IReturn<FindMergedTermTreeResponse>
  {
    /** @description Set true to keep name / description as stored even when Accept-Language is sent (editors). The full translations are always in names / descriptions. */
    // @DataMember
    // @ApiMember(Description="Set true to keep name / description as stored even when Accept-Language is sent (editors). The full translations are always in names / descriptions.")
    public allLanguages: boolean;

    /** @description The taxonomy: its name (slug or title; URL-encode spaces) or its id (txn_…). */
    // @DataMember
    // @ApiMember(Description="The taxonomy: its name (slug or title; URL-encode spaces) or its id (txn_…).", IsRequired=true)
    public taxonomyName: string;

    // @DataMember
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<FindMergedTermTreeRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'FindMergedTermTreeRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new FindMergedTermTreeResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/taxonomies/tree", "GET")
  // @Api(Description="Database")
  // @DataContract
  export class FindTaxonomyTreeRequest
    extends CodeMashRequestBase
    implements IReturn<FindTaxonomyTreeResponse>
  {
    /** @description Set true to keep name / description as stored even when Accept-Language is sent (editors). The full translations are always in names / descriptions. */
    // @DataMember
    // @ApiMember(Description="Set true to keep name / description as stored even when Accept-Language is sent (editors). The full translations are always in names / descriptions.")
    public allLanguages: boolean;

    // @DataMember
    public includeTerms: boolean;

    // @DataMember
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<FindTaxonomyTreeRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'FindTaxonomyTreeRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new FindTaxonomyTreeResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/taxonomies/{taxonomyName}/terms", "GET")
  // @Api(Description="Database")
  // @DataContract
  export class FindTermsRequest
    extends CodeMashListPaginationRequestBase
    implements IReturn<FindTermsResponse>
  {
    /** @description Set true to keep name / description as stored even when Accept-Language is sent (editors). The full translations are always in names / descriptions. */
    // @DataMember
    // @ApiMember(Description="Set true to keep name / description as stored even when Accept-Language is sent (editors). The full translations are always in names / descriptions.")
    public allLanguages: boolean;

    /** @description The taxonomy: its name (slug or title; URL-encode spaces) or its id (txn_…). */
    // @DataMember
    // @ApiMember(Description="The taxonomy: its name (slug or title; URL-encode spaces) or its id (txn_…).", IsRequired=true)
    public taxonomyName: string;

    // @DataMember
    public databaseIntegrationId?: string;

    // @DataMember
    public filter?: string;

    // @DataMember
    public sortDescending: boolean;

    // @DataMember
    public pagingArgs?: PagingArgs;

    public constructor(init?: Partial<FindTermsRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'FindTermsRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new FindTermsResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/taxonomies/{taxonomyName}/terms/{parentId}/children", "GET")
  // @Api(Description="Database")
  // @DataContract
  export class FindTermsChildrenRequest
    extends CodeMashListPaginationRequestBase
    implements IReturn<FindTermsChildrenResponse>
  {
    /** @description Set true to keep name / description as stored even when Accept-Language is sent (editors). The full translations are always in names / descriptions. */
    // @DataMember
    // @ApiMember(Description="Set true to keep name / description as stored even when Accept-Language is sent (editors). The full translations are always in names / descriptions.")
    public allLanguages: boolean;

    /** @description The taxonomy: its name (slug or title; URL-encode spaces) or its id (txn_…). */
    // @DataMember
    // @ApiMember(Description="The taxonomy: its name (slug or title; URL-encode spaces) or its id (txn_…).", IsRequired=true)
    public taxonomyName: string;

    // @DataMember
    public parentId: string;

    // @DataMember
    public databaseIntegrationId?: string;

    // @DataMember
    public filter?: string;

    // @DataMember
    public pagingArgs?: PagingArgs;

    public constructor(init?: Partial<FindTermsChildrenRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'FindTermsChildrenRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new FindTermsChildrenResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/taxonomies/{taxonomyName}/terms/tree", "GET")
  // @Api(Description="Database")
  // @DataContract
  export class FindTermTreeRequest
    extends CodeMashRequestBase
    implements IReturn<FindTermTreeResponse>
  {
    /** @description Set true to keep name / description as stored even when Accept-Language is sent (editors). The full translations are always in names / descriptions. */
    // @DataMember
    // @ApiMember(Description="Set true to keep name / description as stored even when Accept-Language is sent (editors). The full translations are always in names / descriptions.")
    public allLanguages: boolean;

    /** @description The taxonomy: its name (slug or title; URL-encode spaces) or its id (txn_…). */
    // @DataMember
    // @ApiMember(Description="The taxonomy: its name (slug or title; URL-encode spaces) or its id (txn_…).", IsRequired=true)
    public taxonomyName: string;

    // @DataMember
    public rootTermId?: string;

    // @DataMember
    public depth?: number;

    // @DataMember
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<FindTermTreeRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'FindTermTreeRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new FindTermTreeResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/schemas/{id}", "GET")
  // @Api(Description="Database")
  // @DataContract
  export class GetDatabaseSchemaRequest
    extends CodeMashRequestBase
    implements IReturn<GetDatabaseSchemaResponse>
  {
    // @DataMember
    public id: string;

    public constructor(init?: Partial<GetDatabaseSchemaRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetDatabaseSchemaRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetDatabaseSchemaResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/schemas", "GET")
  // @Api(Description="Database")
  // @DataContract
  export class GetDatabaseSchemasRequest
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetDatabaseSchemasResponse>
  {
    // @DataMember
    public pagingArgs?: PagingArgs;

    public constructor(init?: Partial<GetDatabaseSchemasRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetDatabaseSchemasRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetDatabaseSchemasResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/collections/{collectionName}/aggregate", "POST")
  // @Api(Description="Database")
  // @DataContract
  export class AggregateRequest extends CodeMashRequestBase implements IReturn<AggregateResponse> {
    // @DataMember
    public collectionName: string;

    // @DataMember
    public databaseIntegrationId?: string;

    // @DataMember
    public pipeline: string;

    public constructor(init?: Partial<AggregateRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'AggregateRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new AggregateResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/collections/{collectionName}/{id}/responsibility", "PUT")
  // @Api(Description="Database")
  // @DataContract
  export class ChangeResponsibilityRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    // @DataMember
    public collectionName: string;

    // @DataMember
    public id: string;

    // @DataMember
    public databaseIntegrationId?: string;

    // @DataMember
    public newResponsibleUserId: string;

    public constructor(init?: Partial<ChangeResponsibilityRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ChangeResponsibilityRequest';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/collections/{collectionName}/count", "GET")
  // @Api(Description="Database")
  // @DataContract
  export class CountRequest extends CodeMashRequestBase implements IReturn<CountResponse> {
    // @DataMember
    public collectionName: string;

    // @DataMember
    public databaseIntegrationId?: string;

    // @DataMember
    public filter?: string;

    // @DataMember
    public schemaVersion?: number;

    public constructor(init?: Partial<CountRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CountRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new CountResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/collections/{collectionName}/many", "DELETE")
  // @Api(Description="Database")
  // @DataContract
  export class DeleteManyRequest extends CodeMashRequestBase implements IReturn<EmptyResponse> {
    // @DataMember
    public collectionName: string;

    // @DataMember
    public databaseIntegrationId?: string;

    // @DataMember
    public filter: string;

    // @DataMember
    public allRecords?: boolean;

    public constructor(init?: Partial<DeleteManyRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteManyRequest';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/collections/{collectionName}/{id}", "DELETE")
  // @Api(Description="Database")
  // @DataContract
  export class DeleteOneRequest extends CodeMashRequestBase implements IReturn<EmptyResponse> {
    // @DataMember
    public collectionName: string;

    // @DataMember
    public id: string;

    // @DataMember
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<DeleteOneRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteOneRequest';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/collections/{collectionName}/distinct", "GET")
  // @Api(Description="Database")
  // @DataContract
  export class DistinctRequest extends CodeMashRequestBase implements IReturn<DistinctResponse> {
    // @DataMember
    public collectionName: string;

    // @DataMember
    public databaseIntegrationId?: string;

    // @DataMember
    public field: string;

    // @DataMember
    public filter?: string;

    // @DataMember
    public schemaVersion?: number;

    public constructor(init?: Partial<DistinctRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DistinctRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new DistinctResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/collections/{collectionName}/aggregates/{aggregateId}/execute", "POST")
  // @Api(Description="Database")
  // @DataContract
  export class ExecuteAggregateRequest
    extends CodeMashRequestBase
    implements IReturn<ExecuteAggregateResponse>
  {
    // @DataMember
    public collectionName: string;

    // @DataMember
    public aggregateId: string;

    // @DataMember
    public databaseIntegrationId?: string;

    // @DataMember
    public tokens?: { [index: string]: string };

    public constructor(init?: Partial<ExecuteAggregateRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ExecuteAggregateRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new ExecuteAggregateResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/collections/{collectionName}", "GET")
  // @Api(Description="Database")
  // @DataContract
  export class FindRequest
    extends CodeMashListPaginationRequestBase
    implements IReturn<FindResponse>
  {
    // @DataMember
    public collectionName: string;

    // @DataMember
    public databaseIntegrationId?: string;

    // @DataMember
    public filter?: string;

    // @DataMember
    public schemaVersion?: number;

    // @DataMember
    public pagingArgs?: PagingArgs;

    // @DataMember
    public sortBy?: string;

    // @DataMember
    public sortOrder?: number;

    // @DataMember
    public expandReferences: boolean;

    // @DataMember
    public allLanguages: boolean;

    public constructor(init?: Partial<FindRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'FindRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new FindResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/collections/{collectionName}/{id}", "GET")
  // @Api(Description="Database")
  // @DataContract
  export class FindOneRequest extends CodeMashRequestBase implements IReturn<FindOneResponse> {
    // @DataMember
    public collectionName: string;

    // @DataMember
    public id: string;

    // @DataMember
    public databaseIntegrationId?: string;

    // @DataMember
    public expandReferences: boolean;

    // @DataMember
    public allLanguages: boolean;

    public constructor(init?: Partial<FindOneRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'FindOneRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new FindOneResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/collections/{collectionName}/own", "GET")
  // @Api(Description="Database")
  // @DataContract
  export class FindOwnRequest
    extends CodeMashListPaginationRequestBase
    implements IReturn<FindResponse>
  {
    // @DataMember
    public collectionName: string;

    // @DataMember
    public databaseIntegrationId?: string;

    // @DataMember
    public filter?: string;

    // @DataMember
    public schemaVersion?: number;

    // @DataMember
    public pagingArgs?: PagingArgs;

    /** @description Set true to get every reference value as { id, display } (display = the target's displayField per the schema; null when the target is gone). Needs read permission on every source the schema links to (users, roles, taxonomy, collection, files) — otherwise the read is refused with CM-ERRORS-DATABASE-056 naming the source. Default false returns the stored ids. */
    // @DataMember
    // @ApiMember(Description="Set true to get every reference value as { id, display } (display = the target's displayField per the schema; null when the target is gone). Needs read permission on every source the schema links to (users, roles, taxonomy, collection, files) — otherwise the read is refused with CM-ERRORS-DATABASE-056 naming the source. Default false returns the stored ids.")
    public expandReferences: boolean;

    // @DataMember
    public allLanguages: boolean;

    public constructor(init?: Partial<FindOwnRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'FindOwnRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new FindResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/collections/{collectionName}/many", "POST")
  // @Api(Description="Database")
  // @DataContract
  export class InsertManyRequest extends CodeMashRequestBase implements IReturn<EmptyResponse> {
    // @DataMember
    public collectionName: string;

    // @DataMember
    public databaseIntegrationId?: string;

    // @DataMember
    public documents: string;

    public constructor(init?: Partial<InsertManyRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'InsertManyRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/collections/{collectionName}", "POST")
  // @Api(Description="Database")
  // @DataContract
  export class InsertOneRequest extends CodeMashRequestBase implements IReturn<IdResponse> {
    // @DataMember
    public collectionName: string;

    // @DataMember
    public databaseIntegrationId?: string;

    // @DataMember
    public document: string;

    public constructor(init?: Partial<InsertOneRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'InsertOneRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new IdResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/collections/{collectionName}/{id}/replace", "PUT")
  // @Api(Description="Database")
  // @DataContract
  export class ReplaceOneRequest extends CodeMashRequestBase implements IReturn<EmptyResponse> {
    // @DataMember
    public collectionName: string;

    // @DataMember
    public id: string;

    // @DataMember
    public databaseIntegrationId?: string;

    // @DataMember
    public replacement: string;

    public constructor(init?: Partial<ReplaceOneRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ReplaceOneRequest';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/collections/{collectionName}/many", "PUT")
  // @Api(Description="Database")
  // @DataContract
  export class UpdateManyRequest extends CodeMashRequestBase implements IReturn<EmptyResponse> {
    // @DataMember
    public collectionName: string;

    // @DataMember
    public databaseIntegrationId?: string;

    // @DataMember
    public filter: string;

    // @DataMember
    public allRecords?: boolean;

    // @DataMember
    public update: string;

    // @DataMember
    public arrayFilters?: string;

    public constructor(init?: Partial<UpdateManyRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateManyRequest';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/collections/{collectionName}/{id}", "PUT")
  // @Api(Description="Database")
  // @DataContract
  export class UpdateOneRequest extends CodeMashRequestBase implements IReturn<EmptyResponse> {
    // @DataMember
    public collectionName: string;

    // @DataMember
    public id: string;

    // @DataMember
    public databaseIntegrationId?: string;

    // @DataMember
    public update: string;

    // @DataMember
    public arrayFilters?: string;

    public constructor(init?: Partial<UpdateOneRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateOneRequest';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Files */
  // @Route("/{version}/files/{filesIntegrationId}/commit", "POST")
  // @Api(Description="Files")
  // @DataContract
  export class CommitUploadRequest extends CodeMashRequestBase implements IReturn<EmptyResponse> {
    // @DataMember
    public filesIntegrationId: string;

    // @DataMember
    public path: string;

    // @DataMember
    public contentType?: string;

    // @DataMember
    public sizeBytes?: number;

    // @DataMember
    public fileName?: string;

    // @DataMember
    public ownerUserId?: string;

    // @DataMember
    public reassignOwner?: boolean;

    public constructor(init?: Partial<CommitUploadRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CommitUploadRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Files */
  // @Route("/{version}/files/{filesIntegrationId}/content", "GET")
  // @Api(Description="Files")
  // @DataContract
  export class GetFileContentRequest extends RequestBase implements IReturn<Blob> {
    // @DataMember
    public filesIntegrationId: string;

    // @DataMember
    public path: string;

    // @DataMember
    public token?: string;

    public constructor(init?: Partial<GetFileContentRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFileContentRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new Blob();
    }
  }

  /** @description Files */
  // @Route("/{version}/files/{filesIntegrationId}/content", "PUT")
  // @Api(Description="Files")
  // @DataContract
  export class PutFileContentRequest extends RequestBase implements IReturn<EmptyResponse> {
    // @DataMember
    public filesIntegrationId: string;

    // @DataMember
    public path: string;

    // @DataMember
    public token?: string;

    public constructor(init?: Partial<PutFileContentRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'PutFileContentRequest';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Files */
  // @Route("/{version}/files/{filesIntegrationId}", "DELETE")
  // @Api(Description="Files")
  // @DataContract
  export class DeleteFileApiRequest extends CodeMashRequestBase implements IReturn<EmptyResponse> {
    // @DataMember
    public filesIntegrationId: string;

    // @DataMember
    public path: string;

    public constructor(init?: Partial<DeleteFileApiRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteFileApiRequest';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Files */
  // @Route("/{version}/files/{filesIntegrationId}/bulk", "DELETE")
  // @Api(Description="Files")
  // @DataContract
  export class DeleteManyFilesApiRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    // @DataMember
    public filesIntegrationId: string;

    // @DataMember(Name="paths[]")
    public paths__: string[] = [];

    public constructor(init?: Partial<DeleteManyFilesApiRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteManyFilesApiRequest';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Files */
  // @Route("/{version}/files/{filesIntegrationId}/download", "GET")
  // @Api(Description="Files")
  // @DataContract
  export class DownloadFileApiRequest extends CodeMashRequestBase implements IReturn<Blob> {
    // @DataMember
    public filesIntegrationId: string;

    // @DataMember
    public path: string;

    public constructor(init?: Partial<DownloadFileApiRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DownloadFileApiRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new Blob();
    }
  }

  /** @description Files */
  // @Route("/{version}/files/{filesIntegrationId}/by-id/{id}", "GET")
  // @Api(Description="Files")
  // @DataContract
  export class GetFileByIdRequest
    extends CodeMashRequestBase
    implements IReturn<GetFileByIdResponse>
  {
    // @DataMember
    public filesIntegrationId: string;

    // @DataMember
    public id: string;

    public constructor(init?: Partial<GetFileByIdRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFileByIdRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetFileByIdResponse();
    }
  }

  /** @description Files */
  // @Route("/{version}/files/{filesIntegrationId}/info", "GET")
  // @Api(Description="Files")
  // @DataContract
  export class GetFileInfoRequest
    extends CodeMashRequestBase
    implements IReturn<GetFileInfoResponse>
  {
    // @DataMember
    public filesIntegrationId: string;

    // @DataMember
    public path: string;

    public constructor(init?: Partial<GetFileInfoRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFileInfoRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetFileInfoResponse();
    }
  }

  /** @description Files */
  // @Route("/{version}/files/{filesIntegrationId}/sign", "GET")
  // @Api(Description="Files")
  // @DataContract
  export class GetSignedUrlRequest
    extends CodeMashRequestBase
    implements IReturn<GetSignedUrlResponse>
  {
    // @DataMember
    public filesIntegrationId: string;

    // @DataMember
    public path: string;

    // @DataMember
    public expirationSeconds?: number;

    public constructor(init?: Partial<GetSignedUrlRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSignedUrlRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSignedUrlResponse();
    }
  }

  /** @description Files */
  // @Route("/{version}/files/{filesIntegrationId}", "GET")
  // @Api(Description="Files")
  // @DataContract
  export class ListFilesRequest
    extends CodeMashListPaginationRequestBase
    implements IReturn<ListFilesResponse>
  {
    // @DataMember
    public filesIntegrationId: string;

    // @DataMember
    public path?: string;

    public constructor(init?: Partial<ListFilesRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ListFilesRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new ListFilesResponse();
    }
  }

  /** @description Files */
  // @Route("/{version}/files/public/{PublicId}/{Name*}", "GET")
  // @Api(Description="Files")
  // @DataContract
  export class GetPublicFileRequest extends RequestBase implements IReturn<Blob> {
    // @DataMember
    public publicId?: string;

    // @DataMember
    public name?: string;

    public constructor(init?: Partial<GetPublicFileRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPublicFileRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new Blob();
    }
  }

  /** @description Files */
  // @Route("/{version}/files/{filesIntegrationId}/register", "POST")
  // @Api(Description="Files")
  // @DataContract
  export class RegisterFilesRequest
    extends CodeMashRequestBase
    implements IReturn<RegisterFilesResponse>
  {
    // @DataMember
    public filesIntegrationId: string;

    // @DataMember
    public items?: RegisterFileItem[];

    // @DataMember
    public reassignOwner?: boolean;

    // @DataMember
    public dryRun?: boolean;

    public constructor(init?: Partial<RegisterFilesRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RegisterFilesRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new RegisterFilesResponse();
    }
  }

  /** @description Files */
  // @Route("/{version}/files/{filesIntegrationId}/upload-url", "POST")
  // @Api(Description="Files")
  // @DataContract
  export class RequestUploadUrlRequest
    extends CodeMashRequestBase
    implements IReturn<RequestUploadUrlResponse>
  {
    // @DataMember
    public filesIntegrationId: string;

    // @DataMember
    public path: string;

    // @DataMember
    public contentType: string;

    // @DataMember
    public expirationSeconds?: number;

    // @DataMember
    public ownerUserId?: string;

    // @DataMember
    public reassignOwner?: boolean;

    public constructor(init?: Partial<RequestUploadUrlRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RequestUploadUrlRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new RequestUploadUrlResponse();
    }
  }

  /** @description Files */
  // @Route("/{version}/files/{filesIntegrationId}/use", "POST")
  // @Api(Description="Files")
  // @DataContract
  export class UseFileRequest extends CodeMashRequestBase implements IReturn<IdResponse> {
    // @DataMember
    public filesIntegrationId: string;

    // @DataMember
    public path: string;

    // @DataMember
    public ownerUserId?: string;

    // @DataMember
    public reassignOwner?: boolean;

    public constructor(init?: Partial<UseFileRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UseFileRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new IdResponse();
    }
  }

  /** @description Registers or refreshes a push device for the signed-in user. */
  // @Route("/{version}/notifications/push/devices", "POST")
  // @Api(Description="Registers or refreshes a push device for the signed-in user.")
  export class RegisterOwnPushDeviceRequest
    extends CodeMashRequestBase
    implements IReturn<IdResponse>
  {
    /** @description Who issued the token: fcm (Android / Firebase) or apns (iOS). The NATIVE device token — in an Expo app use getDevicePushTokenAsync(). Expo push tokens (provider 'expo') are refused. */
    // @ApiMember(Description="Who issued the token: fcm (Android / Firebase) or apns (iOS). The NATIVE device token — in an Expo app use getDevicePushTokenAsync(). Expo push tokens (provider 'expo') are refused.", IsRequired=true)
    public provider: string;

    /** @description The push token, exactly as the provider gave it. */
    // @ApiMember(Description="The push token, exactly as the provider gave it.", IsRequired=true)
    public token: string;

    /** @description The app's platform: ios, android or web. */
    // @ApiMember(Description="The app's platform: ios, android or web.")
    public platform?: string;

    /** @description Operating system name, e.g. iOS. */
    // @ApiMember(Description="Operating system name, e.g. iOS.")
    public osName?: string;

    /** @description Operating system version, e.g. 18.1. */
    // @ApiMember(Description="Operating system version, e.g. 18.1.")
    public osVersion?: string;

    /** @description The app version, e.g. 2.4.1. */
    // @ApiMember(Description="The app version, e.g. 2.4.1.")
    public appVersion?: string;

    /** @description The device name the user sees, e.g. Anna's iPhone. */
    // @ApiMember(Description="The device name the user sees, e.g. Anna's iPhone.")
    public deviceName?: string;

    /** @description The device model, e.g. iPhone 15. */
    // @ApiMember(Description="The device model, e.g. iPhone 15.")
    public modelName?: string;

    public brand?: string;
    public manufacturer?: string;
    /** @description A stable id the app keeps for this installation (not the token). */
    // @ApiMember(Description="A stable id the app keeps for this installation (not the token).")
    public installationId?: string;

    /** @description The device locale, e.g. lt-LT. */
    // @ApiMember(Description="The device locale, e.g. lt-LT.")
    public locale?: string;

    /** @description The device time zone (IANA), e.g. Europe/Vilnius. */
    // @ApiMember(Description="The device time zone (IANA), e.g. Europe/Vilnius.")
    public timeZone?: string;

    public constructor(init?: Partial<RegisterOwnPushDeviceRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RegisterOwnPushDeviceRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new IdResponse();
    }
  }

  /** @description Lists the signed-in user's own push devices. */
  // @Route("/{version}/notifications/push/devices", "GET")
  // @Api(Description="Lists the signed-in user's own push devices.")
  export class GetOwnPushDevicesRequest
    extends CodeMashRequestBase
    implements IReturn<GetOwnPushDevicesResponse>
  {
    public constructor(init?: Partial<GetOwnPushDevicesRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetOwnPushDevicesRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetOwnPushDevicesResponse();
    }
  }

  /** @description Removes one of the signed-in user's own push devices by id. */
  // @Route("/{version}/notifications/push/devices/{Id}", "DELETE")
  // @Api(Description="Removes one of the signed-in user's own push devices by id.")
  export class DeleteOwnPushDeviceRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    /** @description The device id (pnd_…) from the devices list or the register answer. */
    // @ApiMember(Description="The device id (pnd_…) from the devices list or the register answer.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DeleteOwnPushDeviceRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteOwnPushDeviceRequest';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Removes the signed-in user's push device registered with a token (sign-out). */
  // @Route("/{version}/notifications/push/devices", "DELETE")
  // @Api(Description="Removes the signed-in user's push device registered with a token (sign-out).")
  export class DeleteOwnPushDeviceByTokenRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    /** @description The push token the device was registered with. */
    // @ApiMember(Description="The push token the device was registered with.", IsRequired=true)
    public token: string;

    public constructor(init?: Partial<DeleteOwnPushDeviceByTokenRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteOwnPushDeviceByTokenRequest';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Lists the push messages sent to the signed-in user. */
  // @Route("/{version}/notifications/push/messages", "GET")
  // @Api(Description="Lists the push messages sent to the signed-in user.")
  export class GetOwnPushMessagesRequest
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetOwnPushMessagesResponse>
  {
    /** @description Only messages the caller has not marked read. */
    // @ApiMember(Description="Only messages the caller has not marked read.")
    public unreadOnly: boolean;

    public constructor(init?: Partial<GetOwnPushMessagesRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetOwnPushMessagesRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetOwnPushMessagesResponse();
    }
  }

  /** @description Marks one push message sent to the signed-in user read. */
  // @Route("/{version}/notifications/push/messages/{Id}/read", "POST")
  // @Api(Description="Marks one push message sent to the signed-in user read.")
  export class MarkOwnPushMessageReadRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    /** @description The message id (ntf_…) from the messages list. */
    // @ApiMember(Description="The message id (ntf_…) from the messages list.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<MarkOwnPushMessageReadRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'MarkOwnPushMessageReadRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Marks every push message sent to the signed-in user read. */
  // @Route("/{version}/notifications/push/messages/read", "POST")
  // @Api(Description="Marks every push message sent to the signed-in user read.")
  export class MarkAllOwnPushMessagesReadRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    public constructor(init?: Partial<MarkAllOwnPushMessagesReadRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'MarkAllOwnPushMessagesReadRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Send your app's own log entries to the project's logs. */
  // @Route("/{version}/logs", "POST")
  // @Api(Description="Send your app's own log entries to the project's logs.")
  export class WriteLogs extends CodeMashRequestBase implements IReturn<WriteLogsResponse> {
    /** @description 1–100 entries. */
    // @ApiMember(Description="1–100 entries.", IsRequired=true)
    public entries: WriteLogEntry[] = [];

    public constructor(init?: Partial<WriteLogs>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'WriteLogs';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new WriteLogsResponse();
    }
  }

  /** @description Stores a payment order with a fixed price for one of the project's users. Server only (service user API key). */
  // @Route("/{version}/payments/orders", "POST")
  // @Api(Description="Stores a payment order with a fixed price for one of the project's users. Server only (service user API key).")
  export class CreatePaymentOrderRequest
    extends CodeMashRequestBase
    implements IReturn<IdResponse>
  {
    /** @description The user the order is for (usr_…). */
    // @ApiMember(Description="The user the order is for (usr_…).", IsRequired=true)
    public buyerUserId: string;

    /** @description The project's own order reference, unique per project and environment (1–64 of A–Z a–z 0–9 . _ : -). */
    // @ApiMember(Description="The project's own order reference, unique per project and environment (1–64 of A–Z a–z 0–9 . _ : -).", IsRequired=true)
    public merchantReference: string;

    /** @description 8–128 characters. Same key + same body = the stored order; same key + other body = 409. May be sent as the Idempotency-Key header instead. */
    // @ApiMember(Description="8–128 characters. Same key + same body = the stored order; same key + other body = 409. May be sent as the Idempotency-Key header instead.")
    public idempotencyKey?: string;

    /** @description EUR. */
    // @ApiMember(Description="EUR.", IsRequired=true)
    public currency: string;

    /** @description The version of the price list the server priced the lines with. */
    // @ApiMember(Description="The version of the price list the server priced the lines with.", IsRequired=true)
    public priceVersion: string;

    /** @description 1–50 lines: sku, title, quantity, unitAmountMinor (cents). Norbix computes the amounts and the total. */
    // @ApiMember(Description="1–50 lines: sku, title, quantity, unitAmountMinor (cents). Norbix computes the amounts and the total.", IsRequired=true)
    public lines: PaymentOrderLineInput[] = [];

    /** @description Up to 20 project values (e.g. adId). No personal or billing data. */
    // @ApiMember(Description="Up to 20 project values (e.g. adId). No personal or billing data.")
    public metadata?: { [index: string]: string };

    public constructor(init?: Partial<CreatePaymentOrderRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreatePaymentOrderRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new IdResponse();
    }
  }

  /** @description Reads one payment order. A buyer reads only their own orders. */
  // @Route("/{version}/payments/orders/{Id}", "GET")
  // @Api(Description="Reads one payment order. A buyer reads only their own orders.")
  export class GetPaymentOrderRequest
    extends CodeMashRequestBase
    implements IReturn<GetPaymentOrderResponse>
  {
    /** @description The order id (ord_…). */
    // @ApiMember(Description="The order id (ord_…).", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetPaymentOrderRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPaymentOrderRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPaymentOrderResponse();
    }
  }

  /** @description Lists payment orders, newest first. A buyer gets only their own orders. */
  // @Route("/{version}/payments/orders", "GET")
  // @Api(Description="Lists payment orders, newest first. A buyer gets only their own orders.")
  export class GetPaymentOrdersRequest
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetPaymentOrdersResponse>
  {
    /** @description Server only: one buyer's orders (usr_…). A buyer always gets their own. */
    // @ApiMember(Description="Server only: one buyer's orders (usr_…). A buyer always gets their own.")
    public buyerUserId?: string;

    /** @description Only the order with this merchant reference. */
    // @ApiMember(Description="Only the order with this merchant reference.")
    public merchantReference?: string;

    /** @description Only orders in this status (Created, CheckoutStarted, Paid, …). */
    // @ApiMember(Description="Only orders in this status (Created, CheckoutStarted, Paid, …).")
    public status?: string;

    public constructor(init?: Partial<GetPaymentOrdersRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPaymentOrdersRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPaymentOrdersResponse();
    }
  }

  /** @description Opens a provider checkout (Montonio or Neopay) for a stored order and answers where the buyer pays. The buyer (own order) or the server. */
  // @Route("/{version}/payments/orders/{Id}/checkout", "POST")
  // @Api(Description="Opens a provider checkout (Montonio or Neopay) for a stored order and answers where the buyer pays. The buyer (own order) or the server.")
  export class StartPaymentCheckoutRequest
    extends CodeMashRequestBase
    implements IReturn<StartPaymentCheckoutResponse>
  {
    /** @description The order id (ord_…). */
    // @ApiMember(Description="The order id (ord_…).", IsRequired=true)
    public id: string;

    /** @description The checkout integration (int_…, Montonio or Neopay) of the project in the request's environment. */
    // @ApiMember(Description="The checkout integration (int_…, Montonio or Neopay) of the project in the request's environment.", IsRequired=true)
    public integrationId: string;

    /** @description bankLink (default), card, applePay or googlePay (the wallets: Montonio only). */
    // @ApiMember(Description="bankLink (default), card, applePay or googlePay (the wallets: Montonio only).")
    public method?: string;

    /** @description Where the buyer comes back after paying; its origin must be one of the project's allowed origins. */
    // @ApiMember(Description="Where the buyer comes back after paying; its origin must be one of the project's allowed origins.", IsRequired=true)
    public returnUrl: string;

    /** @description Bank links only: the country whose banks are shown first (default LT). */
    // @ApiMember(Description="Bank links only: the country whose banks are shown first (default LT).")
    public preferredCountry?: string;

    /** @description Bank links only: one bank to open directly (the provider's bank code). */
    // @ApiMember(Description="Bank links only: one bank to open directly (the provider's bank code).")
    public preferredProvider?: string;

    public constructor(init?: Partial<StartPaymentCheckoutRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'StartPaymentCheckoutRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new StartPaymentCheckoutResponse();
    }
  }

  // @Route("/{version}/code/workflows/runs", "GET")
  // @DataContract
  export class GetCodeWorkflowWaitingRuns
    extends CodeMashListPaginationRequestBase
    implements IReturn<WorkflowRunsResponse>
  {
    /** @description running | waiting (default) | succeeded | failed | cancelled */
    // @DataMember
    // @ApiMember(Description="running | waiting (default) | succeeded | failed | cancelled")
    public status?: string;

    /** @description approval | event | delay */
    // @DataMember
    // @ApiMember(Description="approval | event | delay")
    public waitingKind?: string;

    /** @description "me" or a usr_… id: only approvals assigned to that user. Without code:read only "me" (the default then). */
    // @DataMember
    // @ApiMember(Description="\"me\" or a usr_… id: only approvals assigned to that user. Without code:read only \"me\" (the default then).")
    public assignee?: string;

    /** @description Only runs of this workflow (wf_…). */
    // @DataMember
    // @ApiMember(Description="Only runs of this workflow (wf_…).")
    public workflowId?: string;

    /** @description The wait's rendered key, exact match. */
    // @DataMember
    // @ApiMember(Description="The wait's rendered key, exact match.")
    public key?: string;

    public constructor(init?: Partial<GetCodeWorkflowWaitingRuns>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetCodeWorkflowWaitingRuns';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new WorkflowRunsResponse();
    }
  }

  // @Route("/{version}/code/workflows/runs/{RunId}/resume", "POST")
  // @DataContract
  export class ResumeCodeWorkflowRun
    extends CodeMashRequestBase
    implements IReturn<WorkflowRunResponse>
  {
    /** @description wfr_… */
    // @DataMember
    // @ApiMember(Description="wfr_…", IsRequired=true)
    public runId: string;

    /** @description Required when several steps wait. */
    // @DataMember
    // @ApiMember(Description="Required when several steps wait.")
    public stepId?: string;

    /** @description approved | rejected — required for an approval wait. */
    // @DataMember
    // @ApiMember(Description="approved | rejected — required for an approval wait.")
    public decision?: string;

    // @DataMember
    public payload?: { [index: string]: Object };

    public constructor(init?: Partial<ResumeCodeWorkflowRun>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ResumeCodeWorkflowRun';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new WorkflowRunResponse();
    }
  }

  /** @description Beta: what a workflow's one-click link will do — no sign-in, nothing changes. POST the same URL to answer. */
  // @Route("/{version}/code/workflows/resume/{Token}", "GET")
  // @Api(Description="Beta: what a workflow's one-click link will do — no sign-in, nothing changes. POST the same URL to answer.")
  // @DataContract
  export class OpenCodeWorkflowResumeLink
    extends RequestBase
    implements IReturn<CodeWorkflowResumeLinkResponse>
  {
    /** @description The signed link token from the wait's notification (@Model.Wait.ApproveUrl / RejectUrl / ResumeUrl). */
    // @DataMember
    // @ApiMember(Description="The signed link token from the wait's notification (@Model.Wait.ApproveUrl / RejectUrl / ResumeUrl).", IsRequired=true)
    public token: string;

    public constructor(init?: Partial<OpenCodeWorkflowResumeLink>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'OpenCodeWorkflowResumeLink';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new CodeWorkflowResumeLinkResponse();
    }
  }

  /** @description Beta: answers a workflow's waiting step with a one-click link — no sign-in; the run goes on as the workflow's execution identity. */
  // @Route("/{version}/code/workflows/resume/{Token}", "POST")
  // @Api(Description="Beta: answers a workflow's waiting step with a one-click link — no sign-in; the run goes on as the workflow's execution identity.")
  // @DataContract
  export class UseCodeWorkflowResumeLink
    extends RequestBase
    implements IReturn<WorkflowRunResponse>
  {
    /** @description The signed link token. */
    // @DataMember
    // @ApiMember(Description="The signed link token.", IsRequired=true)
    public token: string;

    public constructor(init?: Partial<UseCodeWorkflowResumeLink>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UseCodeWorkflowResumeLink';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new WorkflowRunResponse();
    }
  }

  // @Route("/{version}/code/workflows/{Id}/runs", "GET")
  // @DataContract
  export class GetCodeWorkflowRuns
    extends CodeMashListPaginationRequestBase
    implements IReturn<WorkflowRunsResponse>
  {
    /** @description wf_… */
    // @DataMember
    // @ApiMember(Description="wf_…", IsRequired=true)
    public id: string;

    /** @description running | waiting | succeeded | failed | cancelled */
    // @DataMember
    // @ApiMember(Description="running | waiting | succeeded | failed | cancelled")
    public status?: string;

    // @DataMember
    public from?: string;

    // @DataMember
    public to?: string;

    public constructor(init?: Partial<GetCodeWorkflowRuns>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetCodeWorkflowRuns';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new WorkflowRunsResponse();
    }
  }

  // @Route("/{version}/code/workflows/runs/{RunId}", "GET")
  // @DataContract
  export class GetCodeWorkflowRun
    extends CodeMashRequestBase
    implements IReturn<WorkflowRunResponse>
  {
    /** @description wfr_… */
    // @DataMember
    // @ApiMember(Description="wfr_…", IsRequired=true)
    public runId: string;

    public constructor(init?: Partial<GetCodeWorkflowRun>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetCodeWorkflowRun';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new WorkflowRunResponse();
    }
  }

  // @Route("/{version}/code/workflows/runs/{RunId}/logs", "GET")
  // @DataContract
  export class GetCodeWorkflowRunLogs
    extends CodeMashListPaginationRequestBase
    implements IReturn<WorkflowRunLogsResponse>
  {
    /** @description wfr_… */
    // @DataMember
    // @ApiMember(Description="wfr_…", IsRequired=true)
    public runId: string;

    /** @description Only this step's lines. */
    // @DataMember
    // @ApiMember(Description="Only this step's lines.")
    public stepId?: string;

    /** @description Information | Warning | Error */
    // @DataMember
    // @ApiMember(Description="Information | Warning | Error")
    public level?: string;

    public constructor(init?: Partial<GetCodeWorkflowRunLogs>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetCodeWorkflowRunLogs';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new WorkflowRunLogsResponse();
    }
  }

  // @Route("/{version}/code/workflows/{Id}/resume", "POST")
  // @DataContract
  export class ResumeCodeWorkflowRunByKey
    extends CodeMashRequestBase
    implements IReturn<WorkflowRunResponse>
  {
    /** @description wf_… */
    // @DataMember
    // @ApiMember(Description="wf_…", IsRequired=true)
    public id: string;

    /** @description The wait's rendered key. */
    // @DataMember
    // @ApiMember(Description="The wait's rendered key.", IsRequired=true)
    public key: string;

    // @DataMember
    public stepId?: string;

    /** @description approved | rejected — required for an approval wait. */
    // @DataMember
    // @ApiMember(Description="approved | rejected — required for an approval wait.")
    public decision?: string;

    // @DataMember
    public payload?: { [index: string]: Object };

    public constructor(init?: Partial<ResumeCodeWorkflowRunByKey>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'ResumeCodeWorkflowRunByKey';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new WorkflowRunResponse();
    }
  }

  // @Route("/{version}/code/workflows/runs/{RunId}/retry", "POST")
  // @DataContract
  export class RetryCodeWorkflowRunStep
    extends CodeMashRequestBase
    implements IReturn<WorkflowRunResponse>
  {
    /** @description wfr_… */
    // @DataMember
    // @ApiMember(Description="wfr_…", IsRequired=true)
    public runId: string;

    /** @description The failed step; default = the step named in the run's error. */
    // @DataMember
    // @ApiMember(Description="The failed step; default = the step named in the run's error.")
    public stepId?: string;

    public constructor(init?: Partial<RetryCodeWorkflowRunStep>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RetryCodeWorkflowRunStep';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new WorkflowRunResponse();
    }
  }

  // @Route("/{version}/code/workflows/runs/{RunId}/cancel", "POST")
  // @DataContract
  export class CancelCodeWorkflowRun
    extends CodeMashRequestBase
    implements IReturn<WorkflowRunResponse>
  {
    /** @description wfr_… */
    // @DataMember
    // @ApiMember(Description="wfr_…", IsRequired=true)
    public runId: string;

    // @DataMember
    public reason?: string;

    public constructor(init?: Partial<CancelCodeWorkflowRun>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CancelCodeWorkflowRun';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new WorkflowRunResponse();
    }
  }

  // @Route("/{version}/notifications/inbox", "GET")
  export class GetNotificationInboxRequest
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetNotificationInboxResponse>
  {
    public unreadOnly: boolean;
    public channel?: string;

    public constructor(init?: Partial<GetNotificationInboxRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetNotificationInboxRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetNotificationInboxResponse();
    }
  }

  // @Route("/{version}/notifications/inbox/unread-count", "GET")
  export class GetUnreadCountRequest
    extends CodeMashRequestBase
    implements IReturn<GetUnreadCountResponse>
  {
    public constructor(init?: Partial<GetUnreadCountRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetUnreadCountRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetUnreadCountResponse();
    }
  }

  // @Route("/{version}/notifications/inbox/{notificationId}/read", "POST")
  export class MarkNotificationReadRequest
    extends CodeMashRequestBase
    implements IReturn<MarkNotificationReadResponse>
  {
    public notificationId: string;

    public constructor(init?: Partial<MarkNotificationReadRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'MarkNotificationReadRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new MarkNotificationReadResponse();
    }
  }

  // @Route("/{version}/notifications/inbox/read-all", "POST")
  export class MarkAllNotificationsReadRequest
    extends CodeMashRequestBase
    implements IReturn<MarkAllNotificationsReadResponse>
  {
    public constructor(init?: Partial<MarkAllNotificationsReadRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'MarkAllNotificationsReadRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new MarkAllNotificationsReadResponse();
    }
  }

  /** @description Sets or removes one user's own end-user AI plan */
  // @Route("/{version}/membership/users/{userId}/ai-plan", "PUT")
  // @Api(Description="Sets or removes one user's own end-user AI plan")
  export class SetUserAiPlan extends CodeMashRequestBase implements IReturn<EmptyResponse> {
    /** @description The human user id (ct_…). */
    // @ApiMember(Description="The human user id (ct_…).", IsRequired=true)
    public userId: string;

    /** @description The plan id (aip_…). Empty removes the user's own plan. */
    // @ApiMember(Description="The plan id (aip_…). Empty removes the user's own plan.")
    public planId?: string;

    /** @description Database integration id. Optional — defaults to the request environment's default integration. */
    // @ApiMember(Description="Database integration id. Optional — defaults to the request environment's default integration.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<SetUserAiPlan>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'SetUserAiPlan';
    }
    public getMethod() {
      return 'PUT';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Create a contact */
  // @Route("/{version}/membership/users", "POST")
  // @Api(Description="Create a contact")
  export class CreateContactRequest extends CodeMashRequestBase implements IReturn<EmptyResponse> {
    /** @description Primary email address of the contact (optional if a phone is given). */
    // @ApiMember(Description="Primary email address of the contact (optional if a phone is given).")
    public primaryEmail?: string;

    /** @description Primary phone number in international format, e.g. +14155550123 (optional if an email is given). */
    // @ApiMember(Description="Primary phone number in international format, e.g. +14155550123 (optional if an email is given).")
    public primaryPhone?: string;

    /** @description Display name shown in the dashboard (optional). */
    // @ApiMember(Description="Display name shown in the dashboard (optional).")
    public displayName?: string;

    /** @description Contact's first name (optional). */
    // @ApiMember(Description="Contact's first name (optional).")
    public firstName?: string;

    /** @description Contact's last name (optional). */
    // @ApiMember(Description="Contact's last name (optional).")
    public lastName?: string;

    /** @description Tags to put on the new contact — free labels campaigns and segments select by, normalised like any tag. */
    // @ApiMember(Description="Tags to put on the new contact — free labels campaigns and segments select by, normalised like any tag.")
    public tags?: string[];

    public constructor(init?: Partial<CreateContactRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateContactRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Archive a contact */
  // @Route("/{version}/membership/users/{contactId}", "DELETE")
  // @Api(Description="Archive a contact")
  export class DeleteContact extends CodeMashRequestBase implements IReturn<EmptyResponse> {
    /** @description The contact id (ct_…) to archive. Get it from get_all_contacts. */
    // @ApiMember(Description="The contact id (ct_…) to archive. Get it from get_all_contacts.", IsRequired=true)
    public contactId: string;

    public constructor(init?: Partial<DeleteContact>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteContact';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Get a contact */
  // @Route("/{version}/membership/users/{contactId}", "GET")
  // @Api(Description="Get a contact")
  export class GetContact extends CodeMashRequestBase implements IReturn<GetContactResponse> {
    /** @description The contact id (ct_…) to fetch, or a login id (usr_…) — then the contact that owns that login is returned. Get it from get_all_contacts. */
    // @ApiMember(Description="The contact id (ct_…) to fetch, or a login id (usr_…) — then the contact that owns that login is returned. Get it from get_all_contacts.", IsRequired=true)
    public contactId: string;

    public constructor(init?: Partial<GetContact>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetContact';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetContactResponse();
    }
  }

  /** @description List contacts */
  // @Route("/{version}/membership/users", "GET")
  // @Api(Description="List contacts")
  export class GetAllContacts
    extends CodeMashRequestBase
    implements IReturn<GetAllContactsResponse>
  {
    /** @description Cursor for the next page: pass the nextCursor from the previous call. Omit for the first page. */
    // @ApiMember(Description="Cursor for the next page: pass the nextCursor from the previous call. Omit for the first page.")
    public startingAfter?: string;

    /** @description How many contacts to return per page (default 50). */
    // @ApiMember(Description="How many contacts to return per page (default 50).")
    public pageSize?: number;

    /** @description Free text, case-insensitive: matches the email, phone, display / first / last / full name, or any login's user name or email. */
    // @ApiMember(Description="Free text, case-insensitive: matches the email, phone, display / first / last / full name, or any login's user name or email.")
    public search?: string;

    /** @description Case-insensitive part of the email (primary email or any login's email). */
    // @ApiMember(Description="Case-insensitive part of the email (primary email or any login's email).")
    public email?: string;

    /** @description Case-insensitive part of any login's user name. */
    // @ApiMember(Description="Case-insensitive part of any login's user name.")
    public userName?: string;

    /** @description Login status names, any of: Registered, PendingValidation, Active, Unregistered, Suspended, InActive, Blocked. */
    // @ApiMember(Description="Login status names, any of: Registered, PendingValidation, Active, Unregistered, Suspended, InActive, Blocked.")
    public statuses?: string[];

    /** @description Login type names, any of: Service, Email, UserName, Phone, Guest, Social. */
    // @ApiMember(Description="Login type names, any of: Service, Email, UserName, Phone, Guest, Social.")
    public types?: string[];

    /** @description Composite project-role ids (pr_{project}_nr_{role}); the contact holds any of them. */
    // @ApiMember(Description="Composite project-role ids (pr_{project}_nr_{role}); the contact holds any of them.")
    public roleNames?: string[];

    public constructor(init?: Partial<GetAllContacts>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetAllContacts';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetAllContactsResponse();
    }
  }

  /** @description Merge contacts */
  // @Route("/{version}/membership/users/merge", "POST")
  // @Api(Description="Merge contacts")
  export class MergeContactsRequest extends CodeMashRequestBase implements IReturn<EmptyResponse> {
    /** @description The contact id (ct_…) that will remain after the merge (the survivor). */
    // @ApiMember(Description="The contact id (ct_…) that will remain after the merge (the survivor).", IsRequired=true)
    public survivorId: string;

    /** @description The contact ids (ct_…) to merge into the survivor and archive. At least one. */
    // @ApiMember(Description="The contact ids (ct_…) to merge into the survivor and archive. At least one.", IsRequired=true)
    public mergedIds: string[] = [];

    public constructor(init?: Partial<MergeContactsRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'MergeContactsRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Repair contact roles from their logins */
  // @Route("/{version}/membership/users/repair-roles", "POST")
  // @Api(Description="Repair contact roles from their logins")
  export class RepairContactRolesRequest
    extends CodeMashRequestBase
    implements IReturn<RepairContactRolesResponse>
  {
    /** @description True = only count what would change. False = write. Empty = true (only count). */
    // @ApiMember(Description="True = only count what would change. False = write. Empty = true (only count).")
    public dryRun?: boolean;

    public constructor(init?: Partial<RepairContactRolesRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RepairContactRolesRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new RepairContactRolesResponse();
    }
  }

  /** @description Update a contact */
  // @Route("/{version}/membership/users/{contactId}", "PATCH")
  // @Api(Description="Update a contact")
  export class UpdateContactRequest extends CodeMashRequestBase implements IReturn<EmptyResponse> {
    /** @description The contact id (ct_…) to update. Get it from get_all_contacts. */
    // @ApiMember(Description="The contact id (ct_…) to update. Get it from get_all_contacts.", IsRequired=true)
    public contactId: string;

    /** @description Display name shown in the dashboard. */
    // @ApiMember(Description="Display name shown in the dashboard.")
    public displayName?: string;

    /** @description First name. */
    // @ApiMember(Description="First name.")
    public firstName?: string;

    /** @description Last name. */
    // @ApiMember(Description="Last name.")
    public lastName?: string;

    /** @description Full name (overrides first/last when set). */
    // @ApiMember(Description="Full name (overrides first/last when set).")
    public fullName?: string;

    /** @description Company or organisation name. */
    // @ApiMember(Description="Company or organisation name.")
    public company?: string;

    /** @description Free-text internal notes about the contact. */
    // @ApiMember(Description="Free-text internal notes about the contact.")
    public notes?: string;

    /** @description Gender: Male, Female or Other. */
    // @ApiMember(Description="Gender: Male, Female or Other.")
    public gender?: string;

    /** @description Birth date as a unix timestamp in MILLISECONDS (UTC). */
    // @ApiMember(Description="Birth date as a unix timestamp in MILLISECONDS (UTC).")
    public birthDate?: number;

    /** @description IANA time zone id, e.g. Europe/Vilnius. */
    // @ApiMember(Description="IANA time zone id, e.g. Europe/Vilnius.")
    public timeZone?: string;

    /** @description Preferred language/locale code, e.g. en or en-US. */
    // @ApiMember(Description="Preferred language/locale code, e.g. en or en-US.")
    public language?: string;

    /** @description Address line 1 (street). */
    // @ApiMember(Description="Address line 1 (street).")
    public addressLine1?: string;

    /** @description Address line 2 (apartment, suite, etc.). */
    // @ApiMember(Description="Address line 2 (apartment, suite, etc.).")
    public addressLine2?: string;

    /** @description Country name or code. */
    // @ApiMember(Description="Country name or code.")
    public country?: string;

    /** @description City. */
    // @ApiMember(Description="City.")
    public city?: string;

    /** @description State, region or province. */
    // @ApiMember(Description="State, region or province.")
    public state?: string;

    /** @description Postal or ZIP code. */
    // @ApiMember(Description="Postal or ZIP code.")
    public postalCode?: string;

    public constructor(init?: Partial<UpdateContactRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'UpdateContactRequest';
    }
    public getMethod() {
      return 'PATCH';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Link a login to a contact */
  // @Route("/{version}/membership/users/{contactId}/identities", "POST")
  // @Api(Description="Link a login to a contact")
  export class AddContactIdentityRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    /** @description The contact id (ct_…) to link the login to. */
    // @ApiMember(Description="The contact id (ct_…) to link the login to.", IsRequired=true)
    public contactId: string;

    /** @description The login (identity) id (usr_…) to link to the contact. */
    // @ApiMember(Description="The login (identity) id (usr_…) to link to the contact.", IsRequired=true)
    public authId: string;

    public constructor(init?: Partial<AddContactIdentityRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'AddContactIdentityRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Make a login the contact's primary */
  // @Route("/{version}/membership/users/{contactId}/identities/{authId}/promote", "POST")
  // @Api(Description="Make a login the contact's primary")
  export class PromoteContactIdentityRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    /** @description The contact id (ct_…) whose login is being promoted. */
    // @ApiMember(Description="The contact id (ct_…) whose login is being promoted.", IsRequired=true)
    public contactId: string;

    /** @description The linked login (identity) id (usr_…) to make primary. */
    // @ApiMember(Description="The linked login (identity) id (usr_…) to make primary.", IsRequired=true)
    public authId: string;

    public constructor(init?: Partial<PromoteContactIdentityRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'PromoteContactIdentityRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Unlink a login from a contact */
  // @Route("/{version}/membership/users/{contactId}/identities/{authId}", "DELETE")
  // @Api(Description="Unlink a login from a contact")
  export class RemoveContactIdentityRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    /** @description The contact id (ct_…) to unlink the login from. */
    // @ApiMember(Description="The contact id (ct_…) to unlink the login from.", IsRequired=true)
    public contactId: string;

    /** @description The login (identity) id (usr_…) to unlink from the contact. */
    // @ApiMember(Description="The login (identity) id (usr_…) to unlink from the contact.", IsRequired=true)
    public authId: string;

    public constructor(init?: Partial<RemoveContactIdentityRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RemoveContactIdentityRequest';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  // @Route("/{version}/files/item/private", "POST")
  export class MakeFilePrivateRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    /** @description The files integration the file lives on. */
    // @ApiMember(Description="The files integration the file lives on.", IsRequired=true)
    public filesIntegrationId: string;

    /** @description Path of the file, relative to the integration. */
    // @ApiMember(Description="Path of the file, relative to the integration.", IsRequired=true)
    public path: string;

    public constructor(init?: Partial<MakeFilePrivateRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'MakeFilePrivateRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  // @Route("/{version}/files/item/public", "POST")
  export class MakeFilePublicRequest extends CodeMashRequestBase implements IReturn<IdResponse> {
    /** @description The files integration the file lives on. */
    // @ApiMember(Description="The files integration the file lives on.", IsRequired=true)
    public filesIntegrationId: string;

    /** @description Path of the file to publish, relative to the integration. */
    // @ApiMember(Description="Path of the file to publish, relative to the integration.", IsRequired=true)
    public path: string;

    public constructor(init?: Partial<MakeFilePublicRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'MakeFilePublicRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new IdResponse();
    }
  }

  // @Route("/{version}/files/folder/private", "POST")
  export class MakeFolderPrivateRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    /** @description The files integration the folder lives on. */
    // @ApiMember(Description="The files integration the folder lives on.", IsRequired=true)
    public filesIntegrationId: string;

    /** @description Folder prefix, relative to the integration. */
    // @ApiMember(Description="Folder prefix, relative to the integration.", IsRequired=true)
    public path: string;

    public constructor(init?: Partial<MakeFolderPrivateRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'MakeFolderPrivateRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  // @Route("/{version}/files/folder/public", "POST")
  export class MakeFolderPublicRequest extends CodeMashRequestBase implements IReturn<IdResponse> {
    /** @description The files integration the folder lives on. */
    // @ApiMember(Description="The files integration the folder lives on.", IsRequired=true)
    public filesIntegrationId: string;

    /** @description Folder prefix to publish, relative to the integration. */
    // @ApiMember(Description="Folder prefix to publish, relative to the integration.", IsRequired=true)
    public path: string;

    public constructor(init?: Partial<MakeFolderPublicRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'MakeFolderPublicRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new IdResponse();
    }
  }

  // @Route("/{version}/files/item", "GET")
  export class GetFile extends CodeMashRequestBase implements IReturn<GetFileResponse> {
    /** @description The files integration id to read from, from get_files_integrations. */
    // @ApiMember(Description="The files integration id to read from, from get_files_integrations.", IsRequired=true)
    public filesIntegrationId: string;

    /** @description The path of the file to fetch metadata for. */
    // @ApiMember(Description="The path of the file to fetch metadata for.", IsRequired=true)
    public path: string;

    public constructor(init?: Partial<GetFile>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFile';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetFileResponse();
    }
  }

  // @Route("/{version}/files/folder", "GET")
  export class GetFolderFiles
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetFolderFilesResponse>
  {
    /** @description The files integration id to list from, from get_files_integrations. */
    // @ApiMember(Description="The files integration id to list from, from get_files_integrations.", IsRequired=true)
    public filesIntegrationId: string;

    /** @description Path prefix to list. Empty / null lists the root. */
    // @ApiMember(Description="Path prefix to list. Empty / null lists the root.")
    public path?: string;

    public constructor(init?: Partial<GetFolderFiles>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetFolderFiles';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetFolderFilesResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/imports", "POST")
  // @Api(Description="Database")
  export class CreateCollectionImport extends CodeMashRequestBase implements IReturn<IdResponse> {
    /** @description The uploaded CSV's file ref, from the upload call. */
    // @ApiMember(Description="The uploaded CSV's file ref, from the upload call.", IsRequired=true)
    public file: FileResourceRefDto;

    /** @description The target schema id. */
    // @ApiMember(Description="The target schema id.", IsRequired=true)
    public schemaId: string;

    /** @description The target collection (schema) name. */
    // @ApiMember(Description="The target collection (schema) name.", IsRequired=true)
    public collectionName: string;

    public databaseIntegrationId?: string;
    /** @description The CSV delimiter used at upload time. */
    // @ApiMember(Description="The CSV delimiter used at upload time.", IsRequired=true)
    public delimiter: string;

    public hasHeader: boolean;
    /** @description Column → property mapping, frozen for this import. */
    // @ApiMember(Description="Column → property mapping, frozen for this import.", IsRequired=true)
    public mapping: ImportColumnMappingDto[] = [];

    public constructor(init?: Partial<CreateCollectionImport>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateCollectionImport';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new IdResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/imports/{Id}", "DELETE")
  // @Api(Description="Database")
  export class DeleteCollectionImportRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    /** @description The import id (imp_…). */
    // @ApiMember(Description="The import id (imp_…).", IsRequired=true)
    public id: string;

    public databaseIntegrationId?: string;

    public constructor(init?: Partial<DeleteCollectionImportRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteCollectionImportRequest';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/imports/{Id}", "GET")
  // @Api(Description="Database")
  export class GetCollectionImport
    extends CodeMashRequestBase
    implements IReturn<GetCollectionImportResponse>
  {
    /** @description The import id (imp_…). */
    // @ApiMember(Description="The import id (imp_…).", IsRequired=true)
    public id: string;

    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetCollectionImport>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetCollectionImport';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetCollectionImportResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/imports", "GET")
  // @Api(Description="Database")
  export class GetCollectionImports
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetCollectionImportsResponse>
  {
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetCollectionImports>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetCollectionImports';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetCollectionImportsResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/imports/upload-url", "POST")
  // @Api(Description="Database")
  export class RequestImportUploadUrlRequest
    extends CodeMashRequestBase
    implements IReturn<RequestImportUploadUrlResponse>
  {
    public fileAccountId?: string;
    /** @description The original CSV file name, e.g. people.csv. */
    // @ApiMember(Description="The original CSV file name, e.g. people.csv.", IsRequired=true)
    public fileName: string;

    public constructor(init?: Partial<RequestImportUploadUrlRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RequestImportUploadUrlRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new RequestImportUploadUrlResponse();
    }
  }

  /** @description Database */
  // @Route("/{version}/database/imports/analyze", "POST")
  // @Api(Description="Database")
  export class AnalyzeImportFileRequest
    extends CodeMashRequestBase
    implements IReturn<AnalyzeImportFileResponse>
  {
    /** @description The uploaded CSV's file ref, from the upload-url call. */
    // @ApiMember(Description="The uploaded CSV's file ref, from the upload-url call.", IsRequired=true)
    public file: FileResourceRefDto;

    /** @description The CSV delimiter, e.g. "," or ";". */
    // @ApiMember(Description="The CSV delimiter, e.g. \",\" or \";\".", IsRequired=true)
    public delimiter: string;

    /** @description Whether the first row is a header row. */
    // @ApiMember(Description="Whether the first row is a header row.")
    public hasHeader: boolean;

    public constructor(init?: Partial<AnalyzeImportFileRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'AnalyzeImportFileRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new AnalyzeImportFileResponse();
    }
  }

  /** @description Create email campaign */
  // @Route("/{version}/notifications/email/campaigns", "POST")
  // @Api(Description="Create email campaign")
  // @DataContract
  export class CreateEmailCampaignRequest
    extends CodeMashRequestBase
    implements IReturn<IdResponse>
  {
    // @DataMember
    public campaign: EmailCampaignRequest;

    // @DataMember
    public databaseIntegrationId?: string;

    /** @description Optional. true sends the campaign now (or at a campaignTime sooner than the review window). Without it, a campaign created by an AI tool must be scheduled at least 24 hours ahead for role-based / all-users / collection audiences and at least 1 hour ahead for direct recipient lists, or it is rejected with CM-ERRORS-CAMPAIGNS-017. Set it only when the user explicitly asked to send now. */
    // @DataMember
    // @ApiMember(Description="Optional. true sends the campaign now (or at a campaignTime sooner than the review window). Without it, a campaign created by an AI tool must be scheduled at least 24 hours ahead for role-based / all-users / collection audiences and at least 1 hour ahead for direct recipient lists, or it is rejected with CM-ERRORS-CAMPAIGNS-017. Set it only when the user explicitly asked to send now.")
    public sendNow?: boolean;

    public constructor(init?: Partial<CreateEmailCampaignRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateEmailCampaignRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new IdResponse();
    }
  }

  /** @description Deletes emails campaign from queue */
  // @Route("/{version}/notifications/email/campaigns/{Id}", "DELETE")
  // @Api(Description="Deletes emails campaign from queue")
  // @DataContract
  export class DeleteEmailCampaignRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    // @DataMember
    public id: string;

    // @DataMember
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<DeleteEmailCampaignRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteEmailCampaignRequest';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Gets email campaign by id */
  // @Route("/{version}/notifications/email/campaigns/{id}", "GET")
  // @Api(Description="Gets email campaign by id")
  export class GetEmailCampaign
    extends CodeMashRequestBase
    implements IReturn<GetEmailCampaignResponse>
  {
    /** @description The campaign id. */
    // @ApiMember(Description="The campaign id.")
    public id: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetEmailCampaign>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetEmailCampaign';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetEmailCampaignResponse();
    }
  }

  /** @description Gets email campaigns */
  // @Route("/{version}/notifications/email/campaigns", "GET")
  // @Api(Description="Gets email campaigns")
  export class GetEmailCampaigns
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetEmailCampaignsResponse>
  {
    /** @description Optional. When omitted, the project's default database integration is used (resolved server-side from the project state). */
    // @ApiMember(Description="Optional. When omitted, the project's default database integration is used (resolved server-side from the project state).")
    public databaseIntegrationId?: string;

    /** @description Optional: return only the campaign with this id. */
    // @ApiMember(Description="Optional: return only the campaign with this id.")
    public campaignId?: string;

    /** @description Optional: only campaigns that targeted this email address. */
    // @ApiMember(Description="Optional: only campaigns that targeted this email address.")
    public emailAddress?: string;

    /** @description Optional: only campaigns built on this email template id. */
    // @ApiMember(Description="Optional: only campaigns built on this email template id.")
    public templateId?: string;

    /** @description Optional lower bound for the campaign time, unix timestamp in seconds (UTC). */
    // @ApiMember(Description="Optional lower bound for the campaign time, unix timestamp in seconds (UTC).")
    public from?: number;

    /** @description Optional upper bound for the campaign time, unix timestamp in seconds (UTC). */
    // @ApiMember(Description="Optional upper bound for the campaign time, unix timestamp in seconds (UTC).")
    public to?: number;

    public constructor(init?: Partial<GetEmailCampaigns>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetEmailCampaigns';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetEmailCampaignsResponse();
    }
  }

  /** @description Get email campaign batches */
  // @Route("/{version}/notifications/email/campaigns/{id}/batches", "GET")
  // @Api(Description="Get email campaign batches")
  export class GetEmailCampaignBatches
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetEmailCampaignBatchesResponse>
  {
    /** @description The email campaign id to list batches for. Get it from get_email_campaigns. */
    // @ApiMember(Description="The email campaign id to list batches for. Get it from get_email_campaigns.", IsRequired=true)
    public id: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    /** @description Optional batch id to filter to a single batch. Get it from a prior call to this tool. */
    // @ApiMember(Description="Optional batch id to filter to a single batch. Get it from a prior call to this tool.")
    public batchId?: string;

    /** @description Optional recipient email address to filter batches by. */
    // @ApiMember(Description="Optional recipient email address to filter batches by.")
    public emailAddress?: string;

    public constructor(init?: Partial<GetEmailCampaignBatches>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetEmailCampaignBatches';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetEmailCampaignBatchesResponse();
    }
  }

  /** @description Get an email campaign batch notification */
  // @Route("/{version}/notifications/email/campaigns/{id}/batches/{batchId}/{notificationId}", "GET")
  // @Api(Description="Get an email campaign batch notification")
  export class GetEmailCampaignBatchNotification
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetEmailCampaignBatchNotificationResponse>
  {
    /** @description The email campaign id. Get it from get_email_campaigns. */
    // @ApiMember(Description="The email campaign id. Get it from get_email_campaigns.", IsRequired=true)
    public id: string;

    /** @description The campaign batch id. Get it from get_email_campaign_batches. */
    // @ApiMember(Description="The campaign batch id. Get it from get_email_campaign_batches.", IsRequired=true)
    public batchId: string;

    /** @description The notification id within the batch. Get it from get_email_campaign_batch_notifications. */
    // @ApiMember(Description="The notification id within the batch. Get it from get_email_campaign_batch_notifications.", IsRequired=true)
    public notificationId: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetEmailCampaignBatchNotification>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetEmailCampaignBatchNotification';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetEmailCampaignBatchNotificationResponse();
    }
  }

  /** @description Get email campaign batch notifications */
  // @Route("/{version}/notifications/email/campaigns/{id}/batches/{batchId}", "GET")
  // @Api(Description="Get email campaign batch notifications")
  export class GetEmailCampaignBatchNotifications
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetEmailCampaignBatchNotificationsResponse>
  {
    /** @description The email campaign id. Get it from get_email_campaigns. */
    // @ApiMember(Description="The email campaign id. Get it from get_email_campaigns.", IsRequired=true)
    public id: string;

    /** @description The campaign batch id to list notifications for. Get it from get_email_campaign_batches. */
    // @ApiMember(Description="The campaign batch id to list notifications for. Get it from get_email_campaign_batches.", IsRequired=true)
    public batchId: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetEmailCampaignBatchNotifications>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetEmailCampaignBatchNotifications';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetEmailCampaignBatchNotificationsResponse();
    }
  }

  /** @description Get email campaign statistics */
  // @Route("/{version}/notifications/email/campaigns/{id}/stats", "GET")
  // @Api(Description="Get email campaign statistics")
  export class GetEmailCampaignStatistics
    extends CodeMashRequestBase
    implements IReturn<GetEmailCampaignStatisticsResponse>
  {
    /** @description The email campaign id to get statistics for. Get it from get_email_campaigns. */
    // @ApiMember(Description="The email campaign id to get statistics for. Get it from get_email_campaigns.", IsRequired=true)
    public id: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetEmailCampaignStatistics>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetEmailCampaignStatistics';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetEmailCampaignStatisticsResponse();
    }
  }

  /** @description Preview an email notification */
  // @Route("/{version}/notifications/email/preview", "GET")
  // @Api(Description="Preview an email notification")
  export class PreviewEmailNotification
    extends RequestBase
    implements IReturn<PreviewEmailNotificationResponse>
  {
    /** @description The signed preview link hash. With it the preview opens without sign-in: exactly one notification, until the link expires (30 days after sending). */
    // @ApiMember(Description="The signed preview link hash. With it the preview opens without sign-in: exactly one notification, until the link expires (30 days after sending).")
    public hash: string;

    /** @description Signed-in preview by id: the project id. With a hash it must match the hash. */
    // @ApiMember(Description="Signed-in preview by id: the project id. With a hash it must match the hash.")
    public projectId?: string;

    /** @description Signed-in preview by id: the notification id (needs email:read). With a hash it must match the hash. */
    // @ApiMember(Description="Signed-in preview by id: the notification id (needs email:read). With a hash it must match the hash.")
    public notificationId?: string;

    public constructor(init?: Partial<PreviewEmailNotification>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'PreviewEmailNotification';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new PreviewEmailNotificationResponse();
    }
  }

  /** @description Retries the failed recipients of an email campaign */
  // @Route("/{version}/notifications/email/campaigns/{Id}/retry-failed", "POST")
  // @Api(Description="Retries the failed recipients of an email campaign")
  // @DataContract
  export class RetryFailedEmailNotificationsRequest
    extends CodeMashRequestBase
    implements IReturn<RetryFailedEmailNotificationsResponse>
  {
    /** @description The campaign id. Get it from get_email_campaigns. */
    // @DataMember
    // @ApiMember(Description="The campaign id. Get it from get_email_campaigns.", IsRequired=true)
    public id: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @DataMember
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    /** @description Your key for this request, at most 64 characters. The same key again returns the first answer and sends nothing; the same key with another body is refused (409). */
    // @DataMember
    // @ApiMember(Description="Your key for this request, at most 64 characters. The same key again returns the first answer and sends nothing; the same key with another body is refused (409).", IsRequired=true)
    public idempotencyKey: string;

    /** @description Optional. Only these notification ids. Default: every failed recipient of the campaign. */
    // @DataMember
    // @ApiMember(Description="Optional. Only these notification ids. Default: every failed recipient of the campaign.")
    public notificationIds?: string[];

    /** @description Optional, default false. Also retry recipients whose failure is Ambiguous (a timeout after the request was sent) — this MAY SEND A DUPLICATE. */
    // @DataMember
    // @ApiMember(Description="Optional, default false. Also retry recipients whose failure is Ambiguous (a timeout after the request was sent) — this MAY SEND A DUPLICATE.")
    public includeAmbiguous?: boolean;

    /** @description Optional. Only these failure classes: Transient, Permanent, Unknown. Default: all three (Ambiguous only through includeAmbiguous). */
    // @DataMember
    // @ApiMember(Description="Optional. Only these failure classes: Transient, Permanent, Unknown. Default: all three (Ambiguous only through includeAmbiguous).")
    public categories?: string[];

    public constructor(init?: Partial<RetryFailedEmailNotificationsRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RetryFailedEmailNotificationsRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new RetryFailedEmailNotificationsResponse();
    }
  }

  /** @description Stops a running email campaign */
  // @Route("/{version}/notifications/email/campaigns/{Id}/stop", "POST")
  // @Api(Description="Stops a running email campaign")
  // @DataContract
  export class StopEmailCampaignRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    /** @description The campaign id to stop. */
    // @DataMember
    // @ApiMember(Description="The campaign id to stop.")
    public id: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @DataMember
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<StopEmailCampaignRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'StopEmailCampaignRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Get email campaign messages */
  // @Route("/{version}/notifications/emails/campaigns/{campaignId}/messages", "GET")
  // @Api(Description="Get email campaign messages")
  export class GetEmailCampaignMessagesRequest
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetEmailCampaignMessagesResponse>
  {
    /** @description The email campaign id. Get it from get_email_campaigns. */
    // @ApiMember(Description="The email campaign id. Get it from get_email_campaigns.", IsRequired=true)
    public campaignId: string;

    /** @description The campaign batch id to list messages for. Get it from get_email_campaign_batches. */
    // @ApiMember(Description="The campaign batch id to list messages for. Get it from get_email_campaign_batches.", IsRequired=true)
    public campaignBatchId: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetEmailCampaignMessagesRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetEmailCampaignMessagesRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetEmailCampaignMessagesResponse();
    }
  }

  /** @description Create SMS campaign */
  // @Route("/{version}/notifications/sms/campaigns", "POST")
  // @Api(Description="Create SMS campaign")
  // @DataContract
  export class CreateSmsCampaignRequest extends CodeMashRequestBase implements IReturn<IdResponse> {
    /** @description SMS template id to send — pick one with get_sms_templates. Never invent it. */
    // @DataMember
    // @ApiMember(Description="SMS template id to send — pick one with get_sms_templates. Never invent it.")
    public templateId: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @DataMember
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    /** @description SMS provider integration id the campaign sends through — pick one with get_sms_integrations (the project default unless the user named another). Required; never invent it. */
    // @DataMember
    // @ApiMember(Description="SMS provider integration id the campaign sends through — pick one with get_sms_integrations (the project default unless the user named another). Required; never invent it.", IsRequired=true)
    public integrationId: string;

    /** @description Optional language code forcing one template translation for every recipient. */
    // @DataMember
    // @ApiMember(Description="Optional language code forcing one template translation for every recipient.")
    public language?: string;

    // @DataMember
    public initiatorId?: string;

    /** @description Audience type: 'AllUsers' (every project member subscribed to the SMS channel — role-based delivery can address MILLIONS of contacts), 'SpecifiedUsers' (exact member ids), or 'PhoneNumbers' (raw phone numbers). Fill EXACTLY the settings object matching this value. 'Collection' delivery is not available from chat. */
    // @DataMember
    // @ApiMember(Description="Audience type: 'AllUsers' (every project member subscribed to the SMS channel — role-based delivery can address MILLIONS of contacts), 'SpecifiedUsers' (exact member ids), or 'PhoneNumbers' (raw phone numbers). Fill EXACTLY the settings object matching this value. 'Collection' delivery is not available from chat.")
    public deliveryType: SmsCampaignRecipientsSourceTypes;

    /** @description For deliveryType 'AllUsers'. JSON object: {"recipientsSourceType":"AllUsers","rolesNames":["authenticated"],"userTags":[],"campaignTime":<unix seconds UTC>}. rolesNames/userTags are optional narrowing filters — verify exact role names with get_roles. */
    // @DataMember
    // @ApiMember(Description="For deliveryType 'AllUsers'. JSON object: {\"recipientsSourceType\":\"AllUsers\",\"rolesNames\":[\"authenticated\"],\"userTags\":[],\"campaignTime\":<unix seconds UTC>}. rolesNames/userTags are optional narrowing filters — verify exact role names with get_roles.")
    public allUsers?: SmsToAllUsersDeliverySettingsDto;

    /** @description For deliveryType 'SpecifiedUsers'. JSON object: {"recipientsSourceType":"SpecifiedUsers","recipients":[<member ids>],"campaignTime":<unix seconds UTC>}. */
    // @DataMember
    // @ApiMember(Description="For deliveryType 'SpecifiedUsers'. JSON object: {\"recipientsSourceType\":\"SpecifiedUsers\",\"recipients\":[<member ids>],\"campaignTime\":<unix seconds UTC>}.")
    public specifiedUsers?: SmsToUsersDeliverySettingsDto;

    /** @description For deliveryType 'AccountUsers'. JSON object: {"recipientsSourceType":"AccountUsers","recipients":[<account owner / team member ids>],"campaignTime":<unix seconds UTC>}. Members without a phone number are skipped. */
    // @DataMember
    // @ApiMember(Description="For deliveryType 'AccountUsers'. JSON object: {\"recipientsSourceType\":\"AccountUsers\",\"recipients\":[<account owner / team member ids>],\"campaignTime\":<unix seconds UTC>}. Members without a phone number are skipped.")
    public accountUsers?: SmsToAccountUsersDeliverySettingsDto;

    // @DataMember
    public collection?: SmsToCollectionRecordsDeliverySettingsDto;

    /** @description For deliveryType 'PhoneNumbers'. JSON object: {"recipientsSourceType":"PhoneNumbers","phoneNumbers":["+37060000000"],"campaignTime":<unix seconds UTC>}. Numbers in international format. */
    // @DataMember
    // @ApiMember(Description="For deliveryType 'PhoneNumbers'. JSON object: {\"recipientsSourceType\":\"PhoneNumbers\",\"phoneNumbers\":[\"+37060000000\"],\"campaignTime\":<unix seconds UTC>}. Numbers in international format.")
    public phoneNumbers?: SmsToPhoneNumbersDeliverySettingsDto;

    /** @description Optional. true sends the campaign now (or at a campaignTime sooner than the review window). Without it, a campaign created by an AI tool must be scheduled at least 24 hours ahead for role-based / all-users / collection audiences and at least 1 hour ahead for direct recipient lists, or it is rejected with CM-ERRORS-CAMPAIGNS-017. Set it only when the user explicitly asked to send now. */
    // @DataMember
    // @ApiMember(Description="Optional. true sends the campaign now (or at a campaignTime sooner than the review window). Without it, a campaign created by an AI tool must be scheduled at least 24 hours ahead for role-based / all-users / collection audiences and at least 1 hour ahead for direct recipient lists, or it is rejected with CM-ERRORS-CAMPAIGNS-017. Set it only when the user explicitly asked to send now.")
    public sendNow?: boolean;

    public constructor(init?: Partial<CreateSmsCampaignRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreateSmsCampaignRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new IdResponse();
    }
  }

  /** @description Deletes sms campaign from queue */
  // @Route("/{version}/notifications/sms/campaigns/{id}", "DELETE")
  // @Api(Description="Deletes sms campaign from queue")
  export class DeleteSmsCampaign extends CodeMashRequestBase implements IReturn<EmptyResponse> {
    /** @description The campaign id to delete. Get it from get_sms_campaigns. */
    // @ApiMember(Description="The campaign id to delete. Get it from get_sms_campaigns.", IsRequired=true)
    public id: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<DeleteSmsCampaign>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeleteSmsCampaign';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Get sms campaign by id */
  // @Route("/{version}/notifications/sms/campaigns/{id}", "GET")
  // @Api(Description="Get sms campaign by id")
  export class GetSmsCampaign
    extends CodeMashRequestBase
    implements IReturn<GetSmsCampaignResponse>
  {
    /** @description The campaign id. */
    // @ApiMember(Description="The campaign id.")
    public id: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetSmsCampaign>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSmsCampaign';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSmsCampaignResponse();
    }
  }

  /** @description Gets sms campaigns */
  // @Route("/{version}/notifications/sms/campaigns", "GET")
  // @Api(Description="Gets sms campaigns")
  export class GetSmsCampaigns
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetSmsCampaignsResponse>
  {
    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    /** @description Optional: return only the campaign with this id. */
    // @ApiMember(Description="Optional: return only the campaign with this id.")
    public campaignId?: string;

    /** @description Optional: only campaigns built on this SMS template id. */
    // @ApiMember(Description="Optional: only campaigns built on this SMS template id.")
    public templateId?: string;

    /** @description Optional lower bound for the campaign time, unix timestamp in seconds (UTC). */
    // @ApiMember(Description="Optional lower bound for the campaign time, unix timestamp in seconds (UTC).")
    public from?: number;

    /** @description Optional upper bound for the campaign time, unix timestamp in seconds (UTC). */
    // @ApiMember(Description="Optional upper bound for the campaign time, unix timestamp in seconds (UTC).")
    public to?: number;

    public constructor(init?: Partial<GetSmsCampaigns>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSmsCampaigns';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSmsCampaignsResponse();
    }
  }

  /** @description Gets sms campaign batches */
  // @Route("/{version}/notifications/sms/campaigns/{id}/batches", "GET")
  // @Api(Description="Gets sms campaign batches")
  export class GetSmsCampaignBatches
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetSmsCampaignBatchesResponse>
  {
    /** @description The campaign id. Get it from get_sms_campaigns. */
    // @ApiMember(Description="The campaign id. Get it from get_sms_campaigns.")
    public id?: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetSmsCampaignBatches>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSmsCampaignBatches';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSmsCampaignBatchesResponse();
    }
  }

  /** @description Gets sms campaign batch notification */
  // @Route("/{version}/notifications/sms/campaigns/{id}/batches/{batchId}/{notificationId}", "GET")
  // @Api(Description="Gets sms campaign batch notification")
  export class GetSmsCampaignBatchNotification
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetSmsCampaignBatchNotificationResponse>
  {
    /** @description The campaign id. Get it from get_sms_campaigns. */
    // @ApiMember(Description="The campaign id. Get it from get_sms_campaigns.", IsRequired=true)
    public id: string;

    /** @description The campaign batch id. Get it from get_sms_campaign_batches. */
    // @ApiMember(Description="The campaign batch id. Get it from get_sms_campaign_batches.", IsRequired=true)
    public batchId: string;

    /** @description The notification id. Get it from get_sms_campaign_batch_notifications. */
    // @ApiMember(Description="The notification id. Get it from get_sms_campaign_batch_notifications.", IsRequired=true)
    public notificationId: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetSmsCampaignBatchNotification>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSmsCampaignBatchNotification';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSmsCampaignBatchNotificationResponse();
    }
  }

  /** @description Gets sms campaign batch notifications */
  // @Route("/{version}/notifications/sms/campaigns/{id}/batches/{batchId}", "GET")
  // @Api(Description="Gets sms campaign batch notifications")
  export class GetSmsCampaignBatchNotifications
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetSmsCampaignBatchNotificationsResponse>
  {
    /** @description The campaign id. Get it from get_sms_campaigns. */
    // @ApiMember(Description="The campaign id. Get it from get_sms_campaigns.", IsRequired=true)
    public id: string;

    /** @description The campaign batch id. Get it from get_sms_campaign_batches. */
    // @ApiMember(Description="The campaign batch id. Get it from get_sms_campaign_batches.", IsRequired=true)
    public batchId: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetSmsCampaignBatchNotifications>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSmsCampaignBatchNotifications';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSmsCampaignBatchNotificationsResponse();
    }
  }

  /** @description Get sms campaign statistics */
  // @Route("/{version}/notifications/sms/campaigns/{id}/stats", "GET")
  // @Api(Description="Get sms campaign statistics")
  export class GetSmsCampaignStatistics
    extends CodeMashRequestBase
    implements IReturn<GetSmsCampaignStatisticsResponse>
  {
    /** @description The campaign id. Get it from get_sms_campaigns. */
    // @ApiMember(Description="The campaign id. Get it from get_sms_campaigns.", IsRequired=true)
    public id: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetSmsCampaignStatistics>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSmsCampaignStatistics';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSmsCampaignStatisticsResponse();
    }
  }

  /** @description Returns SMS preview notification body */
  // @Route("/{version}/notifications/sms/preview", "GET")
  // @Api(Description="Returns SMS preview notification body")
  export class PreviewSmsNotification
    extends RequestBase
    implements IReturn<PreviewSmsNotificationResponse>
  {
    /** @description The signed preview link hash. With it the preview opens without sign-in: exactly one notification, until the link expires (30 days after sending). */
    // @ApiMember(Description="The signed preview link hash. With it the preview opens without sign-in: exactly one notification, until the link expires (30 days after sending).")
    public hash: string;

    /** @description Signed-in preview by id: the project id. With a hash it must match the hash. */
    // @ApiMember(Description="Signed-in preview by id: the project id. With a hash it must match the hash.")
    public projectId?: string;

    /** @description Signed-in preview by id: the notification id (needs sms:read). With a hash it must match the hash. */
    // @ApiMember(Description="Signed-in preview by id: the notification id (needs sms:read). With a hash it must match the hash.")
    public notificationId?: string;

    public constructor(init?: Partial<PreviewSmsNotification>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'PreviewSmsNotification';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new PreviewSmsNotificationResponse();
    }
  }

  /** @description Retries the failed recipients of an SMS campaign */
  // @Route("/{version}/notifications/sms/campaigns/{Id}/retry-failed", "POST")
  // @Api(Description="Retries the failed recipients of an SMS campaign")
  // @DataContract
  export class RetryFailedSmsNotificationsRequest
    extends CodeMashRequestBase
    implements IReturn<RetryFailedSmsNotificationsResponse>
  {
    /** @description The campaign id. Get it from get_sms_campaigns. */
    // @DataMember
    // @ApiMember(Description="The campaign id. Get it from get_sms_campaigns.", IsRequired=true)
    public id: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @DataMember
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    /** @description Your key for this request, at most 64 characters. The same key again returns the first answer and sends nothing; the same key with another body is refused (409). */
    // @DataMember
    // @ApiMember(Description="Your key for this request, at most 64 characters. The same key again returns the first answer and sends nothing; the same key with another body is refused (409).", IsRequired=true)
    public idempotencyKey: string;

    /** @description Optional. Only these notification ids. Default: every failed recipient of the campaign. */
    // @DataMember
    // @ApiMember(Description="Optional. Only these notification ids. Default: every failed recipient of the campaign.")
    public notificationIds?: string[];

    /** @description Optional, default false. Also retry recipients whose failure is Ambiguous (a timeout after the request was sent) — this MAY SEND A DUPLICATE. */
    // @DataMember
    // @ApiMember(Description="Optional, default false. Also retry recipients whose failure is Ambiguous (a timeout after the request was sent) — this MAY SEND A DUPLICATE.")
    public includeAmbiguous?: boolean;

    /** @description Optional. Only these failure classes: Transient, Permanent, Unknown. Default: all three (Ambiguous only through includeAmbiguous). */
    // @DataMember
    // @ApiMember(Description="Optional. Only these failure classes: Transient, Permanent, Unknown. Default: all three (Ambiguous only through includeAmbiguous).")
    public categories?: string[];

    public constructor(init?: Partial<RetryFailedSmsNotificationsRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RetryFailedSmsNotificationsRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new RetryFailedSmsNotificationsResponse();
    }
  }

  /** @description Stops a running SMS campaign */
  // @Route("/{version}/notifications/sms/campaigns/{Id}/stop", "POST")
  // @Api(Description="Stops a running SMS campaign")
  export class StopSmsCampaignRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    /** @description The campaign id to stop. */
    // @ApiMember(Description="The campaign id to stop.")
    public id: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<StopSmsCampaignRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'StopSmsCampaignRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Gets the sms notifications */
  // @Route("/{version}/notifications/sms/campaigns/{campaignId}/messages", "GET")
  // @Api(Description="Gets the sms notifications")
  export class GetSmsCampaignMessagesRequest
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetSmsCampaignMessagesResponse>
  {
    /** @description The campaign id. Get it from get_sms_campaigns. */
    // @ApiMember(Description="The campaign id. Get it from get_sms_campaigns.", IsRequired=true)
    public campaignId: string;

    /** @description The campaign batch id. Get it from get_sms_campaign_batches. */
    // @ApiMember(Description="The campaign batch id. Get it from get_sms_campaign_batches.", IsRequired=true)
    public campaignBatchId: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetSmsCampaignMessagesRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetSmsCampaignMessagesRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetSmsCampaignMessagesResponse();
    }
  }

  /** @description Count the devices a push campaign audience would reach */
  // @Route("/{version}/notifications/push/campaigns/audience-count", "POST")
  // @Api(Description="Count the devices a push campaign audience would reach")
  // @DataContract
  export class GetPushCampaignAudienceCountRequest
    extends CodeMashRequestBase
    implements IReturn<GetPushCampaignAudienceCountResponse>
  {
    /** @description The audience, in the same shape as CreatePushCampaignRequest.campaign. Template and send options are ignored. */
    // @DataMember
    // @ApiMember(Description="The audience, in the same shape as CreatePushCampaignRequest.campaign. Template and send options are ignored.")
    public campaign: PushCampaignRequest;

    /** @description Optional. When omitted, the default database integration for the request's environment is used. */
    // @DataMember
    // @ApiMember(Description="Optional. When omitted, the default database integration for the request's environment is used.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetPushCampaignAudienceCountRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPushCampaignAudienceCountRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new GetPushCampaignAudienceCountResponse();
    }
  }

  /** @description Create push campaign */
  // @Route("/{version}/notifications/push/campaigns", "POST")
  // @Api(Description="Create push campaign")
  // @DataContract
  export class CreatePushCampaignRequest
    extends CodeMashRequestBase
    implements IReturn<IdResponse>
  {
    // @DataMember
    public campaign: PushCampaignRequest;

    // @DataMember
    public databaseIntegrationId?: string;

    /** @description Optional. true sends the campaign now (or at a campaignTime sooner than the review window). Without it, a campaign created by an AI tool must be scheduled at least 24 hours ahead for role-based / all-users / collection audiences and at least 1 hour ahead for direct recipient lists, or it is rejected with CM-ERRORS-CAMPAIGNS-017. Set it only when the user explicitly asked to send now. */
    // @DataMember
    // @ApiMember(Description="Optional. true sends the campaign now (or at a campaignTime sooner than the review window). Without it, a campaign created by an AI tool must be scheduled at least 24 hours ahead for role-based / all-users / collection audiences and at least 1 hour ahead for direct recipient lists, or it is rejected with CM-ERRORS-CAMPAIGNS-017. Set it only when the user explicitly asked to send now.")
    public sendNow?: boolean;

    public constructor(init?: Partial<CreatePushCampaignRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'CreatePushCampaignRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new IdResponse();
    }
  }

  /** @description Deletes push campaign from queue */
  // @Route("/{version}/notifications/push/campaigns/{Id}", "DELETE")
  // @Api(Description="Deletes push campaign from queue")
  // @DataContract
  export class DeletePushCampaignRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    /** @description The push campaign id to delete. Get it from get_push_campaigns. */
    // @DataMember
    // @ApiMember(Description="The push campaign id to delete. Get it from get_push_campaigns.", IsRequired=true)
    public id: string;

    /** @description Optional database integration id; omit to use the project's default. */
    // @DataMember
    // @ApiMember(Description="Optional database integration id; omit to use the project's default.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<DeletePushCampaignRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'DeletePushCampaignRequest';
    }
    public getMethod() {
      return 'DELETE';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Gets push campaign by id */
  // @Route("/{version}/notifications/push/campaigns/{id}", "GET")
  // @Api(Description="Gets push campaign by id")
  export class GetPushCampaign
    extends CodeMashRequestBase
    implements IReturn<GetPushCampaignResponse>
  {
    /** @description The campaign id. */
    // @ApiMember(Description="The campaign id.")
    public id: string;

    /** @description Optional database integration id; omit to use the project's default. */
    // @ApiMember(Description="Optional database integration id; omit to use the project's default.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetPushCampaign>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPushCampaign';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPushCampaignResponse();
    }
  }

  /** @description Gets push campaigns */
  // @Route("/{version}/notifications/push/campaigns", "GET")
  // @Api(Description="Gets push campaigns")
  export class GetPushCampaigns
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetPushCampaignsResponse>
  {
    /** @description Optional database integration id; omit to use the project's default. */
    // @ApiMember(Description="Optional database integration id; omit to use the project's default.")
    public databaseIntegrationId?: string;

    /** @description Optional: only campaigns built on this push template id. */
    // @ApiMember(Description="Optional: only campaigns built on this push template id.")
    public templateId?: string;

    /** @description Optional lower bound for the campaign time, unix timestamp in seconds (UTC). */
    // @ApiMember(Description="Optional lower bound for the campaign time, unix timestamp in seconds (UTC).")
    public from?: number;

    /** @description Optional upper bound for the campaign time, unix timestamp in seconds (UTC). */
    // @ApiMember(Description="Optional upper bound for the campaign time, unix timestamp in seconds (UTC).")
    public to?: number;

    public constructor(init?: Partial<GetPushCampaigns>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPushCampaigns';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPushCampaignsResponse();
    }
  }

  /** @description Gets push campaign batches */
  // @Route("/{version}/notifications/push/campaigns/{id}/batches", "GET")
  // @Api(Description="Gets push campaign batches")
  export class GetPushCampaignBatches
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetPushCampaignBatchesResponse>
  {
    /** @description The push campaign id to list batches for. Get it from get_push_campaigns. */
    // @ApiMember(Description="The push campaign id to list batches for. Get it from get_push_campaigns.")
    public id: string;

    /** @description Optional database integration id; omit to use the project's default. */
    // @ApiMember(Description="Optional database integration id; omit to use the project's default.")
    public databaseIntegrationId?: string;

    /** @description Optional: only return the batch with this id. */
    // @ApiMember(Description="Optional: only return the batch with this id.")
    public batchId?: string;

    public constructor(init?: Partial<GetPushCampaignBatches>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPushCampaignBatches';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPushCampaignBatchesResponse();
    }
  }

  /** @description Gets a push campaign batch notification */
  // @Route("/{version}/notifications/push/campaigns/{id}/batches/{batchId}/{notificationId}", "GET")
  // @Api(Description="Gets a push campaign batch notification")
  export class GetPushCampaignBatchNotification
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetPushCampaignBatchNotificationResponse>
  {
    /** @description The push campaign id. Get it from get_push_campaigns. */
    // @ApiMember(Description="The push campaign id. Get it from get_push_campaigns.")
    public id: string;

    /** @description The batch id. Get it from get_push_campaign_batches. */
    // @ApiMember(Description="The batch id. Get it from get_push_campaign_batches.")
    public batchId: string;

    /** @description The notification id within the batch. */
    // @ApiMember(Description="The notification id within the batch.")
    public notificationId: string;

    /** @description Optional database integration id; omit to use the project's default. */
    // @ApiMember(Description="Optional database integration id; omit to use the project's default.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetPushCampaignBatchNotification>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPushCampaignBatchNotification';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPushCampaignBatchNotificationResponse();
    }
  }

  /** @description Gets push campaign batch notifications */
  // @Route("/{version}/notifications/push/campaigns/{id}/batches/{batchId}", "GET")
  // @Api(Description="Gets push campaign batch notifications")
  export class GetPushCampaignBatchNotifications
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetPushCampaignBatchNotificationsResponse>
  {
    /** @description The push campaign id. Get it from get_push_campaigns. */
    // @ApiMember(Description="The push campaign id. Get it from get_push_campaigns.")
    public id: string;

    /** @description The batch id to list notifications for. Get it from get_push_campaign_batches. */
    // @ApiMember(Description="The batch id to list notifications for. Get it from get_push_campaign_batches.")
    public batchId: string;

    /** @description Optional database integration id; omit to use the project's default. */
    // @ApiMember(Description="Optional database integration id; omit to use the project's default.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetPushCampaignBatchNotifications>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPushCampaignBatchNotifications';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPushCampaignBatchNotificationsResponse();
    }
  }

  /** @description Get push campaign statistics */
  // @Route("/{version}/notifications/push/campaigns/{id}/stats", "GET")
  // @Api(Description="Get push campaign statistics")
  export class GetPushCampaignStatistics
    extends CodeMashRequestBase
    implements IReturn<GetPushCampaignStatisticsResponse>
  {
    /** @description The push campaign id to get statistics for. Get it from get_push_campaigns. */
    // @ApiMember(Description="The push campaign id to get statistics for. Get it from get_push_campaigns.")
    public id: string;

    /** @description Optional database integration id; omit to use the project's default. */
    // @ApiMember(Description="Optional database integration id; omit to use the project's default.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetPushCampaignStatistics>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPushCampaignStatistics';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPushCampaignStatisticsResponse();
    }
  }

  /** @description Returns push preview notification */
  // @Route("/{version}/notifications/push/preview", "GET")
  // @Api(Description="Returns push preview notification")
  export class PreviewPushNotification
    extends RequestBase
    implements IReturn<PreviewPushNotificationResponse>
  {
    /** @description The signed preview link hash. With it the preview opens without sign-in: exactly one notification, until the link expires (30 days after sending). */
    // @ApiMember(Description="The signed preview link hash. With it the preview opens without sign-in: exactly one notification, until the link expires (30 days after sending).")
    public hash: string;

    /** @description Signed-in preview by id: the project id. With a hash it must match the hash. */
    // @ApiMember(Description="Signed-in preview by id: the project id. With a hash it must match the hash.")
    public projectId?: string;

    /** @description Signed-in preview by id: the notification id (needs push:read). With a hash it must match the hash. */
    // @ApiMember(Description="Signed-in preview by id: the notification id (needs push:read). With a hash it must match the hash.")
    public notificationId?: string;

    public constructor(init?: Partial<PreviewPushNotification>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'PreviewPushNotification';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new PreviewPushNotificationResponse();
    }
  }

  /** @description Retries the failed recipients of a push campaign */
  // @Route("/{version}/notifications/push/campaigns/{Id}/retry-failed", "POST")
  // @Api(Description="Retries the failed recipients of a push campaign")
  // @DataContract
  export class RetryFailedPushNotificationsRequest
    extends CodeMashRequestBase
    implements IReturn<RetryFailedPushNotificationsResponse>
  {
    /** @description The campaign id. Get it from get_push_campaigns. */
    // @DataMember
    // @ApiMember(Description="The campaign id. Get it from get_push_campaigns.", IsRequired=true)
    public id: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @DataMember
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    /** @description Your key for this request, at most 64 characters. The same key again returns the first answer and sends nothing; the same key with another body is refused (409). */
    // @DataMember
    // @ApiMember(Description="Your key for this request, at most 64 characters. The same key again returns the first answer and sends nothing; the same key with another body is refused (409).", IsRequired=true)
    public idempotencyKey: string;

    /** @description Optional. Only these notification ids. Default: every failed recipient of the campaign. */
    // @DataMember
    // @ApiMember(Description="Optional. Only these notification ids. Default: every failed recipient of the campaign.")
    public notificationIds?: string[];

    /** @description Optional, default false. Also retry recipients whose failure is Ambiguous (a timeout after the request was sent) — this MAY SEND A DUPLICATE. */
    // @DataMember
    // @ApiMember(Description="Optional, default false. Also retry recipients whose failure is Ambiguous (a timeout after the request was sent) — this MAY SEND A DUPLICATE.")
    public includeAmbiguous?: boolean;

    /** @description Optional. Only these failure classes: Transient, Permanent, Unknown. Default: all three (Ambiguous only through includeAmbiguous). */
    // @DataMember
    // @ApiMember(Description="Optional. Only these failure classes: Transient, Permanent, Unknown. Default: all three (Ambiguous only through includeAmbiguous).")
    public categories?: string[];

    public constructor(init?: Partial<RetryFailedPushNotificationsRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RetryFailedPushNotificationsRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new RetryFailedPushNotificationsResponse();
    }
  }

  /** @description Stops a running push campaign */
  // @Route("/{version}/notifications/push/campaigns/{Id}/stop", "POST")
  // @Api(Description="Stops a running push campaign")
  // @DataContract
  export class StopPushCampaignRequest
    extends CodeMashRequestBase
    implements IReturn<EmptyResponse>
  {
    /** @description The campaign id to stop. */
    // @DataMember
    // @ApiMember(Description="The campaign id to stop.")
    public id: string;

    /** @description Optional database integration id; omit to use the project's default. */
    // @DataMember
    // @ApiMember(Description="Optional database integration id; omit to use the project's default.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<StopPushCampaignRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'StopPushCampaignRequest';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new EmptyResponse();
    }
  }

  /** @description Gets push campaign messages */
  // @Route("/{version}/notifications/push/campaigns/{campaignId}/messages", "GET")
  // @Api(Description="Gets push campaign messages")
  export class GetPushCampaignMessagesRequest
    extends CodeMashListPaginationRequestBase
    implements IReturn<GetPushCampaignMessagesResponse>
  {
    /** @description The push campaign id. Get it from get_push_campaigns. */
    // @ApiMember(Description="The push campaign id. Get it from get_push_campaigns.")
    public campaignId: string;

    /** @description Optional: restrict results to this batch id. Get it from get_push_campaign_batches. */
    // @ApiMember(Description="Optional: restrict results to this batch id. Get it from get_push_campaign_batches.")
    public campaignBatchId: string;

    /** @description Optional database integration id; omit to use the project's default. */
    // @ApiMember(Description="Optional database integration id; omit to use the project's default.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetPushCampaignMessagesRequest>) {
      super(init);
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetPushCampaignMessagesRequest';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetPushCampaignMessagesResponse();
    }
  }

  /** @description Sign In */
  // @Route("/auth", "GET,POST")
  // @Route("/auth/{provider}", "GET,POST")
  // @Route("/v3/auth", "POST,GET,OPTIONS")
  // @Route("/v3/auth/{provider}", "POST,GET,OPTIONS")
  // @Api(Description="Sign In")
  // @DataContract
  export class Authenticate implements IReturn<AuthenticateResponse>, IPost {
    /** @description AuthProvider, e.g. credentials */
    // @DataMember(Order=1)
    public provider?: string;

    // @DataMember(Order=2)
    public userName?: string;

    // @DataMember(Order=3)
    public password?: string;

    // @DataMember(Order=4)
    public rememberMe?: boolean;

    // @DataMember(Order=5)
    public accessToken?: string;

    // @DataMember(Order=6)
    public accessTokenSecret?: string;

    // @DataMember(Order=7)
    public returnUrl?: string;

    // @DataMember(Order=8)
    public errorView?: string;

    // @DataMember(Order=9)
    public meta?: { [index: string]: string };

    public constructor(init?: Partial<Authenticate>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'Authenticate';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new AuthenticateResponse();
    }
  }

  // @Route("/access-token")
  // @DataContract
  export class GetAccessToken implements IReturn<GetAccessTokenResponse>, IPost {
    // @DataMember(Order=1)
    public refreshToken?: string;

    // @DataMember(Order=2)
    public meta?: { [index: string]: string };

    public constructor(init?: Partial<GetAccessToken>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetAccessToken';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new GetAccessTokenResponse();
    }
  }

  // @sdk-dto-patches (injected by sync-types.mjs)
  export class UserApiKey {
    public key?: string;
    public keyType?: string;
    public expiryDate?: string;
    public meta?: { [index: string]: string };

    public constructor(init?: Partial<UserApiKey>) {
      (Object as any).assign(this, init);
    }
  }
  export class GetApiKeysResponse {
    public results?: UserApiKey[];
    public meta?: { [index: string]: string };
    public responseStatus?: ResponseStatus;

    public constructor(init?: Partial<GetApiKeysResponse>) {
      (Object as any).assign(this, init);
    }
  }
  export class RegenerateApiKeysResponse {
    public results?: UserApiKey[];
    public meta?: { [index: string]: string };
    public responseStatus?: ResponseStatus;

    public constructor(init?: Partial<RegenerateApiKeysResponse>) {
      (Object as any).assign(this, init);
    }
  }
  // @Route("/apikeys")
  // @Route("/apikeys/{Environment}")
  export class GetApiKeys implements IReturn<GetApiKeysResponse>, IGet {
    public environment?: string;
    public meta?: { [index: string]: string };

    public constructor(init?: Partial<GetApiKeys>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'GetApiKeys';
    }
    public getMethod() {
      return 'GET';
    }
    public createResponse() {
      return new GetApiKeysResponse();
    }
  }
  // @Route("/apikeys/regenerate")
  // @Route("/apikeys/regenerate/{Environment}")
  export class RegenerateApiKeys implements IReturn<RegenerateApiKeysResponse>, IPost {
    public environment?: string;
    public meta?: { [index: string]: string };

    public constructor(init?: Partial<RegenerateApiKeys>) {
      (Object as any).assign(this, init);
    }
    public getTypeName() {
      return 'RegenerateApiKeys';
    }
    public getMethod() {
      return 'POST';
    }
    public createResponse() {
      return new RegenerateApiKeysResponse();
    }
  }
}
