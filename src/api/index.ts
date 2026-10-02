import type { Transport } from '../client/transport.js';

import { AccessTokenModule } from './access_token.js';
import { AiModule } from './ai.js';
import { ApikeysModule } from './apikeys.js';
import { AuthModule } from './auth.js';
import { DatabaseModule } from './database.js';
import { EchoModule } from './echo.js';
import { FilesModule } from './files.js';
import { MembershipModule } from './membership.js';
import { PublicModule } from './public.js';

/**
 * Auto-generated namespace exposing every api endpoint group.
 * Refreshed by `npm run generate-endpoints`.
 */
export class ApiNamespace {
  public readonly accessToken: AccessTokenModule;
  public readonly ai: AiModule;
  public readonly apikeys: ApikeysModule;
  public readonly auth: AuthModule;
  public readonly database: DatabaseModule;
  public readonly echo: EchoModule;
  public readonly files: FilesModule;
  public readonly membership: MembershipModule;
  public readonly public: PublicModule;

  constructor(transport: Transport) {
    this.accessToken = new AccessTokenModule(transport);
    this.ai = new AiModule(transport);
    this.apikeys = new ApikeysModule(transport);
    this.auth = new AuthModule(transport);
    this.database = new DatabaseModule(transport);
    this.echo = new EchoModule(transport);
    this.files = new FilesModule(transport);
    this.membership = new MembershipModule(transport);
    this.public = new PublicModule(transport);
  }
}
