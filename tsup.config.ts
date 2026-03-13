import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  outDir: 'dist/esm',
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  onSuccess: 'tsx ./scripts/generateCss.ts',
});
