import { createServerFn } from "@tanstack/react-start";
import { defineQuery } from "groq";
import { env } from "@/env";
import { type Profile, profileSchema } from "@/lib/validations/profile";

export type { Profile } from "@/lib/validations/profile";

export const PROFILE_QUERY = defineQuery(`*[_type == "profile"][0]{
	name, headline, email,
	currently[] { _key, type, title },
	experience[] { _key, company, role, startDate, endDate, description, "logo": logo.asset->url },
	projects[] { _key, name, description, link },
	socials[] { _key, name, link, icon }
}`);

const PROFILE_REQUEST_TIMEOUT = 8_000;

export const getProfile = createServerFn({ method: "GET" }).handler(
	async (): Promise<Profile> => {
		const profileQueryUrl = new URL(
			`https://${env.SANITY_PROJECT_ID}.api.sanity.io/v${env.SANITY_API_VERSION}/data/query/${env.SANITY_DATASET}`,
		);

		profileQueryUrl.searchParams.set("query", PROFILE_QUERY);

		const controller = new AbortController();
		const timeoutId = setTimeout(
			() => controller.abort(),
			PROFILE_REQUEST_TIMEOUT,
		);

		let result: unknown;

		try {
			const response = await fetch(profileQueryUrl, {
				cache: "no-store",
				headers: { Accept: "application/json" },
				signal: controller.signal,
			});

			if (!response.ok) {
				throw new Error(`Failed to load profile: ${response.status}`);
			}

			result = ((await response.json()) as { result?: unknown }).result;
		} catch (error) {
			if (error instanceof DOMException && error.name === "AbortError") {
				throw new Error("Profile request timed out");
			}

			throw error;
		} finally {
			clearTimeout(timeoutId);
		}

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
