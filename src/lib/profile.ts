import { createClient } from "@sanity/client";
import { createServerFn } from "@tanstack/react-start";
import { defineQuery } from "groq";
import { env } from "@/env";
import { type Profile, profileSchema } from "@/lib/validations/profile";

export type { Profile } from "@/lib/validations/profile";

const sanityClient = createClient({
	projectId: env.SANITY_PROJECT_ID,
	dataset: env.SANITY_DATASET,
	apiVersion: env.SANITY_API_VERSION,
	useCdn: false,
	perspective: "published",
});

export const PROFILE_QUERY = defineQuery(`*[_type == "profile"][0]{
	name, headline, email,
	currently[] { _key, type, title },
	experience[] { _key, company, role, startDate, endDate, description, "logo": logo.asset->url },
	projects[] { _key, name, description, link },
	socials[] { _key, name, link, icon }
}`);

export const getProfile = createServerFn({ method: "GET" }).handler(
	async (): Promise<Profile> => {
		const result = await sanityClient.fetch(PROFILE_QUERY);

		if (result == null) {
			throw new Error("Profile not found");
		}

		const parsed = profileSchema.safeParse(result);

		if (!parsed.success) {
			throw new Error(`Invalid profile payload: ${parsed.error.message}`);
		}

		return parsed.data;
	},
);
