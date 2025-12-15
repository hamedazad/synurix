import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Core AI Products | Synurix',
  description: 'Explore Synurix AI-powered products including Memora, AI Assistant Platform, and Intelligent Analytics Engine.',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

