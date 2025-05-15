"use client"

import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  {
    title: "Expert Legal Representation",
    description: "Our team of seasoned attorneys provides top-tier legal representation for all types of claims.",
    icon: "⚖️"
  },
  {
    title: "Dedicated Case Management",
    description: "From filing to resolution, we manage your case with meticulous attention to detail.",
    icon: "📁"
  },
  {
    title: "No Win, No Fee",
    description: "We work on contingency - you don't pay unless we win your case.",
    icon: "💰"
  },
  {
    title: "24/7 Client Support",
    description: "Our responsive team is always available to answer your questions and address concerns.",
    icon: "🔔"
  },
  {
    title: "Nationwide Coverage",
    description: "We represent clients across all 50 states with local expertise in each jurisdiction.",
    icon: "🇺🇸"
  }
]

export default function FeaturesCarousel() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section ref={containerRef} className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-blue-600 dark:text-blue-400">Mass Claim Center</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We combine legal expertise with exceptional client service to deliver results for victims of corporate wrongdoing.
          </p>
        </div>

        <div className="relative">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
            className="flex space-x-6 pb-6 overflow-x-auto hide-scrollbar"
          >
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                feature={feature} 
                index={index} 
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: i => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.1,
            duration: 0.5
          }
        })
      }}
      custom={index}
      className="flex-shrink-0 w-full sm:w-[350px] bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
    >
      <div className="p-6">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6 text-2xl">
          {feature.icon}
        </div>
        <h3 className="font-playfair text-xl font-bold mb-3">{feature.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
          <span>Learn more</span>
          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </motion.div>
  )
}