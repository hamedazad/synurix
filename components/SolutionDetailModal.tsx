'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, TrendingUp, FileText } from 'lucide-react'
import { Solution } from '@/app/enterprise/solutions-data'

interface SolutionDetailModalProps {
  solution: Solution | null
  isOpen: boolean
  onClose: () => void
}

export default function SolutionDetailModal({
  solution,
  isOpen,
  onClose,
}: SolutionDetailModalProps) {
  if (!solution) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 sm:inset-8 md:inset-12 lg:inset-16 z-50 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-h-full flex items-center justify-center p-4">
              <div className="glass-strong rounded-2xl p-6 sm:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Content */}
                <div className="pr-8">
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

                  <div className="flex flex-wrap gap-2 mb-8">
                    {solution.coreTechniques.map((technique, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm glass rounded-full text-blue-300 border border-blue-500/30"
                      >
                        {technique}
                      </span>
                    ))}
                  </div>

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
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

