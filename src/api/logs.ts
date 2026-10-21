import type { RequestOverrideOptions, Transport } from '../client/transport.js';
import type { CodeMashApi2 } from '../types/api2.dtos.js';

/**
 * Auto-generated. Do not edit by hand — run `npm run generate-endpoints`
 * to refresh this file from the DTO definitions.
 *
 * Group: logs
 * Endpoints: 1
 */
export class LogsModule {
  constructor(private readonly transport: Transport) {}

  /**
   * POST /{version}/logs
   * Request DTO: WriteLogs
   */
  writeLogs = (
    request: Partial<CodeMashApi2.WriteLogs> = {} as Partial<CodeMashApi2.WriteLogs>,
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.WriteLogsResponse> => {
    return this.transport.send<CodeMashApi2.WriteLogsResponse>({
      target: 'api',
      path: '/{version}/logs',
      method: 'POST',
      request,
      pathParams: [],
      scope: 'project',
      ...options,
    });
  };

  // @hand-written:begin
  /**
   * Hand-written helper (not from `generate-endpoints`; the generator keeps
   * the `@hand-written` block when it regenerates this module).
   *
   * Send your app's own log lines to the project's Logs — one line or a list
   * of 1–100. Same call as `writeLogs({ entries })` (POST /{version}/logs on
   * the API host). The answer comes at once with `{ accepted }`: the lines are
   * queued, not yet stored.
   *
   * Each line: `title` (required, ≤ 200), `level` (`information` default,
   * `warning`, `error`), `message` (≤ 8000), `eventCode` (a-z 0-9 _ . : -,
   * ≤ 64, stored as `app:<code>`), `correlationId` (letters digits _ -, ≤ 64),
   * `timestamp` (UTC, ≤ 7 days old, ≤ 5 minutes ahead), `meta` (≤ 20 keys).
   *
   * Refusals throw a `NorbixError`: 400 for a broken line, 400
   * `CM-ERRORS-LOGGING-002` when the Logs module is off, 429
   * `CM-ERRORS-LOGGING-003` when the project's per-minute quota is used up —
   * then `err.retryAfterSeconds` says when to send again.
   */
  write = (
    entries:
      | (Omit<CodeMashApi2.WriteLogEntry, 'level'> & {
          level?: 'information' | 'warning' | 'error';
        })
      | (Omit<CodeMashApi2.WriteLogEntry, 'level'> & {
          level?: 'information' | 'warning' | 'error';
        })[],
    options: RequestOverrideOptions = {},
  ): Promise<CodeMashApi2.WriteLogsResponse> => {
    return this.writeLogs({ entries: Array.isArray(entries) ? entries : [entries] }, options);
  };
  // @hand-written:end
}
