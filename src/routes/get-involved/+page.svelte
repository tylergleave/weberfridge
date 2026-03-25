<svelte:head>
  <title>Get Involved — Weber Fridge</title>
</svelte:head>

<section class="bg-gradient-to-br from-[#EEF8E4] to-[#FDE8F0] py-16">
  <div class="max-w-3xl mx-auto px-4 text-center">
    <h1 class="font-display text-5xl font-black text-[#7DC242] mb-4">Get Involved</h1>
    <p class="text-lg text-[#2D2A3E]/70 italic font-display">Every bit of help keeps the fridge running.</p>
  </div>
</section>

<section class="max-w-3xl mx-auto px-4 py-16 space-y-16">

  <!-- Donate food -->
  <div id="donate-food">
    <div class="flex items-center gap-3 mb-5">
      <div class="w-12 h-12 rounded-full bg-[#7DC242] flex items-center justify-center text-white text-2xl font-bold">🌽</div>
      <h2 class="font-display text-3xl font-black text-[#7DC242]">Donate Food</h2>
    </div>
    <p class="text-[#2D2A3E]/70 leading-relaxed mb-6">
      You can drop off food directly at the fridge at <a href="https://maps.app.goo.gl/SXxf1E9HAqBzCUpAA" target="_blank" rel="noopener noreferrer" class="text-[#E8538A] hover:underline">301 E 28th Street</a>, any time of day or night. Here's what we can and can't accept:
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div class="bg-[#EEF8E4] rounded-2xl p-6 border border-[#7DC242]/20">
        <h4 class="font-bold text-[#5A9A2A] mb-3 flex items-center gap-2"><span>✅</span> Great donations</h4>
        <ul class="text-sm text-[#2D2A3E]/70 space-y-1 leading-relaxed">
          <li>Fresh fruits and vegetables</li>
          <li>Home-cooked meals (labelled and dated)</li>
          <li>Shelf-stable pantry items</li>
          <li>Dairy (check expiry)</li>
          <li>Bread and baked goods</li>
          <li>Non-food hygiene items</li>
        </ul>
      </div>
      <div class="bg-[#FDE8F0] rounded-2xl p-6 border border-[#E8538A]/20">
        <h4 class="font-bold text-[#c93d72] mb-3 flex items-center gap-2"><span>❌</span> Please don't bring</h4>
        <ul class="text-sm text-[#2D2A3E]/70 space-y-1 leading-relaxed">
          <li>Clothes</li>
          <li>Expired food</li>
          <li>Opened or partially consumed items</li>
          <li>Unlabelled home-cooked meals</li>
          <li>Alcohol</li>
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
      <h2 class="font-display text-3xl font-black text-[#E8538A]">Donate Money</h2>
    </div>
    <p class="text-[#2D2A3E]/70 leading-relaxed mb-6">
      Financial donations help us cover maintenance, event supplies, grocery runs, and more. Every dollar goes directly to keeping the fridge running and our community fed.
    </p>
    <div class="bg-white rounded-3xl p-8 border border-[#FDE8F0] shadow-sm text-center">
      <p class="font-display text-xl font-bold text-[#2D2A3E] mb-6">Ways to give</p>
      <div class="flex flex-wrap justify-center gap-4">
        <a
          href="https://hcb.hackclub.com/donations/start/weber-fridge"
          target="_blank"
          rel="noopener noreferrer"
          class="px-6 py-3 rounded-full bg-[#E8538A] text-white font-bold hover:bg-[#c93d72] transition-colors shadow"
        >
          Donate Now 🍉
        </a>
      </div>
      <p class="text-xs text-[#2D2A3E]/40 mt-5">
        Donations are processed securely through HCB (Hack Club).
        We believe in full financial transparency —
        <a
          href="https://hcb.hackclub.com/weber-fridge"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[#E8538A] hover:underline"
        >view our public finances here</a>.
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
      <h2 class="font-display text-3xl font-black text-[#2D2A3E]">Volunteer</h2>
    </div>
    <p class="text-[#2D2A3E]/70 leading-relaxed mb-6">
      The fridge runs entirely on volunteer effort. Here are some of the ways you can pitch in:
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {#each [
        { emoji: '🧹', title: 'Fridge maintenance', desc: 'Regular cleaning and restocking checks.' },
        { emoji: '🍳', title: 'Cook & donate meals', desc: 'Make a big pot of something delicious and drop it off.' },
        { emoji: '📣', title: 'Spread the word', desc: 'Share on social media or with your neighbors.' },
        { emoji: '🎉', title: 'Help at events', desc: 'Lend a hand at Weber Eats and free market days.' },
      ] as item}
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
        <p class="font-bold text-[#2D2A3E] mb-1">Join the volunteer Signal chat</p>
        <p class="text-sm text-[#2D2A3E]/65 leading-relaxed">The best way to get plugged in is our volunteer group on Signal — that's where we coordinate restocking, events, and everything in between.</p>
      </div>
      <a
        href="https://signal.group/#CjQKIHPfRBG3WsthyhPAmgnTBvY9l_MynKi4fL6R_5ZwJI9sEhBo9ZZy6Wyy1GNsxQC7Upda"
        target="_blank"
        rel="noopener noreferrer"
        class="flex-shrink-0 px-5 py-2.5 rounded-full bg-[#7DC242] text-white font-bold text-sm hover:bg-[#5A9A2A] transition-colors shadow"
      >
        Join Signal →
      </a>
    </div>
  </div>

</section>

<!-- Bottom banner -->
<section class="bg-[#2D2A3E] py-14">
  <div class="max-w-3xl mx-auto px-4 text-center">
    <p class="font-display text-3xl font-black text-white mb-2">
      Thank you for showing up <span class="text-[#E8538A]">for each other.</span>
    </p>
    <p class="text-gray-400 text-sm mt-3">Weber Fridge · <a href="https://maps.app.goo.gl/SXxf1E9HAqBzCUpAA" target="_blank" rel="noopener noreferrer" class="hover:text-gray-200 transition-colors">301 E 28th Street, Ogden UT 84414</a></p>
  </div>
</section>
