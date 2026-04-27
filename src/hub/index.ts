import type { Transport } from '../client/transport.js';

import { AccessTokenModule } from './access_token.js';
import { AccountModule } from './account.js';
import { AiModule } from './ai.js';
import { ApikeysModule } from './apikeys.js';
import { AuthModule } from './auth.js';
import { DatabaseModule } from './database.js';
import { EchoModule } from './echo.js';
import { EmailModule } from './email.js';
import { FilesModule } from './files.js';
import { InternalModule } from './internal.js';
import { LogsModule } from './logs.js';
import { MembershipModule } from './membership.js';
import { NotificationsModule } from './notifications.js';
import { PaymentsModule } from './payments.js';
import { SchedulerModule } from './scheduler.js';
import { WebhooksModule } from './webhooks.js';

/**
 * Auto-generated namespace exposing every hub endpoint group.
 * Refreshed by `npm run generate-endpoints`.
 */
export class HubNamespace {
  public readonly accessToken: AccessTokenModule;
  public readonly account: AccountModule;
  public readonly ai: AiModule;
  public readonly apikeys: ApikeysModule;
  public readonly auth: AuthModule;
  public readonly database: DatabaseModule;
  public readonly echo: EchoModule;
  public readonly email: EmailModule;
  public readonly files: FilesModule;
  public readonly internal: InternalModule;
  public readonly logs: LogsModule;
  public readonly membership: MembershipModule;
  public readonly notifications: NotificationsModule;
  public readonly payments: PaymentsModule;
  public readonly scheduler: SchedulerModule;
  public readonly webhooks: WebhooksModule;

  constructor(transport: Transport) {
    this.accessToken = new AccessTokenModule(transport);
    this.account = new AccountModule(transport);
    this.ai = new AiModule(transport);
    this.apikeys = new ApikeysModule(transport);
    this.auth = new AuthModule(transport);
    this.database = new DatabaseModule(transport);
    this.echo = new EchoModule(transport);
    this.email = new EmailModule(transport);
    this.files = new FilesModule(transport);
    this.internal = new InternalModule(transport);
    this.logs = new LogsModule(transport);
    this.membership = new MembershipModule(transport);
    this.notifications = new NotificationsModule(transport);
    this.payments = new PaymentsModule(transport);
    this.scheduler = new SchedulerModule(transport);
    this.webhooks = new WebhooksModule(transport);
  }
}
