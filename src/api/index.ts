import type { Transport } from '../client/transport.js';

import { AccessTokenModule } from './access_token.js';
import { ApikeysModule } from './apikeys.js';
import { AuthModule } from './auth.js';
import { ChatModule } from './chat.js';
import { DatabaseModule } from './database.js';
import { EchoModule } from './echo.js';
import { MembershipModule } from './membership.js';

/**
 * Auto-generated namespace exposing every api endpoint group.
 * Refreshed by `internal maintenance workflow`.
 */
export class ApiNamespace {
  public readonly accessToken: AccessTokenModule;
  public readonly apikeys: ApikeysModule;
  public readonly auth: AuthModule;
  public readonly chat: ChatModule;
  public readonly database: DatabaseModule;
  public readonly echo: EchoModule;
  public readonly membership: MembershipModule;

  constructor(transport: Transport) {
    this.accessToken = new AccessTokenModule(transport);
    this.apikeys = new ApikeysModule(transport);
    this.auth = new AuthModule(transport);
    this.chat = new ChatModule(transport);
    this.database = new DatabaseModule(transport);
    this.echo = new EchoModule(transport);
    this.membership = new MembershipModule(transport);
  }
}
