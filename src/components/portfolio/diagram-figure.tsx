import Image from "next/image";
import { cn } from "@/lib/utils";

interface DiagramFigureProps {
	src: string;
	alt: string;
	caption: string;
	placement?: "inline" | "full-bleed";
}

export function DiagramFigure({ src, alt, caption, placement = "inline" }: DiagramFigureProps) {
	return (
		<figure
			className={cn(
				"overflow-hidden rounded-2xl border bg-card shadow-sm",
				placement === "full-bleed" ? "w-full" : "max-w-2xl mx-auto"
			)}
		>
			<Image
				src={src}
				alt={alt}
				width={1000}
				height={600}
				className="w-full h-auto object-cover"
			/>
			<figcaption className="p-3 text-xs sm:text-sm text-muted-foreground text-center">
				{caption}
			</figcaption>
		</figure>
	);
}
