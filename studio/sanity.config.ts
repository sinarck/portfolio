import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { siteSettings } from "./schemaTypes/site-settings";

export default defineConfig({
	name: "portfolio",
	title: "Portfolio",
	projectId: "hjdvv980",
	dataset: "production",
	plugins: [
		structureTool({
			structure: (S) =>
				S.list()
					.title("Content")
					.items([
						S.listItem()
							.title("Site Settings")
							.child(
								S.document()
									.schemaType("siteSettings")
									.documentId("siteSettings"),
							),
					]),
		}),
		visionTool(),
	],
	schema: { types: [siteSettings] },
});
