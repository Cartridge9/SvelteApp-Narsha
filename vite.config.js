import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { transform } from "esbuild";
import pkg from "./package.json";

export default defineConfig({
  server: {
    host: '0.0.0.0'
    
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
    minifyEs(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      entry: "src/components/index.js",
      formats: ["es", "esm", "umd"],
      name: pkg.name.replace(/-./g, (char) => char[1].toUpperCase()),
      fileName: (format) =>
        ({
          es: `${pkg.name}.js`,
          esm: `${pkg.name}.min.js`,
          umd: `${pkg.name}.umd.js`,
        }[format]),
    },
  },
});

function minifyEs() {
  return {
    name: "minifyEs",
    renderChunk: {
      order: "post",
      async handler(code, chunk, outputOptions) {
        if (
          outputOptions.format === "es" &&
          chunk.fileName.endsWith(".min.js")
        ) {
          return await transform(code, { minify: true });
        }
        return code;
      },
    },
  };
}