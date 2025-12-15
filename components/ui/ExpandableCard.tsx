"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Brain } from "lucide-react";

interface ExpandableCardProps {
  title: string;
  description: string;
  benefits: string[];
  technology: string;
  learnMore?: {
    title: string;
    content: string;
  };
}

export default function ExpandableCard({
  title,
  description,
  benefits,
  technology,
  learnMore,
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass rounded-xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-500/20 rounded-lg">
            <Brain className="w-5 h-5 text-indigo-400" />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-indigo-400 mb-2">Benefits:</h4>
        <ul className="space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-gray-400 text-sm flex items-start">
              <span className="text-indigo-400 mr-2">•</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-indigo-400 mb-2">Technology:</h4>
        <p className="text-gray-400 text-sm">{technology}</p>
      </div>

      {learnMore && (
        <div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium"
          >
            <span>Learn More</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4"
              >
                <div className="pt-4 border-t border-white/10">
                  <h5 className="text-sm font-semibold text-white mb-2">
                    {learnMore.title}
                  </h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {learnMore.content}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}

