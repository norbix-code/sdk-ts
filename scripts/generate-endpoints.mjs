/**
 * Plain-Node ESM version of generate-endpoints.ts. Lets the codegen run
 * before any npm install (no tsx, no typescript dependency).
 *
 * Behavior is identical. The .ts version is kept for type-checking and
 * editor support; the .mjs version is what `npm run generate-endpoints`
 * actually executes.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const TARGETS = [
  {
    name: 'api',
    typesFile: 'src/types/api2.dtos.ts',
    typesModulePath: '../types/api2.dtos.js',
    typesNamespace: 'CodeMashApi2',
    outDir: 'src/api',
    testsDir: 'tests/api',
    moduleImportPathFromTests: '../../src/api',
    defaultBaseUrl: 'https://api.norbix.dev',
    versionField: 'apiVersion',
    namespaceClass: 'ApiNamespace',
    namespaceField: 'api',
    docsDir: 'docs/api',
    docsTitle: 'API',
    docsDescription:
      'Project-scoped data operations: database collections, users, AI chat, auth, API keys.',
  },
  {
    name: 'hub',
    typesFile: 'src/types/hub2.dtos.ts',
    typesModulePath: '../types/hub2.dtos.js',
    typesNamespace: 'CodeMashHub2',
    outDir: 'src/hub',
    testsDir: 'tests/hub',
    moduleImportPathFromTests: '../../src/hub',
    defaultBaseUrl: 'https://hub.norbix.dev',
    versionField: 'hubVersion',
    namespaceClass: 'HubNamespace',
    namespaceField: 'hub',
    docsDir: 'docs/hub',
    docsTitle: 'Hub',
    docsDescription:
      'Project & account configuration: schemas, integrations, team management, billing, observability.',
  },
];

const GROUP_DESCRIPTIONS = {
  account:
    'Account profile, status, verification, team invites, and Stripe billing portal. Most write endpoints require `accountId` on the client.',
  database:
    'Database schemas, integrations, triggers, taxonomies, and module on/off switches. For data-level CRUD on collections see `api.database`.',
  files: 'File storage integrations and triggers. Upload + download is in `api.database` (FileResource fields).',
  membership:
    'Roles, policies, and user preferences (Hub side). For user CRUD and registration see `api.membership`.',
  notifications:
    'Email and push templates, integrations, campaigns, devices, signatures, footers, and one-click unsubscribe.',
  payments: 'Payment provider integrations and triggers (Stripe, etc.).',
  logs: 'Logging integrations and module on/off switches.',
  apikeys: 'List and regenerate per-environment API keys for service auth.',
  auth: 'Sign-in / sign-out and federated provider flows. Most apps prefer `norbix.login(...)` over calling these directly.',
  access_token: 'Refresh-token exchange to get a new bearer token.',
  echo: 'Echo helpers used by the gateway smoke checks.',
};

const ACTION_DESCRIPTIONS = {
  // Conventional CRUD verbs we can describe automatically based on method-name
  // prefixes. Used as a fallback when no explicit description is set per group.
  prefixes: [
    { match: /^getAll/, text: 'List all items.' },
    { match: /^get(?!All)/, text: 'Fetch a single item by ID.' },
    { match: /^find/, text: 'Search / paginate items.' },
    { match: /^count/, text: 'Count items matching the filter.' },
    { match: /^distinct/, text: 'Return distinct values for a field.' },
    { match: /^aggregate/, text: 'Run an aggregation pipeline.' },
    { match: /^create/, text: 'Create a new item.' },
    { match: /^insert/, text: 'Insert one or more items.' },
    { match: /^save/, text: 'Upsert an item (create or update).' },
    { match: /^update/, text: 'Update an existing item.' },
    { match: /^replace/, text: 'Replace an existing item wholesale.' },
    { match: /^delete/, text: 'Delete an item.' },
    { match: /^enable/, text: 'Enable the resource.' },
    { match: /^disable/, text: 'Disable the resource.' },
    { match: /^archive/, text: 'Archive (soft-hide) the resource.' },
    { match: /^unarchive/, text: 'Restore an archived resource.' },
    { match: /^clone/, text: 'Duplicate an existing resource.' },
    { match: /^test/, text: 'Run a connection / delivery test against the integration.' },
    { match: /^send/, text: 'Send a message / invitation.' },
    { match: /^verify/, text: 'Verify / confirm the resource.' },
    { match: /^block/, text: 'Block the resource.' },
    { match: /^unblock/, text: 'Unblock the resource.' },
    { match: /^assign/, text: 'Assign the resource to another entity.' },
    { match: /^run/, text: 'Run / execute the resource.' },
    { match: /^preview/, text: 'Render a preview without sending.' },
    { match: /^register/, text: 'Register a new entry.' },
    { match: /^rotate/, text: 'Rotate the secret / token.' },
    { match: /^reveal/, text: 'Reveal the masked value.' },
    { match: /^check/, text: 'Run a runtime check.' },
    { match: /^ask/, text: 'Send a chat / inference request.' },
    { match: /^echo/, text: 'Echo the request back (smoke test).' },
    { match: /^login|^authenticate/, text: 'Authenticate the user. The SDK exposes `norbix.login(...)` as a higher-level helper.' },
    { match: /^logout/, text: 'End the session.' },
  ],
};

// Module-scope ref populated by `emitDocs` and consumed by `emitDocsIndex`.
const DOC_TARGETS_REF = [];

main();

function main() {
  const summary = {};
  for (const target of TARGETS) {
    const src = readFileSync(join(ROOT, target.typesFile), 'utf8');
    const parsed = parseDtosFile(src);
    summary[`${target.name}.endpoints`] = parsed.endpoints.length;
    summary[`${target.name}.groups`] = parsed.groups.size;
    emitGroups(target, parsed);
    emitNamespace(target, parsed);
    emitTests(target, parsed);
    emitDocs(target, parsed);
  }
  emitDocsIndex();
  console.log('Codegen complete:', summary);
}

function parseDtosFile(src) {
  const endpoints = [];
  const groups = new Set();
  const lines = src.split(/\r?\n/);
  let pendingRoutes = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i] ?? '';

    const route = matchRoute(line);
    if (route) {
      pendingRoutes.push(route);
      continue;
    }

    const cls = matchClassStart(line);
    if (!cls) continue;

    if (pendingRoutes.length === 0) continue;

    let header = cls.header;
    let j = i;
    while (!header.includes('{') && j < lines.length - 1) {
      j++;
      header += ' ' + (lines[j]?.trim() ?? '');
    }

    const responseType = matchReturnType(header);
    const isAccountScoped = /implements[^{]*\bIHasAccountId\b/.test(header);
    const firstRoute = pendingRoutes[0];
    const group = deriveGroup(firstRoute.path);
    groups.add(group);

    endpoints.push({
      className: cls.className,
      responseType,
      routes: pendingRoutes,
      isAccountScoped,
      group,
    });

    pendingRoutes = [];
    i = j;
  }

  return { endpoints, groups };
}

function matchRoute(line) {
  const m = /\/\/\s*@Route\("([^"]+)"(?:,\s*"([^"]+)")?\)/.exec(line);
  if (!m) return undefined;
  const path = m[1];
  const verbs = (m[2] ?? 'POST').split(',').map((v) => v.trim().toUpperCase());
  return { path, methods: verbs };
}

function matchClassStart(line) {
  const m = /^\s*export\s+class\s+([A-Za-z0-9_]+)/.exec(line);
  if (!m) return undefined;
  return { className: m[1], header: line };
}

function matchReturnType(header) {
  if (/\bIReturnVoid\b/.test(header)) return 'void';
  const m = /\bIReturn<([^>]+(?:<[^>]*>)?)>/.exec(header);
  return m ? m[1].trim() : 'unknown';
}

function deriveGroup(path) {
  const stripped = path.replace(/^\/+/, '');
  const parts = stripped.split('/');
  const head = parts[0] === '{version}' ? parts[1] : parts[0];
  if (!head) return 'misc';
  return toIdent(head);
}

function toIdent(s) {
  return s
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .toLowerCase();
}

function pickPreferredVerb(verbs) {
  const order = ['POST', 'PUT', 'PATCH', 'DELETE', 'GET'];
  for (const v of order) if (verbs.includes(v)) return v;
  return 'POST';
}

function methodNameFromClass(name) {
  const stripped = name.replace(/Request$/, '');
  return stripped.charAt(0).toLowerCase() + stripped.slice(1);
}

function extractPathParams(path) {
  const tokens = [];
  const re = /\{([^/{}]+)\}/g;
  let m;
  while ((m = re.exec(path)) !== null) {
    if (m[1] !== 'version') tokens.push(m[1]);
  }
  return tokens;
}

function emitGroups(target, parsed) {
  const byGroup = new Map();
  for (const ep of parsed.endpoints) {
    if (!byGroup.has(ep.group)) byGroup.set(ep.group, []);
    byGroup.get(ep.group).push(ep);
  }
  mkdirSync(join(ROOT, target.outDir), { recursive: true });
  for (const [group, endpoints] of byGroup) {
    const filePath = join(ROOT, target.outDir, `${group}.ts`);
    writeFileSync(filePath, renderGroupModule(target, group, endpoints));
  }
}

function renderGroupModule(target, group, endpoints) {
  const groupClass = pascal(group);
  const tns = target.typesNamespace;

  const imports = `import type { Transport } from '../client/transport.js';
import type { ${tns} } from '${target.typesModulePath}';`;

  const methodLines = [];
  const usedNames = new Set();

  for (const ep of endpoints) {
    const route = ep.routes[0];
    const verb = pickPreferredVerb(route.methods);
    let methodName = methodNameFromClass(ep.className);
    let suffix = 1;
    while (usedNames.has(methodName)) {
      suffix++;
      methodName = methodNameFromClass(ep.className) + suffix;
    }
    usedNames.add(methodName);

    const pathParams = extractPathParams(route.path);
    const requestType = `${tns}.${ep.className}`;
    const responseType =
      ep.responseType === 'void'
        ? 'void'
        : ep.responseType === 'unknown'
          ? 'unknown'
        : ep.responseType.startsWith(tns + '.')
          ? ep.responseType
          : `${tns}.${ep.responseType}`;
    const scope = endpointScope(ep, route);
    const docs = endpointDoc(route.path, verb, ep);

    methodLines.push(`  ${docs}
  ${methodName} = (
    request: Partial<${requestType}> = {} as Partial<${requestType}>,
    options: RequestOverrideOptions = {},
  ): Promise<${responseType}> => {
    return this.transport.send<${responseType}>({
      target: '${target.name}',
      path: '${route.path}',
      method: '${verb}',
      request,
      pathParams: ${renderStringArray(pathParams)},
      scope: ${scope},
      ...options,
    });
  };`);
  }

  return `${imports.replace("import type { Transport }", "import type { RequestOverrideOptions, Transport }")}

/**
 * Auto-generated. Do not edit by hand — run \`npm run generate-endpoints\`
 * to refresh this file from the DTO definitions.
 *
 * Group: ${group}
 * Endpoints: ${endpoints.length}
 */
