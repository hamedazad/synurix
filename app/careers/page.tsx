'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import CareerApplicationForm from '@/components/CareerApplicationForm'
import EnterpriseProjectForm from '@/components/EnterpriseProjectForm'

type CareersTab = 'careers' | 'project'

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState<CareersTab>('careers')

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Careers at Synurix
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Engage with Synurix as an individual contributor or as an enterprise partner. Select
            the path that best reflects your interest.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8"
        >
          <div className="glass rounded-xl p-1.5 inline-flex w-full md:w-auto">
            <TabButton
              isActive={activeTab === 'careers'}
              onClick={() => setActiveTab('careers')}
            >
              Careers
            </TabButton>
            <TabButton
              isActive={activeTab === 'project'}
              onClick={() => setActiveTab('project')}
            >
              Submit a Project
            </TabButton>
          </div>
        </motion.div>

        {/* Tab content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'careers' ? (
            <section aria-label="Careers application form">
              <div className="mb-6 text-sm text-white/60">
                Professional application for individual contributors interested in roles at
                Synurix.
              </div>
              <CareerApplicationForm />
            </section>
          ) : (
            <section aria-label="Enterprise project submission form">
              <div className="mb-6 text-sm text-white/60">
                Structured project submission for organizations seeking AI solutions and enterprise
                collaboration with Synurix.
              </div>
              <EnterpriseProjectForm />
            </section>
          )}
        </motion.div>
      </div>
    </div>
  )
}

function TabButton({
  isActive,
  onClick,
  children,
}: {
  isActive: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex-1 md:flex-none px-4 md:px-6 py-2 md:py-2.5 text-sm md:text-sm font-medium rounded-lg transition-colors ${
        isActive ? 'text-white' : 'text-white/60 hover:text-white'
      }`}
    >
      {isActive && (
        <motion.div
          layoutId="careersTabIndicator"
          className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-purple-500/80 rounded-lg shadow-lg shadow-blue-500/30"
          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  )
}


