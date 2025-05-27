import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();
    const { service, userDetails, answers } = data;

    // Format answers into a readable format
    const formattedAnswers = Object.entries(answers)
      .map(([question, answer]) => `${question}: ${answer}`)
      .join('\n');

    // Format user details
    const formattedUserDetails = Object.entries(userDetails)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');

    const emailContent = `
New Service Application

Service: ${service}

User Details:
${formattedUserDetails}

Answers:
${formattedAnswers}
    `;

    const response = await resend.emails.send({
      from: 'Mass Claims Center <onboarding@resend.dev>',
      to: process.env.NOTIFICATION_EMAIL,
      subject: `New Application: ${service}`,
      text: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
