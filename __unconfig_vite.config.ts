
let __unconfig_data;
let __unconfig_stub = function (data) { __unconfig_data = data };
__unconfig_stub.default = (data) => { __unconfig_data = data };
import { builtinModules } from "node:module";
import { defineConfig } from "vite";
import Dts from "vite-plugin-dts";
import { resolve } from "path";

const __unconfig_default =  defineConfig(({ command, mode }) => {
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
        // TODO 默认导出3中方式,这里需要根据自己的实际情况修改
        formats: ["cjs", "es", "iife"],
        // iife 模式的全局名称
        name: "Lib",
        fileName: (format) => {
          return `lib-${format}.js`;
        }
      },
      rollupOptions: {
        external: builtinModules.concat(["chalk"])
        // output.globals[name] 为external排除包的全局名称
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

if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;