/* Options:
Date: 2026-06-12 16:20:54
Version: 10.06
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:5002

GlobalNamespace: CodeMashApi2
//MakePropertiesOptional: False
AddServiceStackTypes: True
AddResponseStatus: False
//AddImplicitVersion: 
AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/

// @ts-nocheck


export module CodeMashApi2
{

    export interface IReturn<T>
    {
        createResponse(): T;
    }

    export interface IReturnVoid
    {
        createResponse(): void;
    }

    export interface IHasSessionId
    {
        sessionId?: string;
    }

    export interface IHasBearerToken
    {
        bearerToken?: string;
    }

    export interface IPost
    {
    }

    export interface IGet
    {
    }

    export type IReadOnlySet<T> = T[];
    export type IReadOnlyList<T> = T[];
    export type IList<T> = T[];
    export type IReadOnlyDictionary<TValue> = Record<string, TValue>;
    export type Dictionary<TValue> = Record<string, TValue>;
    export type HashSet<T> = T[];
    export type Blob = globalThis.Blob;


    // @DataContract(Namespace="http://codemash.io/types/")
    export class RequestBase implements ICultureBasedRequest, IVersionBasedRequest, IHasCorrelationIdRequest
    {
        /** @description Specify culture code when your response from the API should be localised. E.g.: en */
        // @DataMember
        // @ApiMember(DataType="string", Description="Specify culture code when your response from the API should be localised. E.g.: en", Name="CultureCode", ParameterType="header")
        public cultureCode?: string;

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

        public constructor(init?: Partial<RequestBase>) { (Object as any).assign(this, init); }
    }

    export interface ICultureBasedRequest
    {
        cultureCode?: string;
    }

    export interface IVersionBasedRequest
    {
        version: string;
    }

    export interface IHasCorrelationIdRequest
    {
        correlationId?: string;
    }

    export class EmailAddress
    {
        public address: string;

        public constructor(init?: Partial<EmailAddress>) { (Object as any).assign(this, init); }
    }

    export class DisplayName
    {
        public value: string;

        public constructor(init?: Partial<DisplayName>) { (Object as any).assign(this, init); }
    }

    export class AggregateId
    {
        public value: string;
        public get viewId(): string { return this.value; }
        public viewId?: string;

        public constructor(init?: Partial<AggregateId>) { (Object as any).assign(this, init); }
    }

    export class AccountId extends AggregateId implements IHasDomainEntityId
    {

        public constructor(init?: Partial<AccountId>) { super(init); (Object as any).assign(this, init); }
    }

    export class UtcDateTime
    {

        public constructor(init?: Partial<UtcDateTime>) { (Object as any).assign(this, init); }
    }

    export enum TimeUnit
    {
        Ticks = 'Ticks',
        Milliseconds = 'Milliseconds',
        Seconds = 'Seconds',
        Minutes = 'Minutes',
        Hours = 'Hours',
    }

    export class ExpirationToken
    {
        public items: number;
        public unit: TimeUnit;
        public value: number;

        public constructor(init?: Partial<ExpirationToken>) { (Object as any).assign(this, init); }
    }

    export class CodeMashSubscriptionId extends AggregateId
    {

        public constructor(init?: Partial<CodeMashSubscriptionId>) { super(init); (Object as any).assign(this, init); }
    }

    export class ProjectId extends AggregateId implements IHasDomainEntityId
    {

        public constructor(init?: Partial<ProjectId>) { super(init); (Object as any).assign(this, init); }
    }

    export class IntegrationId extends AggregateId implements IHasDomainEntityId
    {

        public constructor(init?: Partial<IntegrationId>) { super(init); (Object as any).assign(this, init); }
    }

    export enum ResourceRefKind
    {
        Contact = 'Contact',
        Document = 'Document',
        File = 'File',
        PaymentCustomer = 'PaymentCustomer',
        Order = 'Order',
        Payment = 'Payment',
        Product = 'Product',
        Integration = 'Integration',
    }

    export class ResourceRef
    {
        public projectId: ProjectId;
        public integrationId?: IntegrationId;
        public kind: ResourceRefKind;

        public constructor(init?: Partial<ResourceRef>) { (Object as any).assign(this, init); }
    }

    export enum ResourceSource
    {
        Norbix = 'Norbix',
        Stripe = 'Stripe',
        Shopify = 'Shopify',
    }

    export class PaymentCustomerRef extends ResourceRef
    {
        declare kind: ResourceRefKind;
        declare source: ResourceSource;
        public externalId: string;

        public constructor(init?: Partial<PaymentCustomerRef>) { super(init); (Object as any).assign(this, init); }
    }

    export class Quantity
    {
        public value: number;

        public constructor(init?: Partial<Quantity>) { (Object as any).assign(this, init); }
    }

    export class CodeMashManagedServiceSubscription
    {
        public subscriptionId: CodeMashSubscriptionId;
        public paymentCustomerRef: PaymentCustomerRef;
        public refSubscriptionId: string;
        public issuedOn: UtcDateTime;
        public willExpireOn: UtcDateTime;
        public projectCap: Quantity;
        public isTrial: boolean;

        public constructor(init?: Partial<CodeMashManagedServiceSubscription>) { (Object as any).assign(this, init); }
    }

    export class DomainUrl
    {
        public value: string;

        public constructor(init?: Partial<DomainUrl>) { (Object as any).assign(this, init); }
    }

    export class CodeMashLicense extends CodeMashManagedServiceSubscription
    {
        public domain: DomainUrl;
        public accountId: AccountId;
        public isEnterprise: boolean;

        public constructor(init?: Partial<CodeMashLicense>) { super(init); (Object as any).assign(this, init); }
    }

    export class Tag
    {

        public constructor(init?: Partial<Tag>) { (Object as any).assign(this, init); }
    }

    export class TagDescription
    {
        public displayName: DisplayName;
        public description?: string;

        public constructor(init?: Partial<TagDescription>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class MessageTranslation<TContent>
    {

        public constructor(init?: Partial<MessageTranslation<TContent>>) { (Object as any).assign(this, init); }
    }

    export class TagTranslation extends MessageTranslation<TagDescription>
    {

        public constructor(init?: Partial<TagTranslation>) { super(init); (Object as any).assign(this, init); }
    }

    export class BaseTagDefinition
    {
        public tag: Tag;
        public translations: TagTranslation[] = [];

        public constructor(init?: Partial<BaseTagDefinition>) { (Object as any).assign(this, init); }
    }

    export class GroupDefinition extends BaseTagDefinition
    {

        public constructor(init?: Partial<GroupDefinition>) { super(init); (Object as any).assign(this, init); }
    }

    export enum CommunicationChannel
    {
        Transactional = 'Transactional',
        Marketing = 'Marketing',
        System = 'System',
    }

    export enum DeliveryChannel
    {
        Email = 'Email',
        Push = 'Push',
        Sms = 'Sms',
        WebPush = 'WebPush',
        InApp = 'InApp',
        ChatBot = 'ChatBot',
        ChatPlatform = 'ChatPlatform',
    }

    export class TagDefinition extends BaseTagDefinition
    {
        public defaultDelivery: { [index:string]: boolean; } = {};

        public constructor(init?: Partial<TagDefinition>) { super(init); (Object as any).assign(this, init); }
    }

    // @DataContract
    export class ProjectName
    {
        // @DataMember
        public name: string;

        // @DataMember
        public uniqueName: string;

        public constructor(init?: Partial<ProjectName>) { (Object as any).assign(this, init); }
    }

    export class NorbixRegion
    {
        public code: string;

        public constructor(init?: Partial<NorbixRegion>) { (Object as any).assign(this, init); }
    }

    export enum Continent
    {
        Africa = 'Africa',
        Antarctica = 'Antarctica',
        Asia = 'Asia',
        Europe = 'Europe',
        NorthAmerica = 'NorthAmerica',
        Oceania = 'Oceania',
        SouthAmerica = 'SouthAmerica',
    }

    // @DataContract
    export class ProjectRegion
    {
        // @DataMember
        public region: NorbixRegion;

        // @DataMember
        public name?: string;

        // @DataMember
        public continent?: Continent;

        public constructor(init?: Partial<ProjectRegion>) { (Object as any).assign(this, init); }
    }

    export class Language
    {
        public code: string;
        public name: string;

        public constructor(init?: Partial<Language>) { (Object as any).assign(this, init); }
    }

    export class FileResourceId
    {
        public value: string;

        public constructor(init?: Partial<FileResourceId>) { (Object as any).assign(this, init); }
    }

    export class FileChecksum
    {
        public algorithm: string;
        public hash: string;

        public constructor(init?: Partial<FileChecksum>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class FileResource
    {
        // @DataMember
        public id: FileResourceId;

        // @DataMember
        public originalFileName: string;

        // @DataMember
        public extension: string;

        // @DataMember
        public sizeBytes?: number;

        // @DataMember
        public checksum?: FileChecksum;

        // @DataMember
        public storedFileName: string;

        public constructor(init?: Partial<FileResource>) { (Object as any).assign(this, init); }
    }

    export enum FileProvider
    {
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
    export class FileResourceRef
    {
        // @DataMember(Order=1)
        public resource: FileResource;

        // @DataMember(Order=2)
        public integrationId: IntegrationId;

        // @DataMember(Order=3)
        public provider: FileProvider;

        // @DataMember(Order=4)
        public path: string;

        public constructor(init?: Partial<FileResourceRef>) { (Object as any).assign(this, init); }
    }

    export class ProjectLogo
    {
        public fileResource: FileResourceRef;
        public publicUrl: string;

        public constructor(init?: Partial<ProjectLogo>) { (Object as any).assign(this, init); }
    }

    export class ProjectIcon
    {
        public fileResource: FileResourceRef;
        public publicUrl: string;

        public constructor(init?: Partial<ProjectIcon>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class BrandColor
    {
        // @DataMember
        public value: string;

        public constructor(init?: Partial<BrandColor>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class TimeZone
    {
        // @DataMember
        public zoneId: string;

        public constructor(init?: Partial<TimeZone>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class GroupTags
    {
        // @DataMember
        public group: Tag;

        // @DataMember
        public tags: Tag[] = [];

        public constructor(init?: Partial<GroupTags>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class ProjectCommunicationChannel
    {
        // @DataMember
        public channel: CommunicationChannel;

        // @DataMember
        public groups: GroupTags[] = [];

        public constructor(init?: Partial<ProjectCommunicationChannel>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class ProjectCommunication
    {
        // @DataMember
        public channels: ProjectCommunicationChannel[] = [];

        // @DataMember
        public groups: GroupDefinition[] = [];

        // @DataMember
        public tags: TagDefinition[] = [];

        public constructor(init?: Partial<ProjectCommunication>) { (Object as any).assign(this, init); }
    }

    export class UserId implements IHasDomainEntityId
    {
        public viewId?: string;
        public value: string;

        public constructor(init?: Partial<UserId>) { (Object as any).assign(this, init); }
    }

    export class DeviceId
    {
        public id: string;

        public constructor(init?: Partial<DeviceId>) { (Object as any).assign(this, init); }
    }

    export enum DeviceType
    {
        Unknown = 'Unknown',
        Phone = 'Phone',
        Tablet = 'Tablet',
        Desktop = 'Desktop',
        Tv = 'Tv',
    }

    export class PushDeviceToken
    {
        public token: string;

        public constructor(init?: Partial<PushDeviceToken>) { (Object as any).assign(this, init); }
    }

    export enum PushDeviceDeliveryFamily
    {
        Ios = 'Ios',
        Android = 'Android',
        Chrome = 'Chrome',
        Safari = 'Safari',
        Expo = 'Expo',
    }

    // @DataContract
    export class PushDeviceDeliveryToken
    {
        // @DataMember
        public pushDeviceToken: PushDeviceToken;

        // @DataMember
        public deliveryFamily: PushDeviceDeliveryFamily;

        public constructor(init?: Partial<PushDeviceDeliveryToken>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class PushDevice
    {
        // @DataMember
        public id: DeviceId;

        // @DataMember
        public brand?: string;

        // @DataMember
        public manufacturer?: string;

        // @DataMember
        public modelName?: string;

        // @DataMember
        public deviceName?: string;

        // @DataMember
        public deviceType?: DeviceType;

        // @DataMember
        public osName?: string;

        // @DataMember
        public osVersion?: string;

        // @DataMember
        public platformApiLevel?: number;

        // @DataMember
        public token: PushDeviceDeliveryToken;

        public constructor(init?: Partial<PushDevice>) { (Object as any).assign(this, init); }
    }

    // @DataContract(Namespace="http://codemash.io/types/")
    export class CodeMashRequestBase extends RequestBase implements IHasProjectId, IHasEnv
    {
        /** @description ID of your project. Can be passed in a header as norbix-project-id. */
        // @DataMember
        // @ApiMember(DataType="string", Description="ID of your project. Can be passed in a header as norbix-project-id.", IsRequired=true, Name="norbix-project-id", ParameterType="header")
        public projectId: string;

        /** @description Target environment for this request (e.g. TEST, STAGING). Optional — when omitted the request runs against PROD. Can be passed in a header as norbix-env. */
        // @DataMember
        // @ApiMember(DataType="string", Description="Target environment for this request (e.g. TEST, STAGING). Optional — when omitted the request runs against PROD. Can be passed in a header as norbix-env.", Name="norbix-env", ParameterType="header")
        public env?: string;

        public constructor(init?: Partial<CodeMashRequestBase>) { super(init); (Object as any).assign(this, init); }
    }

    export interface IHasProjectId
    {
        projectId: string;
    }

    export interface IHasEnv
    {
        env?: string;
    }

    export enum Gender
    {
        Male = 'Male',
        Female = 'Female',
        Other = 'Other',
    }

    export enum MarketingBlockReason
    {
        Unspecified = 'Unspecified',
        Unsubscribed = 'Unsubscribed',
        Complaint = 'Complaint',
        HardBounce = 'HardBounce',
        InvalidEmail = 'InvalidEmail',
        AdminBlock = 'AdminBlock',
    }

    export class UserGeneralInfoDto
    {
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
        public blockedTags?: { [index:string]: HashSet<string>; };
        public blockReasons?: MarketingBlockReason[];
        public extraMetadata?: string;
        public notes?: string;

        public constructor(init?: Partial<UserGeneralInfoDto>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class SaveUser extends CodeMashRequestBase
    {
        /** @description Database integration id. Optional — defaults to the request environment's default integration. */
        // @DataMember
        // @ApiMember(Description="Database integration id. Optional — defaults to the request environment's default integration.")
        public databaseIntegrationId?: string;

        /** @description User Info */
        // @DataMember
        // @ApiMember(DataType="object", Description="User Info", Name="UserGeneralInfo", ParameterType="body")
        public userGeneralInfo?: UserGeneralInfoDto;

        /** @description Ignore UserRegistersAsRole from Membership Settings */
        // @DataMember
        // @ApiMember(DataType="boolean", Description="Ignore UserRegistersAsRole from Membership Settings", Name="IgnoreUserRegistersAsRole", ParameterType="body")
        public ignoreUserRegistersAsRole: boolean;

        public constructor(init?: Partial<SaveUser>) { super(init); (Object as any).assign(this, init); }
    }

    // @DataContract
    export class SaveUserWithRolesBase extends SaveUser
    {
        // @DataMember
        public roles: string[] = [];

        public constructor(init?: Partial<SaveUserWithRolesBase>) { super(init); (Object as any).assign(this, init); }
    }

    export class Env
    {
        public value: string;
        public isProd: boolean;

        public constructor(init?: Partial<Env>) { (Object as any).assign(this, init); }
    }

    export class CursorArgs implements ICursorArgs
    {
        public field: string;
        public order: number;

        public constructor(init?: Partial<CursorArgs>) { (Object as any).assign(this, init); }
    }

    export class PagingArgs
    {
        public cursorArgs?: CursorArgs;
        public pageSize?: number;
        public startingAfter?: string;
        public endingBefore?: string;

        public constructor(init?: Partial<PagingArgs>) { (Object as any).assign(this, init); }
    }

    export class CodeMashListPaginationRequestBase extends RequestBase implements IHasProjectId, IHasEnv
    {
        /** @description ID of your project. Can be passed in a header as norbix-project-id. */
        // @DataMember
        // @ApiMember(DataType="string", Description="ID of your project. Can be passed in a header as norbix-project-id.", IsRequired=true, Name="norbix-project-id", ParameterType="header")
        public projectId: string;

        /** @description Target environment for this request (e.g. TEST, STAGING). Optional — when omitted the request runs against PROD. Can be passed in a header as norbix-env. */
        // @DataMember
        // @ApiMember(DataType="string", Description="Target environment for this request (e.g. TEST, STAGING). Optional — when omitted the request runs against PROD. Can be passed in a header as norbix-env.", Name="norbix-env", ParameterType="header")
        public env?: string;

        public resolvedEnv: Env;
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

        /** @description Paging */
        // @ApiMember(DataType="object", Description="Paging", Name="paging", ParameterType="body")
        public paging?: PagingArgs;

        public constructor(init?: Partial<CodeMashListPaginationRequestBase>) { super(init); (Object as any).assign(this, init); }
    }

    export interface IPasskeyCeremonyRequest
    {
    }

    export class Integration implements IIntegrationIdentification, IHasDomainEntityId
    {
        public viewId?: string;
        public integrationId: IntegrationId;
        public env: Env;
        public capability: string;
        public isSystemOwned: boolean;
        public integrationName: DisplayName;
        public isEnabled: boolean;
        public isConfigured: boolean;
        public lastIntegrationTestAtUtc?: string;
        public lastIntegrationTestSucceeded?: boolean;
        public lastIntegrationTestErrorMessages: IReadOnlyList<string>;
        public humanDeliveryConfirmedAtUtc?: string;
        public isApprovedThatItWorks: boolean;

        public constructor(init?: Partial<Integration>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export enum PushProvider
    {
        AppleApns = 'AppleApns',
        SafariWeb = 'SafariWeb',
        SafariPush = 'SafariPush',
        AndroidFirebase = 'AndroidFirebase',
        ChromeWeb = 'ChromeWeb',
        FirefoxWeb = 'FirefoxWeb',
        EdgeWeb = 'EdgeWeb',
        ChromePush = 'ChromePush',
        CodeMashIosApp = 'CodeMashIosApp',
        CodeMashAndroidApp = 'CodeMashAndroidApp',
        CodeMashSafariPlugin = 'CodeMashSafariPlugin',
        CodeMashSafariWeb = 'CodeMashSafariWeb',
        CodeMashChromePlugin = 'CodeMashChromePlugin',
        CodeMashChromeWeb = 'CodeMashChromeWeb',
        Expo = 'Expo',
        Fake = 'Fake',
    }

    export class PushIntegration extends Integration
    {
        declare provider: PushProvider;

        public constructor(init?: Partial<PushIntegration>) { super(init); (Object as any).assign(this, init); }
    }

    export class TemplateId
    {
        public value: string;

        public constructor(init?: Partial<TemplateId>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class Template<TMessageContent> implements IBindableContract
    {
        // @DataMember
        public templateId: TemplateId;

        // @DataMember
        public templateName: DisplayName;

        // @DataMember
        public translations: MessageTranslation<TMessageContent>[] = [];

        // @DataMember
        public communicationChannel: CommunicationChannel;

        // @DataMember
        public isActive: boolean;

        // @DataMember
        public description?: string;

        // @DataMember
        public tags?: Tag[];

        // @DataMember
        public fileIntegrationId?: IntegrationId;

        // @DataMember
        public env: Env;

        public constructor(init?: Partial<Template<TMessageContent>>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class TemplateCode
    {

        public constructor(init?: Partial<TemplateCode>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class PushTitle
    {
        // @DataMember
        public value: TemplateCode;

        public constructor(init?: Partial<PushTitle>) { (Object as any).assign(this, init); }
    }

    export class PushBody
    {
        public value: TemplateCode;

        public constructor(init?: Partial<PushBody>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class PushMessageContent
    {
        // @DataMember(Order=1)
        public title: PushTitle;

        // @DataMember(Order=1)
        public subTitle?: PushTitle;

        // @DataMember(Order=2)
        public body: PushBody;

        public constructor(init?: Partial<PushMessageContent>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class PushTemplate extends Template<PushMessageContent>
    {

        public constructor(init?: Partial<PushTemplate>) { super(init); (Object as any).assign(this, init); }
    }

    // @DataContract
    export enum CodeMashRelease
    {
        NotSet = 'NotSet',
        Community = 'Community',
        ManagedService = 'ManagedService',
        Enterprise = 'Enterprise',
    }

    export enum CodeMashRuntime
    {
        Development = 'Development',
        CI = 'CI',
        Production = 'Production',
    }

    // @DataContract
    export class CodeMashLicenseFromEndpointDto
    {
        // @DataMember(Name="domain")
        public domain: string;

        // @DataMember(Name="accountId")
        public accountId: string;

        // @DataMember(Name="refCustomerId")
        public refCustomerId: string;

        // @DataMember(Name="refSubscriptionId")
        public refSubscriptionId: string;

        // @DataMember(Name="issued")
        public issued: number;

        // @DataMember(Name="expire")
        public expire: number;

        // @DataMember(Name="cap")
        public cap: number;

        // @DataMember(Name="isTrial")
        public isTrial: boolean;

        // @DataMember(Name="release")
        public release: string;

        public constructor(init?: Partial<CodeMashLicenseFromEndpointDto>) { (Object as any).assign(this, init); }
    }

    export class EchoRegionDto
    {
        public code: string;
        public displayName: string;
        public apiUrl: string;
        public hubUrl: string;

        public constructor(init?: Partial<EchoRegionDto>) { (Object as any).assign(this, init); }
    }

    export class ErrorDto
    {
        public message: string;
        public errorCode?: string;
        public context?: { [index:string]: string; };
        public stackTrace?: ErrorDto[];

        public constructor(init?: Partial<ErrorDto>) { (Object as any).assign(this, init); }
    }

    export class CodeMashResponseStatus
    {
        public isSuccess: boolean;
        public errors?: ErrorDto[];

        public constructor(init?: Partial<CodeMashResponseStatus>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class ResponseBase
    {
        // @DataMember
        public responseStatus: CodeMashResponseStatus;

        public constructor(init?: Partial<ResponseBase>) { (Object as any).assign(this, init); }
    }

    export enum UserType
    {
        Service = 'Service',
        Email = 'Email',
        UserName = 'UserName',
        Phone = 'Phone',
        Guest = 'Guest',
        Social = 'Social',
    }

    export class AccessInformationDto
    {
        public ip?: string;
        public date?: string;
        public timeZone?: string;

        public constructor(init?: Partial<AccessInformationDto>) { (Object as any).assign(this, init); }
    }

    export class RegistrationDto
    {
        public registrationInformation: AccessInformationDto;

        public constructor(init?: Partial<RegistrationDto>) { (Object as any).assign(this, init); }
    }

    export class LoginDto
    {
        public needChangePasswordOnNextLogin: boolean;
        public lastAccessInformation?: AccessInformationDto;

        public constructor(init?: Partial<LoginDto>) { (Object as any).assign(this, init); }
    }

    export enum UserStatus
    {
        Registered = 0,
        PendingValidation = 2,
        Active = 8,
        Unregistered = 16,
        Suspended = 32,
        InActive = 64,
        Blocked = 128,
    }

    export class UserDto implements IBindableContract
    {
        public id: string;
        public type: UserType;
        public email?: string;
        public userName?: string;
        public registration?: RegistrationDto;
        public login?: LoginDto;
        public generalInfo?: UserGeneralInfoDto;
        public roles?: string[];
        public pushDevices?: string[];
        public tags?: string[];
        public status: UserStatus;
        public createdOn: string;
        public modifiedOn: string;

        public constructor(init?: Partial<UserDto>) { (Object as any).assign(this, init); }
    }

    export class PaginatedResponse<TViewModelProjection>
    {
        public items: IList<TViewModelProjection>;
        public hasMore: boolean;
        public hasPrevious: boolean;
        public startingAfter?: string;
        public endingBefore?: string;

        public constructor(init?: Partial<PaginatedResponse<TViewModelProjection>>) { (Object as any).assign(this, init); }
    }

    export class UserMarketingPreferencesDto
    {
        public blockAllMarketingMessages: boolean;
        public blockedTags?: { [index:string]: HashSet<string>; };
        public blockReasons?: MarketingBlockReason[];

        public constructor(init?: Partial<UserMarketingPreferencesDto>) { (Object as any).assign(this, init); }
    }

    export class PasskeyListItemDto
    {
        public credentialId: string;
        public friendlyName: string;
        public registeredOnUtc: string;
        public lastUsedOnUtc: string;
        public isRevoked: boolean;

        public constructor(init?: Partial<PasskeyListItemDto>) { (Object as any).assign(this, init); }
    }

    export class TermMultiParentDto
    {
        // @DataMember
        public taxonomyId: string;

        // @DataMember
        public parentId: string;

        // @DataMember
        public name?: string;

        // @DataMember
        public names?: { [index:string]: string; };

        public constructor(init?: Partial<TermMultiParentDto>) { (Object as any).assign(this, init); }
    }

    export class TermDto
    {
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
        public names?: { [index:string]: string; };

        // @DataMember
        public description?: string;

        // @DataMember
        public descriptions?: { [index:string]: string; };

        // @DataMember
        public multiParents?: TermMultiParentDto[];

        // @DataMember
        public meta?: Object;

        public constructor(init?: Partial<TermDto>) { (Object as any).assign(this, init); }
    }

    export class JsonSchemaFieldDto
    {
        // @DataMember
        public fieldName: string;

        public constructor(init?: Partial<JsonSchemaFieldDto>) { (Object as any).assign(this, init); }
    }

    export class DataSchemaDto
    {
        // @DataMember
        public json: string;

        // @DataMember
        public fields: JsonSchemaFieldDto[] = [];

        public constructor(init?: Partial<DataSchemaDto>) { (Object as any).assign(this, init); }
    }

    export class VisualSchemaDto
    {
        // @DataMember
        public json: string;

        public constructor(init?: Partial<VisualSchemaDto>) { (Object as any).assign(this, init); }
    }

    export class SchemaSettingsDto
    {
        // @DataMember
        public softDelete: boolean;

        // @DataMember
        public hasRecordOwner: boolean;

        public constructor(init?: Partial<SchemaSettingsDto>) { (Object as any).assign(this, init); }
    }

    export enum TriggerType
    {
        Membership = 'Membership',
        Schema = 'Schema',
        Files = 'Files',
        Payments = 'Payments',
    }

    export enum TriggerActionType
    {
        Code = 'Code',
        Push = 'Push',
        Sms = 'Sms',
        Email = 'Email',
        WebhookCall = 'WebhookCall',
    }

    // @DataContract
    export class TriggerActionDto
    {
        // @DataMember
        public type: TriggerActionType;

        // @DataMember
        public integrationId?: string;

        public constructor(init?: Partial<TriggerActionDto>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class TriggerDto implements IHasViewId
    {
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

        public constructor(init?: Partial<TriggerDto>) { (Object as any).assign(this, init); }
    }

    export class SchemaDto implements IHasViewId
    {
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
        public triggers?: TriggerDto[];

        public constructor(init?: Partial<SchemaDto>) { (Object as any).assign(this, init); }
    }

    export class SchemaListProjection implements IHasViewId
    {
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

        public constructor(init?: Partial<SchemaListProjection>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class FileChecksumDto
    {
        // @DataMember(Order=1)
        public algorithm: string;

        // @DataMember(Order=2)
        public hash: string;

        public constructor(init?: Partial<FileChecksumDto>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class FileResourceDto
    {
        // @DataMember(Order=1)
        public id: string;

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

        public constructor(init?: Partial<FileResourceDto>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class FileResourceRefDto
    {
        // @DataMember(Order=1)
        public resource: FileResourceDto;

        // @DataMember(Order=2)
        public integrationId: string;

        // @DataMember(Order=3)
        public provider: FileProvider;

        // @DataMember(Order=4)
        public path: string;

        public constructor(init?: Partial<FileResourceRefDto>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class ResponseError
    {
        // @DataMember(Order=1)
        public errorCode: string;

        // @DataMember(Order=2)
        public fieldName: string;

        // @DataMember(Order=3)
        public message: string;

        // @DataMember(Order=4)
        public meta?: { [index:string]: string; };

        public constructor(init?: Partial<ResponseError>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class ResponseStatus
    {
        // @DataMember(Order=1)
        public errorCode: string;

        // @DataMember(Order=2)
        public message?: string;

        // @DataMember(Order=3)
        public stackTrace?: string;

        // @DataMember(Order=4)
        public errors?: ResponseError[];

        // @DataMember(Order=5)
        public meta?: { [index:string]: string; };

        public constructor(init?: Partial<ResponseStatus>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class UserApiKey
    {
        // @DataMember(Order=1)
        public key?: string;

        // @DataMember(Order=2)
        public keyType?: string;

        // @DataMember(Order=3)
        public expiryDate?: string;

        // @DataMember(Order=4)
        public meta?: { [index:string]: string; };

        public constructor(init?: Partial<UserApiKey>) { (Object as any).assign(this, init); }
    }

    export interface IHasDomainEntityId
    {
        viewId?: string;
    }

    export interface IIntegrationIdentification
    {
        integrationId: IntegrationId;
        capability: string;
        isSystemOwned: boolean;
    }

    export interface IBindableContract
    {
    }

    export interface IHasViewId
    {
        viewId: string;
    }

    export interface ICursorArgs
    {
        field: string;
        order: number;
    }

    export class StringFieldDto extends JsonSchemaFieldDto
    {
        // @DataMember
        public format?: string;

        // @DataMember
        public pattern?: string;

        // @DataMember
        public minLength?: number;

        // @DataMember
        public maxLength?: number;

        // @DataMember
        public translateOptions?: IReadOnlyDictionary<string>;

        public constructor(init?: Partial<StringFieldDto>) { super(init); (Object as any).assign(this, init); }
    }

    export class DecimalFieldDto extends JsonSchemaFieldDto
    {
        // @DataMember
        public minimum?: number;

        // @DataMember
        public maximum?: number;

        // @DataMember
        public multipleOf?: number;

        public constructor(init?: Partial<DecimalFieldDto>) { super(init); (Object as any).assign(this, init); }
    }

    export class CurrencyFieldDto extends JsonSchemaFieldDto
    {
        // @DataMember
        public allowedCurrencies?: IReadOnlyList<string>;

        public constructor(init?: Partial<CurrencyFieldDto>) { super(init); (Object as any).assign(this, init); }
    }

    export class BooleanFieldDto extends JsonSchemaFieldDto
    {

        public constructor(init?: Partial<BooleanFieldDto>) { super(init); (Object as any).assign(this, init); }
    }

    export class DateFieldDto extends JsonSchemaFieldDto
    {
        // @DataMember
        public minimum?: number;

        // @DataMember
        public maximum?: number;

        public constructor(init?: Partial<DateFieldDto>) { super(init); (Object as any).assign(this, init); }
    }

    export class IntegerFieldDto extends JsonSchemaFieldDto
    {
        // @DataMember
        public minimum?: number;

        // @DataMember
        public maximum?: number;

        public constructor(init?: Partial<IntegerFieldDto>) { super(init); (Object as any).assign(this, init); }
    }

    export class GeolocationFieldDto extends JsonSchemaFieldDto
    {
        // @DataMember
        public allowedTypes?: IReadOnlyList<string>;

        public constructor(init?: Partial<GeolocationFieldDto>) { super(init); (Object as any).assign(this, init); }
    }

    export class TagsFieldDto extends JsonSchemaFieldDto
    {

        public constructor(init?: Partial<TagsFieldDto>) { super(init); (Object as any).assign(this, init); }
    }

    export class FileFieldDto extends JsonSchemaFieldDto
    {
        // @DataMember
        public storages?: IReadOnlyList<string>;

        public constructor(init?: Partial<FileFieldDto>) { super(init); (Object as any).assign(this, init); }
    }

    export class TaxonomySelectionFieldDto extends JsonSchemaFieldDto
    {
        // @DataMember
        public taxonomyId?: string;

        // @DataMember
        public multiple: boolean;

        public constructor(init?: Partial<TaxonomySelectionFieldDto>) { super(init); (Object as any).assign(this, init); }
    }

    export class CollectionSelectionFieldDto extends JsonSchemaFieldDto
    {
        // @DataMember
        public collectionId?: string;

        // @DataMember
        public displayField?: string;

        // @DataMember
        public multiple: boolean;

        public constructor(init?: Partial<CollectionSelectionFieldDto>) { super(init); (Object as any).assign(this, init); }
    }

    export class UserSelectionFieldDto extends JsonSchemaFieldDto
    {
        // @DataMember
        public multiple: boolean;

        public constructor(init?: Partial<UserSelectionFieldDto>) { super(init); (Object as any).assign(this, init); }
    }

    export class RoleSelectionFieldDto extends JsonSchemaFieldDto
    {
        // @DataMember
        public multiple: boolean;

        public constructor(init?: Partial<RoleSelectionFieldDto>) { super(init); (Object as any).assign(this, init); }
    }

    export class EnumSelectionFieldDto extends JsonSchemaFieldDto
    {
        // @DataMember
        public values?: IReadOnlyList<string>;

        // @DataMember
        public multiple: boolean;

        public constructor(init?: Partial<EnumSelectionFieldDto>) { super(init); (Object as any).assign(this, init); }
    }

    export class EchoResponse
    {
        public containerName?: string;
        public ip: string;
        public release: CodeMashRelease;
        public runtime: CodeMashRuntime;
        public managedServiceHubUrl: string;
        public managedServiceApiUrl: string;
        public hubUrl: string;
        public apiUrl: string;
        public apiVersion: string;
        public hubVersion: string;
        public mjmlUrl: string;
        public adminUrlTemplate?: string;
        public license?: CodeMashLicenseFromEndpointDto;
        public askForEnterpriseLicenseEmail?: string;
        public regions?: EchoRegionDto[];

        public constructor(init?: Partial<EchoResponse>) { (Object as any).assign(this, init); }
    }

    export class AskChatResponse extends ResponseBase
    {
        public result?: string;

        public constructor(init?: Partial<AskChatResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class EmptyResponse extends ResponseBase
    {

        public constructor(init?: Partial<EmptyResponse>) { super(init); (Object as any).assign(this, init); }
    }

    // @DataContract
    export class IdResponse extends ResponseBase
    {
        // @DataMember
        public id?: string;

        public constructor(init?: Partial<IdResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class GetUserResponse extends ResponseBase
    {
        public user?: UserDto;

        public constructor(init?: Partial<GetUserResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class GetUsersResponse extends ResponseBase
    {
        public list?: PaginatedResponse<UserDto>;

        public constructor(init?: Partial<GetUsersResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class GetUserPreferencesResponse extends ResponseBase
    {
        public preferences?: UserMarketingPreferencesDto;

        public constructor(init?: Partial<GetUserPreferencesResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class PasskeyCeremonyOptionsResponse extends ResponseBase
    {
        public ceremonyId: string;
        public optionsJson: string;

        public constructor(init?: Partial<PasskeyCeremonyOptionsResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class PasskeyAuthTokensResponse extends ResponseBase
    {
        public accessToken: string;
        public refreshToken: string;
        public expiresInSeconds: number;
        public recoveryCodes?: string[];

        public constructor(init?: Partial<PasskeyAuthTokensResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class PasskeyListResponse extends ResponseBase
    {
        public passkeys: PasskeyListItemDto[] = [];

        public constructor(init?: Partial<PasskeyListResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class PasskeyOkResponse extends ResponseBase
    {

        public constructor(init?: Partial<PasskeyOkResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class PasskeyRecoveryResponse extends ResponseBase
    {
        public accessToken: string;
        public refreshToken: string;
        public expiresInSeconds: number;
        public remainingCodes: number;

        public constructor(init?: Partial<PasskeyRecoveryResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class PasskeyVerificationTokenResponse extends ResponseBase
    {
        public verificationToken: string;

        public constructor(init?: Partial<PasskeyVerificationTokenResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class FindTermsResponse extends ResponseBase
    {
        public list?: PaginatedResponse<TermDto>;

        public constructor(init?: Partial<FindTermsResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class FindTermsChildrenResponse extends ResponseBase
    {
        public list?: PaginatedResponse<TermDto>;

        public constructor(init?: Partial<FindTermsChildrenResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class GetDatabaseSchemaResponse extends ResponseBase
    {
        public item?: SchemaDto;

        public constructor(init?: Partial<GetDatabaseSchemaResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class GetDatabaseSchemasResponse extends ResponseBase
    {
        public list?: PaginatedResponse<SchemaListProjection>;

        public constructor(init?: Partial<GetDatabaseSchemasResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class AggregateResponse extends ResponseBase
    {
        public result?: Object[];

        public constructor(init?: Partial<AggregateResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class CountResponse extends ResponseBase
    {
        public count: number;

        public constructor(init?: Partial<CountResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class DistinctResponse extends ResponseBase
    {
        public values?: Object[];

        public constructor(init?: Partial<DistinctResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class ExecuteAggregateResponse extends ResponseBase
    {
        public result?: Object[];

        public constructor(init?: Partial<ExecuteAggregateResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class FindResponse extends ResponseBase
    {
        public list?: PaginatedResponse<Object>;

        public constructor(init?: Partial<FindResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class FindOneResponse extends ResponseBase
    {
        public result?: Object;

        public constructor(init?: Partial<FindOneResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class GetFileInfoResponse extends ResponseBase
    {
        public file?: FileResourceRefDto;
        public isPublic?: boolean;
        public publicUrl?: string;

        public constructor(init?: Partial<GetFileInfoResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class GetSignedUrlResponse extends ResponseBase
    {
        public url?: string;

        public constructor(init?: Partial<GetSignedUrlResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class ListFilesResponse extends ResponseBase
    {
        public list?: PaginatedResponse<FileResourceRefDto>;
        public folders?: string[];

        public constructor(init?: Partial<ListFilesResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class RequestUploadUrlResponse extends ResponseBase
    {
        public url?: string;

        public constructor(init?: Partial<RequestUploadUrlResponse>) { super(init); (Object as any).assign(this, init); }
    }

    // @DataContract
    export class AuthenticateResponse implements IHasSessionId, IHasBearerToken
    {
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
        public meta?: { [index:string]: string; };

        public constructor(init?: Partial<AuthenticateResponse>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class GetAccessTokenResponse
    {
        // @DataMember(Order=1)
        public accessToken?: string;

        // @DataMember(Order=2)
        public meta?: { [index:string]: string; };

        // @DataMember(Order=3)
        public responseStatus?: ResponseStatus;

        public constructor(init?: Partial<GetAccessTokenResponse>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class GetApiKeysResponse
    {
        // @DataMember(Order=1)
        public results?: UserApiKey[];

        // @DataMember(Order=2)
        public meta?: { [index:string]: string; };

        // @DataMember(Order=3)
        public responseStatus?: ResponseStatus;

        public constructor(init?: Partial<GetApiKeysResponse>) { (Object as any).assign(this, init); }
    }

    // @DataContract
    export class RegenerateApiKeysResponse
    {
        // @DataMember(Order=1)
        public results?: UserApiKey[];

        // @DataMember(Order=2)
        public meta?: { [index:string]: string; };

        // @DataMember(Order=3)
        public responseStatus?: ResponseStatus;

        public constructor(init?: Partial<RegenerateApiKeysResponse>) { (Object as any).assign(this, init); }
    }

    // @Route("/{version}/echo", "GET")
    export class Echo extends RequestBase implements IReturn<EchoResponse>
    {

        public constructor(init?: Partial<Echo>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'Echo'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new EchoResponse(); }
    }

    export class AccountCreated
    {
        public email: EmailAddress;
        public displayName: DisplayName;
        public accountId: AccountId;
        public createdOn: UtcDateTime;

        public constructor(init?: Partial<AccountCreated>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'AccountCreated'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class AccountVerified
    {

        public constructor(init?: Partial<AccountVerified>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'AccountVerified'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class AccountSetAsActive
    {

        public constructor(init?: Partial<AccountSetAsActive>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'AccountSetAsActive'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class AccountValidationTokenIssued
    {
        public expiration: ExpirationToken;

        public constructor(init?: Partial<AccountValidationTokenIssued>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'AccountValidationTokenIssued'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class AccountBlocked
    {

        public constructor(init?: Partial<AccountBlocked>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'AccountBlocked'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class AccountProfileUpdated
    {
        public displayName: DisplayName;
        public billingEmail?: EmailAddress;
        public operationsEmail?: EmailAddress;
        public securityEmail?: EmailAddress;

        public constructor(init?: Partial<AccountProfileUpdated>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'AccountProfileUpdated'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class AccountSetAsInactive
    {

        public constructor(init?: Partial<AccountSetAsInactive>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'AccountSetAsInactive'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class AccountUnregistered
    {

        public constructor(init?: Partial<AccountUnregistered>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'AccountUnregistered'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class LicenseCreated
    {
        public license: CodeMashLicense;

        public constructor(init?: Partial<LicenseCreated>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'LicenseCreated'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class CustomerCreated
    {
        public paymentCustomerRef: PaymentCustomerRef;

        public constructor(init?: Partial<CustomerCreated>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'CustomerCreated'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class SubscriptionChanged
    {
        public subscription: CodeMashManagedServiceSubscription;

        public constructor(init?: Partial<SubscriptionChanged>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'SubscriptionChanged'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class SubscriptionCanceled
    {
        public paymentCustomerRef: PaymentCustomerRef;
        public subscriptionId: string;

        public constructor(init?: Partial<SubscriptionCanceled>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'SubscriptionCanceled'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectCommunicationGroupSaved
    {
        public group: GroupDefinition;
        public channel: CommunicationChannel;
        public originChannel?: CommunicationChannel;

        public constructor(init?: Partial<ProjectCommunicationGroupSaved>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectCommunicationGroupSaved'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectCommunicationTagFromGroupDeleted
    {
        public groupTag: Tag;
        public removedTag: Tag;

        public constructor(init?: Partial<ProjectCommunicationTagFromGroupDeleted>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectCommunicationTagFromGroupDeleted'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectCommunicationGroupDeleted
    {
        public groupTag: Tag;

        public constructor(init?: Partial<ProjectCommunicationGroupDeleted>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectCommunicationGroupDeleted'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectCommunicationTagSaved
    {
        public tag: TagDefinition;
        public groupTag?: Tag;
        public channel?: CommunicationChannel;

        public constructor(init?: Partial<ProjectCommunicationTagSaved>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectCommunicationTagSaved'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectCommunicationTagDeleted
    {
        public tag: Tag;

        public constructor(init?: Partial<ProjectCommunicationTagDeleted>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectCommunicationTagDeleted'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectCreated
    {
        public id: ProjectId;
        public name: ProjectName;
        public databaseIntegrationId: IntegrationId;
        public primaryRegion?: ProjectRegion;
        public additionalRegions?: ProjectRegion[];
        public description?: string;
        public isProvisioning: boolean;

        public constructor(init?: Partial<ProjectCreated>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectCreated'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectDeleted
    {

        public constructor(init?: Partial<ProjectDeleted>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectDeleted'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectActivated
    {

        public constructor(init?: Partial<ProjectActivated>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectActivated'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectDisabled
    {

        public constructor(init?: Partial<ProjectDisabled>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectDisabled'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectNameChanged
    {
        public projectName: ProjectName;

        public constructor(init?: Partial<ProjectNameChanged>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectNameChanged'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectDescriptionChanged
    {
        public description?: string;

        public constructor(init?: Partial<ProjectDescriptionChanged>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectDescriptionChanged'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectMarketingUrlChanged
    {
        public url?: DomainUrl;

        public constructor(init?: Partial<ProjectMarketingUrlChanged>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectMarketingUrlChanged'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectAllowedOriginsChanged
    {
        public origins?: DomainUrl[];

        public constructor(init?: Partial<ProjectAllowedOriginsChanged>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectAllowedOriginsChanged'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectDefaultLanguageChanged
    {
        public language: Language;

        public constructor(init?: Partial<ProjectDefaultLanguageChanged>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectDefaultLanguageChanged'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectLanguagesChanged
    {
        public languages: Language[] = [];

        public constructor(init?: Partial<ProjectLanguagesChanged>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectLanguagesChanged'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectLogoChanged
    {
        public logo?: ProjectLogo;

        public constructor(init?: Partial<ProjectLogoChanged>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectLogoChanged'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectIconChanged
    {
        public icon?: ProjectIcon;

        public constructor(init?: Partial<ProjectIconChanged>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectIconChanged'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectMainColorChanged
    {
        public color: BrandColor;

        public constructor(init?: Partial<ProjectMainColorChanged>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectMainColorChanged'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectAccentColorChanged
    {
        public color: BrandColor;

        public constructor(init?: Partial<ProjectAccentColorChanged>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectAccentColorChanged'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectRegionsChanged
    {
        public primaryRegion?: ProjectRegion;
        public additionalRegions?: ProjectRegion[];

        public constructor(init?: Partial<ProjectRegionsChanged>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectRegionsChanged'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectTimeZoneChanged
    {
        public timeZone?: TimeZone;

        public constructor(init?: Partial<ProjectTimeZoneChanged>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectTimeZoneChanged'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectPaymentZonesChanged
    {
        public paymentZones?: TimeZone[];

        public constructor(init?: Partial<ProjectPaymentZonesChanged>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectPaymentZonesChanged'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class ProjectCommunicationSet
    {
        public projectCommunication: ProjectCommunication;

        public constructor(init?: Partial<ProjectCommunicationSet>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'ProjectCommunicationSet'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class AccountUserPushDeviceCreated
    {
        public userId: UserId;
        public pushDevice: PushDevice;

        public constructor(init?: Partial<AccountUserPushDeviceCreated>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'AccountUserPushDeviceCreated'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    /** @description AI */
    // @Route("/{version}/chat/complete", "POST")
    // @Api(Description="AI")
    // @DataContract
    export class AskChatRequest extends CodeMashRequestBase implements IReturn<AskChatResponse>
    {
        // @DataMember
        public prompt: string;

        public constructor(init?: Partial<AskChatRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'AskChatRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new AskChatResponse(); }
    }

    /** @description Membership */
    // @Route("/{version}/membership/users/block", "PATCH")
    // @Api(Description="Membership")
    // @DataContract
    export class BlockUserRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
    {
        // @DataMember
        public id: string;

        // @DataMember
        public databaseIntegrationId?: string;

        public constructor(init?: Partial<BlockUserRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'BlockUserRequest'; }
        public getMethod() { return 'PATCH'; }
        public createResponse() { return new EmptyResponse(); }
    }

    /** @description Membership */
    // @Route("/{version}/membership/users/register/service", "POST")
    // @Api(Description="Membership")
    // @DataContract
    export class SaveSystemUserWithPermissions extends SaveUserWithRolesBase implements IReturn<IdResponse>
    {

        public constructor(init?: Partial<SaveSystemUserWithPermissions>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'SaveSystemUserWithPermissions'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new IdResponse(); }
    }

    /** @description Membership */
    // @Route("/{version}/membership/users/register/guest", "POST")
    // @Api(Description="Membership")
    // @DataContract
    export class SaveGuestUser extends SaveUser implements IReturn<IdResponse>
    {

        public constructor(init?: Partial<SaveGuestUser>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'SaveGuestUser'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new IdResponse(); }
    }

    /** @description Membership */
    // @Route("/{version}/membership/users/register/user-name", "POST")
    // @Api(Description="Membership")
    // @DataContract
    export class SaveUserNameUser extends SaveUser implements IReturn<IdResponse>
    {
        // @DataMember
        public password: string;

        // @DataMember
        public userName: string;

        public constructor(init?: Partial<SaveUserNameUser>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'SaveUserNameUser'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new IdResponse(); }
    }

    /** @description Membership */
    // @Route("/{version}/membership/users/register/email", "POST")
    // @Api(Description="Membership")
    // @DataContract
    export class SaveEmailUser extends SaveUser implements IReturn<IdResponse>
    {
        // @DataMember
        public password: string;

        // @DataMember
        public email: string;

        public constructor(init?: Partial<SaveEmailUser>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'SaveEmailUser'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new IdResponse(); }
    }

    /** @description Membership */
    // @Route("/{version}/membership/users/register/phone", "POST")
    // @Api(Description="Membership")
    // @DataContract
    export class SavePhoneUser extends SaveUser implements IReturn<IdResponse>
    {
        // @DataMember
        public phone: string;

        public constructor(init?: Partial<SavePhoneUser>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'SavePhoneUser'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new IdResponse(); }
    }

    /** @description Membership */
    // @Route("/{version}/membership/users/register/phone-with-permissions", "POST")
    // @Api(Description="Membership")
    // @DataContract
    export class SavePhoneUserNameWithPermissions extends SaveUserWithRolesBase implements IReturn<IdResponse>
    {
        // @DataMember
        public phone: string;

        public constructor(init?: Partial<SavePhoneUserNameWithPermissions>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'SavePhoneUserNameWithPermissions'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new IdResponse(); }
    }

    /** @description Membership */
    // @Route("/{version}/membership/users/register/email-with-permissions", "POST")
    // @Api(Description="Membership")
    // @DataContract
    export class SaveEmailUserNameWithPermissions extends SaveUserWithRolesBase implements IReturn<IdResponse>
    {
        // @DataMember
        public password: string;

        // @DataMember
        public email: string;

        public constructor(init?: Partial<SaveEmailUserNameWithPermissions>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'SaveEmailUserNameWithPermissions'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new IdResponse(); }
    }

    /** @description Membership */
    // @Route("/{version}/membership/users/register/user-name-with-permissions", "POST")
    // @Api(Description="Membership")
    // @DataContract
    export class SaveUserNameWithPermissions extends SaveUserWithRolesBase implements IReturn<IdResponse>
    {
        // @DataMember
        public password: string;

        // @DataMember
        public userName: string;

        public constructor(init?: Partial<SaveUserNameWithPermissions>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'SaveUserNameWithPermissions'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new IdResponse(); }
    }

    /** @description Membership */
    // @Route("/{version}/membership/users", "DELETE")
    // @Api(Description="Membership")
    // @DataContract
    export class DeleteUserRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
    {
        // @DataMember
        public id: string;

        // @DataMember
        public databaseIntegrationId?: string;

        public constructor(init?: Partial<DeleteUserRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'DeleteUserRequest'; }
        public getMethod() { return 'DELETE'; }
        public createResponse() { return new EmptyResponse(); }
    }

    /** @description Membership */
    // @Route("/{version}/membership/users/{id}", "GET")
    // @Api(Description="Membership")
    // @DataContract
    export class GetUserRequest extends CodeMashRequestBase implements IReturn<GetUserResponse>
    {
        // @DataMember
        public id: string;

        // @DataMember
        public databaseIntegrationId?: string;

        public constructor(init?: Partial<GetUserRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'GetUserRequest'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new GetUserResponse(); }
    }

    /** @description Membership */
    // @Route("/{version}/membership/users", "GET")
    // @Api(Description="Membership")
    // @DataContract
    export class GetUsersRequest extends CodeMashListPaginationRequestBase implements IReturn<GetUsersResponse>
    {
        // @DataMember
        public databaseIntegrationId?: string;

        // @DataMember
        public includePermissions: boolean;

        // @DataMember
        public userShouldHavePushDevice: boolean;

        // @DataMember
        public userShouldHaveEmail: boolean;

        // @DataMember
        public includeMeta: boolean;

        // @DataMember
        public roleNames?: string[];

        // @DataMember
        public userIds?: string[];

        public constructor(init?: Partial<GetUsersRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'GetUsersRequest'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new GetUsersResponse(); }
    }

    /** @description Membership */
    // @Route("/{version}/membership/users/{id}/preferences", "GET")
    // @Api(Description="Membership")
    // @DataContract
    export class GetUserPreferencesRequest extends CodeMashRequestBase implements IReturn<GetUserPreferencesResponse>
    {
        // @DataMember
        public id: string;

        // @DataMember
        public databaseIntegrationId?: string;

        public constructor(init?: Partial<GetUserPreferencesRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'GetUserPreferencesRequest'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new GetUserPreferencesResponse(); }
    }

    /** @description Membership */
    // @Route("/{version}/membership/users/invite", "POST")
    // @Api(Description="Membership")
    // @DataContract
    export class InviteUserRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
    {
        // @DataMember
        public email: string;

        // @DataMember
        public databaseIntegrationId?: string;

        public constructor(init?: Partial<InviteUserRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'InviteUserRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new EmptyResponse(); }
    }

    /** @description Membership */
    // @Route("/{version}/membership/users/{userId}/link-identity", "POST")
    // @Api(Description="Membership")
    // @DataContract
    export class LinkIdentityRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
    {
        // @DataMember
        public userId: string;

        // @DataMember
        declare provider: string;

        // @DataMember
        public providerToken: string;

        // @DataMember
        public emailToVerify?: string;

        // @DataMember
        public databaseIntegrationId: string;

        public constructor(init?: Partial<LinkIdentityRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'LinkIdentityRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new EmptyResponse(); }
    }

    /** @description Membership */
    // @Route("/{version}/membership/users/assign-roles", "PUT")
    // @Api(Description="Membership")
    // @DataContract
    export class AssignRolePermissionsRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
    {
        // @DataMember
        public id: string;

        /** @description Database integration id. Optional — defaults to the request environment's default integration. */
        // @DataMember
        // @ApiMember(Description="Database integration id. Optional — defaults to the request environment's default integration.")
        public databaseIntegrationId?: string;

        // @DataMember
        public roles?: string[];

        public constructor(init?: Partial<AssignRolePermissionsRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'AssignRolePermissionsRequest'; }
        public getMethod() { return 'PUT'; }
        public createResponse() { return new EmptyResponse(); }
    }

    /** @description Membership */
    // @Route("/{version}/membership/users/unblock", "PATCH")
    // @Api(Description="Membership")
    // @DataContract
    export class UnblockUserRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
    {
        // @DataMember
        public id: string;

        // @DataMember
        public databaseIntegrationId?: string;

        public constructor(init?: Partial<UnblockUserRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'UnblockUserRequest'; }
        public getMethod() { return 'PATCH'; }
        public createResponse() { return new EmptyResponse(); }
    }

    /** @description Membership */
    // @Route("/{version}/membership/users", "PUT")
    // @Api(Description="Membership")
    // @DataContract
    export class UpdateUserRequest extends SaveUser implements IReturn<IdResponse>
    {
        // @DataMember
        public id: string;

        public constructor(init?: Partial<UpdateUserRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'UpdateUserRequest'; }
        public getMethod() { return 'PUT'; }
        public createResponse() { return new IdResponse(); }
    }

    /** @description Membership */
    // @Route("/{version}/membership/users/{id}/preferences", "PUT")
    // @Api(Description="Membership")
    // @DataContract
    export class UpdateUserPreferencesRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
    {
        // @DataMember
        public id: string;

        // @DataMember
        public blockAllMarketingMessages: boolean;

        // @DataMember
        public blockedTags?: { [index:string]: HashSet<string>; };

        // @DataMember
        public databaseIntegrationId?: string;

        public constructor(init?: Partial<UpdateUserPreferencesRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'UpdateUserPreferencesRequest'; }
        public getMethod() { return 'PUT'; }
        public createResponse() { return new EmptyResponse(); }
    }

    /** @description Membership · Passkey */
    // @Route("/{version}/membership/userauth/passkey/authentication-options", "POST")
    // @Api(Description="Membership · Passkey")
    // @DataContract
    export class PasskeyAuthenticationOptionsRequest extends CodeMashRequestBase implements IReturn<PasskeyCeremonyOptionsResponse>, IPasskeyCeremonyRequest
    {
        // @DataMember
        public email: string;

        public constructor(init?: Partial<PasskeyAuthenticationOptionsRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'PasskeyAuthenticationOptionsRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new PasskeyCeremonyOptionsResponse(); }
    }

    /** @description Membership · Passkey */
    // @Route("/{version}/membership/userauth/passkey/verify-authentication", "POST")
    // @Api(Description="Membership · Passkey")
    // @DataContract
    export class VerifyPasskeyAuthenticationRequest extends CodeMashRequestBase implements IReturn<PasskeyAuthTokensResponse>, IPasskeyCeremonyRequest
    {
        // @DataMember
        public ceremonyId: string;

        // @DataMember
        public assertionResponse: string;

        public constructor(init?: Partial<VerifyPasskeyAuthenticationRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'VerifyPasskeyAuthenticationRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new PasskeyAuthTokensResponse(); }
    }

    /** @description Membership · Passkey */
    // @Route("/{version}/membership/userauth/passkeys", "GET")
    // @Api(Description="Membership · Passkey")
    // @DataContract
    export class ListPasskeysRequest extends CodeMashRequestBase implements IReturn<PasskeyListResponse>
    {

        public constructor(init?: Partial<ListPasskeysRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'ListPasskeysRequest'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new PasskeyListResponse(); }
    }

    /** @description Membership · Passkey */
    // @Route("/{version}/membership/userauth/passkeys/{CredentialId}/rename", "POST")
    // @Api(Description="Membership · Passkey")
    // @DataContract
    export class RenamePasskeyRequest extends CodeMashRequestBase implements IReturn<PasskeyOkResponse>
    {
        // @DataMember
        public credentialId: string;

        // @DataMember
        public friendlyName: string;

        public constructor(init?: Partial<RenamePasskeyRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'RenamePasskeyRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new PasskeyOkResponse(); }
    }

    /** @description Membership · Passkey */
    // @Route("/{version}/membership/userauth/passkeys/{CredentialId}/revoke", "POST")
    // @Api(Description="Membership · Passkey")
    // @DataContract
    export class RevokePasskeyRequest extends CodeMashRequestBase implements IReturn<PasskeyOkResponse>
    {
        // @DataMember
        public credentialId: string;

        public constructor(init?: Partial<RevokePasskeyRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'RevokePasskeyRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new PasskeyOkResponse(); }
    }

    /** @description Membership · Passkey */
    // @Route("/{version}/membership/userauth/recovery/use-code", "POST")
    // @Api(Description="Membership · Passkey")
    // @DataContract
    export class UseRecoveryCodeRequest extends CodeMashRequestBase implements IReturn<PasskeyRecoveryResponse>
    {
        // @DataMember
        public email: string;

        // @DataMember
        public recoveryCode: string;

        public constructor(init?: Partial<UseRecoveryCodeRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'UseRecoveryCodeRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new PasskeyRecoveryResponse(); }
    }

    /** @description Membership · Passkey */
    // @Route("/{version}/membership/userauth/recovery/magic-link/request", "POST")
    // @Api(Description="Membership · Passkey")
    // @DataContract
    export class RequestMagicLinkRequest extends CodeMashRequestBase implements IReturn<PasskeyOkResponse>
    {
        // @DataMember
        public email: string;

        public constructor(init?: Partial<RequestMagicLinkRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'RequestMagicLinkRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new PasskeyOkResponse(); }
    }

    /** @description Membership · Passkey */
    // @Route("/{version}/membership/userauth/recovery/magic-link/consume", "POST")
    // @Api(Description="Membership · Passkey")
    // @DataContract
    export class ConsumeMagicLinkRequest extends CodeMashRequestBase implements IReturn<PasskeyRecoveryResponse>
    {
        // @DataMember
        public token: string;

        public constructor(init?: Partial<ConsumeMagicLinkRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'ConsumeMagicLinkRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new PasskeyRecoveryResponse(); }
    }

    /** @description Membership · Passkey */
    // @Route("/{version}/membership/userauth/has-passkey", "POST")
    // @Api(Description="Membership · Passkey")
    // @DataContract
    export class HasPasskeyRequest extends CodeMashRequestBase implements IReturn<PasskeyOkResponse>
    {
        // @DataMember
        public email: string;

        public constructor(init?: Partial<HasPasskeyRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'HasPasskeyRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new PasskeyOkResponse(); }
    }

    /** @description Membership · Passkey */
    // @Route("/{version}/membership/userauth/email/start-verification", "POST")
    // @Api(Description="Membership · Passkey")
    // @DataContract
    export class StartEmailVerificationRequest extends CodeMashRequestBase implements IReturn<PasskeyOkResponse>
    {
        // @DataMember
        public email: string;

        public constructor(init?: Partial<StartEmailVerificationRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'StartEmailVerificationRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new PasskeyOkResponse(); }
    }

    /** @description Membership · Passkey */
    // @Route("/{version}/membership/userauth/email/confirm-verification", "POST")
    // @Api(Description="Membership · Passkey")
    // @DataContract
    export class ConfirmEmailVerificationRequest extends CodeMashRequestBase implements IReturn<PasskeyVerificationTokenResponse>
    {
        // @DataMember
        public email: string;

        // @DataMember
        public code: string;

        public constructor(init?: Partial<ConfirmEmailVerificationRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'ConfirmEmailVerificationRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new PasskeyVerificationTokenResponse(); }
    }

    /** @description Membership · Passkey */
    // @Route("/{version}/membership/userauth/passkey/registration-options", "POST")
    // @Api(Description="Membership · Passkey")
    // @DataContract
    export class PasskeyRegistrationOptionsRequest extends CodeMashRequestBase implements IReturn<PasskeyCeremonyOptionsResponse>, IPasskeyCeremonyRequest
    {
        // @DataMember
        public verificationToken: string;

        public constructor(init?: Partial<PasskeyRegistrationOptionsRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'PasskeyRegistrationOptionsRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new PasskeyCeremonyOptionsResponse(); }
    }

    /** @description Membership · Passkey */
    // @Route("/{version}/membership/userauth/passkey/verify-registration", "POST")
    // @Api(Description="Membership · Passkey")
    // @DataContract
    export class VerifyPasskeyRegistrationRequest extends CodeMashRequestBase implements IReturn<PasskeyAuthTokensResponse>, IPasskeyCeremonyRequest
    {
        // @DataMember
        public verificationToken: string;

        // @DataMember
        public ceremonyId: string;

        // @DataMember
        public attestationResponse: string;

        // @DataMember
        public friendlyName?: string;

        public constructor(init?: Partial<VerifyPasskeyRegistrationRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'VerifyPasskeyRegistrationRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new PasskeyAuthTokensResponse(); }
    }

    /** @description Membership · Passkey */
    // @Route("/{version}/membership/userauth/token/refresh", "POST")
    // @Api(Description="Membership · Passkey")
    // @DataContract
    export class RefreshPasskeyTokenRequest extends CodeMashRequestBase implements IReturn<PasskeyAuthTokensResponse>
    {
        // @DataMember
        public refreshToken?: string;

        public constructor(init?: Partial<RefreshPasskeyTokenRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'RefreshPasskeyTokenRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new PasskeyAuthTokensResponse(); }
    }

    /** @description Membership · Passkey */
    // @Route("/{version}/membership/userauth/logout", "POST")
    // @Api(Description="Membership · Passkey")
    // @DataContract
    export class PasskeyLogoutRequest extends CodeMashRequestBase implements IReturn<PasskeyOkResponse>
    {
        // @DataMember
        public refreshToken?: string;

        public constructor(init?: Partial<PasskeyLogoutRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'PasskeyLogoutRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new PasskeyOkResponse(); }
    }

    /** @description Database */
    // @Route("/{version}/database/taxonomies/{taxonomyName}/terms", "GET")
    // @Api(Description="Database")
    // @DataContract
    export class FindTermsRequest extends CodeMashListPaginationRequestBase implements IReturn<FindTermsResponse>
    {
        // @DataMember
        public taxonomyName: string;

        // @DataMember
        public databaseIntegrationId: string;

        // @DataMember
        public filter?: string;

        // @DataMember
        public pagingArgs?: PagingArgs;

        public constructor(init?: Partial<FindTermsRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'FindTermsRequest'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new FindTermsResponse(); }
    }

    /** @description Database */
    // @Route("/{version}/database/taxonomies/{taxonomyName}/terms/{parentId}/children", "GET")
    // @Api(Description="Database")
    // @DataContract
    export class FindTermsChildrenRequest extends CodeMashListPaginationRequestBase implements IReturn<FindTermsChildrenResponse>
    {
        // @DataMember
        public taxonomyName: string;

        // @DataMember
        public parentId: string;

        // @DataMember
        public databaseIntegrationId: string;

        // @DataMember
        public filter?: string;

        // @DataMember
        public pagingArgs?: PagingArgs;

        public constructor(init?: Partial<FindTermsChildrenRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'FindTermsChildrenRequest'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new FindTermsChildrenResponse(); }
    }

    /** @description Database */
    // @Route("/{version}/database/schemas/{id}", "GET")
    // @Api(Description="Database")
    // @DataContract
    export class GetDatabaseSchemaRequest extends CodeMashRequestBase implements IReturn<GetDatabaseSchemaResponse>
    {
        // @DataMember
        public id: string;

        public constructor(init?: Partial<GetDatabaseSchemaRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'GetDatabaseSchemaRequest'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new GetDatabaseSchemaResponse(); }
    }

    /** @description Database */
    // @Route("/{version}/database/schemas", "GET")
    // @Api(Description="Database")
    // @DataContract
    export class GetDatabaseSchemasRequest extends CodeMashListPaginationRequestBase implements IReturn<GetDatabaseSchemasResponse>
    {
        // @DataMember
        public pagingArgs?: PagingArgs;

        public constructor(init?: Partial<GetDatabaseSchemasRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'GetDatabaseSchemasRequest'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new GetDatabaseSchemasResponse(); }
    }

    /** @description Database */
    // @Route("/{version}/database/collections/{collectionName}/aggregate", "POST")
    // @Api(Description="Database")
    // @DataContract
    export class AggregateRequest extends CodeMashRequestBase implements IReturn<AggregateResponse>
    {
        // @DataMember
        public collectionName: string;

        // @DataMember
        public databaseIntegrationId: string;

        // @DataMember
        public pipeline: string;

        public constructor(init?: Partial<AggregateRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'AggregateRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new AggregateResponse(); }
    }

    /** @description Database */
    // @Route("/{version}/database/collections/{collectionName}/{id}/responsibility", "PUT")
    // @Api(Description="Database")
    // @DataContract
    export class ChangeResponsibilityRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
    {
        // @DataMember
        public collectionName: string;

        // @DataMember
        public id: string;

        // @DataMember
        public databaseIntegrationId: string;

        // @DataMember
        public newResponsibleUserId: string;

        public constructor(init?: Partial<ChangeResponsibilityRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'ChangeResponsibilityRequest'; }
        public getMethod() { return 'PUT'; }
        public createResponse() { return new EmptyResponse(); }
    }

    /** @description Database */
    // @Route("/{version}/database/collections/{collectionName}/count", "GET")
    // @Api(Description="Database")
    // @DataContract
    export class CountRequest extends CodeMashRequestBase implements IReturn<CountResponse>
    {
        // @DataMember
        public collectionName: string;

        // @DataMember
        public databaseIntegrationId: string;

        // @DataMember
        public filter?: string;

        // @DataMember
        public schemaVersion?: number;

        public constructor(init?: Partial<CountRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'CountRequest'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new CountResponse(); }
    }

    /** @description Database */
    // @Route("/{version}/database/collections/{collectionName}/many", "DELETE")
    // @Api(Description="Database")
    // @DataContract
    export class DeleteManyRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
    {
        // @DataMember
        public collectionName: string;

        // @DataMember
        public databaseIntegrationId: string;

        // @DataMember
        public filter: string;

        public constructor(init?: Partial<DeleteManyRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'DeleteManyRequest'; }
        public getMethod() { return 'DELETE'; }
        public createResponse() { return new EmptyResponse(); }
    }

    /** @description Database */
    // @Route("/{version}/database/collections/{collectionName}/{id}", "DELETE")
    // @Api(Description="Database")
    // @DataContract
    export class DeleteOneRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
    {
        // @DataMember
        public collectionName: string;

        // @DataMember
        public id: string;

        // @DataMember
        public databaseIntegrationId: string;

        public constructor(init?: Partial<DeleteOneRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'DeleteOneRequest'; }
        public getMethod() { return 'DELETE'; }
        public createResponse() { return new EmptyResponse(); }
    }

    /** @description Database */
    // @Route("/{version}/database/collections/{collectionName}/distinct", "GET")
    // @Api(Description="Database")
    // @DataContract
    export class DistinctRequest extends CodeMashRequestBase implements IReturn<DistinctResponse>
    {
        // @DataMember
        public collectionName: string;

        // @DataMember
        public databaseIntegrationId: string;

        // @DataMember
        public field: string;

        // @DataMember
        public filter?: string;

        // @DataMember
        public schemaVersion?: number;

        public constructor(init?: Partial<DistinctRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'DistinctRequest'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new DistinctResponse(); }
    }

    /** @description Database */
    // @Route("/{version}/database/collections/{collectionName}/aggregates/{aggregateId}/execute", "POST")
    // @Api(Description="Database")
    // @DataContract
    export class ExecuteAggregateRequest extends CodeMashRequestBase implements IReturn<ExecuteAggregateResponse>
    {
        // @DataMember
        public collectionName: string;

        // @DataMember
        public aggregateId: string;

        // @DataMember
        public databaseIntegrationId: string;

        // @DataMember
        public tokens?: { [index:string]: string; };

        public constructor(init?: Partial<ExecuteAggregateRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'ExecuteAggregateRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new ExecuteAggregateResponse(); }
    }

    /** @description Database */
    // @Route("/{version}/database/collections/{collectionName}", "GET")
    // @Api(Description="Database")
    // @DataContract
    export class FindRequest extends CodeMashListPaginationRequestBase implements IReturn<FindResponse>
    {
        // @DataMember
        public collectionName: string;

        // @DataMember
        public databaseIntegrationId: string;

        // @DataMember
        public filter?: string;

        // @DataMember
        public schemaVersion?: number;

        // @DataMember
        public pagingArgs?: PagingArgs;

        public constructor(init?: Partial<FindRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'FindRequest'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new FindResponse(); }
    }

    /** @description Database */
    // @Route("/{version}/database/collections/{collectionName}/{id}", "GET")
    // @Api(Description="Database")
    // @DataContract
    export class FindOneRequest extends CodeMashRequestBase implements IReturn<FindOneResponse>
    {
        // @DataMember
        public collectionName: string;

        // @DataMember
        public id: string;

        // @DataMember
        public databaseIntegrationId: string;

        public constructor(init?: Partial<FindOneRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'FindOneRequest'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new FindOneResponse(); }
    }

    /** @description Database */
    // @Route("/{version}/database/collections/{collectionName}/own", "GET")
    // @Api(Description="Database")
    // @DataContract
    export class FindOwnRequest extends CodeMashListPaginationRequestBase implements IReturn<FindResponse>
    {
        // @DataMember
        public collectionName: string;

        // @DataMember
        public databaseIntegrationId: string;

        // @DataMember
        public filter?: string;

        // @DataMember
        public schemaVersion?: number;

        // @DataMember
        public pagingArgs?: PagingArgs;

        public constructor(init?: Partial<FindOwnRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'FindOwnRequest'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new FindResponse(); }
    }

    /** @description Database */
    // @Route("/{version}/database/collections/{collectionName}/many", "POST")
    // @Api(Description="Database")
    // @DataContract
    export class InsertManyRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
    {
        // @DataMember
        public collectionName: string;

        // @DataMember
        public databaseIntegrationId: string;

        // @DataMember
        public documents: string;

        public constructor(init?: Partial<InsertManyRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'InsertManyRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new EmptyResponse(); }
    }

    /** @description Database */
    // @Route("/{version}/database/collections/{collectionName}", "POST")
    // @Api(Description="Database")
    // @DataContract
    export class InsertOneRequest extends CodeMashRequestBase implements IReturn<IdResponse>
    {
        // @DataMember
        public collectionName: string;

        // @DataMember
        public databaseIntegrationId: string;

        // @DataMember
        public document: string;

        public constructor(init?: Partial<InsertOneRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'InsertOneRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new IdResponse(); }
    }

    /** @description Database */
    // @Route("/{version}/database/collections/{collectionName}/{id}/replace", "PUT")
    // @Api(Description="Database")
    // @DataContract
    export class ReplaceOneRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
    {
        // @DataMember
        public collectionName: string;

        // @DataMember
        public id: string;

        // @DataMember
        public databaseIntegrationId: string;

        // @DataMember
        public replacement: string;

        public constructor(init?: Partial<ReplaceOneRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'ReplaceOneRequest'; }
        public getMethod() { return 'PUT'; }
        public createResponse() { return new EmptyResponse(); }
    }

    /** @description Database */
    // @Route("/{version}/database/collections/{collectionName}/many", "PUT")
    // @Api(Description="Database")
    // @DataContract
    export class UpdateManyRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
    {
        // @DataMember
        public collectionName: string;

        // @DataMember
        public databaseIntegrationId: string;

        // @DataMember
        public filter: string;

        // @DataMember
        public update: string;

        public constructor(init?: Partial<UpdateManyRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'UpdateManyRequest'; }
        public getMethod() { return 'PUT'; }
        public createResponse() { return new EmptyResponse(); }
    }

    /** @description Database */
    // @Route("/{version}/database/collections/{collectionName}/{id}", "PUT")
    // @Api(Description="Database")
    // @DataContract
    export class UpdateOneRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
    {
        // @DataMember
        public collectionName: string;

        // @DataMember
        public id: string;

        // @DataMember
        public databaseIntegrationId: string;

        // @DataMember
        public update: string;

        public constructor(init?: Partial<UpdateOneRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'UpdateOneRequest'; }
        public getMethod() { return 'PUT'; }
        public createResponse() { return new EmptyResponse(); }
    }

    /** @description Files */
    // @Route("/{version}/files/{filesIntegrationId}/commit", "POST")
    // @Api(Description="Files")
    // @DataContract
    export class CommitUploadRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
    {
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

        public constructor(init?: Partial<CommitUploadRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'CommitUploadRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new EmptyResponse(); }
    }

    /** @description Files */
    // @Route("/{version}/files/{filesIntegrationId}", "DELETE")
    // @Api(Description="Files")
    // @DataContract
    export class DeleteFileApiRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
    {
        // @DataMember
        public filesIntegrationId: string;

        // @DataMember
        public path: string;

        public constructor(init?: Partial<DeleteFileApiRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'DeleteFileApiRequest'; }
        public getMethod() { return 'DELETE'; }
        public createResponse() { return new EmptyResponse(); }
    }

    /** @description Files */
    // @Route("/{version}/files/{filesIntegrationId}/bulk", "DELETE")
    // @Api(Description="Files")
    // @DataContract
    export class DeleteManyFilesApiRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
    {
        // @DataMember
        public filesIntegrationId: string;

        // @DataMember(Name="paths[]")
        public paths__: string[] = [];

        public constructor(init?: Partial<DeleteManyFilesApiRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'DeleteManyFilesApiRequest'; }
        public getMethod() { return 'DELETE'; }
        public createResponse() { return new EmptyResponse(); }
    }

    /** @description Files */
    // @Route("/{version}/files/{filesIntegrationId}/download", "GET")
    // @Api(Description="Files")
    // @DataContract
    export class DownloadFileApiRequest extends CodeMashRequestBase implements IReturn<Blob>
    {
        // @DataMember
        public filesIntegrationId: string;

        // @DataMember
        public path: string;

        public constructor(init?: Partial<DownloadFileApiRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'DownloadFileApiRequest'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new Blob(); }
    }

    /** @description Files */
    // @Route("/{version}/files/{filesIntegrationId}/info", "GET")
    // @Api(Description="Files")
    // @DataContract
    export class GetFileInfoRequest extends CodeMashRequestBase implements IReturn<GetFileInfoResponse>
    {
        // @DataMember
        public filesIntegrationId: string;

        // @DataMember
        public path: string;

        public constructor(init?: Partial<GetFileInfoRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'GetFileInfoRequest'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new GetFileInfoResponse(); }
    }

    /** @description Files */
    // @Route("/{version}/files/{filesIntegrationId}/sign", "GET")
    // @Api(Description="Files")
    // @DataContract
    export class GetSignedUrlRequest extends CodeMashRequestBase implements IReturn<GetSignedUrlResponse>
    {
        // @DataMember
        public filesIntegrationId: string;

        // @DataMember
        public path: string;

        // @DataMember
        public expirationSeconds?: number;

        public constructor(init?: Partial<GetSignedUrlRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'GetSignedUrlRequest'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new GetSignedUrlResponse(); }
    }

    /** @description Files */
    // @Route("/{version}/files/{filesIntegrationId}", "GET")
    // @Api(Description="Files")
    // @DataContract
    export class ListFilesRequest extends CodeMashListPaginationRequestBase implements IReturn<ListFilesResponse>
    {
        // @DataMember
        public filesIntegrationId: string;

        // @DataMember
        public path?: string;

        public constructor(init?: Partial<ListFilesRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'ListFilesRequest'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new ListFilesResponse(); }
    }

    /** @description Files */
    // @Route("/{version}/files/{filesIntegrationId}/upload-url", "POST")
    // @Api(Description="Files")
    // @DataContract
    export class RequestUploadUrlRequest extends CodeMashRequestBase implements IReturn<RequestUploadUrlResponse>
    {
        // @DataMember
        public filesIntegrationId: string;

        // @DataMember
        public path: string;

        // @DataMember
        public contentType: string;

        // @DataMember
        public expirationSeconds?: number;

        public constructor(init?: Partial<RequestUploadUrlRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'RequestUploadUrlRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new RequestUploadUrlResponse(); }
    }

    export class PushIntegrationSaved
    {
        public integration: PushIntegration;

        public constructor(init?: Partial<PushIntegrationSaved>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'PushIntegrationSaved'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class PushIntegrationRenamed
    {
        public id: IntegrationId;
        public name: DisplayName;
        public env?: Env;

        public constructor(init?: Partial<PushIntegrationRenamed>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'PushIntegrationRenamed'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class PushIntegrationSetAsDefault
    {
        public env: Env;
        public id: IntegrationId;

        public constructor(init?: Partial<PushIntegrationSetAsDefault>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'PushIntegrationSetAsDefault'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class PushIntegrationDeleted
    {
        public id: IntegrationId;
        public env?: Env;

        public constructor(init?: Partial<PushIntegrationDeleted>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'PushIntegrationDeleted'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class PushIntegrationEnabled
    {
        public id: IntegrationId;
        public env?: Env;

        public constructor(init?: Partial<PushIntegrationEnabled>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'PushIntegrationEnabled'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class PushIntegrationDisabled
    {
        public id: IntegrationId;
        public env?: Env;

        public constructor(init?: Partial<PushIntegrationDisabled>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'PushIntegrationDisabled'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class PushServiceEstablished
    {
        public defaultTemplates?: PushTemplate[];

        public constructor(init?: Partial<PushServiceEstablished>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'PushServiceEstablished'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class PushServiceEnabled
    {

        public constructor(init?: Partial<PushServiceEnabled>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'PushServiceEnabled'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class PushServiceDisabled
    {

        public constructor(init?: Partial<PushServiceDisabled>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'PushServiceDisabled'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class PushTemplateCreated
    {
        public templateId: TemplateId;
        public displayName: DisplayName;
        public translations: MessageTranslation<PushMessageContent>[] = [];
        public channel: CommunicationChannel;
        public description?: string;
        public tags?: Tag[];
        public env?: Env;

        public constructor(init?: Partial<PushTemplateCreated>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'PushTemplateCreated'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class PushTemplateUpdated
    {
        public templateId: TemplateId;
        public displayName: DisplayName;
        public translations: MessageTranslation<PushMessageContent>[] = [];
        public channel: CommunicationChannel;
        public description?: string;
        public tags?: Tag[];
        public env?: Env;

        public constructor(init?: Partial<PushTemplateUpdated>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'PushTemplateUpdated'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class PushTemplateDeleted
    {
        public templateId: TemplateId;
        public env?: Env;

        public constructor(init?: Partial<PushTemplateDeleted>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'PushTemplateDeleted'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class PushTemplateArchived
    {
        public templateId: TemplateId;
        public env?: Env;

        public constructor(init?: Partial<PushTemplateArchived>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'PushTemplateArchived'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class PushTemplateUnArchived
    {
        public templateId: TemplateId;
        public env?: Env;

        public constructor(init?: Partial<PushTemplateUnArchived>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'PushTemplateUnArchived'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    export class PushTemplateMirrored
    {
        public template: PushTemplate;

        public constructor(init?: Partial<PushTemplateMirrored>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'PushTemplateMirrored'; }
        public getMethod() { return 'POST'; }
        public createResponse() {}
    }

    /** @description Sign In */
    // @Route("/auth", "GET,POST")
    // @Route("/auth/{provider}", "GET,POST")
    // @Route("/v3/auth", "POST,GET,OPTIONS")
    // @Route("/v3/auth/{provider}", "POST,GET,OPTIONS")
    // @Api(Description="Sign In")
    // @DataContract
    export class Authenticate implements IReturn<AuthenticateResponse>, IPost
    {
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
        public meta?: { [index:string]: string; };

        public constructor(init?: Partial<Authenticate>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'Authenticate'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new AuthenticateResponse(); }
    }

    // @Route("/access-token")
    // @DataContract
    export class GetAccessToken implements IReturn<GetAccessTokenResponse>, IPost
    {
        // @DataMember(Order=1)
        public refreshToken?: string;

        // @DataMember(Order=2)
        public meta?: { [index:string]: string; };

        public constructor(init?: Partial<GetAccessToken>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'GetAccessToken'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new GetAccessTokenResponse(); }
    }

    // @Route("/apikeys")
    // @Route("/apikeys/{Environment}")
    // @DataContract
    export class GetApiKeys implements IReturn<GetApiKeysResponse>, IGet
    {
        // @DataMember(Order=1)
        public environment?: string;

        // @DataMember(Order=2)
        public meta?: { [index:string]: string; };

        public constructor(init?: Partial<GetApiKeys>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'GetApiKeys'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new GetApiKeysResponse(); }
    }

    // @Route("/apikeys/regenerate")
    // @Route("/apikeys/regenerate/{Environment}")
    // @DataContract
    export class RegenerateApiKeys implements IReturn<RegenerateApiKeysResponse>, IPost
    {
        // @DataMember(Order=1)
        public environment?: string;

        // @DataMember(Order=2)
        public meta?: { [index:string]: string; };

        public constructor(init?: Partial<RegenerateApiKeys>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'RegenerateApiKeys'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new RegenerateApiKeysResponse(); }
    }


    // ---- Admin Portal public endpoints (synced from API /metadata) ----

    export class PublicBrandDto
    {
        public displayName: string;
        public mainColor?: string;
        public accentColor?: string;
        public logoUrl?: string;
        public iconUrl?: string;

        public constructor(init?: Partial<PublicBrandDto>) { (Object as any).assign(this, init); }
    }

    export class PublicPasswordPolicyDto
    {
        public minLength: number;
        public maxLength?: number;
        public minNumbers?: number;
        public minUpper?: number;
        public minLower?: number;
        public minSpecial?: number;
        public allowedSpecial?: string;

        public constructor(init?: Partial<PublicPasswordPolicyDto>) { (Object as any).assign(this, init); }
    }

    export class PublicAuthDto
    {
        public socialProviders: string[] = [];
        public passkey: boolean;
        public methods?: string[];
        public passwordPolicy?: PublicPasswordPolicyDto;

        public constructor(init?: Partial<PublicAuthDto>) { (Object as any).assign(this, init); }
    }

    export class PublicProjectConfigDto
    {
        public displayName: string = '';
        public branding?: PublicBrandDto;
        public auth: PublicAuthDto;

        public constructor(init?: Partial<PublicProjectConfigDto>) { (Object as any).assign(this, init); }
    }

    export class PublicLegalDocumentDto
    {
        public kind: string;
        public title?: string;
        public body: string;
        public available: boolean;

        public constructor(init?: Partial<PublicLegalDocumentDto>) { (Object as any).assign(this, init); }
    }

    // @Route("/{version}/public/projects/{ProjectId}/config", "GET")
    export class GetPublicProjectConfig extends RequestBase implements IReturn<PublicProjectConfigDto>
    {
        public projectId?: string;

        public constructor(init?: Partial<GetPublicProjectConfig>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'GetPublicProjectConfig'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new PublicProjectConfigDto(); }
    }

    // @Route("/{version}/public/projects/{ProjectId}/legal/{Kind}", "GET")
    export class GetPublicProjectLegal extends RequestBase implements IReturn<PublicLegalDocumentDto>
    {
        public projectId?: string;
        public kind?: string;

        public constructor(init?: Partial<GetPublicProjectLegal>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'GetPublicProjectLegal'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new PublicLegalDocumentDto(); }
    }


    // ---- Membership password endpoints (synced from API /metadata) ----

    // @Route("/{version}/membership/userauth/password/change", "POST")
    export class ChangePasswordRequest extends CodeMashRequestBase implements IReturn<PasskeyOkResponse>
    {
        public currentPassword: string = '';
        public newPassword: string = '';
        public databaseIntegrationId?: string;

        public constructor(init?: Partial<ChangePasswordRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'ChangePasswordRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new PasskeyOkResponse(); }
    }

    // @Route("/{version}/membership/userauth/password/reset/request", "POST")
    export class RequestPasswordResetRequest extends CodeMashRequestBase implements IReturn<PasskeyOkResponse>
    {
        public email: string = '';

        public constructor(init?: Partial<RequestPasswordResetRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'RequestPasswordResetRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new PasskeyOkResponse(); }
    }

    // @Route("/{version}/membership/userauth/password/reset/confirm", "POST")
    export class ConfirmPasswordResetRequest extends CodeMashRequestBase implements IReturn<PasskeyOkResponse>
    {
        public token: string = '';
        public newPassword: string = '';
        public databaseIntegrationId?: string;

        public constructor(init?: Partial<ConfirmPasswordResetRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'ConfirmPasswordResetRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new PasskeyOkResponse(); }
    }


    // ---- Taxonomy/term tree DTOs (synced from API /metadata; used by api.database) ----

    export class TermTreeDto
    {
        public id: string = '';
        public taxonomyId?: string;
        public taxonomyName?: string;
        public parentId?: string;
        public order?: number;
        public name?: string;
        public names?: { [index:string]: string; };
        public description?: string;
        public descriptions?: { [index:string]: string; };
        public multiParents?: TermMultiParentDto[];
        public meta?: Object;
        public children?: TermTreeDto[];

        public constructor(init?: Partial<TermTreeDto>) { (Object as any).assign(this, init); }
    }

    export class TaxonomyTreeDto
    {
        public viewId: string = '';
        public taxonomyName: string = '';
        public taxonomySlug: string = '';
        public parentId?: string;
        public children?: TaxonomyTreeDto[];
        public terms?: TermTreeDto[];

        public constructor(init?: Partial<TaxonomyTreeDto>) { (Object as any).assign(this, init); }
    }

    export class FindTaxonomyTreeResponse extends ResponseBase
    {
        public tree?: TaxonomyTreeDto[];

        public constructor(init?: Partial<FindTaxonomyTreeResponse>) { super(init); (Object as any).assign(this, init); }
    }

    export class FindTermTreeResponse extends ResponseBase
    {
        public tree?: TermTreeDto[];

        public constructor(init?: Partial<FindTermTreeResponse>) { super(init); (Object as any).assign(this, init); }
    }

    // @Route("/{version}/database/taxonomies/tree", "GET")
    export class FindTaxonomyTreeRequest extends CodeMashRequestBase implements IReturn<FindTaxonomyTreeResponse>
    {
        public includeTerms: boolean = false;
        public databaseIntegrationId?: string;

        public constructor(init?: Partial<FindTaxonomyTreeRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'FindTaxonomyTreeRequest'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new FindTaxonomyTreeResponse(); }
    }

    // @Route("/{version}/database/taxonomies/{taxonomyName}/terms/tree", "GET")
    export class FindTermTreeRequest extends CodeMashRequestBase implements IReturn<FindTermTreeResponse>
    {
        public taxonomyName: string = '';
        public rootTermId?: string;
        public depth?: number;
        public databaseIntegrationId?: string;

        public constructor(init?: Partial<FindTermTreeRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'FindTermTreeRequest'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new FindTermTreeResponse(); }
    }

}

