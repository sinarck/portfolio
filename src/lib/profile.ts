import { createServerFn } from "@tanstack/react-start";
import { defineQuery } from "groq";
import { env } from "@/env";
import type { PROFILE_QUERY_RESULT } from "@/types/sanity";

export type Profile = NonNullable<PROFILE_QUERY_RESULT>;

export const PROFILE_QUERY = defineQuery(`*[_type == "profile"][0]{
	name, headline, email,
	currently[] { _key, type, title },
	experience[] { _key, company, role, startDate, endDate, description, "logo": logo.asset->url },
	projects[] { _key, name, description, link },
	socials[] { _key, name, link, icon }
}`);

export const getProfile = createServerFn({ method: "GET" }).handler(
	async (): Promise<Profile> => {
		const profileQueryUrl = new URL(
			`https://${env.SANITY_PROJECT_ID}.api.sanity.io/v${env.SANITY_API_VERSION}/data/query/${env.SANITY_DATASET}`,
		);

		profileQueryUrl.searchParams.set("query", PROFILE_QUERY);

		const response = await fetch(profileQueryUrl, {
			cache: "no-store",
			signal: AbortSignal.timeout(8_000),
		});

		if (!response.ok) {
			throw new Error(`Failed to load profile: ${response.status}`);
		}

		const result =
			((await response.json()) as { result?: PROFILE_QUERY_RESULT }).result ??
			null;

		if (result == null) {
			throw new Error("Profile not found");
		}

		return result;
	},
);
