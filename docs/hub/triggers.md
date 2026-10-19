# Hub · Triggers

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.triggers` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                        | Verb   | Path                                        | Scope     |
| ------------------------------------------------------------- | ------ | ------------------------------------------- | --------- |
| [`getTriggerDefinition`](#gettriggerdefinition)               | `GET`  | `/{version}/triggers/{id}/definition`       | `project` |
| [`getTriggersNeedingAttention`](#gettriggersneedingattention) | `GET`  | `/{version}/triggers/attention`             | `project` |
| [`testTriggerPreExecuteCode`](#testtriggerpreexecutecode)     | `POST` | `/{version}/triggers/pre-execute-code/test` | `project` |

## Reference

### getTriggerDefinition

`GET` `/{version}/triggers/{id}/definition`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetTriggerDefinition`
**Response**: `CodeMashHub2.GetTriggerDefinitionResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.triggers.getTriggerDefinition({
  id: 'id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetTriggerDefinitionResponse
```

[↑ Top](#endpoints)

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

### testTriggerPreExecuteCode

`POST` `/{version}/triggers/pre-execute-code/test`

Run a connection / delivery test against the integration.

**Request DTO**: `CodeMashHub2.TestTriggerPreExecuteCode`
**Response**: `CodeMashHub2.TestTriggerPreExecuteCodeResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.triggers.testTriggerPreExecuteCode({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.TestTriggerPreExecuteCodeResponse
```

[↑ Top](#endpoints)
