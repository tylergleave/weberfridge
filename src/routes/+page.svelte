<script>
  import { langStore } from '$lib/stores/lang.svelte.js';
  import { getT } from '$lib/i18n/index.js';

  const logo = '/images/fridge_logo.png';
  const T = $derived(getT(langStore.current));
  const address = '301 E 28th Street, Ogden UT';
  const addressUrl = 'https://maps.app.goo.gl/SXxf1E9HAqBzCUpAA';
</script>

<svelte:head>
  <title>Weber Fridge — Free Food, No Stigma</title>
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden" style="background: radial-gradient(ellipse at 30% 50%, #FDE8F0 0%, #EEF8E4 40%, #E8F4FD 100%);">
  <div class="max-w-5xl mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-10">
    <div class="flex-1 text-center md:text-left">
      <p class="inline-block px-4 py-1 rounded-full bg-[#E8538A]/10 text-[#E8538A] text-sm font-semibold mb-4 tracking-wide uppercase">
        {T.home.location}
      </p>
      <h1 class="font-display text-5xl md:text-7xl font-black leading-none mb-4">
        <span class="text-[#E8538A]">Weber</span><br>
        <span class="text-[#7DC242]">Fridge</span>
      </h1>
      <p class="text-2xl md:text-3xl font-display italic font-bold text-[#2D2A3E]/70 mb-6">
        {T.home.tagline}
      </p>
      <p class="text-base text-[#2D2A3E]/70 max-w-md mb-8 leading-relaxed">
        {T.home.heroText.split('{address}')[0]}<a href={addressUrl} target="_blank" rel="noopener noreferrer" class="text-[#E8538A] hover:underline">{address}</a>{T.home.heroText.split('{address}')[1]}
      </p>
      <div class="flex flex-wrap gap-3 justify-center md:justify-start">
        <a href="/get-involved" class="px-6 py-3 rounded-full bg-[#E8538A] text-white font-bold hover:bg-[#c93d72] transition-colors shadow-lg">
          {T.home.getInvolved}
        </a>
        <a href="/events" class="px-6 py-3 rounded-full border-2 border-[#7DC242] text-[#5A9A2A] font-bold hover:bg-[#EEF8E4] transition-colors">
          {T.home.upcomingEvents}
        </a>
      </div>
    </div>
    <div class="flex-shrink-0">
      <img
        src={logo}
        alt={T.home.altLogo}
        class="w-56 md:w-80 drop-shadow-2xl"
        style="animation: float 4s ease-in-out infinite;"
      />
    </div>
  </div>

  <!-- Decorative wave -->
  <svg class="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#FFF9F5"/>
  </svg>
</section>

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-16px); }
  }
</style>

<!-- What is a community fridge? -->
<section class="max-w-5xl mx-auto px-4 py-16">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

    <div class="bg-white rounded-3xl p-8 shadow-sm border border-[#FDE8F0] text-center">
      <div class="text-4xl mb-4">🧊</div>
      <h3 class="font-display text-xl font-bold text-[#E8538A] mb-2">{T.home.card1Title}</h3>
      <p class="text-sm text-[#2D2A3E]/70 leading-relaxed">{T.home.card1Text}</p>
    </div>

    <div class="bg-white rounded-3xl p-8 shadow-sm border border-[#EEF8E4] text-center">
      <div class="text-4xl mb-4">🌱</div>
      <h3 class="font-display text-xl font-bold text-[#7DC242] mb-2">{T.home.card2Title}</h3>
      <p class="text-sm text-[#2D2A3E]/70 leading-relaxed">{T.home.card2Text}</p>
    </div>

    <div class="bg-white rounded-3xl p-8 shadow-sm border border-[#FDE8F0] text-center">
      <div class="text-4xl mb-4">🤝</div>
      <h3 class="font-display text-xl font-bold text-[#E8538A] mb-2">{T.home.card3Title}</h3>
      <p class="text-sm text-[#2D2A3E]/70 leading-relaxed">{T.home.card3Text}</p>
    </div>

  </div>
</section>

