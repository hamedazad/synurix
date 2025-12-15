 'use client'

import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Step = {
  label: string
  description?: string
}

type StepFormProps = {
  steps: Step[]
  currentStep: number
  renderStep: (index: number) => ReactNode
}

export function StepForm({ steps, currentStep, renderStep }: StepFormProps) {
  return (
    <div className="glass-strong rounded-2xl p-6 md:p-8">
      {/* Step indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between gap-4">
          {steps.map((step, index) => {
            const isActive = index === currentStep
            const isCompleted = index < currentStep

            return (
              <div key={step.label} className="flex-1 flex items-center">
                <div className="flex items-center">
                  <motion.div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border text-xs font-semibold ${
                      isActive
                        ? 'bg-blue-500 text-white border-blue-400 shadow-lg shadow-blue-500/40'
                        : isCompleted
                        ? 'bg-green-500/20 text-green-300 border-green-400/60'
                        : 'bg-white/5 text-white/60 border-white/20'
                    }`}
                    initial={false}
                    animate={{
                      scale: isActive ? 1.05 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  >
                    {index + 1}
                  </motion.div>
                  <div className="ml-3">
                    <div className="text-xs uppercase tracking-wide text-white/60">
                      Step {index + 1}
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        isActive ? 'text-white' : 'text-white/60'
                      }`}
                    >
                      {step.label}
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex-1 h-px mx-3 bg-gradient-to-r from-white/10 via-white/20 to-white/10" />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Animated step content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          {renderStep(currentStep)}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}


