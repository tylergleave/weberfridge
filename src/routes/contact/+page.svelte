<script>
  import { enhance } from '$app/forms';

  let { form } = $props();

  // Preserve field values on validation error
  let values = $derived(form?.values ?? {});
</script>

<svelte:head>
  <title>Contact — Weber Fridge</title>
</svelte:head>

<section class="bg-gradient-to-br from-[#FDE8F0] to-[#EEF8E4] py-16">
  <div class="max-w-3xl mx-auto px-4 text-center">
    <h1 class="font-display text-5xl font-black text-[#E8538A] mb-4">Contact Us</h1>
    <p class="text-lg text-[#2D2A3E]/70 italic font-display">Questions, ideas, or just want to say hi?</p>
  </div>
</section>

<section class="max-w-xl mx-auto px-4 py-16">

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

      <button
        type="submit"
        class="w-full py-3.5 rounded-full bg-[#E8538A] text-white font-bold hover:bg-[#c93d72] transition-colors shadow"
      >
        Send Message 🍉
      </button>

      <p class="text-xs text-center text-[#2D2A3E]/35">
        Prefer Signal? <a href="https://signal.group/#CjQKIHPfRBG3WsthyhPAmgnTBvY9l_MynKi4fL6R_5ZwJI9sEhBo9ZZy6Wyy1GNsxQC7Upda" target="_blank" rel="noopener noreferrer" class="text-[#E8538A] hover:underline">Join the volunteer chat</a> to reach us directly.
      </p>

    </form>
  {/if}

</section>
