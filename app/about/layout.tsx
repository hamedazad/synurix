import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Synurix | Engineering Intelligence Through Connection',
  description: 'Learn about Synurix mission, vision, and leadership. Building reliable AI systems inspired by neural intelligence.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

