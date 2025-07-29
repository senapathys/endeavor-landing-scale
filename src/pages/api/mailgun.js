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
    const formData = new URLSearchParams();
    formData.append('from', 'Endeavor Support <support@endeavorai.com>');
    formData.append('to', 'Endeavor Support <support@endeavorai.com>');
    formData.append('cc', email);
    formData.append('subject', 'New User Query');
    formData.append('text', `Thank you for reaching out to Endeavor. We will get back to you as soon as possible.\n\nThis email was sent from the Endeavor landing page.`);

    const apiKey = process.env.MAILGUN_API_KEY;
    console.log('API Key length:', apiKey ? apiKey.length : 'undefined');
    console.log('Email being CC\'d:', email);
    
    const response = await fetch('https://api.mailgun.net/v3/comms.endeavorai.com/messages', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`api:${apiKey}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Mailgun API response:', response.status, errorText);
      throw new Error(`Mailgun API error: ${response.status} - ${errorText}`);
    }

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Mailgun error:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
