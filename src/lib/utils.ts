/** Format YYYY-MM-DD as "Jan 2024" without timezone issues */
export function formatDate(dateStr: string): string {
	const [year, month, day] = dateStr.split("-").map(Number);
	return new Date(year, month - 1, day).toLocaleDateString("en-US", {
		month: "short",
		year: "numeric",
	});
}
