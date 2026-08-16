"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

interface DotPatternProps {
	width?: number;
	height?: number;
	cx?: number;
	cy?: number;
	cr?: number;
	className?: string;
}

export function DotPattern({
	width = 22,
	height = 22,
	cx = 1.5,
	cy = 1.5,
	cr = 1.5,
	className,
}: DotPatternProps) {
	const id = useId();
	return (
		<svg
			aria-hidden="true"
			className={cn(
				"pointer-events-none absolute inset-0 h-full w-full fill-foreground/[0.14]",
				className,
			)}
		>
			<defs>
				<pattern
					id={id}
					width={width}
					height={height}
					patternUnits="userSpaceOnUse"
					patternContentUnits="userSpaceOnUse"
					x={0}
					y={0}
				>
					<circle cx={cx} cy={cy} r={cr} />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
		</svg>
	);
}
