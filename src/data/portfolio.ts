// Legacy source content retained from the previous portfolio.
// The redesigned routes use case-studies.ts and the content folder.
export interface RoadmapStage {
	id: string;
	title: string;
	summary: string;
}

export interface DiagramItem {
	src: string;
	alt: string;
	caption: string;
	placement: "inline" | "full-bleed";
}

export interface SimulationAsset {
	type: "video";
	src: string | null;
	poster?: string;
	caption: string;
}

export interface PortfolioProject {
	slug: string;
	title: string;
	tagline: string;
	heroImage: string | null;
	dates: string;
	tags: readonly string[];
	links: readonly { type: string; href: string }[];
	overview: string;
	stages: readonly [RoadmapStage, RoadmapStage, RoadmapStage, RoadmapStage, RoadmapStage];
	diagrams: readonly DiagramItem[];
	simulation?: SimulationAsset;
}
