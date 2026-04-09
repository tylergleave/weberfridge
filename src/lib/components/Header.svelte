<script>
  import { page } from '$app/stores';
  import { langStore } from '$lib/stores/lang.svelte.js';
  import { getT } from '$lib/i18n/index.js';

  const logo = '/images/fridge_logo.png';
  let menuOpen = $state(false);

  const T = $derived(getT(langStore.current));

  const navLinks = $derived([
    { href: '/',             label: T.nav.home },
    { href: '/about',        label: T.nav.about },
    { href: '/events',       label: T.nav.events },
    { href: '/get-involved', label: T.nav.getInvolved },
    { href: '/supporters',   label: T.nav.supporters },
    { href: '/contact',      label: T.nav.contact },
  ]);
</script>

<header class="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b-4 border-[#E8538A] shadow-sm">
  <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
    <!-- Logo + wordmark -->
    <a href="/" class="flex items-center gap-3 group">
      <img src={logo} alt="Weber Fridge watermelon logo" class="h-10 w-auto transition-transform group-hover:scale-110" />
      <div class="leading-tight">
        <span class="block font-display text-xl font-black text-[#E8538A] leading-none">Weber</span>
        <span class="block font-display text-xl font-black text-[#7DC242] leading-none">Fridge</span>
      </div>
    </a>

    <!-- Desktop nav -->
    <nav class="hidden lg:flex items-center gap-1">
      {#each navLinks as link}
        <a
          href={link.href}
          class="px-4 py-2 rounded-full font-semibold text-sm transition-all
            {$page.url.pathname === link.href
              ? 'bg-[#E8538A] text-white'
              : 'text-[#2D2A3E] hover:bg-[#FDE8F0] hover:text-[#E8538A]'}"
        >
          {link.label}
        </a>
      {/each}
      <a
        href="/get-involved#donate"
        class="ml-2 px-5 py-2 rounded-full bg-[#7DC242] text-white font-bold text-sm hover:bg-[#5A9A2A] transition-colors shadow"
      >
        {T.nav.donate}
      </a>
      <!-- Language toggle -->
      <button
        onclick={() => langStore.toggle()}
        class="ml-2 px-3 py-2 rounded-full border-2 border-[#2D2A3E]/20 text-[#2D2A3E]/70 font-bold text-xs hover:border-[#E8538A] hover:text-[#E8538A] transition-all"
        aria-label="Toggle language"
      >
        {T.toggle.label}
      </button>
    </nav>

    <!-- Mobile hamburger -->
    <button
      class="lg:hidden p-2 rounded-lg text-[#E8538A] hover:bg-[#FDE8F0]"
      onclick={() => (menuOpen = !menuOpen)}
      aria-label="Toggle menu"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {#if menuOpen}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        {/if}
      </svg>
    </button>
  </div>

  <!-- Mobile menu -->
  {#if menuOpen}
    <nav class="lg:hidden border-t border-[#FDE8F0] bg-white px-4 pb-4">
      {#each navLinks as link}
        <a
          href={link.href}
          onclick={() => (menuOpen = false)}
          class="block py-3 font-semibold border-b border-[#FDE8F0] last:border-0
            {$page.url.pathname === link.href ? 'text-[#E8538A]' : 'text-[#2D2A3E]'}"
        >
          {link.label}
        </a>
      {/each}
      <a
        href="/get-involved#donate"
        onclick={() => (menuOpen = false)}
        class="mt-3 block text-center px-5 py-2 rounded-full bg-[#7DC242] text-white font-bold hover:bg-[#5A9A2A]"
      >
        {T.nav.donate}
      </a>
      <!-- Language toggle (mobile) -->
      <button
        onclick={() => { langStore.toggle(); menuOpen = false; }}
        class="mt-3 w-full py-2 rounded-full border-2 border-[#2D2A3E]/20 text-[#2D2A3E]/70 font-bold text-sm hover:border-[#E8538A] hover:text-[#E8538A] transition-all"
      >
        {T.toggle.label}
      </button>
    </nav>
  {/if}
</header>
