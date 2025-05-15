"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const formSchema = z.object({
   fullName: z
      .string()
      .min(2, { message: "Full name must be at least 2 characters" }),
   email: z.string().email({ message: "Please enter a valid email address" }),
   phone: z.string().min(10, { message: "Please enter a valid phone number" }),
   service: z.string().min(1, { message: "Please select a service" }),
   message: z
      .string()
      .min(10, { message: "Message must be at least 10 characters" }),
   consent: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms to continue",
   }),
});

const services = [
   { value: "personal-injury", label: "Personal Injury Claims" },
   { value: "mass-tort", label: "Mass Tort Litigation" },
   { value: "product-liability", label: "Product Liability" },
   { value: "environmental", label: "Environmental Law" },
   { value: "medical-malpractice", label: "Medical Malpractice" },
   { value: "consumer-protection", label: "Consumer Protection" },
];

export default function ContactForm() {
   const [isSubmitting, setIsSubmitting] = useState(false);

   const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
         fullName: "",
         email: "",
         phone: "",
         service: "",
         message: "",
         consent: false,
      },
   });

   const onSubmit = async (data) => {
      setIsSubmitting(true);

      try {
         // Get TrustedForm certificate URL
         const certUrl =
            document.getElementById("xxTrustedFormCertUrl")?.value || "";

         const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               ...data,
               trustedFormCertificateUrl: certUrl,
            }),
         });

         if (!response.ok) {
            throw new Error("Failed to submit form");
         }

         toast.success("Form submitted successfully!", {
            description: "We'll be in touch with you shortly.",
            duration: 5000,
         });

         form.reset();
      } catch (error) {
         console.error(error);
         toast.error("Failed to submit form", {
            description: "Please try again later.",
         });
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
         {/* Hidden TrustedForm field */}
         <input
            type="hidden"
            id="xxTrustedFormCertUrl"
            name="xxTrustedFormCertUrl"
         />

         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
               <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                           <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                     control={form.control}
                     name="email"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Email</FormLabel>
                           <FormControl>
                              <Input
                                 type="email"
                                 placeholder="john@example.com"
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="phone"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Phone</FormLabel>
                           <FormControl>
                              <Input placeholder="(123) 456-7890" {...field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </div>

               <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Service</FormLabel>
                        <Select
                           onValueChange={field.onChange}
                           defaultValue={field.value}
                        >
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              {services.map((service) => (
                                 <SelectItem
                                    key={service.value}
                                    value={service.value}
                                 >
                                    {service.label}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                           <Textarea
                              placeholder="Please describe your case briefly..."
                              className="min-h-[120px]"
                              {...field}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                     <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                           <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                           />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                           <FormLabel className="text-xs">
                              By filling out the form, you are providing express
                              consent by electronic signature that you may be
                              contacted by telephone (via call and/or text
                              messages) and/or email for marketing purposes by
                              massclaimclaimcentre.com, its subsidiaries and
                              affiliates or an independent lawyer using the
                              phone number and/or email address you have
                              provided to massclaimcentre.com, even if your
                              phone number is listed on a Do Not Call Registry,
                              including state and federal lists. You further
                              agree that such contact may be made using an
                              automatic telephone dialing system and/or
                              prerecorded voice (message and data rates may
                              apply). Your consent is not a condition of
                              purchase. By continuing, you agree to the terms of
                              the disclosures above.
                           </FormLabel>
                           <FormMessage />
                        </div>
                     </FormItem>
                  )}
               />

               <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                     <span className="flex items-center">
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
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                           ></path>
                        </svg>
                        Submitting...
                     </span>
                  ) : (
                     <span className="flex items-center">
                        Submit <Send className="ml-2 h-5 w-5" />
                     </span>
                  )}
               </Button>
            </form>
         </Form>
      </div>
   );
}
