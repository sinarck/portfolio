export type ExperienceItem = {
	company: string;
	role: string;
	period: string;
	highlights: string;
};

export type ProjectItem = {
	name: string;
	description: string;
	link: string;
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
