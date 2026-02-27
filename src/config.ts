import { env } from "@/env";
import type {
	CurrentlyItem,
	ExperienceItem,
	ProjectItem,
} from "@/types/portfolio";

export type SocialIconName = "github" | "linkedin" | "x";

export type SocialItem = {
	name: string;
	link: string;
	icon: SocialIconName;
};

// Base identity
const name = "Aadi Sanghvi";
const headline = "High school student, currently building Open Attendance.";

// Site metadata (SEO, meta tags)
export const site = {
	name,
	title: name,
	description: headline,
	url: "https://aadisanghvi.com",
	ogImage: "/og-image.png",
	themeColor: "#0a0a0a",
} as const;

// Portfolio content
export const portfolio: {
	name: string;
	headline: string;
	availability: { status: "available" | "busy" | "open"; message: string };
	currently: CurrentlyItem[];
	experience: ExperienceItem[];
	projects: ProjectItem[];
	email: string;
	socials: SocialItem[];
} = {
	name: `Hey, I'm ${name}`,
	headline,
	availability: {
		status: "open",
		message: "Open to opportunities",
	},
	currently: [
		{ type: "listening", title: "Weston Estate" },
		{ type: "watching", title: "Inception" },
		{ type: "reading", title: "The Way of Kings" },
	],
	experience: [
		{
			company: "Doastly",
			role: "Junior SWE, SWE Intern",
			startDate: "2024-01-01",
			description: "Pet salon management startup.",
			logo: "/work/doastly.webp",
		},
		{
			company: "Spare Studio",
			role: "Founder",
			startDate: "2024-08-01",
			description: "Freelance web development.",
			logo: "/work/spare-studio.svg",
		},
	],
	projects: [
		{
			name: "Open Attendance",
			description:
				"An open-source attendance system for any kind of event (500+ users, including school).",
			link: "https://github.com/sinarck/open-attendance",
		},
		{
			name: "Hand Wave",
			description:
				"Real-time ASL translation with Meta AI glasses. Presented to students at the Texas School for the Deaf.",
			link: "https://github.com/sinarck/hand-wave",
		},
		{
			name: "Storm Shield",
			description:
				"Mobile app connecting volunteers with disaster relief efforts. Got to demo at the US Capitol to my congressman and senator.",
			link: "https://www.stormshield.app",
		},
	],
	email: env.VITE_EMAIL,
	socials: [
		{ name: "GitHub", link: "https://github.com/sinarck", icon: "github" },
		{
			name: "LinkedIn",
			link: "https://linkedin.com/in/aadisanghvi",
			icon: "linkedin",
		},
		{ name: "X", link: "https://x.com/aadisanghvii", icon: "x" },
	],
};
