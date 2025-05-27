"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { questions } from "@/lib/questions";

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

export default function ServiceForm({ service }) {
   const serviceQuestions = questions[service.slug] || [];
   const [answers, setAnswers] = useState({});
   const [currentStep, setCurrentStep] = useState(0);
   const [isSubmitting, setIsSubmitting] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
      watch,
   } = useForm({
      resolver: zodResolver(formSchema),
      mode: "onChange",
   });

   const handleQuestionAnswer = (question, answer) => {
      setAnswers((prev) => ({
         ...prev,
         [question]: answer,
      }));
      if (currentStep < serviceQuestions.length - 1) {
         setCurrentStep(currentStep + 1);
      }
   };

   const handleTextAnswer = (e, question) => {
      e.preventDefault(); // Prevent any default form submission
      const value = e.target.value;
      setAnswers((prev) => ({
         ...prev,
         [question]: value,
      }));
   };

   const onSubmit = async (data) => {
      setIsSubmitting(true);
      try {
         // Format answers in a more structured way
         const formattedAnswers = Object.entries(answers)
            .map(
               ([question, answer]) =>
                  `${question}\n${"-".repeat(question.length)}\n${answer}\n`
            )
            .join("\n");

         // Format the user details in a clean way
         const formattedUserDetails = Object.entries(data)
            .map(([key, value]) => {
               const label =
                  key.charAt(0).toUpperCase() +
                  key.slice(1).replace(/([A-Z])/g, " $1");
               return `${label}: ${value}`;
            })
            .join("\n");

         const emailBody = `
📋 New Application Submission

Service Type: ${service.title}
Date: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}

👤 Applicant Information
${"-".repeat(30)}
${formattedUserDetails}

❓ Questionnaire Responses
${"-".repeat(30)}
${formattedAnswers}

This is an automated message. Please do not reply directly to this email.
`;

         const payload = {
            ...data,
            service: service.title,
            formattedContent: emailBody,
            _subject: `New ${service.title} Application | Mass Claim Center`,
         };

         const response = await fetch("https://formspree.io/f/mldbqgrr", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
         });

         if (!response.ok) throw new Error("Failed to submit form");

         toast.success("Form submitted successfully! We'll be in touch soon.");
         setAnswers({});
         setCurrentStep(0);
      } catch (error) {
         toast.error("Failed to submit form. Please try again.");
      } finally {
         setIsSubmitting(false);
      }
   };

   const currentQuestion = serviceQuestions[currentStep];
   const progress = ((currentStep + 1) / serviceQuestions.length) * 100;

   return (
      <div className="max-w-2xl mx-auto mt-8">
         <div className="relative h-2 w-full bg-gray-200 rounded-full mb-6">
            <div
               className="absolute h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
               style={{ width: `${progress}%` }}
            />
         </div>

         {currentQuestion?.type === "single" && (
            <div className="space-y-4">
               <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  {currentQuestion.question}
               </p>
               <div className="space-y-2">
                  {currentQuestion.options.map((option, idx) => (
                     <Button
                        key={idx}
                        type="button" // Explicitly set type to prevent form submission
                        variant="outline"
                        className="w-full justify-start text-left"
                        onClick={() =>
                           handleQuestionAnswer(
                              currentQuestion.question,
                              option
                           )
                        }
                     >
                        {option}
                     </Button>
                  ))}
               </div>
            </div>
         )}

         {currentQuestion?.type === "text" && (
            <div className="space-y-4">
               <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  {currentQuestion.question}
               </p>
               <Textarea
                  value={answers[currentQuestion.question] || ""}
                  onChange={(e) =>
                     handleTextAnswer(e, currentQuestion.question)
                  }
                  className="w-full min-h-[120px]"
                  placeholder="Type your answer here..."
               />
               <Button
                  type="button" // Explicitly set type to prevent form submission
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="w-full"
               >
                  Continue
               </Button>
            </div>
         )}

         {currentQuestion?.type === "form" && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
               {currentQuestion.fields.map((field) => (
                  <div key={field.name} className="space-y-2">
                     <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {field.label}
                        {field.required && (
                           <span className="text-red-500 ml-1">*</span>
                        )}
                     </label>
                     <Input
                        type={field.type}
                        {...register(field.name)}
                        className="w-full"
                     />
                     {errors[field.name] && (
                        <p className="text-sm text-red-500">
                           {errors[field.name].message}
                        </p>
                     )}
                  </div>
               ))}

               <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 italic">
                  {currentQuestion.disclaimer}
               </p>

               <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
               </Button>
            </form>
         )}

         {currentStep > 0 && currentQuestion?.type !== "form" && (
            <div className="mt-4">
               <Button
                  type="button" // Explicitly set type to prevent form submission
                  variant="outline"
                  onClick={() => setCurrentStep(currentStep - 1)}
               >
                  ← Back
               </Button>
            </div>
         )}
      </div>
   );
}
