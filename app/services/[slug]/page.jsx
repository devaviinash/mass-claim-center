import { services } from "@/lib/services";
import ServiceForm from "@/components/services/ServiceForm";
import { Shield, Scale, BadgeCheck } from "lucide-react";

export async function generateStaticParams() {
   return services.map((service) => ({ slug: service.slug }));
}

export default function ServiceDetailPage({ params }) {
   const service = services.find((s) => s.slug === params.slug);

   if (!service) {
      return (
         <div className="container mx-auto px-4 py-24 text-center">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <p className="mb-8">
               The service you are looking for does not exist.
            </p>
            <a href="/services" className="text-blue-600 hover:underline">
               Back to Services
            </a>
         </div>
      );
   }

   const trustIndicators = [
      {
         icon: <Shield className="w-6 h-6" />,
         title: "100% Confidential",
         description: "Your information is protected and secure",
      },
      {
         icon: <Scale className="w-6 h-6" />,
         title: "Free Case Evaluation",
         description: "No fees unless we win your case",
      },
      {
         icon: <BadgeCheck className="w-6 h-6" />,
         title: "Experienced Attorneys",
         description: "Working with top legal professionals",
      },
   ];

   return (
      <>
         {/* Hero Section */}
         <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 pt-32 pb-20">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
            <div className="container mx-auto px-4 relative">
               <div className="max-w-3xl mx-auto text-center">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
                     {service.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                     We understand how challenging this situation can be. Our
                     team is here to help you get the compensation you deserve.
                  </p>
               </div>
            </div>
         </section>

         {/* Form Section - Prioritized */}
         <section className="relative -mt-10 px-4 mx-auto container">
            <div className="max-w-3xl mx-auto">
               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
                  <div className="mb-8">
                     <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Start Your Claim Assessment
                     </h2>
                     <p className="text-gray-600 dark:text-gray-300">
                        Fill out the form below to begin your free case
                        evaluation. Our team will review your information and
                        contact you promptly.
                     </p>
                  </div>
                  <ServiceForm service={service} />
               </div>
            </div>
         </section>

         {/* Trust Indicators Section */}
         <section className="py-16 px-4">
            <div className="container mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {trustIndicators.map((indicator, idx) => (
                     <div
                        key={idx}
                        className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 transition-transform hover:scale-[1.02]"
                     >
                        <div className="flex items-start space-x-4">
                           <div className="flex-shrink-0 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                              {indicator.icon}
                           </div>
                           <div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                 {indicator.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400 mt-2">
                                 {indicator.description}
                              </p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Case Types Section */}
         <section className="py-16 bg-gray-50 dark:bg-gray-900/50 px-4">
            <div className="container mx-auto max-w-4xl">
               <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                  Types of Cases We Handle
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.cases.map((caseType, idx) => (
                     <div
                        key={idx}
                        className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                     >
                        <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                        <span className="text-gray-700 dark:text-gray-300">
                           {caseType}
                        </span>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Bottom CTA Section */}
         <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white px-4">
            <div className="container mx-auto max-w-3xl text-center">
               <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Don't Wait to Seek Justice
               </h2>
               <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  Time limitations may affect your right to file a claim.
                  Contact us today for a free, confidential consultation.
               </p>
               <p className="text-sm text-gray-400 max-w-xl mx-auto">
                  By submitting this form, you agree to our terms of service and
                  privacy policy. All information submitted will be kept
                  strictly confidential.
               </p>
            </div>
         </section>
      </>
   );
}
