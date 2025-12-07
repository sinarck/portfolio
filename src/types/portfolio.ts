export type ExperienceItem = {
	company: string;
	role: string;
	startDate: Date;
	endDate?: Date;
	description: string;
	logo?: string;
};

export type ProjectItem = {
	name: string;
	description: string;
	link?: string;
	date?: Date;
};

export type PortfolioData = {
	name: string;
	headline: string;
	experience: ExperienceItem[];
	projects: ProjectItem[];
	skills: string[];
	email: string;
	socials: {
		name: string;
		link: string;
	}[];
};
