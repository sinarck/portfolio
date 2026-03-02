export type SocialItem = {
	_key: string;
	name: string;
	link: string;
	icon: "github" | "linkedin" | "x";
};

export type CurrentlyItem = {
	_key: string;
	type: "building" | "reading" | "listening" | "watching";
	title: string;
};

export type ExperienceItem = {
	_key: string;
	company: string;
	role: string;
	startDate: string;
	endDate?: string;
	description: string;
	logo: string | null;
};

export type ProjectItem = {
	_key: string;
	name: string;
	description: string;
	link: string;
};

export type SiteSettings = {
	name: string;
	headline: string;
	email: string;
	currently: CurrentlyItem[];
	experience: ExperienceItem[];
	projects: ProjectItem[];
	socials: SocialItem[];
};
