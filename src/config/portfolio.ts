import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
	name: "Hey, I'm Aadi Sanghvi",
	headline: "High school student, currently building Open Attendance.",
	availability: {
		status: "open",
		message: "Open to opportunities",
	},
	currently: [
		{
			type: "building",
			title: "Open Attendance",
			link: "https://github.com/sinarck/open-attendance",
		},
		{
			type: "listening",
			title: "Daft Punk",
		},
		{
			type: "reading",
			title: "The Design of Everyday Things",
		},
		{
			type: "watching",
			title: "Mr. Robot",
		},
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
	email: "placeholder@example.com",
	socials: [
		{
			name: "GitHub",
			link: "https://github.com/sinarck",
			iconName: "github",
		},
		{
			name: "X",
			link: "https://x.com/aadisanghvii",
			iconName: "x",
		},
	],
};
