import type { Metadata } from "next";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
	title: `Portfolio — ${DATA.name}`,
	description: "In-depth technical project work by " + DATA.name,
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
