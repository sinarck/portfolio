type StatusIndicatorProps = {
	status?: "active" | "idle" | "offline";
};

export default function StatusIndicator({
	status = "active",
}: StatusIndicatorProps) {
	return (
		<div className="flex items-center gap-3">
			<div className="flex items-center gap-1.5">
				<span
					className={`size-1.5 rounded-full ${status === "active" ? "bg-primary" : "bg-muted-foreground/30"}`}
				/>
				<span
					className={`size-1.5 rounded-full ${status === "idle" ? "bg-primary" : "bg-muted-foreground/30"}`}
				/>
				<span
					className={`size-1.5 rounded-full ${status === "offline" ? "bg-primary" : "bg-muted-foreground/30"}`}
				/>
			</div>
			<span className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
				{status}
			</span>
		</div>
	);
}
