import z from "zod";
import type { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
	name: "Hey, I'm Aadi Sanghvi",
	headline:
		"i'm a high school student. currently building with react, next.js, and expo",
	experience: [],
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
			date: new Date(2025, 0, 1),
		},
		{
			name: "Hand Wave",
			description:
				"Real-time ASL translation with Meta AI glasses. Presented @ texas school for the deaf.",
			link: "https://github.com/sinarck/hand-wave",
			date: new Date(2025, 1, 1),
		},
		{
			name: "Storm Shield",
			description:
				"A mobile app demo that connects volunteers with disaster relief efforts. Got to show off @ us capitol",
			link: "https://www.stormshield.app",
			date: new Date(2024, 0, 1),
		},
	],
	email: z.email().parse(import.meta.env.VITE_EMAIL),
	socials: [
		{
			name: "github",
			link: "https://github.com/sinarck",
		},
		{
			name: "linkedin",
			link: "https://www.linkedin.com/in/aadisanghvi/",
		},
		{
			name: "x",
			link: "https://x.com/aadisanghvii",
		},
	],
};
