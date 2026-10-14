export async function sendMagicLinkEmail(to: string, signInUrl: string) {
  const from = process.env.EMAIL_FROM ?? "Essentra <noreply@essentra.ca>";
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.info("[essentra] Magic link for", to, "→", signInUrl);
    return;
  }

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: "Sign in to Essentra",
      html: `<p>Click to sign in (link expires in 30 minutes):</p><p><a href="${signInUrl}">${signInUrl}</a></p>`,
    }),
  });
}

export async function sendWelcomeEmail(to: string, signInUrl: string, orderNumber: string) {
  const from = process.env.EMAIL_FROM ?? "Essentra <noreply@essentra.ca>";
  const apiKey = process.env.RESEND_API_KEY;
  const subject = `Your Essentra order ${orderNumber}`;

  if (!apiKey) {
    console.info("[essentra] Welcome + magic link for", to, "order", orderNumber, "→", signInUrl);
    return;
  }

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html: `<p>Thanks for subscribing. Order <strong>${orderNumber}</strong>.</p><p><a href="${signInUrl}">Open your account</a></p>`,
    }),
  });
}
