import dotenv from "dotenv";
dotenv.config();

// DEV ONLY – fixes self-signed cert issue
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import express from "express";
import cors from "cors";
import postmark from "postmark";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

// Postmark
const client = new postmark.ServerClient(process.env.POSTMARK_API_TOKEN);

// Test route
app.get("/", (req, res) => {
  res.send("Postmark backend running");
});

// Contact form
app.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await client.sendEmail({
      From: process.env.EMAIL_FROM,
      To: process.env.EMAIL_TO,
      Subject: `New Contact Message — TolNex`,
      TextBody: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      HtmlBody: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    console.error("POSTMARK ERROR:", err);
    res.status(500).json({ error: "Email service failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
