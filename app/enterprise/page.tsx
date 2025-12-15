'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import EnterpriseCard from '@/components/EnterpriseCard'
import { solutions, generateSlug } from './solutions-data'

export default function EnterprisePage() {
  return (
    <Suspense fallback={null}>
      <EnterprisePageContent />
    </Suspense>
  )
}

function EnterprisePageContent() {
  const searchParams = useSearchParams()
  const slugFromQuery = searchParams.get('solution')

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Enterprise AI Solutions
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Advanced AI systems designed for enterprise-scale applications. Built for reliability, scalability, and real-world impact. Click &quot;View Technical Details&quot; on any solution to see business benefits and technical information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EnterpriseCard
                {...solution}
                slug={generateSlug(solution.title)}
                autoExpand={slugFromQuery === generateSlug(solution.title)}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="glass-strong rounded-2xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Deploy Enterprise AI?
            </h2>
            <p className="text-white/70 mb-6">
              Our solutions are designed to integrate seamlessly with your existing infrastructure and scale with your business needs. Contact us to discuss your specific requirements.
            </p>
            <a
              href="/submit-project"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Submit a Project
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
