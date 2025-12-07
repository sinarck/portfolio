export default function Skills({ items }: { items: string[] }) {
	if (!items.length) return null;

	return (
		<div className="font-mono text-xs sm:text-sm">
			<div className="flex flex-wrap items-center gap-2 text-muted-foreground">
				<span className="text-emerald-500 dark:text-emerald-400 shrink-0">
					→
				</span>
				<span className="opacity-60 shrink-0">bun add</span>
				<span className="text-foreground break-words">{items.join(" ")}</span>
			</div>
			<div className="flex items-center gap-2 mt-1 text-muted-foreground/60">
				<span className="w-3 shrink-0" />
				<span className="text-xs">{items.length} packages installed</span>
			</div>
		</div>
	);
}
