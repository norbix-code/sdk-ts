/**
 * A project's own API host.
 *
 * Norbix serves every project on `pr-<32 hex>.api.norbix.ai`. The label is the
 * project id (`pr_` + base62) written as the hex of the same GUID, so it is
 * built here with no call. The gateway's side of this is `ProjectId.HostLabel`.
 */

const BASE62 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const PROJECT_ID_PREFIX = 'pr_';
const MAX_GUID = 1n << 128n;

/**
 * The DNS label of a project: `pr_5XvmrTA6JVggZdmEE5bGdm` →
 * `pr-022c4aca9f9e4df787ab0a20c83c44b6`. Returns `undefined` for anything that
 * is not a Norbix project id (a test id, another prefix, a value that is not a
 * version-4 GUID) — it never throws.
 */
export function projectHostLabel(projectId: string | undefined | null): string | undefined {
  if (typeof projectId !== 'string' || !projectId.startsWith(PROJECT_ID_PREFIX)) return undefined;
  const digits = projectId.slice(PROJECT_ID_PREFIX.length);
  // 62^22 is just above 2^128: a GUID never needs more than 22 digits.
  if (digits.length === 0 || digits.length > 22) return undefined;

  let value = 0n;
  for (const ch of digits) {
    const digit = BASE62.indexOf(ch);
    if (digit < 0) return undefined;
    value = value * 62n + BigInt(digit);
  }
  if (value >= MAX_GUID) return undefined;

  // The number is the GUID's bytes, least significant first (.NET `Guid.ToByteArray()`).
  const b: number[] = [];
  for (let i = 0; i < 16; i++) {
    b.push(Number(value & 0xffn));
    value >>= 8n;
  }

  // Only a version-4 GUID is a Norbix id (the gateway refuses the rest).
  if (b[7]! >> 4 !== 4 || b[8]! >> 6 !== 2) return undefined;

  // .NET "N" format: the first three groups are stored little-endian.
  const order = [3, 2, 1, 0, 5, 4, 7, 6, 8, 9, 10, 11, 12, 13, 14, 15];
  const hex = order.map((i) => b[i]!.toString(16).padStart(2, '0')).join('');
  return `pr-${hex}`;
}

/** The placeholder an install's address template carries (`/echo` → `apiUrlTemplate`). */
export const PROJECT_HOST_LABEL_PLACEHOLDER = '{projectHostLabel}';

const NORBIX_API_DOMAIN = 'api.norbix.ai';
const PROJECT_LABEL = /^pr-[0-9a-f]{32}$/i;

/**
 * Where a project's API calls go, from the API base URL the client has
 * (devops docs/tasks/clients-project-host.md, round 2):
 *
 * - a norbix.ai API address — `https://api.norbix.ai` or
 *   `https://<region>.api.norbix.ai`, built in or written out — becomes the
 *   project's own host `https://pr-<hex>.api.norbix.ai` (its DNS record
 *   follows the project's region);
 * - a template with `{projectHostLabel}` (an install on its own domain that
 *   serves project hosts) is filled with the project's label;
 * - an address that is already a project's host (`https://pr-<hex>.…`) gets
 *   the current project's label, so host and `norbix-project-id` always name
 *   the same project;
 * - any other address is used as given.
 *
 * `shared` is the same address without a project label (the social sign-in
 * link is built on it). With a project id that is not a Norbix id, `project`
 * is `shared`. Never throws.
 */
export function projectApiBaseUrl(
  baseUrl: string,
  projectId: string | undefined | null,
): { project: string; shared: string } {
  const label = projectHostLabel(projectId);

  if (baseUrl.includes(PROJECT_HOST_LABEL_PLACEHOLDER)) {
    const shared = baseUrl.split(`${PROJECT_HOST_LABEL_PLACEHOLDER}.`).join('');
    return {
      project: label ? baseUrl.split(PROJECT_HOST_LABEL_PLACEHOLDER).join(label) : shared,
      shared,
    };
  }

  let url: URL;
  try {
    url = new URL(baseUrl);
  } catch {
    return { project: baseUrl, shared: baseUrl };
  }
  const labels = url.hostname.toLowerCase().split('.');

  if (labels.length > 1 && PROJECT_LABEL.test(labels[0]!)) {
    const shared = withHost(baseUrl, url, labels.slice(1).join('.'));
    return {
      project: label ? withHost(baseUrl, url, [label, ...labels.slice(1)].join('.')) : shared,
      shared,
    };
  }

  const host = labels.join('.');
  const isNorbixApi =
    host === NORBIX_API_DOMAIN || (labels.length === 4 && host.endsWith(`.${NORBIX_API_DOMAIN}`));
  if (isNorbixApi && url.protocol === 'https:') {
    return {
      project: label ? withHost(baseUrl, url, `${label}.${NORBIX_API_DOMAIN}`) : baseUrl,
      shared: baseUrl,
    };
  }

  return { project: baseUrl, shared: baseUrl };
}

/** `baseUrl` with another host name; scheme, port and path are kept, and a trailing slash only when it had one. */
function withHost(baseUrl: string, url: URL, hostname: string): string {
  const copy = new URL(url.href);
  copy.hostname = hostname;
  return baseUrl.endsWith('/') || copy.pathname !== '/' ? copy.href : copy.href.replace(/\/$/, '');
}
