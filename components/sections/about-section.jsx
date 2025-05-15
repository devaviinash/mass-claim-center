"use client"

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Legal professionals in a meeting"
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg hidden md:block">
              <p className="text-3xl font-bold text-blue-600">30+</p>
              <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
            </div>
            <div className="absolute -top-6 -left-6 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg hidden md:block">
              <p className="text-3xl font-bold text-blue-600">10K+</p>
              <p className="text-gray-600 dark:text-gray-300">Clients Helped</p>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <div className="inline-block bg-blue-100 dark:bg-blue-900/30 px-4 py-1 rounded-full">
                <p className="text-blue-700 dark:text-blue-300 font-medium text-sm">Let's Seek Justice Together</p>
              </div>
              
              <h2 className="font-playfair text-3xl md:text-4xl font-bold">
                Our Mission
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Our mission is to provide exceptional legal representation, support, and guidance to our clients. Mass Claim Center is dedicated to connecting individuals who have been wronged by corporations with the compensation they deserve.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300">
                If you or a family member have suffered ailments at the hands of a company selling a product, you deserve justice. We strive to ensure that corporations are held accountable for their actions and that victims receive fair compensation for their suffering.
              </p>
              
              <div className="pt-4">
                <Button asChild size="lg">
                  <Link href="/about">
                    Learn More About Us
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}