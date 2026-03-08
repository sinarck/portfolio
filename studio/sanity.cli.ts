import { defineCliConfig } from "sanity/cli";

const SANITY_PROJECT_ID = "hjdvv980";
const SANITY_DATASET = "production";

export default defineCliConfig({
	api: {
		projectId: SANITY_PROJECT_ID,
		dataset: SANITY_DATASET,
	},
	deployment: { appId: "hhmhbsaz1l1rxsevdc8uq6m8" },
	typegen: {
		enabled: true,
		path: "../src/**/*.{ts,tsx}",
		generates: "../src/types/sanity.ts",
		overloadClientMethods: false,
	},
});
