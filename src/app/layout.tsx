import type { Metadata } from 'next'
import { Fredoka, Quicksand } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { PillNav } from '@/components/pill-nav'
import { DATA } from '@/data/resume'
import { cn } from '@/lib/utils'
import './globals.css'

const fredoka = Fredoka({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	variable: '--font-fredoka',
})

const quicksand = Quicksand({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-quicksand',
})

export const metadata: Metadata = {
	metadataBase: new URL(DATA.url),
	title: 'Gabriel',
	description: DATA.description,
	openGraph: {
		title: `${DATA.name}`,
		description: DATA.description,
		url: DATA.url,
		siteName: `${DATA.name}`,
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: `${DATA.name}`,
		card: 'summary_large_image',
	},
	verification: {
		google: '',
		yandex: '',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fredoka.variable,
					quicksand.variable,
					quicksand.className,
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="light">
					<PillNav />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
