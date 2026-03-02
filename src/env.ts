import { createEnv } from "@t3-oss/env-core";
import { z } from "zod/v4";

export const env = createEnv({
	server: {
		SANITY_PROJECT_ID: z.string().min(1),
		SANITY_DATASET: z.string().min(1),
		SANITY_API_VERSION: z.string().min(1),
	},
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
});
