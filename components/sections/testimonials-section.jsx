"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Personal Injury Client",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "Mass Claim Center fought tirelessly for my case. Their expertise and dedication resulted in a settlement that far exceeded my expectations. I'm grateful for their support during a difficult time."
  },
  {
    id: 2,
    name: "Michael Davis",
    position: "Product Liability Client",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "After being injured by a defective product, I felt lost and overwhelmed. The team at Mass Claim Center guided me through every step of the legal process and secured the compensation I deserved."
  },
  {
    id: 3,
    name: "Jennifer Wilson",
    position: "Medical Malpractice Client",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "I can't thank Mass Claim Center enough for their expertise and compassion. They handled my medical malpractice case with professionalism and secured a settlement that helps cover my ongoing medical expenses."
  }
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(null)
  const timeoutRef = useRef(null)

  const nextTestimonial = () => {
    setDirection('right')
    setCurrent(prev => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection('left')
    setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    // Auto-advance the carousel
    timeoutRef.current = setTimeout(() => {
      nextTestimonial()
    }, 8000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [current])

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction === 'right' ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction === 'right' ? -300 : 300,
      opacity: 0
    })
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-blue-600 dark:text-blue-400">Clients Say</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're proud to have helped thousands of clients get the justice and compensation they deserve.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 dark:text-blue-400 opacity-20">
            <Quote size={80} />
          </div>
          
          <div className="min-h-[350px] flex items-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full"
              >
                <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-xl shadow-lg flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonials[current].image} 
                      alt={testimonials[current].name}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-blue-100"
                    />
                  </div>
                  <div>
                    <blockquote className="text-lg md:text-xl italic text-gray-700 dark:text-gray-300 mb-4">
                      "{testimonials[current].quote}"
                    </blockquote>
                    <div className="mt-4">
                      <p className="text-lg font-semibold">{testimonials[current].name}</p>
                      <p className="text-gray-600 dark:text-gray-400">{testimonials[current].position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 text-blue-600 dark:text-blue-400 opacity-20">
            <Quote size={80} />
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 'right' : 'left')
                    setCurrent(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === current 
                      ? 'bg-blue-600 dark:bg-blue-400' 
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}