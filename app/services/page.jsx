import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const services = [
   {
      id: 1,
      title: "Hair Relaxer Lawsuits",
      icon: "💇‍♀️",
      iconBg: "#e0f7fa",
      iconColor: "#ffffff",
      description:
         "Lawsuits against hair relaxer manufacturers, alleging toxic chemicals caused cancers like uterine or ovarian cancer.",
      cases: [
         "Personal injury from uterine cancer",
         "Ovarian cancer due to chemical exposure",
         "Failure to warn about toxic ingredients",
         "Product liability for defective relaxers",
         "Wrongful death from cancer-related complications",
      ],
   },
   {
      id: 2,
      title: "Rideshare Accidents",
      icon: "🚗",
      iconBg: "#ffebee",
      iconColor: "#ffffff",
      description:
         "Claims involving rideshare services like Uber or Lyft for accidents, injuries, or company negligence.",
      cases: [
         "Passenger injury from driver negligence",
         "Pedestrian accidents involving rideshare vehicles",
         "Third-party collision claims",
         "Company liability for poor driver screening",
         "Wrongful death in rideshare crashes",
      ],
   },
   {
      id: 3,
      title: "Necrotizing Enterocolitis (NEC) Lawsuits",
      icon: "🍼",
      iconBg: "#f3e5f5",
      iconColor: "#ffffff",
      description:
         "Lawsuits against baby formula manufacturers, claiming formulas caused necrotizing enterocolitis in premature infants.",
      cases: [
         "Product liability for harmful formula",
         "Failure to warn about NEC risks",
         "Wrongful death from infant fatalities",
         "Medical expense claims for NICU care",
         "Negligence in formula marketing",
      ],
   },
   {
      id: 4,
      title: "AFFF Firefighting Foam Lawsuits",
      icon: "🧯",
      iconBg: "#e8f5e9",
      iconColor: "#ffffff",
      description:
         "Claims against AFFF manufacturers, alleging PFAS chemicals caused cancer or environmental harm.",
      cases: [
         "Cancer from PFAS exposure",
         "Environmental contamination claims",
         "Firefighter occupational cancer lawsuits",
         "Property damage from PFAS pollution",
         "Health monitoring for exposed communities",
      ],
   },
   {
      id: 5,
      title: "Paraquat Herbicide Lawsuits",
      icon: "🌾",
      iconBg: "#fff3e0",
      iconColor: "#ffffff",
      description:
         "Lawsuits linking Paraquat exposure to Parkinson’s disease, targeting manufacturers for inadequate warnings.",
      cases: [
         "Parkinson’s disease from herbicide exposure",
         "Failure to disclose health risks",
         "Wrongful death from Paraquat illness",
         "Agricultural worker injury claims",
         "Environmental exposure lawsuits",
      ],
   },
   {
      id: 6,
      title: "LDS Church Lawsuits",
      icon: "⛪",
      iconBg: "#e0f2f1",
      iconColor: "#ffffff",
      description:
         "Legal actions against the LDS Church, often involving sexual abuse cover-ups or financial misconduct.",
      cases: [
         "Clergy sexual abuse claims",
         "Institutional cover-up of abuse",
         "Financial fraud in tithing practices",
         "Child protection policy violations",
         "Emotional distress from abuse handling",
      ],
   },
   {
      id: 7,
      title: "Video Game Addiction Lawsuits",
      icon: "🎮",
      iconBg: "#fce4ec",
      iconColor: "#ffffff",
      description:
         "Claims against gaming companies for addictive game designs causing psychological or financial harm.",
      cases: [
         "Mental health damages from addiction",
         "Negligence in addictive game mechanics",
         "Underage spending on in-game purchases",
         "Loss of productivity lawsuits",
         "Parental claims for child neglect",
      ],
   },
   {
      id: 8,
      title: "Roundup Weedkiller Lawsuits",
      icon: "🌿",
      iconBg: "#f1f8e9",
      iconColor: "#ffffff",
      description:
         "Lawsuits against Monsanto, claiming Roundup’s glyphosate caused cancers like non-Hodgkin’s lymphoma.",
      cases: [
         "Non-Hodgkin’s lymphoma from glyphosate",
         "Failure to warn about cancer risks",
         "Agricultural worker cancer claims",
         "Environmental exposure lawsuits",
         "Wrongful death from cancer",
      ],
   },
   {
      id: 9,
      title: "Talcum Powder Lawsuits",
      icon: "🧴",
      iconBg: "#e3f2fd",
      iconColor: "#ffffff",
      description:
         "Claims against talcum powder manufacturers, alleging asbestos contamination caused ovarian cancer or mesothelioma.",
      cases: [
         "Ovarian cancer from talc use",
         "Mesothelioma due to asbestos",
         "Product liability for unsafe talc",
         "Failure to warn about asbestos risks",
         "Wrongful death from cancer",
      ],
   },
   {
      id: 10,
      title: "Maryland Juvenile Detention Lawsuits",
      icon: "⚖️",
      iconBg: "#fff8e1",
      iconColor: "#ffffff",
      description:
         "Lawsuits addressing abuse, neglect, or unconstitutional conditions in Maryland juvenile detention facilities.",
      cases: [
         "Physical abuse by facility staff",
         "Neglect leading to health issues",
         "Unconstitutional detention conditions",
         "Sexual abuse in detention centers",
         "Wrongful injury during confinement",
      ],
   },
   {
      id: 11,
      title: "Illinois Sexual Abuse Lawsuits",
      icon: "⚖️",
      iconBg: "#e0f7fa",
      iconColor: "#ffffff",
      description:
         "Claims involving sexual abuse in Illinois, often targeting institutions for enabling or covering up abuse.",
      cases: [
         "Child sexual abuse by clergy",
         "Institutional cover-up of abuse",
         "School or camp abuse claims",
         "Emotional distress from abuse",
         "Failure to protect vulnerable individuals",
      ],
   },
   {
      id: 12,
      title: "Tylenol (Acetaminophen) Lawsuits",
      icon: "💊",
      iconBg: "#ffebee",
      iconColor: "#ffffff",
      description:
         "Lawsuits claiming Tylenol use during pregnancy caused autism or ADHD in children.",
      cases: [
         "Autism linked to prenatal Tylenol use",
         "ADHD from acetaminophen exposure",
         "Failure to warn about developmental risks",
         "Product liability for unsafe labeling",
         "Medical expense claims for child care",
      ],
   },
   {
      id: 13,
      title: "Car Accident Lawsuits",
      icon: "🚘",
      iconBg: "#f3e5f5",
      iconColor: "#ffffff",
      description:
         "Legal claims for injuries or damages from car accidents, targeting negligent drivers or manufacturers.",
      cases: [
         "Personal injury from reckless driving",
         "Wrongful death in car crashes",
         "Vehicle defect liability",
         "DUI-related accident claims",
         "Pedestrian injury lawsuits",
      ],
   },
   {
      id: 14,
      title: "Zantac Lawsuits",
      icon: "💊",
      iconBg: "#e8f5e9",
      iconColor: "#ffffff",
      description:
         "Lawsuits claiming Zantac’s ranitidine caused cancers due to NDMA contamination.",
      cases: [
         "Cancer from NDMA exposure",
         "Failure to warn about contamination",
         "Product liability for defective drugs",
         "Wrongful death from cancer",
         "Health monitoring for exposed users",
      ],
   },
   {
      id: 15,
      title: "Ozempic Lawsuits",
      icon: "💉",
      iconBg: "#fff3e0",
      iconColor: "#ffffff",
      description:
         "Claims against Ozempic manufacturers for severe side effects like gastroparesis or gallbladder issues.",
      cases: [
         "Gastroparesis from Ozempic use",
         "Gallbladder injury claims",
         "Failure to warn about side effects",
         "Product liability for unsafe drugs",
         "Medical expense lawsuits",
      ],
   },
   {
      id: 16,
      title: "Depo-Provera Lawsuits",
      icon: "💉",
      iconBg: "#e0f2f1",
      iconColor: "#ffffff",
      description:
         "Lawsuits alleging Depo-Provera caused brain tumors or other severe health issues.",
      cases: [
         "Brain tumor from Depo-Provera use",
         "Failure to warn about tumor risks",
         "Product liability for unsafe contraceptives",
         "Wrongful death from complications",
         "Health monitoring for long-term users",
      ],
   },
   {
      id: 17,
      title: "Mesothelioma Lawsuits",
      icon: "⚖️",
      iconBg: "#fce4ec",
      iconColor: "#ffffff",
      description:
         "Claims against companies for asbestos exposure causing mesothelioma, a rare cancer.",
      cases: [
         "Mesothelioma from workplace asbestos",
         "Environmental asbestos exposure",
         "Failure to provide safety warnings",
         "Wrongful death from mesothelioma",
         "Product liability for asbestos products",
      ],
   },
   {
      id: 18,
      title: "Los Angeles Wildfire Lawsuits",
      icon: "🔥",
      iconBg: "#f1f8e9",
      iconColor: "#ffffff",
      description:
         "Lawsuits against utilities or entities for wildfires in LA causing property damage or injuries.",
      cases: [
         "Property damage from wildfires",
         "Personal injury from fire exposure",
         "Negligence in utility maintenance",
         "Wrongful death in wildfires",
         "Environmental damage claims",
      ],
   },
];

