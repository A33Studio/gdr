import { ExperienceCard } from '@/components/experience-card'
import { EducationCard } from '@/components/education-card'
import { ProjectCard } from '@/components/project-card'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'
import { DATA } from '@/data/resume'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar'
import { Badge } from '@/components/badge'
import { BlurFade } from '@/components/blur-fade'
import BlurFadeText from '@/components/blur-fade-text'
import { Button } from '@/components/button'
import { Icons } from '@/components/icons'
import { BorderBeam } from '@/components/magicui/border-beam'
import { DotPattern } from '@/components/magicui/dot-pattern'
import { ShinyButton } from '@/components/magicui/shiny-button'
import { ArrowRightIcon, FileTextIcon } from 'lucide-react'
import Link from 'next/link'
import Markdown from 'react-markdown'

const BLUR_FADE_DELAY = 0.04

export default function Page() {
	return (
		<main className="mx-auto w-full max-w-2xl lg:max-w-5xl xl:max-w-6xl flex flex-col min-h-[100dvh] space-y-12 pt-24 sm:pt-28 pb-12 sm:pb-24 px-6">

			{/* ── Hero ── */}
			<section id="hero" className="relative">
				<DotPattern className="-z-10 [mask-image:radial-gradient(480px_circle_at_center,white,transparent)]" />
				<div className="w-full space-y-8">
					<div className="gap-6 flex flex-col sm:flex-row sm:justify-between sm:items-start">
						<div className="flex-col flex flex-1 space-y-1.5">
							<BlurFadeText
								delay={BLUR_FADE_DELAY}
								className="font-heading text-3xl font-semibold tracking-tight sm:text-5xl xl:text-6xl/none"
								yOffset={8}
								text={` ${DATA.name} `}
							/>
							<BlurFadeText
								className="max-w-[600px] md:text-xl text-muted-foreground"
								delay={BLUR_FADE_DELAY}
								text={DATA.description}
							/>
							<BlurFade delay={BLUR_FADE_DELAY * 2}>
								<div className="flex justify-start mt-2 gap-1.5 flex-wrap">
									{['Purdue AAE', 'Private Pilot', 'Co-Founder, PlayAR'].map((chip) => (
										<Badge key={chip} variant="outline" className="text-xs font-normal text-muted-foreground">
											{chip}
										</Badge>
									))}
								</div>
							</BlurFade>
							<div className="flex justify-start mt-3 gap-2 flex-wrap">
								<a href={`mailto:${DATA.contact.email}`} tabIndex={-1} aria-label="Contact Me">
									<Button variant="ghost" size="icon" className="p-1 text-muted-foreground hover:text-primary">
										<Icons.email className="size-5" />
									</Button>
								</a>
								<a href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-label="LinkedIn">
									<Button variant="ghost" size="icon" className="p-1 text-muted-foreground hover:text-primary">
										<Icons.linkedin className="size-5" />
									</Button>
								</a>
								<a href={DATA.resumeUrl} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-label="View Resume">
									<Button variant="outline" size="sm" className="gap-1.5 text-xs border-primary/40 text-primary hover:bg-primary hover:text-white transition-colors">
										<FileTextIcon className="size-3.5" />
										Resume
									</Button>
								</a>
							</div>
						</div>
						<BlurFade delay={BLUR_FADE_DELAY}>
							<div className="relative rounded-full">
								<Avatar className="size-28 sm:size-36 lg:size-44 border-2 border-border shadow-sm">
									<AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
									<AvatarFallback>{DATA.initials}</AvatarFallback>
								</Avatar>
								<BorderBeam size={70} duration={9} />
							</div>
						</BlurFade>
					</div>
				</div>
			</section>

			{/* ── Portfolio CTA ── */}
			<section id="portfolio-cta">
				<BlurFade delay={BLUR_FADE_DELAY * 3}>
					<div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-primary/30 bg-card shadow-sm p-8 text-center space-y-4">
						<BorderBeam size={140} duration={11} />
						<div className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold tracking-wide uppercase">
							Portfolio
						</div>
						<h2 className="font-heading text-2xl font-semibold tracking-tight">
							See my work in depth
						</h2>
						<p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
							An in-depth look at my projects, CAD designs, XR prototypes, and technical work.
						</p>
						<Link href="/portfolio" className="inline-block mt-2">
							<ShinyButton>
								View Full Portfolio
								<ArrowRightIcon className="size-4" />
							</ShinyButton>
						</Link>
					</div>
				</BlurFade>
			</section>

			{/* ── About ── */}
			<section id="about">
				<BlurFade delay={BLUR_FADE_DELAY * 4}>
					<h2 className="font-heading text-xl font-semibold mb-3">About</h2>
				</BlurFade>
				<BlurFade delay={BLUR_FADE_DELAY * 5}>
					<div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm max-w-3xl">
						<Markdown
							components={{
								p: ({ children }) => (
									<p className="prose max-w-full text-pretty font-sans text-sm sm:text-base text-muted-foreground dark:prose-invert leading-relaxed">
										{children}
									</p>
								),
								a: ({ href, children }) => (
									<a
										href={href}
										className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
										target="_blank"
										rel="noopener noreferrer"
									>
										{children}
									</a>
								),
							}}
						>
							{DATA.summary}
						</Markdown>
					</div>
				</BlurFade>
			</section>

			{/* ── Education ── */}
			<section id="education">
				<BlurFade delay={BLUR_FADE_DELAY * 6}>
					<h2 className="font-heading text-xl font-semibold mb-3">Education</h2>
				</BlurFade>
				<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
					{DATA.education.map((edu, id) => (
						<BlurFade key={edu.school} delay={BLUR_FADE_DELAY * 7 + id * 0.05}>
							<EducationCard
								logoUrl={edu.logoUrl}
								altText={edu.school}
								school={edu.school}
								degree={edu.degree}
								period={`${edu.start} – ${edu.end}`}
								description={edu.description}
							/>
						</BlurFade>
					))}
				</div>
			</section>

			{/* ── Relevant Coursework ── */}
			<section id="coursework">
				<BlurFade delay={BLUR_FADE_DELAY * 8}>
					<h2 className="font-heading text-xl font-semibold mb-3">Relevant Coursework</h2>
				</BlurFade>
				<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
					{DATA.coursework.map((course, id) => (
						<BlurFade key={course.code} delay={BLUR_FADE_DELAY * 9 + id * 0.05}>
							<div className="rounded-lg border bg-card shadow-sm p-4 space-y-2 h-full">
								<div className="flex items-center gap-2">
									<span className="rounded-full bg-primary/10 text-primary text-[10px] font-mono font-semibold px-2 py-0.5">
										{course.code}
									</span>
								</div>
								<h3 className="font-semibold text-sm leading-snug">{course.title}</h3>
								<p className="text-xs text-muted-foreground leading-relaxed">{course.description}</p>
							</div>
						</BlurFade>
					))}
				</div>
			</section>

			{/* ── Skills ── */}
			<section id="skills">
				<BlurFade delay={BLUR_FADE_DELAY * 10}>
					<h2 className="font-heading text-xl font-semibold mb-3">Skills</h2>
				</BlurFade>
				<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
					{DATA.skills.map((group, id) => (
						<BlurFade key={group.category} delay={BLUR_FADE_DELAY * 11 + id * 0.05}>
							<div className="rounded-lg border bg-card shadow-sm p-4 h-full space-y-2.5">
								<h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/80">
									{group.category}
								</h3>
								<div className="flex flex-wrap gap-2">
									{group.items.map((skill) => (
										<Badge key={skill} variant="secondary" className="text-xs">
											{skill}
										</Badge>
									))}
								</div>
							</div>
						</BlurFade>
					))}
				</div>
			</section>

			{/* ── Work Experience ── */}
			<section id="experience">
				<BlurFade delay={BLUR_FADE_DELAY * 12}>
					<div className="flex items-center justify-between mb-3">
						<h2 className="font-heading text-xl font-semibold">Work Experience</h2>
						<div className="hidden sm:flex items-center gap-3 text-[11px] text-muted-foreground">
							<span className="flex items-center gap-1">
								<span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-400" />
								Internship
							</span>
							<span className="flex items-center gap-1">
								<span className="inline-block w-2.5 h-2.5 rounded-full bg-violet-400" />
								Founded
							</span>
						</div>
					</div>
				</BlurFade>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
					{DATA.extracurriculars.filter(i => i.type !== 'club').map((item, id) => (
						<BlurFade key={item.org + item.start} delay={BLUR_FADE_DELAY * 13 + id * 0.05}>
							<ExperienceCard
								org={item.org}
								href={item.href || undefined}
								role={item.role}
								type={item.type}
								typeLabel={item.typeLabel}
								location={item.location}
								logoUrl={item.logoUrl || undefined}
								start={item.start}
								end={item.end}
								description={item.description}
							/>
						</BlurFade>
					))}
				</div>
			</section>

			{/* ── Activities & Clubs ── */}
			<section id="activities">
				<BlurFade delay={BLUR_FADE_DELAY * 14}>
					<div className="flex items-center justify-between mb-3">
						<h2 className="font-heading text-xl font-semibold">Activities & Clubs</h2>
						<div className="hidden sm:flex items-center gap-3 text-[11px] text-muted-foreground">
							<span className="flex items-center gap-1">
								<span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400" />
								Club / Org
							</span>
						</div>
					</div>
				</BlurFade>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
					{DATA.extracurriculars.filter(i => i.type === 'club').map((item, id) => (
						<BlurFade key={item.org + item.start} delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
							<ExperienceCard
								org={item.org}
								href={item.href || undefined}
								role={item.role}
								type={item.type}
								typeLabel={item.typeLabel}
								location={item.location}
								logoUrl={item.logoUrl || undefined}
								start={item.start}
								end={item.end}
								description={item.description}
							/>
						</BlurFade>
					))}
				</div>
			</section>

			{/* ── Projects ── */}
			<section id="projects">
				<BlurFade delay={BLUR_FADE_DELAY * 16}>
					<h2 className="font-heading text-xl font-semibold mb-3">Projects</h2>
				</BlurFade>
				<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
					{DATA.projects.map((project, id) => (
						<BlurFade key={project.title} delay={BLUR_FADE_DELAY * 17 + id * 0.05}>
							<ProjectCard
								title={project.title}
								href={project.href}
								description={project.description}
								dates={project.dates}
								tags={project.technologies}
								image={project.image}
								links={project.links}
							/>
						</BlurFade>
					))}
				</div>
			</section>

			<ScrollToTopButton />

			<footer className="w-full border-t pt-6 pb-8 mt-4 text-center text-xs text-muted-foreground">
				{new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })} &mdash; Built by Gabriel Duarte Rengifo using{' '}
				<a href="https://magicui.design" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
					Magic UI
				</a>
			</footer>
		</main>
	)
}
