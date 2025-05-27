import { z } from "zod";

const contactFormSchema = z.object({
   firstName: z.string().min(2, "First name must be at least 2 characters"),
   lastName: z.string().min(2, "Last name must be at least 2 characters"),
   email: z.string().email("Please enter a valid email address"),
   phone: z.string().min(10, "Please enter a valid phone number"),
   address: z.string().optional(),
   city: z.string().optional(),
   state: z.string().optional(),
   zip: z.string().optional(),
   service: z.string(),
   answers: z.record(z.string().or(z.array(z.string()))).optional(),
   trustedFormCertificateUrl: z.string().optional(),
});

export async function POST(request) {
   try {
      // Get the form data from the request
      const data = await request.json();

      // Validate the form data
      const validatedData = contactFormSchema.parse(data);

      // Simulate processing delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Log the form data including the TrustedForm certificate URL
      console.log("Form submission received:", validatedData);

      // Here you would typically:
      // 1. Save the data to your database
      // 2. Send the lead to your CRM
      // 3. Send a notification email
      // 4. etc.

      return new Response(
         JSON.stringify({
            success: true,
            message: "Form submitted successfully",
         }),
         {
            headers: {
               "Content-Type": "application/json",
            },
         }
      );
   } catch (error) {
      console.error("Error processing form submission:", error);

      // If it's a validation error, return the validation messages
      if (error instanceof z.ZodError) {
         return new Response(
            JSON.stringify({
               success: false,
               message: "Validation failed",
               errors: error.errors,
            }),
            {
               status: 400,
               headers: {
                  "Content-Type": "application/json",
               },
            }
         );
      }

      return new Response(
         JSON.stringify({
            success: false,
            message: "Failed to process form submission",
         }),
         {
            status: 500,
            headers: {
               "Content-Type": "application/json",
            },
         }
      );
   }
}
