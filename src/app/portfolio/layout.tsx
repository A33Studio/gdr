import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { Fredoka, Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";

const fredoka = Fredoka({
	subsets: ["latin"],
	weight: ["500", "600", "700"],
	variable: "--font-fredoka",
});

const quicksand = Quicksand({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	variable: "--font-quicksand",
});

export const metadata: Metadata = {
	title: `Portfolio — ${DATA.name}`,
	description: "In-depth technical project work by " + DATA.name,
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
	return (
		<div
			data-theme="portfolio"
			className={cn(
				"min-h-screen bg-background text-foreground",
				fredoka.variable,
				quicksand.variable,
				quicksand.className
			)}
		>
			<header className="mx-auto w-full max-w-6xl px-6 pt-8">
				<Link
					href="/"
					className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
				>
					<ArrowLeftIcon className="size-4" />
					Resume
				</Link>
			</header>
			{children}
		</div>
	);
}
