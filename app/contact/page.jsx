import ContactForm from "@/components/sections/contact-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Script from "next/script";

export default function ContactPage() {
   return (
      <>
         <section className="pt-32 pb-20 relative bg-gradient-to-r from-blue-900 to-indigo-900">
            <div className="absolute inset-0 opacity-10 bg-[url('/patterns/circuit-board.svg')]"></div>
            <div className="container mx-auto px-4 md:px-6 relative">
               <div className="text-center max-w-3xl mx-auto text-white">
                  <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                     Get In Touch
                  </h1>
                  <p className="text-xl text-blue-100 mb-8">
                     We're here to listen and help. Contact us today for a free
                     consultation about your case.
                  </p>
               </div>
            </div>
         </section>

         <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {/* Contact Form */}
                  <div className="lg:col-span-2">
                     <h2 className="font-playfair text-3xl font-bold mb-8">
                        Send Us a Message
                     </h2>
                     <ContactForm />
                  </div>

                  {/* Contact Information */}
                  <div>
                     <h2 className="font-playfair text-3xl font-bold mb-8">
                        Contact Information
                     </h2>
                     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                        <div className="space-y-6">
                           <div className="flex items-start">
                              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                                 <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                 <h3 className="font-bold text-lg mb-2">
                                    Our Office
                                 </h3>
                                 <p className="text-gray-600 dark:text-gray-300">
                                    123 Legal Avenue, Suite 789
                                    <br />
                                    Boston, MA 02108
                                 </p>
                              </div>
                           </div>

                           <div className="flex items-start">
                              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                                 <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                 <h3 className="font-bold text-lg mb-2">
                                    Phone
                                 </h3>
                                 <p className="text-gray-600 dark:text-gray-300">
                                    <a href="tel:4152510104">415-251-0104</a>
                                 </p>
                              </div>
                           </div>

                           <div className="flex items-start">
                              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                                 <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                 <h3 className="font-bold text-lg mb-2">
                                    Email
                                 </h3>
                                 <p className="text-gray-600 dark:text-gray-300">
                                    info@massclaimcenter.com
                                    <br />
                                    support@massclaimcenter.com
                                 </p>
                              </div>
                           </div>

                           <div className="flex items-start">
                              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                                 <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                 <h3 className="font-bold text-lg mb-2">
                                    Hours
                                 </h3>
                                 <p className="text-gray-600 dark:text-gray-300">
                                    Monday - Friday: 9AM - 5PM
                                    <br />
                                    Saturday: 10AM - 2PM
                                    <br />
                                    Sunday: Closed
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Map Section */}
         <section className="py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
               <h2 className="font-playfair text-3xl font-bold mb-8 text-center">
                  Our Location
               </h2>
               <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.8242901932084!2d-71.0633456!3d42.35866799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370868bc2ce7b%3A0x82fa7db94f5fea9e!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1663252717115!5m2!1sen!2sus"
                     width="100%"
                     height="100%"
                     style={{ border: 0 }}
                     allowFullScreen=""
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
               </div>
            </div>
         </section>
      </>
   );
}
