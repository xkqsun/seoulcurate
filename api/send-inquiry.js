const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function esc(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  let body = req.body;
  if (!body || typeof body === 'string') {
    try { body = JSON.parse(body || '{}'); } catch { body = {}; }
  }

  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const nationality = (body.nationality || '').trim();
  const visitDate = (body.visitDate || '').trim();
  const period = (body.period || '').trim();
  const groupSize = (body.groupSize || '').trim();
  const concept = (body.concept || '').trim();
  const message = (body.message || '').trim();

  if (!name || !EMAIL_RE.test(email)) {
    res.status(400).json({ error: 'Name and a valid email are required' });
    return;
  }

  if (!process.env.RESEND_API_KEY) {
    res.status(500).json({ error: 'Email service not configured' });
    return;
  }

  const rows = [
    ['Name', name],
    ['Email', email],
    ['Nationality', nationality],
    ['Visit Date', visitDate],
    ['Preferred Duration', period],
    ['Group Size', groupSize],
    ['Concept / Style', concept],
  ].filter(([, v]) => v);

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0; color:#6b6b66; white-space:nowrap; vertical-align:top;">${esc(
          label
        )}</td><td style="padding:6px 0; color:#1d1e15;">${esc(value)}</td></tr>`
    )
    .join('');

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Seoul Curate Website <hello@seoulcurate.com>',
        to: ['seoulcurate@gmail.com'],
        reply_to: email,
        subject: `New enquiry from ${name}${nationality ? ' (' + nationality + ')' : ''}`,
        html: `
          <div style="font-family: Georgia, serif; color:#1d1e15; max-width:560px; margin:0 auto; padding:32px;">
            <p style="font-size:18px; font-style:italic; margin-bottom:24px;">Seoul Curate — New Enquiry</p>
            <table style="border-collapse:collapse; width:100%; font-family: -apple-system, Helvetica, Arial, sans-serif; font-size:14px;">
              ${rowsHtml}
            </table>
            ${
              message
                ? `<div style="margin-top:20px;"><p style="color:#6b6b66; font-size:12px; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:6px;">Message</p><p style="white-space:pre-wrap; font-family:-apple-system, Helvetica, Arial, sans-serif; font-size:14px;">${esc(
                    message
                  )}</p></div>`
                : ''
            }
            <p style="margin-top:28px; font-size:12px; color:#9a9c82;">Reply directly to this email to respond to ${esc(
              name
            )}.</p>
          </div>
        `,
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
    console.error('send-inquiry error:', err);
    res.status(500).json({ error: 'Internal error' });
  }
};
