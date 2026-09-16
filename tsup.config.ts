import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'api/index': 'src/api/index.ts',
    'hub/index': 'src/hub/index.ts',
    'webhooks/index': 'src/webhooks/index.ts',
    'sse/index': 'src/sse/index.ts',
    'types/api2.dtos': 'src/types/api2.dtos.ts',
    'types/hub2.dtos': 'src/types/hub2.dtos.ts',
  },
  format: ['esm', 'cjs'],
  // tsup's DTS build injects `baseUrl: '.'`, which TypeScript 6 deprecates (TS5101).
  // Scoped to the DTS build only; tsc --noEmit still reports it for our own config.
  dts: { compilerOptions: { ignoreDeprecations: '6.0' } },
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  target: 'es2022',
  platform: 'neutral',
  minify: false,
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : '.js',
    };
  },
});
