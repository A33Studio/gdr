"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NotebookIcon, FolderKanbanIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
	{ href: "/", label: "Resume", icon: NotebookIcon },
	{ href: "/portfolio", label: "Portfolio", icon: FolderKanbanIcon },
] as const;

export function PillNav() {
	const pathname = usePathname();

	return (
		<div className="pointer-events-none fixed inset-x-0 top-4 sm:top-6 z-50 flex justify-center px-4">
			<nav className="pointer-events-auto flex items-center gap-1 rounded-full border bg-card/90 p-1 shadow-lg backdrop-blur-md">
				{TABS.map((tab) => {
					const active = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
					return (
						<Link
							key={tab.href}
							href={tab.href}
							className={cn(
								"inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors",
								active
									? "bg-primary text-primary-foreground shadow-sm"
									: "text-muted-foreground hover:text-foreground",
							)}
						>
							<tab.icon className="size-3.5" />
							{tab.label}
						</Link>
					);
				})}
			</nav>
		</div>
	);
}
