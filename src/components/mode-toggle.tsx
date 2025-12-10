import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<Tabs
			value={theme}
			onValueChange={(value) => setTheme(value as "light" | "dark" | "system")}
		>
			<TabsList aria-label="Theme selector">
				<TabsTrigger
					value="light"
					aria-label="Light mode"
					className="size-7 p-0"
				>
					<Sun className="size-4" aria-hidden="true" />
					<span className="sr-only">Light mode</span>
				</TabsTrigger>
				<TabsTrigger
					value="system"
					aria-label="System theme"
					className="size-7 p-0"
				>
					<Monitor className="size-4" aria-hidden="true" />
					<span className="sr-only">System theme</span>
				</TabsTrigger>
				<TabsTrigger value="dark" aria-label="Dark mode" className="size-7 p-0">
					<Moon className="size-4" aria-hidden="true" />
					<span className="sr-only">Dark mode</span>
				</TabsTrigger>
			</TabsList>
		</Tabs>
	);
}
