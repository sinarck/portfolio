import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	server: {
		SANITY_PROJECT_ID: z.string().min(1),
		SANITY_DATASET: z.string().min(1),
		SANITY_API_VERSION: z.iso.date(),
	},
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
});
