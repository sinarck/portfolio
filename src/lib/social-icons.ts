import { SiGithub, SiX } from "@icons-pack/react-simple-icons";

export const iconMap = {
	github: SiGithub,
	x: SiX,
};

export type SocialIconName = keyof typeof iconMap;