export class ${groupClass}Module {
  constructor(private readonly transport: Transport) {}

${methodLines.join('\n\n')}
}
`;
}

function endpointDoc(path, verb, ep) {
  const lines = [`/**`, ` * ${verb} ${path}`];
  if (ep.routes.length > 1) {
    lines.push(` * Aliases:`);
    for (const r of ep.routes.slice(1)) lines.push(` *   - ${r.methods.join(',')} ${r.path}`);
  }
  if (ep.isAccountScoped) {
    lines.push(` * Account-scoped — requires \`accountId\` on the Norbix client.`);
  }
  lines.push(` * Request DTO: ${ep.className}`);
  lines.push(` */`);
  return lines.join('\n  ');
}

function endpointScope(ep, route) {
  if (route.path === '/auth' || route.path.startsWith('/auth/')) return "'unauthenticated'";
  return ep.isAccountScoped ? "'account'" : "'project'";
}

function renderStringArray(values) {
  return `[${values.map((v) => `'${v}'`).join(', ')}]`;
}

function emitTests(target, parsed) {
  const byGroup = new Map();
  for (const ep of parsed.endpoints) {
    if (!byGroup.has(ep.group)) byGroup.set(ep.group, []);
    byGroup.get(ep.group).push(ep);
  }
  mkdirSync(join(ROOT, target.testsDir), { recursive: true });
  for (const [group, endpoints] of byGroup) {
    const filePath = join(ROOT, target.testsDir, `${group}.test.ts`);
    writeFileSync(filePath, renderTestModule(target, group, endpoints));
  }
}

function renderTestModule(target, group, endpoints) {
  const groupClass = pascal(group);

  // Replicate the same method-name dedup the SDK codegen uses, so test names
  // match the actual SDK methods 1:1 even when DTOs collide on suffix-stripped names.
  const usedNames = new Set();
  const resolved = endpoints.map((ep) => {
    const route = ep.routes[0];
    const verb = pickPreferredVerb(route.methods);
    let methodName = methodNameFromClass(ep.className);
    let suffix = 1;
    while (usedNames.has(methodName)) {
      suffix++;
      methodName = methodNameFromClass(ep.className) + suffix;
    }
    usedNames.add(methodName);
    return {
      methodName,
      verb,
      path: route.path,
      pathParams: extractPathParams(route.path),
      isAccountScoped: ep.isAccountScoped,
      isUnauthenticated: endpointScope(ep, route) === "'unauthenticated'",
      className: ep.className,
    };
  });

  const blocks = resolved.map((r) => renderEndpointTest(target, group, r)).join('\n\n');
  const hasAccountScoped = resolved.some((r) => r.isAccountScoped);
  const hasPathParams = resolved.some((r) => r.pathParams.length > 0);
  const helperImports = ['createMockFetch', 'expectedUrl', 'makeClient'];
  if (hasPathParams) helperImports.push('stubRequestForPath');

  return `import { describe, expect, it } from 'vitest';

