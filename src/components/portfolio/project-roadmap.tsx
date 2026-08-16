"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { RoadmapStage } from "@/data/portfolio";

interface ProjectRoadmapProps {
	stages: readonly RoadmapStage[];
}

// Anchor positions (percent) for the 5 tiles along the desktop zigzag path.
const DESKTOP_ANCHORS: { x: number; y: number }[] = [
	{ x: 6, y: 70 },
	{ x: 27, y: 20 },
	{ x: 50, y: 70 },
	{ x: 73, y: 20 },
	{ x: 94, y: 70 },
];

export function ProjectRoadmap({ stages }: ProjectRoadmapProps) {
	const [active, setActive] = useState(0);

	return (
		<div className="space-y-8">
			{/* Desktop zigzag roadmap */}
			<div className="relative hidden md:block h-56">
				<svg
					viewBox="0 0 1000 100"
					preserveAspectRatio="none"
					className="absolute inset-0 h-full w-full"
					aria-hidden="true"
				>
					<path
						d={`M ${DESKTOP_ANCHORS.map((p) => `${p.x * 10},${p.y}`).join(" L ")}`}
						fill="none"
						stroke="hsl(var(--primary))"
						strokeWidth="3"
						strokeLinecap="round"
						strokeDasharray="2 14"
						opacity="0.55"
					/>
				</svg>
				{stages.map((stage, i) => {
					const pos = DESKTOP_ANCHORS[i];
					const isActive = active === i;
					return (
						<button
							key={stage.id}
							type="button"
							aria-current={isActive}
							onClick={() => setActive(i)}
							className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group"
							style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
						>
							<span
								className={cn(
									"flex items-center justify-center size-12 rounded-full border-2 font-semibold text-sm shadow-sm transition-all motion-reduce:transition-none",
									isActive
										? "bg-primary text-primary-foreground border-primary scale-110"
										: "bg-card text-foreground border-border group-hover:border-primary/60"
								)}
							>
								{i + 1}
							</span>
							<span
								className={cn(
									"max-w-28 text-center text-xs font-medium leading-snug transition-colors motion-reduce:transition-none",
									isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
								)}
							>
								{stage.title}
							</span>
						</button>
					);
				})}
			</div>

			{/* Mobile vertical roadmap */}
			<div className="md:hidden relative pl-8">
				<div
					className="absolute left-[15px] top-2 bottom-2 border-l-2 border-dashed border-primary/40"
					aria-hidden="true"
				/>
				<div className="space-y-3">
					{stages.map((stage, i) => {
						const isActive = active === i;
						return (
							<button
								key={stage.id}
								type="button"
								aria-current={isActive}
								onClick={() => setActive(i)}
								className="relative flex items-center gap-3 w-full text-left"
							>
								<span
									className={cn(
										"absolute -left-8 flex items-center justify-center size-8 rounded-full border-2 font-semibold text-xs shrink-0 transition-all motion-reduce:transition-none",
										isActive
											? "bg-primary text-primary-foreground border-primary"
											: "bg-card text-foreground border-border"
									)}
								>
									{i + 1}
								</span>
								<span
									className={cn(
										"text-sm font-medium py-1.5",
										isActive ? "text-primary" : "text-muted-foreground"
									)}
								>
									{stage.title}
								</span>
							</button>
						);
					})}
				</div>
			</div>

			{/* Active stage description panel */}
			<div className="rounded-2xl border bg-card p-5 sm:p-6 shadow-sm">
				<h3 className="text-lg font-semibold mb-2">
					{active + 1}. {stages[active].title}
				</h3>
				<p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
					{stages[active].summary}
				</p>
			</div>
		</div>
	);
}
