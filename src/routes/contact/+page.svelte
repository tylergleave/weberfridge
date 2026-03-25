<script>
  import { enhance } from '$app/forms';
  import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';

  let { form } = $props();

  // Preserve field values on validation error
  let values = $derived(form?.values ?? {});
</script>

<svelte:head>
  <title>Contact — Weber Fridge</title>
  <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</svelte:head>

<section class="bg-gradient-to-br from-[#FDE8F0] to-[#EEF8E4] py-16">
  <div class="max-w-3xl mx-auto px-4 text-center">
    <h1 class="font-display text-5xl font-black text-[#E8538A] mb-4">Contact Us</h1>
    <p class="text-lg text-[#2D2A3E]/70 italic font-display">Questions, ideas, or just want to say hi?</p>
  </div>
</section>

<section class="max-w-xl mx-auto px-4 pt-12 pb-4">
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
    <a
      href="https://www.instagram.com/weberfridge"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 border border-[#FDE8F0] hover:border-[#E8538A] transition-colors group shadow-sm"
    >
      <svg class="w-5 h-5 text-[#E8538A] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
      <span class="text-sm font-semibold text-[#2D2A3E] group-hover:text-[#E8538A] transition-colors">Instagram</span>
    </a>
    <a
      href="https://www.facebook.com/weberfridge/"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 border border-[#FDE8F0] hover:border-[#1877F2] transition-colors group shadow-sm"
    >
      <svg class="w-5 h-5 text-[#1877F2] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
      <span class="text-sm font-semibold text-[#2D2A3E] group-hover:text-[#1877F2] transition-colors">Facebook</span>
    </a>
    <a
      href="https://signal.group/#CjQKIHPfRBG3WsthyhPAmgnTBvY9l_MynKi4fL6R_5ZwJI9sEhBo9ZZy6Wyy1GNsxQC7Upda"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 border border-[#EEF8E4] hover:border-[#7DC242] transition-colors group shadow-sm"
    >
      <svg class="w-5 h-5 text-[#3A76F0] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.554 4.103 1.523 5.828L.057 23.07a.5.5 0 0 0 .614.657l5.369-1.429A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 1 1 0 16.8A8.4 8.4 0 0 1 12 3.6zm-4.5 5.7a.9.9 0 0 0 0 1.8h9a.9.9 0 0 0 0-1.8h-9zm0 3.6a.9.9 0 0 0 0 1.8h5.4a.9.9 0 0 0 0-1.8H7.5z"/>
      </svg>
      <span class="text-sm font-semibold text-[#2D2A3E] group-hover:text-[#7DC242] transition-colors">Volunteer Signal Chat</span>
    </a>
  </div>
</section>

<section class="max-w-xl mx-auto px-4 py-8">

  {#if form?.success}
    <div class="bg-[#EEF8E4] border border-[#7DC242]/30 rounded-3xl p-10 text-center">
      <div class="text-5xl mb-4">🍉</div>
      <h2 class="font-display text-2xl font-black text-[#7DC242] mb-2">Message sent!</h2>
      <p class="text-[#2D2A3E]/70">Thanks for reaching out — we'll get back to you as soon as we can.</p>
      <a href="/" class="mt-6 inline-block px-6 py-2.5 rounded-full bg-[#E8538A] text-white font-bold hover:bg-[#c93d72] transition-colors">
        Back to home
      </a>
    </div>

  {:else}
    {#if form?.error}
      <div class="mb-6 px-5 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
        {form.error}
      </div>
    {/if}

    <form method="POST" use:enhance class="bg-white rounded-3xl p-8 shadow-sm border border-[#FDE8F0] space-y-6">

      <!-- Name -->
      <div>
        <label for="name" class="block text-sm font-semibold text-[#2D2A3E] mb-1.5">
          Name <span class="text-[#E8538A]">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autocomplete="name"
          value={values.name ?? ''}
          placeholder="Your name"
          class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E8538A] focus:ring-2 focus:ring-[#E8538A]/20 outline-none transition text-sm"
        />
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-semibold text-[#2D2A3E] mb-1.5">
          Email <span class="text-[#2D2A3E]/35 font-normal">(optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          value={values.email ?? ''}
          placeholder="you@example.com"
          class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E8538A] focus:ring-2 focus:ring-[#E8538A]/20 outline-none transition text-sm"
        />
      </div>

      <!-- Phone -->
      <div>
        <label for="phone" class="block text-sm font-semibold text-[#2D2A3E] mb-1.5">
          Phone <span class="text-[#2D2A3E]/35 font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autocomplete="tel"
          value={values.phone ?? ''}
          placeholder="(801) 555-0123"
          class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E8538A] focus:ring-2 focus:ring-[#E8538A]/20 outline-none transition text-sm"
        />
      </div>

      <!-- Message -->
      <div>
        <label for="message" class="block text-sm font-semibold text-[#2D2A3E] mb-1.5">
          Message <span class="text-[#E8538A]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows="5"
          placeholder="What's on your mind?"
          class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E8538A] focus:ring-2 focus:ring-[#E8538A]/20 outline-none transition text-sm resize-y"
        >{values.message ?? ''}</textarea>
      </div>

      <!-- Turnstile widget -->
      <div class="cf-turnstile" data-sitekey={PUBLIC_TURNSTILE_SITE_KEY} data-theme="light"></div>

      <button
        type="submit"
        class="w-full py-3.5 rounded-full bg-[#E8538A] text-white font-bold hover:bg-[#c93d72] transition-colors shadow"
      >
        Send Message 🍉
      </button>

      <p class="text-xs text-center text-[#2D2A3E]/35">
        Or reach us directly via the links above.
      </p>

    </form>
  {/if}

</section>
