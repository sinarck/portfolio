import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
	api: { projectId: "hjdvv980", dataset: "production" },
	studioHost: "aadi",
	deployment: { appId: "hhmhbsaz1l1rxsevdc8uq6m8" },
	typegen: {
		enabled: true,
		path: "../src/**/*.{ts,tsx}",
		generates: "../src/types/sanity.ts",
		overloadClientMethods: false,
	},
});
