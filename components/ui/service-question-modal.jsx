"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";
import { cn } from "@/lib/utils";

const formSchema = z.object({
   firstName: z.string().min(2, "First name must be at least 2 characters"),
   lastName: z.string().min(2, "Last name must be at least 2 characters"),
   email: z.string().email("Please enter a valid email address"),
   phone: z.string().min(10, "Please enter a valid phone number"),
   address: z.string().optional(),
   city: z.string().optional(),
   state: z.string().optional(),
   zip: z.string().optional(),
});

export default function ServiceQuestionModal({
   questions,
   isOpen,
   onClose,
   serviceTitle,
}) {
   const [step, setStep] = useState(0);
   const [answers, setAnswers] = useState({});
   const [formData, setFormData] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [errors, setErrors] = useState({});

   if (!isOpen) return null;

   const currentQuestion = questions?.[step];
   const totalSteps = questions?.length || 0;
   const progress = ((step + 1) / totalSteps) * 100;

   const handleOptionSelect = (option) => {
      setAnswers((prev) => ({ ...prev, [step]: option }));
      setTimeout(() => {
         if (step < totalSteps - 1) {
            setStep(step + 1);
         }
      }, 300);
   };

   const handleTextInput = (value) => {
      setAnswers((prev) => ({ ...prev, [step]: value }));
   };

   const handleFormInput = (e) => {
      setFormData((prev) => ({
         ...prev,
         [e.target.name]: e.target.value,
      }));
   };

   const validateForm = () => {
      try {
         formSchema.parse(formData);
         setErrors({});
         return true;
      } catch (error) {
         const formattedErrors = {};
         error.errors.forEach((err) => {
            formattedErrors[err.path[0]] = err.message;
         });
         setErrors(formattedErrors);
         return false;
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) {
         toast.error("Please fix the form errors before submitting");
         return;
      }

      setIsSubmitting(true);
      const toastId = toast.loading("Submitting your form...");

      try {
         // Format answers into a clean structure
         const formattedAnswers = Object.entries(answers).reduce(
            (acc, [index, answer]) => {
               const question = questions[parseInt(index)];
               if (question) {
                  acc[question.question] = answer;
               }
               return acc;
            },
            {}
         );

         const formPayload = {
            service: serviceTitle || "Service Form",
            userDetails: formData,
            questionsAndAnswers: formattedAnswers,
         };

         const response = await fetch("/api/service-form", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formPayload),
         });

         const data = await response.json();

         if (!response.ok) {
            throw new Error(data.error || "Failed to submit form");
         }

         toast.success("Form submitted successfully!", {
            id: toastId,
            duration: 4000,
         });

         onClose();
         setStep(0);
         setAnswers({});
         setFormData({});
      } catch (error) {
         console.error("Form submission error:", error);
         toast.error(
            error.message || "Failed to submit form. Please try again.",
            {
               id: toastId,
               duration: 4000,
            }
         );
      } finally {
         setIsSubmitting(false);
      }
   };

   const goBack = () => {
      if (step > 0) {
         setStep(step - 1);
      }
   };

   const renderFormField = (field) => (
      <div key={field.name} className="space-y-2">
         <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
         </label>
         <Input
            type={field.type}
            name={field.name}
            required={field.required}
            value={formData[field.name] || ""}
            onChange={handleFormInput}
            className={cn(
               "w-full",
               errors[field.name] && "border-red-500 focus:ring-red-500"
            )}
         />
         {errors[field.name] && (
            <p className="text-sm text-red-500 mt-1">{errors[field.name]}</p>
         )}
      </div>
   );

   return (
      <div className="fixed inset-0 bg-black/50 flex items-start sm:items-center justify-center z-50 p-4 backdrop-blur-sm overflow-y-auto">
         <div className="bg-white dark:bg-gray-900 rounded-xl max-w-md w-full my-8 relative animate-in slide-in-from-bottom-4">
            <div className="sticky top-0 right-0 px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 rounded-t-xl flex items-center justify-between">
               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {serviceTitle}
               </h3>
               <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                  aria-label="Close modal"
               >
                  <X className="h-4 w-4" />
               </button>
            </div>

            <div className="px-6 pt-4">
               <div className="relative h-1 w-full bg-gray-200 rounded-full mb-4">
                  <div
                     className="absolute h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
                     style={{ width: `${progress}%` }}
                  />
               </div>
               <div className="text-sm text-gray-500 mb-2">
                  Step {step + 1} of {totalSteps}
               </div>
            </div>
            <div className="px-6 pb-6 max-h-[calc(100vh-12rem)] overflow-y-auto">
               {currentQuestion?.type === "single" && (
                  <div className="space-y-4">
                     <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {currentQuestion.question}
                     </p>
                     {currentQuestion.options.map((option, idx) => (
                        <Button
                           key={idx}
                           variant="outline"
                           className="w-full justify-start text-left hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                           onClick={() => handleOptionSelect(option)}
                        >
                           {option}
                        </Button>
                     ))}
                  </div>
               )}

               {currentQuestion?.type === "text" && (
                  <div className="space-y-4">
                     <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {currentQuestion.question}
                     </p>
                     <Textarea
                        value={answers[step] || ""}
                        onChange={(e) => handleTextInput(e.target.value)}
                        className="w-full min-h-[120px]"
                        placeholder="Type your answer here..."
                     />
                     <Button
                        onClick={() => setStep(step + 1)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                     >
                        Continue
                     </Button>
                  </div>
               )}

               {currentQuestion?.type === "form" && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                     {currentQuestion.fields.map(renderFormField)}

                     <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 italic">
                        {currentQuestion.disclaimer}
                     </p>

                     <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6"
                        disabled={isSubmitting}
                     >
                        {isSubmitting ? "Submitting..." : "Submit"}
                     </Button>
                  </form>
               )}
            </div>

            {step > 0 && currentQuestion?.type !== "form" && (
               <div className="sticky bottom-0 px-6 py-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 rounded-b-xl">
                  <Button
                     variant="outline"
                     size="sm"
                     onClick={goBack}
                     className="text-sm"
                  >
                     ← Back
                  </Button>
               </div>
            )}
         </div>
      </div>
   );
}
