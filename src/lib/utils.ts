import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ISODate } from "@/types";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/** Format YYYY-MM-DD as "Jan 2024" without timezone issues */
export function formatDate(dateStr: ISODate): string {
	const [year, month, day] = dateStr.split("-").map(Number);
	return new Date(year, month - 1, day).toLocaleDateString("en-US", {
		month: "short",
		year: "numeric",
	});
}
