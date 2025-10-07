import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'LayerSync AI | Scalable AI Systems for Business Growth',
  description: 'We design and deploy high-impact AI systems — from sales automation to data analytics — that help businesses scale efficiently and profitably.',
  keywords: 'AI systems, sales automation, content creation AI, operational workflow automation, data analytics, business intelligence, AI-driven sales, predictive modeling, process automation, business growth AI',
  authors: [{ name: 'LayerSync AI' }],
  creator: 'LayerSync AI',
  publisher: 'LayerSync AI',
  robots: 'index, follow',
  openGraph: {
    title: 'LayerSync AI | Scalable AI Systems for Business Growth',
    description: 'We design and deploy high-impact AI systems — from sales automation to data analytics — that help businesses scale efficiently and profitably.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LayerSync AI',
    url: 'https://layersyncai.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LayerSync AI | Scalable AI Systems for Business Growth',
    description: 'We design and deploy high-impact AI systems — from sales automation to data analytics — that help businesses scale efficiently and profitably.',
    site: '@LayerSyncAI',
    creator: '@LayerSyncAI',
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
