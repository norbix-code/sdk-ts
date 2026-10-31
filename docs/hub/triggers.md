# Hub · Triggers

[← Back to Hub index](./_index.md) · [↑ Back to project README](../../README.md)

Accessed as `norbix.hub.triggers` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                                                            | Verb   | Path                                           | Scope     |
| ----------------------------------------------------------------- | ------ | ---------------------------------------------- | --------- |
| [`checkTriggerExecutionIdentity`](#checktriggerexecutionidentity) | `POST` | `/{version}/triggers/execution-identity/check` | `project` |
| [`getTriggerDefinition`](#gettriggerdefinition)                   | `GET`  | `/{version}/triggers/{id}/definition`          | `project` |
| [`getTriggersNeedingAttention`](#gettriggersneedingattention)     | `GET`  | `/{version}/triggers/attention`                | `project` |
| [`getTriggerRuns`](#gettriggerruns)                               | `GET`  | `/{version}/triggers/runs`                     | `project` |
| [`getTriggerRun`](#gettriggerrun)                                 | `GET`  | `/{version}/triggers/runs/{Id}`                | `project` |
| [`testTriggerPreExecuteCode`](#testtriggerpreexecutecode)         | `POST` | `/{version}/triggers/pre-execute-code/test`    | `project` |

## Reference

### checkTriggerExecutionIdentity

`POST` `/{version}/triggers/execution-identity/check`

Run a runtime check.

**Request DTO**: `CodeMashHub2.CheckTriggerExecutionIdentityRequest`
**Response**: `CodeMashHub2.CheckTriggerExecutionIdentityResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.triggers.checkTriggerExecutionIdentity({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.CheckTriggerExecutionIdentityResponse
```

[↑ Top](#endpoints)

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

### getTriggerRuns

`GET` `/{version}/triggers/runs`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetTriggerRuns`
**Response**: `CodeMashHub2.GetTriggerRunsResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.triggers.getTriggerRuns({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetTriggerRunsResponse
```

[↑ Top](#endpoints)

### getTriggerRun

`GET` `/{version}/triggers/runs/{Id}`

Fetch a single item by ID.

**Request DTO**: `CodeMashHub2.GetTriggerRun`
**Response**: `CodeMashHub2.GetTriggerRunResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.hub.triggers.getTriggerRun({
  Id: 'Id-here',
  // Other fields: see CodeMash type for the full request shape.
});
// → typed as CodeMashHub2.GetTriggerRunResponse
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

<!-- @hand-written:begin -->

## Who a trigger runs as, and what it did

A trigger save and a scheduler task save take `executionIdentityId`: a service user id from `norbix.hub.membership.getExecutionIdentities()`, or empty for the environment's default identity. `checkTriggerExecutionIdentity` answers what that identity lacks for an action, and saves nothing. A Code or Marketplace action no longer has its own `runAsUserId`.

`getTriggerRuns({ triggerType, triggerId, status? })` lists one trigger's runs, newest first, for 30 days. `getTriggerRun({ id, triggerType })` reads one; a run of another trigger type answers not found, so `triggerType` is required on both.

<!-- @hand-written:end -->
