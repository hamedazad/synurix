import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Synurix - Engineering Intelligence Through Connection',
  description: 'Synurix develops AI-powered applications and enterprise systems using neural networks, machine learning, and data-driven intelligence.',
  keywords: 'AI, artificial intelligence, neural networks, machine learning, enterprise AI, fintech, banking, healthcare',
  authors: [{ name: 'Synurix' }],
  openGraph: {
    title: 'Synurix - Engineering Intelligence Through Connection',
    description: 'AI technology company focused on developing intelligent applications and enterprise systems',
    type: 'website',
    url: 'https://synurix.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
