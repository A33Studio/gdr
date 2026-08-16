import { PlayCircleIcon } from "lucide-react";
import type { SimulationAsset } from "@/data/portfolio";

interface SimulationEmbedProps {
	simulation: SimulationAsset;
}

// Video-first simulation embed. When `src` is null, renders a labeled
// placeholder instead of a broken <video> tag — swap in a real exported
// clip by setting `src`/`poster` in the project's portfolio.ts entry.
export function SimulationEmbed({ simulation }: SimulationEmbedProps) {
	if (!simulation.src) {
		return (
			<figure className="overflow-hidden rounded-2xl border bg-card shadow-sm">
				<div className="aspect-video flex flex-col items-center justify-center gap-2 bg-muted/60 text-muted-foreground">
					<PlayCircleIcon className="size-10" />
					<span className="text-sm font-medium">Simulation video coming soon</span>
				</div>
				<figcaption className="p-3 text-xs sm:text-sm text-muted-foreground text-center">
					{simulation.caption}
				</figcaption>
			</figure>
		);
	}

	return (
		<figure className="overflow-hidden rounded-2xl border bg-card shadow-sm">
			<video
				src={simulation.src}
				poster={simulation.poster}
				controls
				loop
				muted
				playsInline
				className="w-full h-auto"
			/>
			<figcaption className="p-3 text-xs sm:text-sm text-muted-foreground text-center">
				{simulation.caption}
			</figcaption>
		</figure>
	);
}
