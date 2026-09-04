// @ts-nocheck
/* Options:
Date: 2026-09-04 14:57:29
Version: 10.08
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:5001

//GlobalNamespace: 
//MakePropertiesOptional: False
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/


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

    export type IReadOnlySet<T> = T[];
    export type IReadOnlyList<T> = T[];
    export type IList<T> = T[];
    export type HashSet<T> = T[];
    export type Blob = globalThis.Blob;
    export type IReadOnlyDictionary<TKey extends string | number | symbol, TValue> = Record<TKey, TValue>;

// @DataContract
export enum EmailProvider
{
    Smtp = 'Smtp',
    SendGrid = 'SendGrid',
    MailGun = 'MailGun',
    AwsSes = 'AwsSes',
    Fake = 'Fake',
}

export class EmailIntegrationRequest
{
    public integrationId?: string;
    public provider: EmailProvider;
    public integrationName: string;
    public isEnabled: boolean;
    public emailAddress: string;
    public emailSenderName?: string;

    public constructor(init?: Partial<EmailIntegrationRequest>) { (Object as any).assign(this, init); }
}

export enum SmtpPorts
{
    Default = 25,
    Ssl = 465,
    Tls = 587,
    Fallback = 2525,
}

export class SmtpEmailIntegrationRequest extends EmailIntegrationRequest
{
    public provider: EmailProvider;
    public domain: string;
    public port: SmtpPorts;
    public userName: string;
    public password: string;

    public constructor(init?: Partial<SmtpEmailIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export enum AwsIntegrationType
{
    Iam = 'Iam',
    CrossAccountRole = 'CrossAccountRole',
}

export class AwsSesEmailIntegrationRequest extends EmailIntegrationRequest
{
    public provider: EmailProvider;
    public integrationType: AwsIntegrationType;
    public awsRegion: string;
    public emailIdentityArn: string;
    public configurationSet?: string;
    public roleArn?: string;
    public externalId?: string;
    public accessKey?: string;
    public secretKey?: string;

    public constructor(init?: Partial<AwsSesEmailIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class SendGridEmailIntegrationRequest extends EmailIntegrationRequest
{
    public provider: EmailProvider;
    public apiKey: string;

    public constructor(init?: Partial<SendGridEmailIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export enum MailGunRegion
{
    Us = 'Us',
    Eu = 'Eu',
}

export class MailGunEmailIntegrationRequest extends EmailIntegrationRequest
{
    public provider: EmailProvider;
    public domain: string;
    public apiKey: string;
    public webhookSigningKey: string;
    public region: MailGunRegion;

    public constructor(init?: Partial<MailGunEmailIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export enum EmailCampaignRecipientsSourceTypes
{
    AllUsers = 'AllUsers',
    SpecifiedUsers = 'SpecifiedUsers',
    AccountUsers = 'AccountUsers',
    Email = 'Email',
    Collection = 'Collection',
}

export enum TokenMappingResolverType
{
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
}

// @DataContract
export class TokenMappingDto
{
    // @DataMember
    public key: string;

    // @DataMember
    public value: string;

    // @DataMember
    public resolver: TokenMappingResolverType;

    public constructor(init?: Partial<TokenMappingDto>) { (Object as any).assign(this, init); }
}

export class EmailCampaignRequest
{
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

    public constructor(init?: Partial<EmailCampaignRequest>) { (Object as any).assign(this, init); }
}

export class EmailToAllUsersDeliverySettingsRequest extends EmailCampaignRequest
{
    public source: EmailCampaignRecipientsSourceTypes;
    public rolesNames?: string[];
    public userTags?: string[];

    public constructor(init?: Partial<EmailToAllUsersDeliverySettingsRequest>) { super(init); (Object as any).assign(this, init); }
}

export class EmailToAccountUsersDeliverySettingsRequest extends EmailCampaignRequest
{
    public source: EmailCampaignRecipientsSourceTypes;
    public userRecipients: string[] = [];
    public userCc?: string[];
    public userBcc?: string[];
    public singleEmailStrategy: boolean;

    public constructor(init?: Partial<EmailToAccountUsersDeliverySettingsRequest>) { super(init); (Object as any).assign(this, init); }
}

export enum CollectionEmailCampaignRecipientField
{
    User = 'User',
    Email = 'Email',
}

export class EmailToCollectionRecordsDeliverySettingsRequest extends EmailCampaignRequest
{
    public source: EmailCampaignRecipientsSourceTypes;
    public fields: string[] = [];
    public schemaName: string;
    public fieldType: CollectionEmailCampaignRecipientField;
    public roleNames?: string[];
    public languages?: string[];

    public constructor(init?: Partial<EmailToCollectionRecordsDeliverySettingsRequest>) { super(init); (Object as any).assign(this, init); }
}

export class EmailToEmailsDeliverySettingsRequest extends EmailCampaignRequest
{
    public source: EmailCampaignRecipientsSourceTypes;
    public recipients: string[] = [];
    public recipientsCc?: string[];
    public recipientsBcc?: string[];
    public singleEmailStrategy: boolean;

    public constructor(init?: Partial<EmailToEmailsDeliverySettingsRequest>) { super(init); (Object as any).assign(this, init); }
}

export class EmailToUsersDeliverySettingsRequest extends EmailCampaignRequest
{
    public source: EmailCampaignRecipientsSourceTypes;
    public userRecipients: string[] = [];
    public userCc?: string[];
    public userBcc?: string[];
    public singleEmailStrategy: boolean;

    public constructor(init?: Partial<EmailToUsersDeliverySettingsRequest>) { super(init); (Object as any).assign(this, init); }
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
    SseCall = 'SseCall',
    Marketplace = 'Marketplace',
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

export class SaveTriggerRequest
{
    public type: TriggerType;
    public triggerId?: string;
    public name: string;
    public description?: string;
    public isEnabled: boolean;
    public preExecuteCode?: string;
    public action: TriggerActionDto;

    public constructor(init?: Partial<SaveTriggerRequest>) { (Object as any).assign(this, init); }
}

export enum MembershipTriggerType
{
    OnRegistered = 'OnRegistered',
    OnInvited = 'OnInvited',
    OnVerified = 'OnVerified',
    OnUpdated = 'OnUpdated',
    OnDeleted = 'OnDeleted',
    OnBlocked = 'OnBlocked',
    OnReactivated = 'OnReactivated',
    OnUserCreated = 'OnUserCreated',
}

export class MembershipTriggerRequest extends SaveTriggerRequest
{
    public type: TriggerType;
    public when: MembershipTriggerType;

    public constructor(init?: Partial<MembershipTriggerRequest>) { super(init); (Object as any).assign(this, init); }
}

export enum SchemaTriggerType
{
    OnInserted = 'OnInserted',
    OnDeleted = 'OnDeleted',
    OnUpdated = 'OnUpdated',
}

export class SchemaTriggerRequest extends SaveTriggerRequest
{
    public type: TriggerType;
    public schemaId: string;
    public when: SchemaTriggerType;
    public configurationCode?: string;

    public constructor(init?: Partial<SchemaTriggerRequest>) { super(init); (Object as any).assign(this, init); }
}

export enum FilesTriggerType
{
    OnFileUploaded = 'OnFileUploaded',
    OnFileDeleted = 'OnFileDeleted',
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

export class FilesTriggerRequest extends SaveTriggerRequest
{
    public type: TriggerType;
    public when: FilesTriggerType;
    public fileRef: FileResourceRefDto;

    public constructor(init?: Partial<FilesTriggerRequest>) { super(init); (Object as any).assign(this, init); }
}

export enum PaymentTriggerType
{
    OnOrderCreated = 'OnOrderCreated',
    OnOrderPaid = 'OnOrderPaid',
    OnWebhookCallReceived = 'OnWebhookCallReceived',
}

export class PaymentTriggerRequest extends SaveTriggerRequest
{
    public type: TriggerType;
    public when: PaymentTriggerType;
    public integrations?: string[];
    public events?: string[];

    public constructor(init?: Partial<PaymentTriggerRequest>) { super(init); (Object as any).assign(this, init); }
}

export enum DatabaseProvider
{
    MongoDbConnectionString = 'MongoDbConnectionString',
    CodeMashMongoDbAtlasFlexManaged = 'CodeMashMongoDbAtlasFlexManaged',
}

export class DatabaseIntegrationRequest
{
    public integrationId?: string;
    public provider: DatabaseProvider;
    public integrationName: string;
    public isEnabled: boolean;

    public constructor(init?: Partial<DatabaseIntegrationRequest>) { (Object as any).assign(this, init); }
}

export class MongoDbConnectionStringDatabaseIntegrationRequest extends DatabaseIntegrationRequest
{
    public provider: DatabaseProvider;
    public databaseName?: string;
    public connectionString: string;

    public constructor(init?: Partial<MongoDbConnectionStringDatabaseIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class MongoDbAtlasFlexManagedDatabaseIntegrationRequest extends DatabaseIntegrationRequest
{
    public provider: DatabaseProvider;
    public norbixRegionCode: string;

    public constructor(init?: Partial<MongoDbAtlasFlexManagedDatabaseIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class FilesIntegrationRequest
{
    public integrationId?: string;
    public provider: FileProvider;
    public integrationName: string;
    public isEnabled: boolean;

    public constructor(init?: Partial<FilesIntegrationRequest>) { (Object as any).assign(this, init); }
}

export class GoogleDriveFilesIntegrationRequest extends FilesIntegrationRequest
{
    public provider: FileProvider;
    public rootFolderId?: string;
    public serviceAccountJsonKey: string;

    public constructor(init?: Partial<GoogleDriveFilesIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class FtpFilesIntegrationRequest extends FilesIntegrationRequest
{
    public provider: FileProvider;
    public host: string;
    public port: number;
    public rootPath?: string;
    public useSsl: boolean;
    public username: string;
    public password: string;

    public constructor(init?: Partial<FtpFilesIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class DropBoxFilesIntegrationRequest extends FilesIntegrationRequest
{
    public provider: FileProvider;
    public rootPath?: string;
    public accessToken: string;

    public constructor(init?: Partial<DropBoxFilesIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class AppleICloudFilesIntegrationRequest extends FilesIntegrationRequest
{
    public provider: FileProvider;
    public containerIdentifier: string;
    public relativePath?: string;
    public keyId: string;
    public teamId: string;
    public bundleId: string;
    public p8PrivateKey: string;

    public constructor(init?: Partial<AppleICloudFilesIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export enum AwsS3IntegrationType
{
    Iam = 'Iam',
    CrossAccountRole = 'CrossAccountRole',
}

export class AwsS3FilesIntegrationRequest extends FilesIntegrationRequest
{
    public provider: FileProvider;
    public integrationType: AwsS3IntegrationType;
    public bucketName: string;
    public region: string;
    public roleArn?: string;
    public externalId?: string;
    public accessKey?: string;
    public secretKey?: string;

    public constructor(init?: Partial<AwsS3FilesIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class GoogleCloudFilesIntegrationRequest extends FilesIntegrationRequest
{
    public provider: FileProvider;
    public bucketName: string;
    public serviceAccountJsonKey: string;

    public constructor(init?: Partial<GoogleCloudFilesIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class AzureBlobFilesIntegrationRequest extends FilesIntegrationRequest
{
    public provider: FileProvider;
    public blobName: string;
    public connectionString: string;

    public constructor(init?: Partial<AzureBlobFilesIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class LocalFilesIntegrationRequest extends FilesIntegrationRequest
{
    public provider: FileProvider;
    public rootPath?: string;

    public constructor(init?: Partial<LocalFilesIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export enum LoggingProvider
{
    Console = 'Console',
    NorbixLogging = 'NorbixLogging',
    DataDog = 'DataDog',
    NewRelic = 'NewRelic',
    Sentry = 'Sentry',
    GrafanaLoki = 'GrafanaLoki',
    Axiom = 'Axiom',
    ElasticCloud = 'ElasticCloud',
    AWSCloudWatch = 'AWSCloudWatch',
    GCPCloudLogging = 'GCPCloudLogging',
    AzureMonitorLogs = 'AzureMonitorLogs',
    GenericHttp = 'GenericHttp',
    Kafka = 'Kafka',
    AMQP = 'AMQP',
    Prometheus = 'Prometheus',
    AzureOTel = 'AzureOTel',
    Splunk = 'Splunk',
    ElasticSearch = 'ElasticSearch',
    Kibana = 'Kibana',
    LocalFile = 'LocalFile',
    AWSS3 = 'AWSS3',
    AWSKinesis = 'AWSKinesis',
    MongoDB = 'MongoDB',
    InternalKafka = 'InternalKafka',
}

export class LoggingIntegrationRequest
{
    public integrationId?: string;
    public provider: LoggingProvider;
    public integrationName: string;
    public isEnabled: boolean;

    public constructor(init?: Partial<LoggingIntegrationRequest>) { (Object as any).assign(this, init); }
}

export class AmqpLoggingIntegrationRequest extends LoggingIntegrationRequest
{
    public provider: LoggingProvider;
    public host: string;
    public port: number;
    public virtualHost: string;
    public exchange: string;
    public routingKey: string;
    public username: string;
    public password: string;

    public constructor(init?: Partial<AmqpLoggingIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class AwsKinesisLoggingIntegrationRequest extends LoggingIntegrationRequest
{
    public provider: LoggingProvider;
    public streamName: string;
    public region: string;
    public accessKey: string;
    public secretKey: string;

    public constructor(init?: Partial<AwsKinesisLoggingIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export enum AwsS3LoggingIntegrationType
{
    Iam = 'Iam',
    CrossAccountRole = 'CrossAccountRole',
}

export class AwsS3LoggingIntegrationRequest extends LoggingIntegrationRequest
{
    public provider: LoggingProvider;
    public integrationType: AwsS3LoggingIntegrationType;
    public bucketName: string;
    public region: string;
    public roleArn?: string;
    public externalId?: string;
    public accessKey?: string;
    public secretKey?: string;

    public constructor(init?: Partial<AwsS3LoggingIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class NewRelicLoggingIntegrationRequest extends LoggingIntegrationRequest
{
    public provider: LoggingProvider;
    public region: string;
    public serviceName: string;
    public apiKey: string;

    public constructor(init?: Partial<NewRelicLoggingIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class MongoDbLoggingIntegrationRequest extends LoggingIntegrationRequest
{
    public provider: LoggingProvider;
    public databaseName?: string;
    public connectionString: string;

    public constructor(init?: Partial<MongoDbLoggingIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class KafkaLoggingIntegrationRequest extends LoggingIntegrationRequest
{
    public provider: LoggingProvider;
    public bootstrapServers: string;
    public topic: string;
    public securityProtocol?: string;
    public saslUsername?: string;
    public saslPassword?: string;

    public constructor(init?: Partial<KafkaLoggingIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class PrometheusLoggingIntegrationRequest extends LoggingIntegrationRequest
{
    public provider: LoggingProvider;
    public endpointUrl: string;
    public jobName?: string;
    public bearerToken?: string;

    public constructor(init?: Partial<PrometheusLoggingIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class DataDogLoggingIntegrationRequest extends LoggingIntegrationRequest
{
    public provider: LoggingProvider;
    public site: string;
    public serviceName: string;
    public environment: string;
    public apiKey: string;

    public constructor(init?: Partial<DataDogLoggingIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class InternalKafkaLoggingIntegrationRequest extends LoggingIntegrationRequest
{
    public provider: LoggingProvider;
    public bootstrapServers: string;
    public topic: string;
    public securityProtocol?: string;
    public saslUsername?: string;
    public saslPassword?: string;

    public constructor(init?: Partial<InternalKafkaLoggingIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class ElasticSearchLoggingIntegrationRequest extends LoggingIntegrationRequest
{
    public provider: LoggingProvider;
    public uri: string;
    public index: string;
    public username?: string;
    public password?: string;

    public constructor(init?: Partial<ElasticSearchLoggingIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class SplunkLoggingIntegrationRequest extends LoggingIntegrationRequest
{
    public provider: LoggingProvider;
    public hecEndpointUrl: string;
    public index: string;
    public hecToken: string;

    public constructor(init?: Partial<SplunkLoggingIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class AzureOtelLoggingIntegrationRequest extends LoggingIntegrationRequest
{
    public provider: LoggingProvider;
    public endpointUrl: string;
    public resourceName: string;
    public connectionString: string;

    public constructor(init?: Partial<AzureOtelLoggingIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class KibanaLoggingIntegrationRequest extends LoggingIntegrationRequest
{
    public provider: LoggingProvider;
    public uri: string;
    public spaceId?: string;
    public apiKey: string;

    public constructor(init?: Partial<KibanaLoggingIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class LocalFileLoggingIntegrationRequest extends LoggingIntegrationRequest
{
    public provider: LoggingProvider;
    public rootPath?: string;

    public constructor(init?: Partial<LocalFileLoggingIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export enum MembershipProvider
{
    AppleSignIn = 'AppleSignIn',
    GoogleSignIn = 'GoogleSignIn',
    Google = 'Google',
    Facebook = 'Facebook',
    X = 'X',
    GitHub = 'GitHub',
    LinkedIn = 'LinkedIn',
    Okta = 'Okta',
    Microsoft = 'Microsoft',
}

export class MembershipIntegrationRequest
{
    public integrationId?: string;
    public provider: MembershipProvider;
    public integrationName: string;
    public isEnabled: boolean;

    public constructor(init?: Partial<MembershipIntegrationRequest>) { (Object as any).assign(this, init); }
}

export class DisplayName
{
    public value: string;

    public constructor(init?: Partial<DisplayName>) { (Object as any).assign(this, init); }
}

export class RoleName
{
    public name: string;
    public displayName: string;
    // @Ignore()
    public isAdministrator: boolean;

    // @Ignore()
    public isAuthenticated: boolean;

    // @Ignore()
    public isGuest: boolean;

    // @Ignore()
    public isRootRole: boolean;

    // @Ignore()
    public isCollaboratorRole: boolean;

    // @Ignore()
    public isProjectSystemRole: boolean;

    // @Ignore()
    public isAccountSystemRole: boolean;

    // @Ignore()
    public isSystemRole: boolean;

    public constructor(init?: Partial<RoleName>) { (Object as any).assign(this, init); }
}

export class OAuthModeConfig
{
    public name: DisplayName;
    public callbackUrl: string;
    public logoutUrl?: string;
    public failureRedirectUrl?: string;
    public roleName?: RoleName;

    public constructor(init?: Partial<OAuthModeConfig>) { (Object as any).assign(this, init); }
}

export class OktaMembershipIntegrationRequest extends MembershipIntegrationRequest
{
    public provider: MembershipProvider;
    public domain: string;
    public clientId: string;
    public clientSecret: string;
    public oAuthModes?: OAuthModeConfig[];

    public constructor(init?: Partial<OktaMembershipIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class XMembershipIntegrationRequest extends MembershipIntegrationRequest
{
    public provider: MembershipProvider;
    public apiKey: string;
    public apiSecretKey: string;
    public oAuthModes?: OAuthModeConfig[];

    public constructor(init?: Partial<XMembershipIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class GoogleMembershipIntegrationRequest extends MembershipIntegrationRequest
{
    public provider: MembershipProvider;
    public clientId: string;
    public clientSecret: string;
    public oAuthModes?: OAuthModeConfig[];

    public constructor(init?: Partial<GoogleMembershipIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class MicrosoftMembershipIntegrationRequest extends MembershipIntegrationRequest
{
    public provider: MembershipProvider;
    public tenantId: string;
    public clientId: string;
    public clientSecret: string;
    public oAuthModes?: OAuthModeConfig[];

    public constructor(init?: Partial<MicrosoftMembershipIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class GitHubMembershipIntegrationRequest extends MembershipIntegrationRequest
{
    public provider: MembershipProvider;
    public clientId: string;
    public clientSecret: string;
    public oAuthModes?: OAuthModeConfig[];

    public constructor(init?: Partial<GitHubMembershipIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class MetaMembershipIntegrationRequest extends MembershipIntegrationRequest
{
    public provider: MembershipProvider;
    public appId: string;
    public appSecret: string;
    public oAuthModes?: OAuthModeConfig[];

    public constructor(init?: Partial<MetaMembershipIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class AppleMembershipIntegrationRequest extends MembershipIntegrationRequest
{
    public provider: MembershipProvider;
    public teamId: string;
    public appBundleId: string;
    public serviceId: string;
    public keyId: string;
    public privateKey: string;
    public isProduction: boolean;
    public oAuthModes?: OAuthModeConfig[];

    public constructor(init?: Partial<AppleMembershipIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export enum PaymentGatewayPlatform
{
    Stripe = 'Stripe',
    Adyen = 'Adyen',
    Paddle = 'Paddle',
    LemonSqueezy = 'LemonSqueezy',
    AppleInApp = 'AppleInApp',
    GoogleInApp = 'GoogleInApp',
    Shopify = 'Shopify',
    WooCommerce = 'WooCommerce',
    Magento = 'Magento',
    PayPal = 'PayPal',
    Braintree = 'Braintree',
    AuthorizeNet = 'AuthorizeNet',
    CheckOutCom = 'CheckOutCom',
    Mollie = 'Mollie',
    Worldpay = 'Worldpay',
}

export class PaymentIntegrationRequest
{
    public integrationId?: string;
    public provider: PaymentGatewayPlatform;
    public integrationName: string;
    public isEnabled: boolean;

    public constructor(init?: Partial<PaymentIntegrationRequest>) { (Object as any).assign(this, init); }
}

export class LemonSqueezyPaymentIntegrationRequest extends PaymentIntegrationRequest
{
    public provider: PaymentGatewayPlatform;
    public storeId: string;
    public apiKey: string;
    public webhookSigningSecret: string;
    public isTestMode: boolean;

    public constructor(init?: Partial<LemonSqueezyPaymentIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class AdyenPaymentIntegrationRequest extends PaymentIntegrationRequest
{
    public provider: PaymentGatewayPlatform;
    public merchantAccount: string;
    public apiKey: string;
    public environment: string;
    public webhookId?: string;
    public webhookHmacKey?: string;

    public constructor(init?: Partial<AdyenPaymentIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class MolliePaymentIntegrationRequest extends PaymentIntegrationRequest
{
    public provider: PaymentGatewayPlatform;
    public profileId: string;
    public apiKey: string;
    public isTestMode: boolean;
    public webhookSigningSecret?: string;

    public constructor(init?: Partial<MolliePaymentIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class PaddlePaymentIntegrationRequest extends PaymentIntegrationRequest
{
    public provider: PaymentGatewayPlatform;
    public apiKey: string;
    public webhookEndpointSecretKey: string;
    public environment: string;
    public clientSideToken?: string;

    public constructor(init?: Partial<PaddlePaymentIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class PayPalPaymentIntegrationRequest extends PaymentIntegrationRequest
{
    public provider: PaymentGatewayPlatform;
    public clientId: string;
    public clientSecret: string;
    public environment: string;
    public brandName?: string;
    public webhookId?: string;

    public constructor(init?: Partial<PayPalPaymentIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class StripePaymentIntegrationRequest extends PaymentIntegrationRequest
{
    public provider: PaymentGatewayPlatform;
    public publishableKey: string;
    public secretKey: string;
    public webhookSigningSecret: string;
    public webhookEndpointId?: string;
    public defaultCurrency?: string;

    public constructor(init?: Partial<StripePaymentIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class AppleInAppPaymentIntegrationRequest extends PaymentIntegrationRequest
{
    public provider: PaymentGatewayPlatform;
    public merchantIdentifier: string;
    public merchantDomain: string;
    public displayName: string;
    public merchantIdentityCertificateP12Base64: string;
    public merchantIdentityCertificatePassword: string;
    public paymentProcessingCertificateP12Base64: string;
    public paymentProcessingCertificatePassword: string;
    public webhookBundleId?: string;

    public constructor(init?: Partial<AppleInAppPaymentIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class GoogleInAppPaymentIntegrationRequest extends PaymentIntegrationRequest
{
    public provider: PaymentGatewayPlatform;
    public merchantId: string;
    public merchantName: string;
    public gateway: string;
    public privateKeyOrToken: string;
    public gatewayMerchantId?: string;
    public webhookPackageName?: string;

    public constructor(init?: Partial<GoogleInAppPaymentIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
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

export class PushIntegrationRequest
{
    public integrationId?: string;
    public provider: PushProvider;
    public integrationName: string;
    public isEnabled: boolean;

    public constructor(init?: Partial<PushIntegrationRequest>) { (Object as any).assign(this, init); }
}

export class EdgeWebPushIntegrationRequest extends PushIntegrationRequest
{
    public provider: PushProvider;
    public vapidPublicKey: string;
    public vapidPrivateKey: string;
    public subject?: string;

    public constructor(init?: Partial<EdgeWebPushIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class ChromePluginPushIntegrationRequest extends PushIntegrationRequest
{
    public provider: PushProvider;
    public extensionId: string;
    public vapidPublicKey: string;
    public vapidPrivateKey: string;
    public subject?: string;

    public constructor(init?: Partial<ChromePluginPushIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class SafariPushIntegrationRequest extends PushIntegrationRequest
{
    public provider: PushProvider;
    public websitePushId: string;
    public certificateP12Base64: string;
    public certificatePassword: string;

    public constructor(init?: Partial<SafariPushIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class ChromeWebPushIntegrationRequest extends PushIntegrationRequest
{
    public provider: PushProvider;
    public vapidPublicKey: string;
    public vapidPrivateKey: string;
    public subject?: string;

    public constructor(init?: Partial<ChromeWebPushIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class FirefoxWebPushIntegrationRequest extends PushIntegrationRequest
{
    public provider: PushProvider;
    public vapidPublicKey: string;
    public vapidPrivateKey: string;
    public subject?: string;

    public constructor(init?: Partial<FirefoxWebPushIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class AndroidFirebasePushIntegrationRequest extends PushIntegrationRequest
{
    public provider: PushProvider;
    public projectId: string;
    public clientEmail: string;
    public serviceAccountJson: string;

    public constructor(init?: Partial<AndroidFirebasePushIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class AppleApnsPushIntegrationRequest extends PushIntegrationRequest
{
    public provider: PushProvider;
    public teamId: string;
    public appBundleId: string;
    public keyId: string;
    public privateKey: string;
    public isProduction: boolean;

    public constructor(init?: Partial<AppleApnsPushIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export enum CodeProvider
{
    AwsLambda = 'AwsLambda',
    AzureFunctions = 'AzureFunctions',
    GoogleCloudFunctions = 'GoogleCloudFunctions',
    Pipedream = 'Pipedream',
    Zapier = 'Zapier',
    CloudflareWorkers = 'CloudflareWorkers',
    Vercel = 'Vercel',
    Netlify = 'Netlify',
    SupabaseEdge = 'SupabaseEdge',
    Modal = 'Modal',
}

export class CodeIntegrationRequest
{
    public integrationId?: string;
    public provider: CodeProvider;
    public integrationName: string;
    public isEnabled: boolean;

    public constructor(init?: Partial<CodeIntegrationRequest>) { (Object as any).assign(this, init); }
}

export enum AwsLambdaIntegrationType
{
    Iam = 'Iam',
    CrossAccountRole = 'CrossAccountRole',
}

export class AwsLambdaCodeIntegrationRequest extends CodeIntegrationRequest
{
    public provider: CodeProvider;
    public integrationType: AwsLambdaIntegrationType;
    public region: string;
    public roleArn?: string;
    public externalId?: string;
    public accessKey?: string;
    public secretKey?: string;

    public constructor(init?: Partial<AwsLambdaCodeIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class AzureFunctionsCodeIntegrationRequest extends CodeIntegrationRequest
{
    public provider: CodeProvider;
    public functionAppName: string;
    public resourceGroup?: string;
    public connectionStringOrKey: string;

    public constructor(init?: Partial<AzureFunctionsCodeIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class GoogleCloudFunctionsCodeIntegrationRequest extends CodeIntegrationRequest
{
    public provider: CodeProvider;
    public projectId: string;
    public region?: string;
    public serviceAccountJsonKey: string;

    public constructor(init?: Partial<GoogleCloudFunctionsCodeIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export enum LlmProvider
{
    OpenAI = 'OpenAI',
    Anthropic = 'Anthropic',
    Ollama = 'Ollama',
    Groq = 'Groq',
    Google = 'Google',
    Mistral = 'Mistral',
    OpenRouter = 'OpenRouter',
    Grok = 'Grok',
    NorbixHosted = 'NorbixHosted',
}

export class LlmIntegrationRequest
{
    public integrationId?: string;
    public provider: LlmProvider;
    public integrationName: string;
    public isEnabled: boolean;
    public endpoint?: string;
    public defaultModel?: string;

    public constructor(init?: Partial<LlmIntegrationRequest>) { (Object as any).assign(this, init); }
}

export class OllamaLlmIntegrationRequest extends LlmIntegrationRequest
{
    public provider: LlmProvider;

    public constructor(init?: Partial<OllamaLlmIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class OpenRouterLlmIntegrationRequest extends LlmIntegrationRequest implements ILlmApiKeyRequest
{
    public provider: LlmProvider;
    public apiKey: string;

    public constructor(init?: Partial<OpenRouterLlmIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class MistralLlmIntegrationRequest extends LlmIntegrationRequest implements ILlmApiKeyRequest
{
    public provider: LlmProvider;
    public apiKey: string;

    public constructor(init?: Partial<MistralLlmIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class GrokLlmIntegrationRequest extends LlmIntegrationRequest implements ILlmApiKeyRequest
{
    public provider: LlmProvider;
    public apiKey: string;

    public constructor(init?: Partial<GrokLlmIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class GroqLlmIntegrationRequest extends LlmIntegrationRequest implements ILlmApiKeyRequest
{
    public provider: LlmProvider;
    public apiKey: string;

    public constructor(init?: Partial<GroqLlmIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class GoogleLlmIntegrationRequest extends LlmIntegrationRequest implements ILlmApiKeyRequest
{
    public provider: LlmProvider;
    public apiKey: string;

    public constructor(init?: Partial<GoogleLlmIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class AnthropicLlmIntegrationRequest extends LlmIntegrationRequest implements ILlmApiKeyRequest
{
    public provider: LlmProvider;
    public apiKey: string;

    public constructor(init?: Partial<AnthropicLlmIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class OpenAiLlmIntegrationRequest extends LlmIntegrationRequest implements ILlmApiKeyRequest
{
    public provider: LlmProvider;
    public apiKey: string;

    public constructor(init?: Partial<OpenAiLlmIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export enum McpProvider
{
    Docker = 'Docker',
    Obsidian = 'Obsidian',
    GoogleCalendar = 'GoogleCalendar',
    Stripe = 'Stripe',
    GitHub = 'GitHub',
    MongoDb = 'MongoDb',
    Playwright = 'Playwright',
    BraveSearch = 'BraveSearch',
}

export enum McpTransport
{
    Sse = 'Sse',
    HttpStream = 'HttpStream',
    Stdio = 'Stdio',
}

export class McpIntegrationRequest
{
    public integrationId?: string;
    public provider: McpProvider;
    public transport: McpTransport;
    public integrationName: string;
    public isEnabled: boolean;
    public name: string;
    public category: string;
    public description: string;
    public icon: string;

    public constructor(init?: Partial<McpIntegrationRequest>) { (Object as any).assign(this, init); }
}

export class PlaywrightMcpIntegrationRequest extends McpIntegrationRequest
{
    public provider: McpProvider;
    public transport: McpTransport;
    public command?: string;
    public args?: string[];
    public headless: string;

    public constructor(init?: Partial<PlaywrightMcpIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class MongoDbMcpIntegrationRequest extends McpIntegrationRequest
{
    public provider: McpProvider;
    public transport: McpTransport;
    public command?: string;
    public args?: string[];
    public connectionString: string;

    public constructor(init?: Partial<MongoDbMcpIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class GitHubMcpIntegrationRequest extends McpIntegrationRequest
{
    public provider: McpProvider;
    public transport: McpTransport;
    public serverUrl: string;
    public accessToken: string;

    public constructor(init?: Partial<GitHubMcpIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class StripeMcpIntegrationRequest extends McpIntegrationRequest
{
    public provider: McpProvider;
    public transport: McpTransport;
    public serverUrl: string;
    public apiKey: string;

    public constructor(init?: Partial<StripeMcpIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class BraveSearchMcpIntegrationRequest extends McpIntegrationRequest
{
    public provider: McpProvider;
    public transport: McpTransport;
    public serverUrl: string;
    public apiKey: string;

    public constructor(init?: Partial<BraveSearchMcpIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export class ObsidianMcpIntegrationRequest extends McpIntegrationRequest
{
    public provider: McpProvider;
    public transport: McpTransport;
    public command?: string;
    public args?: string[];
    public environmentVariables?: { [index:string]: string; };

    public constructor(init?: Partial<ObsidianMcpIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
}

export enum CommunicationChannel
{
    Transactional = 'Transactional',
    Marketing = 'Marketing',
    System = 'System',
}

export enum NotificationMedium
{
    Email = 'Email',
    Sms = 'Sms',
    Push = 'Push',
}

// @DataContract
export class TemplateDto implements IHasViewId, IHasDatabaseId
{
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

    public constructor(init?: Partial<TemplateDto>) { (Object as any).assign(this, init); }
}

export enum EmailTemplateEngine
{
    NotSet = 'NotSet',
    Handlebars = 'Handlebars',
    Mjml = 'Mjml',
    Liquid = 'Liquid',
    Razor = 'Razor',
    Mustache = 'Mustache',
}

// @DataContract
export class EmailBodyDto implements IHasRazorTemplateCode
{
    // @DataMember
    public structure?: string;

    // @DataMember
    public code: string;

    // @DataMember
    public templateEngine: EmailTemplateEngine;

    public constructor(init?: Partial<EmailBodyDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class EmailMessageContentDto implements IHasRazorTemplateCode
{
    // @DataMember
    public subject: string;

    // @DataMember
    public body: EmailBodyDto;

    // @DataMember
    public staticAttachments?: FileResourceRefDto[];

    public constructor(init?: Partial<EmailMessageContentDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class EmailMessageTranslationDto implements IHasRazorTemplateCode
{
    // @DataMember
    public language: string;

    // @DataMember
    public content: EmailMessageContentDto;

    // @DataMember
    public staticAttachments?: FileResourceRefDto[];

    public constructor(init?: Partial<EmailMessageTranslationDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class EmailTemplateDto extends TemplateDto implements IBindableContract
{
    // @DataMember
    public translations: EmailMessageTranslationDto[] = [];

    // @DataMember
    public staticAttachments?: FileResourceRefDto[];

    public constructor(init?: Partial<EmailTemplateDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class PushMessageContentDto implements IHasRazorTemplateCode
{
    // @DataMember
    public title: string;

    // @DataMember
    public body: string;

    public constructor(init?: Partial<PushMessageContentDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class PushMessageTranslationDto implements IHasRazorTemplateCode
{
    // @DataMember
    public language: string;

    // @DataMember
    public content: PushMessageContentDto;

    public constructor(init?: Partial<PushMessageTranslationDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class PushTemplateDto extends TemplateDto implements IHasRazorTemplateCode, IBindableContract
{
    // @DataMember
    public translations: PushMessageTranslationDto[] = [];

    public constructor(init?: Partial<PushTemplateDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class SmsMessageContentDto implements IHasRazorTemplateCode
{
    // @DataMember
    public subject: string;

    // @DataMember
    public body: string;

    public constructor(init?: Partial<SmsMessageContentDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class SmsMessageTranslationDto implements IHasRazorTemplateCode
{
    // @DataMember
    public language: string;

    // @DataMember
    public content: SmsMessageContentDto;

    public constructor(init?: Partial<SmsMessageTranslationDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class SmsTemplateDto extends TemplateDto implements IHasRazorTemplateCode, IBindableContract
{
    // @DataMember
    public translations: SmsMessageTranslationDto[] = [];

    public constructor(init?: Partial<SmsTemplateDto>) { super(init); (Object as any).assign(this, init); }
}

export enum SystemEmailTemplateTheme
{
    Text = 'Text',
    Branded = 'Branded',
    Creative = 'Creative',
}

// @DataContract
export class SystemEmailTemplateDto extends EmailTemplateDto
{
    // @DataMember
    public imagePreview: string;

    // @DataMember
    public theme: SystemEmailTemplateTheme;

    // @DataMember
    public systemGroup: string;

    // @DataMember
    public systemTags?: string[];

    // @DataMember
    public forTrigger?: TriggerType;

    // @DataMember
    public hiddenSystemEmailTemplate: boolean;

    public constructor(init?: Partial<SystemEmailTemplateDto>) { super(init); (Object as any).assign(this, init); }
}

// @Flags()
export enum RespectTimeZoneSettings
{
    RespectToLastLoginZone = 1,
    RespectToRegistrationZone = 2,
    RespectToRegistrationProjectZone = 4,
}

export class EmailCampaignDeliverySettingsDto
{
    // @DataMember
    public recipientsSourceType: EmailCampaignRecipientsSourceTypes;

    // @DataMember
    public mappedTokens?: TokenMappingDto[];

    // @DataMember
    public campaignTime?: number;

    // @DataMember
    public respectTimeZoneSettings?: RespectTimeZoneSettings;

    public constructor(init?: Partial<EmailCampaignDeliverySettingsDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class TriggerActionEmailDto extends TriggerActionDto
{
    // @DataMember
    public templateId: string;

    // @DataMember
    public deliverySettings: EmailCampaignDeliverySettingsDto;

    public constructor(init?: Partial<TriggerActionEmailDto>) { super(init); (Object as any).assign(this, init); }
}

export enum PushCampaignRecipientsSourceTypes
{
    AllUsers = 'AllUsers',
    SpecifiedUsers = 'SpecifiedUsers',
    Collection = 'Collection',
    Devices = 'Devices',
    AccountUsers = 'AccountUsers',
}

// @DataContract
export class PushCampaignDeliverySettingsDto
{
    // @DataMember
    public recipientsSourceType: PushCampaignRecipientsSourceTypes;

    // @DataMember
    public mappedTokens?: TokenMappingDto[];

    // @DataMember
    public campaignTime?: number;

    // @DataMember
    public respectTimeZoneSettings?: RespectTimeZoneSettings;

    public constructor(init?: Partial<PushCampaignDeliverySettingsDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class TriggerActionPushDto extends TriggerActionDto
{
    // @DataMember
    public templateId: string;

    // @DataMember
    public deliverySettings: PushCampaignDeliverySettingsDto;

    public constructor(init?: Partial<TriggerActionPushDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class CodeDeliverySettingsDto
{
    // @DataMember
    public mappedTokens?: TokenMappingDto[];

    public constructor(init?: Partial<CodeDeliverySettingsDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class TriggerActionCodeDto extends TriggerActionDto
{
    // @DataMember
    public functionId: string;

    // @DataMember
    public deliverySettings: CodeDeliverySettingsDto;

    public constructor(init?: Partial<TriggerActionCodeDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class WebhookDeliverySettingsDto
{
    // @DataMember
    public destinationIds?: string[];

    // @DataMember
    public eventName?: string;

    // @DataMember
    public contentType?: string;

    // @DataMember
    public includeRawPayload: boolean;

    // @DataMember
    public mappedTokens?: TokenMappingDto[];

    public constructor(init?: Partial<WebhookDeliverySettingsDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class TriggerActionWebhookDto extends TriggerActionDto
{
    // @DataMember
    public deliverySettings?: WebhookDeliverySettingsDto;

    public constructor(init?: Partial<TriggerActionWebhookDto>) { super(init); (Object as any).assign(this, init); }
}

export enum SmsCampaignRecipientsSourceTypes
{
    AllUsers = 'AllUsers',
    SpecifiedUsers = 'SpecifiedUsers',
    AccountUsers = 'AccountUsers',
    PhoneNumbers = 'PhoneNumbers',
    Collection = 'Collection',
}

// @DataContract
export class SmsCampaignDeliverySettingsDto
{
    // @DataMember
    public recipientsSourceType: SmsCampaignRecipientsSourceTypes;

    // @DataMember
    public mappedTokens?: TokenMappingDto[];

    // @DataMember
    public campaignTime?: number;

    // @DataMember
    public respectTimeZoneSettings?: RespectTimeZoneSettings;

    public constructor(init?: Partial<SmsCampaignDeliverySettingsDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class TriggerActionSmsDto extends TriggerActionDto
{
    // @DataMember
    public templateId: string;

    // @DataMember
    public deliverySettings: SmsCampaignDeliverySettingsDto;

    public constructor(init?: Partial<TriggerActionSmsDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class SseDeliverySettingsDto
{
    // @DataMember
    public audience: string;

    // @DataMember
    public userAuthIds?: string[];

    // @DataMember
    public eventName?: string;

    // @DataMember
    public payloadType?: string;

    // @DataMember
    public payloadTemplate?: string;

    // @DataMember
    public persist: boolean;

    // @DataMember
    public mappedTokens?: TokenMappingDto[];

    public constructor(init?: Partial<SseDeliverySettingsDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class TriggerActionSseDto extends TriggerActionDto
{
    // @DataMember
    public deliverySettings: SseDeliverySettingsDto;

    public constructor(init?: Partial<TriggerActionSseDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class TriggerActionMarketplaceDto extends TriggerActionDto
{
    // @DataMember
    public functionId: string;

    // @DataMember
    public payload?: { [index:string]: string; };

    public constructor(init?: Partial<TriggerActionMarketplaceDto>) { super(init); (Object as any).assign(this, init); }
}

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

// @DataContract
export class GetTriggers extends CodeMashListPaginationRequestBase
{
    // @DataMember
    public schemaId?: string;

    public constructor(init?: Partial<GetTriggers>) { super(init); (Object as any).assign(this, init); }
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

// @DataContract
export class GetTriggersResponse extends ResponseBase
{

    public constructor(init?: Partial<GetTriggersResponse>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class EmailToAllUsersDeliverySettingsDto extends EmailCampaignDeliverySettingsDto
{
    // @DataMember
    public rolesNames?: string[];

    // @DataMember
    public userTags?: string[];

    public constructor(init?: Partial<EmailToAllUsersDeliverySettingsDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class EmailToAccountUsersDeliverySettingsDto extends EmailCampaignDeliverySettingsDto
{
    // @DataMember
    public userRecipients: string[] = [];

    // @DataMember
    public userCc?: string[];

    // @DataMember
    public userBcc?: string[];

    // @DataMember
    public singleEmailStrategy: boolean;

    public constructor(init?: Partial<EmailToAccountUsersDeliverySettingsDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class EmailToUsersDeliverySettingsDto extends EmailCampaignDeliverySettingsDto
{
    // @DataMember
    public userRecipients: string[] = [];

    // @DataMember
    public userCc?: string[];

    // @DataMember
    public userBcc?: string[];

    // @DataMember
    public singleEmailStrategy: boolean;

    public constructor(init?: Partial<EmailToUsersDeliverySettingsDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class EmailToEmailAddressesDeliverySettingsDto extends EmailCampaignDeliverySettingsDto
{
    // @DataMember
    public recipients: string[] = [];

    // @DataMember
    public recipientsCc?: string[];

    // @DataMember
    public recipientsBcc?: string[];

    // @DataMember
    public singleEmailStrategy: boolean;

    public constructor(init?: Partial<EmailToEmailAddressesDeliverySettingsDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class EmailToCollectionRecordsDeliverySettingsDto extends EmailCampaignDeliverySettingsDto
{
    // @DataMember
    public fields: string[] = [];

    // @DataMember
    public schemaName: string;

    // @DataMember
    public fieldType: CollectionEmailCampaignRecipientField;

    // @DataMember
    public roleNames?: string[];

    // @DataMember
    public languages?: string[];

    public constructor(init?: Partial<EmailToCollectionRecordsDeliverySettingsDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class PushToAllUsersDeliverySettingsDto extends PushCampaignDeliverySettingsDto
{
    // @DataMember
    public rolesNames?: string[];

    // @DataMember
    public userTags?: string[];

    public constructor(init?: Partial<PushToAllUsersDeliverySettingsDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class PushToUsersDeliverySettingsDto extends PushCampaignDeliverySettingsDto
{
    // @DataMember
    public recipients: string[] = [];

    public constructor(init?: Partial<PushToUsersDeliverySettingsDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class PushToAccountUsersDeliverySettingsDto extends PushCampaignDeliverySettingsDto
{
    // @DataMember
    public recipients: string[] = [];

    public constructor(init?: Partial<PushToAccountUsersDeliverySettingsDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class PushToCollectionRecordsDeliverySettingsDto extends PushCampaignDeliverySettingsDto
{
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

    public constructor(init?: Partial<PushToCollectionRecordsDeliverySettingsDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class PushDeviceDeliveryTokenDto
{

    public constructor(init?: Partial<PushDeviceDeliveryTokenDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class PushToDevicesDeliverySettingsDto extends PushCampaignDeliverySettingsDto
{
    // @DataMember
    public devices: PushDeviceDeliveryTokenDto[] = [];

    public constructor(init?: Partial<PushToDevicesDeliverySettingsDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class SmsToAllUsersDeliverySettingsDto extends SmsCampaignDeliverySettingsDto
{
    // @DataMember
    public rolesNames?: string[];

    // @DataMember
    public userTags?: string[];

    public constructor(init?: Partial<SmsToAllUsersDeliverySettingsDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class SmsToUsersDeliverySettingsDto extends SmsCampaignDeliverySettingsDto
{
    // @DataMember
    public recipients: string[] = [];

    public constructor(init?: Partial<SmsToUsersDeliverySettingsDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class SmsToCollectionRecordsDeliverySettingsDto extends SmsCampaignDeliverySettingsDto
{
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

    public constructor(init?: Partial<SmsToCollectionRecordsDeliverySettingsDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class SmsToPhoneNumbersDeliverySettingsDto extends SmsCampaignDeliverySettingsDto
{
    // @DataMember
    public phoneNumbers: string[] = [];

    public constructor(init?: Partial<SmsToPhoneNumbersDeliverySettingsDto>) { super(init); (Object as any).assign(this, init); }
}

export class IntegrationDto implements IHasViewId
{
    public viewId: string;
    public integrationName: string;
    public isEnabled: boolean;
    public env?: string;
    public lastIntegrationTestAtUtc?: string;
    public lastIntegrationTestSucceeded?: boolean;
    public lastIntegrationTestErrors: IReadOnlyList<string>;
    public humanDeliveryConfirmedAtUtc?: string;
    public requiresHumanDeliveryConfirmation: boolean;

    public constructor(init?: Partial<IntegrationDto>) { (Object as any).assign(this, init); }
}

export class LlmIntegrationDto extends IntegrationDto
{
    public provider: LlmProvider;
    public baseUrl?: string;
    public defaultModel?: string;
    public isConfigured: boolean;
    public isSystemOwned: boolean;

    public constructor(init?: Partial<LlmIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class OpenAiLlmIntegrationDto extends LlmIntegrationDto
{

    public constructor(init?: Partial<OpenAiLlmIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AnthropicLlmIntegrationDto extends LlmIntegrationDto
{

    public constructor(init?: Partial<AnthropicLlmIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class OllamaLlmIntegrationDto extends LlmIntegrationDto
{

    public constructor(init?: Partial<OllamaLlmIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class GroqLlmIntegrationDto extends LlmIntegrationDto
{

    public constructor(init?: Partial<GroqLlmIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class GoogleLlmIntegrationDto extends LlmIntegrationDto
{

    public constructor(init?: Partial<GoogleLlmIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class MistralLlmIntegrationDto extends LlmIntegrationDto
{

    public constructor(init?: Partial<MistralLlmIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class OpenRouterLlmIntegrationDto extends LlmIntegrationDto
{

    public constructor(init?: Partial<OpenRouterLlmIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class GrokLlmIntegrationDto extends LlmIntegrationDto
{

    public constructor(init?: Partial<GrokLlmIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class McpMetadata
{
    public name: string;
    public category: string;
    public description: string;
    public icon: string;

    public constructor(init?: Partial<McpMetadata>) { (Object as any).assign(this, init); }
}

export enum McpAuth
{
    OAuth2 = 'OAuth2',
    ApiKey = 'ApiKey',
    None = 'None',
}

export class McpIntegrationDto extends IntegrationDto
{
    public provider: McpProvider;
    public transport: McpTransport;
    public metadata: McpMetadata;
    public isConfigured: boolean;
    public isSystemOwned: boolean;
    public command?: string;
    public args?: string[];
    public serverUrl?: string;
    public auth?: McpAuth;

    public constructor(init?: Partial<McpIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class DockerMcpIntegrationDto extends McpIntegrationDto
{

    public constructor(init?: Partial<DockerMcpIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class GoogleCalendarMcpIntegrationDto extends McpIntegrationDto
{

    public constructor(init?: Partial<GoogleCalendarMcpIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class ObsidianMcpIntegrationDto extends McpIntegrationDto
{

    public constructor(init?: Partial<ObsidianMcpIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class CodeIntegrationDto extends IntegrationDto
{
    public provider: CodeProvider;

    public constructor(init?: Partial<CodeIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AwsLambdaCrossAccountRoleCodeIntegrationDto extends CodeIntegrationDto
{
    public region: string;
    public roleArn: string;
    public externalId: string;

    public constructor(init?: Partial<AwsLambdaCrossAccountRoleCodeIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AwsLambdaIamCodeIntegrationDto extends CodeIntegrationDto
{
    public region: string;

    public constructor(init?: Partial<AwsLambdaIamCodeIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AzureFunctionsCodeIntegrationDto extends CodeIntegrationDto
{
    public functionAppName: string;
    public resourceGroup?: string;

    public constructor(init?: Partial<AzureFunctionsCodeIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class GoogleCloudFunctionsCodeIntegrationDto extends CodeIntegrationDto
{
    public projectId: string;
    public region?: string;

    public constructor(init?: Partial<GoogleCloudFunctionsCodeIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class PaymentsIntegrationDto extends IntegrationDto
{
    public gatewayPlatform: PaymentGatewayPlatform;

    public constructor(init?: Partial<PaymentsIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AdyenPaymentIntegrationDto extends PaymentsIntegrationDto
{
    public merchantAccount: string;
    public environment: string;
    public webhookId?: string;

    public constructor(init?: Partial<AdyenPaymentIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AppleInAppPaymentIntegrationDto extends PaymentsIntegrationDto
{
    public merchantIdentifier: string;
    public merchantDomain: string;
    public displayName: string;

    public constructor(init?: Partial<AppleInAppPaymentIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class GoogleInAppPaymentIntegrationDto extends PaymentsIntegrationDto
{
    public merchantId: string;
    public merchantName: string;
    public gateway: string;
    public gatewayMerchantId?: string;

    public constructor(init?: Partial<GoogleInAppPaymentIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class LemonSqueezyPaymentIntegrationDto extends PaymentsIntegrationDto
{
    public storeId: string;
    public isTestMode: boolean;

    public constructor(init?: Partial<LemonSqueezyPaymentIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class MolliePaymentIntegrationDto extends PaymentsIntegrationDto
{
    public profileId: string;
    public isTestMode: boolean;

    public constructor(init?: Partial<MolliePaymentIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class PaddlePaymentIntegrationDto extends PaymentsIntegrationDto
{
    public environment: string;
    public clientSideToken?: string;

    public constructor(init?: Partial<PaddlePaymentIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class PayPalPaymentIntegrationDto extends PaymentsIntegrationDto
{
    public clientId: string;
    public environment: string;
    public brandName?: string;

    public constructor(init?: Partial<PayPalPaymentIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class StripePaymentIntegrationDto extends PaymentsIntegrationDto
{
    public publishableKey: string;
    public webhookEndpointId?: string;
    public defaultCurrency?: string;

    public constructor(init?: Partial<StripePaymentIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class ShopifyPaymentIntegrationDto extends PaymentsIntegrationDto
{
    public shopDomain: string;
    public webhookSecret?: string;

    public constructor(init?: Partial<ShopifyPaymentIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class WooCommercePaymentIntegrationDto extends PaymentsIntegrationDto
{
    public storeUrl: string;
    public webhookSecret?: string;

    public constructor(init?: Partial<WooCommercePaymentIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class MagentoPaymentIntegrationDto extends PaymentsIntegrationDto
{
    public storeUrl: string;
    public webhookSecret?: string;

    public constructor(init?: Partial<MagentoPaymentIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class BraintreePaymentIntegrationDto extends PaymentsIntegrationDto
{
    public merchantId: string;
    public environment: string;
    public webhookSecret?: string;

    public constructor(init?: Partial<BraintreePaymentIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AuthorizeNetPaymentIntegrationDto extends PaymentsIntegrationDto
{
    public merchantLoginId: string;
    public environment: string;
    public webhookSignatureKey?: string;

    public constructor(init?: Partial<AuthorizeNetPaymentIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class CheckOutComPaymentIntegrationDto extends PaymentsIntegrationDto
{
    public merchantAccount: string;
    public environment: string;
    public webhookSecret?: string;

    public constructor(init?: Partial<CheckOutComPaymentIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class WorldpayPaymentIntegrationDto extends PaymentsIntegrationDto
{
    public merchantCode: string;
    public environment: string;
    public webhookSecret?: string;

    public constructor(init?: Partial<WorldpayPaymentIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class MembershipIntegrationDto extends IntegrationDto
{
    public provider: MembershipProvider;

    public constructor(init?: Partial<MembershipIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AppleSignInMembershipIntegrationDto extends MembershipIntegrationDto
{
    public teamId: string;
    public appBundleId: string;
    public serviceId: string;

    public constructor(init?: Partial<AppleSignInMembershipIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class GitHubMembershipIntegrationDto extends MembershipIntegrationDto
{
    public clientId: string;

    public constructor(init?: Partial<GitHubMembershipIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class GoogleMembershipIntegrationDto extends MembershipIntegrationDto
{
    public clientId: string;

    public constructor(init?: Partial<GoogleMembershipIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class MetaMembershipIntegrationDto extends MembershipIntegrationDto
{
    public appId: string;

    public constructor(init?: Partial<MetaMembershipIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class MicrosoftMembershipIntegrationDto extends MembershipIntegrationDto
{
    public tenantId: string;
    public clientId: string;

    public constructor(init?: Partial<MicrosoftMembershipIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class OktaMembershipIntegrationDto extends MembershipIntegrationDto
{
    public domain: string;
    public clientId: string;

    public constructor(init?: Partial<OktaMembershipIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class XMembershipIntegrationDto extends MembershipIntegrationDto
{
    public apiKey: string;

    public constructor(init?: Partial<XMembershipIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class LoggingIntegrationDto extends IntegrationDto
{
    public provider: LoggingProvider;

    public constructor(init?: Partial<LoggingIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AmqpLoggingIntegrationDto extends LoggingIntegrationDto
{
    public host: string;
    public port: number;
    public virtualHost: string;
    public exchange: string;
    public routingKey: string;

    public constructor(init?: Partial<AmqpLoggingIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AwsKinesisLoggingIntegrationDto extends LoggingIntegrationDto
{
    public streamName: string;
    public region: string;

    public constructor(init?: Partial<AwsKinesisLoggingIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AwsS3CrossAccountRoleLoggingIntegrationDto extends LoggingIntegrationDto
{
    public bucketName: string;
    public region: string;
    public roleArn: string;
    public externalId: string;

    public constructor(init?: Partial<AwsS3CrossAccountRoleLoggingIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AwsS3IamLoggingIntegrationDto extends LoggingIntegrationDto
{
    public bucketName: string;
    public region: string;

    public constructor(init?: Partial<AwsS3IamLoggingIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AzureOtelLoggingIntegrationDto extends LoggingIntegrationDto
{
    public endpointUrl: string;
    public resourceName: string;

    public constructor(init?: Partial<AzureOtelLoggingIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class DataDogLoggingIntegrationDto extends LoggingIntegrationDto
{
    public site: string;
    public serviceName: string;
    public environment: string;

    public constructor(init?: Partial<DataDogLoggingIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class ElasticSearchLoggingIntegrationDto extends LoggingIntegrationDto
{
    public uri: string;
    public index: string;

    public constructor(init?: Partial<ElasticSearchLoggingIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class InternalKafkaLoggingIntegrationDto extends LoggingIntegrationDto
{
    public bootstrapServers: string;
    public topic: string;
    public securityProtocol?: string;

    public constructor(init?: Partial<InternalKafkaLoggingIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class KafkaLoggingIntegrationDto extends LoggingIntegrationDto
{
    public bootstrapServers: string;
    public topic: string;
    public securityProtocol?: string;

    public constructor(init?: Partial<KafkaLoggingIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class KibanaLoggingIntegrationDto extends LoggingIntegrationDto
{
    public uri: string;
    public spaceId?: string;

    public constructor(init?: Partial<KibanaLoggingIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class LocalFileLoggingIntegrationDto extends LoggingIntegrationDto
{
    public rootPath?: string;

    public constructor(init?: Partial<LocalFileLoggingIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class MongoDbLoggingIntegrationDto extends LoggingIntegrationDto
{
    public databaseName?: string;

    public constructor(init?: Partial<MongoDbLoggingIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class NewRelicLoggingIntegrationDto extends LoggingIntegrationDto
{
    public region: string;
    public serviceName: string;

    public constructor(init?: Partial<NewRelicLoggingIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class PrometheusLoggingIntegrationDto extends LoggingIntegrationDto
{
    public endpointUrl: string;
    public jobName?: string;

    public constructor(init?: Partial<PrometheusLoggingIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class SplunkLoggingIntegrationDto extends LoggingIntegrationDto
{
    public hecEndpointUrl: string;
    public index: string;

    public constructor(init?: Partial<SplunkLoggingIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class FilesIntegrationDto extends IntegrationDto
{
    public provider: FileProvider;

    public constructor(init?: Partial<FilesIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AppleICloudFilesIntegrationDto extends FilesIntegrationDto
{
    public containerIdentifier: string;
    public relativePath?: string;

    public constructor(init?: Partial<AppleICloudFilesIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AwsS3CrossAccountRoleFilesIntegrationDto extends FilesIntegrationDto
{
    public bucketName: string;
    public region: string;
    public roleArn: string;
    public externalId: string;

    public constructor(init?: Partial<AwsS3CrossAccountRoleFilesIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AwsS3IamFilesIntegrationDto extends FilesIntegrationDto
{
    public bucketName: string;
    public region: string;

    public constructor(init?: Partial<AwsS3IamFilesIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AzureBlobFilesIntegrationDto extends FilesIntegrationDto
{
    public blobName: string;

    public constructor(init?: Partial<AzureBlobFilesIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class DropBoxFilesIntegrationDto extends FilesIntegrationDto
{
    public rootPath?: string;

    public constructor(init?: Partial<DropBoxFilesIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class FtpFilesIntegrationDto extends FilesIntegrationDto
{
    public host: string;
    public port: number;
    public rootPath?: string;
    public useSsl: boolean;

    public constructor(init?: Partial<FtpFilesIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class GoogleCloudFilesIntegrationDto extends FilesIntegrationDto
{
    public bucketName: string;

    public constructor(init?: Partial<GoogleCloudFilesIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class GoogleDriveFilesIntegrationDto extends FilesIntegrationDto
{
    public rootFolderId?: string;

    public constructor(init?: Partial<GoogleDriveFilesIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class LocalFilesIntegrationDto extends FilesIntegrationDto
{
    public rootPath?: string;

    public constructor(init?: Partial<LocalFilesIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class DatabaseIntegrationDto extends IntegrationDto
{
    public provider: DatabaseProvider;

    public constructor(init?: Partial<DatabaseIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class MongoDbConnectionStringIntegrationDto extends DatabaseIntegrationDto
{
    public databaseName?: string;

    public constructor(init?: Partial<MongoDbConnectionStringIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export enum IntegrationStatus
{
    Unknown = 'Unknown',
    Pending = 'Pending',
    Provisioning = 'Provisioning',
    Active = 'Active',
    Failed = 'Failed',
    Deprovisioning = 'Deprovisioning',
}

export class MongoDbAtlasFlexManagedIntegrationDto extends DatabaseIntegrationDto
{
    public databaseName?: string;
    public norbixRegionCode: string;
    public flexTierCode: string;
    public status: IntegrationStatus;
    public atlasProjectId?: string;
    public atlasClusterName?: string;
    public failureReason?: string;

    public constructor(init?: Partial<MongoDbAtlasFlexManagedIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export enum SmsProvider
{
    Twilio = 'Twilio',
    Vonage = 'Vonage',
    Plivo = 'Plivo',
    Telnyx = 'Telnyx',
    Bird = 'Bird',
    Telesign = 'Telesign',
    Sinch = 'Sinch',
    Fake = 'Fake',
}

export class SmsIntegrationDto extends IntegrationDto
{
    public provider: SmsProvider;

    public constructor(init?: Partial<SmsIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class BirdSmsIntegrationDto extends SmsIntegrationDto
{
    public originator: string;
    public region: string;

    public constructor(init?: Partial<BirdSmsIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class PlivoSmsIntegrationDto extends SmsIntegrationDto
{
    public authId: string;
    public fromPhoneNumber: string;

    public constructor(init?: Partial<PlivoSmsIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class SinchSmsIntegrationDto extends SmsIntegrationDto
{
    public servicePlanId: string;
    public fromPhoneNumber: string;

    public constructor(init?: Partial<SinchSmsIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class TelesignSmsIntegrationDto extends SmsIntegrationDto
{
    public customerId: string;
    public fromSender: string;

    public constructor(init?: Partial<TelesignSmsIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class TelnyxSmsIntegrationDto extends SmsIntegrationDto
{
    public messagingProfileId: string;
    public fromPhoneNumber: string;

    public constructor(init?: Partial<TelnyxSmsIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class TwilioSmsIntegrationDto extends SmsIntegrationDto
{
    public accountSid: string;
    public fromPhoneNumber: string;

    public constructor(init?: Partial<TwilioSmsIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class VonageSmsIntegrationDto extends SmsIntegrationDto
{
    public apiKey: string;
    public fromSender: string;

    public constructor(init?: Partial<VonageSmsIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class PushIntegrationDto extends IntegrationDto
{
    public provider: PushProvider;

    public constructor(init?: Partial<PushIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AndroidFirebasePushIntegrationDto extends PushIntegrationDto
{
    public projectId: string;
    public clientEmail: string;

    public constructor(init?: Partial<AndroidFirebasePushIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AppleApnsPushIntegrationDto extends PushIntegrationDto
{
    public teamId: string;
    public appBundleId: string;

    public constructor(init?: Partial<AppleApnsPushIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class ChromePluginPushIntegrationDto extends PushIntegrationDto
{
    public extensionId: string;
    public vapidPublicKey: string;
    public subject?: string;

    public constructor(init?: Partial<ChromePluginPushIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class ChromeWebPushIntegrationDto extends PushIntegrationDto
{
    public vapidPublicKey: string;
    public subject?: string;

    public constructor(init?: Partial<ChromeWebPushIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class EdgeWebPushIntegrationDto extends PushIntegrationDto
{
    public vapidPublicKey: string;
    public subject?: string;

    public constructor(init?: Partial<EdgeWebPushIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class FirefoxWebPushIntegrationDto extends PushIntegrationDto
{
    public vapidPublicKey: string;
    public subject?: string;

    public constructor(init?: Partial<FirefoxWebPushIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class SafariPushIntegrationDto extends PushIntegrationDto
{
    public websitePushId: string;

    public constructor(init?: Partial<SafariPushIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class EmailIntegrationDto extends IntegrationDto
{
    public provider: EmailProvider;
    public emailAddress: string;
    public emailSenderName?: string;

    public constructor(init?: Partial<EmailIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AwsSesEmailIntegrationDto extends EmailIntegrationDto
{
    public region: string;
    public identityArn: string;
    public configurationSetName?: string;

    public constructor(init?: Partial<AwsSesEmailIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AwsCrossAccountRoleEmailIntegrationDto extends AwsSesEmailIntegrationDto
{
    public roleArn: string;
    public externalId: string;

    public constructor(init?: Partial<AwsCrossAccountRoleEmailIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class AwsIamEmailIntegrationDto extends AwsSesEmailIntegrationDto
{

    public constructor(init?: Partial<AwsIamEmailIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class MailGunEmailIntegrationDto extends EmailIntegrationDto
{
    public domain: string;
    public region: MailGunRegion;

    public constructor(init?: Partial<MailGunEmailIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class SendGridEmailIntegrationDto extends EmailIntegrationDto
{

    public constructor(init?: Partial<SendGridEmailIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export class SmtpEmailIntegrationDto extends EmailIntegrationDto
{
    public hostName: string;
    public port: number;

    public constructor(init?: Partial<SmtpEmailIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class WebhookDestinationDto
{
    // @DataMember
    public viewId: string;

    // @DataMember
    public destinationName: string;

    // @DataMember
    public endpointUrl: string;

    // @DataMember
    public selectedEvents: IReadOnlyList<string>;

    // @DataMember
    public extraHeaders?: IReadOnlyDictionary<string, string>;

    // @DataMember
    public isEnabled: boolean;

    public constructor(init?: Partial<WebhookDestinationDto>) { (Object as any).assign(this, init); }
}

export class WebhookIntegrationDto extends IntegrationDto
{
    public isConfigured: boolean;
    public destinations: IReadOnlyList<WebhookDestinationDto>;
    public extraHeaders?: IReadOnlyDictionary<string, string>;

    public constructor(init?: Partial<WebhookIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export enum SchedulerTaskType
{
    EmailCampaign = 'EmailCampaign',
    PushCampaign = 'PushCampaign',
    SmsCampaign = 'SmsCampaign',
    CodeFunctionalCall = 'CodeFunctionalCall',
    WebhookCall = 'WebhookCall',
}

// @DataContract
export class SchedulerTaskDto
{
    // @DataMember
    public projectId: string;

    // @DataMember
    public taskId: string;

    // @DataMember
    public name: string;

    // @DataMember
    public description?: string;

    // @DataMember
    public cron: string;

    // @DataMember
    public type: SchedulerTaskType;

    // @DataMember
    public payloadJson: string;

    // @DataMember
    public initiatorId: string;

    // @DataMember
    public isEnabled: boolean;

    // @DataMember
    public stopOnError: boolean;

    // @DataMember
    public createdAtUnix?: number;

    // @DataMember
    public updatedAtUnix?: number;

    public constructor(init?: Partial<SchedulerTaskDto>) { (Object as any).assign(this, init); }
}

export class MongoDbAggregateDto implements IHasViewId
{
    // @DataMember
    public viewId: string;

    // @DataMember
    public displayName: string;

    // @DataMember
    public description?: string;

    // @DataMember
    public schemaViewId: string;

    // @DataMember
    public pipeline: string;

    public constructor(init?: Partial<MongoDbAggregateDto>) { (Object as any).assign(this, init); }
}

export enum MarketplaceTransport
{
    Mcp = 'Mcp',
    Rest = 'Rest',
    Code = 'Code',
    Internal = 'Internal',
    Sdk = 'Sdk',
}

export enum MarketplaceCategory
{
    Other = 'Other',
    Crm = 'Crm',
    Erp = 'Erp',
    Marketing = 'Marketing',
    Communication = 'Communication',
    Productivity = 'Productivity',
    Storage = 'Storage',
    Analytics = 'Analytics',
    Identity = 'Identity',
    Payments = 'Payments',
    DevTools = 'DevTools',
    Ai = 'Ai',
    Files = 'Files',
    Database = 'Database',
    Calendar = 'Calendar',
}

// @DataContract
export class MarketplaceIntegrationDto extends IntegrationDto
{
    // @DataMember
    public listingViewId: string;

    // @DataMember
    public transport: MarketplaceTransport;

    // @DataMember
    public vendor: string;

    // @DataMember
    public category: MarketplaceCategory;

    // @DataMember
    public description?: string;

    // @DataMember
    public config: IReadOnlyDictionary<string, string>;

    public constructor(init?: Partial<MarketplaceIntegrationDto>) { super(init); (Object as any).assign(this, init); }
}

export enum MarketplaceTokenResolverKind
{
    Static = 'Static',
    Request = 'Request',
    Project = 'Project',
    Initiator = 'Initiator',
    Custom = 'Custom',
    IntegrationConfig = 'IntegrationConfig',
    IntegrationSecret = 'IntegrationSecret',
}

export enum MarketplaceSecretValueFormat
{
    Raw = 'Raw',
    Bearer = 'Bearer',
    Basic = 'Basic',
    Prefixed = 'Prefixed',
}

// @DataContract
export class MarketplaceTokenMappingDto
{
    // @DataMember
    public token: string;

    // @DataMember
    public resolver: MarketplaceTokenResolverKind;

    // @DataMember
    public value?: string;

    // @DataMember
    public secretKeys?: string[];

    // @DataMember
    public format: MarketplaceSecretValueFormat;

    public constructor(init?: Partial<MarketplaceTokenMappingDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class MarketplaceFunctionDto implements IHasViewId
{
    // @DataMember
    public viewId: string;

    // @DataMember
    public integrationViewId: string;

    // @DataMember
    public functionKey: string;

    // @DataMember
    public displayName: string;

    // @DataMember
    public description?: string;

    // @DataMember
    public isEnabled: boolean;

    // @DataMember
    public requestTemplate: string;

    // @DataMember
    public mappedTokens: MarketplaceTokenMappingDto[] = [];

    public constructor(init?: Partial<MarketplaceFunctionDto>) { (Object as any).assign(this, init); }
}

export enum MarketplaceFieldType
{
    String = 'String',
    Number = 'Number',
    Boolean = 'Boolean',
    Url = 'Url',
    Email = 'Email',
    Json = 'Json',
    MultilineText = 'MultilineText',
}

// @DataContract
export class MarketplaceFieldDefinitionDto
{
    // @DataMember
    public key: string;

    // @DataMember
    public label: string;

    // @DataMember
    public description?: string;

    // @DataMember
    public documentationUrl?: string;

    // @DataMember
    public type: MarketplaceFieldType;

    // @DataMember
    public isRequired: boolean;

    // @DataMember
    public defaultValue?: string;

    // @DataMember
    public placeholder?: string;

    // @DataMember
    public validationPattern?: string;

    // @DataMember
    public allowedValues?: IReadOnlyList<string>;

    public constructor(init?: Partial<MarketplaceFieldDefinitionDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class MarketplaceFunctionParameterDto
{
    // @DataMember
    public name: string;

    // @DataMember
    public type: string;

    // @DataMember
    public description?: string;

    // @DataMember
    public isRequired: boolean;

    // @DataMember
    public defaultValue?: string;

    public constructor(init?: Partial<MarketplaceFunctionParameterDto>) { (Object as any).assign(this, init); }
}

export enum MarketplaceParameterLocation
{
    Body = 'Body',
    Header = 'Header',
    Query = 'Query',
    Path = 'Path',
}

// @DataContract
export class MarketplaceParameterSpecDto
{
    // @DataMember
    public name: string;

    // @DataMember
    public location: MarketplaceParameterLocation;

    // @DataMember
    public valueTemplate?: string;

    // @DataMember
    public label?: string;

    // @DataMember
    public description?: string;

    // @DataMember
    public documentationUrl?: string;

    // @DataMember
    public type?: string;

    // @DataMember
    public isRequired: boolean;

    public constructor(init?: Partial<MarketplaceParameterSpecDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class MarketplaceHttpRequestSpecDto
{
    // @DataMember
    public method: string;

    // @DataMember
    public pathTemplate: string;

    // @DataMember
    public parameters: IReadOnlyList<MarketplaceParameterSpecDto>;

    // @DataMember
    public contentType?: string;

    public constructor(init?: Partial<MarketplaceHttpRequestSpecDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class MarketplaceFunctionDefinitionDto
{
    // @DataMember
    public definitionId?: string;

    // @DataMember
    public functionKey: string;

    // @DataMember
    public displayName: string;

    // @DataMember
    public description?: string;

    // @DataMember
    public group?: string;

    // @DataMember
    public parameters: IReadOnlyList<MarketplaceFunctionParameterDto>;

    // @DataMember
    public requestSchema?: string;

    // @DataMember
    public requestTemplate?: string;

    // @DataMember
    public request?: MarketplaceHttpRequestSpecDto;

    // @DataMember
    public defaultTokenMappings: MarketplaceTokenMappingDto[] = [];

    public constructor(init?: Partial<MarketplaceFunctionDefinitionDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class MarketplaceListingDto implements IHasViewId
{
    // @DataMember
    public viewId: string;

    // @DataMember
    public slug: string;

    // @DataMember
    public displayName: string;

    // @DataMember
    public vendor: string;

    // @DataMember
    public category: MarketplaceCategory;

    // @DataMember
    public transport: MarketplaceTransport;

    // @DataMember
    public description?: string;

    // @DataMember
    public iconUrl?: string;

    // @DataMember
    public documentationUrl?: string;

    // @DataMember
    public isOfficial: boolean;

    // @DataMember
    public tags: IReadOnlyList<string>;

    // @DataMember
    public specVersion: number;

    // @DataMember
    public configFields: IReadOnlyList<MarketplaceFieldDefinitionDto>;

    // @DataMember
    public secretFields: IReadOnlyList<MarketplaceFieldDefinitionDto>;

    // @DataMember
    public functions: IReadOnlyList<MarketplaceFunctionDefinitionDto>;

    public constructor(init?: Partial<MarketplaceListingDto>) { (Object as any).assign(this, init); }
}

export class AdminPortalModuleDto
{
    public key: string;
    public displayName: string;
    public enabled: boolean;

    public constructor(init?: Partial<AdminPortalModuleDto>) { (Object as any).assign(this, init); }
}

export class AiChatEntryWireDto
{
    public kind: string;
    public id: string;
    public seq: number;
    public atUtc: string;
    public refEntryId?: string;
    public workItemId?: string;
    public feedback?: string;
    public feedbackAtUtc?: string;
    public feedbackByUserAuthId?: string;

    public constructor(init?: Partial<AiChatEntryWireDto>) { (Object as any).assign(this, init); }
}

export class AiChatEntryAttachmentWireDto
{
    public id: string;
    public name: string;

    public constructor(init?: Partial<AiChatEntryAttachmentWireDto>) { (Object as any).assign(this, init); }
}

export class UserMessageEntryWireDto extends AiChatEntryWireDto
{
    public kind: string;
    public text: string;
    public attachments: AiChatEntryAttachmentWireDto[] = [];

    public constructor(init?: Partial<UserMessageEntryWireDto>) { super(init); (Object as any).assign(this, init); }
}

export class AiChatEntrySourceWireDto
{
    public kind: string;
    public requirementId?: string;
    public sessionId?: string;
    public entryId?: string;
    public entrySeq?: number;
    public artifactId?: string;
    public label?: string;
    public step?: number;

    public constructor(init?: Partial<AiChatEntrySourceWireDto>) { (Object as any).assign(this, init); }
}

export class AssistantTextEntryWireDto extends AiChatEntryWireDto
{
    public kind: string;
    public text: string;
    public isStreaming: boolean;
    public sources: AiChatEntrySourceWireDto[] = [];

    public constructor(init?: Partial<AssistantTextEntryWireDto>) { super(init); (Object as any).assign(this, init); }
}

export class AiChatQuestionOptionWireDto
{
    public value: string;
    public label: string;

    public constructor(init?: Partial<AiChatQuestionOptionWireDto>) { (Object as any).assign(this, init); }
}

export class AiChatQuestionWireDto
{
    public id: string;
    public text: string;
    public options: AiChatQuestionOptionWireDto[] = [];
    public default?: string;
    public allowFreeText: boolean;

    public constructor(init?: Partial<AiChatQuestionWireDto>) { (Object as any).assign(this, init); }
}

export class AiChatGateResultWireDto
{
    public class: string;
    public reason: string;
    public affectedRequirementIds: string[] = [];

    public constructor(init?: Partial<AiChatGateResultWireDto>) { (Object as any).assign(this, init); }
}

export class AssistantQuestionEntryWireDto extends AiChatEntryWireDto
{
    public kind: string;
    public questions: AiChatQuestionWireDto[] = [];
    public status: string;
    public scope: string;
    public gate?: AiChatGateResultWireDto;

    public constructor(init?: Partial<AssistantQuestionEntryWireDto>) { super(init); (Object as any).assign(this, init); }
}

export class UserAnswerEntryWireDto extends AiChatEntryWireDto
{
    public kind: string;
    public answers: { [index:string]: string; } = {};

    public constructor(init?: Partial<UserAnswerEntryWireDto>) { super(init); (Object as any).assign(this, init); }
}

export class AiChatPlanStepInputsWireDto
{
    public artifacts: string[] = [];
    public requirements: string[] = [];

    public constructor(init?: Partial<AiChatPlanStepInputsWireDto>) { (Object as any).assign(this, init); }
}

export class AiChatPlanStepDoneCheckWireDto
{
    public check: string;
    public argsJson: string;

    public constructor(init?: Partial<AiChatPlanStepDoneCheckWireDto>) { (Object as any).assign(this, init); }
}

export class AiChatPlanStepLoopWireDto
{
    public maxIterations?: number;
    public maxToolCalls: number;

    public constructor(init?: Partial<AiChatPlanStepLoopWireDto>) { (Object as any).assign(this, init); }
}

export class AiChatPlanStepWireDto
{
    public n: number;
    public tool: string;
    public title: string;
    public goal?: string;
    public inputs: AiChatPlanStepInputsWireDto;
    public dependsOn: number[] = [];
    public replaces?: number;
    public done: AiChatPlanStepDoneCheckWireDto[] = [];
    public loop: AiChatPlanStepLoopWireDto;
    public difficulty?: number;

    public constructor(init?: Partial<AiChatPlanStepWireDto>) { (Object as any).assign(this, init); }
}

export class PlanEntryWireDto extends AiChatEntryWireDto
{
    public kind: string;
    public goal: string;
    public steps: AiChatPlanStepWireDto[] = [];
    public status: string;
    public gate?: AiChatGateResultWireDto;
    public difficulty?: number;
    public difficultyReason?: string;
    public deltaOf?: string;

    public constructor(init?: Partial<PlanEntryWireDto>) { super(init); (Object as any).assign(this, init); }
}

export class UserDecisionEntryWireDto extends AiChatEntryWireDto
{
    public kind: string;
    public decision: string;
    public comment?: string;

    public constructor(init?: Partial<UserDecisionEntryWireDto>) { super(init); (Object as any).assign(this, init); }
}

export class AiChatStepLogLineWireDto
{
    public seq: number;
    public tool: string;
    public agent?: string;
    public status: string;
    public detail?: string;

    public constructor(init?: Partial<AiChatStepLogLineWireDto>) { (Object as any).assign(this, init); }
}

export class RunStepEntryWireDto extends AiChatEntryWireDto
{
    public kind: string;
    public n: number;
    public tool: string;
    public title: string;
    public status: string;
    public resultSummary?: string;
    public error?: string;
    public log: AiChatStepLogLineWireDto[] = [];

    public constructor(init?: Partial<RunStepEntryWireDto>) { super(init); (Object as any).assign(this, init); }
}

export class ActionPendingEntryWireDto extends AiChatEntryWireDto
{
    public kind: string;
    public tool: string;
    public argumentsJson: string;
    public status: string;

    public constructor(init?: Partial<ActionPendingEntryWireDto>) { super(init); (Object as any).assign(this, init); }
}

export class NoticeEntryWireDto extends AiChatEntryWireDto
{
    public kind: string;
    public text: string;
    public level: string;

    public constructor(init?: Partial<NoticeEntryWireDto>) { super(init); (Object as any).assign(this, init); }
}

export class ConversationSnapshotEntryWireDto extends AiChatEntryWireDto
{
    public kind: string;
    public snapshotId: string;
    public coversUpToSeq: number;

    public constructor(init?: Partial<ConversationSnapshotEntryWireDto>) { super(init); (Object as any).assign(this, init); }
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

export enum SubscriptionType
{
    ManagedService = 'ManagedService',
    License = 'License',
}

export interface IHasAccountId
{
    accountId: string;
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

// @DataContract
export class TagDescriptionDto
{
    // @DataMember
    public title: string;

    // @DataMember
    public description?: string;

    public constructor(init?: Partial<TagDescriptionDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class TagTranslationDto
{
    // @DataMember
    public language: string;

    // @DataMember
    public content: TagDescriptionDto;

    public constructor(init?: Partial<TagTranslationDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class TagDefinitionBaseDto
{
    // @DataMember
    public tag: string;

    // @DataMember
    public translations: TagTranslationDto[] = [];

    public constructor(init?: Partial<TagDefinitionBaseDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class GroupDefinitionDto extends TagDefinitionBaseDto
{

    public constructor(init?: Partial<GroupDefinitionDto>) { super(init); (Object as any).assign(this, init); }
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

// @DataContract
export class TagDefinitionDto extends TagDefinitionBaseDto
{
    // @DataMember
    public defaultDelivery: { [index:string]: boolean; } = {};

    public constructor(init?: Partial<TagDefinitionDto>) { super(init); (Object as any).assign(this, init); }
}

export class EmailAddress
{
    public address: string;

    public constructor(init?: Partial<EmailAddress>) { (Object as any).assign(this, init); }
}

export class AggregateId
    {
    public value: string;
        public get viewId(): string { return this.value; }

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
    PayPal = 'PayPal',
    Adyen = 'Adyen',
    Mollie = 'Mollie',
    Paddle = 'Paddle',
    LemonSqueezy = 'LemonSqueezy',
    AppleInApp = 'AppleInApp',
    GoogleInApp = 'GoogleInApp',
    AuthorizeNet = 'AuthorizeNet',
    Braintree = 'Braintree',
    CheckOutCom = 'CheckOutCom',
    WooCommerce = 'WooCommerce',
    Magento = 'Magento',
    Worldpay = 'Worldpay',
}

export class PaymentCustomerRef extends ResourceRef
{
    public kind: ResourceRefKind;
    public source: ResourceSource;
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

export class ProjectLegalDocuments
{
    public termsMarkdown?: string;
    public privacyMarkdown?: string;

    public constructor(init?: Partial<ProjectLegalDocuments>) { (Object as any).assign(this, init); }
}

export class AuthId implements IHasDomainEntityId
    {
    public value: string;
        public get viewId(): string { return this.value; }

    public constructor(init?: Partial<AuthId>) { (Object as any).assign(this, init); }
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

export class Tag
{

    public constructor(init?: Partial<Tag>) { (Object as any).assign(this, init); }
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

export class TagDefinition extends BaseTagDefinition
{
    public defaultDelivery: { [index:string]: boolean; } = {};

    public constructor(init?: Partial<TagDefinition>) { super(init); (Object as any).assign(this, init); }
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

// @DataContract
export class TimeZone
{
    // @DataMember
    public zoneId: string;

    public constructor(init?: Partial<TimeZone>) { (Object as any).assign(this, init); }
}

export class PolicyId
{
    public template: string;
    public tenancyScopeViewId: string;
    public viewId: string;
    public isSystem: boolean;

    public constructor(init?: Partial<PolicyId>) { (Object as any).assign(this, init); }
}

export enum PermissionEffect
{
    Allow = 'Allow',
    Deny = 'Deny',
}

// @Flags()
export enum ApplicationModule
{
    Account = 0,
    Membership = 1,
    Database = 2,
    Files = 4,
    Code = 8,
    Email = 16,
    Push = 32,
    Payment = 64,
    Scheduler = 128,
    Logging = 256,
    ServerEvents = 512,
    Ai = 1024,
    Sms = 2048,
    Project = 4096,
    Compliance = 8192,
    Contacts = 16384,
    Marketplace = 32768,
}

export class PermissionAction
{
    public module?: ApplicationModule;
    public operation?: string;
    public isModuleWildcard: boolean;
    public isOperationWildcard: boolean;
    public isConcrete: boolean;
    public specificity: number;

    public constructor(init?: Partial<PermissionAction>) { (Object as any).assign(this, init); }
}

export class ResourceKind
{
    public name: string;

    public constructor(init?: Partial<ResourceKind>) { (Object as any).assign(this, init); }
}

export class ResourceIdentifier
{
    public value: string;

    public constructor(init?: Partial<ResourceIdentifier>) { (Object as any).assign(this, init); }
}

export class ResourcePattern
{
    public account?: AccountId;
    public project?: ProjectId;
    public module?: ApplicationModule;
    public kind?: ResourceKind;
    public id?: ResourceIdentifier;
    public isAccountWildcard: boolean;
    public isProjectWildcard: boolean;
    public isModuleWildcard: boolean;
    public isKindWildcard: boolean;
    public isIdWildcard: boolean;
    public isConcrete: boolean;
    public isFullWildcard: boolean;
    public specificity: number;

    public constructor(init?: Partial<ResourcePattern>) { (Object as any).assign(this, init); }
}

export class Permission
{
    public sid?: string;
    public effect: PermissionEffect;
    public actions: PermissionAction[] = [];
    public resources: ResourcePattern[] = [];

    public constructor(init?: Partial<Permission>) { (Object as any).assign(this, init); }
}

export class MembershipPolicy
{
    public id: PolicyId;
    public name: DisplayName;
    public description?: string;
    public permissions: Permission[] = [];
    public disabled: boolean;
    public isSystem: boolean;

    public constructor(init?: Partial<MembershipPolicy>) { (Object as any).assign(this, init); }
}

export class RoleId
{
    public template: string;
    public tenancyScopeViewId: string;
    public viewId: string;
    public isSystem: boolean;

    public constructor(init?: Partial<RoleId>) { (Object as any).assign(this, init); }
}

export class MembershipRole
{
    public id: RoleId;
    public name: DisplayName;
    public description?: string;
    public attachedPolicies: PolicyId[] = [];
    public disabled: boolean;
    public isSystem: boolean;

    public constructor(init?: Partial<MembershipRole>) { (Object as any).assign(this, init); }
}

export class BillingPeriod
{
    public year: number;
    public month: number;
    public startUtc: string;
    public endExclusiveUtc: string;
    public lastInstantUtc: string;

    public constructor(init?: Partial<BillingPeriod>) { (Object as any).assign(this, init); }
}

export class AtlasClusterChargeRecord
{
    public atlasProjectId: string;
    public atlasClusterName: string;
    public cents: number;

    public constructor(init?: Partial<AtlasClusterChargeRecord>) { (Object as any).assign(this, init); }
}

export class AtlasUsageRecord
{
    public period: BillingPeriod;
    public totalCents: number;
    public perCluster: IReadOnlyList<AtlasClusterChargeRecord>;
    public recordedAtUtc: UtcDateTime;

    public constructor(init?: Partial<AtlasUsageRecord>) { (Object as any).assign(this, init); }
}

export enum UsageIngestionFailureReason
{
    UnknownCustomer = 1,
    MeterNotFound = 2,
    ValidationFailed = 3,
    ImportSetFailed = 4,
}

export class UsageIngestionFailure
{
    public reason: UsageIngestionFailureReason;
    public period?: BillingPeriod;
    public stripeEventId: string;
    public message: string;
    public reportedAtUtc: UtcDateTime;

    public constructor(init?: Partial<UsageIngestionFailure>) { (Object as any).assign(this, init); }
}

// @DataContract
export class DeleteTrigger extends CodeMashRequestBase
{
    // @DataMember
    public triggerId: string;

    // @DataMember
    public triggerType: TriggerType;

    // @DataMember
    public schemaId?: string;

    public constructor(init?: Partial<DeleteTrigger>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class DisableTrigger extends CodeMashRequestBase
{
    // @DataMember
    public triggerId: string;

    // @DataMember
    public triggerType: TriggerType;

    // @DataMember
    public schemaId?: string;

    public constructor(init?: Partial<DisableTrigger>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class EnableTrigger extends CodeMashRequestBase
{
    // @DataMember
    public triggerId: string;

    // @DataMember
    public triggerType: TriggerType;

    // @DataMember
    public schemaId?: string;

    public constructor(init?: Partial<EnableTrigger>) { super(init); (Object as any).assign(this, init); }
}

export class GetTrigger extends CodeMashRequestBase
{
    public id: string;
    public schemaId?: string;

    public constructor(init?: Partial<GetTrigger>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class SaveTrigger extends CodeMashRequestBase
{
    // @DataMember
    public trigger: SaveTriggerRequest;

    public constructor(init?: Partial<SaveTrigger>) { super(init); (Object as any).assign(this, init); }
}

export class CredentialsSettingsModeDto
{
    public name?: string;
    public logoutUrl?: string;

    public constructor(init?: Partial<CredentialsSettingsModeDto>) { (Object as any).assign(this, init); }
}

export class Integration implements IIntegrationIdentification, IHasDomainEntityId
    {
    public integrationId: IntegrationId;
        public get viewId(): string { return this.integrationId?.viewId; }
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

export class MembershipIntegration extends Integration
{
    public provider: MembershipProvider;

    public constructor(init?: Partial<MembershipIntegration>) { super(init); (Object as any).assign(this, init); }
}

export class TriggerId extends AggregateId implements IHasDomainEntityId
{

    public constructor(init?: Partial<TriggerId>) { super(init); (Object as any).assign(this, init); }
}

export class TriggerAction
{
    public type: TriggerActionType;
    public integrationId?: IntegrationId;

    public constructor(init?: Partial<TriggerAction>) { (Object as any).assign(this, init); }
}

// @DataContract
export class TemplateCode
{

    public constructor(init?: Partial<TemplateCode>) { (Object as any).assign(this, init); }
}

export class Trigger implements IHasDomainEntityId
{
    public triggerId: TriggerId;
        public get viewId(): string { return this.triggerId?.viewId; }
    public name: DisplayName;
    public triggerAction: TriggerAction;
    public activationCode?: TemplateCode;
    public description?: string;
    public isEnabled: boolean;
    public env: Env;
    public integrationId?: IntegrationId;

    public constructor(init?: Partial<Trigger>) { (Object as any).assign(this, init); }
}

export class MembershipTrigger extends Trigger
{
    public when: MembershipTriggerType;

    public constructor(init?: Partial<MembershipTrigger>) { super(init); (Object as any).assign(this, init); }
}

export class TriggerByIdEventBase
{
    public triggerId: TriggerId;

    public constructor(init?: Partial<TriggerByIdEventBase>) { (Object as any).assign(this, init); }
}

export class SchemaSettingsDto
{
    // @DataMember
    public softDelete: boolean;

    // @DataMember
    public hasRecordOwner: boolean;

    // @DataMember
    public description?: string;

    public constructor(init?: Partial<SchemaSettingsDto>) { (Object as any).assign(this, init); }
}

export class SchemaListColumnDto
{
    // @DataMember
    public field: string;

    public constructor(init?: Partial<SchemaListColumnDto>) { (Object as any).assign(this, init); }
}

export class SchemaListSortDto
{
    // @DataMember
    public field: string;

    // @DataMember
    public order: number;

    public constructor(init?: Partial<SchemaListSortDto>) { (Object as any).assign(this, init); }
}

export class SchemaListSettingsDto
{
    // @DataMember
    public columns: SchemaListColumnDto[] = [];

    // @DataMember
    public defaultSort?: SchemaListSortDto;

    public constructor(init?: Partial<SchemaListSettingsDto>) { (Object as any).assign(this, init); }
}

export class ImportColumnMappingDto
{
    // @DataMember
    public csvColumnIndex: number;

    // @DataMember
    public csvHeader?: string;

    // @DataMember
    public propertyName?: string;

    // @DataMember
    public dontImportOnError: boolean;

    public constructor(init?: Partial<ImportColumnMappingDto>) { (Object as any).assign(this, init); }
}

export class MongoDbAggregateId extends AggregateId implements IHasDomainEntityId
{

    public constructor(init?: Partial<MongoDbAggregateId>) { super(init); (Object as any).assign(this, init); }
}

export class MongoDbAggregateQuery
{
    public value: string;

    public constructor(init?: Partial<MongoDbAggregateQuery>) { (Object as any).assign(this, init); }
}

export class SchemaId extends AggregateId implements IHasDomainEntityId
{

    public constructor(init?: Partial<SchemaId>) { super(init); (Object as any).assign(this, init); }
}

export class MongoDbAggregate
{
    public id: MongoDbAggregateId;
    public displayName: DisplayName;
    public description?: string;
    public query: MongoDbAggregateQuery;
    public schemaId: SchemaId;

    public constructor(init?: Partial<MongoDbAggregate>) { (Object as any).assign(this, init); }
}

export class DatabaseIntegration extends Integration
{
    public provider: DatabaseProvider;
    public status: IntegrationStatus;
    public atlasProjectId?: string;
    public atlasClusterName?: string;
    public failureReason?: string;

    public constructor(init?: Partial<DatabaseIntegration>) { super(init); (Object as any).assign(this, init); }
}

export enum ProjectStatus
{
    Active = 'Active',
    Provisioning = 'Provisioning',
    ProvisioningFailed = 'ProvisioningFailed',
    NoDatabase = 'NoDatabase',
    Disabled = 'Disabled',
    Suspended = 'Suspended',
    Removed = 'Removed',
}

export class SchemaName
{
    public value: string;
    public title: string;

    public constructor(init?: Partial<SchemaName>) { (Object as any).assign(this, init); }
}

export class JsonSchemaFieldName
{
    public fieldName: string;

    public constructor(init?: Partial<JsonSchemaFieldName>) { (Object as any).assign(this, init); }
}

export class JsonSchemaField
{
    public fieldName: JsonSchemaFieldName;

    public constructor(init?: Partial<JsonSchemaField>) { (Object as any).assign(this, init); }
}

export class DataSchema
{
    public rawJson: string;
    public fields: JsonSchemaField[] = [];

    public constructor(init?: Partial<DataSchema>) { (Object as any).assign(this, init); }
}

export class VisualSchema
{
    public rawJson: string;

    public constructor(init?: Partial<VisualSchema>) { (Object as any).assign(this, init); }
}

export class SchemaDraft
{
    public dataSchema: DataSchema;
    public visualSchema: VisualSchema;
    public updatedAt: string;

    public constructor(init?: Partial<SchemaDraft>) { (Object as any).assign(this, init); }
}

export class SchemaVersion
{
    public value: number;

    public constructor(init?: Partial<SchemaVersion>) { (Object as any).assign(this, init); }
}

export class MetaSchemaVersion
{
    public value: number;

    public constructor(init?: Partial<MetaSchemaVersion>) { (Object as any).assign(this, init); }
}

export class PublishedSchemaVersion
{
    public version: SchemaVersion;
    public dataSchema: DataSchema;
    public visualSchema: VisualSchema;
    public metaSchemaVersion: MetaSchemaVersion;
    public publishedAt: string;

    public constructor(init?: Partial<PublishedSchemaVersion>) { (Object as any).assign(this, init); }
}

export class SchemaSettings
{
    public softDelete: boolean;
    public hasRecordOwner: boolean;
    public description?: string;

    public constructor(init?: Partial<SchemaSettings>) { (Object as any).assign(this, init); }
}

export class Schema implements IHasDomainEntityId
{
    public schemaName: SchemaName;
    public id: SchemaId;
        public get viewId(): string { return this.id?.viewId; }
    public env: Env;
    public draft?: SchemaDraft;
    public publishedVersions: IReadOnlyList<PublishedSchemaVersion>;
    public triggers?: Trigger[];
    public settings?: SchemaSettings;

    public constructor(init?: Partial<Schema>) { (Object as any).assign(this, init); }
}

export class SchemaDiff
{
    public addedFields: IReadOnlyList<string>;
    public removedFields: IReadOnlyList<string>;
    public typeChangedFields: IReadOnlyList<string>;
    public validatorTightenedFields: IReadOnlyList<string>;
    public isEmpty: boolean;

    public constructor(init?: Partial<SchemaDiff>) { (Object as any).assign(this, init); }
}

export class TaxonomyId extends AggregateId implements IHasDomainEntityId
{

    public constructor(init?: Partial<TaxonomyId>) { super(init); (Object as any).assign(this, init); }
}

export class TaxonomyName
{
    public value: string;
    public title: string;

    public constructor(init?: Partial<TaxonomyName>) { (Object as any).assign(this, init); }
}

export class RecordId
{
    public id: string;

    public constructor(init?: Partial<RecordId>) { (Object as any).assign(this, init); }
}

export class Taxonomy implements IHasDomainEntityId
{
    public parentId?: TaxonomyId;
    public id: TaxonomyId;
        public get viewId(): string { return this.id?.viewId; }
    public name: TaxonomyName;
    public description?: string;
    public termsMetaVisualSchema?: VisualSchema;
    public termsMetaDataSchema?: DataSchema;
    public dependencies?: TaxonomyId[];
    public recordId?: RecordId;

    public constructor(init?: Partial<Taxonomy>) { (Object as any).assign(this, init); }
}

export class SchemaTrigger extends Trigger
{
    public schemaId: SchemaId;
    public when: SchemaTriggerType;
    public configuration?: TemplateCode;

    public constructor(init?: Partial<SchemaTrigger>) { super(init); (Object as any).assign(this, init); }
}

export interface IPasskeyMessage
{
}

export class AuthUserName
{
    public value: string;

    public constructor(init?: Partial<AuthUserName>) { (Object as any).assign(this, init); }
}

export enum AuthType
{
    Service = 'Service',
    Email = 'Email',
    UserName = 'UserName',
    Phone = 'Phone',
    Guest = 'Guest',
    Social = 'Social',
}

export class IpAddress
{
    public ip: string;

    public constructor(init?: Partial<IpAddress>) { (Object as any).assign(this, init); }
}

export class AccessInformation
{
    public ip?: IpAddress;
    public date?: UtcDateTime;
    public zone?: TimeZone;

    public constructor(init?: Partial<AccessInformation>) { (Object as any).assign(this, init); }
}

export class Registration
{
    public registrationInformation: AccessInformation;

    public constructor(init?: Partial<Registration>) { (Object as any).assign(this, init); }
}

export class Login
{
    public needChangePasswordOnNextLogin: boolean;
    public lastAccessInformation?: AccessInformation;

    public constructor(init?: Partial<Login>) { (Object as any).assign(this, init); }
}

export class Phone
{
    public value: string;

    public constructor(init?: Partial<Phone>) { (Object as any).assign(this, init); }
}

// @DataContract
export class FirstName
{
    // @DataMember
    public value: string;

    public constructor(init?: Partial<FirstName>) { (Object as any).assign(this, init); }
}

// @DataContract
export class LastName
{
    // @DataMember
    public value: string;

    public constructor(init?: Partial<LastName>) { (Object as any).assign(this, init); }
}

export class MidName
{
    public value: string;

    public constructor(init?: Partial<MidName>) { (Object as any).assign(this, init); }
}

export class FullName
{
    public firstName?: FirstName;
    public midName?: MidName;
    public lastName?: LastName;
    public title?: string;

    public constructor(init?: Partial<FullName>) { (Object as any).assign(this, init); }
}

export class City
{
    public value: string;

    public constructor(init?: Partial<City>) { (Object as any).assign(this, init); }
}

export class Country
{
    public code: string;
    public name: string;

    public constructor(init?: Partial<Country>) { (Object as any).assign(this, init); }
}

export class AddressLine
{
    public value: string;

    public constructor(init?: Partial<AddressLine>) { (Object as any).assign(this, init); }
}

export class PostalCode
{
    public value: string;

    public constructor(init?: Partial<PostalCode>) { (Object as any).assign(this, init); }
}

export class CountryState
{
    public value: string;

    public constructor(init?: Partial<CountryState>) { (Object as any).assign(this, init); }
}

export class Address
{
    public city?: City;
    public country?: Country;
    public addressLine1?: AddressLine;
    public addressLine2?: AddressLine;
    public postalCode?: PostalCode;
    public state?: CountryState;

    public constructor(init?: Partial<Address>) { (Object as any).assign(this, init); }
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

export class UserMarketingPreferences
{
    public blockAllMarketingMessages: boolean;
    public blockedTags?: { [index:string]: HashSet<Tag>; };
    public blockReasons?: MarketingBlockReason[];

    public constructor(init?: Partial<UserMarketingPreferences>) { (Object as any).assign(this, init); }
}

export class UserGeneralInfo implements IBindableContract
{
    public phone?: Phone;
    public primaryEmail?: EmailAddress;
    public displayName?: DisplayName;
    public firstName?: FirstName;
    public lastName?: LastName;
    public fullName?: FullName;
    public address?: Address;
    public company?: string;
    public gender?: Gender;
    public birthDate?: UtcDateTime;
    public timeZone?: TimeZone;
    public language?: Language;
    public marketingPreferences?: UserMarketingPreferences;
    public notes?: string;
    public extraMetadata?: string;

    public constructor(init?: Partial<UserGeneralInfo>) { (Object as any).assign(this, init); }
}

export enum AuthStatus
{
    Registered = 0,
    PendingValidation = 2,
    Active = 8,
    Unregistered = 16,
    Suspended = 32,
    InActive = 64,
    Blocked = 128,
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

export class PushDevices extends Array<PushDevice>
{

    public constructor(init?: Partial<PushDevices>) { super(); (Object as any).assign(this, init); }
}

export class UserId implements IHasDomainEntityId
    {
    public value: string;
        public get viewId(): string { return this.value; }

    public constructor(init?: Partial<UserId>) { (Object as any).assign(this, init); }
}

export class UserRef extends ResourceRef
{
    public kind: ResourceRefKind;
    public userId: UserId;

    public constructor(init?: Partial<UserRef>) { super(init); (Object as any).assign(this, init); }
}

export class Auth implements IBindableContract
{
    public id: AuthId;
    public roles?: RoleName[];
    public email?: EmailAddress;
    public userName?: AuthUserName;
    public type: AuthType;
    public registration: Registration;
    public login?: Login;
    public generalInfo?: UserGeneralInfo;
    public status: AuthStatus;
    public createdOn: UtcDateTime;
    public modifiedOn: UtcDateTime;
    public pushDevices?: PushDevices;
    public tags?: Tag[];
    public userRef?: UserRef;

    public constructor(init?: Partial<Auth>) { (Object as any).assign(this, init); }
}

export class FileIntegration extends Integration
{
    public provider: FileProvider;

    public constructor(init?: Partial<FileIntegration>) { super(init); (Object as any).assign(this, init); }
}

export class FileTrigger extends Trigger
{
    public when: FilesTriggerType;
    public fileResourceRef?: FileResourceRef;

    public constructor(init?: Partial<FileTrigger>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export enum EmailValidationProvider
{
    ZeroBounce = 1,
    NeverBounce = 2,
    Bouncer = 3,
    MailgunValidate = 4,
}

export class EmailValidationIntegrationRequest
{
    public integrationId?: string;
    public provider: EmailValidationProvider;
    public integrationName: string;
    public isEnabled: boolean;

    public constructor(init?: Partial<EmailValidationIntegrationRequest>) { (Object as any).assign(this, init); }
}

export class SaveEmailTemplate extends CodeMashRequestBase
{
    /** @description The display name of the email template. */
    // @ApiMember(Description="The display name of the email template.", IsRequired=true)
    public templateName: string;

    /** @description Optional free-text description of what the template is used for. */
    // @ApiMember(Description="Optional free-text description of what the template is used for.")
    public description?: string;

    /** @description The communication channel the template is intended for (e.g. Transactional, Marketing). */
    // @ApiMember(Description="The communication channel the template is intended for (e.g. Transactional, Marketing).")
    public communicationChannel: CommunicationChannel;

    /** @description Optional tags to organize/filter the template by. */
    // @ApiMember(Description="Optional tags to organize/filter the template by.")
    public tags?: string[];

    /** @description Optional static file attachments to send with every email using this template. */
    // @DataMember
    // @ApiMember(Description="Optional static file attachments to send with every email using this template.")
    public staticAttachments?: FileResourceRefDto[];

    /** @description The per-language content translations (subject/body) for this template. */
    // @ApiMember(Description="The per-language content translations (subject/body) for this template.", IsRequired=true)
    public translations: EmailMessageTranslationDto[] = [];

    public constructor(init?: Partial<SaveEmailTemplate>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class TranslationDto
{
    // @DataMember
    public language: string;

    // @DataMember
    public content: string;

    public constructor(init?: Partial<TranslationDto>) { (Object as any).assign(this, init); }
}

export class EmailFooterId
{
    public value: string;

    public constructor(init?: Partial<EmailFooterId>) { (Object as any).assign(this, init); }
}

export class EmailFooter
{
    public id: EmailFooterId;
    public displayName: DisplayName;
    public translations: MessageTranslation<TemplateCode>[] = [];
    public env: Env;

    public constructor(init?: Partial<EmailFooter>) { (Object as any).assign(this, init); }
}

// @DataContract
export class EmailSenderName
{

    public constructor(init?: Partial<EmailSenderName>) { (Object as any).assign(this, init); }
}

export class EmailIntegration extends Integration
{
    public provider: EmailProvider;
    public emailAddress: EmailAddress;
    public emailSenderName?: EmailSenderName;

    public constructor(init?: Partial<EmailIntegration>) { super(init); (Object as any).assign(this, init); }
}

export class EmailSignatureId
{
    public value: string;

    public constructor(init?: Partial<EmailSignatureId>) { (Object as any).assign(this, init); }
}

export class EmailSignature
{
    public id: EmailSignatureId;
    public displayName: DisplayName;
    public translations: MessageTranslation<TemplateCode>[] = [];
    public env: Env;

    public constructor(init?: Partial<EmailSignature>) { (Object as any).assign(this, init); }
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
export class EmailSubject
{

    public constructor(init?: Partial<EmailSubject>) { (Object as any).assign(this, init); }
}

// @DataContract
export class EmailBody
{
    // @DataMember
    public code: TemplateCode;

    // @DataMember
    public structure?: string;

    // @DataMember
    public emailTemplateEngine: EmailTemplateEngine;

    public constructor(init?: Partial<EmailBody>) { (Object as any).assign(this, init); }
}

// @DataContract
export class EmailMessageContent
{
    // @DataMember(Order=1)
    public subject: EmailSubject;

    // @DataMember(Order=2)
    public body: EmailBody;

    // @DataMember(Order=3)
    public staticAttachments?: FileResourceRef[];

    public constructor(init?: Partial<EmailMessageContent>) { (Object as any).assign(this, init); }
}

// @DataContract
export class EmailTemplate extends Template<EmailMessageContent>
{
    // @DataMember
    public staticAttachments?: FileResourceRef[];

    public constructor(init?: Partial<EmailTemplate>) { super(init); (Object as any).assign(this, init); }
}

export class EmailValidationIntegration extends Integration
{
    public provider: EmailValidationProvider;

    public constructor(init?: Partial<EmailValidationIntegration>) { super(init); (Object as any).assign(this, init); }
}

export class CampaignId
{
    public id: string;

    public constructor(init?: Partial<CampaignId>) { (Object as any).assign(this, init); }
}

export class CampaignBatchId
{
    public id: string;

    public constructor(init?: Partial<CampaignBatchId>) { (Object as any).assign(this, init); }
}

export class NotificationId extends AggregateId implements IHasDomainEntityId
{

    public constructor(init?: Partial<NotificationId>) { super(init); (Object as any).assign(this, init); }
}

export enum CampaignStopReason
{
    UserRequested = 'UserRequested',
    ModuleDisabled = 'ModuleDisabled',
}

export enum EmailDeliveryEventType
{
    Unknown = 'Unknown',
    Delivered = 'Delivered',
    Open = 'Open',
    Click = 'Click',
    SoftBounce = 'SoftBounce',
    HardBounce = 'HardBounce',
    Complaint = 'Complaint',
    Unsubscribed = 'Unsubscribed',
}

export class SaveSmsTemplate extends CodeMashRequestBase
{
    /** @description Display name for the SMS template. */
    // @ApiMember(Description="Display name for the SMS template.", IsRequired=true)
    public templateName: string;

    /** @description Optional free-text description of the template's purpose. */
    // @ApiMember(Description="Optional free-text description of the template's purpose.")
    public description?: string;

    /** @description Whether this template is Transactional or Marketing SMS. */
    // @ApiMember(Description="Whether this template is Transactional or Marketing SMS.", IsRequired=true)
    public communicationChannel: CommunicationChannel;

    /** @description Optional tags to organize/filter templates. */
    // @ApiMember(Description="Optional tags to organize/filter templates.")
    public tags?: string[];

    /** @description The template's per-language translations (each with its own SMS body). */
    // @ApiMember(Description="The template's per-language translations (each with its own SMS body).", IsRequired=true)
    public translations: SmsMessageTranslationDto[] = [];

    public constructor(init?: Partial<SaveSmsTemplate>) { super(init); (Object as any).assign(this, init); }
}

export class SmsIntegrationRequest
{
    public integrationId?: string;
    public provider: SmsProvider;
    public integrationName: string;
    public isEnabled: boolean;

    public constructor(init?: Partial<SmsIntegrationRequest>) { (Object as any).assign(this, init); }
}

export class SmsIntegration extends Integration
{
    public provider: SmsProvider;

    public constructor(init?: Partial<SmsIntegration>) { super(init); (Object as any).assign(this, init); }
}

export class SmsTitle
{
    public value: TemplateCode;

    public constructor(init?: Partial<SmsTitle>) { (Object as any).assign(this, init); }
}

export class SmsBody
{
    public value: TemplateCode;

    public constructor(init?: Partial<SmsBody>) { (Object as any).assign(this, init); }
}

// @DataContract
export class SmsMessageContent
{
    // @DataMember(Order=1)
    public title: SmsTitle;

    // @DataMember(Order=2)
    public body: SmsBody;

    public constructor(init?: Partial<SmsMessageContent>) { (Object as any).assign(this, init); }
}

// @DataContract
export class SmsTemplate extends Template<SmsMessageContent>
{

    public constructor(init?: Partial<SmsTemplate>) { super(init); (Object as any).assign(this, init); }
}

export class CodeIntegration extends Integration
{
    public provider: CodeProvider;

    public constructor(init?: Partial<CodeIntegration>) { super(init); (Object as any).assign(this, init); }
}

export enum MarketplaceIntegrationTransport
{
    Mcp = 'Mcp',
    Rest = 'Rest',
    Code = 'Code',
    Internal = 'Internal',
    Sdk = 'Sdk',
}

export enum MarketplaceIntegrationCategory
{
    Other = 'Other',
    Crm = 'Crm',
    Erp = 'Erp',
    Marketing = 'Marketing',
    Communication = 'Communication',
    Productivity = 'Productivity',
    Storage = 'Storage',
    Analytics = 'Analytics',
    Identity = 'Identity',
    Payments = 'Payments',
    DevTools = 'DevTools',
    Ai = 'Ai',
    Files = 'Files',
    Database = 'Database',
    Calendar = 'Calendar',
}

export enum MarketplaceTokenResolver
{
    Static = 'Static',
    Request = 'Request',
    Project = 'Project',
    Initiator = 'Initiator',
    Custom = 'Custom',
    IntegrationConfig = 'IntegrationConfig',
    IntegrationSecret = 'IntegrationSecret',
}

export enum SecretValueFormat
{
    Raw = 'Raw',
    Bearer = 'Bearer',
    Basic = 'Basic',
    Prefixed = 'Prefixed',
}

export class MarketplaceTokenMapping
{
    public token: string;
    public resolver: MarketplaceTokenResolver;
    public value?: string;
    public secretKeys?: IReadOnlyList<string>;
    public format: SecretValueFormat;

    public constructor(init?: Partial<MarketplaceTokenMapping>) { (Object as any).assign(this, init); }
}

export class MarketplaceIntegration extends Integration
    {
        declare public capability: string;
    public listingViewId: string;
    public transport: MarketplaceIntegrationTransport;
    public vendor: string;
    public category: MarketplaceIntegrationCategory;
    public description?: string;
    public config: IReadOnlyDictionary<string, string>;
    public tokenMappings: IReadOnlyList<MarketplaceTokenMapping>;

    public constructor(init?: Partial<MarketplaceIntegration>) { super(init); (Object as any).assign(this, init); }
}

export class MarketplaceFunctionId implements IHasDomainEntityId
{
    public value: string;

    public constructor(init?: Partial<MarketplaceFunctionId>) { (Object as any).assign(this, init); }
}

export class MarketplaceFunction implements IHasDomainEntityId
{
    public functionId: MarketplaceFunctionId;
    public integrationId: IntegrationId;
    public env: Env;
    public functionKey: string;
    public displayName: DisplayName;
    public description?: string;
    public isEnabled: boolean;
    public requestTemplate: string;
    public mappedTokens: IReadOnlyList<MarketplaceTokenMapping>;
    public viewId: string;

    public constructor(init?: Partial<MarketplaceFunction>) { (Object as any).assign(this, init); }
}

export class SavePushTemplate extends CodeMashRequestBase
{
    /** @description The template's display name. */
    // @ApiMember(Description="The template's display name.", IsRequired=true)
    public templateName: string;

    /** @description Optional free-text description of the template's purpose. */
    // @ApiMember(Description="Optional free-text description of the template's purpose.")
    public description?: string;

    /** @description Whether the template is Transactional or Marketing. */
    // @ApiMember(Description="Whether the template is Transactional or Marketing.")
    public communicationChannel: CommunicationChannel;

    /** @description Optional tags for organizing/filtering templates. */
    // @ApiMember(Description="Optional tags for organizing/filtering templates.")
    public tags?: string[];

    /** @description The per-locale translations (title/body/subtitle) that make up the template content. */
    // @ApiMember(Description="The per-locale translations (title/body/subtitle) that make up the template content.", IsRequired=true)
    public translations: PushMessageTranslationDto[] = [];

    public constructor(init?: Partial<SavePushTemplate>) { super(init); (Object as any).assign(this, init); }
}

export interface IHasAccountId
{
    accountId: string;
}

// @DataContract
export class PushDeviceDto
{
    // @DataMember
    public deviceId?: string;

    // @DataMember
    public deviceOs: string;

    // @DataMember
    public token: string;

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

    public constructor(init?: Partial<PushDeviceDto>) { (Object as any).assign(this, init); }
}

export class PushCampaignRequest
{
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

    public constructor(init?: Partial<PushCampaignRequest>) { (Object as any).assign(this, init); }
}

export class PushIntegration extends Integration
{
    public provider: PushProvider;

    public constructor(init?: Partial<PushIntegration>) { super(init); (Object as any).assign(this, init); }
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

export class PaymentIntegration extends Integration
{
    public provider: PaymentGatewayPlatform;

    public constructor(init?: Partial<PaymentIntegration>) { super(init); (Object as any).assign(this, init); }
}

export class PaymentTrigger extends Trigger
{
    public when: PaymentTriggerType;
    public integrations?: IntegrationId[];
    public events?: string[];

    public constructor(init?: Partial<PaymentTrigger>) { super(init); (Object as any).assign(this, init); }
}

export class LoggingIntegration extends Integration
{
    public provider: LoggingProvider;

    public constructor(init?: Partial<LoggingIntegration>) { super(init); (Object as any).assign(this, init); }
}

export class ChatScreenContextDto
{
    public kind: string;
    public viewId?: string;

    public constructor(init?: Partial<ChatScreenContextDto>) { (Object as any).assign(this, init); }
}

export class LlmIntegration extends Integration
{
    public provider: LlmProvider;
    public defaultModel: string;

    public constructor(init?: Partial<LlmIntegration>) { super(init); (Object as any).assign(this, init); }
}

export class McpIntegration extends Integration
{
    public provider: McpProvider;
    public transport: McpTransport;
    public metadata: McpMetadata;

    public constructor(init?: Partial<McpIntegration>) { super(init); (Object as any).assign(this, init); }
}

export class WebhookDestinationId extends AggregateId implements IHasDomainEntityId
{

    public constructor(init?: Partial<WebhookDestinationId>) { super(init); (Object as any).assign(this, init); }
}

export class TriggerEventName
{
    public value: string;

    public constructor(init?: Partial<TriggerEventName>) { (Object as any).assign(this, init); }
}

export class WebhookDestination
{
    public destinationId: WebhookDestinationId;
    public destinationName: DisplayName;
    public endpointUrl: DomainUrl;
    public selectedEvents: TriggerEventName[] = [];
    public extraHeaders?: IReadOnlyDictionary<string, string>;
    public isEnabled: boolean;

    public constructor(init?: Partial<WebhookDestination>) { (Object as any).assign(this, init); }
}

export class WebhookIntegration extends Integration
    {
        declare public capability: string;
    public destinations: WebhookDestination[] = [];
    public extraHeaders?: IReadOnlyDictionary<string, string>;

    public constructor(init?: Partial<WebhookIntegration>) { super(init); (Object as any).assign(this, init); }
}

export class SchedulerTaskRequest
{
    public type: SchedulerTaskType;

    public constructor(init?: Partial<SchedulerTaskRequest>) { (Object as any).assign(this, init); }
}

export class TaskId extends AggregateId
{

    public constructor(init?: Partial<TaskId>) { super(init); (Object as any).assign(this, init); }
}


export class SchedulerTask implements IHasDomainEntityId
{
    public id: TaskId;
        public get viewId(): string { return this.id?.viewId; }
    public type: SchedulerTaskType;
    public name: DisplayName;
    public description?: string;
    public cron: CronExpression;
    public payloadJson: string;
    public initiatorId: AuthId;
    public isEnabled: boolean;
    public stopOnError: boolean;

    public constructor(init?: Partial<SchedulerTask>) { (Object as any).assign(this, init); }
}

export enum ResourceKindDto
{
    Contact = 'contact',
    Document = 'document',
    File = 'file',
    PaymentCustomer = 'paymentCustomer',
    Order = 'order',
    Payment = 'payment',
    Product = 'product',
    Integration = 'integration',
}

export class ResourceRefDto
{
    public projectId: string;
    public integrationId?: string;
    public kind: ResourceKindDto;

    public constructor(init?: Partial<ResourceRefDto>) { (Object as any).assign(this, init); }
}

export enum CaseResolutionFixKind
{
    CodeFix = 'CodeFix',
    ConfigChange = 'ConfigChange',
    CustomerInstruction = 'CustomerInstruction',
    KnownLimitation = 'KnownLimitation',
    Duplicate = 'Duplicate',
}

// @DataContract
export class CaseResolutionDto
{
    // @DataMember
    public problem: string;

    // @DataMember
    public symptoms: string[] = [];

    // @DataMember
    public rootCause: string;

    // @DataMember
    public fix: CaseResolutionFixKind;

    // @DataMember
    public fixDetail?: string;

    // @DataMember
    public affectedVersions?: string[];

    public constructor(init?: Partial<CaseResolutionDto>) { (Object as any).assign(this, init); }
}

export class SupportCaseId extends AggregateId
{
    public viewId: string;

    public constructor(init?: Partial<SupportCaseId>) { super(init); (Object as any).assign(this, init); }
}

export enum SupportCaseKind
{
    Question = 'Question',
    Bug = 'Bug',
    Incident = 'Incident',
    Billing = 'Billing',
    Security = 'Security',
    FeatureRequest = 'FeatureRequest',
}

export enum SupportCaseSeverity
{
    S1 = 1,
    S2 = 2,
    S3 = 3,
    S4 = 4,
}

export enum DeploymentMode
{
    Managed = 'Managed',
    SelfHosted = 'SelfHosted',
    Enterprise = 'Enterprise',
}

export enum SupportMessageAuthorKind
{
    Customer = 'Customer',
    Staff = 'Staff',
    Ai = 'Ai',
    System = 'System',
}

export class SupportMessageRef
{
    public messageId: string;
    public authorKind: SupportMessageAuthorKind;
    public authorId?: string;
    public sentOn: UtcDateTime;

    public constructor(init?: Partial<SupportMessageRef>) { (Object as any).assign(this, init); }
}

export enum SupportCaseStatus
{
    Open = 'Open',
    Triaged = 'Triaged',
    InProgress = 'InProgress',
    WaitingOnCustomer = 'WaitingOnCustomer',
    Resolved = 'Resolved',
    Closed = 'Closed',
}

export class CaseResolution
{
    public problem: string;
    public symptoms: IReadOnlyList<string>;
    public rootCause: string;
    public fix: CaseResolutionFixKind;
    public fixDetail?: string;
    public module?: string;
    public kind: SupportCaseKind;
    public severity: SupportCaseSeverity;
    public affectedVersions: IReadOnlyList<string>;
    public resolvedBy?: string;

    public constructor(init?: Partial<CaseResolution>) { (Object as any).assign(this, init); }
}

export enum SupportCaseCloseReason
{
    Manual = 'Manual',
    AutoClosedAfterResolve = 'AutoClosedAfterResolve',
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
    Staging = 'Staging',
    Production = 'Production',
}

// @DataContract
export class EchoLicenseDto
{
    // @DataMember(Name="domain")
    public domain?: string;

    // @DataMember(Name="accountId")
    public accountId?: string;

    // @DataMember(Name="email")
    public email?: string;

    // @DataMember(Name="release")
    public release?: string;

    // @DataMember(Name="expire")
    public expire: number;

    // @DataMember(Name="isTrial")
    public isTrial: boolean;

    // @DataMember(Name="cap")
    public cap: number;

    public constructor(init?: Partial<EchoLicenseDto>) { (Object as any).assign(this, init); }
}

export class EchoRegionDto
{
    public code: string;
    public displayName: string;
    public apiUrl: string;
    public hubUrl: string;

    public constructor(init?: Partial<EchoRegionDto>) { (Object as any).assign(this, init); }
}

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

// @DataContract
export class AccountOwnerDto
{
    // @DataMember
    public email: string;

    // @DataMember
    public displayName: string;

    // @DataMember
    public billingEmail?: string;

    // @DataMember
    public operationsEmail?: string;

    // @DataMember
    public securityEmail?: string;

    public constructor(init?: Partial<AccountOwnerDto>) { (Object as any).assign(this, init); }
}

// @Flags()
export enum AccountStatus
{
    Registered = 1,
    PendingValidation = 2,
    Active = 8,
    InActive = 16,
    Blocked = 32,
    Unregistered = 64,
}

// @DataContract
export class AccountStatusDto
{
    // @DataMember
    public accountId: string;

    // @DataMember
    public accountIdAsGuid: string;

    // @DataMember
    public userId: string;

    // @DataMember
    public loggedInUserId: string;

    // @DataMember
    public loggedInUserEmail?: string;

    // @DataMember
    public status: AccountStatus;

    // @DataMember
    public projectCap: number;

    // @DataMember
    public permissions: string[] = [];

    // @DataMember
    public roles: string[] = [];

    // @DataMember
    public allowedProjects?: string[];

    // @DataMember
    public trialWasIssued: boolean;

    public constructor(init?: Partial<AccountStatusDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class UsageBillingClusterChargeDto
{
    // @DataMember
    public atlasProjectId: string;

    // @DataMember
    public atlasClusterName: string;

    // @DataMember
    public cents: number;

    public constructor(init?: Partial<UsageBillingClusterChargeDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class UsageBillingPeriodDto
{
    // @DataMember
    public period: string;

    // @DataMember
    public totalCents: number;

    // @DataMember
    public perCluster: UsageBillingClusterChargeDto[] = [];

    // @DataMember
    public recordedAtUtc: string;

    public constructor(init?: Partial<UsageBillingPeriodDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class UsageBillingIngestionFailureDto
{
    // @DataMember
    public reason: string;

    // @DataMember
    public period?: string;

    // @DataMember
    public stripeEventId: string;

    // @DataMember
    public message: string;

    // @DataMember
    public reportedAtUtc: string;

    public constructor(init?: Partial<UsageBillingIngestionFailureDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class UsageBillingDto
{
    // @DataMember
    public accountId: string;

    // @DataMember
    public atlas: { [index:string]: UsageBillingPeriodDto; } = {};

    // @DataMember
    public ingestionFailures: UsageBillingIngestionFailureDto[] = [];

    public constructor(init?: Partial<UsageBillingDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class PromotionItemDto
{
    // @DataMember
    public type: string;

    // @DataMember
    public id: string;

    public constructor(init?: Partial<PromotionItemDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class PromotionBlockerDto
{
    // @DataMember
    public contentType: string;

    // @DataMember
    public contentId: string;

    // @DataMember
    public refKind: string;

    // @DataMember
    public unresolvedRef: string;

    public constructor(init?: Partial<PromotionBlockerDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class PromotionResultDto
{
    // @DataMember
    public contentMirrored: PromotionItemDto[] = [];

    // @DataMember
    public contentDeleted: PromotionItemDto[] = [];

    // @DataMember
    public integrationsSeeded: PromotionItemDto[] = [];

    // @DataMember
    public integrationsSkipped: PromotionItemDto[] = [];

    // @DataMember
    public blockers: PromotionBlockerDto[] = [];

    // @DataMember
    public fromVersion?: number;

    // @DataMember
    public wasDryRun: boolean;

    public constructor(init?: Partial<PromotionResultDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class ProjectEnvironmentsDto
{
    // @DataMember
    public environments: string[] = [];

    public constructor(init?: Partial<ProjectEnvironmentsDto>) { (Object as any).assign(this, init); }
}

export class ProjectRegionDto
{
    public id: string;
    public continent?: Continent;
    public name?: string;

    public constructor(init?: Partial<ProjectRegionDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class ProjectBrandDto
{
    // @DataMember
    public mainColor?: string;

    // @DataMember
    public accentColor?: string;

    // @DataMember
    public logo?: FileResourceRefDto;

    // @DataMember
    public icon?: FileResourceRefDto;

    public constructor(init?: Partial<ProjectBrandDto>) { (Object as any).assign(this, init); }
}

export class NotificationsSettingsGroupDto
{
    public tag: string;
    public tags: string[] = [];

    public constructor(init?: Partial<NotificationsSettingsGroupDto>) { (Object as any).assign(this, init); }
}

export class NotificationSettingsChannelDto
{
    public channel: CommunicationChannel;
    public groups: NotificationsSettingsGroupDto[] = [];

    public constructor(init?: Partial<NotificationSettingsChannelDto>) { (Object as any).assign(this, init); }
}

export class NotificationSettingsDto
{
    public channels: NotificationSettingsChannelDto[] = [];
    public allGroups: GroupDefinitionDto[] = [];
    public allTags: TagDefinitionDto[] = [];

    public constructor(init?: Partial<NotificationSettingsDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class AuthenticationFlowPasswordPolicyDto
{
    // @DataMember
    public minLength: number;

    // @DataMember
    public maxLength?: number;

    // @DataMember
    public minNumbers?: number;

    // @DataMember
    public minUpper?: number;

    // @DataMember
    public minLower?: number;

    // @DataMember
    public minSpecial?: number;

    // @DataMember
    public allowedSpecial?: string;

    public constructor(init?: Partial<AuthenticationFlowPasswordPolicyDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class AuthenticationFlowSummaryDto
{
    // @DataMember
    public type: string;

    // @DataMember
    public provider?: string;

    // @DataMember
    public passwordComplexity?: AuthenticationFlowPasswordPolicyDto;

    public constructor(init?: Partial<AuthenticationFlowSummaryDto>) { (Object as any).assign(this, init); }
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

// @DataContract
export class SchemaTriggerDto extends TriggerDto
{
    // @DataMember
    public schemaId: string;

    // @DataMember
    public when: SchemaTriggerType;

    // @DataMember
    public configurationCode?: string;

    public constructor(init?: Partial<SchemaTriggerDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class DatabaseDto
{
    // @DataMember
    public isEnabled: boolean;

    // @DataMember
    public triggers?: SchemaTriggerDto[];

    // @DataMember
    public defaultIntegrationViewIds: { [index:string]: string; } = {};

    public constructor(init?: Partial<DatabaseDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class EmailDto
{
    // @DataMember
    public isEnabled: boolean;

    // @DataMember
    public defaultIntegrationViewIds: { [index:string]: string; } = {};

    public constructor(init?: Partial<EmailDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class AiDto
{
    // @DataMember
    public isEnabled: boolean;

    // @DataMember
    public defaultIntegrationViewId?: string;

    public constructor(init?: Partial<AiDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class MembershipTriggerDto extends TriggerDto
{
    // @DataMember
    public when: MembershipTriggerType;

    public constructor(init?: Partial<MembershipTriggerDto>) { super(init); (Object as any).assign(this, init); }
}

export class RoleItemDto
{
    public id: string;
    public name: string;
    public displayName?: string;
    public description?: string;
    public isSystem: boolean;
    public attachedPolicies?: string[];

    public constructor(init?: Partial<RoleItemDto>) { (Object as any).assign(this, init); }
}

export class PermissionDto
{
    public sid?: string;
    public effect: PermissionEffect;
    public actions: string[] = [];
    public resources: string[] = [];

    public constructor(init?: Partial<PermissionDto>) { (Object as any).assign(this, init); }
}

export class PolicyItemDto
{
    public id: string;
    public name: string;
    public description?: string;
    public isSystem: boolean;
    public permissions?: PermissionDto[];

    public constructor(init?: Partial<PolicyItemDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class AuthorizationDto
{
    // @DataMember
    public userRegistersAsRole?: string;

    // @DataMember
    public allowedRegisterRoles?: string[];

    // @DataMember
    public allowedProviderRegisterRoles?: string[];

    public constructor(init?: Partial<AuthorizationDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class MembershipDto
{
    // @DataMember
    public isEnabled: boolean;

    // @DataMember
    public triggers?: MembershipTriggerDto[];

    // @DataMember
    public customRoles?: RoleItemDto[];

    // @DataMember
    public customPolicies?: PolicyItemDto[];

    // @DataMember
    public authorization?: AuthorizationDto;

    // @DataMember
    public requireEmailValidation: boolean;

    public constructor(init?: Partial<MembershipDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class LoggingDto
{
    // @DataMember
    public isEnabled: boolean;

    // @DataMember
    public isEstablished: boolean;

    public constructor(init?: Partial<LoggingDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class ServerEventsDto
{
    // @DataMember
    public isEnabled: boolean;

    public constructor(init?: Partial<ServerEventsDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class PushDto
{
    // @DataMember
    public isEnabled: boolean;

    // @DataMember
    public defaultIntegrationViewIds: { [index:string]: string; } = {};

    // @DataMember
    public marketingTags?: TagDefinitionDto[];

    // @DataMember
    public transactionalTags?: TagDefinitionDto[];

    public constructor(init?: Partial<PushDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class SchedulerDto
{
    // @DataMember
    public isEnabled: boolean;

    public constructor(init?: Partial<SchedulerDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class CodeDto
{
    // @DataMember
    public isEnabled: boolean;

    public constructor(init?: Partial<CodeDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class FilesTriggerDto extends TriggerDto
{
    // @DataMember
    public when: FilesTriggerType;

    public constructor(init?: Partial<FilesTriggerDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class FilesDto
{
    // @DataMember
    public isEnabled: boolean;

    // @DataMember
    public triggers?: FilesTriggerDto[];

    // @DataMember
    public defaultIntegrationViewIds: { [index:string]: string; } = {};

    public constructor(init?: Partial<FilesDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class PaymentTriggerDto extends TriggerDto
{
    // @DataMember
    public when: PaymentTriggerType;

    // @DataMember
    public integrations?: string[];

    // @DataMember
    public events?: string[];

    public constructor(init?: Partial<PaymentTriggerDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class PaymentsDto
{
    // @DataMember
    public isEnabled: boolean;

    // @DataMember
    public triggers?: PaymentTriggerDto[];

    public constructor(init?: Partial<PaymentsDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class SmsDto
{
    // @DataMember
    public isEnabled: boolean;

    // @DataMember
    public defaultIntegrationViewIds: { [index:string]: string; } = {};

    public constructor(init?: Partial<SmsDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class ProjectDto implements IHasViewId, IBindableContract
{
    // @DataMember
    public accountViewId: string;

    // @DataMember
    public projectStatus: ProjectStatus;

    // @DataMember
    public isActive: boolean;

    // @DataMember
    public viewId: string;

    // @DataMember
    public name: string;

    // @DataMember
    public uniqueName: string;

    // @DataMember
    public hostLabel?: string;

    // @DataMember
    public apiHost?: string;

    // @DataMember
    public description?: string;

    // @DataMember
    public marketingUrl?: string;

    // @DataMember
    public canonicalAdminUrl?: string;

    // @DataMember
    public adminUrl?: string;

    // @DataMember
    public effectiveAdminUrl?: string;

    // @DataMember
    public defaultLanguage: string;

    // @DataMember
    public languages: string[] = [];

    // @DataMember
    public primaryRegion?: ProjectRegionDto;

    // @DataMember
    public additionalRegions?: ProjectRegionDto[];

    // @DataMember
    public isMultiRegionEligible: boolean;

    // @DataMember
    public brand?: ProjectBrandDto;

    // @DataMember
    public notificationSettings?: NotificationSettingsDto;

    // @DataMember
    public allowedOrigins?: string[];

    // @DataMember
    public exposeBrandToAdminPortal: boolean;

    // @DataMember
    public exposeAuthToAdminPortal: boolean;

    // @DataMember
    public adminPortalEnabled: boolean;

    // @DataMember
    public adminPortalServiceUserId?: string;

    // @DataMember
    public membershipAuthenticationFlows?: AuthenticationFlowSummaryDto[];

    // @DataMember
    public exposeLegalToAdminPortal: boolean;

    // @DataMember
    public legalTermsMarkdown?: string;

    // @DataMember
    public legalPrivacyMarkdown?: string;

    // @DataMember
    public environments: string[] = [];

    // @DataMember
    public environmentRanks: { [index:string]: number; } = {};

    // @DataMember
    public database?: DatabaseDto;

    // @DataMember
    public email?: EmailDto;

    // @DataMember
    public ai?: AiDto;

    // @DataMember
    public membership?: MembershipDto;

    // @DataMember
    public logging?: LoggingDto;

    // @DataMember
    public serverEvents?: ServerEventsDto;

    // @DataMember
    public push?: PushDto;

    // @DataMember
    public scheduler?: SchedulerDto;

    // @DataMember
    public code?: CodeDto;

    // @DataMember
    public files?: FilesDto;

    // @DataMember
    public payments?: PaymentsDto;

    // @DataMember
    public sms?: SmsDto;

    // @DataMember
    public databaseEnabled: boolean;

    // @DataMember
    public emailEnabled: boolean;

    // @DataMember
    public membershipEnabled: boolean;

    // @DataMember
    public loggingEnabled: boolean;

    // @DataMember
    public serverEventsEnabled: boolean;

    // @DataMember
    public pushEnabled: boolean;

    // @DataMember
    public schedulerEnabled: boolean;

    // @DataMember
    public codeEnabled: boolean;

    // @DataMember
    public filesEnabled: boolean;

    // @DataMember
    public paymentsEnabled: boolean;

    // @DataMember
    public smsEnabled: boolean;

    // @DataMember
    public defaultLlmIntegrationViewId?: string;

    // @DataMember
    public connections: number;

    public constructor(init?: Partial<ProjectDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class ProjectListItemDto
{
    // @DataMember
    public viewId: string;

    // @DataMember
    public isActive: boolean;

    // @DataMember
    public projectStatus: ProjectStatus;

    // @DataMember
    public name: string;

    // @DataMember
    public uniqueName: string;

    // @DataMember
    public primaryRegion?: ProjectRegionDto;

    // @DataMember
    public additionalRegions?: ProjectRegionDto[];

    public constructor(init?: Partial<ProjectListItemDto>) { (Object as any).assign(this, init); }
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

export class AuthDto implements IBindableContract
{
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

    public constructor(init?: Partial<AuthDto>) { (Object as any).assign(this, init); }
}

export class AccountPasswordPolicyDto
{
    public minLength: number;
    public maxLength?: number;
    public minNumbers?: number;
    public maxNumbers?: number;
    public minUpper?: number;
    public maxUpper?: number;
    public minLower?: number;
    public maxLower?: number;
    public minSpecial?: number;
    public maxSpecial?: number;
    public allowedSpecial?: string;

    public constructor(init?: Partial<AccountPasswordPolicyDto>) { (Object as any).assign(this, init); }
}

export class AccountTeamRoleDto
{
    public id: string;
    public name: string;
    public description: string;
    public isSystem: boolean;
    public policies?: string[];

    public constructor(init?: Partial<AccountTeamRoleDto>) { (Object as any).assign(this, init); }
}

export class AccountPasskeyListItemDto
{
    public credentialId: string;
    public friendlyName: string;
    public registeredOnUtc: string;
    public lastUsedOnUtc: string;
    public isRevoked: boolean;

    public constructor(init?: Partial<AccountPasskeyListItemDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class LicenseDomainDnsRecordDto
{
    // @DataMember
    public host: string;

    // @DataMember
    public recordType: string;

    // @DataMember
    public resolved: boolean;

    // @DataMember
    public required: boolean;

    public constructor(init?: Partial<LicenseDomainDnsRecordDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class LicenseDomainDnsStatusDto
{
    // @DataMember
    public domain: string;

    // @DataMember
    public allRequiredResolved: boolean;

    // @DataMember
    public records: LicenseDomainDnsRecordDto[] = [];

    public constructor(init?: Partial<LicenseDomainDnsStatusDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class LicenseDomainVerificationChallengeDto
{
    // @DataMember
    public domain: string;

    // @DataMember
    public txtHost: string;

    // @DataMember
    public txtValue: string;

    // @DataMember
    public expiresAtUtc: string;

    // @DataMember
    public verified: boolean;

    // @DataMember
    public verifiedAtUtc?: string;

    // @DataMember
    public skipped: boolean;

    public constructor(init?: Partial<LicenseDomainVerificationChallengeDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class LicenseDomainVerificationStatusDto
{
    // @DataMember
    public domain: string;

    // @DataMember
    public verified: boolean;

    // @DataMember
    public skipped: boolean;

    // @DataMember
    public txtHost?: string;

    // @DataMember
    public expectedTxtValue?: string;

    // @DataMember
    public observedTxtValue?: string;

    // @DataMember
    public expiresAtUtc?: string;

    // @DataMember
    public verifiedAtUtc?: string;

    // @DataMember
    public message?: string;

    public constructor(init?: Partial<LicenseDomainVerificationStatusDto>) { (Object as any).assign(this, init); }
}

export class CodeMashSubscriptionDto
{
    public viewId: string;
    public domain: string;
    public willExpireOn: string;
    public issuedOn: string;
    public isTrial: boolean;
    public subscriptionRefId: string;

    public constructor(init?: Partial<CodeMashSubscriptionDto>) { (Object as any).assign(this, init); }
}

export class LicenseDto extends CodeMashSubscriptionDto
{
    public isEnterprise: boolean;
    public projectCap: number;

    public constructor(init?: Partial<LicenseDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class LicenseHeartbeatVerdictDto
{
    // @DataMember(Name="status")
    public status: string;

    // @DataMember(Name="proofToken")
    public proofToken?: string;

    // @DataMember(Name="serverTimeUtc")
    public serverTimeUtc: string;

    // @DataMember(Name="graceUntilUtc")
    public graceUntilUtc?: string;

    // @DataMember(Name="installationId")
    public installationId: string;

    // @DataMember(Name="licenseAccountId")
    public licenseAccountId?: string;

    // @DataMember(Name="domain")
    public domain?: string;

    // @DataMember(Name="signature")
    public signature?: string;

    // @DataMember(Name="message")
    public message?: string;

    public constructor(init?: Partial<LicenseHeartbeatVerdictDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class InstallationLicenseStatusDto
{
    // @DataMember(Name="storedMode")
    public storedMode: string;

    // @DataMember(Name="effectiveMode")
    public effectiveMode: string;

    // @DataMember(Name="isProduction")
    public isProduction: boolean;

    // @DataMember(Name="graceDaysLeft")
    public graceDaysLeft?: number;

    // @DataMember(Name="graceUntilUtc")
    public graceUntilUtc?: string;

    // @DataMember(Name="lastProvenAtUtc")
    public lastProvenAtUtc?: string;

    // @DataMember(Name="lastHeartbeatAtUtc")
    public lastHeartbeatAtUtc?: string;

    // @DataMember(Name="installationDomain")
    public installationDomain?: string;

    // @DataMember(Name="licensedDomain")
    public licensedDomain?: string;

    // @DataMember(Name="hostKind")
    public hostKind?: string;

    // @DataMember(Name="isTrialLicense")
    public isTrialLicense: boolean;

    // @DataMember(Name="licenseExpireUtc")
    public licenseExpireUtc?: string;

    // @DataMember(Name="message")
    public message?: string;

    public constructor(init?: Partial<InstallationLicenseStatusDto>) { (Object as any).assign(this, init); }
}

export class ServiceUserApiKeyDto
{
    public id: number;
    public name: string;
    public visibleKey?: string;
    public scopes: string[] = [];
    public createdDate: string;
    public expiryDate?: string;
    public cancelledDate?: string;
    public active: boolean;

    public constructor(init?: Partial<ServiceUserApiKeyDto>) { (Object as any).assign(this, init); }
}

export class GetTriggerResponse extends ResponseBase
{

    public constructor(init?: Partial<GetTriggerResponse>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class TriggerProjectionList implements IHasViewId
{
    // @DataMember
    public viewId: string;

    // @DataMember
    public name: string;

    // @DataMember
    public actionType: TriggerActionType;

    // @DataMember
    public hasPreExecuteCode: boolean;

    // @DataMember
    public isEnabled: boolean;

    public constructor(init?: Partial<TriggerProjectionList>) { (Object as any).assign(this, init); }
}

// @DataContract
export class MembershipTriggerProjectionList extends TriggerProjectionList
{
    // @DataMember
    public type: MembershipTriggerType;

    // @DataMember
    public destinationIds?: string[];

    public constructor(init?: Partial<MembershipTriggerProjectionList>) { super(init); (Object as any).assign(this, init); }
}

export class RoleListProjectionDto
{
    public viewId: string;
    public name: string;
    public displayName?: string;
    public isSystem: boolean;
    public policyCount: number;

    public constructor(init?: Partial<RoleListProjectionDto>) { (Object as any).assign(this, init); }
}

export class PasskeySettingsDto
{
    public enabled: boolean;
    public codeTtlMinutes: number;
    public maxCredentialsPerUser: number;
    public recoveryCodeCount: number;
    public generateRecoveryCodesAtSignup: boolean;
    public authenticatorAttachment: string;
    public allowMagicLinkRecovery: boolean;
    public refreshTokenTtlDays: number;
    public rpId?: string;

    public constructor(init?: Partial<PasskeySettingsDto>) { (Object as any).assign(this, init); }
}

export class IntegrationListProjection implements IHasViewId
{
    public viewId: string;
    public integrationName: string;
    public isEnabled: boolean;
    public lastIntegrationTestAtUtc?: string;
    public lastIntegrationTestSucceeded?: boolean;
    public lastIntegrationTestErrors: IReadOnlyList<string>;
    public humanDeliveryConfirmedAtUtc?: string;
    public requiresHumanDeliveryConfirmation: boolean;

    public constructor(init?: Partial<IntegrationListProjection>) { (Object as any).assign(this, init); }
}

export class MembershipIntegrationListProjection extends IntegrationListProjection
{
    // @DataMember
    public provider: MembershipProvider;

    public constructor(init?: Partial<MembershipIntegrationListProjection>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class MembershipMessageTemplateDto
{
    // @DataMember
    public id?: string;

    public constructor(init?: Partial<MembershipMessageTemplateDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class MembershipEmailActionSettingsDto
{
    // @DataMember
    public sendEmail: boolean;

    // @DataMember
    public template?: MembershipMessageTemplateDto;

    // @DataMember
    public callback?: string;

    public constructor(init?: Partial<MembershipEmailActionSettingsDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class MembershipEmailPreferencesDto
{
    // @DataMember
    public registrationViaEmail?: MembershipEmailActionSettingsDto;

    // @DataMember
    public verificationViaEmail?: MembershipEmailActionSettingsDto;

    // @DataMember
    public passwordResetViaEmail?: MembershipEmailActionSettingsDto;

    // @DataMember
    public invitationViaEmail?: MembershipEmailActionSettingsDto;

    // @DataMember
    public deactivationViaEmail?: MembershipEmailActionSettingsDto;

    public constructor(init?: Partial<MembershipEmailPreferencesDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class PasswordComplexityDto
{
    // @DataMember
    public minLength: number;

    // @DataMember
    public maxLength?: number;

    // @DataMember
    public minNumbers?: number;

    // @DataMember
    public maxNumbers?: number;

    // @DataMember
    public minUpper?: number;

    // @DataMember
    public maxUpper?: number;

    // @DataMember
    public minLower?: number;

    // @DataMember
    public maxLower?: number;

    // @DataMember
    public minSpecial?: number;

    // @DataMember
    public maxSpecial?: number;

    // @DataMember
    public allowedSpecial?: string;

    public constructor(init?: Partial<PasswordComplexityDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class MembershipAuthorizationViewDto
{
    // @DataMember
    public emailPreferences?: MembershipEmailPreferencesDto;

    // @DataMember
    public userRegistersAsRole?: string;

    // @DataMember
    public guestRegistersAsRole?: string;

    // @DataMember
    public allowedRegisterRoles?: string[];

    // @DataMember
    public allowedProviderRegisterRoles?: string[];

    // @DataMember
    public resetPasswordTokenExpiration?: number;

    // @DataMember
    public invitationExpiration?: number;

    // @DataMember
    public emailVerificationExpiration?: number;

    // @DataMember
    public deactivationExpiration?: number;

    // @DataMember
    public defaultSubscribeToNews: boolean;

    // @DataMember
    public passwordComplexity?: PasswordComplexityDto;

    public constructor(init?: Partial<MembershipAuthorizationViewDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class MembershipCredentialsSettingsModeDto
{
    // @DataMember
    public name?: string;

    // @DataMember
    public logoutUrl?: string;

    public constructor(init?: Partial<MembershipCredentialsSettingsModeDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class MembershipCredentialsSettingsDto
{
    // @DataMember
    public logoutUrl?: string;

    // @DataMember
    public allowUsernames: boolean;

    // @DataMember
    public modes?: MembershipCredentialsSettingsModeDto[];

    public constructor(init?: Partial<MembershipCredentialsSettingsDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class MembershipAuthenticationViewDto
{
    // @DataMember
    public credentialsSettings?: MembershipCredentialsSettingsDto;

    // @DataMember
    public flows: string[] = [];

    public constructor(init?: Partial<MembershipAuthenticationViewDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class SchemaTriggerProjectionList extends TriggerProjectionList
{
    // @DataMember
    public type: SchemaTriggerType;

    public constructor(init?: Partial<SchemaTriggerProjectionList>) { super(init); (Object as any).assign(this, init); }
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

export class TaxonomyDto implements IHasViewId
{
    // @DataMember
    public viewId: string;

    // @DataMember
    public name: string;

    // @DataMember
    public slug?: string;

    // @DataMember
    public parentId?: string;

    // @DataMember
    public description?: string;

    // @DataMember
    public termsMetaDataSchema?: DataSchemaDto;

    // @DataMember
    public termsMetaVisualSchema?: VisualSchemaDto;

    // @DataMember
    public dependencies?: string[];

    public constructor(init?: Partial<TaxonomyDto>) { (Object as any).assign(this, init); }
}

export class TaxonomyListProjection implements IHasViewId
{
    // @DataMember
    public viewId: string;

    // @DataMember
    public taxonomyName: string;

    // @DataMember
    public taxonomySlug: string;

    // @DataMember
    public parentId?: string;

    public constructor(init?: Partial<TaxonomyListProjection>) { (Object as any).assign(this, init); }
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

export class TermTreeDto
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

    // @DataMember
    public children?: TermTreeDto[];

    public constructor(init?: Partial<TermTreeDto>) { (Object as any).assign(this, init); }
}

export class TaxonomyTreeDto
{
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

    public constructor(init?: Partial<TaxonomyTreeDto>) { (Object as any).assign(this, init); }
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

// @DataContract
export class AppliedTaxonomyDto
{
    // @DataMember
    public catalogId: string;

    // @DataMember
    public id?: string;

    // @DataMember
    public slug: string;

    // @DataMember
    public title: string;

    // @DataMember
    public action: string;

    // @DataMember
    public termsCreated: number;

    public constructor(init?: Partial<AppliedTaxonomyDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class AppliedCollectionDto
{
    // @DataMember
    public entity: string;

    // @DataMember
    public id?: string;

    // @DataMember
    public name: string;

    // @DataMember
    public title: string;

    // @DataMember
    public action: string;

    // @DataMember
    public published: boolean;

    // @DataMember
    public linkedFields: string[] = [];

    public constructor(init?: Partial<AppliedCollectionDto>) { (Object as any).assign(this, init); }
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

    // @DataMember
    public description?: string;

    public constructor(init?: Partial<SchemaListProjection>) { (Object as any).assign(this, init); }
}

export class SchemaDraftDto
{
    // @DataMember
    public dataSchema: DataSchemaDto;

    // @DataMember
    public visualSchema: VisualSchemaDto;

    // @DataMember
    public updatedAt: string;

    public constructor(init?: Partial<SchemaDraftDto>) { (Object as any).assign(this, init); }
}

export class SchemaDiffDto
{
    // @DataMember
    public fromVersion: number;

    // @DataMember
    public toVersion: number;

    // @DataMember
    public added: string[] = [];

    // @DataMember
    public removed: string[] = [];

    // @DataMember
    public typeChanged: string[] = [];

    // @DataMember
    public validatorTightened: string[] = [];

    public constructor(init?: Partial<SchemaDiffDto>) { (Object as any).assign(this, init); }
}

export class SchemaVersionSummaryDto
{
    // @DataMember
    public version: number;

    // @DataMember
    public metaSchemaVersion: number;

    // @DataMember
    public publishedAt: string;

    public constructor(init?: Partial<SchemaVersionSummaryDto>) { (Object as any).assign(this, init); }
}

export class CollectionIndexKeyDto
{
    // @DataMember
    public field: string;

    // @DataMember
    public order: number;

    public constructor(init?: Partial<CollectionIndexKeyDto>) { (Object as any).assign(this, init); }
}

export class CollectionIndexDto
{
    // @DataMember
    public name: string;

    // @DataMember
    public keys: CollectionIndexKeyDto[] = [];

    public constructor(init?: Partial<CollectionIndexDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class SeedCollectionReportItemDto
{
    // @DataMember
    public collectionName: string;

    // @DataMember
    public requested: number;

    // @DataMember
    public inserted: number;

    // @DataMember
    public ids: string[] = [];

    // @DataMember
    public errors: string[] = [];

    public constructor(init?: Partial<SeedCollectionReportItemDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class SeedCollectionRecordsResultDto
{
    // @DataMember
    public insertOrder: string[] = [];

    // @DataMember
    public report: SeedCollectionReportItemDto[] = [];

    public constructor(init?: Partial<SeedCollectionRecordsResultDto>) { (Object as any).assign(this, init); }
}

export class DatabaseIntegrationListProjection extends IntegrationListProjection
{
    // @DataMember
    public provider: DatabaseProvider;

    public constructor(init?: Partial<DatabaseIntegrationListProjection>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class FlexTierDto
{
    // @DataMember
    public code: string;

    // @DataMember
    public step: number;

    // @DataMember
    public displayName: string;

    public constructor(init?: Partial<FlexTierDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class IntegrationTestResultItemDto
{
    // @DataMember
    public operation: string;

    // @DataMember
    public result: string;

    // @DataMember
    public errors?: IReadOnlyList<string>;

    public constructor(init?: Partial<IntegrationTestResultItemDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class SchemaRefDto
{
    // @DataMember(Order=1)
    public schemaId: string;

    // @DataMember(Order=2)
    public schemaName: string;

    // @DataMember(Order=3)
    public databaseIntegrationId: string;

    public constructor(init?: Partial<SchemaRefDto>) { (Object as any).assign(this, init); }
}

export class CollectionImportDto
{
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

    public constructor(init?: Partial<CollectionImportDto>) { (Object as any).assign(this, init); }
}

export class ImportUploadTargetDto
{
    // @DataMember
    public url: string;

    // @DataMember
    public contentType: string;

    // @DataMember
    public file: FileResourceRefDto;

    public constructor(init?: Partial<ImportUploadTargetDto>) { (Object as any).assign(this, init); }
}

export class ImportFileColumnDto
{
    // @DataMember
    public index: number;

    // @DataMember
    public header: string;

    // @DataMember
    public samples: string[] = [];

    // @DataMember
    public detectedType: string;

    public constructor(init?: Partial<ImportFileColumnDto>) { (Object as any).assign(this, init); }
}

export class ImportFileAnalysisDto
{
    // @DataMember
    public file: FileResourceRefDto;

    // @DataMember
    public columns: ImportFileColumnDto[] = [];

    // @DataMember
    public sampleRowCount: number;

    public constructor(init?: Partial<ImportFileAnalysisDto>) { (Object as any).assign(this, init); }
}

export class MongoDbAggregateListProjection implements IHasViewId
{
    // @DataMember
    public viewId: string;

    // @DataMember
    public displayName: string;

    // @DataMember
    public schemaViewId: string;

    public constructor(init?: Partial<MongoDbAggregateListProjection>) { (Object as any).assign(this, init); }
}

// @DataContract
export class FilesTriggerProjectionList extends TriggerProjectionList
{
    // @DataMember
    public type: FilesTriggerType;

    public constructor(init?: Partial<FilesTriggerProjectionList>) { super(init); (Object as any).assign(this, init); }
}

export class FilesIntegrationListProjection extends IntegrationListProjection
{
    // @DataMember
    public provider: FileProvider;

    public constructor(init?: Partial<FilesIntegrationListProjection>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class NotificationModuleDependencyItemDto
{
    // @DataMember
    public name: string;

    // @DataMember
    public viewId?: string;

    // @DataMember
    public category?: string;

    public constructor(init?: Partial<NotificationModuleDependencyItemDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class NotificationModuleDisableDependenciesDto
{
    // @DataMember
    public triggers: NotificationModuleDependencyItemDto[] = [];

    // @DataMember
    public schedulerTasks: NotificationModuleDependencyItemDto[] = [];

    // @DataMember
    public inFlightCampaigns: NotificationModuleDependencyItemDto[] = [];

    // @DataMember
    public membershipSettings: NotificationModuleDependencyItemDto[] = [];

    public constructor(init?: Partial<NotificationModuleDisableDependenciesDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class TestEmailValidationItemDto
{
    // @DataMember
    public address: string;

    // @DataMember
    public verdict: string;

    // @DataMember
    public reason?: string;

    // @DataMember
    public score?: number;

    public constructor(init?: Partial<TestEmailValidationItemDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class TemplateListProjection implements IHasViewId, IHasDatabaseId
{
    // @DataMember
    public id?: string;

    // @DataMember
    public viewId: string;

    // @DataMember
    public templateName: string;

    // @DataMember
    public isActive: boolean;

    // @DataMember
    public type: CommunicationChannel;

    // @DataMember
    public tags?: string[];

    public constructor(init?: Partial<TemplateListProjection>) { (Object as any).assign(this, init); }
}

export class EmailTemplateListProjection extends TemplateListProjection
{
    public hasAttachments: boolean;
    public languages: IReadOnlyList<string>;

    public constructor(init?: Partial<EmailTemplateListProjection>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class MjmlParseError
{
    // @DataMember(Name="line")
    public line: number;

    // @DataMember(Name="message")
    public message?: string;

    // @DataMember(Name="tagName")
    public tagName?: string;

    // @DataMember(Name="formattedMessage")
    public formattedMessage?: string;

    public constructor(init?: Partial<MjmlParseError>) { (Object as any).assign(this, init); }
}

// @DataContract
export class HtmlFromMjmlResponse
{
    // @DataMember(Name="html")
    public html: string;

    // @DataMember(Name="errors")
    public errors: MjmlParseError[] = [];

    public constructor(init?: Partial<HtmlFromMjmlResponse>) { (Object as any).assign(this, init); }
}

export class SystemEmailTemplateListProjection extends EmailTemplateListProjection
{

    public constructor(init?: Partial<SystemEmailTemplateListProjection>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class EmailSignatureDto implements IHasViewId
{
    // @DataMember
    public viewId: string;

    // @DataMember
    public displayName?: string;

    // @DataMember
    public translations: TranslationDto[] = [];

    public constructor(init?: Partial<EmailSignatureDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class ListItemProjection implements IHasViewId
{
    // @DataMember
    public viewId: string;

    // @DataMember
    public displayName?: string;

    public constructor(init?: Partial<ListItemProjection>) { (Object as any).assign(this, init); }
}

// @DataContract
export class ListItemWithTranslationsProjection extends ListItemProjection
{
    // @DataMember
    public translations: string[] = [];

    public constructor(init?: Partial<ListItemWithTranslationsProjection>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class EmailFooterDto implements IHasViewId
{
    // @DataMember
    public viewId: string;

    // @DataMember
    public displayName?: string;

    // @DataMember
    public translations: TranslationDto[] = [];

    public constructor(init?: Partial<EmailFooterDto>) { (Object as any).assign(this, init); }
}

export class EmailSettings implements IBindableContract
{
    public signatures?: IList<EmailSignatureDto>;
    public footers?: IList<EmailFooterDto>;

    public constructor(init?: Partial<EmailSettings>) { (Object as any).assign(this, init); }
}

// @DataContract
export class DomainHealthRecordItemDto
{
    // @DataMember
    public record: string;

    // @DataMember
    public value: string;

    public constructor(init?: Partial<DomainHealthRecordItemDto>) { (Object as any).assign(this, init); }
}

export class EmailIntegrationListProjection extends IntegrationListProjection
{
    public emailProvider: EmailProvider;
    public senderEmailAddress: string;
    public senderDisplayName?: string;

    public constructor(init?: Partial<EmailIntegrationListProjection>) { super(init); (Object as any).assign(this, init); }
}

export enum CampaignStatus
{
    Pending = 'Pending',
    Registered = 'Registered',
    Scheduled = 'Scheduled',
    Started = 'Started',
    Stopped = 'Stopped',
    Processing = 'Processing',
    Completed = 'Completed',
    Failed = 'Failed',
}

export class CampaignStatusChangeEntryDto
{
    public time: string;
    public status: CampaignStatus;
    public errors?: ErrorDto[];

    public constructor(init?: Partial<CampaignStatusChangeEntryDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class CampaignDto implements IHasResponsibleUserId, IHasDatabaseId
{
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
    public userId: string;

    // @DataMember
    public id?: string;

    public constructor(init?: Partial<CampaignDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class EmailCampaignDto extends CampaignDto
{
    // @DataMember
    public deliverySettings: EmailCampaignDeliverySettingsDto;

    // @DataMember
    public template: EmailTemplateDto;

    // @DataMember
    public validationIntegrationId?: string;

    // @DataMember
    public templateIsSystem: boolean;

    public constructor(init?: Partial<EmailCampaignDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class EmailCampaignListProjection
{
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

    public constructor(init?: Partial<EmailCampaignListProjection>) { (Object as any).assign(this, init); }
}

export enum CampaignBatchStatus
{
    Registered = 'Registered',
    Processing = 'Processing',
    Completed = 'Completed',
    Failed = 'Failed',
}

export class BatchStatusChangeEntryDto
{
    public time: string;
    public status: CampaignBatchStatus;
    public errors?: ErrorDto[];

    public constructor(init?: Partial<BatchStatusChangeEntryDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class CampaignBatchDto implements IHasDatabaseId
{
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

    public constructor(init?: Partial<CampaignBatchDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class EmailRecipientDto
{
    // @DataMember
    public emailAddress: string;

    // @DataMember
    public language?: string;

    // @DataMember
    public timeZoneId?: string;

    // @DataMember
    public userTokenMappings?: TokenMappingDto[];

    public constructor(init?: Partial<EmailRecipientDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class EmailRecipientsDto
{
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

    public constructor(init?: Partial<EmailRecipientsDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class EmailCampaignBatchDto extends CampaignBatchDto
{
    // @DataMember
    public recipients?: EmailRecipientsDto;

    public constructor(init?: Partial<EmailCampaignBatchDto>) { super(init); (Object as any).assign(this, init); }
}

export enum CampaignNotificationStatus
{
    Completed = 'Completed',
    BlockedByUserPreferenceBlockAll = 'BlockedByUserPreferenceBlockAll',
    BlockedByUserPreferenceBlockByTag = 'BlockedByUserPreferenceBlockByTag',
    Failed = 'Failed',
    Viewed = 'Viewed',
    Clicked = 'Clicked',
    BlockedByValidation = 'BlockedByValidation',
}

export class NotificationStatusChangeEntryDto
{
    public time: string;
    public status: CampaignNotificationStatus;
    public sourceId?: string;
    public errors?: ErrorDto[];
    public tags?: string[];

    public constructor(init?: Partial<NotificationStatusChangeEntryDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class CampaignBatchNotificationDto implements IHasDatabaseId
{
    // @DataMember
    public campaignId: string;

    // @DataMember
    public batchId: string;

    // @DataMember
    public notificationId: string;

    // @DataMember
    public refNotificationId?: string;

    // @DataMember
    public subject?: string;

    // @DataMember
    public body?: string;

    // @DataMember
    public model?: { [index:string]: string; };

    // @DataMember
    public statusHistory: NotificationStatusChangeEntryDto[] = [];

    // @DataMember
    public id: string;

    public constructor(init?: Partial<CampaignBatchNotificationDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class EmailCampaignBatchNotificationDto extends CampaignBatchNotificationDto
{
    // @DataMember
    public recipients: EmailRecipientsDto;

    // @DataMember
    public content?: EmailMessageContentDto;

    public constructor(init?: Partial<EmailCampaignBatchNotificationDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class CampaignStatsDto
{
    // @DataMember
    public batches: number;

    // @DataMember
    public sent: number;

    // @DataMember
    public failed: number;

    // @DataMember
    public successRate: number;

    public constructor(init?: Partial<CampaignStatsDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class SmsTemplateListProjection extends TemplateListProjection
{

    public constructor(init?: Partial<SmsTemplateListProjection>) { super(init); (Object as any).assign(this, init); }
}

export class SmsSettings implements IBindableContract
{

    public constructor(init?: Partial<SmsSettings>) { (Object as any).assign(this, init); }
}

export class SmsIntegrationListProjection extends IntegrationListProjection
{
    // @DataMember
    public provider: SmsProvider;

    public constructor(init?: Partial<SmsIntegrationListProjection>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class SmsCampaignDto extends CampaignDto
{
    // @DataMember
    public recipients: SmsCampaignDeliverySettingsDto;

    // @DataMember
    public template: SmsTemplateDto;

    public constructor(init?: Partial<SmsCampaignDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class SmsRecipientDto
{
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

    public constructor(init?: Partial<SmsRecipientDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class SmsRecipientsDto
{
    // @DataMember
    public to?: SmsRecipientDto[];

    // @DataMember
    public startingAfter?: string;

    // @DataMember
    public hasMore: boolean;

    public constructor(init?: Partial<SmsRecipientsDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class SmsCampaignBatchDto extends CampaignBatchDto
{
    // @DataMember
    public recipients: SmsRecipientsDto;

    public constructor(init?: Partial<SmsCampaignBatchDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class SmsCampaignBatchNotificationDto extends CampaignBatchNotificationDto
{
    // @DataMember
    public recipients: SmsRecipientsDto;

    // @DataMember
    public content?: SmsMessageContentDto;

    public constructor(init?: Partial<SmsCampaignBatchNotificationDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class MarketplaceListingProjection implements IHasViewId
{
    // @DataMember
    public viewId: string;

    // @DataMember
    public slug: string;

    // @DataMember
    public displayName: string;

    // @DataMember
    public vendor: string;

    // @DataMember
    public category: MarketplaceCategory;

    // @DataMember
    public transport: MarketplaceTransport;

    // @DataMember
    public iconUrl?: string;

    // @DataMember
    public isOfficial: boolean;

    // @DataMember
    public tags: IReadOnlyList<string>;

    // @DataMember
    public functionCount: number;

    public constructor(init?: Partial<MarketplaceListingProjection>) { (Object as any).assign(this, init); }
}

// @DataContract
export class MarketplaceIntegrationListProjection implements IHasViewId
{
    // @DataMember
    public viewId: string;

    // @DataMember
    public integrationName: string;

    // @DataMember
    public isEnabled: boolean;

    // @DataMember
    public listingViewId: string;

    // @DataMember
    public vendor: string;

    // @DataMember
    public category: MarketplaceCategory;

    // @DataMember
    public transport: MarketplaceTransport;

    // @DataMember
    public lastIntegrationTestAtUtc?: string;

    // @DataMember
    public lastIntegrationTestSucceeded?: boolean;

    // @DataMember
    public lastIntegrationTestErrors: IReadOnlyList<string>;

    // @DataMember
    public humanDeliveryConfirmedAtUtc?: string;

    // @DataMember
    public requiresHumanDeliveryConfirmation: boolean;

    public constructor(init?: Partial<MarketplaceIntegrationListProjection>) { (Object as any).assign(this, init); }
}

// @DataContract
export class MarketplaceFunctionProjection implements IHasViewId
{
    // @DataMember
    public viewId: string;

    // @DataMember
    public integrationViewId: string;

    // @DataMember
    public functionKey: string;

    // @DataMember
    public displayName: string;

    // @DataMember
    public isEnabled: boolean;

    // @DataMember
    public mappingCount: number;

    public constructor(init?: Partial<MarketplaceFunctionProjection>) { (Object as any).assign(this, init); }
}

export class CodeIntegrationListProjection extends IntegrationListProjection
{
    // @DataMember
    public provider: CodeProvider;

    public constructor(init?: Partial<CodeIntegrationListProjection>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class PushTemplateListProjection extends TemplateListProjection
{

    public constructor(init?: Partial<PushTemplateListProjection>) { super(init); (Object as any).assign(this, init); }
}

export class PushSettings
{
    public marketingTags?: TagDefinitionDto[];
    public transactionalTags?: TagDefinitionDto[];

    public constructor(init?: Partial<PushSettings>) { (Object as any).assign(this, init); }
}

export class PushIntegrationListProjection extends IntegrationListProjection
{
    // @DataMember
    public provider: PushProvider;

    public constructor(init?: Partial<PushIntegrationListProjection>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class PushCampaignDto extends CampaignDto
{
    // @DataMember
    public recipients: PushCampaignDeliverySettingsDto;

    // @DataMember
    public template: PushTemplateDto;

    public constructor(init?: Partial<PushCampaignDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class PushRecipientDto
{
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

    public constructor(init?: Partial<PushRecipientDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class PushRecipientsDto
{
    // @DataMember
    public to?: PushRecipientDto[];

    // @DataMember
    public startingAfter?: string;

    // @DataMember
    public hasMore: boolean;

    public constructor(init?: Partial<PushRecipientsDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class PushCampaignBatchDto extends CampaignBatchDto
{
    // @DataMember
    public recipients: PushRecipientsDto;

    public constructor(init?: Partial<PushCampaignBatchDto>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class PushCampaignBatchNotificationDto extends CampaignBatchNotificationDto
{
    // @DataMember
    public recipients: PushRecipientsDto;

    // @DataMember
    public content?: PushMessageContentDto;

    public constructor(init?: Partial<PushCampaignBatchNotificationDto>) { super(init); (Object as any).assign(this, init); }
}

export class PaymentsWebhookLogEntry
{
    public integrationId: string;
    public source: string;
    public eventName?: string;
    public providerEventId?: string;
    public statusCode: number;
    public description: string;
    public receivedOn: string;

    public constructor(init?: Partial<PaymentsWebhookLogEntry>) { (Object as any).assign(this, init); }
}

// @DataContract
export class PaymentTriggerProjectionList extends TriggerProjectionList
{
    // @DataMember
    public type: PaymentTriggerType;

    // @DataMember
    public integrations?: string[];

    // @DataMember
    public events?: string[];

    public constructor(init?: Partial<PaymentTriggerProjectionList>) { super(init); (Object as any).assign(this, init); }
}

export class PaymentsIntegrationListProjection extends IntegrationListProjection
{
    // @DataMember
    public gatewayPlatform: PaymentGatewayPlatform;

    public constructor(init?: Partial<PaymentsIntegrationListProjection>) { super(init); (Object as any).assign(this, init); }
}

export class LoggingIntegrationListProjection extends IntegrationListProjection
{
    // @DataMember
    public provider: LoggingProvider;

    public constructor(init?: Partial<LoggingIntegrationListProjection>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class TenantLogEntryDto
{
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
    public meta?: IReadOnlyDictionary<string, string>;

    public constructor(init?: Partial<TenantLogEntryDto>) { (Object as any).assign(this, init); }
}

export class AiToolManifestParameter
{
    public name: string;
    public type: string;
    public required: boolean;
    public description?: string;

    public constructor(init?: Partial<AiToolManifestParameter>) { (Object as any).assign(this, init); }
}

export class AiToolManifestItem
{
    public name: string;
    public description: string;
    public toolsets: string[] = [];
    public requiresConfirmation: boolean;
    public parameters: AiToolManifestParameter[] = [];

    public constructor(init?: Partial<AiToolManifestItem>) { (Object as any).assign(this, init); }
}

export class ChatModelOption
{
    public llmIntegrationId?: string;
    public kind: string;
    public provider: string;
    public model: string;
    public label: string;
    public isDefault: boolean;
    public isAuto: boolean;
    public contextWindow: number;

    public constructor(init?: Partial<ChatModelOption>) { (Object as any).assign(this, init); }
}

export class ChatMemoryNote
{
    public id: string;
    public kind: string;
    public text: string;
    public projectId?: string;
    public createdAtUtc: string;

    public constructor(init?: Partial<ChatMemoryNote>) { (Object as any).assign(this, init); }
}

export class ChatSessionListItem
{
    public sessionId: string;
    public profile: string;
    public projectId?: string;
    public env?: string;
    public title?: string;
    public updatedAtUtc: string;
    public isArchived: boolean;
    public isPinned: boolean;

    public constructor(init?: Partial<ChatSessionListItem>) { (Object as any).assign(this, init); }
}

export class ProjectBriefSourceWireDto
{
    public kind: string;
    public sessionId?: string;
    public entryId?: string;
    public entrySeq?: number;
    public eventId?: string;
    public userAuthId?: string;
    public atUtc: string;
    public surface?: string;
    public quote?: string;
    public workItemId?: string;

    public constructor(init?: Partial<ProjectBriefSourceWireDto>) { (Object as any).assign(this, init); }
}

export class ProjectBriefSatisfiedByWireDto
{
    public artifactId: string;
    public tool: string;
    public orphaned: boolean;

    public constructor(init?: Partial<ProjectBriefSatisfiedByWireDto>) { (Object as any).assign(this, init); }
}

export class ProjectBriefRequirementWireDto
{
    public id: string;
    public text: string;
    public status: string;
    public confidence: number;
    public isAssumption: boolean;
    public sources: ProjectBriefSourceWireDto[] = [];
    public satisfiedBy: ProjectBriefSatisfiedByWireDto[] = [];
    public sinceEventId: string;

    public constructor(init?: Partial<ProjectBriefRequirementWireDto>) { (Object as any).assign(this, init); }
}

export class ProjectBriefDecisionWireDto
{
    public eventId: string;
    public text: string;
    public confidence: number;
    public atUtc: string;
    public sources: ProjectBriefSourceWireDto[] = [];

    public constructor(init?: Partial<ProjectBriefDecisionWireDto>) { (Object as any).assign(this, init); }
}

export class ProjectBriefAssumptionWireDto
{
    public requirementId: string;
    public eventId: string;
    public text: string;
    public confidence: number;
    public atUtc: string;

    public constructor(init?: Partial<ProjectBriefAssumptionWireDto>) { (Object as any).assign(this, init); }
}

export class ProjectBriefSnapshotWireDto
{
    public projectId: string;
    public upToSeq: number;
    public atUtc: string;
    public requirements: ProjectBriefRequirementWireDto[] = [];
    public decisions: ProjectBriefDecisionWireDto[] = [];
    public openAssumptions: ProjectBriefAssumptionWireDto[] = [];
    public summary?: string;

    public constructor(init?: Partial<ProjectBriefSnapshotWireDto>) { (Object as any).assign(this, init); }
}

export class ProjectBriefEventWireDto
{
    public id: string;
    public projectId: string;
    public seq: number;
    public atUtc: string;
    public kind: string;
    public requirementId?: string;
    public supersedesEventId?: string;
    public text: string;
    public confidence: number;
    public sources: ProjectBriefSourceWireDto[] = [];
    public origin: string;
    public satisfiedBy: ProjectBriefSatisfiedByWireDto[] = [];

    public constructor(init?: Partial<ProjectBriefEventWireDto>) { (Object as any).assign(this, init); }
}

export class WorkItemEntryRefWireDto
{
    public sessionId: string;
    public entryId: string;

    public constructor(init?: Partial<WorkItemEntryRefWireDto>) { (Object as any).assign(this, init); }
}

export class WorkItemRunRefWireDto
{
    public sessionId: string;
    public planEntryId: string;
    public runId?: string;

    public constructor(init?: Partial<WorkItemRunRefWireDto>) { (Object as any).assign(this, init); }
}

export class WorkItemArtifactWireDto
{
    public artifactId: string;
    public what: string;
    public step: number;
    public planEntryId?: string;
    public kind?: string;
    public name?: string;

    public constructor(init?: Partial<WorkItemArtifactWireDto>) { (Object as any).assign(this, init); }
}

export class WorkItemMovedOutWireDto
{
    public text: string;
    public reason: string;
    public movedTo?: string;
    public source: string;
    public entryRef?: WorkItemEntryRefWireDto;
    public atUtc: string;

    public constructor(init?: Partial<WorkItemMovedOutWireDto>) { (Object as any).assign(this, init); }
}

export class WorkItemNeedsYouWireDto
{
    public text: string;
    public kind: string;
    public entryRef?: WorkItemEntryRefWireDto;
    public done: boolean;
    public doneAtUtc?: string;
    public doneByUserAuthId?: string;

    public constructor(init?: Partial<WorkItemNeedsYouWireDto>) { (Object as any).assign(this, init); }
}

export class WorkItemOpenQuestionWireDto
{
    public entryRef: WorkItemEntryRefWireDto;
    public blocking: boolean;
    public text: string;
    public atUtc: string;

    public constructor(init?: Partial<WorkItemOpenQuestionWireDto>) { (Object as any).assign(this, init); }
}

export class WorkItemDoneConditionWireDto
{
    public condition: number;
    public holds: boolean;
    public reason: string;

    public constructor(init?: Partial<WorkItemDoneConditionWireDto>) { (Object as any).assign(this, init); }
}

export class WorkItemWireDto
{
    public id: string;
    public projectId?: string;
    public status: string;
    public goal: string;
    public notInScope: string[] = [];
    public scopeRequirementIds: string[] = [];
    public difficulty?: number;
    public difficultyReason?: string;
    public planEntryRefs: WorkItemEntryRefWireDto[] = [];
    public runRefs: WorkItemRunRefWireDto[] = [];
    public artifacts: WorkItemArtifactWireDto[] = [];
    public movedOut: WorkItemMovedOutWireDto[] = [];
    public needsYou: WorkItemNeedsYouWireDto[] = [];
    public openQuestions: WorkItemOpenQuestionWireDto[] = [];
    public sessionIds: string[] = [];
    public parentId?: string;
    public children: string[] = [];
    public summaryEntryRef?: WorkItemEntryRefWireDto;
    public createdBy?: string;
    public createdAtUtc: string;
    public updatedAtUtc: string;
    public doneVerdict?: string;
    public doneConditions: WorkItemDoneConditionWireDto[] = [];

    public constructor(init?: Partial<WorkItemWireDto>) { (Object as any).assign(this, init); }
}

export class LlmIntegrationListProjection extends IntegrationListProjection
{
    public llmProvider: LlmProvider;
    public baseUrl?: string;
    public defaultModel?: string;

    public constructor(init?: Partial<LlmIntegrationListProjection>) { super(init); (Object as any).assign(this, init); }
}

export class McpIntegrationListProjection extends IntegrationListProjection
{
    public mcpProvider: McpProvider;
    public transport: McpTransport;
    public category?: string;
    public description?: string;
    public icon?: string;

    public constructor(init?: Partial<McpIntegrationListProjection>) { super(init); (Object as any).assign(this, init); }
}

export interface IVirtualDirectory
{
}

export interface IVirtualPathProvider
{
    rootDirectory?: IVirtualDirectory;
    virtualPathSeparator?: string;
    realPathSeparator?: string;
}

export interface IVirtualFile
{
    virtualPathProvider?: IVirtualPathProvider;
    extension?: string;
    length: number;
}

// @Flags()
export enum CacheControl
{
    None = 0,
    Public = 1,
    Private = 2,
    MustRevalidate = 4,
    NoCache = 8,
    NoStore = 16,
    NoTransform = 32,
    ProxyRevalidate = 64,
}

export interface IContentTypeWriter
{
}

// @Flags()
export enum RequestAttributes
{
    None = 0,
    Localhost = 1,
    LocalSubnet = 2,
    External = 4,
    Secure = 8,
    InSecure = 16,
    AnySecurityMode = 24,
    HttpHead = 32,
    HttpGet = 64,
    HttpPost = 128,
    HttpPut = 256,
    HttpDelete = 512,
    HttpPatch = 1024,
    HttpOptions = 2048,
    HttpOther = 4096,
    AnyHttpMethod = 8160,
    OneWay = 8192,
    Reply = 16384,
    AnyCallStyle = 24576,
    Soap11 = 32768,
    Soap12 = 65536,
    Xml = 131072,
    Json = 262144,
    Jsv = 524288,
    ProtoBuf = 1048576,
    Csv = 2097152,
    Html = 4194304,
    Jsonl = 8388608,
    MsgPack = 16777216,
    FormatOther = 33554432,
    AnyFormat = 67076096,
    Http = 67108864,
    MessageQueue = 134217728,
    Tcp = 268435456,
    Grpc = 536870912,
    EndpointOther = 1073741824,
    AnyEndpoint = 2080374784,
    InProcess = -2147483648,
    InternalNetworkAccess = -2147483645,
    AnyNetworkAccessType = -2147483641,
    Any = -1,
}

export interface IRequestPreferences
{
    acceptsBrotli: boolean;
    acceptsDeflate: boolean;
    acceptsGzip: boolean;
}

export interface IHttpFile
{
    name?: string;
    fileName?: string;
    contentLength: number;
    contentType?: string;
    inputStream?: string;
}

export interface IRequest
{
    originalRequest?: Object;
    response?: IResponse;
    operationName?: string;
    verb?: string;
    requestAttributes: RequestAttributes;
    requestPreferences?: IRequestPreferences;
    dto?: Object;
    contentType?: string;
    isLocal: boolean;
    userAgent?: string;
    cookies?: { [index:string]: any; };
    responseContentType?: string;
    hasExplicitResponseContentType: boolean;
    items?: { [index:string]: Object; };
    headers?: any;
    queryString?: any;
    formData?: any;
    useBufferedStream: boolean;
    rawUrl?: string;
    absoluteUri?: string;
    userHostAddress?: string;
    remoteIp?: string;
    authorization?: string;
    isSecureConnection: boolean;
    acceptTypes?: string[];
    pathInfo?: string;
    originalPathInfo?: string;
    inputStream?: string;
    contentLength: number;
    files?: IHttpFile[];
    urlReferrer?: string;
    requestAborted: CancellationToken;
}

export interface IResponse
{
    originalResponse?: Object;
    request?: IRequest;
    statusCode: number;
    statusDescription?: string;
    contentType?: string;
    outputStream?: string;
    dto?: Object;
    useBufferedStream: boolean;
    isClosed: boolean;
    keepAlive: boolean;
    hasStarted: boolean;
    items?: { [index:string]: Object; };
}

// @DataContract
export class SchedulerTaskListProjection implements IHasViewId
{
    // @DataMember
    public taskId: string;

    // @DataMember
    public name: string;

    // @DataMember
    public cron: string;

    // @DataMember
    public type: SchedulerTaskType;

    // @DataMember
    public isEnabled: boolean;

    // @DataMember
    public viewId: string;

    public constructor(init?: Partial<SchedulerTaskListProjection>) { (Object as any).assign(this, init); }
}

export enum ResolvedRefStatus
{
    Ok = 'ok',
    NotFound = 'notFound',
    Unauthorized = 'unauthorized',
    SourceError = 'sourceError',
    Erased = 'erased',
}

export class ResolvedResourceEntry
{
    public ref: ResourceRefDto;
    public status: ResolvedRefStatus;
    public resolved?: Object;
    public diagnostic?: string;

    public constructor(init?: Partial<ResolvedResourceEntry>) { (Object as any).assign(this, init); }
}

// @DataContract
export class ChannelSubscriptionStateDto
{
    // @DataMember
    public unsubscribed: boolean;

    // @DataMember
    public blockedTags: { [index:string]: string[]; } = {};

    public constructor(init?: Partial<ChannelSubscriptionStateDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class UserDto
{
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
    public marketingPreferences?: { [index:string]: ChannelSubscriptionStateDto; };

    public constructor(init?: Partial<UserDto>) { (Object as any).assign(this, init); }
}

export class ConsentPurposeDto
{
    public key: string;
    public name: string;
    public channel: string;
    public mappedTags: string[] = [];
    public regulatoryBasis: string[] = [];
    public description?: string;
    public isDeprecated: boolean;

    public constructor(init?: Partial<ConsentPurposeDto>) { (Object as any).assign(this, init); }
}

export class RetentionWindowDto
{
    public dataKind: string;
    public days: number;
    public action: string;

    public constructor(init?: Partial<RetentionWindowDto>) { (Object as any).assign(this, init); }
}

export class ProjectComplianceDto
{
    public regimes: string[] = [];
    public consentPurposes: ConsentPurposeDto[] = [];
    public retentionWindows: RetentionWindowDto[] = [];

    public constructor(init?: Partial<ProjectComplianceDto>) { (Object as any).assign(this, init); }
}

export class LegalHoldDto
{
    public id: string;
    public subjectKind: string;
    public subjectId: string;
    public reason: string;
    public placedAt: string;
    public placedBy?: string;
    public releasedAt?: string;
    public releasedBy?: string;

    public constructor(init?: Partial<LegalHoldDto>) { (Object as any).assign(this, init); }
}

export class DsarRequestDto
{
    public id: string;
    public subjectKind: string;
    public subjectId: string;
    public status: string;
    public receivedAt: string;
    public slaDeadline: string;
    public autoApproveAt?: string;
    public decidedAt?: string;
    public decidedBy?: string;
    public rejectionReason?: string;

    public constructor(init?: Partial<DsarRequestDto>) { (Object as any).assign(this, init); }
}

export class ComplianceAuditEntryDto
{
    public id: string;
    public timestamp: string;
    public action: string;
    public subjectKind?: string;
    public subjectId?: string;
    public reason?: string;
    public metadata?: { [index:string]: string; };

    public constructor(init?: Partial<ComplianceAuditEntryDto>) { (Object as any).assign(this, init); }
}

export class AccountComplianceDto
{
    public dsarMode: string;
    public dsarDelayDays: number;
    public autoForwardAdvisories: boolean;
    public securityContact?: string;

    public constructor(init?: Partial<AccountComplianceDto>) { (Object as any).assign(this, init); }
}

export enum SupportCustomerStatus
{
    Pending = 'Pending',
    Open = 'Open',
    Solved = 'Solved',
    Closed = 'Closed',
}

// @DataContract
export class SupportCaseDto implements IHasViewId
{
    // @DataMember
    public viewId: string;

    // @DataMember
    public accountId: string;

    // @DataMember
    public projectId?: string;

    // @DataMember
    public reporterId?: string;

    // @DataMember
    public kind: SupportCaseKind;

    // @DataMember
    public severity: SupportCaseSeverity;

    // @DataMember
    public status: SupportCaseStatus;

    // @DataMember
    public customerStatus: SupportCustomerStatus;

    // @DataMember
    public subject: string;

    // @DataMember
    public affectedModule?: string;

    // @DataMember
    public deploymentMode: DeploymentMode;

    // @DataMember
    public gatewayVersion?: string;

    // @DataMember
    public region?: string;

    // @DataMember
    public planTier?: string;

    // @DataMember
    public openedOn: number;

    // @DataMember
    public firstResponseOn?: number;

    // @DataMember
    public resolvedOn?: number;

    // @DataMember
    public closedOn?: number;

    // @DataMember
    public resolution?: string;

    // @DataMember
    public messageCount: number;

    // @DataMember
    public lastMessageOn?: number;

    public constructor(init?: Partial<SupportCaseDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class SupportCaseMessageDto
{
    // @DataMember
    public id: string;

    // @DataMember
    public caseId: string;

    // @DataMember
    public authorKind: SupportMessageAuthorKind;

    // @DataMember
    public authorId?: string;

    // @DataMember
    public authorDisplayName?: string;

    // @DataMember
    public body: string;

    // @DataMember
    public sentOn: number;

    public constructor(init?: Partial<SupportCaseMessageDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class SupportCaseDetailDto
{
    // @DataMember
    public case: SupportCaseDto;

    // @DataMember
    public messages: SupportCaseMessageDto[] = [];

    public constructor(init?: Partial<SupportCaseDetailDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class SupportCaseListProjection implements IHasViewId
{
    // @DataMember
    public viewId: string;

    // @DataMember
    public projectId?: string;

    // @DataMember
    public kind: SupportCaseKind;

    // @DataMember
    public severity: SupportCaseSeverity;

    // @DataMember
    public status: SupportCaseStatus;

    // @DataMember
    public customerStatus: SupportCustomerStatus;

    // @DataMember
    public subject: string;

    // @DataMember
    public openedOn: number;

    // @DataMember
    public messageCount: number;

    // @DataMember
    public lastMessageOn?: number;

    public constructor(init?: Partial<SupportCaseListProjection>) { (Object as any).assign(this, init); }
}

// @DataContract
export class DiagnosticPackStepDescriptorDto
{
    // @DataMember
    public stepId: string;

    // @DataMember
    public kind: string;

    // @DataMember
    public description: string;

    // @DataMember
    public parameters: { [index:string]: string; } = {};

    public constructor(init?: Partial<DiagnosticPackStepDescriptorDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class DiagnosticPackDescriptorDto
{
    // @DataMember
    public name: string;

    // @DataMember
    public version: number;

    // @DataMember
    public summary: string;

    // @DataMember
    public steps: DiagnosticPackStepDescriptorDto[] = [];

    public constructor(init?: Partial<DiagnosticPackDescriptorDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class DiagnosticPackStepResultDto
{
    // @DataMember
    public stepId: string;

    // @DataMember
    public kind: string;

    // @DataMember
    public isSuccess: boolean;

    // @DataMember
    public result?: Object;

    // @DataMember
    public errorMessage?: string;

    public constructor(init?: Partial<DiagnosticPackStepResultDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class DiagnosticPackRunResultDto
{
    // @DataMember
    public packName: string;

    // @DataMember
    public packVersion: number;

    // @DataMember
    public caseId?: string;

    // @DataMember
    public steps: DiagnosticPackStepResultDto[] = [];

    public constructor(init?: Partial<DiagnosticPackRunResultDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class DiagnosticEchoRegionDto
{

    public constructor(init?: Partial<DiagnosticEchoRegionDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class DiagnosticEchoDto
{
    // @DataMember
    public containerName?: string;

    // @DataMember
    public isManagedService: boolean;

    // @DataMember
    public apiVersion: string;

    // @DataMember
    public hubVersion: string;

    // @DataMember
    public release: string;

    // @DataMember
    public runtime: string;

    // @DataMember
    public hubUrl: string;

    // @DataMember
    public apiUrl: string;

    // @DataMember
    public licensePresent: boolean;

    // @DataMember
    public regions?: DiagnosticEchoRegionDto[];

    public constructor(init?: Partial<DiagnosticEchoDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class DiagnosticEventItemDto
{
    // @DataMember
    public position: number;

    // @DataMember
    public eventType: string;

    // @DataMember
    public payload?: { [index:string]: string; };

    public constructor(init?: Partial<DiagnosticEventItemDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class DiagnosticEventsPageDto
{
    // @DataMember
    public stream: string;

    // @DataMember
    public from: number;

    // @DataMember
    public count: number;

    // @DataMember
    public hasMore: boolean;

    // @DataMember
    public nextFrom: number;

    // @DataMember
    public items: DiagnosticEventItemDto[] = [];

    public constructor(init?: Partial<DiagnosticEventsPageDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class DiagnosticLogsResponse
{
    // @DataMember
    public list?: PaginatedResponse<TenantLogEntryDto>;

    public constructor(init?: Partial<DiagnosticLogsResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class DiagnosticRedisListItemDto
{
    // @DataMember
    public viewId: string;

    // @DataMember
    public name?: string;

    // @DataMember
    public status?: string;

    public constructor(init?: Partial<DiagnosticRedisListItemDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class DiagnosticRedisInspectDto
{
    // @DataMember
    public keyPattern: string;

    // @DataMember
    public cacheKey: string;

    // @DataMember
    public isList: boolean;

    // @DataMember
    public item?: { [index:string]: Object; };

    // @DataMember
    public listItems?: DiagnosticRedisListItemDto[];

    // @DataMember
    public hasMore: boolean;

    // @DataMember
    public startingAfter?: string;

    public constructor(init?: Partial<DiagnosticRedisInspectDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class DiagnosticHealthCheckDto
{
    // @DataMember
    public checkId: string;

    // @DataMember
    public isHealthy: boolean;

    // @DataMember
    public statusCode: number;

    // @DataMember
    public detail?: string;

    public constructor(init?: Partial<DiagnosticHealthCheckDto>) { (Object as any).assign(this, init); }
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

export interface ILlmApiKeyRequest
{
    apiKey: string;
}

export interface IHasViewId
{
    viewId: string;
}

export interface IHasDatabaseId
{
    id?: string;
}

export interface IBindableContract
{
}

export interface IHasRazorTemplateCode
{
}

export interface IHasDomainEntityId
{
    viewId: string;
}

export interface IIntegrationIdentification
{
    integrationId: IntegrationId;
    capability: string;
    isSystemOwned: boolean;
}

export class CronExpression
{
    public value: string;
    public parsed: CronExpression;

    public constructor(init?: Partial<CronExpression>) { (Object as any).assign(this, init); }
}

export interface IHasResponsibleUserId
{
    userId: string;
}

export interface ICursorArgs
{
    field: string;
    order: number;
}

export class StringField extends JsonSchemaField
{
    public format?: string;
    public pattern?: string;
    public minLength?: number;
    public maxLength?: number;
    public translateOptions?: IReadOnlyDictionary<string, string>;

    public constructor(init?: Partial<StringField>) { super(init); (Object as any).assign(this, init); }
}

export class DecimalField extends JsonSchemaField
{
    public minimum?: number;
    public maximum?: number;
    public multipleOf?: number;

    public constructor(init?: Partial<DecimalField>) { super(init); (Object as any).assign(this, init); }
}

export class CurrencyField extends JsonSchemaField
{
    public allowedCurrencies?: IReadOnlyList<string>;

    public constructor(init?: Partial<CurrencyField>) { super(init); (Object as any).assign(this, init); }
}

export class BooleanField extends JsonSchemaField
{

    public constructor(init?: Partial<BooleanField>) { super(init); (Object as any).assign(this, init); }
}

export class DateField extends JsonSchemaField
{
    public minimum?: number;
    public maximum?: number;

    public constructor(init?: Partial<DateField>) { super(init); (Object as any).assign(this, init); }
}

export class IntegerField extends JsonSchemaField
{
    public minimum?: number;
    public maximum?: number;

    public constructor(init?: Partial<IntegerField>) { super(init); (Object as any).assign(this, init); }
}

export class GeolocationField extends JsonSchemaField
{
    public allowedTypes?: IReadOnlyList<string>;

    public constructor(init?: Partial<GeolocationField>) { super(init); (Object as any).assign(this, init); }
}

export class TagsField extends JsonSchemaField
{

    public constructor(init?: Partial<TagsField>) { super(init); (Object as any).assign(this, init); }
}

export class FileField extends JsonSchemaField
{
    public storages?: IReadOnlyList<string>;

    public constructor(init?: Partial<FileField>) { super(init); (Object as any).assign(this, init); }
}

export class TaxonomySelectionField extends JsonSchemaField
{
    public taxonomyId?: string;
    public multiple: boolean;

    public constructor(init?: Partial<TaxonomySelectionField>) { super(init); (Object as any).assign(this, init); }
}

export class CollectionSelectionField extends JsonSchemaField
{
    public collectionId?: string;
    public displayField?: string;
    public multiple: boolean;

    public constructor(init?: Partial<CollectionSelectionField>) { super(init); (Object as any).assign(this, init); }
}

export class UserSelectionField extends JsonSchemaField
{
    public multiple: boolean;

    public constructor(init?: Partial<UserSelectionField>) { super(init); (Object as any).assign(this, init); }
}

export class RoleSelectionField extends JsonSchemaField
{
    public multiple: boolean;

    public constructor(init?: Partial<RoleSelectionField>) { super(init); (Object as any).assign(this, init); }
}

export class EnumSelectionField extends JsonSchemaField
{
    public values?: IReadOnlyList<string>;
    public multiple: boolean;

    public constructor(init?: Partial<EnumSelectionField>) { super(init); (Object as any).assign(this, init); }
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
    public translateOptions?: IReadOnlyDictionary<string, string>;

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
    public license?: EchoLicenseDto;
    public askForEnterpriseLicenseEmail?: string;
    public emailServiceConfigured: boolean;
    public rootBootstrapPasswordSource?: string;
    public regions?: EchoRegionDto[];
    public isProductionInstallation: boolean;
    public licensingMode: string;
    public graceDaysLeft?: number;
    public installationDomain?: string;
    public licensingDocsUrl?: string;

    public constructor(init?: Partial<EchoResponse>) { (Object as any).assign(this, init); }
}

export class PublicProjectConfigDto
{
    public displayName: string;
    public adminPortalEnabled: boolean;
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

export class GetAccountProfileResponse extends ResponseBase
{
    public item?: AccountOwnerDto;

    public constructor(init?: Partial<GetAccountProfileResponse>) { super(init); (Object as any).assign(this, init); }
}

export class EmptyResponse extends ResponseBase
{

    public constructor(init?: Partial<EmptyResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetAccountStatusResponse extends ResponseBase
{
    public item?: AccountStatusDto;

    public constructor(init?: Partial<GetAccountStatusResponse>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class IdResponse extends ResponseBase
{
    // @DataMember
    public id?: string;

    // @DataMember
    public status?: string;

    public constructor(init?: Partial<IdResponse>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class CreateStripeCheckoutSessionResponse extends IdResponse
{

    public constructor(init?: Partial<CreateStripeCheckoutSessionResponse>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class GetStripeBillingPortalUrlResponse extends IdResponse
{

    public constructor(init?: Partial<GetStripeBillingPortalUrlResponse>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class CreateTeamMemberFromInvitationResponse extends IdResponse
{
    // @DataMember
    public token?: string;

    public constructor(init?: Partial<CreateTeamMemberFromInvitationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetAccountUsageBillingResponse extends ResponseBase
{
    public item?: UsageBillingDto;

    public constructor(init?: Partial<GetAccountUsageBillingResponse>) { super(init); (Object as any).assign(this, init); }
}

export class PromoteEnvironmentResponse extends ResponseBase
{
    public item?: PromotionResultDto;

    public constructor(init?: Partial<PromoteEnvironmentResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetProjectEnvironmentsResponse extends ResponseBase
{
    public item?: ProjectEnvironmentsDto;

    public constructor(init?: Partial<GetProjectEnvironmentsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetProjectResponse extends ResponseBase
{
    public item?: ProjectDto;

    public constructor(init?: Partial<GetProjectResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetProjectsResponse extends ResponseBase
{
    public list?: ProjectListItemDto[];

    public constructor(init?: Partial<GetProjectsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetAccountRegionsResponse extends ResponseBase
{
    public items?: ProjectRegionDto[];

    public constructor(init?: Partial<GetAccountRegionsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class WaitForProjectActiveResponse extends ResponseBase
{
    public status?: string;
    public isActive: boolean;
    public waitedSeconds: number;
    public message?: string;

    public constructor(init?: Partial<WaitForProjectActiveResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetProjectTokensResponse extends ResponseBase
{
    public tokens?: TokenMappingDto[];

    public constructor(init?: Partial<GetProjectTokensResponse>) { super(init); (Object as any).assign(this, init); }
}

export class AdminPortalStructureDto
{
    public projectId: string;
    public adminPortalEnabled: boolean;
    public displayName: string;
    public modules: AdminPortalModuleDto[] = [];

    public constructor(init?: Partial<AdminPortalStructureDto>) { (Object as any).assign(this, init); }
}

// @DataContract
export class CreateAccountResponse extends IdResponse
{
    // @DataMember
    public token?: string;

    public constructor(init?: Partial<CreateAccountResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetAccountCollaboratorsResponse extends ResponseBase
{
    public list?: PaginatedResponse<AuthDto>;

    public constructor(init?: Partial<GetAccountCollaboratorsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetAccountPasswordPolicyResponse extends ResponseBase
{
    public policy?: AccountPasswordPolicyDto;

    public constructor(init?: Partial<GetAccountPasswordPolicyResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetAccountTeamPoliciesResponse extends ResponseBase
{
    public policies?: PolicyItemDto[];

    public constructor(init?: Partial<GetAccountTeamPoliciesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetAccountTeamRolesResponse extends ResponseBase
{
    public roles?: AccountTeamRoleDto[];

    public constructor(init?: Partial<GetAccountTeamRolesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class AccountPasskeyOkResponse extends ResponseBase
{

    public constructor(init?: Partial<AccountPasskeyOkResponse>) { super(init); (Object as any).assign(this, init); }
}

export class AccountPasskeyVerificationTokenResponse extends ResponseBase
{
    public verificationToken: string;

    public constructor(init?: Partial<AccountPasskeyVerificationTokenResponse>) { super(init); (Object as any).assign(this, init); }
}

export class AccountPasskeyCeremonyOptionsResponse extends ResponseBase
{
    public ceremonyId: string;
    public optionsJson: string;

    public constructor(init?: Partial<AccountPasskeyCeremonyOptionsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class AccountPasskeyAuthTokensResponse extends ResponseBase
{
    public accessToken: string;
    public refreshToken: string;
    public expiresInSeconds: number;
    public recoveryCodes?: string[];

    public constructor(init?: Partial<AccountPasskeyAuthTokensResponse>) { super(init); (Object as any).assign(this, init); }
}

export class AccountPasskeyListResponse extends ResponseBase
{
    public passkeys: AccountPasskeyListItemDto[] = [];

    public constructor(init?: Partial<AccountPasskeyListResponse>) { super(init); (Object as any).assign(this, init); }
}

export class AccountPasskeyEnrollmentResponse extends ResponseBase
{
    public recoveryCodes?: string[];

    public constructor(init?: Partial<AccountPasskeyEnrollmentResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetLicenseDomainDnsStatusResponse extends ResponseBase
{
    public status?: LicenseDomainDnsStatusDto;

    public constructor(init?: Partial<GetLicenseDomainDnsStatusResponse>) { super(init); (Object as any).assign(this, init); }
}

export class StartLicenseDomainVerificationResponse extends ResponseBase
{
    public challenge?: LicenseDomainVerificationChallengeDto;

    public constructor(init?: Partial<StartLicenseDomainVerificationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetLicenseDomainVerificationStatusResponse extends ResponseBase
{
    public status?: LicenseDomainVerificationStatusDto;

    public constructor(init?: Partial<GetLicenseDomainVerificationStatusResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetLicensesResponse extends ResponseBase
{
    public list?: LicenseDto[];

    public constructor(init?: Partial<GetLicensesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class PostLicenseHeartbeatResponse extends ResponseBase
{
    public verdict?: LicenseHeartbeatVerdictDto;

    public constructor(init?: Partial<PostLicenseHeartbeatResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetInstallationLicenseStatusResponse extends ResponseBase
{
    public status?: InstallationLicenseStatusDto;

    public constructor(init?: Partial<GetInstallationLicenseStatusResponse>) { super(init); (Object as any).assign(this, init); }
}

export class IssueServiceUserApiKeyResponse
{
    public id: number;
    public name: string;
    public key: string;

    public constructor(init?: Partial<IssueServiceUserApiKeyResponse>) { (Object as any).assign(this, init); }
}

export class ListServiceUserApiKeysResponse
{
    public keys: ServiceUserApiKeyDto[] = [];

    public constructor(init?: Partial<ListServiceUserApiKeysResponse>) { (Object as any).assign(this, init); }
}

export class GetMembershipTriggerResponse extends GetTriggerResponse
{
    public trigger?: MembershipTriggerDto;

    public constructor(init?: Partial<GetMembershipTriggerResponse>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class GetMembershipTriggersResponse extends GetTriggersResponse
{
    // @DataMember
    public list?: PaginatedResponse<MembershipTriggerProjectionList>;

    public constructor(init?: Partial<GetMembershipTriggersResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetRoleResponse extends ResponseBase
{
    public role?: RoleItemDto;

    public constructor(init?: Partial<GetRoleResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetRolesResponse extends ResponseBase
{
    public roles: RoleListProjectionDto[] = [];

    public constructor(init?: Partial<GetRolesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPolicyResponse extends ResponseBase
{
    public policy?: PolicyItemDto;

    public constructor(init?: Partial<GetPolicyResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPoliciesResponse extends ResponseBase
{
    public policies: PolicyItemDto[] = [];

    public constructor(init?: Partial<GetPoliciesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPasskeySettingsResponse extends ResponseBase
{
    public result?: PasskeySettingsDto;

    public constructor(init?: Partial<GetPasskeySettingsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetMembershipIntegrationResponse extends ResponseBase
{
    public item?: MembershipIntegrationDto;

    public constructor(init?: Partial<GetMembershipIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetMembershipIntegrationsResponse extends ResponseBase
{
    public list?: PaginatedResponse<MembershipIntegrationListProjection>;

    public constructor(init?: Partial<GetMembershipIntegrationsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetAuthorizationSettingsResponse extends ResponseBase
{
    public result?: MembershipAuthorizationViewDto;

    public constructor(init?: Partial<GetAuthorizationSettingsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class UpdatePasswordComplexityResponse extends ResponseBase
{
    public result: boolean;

    public constructor(init?: Partial<UpdatePasswordComplexityResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetAuthenticationSettingsResponse extends ResponseBase
{
    public result?: MembershipAuthenticationViewDto;

    public constructor(init?: Partial<GetAuthenticationSettingsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchemaTriggerResponse extends GetTriggerResponse
{
    public trigger?: SchemaTriggerDto;

    public constructor(init?: Partial<GetSchemaTriggerResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchemaTriggersResponse extends GetTriggersResponse
{
    public list?: PaginatedResponse<SchemaTriggerProjectionList>;

    public constructor(init?: Partial<GetSchemaTriggersResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetDatabaseTaxonomyResponse extends ResponseBase
{
    public item?: TaxonomyDto;

    public constructor(init?: Partial<GetDatabaseTaxonomyResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetDatabaseTaxonomiesResponse extends ResponseBase
{
    public list?: PaginatedResponse<TaxonomyListProjection>;

    public constructor(init?: Partial<GetDatabaseTaxonomiesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetDatabaseTaxonomyTreeResponse extends ResponseBase
{
    public tree?: TaxonomyTreeDto[];

    public constructor(init?: Partial<GetDatabaseTaxonomyTreeResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetDatabaseTaxonomyTermResponse extends ResponseBase
{
    public item?: TermDto;

    public constructor(init?: Partial<GetDatabaseTaxonomyTermResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetDatabaseMergedTermTreeResponse extends ResponseBase
{
    public tree?: TermTreeDto[];

    public constructor(init?: Partial<GetDatabaseMergedTermTreeResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetDatabaseTaxonomyTermTreeResponse extends ResponseBase
{
    public tree?: TermTreeDto[];

    public constructor(init?: Partial<GetDatabaseTaxonomyTermTreeResponse>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class ApplyDatabaseSchemaBundleResponse extends ResponseBase
{
    // @DataMember
    public tier?: string;

    // @DataMember
    public taxonomies: AppliedTaxonomyDto[] = [];

    // @DataMember
    public collections: AppliedCollectionDto[] = [];

    // @DataMember
    public decisions: string[] = [];

    // @DataMember
    public errors: string[] = [];

    public constructor(init?: Partial<ApplyDatabaseSchemaBundleResponse>) { super(init); (Object as any).assign(this, init); }
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

export class GetDatabaseSchemaDraftResponse extends ResponseBase
{
    public item?: SchemaDraftDto;

    public constructor(init?: Partial<GetDatabaseSchemaDraftResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetDatabaseSchemaListSettingsResponse extends ResponseBase
{
    public settings?: SchemaListSettingsDto;

    public constructor(init?: Partial<GetDatabaseSchemaListSettingsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetDatabaseSchemaVersionDiffResponse extends ResponseBase
{
    public item?: SchemaDiffDto;

    public constructor(init?: Partial<GetDatabaseSchemaVersionDiffResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetDatabaseSchemaVersionsResponse extends ResponseBase
{
    public items?: SchemaVersionSummaryDto[];

    public constructor(init?: Partial<GetDatabaseSchemaVersionsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class AggregateRecordsResponse extends ResponseBase
{
    public result?: Object[];

    public constructor(init?: Partial<AggregateRecordsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class CountRecordsResponse extends ResponseBase
{
    public count: number;

    public constructor(init?: Partial<CountRecordsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class DistinctRecordValuesResponse extends ResponseBase
{
    public values?: Object[];

    public constructor(init?: Partial<DistinctRecordValuesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class ExecuteRecordsAggregateResponse extends ResponseBase
{
    public result?: Object[];

    public constructor(init?: Partial<ExecuteRecordsAggregateResponse>) { super(init); (Object as any).assign(this, init); }
}

export class FindRecordsResponse extends ResponseBase
{
    public list?: PaginatedResponse<Object>;

    public constructor(init?: Partial<FindRecordsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class FindOneRecordResponse extends ResponseBase
{
    public result?: Object;

    public constructor(init?: Partial<FindOneRecordResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetCollectionIndexesResponse extends ResponseBase
{
    public indexes?: CollectionIndexDto[];

    public constructor(init?: Partial<GetCollectionIndexesResponse>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class SeedCollectionRecordsResponse extends ResponseBase
{
    // @DataMember
    public result?: SeedCollectionRecordsResultDto;

    public constructor(init?: Partial<SeedCollectionRecordsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetDatabaseIntegrationResponse extends ResponseBase
{
    public item?: DatabaseIntegrationDto;

    public constructor(init?: Partial<GetDatabaseIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetDatabaseIntegrationsResponse extends ResponseBase
{
    public defaultIntegrationId?: string;
    public list?: PaginatedResponse<DatabaseIntegrationListProjection>;

    public constructor(init?: Partial<GetDatabaseIntegrationsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetAllowedFlexTiersResponse extends ResponseBase
{
    public tiers?: FlexTierDto[];

    public constructor(init?: Partial<GetAllowedFlexTiersResponse>) { super(init); (Object as any).assign(this, init); }
}

export class RevealManagedFlexConnectionStringResponse extends ResponseBase
{
    public connectionString?: string;

    public constructor(init?: Partial<RevealManagedFlexConnectionStringResponse>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class TestDatabaseIntegrationResponse extends ResponseBase
{
    // @DataMember
    public items?: IReadOnlyList<IntegrationTestResultItemDto>;

    public constructor(init?: Partial<TestDatabaseIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetCollectionImportResponse extends ResponseBase
{
    public result?: CollectionImportDto;

    public constructor(init?: Partial<GetCollectionImportResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetCollectionImportsResponse extends ResponseBase
{
    public result?: PaginatedResponse<CollectionImportDto>;

    public constructor(init?: Partial<GetCollectionImportsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class RequestImportUploadUrlResponse extends ResponseBase
{
    public result?: ImportUploadTargetDto;

    public constructor(init?: Partial<RequestImportUploadUrlResponse>) { super(init); (Object as any).assign(this, init); }
}

export class AnalyzeImportFileResponse extends ResponseBase
{
    public result?: ImportFileAnalysisDto;

    public constructor(init?: Partial<AnalyzeImportFileResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetDatabaseAggregateResponse extends ResponseBase
{
    public item?: MongoDbAggregateDto;

    public constructor(init?: Partial<GetDatabaseAggregateResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetDatabaseAggregatesResponse extends ResponseBase
{
    public list?: PaginatedResponse<MongoDbAggregateListProjection>;

    public constructor(init?: Partial<GetDatabaseAggregatesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class TestDatabaseAggregateResponse extends ResponseBase
{
    public result?: Object[];

    public constructor(init?: Partial<TestDatabaseAggregateResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetFilesTriggerResponse extends GetTriggerResponse
{
    public trigger?: FilesTriggerDto;

    public constructor(init?: Partial<GetFilesTriggerResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetFilesTriggersResponse extends GetTriggersResponse
{
    public list?: PaginatedResponse<FilesTriggerProjectionList>;

    public constructor(init?: Partial<GetFilesTriggersResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetFilesIntegrationResponse extends ResponseBase
{
    public item?: FilesIntegrationDto;

    public constructor(init?: Partial<GetFilesIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetFilesIntegrationsResponse extends ResponseBase
{
    public defaultIntegrationId?: string;
    public list?: PaginatedResponse<FilesIntegrationListProjection>;

    public constructor(init?: Partial<GetFilesIntegrationsResponse>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class TestFilesIntegrationResponse extends ResponseBase
{
    // @DataMember
    public items?: IReadOnlyList<IntegrationTestResultItemDto>;

    public constructor(init?: Partial<TestFilesIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetFileResponse extends ResponseBase
{
    public file?: FileResourceRefDto;
    public isPublic?: boolean;
    public publicUrl?: string;

    public constructor(init?: Partial<GetFileResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetFolderFilesResponse extends ResponseBase
{
    public list?: PaginatedResponse<FileResourceRefDto>;
    public folders?: string[];

    public constructor(init?: Partial<GetFolderFilesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetNotificationModuleDisableDependenciesResponse extends ResponseBase
{
    public dependencies?: NotificationModuleDisableDependenciesDto;

    public constructor(init?: Partial<GetNotificationModuleDisableDependenciesResponse>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class TestEmailValidationIntegrationResponse extends ResponseBase
{
    // @DataMember
    public items: TestEmailValidationItemDto[] = [];

    public constructor(init?: Partial<TestEmailValidationIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetEmailTemplateResponse extends ResponseBase
{
    public item?: EmailTemplateDto;

    public constructor(init?: Partial<GetEmailTemplateResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetEmailTemplatesResponse extends ResponseBase
{
    public list?: PaginatedResponse<EmailTemplateListProjection>;

    public constructor(init?: Partial<GetEmailTemplatesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetHtmlFromMjmlResponse extends ResponseBase
{
    public variables?: string[];
    public htmlFromMjmlResponse?: HtmlFromMjmlResponse;

    public constructor(init?: Partial<GetHtmlFromMjmlResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSystemEmailTemplateResponse extends ResponseBase
{
    public item?: SystemEmailTemplateDto;

    public constructor(init?: Partial<GetSystemEmailTemplateResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSystemEmailTemplatesResponse extends ResponseBase
{
    public list?: PaginatedResponse<SystemEmailTemplateListProjection>;

    public constructor(init?: Partial<GetSystemEmailTemplatesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetEmailTemplateAvailableTokensResponse extends ResponseBase
{
    public tokens?: { [index:string]: string[]; };

    public constructor(init?: Partial<GetEmailTemplateAvailableTokensResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetEmailSignatureResponse extends ResponseBase
{
    public item?: EmailSignatureDto;

    public constructor(init?: Partial<GetEmailSignatureResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetEmailSignaturesResponse extends ResponseBase
{
    public list?: PaginatedResponse<ListItemWithTranslationsProjection>;

    public constructor(init?: Partial<GetEmailSignaturesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetEmailSettingsResponse extends ResponseBase
{
    public settings?: EmailSettings;
    public systemTags?: GroupDefinitionDto[];

    public constructor(init?: Partial<GetEmailSettingsResponse>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class CheckEmailIntegrationDomainHealthResponse extends ResponseBase
{
    // @DataMember
    public domain?: string;

    // @DataMember
    public items?: IReadOnlyList<DomainHealthRecordItemDto>;

    public constructor(init?: Partial<CheckEmailIntegrationDomainHealthResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetEmailIntegrationResponse extends ResponseBase
{
    public item?: EmailIntegrationDto;

    public constructor(init?: Partial<GetEmailIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetEmailIntegrationsResponse extends ResponseBase
{
    public defaultIntegrationId?: string;
    public list?: PaginatedResponse<EmailIntegrationListProjection>;

    public constructor(init?: Partial<GetEmailIntegrationsResponse>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class TestEmailIntegrationResponse extends ResponseBase
{
    // @DataMember
    public items?: IReadOnlyList<IntegrationTestResultItemDto>;

    public constructor(init?: Partial<TestEmailIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetEmailFooterResponse extends ResponseBase
{
    public item?: EmailFooterDto;

    public constructor(init?: Partial<GetEmailFooterResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetEmailFootersResponse extends ResponseBase
{
    public list?: PaginatedResponse<ListItemWithTranslationsProjection>;

    public constructor(init?: Partial<GetEmailFootersResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetEmailCampaignResponse extends ResponseBase
{
    public item?: EmailCampaignDto;

    public constructor(init?: Partial<GetEmailCampaignResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetEmailCampaignsResponse extends ResponseBase
{
    public list?: PaginatedResponse<EmailCampaignListProjection>;

    public constructor(init?: Partial<GetEmailCampaignsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetEmailCampaignBatchesResponse extends ResponseBase
{
    public list?: PaginatedResponse<EmailCampaignBatchDto>;

    public constructor(init?: Partial<GetEmailCampaignBatchesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetEmailCampaignBatchNotificationResponse extends ResponseBase
{
    public campaignNotification?: EmailCampaignBatchNotificationDto;

    public constructor(init?: Partial<GetEmailCampaignBatchNotificationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetEmailCampaignBatchNotificationsResponse extends ResponseBase
{
    public batchStatusHistory?: BatchStatusChangeEntryDto[];
    public list?: PaginatedResponse<EmailCampaignBatchNotificationDto>;

    public constructor(init?: Partial<GetEmailCampaignBatchNotificationsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetEmailCampaignStatisticsResponse extends ResponseBase
{
    public stats?: CampaignStatsDto;

    public constructor(init?: Partial<GetEmailCampaignStatisticsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class PreviewEmailNotificationResponse extends ResponseBase
{
    public subject?: string;
    public body?: string;

    public constructor(init?: Partial<PreviewEmailNotificationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetEmailCampaignMessageResponse extends ResponseBase
{
    public emailMessageEntity?: EmailCampaignBatchNotificationDto;

    public constructor(init?: Partial<GetEmailCampaignMessageResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetEmailCampaignMessagesResponse extends ResponseBase
{
    public list?: PaginatedResponse<EmailCampaignBatchNotificationDto>;

    public constructor(init?: Partial<GetEmailCampaignMessagesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSmsTemplateResponse extends ResponseBase
{
    public item?: SmsTemplateDto;

    public constructor(init?: Partial<GetSmsTemplateResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSmsTemplatesResponse extends ResponseBase
{
    public list?: PaginatedResponse<SmsTemplateListProjection>;

    public constructor(init?: Partial<GetSmsTemplatesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSmsMessageContentTokensResponse extends ResponseBase
{
    public tokens?: { [index:string]: string[]; };

    public constructor(init?: Partial<GetSmsMessageContentTokensResponse>) { super(init); (Object as any).assign(this, init); }
}

export class RenderSmsTextResponse extends ResponseBase
{
    public variables?: string[];
    public text?: string;

    public constructor(init?: Partial<RenderSmsTextResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSmsSettingsResponse extends ResponseBase
{
    public settings?: SmsSettings;

    public constructor(init?: Partial<GetSmsSettingsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSmsIntegrationResponse extends ResponseBase
{
    public item?: SmsIntegrationDto;

    public constructor(init?: Partial<GetSmsIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSmsIntegrationsResponse extends ResponseBase
{
    public defaultIntegrationId?: string;
    public list?: PaginatedResponse<SmsIntegrationListProjection>;

    public constructor(init?: Partial<GetSmsIntegrationsResponse>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class TestSmsIntegrationResponse extends ResponseBase
{
    // @DataMember
    public items?: IReadOnlyList<IntegrationTestResultItemDto>;

    public constructor(init?: Partial<TestSmsIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSmsCampaignResponse extends ResponseBase
{
    public smsCampaign?: SmsCampaignDto;

    public constructor(init?: Partial<GetSmsCampaignResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSmsCampaignsResponse extends ResponseBase
{
    public list?: PaginatedResponse<SmsCampaignDto>;

    public constructor(init?: Partial<GetSmsCampaignsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSmsCampaignBatchesResponse extends ResponseBase
{
    public list?: PaginatedResponse<SmsCampaignBatchDto>;

    public constructor(init?: Partial<GetSmsCampaignBatchesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSmsCampaignBatchNotificationResponse extends ResponseBase
{
    public campaignNotification?: SmsCampaignBatchNotificationDto;

    public constructor(init?: Partial<GetSmsCampaignBatchNotificationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSmsCampaignBatchNotificationsResponse extends ResponseBase
{
    public batchStatusHistory?: BatchStatusChangeEntryDto[];
    public list?: PaginatedResponse<SmsCampaignBatchNotificationDto>;

    public constructor(init?: Partial<GetSmsCampaignBatchNotificationsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSmsCampaignStatisticsResponse extends ResponseBase
{
    public stats?: CampaignStatsDto;

    public constructor(init?: Partial<GetSmsCampaignStatisticsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class PreviewSmsNotificationResponse extends ResponseBase
{
    public body?: string;

    public constructor(init?: Partial<PreviewSmsNotificationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSmsCampaignMessageResponse extends ResponseBase
{
    public smsMessageEntity?: SmsCampaignBatchNotificationDto;

    public constructor(init?: Partial<GetSmsCampaignMessageResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSmsCampaignMessagesResponse extends ResponseBase
{
    public list?: PaginatedResponse<SmsCampaignBatchNotificationDto>;

    public constructor(init?: Partial<GetSmsCampaignMessagesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetMarketplaceListingResponse extends ResponseBase
{
    public listing?: MarketplaceListingDto;

    public constructor(init?: Partial<GetMarketplaceListingResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetMarketplaceTokensResponse extends ResponseBase
{
    public tokens?: string[];

    public constructor(init?: Partial<GetMarketplaceTokensResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetMarketplaceListingsResponse extends ResponseBase
{
    public list?: PaginatedResponse<MarketplaceListingProjection>;

    public constructor(init?: Partial<GetMarketplaceListingsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetMarketplaceIntegrationResponse extends ResponseBase
{
    public integration?: MarketplaceIntegrationDto;

    public constructor(init?: Partial<GetMarketplaceIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetMarketplaceIntegrationsResponse extends ResponseBase
{
    public list?: PaginatedResponse<MarketplaceIntegrationListProjection>;

    public constructor(init?: Partial<GetMarketplaceIntegrationsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class EmptyMarketplaceSecretsResponse extends ResponseBase
{

    public constructor(init?: Partial<EmptyMarketplaceSecretsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class RevealMarketplaceIntegrationSecretsResponse extends ResponseBase
{
    public secrets?: IReadOnlyDictionary<string, string>;

    public constructor(init?: Partial<RevealMarketplaceIntegrationSecretsResponse>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class TestMarketplaceIntegrationResponse extends ResponseBase
{
    // @DataMember
    public items?: IReadOnlyList<IntegrationTestResultItemDto>;

    public constructor(init?: Partial<TestMarketplaceIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class SetMarketplaceIntegrationTokenMappingsResponse extends ResponseBase
{

    public constructor(init?: Partial<SetMarketplaceIntegrationTokenMappingsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetMarketplaceFunctionResponse extends ResponseBase
{
    public function?: MarketplaceFunctionDto;

    public constructor(init?: Partial<GetMarketplaceFunctionResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetMarketplaceFunctionsResponse extends ResponseBase
{
    public list?: PaginatedResponse<MarketplaceFunctionProjection>;

    public constructor(init?: Partial<GetMarketplaceFunctionsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetMarketplaceFunctionCatalogResponse extends ResponseBase
{
    public functions: IReadOnlyList<MarketplaceFunctionDefinitionDto>;

    public constructor(init?: Partial<GetMarketplaceFunctionCatalogResponse>) { super(init); (Object as any).assign(this, init); }
}

export class InvokeMarketplaceFunctionResponse extends ResponseBase
{
    public isSuccess: boolean;
    public output?: Object;
    public vendorRequestId?: string;

    public constructor(init?: Partial<InvokeMarketplaceFunctionResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetCodeIntegrationResponse extends ResponseBase
{
    public item?: CodeIntegrationDto;

    public constructor(init?: Partial<GetCodeIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetCodeIntegrationsResponse extends ResponseBase
{
    public list?: PaginatedResponse<CodeIntegrationListProjection>;

    public constructor(init?: Partial<GetCodeIntegrationsResponse>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class TestCodeIntegrationResponse extends ResponseBase
{
    // @DataMember
    public items?: IReadOnlyList<IntegrationTestResultItemDto>;

    public constructor(init?: Partial<TestCodeIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPushTemplateResponse extends ResponseBase
{
    public item?: PushTemplateDto;

    public constructor(init?: Partial<GetPushTemplateResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPushTemplatesResponse extends ResponseBase
{
    public list?: PaginatedResponse<PushTemplateListProjection>;

    public constructor(init?: Partial<GetPushTemplatesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPushMessageContentTokensResponse extends ResponseBase
{
    public tokens?: { [index:string]: string[]; };

    public constructor(init?: Partial<GetPushMessageContentTokensResponse>) { super(init); (Object as any).assign(this, init); }
}

export class RenderPushResponse extends ResponseBase
{
    public variables?: string[];
    public title?: string;
    public body?: string;
    public subtitle?: string;

    public constructor(init?: Partial<RenderPushResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPushSettingsResponse extends ResponseBase
{
    public settings?: PushSettings;

    public constructor(init?: Partial<GetPushSettingsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPushIntegrationResponse extends ResponseBase
{
    public item?: PushIntegrationDto;

    public constructor(init?: Partial<GetPushIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPushIntegrationsResponse extends ResponseBase
{
    public defaultIntegrationId?: string;
    public list?: PaginatedResponse<PushIntegrationListProjection>;

    public constructor(init?: Partial<GetPushIntegrationsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPushCampaignResponse extends ResponseBase
{
    public item?: PushCampaignDto;

    public constructor(init?: Partial<GetPushCampaignResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPushCampaignsResponse extends ResponseBase
{
    public list?: PaginatedResponse<PushCampaignDto>;

    public constructor(init?: Partial<GetPushCampaignsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPushCampaignBatchesResponse extends ResponseBase
{
    public list?: PaginatedResponse<PushCampaignBatchDto>;

    public constructor(init?: Partial<GetPushCampaignBatchesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPushCampaignBatchNotificationResponse extends ResponseBase
{
    public campaignNotification?: PushCampaignBatchNotificationDto;

    public constructor(init?: Partial<GetPushCampaignBatchNotificationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPushCampaignBatchNotificationsResponse extends ResponseBase
{
    public batchStatusHistory?: BatchStatusChangeEntryDto[];
    public list?: PaginatedResponse<PushCampaignBatchNotificationDto>;

    public constructor(init?: Partial<GetPushCampaignBatchNotificationsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPushCampaignStatisticsResponse extends ResponseBase
{
    public stats?: CampaignStatsDto;

    public constructor(init?: Partial<GetPushCampaignStatisticsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class PreviewPushNotificationResponse extends ResponseBase
{
    public title?: string;
    public body?: string;
    public subtitle?: string;

    public constructor(init?: Partial<PreviewPushNotificationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPushCampaignMessageResponse extends ResponseBase
{
    public pushMessageEntity?: PushCampaignBatchNotificationDto;

    public constructor(init?: Partial<GetPushCampaignMessageResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPushCampaignMessagesResponse extends ResponseBase
{
    public list?: PaginatedResponse<PushCampaignBatchNotificationDto>;

    public constructor(init?: Partial<GetPushCampaignMessagesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPaymentsWebhookLogResponse extends ResponseBase
{
    public list?: IReadOnlyList<PaymentsWebhookLogEntry>;

    public constructor(init?: Partial<GetPaymentsWebhookLogResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPaymentsTriggerResponse extends GetTriggerResponse
{
    public trigger?: PaymentTriggerDto;

    public constructor(init?: Partial<GetPaymentsTriggerResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPaymentsTriggersResponse extends GetTriggersResponse
{
    public list?: PaginatedResponse<PaymentTriggerProjectionList>;

    public constructor(init?: Partial<GetPaymentsTriggersResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPaymentsIntegrationResponse extends ResponseBase
{
    public item?: PaymentsIntegrationDto;

    public constructor(init?: Partial<GetPaymentsIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetPaymentsIntegrationsResponse extends ResponseBase
{
    public list?: PaginatedResponse<PaymentsIntegrationListProjection>;

    public constructor(init?: Partial<GetPaymentsIntegrationsResponse>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class TestPaymentsIntegrationResponse extends ResponseBase
{
    // @DataMember
    public items?: IReadOnlyList<IntegrationTestResultItemDto>;

    public constructor(init?: Partial<TestPaymentsIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetLoggingIntegrationResponse extends ResponseBase
{
    public item?: LoggingIntegrationDto;

    public constructor(init?: Partial<GetLoggingIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetLoggingIntegrationsResponse extends ResponseBase
{
    public list?: PaginatedResponse<LoggingIntegrationListProjection>;

    public constructor(init?: Partial<GetLoggingIntegrationsResponse>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class TestLoggingIntegrationResponse extends ResponseBase
{
    // @DataMember
    public items?: IReadOnlyList<IntegrationTestResultItemDto>;

    public constructor(init?: Partial<TestLoggingIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class CleanLogsResponse extends ResponseBase
{

    public constructor(init?: Partial<CleanLogsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetLogsByCorrelationIdResponse extends ResponseBase
{
    public items?: IReadOnlyList<TenantLogEntryDto>;

    public constructor(init?: Partial<GetLogsByCorrelationIdResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetLogsResponse extends ResponseBase
{
    public list?: PaginatedResponse<TenantLogEntryDto>;

    public constructor(init?: Partial<GetLogsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetLogSettingsResponse extends ResponseBase
{
    public skipCloudDashboardLogs: boolean;
    public skipHttpBodyMeta: boolean;
    public aiChatLoggingEnabled: boolean;
    public hasNorbixLogging: boolean;

    public constructor(init?: Partial<GetLogSettingsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class SaveLogSettingsResponse extends ResponseBase
{

    public constructor(init?: Partial<SaveLogSettingsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetAiToolsResponse extends ResponseBase
{
    public tools?: AiToolManifestItem[];

    public constructor(init?: Partial<GetAiToolsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class InvokeAiToolResponse extends ResponseBase
{
    public result?: string;

    public constructor(init?: Partial<InvokeAiToolResponse>) { super(init); (Object as any).assign(this, init); }
}

export class AskChatResponse extends ResponseBase
{
    public result?: string;

    public constructor(init?: Partial<AskChatResponse>) { super(init); (Object as any).assign(this, init); }
}

export class UploadChatAttachmentResponse extends ResponseBase
{
    public id?: string;
    public sessionId?: string;

    public constructor(init?: Partial<UploadChatAttachmentResponse>) { super(init); (Object as any).assign(this, init); }
}

export class ChatAvailabilityResponse extends ResponseBase
{
    public available: boolean;
    public reason?: string;
    public profiles?: string[];
    public models?: ChatModelOption[];

    public constructor(init?: Partial<ChatAvailabilityResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetChatMemoryResponse extends ResponseBase
{
    public notes?: ChatMemoryNote[];

    public constructor(init?: Partial<GetChatMemoryResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetChatSessionsResponse extends ResponseBase
{
    public sessions?: ChatSessionListItem[];

    public constructor(init?: Partial<GetChatSessionsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetChatSessionEntriesResponse extends ResponseBase
{
    public sessionId?: string;
    public profile?: string;
    public projectId?: string;
    public env?: string;
    public entries?: AiChatEntryWireDto[];
    public lastSeq: number;
    public activeWorkItemIds?: string[];

    public constructor(init?: Partial<GetChatSessionEntriesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class ChatTurnResponse extends ResponseBase
{
    public sessionId?: string;
    public reply?: string;
    public screenPatch?: ChatScreenContextDto;
    public toolTrace?: string[];

    public constructor(init?: Partial<ChatTurnResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetProjectBriefResponse extends ResponseBase
{
    public projectId?: string;
    public snapshot?: ProjectBriefSnapshotWireDto;
    public events?: ProjectBriefEventWireDto[];
    public lastSeq: number;

    public constructor(init?: Partial<GetProjectBriefResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetWorkItemsResponse extends ResponseBase
{
    public projectId?: string;
    public workItems?: WorkItemWireDto[];

    public constructor(init?: Partial<GetWorkItemsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetWorkItemResponse extends ResponseBase
{
    public workItem?: WorkItemWireDto;
    public plans?: AiChatEntryWireDto[];
    public steps?: AiChatEntryWireDto[];

    public constructor(init?: Partial<GetWorkItemResponse>) { super(init); (Object as any).assign(this, init); }
}

export class ExportWorkItemResponse extends ResponseBase
{
    public workItemId?: string;
    public markdown?: string;

    public constructor(init?: Partial<ExportWorkItemResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetLlmIntegrationResponse extends ResponseBase
{
    public item?: LlmIntegrationDto;

    public constructor(init?: Partial<GetLlmIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetLlmIntegrationsResponse extends ResponseBase
{
    public defaultIntegrationId?: string;
    public list?: PaginatedResponse<LlmIntegrationListProjection>;

    public constructor(init?: Partial<GetLlmIntegrationsResponse>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class TestLlmIntegrationResponse extends ResponseBase
{
    // @DataMember
    public items?: IReadOnlyList<IntegrationTestResultItemDto>;

    public constructor(init?: Partial<TestLlmIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetMcpIntegrationResponse extends ResponseBase
{
    public item?: McpIntegrationDto;

    public constructor(init?: Partial<GetMcpIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetMcpIntegrationsResponse extends ResponseBase
{
    public defaultIntegrationId?: string;
    public list?: PaginatedResponse<McpIntegrationListProjection>;

    public constructor(init?: Partial<GetMcpIntegrationsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetWebhookIntegrationResponse extends ResponseBase
{
    public item?: WebhookIntegrationDto;

    public constructor(init?: Partial<GetWebhookIntegrationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class RevealWebhookIntegrationSecretResponse extends ResponseBase
{
    public signingSecret?: string;

    public constructor(init?: Partial<RevealWebhookIntegrationSecretResponse>) { super(init); (Object as any).assign(this, init); }
}

export class RotateWebhookIntegrationSecretResponse extends ResponseBase
{
    public signingSecret?: string;

    public constructor(init?: Partial<RotateWebhookIntegrationSecretResponse>) { super(init); (Object as any).assign(this, init); }
}

export class HttpResult
{
    public responseText?: string;
    public responseStream?: string;
    public fileInfo?: any;
    public virtualFile?: IVirtualFile;
    public contentType?: string;
    public headers?: { [index:string]: string; };
    public cookies?: any;
    public eTag?: string;
    public age?: string;
    public maxAge?: string;
    public expires?: string;
    public lastModified?: string;
    public cacheControl: CacheControl;
    public resultScope?: any;
    public allowsPartialResponse: boolean;
    public options?: { [index:string]: string; };
    public status: number;
    public statusCode: any;
    public statusDescription?: string;
    public response?: Object;
    public responseFilter?: IContentTypeWriter;
    public requestContext?: IRequest;
    public view?: string;
    public template?: string;
    public paddingLength: number;
    public isPartialRequest: boolean;

    public constructor(init?: Partial<HttpResult>) { (Object as any).assign(this, init); }
}

export class SaveWebhookDestinationResponse extends ResponseBase
{
    public destinationId?: string;

    public constructor(init?: Partial<SaveWebhookDestinationResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchedulerTaskResponse extends ResponseBase
{
    public item?: SchedulerTaskDto;

    public constructor(init?: Partial<GetSchedulerTaskResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSchedulerTasksResponse extends ResponseBase
{
    public list?: PaginatedResponse<SchedulerTaskListProjection>;

    public constructor(init?: Partial<GetSchedulerTasksResponse>) { super(init); (Object as any).assign(this, init); }
}

export class ResolveResourcesResponse extends ResponseBase
{
    public resolved: IReadOnlyList<ResolvedResourceEntry>;

    public constructor(init?: Partial<ResolveResourcesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetContactResponse extends ResponseBase
{
    public item?: UserDto;

    public constructor(init?: Partial<GetContactResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetAllContactsResponse extends ResponseBase
{
    public items?: IReadOnlyList<UserDto>;
    public nextCursor?: string;

    public constructor(init?: Partial<GetAllContactsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetComplianceSettingsResponse extends ResponseBase
{
    public settings?: ProjectComplianceDto;

    public constructor(init?: Partial<GetComplianceSettingsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetLegalHoldsResponse extends ResponseBase
{
    public holds: LegalHoldDto[] = [];

    public constructor(init?: Partial<GetLegalHoldsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetDsarRequestsResponse extends ResponseBase
{
    public requests: DsarRequestDto[] = [];

    public constructor(init?: Partial<GetDsarRequestsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetComplianceAuditLogResponse extends ResponseBase
{
    public entries: ComplianceAuditEntryDto[] = [];

    public constructor(init?: Partial<GetComplianceAuditLogResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetAccountComplianceResponse extends ResponseBase
{
    public settings?: AccountComplianceDto;

    public constructor(init?: Partial<GetAccountComplianceResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSupportCaseResponse extends ResponseBase
{
    public result?: SupportCaseDetailDto;

    public constructor(init?: Partial<GetSupportCaseResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetSupportCasesResponse extends ResponseBase
{
    public list?: PaginatedResponse<SupportCaseListProjection>;

    public constructor(init?: Partial<GetSupportCasesResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetDiagnosticPacksResponse extends ResponseBase
{
    public packs?: DiagnosticPackDescriptorDto[];

    public constructor(init?: Partial<GetDiagnosticPacksResponse>) { super(init); (Object as any).assign(this, init); }
}

export class RunDiagnosticPackResponse extends ResponseBase
{
    public result?: DiagnosticPackRunResultDto;

    public constructor(init?: Partial<RunDiagnosticPackResponse>) { super(init); (Object as any).assign(this, init); }
}

export class GetDiagnosticEchoResponse extends ResponseBase
{
    public result?: DiagnosticEchoDto;

    public constructor(init?: Partial<GetDiagnosticEchoResponse>) { super(init); (Object as any).assign(this, init); }
}

export class ReadDiagnosticEventsResponse extends ResponseBase
{
    public result?: DiagnosticEventsPageDto;

    public constructor(init?: Partial<ReadDiagnosticEventsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class QueryDiagnosticLogsResponse extends ResponseBase
{
    public result?: DiagnosticLogsResponse;

    public constructor(init?: Partial<QueryDiagnosticLogsResponse>) { super(init); (Object as any).assign(this, init); }
}

export class InspectDiagnosticRedisResponse extends ResponseBase
{
    public result?: DiagnosticRedisInspectDto;

    public constructor(init?: Partial<InspectDiagnosticRedisResponse>) { super(init); (Object as any).assign(this, init); }
}

export class RunDiagnosticHealthCheckResponse extends ResponseBase
{
    public result?: DiagnosticHealthCheckDto;

    public constructor(init?: Partial<RunDiagnosticHealthCheckResponse>) { super(init); (Object as any).assign(this, init); }
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

// @Route("/{version}/code/enable", "GET")
export class EnableCode extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<EnableCode>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableCode'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/code/disable", "GET")
export class DisableCode extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DisableCode>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableCode'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/code/integrations", "GET")
export class GetCodeIntegrations extends CodeMashListPaginationRequestBase implements IReturn<GetCodeIntegrationsResponse>
{

    public constructor(init?: Partial<GetCodeIntegrations>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCodeIntegrations'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetCodeIntegrationsResponse(); }
}

// @Route("/{version}/code/integrations/{id}", "GET")
export class GetCodeIntegration extends CodeMashRequestBase implements IReturn<GetCodeIntegrationResponse>
{
    /** @description Integration id, from get_code_integrations. */
    // @ApiMember(Description="Integration id, from get_code_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetCodeIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCodeIntegration'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetCodeIntegrationResponse(); }
}

// @Route("/{version}/code/integrations", "POST")
// @DataContract
export class SaveCodeIntegration extends CodeMashRequestBase implements IReturn<IdResponse>
{
    // @DataMember(Name="integration")
    public integration: CodeIntegrationRequest;

    public constructor(init?: Partial<SaveCodeIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveCodeIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/code/integrations/test", "POST")
export class TestCodeIntegration extends CodeMashRequestBase implements IReturn<TestCodeIntegrationResponse>
{
    /** @description Integration id, from get_code_integrations. */
    // @ApiMember(Description="Integration id, from get_code_integrations.", IsRequired=true)
    public integrationId: string;

    public constructor(init?: Partial<TestCodeIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'TestCodeIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new TestCodeIntegrationResponse(); }
}

// @Route("/{version}/code/integrations/confirm-human-delivery", "POST")
// @DataContract
export class ConfirmCodeIntegrationHumanDeliveryRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Integration id, from get_code_integrations. */
    // @DataMember
    // @ApiMember(Description="Integration id, from get_code_integrations.", IsRequired=true)
    public integrationId: string;

    public constructor(init?: Partial<ConfirmCodeIntegrationHumanDeliveryRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ConfirmCodeIntegrationHumanDeliveryRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/code/integrations/{Id}/default", "PUT")
export class SetCodeIntegrationAsDefault extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Integration id, from get_code_integrations. */
    // @ApiMember(Description="Integration id, from get_code_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<SetCodeIntegrationAsDefault>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SetCodeIntegrationAsDefault'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/code/integrations/{Id}", "DELETE")
export class DeleteCodeIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Integration id, from get_code_integrations. */
    // @ApiMember(Description="Integration id, from get_code_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DeleteCodeIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteCodeIntegrationRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/code/integrations/{Id}/enable", "PUT")
export class EnableCodeIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Integration id, from get_code_integrations. */
    // @ApiMember(Description="Integration id, from get_code_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<EnableCodeIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableCodeIntegrationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/code/integrations/{Id}/disable", "PUT")
export class DisableCodeIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Integration id, from get_code_integrations. */
    // @ApiMember(Description="Integration id, from get_code_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DisableCodeIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableCodeIntegrationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/code/marketplace/listings", "GET")
export class GetMarketplaceListings extends CodeMashListPaginationRequestBase implements IReturn<GetMarketplaceListingsResponse>
{
    /** @description Filter by one or more categories (Crm, Erp, Communication, etc.). */
    // @ApiMember(Description="Filter by one or more categories (Crm, Erp, Communication, etc.).")
    public categories?: MarketplaceCategory[];

    /** @description Filter by transport (Mcp, Rest, Code). */
    // @ApiMember(Description="Filter by transport (Mcp, Rest, Code).")
    public transports?: MarketplaceTransport[];

    /** @description Free-text search over the listing's display name, vendor, and description. */
    // @ApiMember(Description="Free-text search over the listing's display name, vendor, and description.")
    public search?: string;

    /** @description If true, return only listings curated and verified by Norbix. */
    // @ApiMember(Description="If true, return only listings curated and verified by Norbix.")
    public officialOnly?: boolean;

    /** @description Filter by curated tag slugs (e.g. ai-llm, messaging, crm). Matches listings carrying any of the given tags. */
    // @ApiMember(Description="Filter by curated tag slugs (e.g. ai-llm, messaging, crm). Matches listings carrying any of the given tags.")
    public tags?: string[];

    public constructor(init?: Partial<GetMarketplaceListings>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMarketplaceListings'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetMarketplaceListingsResponse(); }
}

// @Route("/{version}/code/marketplace/listings/{ListingViewId}/functions/{FunctionKey}/tokens", "GET")
export class GetMarketplaceListingFunctionTokens extends CodeMashRequestBase implements IReturn<GetMarketplaceTokensResponse>
{
    /** @description Marketplace listing view id, from get_marketplace_listings. */
    // @ApiMember(Description="Marketplace listing view id, from get_marketplace_listings.", IsRequired=true)
    public listingViewId: string;

    /** @description Function key on the listing, from get_marketplace_listings. */
    // @ApiMember(Description="Function key on the listing, from get_marketplace_listings.", IsRequired=true)
    public functionKey: string;

    public constructor(init?: Partial<GetMarketplaceListingFunctionTokens>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMarketplaceListingFunctionTokens'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetMarketplaceTokensResponse(); }
}

// @Route("/{version}/code/marketplace/integrations", "GET")
export class GetMarketplaceIntegrations extends CodeMashListPaginationRequestBase implements IReturn<GetMarketplaceIntegrationsResponse>
{

    public constructor(init?: Partial<GetMarketplaceIntegrations>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMarketplaceIntegrations'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetMarketplaceIntegrationsResponse(); }
}

// @Route("/{version}/code/marketplace/integrations/{IntegrationViewId}", "GET")
export class GetMarketplaceIntegration extends CodeMashRequestBase implements IReturn<GetMarketplaceIntegrationResponse>
{
    /** @description Integration view id, from get_marketplace_integrations. */
    // @ApiMember(Description="Integration view id, from get_marketplace_integrations.", IsRequired=true)
    public integrationViewId: string;

    public constructor(init?: Partial<GetMarketplaceIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMarketplaceIntegration'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetMarketplaceIntegrationResponse(); }
}

// @Route("/{version}/code/marketplace/integrations", "POST")
// @DataContract
export class SaveMarketplaceIntegration extends CodeMashRequestBase implements IReturn<IdResponse>
{
    /** @description The marketplace integration to install, from a get_marketplace_listings entry. */
    // @DataMember
    // @ApiMember(Description="The marketplace integration to install, from a get_marketplace_listings entry.", IsRequired=true)
    public integration: MarketplaceIntegrationDto;

    // @DataMember
    public secrets: { [index:string]: string; } = {};

    public constructor(init?: Partial<SaveMarketplaceIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveMarketplaceIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/code/marketplace/integrations/{IntegrationViewId}", "DELETE")
export class DeleteMarketplaceIntegration extends CodeMashRequestBase implements IReturn<IdResponse>
{
    /** @description Integration view id, from get_marketplace_integrations. */
    // @ApiMember(Description="Integration view id, from get_marketplace_integrations.", IsRequired=true)
    public integrationViewId: string;

    public constructor(init?: Partial<DeleteMarketplaceIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteMarketplaceIntegration'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/code/marketplace/integrations/{IntegrationViewId}/enable", "POST")
export class EnableMarketplaceIntegration extends CodeMashRequestBase implements IReturn<IdResponse>
{
    /** @description Integration view id, from get_marketplace_integrations. */
    // @ApiMember(Description="Integration view id, from get_marketplace_integrations.", IsRequired=true)
    public integrationViewId: string;

    public constructor(init?: Partial<EnableMarketplaceIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableMarketplaceIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/code/marketplace/integrations/{IntegrationViewId}/disable", "POST")
export class DisableMarketplaceIntegration extends CodeMashRequestBase implements IReturn<IdResponse>
{
    /** @description Integration view id, from get_marketplace_integrations. */
    // @ApiMember(Description="Integration view id, from get_marketplace_integrations.", IsRequired=true)
    public integrationViewId: string;

    public constructor(init?: Partial<DisableMarketplaceIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableMarketplaceIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/code/marketplace/integrations/{IntegrationViewId}/functions", "GET")
export class GetMarketplaceFunctions extends CodeMashListPaginationRequestBase implements IReturn<GetMarketplaceFunctionsResponse>
{
    /** @description Integration view id, from get_marketplace_integrations. */
    // @ApiMember(Description="Integration view id, from get_marketplace_integrations.", IsRequired=true)
    public integrationViewId: string;

    public constructor(init?: Partial<GetMarketplaceFunctions>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMarketplaceFunctions'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetMarketplaceFunctionsResponse(); }
}

// @Route("/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}", "GET")
export class GetMarketplaceFunction extends CodeMashRequestBase implements IReturn<GetMarketplaceFunctionResponse>
{
    /** @description Integration view id, from get_marketplace_integrations. */
    // @ApiMember(Description="Integration view id, from get_marketplace_integrations.", IsRequired=true)
    public integrationViewId: string;

    /** @description Function view id, from get_marketplace_functions. */
    // @ApiMember(Description="Function view id, from get_marketplace_functions.", IsRequired=true)
    public functionViewId: string;

    public constructor(init?: Partial<GetMarketplaceFunction>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMarketplaceFunction'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetMarketplaceFunctionResponse(); }
}

// @Route("/{version}/code/marketplace/integrations/{IntegrationViewId}/functions", "POST")
// @DataContract
export class SaveMarketplaceFunction extends CodeMashRequestBase implements IReturn<IdResponse>
{
    /** @description Integration view id, from get_marketplace_integrations. */
    // @DataMember
    // @ApiMember(Description="Integration view id, from get_marketplace_integrations.", IsRequired=true)
    public integrationViewId: string;

    /** @description The function to create: functionKey, displayName, description, and one mapping per vendor function parameter. */
    // @DataMember
    // @ApiMember(Description="The function to create: functionKey, displayName, description, and one mapping per vendor function parameter.", IsRequired=true)
    public function: MarketplaceFunctionDto;

    public constructor(init?: Partial<SaveMarketplaceFunction>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveMarketplaceFunction'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}", "DELETE")
export class DeleteMarketplaceFunction extends CodeMashRequestBase implements IReturn<IdResponse>
{
    /** @description Integration view id, from get_marketplace_integrations. */
    // @ApiMember(Description="Integration view id, from get_marketplace_integrations.", IsRequired=true)
    public integrationViewId: string;

    /** @description Function view id, from get_marketplace_functions. */
    // @ApiMember(Description="Function view id, from get_marketplace_functions.", IsRequired=true)
    public functionViewId: string;

    public constructor(init?: Partial<DeleteMarketplaceFunction>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteMarketplaceFunction'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/enable", "POST")
export class EnableMarketplaceFunction extends CodeMashRequestBase implements IReturn<IdResponse>
{
    /** @description Integration view id, from get_marketplace_integrations. */
    // @ApiMember(Description="Integration view id, from get_marketplace_integrations.", IsRequired=true)
    public integrationViewId: string;

    /** @description Function view id, from get_marketplace_functions. */
    // @ApiMember(Description="Function view id, from get_marketplace_functions.", IsRequired=true)
    public functionViewId: string;

    public constructor(init?: Partial<EnableMarketplaceFunction>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableMarketplaceFunction'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/disable", "POST")
export class DisableMarketplaceFunction extends CodeMashRequestBase implements IReturn<IdResponse>
{
    /** @description Integration view id, from get_marketplace_integrations. */
    // @ApiMember(Description="Integration view id, from get_marketplace_integrations.", IsRequired=true)
    public integrationViewId: string;

    /** @description Function view id, from get_marketplace_functions. */
    // @ApiMember(Description="Function view id, from get_marketplace_functions.", IsRequired=true)
    public functionViewId: string;

    public constructor(init?: Partial<DisableMarketplaceFunction>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableMarketplaceFunction'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/code/marketplace/integrations/{IntegrationViewId}/functions/{FunctionViewId}/tokens", "GET")
export class GetMarketplaceFunctionTokens extends CodeMashRequestBase implements IReturn<GetMarketplaceTokensResponse>
{
    /** @description Integration view id, from get_marketplace_integrations. */
    // @ApiMember(Description="Integration view id, from get_marketplace_integrations.", IsRequired=true)
    public integrationViewId: string;

    /** @description Function view id, from get_marketplace_functions. */
    // @ApiMember(Description="Function view id, from get_marketplace_functions.", IsRequired=true)
    public functionViewId: string;

    public constructor(init?: Partial<GetMarketplaceFunctionTokens>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMarketplaceFunctionTokens'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetMarketplaceTokensResponse(); }
}

// @Route("/{version}/code/marketplace/functions/{FunctionViewId}/invoke", "POST")
// @DataContract
export class InvokeMarketplaceFunction extends CodeMashRequestBase implements IReturn<InvokeMarketplaceFunctionResponse>
{
    /** @description Function view id (func_…), from get_marketplace_functions. */
    // @DataMember
    // @ApiMember(Description="Function view id (func_…), from get_marketplace_functions.", IsRequired=true)
    public functionViewId: string;

    // @DataMember
    public payload: { [index:string]: Object; } = {};

    public constructor(init?: Partial<InvokeMarketplaceFunction>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'InvokeMarketplaceFunction'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new InvokeMarketplaceFunctionResponse(); }
}

// @Route("/{version}/code/marketplace/listings/{ListingViewId}", "GET")
export class GetMarketplaceListing extends CodeMashRequestBase implements IReturn<GetMarketplaceListingResponse>
{
    /** @description Listing view id (ml_…), from get_marketplace_listings. */
    // @ApiMember(Description="Listing view id (ml_…), from get_marketplace_listings.", IsRequired=true)
    public listingViewId: string;

    public constructor(init?: Partial<GetMarketplaceListing>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMarketplaceListing'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetMarketplaceListingResponse(); }
}

// @Route("/{version}/code/marketplace/integrations/{IntegrationViewId}/test", "POST")
export class TestMarketplaceIntegration extends CodeMashRequestBase implements IReturn<TestMarketplaceIntegrationResponse>
{
    /** @description Integration view id, from get_marketplace_integrations. */
    // @ApiMember(Description="Integration view id, from get_marketplace_integrations.", IsRequired=true)
    public integrationViewId: string;

    public constructor(init?: Partial<TestMarketplaceIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'TestMarketplaceIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new TestMarketplaceIntegrationResponse(); }
}

// @Route("/internal/_typegen", "GET")
export class InternalsTypeGen
{
    public typegen_0_SmtpEmailIntegrationRequest?: SmtpEmailIntegrationRequest;
    public typegen_1_AwsSesEmailIntegrationRequest?: AwsSesEmailIntegrationRequest;
    public typegen_2_SendGridEmailIntegrationRequest?: SendGridEmailIntegrationRequest;
    public typegen_3_MailGunEmailIntegrationRequest?: MailGunEmailIntegrationRequest;
    public typegen_4_EmailToAllUsersDeliverySettingsRequest?: EmailToAllUsersDeliverySettingsRequest;
    public typegen_5_EmailToAccountUsersDeliverySettingsRequest?: EmailToAccountUsersDeliverySettingsRequest;
    public typegen_6_EmailToCollectionRecordsDeliverySettingsRequest?: EmailToCollectionRecordsDeliverySettingsRequest;
    public typegen_7_EmailToEmailsDeliverySettingsRequest?: EmailToEmailsDeliverySettingsRequest;
    public typegen_8_EmailToUsersDeliverySettingsRequest?: EmailToUsersDeliverySettingsRequest;
    public typegen_9_MembershipTriggerRequest?: MembershipTriggerRequest;
    public typegen_10_SchemaTriggerRequest?: SchemaTriggerRequest;
    public typegen_11_FilesTriggerRequest?: FilesTriggerRequest;
    public typegen_12_PaymentTriggerRequest?: PaymentTriggerRequest;
    public typegen_15_MongoDbConnectionStringDatabaseIntegrationRequest?: MongoDbConnectionStringDatabaseIntegrationRequest;
    public typegen_16_MongoDbAtlasFlexManagedDatabaseIntegrationRequest?: MongoDbAtlasFlexManagedDatabaseIntegrationRequest;
    public typegen_16_GoogleDriveFilesIntegrationRequest?: GoogleDriveFilesIntegrationRequest;
    public typegen_17_FtpFilesIntegrationRequest?: FtpFilesIntegrationRequest;
    public typegen_18_DropBoxFilesIntegrationRequest?: DropBoxFilesIntegrationRequest;
    public typegen_19_AppleICloudFilesIntegrationRequest?: AppleICloudFilesIntegrationRequest;
    public typegen_20_AwsS3FilesIntegrationRequest?: AwsS3FilesIntegrationRequest;
    public typegen_21_GoogleCloudFilesIntegrationRequest?: GoogleCloudFilesIntegrationRequest;
    public typegen_22_AzureBlobFilesIntegrationRequest?: AzureBlobFilesIntegrationRequest;
    public typegen_23_LocalFilesIntegrationRequest?: LocalFilesIntegrationRequest;
    public typegen_24_AmqpLoggingIntegrationRequest?: AmqpLoggingIntegrationRequest;
    public typegen_25_AwsKinesisLoggingIntegrationRequest?: AwsKinesisLoggingIntegrationRequest;
    public typegen_26_AwsS3LoggingIntegrationRequest?: AwsS3LoggingIntegrationRequest;
    public typegen_28_NewRelicLoggingIntegrationRequest?: NewRelicLoggingIntegrationRequest;
    public typegen_30_MongoDbLoggingIntegrationRequest?: MongoDbLoggingIntegrationRequest;
    public typegen_31_KafkaLoggingIntegrationRequest?: KafkaLoggingIntegrationRequest;
    public typegen_32_PrometheusLoggingIntegrationRequest?: PrometheusLoggingIntegrationRequest;
    public typegen_33_DataDogLoggingIntegrationRequest?: DataDogLoggingIntegrationRequest;
    public typegen_34_InternalKafkaLoggingIntegrationRequest?: InternalKafkaLoggingIntegrationRequest;
    public typegen_35_ElasticSearchLoggingIntegrationRequest?: ElasticSearchLoggingIntegrationRequest;
    public typegen_37_SplunkLoggingIntegrationRequest?: SplunkLoggingIntegrationRequest;
    public typegen_38_AzureOtelLoggingIntegrationRequest?: AzureOtelLoggingIntegrationRequest;
    public typegen_39_KibanaLoggingIntegrationRequest?: KibanaLoggingIntegrationRequest;
    public typegen_40_LocalFileLoggingIntegrationRequest?: LocalFileLoggingIntegrationRequest;
    public typegen_41_OktaMembershipIntegrationRequest?: OktaMembershipIntegrationRequest;
    public typegen_42_XMembershipIntegrationRequest?: XMembershipIntegrationRequest;
    public typegen_43_GoogleMembershipIntegrationRequest?: GoogleMembershipIntegrationRequest;
    public typegen_44_MicrosoftMembershipIntegrationRequest?: MicrosoftMembershipIntegrationRequest;
    public typegen_45_GitHubMembershipIntegrationRequest?: GitHubMembershipIntegrationRequest;
    public typegen_46_MetaMembershipIntegrationRequest?: MetaMembershipIntegrationRequest;
    public typegen_47_AppleMembershipIntegrationRequest?: AppleMembershipIntegrationRequest;
    public typegen_48_LemonSqueezyPaymentIntegrationRequest?: LemonSqueezyPaymentIntegrationRequest;
    public typegen_49_AdyenPaymentIntegrationRequest?: AdyenPaymentIntegrationRequest;
    public typegen_50_MolliePaymentIntegrationRequest?: MolliePaymentIntegrationRequest;
    public typegen_51_PaddlePaymentIntegrationRequest?: PaddlePaymentIntegrationRequest;
    public typegen_52_PayPalPaymentIntegrationRequest?: PayPalPaymentIntegrationRequest;
    public typegen_53_StripePaymentIntegrationRequest?: StripePaymentIntegrationRequest;
    public typegen_54_AppleInAppPaymentIntegrationRequest?: AppleInAppPaymentIntegrationRequest;
    public typegen_55_GoogleInAppPaymentIntegrationRequest?: GoogleInAppPaymentIntegrationRequest;
    public typegen_56_EdgeWebPushIntegrationRequest?: EdgeWebPushIntegrationRequest;
    public typegen_57_ChromePluginPushIntegrationRequest?: ChromePluginPushIntegrationRequest;
    public typegen_58_SafariPushIntegrationRequest?: SafariPushIntegrationRequest;
    public typegen_59_ChromeWebPushIntegrationRequest?: ChromeWebPushIntegrationRequest;
    public typegen_60_FirefoxWebPushIntegrationRequest?: FirefoxWebPushIntegrationRequest;
    public typegen_61_AndroidFirebasePushIntegrationRequest?: AndroidFirebasePushIntegrationRequest;
    public typegen_62_AppleApnsPushIntegrationRequest?: AppleApnsPushIntegrationRequest;
    public typegen_65_AwsLambdaCodeIntegrationRequest?: AwsLambdaCodeIntegrationRequest;
    public typegen_66_AzureFunctionsCodeIntegrationRequest?: AzureFunctionsCodeIntegrationRequest;
    public typegen_67_GoogleCloudFunctionsCodeIntegrationRequest?: GoogleCloudFunctionsCodeIntegrationRequest;
    public typegen_68_OllamaLlmIntegrationRequest?: OllamaLlmIntegrationRequest;
    public typegen_69_OpenRouterLlmIntegrationRequest?: OpenRouterLlmIntegrationRequest;
    public typegen_70_MistralLlmIntegrationRequest?: MistralLlmIntegrationRequest;
    public typegen_71_GrokLlmIntegrationRequest?: GrokLlmIntegrationRequest;
    public typegen_72_GroqLlmIntegrationRequest?: GroqLlmIntegrationRequest;
    public typegen_73_GoogleLlmIntegrationRequest?: GoogleLlmIntegrationRequest;
    public typegen_74_AnthropicLlmIntegrationRequest?: AnthropicLlmIntegrationRequest;
    public typegen_75_OpenAiLlmIntegrationRequest?: OpenAiLlmIntegrationRequest;
    public typegen_76_PlaywrightMcpIntegrationRequest?: PlaywrightMcpIntegrationRequest;
    public typegen_77_MongoDbMcpIntegrationRequest?: MongoDbMcpIntegrationRequest;
    public typegen_78_GitHubMcpIntegrationRequest?: GitHubMcpIntegrationRequest;
    public typegen_79_StripeMcpIntegrationRequest?: StripeMcpIntegrationRequest;
    public typegen_80_BraveSearchMcpIntegrationRequest?: BraveSearchMcpIntegrationRequest;
    public typegen_81_ObsidianMcpIntegrationRequest?: ObsidianMcpIntegrationRequest;
    public typegen_82_EmailTemplateDto?: EmailTemplateDto;
    public typegen_83_PushTemplateDto?: PushTemplateDto;
    public typegen_84_SmsTemplateDto?: SmsTemplateDto;
    public typegen_85_SystemEmailTemplateDto?: SystemEmailTemplateDto;
    public typegen_86_TriggerActionEmailDto?: TriggerActionEmailDto;
    public typegen_87_TriggerActionPushDto?: TriggerActionPushDto;
    public typegen_88_TriggerActionCodeDto?: TriggerActionCodeDto;
    public typegen_89_TriggerActionWebhookDto?: TriggerActionWebhookDto;
    public typegen_236_TriggerActionSmsDto?: TriggerActionSmsDto;
    public typegen_237_TriggerActionSseDto?: TriggerActionSseDto;
    public typegen_238_TriggerActionMarketplaceDto?: TriggerActionMarketplaceDto;
    public typegen_239_SseDeliverySettingsDto?: SseDeliverySettingsDto;
    public typegen_240_GetTriggers?: GetTriggers;
    public typegen_241_GetTriggersResponse?: GetTriggersResponse;
    public typegen_90_EmailToAllUsersDeliverySettingsDto?: EmailToAllUsersDeliverySettingsDto;
    public typegen_91_EmailToAccountUsersDeliverySettingsDto?: EmailToAccountUsersDeliverySettingsDto;
    public typegen_92_EmailToUsersDeliverySettingsDto?: EmailToUsersDeliverySettingsDto;
    public typegen_93_EmailToEmailAddressesDeliverySettingsDto?: EmailToEmailAddressesDeliverySettingsDto;
    public typegen_94_EmailToCollectionRecordsDeliverySettingsDto?: EmailToCollectionRecordsDeliverySettingsDto;
    public typegen_95_PushToAllUsersDeliverySettingsDto?: PushToAllUsersDeliverySettingsDto;
    public typegen_96_PushToUsersDeliverySettingsDto?: PushToUsersDeliverySettingsDto;
    public typegen_229_PushToAccountUsersDeliverySettingsDto?: PushToAccountUsersDeliverySettingsDto;
    public typegen_97_PushToCollectionRecordsDeliverySettingsDto?: PushToCollectionRecordsDeliverySettingsDto;
    public typegen_98_PushToDevicesDeliverySettingsDto?: PushToDevicesDeliverySettingsDto;
    public typegen_99_SmsToAllUsersDeliverySettingsDto?: SmsToAllUsersDeliverySettingsDto;
    public typegen_100_SmsToUsersDeliverySettingsDto?: SmsToUsersDeliverySettingsDto;
    public typegen_101_SmsToCollectionRecordsDeliverySettingsDto?: SmsToCollectionRecordsDeliverySettingsDto;
    public typegen_102_SmsToPhoneNumbersDeliverySettingsDto?: SmsToPhoneNumbersDeliverySettingsDto;
    public typegen_103_OpenAiLlmIntegrationDto?: OpenAiLlmIntegrationDto;
    public typegen_104_AnthropicLlmIntegrationDto?: AnthropicLlmIntegrationDto;
    public typegen_105_OllamaLlmIntegrationDto?: OllamaLlmIntegrationDto;
    public typegen_106_GroqLlmIntegrationDto?: GroqLlmIntegrationDto;
    public typegen_107_GoogleLlmIntegrationDto?: GoogleLlmIntegrationDto;
    public typegen_108_MistralLlmIntegrationDto?: MistralLlmIntegrationDto;
    public typegen_109_OpenRouterLlmIntegrationDto?: OpenRouterLlmIntegrationDto;
    public typegen_110_GrokLlmIntegrationDto?: GrokLlmIntegrationDto;
    public typegen_111_DockerMcpIntegrationDto?: DockerMcpIntegrationDto;
    public typegen_112_GoogleCalendarMcpIntegrationDto?: GoogleCalendarMcpIntegrationDto;
    public typegen_113_ObsidianMcpIntegrationDto?: ObsidianMcpIntegrationDto;
    public typegen_114_AwsLambdaCrossAccountRoleCodeIntegrationDto?: AwsLambdaCrossAccountRoleCodeIntegrationDto;
    public typegen_115_AwsLambdaIamCodeIntegrationDto?: AwsLambdaIamCodeIntegrationDto;
    public typegen_116_AzureFunctionsCodeIntegrationDto?: AzureFunctionsCodeIntegrationDto;
    public typegen_118_GoogleCloudFunctionsCodeIntegrationDto?: GoogleCloudFunctionsCodeIntegrationDto;
    public typegen_120_AdyenPaymentIntegrationDto?: AdyenPaymentIntegrationDto;
    public typegen_121_AppleInAppPaymentIntegrationDto?: AppleInAppPaymentIntegrationDto;
    public typegen_122_GoogleInAppPaymentIntegrationDto?: GoogleInAppPaymentIntegrationDto;
    public typegen_123_LemonSqueezyPaymentIntegrationDto?: LemonSqueezyPaymentIntegrationDto;
    public typegen_124_MolliePaymentIntegrationDto?: MolliePaymentIntegrationDto;
    public typegen_125_PaddlePaymentIntegrationDto?: PaddlePaymentIntegrationDto;
    public typegen_126_PayPalPaymentIntegrationDto?: PayPalPaymentIntegrationDto;
    public typegen_127_StripePaymentIntegrationDto?: StripePaymentIntegrationDto;
    public typegen_184_ShopifyPaymentIntegrationDto?: ShopifyPaymentIntegrationDto;
    public typegen_185_WooCommercePaymentIntegrationDto?: WooCommercePaymentIntegrationDto;
    public typegen_186_MagentoPaymentIntegrationDto?: MagentoPaymentIntegrationDto;
    public typegen_187_BraintreePaymentIntegrationDto?: BraintreePaymentIntegrationDto;
    public typegen_188_AuthorizeNetPaymentIntegrationDto?: AuthorizeNetPaymentIntegrationDto;
    public typegen_189_CheckOutComPaymentIntegrationDto?: CheckOutComPaymentIntegrationDto;
    public typegen_190_WorldpayPaymentIntegrationDto?: WorldpayPaymentIntegrationDto;
    public typegen_128_AppleSignInMembershipIntegrationDto?: AppleSignInMembershipIntegrationDto;
    public typegen_129_GitHubMembershipIntegrationDto?: GitHubMembershipIntegrationDto;
    public typegen_130_GoogleMembershipIntegrationDto?: GoogleMembershipIntegrationDto;
    public typegen_131_MetaMembershipIntegrationDto?: MetaMembershipIntegrationDto;
    public typegen_132_MicrosoftMembershipIntegrationDto?: MicrosoftMembershipIntegrationDto;
    public typegen_133_OktaMembershipIntegrationDto?: OktaMembershipIntegrationDto;
    public typegen_134_XMembershipIntegrationDto?: XMembershipIntegrationDto;
    public typegen_135_AmqpLoggingIntegrationDto?: AmqpLoggingIntegrationDto;
    public typegen_136_AwsKinesisLoggingIntegrationDto?: AwsKinesisLoggingIntegrationDto;
    public typegen_137_AwsS3CrossAccountRoleLoggingIntegrationDto?: AwsS3CrossAccountRoleLoggingIntegrationDto;
    public typegen_138_AwsS3IamLoggingIntegrationDto?: AwsS3IamLoggingIntegrationDto;
    public typegen_139_AzureOtelLoggingIntegrationDto?: AzureOtelLoggingIntegrationDto;
    public typegen_140_DataDogLoggingIntegrationDto?: DataDogLoggingIntegrationDto;
    public typegen_141_ElasticSearchLoggingIntegrationDto?: ElasticSearchLoggingIntegrationDto;
    public typegen_142_InternalKafkaLoggingIntegrationDto?: InternalKafkaLoggingIntegrationDto;
    public typegen_143_KafkaLoggingIntegrationDto?: KafkaLoggingIntegrationDto;
    public typegen_144_KibanaLoggingIntegrationDto?: KibanaLoggingIntegrationDto;
    public typegen_145_LocalFileLoggingIntegrationDto?: LocalFileLoggingIntegrationDto;
    public typegen_147_MongoDbLoggingIntegrationDto?: MongoDbLoggingIntegrationDto;
    public typegen_148_NewRelicLoggingIntegrationDto?: NewRelicLoggingIntegrationDto;
    public typegen_149_PrometheusLoggingIntegrationDto?: PrometheusLoggingIntegrationDto;
    public typegen_150_SplunkLoggingIntegrationDto?: SplunkLoggingIntegrationDto;
    public typegen_153_AppleICloudFilesIntegrationDto?: AppleICloudFilesIntegrationDto;
    public typegen_154_AwsS3CrossAccountRoleFilesIntegrationDto?: AwsS3CrossAccountRoleFilesIntegrationDto;
    public typegen_155_AwsS3IamFilesIntegrationDto?: AwsS3IamFilesIntegrationDto;
    public typegen_156_AzureBlobFilesIntegrationDto?: AzureBlobFilesIntegrationDto;
    public typegen_157_DropBoxFilesIntegrationDto?: DropBoxFilesIntegrationDto;
    public typegen_158_FtpFilesIntegrationDto?: FtpFilesIntegrationDto;
    public typegen_159_GoogleCloudFilesIntegrationDto?: GoogleCloudFilesIntegrationDto;
    public typegen_160_GoogleDriveFilesIntegrationDto?: GoogleDriveFilesIntegrationDto;
    public typegen_161_LocalFilesIntegrationDto?: LocalFilesIntegrationDto;
    public typegen_164_MongoDbConnectionStringIntegrationDto?: MongoDbConnectionStringIntegrationDto;
    public typegen_165_MongoDbAtlasFlexManagedIntegrationDto?: MongoDbAtlasFlexManagedIntegrationDto;
    public typegen_165_BirdSmsIntegrationDto?: BirdSmsIntegrationDto;
    public typegen_166_PlivoSmsIntegrationDto?: PlivoSmsIntegrationDto;
    public typegen_167_SinchSmsIntegrationDto?: SinchSmsIntegrationDto;
    public typegen_168_TelesignSmsIntegrationDto?: TelesignSmsIntegrationDto;
    public typegen_169_TelnyxSmsIntegrationDto?: TelnyxSmsIntegrationDto;
    public typegen_170_TwilioSmsIntegrationDto?: TwilioSmsIntegrationDto;
    public typegen_171_VonageSmsIntegrationDto?: VonageSmsIntegrationDto;
    public typegen_172_AndroidFirebasePushIntegrationDto?: AndroidFirebasePushIntegrationDto;
    public typegen_173_AppleApnsPushIntegrationDto?: AppleApnsPushIntegrationDto;
    public typegen_174_ChromePluginPushIntegrationDto?: ChromePluginPushIntegrationDto;
    public typegen_175_ChromeWebPushIntegrationDto?: ChromeWebPushIntegrationDto;
    public typegen_176_EdgeWebPushIntegrationDto?: EdgeWebPushIntegrationDto;
    public typegen_177_FirefoxWebPushIntegrationDto?: FirefoxWebPushIntegrationDto;
    public typegen_178_SafariPushIntegrationDto?: SafariPushIntegrationDto;
    public typegen_179_AwsCrossAccountRoleEmailIntegrationDto?: AwsCrossAccountRoleEmailIntegrationDto;
    public typegen_180_AwsIamEmailIntegrationDto?: AwsIamEmailIntegrationDto;
    public typegen_181_MailGunEmailIntegrationDto?: MailGunEmailIntegrationDto;
    public typegen_182_SendGridEmailIntegrationDto?: SendGridEmailIntegrationDto;
    public typegen_183_SmtpEmailIntegrationDto?: SmtpEmailIntegrationDto;
    public typegen_192_WebhookIntegrationDto?: WebhookIntegrationDto;
    public typegen_193_WebhookDestinationDto?: WebhookDestinationDto;
    public typegen_194_SchedulerTaskDto?: SchedulerTaskDto;
    public typegen_195_MongoDbAggregateDto?: MongoDbAggregateDto;
    public typegen_196_MarketplaceIntegrationDto?: MarketplaceIntegrationDto;
    public typegen_197_MarketplaceFunctionDto?: MarketplaceFunctionDto;
    public typegen_198_MarketplaceListingDto?: MarketplaceListingDto;
    public typegen_199_MarketplaceFunctionDefinitionDto?: MarketplaceFunctionDefinitionDto;
    public typegen_200_MarketplaceFunctionParameterDto?: MarketplaceFunctionParameterDto;
    public typegen_201_EnableCode?: EnableCode;
    public typegen_202_DisableCode?: DisableCode;
    public typegen_203_GetCodeIntegrations?: GetCodeIntegrations;
    public typegen_204_GetCodeIntegration?: GetCodeIntegration;
    public typegen_205_SaveCodeIntegration?: SaveCodeIntegration;
    public typegen_206_TestCodeIntegration?: TestCodeIntegration;
    public typegen_207_ConfirmCodeIntegrationHumanDeliveryRequest?: ConfirmCodeIntegrationHumanDeliveryRequest;
    public typegen_208_SetCodeIntegrationAsDefault?: SetCodeIntegrationAsDefault;
    public typegen_209_DeleteCodeIntegrationRequest?: DeleteCodeIntegrationRequest;
    public typegen_210_EnableCodeIntegrationRequest?: EnableCodeIntegrationRequest;
    public typegen_211_DisableCodeIntegrationRequest?: DisableCodeIntegrationRequest;
    public typegen_212_GetMarketplaceListings?: GetMarketplaceListings;
    public typegen_213_GetMarketplaceListingFunctionTokens?: GetMarketplaceListingFunctionTokens;
    public typegen_214_GetMarketplaceIntegrations?: GetMarketplaceIntegrations;
    public typegen_215_GetMarketplaceIntegration?: GetMarketplaceIntegration;
    public typegen_216_SaveMarketplaceIntegration?: SaveMarketplaceIntegration;
    public typegen_217_DeleteMarketplaceIntegration?: DeleteMarketplaceIntegration;
    public typegen_218_EnableMarketplaceIntegration?: EnableMarketplaceIntegration;
    public typegen_219_DisableMarketplaceIntegration?: DisableMarketplaceIntegration;
    public typegen_221_GetMarketplaceFunctions?: GetMarketplaceFunctions;
    public typegen_222_GetMarketplaceFunction?: GetMarketplaceFunction;
    public typegen_223_SaveMarketplaceFunction?: SaveMarketplaceFunction;
    public typegen_224_DeleteMarketplaceFunction?: DeleteMarketplaceFunction;
    public typegen_225_EnableMarketplaceFunction?: EnableMarketplaceFunction;
    public typegen_226_DisableMarketplaceFunction?: DisableMarketplaceFunction;
    public typegen_227_GetMarketplaceFunctionTokens?: GetMarketplaceFunctionTokens;
    public typegen_228_InvokeMarketplaceFunction?: InvokeMarketplaceFunction;
    public typegen_232_GetMarketplaceListing?: GetMarketplaceListing;
    public typegen_233_TestMarketplaceIntegration?: TestMarketplaceIntegration;
    public typegen_234_TestMarketplaceIntegrationResponse?: TestMarketplaceIntegrationResponse;
    public typegen_235_GetMarketplaceListingResponse?: GetMarketplaceListingResponse;
    public typegen_230_AdminPortalStructureDto?: AdminPortalStructureDto;
    public typegen_231_AdminPortalModuleDto?: AdminPortalModuleDto;
    public typegen_236_UserMessageEntryWireDto?: UserMessageEntryWireDto;
    public typegen_237_AssistantTextEntryWireDto?: AssistantTextEntryWireDto;
    public typegen_238_AssistantQuestionEntryWireDto?: AssistantQuestionEntryWireDto;
    public typegen_239_UserAnswerEntryWireDto?: UserAnswerEntryWireDto;
    public typegen_240_PlanEntryWireDto?: PlanEntryWireDto;
    public typegen_241_UserDecisionEntryWireDto?: UserDecisionEntryWireDto;
    public typegen_242_RunStepEntryWireDto?: RunStepEntryWireDto;
    public typegen_243_ActionPendingEntryWireDto?: ActionPendingEntryWireDto;
    public typegen_244_NoticeEntryWireDto?: NoticeEntryWireDto;
    public typegen_245_ConversationSnapshotEntryWireDto?: ConversationSnapshotEntryWireDto;

    public constructor(init?: Partial<InternalsTypeGen>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'InternalsTypeGen'; }
    public getMethod() { return 'GET'; }
    public createResponse() {}
}

// @Route("/{version}/echo", "GET")
export class Echo extends RequestBase implements IReturn<EchoResponse>
{

    public constructor(init?: Partial<Echo>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'Echo'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EchoResponse(); }
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

// @Route("/{version}/account/profile", "GET")
export class GetAccountProfile extends RequestBase implements IReturn<GetAccountProfileResponse>
{

    public constructor(init?: Partial<GetAccountProfile>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAccountProfile'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetAccountProfileResponse(); }
}

// @Route("/{version}/account/profile", "PUT")
// @DataContract
export class UpdateAccountProfile extends RequestBase implements IReturn<EmptyResponse>
{
    /** @description Account owner's display name. */
    // @DataMember
    // @ApiMember(Description="Account owner's display name.", IsRequired=true)
    public displayName: string;

    /** @description Email address used for billing communications. */
    // @DataMember
    // @ApiMember(Description="Email address used for billing communications.")
    public billingEmail?: string;

    /** @description Email address used for operations communications. */
    // @DataMember
    // @ApiMember(Description="Email address used for operations communications.")
    public operationsEmail?: string;

    /** @description Email address used for security-related communications. */
    // @DataMember
    // @ApiMember(Description="Email address used for security-related communications.")
    public securityEmail?: string;

    public constructor(init?: Partial<UpdateAccountProfile>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateAccountProfile'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/account/verify/resend", "GET")
export class ResendAccountVerificationToken extends RequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<ResendAccountVerificationToken>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ResendAccountVerificationToken'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Get Account Status. */
// @Route("/{version}/account/status", "GET")
// @Api(Description="Get Account Status.")
export class GetAccountStatus extends RequestBase implements IReturn<GetAccountStatusResponse>
{

    public constructor(init?: Partial<GetAccountStatus>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAccountStatus'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetAccountStatusResponse(); }
}

// @Route("/{version}/account/stripe/create-checkout-session", "POST")
// @DataContract
export class CreateStripeCheckoutSession extends RequestBase implements IReturn<CreateStripeCheckoutSessionResponse>
{
    // @DataMember
    public subscriptionType: SubscriptionType;

    // @DataMember
    public domain?: string;

    // @DataMember
    public projectCap: number;

    // @DataMember
    public newProjectSessionId?: string;

    // @DataMember
    public returnUrl?: string;

    public constructor(init?: Partial<CreateStripeCheckoutSession>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateStripeCheckoutSession'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CreateStripeCheckoutSessionResponse(); }
}

// @Route("/{version}/account/stripe/get-portal-url", "POST")
// @DataContract
export class GetStripeBillingPortalUrl extends RequestBase implements IReturn<GetStripeBillingPortalUrlResponse>
{
    /** @description Which subscription (e.g. main account plan) to open the billing portal for. */
    // @DataMember
    // @ApiMember(Description="Which subscription (e.g. main account plan) to open the billing portal for.")
    public subscriptionType: SubscriptionType;

    /** @description URL to return to after the customer leaves the billing portal. */
    // @DataMember
    // @ApiMember(Description="URL to return to after the customer leaves the billing portal.")
    public returnUrl?: string;

    public constructor(init?: Partial<GetStripeBillingPortalUrl>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetStripeBillingPortalUrl'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetStripeBillingPortalUrlResponse(); }
}

// @Route("/{version}/account/team/member", "POST")
export class CreateTeamMemberFromInvitation extends RequestBase implements IReturn<CreateTeamMemberFromInvitationResponse>
{
    /** @description Display name of the account holder */
    // @ApiMember(DataType="string", Description="Display name of the account holder", IsRequired=true, Name="DisplayName", ParameterType="form")
    public displayName: string;

    /** @description Token from invitation email */
    // @ApiMember(DataType="string", Description="Token from invitation email", IsRequired=true, Name="Token", ParameterType="form")
    public token: string;

    /** @description Set password for a new account */
    // @ApiMember(DataType="string", Description="Set password for a new account", Format="password", IsRequired=true, Name="Password", ParameterType="form")
    public password: string;

    public constructor(init?: Partial<CreateTeamMemberFromInvitation>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateTeamMemberFromInvitation'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CreateTeamMemberFromInvitationResponse(); }
}

/** @description Get Account Usage Billing. */
// @Route("/{version}/account/usage-billing", "GET")
// @Api(Description="Get Account Usage Billing.")
export class GetAccountUsageBilling extends RequestBase implements IReturn<GetAccountUsageBillingResponse>
{

    public constructor(init?: Partial<GetAccountUsageBilling>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAccountUsageBilling'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetAccountUsageBillingResponse(); }
}

// @Route("/{version}/account/verify", "GET")
export class VerifyAccount extends RequestBase implements IReturn<EmptyResponse>, IHasAccountId
{
    public token: string;
    public accountId: string;

    public constructor(init?: Partial<VerifyAccount>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'VerifyAccount'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/account/projects/{projectId}/notifications/settings/group", "DELETE")
export class DeleteNotificationsGroup extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Tag identifying the notification group to remove. */
    // @ApiMember(Description="Tag identifying the notification group to remove.", IsRequired=true)
    public groupTag: string;

    public constructor(init?: Partial<DeleteNotificationsGroup>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteNotificationsGroup'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/account/projects/{projectId}/notifications/settings/tag", "DELETE")
export class DeleteNotificationsTag extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Tag identifying the notification tag to delete. */
    // @ApiMember(Description="Tag identifying the notification tag to delete.", IsRequired=true)
    public tag: string;

    public constructor(init?: Partial<DeleteNotificationsTag>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteNotificationsTag'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/account/projects/{projectId}/notifications/settings/group/tag", "DELETE")
export class RemoveTagFromNotificationsGroup extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Tag identifying the notification group. */
    // @ApiMember(Description="Tag identifying the notification group.", IsRequired=true)
    public groupTag: string;

    /** @description Tag identifying the notification tag to remove from the group. */
    // @ApiMember(Description="Tag identifying the notification tag to remove from the group.", IsRequired=true)
    public tag: string;

    public constructor(init?: Partial<RemoveTagFromNotificationsGroup>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RemoveTagFromNotificationsGroup'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/account/projects/{projectId}/notifications/settings/group", "POST")
export class SaveNotificationsGroup extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The group's tag and translations to save. The tag identifies the group; translations provide its display name per locale. */
    // @ApiMember(Description="The group's tag and translations to save. The tag identifies the group; translations provide its display name per locale.", IsRequired=true)
    public groupDefinition: GroupDefinitionDto;

    /** @description Communication channel (e.g. Email, Push) this group belongs to. */
    // @ApiMember(Description="Communication channel (e.g. Email, Push) this group belongs to.")
    public channel: CommunicationChannel;

    /** @description If moving the group to a different channel, the channel it currently belongs to. */
    // @ApiMember(Description="If moving the group to a different channel, the channel it currently belongs to.")
    public originChannel?: CommunicationChannel;

    public constructor(init?: Partial<SaveNotificationsGroup>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveNotificationsGroup'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/account/projects/{projectId}/notifications/settings/tag", "POST")
export class SaveNotificationsTag extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The tag's identifier, translations, and default per-delivery-channel enabled/disabled settings. */
    // @ApiMember(Description="The tag's identifier, translations, and default per-delivery-channel enabled/disabled settings.", IsRequired=true)
    public tagDefinition: TagDefinitionDto;

    /** @description Communication channel (e.g. Email, Push) this tag belongs to. */
    // @ApiMember(Description="Communication channel (e.g. Email, Push) this tag belongs to.")
    public channel?: CommunicationChannel;

    /** @description Tag of the group this notification tag should be placed under, if any. */
    // @ApiMember(Description="Tag of the group this notification tag should be placed under, if any.")
    public groupTag?: string;

    public constructor(init?: Partial<SaveNotificationsTag>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveNotificationsTag'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Create a new backend project. */
// @Route("/{version}/account/projects", "POST")
// @Api(Description="Create a new backend project.")
// @DataContract
export class CreateProjectRequest extends RequestBase implements IReturn<IdResponse>
{
    // @DataMember
    public integration: DatabaseIntegrationRequest;

    /** @description Project name, unique per account. */
    // @DataMember
    // @ApiMember(Description="Project name, unique per account.")
    public projectName: string;

    /** @description Region code for the primary region, e.g. 'nb-eu-germany'. Use a code from get_account_regions. */
    // @DataMember
    // @ApiMember(Description="Region code for the primary region, e.g. 'nb-eu-germany'. Use a code from get_account_regions.")
    public primaryRegion?: string;

    // @DataMember
    public additionalRegions?: string[];

    // @DataMember
    public description?: string;

    public constructor(init?: Partial<CreateProjectRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateProjectRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Deletes project */
// @Route("/{version}/account/projects/{projectId}", "DELETE")
// @Api(Description="Deletes project")
export class DeleteProject extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DeleteProject>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteProject'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/account/projects/environments", "POST")
// @DataContract
export class CreateProjectEnvironmentRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Name for the new environment (e.g. 'TEST', 'STAGING'). A-Z/0-9/space, up to 15 chars, cannot be PROD. */
    // @DataMember
    // @ApiMember(Description="Name for the new environment (e.g. 'TEST', 'STAGING'). A-Z/0-9/space, up to 15 chars, cannot be PROD.", IsRequired=true)
    public environmentName: string;

    // @DataMember(Name="integration")
    public integration: DatabaseIntegrationRequest;

    public constructor(init?: Partial<CreateProjectEnvironmentRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateProjectEnvironmentRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/account/projects/environments/{environmentName}", "DELETE")
// @DataContract
export class DeleteProjectEnvironmentRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Name of the environment to delete (from get_project_environments), e.g. 'TEST'. PROD is rejected. */
    // @DataMember
    // @ApiMember(Description="Name of the environment to delete (from get_project_environments), e.g. 'TEST'. PROD is rejected.", IsRequired=true)
    public environmentName: string;

    public constructor(init?: Partial<DeleteProjectEnvironmentRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteProjectEnvironmentRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/account/projects/environments/{environmentName}/rank", "PATCH")
// @DataContract
export class SetEnvironmentRankRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Name of the environment to re-rank (from get_project_environments). */
    // @DataMember
    // @ApiMember(Description="Name of the environment to re-rank (from get_project_environments).", IsRequired=true)
    public environmentName: string;

    /** @description New promotion-ladder rank. Out-of-range values are clamped and ranks re-normalized. */
    // @DataMember
    // @ApiMember(Description="New promotion-ladder rank. Out-of-range values are clamped and ranks re-normalized.")
    public rank: number;

    public constructor(init?: Partial<SetEnvironmentRankRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SetEnvironmentRankRequest'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/account/projects/environments/promote", "POST")
// @DataContract
export class PromoteEnvironmentRequest extends CodeMashRequestBase implements IReturn<PromoteEnvironmentResponse>
{
    /** @description Environment to promote FROM (source of truth for this promotion). */
    // @DataMember
    // @ApiMember(Description="Environment to promote FROM (source of truth for this promotion).", IsRequired=true)
    public sourceEnv: string;

    /** @description Environment to promote INTO. Must be higher on the promotion ladder than SourceEnv. */
    // @DataMember
    // @ApiMember(Description="Environment to promote INTO. Must be higher on the promotion ladder than SourceEnv.", IsRequired=true)
    public targetEnv: string;

    /** @description When true, only returns the promotion plan (including deletions) without applying it or copying secrets. Use this to preview before a real run. */
    // @DataMember
    // @ApiMember(Description="When true, only returns the promotion plan (including deletions) without applying it or copying secrets. Use this to preview before a real run.")
    public dryRun: boolean;

    public constructor(init?: Partial<PromoteEnvironmentRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'PromoteEnvironmentRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new PromoteEnvironmentResponse(); }
}

// @Route("/{version}/account/projects/environments/promote/rollback", "POST")
// @DataContract
export class RollbackPromotionRequest extends CodeMashRequestBase implements IReturn<PromoteEnvironmentResponse>
{
    /** @description Environment whose content should be rolled back. */
    // @DataMember
    // @ApiMember(Description="Environment whose content should be rolled back.", IsRequired=true)
    public targetEnv: string;

    /** @description The fromVersion anchor returned by the promote_environment call being rolled back. */
    // @DataMember
    // @ApiMember(Description="The fromVersion anchor returned by the promote_environment call being rolled back.", IsRequired=true)
    public fromVersion: number;

    public constructor(init?: Partial<RollbackPromotionRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RollbackPromotionRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new PromoteEnvironmentResponse(); }
}

// @Route("/{version}/account/projects/environments", "GET")
// @DataContract
export class GetProjectEnvironments extends CodeMashRequestBase implements IReturn<GetProjectEnvironmentsResponse>
{

    public constructor(init?: Partial<GetProjectEnvironments>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetProjectEnvironments'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetProjectEnvironmentsResponse(); }
}

/** @description Gets project info. */
// @Route("/{version}/account/projects/{projectId}", "GET")
// @Api(Description="Gets project info.")
export class GetProject extends CodeMashRequestBase implements IReturn<GetProjectResponse>
{

    public constructor(init?: Partial<GetProject>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetProject'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetProjectResponse(); }
}

/** @description Retrieve projects list. */
// @Route("/{version}/account/projects", "GET")
// @Api(Description="Retrieve projects list.")
export class GetProjects extends RequestBase implements IReturn<GetProjectsResponse>
{

    public constructor(init?: Partial<GetProjects>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetProjects'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetProjectsResponse(); }
}

/** @description Get available project regions. */
// @Route("/{version}/account/regions", "GET")
// @Api(Description="Get available project regions.")
export class GetAccountRegions extends RequestBase implements IReturn<GetAccountRegionsResponse>
{

    public constructor(init?: Partial<GetAccountRegions>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAccountRegions'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetAccountRegionsResponse(); }
}

/** @description Waits (bounded, server-side) for a project to finish provisioning and become active. */
// @Route("/{version}/account/projects/{projectId}/wait-active", "GET")
// @Api(Description="Waits (bounded, server-side) for a project to finish provisioning and become active.")
export class WaitForProjectActiveRequest extends CodeMashRequestBase implements IReturn<WaitForProjectActiveResponse>
{
    /** @description Max seconds to wait before returning 'not active yet' (default 30, capped at 90). */
    // @ApiMember(Description="Max seconds to wait before returning 'not active yet' (default 30, capped at 90).")
    public timeoutSeconds?: number;

    public constructor(init?: Partial<WaitForProjectActiveRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'WaitForProjectActiveRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new WaitForProjectActiveResponse(); }
}

/** @description Gets project tokens. */
// @Route("/{version}/account/projects/{projectId}/tokens", "GET")
// @Api(Description="Gets project tokens.")
export class GetProjectTokens extends CodeMashRequestBase implements IReturn<GetProjectTokensResponse>
{
    public initiatorId?: string;
    public recipientId?: string;
    public targetUserId?: string;
    public membershipTriggerOldUserId?: string;
    public membershipTriggerNewUserId?: string;

    public constructor(init?: Partial<GetProjectTokens>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetProjectTokens'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetProjectTokensResponse(); }
}

/** @description Assigns the project's Admin Portal service user */
// @Route("/{version}/account/projects/{projectId}/settings/admin-portal/service-user", "PUT")
// @Api(Description="Assigns the project's Admin Portal service user")
export class AssignAdminPortalServiceUserRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Id of the existing AuthType.Service user to assign as the project's Admin Portal service user. */
    // @ApiMember(Description="Id of the existing AuthType.Service user to assign as the project's Admin Portal service user.", IsRequired=true)
    public serviceUserId: string;

    public constructor(init?: Partial<AssignAdminPortalServiceUserRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AssignAdminPortalServiceUserRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Reads the Admin Portal layout/structure (service user only) */
// @Route("/{version}/account/projects/{projectId}/admin-portal/structure", "GET")
// @Api(Description="Reads the Admin Portal layout/structure (service user only)")
export class GetAdminPortalStructure extends CodeMashRequestBase implements IReturn<AdminPortalStructureDto>
{

    public constructor(init?: Partial<GetAdminPortalStructure>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAdminPortalStructure'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new AdminPortalStructureDto(); }
}

/** @description Updates the project's admin-portal URL override */
// @Route("/{version}/account/projects/{projectId}/settings/admin-url", "PATCH")
// @Api(Description="Updates the project's admin-portal URL override")
export class UpdateProjectAdminUrl extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Custom admin-portal URL to use instead of the canonical address. Null/empty restores the canonical pr_{id}.admin.{host} address. */
    // @ApiMember(Description="Custom admin-portal URL to use instead of the canonical address. Null/empty restores the canonical pr_{id}.admin.{host} address.")
    public url?: string;

    public constructor(init?: Partial<UpdateProjectAdminUrl>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateProjectAdminUrl'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Updates project accent color */
// @Route("/{version}/account/projects/{projectId}/settings/accent-color", "PATCH")
// @Api(Description="Updates project accent color")
export class UpdateProjectAccentColor extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Hex color code, e.g. '#FF6D00'. */
    // @ApiMember(Description="Hex color code, e.g. '#FF6D00'.", IsRequired=true)
    public color: string;

    public constructor(init?: Partial<UpdateProjectAccentColor>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateProjectAccentColor'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Updates project icon */
// @Route("/{version}/account/projects/{projectId}/settings/icon", "PATCH")
// @Api(Description="Updates project icon")
export class UpdateProjectIcon extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    public fileResource?: FileResourceRefDto;

    public constructor(init?: Partial<UpdateProjectIcon>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateProjectIcon'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Updates project logo */
// @Route("/{version}/account/projects/{projectId}/settings/logo", "PATCH")
// @Api(Description="Updates project logo")
export class UpdateProjectLogo extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    public fileResource?: FileResourceRefDto;

    public constructor(init?: Partial<UpdateProjectLogo>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateProjectLogo'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Updates project main color */
// @Route("/{version}/account/projects/{projectId}/settings/main-color", "PATCH")
// @Api(Description="Updates project main color")
export class UpdateProjectMainColor extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Hex color code, e.g. '#1A73E8'. */
    // @ApiMember(Description="Hex color code, e.g. '#1A73E8'.", IsRequired=true)
    public color: string;

    public constructor(init?: Partial<UpdateProjectMainColor>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateProjectMainColor'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Updates project CORS settings */
// @Route("/{version}/account/projects/{projectId}/settings/origins", "PATCH")
// @Api(Description="Updates project CORS settings")
export class UpdateProjectAllowedOrigins extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The complete new list of allowed origin URLs, e.g. ["https://app.example.com", "https://example.com"]. An entry with no scheme (e.g. "example.com") defaults to https. Whatever is not in this list stops being allowed. */
    // @ApiMember(Description="The complete new list of allowed origin URLs, e.g. [\"https://app.example.com\", \"https://example.com\"]. An entry with no scheme (e.g. \"example.com\") defaults to https. Whatever is not in this list stops being allowed.")
    public origins?: string[];

    public constructor(init?: Partial<UpdateProjectAllowedOrigins>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateProjectAllowedOrigins'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Update project default language */
// @Route("/{version}/account/projects/{projectId}/settings/default-language", "PATCH")
// @Api(Description="Update project default language")
export class UpdateProjectDefaultLanguage extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Language code, e.g. 'en' or 'de'. */
    // @ApiMember(Description="Language code, e.g. 'en' or 'de'.", IsRequired=true)
    public defaultLanguage: string;

    public constructor(init?: Partial<UpdateProjectDefaultLanguage>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateProjectDefaultLanguage'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Updates project description */
// @Route("/{version}/account/projects/{projectId}/settings/description", "PATCH")
// @Api(Description="Updates project description")
export class UpdateProjectDescription extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The new description text. Omit (null) to clear the description. */
    // @ApiMember(Description="The new description text. Omit (null) to clear the description.")
    public description?: string;

    public constructor(init?: Partial<UpdateProjectDescription>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateProjectDescription'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Disables project */
// @Route("/{version}/account/projects/{projectId}/disable", "PATCH")
// @Api(Description="Disables project")
export class DisableProject extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DisableProject>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableProject'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Enables project */
// @Route("/{version}/account/projects/{projectId}/enable", "PATCH")
// @Api(Description="Enables project")
export class EnableProject extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<EnableProject>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableProject'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Updates project languages */
// @Route("/{version}/account/projects/{projectId}/settings/languages", "PATCH")
// @Api(Description="Updates project languages")
export class UpdateProjectLanguages extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The complete new list of language codes, e.g. ["en", "de", "lt"]. */
    // @ApiMember(Description="The complete new list of language codes, e.g. [\"en\", \"de\", \"lt\"].", IsRequired=true)
    public languages: string[] = [];

    public constructor(init?: Partial<UpdateProjectLanguages>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateProjectLanguages'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Updates the project's public legal documents (Terms & Conditions, Privacy Policy) */
// @Route("/{version}/account/projects/{projectId}/settings/legal", "PATCH")
// @Api(Description="Updates the project's public legal documents (Terms & Conditions, Privacy Policy)")
export class UpdateProjectLegalDocuments extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Terms & Conditions document, Markdown. Null/empty clears it. */
    // @ApiMember(Description="Terms & Conditions document, Markdown. Null/empty clears it.")
    public termsMarkdown?: string;

    /** @description Privacy Policy document, Markdown. Null/empty clears it. */
    // @ApiMember(Description="Privacy Policy document, Markdown. Null/empty clears it.")
    public privacyMarkdown?: string;

    public constructor(init?: Partial<UpdateProjectLegalDocuments>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateProjectLegalDocuments'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Sets whether the project's legal documents are publicly readable via the Admin Portal */
// @Route("/{version}/account/projects/{projectId}/settings/legal/expose", "PATCH")
// @Api(Description="Sets whether the project's legal documents are publicly readable via the Admin Portal")
export class UpdateProjectExposeLegal extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description True to make the legal documents publicly readable via the Admin Portal, false to hide them. */
    // @ApiMember(Description="True to make the legal documents publicly readable via the Admin Portal, false to hide them.")
    public exposed: boolean;

    public constructor(init?: Partial<UpdateProjectExposeLegal>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateProjectExposeLegal'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Updates project marketing url */
// @Route("/{version}/account/projects/{projectId}/settings/url", "PATCH")
// @Api(Description="Updates project marketing url")
export class UpdateProjectUrl extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The marketing site URL, e.g. 'https://example.com'. Omit (null) to clear. */
    // @ApiMember(Description="The marketing site URL, e.g. 'https://example.com'. Omit (null) to clear.")
    public url?: string;

    public constructor(init?: Partial<UpdateProjectUrl>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateProjectUrl'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Updates project name */
// @Route("/{version}/account/projects/{projectId}/settings/name", "PATCH")
// @Api(Description="Updates project name")
export class UpdateProjectName extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The new project name, unique per account. */
    // @ApiMember(Description="The new project name, unique per account.", IsRequired=true)
    public name: string;

    public constructor(init?: Partial<UpdateProjectName>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateProjectName'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Updates project regions */
// @Route("/{version}/account/projects/{projectId}/settings/regions", "PATCH")
// @Api(Description="Updates project regions")
export class UpdateProjectRegions extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Primary region code, e.g. 'nb-eu-germany'. Immutable once set — omit to keep the current one; only set it on a project that has none. */
    // @ApiMember(Description="Primary region code, e.g. 'nb-eu-germany'. Immutable once set — omit to keep the current one; only set it on a project that has none.")
    public primaryRegion?: string;

    /** @description The complete new list of additional region codes (full replacement). A region that still hosts a provisioned database cluster cannot be removed. */
    // @ApiMember(Description="The complete new list of additional region codes (full replacement). A region that still hosts a provisioned database cluster cannot be removed.")
    public additionalRegions?: string[];

    public constructor(init?: Partial<UpdateProjectRegions>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateProjectRegions'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description This API endpoint allows users to create a new CodeMash account. */
// @Route("/{version}/account", "POST")
// @Api(Description="This API endpoint allows users to create a new CodeMash account.")
export class CreateAccount extends RequestBase implements IReturn<CreateAccountResponse>
{
    /** @description Display name of the account holder */
    // @ApiMember(DataType="string", Description="Display name of the account holder", IsRequired=true, Name="DisplayName", ParameterType="form")
    public displayName: string;

    /** @description Real email of account holder */
    // @ApiMember(DataType="string", Description="Real email of account holder", IsRequired=true, Name="Email", ParameterType="form")
    public email: string;

    /** @description Set password for a new account */
    // @ApiMember(DataType="string", Description="Set password for a new account", Format="password", IsRequired=true, Name="Password", ParameterType="form")
    public password: string;

    public constructor(init?: Partial<CreateAccount>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateAccount'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CreateAccountResponse(); }
}

// @Route("/{version}/account/team/member/password", "POST")
export class ChangeTeamMemberPassword extends RequestBase implements IReturn<IdResponse>
{
    public email: string;
    public currentPassword: string;
    public newPassword: string;

    public constructor(init?: Partial<ChangeTeamMemberPassword>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ChangeTeamMemberPassword'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/account/team/member/create", "POST")
export class CreateTeamMember extends RequestBase implements IReturn<IdResponse>
{
    public email: string;
    public displayName?: string;
    public password?: string;
    public roles?: string[];
    public sendInvitation: boolean;

    public constructor(init?: Partial<CreateTeamMember>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateTeamMember'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/account/team/policies", "POST")
export class CreateAccountPolicy extends RequestBase implements IReturn<IdResponse>
{
    /** @description Name for the new custom account policy. */
    // @ApiMember(Description="Name for the new custom account policy.", IsRequired=true)
    public policyName: string;

    /** @description Optional human-readable description of the policy's purpose. */
    // @ApiMember(Description="Optional human-readable description of the policy's purpose.")
    public description?: string;

    /** @description Raw JSON policy document, AWS-IAM style (Statement array of Effect/Action/Resource entries), matching PolicyDocument.schema.json. This defines which permissions the policy grants. */
    // @ApiMember(Description="Raw JSON policy document, AWS-IAM style (Statement array of Effect/Action/Resource entries), matching PolicyDocument.schema.json. This defines which permissions the policy grants.")
    public policyDocumentJson?: string;

    public constructor(init?: Partial<CreateAccountPolicy>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateAccountPolicy'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/account/team/roles", "POST")
export class CreateAccountRole extends RequestBase implements IReturn<IdResponse>
{
    /** @description Name for the new custom account team role. */
    // @ApiMember(Description="Name for the new custom account team role.", IsRequired=true)
    public roleName: string;

    /** @description Optional human-readable description of the role's purpose. */
    // @ApiMember(Description="Optional human-readable description of the role's purpose.")
    public description?: string;

    /** @description Public policy ids (from get_account_team_policies) to attach to this role. */
    // @ApiMember(Description="Public policy ids (from get_account_team_policies) to attach to this role.")
    public policies?: string[];

    public constructor(init?: Partial<CreateAccountRole>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateAccountRole'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/account/team/policies/{Id}", "DELETE")
export class DeleteAccountPolicy extends RequestBase implements IReturn<IdResponse>
{
    /** @description Public policy id (from get_account_team_policies) to delete. */
    // @ApiMember(Description="Public policy id (from get_account_team_policies) to delete.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DeleteAccountPolicy>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteAccountPolicy'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/account/team/roles/{Id}", "DELETE")
export class DeleteAccountRole extends RequestBase implements IReturn<IdResponse>
{
    /** @description Role template id (from get_account_team_roles) to delete. */
    // @ApiMember(Description="Role template id (from get_account_team_roles) to delete.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DeleteAccountRole>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteAccountRole'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Gets account team members (collaborators) */
// @Route("/{version}/account/collaborators", "GET")
// @Api(Description="Gets account team members (collaborators)")
export class GetAccountCollaborators extends RequestBase implements IReturn<GetAccountCollaboratorsResponse>
{
    /** @description Set true to also include the account owner in the list. */
    // @ApiMember(Description="Set true to also include the account owner in the list.")
    public includeAccountOwner: boolean;

    /** @description Set true to only return members that have a registered push device. */
    // @ApiMember(Description="Set true to only return members that have a registered push device.")
    public userShouldHavePushDevice: boolean;

    /** @description Optional project id — only members with access to that project. */
    // @ApiMember(Description="Optional project id — only members with access to that project.")
    public projectId?: string;

    /** @description Optional filter: only these user ids. */
    // @ApiMember(Description="Optional filter: only these user ids.")
    public userIds?: string[];

    /** @description Optional filter: only members having one of these role names. */
    // @ApiMember(Description="Optional filter: only members having one of these role names.")
    public roleNames?: string[];

    public pagingArgs?: PagingArgs;

    public constructor(init?: Partial<GetAccountCollaborators>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAccountCollaborators'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetAccountCollaboratorsResponse(); }
}

// @Route("/{version}/account/team/password-policy", "GET")
export class GetAccountPasswordPolicy extends RequestBase implements IReturn<GetAccountPasswordPolicyResponse>
{

    public constructor(init?: Partial<GetAccountPasswordPolicy>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAccountPasswordPolicy'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetAccountPasswordPolicyResponse(); }
}

// @Route("/{version}/account/team/policies", "GET")
export class GetAccountTeamPolicies extends RequestBase implements IReturn<GetAccountTeamPoliciesResponse>
{

    public constructor(init?: Partial<GetAccountTeamPolicies>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAccountTeamPolicies'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetAccountTeamPoliciesResponse(); }
}

// @Route("/{version}/account/team/roles", "GET")
export class GetAccountTeamRoles extends RequestBase implements IReturn<GetAccountTeamRolesResponse>
{

    public constructor(init?: Partial<GetAccountTeamRoles>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAccountTeamRoles'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetAccountTeamRolesResponse(); }
}

/** @description Send invite to team member */
// @Route("/{version}/account/team/member/invite", "POST")
// @Api(Description="Send invite to team member")
export class SendInviteToTeamMember extends RequestBase implements IReturn<EmptyResponse>
{
    /** @description Email address the invitation is sent to. */
    // @ApiMember(Description="Email address the invitation is sent to.", IsRequired=true)
    public email: string;

    /** @description Account role ids (GUIDs from get_account_team_roles) the member gets on accepting. Omit for the default member role. */
    // @ApiMember(Description="Account role ids (GUIDs from get_account_team_roles) the member gets on accepting. Omit for the default member role.")
    public roles?: string[];

    public constructor(init?: Partial<SendInviteToTeamMember>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SendInviteToTeamMember'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/account/team/policies", "PUT")
export class UpdateAccountPolicy extends RequestBase implements IReturn<IdResponse>
{
    /** @description Public policy id (from get_account_team_policies) to update. */
    // @ApiMember(Description="Public policy id (from get_account_team_policies) to update.", IsRequired=true)
    public id: string;

    /** @description New name for the policy. */
    // @ApiMember(Description="New name for the policy.", IsRequired=true)
    public policyName: string;

    /** @description Optional human-readable description of the policy's purpose. */
    // @ApiMember(Description="Optional human-readable description of the policy's purpose.")
    public description?: string;

    /** @description Raw JSON policy document, AWS-IAM style (Statement array of Effect/Action/Resource entries) — replaces the policy's current statement set. */
    // @ApiMember(Description="Raw JSON policy document, AWS-IAM style (Statement array of Effect/Action/Resource entries) — replaces the policy's current statement set.")
    public policyDocumentJson?: string;

    public constructor(init?: Partial<UpdateAccountPolicy>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateAccountPolicy'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/account/team/roles", "PUT")
export class UpdateAccountRole extends RequestBase implements IReturn<IdResponse>
{
    /** @description Role template id (from get_account_team_roles) to update. */
    // @ApiMember(Description="Role template id (from get_account_team_roles) to update.", IsRequired=true)
    public id: string;

    /** @description New name for the role. */
    // @ApiMember(Description="New name for the role.", IsRequired=true)
    public roleName: string;

    /** @description Optional human-readable description of the role's purpose. */
    // @ApiMember(Description="Optional human-readable description of the role's purpose.")
    public description?: string;

    /** @description Public policy ids (from get_account_team_policies) to attach — replaces the current set. */
    // @ApiMember(Description="Public policy ids (from get_account_team_policies) to attach — replaces the current set.")
    public policies?: string[];

    public constructor(init?: Partial<UpdateAccountRole>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateAccountRole'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/account/userauth/has-passkey", "POST")
// @DataContract
export class AccountHasPasskeyRequest extends RequestBase implements IReturn<AccountPasskeyOkResponse>
{
    // @DataMember
    public email: string;

    public constructor(init?: Partial<AccountHasPasskeyRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AccountHasPasskeyRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AccountPasskeyOkResponse(); }
}

// @Route("/{version}/account/userauth/email/start-verification", "POST")
// @DataContract
export class AccountStartEmailVerificationRequest extends RequestBase implements IReturn<AccountPasskeyOkResponse>
{
    // @DataMember
    public email: string;

    public constructor(init?: Partial<AccountStartEmailVerificationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AccountStartEmailVerificationRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AccountPasskeyOkResponse(); }
}

// @Route("/{version}/account/userauth/email/confirm-verification", "POST")
// @DataContract
export class AccountConfirmEmailVerificationRequest extends RequestBase implements IReturn<AccountPasskeyVerificationTokenResponse>
{
    // @DataMember
    public email: string;

    // @DataMember
    public code: string;

    public constructor(init?: Partial<AccountConfirmEmailVerificationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AccountConfirmEmailVerificationRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AccountPasskeyVerificationTokenResponse(); }
}

// @Route("/{version}/account/userauth/passkey/registration-options", "POST")
// @DataContract
export class AccountPasskeyRegistrationOptionsRequest extends RequestBase implements IReturn<AccountPasskeyCeremonyOptionsResponse>
{
    // @DataMember
    public verificationToken: string;

    public constructor(init?: Partial<AccountPasskeyRegistrationOptionsRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AccountPasskeyRegistrationOptionsRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AccountPasskeyCeremonyOptionsResponse(); }
}

// @Route("/{version}/account/userauth/passkey/verify-registration", "POST")
// @DataContract
export class AccountVerifyPasskeyRegistrationRequest extends RequestBase implements IReturn<AccountPasskeyAuthTokensResponse>
{
    // @DataMember
    public verificationToken: string;

    // @DataMember
    public ceremonyId: string;

    // @DataMember
    public attestationResponse: string;

    // @DataMember
    public friendlyName?: string;

    public constructor(init?: Partial<AccountVerifyPasskeyRegistrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AccountVerifyPasskeyRegistrationRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AccountPasskeyAuthTokensResponse(); }
}

// @Route("/{version}/account/userauth/passkey/authentication-options", "POST")
// @DataContract
export class AccountPasskeyAuthenticationOptionsRequest extends RequestBase implements IReturn<AccountPasskeyCeremonyOptionsResponse>
{
    // @DataMember
    public email: string;

    public constructor(init?: Partial<AccountPasskeyAuthenticationOptionsRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AccountPasskeyAuthenticationOptionsRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AccountPasskeyCeremonyOptionsResponse(); }
}

// @Route("/{version}/account/userauth/passkey/verify-authentication", "POST")
// @DataContract
export class AccountVerifyPasskeyAuthenticationRequest extends RequestBase implements IReturn<AccountPasskeyAuthTokensResponse>
{
    // @DataMember
    public ceremonyId: string;

    // @DataMember
    public assertionResponse: string;

    public constructor(init?: Partial<AccountVerifyPasskeyAuthenticationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AccountVerifyPasskeyAuthenticationRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AccountPasskeyAuthTokensResponse(); }
}

// @Route("/{version}/account/userauth/passkeys", "GET")
// @DataContract
export class ListAccountPasskeysRequest extends RequestBase implements IReturn<AccountPasskeyListResponse>
{

    public constructor(init?: Partial<ListAccountPasskeysRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ListAccountPasskeysRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new AccountPasskeyListResponse(); }
}

// @Route("/{version}/account/userauth/passkeys/{CredentialId}/rename", "POST")
// @DataContract
export class RenameAccountPasskeyRequest extends RequestBase implements IReturn<AccountPasskeyOkResponse>
{
    // @DataMember
    public credentialId: string;

    // @DataMember
    public friendlyName: string;

    public constructor(init?: Partial<RenameAccountPasskeyRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RenameAccountPasskeyRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AccountPasskeyOkResponse(); }
}

// @Route("/{version}/account/userauth/passkeys/{CredentialId}/revoke", "POST")
// @DataContract
export class RevokeAccountPasskeyRequest extends RequestBase implements IReturn<AccountPasskeyOkResponse>
{
    // @DataMember
    public credentialId: string;

    public constructor(init?: Partial<RevokeAccountPasskeyRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RevokeAccountPasskeyRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AccountPasskeyOkResponse(); }
}

// @Route("/{version}/account/userauth/passkey/enrollment-options", "POST")
// @DataContract
export class AccountPasskeyEnrollmentOptionsRequest extends RequestBase implements IReturn<AccountPasskeyCeremonyOptionsResponse>
{

    public constructor(init?: Partial<AccountPasskeyEnrollmentOptionsRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AccountPasskeyEnrollmentOptionsRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AccountPasskeyCeremonyOptionsResponse(); }
}

// @Route("/{version}/account/userauth/passkey/verify-enrollment", "POST")
// @DataContract
export class AccountVerifyPasskeyEnrollmentRequest extends RequestBase implements IReturn<AccountPasskeyEnrollmentResponse>
{
    // @DataMember
    public ceremonyId: string;

    // @DataMember
    public attestationResponse: string;

    // @DataMember
    public friendlyName?: string;

    public constructor(init?: Partial<AccountVerifyPasskeyEnrollmentRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AccountVerifyPasskeyEnrollmentRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AccountPasskeyEnrollmentResponse(); }
}

// @Route("/{version}/account/licensing/dns-status", "GET")
export class GetLicenseDomainDnsStatus extends RequestBase implements IReturn<GetLicenseDomainDnsStatusResponse>
{
    public domain?: string;

    public constructor(init?: Partial<GetLicenseDomainDnsStatus>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetLicenseDomainDnsStatus'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetLicenseDomainDnsStatusResponse(); }
}

// @Route("/{version}/licensing/domain-verification/start", "POST")
export class StartLicenseDomainVerificationRequest extends RequestBase implements IReturn<StartLicenseDomainVerificationResponse>
{
    public domain?: string;

    public constructor(init?: Partial<StartLicenseDomainVerificationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'StartLicenseDomainVerificationRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new StartLicenseDomainVerificationResponse(); }
}

// @Route("/{version}/licensing/domain-verification/status", "GET")
export class GetLicenseDomainVerificationStatus extends RequestBase implements IReturn<GetLicenseDomainVerificationStatusResponse>
{
    public domain?: string;

    public constructor(init?: Partial<GetLicenseDomainVerificationStatus>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetLicenseDomainVerificationStatus'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetLicenseDomainVerificationStatusResponse(); }
}

// @Route("/{version}/account/licenses", "GET")
export class GetLicenses extends RequestBase implements IReturn<GetLicensesResponse>
{

    public constructor(init?: Partial<GetLicenses>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetLicenses'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetLicensesResponse(); }
}

// @Route("/{version}/licensing/heartbeat", "POST")
export class PostLicenseHeartbeat extends RequestBase implements IReturn<PostLicenseHeartbeatResponse>
{
    public license?: string;
    public licenseAccountId?: string;
    public installationId?: string;
    public domain?: string;
    public hostKind?: string;
    public release?: string;
    public instanceVersion?: string;

    public constructor(init?: Partial<PostLicenseHeartbeat>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'PostLicenseHeartbeat'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new PostLicenseHeartbeatResponse(); }
}

// @Route("/{version}/account/licensing/status", "GET")
export class GetInstallationLicenseStatus extends RequestBase implements IReturn<GetInstallationLicenseStatusResponse>
{

    public constructor(init?: Partial<GetInstallationLicenseStatus>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetInstallationLicenseStatus'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetInstallationLicenseStatusResponse(); }
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

export class AccountVerified
{

    public constructor(init?: Partial<AccountVerified>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AccountVerified'; }
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

export class ProjectActivated
{

    public constructor(init?: Partial<ProjectActivated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ProjectActivated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class ProjectSuspendedByLicense
{

    public constructor(init?: Partial<ProjectSuspendedByLicense>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ProjectSuspendedByLicense'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class ProjectResumedFromLicenseSuspension
{

    public constructor(init?: Partial<ProjectResumedFromLicenseSuspension>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ProjectResumedFromLicenseSuspension'; }
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

export class ProjectDeleted
{

    public constructor(init?: Partial<ProjectDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ProjectDeleted'; }
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

export class ProjectAdminUrlChanged
{
    public url?: DomainUrl;

    public constructor(init?: Partial<ProjectAdminUrlChanged>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ProjectAdminUrlChanged'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class ProjectLegalDocumentsChanged
{
    public documents: ProjectLegalDocuments;

    public constructor(init?: Partial<ProjectLegalDocumentsChanged>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ProjectLegalDocumentsChanged'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class ProjectExposeLegalToAdminPortalChanged
{
    public exposed: boolean;

    public constructor(init?: Partial<ProjectExposeLegalToAdminPortalChanged>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ProjectExposeLegalToAdminPortalChanged'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class ProjectAdminPortalServiceUserAssigned
{
    public serviceUserId: AuthId;

    public constructor(init?: Partial<ProjectAdminPortalServiceUserAssigned>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ProjectAdminPortalServiceUserAssigned'; }
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

export class ProjectEnvironmentCreated
{
    public env: Env;
    public ranks: { [index:string]: number; } = {};

    public constructor(init?: Partial<ProjectEnvironmentCreated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ProjectEnvironmentCreated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class ProjectEnvironmentDeleted
{
    public env: Env;
    public ranks: { [index:string]: number; } = {};

    public constructor(init?: Partial<ProjectEnvironmentDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ProjectEnvironmentDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class ProjectEnvironmentRanksChanged
{
    public ranks: { [index:string]: number; } = {};

    public constructor(init?: Partial<ProjectEnvironmentRanksChanged>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ProjectEnvironmentRanksChanged'; }
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

export class ProjectCommunicationSet
{
    public projectCommunication: ProjectCommunication;

    public constructor(init?: Partial<ProjectCommunicationSet>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ProjectCommunicationSet'; }
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

export class AccountTeamPolicyCreated
{
    public policy: MembershipPolicy;

    public constructor(init?: Partial<AccountTeamPolicyCreated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AccountTeamPolicyCreated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class AccountTeamPolicyUpdated
{
    public policy: MembershipPolicy;

    public constructor(init?: Partial<AccountTeamPolicyUpdated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AccountTeamPolicyUpdated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class AccountTeamPolicyDeleted
{
    public policyId: PolicyId;

    public constructor(init?: Partial<AccountTeamPolicyDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AccountTeamPolicyDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class AccountTeamRoleCreated
{
    public role: MembershipRole;

    public constructor(init?: Partial<AccountTeamRoleCreated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AccountTeamRoleCreated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class AccountTeamRoleUpdated
{
    public role: MembershipRole;

    public constructor(init?: Partial<AccountTeamRoleUpdated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AccountTeamRoleUpdated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class AccountTeamRoleDeleted
{
    public roleId: RoleId;

    public constructor(init?: Partial<AccountTeamRoleDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AccountTeamRoleDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class AtlasUsageRecorded
{
    public record: AtlasUsageRecord;

    public constructor(init?: Partial<AtlasUsageRecorded>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AtlasUsageRecorded'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class UsageBillingIngestionFailed
{
    public failure: UsageIngestionFailure;

    public constructor(init?: Partial<UsageBillingIngestionFailed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UsageBillingIngestionFailed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

// @Route("/{version}/membership/disable", "GET")
export class DisableMembership extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DisableMembership>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableMembership'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/membership/enable", "GET")
export class EnableMembership extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<EnableMembership>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableMembership'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Membership */
// @Route("/{version}/membership/users/{Id}/api-keys", "POST")
// @Api(Description="Membership")
// @DataContract
export class IssueServiceUserApiKeyRequest extends CodeMashRequestBase implements IReturn<IssueServiceUserApiKeyResponse>
{
    // @DataMember
    public id: string;

    // @DataMember
    public databaseIntegrationId?: string;

    // @DataMember
    public name: string;

    // @DataMember
    public scopes?: string[];

    // @DataMember
    public expiresInDays?: number;

    // @DataMember
    public notes?: string;

    public constructor(init?: Partial<IssueServiceUserApiKeyRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'IssueServiceUserApiKeyRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IssueServiceUserApiKeyResponse(); }
}

/** @description Membership */
// @Route("/{version}/membership/users/{Id}/api-keys", "GET")
// @Api(Description="Membership")
// @DataContract
export class ListServiceUserApiKeysRequest extends CodeMashRequestBase implements IReturn<ListServiceUserApiKeysResponse>
{
    /** @description The service user's auth id. */
    // @DataMember
    // @ApiMember(Description="The service user's auth id.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<ListServiceUserApiKeysRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ListServiceUserApiKeysRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new ListServiceUserApiKeysResponse(); }
}

/** @description Membership */
// @Route("/{version}/membership/users/{Id}/api-keys/{KeyId}", "DELETE")
// @Api(Description="Membership")
// @DataContract
export class DeleteServiceUserApiKeyRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The service user's auth id. */
    // @DataMember
    // @ApiMember(Description="The service user's auth id.", IsRequired=true)
    public id: string;

    /** @description The key id to delete, from list_service_user_api_keys. */
    // @DataMember
    // @ApiMember(Description="The key id to delete, from list_service_user_api_keys.", IsRequired=true)
    public keyId: number;

    public constructor(init?: Partial<DeleteServiceUserApiKeyRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteServiceUserApiKeyRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/membership/triggers/{triggerId}", "DELETE")
// @DataContract
export class DeleteMembershipTrigger extends DeleteTrigger implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DeleteMembershipTrigger>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteMembershipTrigger'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/membership/triggers/{triggerId}/disable", "PATCH")
// @DataContract
export class DisableMembershipTrigger extends DisableTrigger implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DisableMembershipTrigger>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableMembershipTrigger'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/membership/triggers/{triggerId}/enable", "PATCH")
// @DataContract
export class EnableMembershipTrigger extends EnableTrigger implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<EnableMembershipTrigger>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableMembershipTrigger'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets membership trigger by specified Id */
// @Route("/{version}/membership/triggers/{id}", "GET")
// @Api(Description="Gets membership trigger by specified Id")
export class GetMembershipTrigger extends GetTrigger implements IReturn<GetMembershipTriggerResponse>
{

    public constructor(init?: Partial<GetMembershipTrigger>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMembershipTrigger'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetMembershipTriggerResponse(); }
}

/** @description Gets membership triggers */
// @Route("/{version}/membership/triggers", "GET")
// @Api(Description="Gets membership triggers")
export class GetMembershipTriggers extends GetTriggers implements IReturn<GetMembershipTriggersResponse>
{

    public constructor(init?: Partial<GetMembershipTriggers>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMembershipTriggers'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetMembershipTriggersResponse(); }
}

// @Route("/{version}/membership/triggers", "POST")
// @DataContract
export class SaveMembershipTrigger extends SaveTrigger implements IReturn<IdResponse>
{

    public constructor(init?: Partial<SaveMembershipTrigger>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveMembershipTrigger'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Create a new custom role for project. */
// @Route("/{version}/membership/roles", "POST")
// @Api(Description="Create a new custom role for project.")
export class CreateRole extends CodeMashRequestBase implements IReturn<IdResponse>
{
    /** @description Display name of the new role, unique within the project. */
    // @ApiMember(Description="Display name of the new role, unique within the project.", IsRequired=true)
    public roleName: string;

    public description?: string;
    /** @description Policy ids to attach. These are OPAQUE ids from get_policies (e.g. 'pol_3kJ9xJ2mQ0aBcDeFgHiJk') — NEVER invent them or guess from a policy name. Omit this to create a role with no policies and attach them later. */
    // @ApiMember(Description="Policy ids to attach. These are OPAQUE ids from get_policies (e.g. 'pol_3kJ9xJ2mQ0aBcDeFgHiJk') — NEVER invent them or guess from a policy name. Omit this to create a role with no policies and attach them later.")
    public policies?: string[];

    public constructor(init?: Partial<CreateRole>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateRole'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Deletes custom role from project. */
// @Route("/{version}/membership/roles", "DELETE")
// @Api(Description="Deletes custom role from project.")
export class DeleteRole extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Id of the role to delete, from get_roles. */
    // @ApiMember(Description="Id of the role to delete, from get_roles.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DeleteRole>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteRole'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets project role details. */
// @Route("/{version}/membership/roles/{Id}", "GET")
// @Api(Description="Gets project role details.")
export class GetRole extends CodeMashRequestBase implements IReturn<GetRoleResponse>
{
    /** @description Role id from get_roles. */
    // @ApiMember(Description="Role id from get_roles.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetRole>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetRole'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetRoleResponse(); }
}

/** @description Gets project roles. */
// @Route("/{version}/membership/roles", "GET")
// @Api(Description="Gets project roles.")
export class GetRoles extends CodeMashRequestBase implements IReturn<GetRolesResponse>
{

    public constructor(init?: Partial<GetRoles>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetRoles'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetRolesResponse(); }
}

/** @description Updates role policies */
// @Route("/{version}/membership/roles", "PATCH")
// @Api(Description="Updates role policies")
export class UpdateRolePolicies extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Id of the role to update, from get_roles. */
    // @ApiMember(Description="Id of the role to update, from get_roles.", IsRequired=true)
    public id: string;

    /** @description The role's name — required; resend the current name to keep it. */
    // @ApiMember(Description="The role's name — required; resend the current name to keep it.", IsRequired=true)
    public roleName: string;

    public description?: string;
    /** @description The complete new list of attached policy ids (full replacement), opaque ids from get_policies (e.g. 'pol_3kJ9xJ2mQ0aBcDeFgHiJk') — never invent or guess them. */
    // @ApiMember(Description="The complete new list of attached policy ids (full replacement), opaque ids from get_policies (e.g. 'pol_3kJ9xJ2mQ0aBcDeFgHiJk') — never invent or guess them.")
    public policies?: string[];

    public constructor(init?: Partial<UpdateRolePolicies>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateRolePolicies'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Create a new custom policy for project. */
// @Route("/{version}/membership/policies", "POST")
// @Api(Description="Create a new custom policy for project.")
export class CreatePolicy extends CodeMashRequestBase implements IReturn<IdResponse>
{
    /** @description Display name of the new policy, unique within the project. */
    // @ApiMember(Description="Display name of the new policy, unique within the project.", IsRequired=true)
    public policyName: string;

    /** @description Optional human-readable description of what the policy grants. */
    // @ApiMember(Description="Optional human-readable description of what the policy grants.")
    public description?: string;

    /** @description AWS-IAM-style policy document as a raw JSON string (an object with a permission statement list) matching PolicyDocument.schema.json. Malformed or invalid documents are rejected before any change is made. */
    // @ApiMember(Description="AWS-IAM-style policy document as a raw JSON string (an object with a permission statement list) matching PolicyDocument.schema.json. Malformed or invalid documents are rejected before any change is made.")
    public policyDocumentJson?: string;

    public constructor(init?: Partial<CreatePolicy>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CreatePolicy'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Deletes custom policy from project. */
// @Route("/{version}/membership/policies", "DELETE")
// @Api(Description="Deletes custom policy from project.")
export class DeletePolicy extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Public policy id, e.g. 'pol_database-read', from get_policies. */
    // @ApiMember(Description="Public policy id, e.g. 'pol_database-read', from get_policies.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DeletePolicy>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeletePolicy'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets project policy details. */
// @Route("/{version}/membership/policies/{Id}", "GET")
// @Api(Description="Gets project policy details.")
export class GetPolicy extends CodeMashRequestBase implements IReturn<GetPolicyResponse>
{
    /** @description Public policy id, e.g. 'pol_database-read', from get_policies. */
    // @ApiMember(Description="Public policy id, e.g. 'pol_database-read', from get_policies.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetPolicy>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPolicy'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPolicyResponse(); }
}

/** @description Gets project policies. */
// @Route("/{version}/membership/policies", "GET")
// @Api(Description="Gets project policies.")
export class GetPolicies extends CodeMashRequestBase implements IReturn<GetPoliciesResponse>
{

    public constructor(init?: Partial<GetPolicies>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPolicies'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPoliciesResponse(); }
}

/** @description Updates a custom policy for project. */
// @Route("/{version}/membership/policies", "PUT")
// @Api(Description="Updates a custom policy for project.")
export class UpdatePolicy extends CodeMashRequestBase implements IReturn<IdResponse>
{
    /** @description Public policy id, e.g. 'pol_database-read', from get_policies. */
    // @ApiMember(Description="Public policy id, e.g. 'pol_database-read', from get_policies.", IsRequired=true)
    public id: string;

    /** @description The policy's name — required; resend the current name to keep it. */
    // @ApiMember(Description="The policy's name — required; resend the current name to keep it.", IsRequired=true)
    public policyName: string;

    /** @description Optional human-readable description of what the policy grants. */
    // @ApiMember(Description="Optional human-readable description of what the policy grants.")
    public description?: string;

    /** @description AWS-IAM-style policy document as a raw JSON string (an object with a permission statement list) matching PolicyDocument.schema.json — this is a FULL replacement of the policy's current permissions. */
    // @ApiMember(Description="AWS-IAM-style policy document as a raw JSON string (an object with a permission statement list) matching PolicyDocument.schema.json — this is a FULL replacement of the policy's current permissions.")
    public policyDocumentJson?: string;

    public constructor(init?: Partial<UpdatePolicy>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdatePolicy'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Gets the project's passkey authentication settings. */
// @Route("/{version}/membership/passkey/settings", "GET")
// @Api(Description="Gets the project's passkey authentication settings.")
export class GetPasskeySettings extends CodeMashRequestBase implements IReturn<GetPasskeySettingsResponse>
{

    public constructor(init?: Partial<GetPasskeySettings>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPasskeySettings'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPasskeySettingsResponse(); }
}

/** @description Saves the project's passkey authentication settings. */
// @Route("/{version}/membership/passkey/settings", "POST")
// @Api(Description="Saves the project's passkey authentication settings.")
export class SavePasskeySettings extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Whether the email + passkey sign-in flow is enabled for the project. */
    // @ApiMember(Description="Whether the email + passkey sign-in flow is enabled for the project.")
    public enabled: boolean;

    /** @description Email verification code lifetime, in minutes. Allowed range: 3-15. */
    // @ApiMember(Description="Email verification code lifetime, in minutes. Allowed range: 3-15.")
    public codeTtlMinutes: number;

    /** @description Maximum passkeys a single user may register. Allowed range: 1-20. */
    // @ApiMember(Description="Maximum passkeys a single user may register. Allowed range: 1-20.")
    public maxCredentialsPerUser: number;

    /** @description Number of recovery codes generated at signup. Allowed range: 5-20. */
    // @ApiMember(Description="Number of recovery codes generated at signup. Allowed range: 5-20.")
    public recoveryCodeCount: number;

    /** @description Whether recovery codes are generated automatically at signup. */
    // @ApiMember(Description="Whether recovery codes are generated automatically at signup.")
    public generateRecoveryCodesAtSignup: boolean;

    /** @description Accepted authenticator types: 'Any', 'Platform', or 'CrossPlatform'. */
    // @ApiMember(Description="Accepted authenticator types: 'Any', 'Platform', or 'CrossPlatform'.")
    public authenticatorAttachment: string;

    /** @description Per-project opt-in for magic-link account recovery (off by default). */
    // @ApiMember(Description="Per-project opt-in for magic-link account recovery (off by default).")
    public allowMagicLinkRecovery: boolean;

    /** @description Absolute refresh-token lifetime, in days. Allowed range: 7-90. */
    // @ApiMember(Description="Absolute refresh-token lifetime, in days. Allowed range: 7-90.")
    public refreshTokenTtlDays: number;

    /** @description Optional explicit WebAuthn RP-ID — a bare DNS host (e.g. 'app.example.com', no scheme/port/path). Leave null/empty to derive it from the project's CORS origins. WARNING: changing this value invalidates every existing passkey on the project — set it once before going live and avoid changing it afterward. */
    // @ApiMember(Description="Optional explicit WebAuthn RP-ID — a bare DNS host (e.g. 'app.example.com', no scheme/port/path). Leave null/empty to derive it from the project's CORS origins. WARNING: changing this value invalidates every existing passkey on the project — set it once before going live and avoid changing it afterward.")
    public rpId?: string;

    public constructor(init?: Partial<SavePasskeySettings>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SavePasskeySettings'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/membership/integrations/{Id}", "DELETE")
export class DeleteMembershipIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Integration id, from get_membership_integrations. */
    // @ApiMember(Description="Integration id, from get_membership_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DeleteMembershipIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteMembershipIntegrationRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/membership/integrations/{Id}/disable", "PUT")
export class DisableMembershipIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Integration id, from get_membership_integrations. */
    // @ApiMember(Description="Integration id, from get_membership_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DisableMembershipIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableMembershipIntegrationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/membership/integrations/{Id}/enable", "PUT")
export class EnableMembershipIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Integration id, from get_membership_integrations. */
    // @ApiMember(Description="Integration id, from get_membership_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<EnableMembershipIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableMembershipIntegrationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/membership/integrations/{id}", "GET")
export class GetMembershipIntegration extends CodeMashRequestBase implements IReturn<GetMembershipIntegrationResponse>
{
    /** @description Integration id, from get_membership_integrations. */
    // @ApiMember(Description="Integration id, from get_membership_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetMembershipIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMembershipIntegration'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetMembershipIntegrationResponse(); }
}

// @Route("/{version}/membership/integrations", "GET")
export class GetMembershipIntegrations extends CodeMashListPaginationRequestBase implements IReturn<GetMembershipIntegrationsResponse>
{

    public constructor(init?: Partial<GetMembershipIntegrations>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMembershipIntegrations'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetMembershipIntegrationsResponse(); }
}

// @Route("/{version}/membership/integrations", "POST")
// @DataContract
export class SaveMembershipIntegration extends CodeMashRequestBase implements IReturn<IdResponse>
{
    // @DataMember(Name="integration")
    public integration: MembershipIntegrationRequest;

    public constructor(init?: Partial<SaveMembershipIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveMembershipIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/membership/integrations/{Id}/default", "PUT")
export class SetMembershipIntegrationAsDefaultRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Integration id, from get_membership_integrations. */
    // @ApiMember(Description="Integration id, from get_membership_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<SetMembershipIntegrationAsDefaultRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SetMembershipIntegrationAsDefaultRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets the project's membership authorization (role-assignment) settings. */
// @Route("/{version}/membership/authorization", "GET")
// @Api(Description="Gets the project's membership authorization (role-assignment) settings.")
export class GetAuthorizationSettings extends CodeMashRequestBase implements IReturn<GetAuthorizationSettingsResponse>
{

    public constructor(init?: Partial<GetAuthorizationSettings>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAuthorizationSettings'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetAuthorizationSettingsResponse(); }
}

/** @description Updates the project's membership authorization settings. */
// @Route("/{version}/membership/authorization", "PUT")
// @Api(Description="Updates the project's membership authorization settings.")
export class UpdateAuthorizationSettings extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    public setting?: string;
    public defaultRoles?: string[];
    public allowedRegistrationRoles?: string[];
    public allowGuestUsers: boolean;
    public guestCleanupPeriodDays?: number;
    public userRegistersAsRole?: string;
    public guestRegistersAsRole?: string;
    public allowedRegisterRoles?: string[];
    public needVerification: boolean;
    public verificationEmailTemplate?: string;
    public deactivationEmailTemplate?: string;
    public allowInviteUsers: boolean;
    public allowDeactivateUsers: boolean;
    public inviteUserEmailTemplate?: string;
    public invitationExpiration?: number;
    public emailVerificationExpiration?: number;
    public deactivationExpiration?: number;
    public defaultSubscribeToNews: boolean;
    public minLength: number;
    public maxLength?: number;
    public minNumbers?: number;
    public maxNumbers?: number;
    public minUpper?: number;
    public maxUpper?: number;
    public minLower?: number;
    public maxLower?: number;
    public minSpecial?: number;
    public maxSpecial?: number;
    public allowedSpecial?: string;

    public constructor(init?: Partial<UpdateAuthorizationSettings>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateAuthorizationSettings'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Updates the project's membership password complexity policy. */
// @Route("/{version}/membership/authorization/password-complexity", "PUT")
// @Api(Description="Updates the project's membership password complexity policy.")
export class UpdatePasswordComplexity extends CodeMashRequestBase implements IReturn<UpdatePasswordComplexityResponse>
{
    /** @description Minimum password length. */
    // @ApiMember(Description="Minimum password length.")
    public minLength: number;

    /** @description Maximum password length, if capped. */
    // @ApiMember(Description="Maximum password length, if capped.")
    public maxLength?: number;

    /** @description Minimum number of numeric characters required. */
    // @ApiMember(Description="Minimum number of numeric characters required.")
    public minNumbers?: number;

    /** @description Maximum number of numeric characters allowed. */
    // @ApiMember(Description="Maximum number of numeric characters allowed.")
    public maxNumbers?: number;

    /** @description Minimum number of uppercase characters required. */
    // @ApiMember(Description="Minimum number of uppercase characters required.")
    public minUpper?: number;

    /** @description Maximum number of uppercase characters allowed. */
    // @ApiMember(Description="Maximum number of uppercase characters allowed.")
    public maxUpper?: number;

    /** @description Minimum number of lowercase characters required. */
    // @ApiMember(Description="Minimum number of lowercase characters required.")
    public minLower?: number;

    /** @description Maximum number of lowercase characters allowed. */
    // @ApiMember(Description="Maximum number of lowercase characters allowed.")
    public maxLower?: number;

    /** @description Minimum number of special characters required. */
    // @ApiMember(Description="Minimum number of special characters required.")
    public minSpecial?: number;

    /** @description Maximum number of special characters allowed. */
    // @ApiMember(Description="Maximum number of special characters allowed.")
    public maxSpecial?: number;

    /** @description The set of characters counted as 'special', if restricted. */
    // @ApiMember(Description="The set of characters counted as 'special', if restricted.")
    public allowedSpecial?: string;

    public constructor(init?: Partial<UpdatePasswordComplexity>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdatePasswordComplexity'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new UpdatePasswordComplexityResponse(); }
}

/** @description Gets the project's configured membership authentication sign-in flows. */
// @Route("/{version}/membership/authentication", "GET")
// @Api(Description="Gets the project's configured membership authentication sign-in flows.")
export class GetAuthenticationSettings extends CodeMashRequestBase implements IReturn<GetAuthenticationSettingsResponse>
{

    public constructor(init?: Partial<GetAuthenticationSettings>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAuthenticationSettings'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetAuthenticationSettingsResponse(); }
}

/** @description Updates the project's membership authentication preferences. */
// @Route("/{version}/membership/authentication", "PUT")
// @Api(Description="Updates the project's membership authentication preferences.")
export class UpdateAuthenticationSettings extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Default URL to redirect end users to after logout. */
    // @ApiMember(Description="Default URL to redirect end users to after logout.")
    public logoutUrl?: string;

    /** @description Whether end users may sign in with a username in addition to email. */
    // @ApiMember(Description="Whether end users may sign in with a username in addition to email.")
    public allowUsernames: boolean;

    /** @description Per-authentication-mode logout URL overrides. */
    // @ApiMember(Description="Per-authentication-mode logout URL overrides.")
    public modes?: CredentialsSettingsModeDto[];

    public constructor(init?: Partial<UpdateAuthenticationSettings>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateAuthenticationSettings'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

export class MembershipIntegrationSaved
{
    public integration: MembershipIntegration;

    public constructor(init?: Partial<MembershipIntegrationSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MembershipIntegrationSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MembershipIntegrationTested
{
    public id: IntegrationId;
    public succeeded: boolean;
    public errorMessages: IReadOnlyList<string>;
    public testedAtUtc: string;
    public env?: Env;

    public constructor(init?: Partial<MembershipIntegrationTested>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MembershipIntegrationTested'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MembershipIntegrationRenamed
{
    public id: IntegrationId;
    public name: DisplayName;
    public env?: Env;

    public constructor(init?: Partial<MembershipIntegrationRenamed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MembershipIntegrationRenamed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MembershipIntegrationDeleted
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<MembershipIntegrationDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MembershipIntegrationDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MembershipIntegrationSetAsDefault
{
    public id: IntegrationId;

    public constructor(init?: Partial<MembershipIntegrationSetAsDefault>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MembershipIntegrationSetAsDefault'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MembershipIntegrationEnabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<MembershipIntegrationEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MembershipIntegrationEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MembershipIntegrationDisabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<MembershipIntegrationDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MembershipIntegrationDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MembershipEstablished
{

    public constructor(init?: Partial<MembershipEstablished>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MembershipEstablished'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MembershipEnabled
{

    public constructor(init?: Partial<MembershipEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MembershipEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MembershipDisabled
{

    public constructor(init?: Partial<MembershipDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MembershipDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SetUserRegistersAsRole
{
    public projectId?: ProjectId;
    public role: RoleName;

    public constructor(init?: Partial<SetUserRegistersAsRole>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SetUserRegistersAsRole'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PolicyCreated
{
    public policy: MembershipPolicy;

    public constructor(init?: Partial<PolicyCreated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PolicyCreated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PolicyUpdated
{
    public policy: MembershipPolicy;

    public constructor(init?: Partial<PolicyUpdated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PolicyUpdated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PolicyDeleted
{
    public policyId: PolicyId;

    public constructor(init?: Partial<PolicyDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PolicyDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class RoleCreated
{
    public role: MembershipRole;

    public constructor(init?: Partial<RoleCreated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'RoleCreated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class RoleUpdated
{
    public role: MembershipRole;

    public constructor(init?: Partial<RoleUpdated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'RoleUpdated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class RoleDeleted
{
    public roleId: RoleId;

    public constructor(init?: Partial<RoleDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'RoleDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MembershipTriggerSaved
{
    public trigger: MembershipTrigger;

    public constructor(init?: Partial<MembershipTriggerSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MembershipTriggerSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MembershipTriggerMirrored
{
    public trigger: Trigger;

    public constructor(init?: Partial<MembershipTriggerMirrored>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MembershipTriggerMirrored'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MembershipTriggerEnabled extends TriggerByIdEventBase
{
    public env: Env;

    public constructor(init?: Partial<MembershipTriggerEnabled>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'MembershipTriggerEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MembershipTriggerDisabled extends TriggerByIdEventBase
{
    public env: Env;

    public constructor(init?: Partial<MembershipTriggerDisabled>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'MembershipTriggerDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MembershipTriggerDeleted extends TriggerByIdEventBase
{
    public env: Env;

    public constructor(init?: Partial<MembershipTriggerDeleted>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'MembershipTriggerDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

/** @description Disable database service */
// @Route("/{version}/database/disable", "GET")
// @Api(Description="Disable database service")
export class DisableDatabase extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DisableDatabase>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableDatabase'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/database/enable", "GET")
export class EnableDatabase extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<EnableDatabase>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableDatabase'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Delete database trigger */
// @Route("/{version}/database/schemas/triggers/{triggerId}", "DELETE")
// @Api(Description="Delete database trigger")
// @DataContract
export class DeleteSchemaTrigger extends DeleteTrigger implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DeleteSchemaTrigger>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteSchemaTrigger'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Disable database trigger */
// @Route("/{version}/database/schemas/triggers/{triggerId}/disable", "PATCH")
// @Api(Description="Disable database trigger")
// @DataContract
export class DisableSchemaTrigger extends DisableTrigger implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DisableSchemaTrigger>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableSchemaTrigger'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Enable database trigger */
// @Route("/{version}/database/schemas/triggers/{triggerId}/enable", "PATCH")
// @Api(Description="Enable database trigger")
// @DataContract
export class EnableSchemaTrigger extends EnableTrigger implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<EnableSchemaTrigger>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableSchemaTrigger'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets database trigger by specified Id */
// @Route("/{version}/database/schemas/triggers/{id}", "GET")
// @Api(Description="Gets database trigger by specified Id")
export class GetSchemaTrigger extends GetTrigger implements IReturn<GetSchemaTriggerResponse>
{

    public constructor(init?: Partial<GetSchemaTrigger>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchemaTrigger'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSchemaTriggerResponse(); }
}

/** @description Gets database triggers */
// @Route("/{version}/database/schemas/triggers", "GET")
// @Api(Description="Gets database triggers")
export class GetSchemaTriggers extends GetTriggers implements IReturn<GetSchemaTriggersResponse>
{

    public constructor(init?: Partial<GetSchemaTriggers>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchemaTriggers'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSchemaTriggersResponse(); }
}

// @Route("/{version}/database/schemas/triggers", "POST")
// @DataContract
export class SaveSchemaTrigger extends SaveTrigger implements IReturn<IdResponse>
{

    public constructor(init?: Partial<SaveSchemaTrigger>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveSchemaTrigger'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Delete database taxonomy */
// @Route("/{version}/database/taxonomies/{Id}", "DELETE")
// @Api(Description="Delete database taxonomy")
export class DeleteDatabaseTaxonomyRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Taxonomy id to delete, from get_database_taxonomies. */
    // @ApiMember(Description="Taxonomy id to delete, from get_database_taxonomies.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DeleteDatabaseTaxonomyRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteDatabaseTaxonomyRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets database taxonomy by id */
// @Route("/{version}/database/taxonomies/{id}", "GET")
// @Api(Description="Gets database taxonomy by id")
export class GetDatabaseTaxonomy extends CodeMashRequestBase implements IReturn<GetDatabaseTaxonomyResponse>
{
    /** @description Taxonomy id from get_database_taxonomies. */
    // @ApiMember(Description="Taxonomy id from get_database_taxonomies.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetDatabaseTaxonomy>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDatabaseTaxonomy'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetDatabaseTaxonomyResponse(); }
}

/** @description Gets database taxonomies */
// @Route("/{version}/database/taxonomies", "GET")
// @Api(Description="Gets database taxonomies")
export class GetDatabaseTaxonomies extends CodeMashListPaginationRequestBase implements IReturn<GetDatabaseTaxonomiesResponse>
{
    public pagingArgs?: PagingArgs;

    public constructor(init?: Partial<GetDatabaseTaxonomies>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDatabaseTaxonomies'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetDatabaseTaxonomiesResponse(); }
}

/** @description Returns the single-parent taxonomy structure tree */
// @Route("/{version}/database/taxonomies/tree", "GET")
// @Api(Description="Returns the single-parent taxonomy structure tree")
// @DataContract
export class GetDatabaseTaxonomyTreeRequest extends CodeMashRequestBase implements IReturn<GetDatabaseTaxonomyTreeResponse>
{
    /** @description When true, each taxonomy node also carries its own term tree (heavier response). */
    // @DataMember
    // @ApiMember(Description="When true, each taxonomy node also carries its own term tree (heavier response).")
    public includeTerms: boolean;

    /** @description Optional database integration id. When omitted, the project's default database integration is used. */
    // @DataMember
    // @ApiMember(Description="Optional database integration id. When omitted, the project's default database integration is used.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetDatabaseTaxonomyTreeRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDatabaseTaxonomyTreeRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetDatabaseTaxonomyTreeResponse(); }
}

/** @description Creates or updates a database taxonomy */
// @Route("/{version}/database/taxonomies", "POST")
// @Api(Description="Creates or updates a database taxonomy")
// @DataContract
export class SaveDatabaseTaxonomyRequest extends CodeMashRequestBase implements IReturn<IdResponse>
{
    /** @description Empty to create a new taxonomy; set to an existing taxonomy id (from get_database_taxonomies) to update it. */
    // @DataMember
    // @ApiMember(Description="Empty to create a new taxonomy; set to an existing taxonomy id (from get_database_taxonomies) to update it.")
    public viewId?: string;

    /** @description Human-entered taxonomy title (e.g. "Countries"); a slug is derived server-side. */
    // @DataMember
    // @ApiMember(Description="Human-entered taxonomy title (e.g. \"Countries\"); a slug is derived server-side.", IsRequired=true)
    public taxonomyName: string;

    /** @description Optional free-text description of the taxonomy. */
    // @DataMember
    // @ApiMember(Description="Optional free-text description of the taxonomy.")
    public description?: string;

    /** @description Optional raw JSON string (Norbix data meta-schema) describing custom meta fields for terms in this taxonomy. Omit to leave the taxonomy structural-only. */
    // @DataMember
    // @ApiMember(Description="Optional raw JSON string (Norbix data meta-schema) describing custom meta fields for terms in this taxonomy. Omit to leave the taxonomy structural-only.")
    public termsMetaDataSchema?: string;

    /** @description Optional raw JSON string (Norbix UI/visual meta-schema) describing the term meta edit form. */
    // @DataMember
    // @ApiMember(Description="Optional raw JSON string (Norbix UI/visual meta-schema) describing the term meta edit form.")
    public termsMetaVisualSchema?: string;

    /** @description Optional parent taxonomy id. The child taxonomy points to its parent — e.g. set the Countries taxonomy's parentId to the Regions taxonomy id so each country term can be parented by a region term. Omit for a root taxonomy. */
    // @DataMember
    // @ApiMember(Description="Optional parent taxonomy id. The child taxonomy points to its parent — e.g. set the Countries taxonomy's parentId to the Regions taxonomy id so each country term can be parented by a region term. Omit for a root taxonomy.")
    public parentId?: string;

    /** @description Optional list of other taxonomy ids this taxonomy depends on for multi-parent terms. Omit for a self-contained taxonomy. */
    // @DataMember
    // @ApiMember(Description="Optional list of other taxonomy ids this taxonomy depends on for multi-parent terms. Omit for a self-contained taxonomy.")
    public dependencies?: string[];

    public constructor(init?: Partial<SaveDatabaseTaxonomyRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveDatabaseTaxonomyRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Delete a single term from a taxonomy by id */
// @Route("/{version}/database/taxonomies/{TaxonomyId}/terms/{Id}", "DELETE")
// @Api(Description="Delete a single term from a taxonomy by id")
// @DataContract
export class DeleteDatabaseTaxonomyTermRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Taxonomy id that owns the term, from get_database_taxonomies. */
    // @DataMember
    // @ApiMember(Description="Taxonomy id that owns the term, from get_database_taxonomies.", IsRequired=true)
    public taxonomyId: string;

    /** @description Term id to delete, from get_database_taxonomy_term_tree. */
    // @DataMember
    // @ApiMember(Description="Term id to delete, from get_database_taxonomy_term_tree.", IsRequired=true)
    public id: string;

    /** @description Optional database integration id. When omitted, the project's default database integration is used. */
    // @DataMember
    // @ApiMember(Description="Optional database integration id. When omitted, the project's default database integration is used.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<DeleteDatabaseTaxonomyTermRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteDatabaseTaxonomyTermRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Delete many terms in a taxonomy matching the given filter */
// @Route("/{version}/database/taxonomies/{TaxonomyId}/terms/many", "DELETE")
// @Api(Description="Delete many terms in a taxonomy matching the given filter")
// @DataContract
export class DeleteManyDatabaseTaxonomyTermsRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Taxonomy id whose terms to delete, from get_database_taxonomies. */
    // @DataMember
    // @ApiMember(Description="Taxonomy id whose terms to delete, from get_database_taxonomies.", IsRequired=true)
    public taxonomyId: string;

    /** @description Optional database integration id. When omitted, the project's default database integration is used. */
    // @DataMember
    // @ApiMember(Description="Optional database integration id. When omitted, the project's default database integration is used.")
    public databaseIntegrationId?: string;

    /** @description MongoDB extended-JSON match filter (a raw JSON object, e.g. {"active":false}) selecting which terms to delete. Automatically ANDed server-side with the taxonomyId, so it cannot affect other taxonomies. */
    // @DataMember
    // @ApiMember(Description="MongoDB extended-JSON match filter (a raw JSON object, e.g. {\"active\":false}) selecting which terms to delete. Automatically ANDed server-side with the taxonomyId, so it cannot affect other taxonomies.", IsRequired=true)
    public filter: string;

    public constructor(init?: Partial<DeleteManyDatabaseTaxonomyTermsRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteManyDatabaseTaxonomyTermsRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Get a single term from a taxonomy by id */
// @Route("/{version}/database/taxonomies/{TaxonomyId}/terms/{Id}", "GET")
// @Api(Description="Get a single term from a taxonomy by id")
// @DataContract
export class GetDatabaseTaxonomyTermRequest extends CodeMashRequestBase implements IReturn<GetDatabaseTaxonomyTermResponse>
{
    /** @description Taxonomy id from get_database_taxonomies. */
    // @DataMember
    // @ApiMember(Description="Taxonomy id from get_database_taxonomies.", IsRequired=true)
    public taxonomyId: string;

    /** @description Term id from get_database_taxonomy_term_tree. */
    // @DataMember
    // @ApiMember(Description="Term id from get_database_taxonomy_term_tree.", IsRequired=true)
    public id: string;

    /** @description Optional database integration id. When omitted, the project's default database integration is used. */
    // @DataMember
    // @ApiMember(Description="Optional database integration id. When omitted, the project's default database integration is used.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetDatabaseTaxonomyTermRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDatabaseTaxonomyTermRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetDatabaseTaxonomyTermResponse(); }
}

/** @description Returns a merged term tree across a taxonomy and its child taxonomies */
// @Route("/{version}/database/taxonomies/{TaxonomyName}/merged-tree", "GET")
// @Api(Description="Returns a merged term tree across a taxonomy and its child taxonomies")
// @DataContract
export class GetDatabaseMergedTermTreeRequest extends CodeMashRequestBase implements IReturn<GetDatabaseMergedTermTreeResponse>
{
    /** @description Root taxonomy slug/name (from get_database_taxonomies). Its terms are the roots; child-taxonomy terms nest under them. */
    // @DataMember
    // @ApiMember(Description="Root taxonomy slug/name (from get_database_taxonomies). Its terms are the roots; child-taxonomy terms nest under them.", IsRequired=true)
    public taxonomyName: string;

    /** @description Optional database integration id. When omitted, the project's default database integration is used. */
    // @DataMember
    // @ApiMember(Description="Optional database integration id. When omitted, the project's default database integration is used.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetDatabaseMergedTermTreeRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDatabaseMergedTermTreeRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetDatabaseMergedTermTreeResponse(); }
}

/** @description Returns the whole term tree of a taxonomy (or a sub-tree) in one call */
// @Route("/{version}/database/taxonomies/{TaxonomyName}/terms/tree", "GET")
// @Api(Description="Returns the whole term tree of a taxonomy (or a sub-tree) in one call")
// @DataContract
export class GetDatabaseTaxonomyTermTreeRequest extends CodeMashRequestBase implements IReturn<GetDatabaseTaxonomyTermTreeResponse>
{
    /** @description Taxonomy slug/name to fetch the term tree for, from get_database_taxonomies. */
    // @DataMember
    // @ApiMember(Description="Taxonomy slug/name to fetch the term tree for, from get_database_taxonomies.", IsRequired=true)
    public taxonomyName: string;

    /** @description Optional term id to root the returned tree at a sub-tree instead of the whole taxonomy. */
    // @DataMember
    // @ApiMember(Description="Optional term id to root the returned tree at a sub-tree instead of the whole taxonomy.")
    public rootTermId?: string;

    /** @description Optional maximum depth to return below the root. */
    // @DataMember
    // @ApiMember(DataType="integer", Description="Optional maximum depth to return below the root.")
    public depth?: number;

    /** @description Optional database integration id. When omitted, the project's default database integration is used. */
    // @DataMember
    // @ApiMember(Description="Optional database integration id. When omitted, the project's default database integration is used.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetDatabaseTaxonomyTermTreeRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDatabaseTaxonomyTermTreeRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetDatabaseTaxonomyTermTreeResponse(); }
}

/** @description Insert a single term into a taxonomy */
// @Route("/{version}/database/taxonomies/{TaxonomyId}/terms", "POST")
// @Api(Description="Insert a single term into a taxonomy")
// @DataContract
export class SaveDatabaseTaxonomyTermRequest extends CodeMashRequestBase implements IReturn<IdResponse>
{
    /** @description Taxonomy id to insert the term into, from get_database_taxonomies. */
    // @DataMember
    // @ApiMember(Description="Taxonomy id to insert the term into, from get_database_taxonomies.", IsRequired=true)
    public taxonomyId: string;

    /** @description Optional database integration id. When omitted, the project's default database integration is used. */
    // @DataMember
    // @ApiMember(Description="Optional database integration id. When omitted, the project's default database integration is used.")
    public databaseIntegrationId?: string;

    /** @description The term to insert, as a MongoDB extended-JSON document string (a raw JSON object). Supported term fields: name (string, or a {lang:value} map — required); description; order (integer sort position, lower shows first — omit for unordered); parentId (id of the single parent term); multiParents ("additional categories": array of {taxonomyId, parentId}). The server stamps taxonomyId/taxonomyName automatically — do not include them. Example: {"name":"France","order":1}. */
    // @DataMember
    // @ApiMember(Description="The term to insert, as a MongoDB extended-JSON document string (a raw JSON object). Supported term fields: name (string, or a {lang:value} map — required); description; order (integer sort position, lower shows first — omit for unordered); parentId (id of the single parent term); multiParents (\"additional categories\": array of {taxonomyId, parentId}). The server stamps taxonomyId/taxonomyName automatically — do not include them. Example: {\"name\":\"France\",\"order\":1}.", IsRequired=true)
    public document: string;

    public constructor(init?: Partial<SaveDatabaseTaxonomyTermRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveDatabaseTaxonomyTermRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Update a single term in a taxonomy by id */
// @Route("/{version}/database/taxonomies/{TaxonomyId}/terms/{Id}", "PUT")
// @Api(Description="Update a single term in a taxonomy by id")
// @DataContract
export class UpdateDatabaseTaxonomyTermRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Taxonomy id that owns the term, from get_database_taxonomies. */
    // @DataMember
    // @ApiMember(Description="Taxonomy id that owns the term, from get_database_taxonomies.", IsRequired=true)
    public taxonomyId: string;

    /** @description Term id to update, from get_database_taxonomy_term_tree. */
    // @DataMember
    // @ApiMember(Description="Term id to update, from get_database_taxonomy_term_tree.", IsRequired=true)
    public id: string;

    /** @description Optional database integration id. When omitted, the project's default database integration is used. */
    // @DataMember
    // @ApiMember(Description="Optional database integration id. When omitted, the project's default database integration is used.")
    public databaseIntegrationId?: string;

    /** @description Partial update document as MongoDB extended-JSON (a raw JSON object of fields to change), applied with $set — only the given fields change. Updatable term fields: name (string or {lang:value} map); description; order (integer sort position, lower shows first — use this to numerate/rank terms; set null to clear); parentId (single parent term id — a term from THIS taxonomy's parent taxonomy; e.g. link a country to its region by setting the country term's parentId to the region term id); multiParents ("additional categories": array of {taxonomyId, parentId}). Example to rank a term: {"order":1}. */
    // @DataMember
    // @ApiMember(Description="Partial update document as MongoDB extended-JSON (a raw JSON object of fields to change), applied with $set — only the given fields change. Updatable term fields: name (string or {lang:value} map); description; order (integer sort position, lower shows first — use this to numerate/rank terms; set null to clear); parentId (single parent term id — a term from THIS taxonomy's parent taxonomy; e.g. link a country to its region by setting the country term's parentId to the region term id); multiParents (\"additional categories\": array of {taxonomyId, parentId}). Example to rank a term: {\"order\":1}.", IsRequired=true)
    public update: string;

    public constructor(init?: Partial<UpdateDatabaseTaxonomyTermRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateDatabaseTaxonomyTermRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Creates every collection and taxonomy of a compiled IF bundle, linked and published */
// @Route("/{version}/database/schemas/apply-bundle", "POST")
// @Api(Description="Creates every collection and taxonomy of a compiled IF bundle, linked and published")
// @DataContract
export class ApplyDatabaseSchemaBundleRequest extends CodeMashRequestBase implements IReturn<ApplyDatabaseSchemaBundleResponse>
{
    /** @description Comma-separated catalog entity ids to create from the reviewed catalog (e.g. "blog_posts,comments"). The usual input. */
    // @DataMember
    // @ApiMember(Description="Comma-separated catalog entity ids to create from the reviewed catalog (e.g. \"blog_posts,comments\"). The usual input.")
    public entities?: string;

    /** @description Only for entities the catalog lacks: one IF entity object or an array of IF objects (JSON string). May also hold catalog refs with add_fields / remove_fields. */
    // @DataMember
    // @ApiMember(Description="Only for entities the catalog lacks: one IF entity object or an array of IF objects (JSON string). May also hold catalog refs with add_fields / remove_fields.")
    public bundleJson?: string;

    /** @description Field tier to compile: minimal | standard (default) | extended. */
    // @DataMember
    // @ApiMember(Description="Field tier to compile: minimal | standard (default) | extended.")
    public tier?: string;

    /** @description true = mark free-text fields (title, body, excerpt …) translatable for multilingual content. Default false. */
    // @DataMember
    // @ApiMember(Description="true = mark free-text fields (title, body, excerpt …) translatable for multilingual content. Default false.")
    public translatable: boolean;

    /** @description false = leave every collection as a draft instead of publishing v1. Default true. */
    // @DataMember
    // @ApiMember(Description="false = leave every collection as a draft instead of publishing v1. Default true.")
    public publish: boolean;

    public constructor(init?: Partial<ApplyDatabaseSchemaBundleRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ApplyDatabaseSchemaBundleRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new ApplyDatabaseSchemaBundleResponse(); }
}

/** @description Delete database schema (collection) */
// @Route("/{version}/database/schemas/{Id}", "DELETE")
// @Api(Description="Delete database schema (collection)")
export class DeleteDatabaseSchemaRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Schema id to delete, from get_database_schemas. */
    // @ApiMember(Description="Schema id to delete, from get_database_schemas.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DeleteDatabaseSchemaRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteDatabaseSchemaRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Discards the working-copy draft of a database schema without publishing */
// @Route("/{version}/database/schemas/{Id}/draft", "DELETE")
// @Api(Description="Discards the working-copy draft of a database schema without publishing")
// @DataContract
export class DiscardDatabaseSchemaDraftRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Schema id whose draft to discard, from get_database_schemas. */
    // @DataMember
    // @ApiMember(Description="Schema id whose draft to discard, from get_database_schemas.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DiscardDatabaseSchemaDraftRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DiscardDatabaseSchemaDraftRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets database schema by id */
// @Route("/{version}/database/schemas/{id}", "GET")
// @Api(Description="Gets database schema by id")
// @DataContract
export class GetDatabaseSchema extends CodeMashRequestBase implements IReturn<GetDatabaseSchemaResponse>
{
    /** @description Schema id from get_database_schemas. */
    // @DataMember
    // @ApiMember(Description="Schema id from get_database_schemas.", IsRequired=true)
    public id: string;

    /** @description Optional published version number to pin; omit for the latest published version. */
    // @DataMember(Name="version")
    // @ApiMember(DataType="integer", Description="Optional published version number to pin; omit for the latest published version.", Name="version", ParameterType="query")
    public version?: number;

    public constructor(init?: Partial<GetDatabaseSchema>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDatabaseSchema'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetDatabaseSchemaResponse(); }
}

/** @description Gets database schemas (collections) */
// @Route("/{version}/database/schemas", "GET")
// @Api(Description="Gets database schemas (collections)")
export class GetDatabaseSchemas extends CodeMashListPaginationRequestBase implements IReturn<GetDatabaseSchemasResponse>
{
    public pagingArgs?: PagingArgs;

    public constructor(init?: Partial<GetDatabaseSchemas>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDatabaseSchemas'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetDatabaseSchemasResponse(); }
}

/** @description Gets the current draft of a database schema */
// @Route("/{version}/database/schemas/{Id}/draft", "GET")
// @Api(Description="Gets the current draft of a database schema")
// @DataContract
export class GetDatabaseSchemaDraft extends CodeMashRequestBase implements IReturn<GetDatabaseSchemaDraftResponse>
{
    /** @description Schema id from get_database_schemas. */
    // @DataMember
    // @ApiMember(Description="Schema id from get_database_schemas.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetDatabaseSchemaDraft>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDatabaseSchemaDraft'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetDatabaseSchemaDraftResponse(); }
}

/** @description Gets database schema records-list display settings */
// @Route("/{version}/database/schemas/{Id}/list-settings", "GET")
// @Api(Description="Gets database schema records-list display settings")
// @DataContract
export class GetDatabaseSchemaListSettings extends CodeMashRequestBase implements IReturn<GetDatabaseSchemaListSettingsResponse>
{
    /** @description Schema id from get_database_schemas. */
    // @DataMember
    // @ApiMember(Description="Schema id from get_database_schemas.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetDatabaseSchemaListSettings>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDatabaseSchemaListSettings'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetDatabaseSchemaListSettingsResponse(); }
}

/** @description Structural diff between two published versions of a database schema */
// @Route("/{version}/database/schemas/{Id}/versions/diff", "GET")
// @Api(Description="Structural diff between two published versions of a database schema")
// @DataContract
export class GetDatabaseSchemaVersionDiff extends CodeMashRequestBase implements IReturn<GetDatabaseSchemaVersionDiffResponse>
{
    /** @description Schema id from get_database_schemas. */
    // @DataMember
    // @ApiMember(Description="Schema id from get_database_schemas.", IsRequired=true)
    public id: string;

    /** @description Earlier published version number to diff from. Get valid values from get_database_schema_versions. */
    // @DataMember
    // @ApiMember(DataType="integer", Description="Earlier published version number to diff from. Get valid values from get_database_schema_versions.", IsRequired=true)
    public fromVersion: number;

    /** @description Later published version number to diff to. Get valid values from get_database_schema_versions. */
    // @DataMember
    // @ApiMember(DataType="integer", Description="Later published version number to diff to. Get valid values from get_database_schema_versions.", IsRequired=true)
    public toVersion: number;

    public constructor(init?: Partial<GetDatabaseSchemaVersionDiff>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDatabaseSchemaVersionDiff'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetDatabaseSchemaVersionDiffResponse(); }
}

/** @description Lists published version summaries for a database schema */
// @Route("/{version}/database/schemas/{Id}/versions", "GET")
// @Api(Description="Lists published version summaries for a database schema")
// @DataContract
export class GetDatabaseSchemaVersions extends CodeMashRequestBase implements IReturn<GetDatabaseSchemaVersionsResponse>
{
    /** @description Schema id from get_database_schemas. */
    // @DataMember
    // @ApiMember(Description="Schema id from get_database_schemas.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetDatabaseSchemaVersions>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDatabaseSchemaVersions'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetDatabaseSchemaVersionsResponse(); }
}

// @Route("/{version}/database/schemas/{Id}/publish", "POST")
// @DataContract
export class PublishDatabaseSchemaRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    // @DataMember
    public id: string;

    // @DataMember
    public confirmed: boolean;

    public constructor(init?: Partial<PublishDatabaseSchemaRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'PublishDatabaseSchemaRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Renames a database schema (collection) */
// @Route("/{version}/database/schemas/{Id}/rename", "PUT")
// @Api(Description="Renames a database schema (collection)")
// @DataContract
export class RenameDatabaseSchemaRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Schema id to rename, from get_database_schemas. */
    // @DataMember
    // @ApiMember(Description="Schema id to rename, from get_database_schemas.", IsRequired=true)
    public id: string;

    /** @description New human-entered title (e.g. "Company Employees"); the slug is derived server-side. */
    // @DataMember
    // @ApiMember(Description="New human-entered title (e.g. \"Company Employees\"); the slug is derived server-side.", IsRequired=true)
    public title: string;

    /** @description When true (default), rejects the rename if another schema already owns the derived slug. Leave true unless explicitly asked to bypass the uniqueness check. */
    // @DataMember
    // @ApiMember(Description="When true (default), rejects the rename if another schema already owns the derived slug. Leave true unless explicitly asked to bypass the uniqueness check.")
    public renameUniqueName: boolean;

    public constructor(init?: Partial<RenameDatabaseSchemaRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RenameDatabaseSchemaRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/database/schemas", "POST")
// @DataContract
export class SaveDatabaseSchemaRequest extends CodeMashRequestBase implements IReturn<IdResponse>
{
    /** @description Empty to create a new schema; set to an existing schema id (from get_database_schemas) to update its draft. */
    // @DataMember
    // @ApiMember(Description="Empty to create a new schema; set to an existing schema id (from get_database_schemas) to update its draft.")
    public viewId?: string;

    /** @description Human-entered schema title (e.g. "Company Employees"); a slug is derived server-side. */
    // @DataMember
    // @ApiMember(Description="Human-entered schema title (e.g. \"Company Employees\"); a slug is derived server-side.", IsRequired=true)
    public schemaName: string;

    /** @description Raw JSON string matching the Norbix data meta-schema (https://norbix.ai/schemas/meta/v1.json). When unsure of the shape, read an existing schema with get_database_schema first. */
    // @DataMember
    // @ApiMember(Description="Raw JSON string matching the Norbix data meta-schema (https://norbix.ai/schemas/meta/v1.json). When unsure of the shape, read an existing schema with get_database_schema first.")
    public dataSchema?: string;

    /** @description OPTIONAL raw JSON string matching the Norbix UI/visual meta-schema (https://norbix.ai/schemas/ui/v1.json), describing the record form layout. If omitted or invalid, the backend auto-generates a flat-list form from the data schema; provide it to control the layout. */
    // @DataMember
    // @ApiMember(Description="OPTIONAL raw JSON string matching the Norbix UI/visual meta-schema (https://norbix.ai/schemas/ui/v1.json), describing the record form layout. If omitted or invalid, the backend auto-generates a flat-list form from the data schema; provide it to control the layout.")
    public visualSchema?: string;

    /** @description Optional schema-level settings (e.g. record validation behavior). */
    // @DataMember
    // @ApiMember(Description="Optional schema-level settings (e.g. record validation behavior).")
    public settings?: SchemaSettingsDto;

    public constructor(init?: Partial<SaveDatabaseSchemaRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveDatabaseSchemaRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Saves the working-copy draft of a database schema */
// @Route("/{version}/database/schemas/{Id}/draft", "PUT")
// @Api(Description="Saves the working-copy draft of a database schema")
// @DataContract
export class UpdateDatabaseSchemaDraftRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Schema id whose draft to replace, from get_database_schemas. */
    // @DataMember
    // @ApiMember(Description="Schema id whose draft to replace, from get_database_schemas.", IsRequired=true)
    public id: string;

    /** @description Raw JSON string matching the Norbix data meta-schema (https://norbix.ai/schemas/meta/v1.json) for the draft's data schema. */
    // @DataMember
    // @ApiMember(Description="Raw JSON string matching the Norbix data meta-schema (https://norbix.ai/schemas/meta/v1.json) for the draft's data schema.")
    public dataSchema?: string;

    /** @description Raw JSON string matching the Norbix UI/visual meta-schema (https://norbix.ai/schemas/ui/v1.json) for the draft's record form. */
    // @DataMember
    // @ApiMember(Description="Raw JSON string matching the Norbix UI/visual meta-schema (https://norbix.ai/schemas/ui/v1.json) for the draft's record form.")
    public visualSchema?: string;

    public constructor(init?: Partial<UpdateDatabaseSchemaDraftRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateDatabaseSchemaDraftRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Updates database schema records-list display settings */
// @Route("/{version}/database/schemas/{Id}/list-settings", "PUT")
// @Api(Description="Updates database schema records-list display settings")
// @DataContract
export class UpdateDatabaseSchemaListSettingsRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Schema id whose list settings to update, from get_database_schemas. */
    // @DataMember
    // @ApiMember(Description="Schema id whose list settings to update, from get_database_schemas.", IsRequired=true)
    public id: string;

    /** @description The complete new list settings object (full replace). */
    // @DataMember
    // @ApiMember(Description="The complete new list settings object (full replace).", IsRequired=true)
    public settings: SchemaListSettingsDto;

    public constructor(init?: Partial<UpdateDatabaseSchemaListSettingsRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateDatabaseSchemaListSettingsRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Updates database schema settings */
// @Route("/{version}/database/schemas/{Id}/settings", "PUT")
// @Api(Description="Updates database schema settings")
// @DataContract
export class UpdateDatabaseSchemaSettingsRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Schema id whose settings to update, from get_database_schemas. */
    // @DataMember
    // @ApiMember(Description="Schema id whose settings to update, from get_database_schemas.", IsRequired=true)
    public id: string;

    /** @description The new schema settings object. */
    // @DataMember
    // @ApiMember(Description="The new schema settings object.", IsRequired=true)
    public settings: SchemaSettingsDto;

    public constructor(init?: Partial<UpdateDatabaseSchemaSettingsRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateDatabaseSchemaSettingsRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Database */
// @Route("/{version}/database/collections/{collectionName}/aggregate", "POST")
// @Api(Description="Database")
export class AggregateRecords extends CodeMashRequestBase implements IReturn<AggregateRecordsResponse>
{
    /** @description The collection (schema) name to run the aggregation against. */
    // @ApiMember(Description="The collection (schema) name to run the aggregation against.", IsRequired=true)
    public collectionName: string;

    public databaseIntegrationId?: string;
    /** @description The aggregation pipeline as a MongoDB extended-JSON array of stages. */
    // @ApiMember(Description="The aggregation pipeline as a MongoDB extended-JSON array of stages.", IsRequired=true)
    public pipeline: string;

    public constructor(init?: Partial<AggregateRecords>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AggregateRecords'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AggregateRecordsResponse(); }
}

/** @description Database */
// @Route("/{version}/database/collections/{collectionName}/{id}/responsibility", "PUT")
// @Api(Description="Database")
export class ChangeRecordResponsibility extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The collection (schema) name the record lives in. */
    // @ApiMember(Description="The collection (schema) name the record lives in.", IsRequired=true)
    public collectionName: string;

    /** @description The id of the record whose responsibility changes. */
    // @ApiMember(Description="The id of the record whose responsibility changes.", IsRequired=true)
    public id: string;

    public databaseIntegrationId?: string;
    /** @description The new responsible user (owner) id. */
    // @ApiMember(Description="The new responsible user (owner) id.", IsRequired=true)
    public newResponsibleUserId: string;

    public constructor(init?: Partial<ChangeRecordResponsibility>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ChangeRecordResponsibility'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Database */
// @Route("/{version}/database/collections/{collectionName}/count", "GET")
// @Api(Description="Database")
export class CountRecords extends CodeMashRequestBase implements IReturn<CountRecordsResponse>
{
    /** @description The collection (schema) name to count records in. */
    // @ApiMember(Description="The collection (schema) name to count records in.", IsRequired=true)
    public collectionName: string;

    public databaseIntegrationId?: string;
    /** @description Optional MongoDB extended-JSON filter. Empty means count all records. */
    // @ApiMember(Description="Optional MongoDB extended-JSON filter. Empty means count all records.")
    public filter?: string;

    public schemaVersion?: number;

    public constructor(init?: Partial<CountRecords>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CountRecords'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new CountRecordsResponse(); }
}

/** @description Database */
// @Route("/{version}/database/collections/{collectionName}/many", "DELETE")
// @Api(Description="Database")
export class DeleteManyRecords extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The collection (schema) name the records live in. */
    // @ApiMember(Description="The collection (schema) name the records live in.", IsRequired=true)
    public collectionName: string;

    public databaseIntegrationId?: string;
    /** @description The match filter as a MongoDB extended-JSON document. Required. */
    // @ApiMember(Description="The match filter as a MongoDB extended-JSON document. Required.", IsRequired=true)
    public filter: string;

    public constructor(init?: Partial<DeleteManyRecords>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteManyRecords'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Database */
// @Route("/{version}/database/collections/{collectionName}/{id}", "DELETE")
// @Api(Description="Database")
export class DeleteRecord extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The collection (schema) name the record lives in. */
    // @ApiMember(Description="The collection (schema) name the record lives in.", IsRequired=true)
    public collectionName: string;

    /** @description The id of the record to delete. */
    // @ApiMember(Description="The id of the record to delete.", IsRequired=true)
    public id: string;

    public databaseIntegrationId?: string;

    public constructor(init?: Partial<DeleteRecord>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteRecord'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Database */
// @Route("/{version}/database/collections/{collectionName}/distinct", "GET")
// @Api(Description="Database")
export class DistinctRecordValues extends CodeMashRequestBase implements IReturn<DistinctRecordValuesResponse>
{
    /** @description The collection (schema) name to read from. */
    // @ApiMember(Description="The collection (schema) name to read from.", IsRequired=true)
    public collectionName: string;

    public databaseIntegrationId?: string;
    /** @description The document field (dotted path allowed) to get distinct values for, e.g. 'status'. */
    // @ApiMember(Description="The document field (dotted path allowed) to get distinct values for, e.g. 'status'.", IsRequired=true)
    public field: string;

    /** @description Optional MongoDB extended-JSON filter. Empty means consider all records. */
    // @ApiMember(Description="Optional MongoDB extended-JSON filter. Empty means consider all records.")
    public filter?: string;

    public schemaVersion?: number;

    public constructor(init?: Partial<DistinctRecordValues>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DistinctRecordValues'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new DistinctRecordValuesResponse(); }
}

/** @description Database */
// @Route("/{version}/database/collections/{collectionName}/aggregates/{aggregateId}/execute", "POST")
// @Api(Description="Database")
export class ExecuteRecordsAggregate extends CodeMashRequestBase implements IReturn<ExecuteRecordsAggregateResponse>
{
    /** @description The collection (schema) name to run the saved aggregation against. */
    // @ApiMember(Description="The collection (schema) name to run the saved aggregation against.", IsRequired=true)
    public collectionName: string;

    /** @description The saved aggregate id (maggr_…) to execute. */
    // @ApiMember(Description="The saved aggregate id (maggr_…) to execute.", IsRequired=true)
    public aggregateId: string;

    public databaseIntegrationId?: string;
    /** @description Optional key/value substitutions for {TokenKey} placeholders in the saved pipeline. */
    // @ApiMember(Description="Optional key/value substitutions for {TokenKey} placeholders in the saved pipeline.")
    public tokens?: { [index:string]: string; };

    public constructor(init?: Partial<ExecuteRecordsAggregate>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ExecuteRecordsAggregate'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new ExecuteRecordsAggregateResponse(); }
}

/** @description Database */
// @Route("/{version}/database/collections/{collectionName}", "GET")
// @Api(Description="Database")
export class FindRecords extends CodeMashListPaginationRequestBase implements IReturn<FindRecordsResponse>
{
    /** @description The collection (schema) name to read from. */
    // @ApiMember(Description="The collection (schema) name to read from.", IsRequired=true)
    public collectionName: string;

    public databaseIntegrationId?: string;
    /** @description Optional MongoDB extended-JSON filter. Empty means match all records. */
    // @ApiMember(Description="Optional MongoDB extended-JSON filter. Empty means match all records.")
    public filter?: string;

    /** @description Optional contact id (ct_…) — only that contact's records are returned. */
    // @ApiMember(Description="Optional contact id (ct_…) — only that contact's records are returned.")
    public contactId?: string;

    public schemaVersion?: number;
    public pagingArgs?: PagingArgs;
    public sortBy?: string;
    public sortOrder?: number;

    public constructor(init?: Partial<FindRecords>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'FindRecords'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new FindRecordsResponse(); }
}

/** @description Database */
// @Route("/{version}/database/collections/{collectionName}/{id}", "GET")
// @Api(Description="Database")
export class FindOneRecord extends CodeMashRequestBase implements IReturn<FindOneRecordResponse>
{
    /** @description The collection (schema) name to read from. */
    // @ApiMember(Description="The collection (schema) name to read from.", IsRequired=true)
    public collectionName: string;

    /** @description The id of the record to fetch. */
    // @ApiMember(Description="The id of the record to fetch.", IsRequired=true)
    public id: string;

    public databaseIntegrationId?: string;

    public constructor(init?: Partial<FindOneRecord>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'FindOneRecord'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new FindOneRecordResponse(); }
}

/** @description Database */
// @Route("/{version}/database/collections/{collectionName}/indexes", "GET")
// @Api(Description="Database")
// @DataContract
export class GetCollectionIndexes extends CodeMashRequestBase implements IReturn<GetCollectionIndexesResponse>
{
    /** @description The collection (schema) name to inspect. */
    // @DataMember
    // @ApiMember(Description="The collection (schema) name to inspect.", IsRequired=true)
    public collectionName: string;

    // @DataMember
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetCollectionIndexes>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCollectionIndexes'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetCollectionIndexesResponse(); }
}

/** @description Database */
// @Route("/{version}/database/collections/{collectionName}/many", "POST")
// @Api(Description="Database")
export class InsertManyRecords extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The collection (schema) name to insert into. */
    // @ApiMember(Description="The collection (schema) name to insert into.", IsRequired=true)
    public collectionName: string;

    public databaseIntegrationId?: string;
    /** @description The records to insert as a MongoDB extended-JSON array of documents. */
    // @ApiMember(Description="The records to insert as a MongoDB extended-JSON array of documents.", IsRequired=true)
    public documents: string;

    public constructor(init?: Partial<InsertManyRecords>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'InsertManyRecords'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Database */
// @Route("/{version}/database/collections/{collectionName}", "POST")
// @Api(Description="Database")
export class InsertRecord extends CodeMashRequestBase implements IReturn<IdResponse>
{
    /** @description The collection (schema) name to insert into. */
    // @ApiMember(Description="The collection (schema) name to insert into.", IsRequired=true)
    public collectionName: string;

    public databaseIntegrationId?: string;
    /** @description The record to insert, as a MongoDB extended-JSON document string. */
    // @ApiMember(Description="The record to insert, as a MongoDB extended-JSON document string.", IsRequired=true)
    public document: string;

    public constructor(init?: Partial<InsertRecord>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'InsertRecord'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Database */
// @Route("/{version}/database/collections/{collectionName}/{id}/replace", "PUT")
// @Api(Description="Database")
export class ReplaceRecord extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The collection (schema) name the record lives in. */
    // @ApiMember(Description="The collection (schema) name the record lives in.", IsRequired=true)
    public collectionName: string;

    /** @description The id of the record to replace. */
    // @ApiMember(Description="The id of the record to replace.", IsRequired=true)
    public id: string;

    public databaseIntegrationId?: string;
    /** @description The replacement document as MongoDB extended-JSON. */
    // @ApiMember(Description="The replacement document as MongoDB extended-JSON.", IsRequired=true)
    public replacement: string;

    public constructor(init?: Partial<ReplaceRecord>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ReplaceRecord'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Database */
// @Route("/{version}/database/collections/seed", "POST")
// @Api(Description="Database")
export class SeedCollectionRecords extends CodeMashRequestBase implements IReturn<SeedCollectionRecordsResponse>
{
    /** @description Seeding mode: 'dummy' (server-generated sample data, default) or 'realistic' (caller-supplied documents). */
    // @ApiMember(Description="Seeding mode: 'dummy' (server-generated sample data, default) or 'realistic' (caller-supplied documents).")
    public mode?: string;

    public databaseIntegrationId?: string;
    /** @description JSON array of {collectionName, count?, documents?}. count applies to dummy mode (max 100 per collection); documents (extended-JSON objects, may contain $seedRef placeholders) apply to realistic mode. */
    // @ApiMember(Description="JSON array of {collectionName, count?, documents?}. count applies to dummy mode (max 100 per collection); documents (extended-JSON objects, may contain $seedRef placeholders) apply to realistic mode.", IsRequired=true)
    public collections: string;

    public constructor(init?: Partial<SeedCollectionRecords>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SeedCollectionRecords'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new SeedCollectionRecordsResponse(); }
}

/** @description Database */
// @Route("/{version}/database/collections/{collectionName}/many", "PUT")
// @Api(Description="Database")
export class UpdateManyRecords extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The collection (schema) name the records live in. */
    // @ApiMember(Description="The collection (schema) name the records live in.", IsRequired=true)
    public collectionName: string;

    public databaseIntegrationId?: string;
    /** @description The match filter as a MongoDB extended-JSON document. Empty object means match all. */
    // @ApiMember(Description="The match filter as a MongoDB extended-JSON document. Empty object means match all.", IsRequired=true)
    public filter: string;

    /** @description The partial update document (applied with $set), as MongoDB extended-JSON. */
    // @ApiMember(Description="The partial update document (applied with $set), as MongoDB extended-JSON.", IsRequired=true)
    public update: string;

    public constructor(init?: Partial<UpdateManyRecords>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateManyRecords'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Database */
// @Route("/{version}/database/collections/{collectionName}/{id}", "PUT")
// @Api(Description="Database")
export class UpdateOneRecord extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The collection (schema) name the record lives in. */
    // @ApiMember(Description="The collection (schema) name the record lives in.", IsRequired=true)
    public collectionName: string;

    /** @description The id of the record to update. */
    // @ApiMember(Description="The id of the record to update.", IsRequired=true)
    public id: string;

    public databaseIntegrationId?: string;
    /** @description The partial update document (applied with $set), as MongoDB extended-JSON. */
    // @ApiMember(Description="The partial update document (applied with $set), as MongoDB extended-JSON.", IsRequired=true)
    public update: string;

    public constructor(init?: Partial<UpdateOneRecord>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateOneRecord'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Delete integration for particular project */
// @Route("/{version}/database/integrations/{Id}", "DELETE")
// @Api(Description="Delete integration for particular project")
export class DeleteDatabaseIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Database integration id to delete, from get_database_integrations. */
    // @ApiMember(Description="Database integration id to delete, from get_database_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DeleteDatabaseIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteDatabaseIntegrationRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Disable integration for particular project */
// @Route("/{version}/database/integrations/{Id}/disable", "PUT")
// @Api(Description="Disable integration for particular project")
export class DisableDatabaseIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Database integration id to disable, from get_database_integrations. */
    // @ApiMember(Description="Database integration id to disable, from get_database_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DisableDatabaseIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableDatabaseIntegrationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Enable integration for particular project */
// @Route("/{version}/database/integrations/{Id}/enable", "PUT")
// @Api(Description="Enable integration for particular project")
export class EnableDatabaseIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Database integration id to enable, from get_database_integrations. */
    // @ApiMember(Description="Database integration id to enable, from get_database_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<EnableDatabaseIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableDatabaseIntegrationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets integration by specified Id */
// @Route("/{version}/database/integrations/{id}", "GET")
// @Api(Description="Gets integration by specified Id")
export class GetDatabaseIntegration extends CodeMashRequestBase implements IReturn<GetDatabaseIntegrationResponse>
{
    /** @description Database integration id from get_database_integrations. */
    // @ApiMember(Description="Database integration id from get_database_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetDatabaseIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDatabaseIntegration'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetDatabaseIntegrationResponse(); }
}

/** @description Gets database integrations */
// @Route("/{version}/database/integrations", "GET")
// @Api(Description="Gets database integrations")
export class GetDatabaseIntegrations extends CodeMashListPaginationRequestBase implements IReturn<GetDatabaseIntegrationsResponse>
{
    public pagingArgs?: PagingArgs;

    public constructor(init?: Partial<GetDatabaseIntegrations>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDatabaseIntegrations'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetDatabaseIntegrationsResponse(); }
}

/** @description Returns the Flex tiers this account is entitled to pick */
// @Route("/{version}/database/integrations/flex-tiers", "GET")
// @Api(Description="Returns the Flex tiers this account is entitled to pick")
export class GetAllowedFlexTiers extends CodeMashRequestBase implements IReturn<GetAllowedFlexTiersResponse>
{

    public constructor(init?: Partial<GetAllowedFlexTiers>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAllowedFlexTiers'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetAllowedFlexTiersResponse(); }
}

// @Route("/{version}/database/integrations/{Id}/connection-string", "GET")
export class RevealManagedFlexConnectionString extends CodeMashRequestBase implements IReturn<RevealManagedFlexConnectionStringResponse>
{
    public id: string;

    public constructor(init?: Partial<RevealManagedFlexConnectionString>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RevealManagedFlexConnectionString'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new RevealManagedFlexConnectionStringResponse(); }
}

/** @description Saves database integration */
// @Route("/{version}/database/integrations", "POST")
// @Api(Description="Saves database integration")
// @DataContract
export class SaveDatabaseIntegration extends CodeMashRequestBase implements IReturn<IdResponse>
{
    // @DataMember(Name="integration")
    public integration: DatabaseIntegrationRequest;

    public constructor(init?: Partial<SaveDatabaseIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveDatabaseIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Sets integration as default */
// @Route("/{version}/database/integrations/{Id}/default", "PUT")
// @Api(Description="Sets integration as default")
export class SetDatabaseIntegrationAsDefaultRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Database integration id to set as default, from get_database_integrations. */
    // @ApiMember(Description="Database integration id to set as default, from get_database_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<SetDatabaseIntegrationAsDefaultRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SetDatabaseIntegrationAsDefaultRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Test database integration */
// @Route("/{version}/database/integrations/test", "POST")
// @Api(Description="Test database integration")
export class TestDatabaseIntegration extends CodeMashRequestBase implements IReturn<TestDatabaseIntegrationResponse>
{
    /** @description Database integration id to test, from get_database_integrations. */
    // @ApiMember(Description="Database integration id to test, from get_database_integrations.", IsRequired=true)
    public integrationId: string;

    public constructor(init?: Partial<TestDatabaseIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'TestDatabaseIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new TestDatabaseIntegrationResponse(); }
}

/** @description Database */
// @Route("/{version}/database/imports", "POST")
// @Api(Description="Database")
export class CreateCollectionImport extends CodeMashRequestBase implements IReturn<IdResponse>
{
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

    public constructor(init?: Partial<CreateCollectionImport>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateCollectionImport'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Database */
// @Route("/{version}/database/imports/{Id}", "DELETE")
// @Api(Description="Database")
export class DeleteCollectionImportRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The import id (imp_…). */
    // @ApiMember(Description="The import id (imp_…).", IsRequired=true)
    public id: string;

    public databaseIntegrationId?: string;

    public constructor(init?: Partial<DeleteCollectionImportRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteCollectionImportRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Database */
// @Route("/{version}/database/imports/{Id}", "GET")
// @Api(Description="Database")
export class GetCollectionImport extends CodeMashRequestBase implements IReturn<GetCollectionImportResponse>
{
    /** @description The import id (imp_…). */
    // @ApiMember(Description="The import id (imp_…).", IsRequired=true)
    public id: string;

    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetCollectionImport>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCollectionImport'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetCollectionImportResponse(); }
}

/** @description Database */
// @Route("/{version}/database/imports", "GET")
// @Api(Description="Database")
export class GetCollectionImports extends CodeMashListPaginationRequestBase implements IReturn<GetCollectionImportsResponse>
{
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetCollectionImports>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetCollectionImports'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetCollectionImportsResponse(); }
}

/** @description Database */
// @Route("/{version}/database/imports/upload-url", "POST")
// @Api(Description="Database")
export class RequestImportUploadUrlRequest extends CodeMashRequestBase implements IReturn<RequestImportUploadUrlResponse>
{
    public fileAccountId?: string;
    /** @description The original CSV file name, e.g. people.csv. */
    // @ApiMember(Description="The original CSV file name, e.g. people.csv.", IsRequired=true)
    public fileName: string;

    public constructor(init?: Partial<RequestImportUploadUrlRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RequestImportUploadUrlRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new RequestImportUploadUrlResponse(); }
}

/** @description Database */
// @Route("/{version}/database/imports/analyze", "POST")
// @Api(Description="Database")
export class AnalyzeImportFileRequest extends CodeMashRequestBase implements IReturn<AnalyzeImportFileResponse>
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

    public constructor(init?: Partial<AnalyzeImportFileRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AnalyzeImportFileRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AnalyzeImportFileResponse(); }
}

/** @description Delete saved Mongo aggregation */
// @Route("/{version}/database/aggregates/{Id}", "DELETE")
// @Api(Description="Delete saved Mongo aggregation")
// @DataContract
export class DeleteDatabaseAggregateRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Aggregate id to delete, from get_database_aggregates. */
    // @DataMember
    // @ApiMember(Description="Aggregate id to delete, from get_database_aggregates.", IsRequired=true)
    public id: string;

    /** @description Schema id that owns this aggregate, from get_database_schemas. */
    // @DataMember
    // @ApiMember(Description="Schema id that owns this aggregate, from get_database_schemas.", IsRequired=true)
    public schemaId: string;

    public constructor(init?: Partial<DeleteDatabaseAggregateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteDatabaseAggregateRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Get saved Mongo aggregation by id */
// @Route("/{version}/database/aggregates/{Id}", "GET")
// @Api(Description="Get saved Mongo aggregation by id")
export class GetDatabaseAggregate extends CodeMashRequestBase implements IReturn<GetDatabaseAggregateResponse>
{
    /** @description Aggregate id from get_database_aggregates. */
    // @ApiMember(Description="Aggregate id from get_database_aggregates.", IsRequired=true)
    public id: string;

    /** @description Schema id that owns this aggregate, from get_database_schemas. */
    // @ApiMember(Description="Schema id that owns this aggregate, from get_database_schemas.", IsRequired=true)
    public schemaId: string;

    public constructor(init?: Partial<GetDatabaseAggregate>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDatabaseAggregate'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetDatabaseAggregateResponse(); }
}

/** @description Lists saved Mongo aggregations for a schema */
// @Route("/{version}/database/aggregates", "GET")
// @Api(Description="Lists saved Mongo aggregations for a schema")
export class GetDatabaseAggregates extends CodeMashListPaginationRequestBase implements IReturn<GetDatabaseAggregatesResponse>
{
    /** @description Schema id whose saved aggregates to list, from get_database_schemas. */
    // @ApiMember(Description="Schema id whose saved aggregates to list, from get_database_schemas.", IsRequired=true)
    public schemaId: string;

    public pagingArgs?: PagingArgs;

    public constructor(init?: Partial<GetDatabaseAggregates>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDatabaseAggregates'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetDatabaseAggregatesResponse(); }
}

/** @description Creates or updates a saved Mongo aggregation */
// @Route("/{version}/database/aggregates", "POST")
// @Api(Description="Creates or updates a saved Mongo aggregation")
// @DataContract
export class SaveDatabaseAggregateRequest extends CodeMashRequestBase implements IReturn<IdResponse>
{
    /** @description Empty to create a new saved aggregate; set to an existing aggregate id (from get_database_aggregates) to update it. */
    // @DataMember
    // @ApiMember(Description="Empty to create a new saved aggregate; set to an existing aggregate id (from get_database_aggregates) to update it.")
    public viewId?: string;

    /** @description Schema id that owns this aggregate, from get_database_schemas. */
    // @DataMember
    // @ApiMember(Description="Schema id that owns this aggregate, from get_database_schemas.", IsRequired=true)
    public schemaId: string;

    /** @description Human-readable display name for the saved aggregate. */
    // @DataMember
    // @ApiMember(Description="Human-readable display name for the saved aggregate.", IsRequired=true)
    public displayName: string;

    /** @description Optional free-text description of what the aggregate does. */
    // @DataMember
    // @ApiMember(Description="Optional free-text description of what the aggregate does.")
    public description?: string;

    /** @description MongoDB aggregation pipeline JSON, optionally containing {TokenKey} placeholders substituted at execute time. */
    // @DataMember
    // @ApiMember(Description="MongoDB aggregation pipeline JSON, optionally containing {TokenKey} placeholders substituted at execute time.", IsRequired=true)
    public pipeline: string;

    public constructor(init?: Partial<SaveDatabaseAggregateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveDatabaseAggregateRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Test-run an aggregation pipeline with caller-supplied tokens */
// @Route("/{version}/database/aggregates/test", "POST")
// @Api(Description="Test-run an aggregation pipeline with caller-supplied tokens")
// @DataContract
export class TestDatabaseAggregateRequest extends CodeMashRequestBase implements IReturn<TestDatabaseAggregateResponse>
{
    /** @description Optional database integration id. When omitted, the project's default database integration is used. */
    // @DataMember
    // @ApiMember(Description="Optional database integration id. When omitted, the project's default database integration is used.")
    public databaseIntegrationId?: string;

    /** @description Name of the collection (schema) to run the aggregation against. */
    // @DataMember
    // @ApiMember(Description="Name of the collection (schema) to run the aggregation against.", IsRequired=true)
    public collectionName: string;

    /** @description MongoDB aggregation pipeline JSON, optionally containing {TokenKey} placeholders to be substituted from tokens. */
    // @DataMember
    // @ApiMember(Description="MongoDB aggregation pipeline JSON, optionally containing {TokenKey} placeholders to be substituted from tokens.", IsRequired=true)
    public pipeline: string;

    /** @description Optional key/value substitutions for {TokenKey} placeholders in the pipeline. */
    // @DataMember
    // @ApiMember(Description="Optional key/value substitutions for {TokenKey} placeholders in the pipeline.")
    public tokens?: { [index:string]: string; };

    public constructor(init?: Partial<TestDatabaseAggregateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'TestDatabaseAggregateRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new TestDatabaseAggregateResponse(); }
}

export class MongoDbAggregateCreated
{
    public aggregate: MongoDbAggregate;

    public constructor(init?: Partial<MongoDbAggregateCreated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MongoDbAggregateCreated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MongoDbAggregateUpdated
{
    public aggregate: MongoDbAggregate;

    public constructor(init?: Partial<MongoDbAggregateUpdated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MongoDbAggregateUpdated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MongoDbAggregateDeleted
{
    public schemaId: SchemaId;
    public id: MongoDbAggregateId;

    public constructor(init?: Partial<MongoDbAggregateDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MongoDbAggregateDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class DatabaseEstablished
{

    public constructor(init?: Partial<DatabaseEstablished>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DatabaseEstablished'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class DatabaseEnabled
{

    public constructor(init?: Partial<DatabaseEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DatabaseEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class DatabaseDisabled
{

    public constructor(init?: Partial<DatabaseDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DatabaseDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class DatabaseIntegrationSaved
{
    public integration: DatabaseIntegration;

    public constructor(init?: Partial<DatabaseIntegrationSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DatabaseIntegrationSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class DatabaseIntegrationTested
{
    public id: IntegrationId;
    public succeeded: boolean;
    public errorMessages: IReadOnlyList<string>;
    public testedAtUtc: string;
    public env?: Env;

    public constructor(init?: Partial<DatabaseIntegrationTested>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DatabaseIntegrationTested'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class DatabaseIntegrationRenamed
{
    public id: IntegrationId;
    public name: DisplayName;
    public env?: Env;

    public constructor(init?: Partial<DatabaseIntegrationRenamed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DatabaseIntegrationRenamed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class DatabaseIntegrationSetAsDefault
{
    public env: Env;
    public id: IntegrationId;

    public constructor(init?: Partial<DatabaseIntegrationSetAsDefault>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DatabaseIntegrationSetAsDefault'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class DatabaseIntegrationDeleted
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<DatabaseIntegrationDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DatabaseIntegrationDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class DatabaseIntegrationEnabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<DatabaseIntegrationEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DatabaseIntegrationEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class DatabaseIntegrationDisabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<DatabaseIntegrationDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DatabaseIntegrationDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class DatabaseIntegrationProvisioningStarted
{
    public integrationId: IntegrationId;
    public atlasProjectId: string;
    public atlasClusterName: string;

    public constructor(init?: Partial<DatabaseIntegrationProvisioningStarted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DatabaseIntegrationProvisioningStarted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class DatabaseIntegrationProvisioningCompleted
{
    public integrationId: IntegrationId;
    public connectionStringTemplate: string;

    public constructor(init?: Partial<DatabaseIntegrationProvisioningCompleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DatabaseIntegrationProvisioningCompleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class DatabaseIntegrationProvisioningFailed
{
    public integrationId: IntegrationId;
    public reason: string;
    public retryable: boolean;

    public constructor(init?: Partial<DatabaseIntegrationProvisioningFailed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DatabaseIntegrationProvisioningFailed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class DatabaseIntegrationDeprovisioned
{
    public integrationId: IntegrationId;
    public atlasProjectId: string;
    public atlasClusterName: string;

    public constructor(init?: Partial<DatabaseIntegrationDeprovisioned>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DatabaseIntegrationDeprovisioned'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class ProjectStatusChanged
{
    public status: ProjectStatus;

    public constructor(init?: Partial<ProjectStatusChanged>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ProjectStatusChanged'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SchemaCreated
{
    public schema: Schema;

    public constructor(init?: Partial<SchemaCreated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SchemaCreated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SchemaMirrored
{
    public schema: Schema;

    public constructor(init?: Partial<SchemaMirrored>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SchemaMirrored'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SchemaDraftUpdated
{
    public id: SchemaId;
    public draft: SchemaDraft;
    public env: Env;

    public constructor(init?: Partial<SchemaDraftUpdated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SchemaDraftUpdated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SchemaDraftDiscarded
{
    public id: SchemaId;
    public env: Env;

    public constructor(init?: Partial<SchemaDraftDiscarded>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SchemaDraftDiscarded'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SchemaVersionPublished
{
    public id: SchemaId;
    public version: PublishedSchemaVersion;
    public diff: SchemaDiff;
    public env: Env;

    public constructor(init?: Partial<SchemaVersionPublished>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SchemaVersionPublished'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SchemaSettingsUpdated
{
    public id: SchemaId;
    public settings: SchemaSettings;
    public env: Env;

    public constructor(init?: Partial<SchemaSettingsUpdated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SchemaSettingsUpdated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SchemaDeleted
{
    public id: SchemaId;
    public env: Env;

    public constructor(init?: Partial<SchemaDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SchemaDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SchemaRenamed
{
    public schemaId: SchemaId;
    public newName: SchemaName;
    public renameUniqueName: boolean;
    public env: Env;

    public constructor(init?: Partial<SchemaRenamed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SchemaRenamed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SchemaDataCleared
{
    public id: SchemaId;
    public integrations: IntegrationId[] = [];
    public env: Env;

    public constructor(init?: Partial<SchemaDataCleared>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SchemaDataCleared'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class TaxonomyCreated
{
    public taxonomy: Taxonomy;

    public constructor(init?: Partial<TaxonomyCreated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'TaxonomyCreated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class TaxonomyUpdated
{
    public taxonomy: Taxonomy;

    public constructor(init?: Partial<TaxonomyUpdated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'TaxonomyUpdated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class TaxonomyDeleted
{
    public taxonomyId: TaxonomyId;

    public constructor(init?: Partial<TaxonomyDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'TaxonomyDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class TaxonomyDataCleared
{
    public taxonomyId: TaxonomyId;
    public integrations: IntegrationId[] = [];

    public constructor(init?: Partial<TaxonomyDataCleared>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'TaxonomyDataCleared'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SchemaTriggerSaved
{
    public trigger: SchemaTrigger;

    public constructor(init?: Partial<SchemaTriggerSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SchemaTriggerSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class DatabaseTriggerMirrored
{
    public trigger: Trigger;

    public constructor(init?: Partial<DatabaseTriggerMirrored>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DatabaseTriggerMirrored'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SchemaTriggerEnabled extends TriggerByIdEventBase
{
    public schemaId: SchemaId;
    public env: Env;

    public constructor(init?: Partial<SchemaTriggerEnabled>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SchemaTriggerEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SchemaTriggerDisabled extends TriggerByIdEventBase
{
    public schemaId: SchemaId;
    public env: Env;

    public constructor(init?: Partial<SchemaTriggerDisabled>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SchemaTriggerDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SchemaTriggerDeleted extends TriggerByIdEventBase
{
    public schemaId: SchemaId;
    public env: Env;

    public constructor(init?: Partial<SchemaTriggerDeleted>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SchemaTriggerDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class ProcessCollectionImport
{
    public importId: string;
    public projectId: string;
    public accountId: string;
    public databaseIntegrationId: string;
    public env?: string;

    public constructor(init?: Partial<ProcessCollectionImport>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ProcessCollectionImport'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class RecordInserted
{
    public projectId: ProjectId;
    public databaseIntegrationId: IntegrationId;
    public schemaName: SchemaName;
    public id: string;
    public document: Object;

    public constructor(init?: Partial<RecordInserted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'RecordInserted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class RecordUpdated
{
    public projectId: ProjectId;
    public databaseIntegrationId: IntegrationId;
    public schemaName: SchemaName;
    public id: string;
    public from: Object;
    public to: Object;

    public constructor(init?: Partial<RecordUpdated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'RecordUpdated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class RecordDeleted
{
    public projectId: ProjectId;
    public databaseIntegrationId: IntegrationId;
    public schemaName: SchemaName;
    public id: string;
    public document: Object;

    public constructor(init?: Partial<RecordDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'RecordDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class RecordReplaced
{
    public projectId: ProjectId;
    public databaseIntegrationId: IntegrationId;
    public schemaName: SchemaName;
    public id: string;
    public from: Object;
    public to: Object;

    public constructor(init?: Partial<RecordReplaced>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'RecordReplaced'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class RecordResponsibilityChanged
{
    public projectId: ProjectId;
    public databaseIntegrationId: IntegrationId;
    public schemaName: SchemaName;
    public id: string;
    public fromOwner: AuthId;
    public toOwner: AuthId;

    public constructor(init?: Partial<RecordResponsibilityChanged>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'RecordResponsibilityChanged'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class RecordsInserted
{
    public projectId: ProjectId;
    public databaseIntegrationId: IntegrationId;
    public schemaName: SchemaName;
    public ids: IReadOnlyList<string>;
    public documents: IReadOnlyList<Object>;

    public constructor(init?: Partial<RecordsInserted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'RecordsInserted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class RecordsUpdated
{
    public projectId: ProjectId;
    public databaseIntegrationId: IntegrationId;
    public schemaName: SchemaName;
    public matchedCount: number;
    public modifiedCount: number;
    public update: Object;

    public constructor(init?: Partial<RecordsUpdated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'RecordsUpdated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class RecordsDeleted
{
    public projectId: ProjectId;
    public databaseIntegrationId: IntegrationId;
    public schemaName: SchemaName;
    public deletedCount: number;
    public filter: Object;

    public constructor(init?: Partial<RecordsDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'RecordsDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailVerificationCodeRequested implements IPasskeyMessage
{
    public email: string;
    public projectId: string;
    public code: string;
    public expiresAtUtc: string;

    public constructor(init?: Partial<EmailVerificationCodeRequested>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailVerificationCodeRequested'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MagicLinkRequested implements IPasskeyMessage
{
    public email: string;
    public projectId: string;
    public token: string;
    public expiresAtUtc: string;

    public constructor(init?: Partial<MagicLinkRequested>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MagicLinkRequested'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PasswordResetRequested implements IPasskeyMessage
{
    public email: string;
    public projectId: string;
    public token: string;
    public expiresAtUtc: string;

    public constructor(init?: Partial<PasswordResetRequested>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PasswordResetRequested'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PasswordChanged implements IPasskeyMessage
{
    public email: string;
    public projectId: string;

    public constructor(init?: Partial<PasswordChanged>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PasswordChanged'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SseCallTriggered
{
    public projectId: ProjectId;
    public accountId: AccountId;
    public triggerId: TriggerId;
    public triggerType: TriggerType;
    public sourceEvent: string;
    public targetUserAuthId?: string;
    public schemaId?: string;
    public tokenMappings?: IReadOnlyDictionary<string, string>;
    public correlationId?: string;

    public constructor(init?: Partial<SseCallTriggered>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SseCallTriggered'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class UserRegistered
{
    public auth: Auth;
    public linkToUser?: UserId;

    public constructor(init?: Partial<UserRegistered>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UserRegistered'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class UserCreated
{
    public userId: UserId;
    public projectId: ProjectId;
    public authId?: AuthId;

    public constructor(init?: Partial<UserCreated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UserCreated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class UserUpdated
{
    public authId: AuthId;
    public from: UserGeneralInfo;
    public to: UserGeneralInfo;

    public constructor(init?: Partial<UserUpdated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UserUpdated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class UserBlocked
{
    public user?: UserGeneralInfo;
    public authId: AuthId;

    public constructor(init?: Partial<UserBlocked>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UserBlocked'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class UserUnblocked
{
    public user?: UserGeneralInfo;
    public authId: AuthId;

    public constructor(init?: Partial<UserUnblocked>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UserUnblocked'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class UserInvited
{
    public emailAddress: EmailAddress;

    public constructor(init?: Partial<UserInvited>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UserInvited'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class UserVerified
{
    public authId: AuthId;
    public user?: UserGeneralInfo;

    public constructor(init?: Partial<UserVerified>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UserVerified'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class UserDeleted
{
    public user?: UserGeneralInfo;
    public authId: AuthId;

    public constructor(init?: Partial<UserDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UserDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

// @Route("/{version}/files/disable", "GET")
export class DisableFiles extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DisableFiles>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableFiles'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/files/enable", "GET")
export class EnableFiles extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<EnableFiles>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableFiles'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/files/triggers/{triggerId}", "DELETE")
// @DataContract
export class DeleteFilesTrigger extends DeleteTrigger implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DeleteFilesTrigger>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteFilesTrigger'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/files/triggers/{triggerId}/disable", "PATCH")
// @DataContract
export class DisableFilesTrigger extends DisableTrigger implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DisableFilesTrigger>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableFilesTrigger'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/files/triggers/{triggerId}/enable", "PATCH")
// @DataContract
export class EnableFilesTrigger extends EnableTrigger implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<EnableFilesTrigger>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableFilesTrigger'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets files trigger by specified Id */
// @Route("/{version}/files/triggers/{id}", "GET")
// @Api(Description="Gets files trigger by specified Id")
export class GetFilesTrigger extends GetTrigger implements IReturn<GetFilesTriggerResponse>
{

    public constructor(init?: Partial<GetFilesTrigger>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetFilesTrigger'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetFilesTriggerResponse(); }
}

/** @description Gets files triggers */
// @Route("/{version}/files/triggers", "GET")
// @Api(Description="Gets files triggers")
export class GetFilesTriggers extends GetTriggers implements IReturn<GetFilesTriggersResponse>
{

    public constructor(init?: Partial<GetFilesTriggers>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetFilesTriggers'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetFilesTriggersResponse(); }
}

// @Route("/{version}/files/triggers", "POST")
// @DataContract
export class SaveFilesTrigger extends SaveTrigger implements IReturn<IdResponse>
{

    public constructor(init?: Partial<SaveFilesTrigger>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveFilesTrigger'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/files/integrations/{Id}", "DELETE")
export class DeleteFilesIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Files integration id to delete, from get_files_integrations. */
    // @ApiMember(Description="Files integration id to delete, from get_files_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DeleteFilesIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteFilesIntegrationRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/files/integrations/{Id}/disable", "PUT")
export class DisableFilesIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Files integration id to disable, from get_files_integrations. */
    // @ApiMember(Description="Files integration id to disable, from get_files_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DisableFilesIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableFilesIntegrationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/files/integrations/{Id}/enable", "PUT")
export class EnableFilesIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Files integration id to enable, from get_files_integrations. */
    // @ApiMember(Description="Files integration id to enable, from get_files_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<EnableFilesIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableFilesIntegrationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets integration by specified Id */
// @Route("/{version}/files/integrations/{id}", "GET")
// @Api(Description="Gets integration by specified Id")
export class GetFilesIntegration extends CodeMashRequestBase implements IReturn<GetFilesIntegrationResponse>
{
    /** @description Files integration id to fetch, from get_files_integrations. */
    // @ApiMember(Description="Files integration id to fetch, from get_files_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetFilesIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetFilesIntegration'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetFilesIntegrationResponse(); }
}

/** @description Gets integrations */
// @Route("/{version}/files/integrations", "GET")
// @Api(Description="Gets integrations")
export class GetFilesIntegrations extends CodeMashListPaginationRequestBase implements IReturn<GetFilesIntegrationsResponse>
{

    public constructor(init?: Partial<GetFilesIntegrations>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetFilesIntegrations'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetFilesIntegrationsResponse(); }
}

// @Route("/{version}/files/integrations", "POST")
// @DataContract
export class SaveFilesIntegration extends CodeMashRequestBase implements IReturn<IdResponse>
{
    // @DataMember(Name="integration")
    public integration: FilesIntegrationRequest;

    public constructor(init?: Partial<SaveFilesIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveFilesIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/files/integrations/{Id}/default", "PUT")
export class SetFilesIntegrationAsDefaultRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Files integration id to set as default, from get_files_integrations. */
    // @ApiMember(Description="Files integration id to set as default, from get_files_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<SetFilesIntegrationAsDefaultRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SetFilesIntegrationAsDefaultRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/files/integrations/test", "POST")
export class TestFilesIntegration extends CodeMashRequestBase implements IReturn<TestFilesIntegrationResponse>
{
    /** @description Integration id, from get_files_integrations. */
    // @ApiMember(Description="Integration id, from get_files_integrations.", IsRequired=true)
    public integrationId: string;

    public constructor(init?: Partial<TestFilesIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'TestFilesIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new TestFilesIntegrationResponse(); }
}

// @Route("/{version}/files/item", "GET")
export class GetFile extends CodeMashRequestBase implements IReturn<GetFileResponse>
{
    /** @description The files integration id to read from, from get_files_integrations. */
    // @ApiMember(Description="The files integration id to read from, from get_files_integrations.", IsRequired=true)
    public filesIntegrationId: string;

    /** @description The path of the file to fetch metadata for. */
    // @ApiMember(Description="The path of the file to fetch metadata for.", IsRequired=true)
    public path: string;

    public constructor(init?: Partial<GetFile>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetFile'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetFileResponse(); }
}

// @Route("/{version}/files/folder", "GET")
export class GetFolderFiles extends CodeMashListPaginationRequestBase implements IReturn<GetFolderFilesResponse>
{
    /** @description The files integration id to list from, from get_files_integrations. */
    // @ApiMember(Description="The files integration id to list from, from get_files_integrations.", IsRequired=true)
    public filesIntegrationId: string;

    /** @description Path prefix to list. Empty / null lists the root. */
    // @ApiMember(Description="Path prefix to list. Empty / null lists the root.")
    public path?: string;

    public constructor(init?: Partial<GetFolderFiles>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetFolderFiles'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetFolderFilesResponse(); }
}

export class FilesEstablished
{

    public constructor(init?: Partial<FilesEstablished>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'FilesEstablished'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class FilesEnabled
{

    public constructor(init?: Partial<FilesEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'FilesEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class FilesDisabled
{

    public constructor(init?: Partial<FilesDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'FilesDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class FilesIntegrationSaved
{
    public integration: FileIntegration;

    public constructor(init?: Partial<FilesIntegrationSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'FilesIntegrationSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class FilesIntegrationTested
{
    public id: IntegrationId;
    public succeeded: boolean;
    public errorMessages: IReadOnlyList<string>;
    public testedAtUtc: string;
    public env?: Env;

    public constructor(init?: Partial<FilesIntegrationTested>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'FilesIntegrationTested'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class FilesIntegrationRenamed
{
    public id: IntegrationId;
    public name: DisplayName;
    public env?: Env;

    public constructor(init?: Partial<FilesIntegrationRenamed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'FilesIntegrationRenamed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class FilesIntegrationDeleted
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<FilesIntegrationDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'FilesIntegrationDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class FilesIntegrationEnabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<FilesIntegrationEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'FilesIntegrationEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class FilesIntegrationDisabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<FilesIntegrationDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'FilesIntegrationDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class FilesIntegrationSetAsDefault
{
    public env: Env;
    public id: IntegrationId;

    public constructor(init?: Partial<FilesIntegrationSetAsDefault>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'FilesIntegrationSetAsDefault'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class FilesTriggerSaved
{
    public trigger: FileTrigger;

    public constructor(init?: Partial<FilesTriggerSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'FilesTriggerSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class FilesTriggerMirrored
{
    public trigger: Trigger;

    public constructor(init?: Partial<FilesTriggerMirrored>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'FilesTriggerMirrored'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class FilesTriggerEnabled extends TriggerByIdEventBase
{
    public env: Env;

    public constructor(init?: Partial<FilesTriggerEnabled>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'FilesTriggerEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class FilesTriggerDisabled extends TriggerByIdEventBase
{
    public env: Env;

    public constructor(init?: Partial<FilesTriggerDisabled>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'FilesTriggerDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class FilesTriggerDeleted extends TriggerByIdEventBase
{
    public env: Env;

    public constructor(init?: Partial<FilesTriggerDeleted>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'FilesTriggerDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class FileUploaded
{
    public projectId: ProjectId;
    public integrationId: IntegrationId;
    public fileRef: FileResourceRef;

    public constructor(init?: Partial<FileUploaded>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'FileUploaded'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class FileDeleted
{
    public projectId: ProjectId;
    public integrationId: IntegrationId;
    public path: string;

    public constructor(init?: Partial<FileDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'FileDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

/** @description Disable email service */
// @Route("/{version}/notifications/email/disable", "GET")
// @Api(Description="Disable email service")
export class DisableEmail extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DisableEmail>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableEmail'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Get email disable dependencies */
// @Route("/{version}/notifications/email/disable-dependencies", "GET")
// @Api(Description="Get email disable dependencies")
export class GetEmailDisableDependencies extends CodeMashRequestBase implements IReturn<GetNotificationModuleDisableDependenciesResponse>
{

    public constructor(init?: Partial<GetEmailDisableDependencies>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEmailDisableDependencies'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetNotificationModuleDisableDependenciesResponse(); }
}

/** @description Enable email service */
// @Route("/{version}/notifications/email/enable", "GET")
// @Api(Description="Enable email service")
export class EnableEmail extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<EnableEmail>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableEmail'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/notifications/email/validation/integrations", "POST")
// @DataContract
export class SaveEmailValidationIntegration extends CodeMashRequestBase implements IReturn<IdResponse>
{
    // @DataMember(Name="integration")
    public integration: EmailValidationIntegrationRequest;

    public constructor(init?: Partial<SaveEmailValidationIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveEmailValidationIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/notifications/email/validation/integrations/test", "POST")
export class TestEmailValidationIntegration extends CodeMashRequestBase implements IReturn<TestEmailValidationIntegrationResponse>
{
    public integrationId: string;

    public constructor(init?: Partial<TestEmailValidationIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'TestEmailValidationIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new TestEmailValidationIntegrationResponse(); }
}

/** @description Attach a file to an email template */
// @Route("/{version}/notifications/email/templates/attachments", "POST")
// @Api(Description="Attach a file to an email template")
export class AttachFileToTemplateRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Optional language code to scope the attachment to a single translation. Omit to attach at the template level. */
    // @ApiMember(Description="Optional language code to scope the attachment to a single translation. Omit to attach at the template level.")
    public language?: string;

    /** @description The email template id to attach the file to. Get it from get_email_templates. */
    // @ApiMember(Description="The email template id to attach the file to. Get it from get_email_templates.", IsRequired=true)
    public templateId: string;

    /** @description The file resource reference to attach (from a prior file upload). */
    // @ApiMember(Description="The file resource reference to attach (from a prior file upload).", IsRequired=true)
    public fileRef: FileResourceRefDto;

    public constructor(init?: Partial<AttachFileToTemplateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AttachFileToTemplateRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Create an email template */
// @Route("/{version}/notifications/email/templates", "POST")
// @Api(Description="Create an email template")
export class CreateEmailTemplateRequest extends SaveEmailTemplate implements IReturn<IdResponse>
{

    public constructor(init?: Partial<CreateEmailTemplateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateEmailTemplateRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Delete an email template */
// @Route("/{version}/notifications/email/templates/{Id}", "DELETE")
// @Api(Description="Delete an email template")
export class DeleteEmailTemplateRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The email template id to delete. Get it from get_email_templates. */
    // @ApiMember(Description="The email template id to delete. Get it from get_email_templates.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DeleteEmailTemplateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteEmailTemplateRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Get an email template */
// @Route("/{version}/notifications/email/templates/{id}", "GET")
// @Api(Description="Get an email template")
export class GetEmailTemplate extends CodeMashRequestBase implements IReturn<GetEmailTemplateResponse>
{
    /** @description The email template id to fetch. Get it from get_email_templates. */
    // @ApiMember(Description="The email template id to fetch. Get it from get_email_templates.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetEmailTemplate>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEmailTemplate'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetEmailTemplateResponse(); }
}

/** @description Gets email templates */
// @Route("/{version}/notifications/email/templates", "GET")
// @Api(Description="Gets email templates")
export class GetEmailTemplates extends CodeMashListPaginationRequestBase implements IReturn<GetEmailTemplatesResponse>
{
    /** @description Set true to include archived templates. */
    // @ApiMember(Description="Set true to include archived templates.")
    public showArchived?: boolean;

    /** @description Optional: return only the template with this id. */
    // @ApiMember(Description="Optional: return only the template with this id.")
    public templateId?: string;

    public constructor(init?: Partial<GetEmailTemplates>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEmailTemplates'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetEmailTemplatesResponse(); }
}

/** @description Render MJML email template */
// @Route("/{version}/notifications/email/templates/mjml", "POST")
// @Api(Description="Render MJML email template")
export class GetMjml extends CodeMashRequestBase implements IReturn<GetHtmlFromMjmlResponse>
{
    /** @description The MJML/Razor template source code to render. */
    // @ApiMember(Description="The MJML/Razor template source code to render.", IsRequired=true)
    public code: string;

    /** @description Optional token values to bind into the template while rendering. */
    // @ApiMember(Description="Optional token values to bind into the template while rendering.")
    public tokens?: TokenMappingDto[];

    /** @description Set true when rendering for a preview (vs. a final save), to affect how missing tokens are handled. */
    // @ApiMember(Description="Set true when rendering for a preview (vs. a final save), to affect how missing tokens are handled.")
    public isForPreview: boolean;

    public constructor(init?: Partial<GetMjml>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMjml'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetHtmlFromMjmlResponse(); }
}

/** @description Get a system email template */
// @Route("/{version}/notifications/email/system-templates/{id}", "GET")
// @Api(Description="Get a system email template")
export class GetSystemEmailTemplate extends CodeMashRequestBase implements IReturn<GetSystemEmailTemplateResponse>
{
    /** @description The system email template id to fetch. Get it from get_system_email_templates. */
    // @ApiMember(Description="The system email template id to fetch. Get it from get_system_email_templates.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetSystemEmailTemplate>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSystemEmailTemplate'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSystemEmailTemplateResponse(); }
}

/** @description Get system email templates */
// @Route("/{version}/notifications/email/system-templates", "GET")
// @Api(Description="Get system email templates")
export class GetSystemEmailTemplates extends CodeMashListPaginationRequestBase implements IReturn<GetSystemEmailTemplatesResponse>
{
    /** @description Optional group tags to filter templates by (e.g. newsletter, onboarding). */
    // @ApiMember(Description="Optional group tags to filter templates by (e.g. newsletter, onboarding).")
    public groupTags?: string[];

    /** @description Optional visual themes to filter templates by. */
    // @ApiMember(Description="Optional visual themes to filter templates by.")
    public themes?: string[];

    /** @description Optional communication channel to filter templates by (e.g. Transactional, Marketing). */
    // @ApiMember(Description="Optional communication channel to filter templates by (e.g. Transactional, Marketing).")
    public communicationChannel?: CommunicationChannel;

    /** @description Optional trigger type to filter templates that are designed for a specific automated trigger. */
    // @ApiMember(Description="Optional trigger type to filter templates that are designed for a specific automated trigger.")
    public forTrigger?: TriggerType;

    public constructor(init?: Partial<GetSystemEmailTemplates>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSystemEmailTemplates'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSystemEmailTemplatesResponse(); }
}

/** @description Gets the tokens used by an email template */
// @Route("/{version}/notifications/email/templates/{id}/tokens", "GET")
// @Api(Description="Gets the tokens used by an email template")
export class GetEmailTemplateAvailableTokens extends CodeMashRequestBase implements IReturn<GetEmailTemplateAvailableTokensResponse>
{
    /** @description Template id from get_email_templates. */
    // @ApiMember(Description="Template id from get_email_templates.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetEmailTemplateAvailableTokens>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEmailTemplateAvailableTokens'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetEmailTemplateAvailableTokensResponse(); }
}

/** @description Update an email template */
// @Route("/{version}/notifications/email/templates", "PUT")
// @Api(Description="Update an email template")
export class UpdateEmailTemplateRequest extends SaveEmailTemplate implements IReturn<EmptyResponse>
{
    /** @description The email template id to update. Get it from get_email_templates. */
    // @ApiMember(Description="The email template id to update. Get it from get_email_templates.", IsRequired=true)
    public viewId: string;

    public constructor(init?: Partial<UpdateEmailTemplateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateEmailTemplateRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Delete an email signature */
// @Route("/{version}/notifications/email/signatures/{id}", "DELETE")
// @Api(Description="Delete an email signature")
export class DeleteEmailSignature extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The email signature id to delete. Get it from get_email_signatures. */
    // @ApiMember(Description="The email signature id to delete. Get it from get_email_signatures.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DeleteEmailSignature>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteEmailSignature'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Get an email signature */
// @Route("/{version}/notifications/email/signatures/{id}", "GET")
// @Api(Description="Get an email signature")
export class GetEmailSignature extends CodeMashRequestBase implements IReturn<GetEmailSignatureResponse>
{
    /** @description The email signature id to fetch. Get it from get_email_signatures. */
    // @ApiMember(Description="The email signature id to fetch. Get it from get_email_signatures.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetEmailSignature>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEmailSignature'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetEmailSignatureResponse(); }
}

/** @description Get email signatures */
// @Route("/{version}/notifications/email/signatures", "GET")
// @Api(Description="Get email signatures")
export class GetEmailSignatures extends CodeMashListPaginationRequestBase implements IReturn<GetEmailSignaturesResponse>
{

    public constructor(init?: Partial<GetEmailSignatures>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEmailSignatures'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetEmailSignaturesResponse(); }
}

/** @description Save an email signature */
// @Route("/{version}/notifications/email/signatures", "POST")
// @Api(Description="Save an email signature")
export class SaveEmailSignatureRequest extends CodeMashRequestBase implements IReturn<IdResponse>
{
    /** @description The signature id to update. Omit to create a new signature. Get it from get_email_signatures. */
    // @ApiMember(Description="The signature id to update. Omit to create a new signature. Get it from get_email_signatures.")
    public viewId?: string;

    /** @description The display name of the signature. */
    // @ApiMember(Description="The display name of the signature.", IsRequired=true)
    public displayName: string;

    /** @description The per-language content translations for this signature. */
    // @ApiMember(Description="The per-language content translations for this signature.", IsRequired=true)
    public translations: TranslationDto[] = [];

    public constructor(init?: Partial<SaveEmailSignatureRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveEmailSignatureRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Get email settings */
// @Route("/{version}/notifications/email/settings", "GET")
// @Api(Description="Get email settings")
export class GetEmailSettings extends CodeMashRequestBase implements IReturn<GetEmailSettingsResponse>
{
    /** @description Unused legacy field; leave empty. */
    // @ApiMember(Description="Unused legacy field; leave empty.")
    public id: string;

    public constructor(init?: Partial<GetEmailSettings>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEmailSettings'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetEmailSettingsResponse(); }
}

/** @description Confirm human delivery of a test email */
// @Route("/{version}/notifications/email/integrations/confirm-human-delivery", "POST")
// @Api(Description="Confirm human delivery of a test email")
// @DataContract
export class ConfirmEmailIntegrationHumanDeliveryRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The email integration id the test delivery was confirmed for. Get it from get_email_integrations. */
    // @DataMember
    // @ApiMember(Description="The email integration id the test delivery was confirmed for. Get it from get_email_integrations.", IsRequired=true)
    public integrationId: string;

    public constructor(init?: Partial<ConfirmEmailIntegrationHumanDeliveryRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ConfirmEmailIntegrationHumanDeliveryRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Delete an email integration */
// @Route("/{version}/notifications/email/integrations/{Id}", "DELETE")
// @Api(Description="Delete an email integration")
export class DeleteEmailIntegration extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The email integration id to delete. Get it from get_email_integrations. */
    // @ApiMember(Description="The email integration id to delete. Get it from get_email_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DeleteEmailIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteEmailIntegration'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Disable an email integration */
// @Route("/{version}/notifications/email/integrations/{Id}/disable", "PUT")
// @Api(Description="Disable an email integration")
export class DisableEmailIntegration extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The email integration id to disable. Get it from get_email_integrations. */
    // @ApiMember(Description="The email integration id to disable. Get it from get_email_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DisableEmailIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableEmailIntegration'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Check email integration domain health */
// @Route("/{version}/notifications/email/integrations/domain-health", "POST")
// @Api(Description="Check email integration domain health")
// @DataContract
export class CheckEmailIntegrationDomainHealthRequest extends CodeMashRequestBase implements IReturn<CheckEmailIntegrationDomainHealthResponse>
{
    /** @description The email integration id to check DNS health for. Get it from get_email_integrations. */
    // @DataMember
    // @ApiMember(Description="The email integration id to check DNS health for. Get it from get_email_integrations.", IsRequired=true)
    public integrationId: string;

    public constructor(init?: Partial<CheckEmailIntegrationDomainHealthRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CheckEmailIntegrationDomainHealthRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CheckEmailIntegrationDomainHealthResponse(); }
}

/** @description Enable an email integration */
// @Route("/{version}/notifications/email/integrations/{Id}/enable", "PUT")
// @Api(Description="Enable an email integration")
export class EnableEmailIntegration extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The email integration id to enable. Get it from get_email_integrations. */
    // @ApiMember(Description="The email integration id to enable. Get it from get_email_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<EnableEmailIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableEmailIntegration'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Get an email integration */
// @Route("/{version}/notifications/email/integrations/{id}", "GET")
// @Api(Description="Get an email integration")
export class GetEmailIntegration extends CodeMashRequestBase implements IReturn<GetEmailIntegrationResponse>
{
    /** @description The email integration id to fetch. Get it from get_email_integrations. */
    // @ApiMember(Description="The email integration id to fetch. Get it from get_email_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetEmailIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEmailIntegration'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetEmailIntegrationResponse(); }
}

/** @description Gets email integrations */
// @Route("/{version}/notifications/email/integrations", "GET")
// @Api(Description="Gets email integrations")
export class GetEmailIntegrations extends CodeMashListPaginationRequestBase implements IReturn<GetEmailIntegrationsResponse>
{

    public constructor(init?: Partial<GetEmailIntegrations>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEmailIntegrations'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetEmailIntegrationsResponse(); }
}

// @Route("/{version}/notifications/email/integrations", "POST")
// @DataContract
export class SaveEmailIntegration extends CodeMashRequestBase implements IReturn<IdResponse>
{
    // @DataMember(Name="integration")
    public integration: EmailIntegrationRequest;

    public constructor(init?: Partial<SaveEmailIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveEmailIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Set an email integration as default */
// @Route("/{version}/notifications/email/integrations/{Id}/default", "PUT")
// @Api(Description="Set an email integration as default")
export class SetEmailsIntegrationAsDefault extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The email integration id to set as default. Get it from get_email_integrations. */
    // @ApiMember(Description="The email integration id to set as default. Get it from get_email_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<SetEmailsIntegrationAsDefault>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SetEmailsIntegrationAsDefault'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Test an email integration */
// @Route("/{version}/notifications/email/integrations/test", "POST")
// @Api(Description="Test an email integration")
export class TestEmailIntegration extends CodeMashRequestBase implements IReturn<TestEmailIntegrationResponse>
{
    /** @description The email integration id to test. Get it from get_email_integrations. */
    // @ApiMember(Description="The email integration id to test. Get it from get_email_integrations.", IsRequired=true)
    public integrationId: string;

    /** @description The recipient email address to send the test email to. */
    // @ApiMember(Description="The recipient email address to send the test email to.", IsRequired=true)
    public to: string;

    public constructor(init?: Partial<TestEmailIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'TestEmailIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new TestEmailIntegrationResponse(); }
}

/** @description Archive an email template */
// @Route("/{version}/notifications/email/templates/{Id}/archive", "PUT")
// @Api(Description="Archive an email template")
export class ArchiveEmailTemplateRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The email template id to archive. Get it from get_email_templates. */
    // @ApiMember(Description="The email template id to archive. Get it from get_email_templates.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<ArchiveEmailTemplateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ArchiveEmailTemplateRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Clone an email template */
// @Route("/{version}/notifications/email/templates/{Id}/clone", "POST")
// @Api(Description="Clone an email template")
export class CloneEmailTemplateRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The email template id to clone. Get it from get_email_templates. */
    // @ApiMember(Description="The email template id to clone. Get it from get_email_templates.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<CloneEmailTemplateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CloneEmailTemplateRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Un-archive an email template */
// @Route("/{version}/notifications/email/templates/{Id}/unarchive", "PUT")
// @Api(Description="Un-archive an email template")
export class UnArchiveEmailTemplateRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The email template id to unarchive. Get it from get_email_templates. */
    // @ApiMember(Description="The email template id to unarchive. Get it from get_email_templates.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<UnArchiveEmailTemplateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UnArchiveEmailTemplateRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Delete an email footer */
// @Route("/{version}/notifications/email/footers/{id}", "DELETE")
// @Api(Description="Delete an email footer")
export class DeleteEmailFooter extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The email footer id to delete. Get it from get_email_footers. */
    // @ApiMember(Description="The email footer id to delete. Get it from get_email_footers.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DeleteEmailFooter>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteEmailFooter'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Get an email footer */
// @Route("/{version}/notifications/email/footers/{id}", "GET")
// @Api(Description="Get an email footer")
export class GetEmailFooter extends CodeMashRequestBase implements IReturn<GetEmailFooterResponse>
{
    /** @description The email footer id to fetch. Get it from get_email_footers. */
    // @ApiMember(Description="The email footer id to fetch. Get it from get_email_footers.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetEmailFooter>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEmailFooter'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetEmailFooterResponse(); }
}

/** @description Get email footers */
// @Route("/{version}/notifications/email/footers", "GET")
// @Api(Description="Get email footers")
export class GetEmailFooters extends CodeMashListPaginationRequestBase implements IReturn<GetEmailFootersResponse>
{

    public constructor(init?: Partial<GetEmailFooters>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEmailFooters'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetEmailFootersResponse(); }
}

/** @description Save an email footer */
// @Route("/{version}/notifications/email/footers", "POST")
// @Api(Description="Save an email footer")
export class SaveEmailFooterRequest extends CodeMashRequestBase implements IReturn<IdResponse>
{
    /** @description The footer id to update. Omit to create a new footer. Get it from get_email_footers. */
    // @ApiMember(Description="The footer id to update. Omit to create a new footer. Get it from get_email_footers.")
    public viewId?: string;

    /** @description The display name of the footer. */
    // @ApiMember(Description="The display name of the footer.", IsRequired=true)
    public displayName: string;

    /** @description The per-language content translations for this footer. */
    // @ApiMember(Description="The per-language content translations for this footer.", IsRequired=true)
    public translations: TranslationDto[] = [];

    public constructor(init?: Partial<SaveEmailFooterRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveEmailFooterRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description This endpoint implements the RFC 8058 one-click unsubscribe flow used by mailbox providers. */
// @Route("/{version}/email/one-click-unsubscribe", "POST")
// @Api(Description="This endpoint implements the RFC 8058 one-click unsubscribe flow used by mailbox providers.")
// @DataContract
export class OneClickUnsubscribeRequest extends RequestBase implements IReturn<EmptyResponse>
{
    /** @description Encrypted unsubscribe token. The campaign batcher embedded this value in the List-Unsubscribe header. */
    // @DataMember
    // @ApiMember(Description="Encrypted unsubscribe token. The campaign batcher embedded this value in the List-Unsubscribe header.", IsRequired=true, Name="token", ParameterType="query")
    public token: string;

    public constructor(init?: Partial<OneClickUnsubscribeRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'OneClickUnsubscribeRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Create email campaign */
// @Route("/{version}/notifications/email/campaigns", "POST")
// @Api(Description="Create email campaign")
// @DataContract
export class CreateEmailCampaignRequest extends CodeMashRequestBase implements IReturn<IdResponse>
{
    // @DataMember
    public campaign: EmailCampaignRequest;

    // @DataMember
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<CreateEmailCampaignRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateEmailCampaignRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Deletes emails campaign from queue */
// @Route("/{version}/notifications/email/campaigns/{Id}", "DELETE")
// @Api(Description="Deletes emails campaign from queue")
// @DataContract
export class DeleteEmailCampaignRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DeleteEmailCampaignRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteEmailCampaignRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets email campaign by id */
// @Route("/{version}/notifications/email/campaigns/{id}", "GET")
// @Api(Description="Gets email campaign by id")
export class GetEmailCampaign extends CodeMashRequestBase implements IReturn<GetEmailCampaignResponse>
{
    /** @description The campaign id. */
    // @ApiMember(Description="The campaign id.")
    public id: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetEmailCampaign>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEmailCampaign'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetEmailCampaignResponse(); }
}

/** @description Gets email campaigns */
// @Route("/{version}/notifications/email/campaigns", "GET")
// @Api(Description="Gets email campaigns")
export class GetEmailCampaigns extends CodeMashListPaginationRequestBase implements IReturn<GetEmailCampaignsResponse>
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

    public constructor(init?: Partial<GetEmailCampaigns>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEmailCampaigns'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetEmailCampaignsResponse(); }
}

/** @description Get email campaign batches */
// @Route("/{version}/notifications/email/campaigns/{id}/batches", "GET")
// @Api(Description="Get email campaign batches")
export class GetEmailCampaignBatches extends CodeMashListPaginationRequestBase implements IReturn<GetEmailCampaignBatchesResponse>
{
    /** @description The email campaign id to list batches for. Get it from get_all_email_campaigns. */
    // @ApiMember(Description="The email campaign id to list batches for. Get it from get_all_email_campaigns.", IsRequired=true)
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

    public constructor(init?: Partial<GetEmailCampaignBatches>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEmailCampaignBatches'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetEmailCampaignBatchesResponse(); }
}

/** @description Get an email campaign batch notification */
// @Route("/{version}/notifications/email/campaigns/{id}/batches/{batchId}/{notificationId}", "GET")
// @Api(Description="Get an email campaign batch notification")
export class GetEmailCampaignBatchNotification extends CodeMashListPaginationRequestBase implements IReturn<GetEmailCampaignBatchNotificationResponse>
{
    /** @description The email campaign id. Get it from get_all_email_campaigns. */
    // @ApiMember(Description="The email campaign id. Get it from get_all_email_campaigns.", IsRequired=true)
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

    public constructor(init?: Partial<GetEmailCampaignBatchNotification>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEmailCampaignBatchNotification'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetEmailCampaignBatchNotificationResponse(); }
}

/** @description Get email campaign batch notifications */
// @Route("/{version}/notifications/email/campaigns/{id}/batches/{batchId}", "GET")
// @Api(Description="Get email campaign batch notifications")
export class GetEmailCampaignBatchNotifications extends CodeMashListPaginationRequestBase implements IReturn<GetEmailCampaignBatchNotificationsResponse>
{
    /** @description The email campaign id. Get it from get_all_email_campaigns. */
    // @ApiMember(Description="The email campaign id. Get it from get_all_email_campaigns.", IsRequired=true)
    public id: string;

    /** @description The campaign batch id to list notifications for. Get it from get_email_campaign_batches. */
    // @ApiMember(Description="The campaign batch id to list notifications for. Get it from get_email_campaign_batches.", IsRequired=true)
    public batchId: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetEmailCampaignBatchNotifications>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEmailCampaignBatchNotifications'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetEmailCampaignBatchNotificationsResponse(); }
}

/** @description Get email campaign statistics */
// @Route("/{version}/notifications/email/campaigns/{id}/stats", "GET")
// @Api(Description="Get email campaign statistics")
export class GetEmailCampaignStatistics extends CodeMashRequestBase implements IReturn<GetEmailCampaignStatisticsResponse>
{
    /** @description The email campaign id to get statistics for. Get it from get_all_email_campaigns. */
    // @ApiMember(Description="The email campaign id to get statistics for. Get it from get_all_email_campaigns.", IsRequired=true)
    public id: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetEmailCampaignStatistics>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEmailCampaignStatistics'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetEmailCampaignStatisticsResponse(); }
}

/** @description Preview an email notification */
// @Route("/{version}/notifications/email/preview", "GET")
// @Api(Description="Preview an email notification")
export class PreviewEmailNotification extends RequestBase implements IReturn<PreviewEmailNotificationResponse>
{
    /** @description The opaque, pre-signed preview hash identifying the project and notification to preview. */
    // @ApiMember(Description="The opaque, pre-signed preview hash identifying the project and notification to preview.", IsRequired=true)
    public hash: string;

    public constructor(init?: Partial<PreviewEmailNotification>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'PreviewEmailNotification'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new PreviewEmailNotificationResponse(); }
}

/** @description Stops a running email campaign */
// @Route("/{version}/notifications/email/campaigns/{Id}/stop", "POST")
// @Api(Description="Stops a running email campaign")
// @DataContract
export class StopEmailCampaignRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The campaign id to stop. */
    // @DataMember
    // @ApiMember(Description="The campaign id to stop.")
    public id: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @DataMember
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<StopEmailCampaignRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'StopEmailCampaignRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Get an email campaign message */
// @Route("/{version}/notifications/emails/campaigns/{campaignId}/messages/{id}", "GET")
// @Api(Description="Get an email campaign message")
export class GetEmailCampaignMessage extends CodeMashRequestBase implements IReturn<GetEmailCampaignMessageResponse>
{
    /** @description The email campaign id. Get it from get_all_email_campaigns. */
    // @ApiMember(Description="The email campaign id. Get it from get_all_email_campaigns.", IsRequired=true)
    public campaignId: string;

    /** @description The campaign batch id. Get it from get_email_campaign_batches. */
    // @ApiMember(Description="The campaign batch id. Get it from get_email_campaign_batches.", IsRequired=true)
    public campaignBatchId: string;

    /** @description The notification (message) id to fetch. Get it from get_email_campaign_messages. */
    // @ApiMember(Description="The notification (message) id to fetch. Get it from get_email_campaign_messages.", IsRequired=true)
    public notificationId: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetEmailCampaignMessage>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEmailCampaignMessage'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetEmailCampaignMessageResponse(); }
}

/** @description Get email campaign messages */
// @Route("/{version}/notifications/emails/campaigns/{campaignId}/messages", "GET")
// @Api(Description="Get email campaign messages")
export class GetEmailCampaignMessagesRequest extends CodeMashListPaginationRequestBase implements IReturn<GetEmailCampaignMessagesResponse>
{
    /** @description The email campaign id. Get it from get_all_email_campaigns. */
    // @ApiMember(Description="The email campaign id. Get it from get_all_email_campaigns.", IsRequired=true)
    public campaignId: string;

    /** @description The campaign batch id to list messages for. Get it from get_email_campaign_batches. */
    // @ApiMember(Description="The campaign batch id to list messages for. Get it from get_email_campaign_batches.", IsRequired=true)
    public campaignBatchId: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetEmailCampaignMessagesRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetEmailCampaignMessagesRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetEmailCampaignMessagesResponse(); }
}

export class EmailServiceEstablished
{

    public constructor(init?: Partial<EmailServiceEstablished>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailServiceEstablished'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class ProjectDatabaseConnected
{
    public env: Env;

    public constructor(init?: Partial<ProjectDatabaseConnected>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ProjectDatabaseConnected'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailServiceEnabled
{

    public constructor(init?: Partial<EmailServiceEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailServiceEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailServiceDisabled
{

    public constructor(init?: Partial<EmailServiceDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailServiceDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailFooterSaved
{
    public id: EmailFooterId;
    public name: DisplayName;
    public translations: MessageTranslation<TemplateCode>[] = [];
    public env?: Env;

    public constructor(init?: Partial<EmailFooterSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailFooterSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailFooterMirrored
{
    public footer: EmailFooter;

    public constructor(init?: Partial<EmailFooterMirrored>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailFooterMirrored'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailFooterDeleted
{
    public id: EmailFooterId;
    public env?: Env;

    public constructor(init?: Partial<EmailFooterDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailFooterDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailIntegrationSaved
{
    public integration: EmailIntegration;

    public constructor(init?: Partial<EmailIntegrationSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailIntegrationSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailIntegrationTested
{
    public id: IntegrationId;
    public succeeded: boolean;
    public errorMessages: IReadOnlyList<string>;
    public testedAtUtc: string;
    public env?: Env;

    public constructor(init?: Partial<EmailIntegrationTested>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailIntegrationTested'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailIntegrationHumanDeliveryConfirmed
{
    public id: IntegrationId;
    public confirmedAtUtc: string;

    public constructor(init?: Partial<EmailIntegrationHumanDeliveryConfirmed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailIntegrationHumanDeliveryConfirmed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailIntegrationRenamed
{
    public id: IntegrationId;
    public name: DisplayName;
    public env?: Env;

    public constructor(init?: Partial<EmailIntegrationRenamed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailIntegrationRenamed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailIntegrationSetAsDefault
{
    public env: Env;
    public id: IntegrationId;

    public constructor(init?: Partial<EmailIntegrationSetAsDefault>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailIntegrationSetAsDefault'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailIntegrationDeleted
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<EmailIntegrationDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailIntegrationDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailIntegrationEnabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<EmailIntegrationEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailIntegrationEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailIntegrationDisabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<EmailIntegrationDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailIntegrationDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailSignatureSaved
{
    public id: EmailSignatureId;
    public name: DisplayName;
    public translations: MessageTranslation<TemplateCode>[] = [];
    public env?: Env;

    public constructor(init?: Partial<EmailSignatureSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailSignatureSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailSignatureMirrored
{
    public signature: EmailSignature;

    public constructor(init?: Partial<EmailSignatureMirrored>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailSignatureMirrored'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailSignatureDeleted
{
    public id: EmailSignatureId;
    public env?: Env;

    public constructor(init?: Partial<EmailSignatureDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailSignatureDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailTemplateCreated
{
    public templateId: TemplateId;
    public displayName: DisplayName;
    public translations: MessageTranslation<EmailMessageContent>[] = [];
    public channel: CommunicationChannel;
    public description?: string;
    public tags?: Tag[];
    public languageAgnosticAttachments?: FileResourceRef[];
    public env?: Env;

    public constructor(init?: Partial<EmailTemplateCreated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailTemplateCreated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailTemplateUpdated
{
    public templateId: TemplateId;
    public displayName: DisplayName;
    public translations: MessageTranslation<EmailMessageContent>[] = [];
    public channel: CommunicationChannel;
    public description?: string;
    public tags?: Tag[];
    public languageAgnosticAttachments?: FileResourceRef[];
    public attachmentsToBeDeleted?: FileResourceRef[];
    public env?: Env;

    public constructor(init?: Partial<EmailTemplateUpdated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailTemplateUpdated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailTemplateMirrored
{
    public template: EmailTemplate;

    public constructor(init?: Partial<EmailTemplateMirrored>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailTemplateMirrored'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailTemplateBackfilled
{
    public template: EmailTemplate;

    public constructor(init?: Partial<EmailTemplateBackfilled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailTemplateBackfilled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailTemplateDeleted
{
    public templateId: TemplateId;
    public filesToBeDeleted?: FileResourceRef[];
    public fileIntegrationId?: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<EmailTemplateDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailTemplateDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailTemplateArchived
{
    public templateId: TemplateId;
    public env?: Env;

    public constructor(init?: Partial<EmailTemplateArchived>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailTemplateArchived'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailTemplateUnArchived
{
    public templateId: TemplateId;
    public env?: Env;

    public constructor(init?: Partial<EmailTemplateUnArchived>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailTemplateUnArchived'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailValidationIntegrationSaved
{
    public integration: EmailValidationIntegration;

    public constructor(init?: Partial<EmailValidationIntegrationSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailValidationIntegrationSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailValidationIntegrationDeleted
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<EmailValidationIntegrationDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailValidationIntegrationDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailValidationIntegrationSecretsConfigured
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<EmailValidationIntegrationSecretsConfigured>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailValidationIntegrationSecretsConfigured'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailValidationIntegrationSecretsConfigurationFailed
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<EmailValidationIntegrationSecretsConfigurationFailed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailValidationIntegrationSecretsConfigurationFailed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailValidationIntegrationTested
{
    public id: IntegrationId;
    public succeeded: boolean;
    public errorMessages: IReadOnlyList<string>;
    public testedAtUtc: string;
    public env?: Env;

    public constructor(init?: Partial<EmailValidationIntegrationTested>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailValidationIntegrationTested'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailBatchRegistered
{
    public projectId: ProjectId;
    public campaignId: CampaignId;
    public campaignBatchId: CampaignBatchId;
    public startingAfter?: string;

    public constructor(init?: Partial<EmailBatchRegistered>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailBatchRegistered'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailNotificationRead
{
    public projectId: ProjectId;
    public campaignId: CampaignId;
    public campaignBatchId: CampaignBatchId;
    public notificationId: NotificationId;

    public constructor(init?: Partial<EmailNotificationRead>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailNotificationRead'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailNotificationClicked
{
    public projectId: ProjectId;
    public campaignId: CampaignId;
    public campaignBatchId: CampaignBatchId;
    public notificationId: NotificationId;
    public sourceId?: string;

    public constructor(init?: Partial<EmailNotificationClicked>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailNotificationClicked'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailCampaignStarted
{
    public projectId: ProjectId;
    public campaignId: CampaignId;

    public constructor(init?: Partial<EmailCampaignStarted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailCampaignStarted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailCampaignStopped
{
    public projectId: ProjectId;
    public campaignId: CampaignId;
    public reason?: CampaignStopReason;

    public constructor(init?: Partial<EmailCampaignStopped>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailCampaignStopped'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailCampaignCompleted
{
    public projectId: ProjectId;
    public campaignId: CampaignId;
    public errors?: ErrorDto[];

    public constructor(init?: Partial<EmailCampaignCompleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailCampaignCompleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailCampaignFailed
{
    public projectId: ProjectId;
    public campaignId: CampaignId;
    public errors: ErrorDto[] = [];

    public constructor(init?: Partial<EmailCampaignFailed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailCampaignFailed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailCampaignTriggered
{
    public projectId: ProjectId;
    public triggerId: TriggerId;
    public triggerType: TriggerType;
    public sourceEvent: string;
    public schemaId?: string;
    public tokenMappings?: IReadOnlyDictionary<string, string>;

    public constructor(init?: Partial<EmailCampaignTriggered>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailCampaignTriggered'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class EmailDeliveryEventReceived
{
    public projectId: ProjectId;
    public integrationId: IntegrationId;
    public recipient: EmailAddress;
    public type: EmailDeliveryEventType;
    public occurredAt: string;
    public providerMessageId?: string;
    public reason?: string;

    public constructor(init?: Partial<EmailDeliveryEventReceived>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'EmailDeliveryEventReceived'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

/** @description Disable SMS service */
// @Route("/{version}/notifications/sms/disable", "GET")
// @Api(Description="Disable SMS service")
export class DisableSms extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DisableSms>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableSms'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Lists SMS-module dependencies shown before disable */
// @Route("/{version}/notifications/sms/disable-dependencies", "GET")
// @Api(Description="Lists SMS-module dependencies shown before disable")
export class GetSmsDisableDependencies extends CodeMashRequestBase implements IReturn<GetNotificationModuleDisableDependenciesResponse>
{

    public constructor(init?: Partial<GetSmsDisableDependencies>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSmsDisableDependencies'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetNotificationModuleDisableDependenciesResponse(); }
}

/** @description Enable SMS service */
// @Route("/{version}/notifications/sms/enable", "GET")
// @Api(Description="Enable SMS service")
export class EnableSms extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<EnableSms>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableSms'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Archives sms template */
// @Route("/{version}/notifications/sms/templates/{Id}/archive", "PUT")
// @Api(Description="Archives sms template")
export class ArchiveSmsTemplateRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The SMS template id to archive. Get it from get_sms_templates. */
    // @ApiMember(Description="The SMS template id to archive. Get it from get_sms_templates.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<ArchiveSmsTemplateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ArchiveSmsTemplateRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Clones sms template */
// @Route("/{version}/notifications/sms/templates/{Id}/clone", "POST")
// @Api(Description="Clones sms template")
export class CloneSmsTemplateRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The SMS template id to clone. Get it from get_sms_templates. */
    // @ApiMember(Description="The SMS template id to clone. Get it from get_sms_templates.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<CloneSmsTemplateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CloneSmsTemplateRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Create SMS template */
// @Route("/{version}/notifications/sms/templates", "POST")
// @Api(Description="Create SMS template")
export class CreateSmsTemplateRequest extends SaveSmsTemplate implements IReturn<IdResponse>
{

    public constructor(init?: Partial<CreateSmsTemplateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateSmsTemplateRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Delete Sms Template for particular project */
// @Route("/{version}/notifications/sms/templates/{Id}", "DELETE")
// @Api(Description="Delete Sms Template for particular project")
export class DeleteSmsTemplateRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The SMS template id to delete. Get it from get_sms_templates. */
    // @ApiMember(Description="The SMS template id to delete. Get it from get_sms_templates.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DeleteSmsTemplateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteSmsTemplateRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets sms template by id */
// @Route("/{version}/notifications/sms/templates/{id}", "GET")
// @Api(Description="Gets sms template by id")
export class GetSmsTemplate extends CodeMashRequestBase implements IReturn<GetSmsTemplateResponse>
{
    /** @description The SMS template id to fetch. Get it from get_sms_templates. */
    // @ApiMember(Description="The SMS template id to fetch. Get it from get_sms_templates.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetSmsTemplate>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSmsTemplate'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSmsTemplateResponse(); }
}

/** @description Gets sms templates */
// @Route("/{version}/notifications/sms/templates", "GET")
// @Api(Description="Gets sms templates")
export class GetSmsTemplates extends CodeMashListPaginationRequestBase implements IReturn<GetSmsTemplatesResponse>
{
    /** @description Set true to include archived templates. */
    // @ApiMember(Description="Set true to include archived templates.")
    public showArchived?: boolean;

    /** @description Optional: return only the template with this id. */
    // @ApiMember(Description="Optional: return only the template with this id.")
    public templateId?: string;

    public constructor(init?: Partial<GetSmsTemplates>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSmsTemplates'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSmsTemplatesResponse(); }
}

/** @description Goes through the Sms template and returns all the tokens that are used in the template translations */
// @Route("/{version}/notifications/sms/templates/{id}/tokens", "GET")
// @Api(Description="Goes through the Sms template and returns all the tokens that are used in the template translations")
export class GetSmsMessageContentTokens extends CodeMashRequestBase implements IReturn<GetSmsMessageContentTokensResponse>
{
    /** @description The SMS template id. Get it from get_sms_templates. */
    // @ApiMember(Description="The SMS template id. Get it from get_sms_templates.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetSmsMessageContentTokens>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSmsMessageContentTokens'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSmsMessageContentTokensResponse(); }
}

/** @description Runs the SMS Razor template, returns the bound text or the list of unresolved tokens. */
// @Route("/{version}/notifications/sms/templates/render", "POST")
// @Api(Description="Runs the SMS Razor template, returns the bound text or the list of unresolved tokens.")
export class RenderSms extends CodeMashRequestBase implements IReturn<RenderSmsTextResponse>
{
    /** @description The Razor SMS template code to render. */
    // @ApiMember(Description="The Razor SMS template code to render.")
    public code: string;

    /** @description Token name/value pairs to bind into the template. */
    // @ApiMember(Description="Token name/value pairs to bind into the template.")
    public tokens?: TokenMappingDto[];

    /** @description Set true when rendering for a preview (relaxes some validation). */
    // @ApiMember(Description="Set true when rendering for a preview (relaxes some validation).")
    public isForPreview: boolean;

    public constructor(init?: Partial<RenderSms>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RenderSms'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new RenderSmsTextResponse(); }
}

/** @description Un-archives sms template */
// @Route("/{version}/notifications/sms/templates/{Id}/unarchive", "PUT")
// @Api(Description="Un-archives sms template")
export class UnArchiveSmsTemplateRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The SMS template id to unarchive. */
    // @ApiMember(Description="The SMS template id to unarchive.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<UnArchiveSmsTemplateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UnArchiveSmsTemplateRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Edit sms template */
// @Route("/{version}/notifications/sms/templates", "PUT")
// @Api(Description="Edit sms template")
export class UpdateSmsTemplateRequest extends SaveSmsTemplate implements IReturn<EmptyResponse>
{
    /** @description The SMS template id to update. Get it from get_sms_templates. */
    // @ApiMember(Description="The SMS template id to update. Get it from get_sms_templates.", IsRequired=true)
    public viewId: string;

    public constructor(init?: Partial<UpdateSmsTemplateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateSmsTemplateRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets SMS settings */
// @Route("/{version}/notifications/sms/settings", "GET")
// @Api(Description="Gets SMS settings")
export class GetSmsSettings extends CodeMashRequestBase implements IReturn<GetSmsSettingsResponse>
{
    /** @description Unused legacy parameter; leave empty. */
    // @ApiMember(Description="Unused legacy parameter; leave empty.")
    public id: string;

    public constructor(init?: Partial<GetSmsSettings>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSmsSettings'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSmsSettingsResponse(); }
}

/** @description Confirm that you received the test SMS delivery. */
// @Route("/{version}/notifications/sms/integrations/confirm-human-delivery", "POST")
// @Api(Description="Confirm that you received the test SMS delivery.")
// @DataContract
export class ConfirmSmsIntegrationHumanDeliveryRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The SMS integration id being verified. Get it from get_sms_integrations. */
    // @DataMember
    // @ApiMember(Description="The SMS integration id being verified. Get it from get_sms_integrations.")
    public integrationId: string;

    public constructor(init?: Partial<ConfirmSmsIntegrationHumanDeliveryRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ConfirmSmsIntegrationHumanDeliveryRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Delete integration for particular project */
// @Route("/{version}/notifications/sms/integrations/{Id}", "DELETE")
// @Api(Description="Delete integration for particular project")
export class DeleteSmsIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The SMS integration id to delete. Get it from get_sms_integrations. */
    // @ApiMember(Description="The SMS integration id to delete. Get it from get_sms_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DeleteSmsIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteSmsIntegrationRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Disable integration for particular project */
// @Route("/{version}/notifications/sms/integrations/{Id}/disable", "PUT")
// @Api(Description="Disable integration for particular project")
export class DisableSmsIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The SMS integration id to disable. Get it from get_sms_integrations. */
    // @ApiMember(Description="The SMS integration id to disable. Get it from get_sms_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DisableSmsIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableSmsIntegrationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Enable integration for particular project */
// @Route("/{version}/notifications/sms/integrations/{Id}/enable", "PUT")
// @Api(Description="Enable integration for particular project")
export class EnableSmsIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The SMS integration id to enable. Get it from get_sms_integrations. */
    // @ApiMember(Description="The SMS integration id to enable. Get it from get_sms_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<EnableSmsIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableSmsIntegrationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets integration by specified Id */
// @Route("/{version}/notifications/sms/integrations/{id}", "GET")
// @Api(Description="Gets integration by specified Id")
export class GetSmsIntegration extends CodeMashRequestBase implements IReturn<GetSmsIntegrationResponse>
{
    /** @description The SMS integration id to fetch. Get it from get_sms_integrations. */
    // @ApiMember(Description="The SMS integration id to fetch. Get it from get_sms_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetSmsIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSmsIntegration'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSmsIntegrationResponse(); }
}

/** @description Gets sms integrations */
// @Route("/{version}/notifications/sms/integrations", "GET")
// @Api(Description="Gets sms integrations")
export class GetSmsIntegrations extends CodeMashListPaginationRequestBase implements IReturn<GetSmsIntegrationsResponse>
{

    public constructor(init?: Partial<GetSmsIntegrations>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSmsIntegrations'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSmsIntegrationsResponse(); }
}

// @Route("/{version}/notifications/sms/integrations", "POST")
// @DataContract
export class SaveSmsIntegration extends CodeMashRequestBase implements IReturn<IdResponse>
{
    // @DataMember(Name="integration")
    public integration: SmsIntegrationRequest;

    public constructor(init?: Partial<SaveSmsIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveSmsIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Sets integration as default */
// @Route("/{version}/notifications/sms/integrations/{Id}/default", "PUT")
// @Api(Description="Sets integration as default")
export class SetSmsIntegrationAsDefaultRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The SMS integration id to set as default. Get it from get_sms_integrations. */
    // @ApiMember(Description="The SMS integration id to set as default. Get it from get_sms_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<SetSmsIntegrationAsDefaultRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SetSmsIntegrationAsDefaultRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Test SMS integration */
// @Route("/{version}/notifications/sms/integrations/test", "POST")
// @Api(Description="Test SMS integration")
export class TestSmsIntegration extends CodeMashRequestBase implements IReturn<TestSmsIntegrationResponse>
{
    /** @description The SMS integration id to test. Get it from get_sms_integrations. */
    // @ApiMember(Description="The SMS integration id to test. Get it from get_sms_integrations.")
    public integrationId: string;

    /** @description Optional phone number (international format) to send the test SMS to. */
    // @ApiMember(Description="Optional phone number (international format) to send the test SMS to.")
    public to?: string;

    public constructor(init?: Partial<TestSmsIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'TestSmsIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new TestSmsIntegrationResponse(); }
}

/** @description Create SMS campaign */
// @Route("/{version}/notifications/sms/campaigns", "POST")
// @Api(Description="Create SMS campaign")
// @DataContract
export class CreateSmsCampaignRequest extends CodeMashRequestBase implements IReturn<IdResponse>
{
    /** @description SMS template id to send — pick one with get_sms_templates. Never invent it. */
    // @DataMember
    // @ApiMember(Description="SMS template id to send — pick one with get_sms_templates. Never invent it.")
    public templateId: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @DataMember
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

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

    // @DataMember
    public collection?: SmsToCollectionRecordsDeliverySettingsDto;

    /** @description For deliveryType 'PhoneNumbers'. JSON object: {"recipientsSourceType":"PhoneNumbers","phoneNumbers":["+37060000000"],"campaignTime":<unix seconds UTC>}. Numbers in international format. */
    // @DataMember
    // @ApiMember(Description="For deliveryType 'PhoneNumbers'. JSON object: {\"recipientsSourceType\":\"PhoneNumbers\",\"phoneNumbers\":[\"+37060000000\"],\"campaignTime\":<unix seconds UTC>}. Numbers in international format.")
    public phoneNumbers?: SmsToPhoneNumbersDeliverySettingsDto;

    public constructor(init?: Partial<CreateSmsCampaignRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateSmsCampaignRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Deletes sms campaign from queue */
// @Route("/{version}/notifications/sms/campaigns/{id}", "DELETE")
// @Api(Description="Deletes sms campaign from queue")
export class DeleteSmsCampaign extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The campaign id to delete. Get it from get_sms_campaigns. */
    // @ApiMember(Description="The campaign id to delete. Get it from get_sms_campaigns.", IsRequired=true)
    public id: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<DeleteSmsCampaign>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteSmsCampaign'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Get sms campaign by id */
// @Route("/{version}/notifications/sms/campaigns/{id}", "GET")
// @Api(Description="Get sms campaign by id")
export class GetSmsCampaign extends CodeMashRequestBase implements IReturn<GetSmsCampaignResponse>
{
    /** @description The campaign id. */
    // @ApiMember(Description="The campaign id.")
    public id: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetSmsCampaign>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSmsCampaign'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSmsCampaignResponse(); }
}

/** @description Gets sms campaigns */
// @Route("/{version}/notifications/sms/campaigns", "GET")
// @Api(Description="Gets sms campaigns")
export class GetSmsCampaigns extends CodeMashListPaginationRequestBase implements IReturn<GetSmsCampaignsResponse>
{
    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    /** @description Optional: only campaigns built on this SMS template id. */
    // @ApiMember(Description="Optional: only campaigns built on this SMS template id.")
    public templateId?: string;

    /** @description Optional lower bound for the campaign time, unix timestamp in seconds (UTC). */
    // @ApiMember(Description="Optional lower bound for the campaign time, unix timestamp in seconds (UTC).")
    public from?: number;

    /** @description Optional upper bound for the campaign time, unix timestamp in seconds (UTC). */
    // @ApiMember(Description="Optional upper bound for the campaign time, unix timestamp in seconds (UTC).")
    public to?: number;

    public constructor(init?: Partial<GetSmsCampaigns>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSmsCampaigns'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSmsCampaignsResponse(); }
}

/** @description Gets sms campaign batches */
// @Route("/{version}/notifications/sms/campaigns/{id}/batches", "GET")
// @Api(Description="Gets sms campaign batches")
export class GetSmsCampaignBatches extends CodeMashListPaginationRequestBase implements IReturn<GetSmsCampaignBatchesResponse>
{
    /** @description The campaign id. Get it from get_sms_campaigns. */
    // @ApiMember(Description="The campaign id. Get it from get_sms_campaigns.")
    public id?: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetSmsCampaignBatches>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSmsCampaignBatches'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSmsCampaignBatchesResponse(); }
}

/** @description Gets sms campaign batch notification */
// @Route("/{version}/notifications/sms/campaigns/{id}/batches/{batchId}/{notificationId}", "GET")
// @Api(Description="Gets sms campaign batch notification")
export class GetSmsCampaignBatchNotification extends CodeMashListPaginationRequestBase implements IReturn<GetSmsCampaignBatchNotificationResponse>
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

    public constructor(init?: Partial<GetSmsCampaignBatchNotification>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSmsCampaignBatchNotification'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSmsCampaignBatchNotificationResponse(); }
}

/** @description Gets sms campaign batch notifications */
// @Route("/{version}/notifications/sms/campaigns/{id}/batches/{batchId}", "GET")
// @Api(Description="Gets sms campaign batch notifications")
export class GetSmsCampaignBatchNotifications extends CodeMashListPaginationRequestBase implements IReturn<GetSmsCampaignBatchNotificationsResponse>
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

    public constructor(init?: Partial<GetSmsCampaignBatchNotifications>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSmsCampaignBatchNotifications'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSmsCampaignBatchNotificationsResponse(); }
}

/** @description Get sms campaign statistics */
// @Route("/{version}/notifications/sms/campaigns/{id}/stats", "GET")
// @Api(Description="Get sms campaign statistics")
export class GetSmsCampaignStatistics extends CodeMashRequestBase implements IReturn<GetSmsCampaignStatisticsResponse>
{
    /** @description The campaign id. Get it from get_sms_campaigns. */
    // @ApiMember(Description="The campaign id. Get it from get_sms_campaigns.", IsRequired=true)
    public id: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetSmsCampaignStatistics>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSmsCampaignStatistics'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSmsCampaignStatisticsResponse(); }
}

/** @description Returns SMS preview notification body */
// @Route("/{version}/notifications/sms/preview", "GET")
// @Api(Description="Returns SMS preview notification body")
export class PreviewSmsNotification extends RequestBase implements IReturn<PreviewSmsNotificationResponse>
{
    /** @description Signed preview hash identifying the notification to render. */
    // @ApiMember(Description="Signed preview hash identifying the notification to render.")
    public hash: string;

    public constructor(init?: Partial<PreviewSmsNotification>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'PreviewSmsNotification'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new PreviewSmsNotificationResponse(); }
}

/** @description Stops a running SMS campaign */
// @Route("/{version}/notifications/sms/campaigns/{Id}/stop", "POST")
// @Api(Description="Stops a running SMS campaign")
export class StopSmsCampaignRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The campaign id to stop. */
    // @ApiMember(Description="The campaign id to stop.")
    public id: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<StopSmsCampaignRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'StopSmsCampaignRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets campaign sms message details */
// @Route("/{version}/notifications/sms/campaigns/{campaignId}/messages/{id}", "GET")
// @Api(Description="Gets campaign sms message details")
export class GetSmsCampaignMessage extends CodeMashRequestBase implements IReturn<GetSmsCampaignMessageResponse>
{
    /** @description The campaign id. Get it from get_sms_campaigns. */
    // @ApiMember(Description="The campaign id. Get it from get_sms_campaigns.", IsRequired=true)
    public campaignId: string;

    /** @description The campaign batch id. Get it from get_sms_campaign_batches. */
    // @ApiMember(Description="The campaign batch id. Get it from get_sms_campaign_batches.", IsRequired=true)
    public campaignBatchId: string;

    /** @description The notification (message) id. Get it from get_sms_campaign_messages. */
    // @ApiMember(Description="The notification (message) id. Get it from get_sms_campaign_messages.", IsRequired=true)
    public notificationId: string;

    /** @description Optional. Omit to use the project default database integration (resolved per environment). */
    // @ApiMember(Description="Optional. Omit to use the project default database integration (resolved per environment).")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetSmsCampaignMessage>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSmsCampaignMessage'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSmsCampaignMessageResponse(); }
}

/** @description Gets the sms notifications */
// @Route("/{version}/notifications/sms/campaigns/{campaignId}/messages", "GET")
// @Api(Description="Gets the sms notifications")
export class GetSmsCampaignMessagesRequest extends CodeMashListPaginationRequestBase implements IReturn<GetSmsCampaignMessagesResponse>
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

    public constructor(init?: Partial<GetSmsCampaignMessagesRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSmsCampaignMessagesRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSmsCampaignMessagesResponse(); }
}

export class SmsIntegrationSaved
{
    public integration: SmsIntegration;

    public constructor(init?: Partial<SmsIntegrationSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsIntegrationSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsIntegrationTested
{
    public id: IntegrationId;
    public succeeded: boolean;
    public errorMessages: IReadOnlyList<string>;
    public testedAtUtc: string;
    public env?: Env;

    public constructor(init?: Partial<SmsIntegrationTested>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsIntegrationTested'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsIntegrationHumanDeliveryConfirmed
{
    public id: IntegrationId;
    public confirmedAtUtc: string;

    public constructor(init?: Partial<SmsIntegrationHumanDeliveryConfirmed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsIntegrationHumanDeliveryConfirmed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsIntegrationRenamed
{
    public id: IntegrationId;
    public name: DisplayName;
    public env?: Env;

    public constructor(init?: Partial<SmsIntegrationRenamed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsIntegrationRenamed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsIntegrationSetAsDefault
{
    public env: Env;
    public id: IntegrationId;

    public constructor(init?: Partial<SmsIntegrationSetAsDefault>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsIntegrationSetAsDefault'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsIntegrationDeleted
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<SmsIntegrationDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsIntegrationDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsIntegrationEnabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<SmsIntegrationEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsIntegrationEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsIntegrationDisabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<SmsIntegrationDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsIntegrationDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsServiceEstablished
{
    public defaultTemplates?: SmsTemplate[];

    public constructor(init?: Partial<SmsServiceEstablished>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsServiceEstablished'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsServiceEnabled
{

    public constructor(init?: Partial<SmsServiceEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsServiceEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsServiceDisabled
{

    public constructor(init?: Partial<SmsServiceDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsServiceDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsTemplateCreated
{
    public templateId: TemplateId;
    public displayName: DisplayName;
    public translations: MessageTranslation<SmsMessageContent>[] = [];
    public channel: CommunicationChannel;
    public description?: string;
    public tags?: Tag[];
    public env?: Env;

    public constructor(init?: Partial<SmsTemplateCreated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsTemplateCreated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsTemplateUpdated
{
    public templateId: TemplateId;
    public displayName: DisplayName;
    public translations: MessageTranslation<SmsMessageContent>[] = [];
    public channel: CommunicationChannel;
    public description?: string;
    public tags?: Tag[];
    public env?: Env;

    public constructor(init?: Partial<SmsTemplateUpdated>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsTemplateUpdated'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsTemplateMirrored
{
    public template: SmsTemplate;

    public constructor(init?: Partial<SmsTemplateMirrored>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsTemplateMirrored'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsTemplateDeleted
{
    public templateId: TemplateId;
    public env?: Env;

    public constructor(init?: Partial<SmsTemplateDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsTemplateDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsTemplateArchived
{
    public templateId: TemplateId;
    public env?: Env;

    public constructor(init?: Partial<SmsTemplateArchived>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsTemplateArchived'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsTemplateUnArchived
{
    public templateId: TemplateId;
    public env?: Env;

    public constructor(init?: Partial<SmsTemplateUnArchived>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsTemplateUnArchived'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsBatchRegistered
{
    public campaignId: CampaignId;
    public campaignBatchId: CampaignBatchId;
    public startingAfter?: string;

    public constructor(init?: Partial<SmsBatchRegistered>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsBatchRegistered'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsNotificationRead
{
    public campaignId: CampaignId;
    public campaignBatchId: CampaignBatchId;
    public notificationId: NotificationId;

    public constructor(init?: Partial<SmsNotificationRead>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsNotificationRead'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsNotificationClicked
{
    public campaignId: CampaignId;
    public campaignBatchId: CampaignBatchId;
    public notificationId: NotificationId;
    public sourceId?: string;

    public constructor(init?: Partial<SmsNotificationClicked>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsNotificationClicked'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsCampaignStarted
{
    public campaignId: CampaignId;

    public constructor(init?: Partial<SmsCampaignStarted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsCampaignStarted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsCampaignStopped
{
    public campaignId: CampaignId;
    public reason?: CampaignStopReason;

    public constructor(init?: Partial<SmsCampaignStopped>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsCampaignStopped'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsCampaignCompleted
{
    public campaignId: CampaignId;
    public errors?: ErrorDto[];

    public constructor(init?: Partial<SmsCampaignCompleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsCampaignCompleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsCampaignFailed
{
    public campaignId: CampaignId;
    public errors: ErrorDto[] = [];

    public constructor(init?: Partial<SmsCampaignFailed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsCampaignFailed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SmsCampaignTriggered
{
    public projectId: ProjectId;
    public triggerId: TriggerId;
    public triggerType: TriggerType;
    public sourceEvent: string;
    public schemaId?: string;
    public tokenMappings?: IReadOnlyDictionary<string, string>;

    public constructor(init?: Partial<SmsCampaignTriggered>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SmsCampaignTriggered'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

// @Route("/{version}/code/marketplace/integrations/{IntegrationViewId}/secrets", "PUT")
// @DataContract
export class ReplaceMarketplaceIntegrationSecretsRequest extends CodeMashRequestBase implements IReturn<EmptyMarketplaceSecretsResponse>
{
    /** @description Integration view id (int_…). */
    // @DataMember
    // @ApiMember(Description="Integration view id (int_…).", IsRequired=true)
    public integrationViewId: string;

    // @DataMember
    public secrets: { [index:string]: string; } = {};

    public constructor(init?: Partial<ReplaceMarketplaceIntegrationSecretsRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ReplaceMarketplaceIntegrationSecretsRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyMarketplaceSecretsResponse(); }
}

// @Route("/{version}/code/marketplace/integrations/{IntegrationViewId}/secrets/reveal", "POST")
// @DataContract
export class RevealMarketplaceIntegrationSecretsRequest extends CodeMashRequestBase implements IReturn<RevealMarketplaceIntegrationSecretsResponse>
{
    /** @description Integration view id (int_…). */
    // @DataMember
    // @ApiMember(Description="Integration view id (int_…).", IsRequired=true)
    public integrationViewId: string;

    public constructor(init?: Partial<RevealMarketplaceIntegrationSecretsRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RevealMarketplaceIntegrationSecretsRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new RevealMarketplaceIntegrationSecretsResponse(); }
}

// @Route("/{version}/code/marketplace/integrations/{IntegrationViewId}/token-mappings", "PUT")
// @DataContract
export class SetMarketplaceIntegrationTokenMappingsRequest extends CodeMashRequestBase implements IReturn<SetMarketplaceIntegrationTokenMappingsResponse>
{
    /** @description Integration view id (int_…). */
    // @DataMember
    // @ApiMember(Description="Integration view id (int_…).", IsRequired=true)
    public integrationViewId: string;

    // @DataMember
    public tokenMappings: MarketplaceTokenMappingDto[] = [];

    public constructor(init?: Partial<SetMarketplaceIntegrationTokenMappingsRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SetMarketplaceIntegrationTokenMappingsRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new SetMarketplaceIntegrationTokenMappingsResponse(); }
}

// @Route("/{version}/code/marketplace/integrations/{IntegrationViewId}/catalog", "GET")
export class GetMarketplaceFunctionCatalog extends CodeMashRequestBase implements IReturn<GetMarketplaceFunctionCatalogResponse>
{
    /** @description Integration view id, from get_marketplace_integrations. */
    // @ApiMember(Description="Integration view id, from get_marketplace_integrations.", IsRequired=true)
    public integrationViewId: string;

    public constructor(init?: Partial<GetMarketplaceFunctionCatalog>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMarketplaceFunctionCatalog'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetMarketplaceFunctionCatalogResponse(); }
}

export class CodeIntegrationSaved
{
    public integration: CodeIntegration;

    public constructor(init?: Partial<CodeIntegrationSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CodeIntegrationSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class CodeIntegrationTested
{
    public id: IntegrationId;
    public succeeded: boolean;
    public errorMessages: IReadOnlyList<string>;
    public testedAtUtc: string;
    public env?: Env;

    public constructor(init?: Partial<CodeIntegrationTested>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CodeIntegrationTested'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class CodeIntegrationHumanDeliveryConfirmed
{
    public id: IntegrationId;
    public confirmedAtUtc: string;

    public constructor(init?: Partial<CodeIntegrationHumanDeliveryConfirmed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CodeIntegrationHumanDeliveryConfirmed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class CodeIntegrationRenamed
{
    public id: IntegrationId;
    public name: DisplayName;
    public env?: Env;

    public constructor(init?: Partial<CodeIntegrationRenamed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CodeIntegrationRenamed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class CodeIntegrationSetAsDefault
{
    public id: IntegrationId;

    public constructor(init?: Partial<CodeIntegrationSetAsDefault>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CodeIntegrationSetAsDefault'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class CodeIntegrationDeleted
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<CodeIntegrationDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CodeIntegrationDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class CodeIntegrationEnabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<CodeIntegrationEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CodeIntegrationEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class CodeIntegrationDisabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<CodeIntegrationDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CodeIntegrationDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MarketplaceIntegrationSaved
{
    public integration: MarketplaceIntegration;

    public constructor(init?: Partial<MarketplaceIntegrationSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MarketplaceIntegrationSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MarketplaceIntegrationDeleted
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<MarketplaceIntegrationDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MarketplaceIntegrationDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MarketplaceIntegrationEnabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<MarketplaceIntegrationEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MarketplaceIntegrationEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MarketplaceIntegrationDisabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<MarketplaceIntegrationDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MarketplaceIntegrationDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MarketplaceIntegrationTested
{
    public id: IntegrationId;
    public succeeded: boolean;
    public errorMessages: IReadOnlyList<string>;
    public testedAtUtc: string;
    public env?: Env;

    public constructor(init?: Partial<MarketplaceIntegrationTested>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MarketplaceIntegrationTested'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MarketplaceIntegrationSecretsConfigured
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<MarketplaceIntegrationSecretsConfigured>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MarketplaceIntegrationSecretsConfigured'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MarketplaceIntegrationSecretsConfigurationFailed
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<MarketplaceIntegrationSecretsConfigurationFailed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MarketplaceIntegrationSecretsConfigurationFailed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MarketplaceFunctionSaved
{
    public function: MarketplaceFunction;

    public constructor(init?: Partial<MarketplaceFunctionSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MarketplaceFunctionSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MarketplaceFunctionDeleted
{
    public integrationId: IntegrationId;
    public functionId: MarketplaceFunctionId;

    public constructor(init?: Partial<MarketplaceFunctionDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MarketplaceFunctionDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MarketplaceFunctionEnabled
{
    public integrationId: IntegrationId;
    public functionId: MarketplaceFunctionId;

    public constructor(init?: Partial<MarketplaceFunctionEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MarketplaceFunctionEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class MarketplaceFunctionDisabled
{
    public integrationId: IntegrationId;
    public functionId: MarketplaceFunctionId;

    public constructor(init?: Partial<MarketplaceFunctionDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MarketplaceFunctionDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class ServerlessEnabled
{

    public constructor(init?: Partial<ServerlessEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ServerlessEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class ServerlessDisabled
{

    public constructor(init?: Partial<ServerlessDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ServerlessDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

/** @description Disable push service */
// @Route("/{version}/notifications/push/disable", "GET")
// @Api(Description="Disable push service")
export class DisablePush extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DisablePush>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisablePush'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Lists push disable dependencies */
// @Route("/{version}/notifications/push/disable-dependencies", "GET")
// @Api(Description="Lists push disable dependencies")
export class GetPushDisableDependencies extends CodeMashRequestBase implements IReturn<GetNotificationModuleDisableDependenciesResponse>
{

    public constructor(init?: Partial<GetPushDisableDependencies>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPushDisableDependencies'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetNotificationModuleDisableDependenciesResponse(); }
}

/** @description Enable push service */
// @Route("/{version}/notifications/push/enable", "GET")
// @Api(Description="Enable push service")
export class EnablePush extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<EnablePush>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnablePush'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Archives push template */
// @Route("/{version}/notifications/push/templates/{Id}/archive", "PUT")
// @Api(Description="Archives push template")
export class ArchivePushTemplateRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The push template id to archive. Get it from get_push_templates. */
    // @ApiMember(Description="The push template id to archive. Get it from get_push_templates.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<ArchivePushTemplateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ArchivePushTemplateRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Clones push template */
// @Route("/{version}/notifications/push/templates/{Id}/clone", "POST")
// @Api(Description="Clones push template")
export class ClonePushTemplateRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The push template id to clone. Get it from get_push_templates. */
    // @ApiMember(Description="The push template id to clone. Get it from get_push_templates.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<ClonePushTemplateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ClonePushTemplateRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Create push template */
// @Route("/{version}/notifications/push/templates", "POST")
// @Api(Description="Create push template")
export class CreatePushTemplateRequest extends SavePushTemplate implements IReturn<IdResponse>
{

    public constructor(init?: Partial<CreatePushTemplateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CreatePushTemplateRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Delete push template */
// @Route("/{version}/notifications/push/templates/{Id}", "DELETE")
// @Api(Description="Delete push template")
export class DeletePushTemplateRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The push template id to delete. Get it from get_push_templates. */
    // @ApiMember(Description="The push template id to delete. Get it from get_push_templates.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DeletePushTemplateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeletePushTemplateRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets a push template */
// @Route("/{version}/notifications/push/templates/{id}", "GET")
// @Api(Description="Gets a push template")
export class GetPushTemplate extends CodeMashRequestBase implements IReturn<GetPushTemplateResponse>
{
    /** @description The push template id to fetch. Get it from get_push_templates. */
    // @ApiMember(Description="The push template id to fetch. Get it from get_push_templates.")
    public id: string;

    public constructor(init?: Partial<GetPushTemplate>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPushTemplate'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPushTemplateResponse(); }
}

/** @description Gets push templates */
// @Route("/{version}/notifications/push/templates", "GET")
// @Api(Description="Gets push templates")
export class GetPushTemplates extends CodeMashListPaginationRequestBase implements IReturn<GetPushTemplatesResponse>
{
    /** @description Set true to include archived templates. */
    // @ApiMember(Description="Set true to include archived templates.")
    public showArchived?: boolean;

    /** @description Optional: return only the template with this id. */
    // @ApiMember(Description="Optional: return only the template with this id.")
    public templateId?: string;

    public constructor(init?: Partial<GetPushTemplates>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPushTemplates'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPushTemplatesResponse(); }
}

/** @description Gets push template content tokens */
// @Route("/{version}/notifications/push/templates/{id}/tokens", "GET")
// @Api(Description="Gets push template content tokens")
export class GetPushMessageContentTokens extends CodeMashRequestBase implements IReturn<GetPushMessageContentTokensResponse>
{
    /** @description The push template id to scan for tokens. Get it from get_push_templates. */
    // @ApiMember(Description="The push template id to scan for tokens. Get it from get_push_templates.")
    public id: string;

    public constructor(init?: Partial<GetPushMessageContentTokens>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPushMessageContentTokens'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPushMessageContentTokensResponse(); }
}

/** @description Renders a push template field */
// @Route("/{version}/notifications/push/templates/render", "POST")
// @Api(Description="Renders a push template field")
export class RenderPush extends CodeMashRequestBase implements IReturn<RenderPushResponse>
{
    /** @description The Razor template source for the field being rendered (Title, Body, or Subtitle). */
    // @ApiMember(Description="The Razor template source for the field being rendered (Title, Body, or Subtitle).", IsRequired=true)
    public code: string;

    /** @description Optional token values already bound for this render pass. */
    // @ApiMember(Description="Optional token values already bound for this render pass.")
    public tokens?: TokenMappingDto[];

    /** @description Set true when rendering for a preview (relaxes strict validation). */
    // @ApiMember(Description="Set true when rendering for a preview (relaxes strict validation).")
    public isForPreview: boolean;

    public constructor(init?: Partial<RenderPush>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RenderPush'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new RenderPushResponse(); }
}

/** @description Un-archives push template */
// @Route("/{version}/notifications/push/templates/{Id}/unarchive", "PUT")
// @Api(Description="Un-archives push template")
export class UnArchivePushTemplateRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The push template id to unarchive. */
    // @ApiMember(Description="The push template id to unarchive.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<UnArchivePushTemplateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UnArchivePushTemplateRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Edit push template */
// @Route("/{version}/notifications/push/templates", "PUT")
// @Api(Description="Edit push template")
export class UpdatePushTemplateRequest extends SavePushTemplate implements IReturn<EmptyResponse>
{
    /** @description The push template id to update. Get it from get_push_templates. */
    // @ApiMember(Description="The push template id to update. Get it from get_push_templates.", IsRequired=true)
    public viewId: string;

    public constructor(init?: Partial<UpdatePushTemplateRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdatePushTemplateRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets push settings */
// @Route("/{version}/notifications/push/settings", "GET")
// @Api(Description="Gets push settings")
export class GetPushSettings extends CodeMashRequestBase implements IReturn<GetPushSettingsResponse>
{
    /** @description The push settings id to fetch. */
    // @ApiMember(Description="The push settings id to fetch.")
    public id: string;

    public constructor(init?: Partial<GetPushSettings>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPushSettings'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPushSettingsResponse(); }
}

/** @description Confirm human delivery of a test push */
// @Route("/{version}/notifications/push/integrations/confirm-human-delivery", "POST")
// @Api(Description="Confirm human delivery of a test push")
// @DataContract
export class ConfirmPushIntegrationHumanDeliveryRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The push integration id being verified. Get it from get_push_integrations. */
    // @DataMember
    // @ApiMember(Description="The push integration id being verified. Get it from get_push_integrations.", IsRequired=true)
    public integrationId: string;

    public constructor(init?: Partial<ConfirmPushIntegrationHumanDeliveryRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ConfirmPushIntegrationHumanDeliveryRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Delete push integration */
// @Route("/{version}/notifications/push/integrations/{Id}", "DELETE")
// @Api(Description="Delete push integration")
export class DeletePushIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The push integration id to delete. Get it from get_push_integrations. */
    // @ApiMember(Description="The push integration id to delete. Get it from get_push_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DeletePushIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeletePushIntegrationRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Disable push integration */
// @Route("/{version}/notifications/push/integrations/{Id}/disable", "PUT")
// @Api(Description="Disable push integration")
export class DisablePushIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The push integration id to disable. Get it from get_push_integrations. */
    // @ApiMember(Description="The push integration id to disable. Get it from get_push_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DisablePushIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisablePushIntegrationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Enable push integration */
// @Route("/{version}/notifications/push/integrations/{Id}/enable", "PUT")
// @Api(Description="Enable push integration")
export class EnablePushIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The push integration id to enable. Get it from get_push_integrations. */
    // @ApiMember(Description="The push integration id to enable. Get it from get_push_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<EnablePushIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnablePushIntegrationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets a push integration */
// @Route("/{version}/notifications/push/integrations/{id}", "GET")
// @Api(Description="Gets a push integration")
export class GetPushIntegration extends CodeMashRequestBase implements IReturn<GetPushIntegrationResponse>
{
    /** @description The push integration id to fetch. Get it from get_push_integrations. */
    // @ApiMember(Description="The push integration id to fetch. Get it from get_push_integrations.")
    public id: string;

    public constructor(init?: Partial<GetPushIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPushIntegration'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPushIntegrationResponse(); }
}

/** @description Gets push integrations */
// @Route("/{version}/notifications/push/integrations", "GET")
// @Api(Description="Gets push integrations")
export class GetPushIntegrations extends CodeMashListPaginationRequestBase implements IReturn<GetPushIntegrationsResponse>
{

    public constructor(init?: Partial<GetPushIntegrations>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPushIntegrations'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPushIntegrationsResponse(); }
}

// @Route("/{version}/notifications/push/integrations", "POST")
// @DataContract
export class SavePushIntegration extends CodeMashRequestBase implements IReturn<IdResponse>
{
    // @DataMember(Name="integration")
    public integration: PushIntegrationRequest;

    public constructor(init?: Partial<SavePushIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SavePushIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Sets push integration as default */
// @Route("/{version}/notifications/push/integrations/{Id}/default", "PUT")
// @Api(Description="Sets push integration as default")
export class SetPushIntegrationAsDefaultRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The push integration id to set as default. Get it from get_push_integrations. */
    // @ApiMember(Description="The push integration id to set as default. Get it from get_push_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<SetPushIntegrationAsDefaultRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SetPushIntegrationAsDefaultRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Test push integration */
// @Route("/{version}/notifications/push/integrations/test", "POST")
// @Api(Description="Test push integration")
export class TestPushIntegration extends CodeMashRequestBase implements IReturn<TestEmailIntegrationResponse>
{
    /** @description The push integration id to test. Get it from get_push_integrations. */
    // @DataMember
    // @ApiMember(Description="The push integration id to test. Get it from get_push_integrations.", IsRequired=true)
    public integrationId: string;

    /** @description Optional device token to send the test notification to. Requires DeliveryFamily when set. */
    // @DataMember
    // @ApiMember(Description="Optional device token to send the test notification to. Requires DeliveryFamily when set.")
    public testToken?: string;

    /** @description Optional delivery family for the test token (e.g. Ios, Android, Chrome, Safari, Expo). Requires TestToken when set. */
    // @DataMember
    // @ApiMember(Description="Optional delivery family for the test token (e.g. Ios, Android, Chrome, Safari, Expo). Requires TestToken when set.")
    public deliveryFamily?: string;

    public constructor(init?: Partial<TestPushIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'TestPushIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new TestEmailIntegrationResponse(); }
}

// @Route("/{version}/notifications/push/integrations/app/request", "POST")
export class RegisterCodeMashAppPushIntegration extends CodeMashRequestBase implements IReturn<EmptyResponse>, IHasAccountId
{
    public accountId: string;
    public userId: string;
    public requestId: string;
    public pin: number;
    public validTill: string;
    public publicKey: string;

    public constructor(init?: Partial<RegisterCodeMashAppPushIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RegisterCodeMashAppPushIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Registers a device for push notifications */
// @Route("/{version}/notifications/push/devices", "POST")
// @Api(Description="Registers a device for push notifications")
// @DataContract
export class RegisterDevice extends RequestBase implements IReturn<IdResponse>, IHasProjectId
{
    /** @description The device details: OS, token, model, and delivery family. */
    // @DataMember
    // @ApiMember(Description="The device details: OS, token, model, and delivery family.", IsRequired=true)
    public pushDeviceDto: PushDeviceDto;

    /** @description The id of the user this device belongs to. */
    // @DataMember
    // @ApiMember(Description="The id of the user this device belongs to.", IsRequired=true)
    public userId: string;

    // @DataMember
    public projectId: string;

    /** @description Optional account id to associate with the device. */
    // @DataMember
    // @ApiMember(Description="Optional account id to associate with the device.")
    public accountId?: string;

    /** @description Optional database integration id; omit to use the project's default. */
    // @DataMember
    // @ApiMember(Description="Optional database integration id; omit to use the project's default.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<RegisterDevice>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RegisterDevice'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Create push campaign */
// @Route("/{version}/notifications/push/campaigns", "POST")
// @Api(Description="Create push campaign")
// @DataContract
export class CreatePushCampaignRequest extends CodeMashRequestBase implements IReturn<IdResponse>
{
    // @DataMember
    public campaign: PushCampaignRequest;

    // @DataMember
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<CreatePushCampaignRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CreatePushCampaignRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Deletes push campaign from queue */
// @Route("/{version}/notifications/push/campaigns/{Id}", "DELETE")
// @Api(Description="Deletes push campaign from queue")
// @DataContract
export class DeletePushCampaignRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DeletePushCampaignRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeletePushCampaignRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets push campaign by id */
// @Route("/{version}/notifications/push/campaigns/{id}", "GET")
// @Api(Description="Gets push campaign by id")
export class GetPushCampaign extends CodeMashRequestBase implements IReturn<GetPushCampaignResponse>
{
    /** @description The campaign id. */
    // @ApiMember(Description="The campaign id.")
    public id: string;

    /** @description Optional database integration id; omit to use the project's default. */
    // @ApiMember(Description="Optional database integration id; omit to use the project's default.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetPushCampaign>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPushCampaign'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPushCampaignResponse(); }
}

/** @description Gets push campaigns */
// @Route("/{version}/notifications/push/campaigns", "GET")
// @Api(Description="Gets push campaigns")
export class GetPushCampaigns extends CodeMashListPaginationRequestBase implements IReturn<GetPushCampaignsResponse>
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

    public constructor(init?: Partial<GetPushCampaigns>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPushCampaigns'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPushCampaignsResponse(); }
}

/** @description Gets push campaign batches */
// @Route("/{version}/notifications/push/campaigns/{id}/batches", "GET")
// @Api(Description="Gets push campaign batches")
export class GetPushCampaignBatches extends CodeMashListPaginationRequestBase implements IReturn<GetPushCampaignBatchesResponse>
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

    public constructor(init?: Partial<GetPushCampaignBatches>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPushCampaignBatches'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPushCampaignBatchesResponse(); }
}

/** @description Gets a push campaign batch notification */
// @Route("/{version}/notifications/push/campaigns/{id}/batches/{batchId}/{notificationId}", "GET")
// @Api(Description="Gets a push campaign batch notification")
export class GetPushCampaignBatchNotification extends CodeMashListPaginationRequestBase implements IReturn<GetPushCampaignBatchNotificationResponse>
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

    public constructor(init?: Partial<GetPushCampaignBatchNotification>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPushCampaignBatchNotification'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPushCampaignBatchNotificationResponse(); }
}

/** @description Gets push campaign batch notifications */
// @Route("/{version}/notifications/push/campaigns/{id}/batches/{batchId}", "GET")
// @Api(Description="Gets push campaign batch notifications")
export class GetPushCampaignBatchNotifications extends CodeMashListPaginationRequestBase implements IReturn<GetPushCampaignBatchNotificationsResponse>
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

    public constructor(init?: Partial<GetPushCampaignBatchNotifications>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPushCampaignBatchNotifications'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPushCampaignBatchNotificationsResponse(); }
}

/** @description Get push campaign statistics */
// @Route("/{version}/notifications/push/campaigns/{id}/stats", "GET")
// @Api(Description="Get push campaign statistics")
export class GetPushCampaignStatistics extends CodeMashRequestBase implements IReturn<GetPushCampaignStatisticsResponse>
{
    /** @description The push campaign id to get statistics for. Get it from get_push_campaigns. */
    // @ApiMember(Description="The push campaign id to get statistics for. Get it from get_push_campaigns.")
    public id: string;

    /** @description Optional database integration id; omit to use the project's default. */
    // @ApiMember(Description="Optional database integration id; omit to use the project's default.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetPushCampaignStatistics>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPushCampaignStatistics'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPushCampaignStatisticsResponse(); }
}

/** @description Returns push preview notification */
// @Route("/{version}/notifications/push/preview", "GET")
// @Api(Description="Returns push preview notification")
export class PreviewPushNotification extends RequestBase implements IReturn<PreviewPushNotificationResponse>
{
    /** @description The encrypted preview hash identifying the project and notification. */
    // @ApiMember(Description="The encrypted preview hash identifying the project and notification.")
    public hash: string;

    public constructor(init?: Partial<PreviewPushNotification>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'PreviewPushNotification'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new PreviewPushNotificationResponse(); }
}

/** @description Stops a running push campaign */
// @Route("/{version}/notifications/push/campaigns/{Id}/stop", "POST")
// @Api(Description="Stops a running push campaign")
// @DataContract
export class StopPushCampaignRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<StopPushCampaignRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'StopPushCampaignRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets campaign push notification details */
// @Route("/{version}/notifications/push/campaigns/{campaignId}/messages/{id}", "GET")
// @Api(Description="Gets campaign push notification details")
export class GetPushCampaignMessage extends CodeMashRequestBase implements IReturn<GetPushCampaignMessageResponse>
{
    /** @description The push campaign id. Get it from get_push_campaigns. */
    // @ApiMember(Description="The push campaign id. Get it from get_push_campaigns.")
    public campaignId: string;

    /** @description The batch id. Get it from get_push_campaign_batches. */
    // @ApiMember(Description="The batch id. Get it from get_push_campaign_batches.")
    public campaignBatchId: string;

    /** @description The notification id within the batch. */
    // @ApiMember(Description="The notification id within the batch.")
    public notificationId: string;

    /** @description Optional database integration id; omit to use the project's default. */
    // @ApiMember(Description="Optional database integration id; omit to use the project's default.")
    public databaseIntegrationId?: string;

    public constructor(init?: Partial<GetPushCampaignMessage>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPushCampaignMessage'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPushCampaignMessageResponse(); }
}

/** @description Gets push campaign messages */
// @Route("/{version}/notifications/push/campaigns/{campaignId}/messages", "GET")
// @Api(Description="Gets push campaign messages")
export class GetPushCampaignMessagesRequest extends CodeMashListPaginationRequestBase implements IReturn<GetPushCampaignMessagesResponse>
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

    public constructor(init?: Partial<GetPushCampaignMessagesRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPushCampaignMessagesRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPushCampaignMessagesResponse(); }
}

export class PushIntegrationSaved
{
    public integration: PushIntegration;

    public constructor(init?: Partial<PushIntegrationSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PushIntegrationSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PushIntegrationTested
{
    public id: IntegrationId;
    public succeeded: boolean;
    public errorMessages: IReadOnlyList<string>;
    public testedAtUtc: string;
    public env?: Env;

    public constructor(init?: Partial<PushIntegrationTested>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PushIntegrationTested'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PushIntegrationHumanDeliveryConfirmed
{
    public id: IntegrationId;
    public confirmedAtUtc: string;

    public constructor(init?: Partial<PushIntegrationHumanDeliveryConfirmed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PushIntegrationHumanDeliveryConfirmed'; }
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

export class PushModuleTagSaved
{
    public tag: TagDefinition;
    public communicationChannel: CommunicationChannel;

    public constructor(init?: Partial<PushModuleTagSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PushModuleTagSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PushModuleTagDeleted
{
    public tag: Tag;
    public communicationChannel: CommunicationChannel;

    public constructor(init?: Partial<PushModuleTagDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PushModuleTagDeleted'; }
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

export class PushTemplateMirrored
{
    public template: PushTemplate;

    public constructor(init?: Partial<PushTemplateMirrored>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PushTemplateMirrored'; }
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

/** @description Disable payments service */
// @Route("/{version}/payments/disable", "GET")
// @Api(Description="Disable payments service")
export class DisablePayments extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DisablePayments>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisablePayments'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Enable payments service */
// @Route("/{version}/payments/enable", "GET")
// @Api(Description="Enable payments service")
export class EnablePayments extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<EnablePayments>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnablePayments'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets the received payment webhooks log */
// @Route("/{version}/payments/webhooks/log", "GET")
// @Api(Description="Gets the received payment webhooks log")
export class GetPaymentsWebhookLog extends CodeMashRequestBase implements IReturn<GetPaymentsWebhookLogResponse>
{
    /** @description Only rows for this payments integration (view id). Omit for the whole project. */
    // @ApiMember(DataType="string", Description="Only rows for this payments integration (view id). Omit for the whole project.")
    public integrationId?: string;

    /** @description Max rows to return, newest first. Default 50, ceiling 200. */
    // @ApiMember(DataType="int", Description="Max rows to return, newest first. Default 50, ceiling 200.")
    public limit?: number;

    public constructor(init?: Partial<GetPaymentsWebhookLog>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPaymentsWebhookLog'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPaymentsWebhookLogResponse(); }
}

/** @description Delete payments trigger */
// @Route("/{version}/payments/triggers/{triggerId}", "DELETE")
// @Api(Description="Delete payments trigger")
// @DataContract
export class DeletePaymentsTrigger extends DeleteTrigger implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DeletePaymentsTrigger>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeletePaymentsTrigger'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Disable payments trigger */
// @Route("/{version}/payments/triggers/{triggerId}/disable", "PATCH")
// @Api(Description="Disable payments trigger")
// @DataContract
export class DisablePaymentsTrigger extends DisableTrigger implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DisablePaymentsTrigger>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisablePaymentsTrigger'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Enable payments trigger */
// @Route("/{version}/payments/triggers/{triggerId}/enable", "PATCH")
// @Api(Description="Enable payments trigger")
// @DataContract
export class EnablePaymentsTrigger extends EnableTrigger implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<EnablePaymentsTrigger>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnablePaymentsTrigger'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets payments trigger by specified Id */
// @Route("/{version}/payments/triggers/{id}", "GET")
// @Api(Description="Gets payments trigger by specified Id")
export class GetPaymentsTrigger extends GetTrigger implements IReturn<GetPaymentsTriggerResponse>
{

    public constructor(init?: Partial<GetPaymentsTrigger>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPaymentsTrigger'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPaymentsTriggerResponse(); }
}

/** @description Gets payments triggers */
// @Route("/{version}/payments/triggers", "GET")
// @Api(Description="Gets payments triggers")
export class GetPaymentsTriggers extends GetTriggers implements IReturn<GetPaymentsTriggersResponse>
{

    public constructor(init?: Partial<GetPaymentsTriggers>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPaymentsTriggers'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPaymentsTriggersResponse(); }
}

// @Route("/{version}/payments/triggers", "POST")
// @DataContract
export class SavePaymentsTrigger extends SaveTrigger implements IReturn<IdResponse>
{

    public constructor(init?: Partial<SavePaymentsTrigger>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SavePaymentsTrigger'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Confirm that you received or verified the test payment integration outcome. */
// @Route("/{version}/payments/integrations/confirm-human-delivery", "POST")
// @Api(Description="Confirm that you received or verified the test payment integration outcome.")
// @DataContract
export class ConfirmPaymentsIntegrationHumanDeliveryRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The id of the payments integration whose test outcome is being confirmed. */
    // @DataMember
    // @ApiMember(Description="The id of the payments integration whose test outcome is being confirmed.", IsRequired=true)
    public integrationId: string;

    public constructor(init?: Partial<ConfirmPaymentsIntegrationHumanDeliveryRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ConfirmPaymentsIntegrationHumanDeliveryRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Delete integration for particular project */
// @Route("/{version}/payments/integrations/{Id}", "DELETE")
// @Api(Description="Delete integration for particular project")
export class DeletePaymentsIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Payments integration id to delete, from get_payments_integrations. */
    // @ApiMember(Description="Payments integration id to delete, from get_payments_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DeletePaymentsIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeletePaymentsIntegrationRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Disable integration for particular project */
// @Route("/{version}/payments/integrations/{Id}/disable", "PUT")
// @Api(Description="Disable integration for particular project")
export class DisablePaymentsIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Payments integration id to disable, from get_payments_integrations. */
    // @ApiMember(Description="Payments integration id to disable, from get_payments_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DisablePaymentsIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisablePaymentsIntegrationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Enable integration for particular project */
// @Route("/{version}/payments/integrations/{Id}/enable", "PUT")
// @Api(Description="Enable integration for particular project")
export class EnablePaymentsIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Payments integration id to enable, from get_payments_integrations. */
    // @ApiMember(Description="Payments integration id to enable, from get_payments_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<EnablePaymentsIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnablePaymentsIntegrationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets integration by specified Id */
// @Route("/{version}/payments/integrations/{id}", "GET")
// @Api(Description="Gets integration by specified Id")
export class GetPaymentsIntegration extends CodeMashRequestBase implements IReturn<GetPaymentsIntegrationResponse>
{
    /** @description Payments integration id to fetch, from get_payments_integrations. */
    // @ApiMember(Description="Payments integration id to fetch, from get_payments_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetPaymentsIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPaymentsIntegration'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPaymentsIntegrationResponse(); }
}

/** @description Gets integrations */
// @Route("/{version}/payments/integrations", "GET")
// @Api(Description="Gets integrations")
export class GetPaymentsIntegrations extends CodeMashListPaginationRequestBase implements IReturn<GetPaymentsIntegrationsResponse>
{

    public constructor(init?: Partial<GetPaymentsIntegrations>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetPaymentsIntegrations'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetPaymentsIntegrationsResponse(); }
}

/** @description Saves payments integration */
// @Route("/{version}/payments/integrations", "POST")
// @Api(Description="Saves payments integration")
// @DataContract
export class SavePaymentsIntegration extends CodeMashRequestBase implements IReturn<IdResponse>
{
    // @DataMember(Name="integration")
    public integration: PaymentIntegrationRequest;

    public constructor(init?: Partial<SavePaymentsIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SavePaymentsIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Test payments integration */
// @Route("/{version}/payments/integrations/test", "POST")
// @Api(Description="Test payments integration")
export class TestPaymentsIntegration extends CodeMashRequestBase implements IReturn<TestPaymentsIntegrationResponse>
{
    /** @description The id of the payments integration to test. */
    // @ApiMember(Description="The id of the payments integration to test.", IsRequired=true)
    public integrationId: string;

    public constructor(init?: Partial<TestPaymentsIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'TestPaymentsIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new TestPaymentsIntegrationResponse(); }
}

export class PaymentsIntegrationSaved
{
    public integration: PaymentIntegration;

    public constructor(init?: Partial<PaymentsIntegrationSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PaymentsIntegrationSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PaymentsIntegrationTested
{
    public id: IntegrationId;
    public succeeded: boolean;
    public errorMessages: IReadOnlyList<string>;
    public testedAtUtc: string;
    public env?: Env;

    public constructor(init?: Partial<PaymentsIntegrationTested>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PaymentsIntegrationTested'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PaymentsIntegrationHumanDeliveryConfirmed
{
    public id: IntegrationId;
    public confirmedAtUtc: string;

    public constructor(init?: Partial<PaymentsIntegrationHumanDeliveryConfirmed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PaymentsIntegrationHumanDeliveryConfirmed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PaymentsIntegrationRenamed
{
    public id: IntegrationId;
    public name: DisplayName;
    public env?: Env;

    public constructor(init?: Partial<PaymentsIntegrationRenamed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PaymentsIntegrationRenamed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PaymentsIntegrationDeleted
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<PaymentsIntegrationDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PaymentsIntegrationDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PaymentsIntegrationEnabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<PaymentsIntegrationEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PaymentsIntegrationEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PaymentsIntegrationDisabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<PaymentsIntegrationDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PaymentsIntegrationDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PaymentsEstablished
{

    public constructor(init?: Partial<PaymentsEstablished>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PaymentsEstablished'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PaymentsEnabled
{

    public constructor(init?: Partial<PaymentsEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PaymentsEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PaymentsDisabled
{

    public constructor(init?: Partial<PaymentsDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PaymentsDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PaymentsTriggerSaved
{
    public trigger: PaymentTrigger;

    public constructor(init?: Partial<PaymentsTriggerSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PaymentsTriggerSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PaymentTriggerMirrored
{
    public trigger: Trigger;

    public constructor(init?: Partial<PaymentTriggerMirrored>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PaymentTriggerMirrored'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PaymentsTriggerEnabled extends TriggerByIdEventBase
{
    public env: Env;

    public constructor(init?: Partial<PaymentsTriggerEnabled>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'PaymentsTriggerEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PaymentsTriggerDisabled extends TriggerByIdEventBase
{
    public env: Env;

    public constructor(init?: Partial<PaymentsTriggerDisabled>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'PaymentsTriggerDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class PaymentsTriggerDeleted extends TriggerByIdEventBase
{
    public env: Env;

    public constructor(init?: Partial<PaymentsTriggerDeleted>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'PaymentsTriggerDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

/** @description Disable logging service */
// @Route("/{version}/logs/disable", "GET")
// @Api(Description="Disable logging service")
export class DisableLogging extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DisableLogging>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableLogging'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/logs/enable", "GET")
export class EnableLogging extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description When true, also create a Norbix Logging integration backed by the project's default database. */
    // @ApiMember(DataType="boolean", Description="When true, also create a Norbix Logging integration backed by the project's default database.", Name="createNorbixLogging", ParameterType="query")
    public createNorbixLogging: boolean;

    public constructor(init?: Partial<EnableLogging>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableLogging'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Delete integration for particular project */
// @Route("/{version}/logs/integrations/{Id}", "DELETE")
// @Api(Description="Delete integration for particular project")
export class DeleteLoggingIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Logging integration id to delete, from get_logging_integrations. */
    // @ApiMember(Description="Logging integration id to delete, from get_logging_integrations.", IsRequired=true)
    public id: string;

    /** @description When true and this is a Norbix Logging integration, also permanently wipes the stored log entries in its backing database. Ignored for other providers. */
    // @ApiMember(Description="When true and this is a Norbix Logging integration, also permanently wipes the stored log entries in its backing database. Ignored for other providers.")
    public wipeLogs: boolean;

    public constructor(init?: Partial<DeleteLoggingIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteLoggingIntegrationRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Disable integration for particular project */
// @Route("/{version}/logs/integrations/{Id}/disable", "PUT")
// @Api(Description="Disable integration for particular project")
export class DisableLoggingIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Logging integration id to disable, from get_logging_integrations. */
    // @ApiMember(Description="Logging integration id to disable, from get_logging_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<DisableLoggingIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableLoggingIntegrationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Enable integration for particular project */
// @Route("/{version}/logs/integrations/{Id}/enable", "PUT")
// @Api(Description="Enable integration for particular project")
export class EnableLoggingIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Logging integration id to enable, from get_logging_integrations. */
    // @ApiMember(Description="Logging integration id to enable, from get_logging_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<EnableLoggingIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableLoggingIntegrationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets integration by specified Id */
// @Route("/{version}/logs/integrations/{id}", "GET")
// @Api(Description="Gets integration by specified Id")
export class GetLoggingIntegration extends CodeMashRequestBase implements IReturn<GetLoggingIntegrationResponse>
{
    /** @description Logging integration id to fetch, from get_logging_integrations. */
    // @ApiMember(Description="Logging integration id to fetch, from get_logging_integrations.", IsRequired=true)
    public id: string;

    public constructor(init?: Partial<GetLoggingIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetLoggingIntegration'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetLoggingIntegrationResponse(); }
}

/** @description Gets integrations */
// @Route("/{version}/logs/integrations", "GET")
// @Api(Description="Gets integrations")
export class GetLoggingIntegrations extends CodeMashListPaginationRequestBase implements IReturn<GetLoggingIntegrationsResponse>
{

    public constructor(init?: Partial<GetLoggingIntegrations>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetLoggingIntegrations'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetLoggingIntegrationsResponse(); }
}

/** @description Saves logging integration */
// @Route("/{version}/logs/integrations", "POST")
// @Api(Description="Saves logging integration")
// @DataContract
export class SaveLoggingIntegration extends CodeMashRequestBase implements IReturn<IdResponse>
{
    // @DataMember(Name="integration")
    public integration: LoggingIntegrationRequest;

    public constructor(init?: Partial<SaveLoggingIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveLoggingIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Test logging integration */
// @Route("/{version}/logs/integrations/test", "POST")
// @Api(Description="Test logging integration")
export class TestLoggingIntegration extends CodeMashRequestBase implements IReturn<TestLoggingIntegrationResponse>
{
    /** @description Logging integration id to test, from get_logging_integrations. */
    // @ApiMember(Description="Logging integration id to test, from get_logging_integrations.", IsRequired=true)
    public integrationId: string;

    public constructor(init?: Partial<TestLoggingIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'TestLoggingIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new TestLoggingIntegrationResponse(); }
}

/** @description Delete every log entry stored in the project's Norbix Logging integration */
// @Route("/{version}/logs/clean", "POST")
// @Api(Description="Delete every log entry stored in the project's Norbix Logging integration")
export class CleanLogs extends CodeMashRequestBase implements IReturn<CleanLogsResponse>
{

    public constructor(init?: Partial<CleanLogs>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CleanLogs'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new CleanLogsResponse(); }
}

/** @description Fetch the audit trail for a correlation id */
// @Route("/{version}/logs/audit", "GET")
// @Api(Description="Fetch the audit trail for a correlation id")
export class GetLogsByCorrelationId extends CodeMashRequestBase implements IReturn<GetLogsByCorrelationIdResponse>
{
    /** @description The correlation id whose full request trail you want. */
    // @ApiMember(DataType="string", Description="The correlation id whose full request trail you want.", IsRequired=true, Name="correlationId", ParameterType="query")
    public targetCorrelationId: string;

    public constructor(init?: Partial<GetLogsByCorrelationId>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetLogsByCorrelationId'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetLogsByCorrelationIdResponse(); }
}

/** @description Fetch a filtered, cursor-paged list of tenant log entries */
// @Route("/{version}/logs", "GET")
// @Api(Description="Fetch a filtered, cursor-paged list of tenant log entries")
export class GetLogs extends CodeMashListPaginationRequestBase implements IReturn<GetLogsResponse>
{
    /** @description Severity filter: Information, Warning or Error. */
    // @ApiMember(DataType="string", Description="Severity filter: Information, Warning or Error.", Name="level", ParameterType="query")
    public level?: string;

    /** @description Module filter: Database, Email, Membership, etc. */
    // @ApiMember(DataType="string", Description="Module filter: Database, Email, Membership, etc.", Name="module", ParameterType="query")
    public module?: string;

    /** @description Correlation id filter. Empty = no filter (show all). */
    // @ApiMember(DataType="string", Description="Correlation id filter. Empty = no filter (show all).", Name="logCorrelationId", ParameterType="query")
    public logCorrelationId?: string;

    /** @description Exact event code filter (e.g. db:record:insert). */
    // @ApiMember(DataType="string", Description="Exact event code filter (e.g. db:record:insert).", Name="eventCode", ParameterType="query")
    public eventCode?: string;

    /** @description Free-text search over title and message. */
    // @ApiMember(DataType="string", Description="Free-text search over title and message.", Name="search", ParameterType="query")
    public search?: string;

    /** @description Start of the timestamp range (inclusive, UTC). Optional. */
    // @ApiMember(Description="Start of the timestamp range (inclusive, UTC). Optional.")
    public fromUtc?: string;

    /** @description End of the timestamp range (inclusive, UTC). Optional. */
    // @ApiMember(Description="End of the timestamp range (inclusive, UTC). Optional.")
    public toUtc?: string;

    public constructor(init?: Partial<GetLogs>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetLogs'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetLogsResponse(); }
}

/** @description Fetch the per-project log settings (flags) */
// @Route("/{version}/logs/settings", "GET")
// @Api(Description="Fetch the per-project log settings (flags)")
export class GetLogSettings extends CodeMashRequestBase implements IReturn<GetLogSettingsResponse>
{

    public constructor(init?: Partial<GetLogSettings>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetLogSettings'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetLogSettingsResponse(); }
}

/** @description Update the per-project log settings (flags) */
// @Route("/{version}/logs/settings", "POST")
// @Api(Description="Update the per-project log settings (flags)")
export class SaveLogSettings extends CodeMashRequestBase implements IReturn<SaveLogSettingsResponse>
{
    /** @description Drop log entries from requests originating from the Norbix studio (cloud dashboard). */
    // @ApiMember(Description="Drop log entries from requests originating from the Norbix studio (cloud dashboard).")
    public skipCloudDashboardLogs: boolean;

    /** @description Strip request/response body meta off http:request / http:response log entries. */
    // @ApiMember(Description="Strip request/response body meta off http:request / http:response log entries.")
    public skipHttpBodyMeta: boolean;

    /** @description Turn on tenant-visible log entries for AI chat turns. Default false. */
    // @ApiMember(Description="Turn on tenant-visible log entries for AI chat turns. Default false.")
    public aiChatLoggingEnabled: boolean;

    public constructor(init?: Partial<SaveLogSettings>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveLogSettings'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new SaveLogSettingsResponse(); }
}

export class LoggingIntegrationSaved
{
    public integration: LoggingIntegration;

    public constructor(init?: Partial<LoggingIntegrationSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LoggingIntegrationSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class LoggingIntegrationTested
{
    public id: IntegrationId;
    public succeeded: boolean;
    public errorMessages: IReadOnlyList<string>;
    public testedAtUtc: string;
    public env?: Env;

    public constructor(init?: Partial<LoggingIntegrationTested>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LoggingIntegrationTested'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class LoggingIntegrationRenamed
{
    public id: IntegrationId;
    public name: DisplayName;
    public env?: Env;

    public constructor(init?: Partial<LoggingIntegrationRenamed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LoggingIntegrationRenamed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class LoggingIntegrationDeleted
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<LoggingIntegrationDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LoggingIntegrationDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class LoggingIntegrationEnabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<LoggingIntegrationEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LoggingIntegrationEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class LoggingIntegrationDisabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<LoggingIntegrationDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LoggingIntegrationDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class LoggingIntegrationSecretsConfigured
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<LoggingIntegrationSecretsConfigured>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LoggingIntegrationSecretsConfigured'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class LoggingIntegrationSecretsConfigurationFailed
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<LoggingIntegrationSecretsConfigurationFailed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LoggingIntegrationSecretsConfigurationFailed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class LoggingIntegrationSecretsCleared
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<LoggingIntegrationSecretsCleared>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LoggingIntegrationSecretsCleared'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class LoggingIntegrationSecretsClearingFailed
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<LoggingIntegrationSecretsClearingFailed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LoggingIntegrationSecretsClearingFailed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class LoggingIntegrationSetAsDefault
{
    public id: IntegrationId;

    public constructor(init?: Partial<LoggingIntegrationSetAsDefault>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LoggingIntegrationSetAsDefault'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class NorbixLoggingLogsWipeRequested
{
    public deletedIntegrationId: IntegrationId;
    public databaseIntegrationId: IntegrationId;

    public constructor(init?: Partial<NorbixLoggingLogsWipeRequested>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'NorbixLoggingLogsWipeRequested'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class LoggingEstablished
{

    public constructor(init?: Partial<LoggingEstablished>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LoggingEstablished'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class LoggingEnabled
{

    public constructor(init?: Partial<LoggingEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LoggingEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class LoggingDisabled
{

    public constructor(init?: Partial<LoggingDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LoggingDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

/** @description Lists the AI tools this host exposes (external-agent bridge). */
// @Route("/{version}/account/ai/tools", "GET")
// @Api(Description="Lists the AI tools this host exposes (external-agent bridge).")
export class GetAiToolsRequest extends RequestBase implements IReturn<GetAiToolsResponse>
{
    public toolset?: string;

    public constructor(init?: Partial<GetAiToolsRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAiToolsRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetAiToolsResponse(); }
}

/** @description Invokes one AI tool directly (external-agent bridge). */
// @Route("/{version}/account/ai/tools/{ToolName}", "POST")
// @Api(Description="Invokes one AI tool directly (external-agent bridge).")
export class InvokeAiToolRequest extends RequestBase implements IReturn<InvokeAiToolResponse>
{
    public toolName: string;
    public argumentsJson?: string;

    public constructor(init?: Partial<InvokeAiToolRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'InvokeAiToolRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new InvokeAiToolResponse(); }
}

/** @description Gets account info. */
// @Route("/{version}/account/chat/complete", "POST")
// @Api(Description="Gets account info.")
export class AskChatRequest extends RequestBase implements IReturn<AskChatResponse>
{
    public prompt: string;
    public profile?: string;

    public constructor(init?: Partial<AskChatRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AskChatRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AskChatResponse(); }
}

/** @description Uploads a file into an AI chat session. */
// @Route("/{version}/account/chat/attachments", "POST")
// @Api(Description="Uploads a file into an AI chat session.")
export class UploadChatAttachmentRequest extends RequestBase implements IReturn<UploadChatAttachmentResponse>
{
    public sessionId?: string;
    public fileName: string;
    public contentType: string;
    public base64Content: string;
    public profile?: string;
    public topic?: string;
    public projectId?: string;
    public env?: string;

    public constructor(init?: Partial<UploadChatAttachmentRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UploadChatAttachmentRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new UploadChatAttachmentResponse(); }
}

/** @description Reports AI chat availability and the model-picker menu. */
// @Route("/{version}/account/chat/availability", "GET")
// @Api(Description="Reports AI chat availability and the model-picker menu.")
export class ChatAvailabilityRequest extends RequestBase implements IReturn<ChatAvailabilityResponse>
{
    public projectId?: string;
    public env?: string;

    public constructor(init?: Partial<ChatAvailabilityRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ChatAvailabilityRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new ChatAvailabilityResponse(); }
}

/** @description Lists what the AI assistant remembers about this account. */
// @Route("/{version}/account/chat/memory", "GET")
// @Api(Description="Lists what the AI assistant remembers about this account.")
export class GetChatMemoryRequest extends RequestBase implements IReturn<GetChatMemoryResponse>
{
    public projectId?: string;

    public constructor(init?: Partial<GetChatMemoryRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetChatMemoryRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetChatMemoryResponse(); }
}

/** @description Deletes one AI memory note ('forget this'). */
// @Route("/{version}/account/chat/memory/{NoteId}", "DELETE")
// @Api(Description="Deletes one AI memory note ('forget this').")
export class ForgetChatMemoryRequest extends RequestBase implements IReturn<EmptyResponse>
{
    public noteId: string;

    public constructor(init?: Partial<ForgetChatMemoryRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ForgetChatMemoryRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Deletes an AI chat session (soft delete). */
// @Route("/{version}/account/chat/sessions/{SessionId}", "DELETE")
// @Api(Description="Deletes an AI chat session (soft delete).")
export class DeleteChatSessionRequest extends RequestBase implements IReturn<IdResponse>
{
    public sessionId: string;

    public constructor(init?: Partial<DeleteChatSessionRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteChatSessionRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Archives or unarchives an AI chat session. */
// @Route("/{version}/account/chat/sessions/{SessionId}/archive", "PATCH")
// @Api(Description="Archives or unarchives an AI chat session.")
export class SetChatSessionArchivedRequest extends RequestBase implements IReturn<IdResponse>
{
    public sessionId: string;
    public archived: boolean;

    public constructor(init?: Partial<SetChatSessionArchivedRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SetChatSessionArchivedRequest'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Pins or unpins an AI chat session. */
// @Route("/{version}/account/chat/sessions/{SessionId}/pin", "PATCH")
// @Api(Description="Pins or unpins an AI chat session.")
export class SetChatSessionPinnedRequest extends RequestBase implements IReturn<IdResponse>
{
    public sessionId: string;
    public pinned: boolean;

    public constructor(init?: Partial<SetChatSessionPinnedRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SetChatSessionPinnedRequest'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Marks or unmarks an AI chat session as "do not share". */
// @Route("/{version}/account/chat/sessions/{SessionId}/sharing", "PATCH")
// @Api(Description="Marks or unmarks an AI chat session as \"do not share\".")
export class SetChatSessionSharingRequest extends RequestBase implements IReturn<IdResponse>
{
    public sessionId: string;
    public doNotShare: boolean;

    public constructor(init?: Partial<SetChatSessionSharingRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SetChatSessionSharingRequest'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Lists the account's recent AI chat sessions. */
// @Route("/{version}/account/chat/sessions", "GET")
// @Api(Description="Lists the account's recent AI chat sessions.")
export class GetChatSessionsRequest extends RequestBase implements IReturn<GetChatSessionsResponse>
{
    public take?: number;
    public includeArchived?: boolean;

    public constructor(init?: Partial<GetChatSessionsRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetChatSessionsRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetChatSessionsResponse(); }
}

/** @description Returns one AI chat session's conversation entries — the transcript. */
// @Route("/{version}/account/chat/sessions/{SessionId}/entries", "GET")
// @Api(Description="Returns one AI chat session's conversation entries — the transcript.")
export class GetChatSessionEntriesRequest extends RequestBase implements IReturn<GetChatSessionEntriesResponse>
{
    public sessionId: string;
    public sinceSeq?: number;

    public constructor(init?: Partial<GetChatSessionEntriesRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetChatSessionEntriesRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetChatSessionEntriesResponse(); }
}

/** @description Records like / dislike feedback on one AI chat entry, or clears it. */
// @Route("/{version}/account/chat/sessions/{SessionId}/entries/{EntryId}/feedback", "POST")
// @Api(Description="Records like / dislike feedback on one AI chat entry, or clears it.")
export class SetChatEntryFeedbackRequest extends RequestBase implements IReturn<IdResponse>
{
    public sessionId: string;
    public entryId: string;
    public feedback?: string;

    public constructor(init?: Partial<SetChatEntryFeedbackRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SetChatEntryFeedbackRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Answers one open AI chat question — or a prepared change's Apply / Skip — and continues the conversation. */
// @Route("/{version}/account/chat/sessions/{SessionId}/questions/{EntryId}/answer", "POST")
// @Api(Description="Answers one open AI chat question — or a prepared change's Apply / Skip — and continues the conversation.")
export class AnswerChatQuestionRequest extends RequestBase implements IReturn<IdResponse>
{
    public sessionId: string;
    public entryId: string;
    public answers?: { [index:string]: string; };

    public constructor(init?: Partial<AnswerChatQuestionRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AnswerChatQuestionRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Approves or rejects a proposed AI chat plan. */
// @Route("/{version}/account/chat/sessions/{SessionId}/plans/{EntryId}/decision", "POST")
// @Api(Description="Approves or rejects a proposed AI chat plan.")
export class DecideChatPlanRequest extends RequestBase implements IReturn<IdResponse>
{
    public sessionId: string;
    public entryId: string;
    public decision: string;
    public comment?: string;

    public constructor(init?: Partial<DecideChatPlanRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DecideChatPlanRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Stops one running step of an AI chat plan run. */
// @Route("/{version}/account/chat/sessions/{SessionId}/steps/{EntryId}/stop", "POST")
// @Api(Description="Stops one running step of an AI chat plan run.")
export class StopChatRunStepRequest extends RequestBase implements IReturn<IdResponse>
{
    public sessionId: string;
    public entryId: string;

    public constructor(init?: Partial<StopChatRunStepRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'StopChatRunStepRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Runs one AI chat conversation turn. */
// @Route("/{version}/account/chat/turn", "POST")
// @Api(Description="Runs one AI chat conversation turn.")
export class ChatTurnRequest extends RequestBase implements IReturn<ChatTurnResponse>
{
    public sessionId?: string;
    public message: string;
    public profile?: string;
    public topic?: string;
    public llmIntegrationId?: string;
    public model?: string;
    public projectId?: string;
    public env?: string;
    public screenContext?: ChatScreenContextDto;

    public constructor(init?: Partial<ChatTurnRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ChatTurnRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new ChatTurnResponse(); }
}

/** @description MCP server endpoint — JSON-RPC 2.0 over HTTP POST exposing the AI tool catalog. */
// @Route("/{version}/account/mcp", "POST")
// @Api(Description="MCP server endpoint — JSON-RPC 2.0 over HTTP POST exposing the AI tool catalog.")
export class McpRequest implements IReturn<string>
{
    public version?: string;
    public requestStream: string;

    public constructor(init?: Partial<McpRequest>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'McpRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return ''; }
}

/** @description Reads a project's AI Brief: the requirements, decisions and assumptions the assistant recorded from conversations, each with the chat turn, user and time it came from. */
// @Route("/{version}/projects/{projectId}/ai/brief", "GET")
// @Api(Description="Reads a project's AI Brief: the requirements, decisions and assumptions the assistant recorded from conversations, each with the chat turn, user and time it came from.")
export class GetProjectBriefRequest extends CodeMashRequestBase implements IReturn<GetProjectBriefResponse>
{
    /** @description Return the Brief events after this sequence number as well (0 = all). Omit for the snapshot only. */
    // @ApiMember(Description="Return the Brief events after this sequence number as well (0 = all). Omit for the snapshot only.")
    public sinceSeq?: number;

    public constructor(init?: Partial<GetProjectBriefRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetProjectBriefRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetProjectBriefResponse(); }
}

/** @description Lists a project's AI work items: one serious ask each, with its goal, plans, changes, moved-out items, needs-you list and open questions. */
// @Route("/{version}/projects/{projectId}/ai/work-items", "GET")
// @Api(Description="Lists a project's AI work items: one serious ask each, with its goal, plans, changes, moved-out items, needs-you list and open questions.")
export class GetWorkItemsRequest extends CodeMashRequestBase implements IReturn<GetWorkItemsResponse>
{
    /** @description Filter by status: proposed, active, waiting, done, partly-done or dropped. Omit for all. */
    // @ApiMember(Description="Filter by status: proposed, active, waiting, done, partly-done or dropped. Omit for all.")
    public status?: string;

    public constructor(init?: Partial<GetWorkItemsRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetWorkItemsRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetWorkItemsResponse(); }
}

/** @description Reads one AI work item: the six long-task sections and the definition-of-done verdict. */
// @Route("/{version}/projects/{projectId}/ai/work-items/{WorkItemId}", "GET")
// @Api(Description="Reads one AI work item: the six long-task sections and the definition-of-done verdict.")
export class GetWorkItemRequest extends CodeMashRequestBase implements IReturn<GetWorkItemResponse>
{
    public workItemId: string;

    public constructor(init?: Partial<GetWorkItemRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetWorkItemRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetWorkItemResponse(); }
}

/** @description Exports one AI work item as markdown in the long-task shape: Goal, Plan, Changes, Rejected / moved out, Needs you, Open questions. */
// @Route("/{version}/projects/{projectId}/ai/work-items/{WorkItemId}/export.md", "GET")
// @Api(Description="Exports one AI work item as markdown in the long-task shape: Goal, Plan, Changes, Rejected / moved out, Needs you, Open questions.")
export class ExportWorkItemRequest extends CodeMashRequestBase implements IReturn<ExportWorkItemResponse>
{
    public workItemId: string;

    public constructor(init?: Partial<ExportWorkItemRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ExportWorkItemRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new ExportWorkItemResponse(); }
}

/** @description Ticks one manual line of a work item's "Needs you" checklist — the one write a human makes to a work item directly. */
// @Route("/{version}/projects/{projectId}/ai/work-items/{WorkItemId}/needs-you/{Index}/done", "POST")
// @Api(Description="Ticks one manual line of a work item's \"Needs you\" checklist — the one write a human makes to a work item directly.")
export class MarkNeedsYouDoneRequest extends CodeMashRequestBase implements IReturn<IdResponse>
{
    public workItemId: string;
    public index: number;
    /** @description Set false to un-tick the line. Default true. */
    // @ApiMember(Description="Set false to un-tick the line. Default true.")
    public done?: boolean;

    public constructor(init?: Partial<MarkNeedsYouDoneRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'MarkNeedsYouDoneRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/ai/integrations/llms/{Id}", "DELETE")
export class DeleteLlmIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Id of the LLM integration to delete. */
    // @ApiMember(Description="Id of the LLM integration to delete.")
    public id: string;

    public constructor(init?: Partial<DeleteLlmIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteLlmIntegrationRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/ai/integrations/llms/{Id}/disable", "PUT")
export class DisableLlmIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Id of the LLM integration to disable. */
    // @ApiMember(Description="Id of the LLM integration to disable.")
    public id: string;

    public constructor(init?: Partial<DisableLlmIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableLlmIntegrationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/ai/integrations/llms/{Id}/enable", "PUT")
export class EnableLlmIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Id of the LLM integration to enable. */
    // @ApiMember(Description="Id of the LLM integration to enable.")
    public id: string;

    public constructor(init?: Partial<EnableLlmIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableLlmIntegrationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/ai/integrations/llms/{id}", "GET")
export class GetLlmIntegration extends CodeMashRequestBase implements IReturn<GetLlmIntegrationResponse>
{
    /** @description Id of the LLM integration to fetch. */
    // @ApiMember(Description="Id of the LLM integration to fetch.")
    public id: string;

    public constructor(init?: Partial<GetLlmIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetLlmIntegration'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetLlmIntegrationResponse(); }
}

// @Route("/{version}/ai/integrations/llms/integrations", "GET")
export class GetLlmIntegrations extends CodeMashListPaginationRequestBase implements IReturn<GetLlmIntegrationsResponse>
{

    public constructor(init?: Partial<GetLlmIntegrations>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetLlmIntegrations'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetLlmIntegrationsResponse(); }
}

// @Route("/{version}/ai/integrations/llms/", "POST")
// @DataContract
export class SaveLlmIntegration extends CodeMashRequestBase implements IReturn<IdResponse>
{
    // @DataMember(Name="integration")
    public integration: LlmIntegrationRequest;

    public constructor(init?: Partial<SaveLlmIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveLlmIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/ai/integrations/llms/test", "POST")
export class TestLlmIntegration extends CodeMashRequestBase implements IReturn<TestLlmIntegrationResponse>
{
    /** @description Id of the LLM integration to test. */
    // @ApiMember(Description="Id of the LLM integration to test.")
    public integrationId: string;

    public constructor(init?: Partial<TestLlmIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'TestLlmIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new TestLlmIntegrationResponse(); }
}

// @Route("/{version}/ai/integrations/mcp/{Id}", "DELETE")
export class DeleteMcpIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Id of the MCP integration to delete. */
    // @ApiMember(Description="Id of the MCP integration to delete.")
    public id: string;

    public constructor(init?: Partial<DeleteMcpIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteMcpIntegrationRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/ai/integrations/mcp/{Id}/disable", "PUT")
export class DisableMcpIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Id of the MCP integration to disable. */
    // @ApiMember(Description="Id of the MCP integration to disable.")
    public id: string;

    public constructor(init?: Partial<DisableMcpIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableMcpIntegrationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/ai/integrations/mcp/{Id}/enable", "PUT")
export class EnableMcpIntegrationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description Id of the MCP integration to enable. */
    // @ApiMember(Description="Id of the MCP integration to enable.")
    public id: string;

    public constructor(init?: Partial<EnableMcpIntegrationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableMcpIntegrationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/ai/integrations/mcp/{id}", "GET")
export class GetMcpIntegration extends CodeMashRequestBase implements IReturn<GetMcpIntegrationResponse>
{
    /** @description Id of the MCP integration to fetch. */
    // @ApiMember(Description="Id of the MCP integration to fetch.")
    public id: string;

    public constructor(init?: Partial<GetMcpIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMcpIntegration'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetMcpIntegrationResponse(); }
}

// @Route("/{version}/ai/integrations/mcp/integrations", "GET")
export class GetMcpIntegrations extends CodeMashListPaginationRequestBase implements IReturn<GetMcpIntegrationsResponse>
{

    public constructor(init?: Partial<GetMcpIntegrations>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetMcpIntegrations'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetMcpIntegrationsResponse(); }
}

// @Route("/{version}/ai/integrations/mcp/", "POST")
// @DataContract
export class SaveMcpIntegration extends CodeMashRequestBase implements IReturn<IdResponse>
{
    // @DataMember(Name="integration")
    public integration: McpIntegrationRequest;

    public constructor(init?: Partial<SaveMcpIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveMcpIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/ai/integrations/mcp/test", "POST")
export class TestMcpIntegration extends CodeMashRequestBase implements IReturn<TestLlmIntegrationResponse>
{
    /** @description Id of the MCP integration to test. */
    // @ApiMember(Description="Id of the MCP integration to test.")
    public integrationId: string;

    public constructor(init?: Partial<TestMcpIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'TestMcpIntegration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new TestLlmIntegrationResponse(); }
}

export class LlmIntegrationSaved
{
    public llmIntegration: LlmIntegration;

    public constructor(init?: Partial<LlmIntegrationSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LlmIntegrationSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class LlmIntegrationDeleted
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<LlmIntegrationDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LlmIntegrationDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class LlmIntegrationEnabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<LlmIntegrationEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LlmIntegrationEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class LlmIntegrationDisabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<LlmIntegrationDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LlmIntegrationDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class LlmIntegrationSecretsConfigured
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<LlmIntegrationSecretsConfigured>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LlmIntegrationSecretsConfigured'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class LlmIntegrationSecretsConfigurationFailed
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<LlmIntegrationSecretsConfigurationFailed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LlmIntegrationSecretsConfigurationFailed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class LlmIntegrationTested
{
    public id: IntegrationId;
    public succeeded: boolean;
    public errorMessages: IReadOnlyList<string>;
    public testedAtUtc: string;
    public env?: Env;

    public constructor(init?: Partial<LlmIntegrationTested>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'LlmIntegrationTested'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class McpIntegrationSaved
{
    public mcpIntegration: McpIntegration;

    public constructor(init?: Partial<McpIntegrationSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'McpIntegrationSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class McpIntegrationDeleted
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<McpIntegrationDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'McpIntegrationDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class McpIntegrationEnabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<McpIntegrationEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'McpIntegrationEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class McpIntegrationDisabled
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<McpIntegrationDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'McpIntegrationDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class McpIntegrationSecretsConfigured
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<McpIntegrationSecretsConfigured>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'McpIntegrationSecretsConfigured'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class McpIntegrationSecretsConfigurationFailed
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<McpIntegrationSecretsConfigurationFailed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'McpIntegrationSecretsConfigurationFailed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class McpIntegrationTested
{
    public id: IntegrationId;
    public succeeded: boolean;
    public errorMessages: IReadOnlyList<string>;
    public testedAtUtc: string;
    public env?: Env;

    public constructor(init?: Partial<McpIntegrationTested>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'McpIntegrationTested'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class WebhookIntegrationSaved
{
    public integration: WebhookIntegration;

    public constructor(init?: Partial<WebhookIntegrationSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'WebhookIntegrationSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class WebhookIntegrationExtraHeadersChanged
{
    public id: IntegrationId;
    public extraHeaders?: IReadOnlyDictionary<string, string>;

    public constructor(init?: Partial<WebhookIntegrationExtraHeadersChanged>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'WebhookIntegrationExtraHeadersChanged'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class WebhookIntegrationSecretsConfigured
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<WebhookIntegrationSecretsConfigured>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'WebhookIntegrationSecretsConfigured'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class WebhookIntegrationSecretsConfigurationFailed
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<WebhookIntegrationSecretsConfigurationFailed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'WebhookIntegrationSecretsConfigurationFailed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class WebhookIntegrationSecretsCleared
{
    public id: IntegrationId;
    public env?: Env;

    public constructor(init?: Partial<WebhookIntegrationSecretsCleared>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'WebhookIntegrationSecretsCleared'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class WebhookDestinationSaved
{
    public integrationId: IntegrationId;
    public destination: WebhookDestination;

    public constructor(init?: Partial<WebhookDestinationSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'WebhookDestinationSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class WebhookDestinationRemoved
{
    public integrationId: IntegrationId;
    public destinationId: WebhookDestinationId;

    public constructor(init?: Partial<WebhookDestinationRemoved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'WebhookDestinationRemoved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class WebhookDestinationEnabled
{
    public integrationId: IntegrationId;
    public destinationId: WebhookDestinationId;

    public constructor(init?: Partial<WebhookDestinationEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'WebhookDestinationEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class WebhookDestinationDisabled
{
    public integrationId: IntegrationId;
    public destinationId: WebhookDestinationId;

    public constructor(init?: Partial<WebhookDestinationDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'WebhookDestinationDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

/** @description Gets the project's webhook integration */
// @Route("/{version}/webhooks/integration", "GET")
// @Api(Description="Gets the project's webhook integration")
export class GetWebhookIntegration extends CodeMashRequestBase implements IReturn<GetWebhookIntegrationResponse>
{

    public constructor(init?: Partial<GetWebhookIntegration>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetWebhookIntegration'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetWebhookIntegrationResponse(); }
}

// @Route("/{version}/webhooks/integration/secret", "GET")
export class RevealWebhookIntegrationSecretRequest extends CodeMashRequestBase implements IReturn<RevealWebhookIntegrationSecretResponse>
{

    public constructor(init?: Partial<RevealWebhookIntegrationSecretRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RevealWebhookIntegrationSecretRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new RevealWebhookIntegrationSecretResponse(); }
}

// @Route("/{version}/webhooks/integration/secret/rotate", "POST")
export class RotateWebhookIntegrationSecretRequest extends CodeMashRequestBase implements IReturn<RotateWebhookIntegrationSecretResponse>
{

    public constructor(init?: Partial<RotateWebhookIntegrationSecretRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RotateWebhookIntegrationSecretRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new RotateWebhookIntegrationSecretResponse(); }
}

// @Route("/{version}/webhooks/integration/extra-headers", "PUT")
export class UpdateWebhookIntegrationExtraHeadersRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The integration-wide static headers to send with every delivery. Pass an empty dictionary to clear all extra headers. */
    // @ApiMember(Description="The integration-wide static headers to send with every delivery. Pass an empty dictionary to clear all extra headers.")
    public extraHeaders?: { [index:string]: string; };

    public constructor(init?: Partial<UpdateWebhookIntegrationExtraHeadersRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateWebhookIntegrationExtraHeadersRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/webhooks/{source}/{integrationInstanceId}", "POST")
export class ReceiveWebhook implements IReturn<HttpResult>
{
    public source: string;
    public integrationInstanceId: string;
    public requestStream: string;

    public constructor(init?: Partial<ReceiveWebhook>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ReceiveWebhook'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new HttpResult(); }
}

// @Route("/{version}/webhooks/destinations/{DestinationId}/disable", "PUT")
export class DisableWebhookDestinationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The webhook destination id to disable, from get_webhook_integration. */
    // @ApiMember(Description="The webhook destination id to disable, from get_webhook_integration.", IsRequired=true)
    public destinationId: string;

    public constructor(init?: Partial<DisableWebhookDestinationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableWebhookDestinationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/webhooks/destinations/{DestinationId}/enable", "PUT")
export class EnableWebhookDestinationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The webhook destination id to enable, from get_webhook_integration. */
    // @ApiMember(Description="The webhook destination id to enable, from get_webhook_integration.", IsRequired=true)
    public destinationId: string;

    public constructor(init?: Partial<EnableWebhookDestinationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableWebhookDestinationRequest'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/webhooks/destinations/{DestinationId}", "DELETE")
export class RemoveWebhookDestinationRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The webhook destination id to remove, from get_webhook_integration. */
    // @ApiMember(Description="The webhook destination id to remove, from get_webhook_integration.", IsRequired=true)
    public destinationId: string;

    public constructor(init?: Partial<RemoveWebhookDestinationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RemoveWebhookDestinationRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/webhooks/destinations", "POST")
export class SaveWebhookDestinationRequest extends CodeMashRequestBase implements IReturn<SaveWebhookDestinationResponse>
{
    /** @description Existing destination id to overwrite, from get_webhook_integration. Omit to create a new destination. */
    // @ApiMember(Description="Existing destination id to overwrite, from get_webhook_integration. Omit to create a new destination.")
    public destinationId?: string;

    /** @description Display name for the destination. */
    // @ApiMember(Description="Display name for the destination.", IsRequired=true)
    public destinationName: string;

    /** @description The HTTPS endpoint URL that will receive the webhook deliveries. */
    // @ApiMember(Description="The HTTPS endpoint URL that will receive the webhook deliveries.", IsRequired=true)
    public endpointUrl: string;

    /** @description The event names this destination subscribes to. Empty subscribes to none. */
    // @ApiMember(Description="The event names this destination subscribes to. Empty subscribes to none.")
    public selectedEvents: string[] = [];

    /** @description Destination-specific static headers sent with every delivery to this destination. These win over the integration-wide extra headers on duplicate keys. */
    // @ApiMember(Description="Destination-specific static headers sent with every delivery to this destination. These win over the integration-wide extra headers on duplicate keys.")
    public extraHeaders?: { [index:string]: string; };

    /** @description Whether this destination is enabled for delivery. Defaults to true. */
    // @ApiMember(Description="Whether this destination is enabled for delivery. Defaults to true.")
    public isEnabled: boolean;

    public constructor(init?: Partial<SaveWebhookDestinationRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveWebhookDestinationRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new SaveWebhookDestinationResponse(); }
}

// @Route("/{version}/scheduler/disable", "GET")
export class DisableScheduler extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<DisableScheduler>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableScheduler'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/scheduler/enable", "GET")
export class EnableScheduler extends CodeMashRequestBase implements IReturn<EmptyResponse>
{

    public constructor(init?: Partial<EnableScheduler>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableScheduler'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/scheduler/tasks/{Id}", "DELETE")
export class DeleteSchedulerTask extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    public id: string;

    public constructor(init?: Partial<DeleteSchedulerTask>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteSchedulerTask'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/scheduler/tasks/{Id}/disable", "PUT")
export class DisableSchedulerTask extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    public id: string;

    public constructor(init?: Partial<DisableSchedulerTask>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DisableSchedulerTask'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/scheduler/tasks/{Id}/enable", "PUT")
export class EnableSchedulerTask extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    public id: string;

    public constructor(init?: Partial<EnableSchedulerTask>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'EnableSchedulerTask'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Gets a scheduled task by id */
// @Route("/{version}/scheduler/tasks/{id}", "GET")
// @Api(Description="Gets a scheduled task by id")
export class GetSchedulerTask extends CodeMashRequestBase implements IReturn<GetSchedulerTaskResponse>
{
    public id: string;

    public constructor(init?: Partial<GetSchedulerTask>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchedulerTask'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSchedulerTaskResponse(); }
}

/** @description Gets scheduled tasks */
// @Route("/{version}/scheduler/tasks", "GET")
// @Api(Description="Gets scheduled tasks")
export class GetSchedulerTasks extends CodeMashListPaginationRequestBase implements IReturn<GetSchedulerTasksResponse>
{
    /** @description Optional filter — only return tasks of this type. */
    // @ApiMember(Description="Optional filter — only return tasks of this type.")
    public type?: SchedulerTaskType;

    /** @description Optional filter — only return tasks whose enabled state matches this value. */
    // @ApiMember(Description="Optional filter — only return tasks whose enabled state matches this value.")
    public enabled?: boolean;

    public constructor(init?: Partial<GetSchedulerTasks>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSchedulerTasks'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSchedulerTasksResponse(); }
}

/** @description Save scheduled task */
// @Route("/{version}/scheduler/tasks", "POST")
// @Api(Description="Save scheduled task")
// @DataContract
export class SaveSchedulerTaskRequest extends CodeMashRequestBase implements IReturn<IdResponse>
{
    // @DataMember
    public taskId?: string;

    // @DataMember
    public name: string;

    // @DataMember
    public description?: string;

    // @DataMember
    public cron: string;

    // @DataMember
    public initiatorUserId: string;

    // @DataMember
    public isEnabled: boolean;

    // @DataMember
    public stopOnError: boolean;

    // @DataMember
    public task: SchedulerTaskRequest;

    public constructor(init?: Partial<SaveSchedulerTaskRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveSchedulerTaskRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

export class SchedulerEnabled
{

    public constructor(init?: Partial<SchedulerEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SchedulerEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SchedulerDisabled
{

    public constructor(init?: Partial<SchedulerDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SchedulerDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SchedulerTaskSaved
{
    public task: SchedulerTask;

    public constructor(init?: Partial<SchedulerTaskSaved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SchedulerTaskSaved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SchedulerTaskEnabled
{
    public taskId: TaskId;

    public constructor(init?: Partial<SchedulerTaskEnabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SchedulerTaskEnabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SchedulerTaskDisabled
{
    public taskId: TaskId;

    public constructor(init?: Partial<SchedulerTaskDisabled>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SchedulerTaskDisabled'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SchedulerTaskDeleted
{
    public taskId: TaskId;

    public constructor(init?: Partial<SchedulerTaskDeleted>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SchedulerTaskDeleted'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

// @Route("/{version}/resources/resolve", "POST")
export class ResolveResources extends CodeMashRequestBase implements IReturn<ResolveResourcesResponse>
{
    public refs: IReadOnlyList<ResourceRefDto>;

    public constructor(init?: Partial<ResolveResources>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ResolveResources'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new ResolveResourcesResponse(); }
}

/** @description Create a contact */
// @Route("/{version}/membership/users", "POST")
// @Api(Description="Create a contact")
export class CreateContactRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
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

    public constructor(init?: Partial<CreateContactRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateContactRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Archive a contact */
// @Route("/{version}/membership/users/{contactId}", "DELETE")
// @Api(Description="Archive a contact")
export class DeleteContact extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The contact id (ct_…) to archive. Get it from get_all_contacts. */
    // @ApiMember(Description="The contact id (ct_…) to archive. Get it from get_all_contacts.", IsRequired=true)
    public contactId: string;

    public constructor(init?: Partial<DeleteContact>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteContact'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Get a contact */
// @Route("/{version}/membership/users/{contactId}", "GET")
// @Api(Description="Get a contact")
export class GetContact extends CodeMashRequestBase implements IReturn<GetContactResponse>
{
    /** @description The contact id (ct_…) to fetch. Get it from get_all_contacts. */
    // @ApiMember(Description="The contact id (ct_…) to fetch. Get it from get_all_contacts.", IsRequired=true)
    public contactId: string;

    public constructor(init?: Partial<GetContact>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetContact'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetContactResponse(); }
}

/** @description List contacts */
// @Route("/{version}/membership/users", "GET")
// @Api(Description="List contacts")
export class GetAllContacts extends CodeMashRequestBase implements IReturn<GetAllContactsResponse>
{
    /** @description Cursor for the next page: pass the nextCursor from the previous call. Omit for the first page. */
    // @ApiMember(Description="Cursor for the next page: pass the nextCursor from the previous call. Omit for the first page.")
    public startingAfter?: string;

    /** @description How many contacts to return per page (default 50). */
    // @ApiMember(Description="How many contacts to return per page (default 50).")
    public pageSize?: number;

    public constructor(init?: Partial<GetAllContacts>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAllContacts'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetAllContactsResponse(); }
}

/** @description Merge contacts */
// @Route("/{version}/membership/users/merge", "POST")
// @Api(Description="Merge contacts")
export class MergeContactsRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The contact id (ct_…) that will remain after the merge (the survivor). */
    // @ApiMember(Description="The contact id (ct_…) that will remain after the merge (the survivor).", IsRequired=true)
    public survivorId: string;

    /** @description The contact ids (ct_…) to merge into the survivor and archive. At least one. */
    // @ApiMember(Description="The contact ids (ct_…) to merge into the survivor and archive. At least one.", IsRequired=true)
    public mergedIds: string[] = [];

    public constructor(init?: Partial<MergeContactsRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'MergeContactsRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Update a contact */
// @Route("/{version}/membership/users/{contactId}", "PATCH")
// @Api(Description="Update a contact")
export class UpdateContactRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
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

    public constructor(init?: Partial<UpdateContactRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateContactRequest'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Link a login to a contact */
// @Route("/{version}/membership/users/{contactId}/identities", "POST")
// @Api(Description="Link a login to a contact")
export class AddContactIdentityRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The contact id (ct_…) to link the login to. */
    // @ApiMember(Description="The contact id (ct_…) to link the login to.", IsRequired=true)
    public contactId: string;

    /** @description The login (identity) id (usr_…) to link to the contact. */
    // @ApiMember(Description="The login (identity) id (usr_…) to link to the contact.", IsRequired=true)
    public authId: string;

    public constructor(init?: Partial<AddContactIdentityRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AddContactIdentityRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Make a login the contact's primary */
// @Route("/{version}/membership/users/{contactId}/identities/{authId}/promote", "POST")
// @Api(Description="Make a login the contact's primary")
export class PromoteContactIdentityRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The contact id (ct_…) whose login is being promoted. */
    // @ApiMember(Description="The contact id (ct_…) whose login is being promoted.", IsRequired=true)
    public contactId: string;

    /** @description The linked login (identity) id (usr_…) to make primary. */
    // @ApiMember(Description="The linked login (identity) id (usr_…) to make primary.", IsRequired=true)
    public authId: string;

    public constructor(init?: Partial<PromoteContactIdentityRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'PromoteContactIdentityRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

/** @description Unlink a login from a contact */
// @Route("/{version}/membership/users/{contactId}/identities/{authId}", "DELETE")
// @Api(Description="Unlink a login from a contact")
export class RemoveContactIdentityRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    /** @description The contact id (ct_…) to unlink the login from. */
    // @ApiMember(Description="The contact id (ct_…) to unlink the login from.", IsRequired=true)
    public contactId: string;

    /** @description The login (identity) id (usr_…) to unlink from the contact. */
    // @ApiMember(Description="The login (identity) id (usr_…) to unlink from the contact.", IsRequired=true)
    public authId: string;

    public constructor(init?: Partial<RemoveContactIdentityRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RemoveContactIdentityRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/compliance/settings", "GET")
export class GetComplianceSettings extends CodeMashRequestBase implements IReturn<GetComplianceSettingsResponse>
{

    public constructor(init?: Partial<GetComplianceSettings>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetComplianceSettings'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetComplianceSettingsResponse(); }
}

// @Route("/{version}/compliance/retention", "DELETE")
export class RemoveRetentionWindowRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    public dataKind: string;

    public constructor(init?: Partial<RemoveRetentionWindowRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RemoveRetentionWindowRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/compliance/retention", "POST")
export class SaveRetentionWindowRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    public dataKind: string;
    public days: number;
    public action: string;

    public constructor(init?: Partial<SaveRetentionWindowRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveRetentionWindowRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/compliance/regimes", "POST")
export class AssignRegimeRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    public regime: string;

    public constructor(init?: Partial<AssignRegimeRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AssignRegimeRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/compliance/regimes", "DELETE")
export class ClearRegimeRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    public regime: string;

    public constructor(init?: Partial<ClearRegimeRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ClearRegimeRequest'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/compliance/purposes", "POST")
export class DefineConsentPurposeRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    public key: string;
    public name: string;
    public channel: string;
    public mappedTags: string[] = [];
    public regulatoryBasis: string[] = [];
    public description?: string;

    public constructor(init?: Partial<DefineConsentPurposeRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DefineConsentPurposeRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/compliance/purposes/deprecate", "POST")
export class DeprecateConsentPurposeRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    public key: string;

    public constructor(init?: Partial<DeprecateConsentPurposeRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'DeprecateConsentPurposeRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/compliance/holds", "GET")
export class GetLegalHolds extends CodeMashRequestBase implements IReturn<GetLegalHoldsResponse>
{

    public constructor(init?: Partial<GetLegalHolds>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetLegalHolds'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetLegalHoldsResponse(); }
}

// @Route("/{version}/compliance/holds", "POST")
export class PlaceLegalHoldRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    public subjectKind: string;
    public subjectId: string;
    public reason: string;

    public constructor(init?: Partial<PlaceLegalHoldRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'PlaceLegalHoldRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/compliance/holds/release", "POST")
export class ReleaseLegalHoldRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    public holdId: string;

    public constructor(init?: Partial<ReleaseLegalHoldRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ReleaseLegalHoldRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/compliance/dsar/approve", "POST")
export class ApproveDsarRequestRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    public requestId: string;

    public constructor(init?: Partial<ApproveDsarRequestRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ApproveDsarRequestRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/compliance/dsar/reject", "POST")
export class RejectDsarRequestRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    public requestId: string;
    public reason: string;

    public constructor(init?: Partial<RejectDsarRequestRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RejectDsarRequestRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/compliance/dsar", "GET")
export class GetDsarRequests extends CodeMashRequestBase implements IReturn<GetDsarRequestsResponse>
{

    public constructor(init?: Partial<GetDsarRequests>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDsarRequests'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetDsarRequestsResponse(); }
}

// @Route("/{version}/compliance/dsar", "POST")
export class OpenDsarRequestRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
{
    public subjectKind: string;
    public subjectId: string;

    public constructor(init?: Partial<OpenDsarRequestRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'OpenDsarRequestRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/compliance/audit", "GET")
export class GetComplianceAuditLog extends CodeMashRequestBase implements IReturn<GetComplianceAuditLogResponse>
{
    public from?: string;
    public to?: string;
    public subjectKind?: string;
    public subjectId?: string;
    public limit: number;

    public constructor(init?: Partial<GetComplianceAuditLog>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetComplianceAuditLog'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetComplianceAuditLogResponse(); }
}

// @Route("/{version}/compliance/account", "GET")
export class GetAccountCompliance extends RequestBase implements IReturn<GetAccountComplianceResponse>
{

    public constructor(init?: Partial<GetAccountCompliance>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAccountCompliance'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetAccountComplianceResponse(); }
}

// @Route("/{version}/compliance/account/dsar-policy", "POST")
export class SaveDsarPolicyRequest extends RequestBase implements IReturn<EmptyResponse>
{
    public mode: string;
    public delayDays: number;

    public constructor(init?: Partial<SaveDsarPolicyRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveDsarPolicyRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/compliance/account/incident-routing", "POST")
export class SaveIncidentRoutingRequest extends RequestBase implements IReturn<EmptyResponse>
{
    public autoForwardAdvisories: boolean;
    public securityContact?: string;

    public constructor(init?: Partial<SaveIncidentRoutingRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'SaveIncidentRoutingRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/support/cases/{CaseId}/close", "POST")
export class CloseSupportCaseRequest extends RequestBase implements IReturn<EmptyResponse>
{
    public caseId: string;

    public constructor(init?: Partial<CloseSupportCaseRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CloseSupportCaseRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/support/cases/{CaseId}/reopen", "POST")
export class ReopenSupportCaseRequest extends RequestBase implements IReturn<EmptyResponse>
{
    public caseId: string;
    public reason: string;

    public constructor(init?: Partial<ReopenSupportCaseRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ReopenSupportCaseRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/support/cases/{CaseId}/resolve", "POST")
export class ResolveSupportCaseRequest extends RequestBase implements IReturn<EmptyResponse>
{
    public caseId: string;
    public resolution?: CaseResolutionDto;

    public constructor(init?: Partial<ResolveSupportCaseRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ResolveSupportCaseRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new EmptyResponse(); }
}

// @Route("/{version}/support/cases/{CaseId}/messages", "POST")
export class AppendSupportCaseMessageRequest extends RequestBase implements IReturn<IdResponse>
{
    public caseId: string;
    public message: string;

    public constructor(init?: Partial<AppendSupportCaseMessageRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'AppendSupportCaseMessageRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/{version}/support/cases/{CaseId}", "GET")
export class GetSupportCase extends RequestBase implements IReturn<GetSupportCaseResponse>
{
    public caseId: string;

    public constructor(init?: Partial<GetSupportCase>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSupportCase'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSupportCaseResponse(); }
}

// @Route("/{version}/support/cases", "GET")
export class GetSupportCases extends RequestBase implements IReturn<GetSupportCasesResponse>
{
    public pagingArgs?: PagingArgs;

    public constructor(init?: Partial<GetSupportCases>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetSupportCases'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetSupportCasesResponse(); }
}

// @Route("/{version}/support/cases", "POST")
export class OpenSupportCaseRequest extends RequestBase implements IReturn<IdResponse>
{
    public kind: string;
    public severity: string;
    public subject: string;
    public message: string;
    public projectId?: string;

    public constructor(init?: Partial<OpenSupportCaseRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'OpenSupportCaseRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

export class SupportCaseOpened
{
    public caseId: SupportCaseId;
    public accountId: AccountId;
    public projectId?: ProjectId;
    public reporterId?: string;
    public kind: SupportCaseKind;
    public severity: SupportCaseSeverity;
    public subject: string;
    public deploymentMode: DeploymentMode;
    public gatewayVersion?: string;
    public region?: string;
    public planTier?: string;
    public openedOn: UtcDateTime;

    public constructor(init?: Partial<SupportCaseOpened>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SupportCaseOpened'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SupportCaseTriaged
{
    public caseId: SupportCaseId;
    public kind: SupportCaseKind;
    public severity: SupportCaseSeverity;
    public affectedModule?: string;
    public triagedBy?: string;
    public triagedOn: UtcDateTime;

    public constructor(init?: Partial<SupportCaseTriaged>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SupportCaseTriaged'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SupportCaseMessageAppended
{
    public caseId: SupportCaseId;
    public message: SupportMessageRef;

    public constructor(init?: Partial<SupportCaseMessageAppended>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SupportCaseMessageAppended'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SupportCaseStatusChanged
{
    public caseId: SupportCaseId;
    public from: SupportCaseStatus;
    public to: SupportCaseStatus;
    public changedOn: UtcDateTime;

    public constructor(init?: Partial<SupportCaseStatusChanged>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SupportCaseStatusChanged'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SupportCaseResolved
{
    public caseId: SupportCaseId;
    public resolution: CaseResolution;
    public resolvedOn: UtcDateTime;

    public constructor(init?: Partial<SupportCaseResolved>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SupportCaseResolved'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SupportCaseClosed
{
    public caseId: SupportCaseId;
    public closedBy?: string;
    public closedOn: UtcDateTime;
    public reason: SupportCaseCloseReason;

    public constructor(init?: Partial<SupportCaseClosed>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SupportCaseClosed'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SupportCaseReopened
{
    public caseId: SupportCaseId;
    public reason: string;
    public reopenedOn: UtcDateTime;

    public constructor(init?: Partial<SupportCaseReopened>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SupportCaseReopened'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SupportCaseWaitingReminderSent
{
    public caseId: SupportCaseId;
    public tierDays: number;
    public sentOn: UtcDateTime;

    public constructor(init?: Partial<SupportCaseWaitingReminderSent>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SupportCaseWaitingReminderSent'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

export class SupportCaseAttachmentLinked
{
    public caseId: SupportCaseId;
    public attachmentRef: string;
    public fileName?: string;
    public linkedOn: UtcDateTime;

    public constructor(init?: Partial<SupportCaseAttachmentLinked>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'SupportCaseAttachmentLinked'; }
    public getMethod() { return 'POST'; }
    public createResponse() {}
}

// @Route("/{version}/diagnostics/packs", "GET")
export class GetDiagnosticPacks extends CodeMashRequestBase implements IReturn<GetDiagnosticPacksResponse>
{

    public constructor(init?: Partial<GetDiagnosticPacks>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDiagnosticPacks'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetDiagnosticPacksResponse(); }
}

// @Route("/{version}/diagnostics/packs/{PackName}/run", "POST")
export class RunDiagnosticPackRequest extends CodeMashRequestBase implements IReturn<RunDiagnosticPackResponse>
{
    public packName: string;
    public packVersion?: number;
    public caseId?: string;

    public constructor(init?: Partial<RunDiagnosticPackRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RunDiagnosticPackRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new RunDiagnosticPackResponse(); }
}

// @Route("/{version}/diagnostics/echo", "GET")
export class GetDiagnosticEcho extends CodeMashRequestBase implements IReturn<GetDiagnosticEchoResponse>
{
    public caseId?: string;

    public constructor(init?: Partial<GetDiagnosticEcho>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'GetDiagnosticEcho'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetDiagnosticEchoResponse(); }
}

// @Route("/{version}/diagnostics/events", "GET")
export class ReadDiagnosticEventsRequest extends CodeMashRequestBase implements IReturn<ReadDiagnosticEventsResponse>
{
    public stream: string;
    public from: number;
    public count: number;
    public caseId?: string;

    public constructor(init?: Partial<ReadDiagnosticEventsRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'ReadDiagnosticEventsRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new ReadDiagnosticEventsResponse(); }
}

// @Route("/{version}/diagnostics/logs", "GET")
export class QueryDiagnosticLogsRequest extends CodeMashListPaginationRequestBase implements IReturn<QueryDiagnosticLogsResponse>
{
    public level?: string;
    public module?: string;
    public logCorrelationId?: string;
    public eventCode?: string;
    public search?: string;
    public fromUtc?: string;
    public toUtc?: string;
    public caseId?: string;

    public constructor(init?: Partial<QueryDiagnosticLogsRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryDiagnosticLogsRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryDiagnosticLogsResponse(); }
}

// @Route("/{version}/diagnostics/redis", "GET")
export class InspectDiagnosticRedisRequest extends CodeMashRequestBase implements IReturn<InspectDiagnosticRedisResponse>
{
    public keyPattern: string;
    public caseId?: string;

    public constructor(init?: Partial<InspectDiagnosticRedisRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'InspectDiagnosticRedisRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new InspectDiagnosticRedisResponse(); }
}

// @Route("/{version}/diagnostics/health/{CheckId}", "POST")
export class RunDiagnosticHealthCheckRequest extends CodeMashRequestBase implements IReturn<RunDiagnosticHealthCheckResponse>
{
    public checkId: string;
    public caseId?: string;

    public constructor(init?: Partial<RunDiagnosticHealthCheckRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'RunDiagnosticHealthCheckRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new RunDiagnosticHealthCheckResponse(); }
}

/** @description Sign In */
// @Route("/auth", "GET,POST")
// @Route("/auth/{provider}", "GET,POST")
// @Route("/v3/auth", "POST,GET,OPTIONS")
// @Route("/v3/auth/{provider}", "POST,GET,OPTIONS")
// @Route("/v3/staff/auth", "POST,GET,OPTIONS")
// @Route("/v3/staff/auth/{provider}", "POST,GET,OPTIONS")
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
    // @sdk-dto-patches (injected by sync-types.mjs)
    export class UserApiKey
    {
        public key?: string;
        public keyType?: string;
        public expiryDate?: string;
        public meta?: { [index:string]: string; };

        public constructor(init?: Partial<UserApiKey>) { (Object as any).assign(this, init); }
    }
    export class GetUserEmailPreferencesResponse extends ResponseBase
    {
        public defaultLanguage: string;
        public projectLanguages: string[] = [];
        public blockAllMarketingMessages: boolean;
        public subscribedTags?: { [index:string]: HashSet<string>; };

        public constructor(init?: Partial<GetUserEmailPreferencesResponse>) { super(init); (Object as any).assign(this, init); }
    }
    export class GetApiKeysResponse
    {
        public results?: UserApiKey[];
        public meta?: { [index:string]: string; };
        public responseStatus?: ResponseStatus;

        public constructor(init?: Partial<GetApiKeysResponse>) { (Object as any).assign(this, init); }
    }
    export class RegenerateApiKeysResponse
    {
        public results?: UserApiKey[];
        public meta?: { [index:string]: string; };
        public responseStatus?: ResponseStatus;

        public constructor(init?: Partial<RegenerateApiKeysResponse>) { (Object as any).assign(this, init); }
    }
    // @Route("/{version}/notifications/user/preferences", "GET")
    export class GetUserNotificationPreferences extends CodeMashRequestBase implements IReturn<GetUserEmailPreferencesResponse>
    {
        public userId: string;

        public constructor(init?: Partial<GetUserNotificationPreferences>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'GetUserNotificationPreferences'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new GetUserEmailPreferencesResponse(); }
    }
    // @Route("/{version}/notifications/user/preferences", "PUT")
    export class UpdateUserNotificationsPreferences extends CodeMashRequestBase implements IReturn<EmptyResponse>
    {
        public userId: string;
        public blockAllMarketingMessages: boolean;
        public subscribedToTags?: { [index:string]: HashSet<string>; };

        public constructor(init?: Partial<UpdateUserNotificationsPreferences>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'UpdateUserNotificationsPreferences'; }
        public getMethod() { return 'PUT'; }
        public createResponse() { return new EmptyResponse(); }
    }
    // @Route("/apikeys")
    // @Route("/apikeys/{Environment}")
    export class GetApiKeys implements IReturn<GetApiKeysResponse>, IGet
    {
        public environment?: string;
        public meta?: { [index:string]: string; };

        public constructor(init?: Partial<GetApiKeys>) { (Object as any).assign(this, init); }
        public getTypeName() { return 'GetApiKeys'; }
        public getMethod() { return 'GET'; }
        public createResponse() { return new GetApiKeysResponse(); }
    }
    // @Route("/apikeys/regenerate")
    // @Route("/apikeys/regenerate/{Environment}")
    export class RegenerateApiKeys implements IReturn<RegenerateApiKeysResponse>, IPost
    {
        public environment?: string;
        public meta?: { [index:string]: string; };

        public constructor(init?: Partial<RegenerateApiKeys>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'RegenerateApiKeys'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new RegenerateApiKeysResponse(); }
    }
    // @Route("/{version}/notifications/contacts/{contactId}/marketing-state/{channel}/consent", "POST")
    export class GrantContactConsentRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
    {
        public contactId: string;
        public channel: string;
        public lawfulBasis: string;
        declare source: string;
        public evidenceRef?: string;

        public constructor(init?: Partial<GrantContactConsentRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'GrantContactConsentRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new EmptyResponse(); }
    }
    // @Route("/{version}/notifications/contacts/{contactId}/marketing-state/{channel}/unsubscribe", "POST")
    export class UnsubscribeContactRequest extends CodeMashRequestBase implements IReturn<EmptyResponse>
    {
        public contactId: string;
        public channel: string;
        public reason?: string;

        public constructor(init?: Partial<UnsubscribeContactRequest>) { super(init); (Object as any).assign(this, init); }
        public getTypeName() { return 'UnsubscribeContactRequest'; }
        public getMethod() { return 'POST'; }
        public createResponse() { return new EmptyResponse(); }
    }

}