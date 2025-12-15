'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, Loader2, Upload } from 'lucide-react'

const projectSchema = z.object({
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  contactPerson: z.string().min(2, 'Contact person name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  industry: z.string().min(2, 'Please specify your industry'),
  projectType: z.enum([
    'Fraud Detection',
    'Risk Management',
    'ML Analytics',
    'Computer Vision',
    'Custom AI',
  ]),
  projectDescription: z.string().min(50, 'Please provide a detailed project description (at least 50 characters)'),
  timeline: z.string().min(1, 'Please provide a timeline'),
  budgetRange: z.string().optional(),
  confidentiality: z.boolean().refine((val) => val === true, {
    message: 'You must acknowledge the confidentiality agreement',
  }),
})

type ProjectFormData = z.infer<typeof projectSchema>

export default function ProjectForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      confidentiality: false,
    },
  })

  const onSubmit = async (data: ProjectFormData) => {
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
        <h2 className="text-2xl font-bold mb-4">Project Submitted Successfully</h2>
        <p className="text-white/70 mb-6">
          Thank you for submitting your project. Our team will review your requirements and contact you within 2-3 business days to discuss next steps.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 glass rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
        >
          Submit Another Project
        </button>
      </div>
    )
  }

  return (
    <div className="glass-strong rounded-2xl p-8 md:p-12">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="companyName" className="block text-sm font-semibold mb-2">
              Company Name *
            </label>
            <input
              id="companyName"
              type="text"
              {...register('companyName')}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Acme Corporation"
            />
            {errors.companyName && (
              <p className="mt-1 text-sm text-red-400">{errors.companyName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="contactPerson" className="block text-sm font-semibold mb-2">
              Contact Person *
            </label>
            <input
              id="contactPerson"
              type="text"
              {...register('contactPerson')}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Jane Smith"
            />
            {errors.contactPerson && (
              <p className="mt-1 text-sm text-red-400">{errors.contactPerson.message}</p>
            )}
          </div>
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
            placeholder="jane.smith@acme.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="industry" className="block text-sm font-semibold mb-2">
              Industry *
            </label>
            <input
              id="industry"
              type="text"
              {...register('industry')}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Banking, Healthcare, Manufacturing, etc."
            />
            {errors.industry && (
              <p className="mt-1 text-sm text-red-400">{errors.industry.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="projectType" className="block text-sm font-semibold mb-2">
              Project Type *
            </label>
            <select
              id="projectType"
              {...register('projectType')}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Fraud Detection">Fraud Detection</option>
              <option value="Risk Management">Risk Management</option>
              <option value="ML Analytics">ML Analytics</option>
              <option value="Computer Vision">Computer Vision</option>
              <option value="Custom AI">Custom AI</option>
            </select>
            {errors.projectType && (
              <p className="mt-1 text-sm text-red-400">{errors.projectType.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="projectDescription" className="block text-sm font-semibold mb-2">
            Project Description *
          </label>
          <textarea
            id="projectDescription"
            {...register('projectDescription')}
            rows={6}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Please provide a detailed description of your project, including objectives, requirements, expected outcomes, and any specific technical constraints or considerations..."
          />
          {errors.projectDescription && (
            <p className="mt-1 text-sm text-red-400">{errors.projectDescription.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="timeline" className="block text-sm font-semibold mb-2">
              Timeline *
            </label>
            <input
              id="timeline"
              type="text"
              {...register('timeline')}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., 3 months, Q2 2025, etc."
            />
            {errors.timeline && (
              <p className="mt-1 text-sm text-red-400">{errors.timeline.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="budgetRange" className="block text-sm font-semibold mb-2">
              Budget Range (Optional)
            </label>
            <input
              id="budgetRange"
              type="text"
              {...register('budgetRange')}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., $50k-$100k, Confidential, etc."
            />
          </div>
        </div>

        <div>
          <label htmlFor="fileUpload" className="block text-sm font-semibold mb-2">
            Additional Documents (Optional)
          </label>
          <div className="relative">
            <input
              id="fileUpload"
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx,.txt"
            />
            <label
              htmlFor="fileUpload"
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white/80 hover:bg-white/10 cursor-pointer transition-colors"
            >
              <Upload className="w-5 h-5" />
              <span>Upload File</span>
            </label>
          </div>
          <p className="mt-2 text-xs text-white/50">
            Accepted formats: PDF, DOC, DOCX, TXT (Max 10MB)
          </p>
        </div>

        <div>
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              {...register('confidentiality')}
              className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-sm text-white/80">
              I acknowledge that the information provided is confidential and will be handled according to Synurix&apos;s privacy policy. *
            </span>
          </label>
          {errors.confidentiality && (
            <p className="mt-1 text-sm text-red-400">{errors.confidentiality.message}</p>
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
            <span>Submit Project</span>
          )}
        </button>
      </form>
    </div>
  )
}

