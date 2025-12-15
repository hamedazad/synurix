"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Eye, FileText, Network } from "lucide-react";

const iconMap: Record<string, any> = {
  "Fraud Detection": Shield,
  "Risk Management": TrendingUp,
  "Transaction & Behavior Analysis": Network,
  "Computer Vision": Eye,
  "NLP Document Intelligence": FileText,
};

interface EnterpriseCardProps {
  title: string;
  description: string;
  useCases: string[];
  industries: string[];
  coreTechniques: string[];
}

export default function EnterpriseCard({
  title,
  description,
  useCases,
  industries,
  coreTechniques,
}: EnterpriseCardProps) {
  const Icon = iconMap[title] || Network;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass rounded-xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 relative group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors" />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-500/20 rounded-lg">
              <Icon className="w-5 h-5 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-indigo-400 mb-2">
              Use Cases:
            </h4>
            <ul className="space-y-1">
              {useCases.map((useCase, index) => (
                <li
                  key={index}
                  className="text-gray-400 text-sm flex items-start"
                >
                  <span className="text-indigo-400 mr-2">•</span>
                  {useCase}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-indigo-400 mb-2">
              Industries:
            </h4>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded text-xs text-indigo-300"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-indigo-400 mb-2">
              Core AI Techniques:
            </h4>
            <div className="flex flex-wrap gap-2">
              {coreTechniques.map((technique, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-300"
                >
                  {technique}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

