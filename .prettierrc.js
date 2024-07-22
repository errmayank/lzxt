/** @type {import("prettier").Config} */
const config = {
	printWidth: 100,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: false,
	quoteProps: "as-needed",
	trailingComma: "all",
	bracketSpacing: true,
	arrowParens: "avoid",
	endOfLine: "lf",
	overrides: [
		{ files: ["*.js", "*.cjs", "*.mjs"], options: { parser: "babel" } },
		{ files: ["*.ts", "*.cts", "*.mts"], options: { parser: "typescript" } },
		{ files: ["*.json"], options: { parser: "json" } },
		{ files: ["*.md"], options: { parser: "markdown" } },
		{ files: ["*.yaml", "*.yml"], options: { parser: "yaml" } },
	],
};

export default config;
