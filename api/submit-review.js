const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str) {
  return String(str)
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

  const name = (body.name || '').trim().slice(0, 60);
  const location = (body.location || '').trim().slice(0, 60);
  const experience = (body.experience || '').trim().slice(0, 120);
  const rating = Number(body.rating) || 0;
  const message = (body.message || '').trim().slice(0, 2000);
  const email = (body.email || '').trim();
  const consent = body.consent === true;

  if (!name || !message || !EMAIL_RE.test(email) || !consent) {
    res.status(400).json({ error: 'Missing or invalid fields' });
    return;
  }

  if (!process.env.RESEND_API_KEY) {
    res.status(500).json({ error: 'Email service not configured' });
    return;
  }

  const stars = rating > 0 ? '★'.repeat(rating) + '☆'.repeat(5 - rating) : '(no rating)';

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Seoul Curate Reviews <hello@seoulcurate.com>',
        to: ['seoulcurate@gmail.com'],
        reply_to: email,
        subject: `New guest story from ${name}`,
        html: `
          <div style="font-family: Georgia, serif; color:#1d1e15; max-width:560px; margin:0 auto; padding:24px;">
            <p style="font-size:16px; font-style:italic; margin-bottom:20px;">New Guest Story — Seoul Curate</p>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Location:</strong> ${escapeHtml(location || '—')}</p>
            <p><strong>Experience:</strong> ${escapeHtml(experience || '—')}</p>
            <p><strong>Rating:</strong> ${stars}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Consent to publish:</strong> Yes</p>
            <hr style="margin:20px 0; border:none; border-top:1px solid #ddd;">
            <p style="white-space:pre-wrap;">${escapeHtml(message)}</p>
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
    console.error('submit-review error:', err);
    res.status(500).json({ error: 'Internal error' });
  }
};
