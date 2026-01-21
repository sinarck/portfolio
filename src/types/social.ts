import type { iconMap } from "@/config/social-icons";

export type SocialIconName = keyof typeof iconMap;

export type SocialItem = {
	name: string;
	link: string;
	iconName: SocialIconName;
};
