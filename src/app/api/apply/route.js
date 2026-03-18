import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const qualification = formData.get("qualification");
    const role = formData.get("role");
    const file = formData.get("resume");

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Varyon Careers" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Job Application - ${role}`,
      html: `
    <div style="font-family: Arial, sans-serif; background:#f4f6f9; padding:30px;">
      
      <div style="max-width:650px; margin:auto; background:#ffffff; border-radius:12px; padding:30px; box-shadow:0 12px 30px rgba(0,0,0,0.08);">
        
        <!-- Header -->
        <h2 style="margin:0; color:#111;">New Candidate Application</h2>
        <p style="margin:5px 0 20px; color:#666;">Varyon Partners Careers</p>

        <!-- Role Highlight -->
        <div style="background:#111; color:#fff; padding:12px 18px; border-radius:8px; display:inline-block; font-size:14px; margin-bottom:20px;">
          Applied Role: ${role}
        </div>

        <hr style="border:none; border-top:1px solid #eee; margin:20px 0;" />

        <!-- Candidate Info -->
        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0; color:#888;">Full Name</td>
            <td style="padding:10px 0; font-weight:600;">${name}</td>
          </tr>

          <tr>
            <td style="padding:10px 0; color:#888;">Email</td>
            <td style="padding:10px 0;">
              <a href="mailto:${email}" style="color:#0a66c2; text-decoration:none;">
                ${email}
              </a>
            </td>
          </tr>

          <tr>
            <td style="padding:10px 0; color:#888;">Phone</td>
            <td style="padding:10px 0;">
              <a href="tel:${phone}" style="color:#0a66c2; text-decoration:none;">
                ${phone}
              </a>
            </td>
          </tr>

          <tr>
            <td style="padding:10px 0; color:#888;">Qualification</td>
            <td style="padding:10px 0; font-weight:600;">
              ${qualification}
            </td>
          </tr>
        </table>

        <hr style="border:none; border-top:1px solid #eee; margin:25px 0;" />

        <!-- Resume Section -->
        <div style="background:#f9fafc; padding:15px; border-radius:8px; text-align:center;">
          <p style="margin:0; color:#555;">
            📎 Resume attached with this email
          </p>
        </div>

        <hr style="border:none; border-top:1px solid #eee; margin:25px 0;" />

        <!-- Footer -->
        <p style="font-size:12px; color:#999; text-align:center;">
          This application was submitted via Varyon Partners Careers page.
        </p>

      </div>
    </div>
  `,
      attachments: [
        {
          filename: file.name,
          content: buffer,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ success: false }, { status: 500 });
  }
}
