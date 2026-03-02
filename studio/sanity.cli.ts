import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
	api: { projectId: "hjdvv980", dataset: "production" },
	studioHost: "aadi",
	// @ts-expect-error — deployment config supported at runtime, types lag behind
	deployment: { appId: "hhmhbsaz1l1rxsevdc8uq6m8" },
});
