# Hub · Triggers

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.triggers` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                        | Verb  | Path                            | Scope     |
| ------------------------------------------------------------- | ----- | ------------------------------- | --------- |
| [`getTriggersNeedingAttention`](#gettriggersneedingattention) | `GET` | `/{version}/triggers/attention` | `project` |

## Reference

### getTriggersNeedingAttention

`GET` `/{version}/triggers/attention`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetTriggersNeedingAttention`
**Response**: `CodeMashHub2.GetTriggersNeedingAttentionResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.triggers.getTriggersNeedingAttention({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetTriggersNeedingAttentionResponse
```

[↑ Top](#endpoints)
