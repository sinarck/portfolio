import type { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Hey, I'm aadi sanghvi",
  headline: "Building scora, a wrapper for SIS systems",
  summary:
    "I'm a student with a passion for building products that help people live better lives.",
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
  github: "https://github.com/yourhandle",
  linkedin: "https://www.linkedin.com/in/yourhandle/",
};

