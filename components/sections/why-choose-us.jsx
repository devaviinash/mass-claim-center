"use client"

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { Shield, Clock, Award } from 'lucide-react'

const features = [
  {
    title: "Victims Choose Us",
    description: "Committed to protecting what matters most. We dedicate ourselves to safeguarding our clients' rights, interests, and well-being with unwavering determination and legal expertise.",
    icon: Shield,
    delay: 0
  },
  {
    title: "Committed To Client",
    description: "Our dedication lies in providing unwavering support, personalized attention, and expert legal representation to each client, ensuring their needs are met and their rights are protected throughout their legal journey.",
    icon: Clock,
    delay: 0.2
  },
  {
    title: "No Extra Charges",
    description: "We prioritize transparency and fairness by offering our legal services with no hidden fees or extra charges, ensuring our clients receive quality representation without unexpected financial burdens.",
    icon: Award,
    delay: 0.4
  }
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/patterns/circuit-board.svg')]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Why Victims <span className="text-blue-600 dark:text-blue-400">Choose Us</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We combine legal expertise with client-focused service to deliver exceptional results for victims seeking justice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: feature.delay }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}