import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRightIcon } from "lucide-react";
import { Badge } from "@/components/badge";
import { ProjectHero } from "@/components/portfolio/project-hero";
import { ProjectRoadmap } from "@/components/portfolio/project-roadmap";
import { DiagramFigure } from "@/components/portfolio/diagram-figure";
import { SimulationEmbed } from "@/components/portfolio/simulation-embed";
import { getPortfolioProject, portfolioProjects } from "@/data/portfolio";

export function generateStaticParams() {
	return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const project = getPortfolioProject(slug);
	return { title: project ? `${project.title} — Portfolio` : "Project not found" };
}

export default async function PortfolioProjectPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const project = getPortfolioProject(slug);
	if (!project) notFound();

	return (
		<main className="mx-auto w-full max-w-6xl px-6 pt-24 sm:pt-28 pb-12 sm:pb-16 space-y-14 sm:space-y-20">
			<ProjectHero project={project} />

			<section className="max-w-3xl space-y-4">
				<h2 className="font-heading text-2xl font-semibold">Overview</h2>
				<p className="text-base text-muted-foreground leading-relaxed">{project.overview}</p>
				{project.links.length > 0 && (
					<div className="flex flex-wrap gap-2 pt-1">
						{project.links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex"
							>
								<Badge className="gap-1.5 px-3 py-1.5 text-xs">
									{link.type}
									<ArrowUpRightIcon className="size-3" />
								</Badge>
							</Link>
						))}
					</div>
				)}
			</section>

			<section className="space-y-6">
				<h2 className="font-heading text-2xl font-semibold">The build, stage by stage</h2>
				<ProjectRoadmap stages={project.stages} />
			</section>

			{project.diagrams.length > 0 && (
				<section className="space-y-6">
					<h2 className="font-heading text-2xl font-semibold">Diagrams & photos</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{project.diagrams.map((diagram) => (
							<DiagramFigure key={diagram.src + diagram.caption} {...diagram} />
						))}
					</div>
				</section>
			)}

			{project.simulation && (
				<section className="space-y-6 max-w-3xl">
					<h2 className="font-heading text-2xl font-semibold">Simulation</h2>
					<SimulationEmbed simulation={project.simulation} />
				</section>
			)}

			<div className="pt-4">
				<Link
					href="/portfolio"
					className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
				>
					← Back to all projects
				</Link>
			</div>
		</main>
	);
}
