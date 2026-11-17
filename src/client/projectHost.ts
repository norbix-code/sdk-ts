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

/**
 * The project's own base URL under a default one: `https://api.norbix.ai` +
 * `pr_5Xvm…` → `https://pr-022c….api.norbix.ai`. `undefined` when the id is not
 * a Norbix project id.
 */
export function composeProjectUrl(
  projectId: string | undefined | null,
  defaultUrl: string,
): string | undefined {
  const label = projectHostLabel(projectId);
  return label ? defaultUrl.replace('://', `://${label}.`) : undefined;
}