${hasAccountScoped ? "import { NorbixError } from '../../src/index.js';\n" : ''}import { ${groupClass}Module } from '${target.moduleImportPathFromTests}/${group}.js';
import { ${helperImports.join(', ')} } from '../_helpers.js';

/**
 * Auto-generated. Do not edit by hand — run \`npm run generate-endpoints\`
 * to refresh this file from the DTO definitions.
 *
 * Tests for ${target.name}.${camel(group)} (${endpoints.length} endpoints).
 *
 * Each method is asserted against:
 *   - presence on the module (smoke check)
 *   - issued HTTP verb + URL with version segment substituted and path
 *     tokens interpolated from a stubbed request
 *   - auth, project, and (when applicable) account headers
 *   - account-scope guard: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId
 */
describe('${target.name}.${camel(group)}', () => {
  it('module exposes ${endpoints.length} method(s)', () => {
    const mock = createMockFetch();
    const mod = new ${groupClass}Module({} as never);
    void mod; // silence unused — we only need the type
    // Sanity check the auto-mapped surface exists on the namespaced client.
    const { norbix } = makeClient();
    const ns = (norbix.${target.namespaceField} as unknown as Record<string, unknown>)['${camel(group)}'] as Record<string, unknown>;
    expect(ns).toBeDefined();
    void mock;
${resolved.map((r) => `    expect(typeof ns['${r.methodName}']).toBe('function');`).join('\n')}
  });

${blocks}
});
`;
}

function renderEndpointTest(target, group, r) {
  const stubLines = r.pathParams.length
    ? `    const stub = stubRequestForPath('${r.path}');`
    : `    const stub = {};`;
  const expectUrlLines = `    const expected = expectedUrl({
      baseUrl: '${target.defaultBaseUrl}',
      path: '${r.path}',
      version: 'v2',
      stub,
    });`;

  const accountScopeBlock = r.isAccountScoped
    ? `

  it('${r.methodName}: throws NORBIX_ACCOUNT_SCOPE_REQUIRED without accountId', async () => {
${stubLines}
    const { norbix } = makeClient();
    const fn = (norbix.${target.namespaceField} as unknown as Record<string, Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>>)['${camel(group)}']!['${r.methodName}']!;
    await expect(fn(stub)).rejects.toBeInstanceOf(NorbixError);
    await expect(fn(stub)).rejects.toMatchObject({ code: 'NORBIX_ACCOUNT_SCOPE_REQUIRED' });
  });

  it('${r.methodName}: succeeds when accountId is configured', async () => {
${stubLines}
${expectUrlLines}
    const { norbix, mock } = makeClient({ accountId: 'acc-1' });
    const fn = (norbix.${target.namespaceField} as unknown as Record<string, Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>>)['${camel(group)}']!['${r.methodName}']!;
    await fn({ ...stub, accountId: 'acc-1' });
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('${r.verb}');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
    expect(mock.lastCall?.headers.get('X-CM-AccountId')).toBe('acc-1');
  });`
    : '';

  const baseTest = `  it('${r.methodName}: ${r.verb} ${r.path}', async () => {
${stubLines}
${expectUrlLines}
    const { norbix, mock } = makeClient(${r.isAccountScoped ? '{ accountId: \'acc-1\' }' : '{}'});
    const fn = (norbix.${target.namespaceField} as unknown as Record<string, Record<string, (a?: unknown, o?: unknown) => Promise<unknown>>>)['${camel(group)}']!['${r.methodName}']!;
    await fn(${r.isAccountScoped ? '{ ...stub, accountId: \'acc-1\' }' : 'stub'});
    expect(mock.lastCall).toBeDefined();
    expect(mock.lastCall?.method).toBe('${r.verb}');
    expect(mock.lastCall?.url.startsWith(expected)).toBe(true);
${r.isUnauthenticated ? "    expect(mock.lastCall?.headers.get('Authorization')).toBeNull();" : "    expect(mock.lastCall?.headers.get('Authorization')).toBe('Bearer test-token');"}
    expect(mock.lastCall?.headers.get('X-CM-ProjectId')).toBe('test-project');
  });`;

  return baseTest + accountScopeBlock;
}

// ─── Per-module markdown docs ──────────────────────────────────────────────

function emitDocs(target, parsed) {
  const byGroup = new Map();
  for (const ep of parsed.endpoints) {
    if (!byGroup.has(ep.group)) byGroup.set(ep.group, []);
    byGroup.get(ep.group).push(ep);
  }
  mkdirSync(join(ROOT, target.docsDir), { recursive: true });

  const groupSummary = [];
  for (const [group, endpoints] of byGroup) {
    const filePath = join(ROOT, target.docsDir, `${group}.md`);
    writeFileSync(filePath, renderDocModule(target, group, endpoints));
    groupSummary.push({ group, count: endpoints.length });
  }
  // Per-target index page for `docs/<api|hub>/_index.md`.
  writeFileSync(
    join(ROOT, target.docsDir, '_index.md'),
    renderDocTargetIndex(target, groupSummary),
  );

  DOC_TARGETS_REF.push({ target, groupSummary });
}

function emitDocsIndex() {
  // Single docs/README.md that links into both api and hub indexes plus the
  // integration guides. Linked from the main project README.
  const lines = [
    '# Norbix TypeScript SDK — documentation',
    '',
    'This folder is auto-managed. Per-module pages are regenerated from the DTO',
    'definitions every time you run `npm run generate-endpoints`. Hand-written',
    'integration guides live under `integrations/`.',
    '',
    '## Reference',
    '',
    '| Surface | Modules | Description |',
    '| --- | ---: | --- |',
  ];
  for (const { target, groupSummary } of DOC_TARGETS_REF) {
    const total = groupSummary.reduce((s, g) => s + g.count, 0);
    lines.push(
      `| [\`${target.docsTitle}\`](./${target.name}/_index.md) | ${groupSummary.length} modules · ${total} endpoints | ${target.docsDescription} |`,
    );
  }
  lines.push('', '## Integration guides', '');
  lines.push('- [Using with React](./integrations/react.md)');
  lines.push('- [Using with React + Redux Toolkit](./integrations/react-redux.md)');
  lines.push('');
  writeFileSync(join(ROOT, 'docs', 'README.md'), lines.join('\n'));
}

