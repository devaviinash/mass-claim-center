"use client"

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import CountUp from '@/components/ui/count-up'

const stats = [
  {
    value: 10,
    suffix: "k+",
    label: "Global Customers",
    delay: 0
  },
  {
    value: 30,
    suffix: "+",
    label: "Years Of Experience",
    delay: 0.1
  },
  {
    value: 24,
    suffix: "",
    label: "Team Experts",
    delay: 0.2
  },
  {
    value: 17,
    suffix: "+",
    label: "Awards & Honors",
    delay: 0.3
  }
]

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: stat.delay }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold font-playfair">
                {isInView && (
                  <>
                    <CountUp end={stat.value} duration={2.5} />
                    <span>{stat.suffix}</span>
                  </>
                )}
              </div>
              <p className="text-blue-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}