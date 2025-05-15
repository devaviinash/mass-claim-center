export async function POST(request) {
   try {
      // Get the form data from the request
      const data = await request.json();

      // Simulate processing delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Log the form data including the TrustedForm certificate URL
      console.log("Form submission received:", {
         fullName: data.fullName,
         email: data.email,
         phone: data.phone,
         service: data.service,
         message: data.message,
         trustedFormCertificateUrl: data.trustedFormCertificateUrl,
      });

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
