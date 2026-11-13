import { NorbixError } from './errors.js';

/**
 * PKCE (RFC 7636, S256) between the app and the Norbix gateway for social
 * sign-in and link identity. The app keeps the verifier; the start carries
 * only its challenge, and the exchange / link finish sends the verifier. A
 * one-time code started with a challenge works only with the matching
 * verifier, so only the browser or app that started can use it.
 */
export interface PkcePair {
  /** 43 characters `[A-Za-z0-9-_]` (32 random bytes, base64url). Keep it; never put it in a URL. */
  codeVerifier: string;
  /** base64url (no padding) SHA-256 of the verifier, 43 characters. Send it on the start. */
  codeChallenge: string;
}

/** A fresh verifier (32 bytes from the platform's secure random source) and its S256 challenge. */
export async function createPkcePair(): Promise<PkcePair> {
  const crypto = webCrypto();
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  const codeVerifier = base64Url(bytes);
  return { codeVerifier, codeChallenge: await pkceChallenge(codeVerifier) };
}

/** The S256 challenge of a verifier: base64url (no padding) of SHA-256 over its ASCII bytes. */
export async function pkceChallenge(codeVerifier: string): Promise<string> {
  if (!/^[A-Za-z0-9\-._~]{43,128}$/.test(codeVerifier)) {
    throw new NorbixError({
      message: 'A PKCE code verifier is 43 to 128 characters of A-Z a-z 0-9 - . _ ~.',
      status: 0,
      code: 'NORBIX_PKCE_VERIFIER',
    });
  }
  const digest = await webCrypto().subtle.digest('SHA-256', new TextEncoder().encode(codeVerifier));
  return base64Url(new Uint8Array(digest));
}

function webCrypto(): Crypto {
  const crypto = (globalThis as { crypto?: Crypto }).crypto;
  if (!crypto?.subtle || typeof crypto.getRandomValues !== 'function') {
    throw new NorbixError({
      message: 'PKCE needs Web Crypto (globalThis.crypto): any browser, or Node 20 and newer.',
      status: 0,
      code: 'NORBIX_NO_WEB_CRYPTO',
    });
  }
  return crypto;
}

function base64Url(bytes: Uint8Array): string {
  let binary = '';
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/** Where the browser helpers keep a verifier between the start and the return page. */
export type PkceFlow = 'signIn' | 'link';

const keyOf = (flow: PkceFlow, provider: string) =>
  `norbix:pkce:${flow}:${provider.trim().toLowerCase()}`;

/** The page's sessionStorage, or undefined (Node, blocked storage). */
function storage(): Storage | undefined {
  try {
    return (globalThis as { sessionStorage?: Storage }).sessionStorage;
  } catch {
    return undefined;
  }
}

/** Keep a verifier for the return page. False when there is no usable sessionStorage. */
export function storePkceVerifier(flow: PkceFlow, provider: string, codeVerifier: string): boolean {
  try {
    const store = storage();
    if (!store) return false;
    store.setItem(keyOf(flow, provider), codeVerifier);
    return true;
  } catch {
    return false;
  }
}

/** Read and remove the kept verifier (it is good for one exchange only). */
export function takePkceVerifier(flow: PkceFlow, provider: string): string | undefined {
  try {
    const store = storage();
    if (!store) return undefined;
    const key = keyOf(flow, provider);
    const value = store.getItem(key) ?? undefined;
    store.removeItem(key);
    return value;
  } catch {
    return undefined;
  }
}

/** Forget a kept verifier (a start without PKCE must not meet an old one). */
export function clearPkceVerifier(flow: PkceFlow, provider: string): void {
  try {
    storage()?.removeItem(keyOf(flow, provider));
  } catch {
    /* nothing to clear */
  }
}
