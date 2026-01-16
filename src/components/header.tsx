"use client";

import { Link } from "@tanstack/react-router";
import { Home, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetPopup,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
	return (
		<header className="flex h-16 items-center border-b border-border bg-background px-4">
			<Sheet>
				<SheetTrigger
					render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
				>
					<Menu />
				</SheetTrigger>
				<SheetPopup side="left" showCloseButton>
					<div className="flex flex-col gap-2 p-6">
						<SheetTitle>Navigation</SheetTitle>
					</div>
					<nav className="flex flex-1 flex-col gap-1 px-4 pb-4">
						<SheetClose
							render={
								<Link
									to="/"
									className="flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-colors hover:bg-accent"
									activeProps={{
										className:
											"flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground transition-colors hover:bg-accent",
									}}
								>
									<Home className="size-5" />
									<span className="font-medium">Home</span>
								</Link>
							}
						/>
					</nav>
				</SheetPopup>
			</Sheet>
			<Link to="/" className="ml-4 text-xl font-semibold text-foreground">
				Portfolio
			</Link>
		</header>
	);
}
