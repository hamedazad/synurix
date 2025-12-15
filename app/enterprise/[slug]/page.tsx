'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, TrendingUp, FileText } from 'lucide-react'
import { solutions, generateSlug } from '../solutions-data'

export default function SolutionDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const solution = solutions.find((s) => generateSlug(s.title) === slug)

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Solution Not Found</h1>
          <Link
            href="/enterprise"
            className="text-blue-400 hover:text-blue-300"
          >
            Return to Enterprise Solutions
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/enterprise"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Enterprise Solutions</span>
          </Link>

          {/* Main solution header and tags – matches modal content */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8 mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {solution.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-6">
              {solution.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {solution.industries.map((industry, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-purple-500/20 rounded-full text-purple-300 border border-purple-500/30"
                >
                  {industry}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {solution.coreTechniques.map((technique, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm glass rounded-full text-blue-300 border border-blue-500/30"
                >
                  {technique}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed sections – mirrors SolutionDetailModal */}
          <div className="space-y-6">
            <div className="glass-strong rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <span>Business Benefits</span>
              </h2>
              <ul className="space-y-3">
                {solution.businessBenefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 text-white/80"
                  >
                    <span className="text-green-400 mt-1 flex-shrink-0">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-strong rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                <FileText className="w-6 h-6 text-cyan-400" />
                <span>Technical Explanation</span>
              </h2>
              <div className="glass rounded-lg p-6">
                <p className="text-white/80 leading-relaxed text-lg">
                  {solution.technicalExplanation}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

