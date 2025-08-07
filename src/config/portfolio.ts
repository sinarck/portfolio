import type { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  name: "your name",
  headline: "your role · your focus/stack",
  summary:
    "short, concrete statement about what you do, the problems you like solving, and the scale you've operated at.",
  experience: [
    {
      company: "company, inc.",
      role: "senior something",
      period: "2022 — present",
      highlights: [
        "one sentence impact metric (e.g., cut x by y% for z users)",
        "key system/project you owned or shipped",
      ],
    },
  ],
  projects: [
    {
      name: "project name",
      description: "what it does, how many users, notable tech/approach.",
      link: "https://example.com",
    },
  ],
  skills: ["skill a", "skill b", "skill c"],
  location: "city, country",
  email: "you@example.com",
  website: "https://your.site",
  github: "https://github.com/yourhandle",
  linkedin: "https://www.linkedin.com/in/yourhandle/",
};
