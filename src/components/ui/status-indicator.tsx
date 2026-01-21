type StatusIndicatorProps = {
	label?: string;
};

export default function StatusIndicator({
	label = "available for work",
}: StatusIndicatorProps) {
	return (
		<div className="flex items-center gap-2">
			<span className="relative flex size-2">
				<span className="pulse-dot size-2 rounded-full" />
				<span className="relative rounded-full size-2 bg-primary" />
			</span>
			<span className="label">{label}</span>
		</div>
	);
}
