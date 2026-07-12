import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Sanitize simple string fields to prevent header injection
  const safeName = name.replace(/(\r\n|\n|\r)/gm, " ");
  const safeEmail = email.replace(/(\r\n|\n|\r)/gm, " ");
  const safeSubject = subject.replace(/(\r\n|\n|\r)/gm, " ");

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mandeeppokharel577@gmail.com',
      replyTo: safeEmail,
      subject: `Portfolio Contact: ${safeSubject}`,
      text: `
----------------------------------------
New Portfolio Contact Form Submission
----------------------------------------

Name:
${safeName}

Email:
${safeEmail}

Subject:
${safeSubject}

Message:
${message}

----------------------------------------
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email. Please try again later.' });
  }
}
