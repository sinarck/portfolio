import type { ISODate } from "./date";
import type { SocialItem } from "./social";

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

export type PortfolioData = {
	name: string;
	headline: string;
	experience: ExperienceItem[];
	projects: ProjectItem[];
	email: string;
	socials: SocialItem[];
};

// Re-export for convenience
export type { ISODate } from "./date";
export type { SocialIconName, SocialItem } from "./social";
