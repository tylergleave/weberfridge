/**
 * Detect the user's preferred language server-side so SSR renders in the right
 * language without a flash of English content.
 *
 * Priority:
 *   1. `lang` cookie (explicit user preference)
 *   2. Accept-Language request header (browser default)
 *   3. English fallback
 */
export function load({ cookies, request }) {
  const cookieLang = cookies.get('lang');
  if (cookieLang === 'en' || cookieLang === 'es') {
    return { lang: cookieLang };
  }

  const accept = request.headers.get('accept-language') ?? '';
  // Accept-Language looks like "es-MX,es;q=0.9,en;q=0.8"
  const primary = accept.split(',')[0].trim().toLowerCase();
  if (primary.startsWith('es')) {
    return { lang: 'es' };
  }

  return { lang: 'en' };
}
