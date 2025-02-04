import { Github, Linkedin, LucideIcon, Mail } from "lucide-react";

type Social = {
  link: string;
  name: string;
  icon: LucideIcon;
};

export const socials: Social[] = [
  {
    link: "https://github.com/sinarck",
    name: "GitHub",
    icon: Github,
  },
  {
    link: "https://linkedin.com/in/aadisanghvi",
    name: "LinkedIn",
    icon: Linkedin,
  },
  {
    link: `mailto:aadisanghvi321@outlook.com?subject=${encodeURIComponent(
      "Portfolio Inquiry"
    )}&body=${encodeURIComponent(
      "Hello Aadi,\n\nI came across your portfolio and would like to connect."
    )}`,
    name: "Email",
    icon: Mail,
  },
];

