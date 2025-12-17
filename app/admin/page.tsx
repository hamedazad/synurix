'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { LogOut } from 'lucide-react'

interface CareerApplication {
  id: number
  full_name: string
  email: string
  phone: string
  location: string
  profile_url: string | null
  role_of_interest: string
  years_of_experience: number
  key_skills: string
  motivation: string
  availability: string
  created_at: string
}

interface EnterpriseProject {
  id: number
  company_name: string
  industry: string
  company_size: string
  contact_person: string
  email: string
  project_title: string
  problem_description: string
  ai_requirements: string
  estimated_timeline: string
  data_availability: string
  security_requirements: string
  budget_range: string | null
  created_at: string
}

interface CooperationApplication {
  id: number
  full_name: string
  email: string
  role: string
  skills: string
  motivation: string
  resume_link: string | null
  created_at: string
}

export default function AdminPage() {
  const router = useRouter()
  const [careerApps, setCareerApps] = useState<CareerApplication[]>([])
  const [projects, setProjects] = useState<EnterpriseProject[]>([])
  const [cooperationApps, setCooperationApps] = useState<CooperationApplication[]>([])
  const [activeTab, setActiveTab] = useState<'careers' | 'projects' | 'cooperation'>('careers')
  const [loading, setLoading] = useState(true)

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const [careersRes, projectsRes, cooperationRes] = await Promise.all([
        fetch('/api/careers'),
        fetch('/api/projects'),
        fetch('/api/cooperation'),
      ])

      const careersData = await careersRes.json()
      const projectsData = await projectsRes.json()
      const cooperationData = await cooperationRes.json()

      if (careersData.success) setCareerApps(careersData.data)
      if (projectsData.success) setProjects(projectsData.data)
      if (cooperationData.success) setCooperationApps(cooperationData.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Form Submissions
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                View all submitted career applications, projects, and cooperation requests
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 glass rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 ml-4"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="glass rounded-xl p-1.5 inline-flex w-full md:w-auto mb-8">
          <button
            onClick={() => setActiveTab('careers')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeTab === 'careers'
                ? 'bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Careers ({careerApps.length})
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeTab === 'projects'
                ? 'bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab('cooperation')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeTab === 'cooperation'
                ? 'bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Cooperation ({cooperationApps.length})
          </button>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <p className="text-white/60">Loading...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {activeTab === 'careers' && (
              <div className="space-y-4">
                {careerApps.length === 0 ? (
                  <div className="glass-strong rounded-xl p-12 text-center">
                    <p className="text-white/60">No career applications yet</p>
                  </div>
                ) : (
                  careerApps.map((app) => (
                    <div key={app.id} className="glass-strong rounded-xl p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-white/60">Name</p>
                          <p className="text-white font-semibold">{app.full_name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Email</p>
                          <p className="text-white">{app.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Phone</p>
                          <p className="text-white">{app.phone}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Location</p>
                          <p className="text-white">{app.location}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Role of Interest</p>
                          <p className="text-white">{app.role_of_interest}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Years of Experience</p>
                          <p className="text-white">{app.years_of_experience}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Availability</p>
                          <p className="text-white">{app.availability}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Submitted</p>
                          <p className="text-white">{formatDate(app.created_at)}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-white/60 mb-1">Key Skills</p>
                        <p className="text-white">{app.key_skills}</p>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-white/60 mb-1">Motivation</p>
                        <p className="text-white">{app.motivation}</p>
                      </div>
                      {app.profile_url && (
                        <div>
                          <p className="text-sm text-white/60 mb-1">Profile URL</p>
                          <a
                            href={app.profile_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                          >
                            {app.profile_url}
                          </a>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-4">
                {projects.length === 0 ? (
                  <div className="glass-strong rounded-xl p-12 text-center">
                    <p className="text-white/60">No projects submitted yet</p>
                  </div>
                ) : (
                  projects.map((project) => (
                    <div key={project.id} className="glass-strong rounded-xl p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-white/60">Company Name</p>
                          <p className="text-white font-semibold">{project.company_name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Industry</p>
                          <p className="text-white">{project.industry}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Company Size</p>
                          <p className="text-white">{project.company_size}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Contact Person</p>
                          <p className="text-white">{project.contact_person}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Email</p>
                          <p className="text-white">{project.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Project Title</p>
                          <p className="text-white font-semibold">{project.project_title}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Estimated Timeline</p>
                          <p className="text-white">{project.estimated_timeline}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Data Availability</p>
                          <p className="text-white">{project.data_availability}</p>
                        </div>
                        {project.budget_range && (
                          <div>
                            <p className="text-sm text-white/60">Budget Range</p>
                            <p className="text-white">{project.budget_range}</p>
                          </div>
                        )}
                        <div>
                          <p className="text-sm text-white/60">Submitted</p>
                          <p className="text-white">{formatDate(project.created_at)}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-white/60 mb-1">AI Requirements</p>
                        <p className="text-white">
                          {JSON.parse(project.ai_requirements).join(', ')}
                        </p>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-white/60 mb-1">Problem Description</p>
                        <p className="text-white">{project.problem_description}</p>
                      </div>
                      <div>
                        <p className="text-sm text-white/60 mb-1">Security Requirements</p>
                        <p className="text-white">{project.security_requirements}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === 'cooperation' && (
              <div className="space-y-4">
                {cooperationApps.length === 0 ? (
                  <div className="glass-strong rounded-xl p-12 text-center">
                    <p className="text-white/60">No cooperation applications yet</p>
                  </div>
                ) : (
                  cooperationApps.map((app) => (
                    <div key={app.id} className="glass-strong rounded-xl p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-white/60">Name</p>
                          <p className="text-white font-semibold">{app.full_name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Email</p>
                          <p className="text-white">{app.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Role</p>
                          <p className="text-white">{app.role}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Submitted</p>
                          <p className="text-white">{formatDate(app.created_at)}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-white/60 mb-1">Skills & Experience</p>
                        <p className="text-white">{app.skills}</p>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-white/60 mb-1">Motivation</p>
                        <p className="text-white">{app.motivation}</p>
                      </div>
                      {app.resume_link && (
                        <div>
                          <p className="text-sm text-white/60 mb-1">Resume Link</p>
                          <a
                            href={app.resume_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                          >
                            {app.resume_link}
                          </a>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