function renderDocTargetIndex(target, groupSummary) {
  const total = groupSummary.reduce((s, g) => s + g.count, 0);
  const rows = groupSummary
    .sort((a, b) => a.group.localeCompare(b.group))
    .map((g) => {
      const desc = GROUP_DESCRIPTIONS[g.group] ?? '';
      return `| [\`${camel(g.group)}\`](./${g.group}.md) | ${g.count} | ${desc} |`;
    })
    .join('\n');
  return `# ${target.docsTitle} reference

[← Back to docs index](../README.md) · [↑ Back to project README](../../README.md)

${target.docsDescription}

**${total} endpoints across ${groupSummary.length} modules.** Click a module
name for the full method reference and TypeScript examples.

| Module | Endpoints | Description |
| --- | ---: | --- |
${rows}
`;
}

function renderDocModule(target, group, endpoints) {
  const desc = GROUP_DESCRIPTIONS[group];

  // Replicate the SDK codegen's method-name dedup so doc anchors match real
  // method names byte-for-byte.
  const usedNames = new Set();
  const resolved = endpoints.map((ep) => {
    const route = ep.routes[0];
    const verb = pickPreferredVerb(route.methods);
    let methodName = methodNameFromClass(ep.className);
    let suffix = 1;
    while (usedNames.has(methodName)) {
      suffix++;
      methodName = methodNameFromClass(ep.className) + suffix;
    }
    usedNames.add(methodName);
    return {
      methodName,
      verb,
      path: route.path,
      pathParams: extractPathParams(route.path),
      isAccountScoped: ep.isAccountScoped,
      className: ep.className,
      responseType: ep.responseType,
    };
  });

  const tableRows = resolved
    .map(
      (r) =>
        `| [\`${r.methodName}\`](#${r.methodName.toLowerCase()}) | \`${r.verb}\` | \`${r.path}\` | ${r.isAccountScoped ? '`account`' : '`project`'} |`,
    )
    .join('\n');

  const sections = resolved.map((r) => renderDocMethod(target, group, r)).join('\n\n');

  const namespaceField = target.namespaceField;
  const moduleField = camel(group);

  return `# ${target.docsTitle} · ${pascal(group)}

[← Back to ${target.docsTitle} index](./_index.md) · [↑ Back to project README](../../README.md)

${desc ?? ''}

Accessed as \`norbix.${namespaceField}.${moduleField}\` on the [\`Norbix\`](../../README.md#authentication) client.

## Endpoints

| Method | Verb | Path | Scope |
| --- | --- | --- | --- |
${tableRows}

## Reference

${sections}
`;
}

