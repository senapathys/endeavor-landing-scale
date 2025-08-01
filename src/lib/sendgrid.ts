import sgMail from '@sendgrid/mail';

export const sendEmail = async (to, subject, text) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to,
    from: 'support@getindustrial.ai',
    cc: 'sahitya@getindustrial.ai',
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
  }
};
