"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";

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

export default function ContactForm() {
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      consent: false,
   });

   // Function to wait for TrustedForm certificate URL
   const waitForCertificateUrl = async (maxAttempts = 10, interval = 500) => {
      for (let i = 0; i < maxAttempts; i++) {
         const tfField = document.getElementById("xxTrustedFormCertUrl");
         if (tfField && tfField.value) {
            return tfField.value;
         }
         await new Promise((resolve) => setTimeout(resolve, interval));
      }
      return "No certificate URL generated - timeout";
   };

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
         // Wait for certificate URL to be generated
         const currentCertUrl = await waitForCertificateUrl();
         console.log("TrustedForm Certificate URL:", currentCertUrl);

         const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               ...formData,
               certUrl: currentCertUrl,
            }),
         });

         const data = await response.json();

         if (!response.ok) {
            throw new Error(data.error);
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
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
         <form onSubmit={handleSubmit} className="space-y-6">
            {/* Hidden input field for TrustedForm */}
            <input
               type="hidden"
               name="xxTrustedFormCertUrl"
               id="xxTrustedFormCertUrl"
            />

            <div className="space-y-2">
               <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Full Name
               </label>
               <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
               />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">
                     Email
                  </label>
                  <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     placeholder="john@example.com"
                     required
                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
               </div>

               <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">
                     Phone
                  </label>
                  <input
                     type="tel"
                     name="phone"
                     value={formData.phone}
                     onChange={handleChange}
                     placeholder="(123) 456-7890"
                     required
                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
               </div>
            </div>

            <div className="space-y-2">
               <label className="text-sm font-medium leading-none">
                  Service
               </label>
               <div className="relative">
                  <select
                     name="service"
                     value={formData.service}
                     onChange={(e) => handleServiceChange(e.target.value)}
                     required
                     className="appearance-none w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-gray-900 dark:text-gray-100 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                     <option value="" disabled>
                        Select a service
                     </option>
                     {services.map((service) => (
                        <option
                           key={service.value}
                           value={service.value}
                           className="py-2"
                        >
                           {service.label}
                        </option>
                     ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                     <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                     </svg>
                  </div>
               </div>
            </div>

            <div className="space-y-2">
               <label className="text-sm font-medium leading-none">
                  Message
               </label>
               <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your case..."
                  required
                  rows={5}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
               />
            </div>

            <div className="flex items-center space-x-2">
               <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
               />
               <label
                  htmlFor="consent"
                  className="text-sm text-gray-700 dark:text-gray-300"
               >
                  By filling out the form, you are providing express consent by
                  electronic signature that you may be contacted by telephone
                  (via call and/or text messages) and/or email for marketing
                  purposes by massclaimclaimcentre.com, its subsidiaries and
                  affiliates or an independent lawyer using the phone number
                  and/or email address you have provided to massclaimcentre.com,
                  even if your phone number is listed on a Do Not Call Registry,
                  including state and federal lists. You further agree that such
                  contact may be made using an automatic telephone dialing
                  system and/or prerecorded voice (message and data rates may
                  apply). Your consent is not a condition of purchase. By
                  continuing, you agree to the terms of the disclosures above.
               </label>
            </div>

            <button
               type="submit"
               disabled={isSubmitting}
               className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
               {isSubmitting ? (
                  <>
                     <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                     </svg>
                     Sending...
                  </>
               ) : (
                  <>
                     <Send className="mr-2 h-4 w-4" />
                     Send Message
                  </>
               )}
            </button>
         </form>
      </div>
   );
}
