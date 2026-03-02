import { createServerFn } from "@tanstack/react-start";
import { defineQuery } from "groq";
import { env } from "@/env";
import type { SETTINGS_QUERY_RESULT } from "@/types/sanity";

export type SiteSettings = NonNullable<SETTINGS_QUERY_RESULT>;

export const SETTINGS_QUERY = defineQuery(`*[_type == "siteSettings"][0]{
	name, headline, email,
	currently[] { _key, type, title },
	experience[] { _key, company, role, startDate, endDate, description, "logo": logo.asset->url },
	projects[] { _key, name, description, link },
	socials[] { _key, name, link, icon }
}`);

export const getSiteSettings = createServerFn({ method: "GET" }).handler(
	async (): Promise<SiteSettings> => {
		const url = `https://${env.SANITY_PROJECT_ID}.apicdn.sanity.io/v${env.SANITY_API_VERSION}/data/query/${env.SANITY_DATASET}?query=${encodeURIComponent(SETTINGS_QUERY)}`;
		const res = await fetch(url);
		if (!res.ok) throw new Error(`Sanity fetch failed: ${res.status}`);
		const { result } = (await res.json()) as { result: SiteSettings | null };
		if (!result) throw new Error("Site settings not found");
		return result;
	},
);
