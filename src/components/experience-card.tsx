import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ExperienceCardProps {
  org: string;
  href?: string;
  role: string;
  type: "work" | "founder" | "club";
  typeLabel: string;
  location: string;
  logoUrl?: string;
  start: string;
  end?: string | null;
}

const typeStyles = {
  work: {
    border: "border-l-blue-400",
    badge: "bg-blue-100 text-blue-700",
  },
  founder: {
    border: "border-l-violet-400",
    badge: "bg-violet-100 text-violet-700",
  },
  club: {
    border: "border-l-emerald-400",
    badge: "bg-emerald-100 text-emerald-700",
  },
};

export function ExperienceCard({
  org,
  href,
  role,
  type,
  typeLabel,
  location,
  logoUrl,
  start,
  end,
  description,
  children,
}: ExperienceCardProps & { description?: string; children?: React.ReactNode }) {
  const styles = typeStyles[type];
  const period = `${start} – ${end ?? "Present"}`;

  const content = (
    <div
      className={cn(
        "h-full rounded-lg border bg-card shadow-sm flex gap-4 p-4 border-l-4 transition-shadow hover:shadow-md",
        styles.border
      )}
    >
      <div className="flex-none pt-0.5">
        <Avatar className="size-11 border bg-white">
          <AvatarImage src={logoUrl} alt={org} className="object-contain" />
          <AvatarFallback className="text-xs font-semibold text-muted-foreground">
            {org[0]}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow min-w-0 flex flex-col">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-sm leading-tight">{org}</h3>
              <span
                className={cn(
                  "inline-block rounded-full px-2 py-0.5 text-[10px] font-medium leading-none",
                  styles.badge
                )}
              >
                {typeLabel}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">{role}</p>
            <p className="text-[11px] text-muted-foreground/70 mt-0.5">{location}</p>
          </div>
          <span className="text-xs text-muted-foreground tabular-nums shrink-0">
            {period}
          </span>
        </div>
        {description && (
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
