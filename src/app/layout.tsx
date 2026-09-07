import type { Metadata } from 'next';
import { SiteHeader, SiteFooter } from '@/components/site-shell';
import { DATA } from '@/data/resume';
import './globals.css';
import { SiteMotion } from '@/components/site-motion';
export const metadata: Metadata = { metadataBase: new URL('https://gabriel-duarte-portfolio.degstn.chatgpt.site'), title: { default: 'Gabriel Duarte Rengifo — Engineering & Design', template: '%s — Gabriel Duarte Rengifo' }, description: 'Aeronautical and Astronautical Engineering at Purdue. Explore Gabriel’s work in thrust vector control, robotics, additive manufacturing, and XR product design.', openGraph: { title: 'Gabriel Duarte Rengifo — Engineering & Design', description: DATA.description, type: 'website', locale: 'en_US' } };
export default function RootLayout({ children }: {
    children: React.ReactNode;
}) { return <html lang="en" data-scroll-behavior="smooth"><body><a className="skip" href="#main">Skip to content</a><SiteHeader />{children}<SiteFooter /><SiteMotion /></body></html>; }
