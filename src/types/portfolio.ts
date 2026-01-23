import type { SocialItem } from "./social";

/** ISO Date string format: YYYY-MM-DD */
export type ISODate = `${number}-${number}-${number}`;

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

export type AvailabilityStatus = "available" | "busy" | "open";

export type CurrentlyItem = {
	type: "building" | "reading" | "listening" | "watching";
	title: string;
	link?: string;
};

export type PortfolioData = {
	name: string;
	headline: string;
	availability?: { status: AvailabilityStatus; message?: string };
	currently?: CurrentlyItem[];
	experience: ExperienceItem[];
	projects: ProjectItem[];
	email: string;
	socials: SocialItem[];
};

export type { SocialIconName, SocialItem } from "./social";
