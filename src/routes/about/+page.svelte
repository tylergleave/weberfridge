<script>
  import { langStore } from '$lib/stores/lang.svelte.js';
  import { getT } from '$lib/i18n/index.js';

  const T = $derived(getT(langStore.current));
</script>

<svelte:head>
  <title>About — Weber Fridge</title>
</svelte:head>

<!-- Page hero -->
<section class="bg-gradient-to-br from-[#FDE8F0] to-[#EEF8E4] py-16">
  <div class="max-w-3xl mx-auto px-4 text-center">
    <h1 class="font-display text-5xl font-black text-[#E8538A] mb-4">{T.about.title}</h1>
    <p class="text-lg text-[#2D2A3E]/70 italic font-display">{T.about.subtitle}</p>
  </div>
</section>

<section class="max-w-3xl mx-auto px-4 py-16 space-y-14">

  <!-- Mission -->
  <div>
    <h2 class="font-display text-3xl font-black text-[#2D2A3E] mb-4">{T.about.missionTitle}</h2>
    <p class="text-[#2D2A3E]/75 leading-relaxed text-lg">
      {T.about.mission1}
    </p>
    <p class="text-[#2D2A3E]/75 leading-relaxed text-lg mt-4">
      {T.about.mission2.split(T.about.mission2Bold)[0]}<strong>{T.about.mission2Bold}</strong>{T.about.mission2.split(T.about.mission2Bold)[1]}
    </p>
  </div>

  <!-- Divider -->
  <div class="flex items-center gap-4">
    <div class="flex-1 h-px bg-[#FDE8F0]"></div>
    <span class="text-2xl">🍉</span>
    <div class="flex-1 h-px bg-[#FDE8F0]"></div>
  </div>

  <!-- How it works -->
  <div>
    <h2 class="font-display text-3xl font-black text-[#7DC242] mb-6">{T.about.howTitle}</h2>
    <div class="space-y-4">
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#E8538A] text-white font-bold flex items-center justify-center font-display">1</div>
        <div>
          <h4 class="font-bold text-[#2D2A3E] mb-1">{T.about.step1Title}</h4>
          <p class="text-[#2D2A3E]/65 text-sm leading-relaxed">{T.about.step1Text}</p>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#7DC242] text-white font-bold flex items-center justify-center font-display">2</div>
        <div>
          <h4 class="font-bold text-[#2D2A3E] mb-1">{T.about.step2Title}</h4>
          <p class="text-[#2D2A3E]/65 text-sm leading-relaxed">{T.about.step2Text}</p>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#E8538A] text-white font-bold flex items-center justify-center font-display">3</div>
        <div>
          <h4 class="font-bold text-[#2D2A3E] mb-1">{T.about.step3Title}</h4>
          <p class="text-[#2D2A3E]/65 text-sm leading-relaxed">{T.about.step3Text}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="flex items-center gap-4">
    <div class="flex-1 h-px bg-[#EEF8E4]"></div>
    <span class="text-2xl">🌱</span>
    <div class="flex-1 h-px bg-[#EEF8E4]"></div>
  </div>

  <!-- Partners -->
  <div>
    <h2 class="font-display text-3xl font-black text-[#2D2A3E] mb-6">{T.about.partnersTitle}</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <a href="https://urbanprairieag.com/" target="_blank" rel="noopener noreferrer" class="bg-white rounded-2xl p-6 border border-[#EEF8E4] shadow-sm text-center hover:border-[#7DC242] transition-colors group">
        <div class="text-3xl mb-3">🌾</div>
        <h4 class="font-display font-bold text-[#7DC242] mb-1 group-hover:underline">Urban Prairie Agriculture</h4>
        <p class="text-xs text-[#2D2A3E]/60 leading-relaxed">{T.about.partner1Desc}</p>
      </a>
      <a href="https://losttexanbbq.com/" target="_blank" rel="noopener noreferrer" class="bg-white rounded-2xl p-6 border border-[#FDE8F0] shadow-sm text-center hover:border-[#E8538A] transition-colors group">
        <div class="text-3xl mb-3">🔥</div>
        <h4 class="font-display font-bold text-[#E8538A] mb-1 group-hover:underline">Lost Texan BBQ</h4>
        <p class="text-xs text-[#2D2A3E]/60 leading-relaxed">{T.about.partner2Desc}</p>
      </a>
      <a href="https://www.utahrecovers.org/locations/ogden/" target="_blank" rel="noopener noreferrer" class="bg-white rounded-2xl p-6 border border-[#e8e7ef] shadow-sm text-center hover:border-[#2D2A3E] transition-colors group">
        <div class="text-3xl mb-3">🤝</div>
        <h4 class="font-display font-bold text-[#2D2A3E] mb-1 group-hover:underline">USARA Ogden</h4>
        <p class="text-xs text-[#2D2A3E]/60 leading-relaxed">{T.about.partner3Desc}</p>
      </a>
    </div>
  </div>

  <!-- Find us -->
  <div>
    <h2 class="font-display text-3xl font-black text-[#2D2A3E] mb-6">{T.about.findTitle}</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 rounded-3xl overflow-hidden">
      <img
        src="/images/community_events/fridge_2.jpg"
        alt={T.about.altFridge2}
        class="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
      />
      <img
        src="/images/community_events/fridge_1.jpg"
        alt={T.about.altFridge1}
        class="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div class="bg-[#2D2A3E] rounded-3xl p-8 text-white text-center">
      <a href="https://maps.app.goo.gl/SXxf1E9HAqBzCUpAA" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition-colors mb-1 inline-block">301 E 28th Street, Ogden, UT 84414</a>
      <p class="text-sm text-gray-400">{T.about.hours}</p>
    </div>
  </div>

</section>
