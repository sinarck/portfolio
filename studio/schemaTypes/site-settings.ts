import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
	name: "siteSettings",
	title: "Site Settings",
	type: "document",
	icon: CogIcon,
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			validation: (r) => r.required(),
		}),
		defineField({
			name: "headline",
			title: "Headline",
			type: "string",
			validation: (r) => r.required(),
		}),
		defineField({
			name: "email",
			title: "Email",
			type: "string",
			validation: (r) => r.required().email(),
		}),
		defineField({
			name: "currently",
			title: "Currently",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						defineField({
							name: "type",
							title: "Type",
							type: "string",
							options: {
								list: [
								{ title: "Building", value: "building" },
								{ title: "Reading", value: "reading" },
								{ title: "Listening", value: "listening" },
								{ title: "Watching", value: "watching" },
							],
							},
							validation: (r) => r.required(),
						}),
						defineField({
							name: "title",
							title: "Title",
							type: "string",
							validation: (r) => r.required(),
						}),
					],
					preview: {
						select: { title: "title", subtitle: "type" },
					},
				},
			],
		}),
		defineField({
			name: "experience",
			title: "Experience",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						defineField({
							name: "company",
							title: "Company",
							type: "string",
							validation: (r) => r.required(),
						}),
						defineField({
							name: "role",
							title: "Role",
							type: "string",
							validation: (r) => r.required(),
						}),
						defineField({
							name: "startDate",
							title: "Start Date",
							type: "date",
							validation: (r) => r.required(),
						}),
						defineField({ name: "endDate", title: "End Date", type: "date" }),
						defineField({
							name: "description",
							title: "Description",
							type: "string",
						}),
						defineField({
							name: "logo",
							title: "Logo",
							type: "image",
							options: { hotspot: true },
						}),
					],
					preview: {
						select: { title: "company", subtitle: "role" },
					},
				},
			],
		}),
		defineField({
			name: "projects",
			title: "Projects",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						defineField({
							name: "name",
							title: "Name",
							type: "string",
							validation: (r) => r.required(),
						}),
						defineField({ name: "description", title: "Description", type: "text" }),
						defineField({ name: "link", title: "Link", type: "url" }),
					],
					preview: {
						select: { title: "name", subtitle: "description" },
					},
				},
			],
		}),
		defineField({
			name: "socials",
			title: "Social Links",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						defineField({
							name: "name",
							title: "Name",
							type: "string",
							validation: (r) => r.required(),
						}),
						defineField({
							name: "link",
							title: "Link",
							type: "url",
							validation: (r) => r.required(),
						}),
						defineField({
							name: "icon",
							title: "Icon",
							type: "string",
							options: {
								list: [
									{ title: "GitHub", value: "github" },
									{ title: "LinkedIn", value: "linkedin" },
									{ title: "X", value: "x" },
								],
							},
							validation: (r) => r.required(),
						}),
					],
					preview: {
						select: { title: "name" },
					},
				},
			],
		}),
	],
	preview: {
		prepare: () => ({ title: "Site Settings" }),
	},
});
