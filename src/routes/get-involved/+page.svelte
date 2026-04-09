<script>
  import { langStore } from '$lib/stores/lang.svelte.js';
  import { getT } from '$lib/i18n/index.js';

  const T = $derived(getT(langStore.current));
  const address = '301 E 28th Street';
  const addressUrl = 'https://maps.app.goo.gl/SXxf1E9HAqBzCUpAA';

  const volunteerItems = $derived([
    { emoji: '🧹', title: T.getInvolved.vol1Title, desc: T.getInvolved.vol1Desc },
    { emoji: '🍳', title: T.getInvolved.vol2Title, desc: T.getInvolved.vol2Desc },
    { emoji: '📣', title: T.getInvolved.vol3Title, desc: T.getInvolved.vol3Desc },
    { emoji: '🎉', title: T.getInvolved.vol4Title, desc: T.getInvolved.vol4Desc },
  ]);
</script>

<svelte:head>
  <title>Get Involved — Weber Fridge</title>
</svelte:head>

<section class="bg-gradient-to-br from-[#EEF8E4] to-[#FDE8F0] py-16">
  <div class="max-w-3xl mx-auto px-4 text-center">
    <h1 class="font-display text-5xl font-black text-[#7DC242] mb-4">{T.getInvolved.title}</h1>
    <p class="text-lg text-[#2D2A3E]/70 italic font-display">{T.getInvolved.subtitle}</p>
  </div>
</section>

<section class="max-w-3xl mx-auto px-4 py-16 space-y-16">

  <!-- Donate food -->
  <div id="donate-food">
    <div class="flex items-center gap-3 mb-5">
      <div class="w-12 h-12 rounded-full bg-[#7DC242] flex items-center justify-center text-white text-2xl font-bold">🌽</div>
      <h2 class="font-display text-3xl font-black text-[#7DC242]">{T.getInvolved.donateFoodTitle}</h2>
    </div>
    <p class="text-[#2D2A3E]/70 leading-relaxed mb-6">
      {T.getInvolved.donateFoodText.split('{address}')[0]}<a href={addressUrl} target="_blank" rel="noopener noreferrer" class="text-[#E8538A] hover:underline">{address}</a>{T.getInvolved.donateFoodText.split('{address}')[1]}
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div class="bg-[#EEF8E4] rounded-2xl p-6 border border-[#7DC242]/20">
        <h4 class="font-bold text-[#5A9A2A] mb-3 flex items-center gap-2">{T.getInvolved.goodTitle}</h4>
        <ul class="text-sm text-[#2D2A3E]/70 space-y-1 leading-relaxed">
          {#each T.getInvolved.goodItems as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
      <div class="bg-[#FDE8F0] rounded-2xl p-6 border border-[#E8538A]/20">
        <h4 class="font-bold text-[#c93d72] mb-3 flex items-center gap-2">{T.getInvolved.badTitle}</h4>
        <ul class="text-sm text-[#2D2A3E]/70 space-y-1 leading-relaxed">
          {#each T.getInvolved.badItems as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
    </div>
  </div>

  <div class="flex items-center gap-4">
    <div class="flex-1 h-px bg-[#FDE8F0]"></div>
    <span class="text-2xl">🍉</span>
    <div class="flex-1 h-px bg-[#FDE8F0]"></div>
  </div>

  <!-- Donate money -->
  <div id="donate">
    <div class="flex items-center gap-3 mb-5">
      <div class="w-12 h-12 rounded-full bg-[#E8538A] flex items-center justify-center text-white text-2xl">💸</div>
      <h2 class="font-display text-3xl font-black text-[#E8538A]">{T.getInvolved.donateMoneyTitle}</h2>
    </div>
    <p class="text-[#2D2A3E]/70 leading-relaxed mb-6">
      {T.getInvolved.donateMoneyText}
    </p>
    <div class="bg-white rounded-3xl p-8 border border-[#FDE8F0] shadow-sm text-center">
      <p class="font-display text-xl font-bold text-[#2D2A3E] mb-6">{T.getInvolved.waysToGive}</p>
      <div class="flex flex-wrap justify-center gap-4">
        <a
          href="https://hcb.hackclub.com/donations/start/weber-fridge"
          target="_blank"
          rel="noopener noreferrer"
          class="px-6 py-3 rounded-full bg-[#E8538A] text-white font-bold hover:bg-[#c93d72] transition-colors shadow"
        >
          {T.getInvolved.donateNow}
        </a>
      </div>
      <p class="text-xs text-[#2D2A3E]/40 mt-5">
        {T.getInvolved.donateDisclosure}
        <a
          href="https://hcb.hackclub.com/weber-fridge"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[#E8538A] hover:underline"
        >{T.getInvolved.donateFinances}</a>.
      </p>
    </div>
  </div>

  <div class="flex items-center gap-4">
    <div class="flex-1 h-px bg-[#EEF8E4]"></div>
    <span class="text-2xl">🌱</span>
    <div class="flex-1 h-px bg-[#EEF8E4]"></div>
  </div>

  <!-- Volunteer -->
  <div id="volunteer">
    <div class="flex items-center gap-3 mb-5">
      <div class="w-12 h-12 rounded-full bg-[#2D2A3E] flex items-center justify-center text-white text-2xl">🙌</div>
      <h2 class="font-display text-3xl font-black text-[#2D2A3E]">{T.getInvolved.volunteerTitle}</h2>
    </div>
    <p class="text-[#2D2A3E]/70 leading-relaxed mb-6">
      {T.getInvolved.volunteerText}
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {#each volunteerItems as item}
        <div class="bg-white rounded-2xl p-5 border border-[#EEF8E4] flex gap-4 items-start shadow-sm">
          <span class="text-2xl mt-0.5">{item.emoji}</span>
          <div>
            <h4 class="font-bold text-[#2D2A3E] mb-1">{item.title}</h4>
            <p class="text-xs text-[#2D2A3E]/60 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      {/each}
    </div>
    <div class="mt-6 bg-[#EEF8E4] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div class="text-3xl">📲</div>
      <div class="flex-1">
        <p class="font-bold text-[#2D2A3E] mb-1">{T.getInvolved.signalTitle}</p>
        <p class="text-sm text-[#2D2A3E]/65 leading-relaxed">{T.getInvolved.signalText}</p>
      </div>
      <a
        href="https://signal.group/#CjQKIHPfRBG3WsthyhPAmgnTBvY9l_MynKi4fL6R_5ZwJI9sEhBo9ZZy6Wyy1GNsxQC7Upda"
        target="_blank"
        rel="noopener noreferrer"
        class="flex-shrink-0 px-5 py-2.5 rounded-full bg-[#7DC242] text-white font-bold text-sm hover:bg-[#5A9A2A] transition-colors shadow"
      >
        {T.getInvolved.signalButton}
      </a>
    </div>
  </div>

</section>

<!-- Bottom banner -->
<section class="bg-[#2D2A3E] py-14">
  <div class="max-w-3xl mx-auto px-4 text-center">
    <p class="font-display text-3xl font-black text-white mb-2">
      {T.getInvolved.banner} <span class="text-[#E8538A]">{T.getInvolved.bannerHighlight}</span>
    </p>
    <p class="text-gray-400 text-sm mt-3">Weber Fridge · <a href="https://maps.app.goo.gl/SXxf1E9HAqBzCUpAA" target="_blank" rel="noopener noreferrer" class="hover:text-gray-200 transition-colors">301 E 28th Street, Ogden UT 84414</a></p>
  </div>
</section>
