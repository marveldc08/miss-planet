// src/app/api/sendMail/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { customerDetails, productDetails } = await request.json();

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.elasticemail.com", // Replace with your SMTP server
    port: 2525, // Replace with your SMTP port
    secure: false, // true for 465, false for other ports
    auth: {
      user: "emekachinye09@gmail.com", // Replace with your SMTP username
      pass: "36B45BDF4D3B0858A74B685369885E7F894F", // Replace with your SMTP password
    },
  });

    try {
      // Send mail with defined transport object
      await transporter.sendMail({
        from: '"Miss Planet" <emekachinye09@gmail.com>', // Replace with the sender address
        to: customerDetails.email, // Recipient address
        subject: "Delivery tracking details", // Subject line
        text: customerDetails.name, // Plain text body
        html: `<p>${(productDetails.name, productDetails.price)}</p>`, // HTML body
      });

      return NextResponse.json({ success: true });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
}
