import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise AI Solutions | Synurix',
  description: 'Advanced AI systems for enterprise-scale applications. Fraud detection, risk management, computer vision, and NLP solutions.',
}

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}



