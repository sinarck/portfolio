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

export type PROFILE_QUERY_RESULT = {
	name: string;
	headline: string;
	email: string;
	currently: ProfileCurrentlyItem[];
	experience: ProfileExperienceItem[];
	projects: ProfileProjectItem[];
	socials: ProfileSocialItem[];
} | null;
