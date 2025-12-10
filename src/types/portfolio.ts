import type { SocialIconName } from "../lib/social-icons";
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
	iconName: SocialIconName;
};

export type PortfolioData = {
	name: string;
	headline: string;
	experience: ExperienceItem[];
	projects: ProjectItem[];
	email: string;
	socials: SocialItem[];
};
