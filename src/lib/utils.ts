import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ISODate } from "@/types";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Parse YYYY-MM-DD without timezone issues
 */
export function parseISODate(dateStr: ISODate): Date {
	const [year, month, day] = dateStr.split("-").map(Number);
	return new Date(year, month - 1, day);
}

/**
 * Format date as "Jan 2024" style
 */
export function formatDate(dateStr: ISODate): string {
	return parseISODate(dateStr).toLocaleDateString("en-US", {
		month: "short",
		year: "numeric",
	});
}
