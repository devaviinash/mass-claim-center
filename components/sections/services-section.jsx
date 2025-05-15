"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const services = [
   {
      id: 1,
      title: "Hair Relaxer Lawsuits",
      icon: "💇‍♀️",
      iconBg: "bg-pink-100 dark:bg-pink-900/30",
      iconColor: "text-pink-600 dark:text-pink-400",
      shortDescription:
         "Claims for injuries caused by harmful chemicals in hair relaxer products.",
      fullDescription:
         "Our legal team represents individuals harmed by dangerous chemicals in hair relaxer products, which may cause serious health issues such as cancer or reproductive harm. We pursue claims against manufacturers for defective products, inadequate warnings, or misleading marketing, seeking compensation for medical expenses, pain and suffering, and other damages.",
   },
   {
      id: 2,
      title: "Rideshare Accident Claims",
      icon: "🚗",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400",
      shortDescription:
         "Representation for injuries sustained in rideshare accidents.",
      fullDescription:
         "We provide legal representation for individuals injured in accidents involving rideshare services like Uber or Lyft. Our attorneys navigate complex liability issues to hold drivers, rideshare companies, or third parties accountable, securing compensation for medical bills, lost wages, and other damages resulting from the accident.",
   },
   {
      id: 3,
      title: "NEC Baby Formula Lawsuits",
      icon: "🍼",
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
      iconColor: "text-purple-600 dark:text-purple-400",
      shortDescription:
         "Claims for infants harmed by necrotizing enterocolitis from formula.",
      fullDescription:
         "Our firm represents families whose infants developed necrotizing enterocolitis (NEC) linked to certain cow’s milk-based baby formulas. We pursue litigation against formula manufacturers for failing to warn about risks, seeking compensation for medical costs, emotional distress, and other losses caused by this serious condition.",
   },
   {
      id: 4,
      title: "AFFF Firefighting Foam Lawsuits",
      icon: "🧯",
      iconBg: "bg-red-100 dark:bg-red-900/30",
      iconColor: "text-red-600 dark:text-red-400",
      shortDescription:
         "Litigation for health issues from toxic firefighting foam exposure.",
      fullDescription:
         "We represent firefighters and others exposed to aqueous film-forming foam (AFFF), which contains PFAS chemicals linked to cancer and other illnesses. Our attorneys pursue claims against manufacturers for producing and distributing toxic foam, aiming to secure compensation for medical expenses, lost income, and health impacts.",
   },
   {
      id: 5,
      title: "Paraquat Herbicide Lawsuits",
      icon: "🌾",
      iconBg: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-green-600 dark:text-green-400",
      shortDescription:
         "Claims for Parkinson’s disease linked to Paraquat exposure.",
      fullDescription:
         "Our legal team handles cases for individuals diagnosed with Parkinson’s disease after exposure to the herbicide Paraquat. We pursue litigation against manufacturers for failing to warn about neurological risks, seeking compensation for medical treatment, disability, and reduced quality of life caused by this toxic chemical.",
   },
   {
      id: 6,
      title: "LDS Church Abuse Lawsuits",
      icon: "⚖️",
      iconBg: "bg-amber-100 dark:bg-amber-900/30",
      iconColor: "text-amber-600 dark:text-amber-400",
      shortDescription:
         "Representation for survivors of abuse within LDS institutions.",
      fullDescription:
         "We provide compassionate legal support for survivors of sexual abuse within institutions affiliated with the Church of Jesus Christ of Latter-day Saints (LDS). Our attorneys pursue justice against responsible parties, seeking compensation for emotional trauma, therapy costs, and other damages while holding institutions accountable.",
   },
   {
      id: 7,
      title: "Video Game Addiction Lawsuits",
      icon: "🎮",
      iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      shortDescription:
         "Claims against gaming companies for addictive design practices.",
      fullDescription:
         "Our firm represents individuals and families harmed by video game addiction caused by manipulative design practices, such as predatory microtransactions or addictive gameplay mechanics. We pursue litigation against gaming companies, seeking compensation for financial losses, psychological harm, and related damages.",
   },
   {
      id: 8,
      title: "Roundup Weedkiller Lawsuits",
      icon: "🌿",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      shortDescription:
         "Litigation for cancer linked to Roundup herbicide exposure.",
      fullDescription:
         "We represent individuals diagnosed with non-Hodgkin’s lymphoma or other cancers linked to exposure to Roundup weedkiller containing glyphosate. Our attorneys pursue claims against manufacturers for inadequate warnings, seeking compensation for medical expenses, pain and suffering, and other losses.",
   },
   {
      id: 9,
      title: "Talcum Powder Lawsuits",
      icon: "🧴",
      iconBg: "bg-gray-100 dark:bg-gray-900/30",
      iconColor: "text-gray-600 dark:text-gray-400",
      shortDescription: "Claims for cancer caused by talcum powder products.",
      fullDescription:
         "Our legal team handles cases for individuals diagnosed with ovarian cancer or mesothelioma due to asbestos-contaminated talcum powder products. We pursue litigation against manufacturers for failing to disclose risks, seeking compensation for medical costs, lost wages, and other damages.",
   },
   {
      id: 10,
      title: "Maryland Juvenile Detention Lawsuits",
      icon: "🏛️",
      iconBg: "bg-orange-100 dark:bg-orange-900/30",
      iconColor: "text-orange-600 dark:text-orange-400",
      shortDescription:
         "Representation for abuse in Maryland juvenile facilities.",
      fullDescription:
         "We represent individuals who suffered abuse or neglect in Maryland juvenile detention facilities. Our attorneys pursue justice against state agencies and facility operators, seeking compensation for physical and emotional injuries, as well as advocating for systemic changes to protect vulnerable youth.",
   },
   {
      id: 11,
      title: "Illinois Sexual Abuse Lawsuits",
      icon: "🛡️",
      iconBg: "bg-teal-100 dark:bg-teal-900/30",
      iconColor: "text-teal-600 dark:text-teal-400",
      shortDescription:
         "Legal support for survivors of sexual abuse in Illinois.",
      fullDescription:
         "Our firm provides dedicated representation for survivors of sexual abuse in Illinois, pursuing claims against perpetrators and institutions that failed to protect victims. We seek compensation for emotional trauma, medical expenses, and other damages while advocating for justice and accountability.",
   },
   {
      id: 12,
      title: "Tylenol/Acetaminophen Lawsuits",
      icon: "💊",
      iconBg: "bg-red-100 dark:bg-red-900/30",
      iconColor: "text-red-600 dark:text-red-400",
      shortDescription: "Claims for health risks linked to Tylenol use.",
      fullDescription:
         "We represent individuals harmed by Tylenol or acetaminophen products, particularly in cases involving autism or ADHD in children linked to prenatal use. Our attorneys pursue claims against manufacturers for inadequate warnings, seeking compensation for medical care, developmental support, and related damages.",
   },
   {
      id: 13,
      title: "Car Accident Lawsuits",
      icon: "🚘",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400",
      shortDescription: "Representation for injuries from car accidents.",
      fullDescription:
         "Our legal team represents individuals injured in car accidents caused by negligent drivers, road hazards, or defective vehicles. We pursue claims to secure compensation for medical expenses, vehicle repairs, lost wages, and pain and suffering, ensuring victims receive fair recovery.",
   },
   {
      id: 14,
      title: "Zantac Cancer Lawsuits",
      icon: "🩺",
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
      iconColor: "text-purple-600 dark:text-purple-400",
      shortDescription: "Claims for cancer caused by Zantac medication.",
      fullDescription:
         "We handle lawsuits for individuals diagnosed with cancer linked to NDMA contamination in Zantac (ranitidine) medications. Our attorneys pursue claims against manufacturers for distributing dangerous drugs, seeking compensation for medical costs, pain and suffering, and other losses.",
   },
   {
      id: 15,
      title: "Ozempic Side Effect Lawsuits",
      icon: "💉",
      iconBg: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-green-600 dark:text-green-400",
      shortDescription: "Claims for severe side effects from Ozempic use.",
      fullDescription:
         "Our firm represents patients harmed by severe side effects, such as gastroparesis or gallbladder issues, from the diabetes and weight-loss drug Ozempic. We pursue litigation against manufacturers for inadequate warnings, seeking compensation for medical expenses, disability, and other damages.",
   },
   {
      id: 16,
      title: "Depo-Provera Lawsuits",
      icon: "💊",
      iconBg: "bg-pink-100 dark:bg-pink-900/30",
      iconColor: "text-pink-600 dark:text-pink-400",
      shortDescription: "Claims for health risks linked to Depo-Provera use.",
      fullDescription:
         "We represent individuals harmed by the contraceptive injection Depo-Provera, particularly in cases involving brain tumors or other serious health risks. Our attorneys pursue claims against manufacturers for failing to disclose risks, seeking compensation for medical treatment and related damages.",
   },
   {
      id: 17,
      title: "Mesothelioma Lawsuits",
      icon: "🫁",
      iconBg: "bg-gray-100 dark:bg-gray-900/30",
      iconColor: "text-gray-600 dark:text-gray-400",
      shortDescription: "Litigation for asbestos-related mesothelioma cases.",
      fullDescription:
         "Our legal team represents individuals diagnosed with mesothelioma due to asbestos exposure in workplaces, products, or environments. We pursue claims against responsible companies, seeking compensation for medical expenses, lost income, and pain and suffering caused by this aggressive cancer.",
   },
   {
      id: 18,
      title: "Los Angeles Wildfire Lawsuits",
      icon: "🔥",
      iconBg: "bg-orange-100 dark:bg-orange-900/30",
      iconColor: "text-orange-600 dark:text-orange-400",
      shortDescription: "Claims for damages from Los Angeles wildfires.",
      fullDescription:
         "We represent individuals and businesses affected by Los Angeles wildfires caused by utility negligence or other preventable factors. Our attorneys pursue claims for property damage, health impacts, and financial losses, seeking compensation and accountability from responsible parties.",
   },
];

