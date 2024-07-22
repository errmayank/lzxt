import { defineConfig } from "tsup";

import pkg from "./package.json";

const banner = `/*
 * ${pkg.name} v${pkg.version}
 * Copyright (c) 2024-present Mayank Verma / @errmayank
 * Released under the ${pkg.license} License
 */`;

/** @type {import('tsup').Options} */
const tsupConfig = {
	banner: { js: banner },
	bundle: true,
	clean: false,
	keepNames: true,
	minify: true,
	minifyWhitespace: true,
	dts: true,
	format: ["esm"],
	shims: true,
	target: ["esnext"],
	treeshake: true,
	entry: { main: "./src/main.ts" },
	outDir: "./build",
};

export default defineConfig(tsupConfig);
