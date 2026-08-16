import { ProjectHero } from "@/components/portfolio/project-hero";
import { portfolioProjects } from "@/data/portfolio";

export default function PortfolioOverviewPage() {
	return (
		<main className="mx-auto w-full max-w-6xl px-6 pt-24 sm:pt-28 pb-12 sm:pb-16 space-y-16 sm:space-y-24">
			<section className="space-y-4 max-w-2xl">
				<span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold tracking-wide uppercase">
					Portfolio
				</span>
				<h1 className="font-heading text-4xl sm:text-5xl font-semibold tracking-tight">
					The technical work, in depth
				</h1>
				<p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
					A closer look at the projects behind my resume — from CAD and additive manufacturing to
					XR software and full-stack builds. Pick a project below to see the process, the diagrams,
					and the details that don't fit on a one-page resume.
				</p>
			</section>

			<div className="space-y-16 sm:space-y-24">
				{portfolioProjects.map((project, i) => (
					<ProjectHero
						key={project.slug}
						project={project}
						reverse={i % 2 === 1}
						href={`/portfolio/${project.slug}`}
					/>
				))}
			</div>
		</main>
	);
}
