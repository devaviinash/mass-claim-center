"use client"

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 1,
    title: "Personal Injury Claims",
    icon: "🏥",
    iconBg: "bg-red-100 dark:bg-red-900/30",
    iconColor: "text-red-600 dark:text-red-400",
    shortDescription: "Representation for those injured due to negligence or misconduct.",
    fullDescription: "Our personal injury legal team specializes in representing individuals who have suffered injuries due to the negligence or misconduct of others. We handle cases ranging from auto accidents and workplace injuries to slip and falls and medical malpractice. Our attorneys work diligently to ensure you receive fair compensation for medical expenses, lost wages, pain and suffering, and other damages related to your injury."
  },
  {
    id: 2,
    title: "Mass Tort Litigation",
    icon: "⚖️",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    shortDescription: "Representation in lawsuits involving numerous plaintiffs against common defendants.",
    fullDescription: "Mass tort litigation involves numerous plaintiffs with similar claims against one or more corporate defendants. Our firm has extensive experience handling mass tort cases, including those involving defective drugs, medical devices, toxic exposures, and consumer products. We utilize our resources and expertise to build strong cases for our clients, helping them secure compensation for injuries caused by corporate negligence."
  },
  {
    id: 3,
    title: "Product Liability",
    icon: "🛒",
    iconBg: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
    shortDescription: "Legal action against manufacturers of harmful products.",
    fullDescription: "Our product liability attorneys represent individuals harmed by dangerous or defective products. We hold manufacturers, distributors, and sellers accountable when their products cause injury due to design flaws, manufacturing defects, or inadequate warnings. Our team has successfully litigated cases involving pharmaceutical drugs, medical devices, automobiles, household products, and more, securing significant compensation for our clients."
  },
  {
    id: 4,
    title: "Environmental Law",
    icon: "🌱",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    shortDescription: "Representation in cases involving environmental contamination and pollution.",
    fullDescription: "Our environmental law practice represents individuals and communities affected by environmental contamination, pollution, and toxic exposures. We pursue legal action against corporations responsible for environmental damage that affects public health and property values. Our attorneys have expertise in cases involving water contamination, air pollution, improper waste disposal, and other environmental hazards."
  },
  {
    id: 5,
    title: "Medical Malpractice",
    icon: "🩺",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    shortDescription: "Legal action against healthcare providers for negligent care.",
    fullDescription: "Our medical malpractice attorneys represent patients harmed by negligent medical care. We hold healthcare providers accountable when they fail to meet the standard of care, resulting in patient injury or death. Our team handles cases involving surgical errors, misdiagnosis, medication mistakes, birth injuries, and more. We work with medical experts to build strong cases for our clients, seeking compensation for additional medical expenses, lost income, pain and suffering, and other damages."
  },
  {
    id: 6,
    title: "Consumer Protection",
    icon: "🛡️",
    iconBg: "bg-amber-100 dark:bg-amber-900/30",
    iconColor: "text-amber-600 dark:text-amber-400",
    shortDescription: "Legal action against deceptive business practices and fraud.",
    fullDescription: "Our consumer protection practice focuses on protecting individuals from deceptive business practices, fraud, and unfair treatment by corporations. We represent clients in cases involving false advertising, predatory lending, unfair debt collection, privacy violations, and other consumer rights issues. Our attorneys are committed to holding companies accountable for unethical business practices and helping consumers recover financial losses."
  }
]

export default function ServicesSection() {
  const [open, setOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  
  const handleOpenModal = (service) => {
    setSelectedService(service)
    setOpen(true)
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/30 px-4 py-1 rounded-full mb-4">
            <p className="text-blue-700 dark:text-blue-300 font-medium text-sm">Our Expertise</p>
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Legal Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide specialized legal services to help victims seek justice and compensation across various practice areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onClick={() => handleOpenModal(service)} 
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && selectedService && (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <div className="flex items-center mb-2">
                  <div className={`w-12 h-12 rounded-full ${selectedService.iconBg} flex items-center justify-center text-2xl mr-4`}>
                    {selectedService.icon}
                  </div>
                  <DialogTitle className="text-xl font-playfair font-bold">{selectedService.title}</DialogTitle>
                </div>
                <DialogDescription className="text-base">
                  {selectedService.shortDescription}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-2">
                <p className="text-gray-700 dark:text-gray-300">
                  {selectedService.fullDescription}
                </p>
              </div>
              <DialogFooter className="sm:justify-start flex flex-col sm:flex-row gap-2 mt-6">
                <Button asChild>
                  <Link href="/contact">Get a Free Consultation</Link>
                </Button>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  )
}

function ServiceCard({ service, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className={`w-14 h-14 rounded-full ${service.iconBg} flex items-center justify-center text-2xl mb-6`}>
        <span className={service.iconColor}>{service.icon}</span>
      </div>
      <h3 className="font-playfair text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{service.shortDescription}</p>
      <Button variant="link" className="p-0 text-blue-600 dark:text-blue-400 font-medium">
        Learn More
      </Button>
    </motion.div>
  )
}