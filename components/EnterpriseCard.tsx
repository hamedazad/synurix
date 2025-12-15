'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Building2, 
  Eye, 
  FileText, 
  Shield, 
  Wrench,
  MessageSquare,
  Package,
  Users,
  Bot,
  Sparkles,
  Scale,
  TrendingUp,
  Activity,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

const iconMap: Record<string, any> = {
  'Fraud Detection': Shield,
  'Advanced Fraud Detection': Shield,
  'Risk Management': TrendingUp,
  'Risk Management & Credit Scoring': TrendingUp,
  'Transaction Analysis': Building2,
  'Transaction & Behavior Intelligence': Building2,
  'Transaction & Behavior Intelligence Platform': Building2,
  'Computer Vision': Eye,
  'Computer Vision Quality & Monitoring': Eye,
  'Computer Vision Systems': Eye,
  'NLP Document': FileText,
  'NLP Document Intelligence': FileText,
  'NLP Document Intelligence Systems': FileText,
  'Predictive Maintenance': Wrench,
  'Predictive Maintenance Intelligence': Wrench,
  'Memora': MessageSquare,
  'Memora - Conversational AI & Knowledge Management': MessageSquare,
  'Supply Chain Optimization': Package,
  'Supply Chain Optimization & Demand Forecasting': Package,
  'Customer Churn Prediction': Users,
  'Customer Churn Prediction & Retention Analytics': Users,
  'Intelligent Process Automation': Bot,
  'Intelligent Process Automation & RPA Enhancement': Bot,
  'Personalized Recommendation': Sparkles,
  'Personalized Recommendation & Next-Best-Action Engine': Sparkles,
  'Regulatory Compliance & AML': Scale,
  'Regulatory Compliance & AML Monitoring Platform': Scale,
}

interface EnterpriseCardProps {
  title: string
  summary: string
  industries: string[]
  coreTechniques: string[]
  businessBenefits: string[]
  technicalExplanation: string
  icon?: string
  slug: string
  onViewDetails?: () => void
  autoExpand?: boolean
}

export default function EnterpriseCard({
  title,
  summary,
  industries,
  coreTechniques,
  businessBenefits,
  technicalExplanation,
  icon,
  slug,
  onViewDetails,
  autoExpand = false,
}: EnterpriseCardProps) {
  const [isExpanded, setIsExpanded] = useState(autoExpand)
  const IconComponent = icon ? iconMap[icon] || iconMap[title] || Building2 : Building2

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-strong rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-blue-400/50 relative overflow-hidden group h-full flex flex-col"
    >
      {/* Subtle neural connection visual */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
      
      <div className="relative z-10 flex flex-col flex-1">
        <div className="flex items-start space-x-4 mb-4">
          <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex-shrink-0">
            <IconComponent className="w-6 h-6 text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-white/70 leading-relaxed text-sm">{summary}</p>
          </div>
        </div>

        {/* Default View - Summary Information */}
        <div className="space-y-4 flex-1">
          <div>
            <h4 className="text-xs font-semibold text-purple-400 mb-2 uppercase tracking-wide">
              Industries
            </h4>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-purple-500/20 rounded-full text-purple-300 border border-purple-500/30"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wide">
              Core AI Techniques
            </h4>
            <div className="flex flex-wrap gap-2">
              {coreTechniques.map((technique, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs glass rounded-full text-blue-300 border border-blue-500/30"
                >
                  {technique}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Button to View Details */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <button
            onClick={toggleExpand}
            className="w-full flex items-center justify-center space-x-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/btn py-2"
          >
            <Activity className="w-4 h-4" />
            <span>View Technical Details</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Expandable Details Section */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-white/10 space-y-4">
                {/* Business Benefits */}
                <div>
                  <h4 className="text-xs font-semibold text-green-400 mb-3 uppercase tracking-wide flex items-center space-x-2">
                    <TrendingUp className="w-3 h-3" />
                    <span>Business Benefits</span>
                  </h4>
                  <ul className="space-y-2">
                    {businessBenefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-white/70 text-xs"
                      >
                        <span className="text-green-400 mt-1 flex-shrink-0">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Details */}
                <div>
                  <h4 className="text-xs font-semibold text-cyan-400 mb-3 uppercase tracking-wide flex items-center space-x-2">
                    <FileText className="w-3 h-3" />
                    <span>Technical Details</span>
                  </h4>
                  <p className="text-white/60 text-xs leading-relaxed">
                    {(() => {
                      const maxLength = 300
                      if (technicalExplanation.length <= maxLength) {
                        return technicalExplanation
                      }
                      // Find the last sentence break before maxLength
                      const truncated = technicalExplanation.substring(0, maxLength)
                      const lastPeriod = truncated.lastIndexOf('.')
                      const lastSentence = lastPeriod > maxLength * 0.5 
                        ? truncated.substring(0, lastPeriod + 1)
                        : truncated + '...'
                      return lastSentence
                    })()}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