function renderDocMethod(target, group, r) {
  const namespaceField = target.namespaceField;
  const moduleField = camel(group);
  const dtoNs = target.typesNamespace;
  const action =
    ACTION_DESCRIPTIONS.prefixes.find((p) => p.match.test(r.methodName))?.text ?? '';

  const accountNote = r.isAccountScoped
    ? '\n> ⚠️ **Account-scoped.** This call requires `accountId` on the client. ' +
      'Construct with `new Norbix({ accountId, ... })` or set `NORBIX_ACCOUNT_ID`. ' +
      'Calling without it throws `NORBIX_ACCOUNT_SCOPE_REQUIRED`.\n'
    : '';

  // Build a realistic example. Path tokens become inline string vars.
  const pathParamLines = r.pathParams
    .map((p) => `  ${p}: '${p}-here',`)
    .join('\n');

  const requestBlock = r.pathParams.length
    ? `{\n${pathParamLines}\n  // Other fields: see CodeMash type for the full request shape.\n}`
    : `{\n  // See CodeMash type for the full request shape.\n}`;

  const responseLine =
    r.responseType === 'void'
      ? '// returns void'
      : `// → typed as ${dtoNs}.${r.responseType.startsWith(dtoNs + '.') ? r.responseType.slice(dtoNs.length + 1) : r.responseType}`;

  return `### ${r.methodName}

\`${r.verb}\` \`${r.path}\`

${action}
${accountNote}
**Request DTO**: \`${dtoNs}.${r.className}\`
${r.responseType !== 'void' ? `**Response**: \`${dtoNs}.${r.responseType.startsWith(dtoNs + '.') ? r.responseType.slice(dtoNs.length + 1) : r.responseType}\`` : '**Response**: `void`'}