export default function ServicesPage() {
   return (
      <>
         {/* Hero Section */}
         <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 pt-24 pb-16 overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[url('/patterns/circuit-board.svg')] bg-cover bg-center" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center max-w-4xl mx-auto text-white">
                  <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                     Our Legal Services
                  </h1>
                  <p className="text-lg sm:text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                     Comprehensive legal representation for victims of corporate
                     wrongdoing.
                  </p>
               </div>
            </div>
         </section>

         {/* Services Section */}
         <section className="py-16 bg-gray-50 dark:bg-gray-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-3xl mx-auto text-center mb-12">
                  <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                     How We Help
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                     Mass Claim Center provides expert legal services to
                     individuals harmed by corporate negligence. Our attorneys
                     secure maximum compensation across various practice areas.
                  </p>
               </div>

               <div className="space-y-16">
                  {services.map((service, index) => (
                     <div
                        key={service.id}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center border border-gray-200 dark:border-gray-700 p-2 rounded-lg"
                     >
                        <div className="relative order-1 lg:order-none">
                           <Image
                              src={`https://placehold.co/600x400?text=${encodeURIComponent(
                                 service.title
                              )}`}
                              alt={service.title}
                              width={600}
                              height={400}
                              className="rounded-xl shadow-lg object-cover w-full h-64 sm:h-80 lg:h-96 transition-transform duration-300 hover:scale-[1.02]"
                              loading="lazy"
                           />
                        </div>

                        <div className="space-y-4 order-2">
                           <div className="flex items-center gap-4">
                              <div
                                 className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${service.iconBg} flex items-center justify-center text-xl sm:text-2xl shrink-0`}
                              >
                                 <span className={service.iconColor}>
                                    {service.icon}
                                 </span>
                              </div>
                              <h3 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-bold">
                                 {service.title}
                              </h3>
                           </div>

                           <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                              {service.description}
                           </p>

                           <div>
                              <h4 className="font-semibold text-base sm:text-lg mb-2">
                                 Types of Cases We Handle:
                              </h4>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                 {service.cases.map((caseItem, caseIndex) => (
                                    <li
                                       key={caseIndex}
                                       className="flex items-start text-sm sm:text-base"
                                    >
                                       <span className="text-blue-600 dark:text-blue-400 mr-2">
                                          •
                                       </span>
                                       <span>{caseItem}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>

                           <Button
                              asChild
                              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                              aria-label={`Discuss your ${service.title} case`}
                           >
                              <Link href="/contact">
                                 Discuss Your Case{" "}
                                 <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                           </Button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Process Section */}
         <section className="py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               {/* Header Section */}
               <div className="max-w-3xl mx-auto text-center mb-12">
                  <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                     Our Legal Process
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                     We guide you through every step of your legal journey, from
                     consultation to resolution.
                  </p>
               </div>

               {/* Process Timeline */}
               <div className="max-w-6xl mx-auto relative">
                  {/* Blue Line: Left for small screens, center for large screens */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900/50" />

                  <div className="space-y-12 md:space-y-16">
                     {[
                        {
                           title: "Free Consultation",
                           description:
                              "We evaluate your case and explain your legal options during a comprehensive consultation.",
                        },
                        {
                           title: "Case Investigation",
                           description:
                              "Our team gathers evidence, interviews witnesses, and consults experts to build a strong case.",
                        },
                        {
                           title: "Legal Strategy Development",
                           description:
                              "We develop a tailored strategy to maximize your compensation and achieve the best outcome.",
                        },
                        {
                           title: "Negotiation & Settlement",
                           description:
                              "We negotiate with the opposing party to secure a fair settlement for your damages.",
                        },
                        {
                           title: "Trial Representation",
                           description:
                              "Our trial attorneys provide powerful courtroom representation if a settlement isn’t reached.",
                        },
                        {
                           title: "Case Resolution & Recovery",
                           description:
                              "We ensure prompt compensation and address post-settlement matters upon case resolution.",
                        },
                     ].map((step, index) => (
                        <div
                           key={index}
                           className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 ${
                              index % 2 === 0
                                 ? "md:flex-row"
                                 : "md:flex-row-reverse"
                           }`}
                        >
                           {/* Timeline Circle */}
                           <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold border-4 border-white dark:border-gray-900 z-10">
                              {index + 1}
                           </div>

                           {/* Content: Right for small screens, alternates for large screens */}
                           <div className="ml-16 md:ml-0 md:w-5/12 mt-4 md:mt-0">
                              <div
                                 className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                                    index % 2 === 0
                                       ? "md:text-left"
                                       : "md:text-right"
                                 }`}
                              >
                                 <h3 className="font-playfair text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                                    {step.title}
                                 </h3>
                                 <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                                    {step.description}
                                 </p>
                              </div>
                           </div>

                           {/* Empty space for alternating layout on large screens */}
                           <div className="hidden md:block md:w-5/12" />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-3xl mx-auto text-center">
                  <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                     Ready to Discuss Your Case?
                  </h2>
                  <p className="text-lg sm:text-xl text-blue-100 mb-6">
                     Contact Mass Claim Center for a free, no-obligation
                     consultation with our legal experts.
                  </p>
                  <Button
                     asChild
                     size="lg"
                     className="bg-white text-blue-900 hover:bg-blue-100 transition-colors"
                     aria-label="Get a free consultation"
                  >
                     <Link href="/contact">
                        Get a Free Consultation{" "}
                        <ArrowRight className="ml-2 h-5 w-5" />
                     </Link>
                  </Button>
               </div>
            </div>
         </section>
      </>
   );
}
