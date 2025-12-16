 'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { StepForm } from './ui/StepForm'
import Select from './ui/Select'

const careerSchema = z.object({
  // Step 1
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please provide a valid email address'),
  phone: z
    .string()
    .min(6, 'Please provide a valid phone number')
    .max(32, 'Phone number is too long'),
  location: z.string().min(2, 'Please provide your current location'),
  profileUrl: z
    .string()
    .url('Please provide a valid URL')
    .optional()
    .or(z.literal('').transform(() => undefined)),

  // Step 2
  roleOfInterest: z.enum([
    'AI Engineer',
    'Data Scientist',
    'ML Engineer',
    'Python Programmer',
    'Backend Engineer',
    'MLOps Engineer',
    'Data Engineer',
    'Software Engineer',
    'Full Stack Engineer',
    'DevOps Engineer',
    'Frontend Engineer',
    'AI Research Scientist',
  ]),
  yearsOfExperience: z
    .number()
    .min(0, 'Please provide a value between 0 and 40 years')
    .max(40, 'Please provide a value between 0 and 40 years'),
  keySkills: z
    .string()
    .min(10, 'Please provide a short overview of your key skills'),
  resume: z.any().optional(),

  // Step 3
  motivation: z
    .string()
    .min(50, 'Please provide at least 50 characters describing your motivation'),
  availability: z.enum(['Full-time', 'Contract', 'Remote']),
})

type CareerFormData = z.infer<typeof careerSchema>

const steps = [
  { label: 'Basic Information' },
  { label: 'Professional Background' },
  { label: 'Motivation & Submission' },
]

export default function CareerApplicationForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    trigger,
    control,
    formState: { errors },
    reset,
  } = useForm<CareerFormData>({
    resolver: zodResolver(careerSchema),
    defaultValues: {
      availability: 'Full-time',
    },
  })

  const validateStep = async (stepIndex: number) => {
    if (stepIndex === 0) {
      return trigger(['fullName', 'email', 'phone', 'location', 'profileUrl'])
    }
    if (stepIndex === 1) {
      return trigger(['roleOfInterest', 'yearsOfExperience', 'keySkills'])
    }
    if (stepIndex === 2) {
      return trigger(['motivation', 'availability'])
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

  const onSubmit = async (data: CareerFormData) => {
    const isValid = await validateStep(2)
    if (!isValid) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    setCurrentStep(0)
  }

  if (isSubmitted) {
    return (
      <div className="glass-strong rounded-2xl p-10 text-center">
        <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-3">Application received</h2>
        <p className="text-white/70 mb-6">
          Thank you for your interest in Synurix. Our team will review your profile and will reach
          out if there is a suitable opportunity.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 glass rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
        >
          Submit another application
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
                  <label htmlFor="fullName" className="block text-sm font-semibold mb-2">
                    Full name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    {...register('fullName')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="First and last name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-400">{errors.fullName.message}</p>
                  )}
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 000 000 0000"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-semibold mb-2">
                    Location *
                  </label>
                  <input
                    id="location"
                    type="text"
                    {...register('location')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="City, Country"
                  />
                  {errors.location && (
                    <p className="mt-1 text-sm text-red-400">{errors.location.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="profileUrl" className="block text-sm font-semibold mb-2">
                  LinkedIn / GitHub (optional)
                </label>
                <input
                  id="profileUrl"
                  type="url"
                  {...register('profileUrl')}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://linkedin.com/in/your-profile or https://github.com/username"
                />
                {errors.profileUrl && (
                  <p className="mt-1 text-sm text-red-400">{errors.profileUrl.message}</p>
                )}
              </div>
            </>
          )}

          {stepIndex === 1 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="roleOfInterest" className="block text-sm font-semibold mb-2">
                    Role of interest *
                  </label>
                  <Controller
                    name="roleOfInterest"
                    control={control}
                    render={({ field }) => (
                      <Select
                        id="roleOfInterest"
                        value={field.value || ''}
                        onChange={field.onChange}
                        options={[
                          { value: 'AI Engineer', label: 'AI Engineer' },
                          { value: 'Data Scientist', label: 'Data Scientist' },
                          { value: 'ML Engineer', label: 'ML Engineer' },
                          { value: 'Python Programmer', label: 'Python Programmer' },
                          { value: 'Backend Engineer', label: 'Backend Engineer' },
                          { value: 'MLOps Engineer', label: 'MLOps Engineer' },
                          { value: 'Data Engineer', label: 'Data Engineer' },
                          { value: 'Software Engineer', label: 'Software Engineer' },
                          { value: 'Full Stack Engineer', label: 'Full Stack Engineer' },
                          { value: 'DevOps Engineer', label: 'DevOps Engineer' },
                          { value: 'Frontend Engineer', label: 'Frontend Engineer' },
                          { value: 'AI Research Scientist', label: 'AI Research Scientist' },
                        ]}
                        placeholder="Select a role"
                        error={!!errors.roleOfInterest}
                      />
                    )}
                  />
                  {errors.roleOfInterest && (
                    <p className="mt-1 text-sm text-red-400">{errors.roleOfInterest.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="yearsOfExperience" className="block text-sm font-semibold mb-2">
                    Years of experience *
                  </label>
                  <input
                    id="yearsOfExperience"
                    type="number"
                    min={0}
                    max={40}
                    {...register('yearsOfExperience', { valueAsNumber: true })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g. 3"
                  />
                  {errors.yearsOfExperience && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.yearsOfExperience.message as string}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="keySkills" className="block text-sm font-semibold mb-2">
                  Key skills (comma-separated or short paragraph) *
                </label>
                <textarea
                  id="keySkills"
                  {...register('keySkills')}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Example: Python, PyTorch, TensorFlow, distributed training, MLOps, large language models..."
                />
                {errors.keySkills && (
                  <p className="mt-1 text-sm text-red-400">{errors.keySkills.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-semibold mb-2">
                  Resume (PDF)
                </label>
                <input
                  id="resume"
                  type="file"
                  accept="application/pdf"
                  {...register('resume')}
                  className="block w-full text-sm text-white/80 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500/90 file:text-white hover:file:bg-blue-500 cursor-pointer"
                />
                <p className="mt-2 text-xs text-white/50">
                  PDF only. Frontend only submission – documents are not stored or transmitted.
                </p>
              </div>
            </>
          )}

          {stepIndex === 2 && (
            <>
              <div>
                <label htmlFor="motivation" className="block text-sm font-semibold mb-2">
                  Short motivation statement *
                </label>
                <textarea
                  id="motivation"
                  {...register('motivation')}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Briefly describe why you would like to work with Synurix, the type of problems you are most interested in, and how you prefer to contribute."
                />
                {errors.motivation && (
                  <p className="mt-1 text-sm text-red-400">{errors.motivation.message}</p>
                )}
              </div>

              <div>
                <span className="block text-sm font-semibold mb-2">Availability *</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {['Full-time', 'Contract', 'Remote'].map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80 cursor-pointer hover:bg-white/10"
                    >
                      <input
                        type="radio"
                        value={option}
                        {...register('availability')}
                        className="w-4 h-4 text-blue-500 border-white/20 bg-white/5 focus:ring-2 focus:ring-blue-500"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                {errors.availability && (
                  <p className="mt-1 text-sm text-red-400">{errors.availability.message}</p>
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
                  <span>Submit application</span>
                )}
              </button>
            )}
          </div>
        </form>
      )}
    />
  )
}


