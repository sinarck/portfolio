import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { profile } from "./schemaTypes/profile";

const SANITY_PROJECT_ID = "hjdvv980";
const SANITY_DATASET = "production";

export default defineConfig({
	name: "portfolio",
	title: "Portfolio",
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	plugins: [
		structureTool({
			structure: (S) =>
				S.list()
					.title("Content")
					.items([
						S.listItem()
							.title("Profile")
							.child(
								S.document()
									.schemaType("profile")
									.documentId("profile"),
							),
					]),
		}),
		visionTool(),
	],
	schema: { types: [profile] },
});