\`\`\`ts
import { Norbix } from '@norbix/ts';

const norbix = new Norbix();

const result = await norbix.${namespaceField}.${moduleField}.${r.methodName}(${requestBlock});
${responseLine}
\`\`\`

[↑ Top](#endpoints)`;
}

function emitNamespace(target, parsed) {
  const groups = Array.from(new Set(parsed.endpoints.map((e) => e.group))).sort();
  const importLines = groups
    .map((g) => `import { ${pascal(g)}Module } from './${g}.js';`)
    .join('\n');
  const fields = groups
    .map((g) => `  public readonly ${camel(g)}: ${pascal(g)}Module;`)
    .join('\n');
  const ctor = groups
    .map((g) => `    this.${camel(g)} = new ${pascal(g)}Module(transport);`)
    .join('\n');

  const file = `import type { Transport } from '../client/transport.js';

${importLines}

/**
 * Auto-generated namespace exposing every ${target.name} endpoint group.
 * Refreshed by \`npm run generate-endpoints\`.
 */
export class ${target.namespaceClass} {
${fields}

  constructor(transport: Transport) {
${ctor}
  }
}
`;
  writeFileSync(join(ROOT, target.outDir, 'index.ts'), file);
}

function pascal(s) {
  return s
    .split(/[_-]/g)
    .filter(Boolean)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
    .join('');
}

function camel(s) {
  const p = pascal(s);
  return p.charAt(0).toLowerCase() + p.slice(1);
}
