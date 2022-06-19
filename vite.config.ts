import { builtinModules } from "node:module";
import { defineConfig } from "vite";
import Dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig(({ command, mode }) => {
  const option = {
    clearScreen: true,
    optimizeDeps: {
      extensions: [".ts", ".js"]
    },
    build: {
      outDir: resolve(__dirname, "./dist"),
      assetsDir: "",
      sourcemap: true,
      lib: {
        entry: resolve(__dirname, "./src/index.ts"),
        formats: ["cjs", "es", "iife"],
        // iife 模式的全局名称
        name: "Imohuan",
        fileName: (format) => {
          return `imohuan-cli-${format}.js`;
        }
      },
      rollupOptions: {
        // input: resolve(""),
        external: builtinModules.concat(["chalk"])
        // globals[name] 为external排除包的全局名称
        // output: { globals: { chalk: "Chalk" } },
      }
    },
    plugins: []
  };

  if (mode === "production"){
    /** https://github.com/qmhc/vite-plugin-dts/blob/HEAD/README.zh-CN.md */
    option.plugins.push(Dts({
      outputDir: resolve(__dirname, "dist/types"),
      skipDiagnostics: false,
      logDiagnostics: true
    }))
  }

  return option;
});
