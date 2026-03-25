<svelte:head>
  <title>About — Weber Fridge</title>
</svelte:head>

<!-- Page hero -->
<section class="bg-gradient-to-br from-[#FDE8F0] to-[#EEF8E4] py-16">
  <div class="max-w-3xl mx-auto px-4 text-center">
    <h1 class="font-display text-5xl font-black text-[#E8538A] mb-4">About Weber Fridge</h1>
    <p class="text-lg text-[#2D2A3E]/70 italic font-display">Rooted in community. Fueled by mutual aid.</p>
  </div>
</section>

<section class="max-w-3xl mx-auto px-4 py-16 space-y-14">

  <!-- Mission -->
  <div>
    <h2 class="font-display text-3xl font-black text-[#2D2A3E] mb-4">Our Mission</h2>
    <p class="text-[#2D2A3E]/75 leading-relaxed text-lg">
      Weber Fridge is a community-run, always-open refrigerator and pantry located in Ogden, Utah. We believe that access to food is a basic human right — not something anyone should have to earn, prove need for, or feel ashamed about.
    </p>
    <p class="text-[#2D2A3E]/75 leading-relaxed text-lg mt-4">
      Our model is simple: <strong>take what you need, leave what you can</strong>. There are no applications, no eligibility requirements, no means testing. The fridge is open to everyone, always.
    </p>
  </div>

  <!-- Divider with watermelon seeds motif -->
  <div class="flex items-center gap-4">
    <div class="flex-1 h-px bg-[#FDE8F0]"></div>
    <span class="text-2xl">🍉</span>
    <div class="flex-1 h-px bg-[#FDE8F0]"></div>
  </div>

  <!-- How it works -->
  <div>
    <h2 class="font-display text-3xl font-black text-[#7DC242] mb-6">How It Works</h2>
    <div class="space-y-4">
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#E8538A] text-white font-bold flex items-center justify-center font-display">1</div>
        <div>
          <h4 class="font-bold text-[#2D2A3E] mb-1">Community stocks the fridge</h4>
          <p class="text-[#2D2A3E]/65 text-sm leading-relaxed">Volunteers, local restaurants, home cooks, and gardeners bring food to the fridge throughout the week. Donations from our community partners keep it full year-round.</p>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#7DC242] text-white font-bold flex items-center justify-center font-display">2</div>
        <div>
          <h4 class="font-bold text-[#2D2A3E] mb-1">Anyone can take what they need</h4>
          <p class="text-[#2D2A3E]/65 text-sm leading-relaxed">The fridge is unlocked and accessible 24/7. No sign-in, no questions asked. Grab what you need anytime.</p>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#E8538A] text-white font-bold flex items-center justify-center font-display">3</div>
        <div>
          <h4 class="font-bold text-[#2D2A3E] mb-1">We host community events</h4>
          <p class="text-[#2D2A3E]/65 text-sm leading-relaxed">From free soup-and-sandwich days to pancake breakfasts to really-really-free markets, we build community around food and mutual support.</p>
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
    <h2 class="font-display text-3xl font-black text-[#2D2A3E] mb-6">Our Partners</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <a href="https://urbanprairieag.com/" target="_blank" rel="noopener noreferrer" class="bg-white rounded-2xl p-6 border border-[#EEF8E4] shadow-sm text-center hover:border-[#7DC242] transition-colors group">
        <div class="text-3xl mb-3">🌾</div>
        <h4 class="font-display font-bold text-[#7DC242] mb-1 group-hover:underline">Urban Prairie Agriculture</h4>
        <p class="text-xs text-[#2D2A3E]/60 leading-relaxed">Urban Prairie graciously hosts the fridge at their property and keeps it stocked with fresh, locally grown produce.</p>
      </a>
      <a href="https://losttexanbbq.com/" target="_blank" rel="noopener noreferrer" class="bg-white rounded-2xl p-6 border border-[#FDE8F0] shadow-sm text-center hover:border-[#E8538A] transition-colors group">
        <div class="text-3xl mb-3">🔥</div>
        <h4 class="font-display font-bold text-[#E8538A] mb-1 group-hover:underline">Lost Texan BBQ</h4>
        <p class="text-xs text-[#2D2A3E]/60 leading-relaxed">A local BBQ joint that has brought the heat to our community events and helped feed Ogden.</p>
      </a>
      <a href="https://www.utahrecovers.org/locations/ogden/" target="_blank" rel="noopener noreferrer" class="bg-white rounded-2xl p-6 border border-[#e8e7ef] shadow-sm text-center hover:border-[#2D2A3E] transition-colors group">
        <div class="text-3xl mb-3">🤝</div>
        <h4 class="font-display font-bold text-[#2D2A3E] mb-1 group-hover:underline">USARA Ogden</h4>
        <p class="text-xs text-[#2D2A3E]/60 leading-relaxed">Utah Support Advocates for Recovery Awareness, running the Ogden Recovery Community Center.</p>
      </a>
    </div>
  </div>

  <!-- Find us -->
  <div>
    <h2 class="font-display text-3xl font-black text-[#2D2A3E] mb-6">Find the Fridge</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 rounded-3xl overflow-hidden">
      <img
        src="/images/community_events/fridge_2.jpg"
        alt="The exterior of the Weber Fridge with its colorful painted door at 301 E 28th Street"
        class="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
      />
      <img
        src="/images/community_events/fridge_1.jpg"
        alt="The Weber Fridge open and stocked with food and pantry items"
        class="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div class="bg-[#2D2A3E] rounded-3xl p-8 text-white text-center">
      <a href="https://maps.app.goo.gl/SXxf1E9HAqBzCUpAA" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition-colors mb-1 inline-block">301 E 28th Street, Ogden, UT 84414</a>
      <p class="text-sm text-gray-400">Open 24/7 — no need to knock</p>
    </div>
  </div>

</section>
