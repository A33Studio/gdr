"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface PortfolioTocProps {
	items: readonly { slug: string; title: string }[];
}

export function PortfolioToc({ items }: PortfolioTocProps) {
	const [active, setActive] = useState(items[0]?.slug);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActive(entry.target.id);
					}
				}
			},
			{ rootMargin: "-15% 0px -70% 0px", threshold: 0 }
		);

		for (const item of items) {
			const el = document.getElementById(item.slug);
			if (el) observer.observe(el);
		}

		return () => observer.disconnect();
	}, [items]);

	return (
		<nav
			aria-label="Projects table of contents"
			className="hidden lg:block sticky top-28 self-start w-44 shrink-0"
		>
			<span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground/70 mb-3">
				Jump to
			</span>
			<ul className="space-y-1 border-l-2 border-border">
				{items.map((item) => (
					<li key={item.slug}>
						<a
							href={`#${item.slug}`}
							className={cn(
								"block -ml-0.5 pl-4 py-1.5 text-sm border-l-2 transition-colors",
								active === item.slug
									? "border-primary text-primary font-medium"
									: "border-transparent text-muted-foreground hover:text-foreground"
							)}
						>
							{item.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
