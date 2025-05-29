import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
   try {
      if (!process.env.RESEND_API_KEY) {
         throw new Error("RESEND_API_KEY is not configured");
      }

      const body = await req.json();
      console.log("Received form data:", body); // Debug log

      const { fullName, email, phone, service, message, certUrl } = body;

      // Validate required fields including certUrl
      if (!fullName || !email || !phone || !service || !message || !certUrl) {
         return NextResponse.json(
            {
               error: "All fields are required including TrustedForm certificate",
            },
            { status: 400 }
         );
      }

      // Validate phone number (allowing more flexible formats)
      const phoneRegex = /^[0-9\s+()-]{10,}$/;
      if (!phoneRegex.test(phone)) {
         return NextResponse.json(
            { error: "Invalid phone number format" },
            { status: 400 }
         );
      }

      const emailData = {
         from: "avinash.app@resend.dev",
         to: "avinashchavan127@gmail.com",
         subject: `New Contact Form Submission - ${service}`,
         html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong> ${message}</p>
            <p><strong>TrustedForm Certificate URL:</strong> <a href="${certUrl}">${certUrl}</a></p>
         `,
      };

      console.log("Sending email with data:", emailData); // Debug log
      const data = await resend.emails.send(emailData);
      console.log("Email sent successfully:", data); // Debug log

      return NextResponse.json({ success: true, data });
   } catch (error) {
      console.error("Contact form error details:", error);

      if (error.message.includes("RESEND_API_KEY")) {
         return NextResponse.json(
            { error: "Email service not configured properly." },
            { status: 500 }
         );
      }

      return NextResponse.json(
         { error: "Failed to send message. Please try again later." },
         { status: 500 }
      );
   }
}
