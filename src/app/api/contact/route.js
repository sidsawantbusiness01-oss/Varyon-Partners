import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Varyon Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Inquiry - Varyon Partners",
      html: `
    <div style="font-family: Arial, sans-serif; background-color:#f6f8fb; padding:30px;">
      
      <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; padding:30px; box-shadow:0 10px 30px rgba(0,0,0,0.08);">
        
        <h2 style="margin-bottom:5px; color:#111;">New Inquiry Received</h2>
        <p style="margin-top:0; color:#666;">Varyon Partners Website</p>

        <hr style="border:none; border-top:1px solid #eee; margin:20px 0;" />

        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0; color:#888;">Name</td>
            <td style="padding:8px 0; font-weight:600;">${body.name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#888;">Company</td>
            <td style="padding:8px 0; font-weight:600;">${body.company}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#888;">Role</td>
            <td style="padding:8px 0; font-weight:600;">${body.role}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#888;">Email</td>
            <td style="padding:8px 0;">
              <a href="mailto:${body.email}" style="color:#0a66c2; text-decoration:none;">
                ${body.email}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#888;">Phone</td>
            <td style="padding:8px 0;">
              <a href="tel:${body.phone}" style="color:#0a66c2; text-decoration:none;">
                ${body.phone}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#888;">Budget</td>
            <td style="padding:8px 0; font-weight:600;">${body.budget}</td>
          </tr>
        </table>

        <hr style="border:none; border-top:1px solid #eee; margin:25px 0;" />

        <h3 style="margin-bottom:10px; color:#111;">Engagement Context</h3>
        <div style="background:#f9fafc; padding:15px; border-radius:8px; color:#333; line-height:1.6;">
          ${body.message}
        </div>

        <hr style="border:none; border-top:1px solid #eee; margin:25px 0;" />

        <p style="font-size:12px; color:#999; text-align:center;">
          This inquiry was submitted via Varyon Partners website.
        </p>

      </div>
    </div>
  `,
    };
    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
