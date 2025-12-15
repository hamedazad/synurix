 'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { StepForm } from './ui/StepForm'

const enterpriseProjectSchema = z.object({
  // Step 1: Company information
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  industry: z.string().min(2, 'Please specify your industry'),
  companySize: z.string().min(1, 'Please select a company size'),
  contactPerson: z.string().min(2, 'Contact person name must be at least 2 characters'),
  email: z.string().email('Please provide a valid email address'),

  // Step 2: Project overview
  projectTitle: z.string().min(3, 'Project title must be at least 3 characters'),
  problemDescription: z
    .string()
    .min(40, 'Please provide at least 40 characters describing the problem'),
  aiRequirements: z
    .array(
      z.enum(['ML', 'NLP', 'Computer Vision', 'Data Mining', 'Predictive Analytics'])
    )
    .min(1, 'Select at least one AI requirement'),
  estimatedTimeline: z.string().min(1, 'Please provide an estimated timeline'),

  // Step 3: Technical & business details
  dataAvailability: z.enum(['Yes', 'No', 'Not sure']),
  securityRequirements: z
    .string()
    .min(10, 'Please provide a short overview of security and compliance needs'),
  budgetRange: z.string().optional(),
})

type EnterpriseProjectFormData = z.infer<typeof enterpriseProjectSchema>

const steps = [
  { label: 'Company information' },
  { label: 'Project overview' },
  { label: 'Technical & business details' },
]

