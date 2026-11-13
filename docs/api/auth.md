# API · Auth

[← Back to API index](./_index.md) · [↑ Back to project README](../../README.md)

Sign-in / sign-out and federated provider flows. Most apps prefer `norbix.login(...)` over calling these directly.

Accessed as `norbix.api.auth` on the [`Norbix`](../../README.md#authentication) client.

## Endpoints

| Method                          | Verb   | Path       | Scope     |
| ------------------------------- | ------ | ---------- | --------- |
| [`authenticate`](#authenticate) | `POST` | `/v3/auth` | `project` |

## Reference

### authenticate

`POST` `/v3/auth`

Authenticate the user. The SDK exposes `norbix.login(...)` as a higher-level helper.

**Request DTO**: `CodeMashApi2.Authenticate`
**Response**: `CodeMashApi2.AuthenticateResponse`

```ts
import { Norbix } from '@norbix.ai/ts';

const norbix = new Norbix();

const result = await norbix.api.auth.authenticate({
  // See CodeMash type for the full request shape.
});
// → typed as CodeMashApi2.AuthenticateResponse
```

[↑ Top](#endpoints)

<!-- @hand-written:begin -->

### signIn

`POST` `/v3/auth`

Sign in for a [cookie session](../../README.md#cookie-sessions). Answers `{ sessionId, userId, credentialVersion }`. The JWT of the answer is dropped, and no cookie is sent from a Node client.

```ts
const anon = new Norbix({ projectId, auth: { type: 'none' } });
const { sessionId, passwordChangeRequired } = await anon.api.auth.signIn({ userName, password });
const user = new Norbix({ projectId, auth: { type: 'session', sessionId } });
if (passwordChangeRequired) {
  // Signed in, but the password breaks the project's current rules: send the user to change it.
}
```

`passwordChangeRequired: true` is set when the typed password breaks the project's current password rules. The sign-in already succeeded; send the user to change their password. The key is absent when the password passes. `browserSignIn` answers it the same way.

### signOut

`POST` `/v3/auth/logout`

Ends this client's session on the server. A session that has already ended counts as success. Needs a `session` or `browserSession` client. A JWT from the same sign-in is not revoked. `norbix.logout()` is different: it only clears a local token.

```ts
await user.api.auth.signOut();
```

### Social sign-in

Sign a project user in with Google, Apple, Microsoft, GitHub, Facebook, X or Okta. The browser goes to the gateway, the gateway to the provider, and back to your page with a **one-time code** (never a token). Your page trades the code for the same JWT a project password sign-in gives.

| Method                   | Verb   | Path                                                               |
| ------------------------ | ------ | ------------------------------------------------------------------ |
| `socialSignInUrl`        | `GET`  | `/{version}/membership/auth/social/{provider}` (a URL, not a call) |
| `exchangeSocialCode`     | `POST` | `/{version}/membership/auth/social/{provider}/exchange`            |
| `redirectToSocialSignIn` | —      | browser: navigates to `socialSignInUrl`                            |
| `readSocialReturn`       | —      | reads `code` / `provider` / `intent` / `error` from the page URL   |
| `completeSocialSignIn`   | —      | `readSocialReturn` + `exchangeSocialCode` for a sign-in code       |

```ts
const norbix = new Norbix({ projectId, baseUrl: { api: apiUrl } });

// 1. The buttons: the project's enabled providers, from the public config
const { auth } = await norbix.api.public.getPublicProjectConfig({ projectId });
for (const { provider, displayName } of auth.socialSignIn) {
  addButton(displayName, () =>
    norbix.api.auth.redirectToSocialSignIn(provider, {
      returnUrl: `${location.origin}/oauth/callback`,
    }),
  );
}

// 2. The return page (/oauth/callback)
const done = await norbix.api.auth.completeSocialSignIn();
if (done.kind === 'signedIn') norbix.setBearerToken(done.result.bearerToken);
else if (done.kind === 'error')
  showError(done.error); // e.g. email_in_use
else if (done.kind === 'link') {
  // a link code: finish it with api.membership.finishLinkIdentity (signed in)
}
```

- `socialSignInUrl(provider, { mode?, returnUrl?, env? })` builds `{api}/{version}/membership/auth/social/{provider}?projectId=…`. A navigation sends no headers, so the project id and a non-PROD env go in the query. It is `{api}{startPath}` from `auth.socialSignIn`, plus your options.
- `returnUrl` must be absolute https (http only on localhost) and its origin must be one of the project's allowed origins; it wins over the mode's pages. Without it, the mode's `callbackUrl` / `failureRedirectUrl` are used. `mode` picks the integration's OAuth mode (default: the only mode, else the first by name).
- `exchangeSocialCode(provider, code)` answers `{ bearerToken, userId, displayName, expiresAt, credentialVersion }`. The code lasts 2 minutes and works once (`CM-ERRORS-MEMBERSHIP-051` after that). The JWT lasts 14 days; there is no refresh token and no cookie session, and the SDK does not store it: call `norbix.setBearerToken(bearerToken)`. It has no `passwordChangeRequired`.
- The sign-in must finish in the browser that started it (a short `HttpOnly` cookie); another browser gets `error=state_mismatch`. On iOS / Android open the start URL in the system browser, not an embedded web view.
- `error` values on the return page: `access_denied` (or another provider error), `email_in_use` (sign in the usual way, then link this provider), `invite_only`, `user_blocked`, `state_mismatch`, `provider_not_available`, `integration_not_configured`, `provider_error`, `account_not_ready`, `no_users_database`, `sign_in_refused`, `no_code`.
- A link code (`intent=link`) is never exchanged; see [Link a social account](./membership.md#link-a-social-account).

<!-- @hand-written:end -->
