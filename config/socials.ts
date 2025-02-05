import { Github, Linkedin, LucideIcon, Mail } from "lucide-react";

type Social = {
  link: string;
  name: string;
  tooltip: string;
  icon: LucideIcon;
};

export const socials: Social[] = [
  {
    link: "https://github.com/sinarck",
    name: "GitHub",
    icon: Github,
    tooltip: "View my GitHub profile",
  },
  {
    link: "https://linkedin.com/in/aadisanghvi",
    name: "LinkedIn",
    icon: Linkedin,
    tooltip: "View my LinkedIn profile",
  },
  {
    link: "mailto:aadisanghvi321@outlook.com",
    name: "Email",
    icon: Mail,
    tooltip: "Send me an email",
  },
];

