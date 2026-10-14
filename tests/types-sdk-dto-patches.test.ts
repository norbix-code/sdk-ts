import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

import { CodeMashApi2 } from '../src/types/api2.dtos.js';
import { CodeMashHub2 } from '../src/types/hub2.dtos.js';

/**
 * The `@sdk-dto-patches` block in the type files holds request / response
 * types the gateway metadata does not carry (`scripts/sync-types.mjs`,
 * maintained in sdks/typegen). A stale copy of that script put the block
 * AFTER the namespace's closing brace: the classes were still in the file, but
 * `CodeMashHub2.GetApiKeys` and nine others no longer resolved, so a
 * regeneration looked like "the gateway lost 9 types". These checks fail the
 * moment a patch type leaves its namespace again.
 */
const HUB_PATCHES = [
  'UserApiKey',
  'GetUserEmailPreferencesResponse',
  'GetApiKeysResponse',
  'RegenerateApiKeysResponse',
  'GetUserNotificationPreferences',
  'UpdateUserNotificationsPreferences',
  'GetApiKeys',
  'RegenerateApiKeys',
  'GrantContactConsentRequest',
  'UnsubscribeContactRequest',
] as const;

const API_PATCHES = [
  'UserApiKey',
  'GetApiKeysResponse',
  'RegenerateApiKeysResponse',
  'GetApiKeys',
  'RegenerateApiKeys',
  'ChangePasswordRequest',
  'RequestPasswordResetRequest',
  'ConfirmPasswordResetRequest',
] as const;

function typeFile(name: string): string {
  return readFileSync(fileURLToPath(new URL(`../src/types/${name}`, import.meta.url)), 'utf8');
}

describe('sdk dto patches stay inside their namespace', () => {
  it.each(HUB_PATCHES)('CodeMashHub2.%s resolves', (name) => {
    expect(typeof (CodeMashHub2 as unknown as Record<string, unknown>)[name]).toBe('function');
  });

  it.each(API_PATCHES)('CodeMashApi2.%s resolves', (name) => {
    expect(typeof (CodeMashApi2 as unknown as Record<string, unknown>)[name]).toBe('function');
  });

  it.each(['hub2.dtos.ts', 'api2.dtos.ts'])(
    '%s: no class declared outside the namespace',
    (file) => {
      const src = typeFile(file);
      expect(src).toContain('@sdk-dto-patches');
      // Everything inside `export module … {` is indented; a top-level class is
      // one that landed after the closing brace.
      expect(src.match(/^export class \w+/gm) ?? []).toEqual([]);
    },
  );
});
