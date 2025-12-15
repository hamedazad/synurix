import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cooperate With Us | Synurix',
  description: 'Join Synurix in building the future of AI. Apply for AI Engineer, Data Scientist, ML Engineer, and Research positions.',
}

export default function CooperateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


