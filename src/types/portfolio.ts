import type { Icon } from "@phosphor-icons/react";

export type ExperienceItem = {
	company: string;
	role: string;
	startDate: string;
	endDate?: string;
	description: string;
	logo: string;
};

export type ProjectItem = {
	name: string;
	description: string;
	link: string;
	date: string;
};

export type SocialItem = {
	name: string;
	link: string;
	icon: Icon;
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
