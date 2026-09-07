import type {Metadata} from 'next';
import {SiteHeader,SiteFooter} from '@/components/site-shell';
import {ThemeProvider} from '@/components/theme-provider';
import {SITE} from '@/data/site';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL('https://gabriel-duarte-portfolio.degstn.chatgpt.site'),title:SITE.metadata.title,description:SITE.metadata.description,openGraph:{title:SITE.metadata.title,description:SITE.metadata.description,type:'website',locale:'en_US'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html className="scrollbar-none" lang="en" data-scroll-behavior="smooth" suppressHydrationWarning><head><link rel="preload" href="/fonts/bricolage-grotesque.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/></head><body className="scrollbar-none"><ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem disableTransitionOnChange><a className="skip" href="#main">{SITE.navigation.skip}</a><SiteHeader/>{children}<SiteFooter/></ThemeProvider></body></html>}
