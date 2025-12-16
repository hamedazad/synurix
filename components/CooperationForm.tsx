'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, Loader2 } from 'lucide-react'
import Select from './ui/Select'

const cooperationSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  role: z.enum([
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
    'Other',
  ]),
  skills: z.string().min(10, 'Please provide details about your skills and experience'),
  motivation: z.string().min(20, 'Please provide your motivation (at least 20 characters)'),
  resumeLink: z
    .union([z.string().url('Please provide a valid URL'), z.literal('')])
    .optional(),
})

type CooperationFormData = z.infer<typeof cooperationSchema>

export default function CooperationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<CooperationFormData>({
    resolver: zodResolver(cooperationSchema),
  })

  const onSubmit = async (data: CooperationFormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
  }

  if (isSubmitted) {
    return (
      <div className="glass-strong rounded-2xl p-12 text-center">
        <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p className="text-white/70 mb-6">
          Your application has been submitted successfully. We&apos;ll review your information and get back to you soon.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 glass rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
        >
          Submit Another Application
        </button>
      </div>
    )
  }

  return (
    <div className="glass-strong rounded-2xl p-8 md:p-12">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold mb-2">
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            {...register('fullName')}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="John Doe"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-400">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="john.doe@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-semibold mb-2">
            Role of Interest *
          </label>
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <Select
                id="role"
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
                  { value: 'Other', label: 'Other' },
                ]}
                placeholder="Select a role"
                error={!!errors.role}
              />
            )}
          />
          {errors.role && (
            <p className="mt-1 text-sm text-red-400">{errors.role.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="skills" className="block text-sm font-semibold mb-2">
            Skills & Experience *
          </label>
          <textarea
            id="skills"
            {...register('skills')}
            rows={4}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Describe your technical skills, experience, and relevant projects..."
          />
          {errors.skills && (
            <p className="mt-1 text-sm text-red-400">{errors.skills.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="motivation" className="block text-sm font-semibold mb-2">
            Motivation *
          </label>
          <textarea
            id="motivation"
            {...register('motivation')}
            rows={4}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Why do you want to work with Synurix? What interests you about AI and our mission?"
          />
          {errors.motivation && (
            <p className="mt-1 text-sm text-red-400">{errors.motivation.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="resumeLink" className="block text-sm font-semibold mb-2">
            Resume / Portfolio Link
          </label>
          <input
            id="resumeLink"
            type="url"
            {...register('resumeLink')}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://your-portfolio.com or https://linkedin.com/in/yourprofile"
          />
          {errors.resumeLink && (
            <p className="mt-1 text-sm text-red-400">{errors.resumeLink.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <span>Submit Application</span>
          )}
        </button>
      </form>
    </div>
  )
}

