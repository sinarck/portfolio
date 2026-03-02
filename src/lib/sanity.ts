import { createClient } from "@sanity/client";
import { createServerFn } from "@tanstack/react-start";
import type { SiteSettings } from "@/types/portfolio";

const client = createClient({
	projectId: "hjdvv980",
	dataset: "production",
	apiVersion: "2025-03-01",
	useCdn: true,
});

const SETTINGS_QUERY = /* groq */ `*[_type == "siteSettings"][0]{
	name, headline, email,
	availability { status, message },
	currently[] { _key, type, title },
	experience[] { _key, company, role, startDate, endDate, description, "logo": logo.asset->url },
	projects[] { _key, name, description, link },
	socials[] { _key, name, link, icon }
}`;

export const getSiteSettings = createServerFn({ method: "GET" }).handler(
	async (): Promise<SiteSettings> => {
		const data = await client.fetch<SiteSettings>(SETTINGS_QUERY);
		if (!data) throw new Error("Site settings not found");
		return data;
	},
);
