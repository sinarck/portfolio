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
};
