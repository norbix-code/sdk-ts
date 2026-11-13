import type { SocialReturn } from './types.js';

/** The page's location in a browser; undefined in Node. */
export function browserLocation(): { href: string; assign(url: string): void } | undefined {
  return (globalThis as { location?: { href: string; assign(url: string): void } }).location;
}

/**
 * What the gateway sent the browser back with: a one-time code (`code`,
 * `provider`, and `intent=link` for a link) or `error`. `url` defaults to the
 * current page.
 */
export function parseSocialReturn(url?: string | URL): SocialReturn {
  const href = url ?? browserLocation()?.href;
  if (!href) return { kind: 'none' };
  const query = new URL(String(href), 'http://localhost').searchParams;
  const provider = query.get('provider') ?? undefined;
  const error = query.get('error');
  if (error) return provider ? { kind: 'error', error, provider } : { kind: 'error', error };
  const code = query.get('code');
  if (!code || !provider) return { kind: 'none' };
  return query.get('intent') === 'link'
    ? { kind: 'link', provider, code }
    : { kind: 'signIn', provider, code };
}
