import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { DATA } from '@/data/resume'
import { cn } from '@/lib/utils'
import './globals.css'
import { Suspense } from 'react'

const inter = Inter({
	subsets: ['latin'],
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
					'min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6',
					inter.className,
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="light">
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
