import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | Synurix',
  description:
    'Explore career opportunities at Synurix and submit AI-focused enterprise projects for collaboration.',
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


