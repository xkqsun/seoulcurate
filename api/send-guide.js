const fs = require('fs');
const path = require('path');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  let body = req.body;
  if (!body || typeof body === 'string') {
    try { body = JSON.parse(body || '{}'); } catch { body = {}; }
  }
  const email = (body.email || '').trim();

  if (!EMAIL_RE.test(email)) {
    res.status(400).json({ error: 'Invalid email address' });
    return;
  }

  if (!process.env.RESEND_API_KEY) {
    res.status(500).json({ error: 'Email service not configured' });
    return;
  }

  try {
    const pdfPath = path.join(process.cwd(), 'assets', 'seoul-skin-aesthetic-guide.pdf');
    const pdfBase64 = fs.readFileSync(pdfPath).toString('base64');

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Seoul Curate <hello@seoulcurate.com>',
        to: [email],
        subject: 'Your Seoul Skin & Aesthetic Guide',
        html: `
          <div style="font-family: Georgia, serif; color:#1d1e15; max-width:520px; margin:0 auto; padding:32px;">
            <p style="font-size:18px; font-style:italic; margin-bottom:24px;">Seoul Curate</p>
            <p>Thank you for your interest in Seoul Curate.</p>
            <p>Attached is your free Seoul Skin &amp; Aesthetic Guide — vetted clinics and how to pace your recovery, all in one place.</p>
            <p style="margin-top:28px;">If you have any questions about planning your journey, just reply to this email.</p>
            <p style="margin-top:28px; color:#7b8264;">— Sun, Seoul Curate</p>
          </div>
        `,
        attachments: [
          {
            filename: 'Seoul Skin & Aesthetic Guide.pdf',
            content: pdfBase64,
          },
        ],
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error('Resend error:', errText);
      res.status(502).json({ error: 'Failed to send email' });
      return;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('send-guide error:', err);
    res.status(500).json({ error: 'Internal error' });
  }
};
