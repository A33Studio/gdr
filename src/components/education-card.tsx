import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";

interface EducationCardProps {
	logoUrl: string;
	altText: string;
	school: string;
	degree: string;
	period: string;
	description?: string;
}

export function EducationCard({
	logoUrl,
	altText,
	school,
	degree,
	period,
	description,
}: EducationCardProps) {
	return (
		<div className="rounded-lg border bg-card shadow-sm p-4 sm:p-5 h-full flex gap-4">
			<Avatar className="size-12 border bg-white shrink-0">
				<AvatarImage src={logoUrl} alt={altText} className="object-contain" />
				<AvatarFallback className="text-xs font-semibold text-muted-foreground">
					{altText[0]}
				</AvatarFallback>
			</Avatar>
			<div className="min-w-0 flex-1 space-y-1">
				<div className="flex items-start justify-between gap-3 flex-wrap">
					<h3 className="font-semibold text-sm sm:text-base leading-tight">{school}</h3>
					<span className="text-xs sm:text-sm text-muted-foreground tabular-nums shrink-0">
						{period}
					</span>
				</div>
				<p className="text-xs sm:text-sm text-muted-foreground">{degree}</p>
				{description && (
					<p className="text-xs sm:text-sm text-muted-foreground/90 leading-relaxed pt-1">
						{description}
					</p>
				)}
			</div>
		</div>
	);
}