<!-- Community photo gallery -->
<section class="max-w-5xl mx-auto px-4 py-16">
  <h2 class="font-display text-4xl font-black text-[#2D2A3E] mb-2 text-center">{T.home.galleryTitle}</h2>
  <p class="text-center text-[#2D2A3E]/60 mb-10 italic font-display">{T.home.gallerySub}</p>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
    <div class="col-span-2 row-span-2 rounded-3xl overflow-hidden aspect-square">
      <img
        src="/images/community_events/breakfast_1.jpg"
        alt={T.home.altBreakfast}
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div class="rounded-3xl overflow-hidden aspect-square">
      <img
        src="/images/community_events/pancakes_1.jpg"
        alt={T.home.altPancakes}
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div class="rounded-3xl overflow-hidden aspect-square">
      <img
        src="/images/community_events/fridge_2.jpg"
        alt={T.home.altFridge2}
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div class="col-span-2 rounded-3xl overflow-hidden" style="aspect-ratio: 2/1;">
      <img
        src="/images/community_events/fridge_1.jpg"
        alt={T.home.altFridge1}
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
  </div>
</section>

<!-- Events teaser -->
<section class="bg-[#2D2A3E] py-16">
  <div class="max-w-5xl mx-auto px-4 text-center">
    <h2 class="font-display text-4xl font-black text-white mb-3">
      {T.home.eventsTitle} <span class="text-[#E8538A]">{T.home.eventsHighlight}</span>
    </h2>
    <p class="text-gray-300 max-w-lg mx-auto mb-8 leading-relaxed">
      {T.home.eventsText}
    </p>
    <a href="/events" class="px-8 py-3 rounded-full bg-[#E8538A] text-white font-bold hover:bg-[#c93d72] transition-colors shadow-lg inline-block">
      {T.home.seeAllEvents}
    </a>
  </div>
</section>

<!-- Partners banner -->
<section class="bg-[#FFF9F5] py-12 border-t border-[#FDE8F0]">
  <div class="max-w-5xl mx-auto px-4 text-center">
    <p class="text-xs uppercase tracking-widest text-[#2D2A3E]/40 font-semibold mb-6">{T.home.partnersLabel}</p>
    <div class="flex flex-wrap justify-center items-center gap-8 text-[#2D2A3E]/50 font-semibold text-sm">
      <a href="https://urbanprairieag.com/" target="_blank" rel="noopener noreferrer" class="hover:text-[#7DC242] transition-colors">Urban Prairie Agriculture</a>
      <span class="text-[#E8538A]">🍉</span>
      <a href="https://losttexanbbq.com/" target="_blank" rel="noopener noreferrer" class="hover:text-[#E8538A] transition-colors">Lost Texan BBQ</a>
      <span class="text-[#7DC242]">🌿</span>
      <a href="https://www.utahrecovers.org/locations/ogden/" target="_blank" rel="noopener noreferrer" class="hover:text-[#E8538A] transition-colors">USARA Ogden</a>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="max-w-5xl mx-auto px-4 py-20 text-center">
  <div class="bg-gradient-to-br from-[#FDE8F0] to-[#EEF8E4] rounded-3xl p-12">
    <h2 class="font-display text-4xl font-black text-[#2D2A3E] mb-4">
      {T.home.ctaTitle}
    </h2>
    <p class="text-[#2D2A3E]/70 max-w-md mx-auto mb-8">
      {T.home.ctaText}
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <a href="/get-involved" class="px-8 py-4 rounded-full bg-[#7DC242] text-white font-bold text-lg hover:bg-[#5A9A2A] transition-colors shadow-lg inline-block">
        {T.home.ctaButton}
      </a>
      <a
        href="https://signal.group/#CjQKIHPfRBG3WsthyhPAmgnTBvY9l_MynKi4fL6R_5ZwJI9sEhBo9ZZy6Wyy1GNsxQC7Upda"
        target="_blank"
        rel="noopener noreferrer"
        class="px-8 py-4 rounded-full border-2 border-[#7DC242] text-[#5A9A2A] font-bold text-lg hover:bg-[#EEF8E4] transition-colors inline-block"
      >
        {T.home.ctaSignal}
      </a>
    </div>
  </div>
</section>
