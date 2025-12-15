'use client'

import { motion } from 'framer-motion'
import ProductCard from '@/components/ProductCard'

const products = [
  {
    title: 'Memora',
    description:
      'AI-powered memory and knowledge system that intelligently stores, organizes, and recalls information using contextual understanding and machine learning.',
    benefits: [
      'Smart memory recall',
      'Context-aware reminders',
      'AI-based summarization',
      'Knowledge organization',
    ],
    technology:
      'Neural networks, NLP, vector embeddings, ML-based tagging',
    learnMore:
      'Memora leverages advanced neural network architectures to create contextual memory associations. Using vector embeddings and natural language processing, it understands the semantic relationships between pieces of information, enabling intelligent recall based on context rather than simple keyword matching. The system continuously learns from user interactions, improving its understanding of what information is most relevant and when it should be surfaced.',
  },
  {
    title: 'AI Assistant Platform',
    description:
      'Customizable AI assistant platform designed for task automation, knowledge retrieval, and decision support.',
    benefits: [
      'Task automation',
      'Intelligent knowledge retrieval',
      'Decision support systems',
      'Customizable workflows',
      'Multi-modal interactions',
    ],
    technology: 'NLP, transformer models, ML pipelines',
    learnMore:
      'Our AI Assistant Platform is built on state-of-the-art transformer architectures, enabling natural language understanding and generation. The platform supports custom training and fine-tuning for domain-specific applications, allowing enterprises to deploy assistants tailored to their specific needs. It integrates seamlessly with existing systems and can process both structured and unstructured data.',
  },
  {
    title: 'Intelligent Analytics Engine',
    description:
      'AI-driven analytics system that extracts patterns and insights from structured and unstructured data.',
    benefits: [
      'Pattern recognition',
      'Anomaly detection',
      'Predictive insights',
      'Real-time analysis',
      'Multi-source data integration',
    ],
    technology: 'Data mining, ML models, anomaly detection',
    learnMore:
      'The Intelligent Analytics Engine combines multiple machine learning techniques to provide comprehensive data analysis. It uses advanced data mining algorithms to discover hidden patterns, employs anomaly detection models to identify outliers and potential issues, and leverages predictive analytics to forecast trends. The system can process data from multiple sources simultaneously, providing unified insights across your entire data ecosystem.',
  },
]

export default function ProductsPage() {
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
            Core AI Products
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Explore our suite of AI-powered products designed to enhance productivity, intelligence, and decision-making.
          </p>
        </motion.div>

        <div className="space-y-8">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}
