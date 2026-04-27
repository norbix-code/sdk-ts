/**
 * Plain-Node ESM version of sync-types.ts. See that file for the full
 * design notes; behaviour here is identical.
 */
import { execSync } from 'node:child_process';
import { copyFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const TARGETS = [
  {
    name: 'api2.dtos.ts',
    cloudPath: '../../worktrees/cloud/generic/src/types/api2.dtos.ts',
    metadataUrl: 'http://localhost:5002',
  },
  {
    name: 'hub2.dtos.ts',
    cloudPath: '../../worktrees/cloud/generic/src/types/hub2.dtos.ts',
    metadataUrl: 'http://localhost:5001',
  },
];

main();

function main() {
  const remote = process.argv.includes('--remote');
  for (const t of TARGETS) {
    const out = join(ROOT, 'src/types', t.name);
    if (remote) {
      console.log(`[sync-types] regenerating ${t.name} from ${t.metadataUrl}`);
      execSync(`x typescript ${t.metadataUrl} ${out}`, { stdio: 'inherit' });
    } else {
      const cloud = resolve(ROOT, t.cloudPath);
      if (!existsSync(cloud)) {
        console.warn(
          `[sync-types] cloud monorepo not found at ${cloud}. Skipping ${t.name}.\n` +
            `             Pass --remote to regenerate from a running API instead.`,
        );
        continue;
      }
      console.log(`[sync-types] copying ${cloud} -> ${out}`);
      copyFileSync(cloud, out);
    }
    applyRegexFixes(out);
  }
  console.log('[sync-types] done. Run `npm run generate-endpoints` to refresh SDK modules.');
}

function applyRegexFixes(path) {
  let src = readFileSync(path, 'utf8');

  src = src.replace(
    /export class (\w+) extends Array<ResponseBase<(\w+)>>/g,
    'export class $1 extends ResponseBase<Array<$2>>',
  );

  src = src.replace(
    /\b(NameValueCollection|FileInfo|Func<IDisposable>|Cookie|HttpStatusCode|Cookie\[\]);/g,
    'any;',
  );

  src = src.replace(/IList<JSchema>;/g, 'JSchema[];');
  src = src.replace(/IList<JToken>;/g, 'JToken[];');
  src = src.replace(/IList<string>;/g, 'string[];');
  src = applyGeneratedTypeScriptFixes(src);

  if (
    /export class GetAvailableMarketplaceConnectionsResponse extends Array<ResponseBase<\{ >/.test(
      src,
    )
  ) {
    src = src.replace(
      /export class GetAvailableMarketplaceConnectionsResponse extends Array<ResponseBase<\{ >/,
      `// Supporting types:
  export type Dictionary<TValue> = {
    [key: string]: TValue;
  };

  export class GetAvailableMarketplaceConnectionsResponse extends ResponseBase<
    Dictionary<CodeMashMarketplaceConnection[]>
  >`,
    );
  }

  writeFileSync(path, src);
}

function applyGeneratedTypeScriptFixes(src) {
  if (!src.includes('export type IReadOnlySet<T>')) {
    src = src.replace(
      /(\n\s+export interface IGet\s*\{\s*\}\n)/,
      `$1
    export type IReadOnlySet<T> = ReadonlyArray<T>;
    export type IReadOnlyList<T> = ReadonlyArray<T>;
    export type IList<T> = T[];
    export type HashSet<T> = T[];
    export type IReadOnlyDictionary<TKey extends string | number | symbol, TValue> = Record<TKey, TValue>;
`,
    );
  }

  src = src.replace(
    /export class AggregateId\s*\{\n(\s+public value: string;\n)(?!\s+public get viewId)/,
    'export class AggregateId\n    {\n$1        public get viewId(): string { return this.value; }\n',
  );

  src = src.replace(
    /export class UserId implements IHasDomainEntityId\s*\{\n(\s+public value: string;\n)(?!\s+public get viewId)/,
    'export class UserId implements IHasDomainEntityId\n    {\n$1        public get viewId(): string { return this.value; }\n',
  );

  src = src.replace(
    /export class Integration implements IIntegrationIdentification, IHasDomainEntityId\s*\{\n(\s+public integrationId: IntegrationId;\n)(?!\s+public get viewId)/,
    'export class Integration implements IIntegrationIdentification, IHasDomainEntityId\n    {\n$1        public get viewId(): string { return this.integrationId?.viewId; }\n',
  );

  src = src.replace(
    /(export class Trigger implements IHasDomainEntityId\s*\{\n\s+public triggerId: TriggerId;\n)(?!\s+public get viewId)/,
    '$1        public get viewId(): string { return this.triggerId?.viewId; }\n',
  );

  src = src.replace(
    /(export class Schema implements IHasDomainEntityId\s*\{\n\s+public schemaName: SchemaName;\n\s+public id: SchemaId;\n)(?!\s+public get viewId)/,
    '$1        public get viewId(): string { return this.id?.viewId; }\n',
  );

  src = src.replace(
    /(export class Taxonomy implements IHasDomainEntityId\s*\{\n\s+public parentId\?: TaxonomyId;\n\s+public id: TaxonomyId;\n)(?!\s+public get viewId)/,
    '$1        public get viewId(): string { return this.id?.viewId; }\n',
  );

  src = src.replace(
    /(export class SchedulerTask implements IHasDomainEntityId\s*\{\n\s+public id: TaskId;\n)(?!\s+public get viewId)/,
    '$1        public get viewId(): string { return this.id?.viewId; }\n',
  );

  src = src.replace(
    /export class MarketplaceIntegration extends Integration\s*\{\n\s+public capability: string;/,
    'export class MarketplaceIntegration extends Integration\n    {\n        declare public capability: string;',
  );

  src = src.replace(
    /export class WebhookIntegration extends Integration\s*\{\n\s+public capability: string;/,
    'export class WebhookIntegration extends Integration\n    {\n        declare public capability: string;',
  );

  src = src.replace(
    /\n\s+export class CronExpression\s*\{\n\s+public constructor\(init\?: Partial<CronExpression>\) \{ \(Object as any\)\.assign\(this, init\); \}\n\s+\}\n(?=[\s\S]*export class CronExpression\s*\{\n\s+public value: string;)/,
    '\n',
  );

  src = src.replace(
    /(export class GetDatabaseSchema extends CodeMashRequestBase implements IReturn<GetDatabaseSchemaResponse>\s*\{[\s\S]*?\/\/ @DataMember\(Name="version"\)\n\s+\/\/ @ApiMember\(DataType="integer", Name="version", ParameterType="query"\)\n\s+)public version\?: number;/,
    '$1public schemaVersion?: number;',
  );

  return src;
}
