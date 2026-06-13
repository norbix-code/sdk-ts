# Endpoint coverage audit for `norbix`

[← Back to docs index](./README.md) · [↑ Back to project README](../README.md)

> Audit date: 2026-05-21. Refreshed after the gateway `Community.Api` /
> `Community.Hub` projects were updated, `api2.dtos.ts` / `hub2.dtos.ts` were
> regenerated, and the SDK endpoint modules were rebuilt from those DTOs.

## Current coverage

The SDK is generated from the gateway DTO contracts. After the latest sync it
exposes every route the gateway publishes in its metadata:

| Surface                                | Modules | Endpoints |
| -------------------------------------- | ------: | --------: |
| `norbix.api` (runtime, project-scoped) |       8 |        66 |
| `norbix.hub` (control plane)           |      17 |       313 |
| **Total**                              |  **25** |   **379** |

## What the latest sync added (+89 endpoints)

Two new modules and a large set of new actions on existing modules:

| Module              | Change             | Highlights                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `api.files`         | **New module (8)** | `requestUploadUrl`, `commitUpload`, `downloadFileApi`, `getSignedUrl`, `getFileInfo`, `listFiles`, `deleteFileApi`, `deleteManyFilesApi`                                                                                                                                                                                                                                                                        |
| `api.membership`    | +16                | Passkeys (`passkeyRegistrationOptions`, `verifyPasskeyRegistration`, `passkeyAuthenticationOptions`, `verifyPasskeyAuthentication`, `listPasskeys`, `renamePasskey`, `revokePasskey`, `hasPasskey`, `refreshPasskeyToken`, `passkeyLogout`), email verification (`startEmailVerification`, `confirmEmailVerification`), magic links (`requestMagicLink`, `consumeMagicLink`), `useRecoveryCode`, `linkIdentity` |
| `hub.notifications` | +55                | SMS campaigns/templates/integrations/settings/preview, push campaigns and batches, contacts (CRUD, identities, marketing-state consent/unsubscribe), email validation integrations, razor-syntax-check                                                                                                                                                                                                          |
| `hub.resources`     | **New module (1)** | `resolveResources`                                                                                                                                                                                                                                                                                                                                                                                              |
| `hub.database`      | +3                 | Integration test, connection string, flex tiers                                                                                                                                                                                                                                                                                                                                                                 |
| `hub.files`         | +2                 | Folder / item browser endpoints                                                                                                                                                                                                                                                                                                                                                                                 |
| `hub.membership`    | +2                 | Passkey settings, policy options                                                                                                                                                                                                                                                                                                                                                                                |
| `hub.logs`          | +1                 | Audit log endpoint                                                                                                                                                                                                                                                                                                                                                                                              |
| `hub.webhooks`      | +1                 | Inbound webhook route                                                                                                                                                                                                                                                                                                                                                                                           |

### File upload

File upload **is** in the SDK, but it does not stream binary content through the
Norbix API. The `api.files` module uses the signed-URL pattern:
`requestUploadUrl` returns a direct-to-storage URL, the client uploads the bytes
straight to storage, then `commitUpload` records the result. This keeps file
bytes off the Norbix API path.

## Still not covered

These are not in the gateway DTO metadata, so the endpoint generator cannot
discover them. They are tracked as follow-up work.

| Area                            | Status                                                                                                                                                                                                                                                                                                          |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Code functions (`/code/*`)      | The `Hub.Code` projects are referenced by `Community.Hub.csproj`, but no `/code/*` routes appear in `hub2.dtos.ts`. They are likely gated behind a release flag, so the gateway does not publish them in metadata. Once the gateway exposes them, a re-sync picks them up automatically — no SDK change needed. |
| Real-time / Server Events (SSE) | `ConfigureServerEvents` is enabled on both hosts, but SSE is a streaming transport, not a REST contract, so metadata never describes it. Needs a hand-written `events` module once the public stream URL and token flow are final.                                                                              |
| Cluster routing                 | No generated endpoint requires a legacy `cluster` parameter. Nothing to implement until a contract needs it.                                                                                                                                                                                                    |

## How the SDK is refreshed

The endpoint modules, their tests, and the per-module docs are generated from
the DTO contracts by an internal maintenance workflow. The steps:

1. The gateway projects change and the cloud DTOs (`api2.dtos.ts`,
   `hub2.dtos.ts`) are regenerated from gateway metadata.
2. The fresh DTOs are synced into `src/types/`.
3. The endpoint generator rebuilds `src/api/*`, `src/hub/*`, their tests, and
   `docs/api` / `docs/hub`.

Verification loop after any DTO change:

```bash
cd sdks/norbix-js
npm run typecheck
npm test
```
