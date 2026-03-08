import { z } from "zod";

const currentlyItemSchema = z.object({
	_key: z.string().min(1),
	type: z.enum(["reading", "listening", "watching"]),
	title: z.string().min(1),
});

const experienceItemSchema = z.object({
	_key: z.string().min(1),
	company: z.string().min(1),
	role: z.string().min(1),
	startDate: z.string().min(1),
	endDate: z.string().nullable(),
	description: z.string().nullable(),
	logo: z.string().nullable(),
});

const projectItemSchema = z.object({
	_key: z.string().min(1),
	name: z.string().min(1),
	description: z.string().nullable(),
	link: z.url(),
});

const socialItemSchema = z.object({
	_key: z.string().min(1),
	name: z.string().min(1),
	link: z.url(),
	icon: z.enum(["github", "linkedin", "x"]),
});

export const profileSchema = z.object({
	name: z.string().min(1),
	headline: z.string().min(1),
	email: z.email(),
	currently: z.array(currentlyItemSchema),
	experience: z.array(experienceItemSchema),
	projects: z.array(projectItemSchema),
	socials: z.array(socialItemSchema),
});

export type Profile = z.infer<typeof profileSchema>;
