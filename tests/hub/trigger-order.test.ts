import { describe, expect, it } from 'vitest';

import type { CodeMashHub2 } from '../../src/types/hub2.dtos.js';
import { makeClient } from '../_helpers.js';

/**
 * Trigger "order" and "break on failure": the gateway added `order` (whole
 * number, lower runs first) and `breakOnError` (stop the later triggers of the
 * same event when this one fails) to every trigger. The typed save request
 * carries both, the read DTO and the list row return both, and each save
 * method sends them to the gateway as given.
 */
describe('triggers — order and breakOnError', () => {
  const trigger = {
    name: 'welcome first',
    isEnabled: true,
    order: 0,
    breakOnError: true,
    action: { type: 'WebhookCall' } as CodeMashHub2.TriggerActionDto,
  };

  const saves = [
    ['membership', 'saveMembershipTrigger', 'Membership', '/membership/triggers'],
    ['database', 'saveSchemaTrigger', 'Schema', '/database/schemas/triggers'],
    ['files', 'saveFilesTrigger', 'Files', '/files/triggers'],
    ['payments', 'savePaymentsTrigger', 'Payments', '/payments/triggers'],
  ] as const;

  for (const [module, method, type, path] of saves) {
    it(`${method} sends order and breakOnError in the trigger body`, async () => {
      const { norbix, mock } = makeClient();
      const request: Partial<CodeMashHub2.SaveTriggerRequest> = {
        ...trigger,
        type: type as CodeMashHub2.TriggerType,
      };
      const fn = (
        norbix.hub as unknown as Record<string, Record<string, (a?: unknown) => Promise<unknown>>>
      )[module]![method]!;

      await fn({ trigger: request });

      expect(mock.lastCall?.method).toBe('POST');
      expect(mock.lastCall?.url).toContain(path);
      const sent = JSON.parse(mock.lastCall?.body ?? '{}').trigger;
      expect({ type: sent.type, order: sent.order, breakOnError: sent.breakOnError }).toEqual({
        type,
        order: 0,
        breakOnError: true,
      });
    });
  }

  it('the read DTO and the list row carry both fields', () => {
    const dto: Pick<CodeMashHub2.TriggerDto, 'viewId' | 'name' | 'order' | 'breakOnError'> = {
      viewId: 'trg_1',
      name: 'welcome first',
      order: 2,
      breakOnError: true,
    };
    const row: Pick<CodeMashHub2.TriggerProjectionList, 'order' | 'breakOnError'> = {
      order: undefined,
      breakOnError: false,
    };
    const queued: CodeMashHub2.IQueuedTrigger = dto;

    expect({ queued, row }).toEqual({
      queued: { viewId: 'trg_1', name: 'welcome first', order: 2, breakOnError: true },
      row: { order: undefined, breakOnError: false },
    });
  });
});
