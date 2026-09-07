import type { Metadata } from "next";
import { SITE } from "@/data/site";

export const metadata: Metadata = SITE.metadata;

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
