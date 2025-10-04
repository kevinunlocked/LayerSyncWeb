import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'LayerSync AI - AI-Powered Growth Systems for Business',
  description: 'Transform your business with AI-powered growth systems. We help law firms, solar companies, and financial professionals automate operations, close more deals, and scale efficiently with custom AI solutions.',
  keywords: 'AI automation, business growth, lead generation, law firms, solar companies, financial services, AI systems, business scaling',
  authors: [{ name: 'LayerSync AI' }],
  creator: 'LayerSync AI',
  publisher: 'LayerSync AI',
  robots: 'index, follow',
  openGraph: {
    title: 'LayerSync AI - AI-Powered Growth Systems',
    description: 'Transform your business with AI-powered growth systems. Automate operations, close more deals, and scale efficiently.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LayerSync AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LayerSync AI - AI-Powered Growth Systems',
    description: 'Transform your business with AI-powered growth systems. Automate operations, close more deals, and scale efficiently.',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.ico',
    apple: '/LayerSyncAI_icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
