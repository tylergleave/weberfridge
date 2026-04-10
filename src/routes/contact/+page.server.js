import { fail } from '@sveltejs/kit';
import { MAILGUN_API_KEY, TURNSTILE_SECRET_KEY } from '$env/static/private';
import Mailgun from 'mailgun.js';

const MAILGUN_DOMAIN = 'mg.weberfridge.org';
const TO_ADDRESS = 'weberfridge@gmail.com,gleave@pm.me'; 

function getMailgunClient() {
  const mg = new Mailgun(FormData);
  return mg.client({ username: 'api', key: MAILGUN_API_KEY });
}

async function verifyTurnstile(token, ip) {
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: TURNSTILE_SECRET_KEY,
      response: token,
      remoteip: ip,
    }),
  });
  const data = await res.json();
  return data.success === true;
}

export const actions = {
  default: async ({ request, getClientAddress }) => {
    const data = await request.formData();

    const name    = data.get('name')?.toString().trim();
    const email   = data.get('email')?.toString().trim();
    const phone   = data.get('phone')?.toString().trim();
    const message = data.get('message')?.toString().trim();
    const token   = data.get('cf-turnstile-response')?.toString();

    // Validate fields
    if (!name)    return fail(400, { error: 'Name is required.', values: { name, email, phone, message } });
    if (!message) return fail(400, { error: 'Message is required.', values: { name, email, phone, message } });
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return fail(400, { error: 'Please enter a valid email address.', values: { name, email, phone, message } });
    }

    // Verify Turnstile
    if (!token) {
      return fail(400, { error: 'Please complete the verification check.', values: { name, email, phone, message } });
    }
    const turnstileOk = await verifyTurnstile(token, getClientAddress());
    if (!turnstileOk) {
      return fail(400, { error: 'Verification failed — please try again.', values: { name, email, phone, message } });
    }

    const optionalFields = [
      email ? `Email: ${email}` : null,
      phone ? `Phone: ${phone}` : null,
    ].filter(Boolean).join('\n');

    const text = [
      `Name: ${name}`,
      optionalFields,
      `\nMessage:\n${message}`,
    ].filter(Boolean).join('\n');

    try {
      const client = getMailgunClient();
      await client.messages.create(MAILGUN_DOMAIN, {
        from:    `Weber Fridge Contact Form <mailgun@${MAILGUN_DOMAIN}>`,
        to:      TO_ADDRESS,
        replyTo: email || undefined,
        subject: `New message from ${name}`,
        text,
      });
    } catch (err) {
      console.error('Mailgun error:', err);
      return fail(500, {
        error: 'Something went wrong sending your message. Please try again or reach us on Signal.',
        values: { name, email, phone, message },
      });
    }

    return { success: true };
  }
};
