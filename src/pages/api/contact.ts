import postmark from 'postmark';
import { NextApiRequest, NextApiResponse } from 'next';

const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN!);

interface ContactFormData {
  name: string;
  title: string;
  company: string;
  email: string;
  message?: string;
  terms: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, title, company, email, message, terms }: ContactFormData = req.body;

  if (!name || !title || !company || !email || !terms) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    await client.sendEmail({
      From: 'sahitya@endeavor.ai',
      To: email,
      Cc: 'support@endeavorai.com',
      Subject: `Thank you for contacting Endeavor AI - ${name}`,
      TextBody: `
        Hi ${name},
        
        Thank you for contacting Endeavor AI! We've received your message and will get back to you soon.
        
        Your submission details:
        Name: ${name}
        Job Title: ${title}
        Company: ${company}
        Email: ${email}
        Message: ${message || 'No message provided'}
        
        Best regards,
        The Endeavor AI Team
      `,
      HtmlBody: `
        <h2>Thank you for contacting Endeavor AI!</h2>
        <p>Hi ${name},</p>
        <p>Thank you for contacting Endeavor AI! We've received your message and will get back to you soon.</p>
        
        <h3>Your submission details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Job Title:</strong> ${title}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message || 'No message provided'}</p>
        
        <p>Best regards,<br/>
        The Endeavor AI Team</p>
      `,
      ReplyTo: 'support@endeavorai.com'
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Postmark error:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}