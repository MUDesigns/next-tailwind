import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, message } = req.body;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.ZOHO_EMAIL, // generated ethereal user
      pass: process.env.ZOHO_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"${name}" <${process.env.ZOHO_EMAIL}>`, // sender address
    to: "matt03803@gmail.com", // list of receivers
    subject: "New message from your website", // Subject line
    html: `
      <p>You have received a new message from your website:</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);

  res.status(200).json({ message: "Message sent" });
}
