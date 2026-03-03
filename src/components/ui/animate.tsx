"use client";

import { motion, type Variants } from "motion/react";

// Quart-out — same curve the site uses everywhere
const EASE_OUT: [number, number, number, number] = [0.165, 0.84, 0.44, 1];

/**
 * Parent container variants — orchestrates staggered children.
 * Any nested motion element with `variants` using the same
 * "hidden"/"visible" keys will automatically participate.
 */
export const staggerContainer: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.06,
		},
	},
};

export const fadeInUp: Variants = {
	hidden: {
		opacity: 0,
		transform: "translate3d(0, 8px, 0)",
		filter: "blur(4px)",
	},
	visible: {
		opacity: 1,
		transform: "translate3d(0, 0px, 0)",
		filter: "blur(0px)",
		transition: { duration: 0.6, ease: EASE_OUT },
	},
};

export const growX: Variants = {
	hidden: { scaleX: 0 },
	visible: {
		scaleX: 1,
		transition: { duration: 0.6, ease: EASE_OUT },
	},
};

export { motion };
