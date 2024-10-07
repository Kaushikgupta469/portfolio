import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { firstname, lastname, email, phone, service, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gupta.kaushik2002@gmail.com",
      pass: "lgox lkzp mmzj cqqv",  // Replace with your email password or app password if 2FA is enabled
    },
  });

  const mailOptions = {
    from: email,
    to: "gupta.kaushik2002@gmail.com",
    subject: `New Contact Form Submission from ${firstname} ${lastname}`,
    text: `
      Firstname: ${firstname}
      Lastname: ${lastname}
      Email: ${email}
      Phone: ${phone}
      Service: ${service}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