const ServicesSection = () => {
   const [open, setOpen] = useState(false);
   const [selectedService, setSelectedService] = useState(null);
   const [showAll, setShowAll] = useState(false);

   const handleOpenModal = (service) => {
      setSelectedService(service);
      setOpen(true);
   };

   const displayedServices = showAll ? services : services.slice(0, 6);

   return (
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
         <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
               <div className="inline-block bg-blue-100 dark:bg-blue-900/30 px-4 py-1 rounded-full mb-4">
                  <p className="text-blue-700 dark:text-blue-300 font-medium text-sm">
                     Our Expertise
                  </p>
               </div>
               <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                  Comprehensive Legal Services
               </h2>
               <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  We provide specialized legal services to help victims seek
                  justice and compensation across various practice areas.
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {displayedServices.map((service) => (
                  <ServiceCard
                     key={service.id}
                     service={service}
                     onClick={() => handleOpenModal(service)}
                  />
               ))}
            </div>

            <div className="text-center mt-12">
               <Button size="lg" onClick={() => setShowAll((prev) => !prev)}>
                  {showAll ? "View Less Services" : "View All Services"}
               </Button>
            </div>
         </div>

         <AnimatePresence>
            {open && selectedService && (
               <Dialog open={open} onOpenChange={setOpen}>
                  <DialogContent className="sm:max-w-[550px]">
                     <DialogHeader>
                        <div className="flex items-center mb-2">
                           <div
                              className={`w-12 h-12 rounded-full ${selectedService.iconBg} flex items-center justify-center text-2xl mr-4`}
                           >
                              {selectedService.icon}
                           </div>
                           <DialogTitle className="text-xl font-playfair font-bold">
                              {selectedService.title}
                           </DialogTitle>
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
                           <a href="/contact">Get a Free Consultation</a>
                        </Button>
                        <Button
                           variant="outline"
                           onClick={() => setOpen(false)}
                        >
                           Close
                        </Button>
                     </DialogFooter>
                  </DialogContent>
               </Dialog>
            )}
         </AnimatePresence>
      </section>
   );
};

function ServiceCard({ service, onClick }) {
   return (
      <motion.div
         whileHover={{ y: -8 }}
         transition={{ type: "spring", stiffness: 300 }}
         className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
         onClick={onClick}
      >
         <div
            className={`w-14 h-14 rounded-full ${service.iconBg} flex items-center justify-center text-2xl mb-6`}
         >
            <span className={service.iconColor}>{service.icon}</span>
         </div>
         <h3 className="font-playfair text-xl font-semibold mb-3">
            {service.title}
         </h3>
         <p className="text-gray-600 dark:text-gray-300 mb-4">
            {service.shortDescription}
         </p>
         <Button
            variant="link"
            className="p-0 text-blue-600 dark:text-blue-400 font-medium"
         >
            Learn More
         </Button>
      </motion.div>
   );
}

export default ServicesSection;
