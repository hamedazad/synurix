'use client'

import { motion } from 'framer-motion'
import { Brain, Target, Eye, Quote } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Synurix
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Engineering intelligence through connection. Building reliable AI systems that understand behavior, learn from data, and support human decision-making.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-8"
          >
            <Target className="w-12 h-12 text-blue-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Mission</h2>
            <p className="text-white/70 leading-relaxed">
              Build reliable, intelligent AI systems inspired by neural intelligence. We develop solutions that go beyond automation—systems that understand context, learn from patterns, and enhance human decision-making capabilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-8"
          >
            <Eye className="w-12 h-12 text-purple-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Vision</h2>
            <p className="text-white/70 leading-relaxed">
              AI that supports decision-making and creates real-world impact. We envision a future where AI systems seamlessly integrate with enterprise workflows, providing intelligent insights that drive innovation and efficiency.
            </p>
          </motion.div>
        </div>

        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-8 md:p-12 mb-16"
        >
          <Brain className="w-12 h-12 text-blue-400 mb-6" />
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              Synurix is an AI technology company focused on developing intelligent applications and enterprise systems. We specialize in neural networks, machine learning, data mining, behavioral analytics, and AI-driven decision systems.
            </p>
            <p>
              Our expertise spans both core AI products and enterprise AI solutions, with particular focus on banking, fintech, healthcare, and industrial sectors. We combine cutting-edge research with practical engineering to deliver solutions that are both innovative and reliable.
            </p>
            <p>
              At Synurix, we believe that artificial intelligence should enhance human capabilities rather than replace them. Our systems are designed to be transparent, explainable, and aligned with business objectives.
            </p>
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CEO Quote */}
            <div className="glass-strong rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-blue-400 mb-4" />
                <blockquote className="text-lg text-white/90 mb-6 leading-relaxed italic">
                  &ldquo;Artificial intelligence should not just automate tasks — it should understand behavior, learn from data, and support human decision-making.&rdquo;
                </blockquote>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">Hamed Azadkhah</p>
                  <p className="text-sm text-white/60">Chief Executive Officer</p>
                </div>
              </div>
            </div>

            {/* CTO Quote */}
            <div className="glass-strong rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-purple-400 mb-4" />
                <blockquote className="text-lg text-white/90 mb-6 leading-relaxed italic">
                  &ldquo;We engineer AI systems inspired by neural connections, focused on reliability, scalability, and real-world impact.&rdquo;
                </blockquote>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">Termeh Rahnemoun</p>
                  <p className="text-sm text-white/60">Chief Technology Officer</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="glass-strong rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Whether you&apos;re exploring a role at Synurix or initiating an enterprise AI
              engagement, our team is ready to collaborate with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                Careers
              </a>
              <a
                href="/submit-project"
                className="px-8 py-4 glass rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
              >
                Submit a Project
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
