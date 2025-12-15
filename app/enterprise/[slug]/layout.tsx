import type { Metadata } from 'next'
import { solutions, generateSlug } from '../solutions-data'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const solution = solutions.find((s) => generateSlug(s.title) === slug)

  if (!solution) {
    return {
      title: 'Solution Not Found | Synurix',
    }
  }

  return {
    title: `${solution.title} | Synurix Enterprise Solutions`,
    description: solution.summary,
  }
}

export default function SolutionDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

