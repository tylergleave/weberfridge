import { fail } from '@sveltejs/kit';
import { MAILGUN_API_KEY } from '$env/static/private';
import Mailgun from 'mailgun.js';

const MAILGUN_DOMAIN = 'mg.weberfridge.org';
const TO_ADDRESS = 'gleave@pm.me';

function getMailgunClient() {
  const mg = new Mailgun(FormData);
  return mg.client({ username: 'api', key: MAILGUN_API_KEY });
}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const name    = data.get('name')?.toString().trim();
    const email   = data.get('email')?.toString().trim();
    const phone   = data.get('phone')?.toString().trim();
    const message = data.get('message')?.toString().trim();

    // Validation
    if (!name)    return fail(400, { error: 'Name is required.', values: { name, email, phone, message } });
    if (!message) return fail(400, { error: 'Message is required.', values: { name, email, phone, message } });
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return fail(400, { error: 'Please enter a valid email address.', values: { name, email, phone, message } });
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
