import mailjet from "node-mailjet";

const mailjetClient = mailjet.connect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET);

async function sendEmail({ to, from, subject, text, html }) {
  const request = mailjetClient.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: from,
        },
        To: [
          {
            Email: to,
          },
        ],
        Subject: subject,
        TextPart: text,
        HTMLPart: html,
      },
    ],
  });

  try {
    await request;
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export default sendEmail;