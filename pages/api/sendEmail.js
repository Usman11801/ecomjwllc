import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, budget, timeframe, projectDetails } = req.body;

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can also use another service like SendGrid or Mailgun
      auth: {
        user: 'usman11801@gmail.com', // Make sure to replace with your actual email address
        pass: 'Usman11801@@@', // App-specific password if you use 2FA
      },
    });

    const mailOptions = {
      from: 'usman11801@gmail.com', // sender address
      to: email, // receiver address (you can replace with your email)
      subject: "New Project Inquiry", // Subject line
      html: `
        <h1>Project Inquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeframe:</strong> ${timeframe}</p>
        <p><strong>Project Details:</strong> ${projectDetails}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error); // Log the error for debugging
      res.status(500).json({ error: "Failed to send email", details: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
