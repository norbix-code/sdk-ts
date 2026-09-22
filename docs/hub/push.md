# Push — choosing an audience and a provider

[← Back to the notifications reference](./notifications.md)

`docs/hub/notifications.md` lists every push method with its verb and path.
Two of them take a body whose shape the server picks from a discriminator, and
that is not visible from the method signature. This page covers those two.

Everything here is also asserted in `tests/hub/push-variants.test.ts`.

## Choosing who a campaign goes to

`createPushCampaign` reads the audience from `campaign.source`. Send that field
plus the audience's own fields:

| audience                      | `source`         | own fields                                                                                                                             |
| ----------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| everyone in the project       | `allUsers`       | `rolesNames`, `userTags` (both optional filters)                                                                                       |
| a named list of project users | `specifiedUsers` | `userRecipients`                                                                                                                       |
| a named list of account users | `accountUsers`   | `userRecipients`                                                                                                                       |
| rows of a database collection | `collection`     | `schemaName`, `fields` (the record fields that hold the recipient), `fieldType` (`User` or `Email`), optional `roleNames`, `languages` |
| raw device tokens             | `devices`        | `devices`: a list of `{ token, deliveryFamily }`, `deliveryFamily` one of `Ios`, `Android`, `Chrome`, `Safari`, `Expo`                 |

Every target also takes `templateId` (required) and the optional `integrationId`,
`language`, `notes`, `campaignTime` (Unix seconds) and `mappedTokens`. Note the
spelling: `rolesNames` on `allUsers`, but `roleNames` on `collection` — the
gateway names them differently.

```ts
await norbix.hub.notifications.createPushCampaign({
  campaign: {
    source: 'allUsers',
    templateId: 'tpl_123',
    userTags: ['beta'],
  },
});
```

Send `source` as the name, not a number — the server reads it as a string.

## Choosing a push provider

`savePushIntegration` works the same way, with `integration.provider`:

| provider                    | `provider` value  | own fields                                                                      |
| --------------------------- | ----------------- | ------------------------------------------------------------------------------- |
| Fake (sandbox, never sends) | `Fake`            | none                                                                            |
| Android / Firebase          | `AndroidFirebase` | `projectId`, `clientEmail`, `serviceAccountJson`                                |
| Apple APNs                  | `AppleApns`       | `teamId`, `appBundleId`, `keyId`, `privateKey`, `isProduction`                  |
| Chrome extension            | `ChromePush`      | `extensionId` (a GUID), `vapidPublicKey`, `vapidPrivateKey`, optional `subject` |
| Chrome web                  | `ChromeWeb`       | `vapidPublicKey`, `vapidPrivateKey`, optional `subject`                         |
| Edge web                    | `EdgeWeb`         | `vapidPublicKey`, `vapidPrivateKey`, optional `subject`                         |
| Firefox web                 | `FirefoxWeb`      | `vapidPublicKey`, `vapidPrivateKey`, optional `subject`                         |
| Safari                      | `SafariPush`      | `websitePushId`, `certificateP12Base64`, `certificatePassword`                  |

Every provider also takes `integrationName` and `isEnabled`; send `integrationId`
to update an existing one. The Chrome extension value is `ChromePush`. The
generated types also list `CodeMashChromePlugin` and other `CodeMash*` values —
the server rejects those here with "Unsupported provider".

```ts
await norbix.hub.notifications.savePushIntegration({
  integration: { provider: 'Fake', integrationName: 'sandbox', isEnabled: true },
});
```

Use `Fake` in tests and local development. It accepts a send and contacts no
push service, so nothing reaches a real device.

## Registering a device

A device is registered for one user. Send the device under `pushDeviceDto`
(`deviceOs` and `token` are required; `deviceId`, `brand`, `manufacturer`,
`modelName`, `deviceName`, `deviceType` are optional) plus `userId`:

```ts
await norbix.hub.notifications.registerDevice({
  userId: 'user_123',
  pushDeviceDto: { deviceOs: 'iOS', token: '<device token>' },
});
```

## Known gaps in the generated types

These calls work at runtime — the transport reads route tokens off the request
object — but TypeScript cannot help you fill them, because the generated
request type is empty or does not match the route:

| method                   | what to pass         | why                                                                        |
| ------------------------ | -------------------- | -------------------------------------------------------------------------- |
| `stopPushCampaign`       | `{ Id: '...' }`      | `StopPushCampaignRequest` has no fields                                    |
| `deletePushCampaign`     | `{ Id: '...' }`      | `DeletePushCampaignRequest` has no fields                                  |
| `getPushCampaignMessage` | `{ campaignId, id }` | the route's `{id}` token has no matching field on `GetPushCampaignMessage` |

The five campaign audience shapes above are likewise absent from the generated
types, so pass them as plain objects for now.
