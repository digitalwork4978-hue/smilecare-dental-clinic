import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, name, service, date, status } = await req.json();

    await resend.emails.send({
      from: "SmileCare <onboarding@resend.dev>",
      to: email,
      subject: `Appointment ${status}`,
      html: `
        <h2>Hello ${name},</h2>

        <p>Your appointment status has been updated.</p>

        <ul>
          <li><strong>Service:</strong> ${service}</li>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Status:</strong> ${status}</li>
        </ul>

        <p>Thank you for choosing SmileCare Dental Clinic.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}