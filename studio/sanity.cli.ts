import { defineCliConfig } from "sanity/cli";

const SANITY_PROJECT_ID = "hjdvv980";
const SANITY_DATASET = "production";
const SANITY_APP_ID = "hhmhbsaz1l1rxsevdc8uq6m8";

export default defineCliConfig({
	api: {
		projectId: SANITY_PROJECT_ID,
		dataset: SANITY_DATASET,
	},
  deployment: {
    appId: SANITY_APP_ID,
  },
	typegen: {
		enabled: true,
		path: "../src/**/*.{ts,tsx}",
		generates: "../src/types/sanity.ts",
		overloadClientMethods: false,
	},
});
