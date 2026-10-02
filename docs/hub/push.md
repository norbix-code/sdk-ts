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

## Listing registered devices

`getPushDevices` returns the devices registered in the project, each with the
user it belongs to. Narrow it with `userId`, `deviceKey` (the provider token)
or `platform` (`ios`, `android`, `chrome`, `safari`, `expo`); a word outside
that list is refused rather than answered with an empty page.

```ts
const devices = await norbix.hub.notifications.getPushDevices({ platform: 'ios' });
```

Devices are stored inside their user, so a page is a page of **users** and
carries every matching device those users hold. Follow `hasMore` rather than
stopping at the first short page.

`getPushDevice` takes one device id and answers with the device and its owner:

```ts
const device = await norbix.hub.notifications.getPushDevice({ id: 'pnd_123' });
```

## Preview a notification with its signed link (no sign-in)

The gateway opens the three preview routes without sign-in when it gets a
valid signed link as `hash`. The hash alone is the key: no API key, no
project id. A signed-in member can instead pass `projectId` +
`notificationId` (no hash) and needs the read permission.

| method                     | route                                        |
| -------------------------- | -------------------------------------------- |
| `previewPushNotification`  | `GET /{version}/notifications/push/preview`  |
| `previewEmailNotification` | `GET /{version}/notifications/email/preview` |
| `previewSmsNotification`   | `GET /{version}/notifications/sms/preview`   |

These routes use the transport scope `'optional'`: a token is sent when the
client has one, and never demanded. With no token the request goes out with
no `Authorization` header instead of failing with `NORBIX_NOT_AUTHENTICATED`.

```ts
// Someone who holds only the link — no apiKey, no bearerToken.
const norbix = new Norbix({ projectId: 'any' }); // the constructor still asks for one
const preview = await norbix.hub.notifications.previewPushNotification({
  hash: linkFromTheEmail,
});
```

A bad or expired link answers `401`; a signed-in member without the read
permission gets `403`; a malformed request gets `400`. The SDK does not try a
token refresh on a `401` it got without sending a token — a new token cannot
fix a bad link.

> The preview methods in `src/hub/notifications.ts` switch to `'optional'`
> when that generated module is next refreshed. Until then they are still
> marked `'project'` and need a token. The transport side is covered by
> `tests/transport-optional-scope.test.ts`.

## Known gaps in the generated types

These calls work at runtime — the transport reads route tokens off the request
object — but TypeScript cannot help you fill them, because the generated
request type is empty or does not match the route:

| method               | what to pass    | why                                       |
| -------------------- | --------------- | ----------------------------------------- |
| `stopPushCampaign`   | `{ Id: '...' }` | `StopPushCampaignRequest` has no fields   |
| `deletePushCampaign` | `{ Id: '...' }` | `DeletePushCampaignRequest` has no fields |

The five campaign audience shapes above are likewise absent from the generated
types, so pass them as plain objects for now.
