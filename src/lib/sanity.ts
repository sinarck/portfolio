import { createServerFn } from "@tanstack/react-start";
import type { SiteSettings } from "@/types/portfolio";

const PROJECT_ID = "hjdvv980";
const DATASET = "production";
const API_VERSION = "2025-03-01";

const SETTINGS_QUERY = /* groq */ `*[_type == "siteSettings"][0]{
	name, headline, email,
	currently[] { _key, type, title },
	experience[] { _key, company, role, startDate, endDate, description, "logo": logo.asset->url },
	projects[] { _key, name, description, link },
	socials[] { _key, name, link, icon }
}`;

export const getSiteSettings = createServerFn({ method: "GET" }).handler(
	async (): Promise<SiteSettings> => {
		const url = `https://${PROJECT_ID}.apicdn.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${encodeURIComponent(SETTINGS_QUERY)}`;
		const res = await fetch(url);
		if (!res.ok) throw new Error(`Sanity fetch failed: ${res.status}`);
		const { result } = (await res.json()) as { result: SiteSettings | null };
		if (!result) throw new Error("Site settings not found");
		return result;
	},
);
