import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";

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
                              <Link href={`/services/${service.slug}`}>
                                 Apply Now{" "}
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
