import type { ISODate } from "../lib/utils";

export type ExperienceItem = {
	company: string;
	role: string;
	startDate: ISODate;
	endDate?: ISODate;
	description: string;
	logo: string;
};

export type ProjectItem = {
	name: string;
	description: string;
	link: string;
	date: ISODate;
};

export type SocialItem = {
	name: string;
	link: string;
	iconName: "github" | "linkedin" | "x";
};

export type PortfolioData = {
	name: string;
	headline: string;
	experience: ExperienceItem[];
	projects: ProjectItem[];
	skills: string[];
	email: string;
	socials: SocialItem[];
};
