import { sendEmail } from '../../lib/sendgrid';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email not provided' });
  }

  try {
    await sendEmail(email, 'Endeavor | Quoting Made Faster', `Hey ${email}!\n\nSahitya Senapathy (cc-ed), CEO of Endeavor, will reach out to you. Thanks for your interest in Endeavor, and we're looking forward to talking to you soon.`);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
