import {
	GithubLogoIcon,
	LinkedinLogoIcon,
	XLogoIcon,
} from "@phosphor-icons/react";
import type { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
	name: "Hey, I'm Aadi Sanghvi",
	headline: "i'm a high school student. currently building open attendance",
	experience: [
		{
			company: "Doastly",
			role: "Junior SWE, SWE Intern",
			startDate: "2023-12-01",
			description: "Pet salon management startup",
			logo: "/work/doastly.webp",
		},
		{
			company: "Sonder Initiative",
			role: "Founder",
			startDate: "2024-07-01",
			description: "Freelance web development. Contact for more details.",
			logo: "/work/sonder-placeholder.svg",
		},
	],
	skills: [
		"React",
		"Next.js",
		"TypeScript",
		"Expo",
		"Node.js",
		"PostgreSQL",
		"TailwindCSS",
	],
	projects: [
		{
			name: "Open Attendance",
			description:
				"an attendance system for schools (and got a few users along the way). Not a fan of proprietary software.",
			link: "https://github.com/sinarck/open-attendance",
			date: "2025-01-01",
		},
		{
			name: "Hand Wave",
			description:
				"Real-time ASL translation with Meta AI glasses. Presented @ texas school for the deaf.",
			link: "https://github.com/sinarck/hand-wave",
			date: "2025-02-01",
		},
		{
			name: "Storm Shield",
			description:
				"A mobile app demo that connects volunteers with disaster relief efforts. Got to show off @ us capitol",
			link: "https://www.stormshield.app",
			date: "2024-01-01",
		},
	],
	email: import.meta.env.VITE_EMAIL,
	socials: [
		{
			name: "github",
			link: "https://github.com/sinarck",
			icon: GithubLogoIcon,
		},
		{
			name: "linkedin",
			link: "https://www.linkedin.com/in/aadisanghvi/",
			icon: LinkedinLogoIcon,
		},
		{
			name: "x",
			link: "https://x.com/aadisanghvii",
			icon: XLogoIcon,
		},
	],
};
