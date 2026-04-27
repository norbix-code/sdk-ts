# Using `@norbix/ts` with React

[← Back to docs index](../README.md) · [↑ Back to project README](../../README.md)

This guide shows the minimal pattern for using the SDK in a plain React app (Vite, CRA, Next.js client components, React Native — same idea for all of them).

## TL;DR

1. Create one shared `Norbix` instance for the whole app.
2. Wrap login / logout in your auth state (Context, Zustand, Redux, ...).
3. Persist the JWT yourself if you want it to survive page reloads.

The SDK does **not** know about React. It just stores the JWT in memory inside the `Norbix` instance.

## 1. One shared instance

```ts
// src/lib/norbix.ts
import { Norbix } from '@norbix/ts';

export const norbix = new Norbix({
  // Anything not passed here falls back to NORBIX_* env vars.
  // In Vite you can wire env vars like this:
  projectId: import.meta.env.VITE_NORBIX_PROJECT_ID,
});
```

Why a singleton: the SDK keeps the JWT on the instance. If you call `new Norbix()` in every component, each one would have its own login state — that's almost never what you want.

## 2. Auth context with React Context

```tsx
// src/lib/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';
import type { LoginCredentials, LoginResponse } from '@norbix/ts';

import { norbix } from './norbix';

interface AuthState {
  user: { userId?: string; userName?: string } | null;
  status: 'idle' | 'loading' | 'authenticated' | 'failed';
  login: (creds: LoginCredentials) => Promise<void>;
  logout: () => void;
}

const AuthCtx = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthState['user']>(null);
  const [status, setStatus] = useState<AuthState['status']>('idle');

  // Rehydrate from saved JWT on first mount (see step 3 below).
  useEffect(() => {
    const saved = localStorage.getItem('norbix:jwt');
    if (saved) {
      norbix.setBearerToken(saved);
      setStatus('authenticated');
      // Optionally fetch the user profile here so the UI knows who is logged in.
    }
  }, []);

  const login = async (creds: LoginCredentials) => {
    setStatus('loading');
    try {
      const session: LoginResponse = await norbix.login(creds);
      if (session.bearerToken) {
        localStorage.setItem('norbix:jwt', session.bearerToken);
      }
      setUser({ userId: session.userId, userName: session.userName });
      setStatus('authenticated');
    } catch (err) {
      setStatus('failed');
      throw err;
    }
  };

  const logout = () => {
    norbix.logout();
    localStorage.removeItem('norbix:jwt');
    setUser(null);
    setStatus('idle');
  };

  return (
    <AuthCtx.Provider value={{ user, status, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
```

## 3. JWT persistence on reload

The SDK keeps the JWT only in memory, so a page reload loses it. To survive reloads, save the token on login and rehydrate the SDK on app start. Two common options:

| Where | Pros | Cons |
| --- | --- | --- |
| `localStorage` | Simple, works in any SPA | Vulnerable to XSS — only safe if you trust your script supply chain |
| `httpOnly` cookie set by your own backend | Not readable from JS, safer | Requires a backend you control |

The example above uses `localStorage`. For sensitive apps, route auth through your backend and let it set an `httpOnly` cookie. The SDK still works the same — just call `norbix.setBearerToken(...)` after your backend hands you a fresh token.

## 4. Using the SDK from a component

```tsx
// src/components/OrdersList.tsx
import { useEffect, useState } from 'react';
import { norbix } from '../lib/norbix';

export function OrdersList() {
  const [orders, setOrders] = useState<unknown[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    norbix.api.database
      .find({ collectionName: 'orders' })
      .then((res) => setOrders((res as { result?: unknown[] }).result ?? []))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  return <ul>{orders.map((o, i) => <li key={i}>{JSON.stringify(o)}</li>)}</ul>;
}
```

For anything more complex than a single fetch, reach for [TanStack Query](https://tanstack.com/query) or RTK Query — see the [Redux Toolkit guide](./react-redux.md).

## Server vs browser

In Next.js, RSC, or any SSR setup, **don't** share one `Norbix` singleton between server and browser. Per-request scoping matters:

- Server components: construct `Norbix` per request with the user's token.
- Client components: use the shared in-browser singleton like the example above.

The same applies to React Native — there's no SSR concern there, just one process, one singleton.

## Common gotchas

- **`fetch` not found**: pass `fetch: customFetch` if you target a runtime older than Node 18 / browsers older than ~2017.
- **CORS in browser**: the gateway must allow your origin. Configured in Hub → Project settings.
- **`accountId` missing**: account-scoped endpoints throw `NORBIX_ACCOUNT_SCOPE_REQUIRED`. Pass it once at construction or use `norbix.setScope(...)`.
