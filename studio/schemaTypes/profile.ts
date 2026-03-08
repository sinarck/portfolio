import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const profile = defineType({
	name: "profile",
	title: "Profile",
	type: "document",
	icon: UserIcon,
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "headline",
			title: "Headline",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "email",
			title: "Email",
			type: "string",
			validation: (rule) => rule.required().email(),
		}),
		defineField({
			name: "currently",
			title: "Currently",
			type: "array",
			validation: (rule) => rule.required(),
			of: [
				defineArrayMember({
					type: "object",
					fields: [
						defineField({
							name: "type",
							title: "Type",
							type: "string",
							options: {
								list: [
									{ title: "Reading", value: "reading" },
									{ title: "Listening", value: "listening" },
									{ title: "Watching", value: "watching" },
								],
							},
							validation: (rule) => rule.required(),
						}),
						defineField({
							name: "title",
							title: "Title",
							type: "string",
							validation: (rule) => rule.required(),
						}),
					],
					preview: {
						select: { title: "title", subtitle: "type" },
					},
				}),
			],
		}),
		defineField({
			name: "experience",
			title: "Experience",
			type: "array",
			validation: (rule) => rule.required(),
			of: [
				defineArrayMember({
					type: "object",
					fields: [
						defineField({
							name: "company",
							title: "Company",
							type: "string",
							validation: (rule) => rule.required(),
						}),
						defineField({
							name: "role",
							title: "Role",
							type: "string",
							validation: (rule) => rule.required(),
						}),
						defineField({
							name: "startDate",
							title: "Start Date",
							type: "date",
							validation: (rule) => rule.required(),
						}),
						defineField({
							name: "endDate",
							title: "End Date",
							type: "date",
						}),
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
							validation: (rule) => rule.required(),
						}),
					],
					preview: {
						select: { title: "company", subtitle: "role" },
					},
				}),
			],
		}),
		defineField({
			name: "projects",
			title: "Projects",
			type: "array",
			validation: (rule) => rule.required(),
			of: [
				defineArrayMember({
					type: "object",
					fields: [
						defineField({
							name: "name",
							title: "Name",
							type: "string",
							validation: (rule) => rule.required(),
						}),
						defineField({
							name: "description",
							title: "Description",
							type: "text",
						}),
						defineField({
							name: "link",
							title: "Link",
							type: "url",
							validation: (rule) => rule.required(),
						}),
					],
					preview: {
						select: { title: "name", subtitle: "description" },
					},
				}),
			],
		}),
		defineField({
			name: "socials",
			title: "Social Links",
			type: "array",
			validation: (rule) => rule.required(),
			of: [
				defineArrayMember({
					type: "object",
					fields: [
						defineField({
							name: "name",
							title: "Name",
							type: "string",
							validation: (rule) => rule.required(),
						}),
						defineField({
							name: "link",
							title: "Link",
							type: "url",
							validation: (rule) => rule.required(),
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
							validation: (rule) => rule.required(),
						}),
					],
					preview: {
						select: { title: "name" },
					},
				}),
			],
		}),
	],
	preview: {
		prepare: () => ({ title: "Profile" }),
	},
});
