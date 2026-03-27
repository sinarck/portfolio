import { createServerFn } from "@tanstack/react-start";

export type ProfileCurrentlyItem = {
	_key: string;
	type: "reading" | "listening" | "watching";
	title: string;
};

export type ProfileExperienceItem = {
	_key: string;
	company: string;
	role: string;
	startDate: string;
	endDate: string | null;
	description: string;
	logo: string | null;
};

export type ProfileProjectItem = {
	_key: string;
	name: string;
	description: string;
	link: string;
};

export type ProfileSocialItem = {
	_key: string;
	name: string;
	link: string;
	icon: "github" | "linkedin" | "x";
};

export type Profile = {
	name: string;
	headline: string;
	email: string;
	currently: ProfileCurrentlyItem[];
	experience: ProfileExperienceItem[];
	projects: ProfileProjectItem[];
	socials: ProfileSocialItem[];
};

const profile: Profile = {
	name: "Portfolio",
	headline: "Content is being rebuilt.",
	email: "hello@example.com",
	currently: [
		{
			_key: "rebuild",
			type: "reading",
			title: "Rebuilding the site from the ground up",
		},
	],
	experience: [],
	projects: [],
	socials: [],
};

export const getProfile = createServerFn({ method: "GET" }).handler(
	async (): Promise<Profile> => profile,
);
