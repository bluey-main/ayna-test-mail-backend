import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import ContactEmail from '../emails/contact-email';
import React from 'react';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  from_name: string;
  from_email: string;
  phone_number: string;
  message: string;
  subject: string;
}

const sendEmailHandler = async (req: Request, res: Response): Promise<void> => {
  const { to, subject, formData }: { to: string; subject: string; formData: ContactFormData } = req.body;
  
  try {
    // Generate HTML from your React email template
    const emailHtml = await render(React.createElement(ContactEmail, formData));
    
    // Create a plain text version as fallback
    const emailText = `
New Contact Form Submission

Name: ${formData.from_name}
Email: ${formData.from_email}
Phone: ${formData.phone_number}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();

    console.log('Generated HTML:', emailHtml ? 'HTML generated successfully' : 'HTML generation failed');
    console.log('Email text:', emailText);

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use verified domain
      to,
      subject: `Contact Form: ${subject}`,
      html: emailHtml,
      text: emailText, // Always provide text as fallback
    });
    
    res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('Email sending error:', error);
    res.status(500).json({ error: error.message });
  }
};

app.post('/send-email', sendEmailHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend is running at http://localhost:${PORT}`);
});