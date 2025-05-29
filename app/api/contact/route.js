import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
   try {
      if (!process.env.RESEND_API_KEY) {
         throw new Error("RESEND_API_KEY is not configured");
      }

      const body = await req.json();
      console.log("Received form data:", body);

      const { fullName, email, phone, service, message, certUrl } = body;

      // Validate required fields (excluding certUrl from required fields)
      if (!fullName || !email || !phone || !service || !message) {
         return NextResponse.json(
            { error: "All fields are required" },
            { status: 400 }
         );
      }

      // Validate phone number
      const phoneRegex = /^[0-9\s+()-]{10,}$/;
      if (!phoneRegex.test(phone)) {
         return NextResponse.json(
            { error: "Invalid phone number format" },
            { status: 400 }
         );
      }

      // Log certificate URL status
      console.log(
         "Certificate URL status:",
         certUrl ? "Present" : "Not present"
      );
      console.log("Certificate URL value:", certUrl);

      // Prepare certificate section for email
      let certificateSection = "";
      if (certUrl && certUrl !== "No certificate URL generated") {
         certificateSection = `
         <div style="margin-top: 20px; padding: 15px; background-color: #e6ffed; border-radius: 5px;">
            <p style="margin: 0;"><strong>TrustedForm Certificate:</strong></p>
            <p style="margin: 5px 0;"><a href="${certUrl}" style="color: #2b6cb0; word-break: break-all;">${certUrl}</a></p>
         </div>
         `;
      } else {
         certificateSection = `
         <div style="margin-top: 20px; padding: 15px; background-color: #fff3cd; border-radius: 5px;">
            <p style="margin: 0;"><strong>TrustedForm Certificate:</strong> No certificate URL generated</p>
            <p style="margin: 5px 0; font-size: 12px; color: #856404;">This may happen if the TrustedForm script didn't load properly or if JavaScript was disabled.</p>
         </div>
         `;
      }

      const emailData = {
         from: "avinash.app@resend.dev",
         to: "avinashchavan127@gmail.com",
         subject: `New Contact Form Submission - ${service}`,
         html: `
            <h2 style="color: #333; font-size: 24px; margin-bottom: 20px;">New Contact Form Submission</h2>
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
               <p style="margin: 10px 0;"><strong>Name:</strong> ${fullName}</p>
               <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
               <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
               <p style="margin: 10px 0;"><strong>Service:</strong> ${service}</p>
               <p style="margin: 10px 0;"><strong>Message:</strong> ${message}</p>
            </div>
            ${certificateSection}
         `,
      };

      console.log("Sending email with data:", emailData);
      const data = await resend.emails.send(emailData);
      console.log("Email sent successfully:", data);

      return NextResponse.json({
         success: true,
         data: {
            ...data,
            certUrl,
         },
      });
   } catch (error) {
      console.error("Contact form error details:", error);
      return NextResponse.json(
         { error: "Failed to send message. Please try again later." },
         { status: 500 }
      );
   }
}
