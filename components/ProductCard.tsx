'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'

interface ProductCardProps {
  title: string
  description: string
  benefits: string[]
  technology: string
  learnMore?: string
}

export default function ProductCard({
  title,
  description,
  benefits,
  technology,
  learnMore,
}: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label={isExpanded ? 'Collapse' : 'Expand'}
        >
          <ChevronDown
            className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <p className="text-white/80 mb-6 leading-relaxed">{description}</p>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">
          Benefits
        </h4>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start space-x-2 text-white/70">
              <span className="text-blue-400 mt-1">•</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wide">
          Technology
        </h4>
        <p className="text-white/70">{technology}</p>
      </div>

      <AnimatePresence>
        {isExpanded && learnMore && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-sm font-semibold text-pink-400 mb-2 uppercase tracking-wide">
                Learn More
              </h4>
              <p className="text-white/70 leading-relaxed">{learnMore}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

