# Using `@norbix/ts` with React + Redux Toolkit

[← Back to docs index](../README.md) · [↑ Back to project README](../../README.md)

If you already use Redux Toolkit, this is the cleanest way to wire the SDK into your store. The SDK is framework-agnostic — Redux just keeps the user-facing state in sync with what the SDK is doing internally.

## How it fits together

```
┌──────────────────┐    dispatch(login(...))     ┌─────────────────────┐
│  React component │ ─────────────────────────►  │  authSlice (Redux)  │
└──────────────────┘                              └─────────┬───────────┘
                                                            │ thunk
                                                            ▼
                                                   ┌─────────────────────┐
                                                   │  norbix.login(...)  │   <-- SDK
                                                   │   (sets JWT in     │
                                                   │    its own state)  │
                                                   └─────────┬───────────┘
                                                            │ resolved with user info
                                                            ▼
                                                   ┌─────────────────────┐
                                                   │  Reducer stores     │
                                                   │  user / status      │
                                                   └─────────────────────┘
```

The SDK manages **its own** state (the bearer token in memory). Redux holds the **app's** state (user info, loading flag, errors). A thunk is the bridge.

> **Don't put the `Norbix` instance inside Redux state.** It's a class with methods, not serializable. Keep it as a singleton outside the store.

## 1. Singleton outside the store

```ts
// src/lib/norbix.ts
import { Norbix } from '@norbix/ts';

export const norbix = new Norbix({
  projectId: import.meta.env.VITE_NORBIX_PROJECT_ID,
});
```

## 2. Auth slice + thunks

```ts
// src/features/auth/authSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { LoginCredentials } from '@norbix/ts';

import { norbix } from '../../lib/norbix';

interface AuthUser {
  userId?: string;
  userName?: string;
  bearerToken?: string;
}

interface AuthState {
  user: AuthUser | null;
  status: 'idle' | 'loading' | 'authenticated' | 'failed';
  error: string | null;
}

const initialState: AuthState = { user: null, status: 'idle', error: null };

export const login = createAsyncThunk<AuthUser, LoginCredentials, { rejectValue: string }>(
  'auth/login',
  async (creds, { rejectWithValue }) => {
    try {
      const session = await norbix.login(creds);
      return {
        userId: session.userId,
        userName: session.userName,
        bearerToken: session.bearerToken,
      };
    } catch (err) {
      return rejectWithValue(err instanceof Error ? err.message : 'Login failed');
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  norbix.logout();
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Used by rehydrate-on-reload (see section 4).
    rehydrateAuth(state, { payload }: { payload: AuthUser }) {
      state.user = payload;
      state.status = 'authenticated';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (s) => {
        s.status = 'loading';
        s.error = null;
      })
      .addCase(login.fulfilled, (s, a) => {
        s.status = 'authenticated';
        s.user = a.payload;
      })
      .addCase(login.rejected, (s, a) => {
        s.status = 'failed';
        s.error = a.payload ?? 'Login failed';
      })
      .addCase(logout.fulfilled, (s) => {
        s.status = 'idle';
        s.user = null;
      });
  },
});

export const { rehydrateAuth } = authSlice.actions;
export default authSlice.reducer;
```

## 3. Use it from a component

```tsx
// src/features/auth/LoginForm.tsx
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { login } from './authSlice';

export function LoginForm() {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((s) => s.auth);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ userName, password }));
  };

  return (
    <form onSubmit={submit}>
      <input value={userName} onChange={(e) => setUserName(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button disabled={status === 'loading'}>Sign in</button>
      {error && <p role="alert">{error}</p>}
    </form>
  );
}
```

## 4. Survive page reloads

The SDK keeps the JWT only in memory. Two layers of work to make a refresh painless:

```ts
// src/app/store.ts — bootstrap
import { configureStore } from '@reduxjs/toolkit';

import { norbix } from '../lib/norbix';
import authReducer, { rehydrateAuth } from '../features/auth/authSlice';

export const store = configureStore({ reducer: { auth: authReducer } });

// On app start, restore the JWT into both the SDK and the Redux store.
const saved = localStorage.getItem('norbix:auth');
if (saved) {
  const user = JSON.parse(saved);
  if (user.bearerToken) {
    norbix.setBearerToken(user.bearerToken);
    store.dispatch(rehydrateAuth(user));
  }
}

// Persist on every login/logout (subscribe is cheap; only writes when state changes).
store.subscribe(() => {
  const { auth } = store.getState();
  if (auth.user) localStorage.setItem('norbix:auth', JSON.stringify(auth.user));
  else localStorage.removeItem('norbix:auth');
});
```

If you prefer **redux-persist**, persist the `auth` slice and put the SDK rehydration in the `onRehydrate` callback:

```ts
persistor.subscribe(() => {
  const { auth } = store.getState();
  if (auth.user?.bearerToken) norbix.setBearerToken(auth.user.bearerToken);
});
```

## 5. RTK Query alternative

If you already use [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) for HTTP, you can call the SDK from `queryFn` instead of writing thunks per endpoint:

```ts
// src/features/auth/authApi.ts
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import type { LoginCredentials, LoginResponse } from '@norbix/ts';

import { norbix } from '../../lib/norbix';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginCredentials>({
      queryFn: async (creds) => {
        try {
          return { data: await norbix.login(creds) };
        } catch (err) {
          const e = err as { status?: number; message?: string };
          return { error: { status: e.status ?? 500, data: e.message ?? 'Login failed' } };
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
```

Same pattern for any other endpoint:

```ts
findOrders: build.query({
  queryFn: async () => {
    try { return { data: await norbix.api.database.find({ collectionName: 'orders' }) }; }
    catch (err: any) { return { error: { status: err.status, data: err.message } }; }
  },
  providesTags: ['Orders'],
}),
```

This way you keep RTK Query's caching + refetching while still going through the typed SDK.

## What about middleware?

A common temptation is to inject the SDK into a custom middleware so every action can use it. **Skip that.** Middleware is for cross-cutting concerns (logging, analytics). Domain-specific calls belong in thunks or `queryFn` — they're easier to test and easier to type.

## Recap

- One `Norbix` singleton in `src/lib/norbix.ts`.
- Login/logout via `createAsyncThunk` (or `queryFn` if you use RTK Query).
- Don't store the SDK instance in Redux state — only the data you derive from it.
- Persist the JWT outside Redux too (or use redux-persist) and call `norbix.setBearerToken(...)` on app start.
