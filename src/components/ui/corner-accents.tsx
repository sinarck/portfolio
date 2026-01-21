import { cn } from "@/lib/utils";

type CornerAccentsProps = {
	className?: string;
	size?: "sm" | "md";
};

const sizeMap = {
	sm: "size-2",
	md: "size-3",
} as const;

export default function CornerAccents({
	className,
	size = "md",
}: CornerAccentsProps) {
	const sizeClass = sizeMap[size];

	return (
		<>
			<div
				className={cn(
					"absolute -top-px -left-px border-t border-l border-primary corner-accent corner-accent-tl",
					sizeClass,
					className,
				)}
			/>
			<div
				className={cn(
					"absolute -top-px -right-px border-t border-r border-primary corner-accent corner-accent-tr",
					sizeClass,
					className,
				)}
			/>
			<div
				className={cn(
					"absolute -bottom-px -left-px border-b border-l border-primary corner-accent corner-accent-bl",
					sizeClass,
					className,
				)}
			/>
			<div
				className={cn(
					"absolute -bottom-px -right-px border-b border-r border-primary corner-accent corner-accent-br",
					sizeClass,
					className,
				)}
			/>
		</>
	);
}
