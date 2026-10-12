import type { NorbixConfig } from '../client/types.js';
import type { CodeMashHub2 } from '../types/hub2.dtos.js';

/** Envelope versions this SDK can parse (`specVersion`). */
export const CODE_FUNCTION_SPEC_VERSION = '1';

/**
 * `event.source` as it is serialized on the wire: the gateway writes enums in
 * camelCase (`"database"`), while the generated `CodeFunctionSource` enum
 * carries the PascalCase member names (`'Database'`). The parser accepts both
 * spellings; compare with `event.isSource('database')`, never with `===`.
 */
export type CodeFunctionSourceName =
  'database' | 'membership' | 'files' | 'payments' | 'ai' | 'scheduler' | 'manual';

/**
 * `data.database` with the documents typed as your collection's record.
 * `old` is absent on an insert, `new` on a delete. When both documents together
 * exceed 200 KB they are left out, `truncated` is `true` and `oldRef` / `newRef`
 * say where to fetch them.
 */
export interface DatabaseRecordChange<T = Record<string, unknown>> extends Omit<
  CodeMashHub2.DatabaseRecordChangeDto,
  'old' | 'new'
> {
  old?: T;
  new?: T;
}

/** `data.user` with the user documents typed (defaults to the SDK's `UserDto`). */
export interface UserChange<T = CodeMashHub2.UserDto> extends Omit<
  CodeMashHub2.UserChangeDto,
  'old' | 'new'
> {
  old?: T;
  new?: T;
}

/** `data.file` — upload → `new`, delete → `old` (today only the path). */
export interface FileChange<T = Record<string, unknown>> extends Omit<
  CodeMashHub2.FileChangeDto,
  'old' | 'new'
> {
  old?: T;
  new?: T;
}

/**
 * The `NorbixConfig` subset a function builds its client from — everything the
 * envelope's `context` knows: the project, the environment the event happened
 * in, the deployment's Hub and Api addresses, and the run-as user's bearer
 * token. Spread it into `new Norbix({ ...event.clientOptions(), timeoutMs: 5_000 })`.
 */
export interface CodeFunctionClientOptions extends Pick<
  NorbixConfig,
  'projectId' | 'accountId' | 'env' | 'region' | 'bearerToken'
> {
  projectId: string;
  accountId: string;
  env: string;
  bearerToken: string;
  baseUrl: { hub: string; api: string };
}
