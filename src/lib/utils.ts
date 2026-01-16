import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Type-safe ISO date format (YYYY-MM-DD)
export type ISODate = `${number}-${number}-${number}`;

// Parse YYYY-MM-DD without timezone issues
export function parseISODate(dateStr: ISODate): Date {
	const [year, month, day] = dateStr.split("-").map(Number);
	return new Date(year, month - 1, day);
}

export function formatDate(dateStr: ISODate): string {
	return parseISODate(dateStr).toLocaleDateString("en-US", {
		month: "short",
		year: "numeric",
	});
}
