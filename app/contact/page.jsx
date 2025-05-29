"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Script from "next/script";
import ContactForm from "@/components/sections/contact-form";

export default function ContactPage() {
   return (
      <>
         <Script
            id="trustedform-script"
            src="https://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&ping_field=xxTrustedFormPingUrl&token_field=xxTrustedFormToken"
            strategy="afterInteractive"
         />
         <section className="pt-32 pb-20 relative bg-gradient-to-r from-blue-900 to-indigo-900">
            <div className="absolute inset-0 opacity-10 bg-[url('/patterns/circuit-board.svg')]"></div>
            <div className="container mx-auto px-4 md:px-6 relative">
               <div className="text-center max-w-3xl mx-auto text-white">
                  <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                     Get In Touch
                  </h1>
                  <p className="text-xl text-blue-100 mb-8">
                     We are here to listen and help. Contact us today for a free
                     consultation about your case.
                  </p>
               </div>
            </div>
         </section>

         <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {/* Contact Form Section */}
                  <div className="lg:col-span-2">
                     <h2 className="font-playfair text-3xl font-bold mb-8">
                        Send Us a Message
                     </h2>
                     <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                        <ContactForm />
                     </div>
                  </div>

                  {/* Contact Information Section */}
                  <div className="space-y-8">
                     <div>
                        <h3 className="font-playfair text-2xl font-bold mb-4">
                           Contact Information
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                           Reach out to us through any of the following methods:
                        </p>
                        <ul className="space-y-4">
                           <li className="flex items-start">
                              <Mail className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                              <div>
                                 <h4 className="font-semibold text-gray-800 dark:text-white">
                                    Email Us
                                 </h4>
                                 <a
                                    href="mailto:info@massclaimcenter.com"
                                    className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
                                 >
                                    info@massclaimcenter.com
                                 </a>
                                 <br />
                                 <a
                                    href="mailto:info@massclaimcenter.com"
                                    className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
                                 >
                                    support@massclaimcenter.com
                                 </a>
                              </div>
                           </li>
                           <li className="flex items-start">
                              <Phone className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                              <div>
                                 <h4 className="font-semibold text-gray-800 dark:text-white">
                                    Call Us
                                 </h4>
                                 <a
                                    href="tel:+18001234567"
                                    className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
                                 >
                                    415-251-0104
                                 </a>
                              </div>
                           </li>
                           <li className="flex items-start">
                              <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                              <div>
                                 <h4 className="font-semibold text-gray-800 dark:text-white">
                                    Visit Us
                                 </h4>
                                 <p className="text-gray-600 dark:text-gray-300">
                                    123 Legal Avenue, Suite 789
                                    <br />
                                    Boston, MA 02108
                                 </p>
                              </div>
                           </li>
                        </ul>
                     </div>
                     <div>
                        <h3 className="font-playfair text-2xl font-bold mb-4">
                           Business Hours
                        </h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                           <li className="flex items-center">
                              <Clock className="h-5 w-5 text-blue-600 mr-2" />
                              <span>Monday - Friday: 9:00 AM - 5:00 PM</span>
                           </li>
                           <li className="flex items-center">
                              <Clock className="h-5 w-5 text-blue-600 mr-2" />
                              <span>Saturday: 10:00 AM - 02:00 PM</span>
                           </li>
                           <li className="flex items-center">
                              <Clock className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-2" />
                              <span>Sunday: Closed</span>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Google Maps Section */}
         <section className="py-12 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-6">
               <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6512706.758760306!2d-124.59202578920747!3d37.15192441099118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1748534806914!5m2!1sen!2sin"
                     width="100%"
                     height="450"
                     style={{ border: 0 }}
                     allowFullScreen=""
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     className="w-full"
                     title="Location Map"
                  />
               </div>
            </div>
         </section>
      </>
   );
}
