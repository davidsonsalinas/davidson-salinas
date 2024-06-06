import { sendEmail } from "../../../utils/sendEmail";

export default async function route(req, res) {
    if (req.method === "POST") {
      const { to, subject, message } = req.body;
  
      try {
        await sendEmail({
          to,
          from: "davidson.salinas@icloud.com",
          subject,
          text: message,
          html: `<p>${message}</p>`,
        });
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(500).json({ error: "Failed to send email" });
      }
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  }
  