import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ShinyButtonProps = HTMLAttributes<HTMLSpanElement>;

/** Presentational shiny pill — wrap in a Link/anchor for navigation, it renders a <span>. */
export function ShinyButton({ className, children, ...props }: ShinyButtonProps) {
	return (
		<span
			className={cn(
				"relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-transform active:scale-[0.98]",
				className,
			)}
			{...props}
		>
			<span className="relative z-10 inline-flex items-center gap-2">{children}</span>
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine"
			/>
		</span>
	);
}
