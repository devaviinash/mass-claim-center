"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Script from "next/script";

const services = [
   { value: "depo-provera", label: "Depo Provera" },
   { value: "round-up", label: "Round Up" },
   { value: "talcum", label: "Talcum" },
   { value: "nec", label: "NEC" },
   { value: "lds-lawsuit", label: "LDS Lawsuit" },
   { value: "hair-relaxer", label: "Hair Relaxer" },
   { value: "rideshare", label: "Rideshare" },
   { value: "afff", label: "AFFF" },
   { value: "paraquat", label: "Paraquat" },
   { value: "video-game-addiction", label: "Video Game Addiction" },
   { value: "md-juvenile-detention", label: "MD Juvenile Detention" },
   { value: "il-sex-abuse", label: "IL Sex Abuse" },
   { value: "tylenol-apap", label: "Tylenol/APAP" },
   { value: "car-accident-law", label: "Car Accident Law" },
   { value: "zantac", label: "Zantac" },
   { value: "ozempic", label: "Ozempic" },
   { value: "mesothelioma", label: "Mesothelioma" },
   { value: "la-wildfire", label: "LA Wildfire" },
];

export default function ContactPage() {
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      consent: false,
   });

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: type === "checkbox" ? checked : value,
      }));
   };

   const handleServiceChange = (value) => {
      setFormData((prev) => ({
         ...prev,
         service: value,
      }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
         const certUrl = document.querySelector(
            '[name="xxTrustedFormCertUrl"]'
         )?.value;
         console.log("Form data being sent:", { ...formData, certUrl }); // Debug log

         const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               ...formData,
               certUrl: certUrl || "No certificate URL generated",
            }),
         });

         const data = await response.json();
         console.log("Response received:", data); // Debug log

         if (!response.ok) {
            throw new Error(data.error || "Failed to submit form");
         }

         toast.success("Form submitted successfully!", {
            description: "We'll be in touch with you shortly.",
            duration: 5000,
         });

         setFormData({
            fullName: "",
            email: "",
            phone: "",
            service: "",
            message: "",
            consent: false,
         });
      } catch (error) {
         console.error("Form submission error:", error);
         toast.error(
            error.message || "Failed to submit form. Please try again."
         );
      } finally {
         setIsSubmitting(false);
      }
   };

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
                  {/* Contact Form Section */}
                  <div className="lg:col-span-2">
                     <h2 className="font-playfair text-3xl font-bold mb-8">
                        Send Us a Message
                     </h2>
                     <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                        <input
                           type="hidden"
                           id="xxTrustedFormCertUrl"
                           name="xxTrustedFormCertUrl"
                        />

                        <form onSubmit={handleSubmit} className="space-y-6">
                           <div>
                              <label
                                 htmlFor="fullName"
                                 className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                              >
                                 Full Name
                              </label>
                              <div className="mt-1">
                                 <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                                 />
                              </div>
                           </div>

                           <div>
                              <label
                                 htmlFor="email"
                                 className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                              >
                                 Email
                              </label>
                              <div className="mt-1">
                                 <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                                 />
                              </div>
                           </div>

                           <div>
                              <label
                                 htmlFor="phone"
                                 className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                              >
                                 Phone
                              </label>
                              <div className="mt-1">
                                 <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                                 />
                              </div>
                           </div>

                           <div>
                              <label
                                 htmlFor="service"
                                 className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                              >
                                 Service Interested In
                              </label>
                              <div className="mt-1">
                                 <select
                                    name="service"
                                    id="service"
                                    value={formData.service}
                                    onChange={(e) =>
                                       handleServiceChange(e.target.value)
                                    }
                                    required
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                                 >
                                    <option value="">Select a service</option>
                                    {services.map((service) => (
                                       <option
                                          key={service.value}
                                          value={service.value}
                                       >
                                          {service.label}
                                       </option>
                                    ))}
                                 </select>
                              </div>
                           </div>

                           <div>
                              <label
                                 htmlFor="message"
                                 className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                              >
                                 Message
                              </label>
                              <div className="mt-1">
                                 <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                                 ></textarea>
                              </div>
                           </div>

                           <div className="flex items-start">
                              <div className="flex-shrink-0">
                                 <input
                                    id="consent"
                                    name="consent"
                                    type="checkbox"
                                    checked={formData.consent}
                                    onChange={handleChange}
                                    required
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                 />
                              </div>
                              <div className="ml-3">
                                 <label
                                    htmlFor="consent"
                                    className="text-xs font-bold text-gray-700 dark:text-gray-300"
                                 >
                                    By filling out the form, you are providing
                                    express consent by electronic signature that
                                    you may be contacted by telephone (via call
                                    and/or text messages) and/or email for
                                    marketing purposes by
                                    massclaimclaimcentre.com, its subsidiaries
                                    and affiliates or an independent lawyer
                                    using the phone number and/or email address
                                    you have provided to massclaimcentre.com,
                                    even if your phone number is listed on a Do
                                    Not Call Registry, including state and
                                    federal lists. You further agree that such
                                    contact may be made using an automatic
                                    telephone dialing system and/or prerecorded
                                    voice (message and data rates may apply).
                                    Your consent is not a condition of purchase.
                                    By continuing, you agree to the terms of the
                                    disclosures above.{" "}
                                 </label>
                              </div>
                           </div>

                           <div>
                              <button
                                 type="submit"
                                 disabled={isSubmitting}
                                 className="w-full flex justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition-all duration-200"
                              >
                                 {isSubmitting ? (
                                    <>
                                       <svg
                                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                       >
                                          <circle
                                             className="opacity-25"
                                             cx="12"
                                             cy="12"
                                             r="10"
                                             stroke="currentColor"
                                             strokeWidth="4"
                                          ></circle>
                                          <path
                                             className="opacity-75"
                                             fill="currentColor"
                                             d="M4 12a8 8 0 018-8v16a8 8 0 01-8-8z"
                                          ></path>
                                       </svg>
                                       Submitting...
                                    </>
                                 ) : (
                                    <>
                                       <Send className="w-5 h-5 mr-2" />
                                       Send Message
                                    </>
                                 )}
                              </button>
                           </div>
                        </form>
                     </div>
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
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6512706.758760305!2d-124.59202578920747!3d37.15192441099119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1747416208737!5m2!1sen!2sin"
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
