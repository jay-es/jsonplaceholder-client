import typescriptPlugin from "@rollup/plugin-typescript";
import pluginDts from "rollup-plugin-dts";

/** @type {import('rollup').RollupOptions} */
const config = [
  {
    input: "./src/index.ts",
    output: [
      { file: "dist/index.js", format: "commonjs" },
      { file: "dist/index.mjs", format: "esm" },
    ],
    plugins: [typescriptPlugin({ removeComments: true })],
  },
  {
    input: "./src/index.ts",
    output: { dir: "dist" },
    plugins: [pluginDts()],
  },
];

export default config;
