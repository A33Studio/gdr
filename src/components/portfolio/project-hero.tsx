import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/data/portfolio";

interface ProjectHeroProps {
	project: PortfolioProject;
	reverse?: boolean;
	/** Link through to the project's detail page. Omit on the detail page itself. */
	href?: string;
}

export function ProjectHero({ project, reverse = false, href }: ProjectHeroProps) {
	return (
		<div
			className={cn(
				"flex flex-col gap-6 items-center",
				reverse ? "lg:flex-row-reverse" : "lg:flex-row"
			)}
		>
			<div className="w-full lg:w-1/2">
				<div className="aspect-[4/3] rounded-3xl border bg-card overflow-hidden shadow-sm flex items-center justify-center">
					{project.heroImage ? (
						<Image
							src={project.heroImage}
							alt={project.title}
							width={800}
							height={600}
							className="w-full h-full object-cover"
						/>
					) : (
						<span className="font-heading text-2xl text-primary/50">{project.title}</span>
					)}
				</div>
			</div>
			<div className="w-full lg:w-1/2 space-y-4">
				<div className="flex flex-wrap gap-1.5">
					{project.tags.map((tag) => (
						<Badge key={tag} variant="secondary" className="text-xs">
							{tag}
						</Badge>
					))}
				</div>
				<h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight">
					{project.title}
				</h2>
				<p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
					{project.tagline}
				</p>
				<p className="text-sm text-muted-foreground/80">{project.dates}</p>
				{href && (
					<Button asChild className="gap-2 mt-2">
						<Link href={href}>
							Explore the build
							<ArrowRightIcon className="size-4" />
						</Link>
					</Button>
				)}
			</div>
		</div>
	);
}
