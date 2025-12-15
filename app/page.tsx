'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  Brain,
  Network,
  Database,
  Activity,
  AlertTriangle,
  Eye,
  Shield,
  FileText,
  MessageSquare,
  Package,
  Users,
  Bot,
  Sparkles,
  Scale,
  TrendingUp,
  Building2,
  Wrench,
  Quote,
} from 'lucide-react'
import { solutions, generateSlug } from './enterprise/solutions-data'

export default function Home() {
  const router = useRouter()

  const handleSolutionClick = (slug: string) => {
    router.push(`/enterprise?solution=${slug}`)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-gradient" />
      
      {/* Neural network pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-1000" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Intelligent Systems Engineering
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-4 leading-relaxed">
              Designing AI Systems for Real-World Operations
            </p>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Synurix develops intelligent systems that combine machine learning, neural architectures, and data intelligence to support complex enterprise and financial operations at scale.
            </p>
            
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        {/* Enterprise AI Solutions Marquee - Behind Core Technologies */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="h-full flex items-center">
            <div className="w-full overflow-hidden">
              <div className="flex animate-marquee-slow">
                {/* First set */}
                {solutions.map((solution, index) => {
                  const slug = generateSlug(solution.title)
                  return (
                    <div key={`marquee-first-${index}`} className="flex-shrink-0">
                      <div className="w-80 mx-4 glass-strong rounded-xl p-5 border border-white/5 opacity-30 blur-sm">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-lg" />
                          <div className="h-4 bg-white/20 rounded w-32" />
                        </div>
                        <div className="h-3 bg-white/10 rounded w-full mb-2" />
                        <div className="h-3 bg-white/10 rounded w-3/4" />
                      </div>
                    </div>
                  )
                })}
                {/* Duplicate set for seamless loop */}
                {solutions.map((solution, index) => {
                  const slug = generateSlug(solution.title)
                  return (
                    <div key={`marquee-second-${index}`} className="flex-shrink-0">
                      <div className="w-80 mx-4 glass-strong rounded-xl p-5 border border-white/5 opacity-30 blur-sm">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-lg" />
                          <div className="h-4 bg-white/20 rounded w-32" />
                        </div>
                        <div className="h-3 bg-white/10 rounded w-full mb-2" />
                        <div className="h-3 bg-white/10 rounded w-3/4" />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Core Technologies
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Engineering production-grade intelligence at enterprise scale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: 'Advanced Neural Architectures',
                description: 'Deep learning systems including transformers, graph neural networks (GNNs), and sequence models designed for complex, real-world data.',
              },
              {
                icon: Network,
                title: 'Statistical & Probabilistic Machine Learning',
                description: 'Supervised, unsupervised, and ensemble models with probabilistic reasoning for prediction, classification, and uncertainty estimation.',
              },
              {
                icon: Database,
                title: 'Large-Scale Data Engineering & Feature Systems',
                description: 'High-volume data ingestion, feature extraction, and distributed data pipelines optimized for AI training and inference.',
              },
              {
                icon: Activity,
                title: 'Behavioral & Sequential Intelligence',
                description: 'Modeling user behavior, transaction flows, and event sequences using temporal analysis, embeddings, and pattern learning.',
              },
              {
                icon: AlertTriangle,
                title: 'Anomaly Detection & Risk Modeling',
                description: 'Detection of rare, high-impact events using hybrid statistical and ML-based anomaly detection techniques.',
              },
              {
                icon: Eye,
                title: 'Explainable & Governed AI (XAI)',
                description: 'Interpretable models, decision transparency, and governance frameworks for regulated and mission-critical environments.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <feature.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise AI Solutions Marquee - Clickable Cards */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Enterprise AI Solutions
            </h2>
            <p className="text-lg text-white/60">
              Click on any solution to learn more
            </p>
          </motion.div>

          {/* Scrolling Marquee with Cards */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex animate-marquee">
                {/* First set */}
                {solutions.map((solution, index) => {
                  const slug = generateSlug(solution.title)
                  return (
                    <div key={`card-first-${index}`} className="flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => handleSolutionClick(slug)}
                        className="w-80 mx-4 glass-strong rounded-xl p-5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-blue-400/50 relative overflow-hidden group cursor-pointer h-full text-left"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
                        <div className="relative z-10 flex flex-col h-full">
                          <div className="flex items-start space-x-3 mb-3">
                            <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex-shrink-0">
                              {(() => {
                                const iconMap: Record<string, any> = {
                                  'Fraud Detection': Shield,
                                  'Advanced Fraud Detection': Shield,
                                  'Advanced Fraud Detection Systems': Shield,
                                  'Risk Management': TrendingUp,
                                  'Risk Management & Credit Scoring': TrendingUp,
                                  'Transaction Analysis': Building2,
                                  'Transaction & Behavior Intelligence': Building2,
                                  'Transaction & Behavior Intelligence Platform': Building2,
                                  'Computer Vision': Eye,
                                  'Computer Vision Quality & Monitoring': Eye,
                                  'Computer Vision Quality & Monitoring Systems': Eye,
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
                                const IconComponent = solution.icon ? iconMap[solution.icon] || iconMap[solution.title] || Building2 : Building2
                                return <IconComponent className="w-5 h-5 text-blue-400" />
                              })()}
                            </div>
                            <h3 className="text-lg font-bold line-clamp-2 flex-1">{solution.title}</h3>
                          </div>
                          
                          <p className="text-white/70 text-sm leading-relaxed mb-3 line-clamp-2 flex-1">
                            {solution.summary}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mt-auto">
                            {solution.industries.slice(0, 3).map((industry, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 text-xs bg-purple-500/20 rounded-full text-purple-300 border border-purple-500/30"
                              >
                                {industry}
                              </span>
                            ))}
                            {solution.industries.length > 3 && (
                              <span className="px-2 py-1 text-xs text-white/50">
                                +{solution.industries.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                    </div>
                  )
                })}
                {/* Duplicate set for seamless loop */}
                {solutions.map((solution, index) => {
                  const slug = generateSlug(solution.title)
                  return (
                    <div key={`card-second-${index}`} className="flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => handleSolutionClick(slug)}
                        className="w-80 mx-4 glass-strong rounded-xl p-5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-blue-400/50 relative overflow-hidden group cursor-pointer h-full text-left"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
                        <div className="relative z-10 flex flex-col h-full">
                          <div className="flex items-start space-x-3 mb-3">
                            <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex-shrink-0">
                              {(() => {
                                const iconMap: Record<string, any> = {
                                  'Fraud Detection': Shield,
                                  'Advanced Fraud Detection': Shield,
                                  'Advanced Fraud Detection Systems': Shield,
                                  'Risk Management': TrendingUp,
                                  'Risk Management & Credit Scoring': TrendingUp,
                                  'Transaction Analysis': Building2,
                                  'Transaction & Behavior Intelligence': Building2,
                                  'Transaction & Behavior Intelligence Platform': Building2,
                                  'Computer Vision': Eye,
                                  'Computer Vision Quality & Monitoring': Eye,
                                  'Computer Vision Quality & Monitoring Systems': Eye,
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
                                const IconComponent = solution.icon ? iconMap[solution.icon] || iconMap[solution.title] || Building2 : Building2
                                return <IconComponent className="w-5 h-5 text-blue-400" />
                              })()}
                            </div>
                            <h3 className="text-lg font-bold line-clamp-2 flex-1">{solution.title}</h3>
                          </div>
                          
                          <p className="text-white/70 text-sm leading-relaxed mb-3 line-clamp-2 flex-1">
                            {solution.summary}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mt-auto">
                            {solution.industries.slice(0, 3).map((industry, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 text-xs bg-purple-500/20 rounded-full text-purple-300 border border-purple-500/30"
                              >
                                {industry}
                              </span>
                            ))}
                            {solution.industries.length > 3 && (
                              <span className="px-2 py-1 text-xs text-white/50">
                                +{solution.industries.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Perspective */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Leadership Perspective
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
              How Synurix approaches intelligent systems engineering for enterprise and regulated environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* CEO Quote */}
            <article className="glass-strong rounded-xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-500/15 text-blue-300">
                    <Quote className="w-4 h-4" />
                  </span>
                </div>
                <blockquote className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
                  “Our focus is not on experimenting with AI, but on engineering intelligent systems that operate reliably in real-world, enterprise, and regulated environments.”
                </blockquote>
                <footer className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">Hamed Azadkhah</p>
                  <p className="text-sm text-white/60">Founder &amp; CEO</p>
                </footer>
              </div>
            </article>

            {/* CTO Quote */}
            <article className="glass-strong rounded-xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-purple-500/15 text-purple-300">
                    <Quote className="w-4 h-4" />
                  </span>
                </div>
                <blockquote className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
                  “We design AI systems with a strong emphasis on architecture, data integrity, and long-term maintainability. Engineering discipline is what turns models into systems.”
                </blockquote>
                <footer className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">Termeh Rahnemoun</p>
                  <p className="text-sm text-white/60">Chief Technology Officer</p>
                </footer>
              </div>
            </article>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Intelligent Solutions?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Whether you&apos;re looking for AI products or enterprise solutions, we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/enterprise"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                Enterprise Solutions
              </Link>
              <Link
                href="/submit-project"
                className="px-8 py-4 glass rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
              >
                Submit a Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
