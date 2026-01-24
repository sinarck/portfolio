import {
	GithubLogoIcon,
	LinkedinLogoIcon,
	XLogoIcon,
} from "@phosphor-icons/react";
import { env } from "@/env";
import type {
	CurrentlyItem,
	ExperienceItem,
	ProjectItem,
} from "@/types/portfolio";

// Icon mapping for social links
export const socialIcons = {
	github: GithubLogoIcon,
	linkedin: LinkedinLogoIcon,
	x: XLogoIcon,
} as const;

export type SocialIconName = keyof typeof socialIcons;

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
		{ type: "building", title: "Open Attendance" },
		{ type: "listening", title: "Weston Estate" },
		{ type: "watching", title: "Mr. Robot" },
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
			company: "Sonder Initiative",
			role: "Founder",
			startDate: "2024-08-01",
			description: "Freelance web development. Reach out for details.",
			logo: "/work/sonder-placeholder.svg",
		},
	],
	projects: [
		{
			name: "Open Attendance",
			description:
				"An open-source attendance system for schools. Not a fan of proprietary software.",
			link: "https://github.com/sinarck/open-attendance",
			date: "2025-01-01",
		},
		{
			name: "Hand Wave",
			description:
				"Real-time ASL translation with Meta AI glasses. Presented at The Texas School for the Deaf.",
			link: "https://github.com/sinarck/hand-wave",
			date: "2025-02-01",
		},
		{
			name: "Storm Shield",
			description:
				"Mobile app connecting volunteers with disaster relief efforts. Demoed at the US Capitol.",
			link: "https://www.stormshield.app",
			date: "2024-01-01",
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
