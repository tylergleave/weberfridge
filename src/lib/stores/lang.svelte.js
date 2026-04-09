import { browser } from '$app/environment';

function detectInitialLang() {
  if (!browser) return 'en';
  // 1. Check saved cookie preference
  const match = document.cookie.match(/(?:^|;\s*)lang=([^;]*)/);
  const saved = match?.[1];
  if (saved === 'en' || saved === 'es') return saved;
  // 2. Fall back to browser language
  const nav = (navigator.language || '').toLowerCase();
  if (nav.startsWith('es')) return 'es';
  // 3. Default to English
  return 'en';
}

let _lang = $state(detectInitialLang());

export const langStore = {
  get current() { return _lang; },
  set(lang) {
    _lang = lang;
    if (browser) {
      document.cookie = `lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    }
  },
  toggle() {
    langStore.set(_lang === 'en' ? 'es' : 'en');
  }
};