export default function EnterpriseProjectForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    reset,
    watch,
  } = useForm<EnterpriseProjectFormData>({
    resolver: zodResolver(enterpriseProjectSchema),
    defaultValues: {
      aiRequirements: [],
      dataAvailability: 'Not sure',
    },
  })

  const aiRequirements = watch('aiRequirements') || []

  const validateStep = async (stepIndex: number) => {
    if (stepIndex === 0) {
      return trigger(['companyName', 'industry', 'companySize', 'contactPerson', 'email'])
    }
    if (stepIndex === 1) {
      return trigger([
        'projectTitle',
        'problemDescription',
        'aiRequirements',
        'estimatedTimeline',
      ])
    }
    if (stepIndex === 2) {
      return trigger(['dataAvailability', 'securityRequirements', 'budgetRange'])
    }
    return true
  }

  const handleNext = async () => {
    const isValid = await validateStep(currentStep)
    if (!isValid) return
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const onSubmit = async (data: EnterpriseProjectFormData) => {
    const isValid = await validateStep(2)
    if (!isValid) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    setCurrentStep(0)
  }

  const requirementOptions: EnterpriseProjectFormData['aiRequirements'][number][] = [
    'ML',
    'NLP',
    'Computer Vision',
    'Data Mining',
    'Predictive Analytics',
  ]

  if (isSubmitted) {
    return (
      <div className="glass-strong rounded-2xl p-10 text-center">
        <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-3">Project submitted</h2>
        <p className="text-white/70 mb-6">
          Thank you for sharing your project with Synurix. Our team will review the information and
          contact you with next steps.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 glass rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
        >
          Submit another project
        </button>
      </div>
    )
  }

  return (
    <StepForm
      steps={steps}
      currentStep={currentStep}
      renderStep={(stepIndex) => (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {stepIndex === 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold mb-2">
                    Company name *
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    {...register('companyName')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Legal entity name"
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-red-400">{errors.companyName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-semibold mb-2">
                    Industry *
                  </label>
                  <input
                    id="industry"
                    type="text"
                    {...register('industry')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Financial services, healthcare, manufacturing, etc."
                  />
                  {errors.industry && (
                    <p className="mt-1 text-sm text-red-400">{errors.industry.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companySize" className="block text-sm font-semibold mb-2">
                    Company size *
                  </label>
                  <select
                    id="companySize"
                    {...register('companySize')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select</option>
                    <option value="1-10">1–10</option>
                    <option value="11-50">11–50</option>
                    <option value="51-200">51–200</option>
                    <option value="201-1000">201–1,000</option>
                    <option value="1000+">1,000+</option>
                  </select>
                  {errors.companySize && (
                    <p className="mt-1 text-sm text-red-400">{errors.companySize.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-semibold mb-2">
                    Contact person *
                  </label>
                  <input
                    id="contactPerson"
                    type="text"
                    {...register('contactPerson')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Full name of primary contact"
                  />
                  {errors.contactPerson && (
                    <p className="mt-1 text-sm text-red-400">{errors.contactPerson.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email address *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="name@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>
            </>
          )}

          {stepIndex === 1 && (
            <>
              <div>
                <label htmlFor="projectTitle" className="block text-sm font-semibold mb-2">
                  Project title *
                </label>
                <input
                  id="projectTitle"
                  type="text"
                  {...register('projectTitle')}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Short working title for the initiative"
                />
                {errors.projectTitle && (
                  <p className="mt-1 text-sm text-red-400">{errors.projectTitle.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="problemDescription" className="block text-sm font-semibold mb-2">
                  Problem description *
                </label>
                <textarea
                  id="problemDescription"
                  {...register('problemDescription')}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Describe the business problem, context, and what a successful outcome looks like."
                />
                {errors.problemDescription && (
                  <p className="mt-1 text-sm text-red-400">{errors.problemDescription.message}</p>
                )}
              </div>

              <div>
                <span className="block text-sm font-semibold mb-2">
                  AI requirements (select all that apply) *
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {requirementOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80 cursor-pointer hover:bg-white/10"
                    >
                      <input
                        type="checkbox"
                        value={option}
                        checked={aiRequirements.includes(option)}
                        {...register('aiRequirements')}
                        className="w-4 h-4 text-blue-500 border-white/20 bg-white/5 focus:ring-2 focus:ring-blue-500"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                {errors.aiRequirements && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.aiRequirements.message as string}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="estimatedTimeline" className="block text-sm font-semibold mb-2">
                  Estimated timeline *
                </label>
                <input
                  id="estimatedTimeline"
                  type="text"
                  {...register('estimatedTimeline')}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="For example: pilot in Q3, production in Q4"
                />
                {errors.estimatedTimeline && (
                  <p className="mt-1 text-sm text-red-400">{errors.estimatedTimeline.message}</p>
                )}
              </div>
            </>
          )}

          {stepIndex === 2 && (
            <>
              <div>
                <span className="block text-sm font-semibold mb-2">Data availability *</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {['Yes', 'No', 'Not sure'].map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80 cursor-pointer hover:bg-white/10"
                    >
                      <input
                        type="radio"
                        value={option}
                        {...register('dataAvailability')}
                        className="w-4 h-4 text-blue-500 border-white/20 bg-white/5 focus:ring-2 focus:ring-blue-500"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                {errors.dataAvailability && (
                  <p className="mt-1 text-sm text-red-400">{errors.dataAvailability.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="securityRequirements" className="block text-sm font-semibold mb-2">
                  Security & compliance requirements *
                </label>
                <textarea
                  id="securityRequirements"
                  {...register('securityRequirements')}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="For example: data residency constraints, regulatory frameworks (GDPR, HIPAA, PCI-DSS), internal security standards, or specific controls."
                />
                {errors.securityRequirements && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.securityRequirements.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="budgetRange" className="block text-sm font-semibold mb-2">
                  Budget range (optional)
                </label>
                <input
                  id="budgetRange"
                  type="text"
                  {...register('budgetRange')}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Indicative range, if available"
                />
                {errors.budgetRange && (
                  <p className="mt-1 text-sm text-red-400">{errors.budgetRange.message}</p>
                )}
              </div>
            </>
          )}

          <div className="pt-4 flex flex-col sm:flex-row justify-between gap-3">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 0}
              className="px-6 py-3 rounded-lg border border-white/15 text-sm font-medium text-white/80 hover:bg-white/5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Back
            </button>

            {stepIndex < steps.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-sm"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting</span>
                  </>
                ) : (
                  <span>Submit project</span>
                )}
              </button>
            )}
          </div>
        </form>
      )}
    />
  )
}


