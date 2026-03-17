<script>
  import watermelon from '$lib/assets/watermelon.svg';
</script>

<svelte:head>
  <title>Weber Fridge — Free Food, No Stigma</title>
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden" style="background: radial-gradient(ellipse at 30% 50%, #FDE8F0 0%, #EEF8E4 40%, #E8F4FD 100%);">
  <div class="max-w-5xl mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-10">
    <div class="flex-1 text-center md:text-left">
      <p class="inline-block px-4 py-1 rounded-full bg-[#E8538A]/10 text-[#E8538A] text-sm font-semibold mb-4 tracking-wide uppercase">
        Ogden, Utah
      </p>
      <h1 class="font-display text-5xl md:text-7xl font-black leading-none mb-4">
        <span class="text-[#E8538A]">Weber</span><br>
        <span class="text-[#7DC242]">Fridge</span>
      </h1>
      <p class="text-2xl md:text-3xl font-display italic font-bold text-[#2D2A3E]/70 mb-6">
        Free Food. No Stigma.
      </p>
      <p class="text-base text-[#2D2A3E]/70 max-w-md mb-8 leading-relaxed">
        A community fridge at 301 E 28th Street, Ogden UT — stocked and maintained by neighbors, for neighbors. Take what you need, leave what you can.
      </p>
      <div class="flex flex-wrap gap-3 justify-center md:justify-start">
        <a href="/get-involved" class="px-6 py-3 rounded-full bg-[#E8538A] text-white font-bold hover:bg-[#c93d72] transition-colors shadow-lg">
          Get Involved
        </a>
        <a href="/events" class="px-6 py-3 rounded-full border-2 border-[#7DC242] text-[#5A9A2A] font-bold hover:bg-[#EEF8E4] transition-colors">
          Upcoming Events
        </a>
      </div>
    </div>
    <div class="flex-shrink-0">
      <img
        src={watermelon}
        alt="Weber Fridge watermelon"
        class="w-56 md:w-80 drop-shadow-2xl animate-[spin_20s_linear_infinite] hover:[animation-play-state:paused]"
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
      <h3 class="font-display text-xl font-bold text-[#E8538A] mb-2">Take What You Need</h3>
      <p class="text-sm text-[#2D2A3E]/70 leading-relaxed">
        The fridge is always open. No questions, no applications, no shame. Grab a meal, some produce, or a snack whenever you need it.
      </p>
    </div>

    <div class="bg-white rounded-3xl p-8 shadow-sm border border-[#EEF8E4] text-center">
      <div class="text-4xl mb-4">🌱</div>
      <h3 class="font-display text-xl font-bold text-[#7DC242] mb-2">Leave What You Can</h3>
      <p class="text-sm text-[#2D2A3E]/70 leading-relaxed">
        Home-cooked meals, garden produce, pantry surplus — if it's safe to eat, it belongs in the fridge. Help us keep it stocked for the community.
      </p>
    </div>

    <div class="bg-white rounded-3xl p-8 shadow-sm border border-[#FDE8F0] text-center">
      <div class="text-4xl mb-4">🤝</div>
      <h3 class="font-display text-xl font-bold text-[#E8538A] mb-2">Mutual Aid in Action</h3>
      <p class="text-sm text-[#2D2A3E]/70 leading-relaxed">
        This fridge is run entirely by volunteers and community members. No bureaucracy — just neighbors helping neighbors.
      </p>
    </div>

  </div>
</section>

<!-- Events teaser -->
<section class="bg-[#2D2A3E] py-16">
  <div class="max-w-5xl mx-auto px-4 text-center">
    <h2 class="font-display text-4xl font-black text-white mb-3">
      Community <span class="text-[#E8538A]">Events</span>
    </h2>
    <p class="text-gray-300 max-w-lg mx-auto mb-8 leading-relaxed">
      We host free community meals, really-really-free markets, and seasonal celebrations throughout the year. Everyone is welcome — always.
    </p>
    <a href="/events" class="px-8 py-3 rounded-full bg-[#E8538A] text-white font-bold hover:bg-[#c93d72] transition-colors shadow-lg inline-block">
      See All Events
    </a>
  </div>
</section>

<!-- Partners banner -->
<section class="bg-[#FFF9F5] py-12 border-t border-[#FDE8F0]">
  <div class="max-w-5xl mx-auto px-4 text-center">
    <p class="text-xs uppercase tracking-widest text-[#2D2A3E]/40 font-semibold mb-6">Community Partners</p>
    <div class="flex flex-wrap justify-center items-center gap-8 text-[#2D2A3E]/50 font-semibold text-sm">
      <span class="hover:text-[#E8538A] transition-colors cursor-default">Ogden Mutual Aid</span>
      <span class="text-[#7DC242]">🌿</span>
      <span class="hover:text-[#E8538A] transition-colors cursor-default">Urban Prairie Agriculture</span>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="max-w-5xl mx-auto px-4 py-20 text-center">
  <div class="bg-gradient-to-br from-[#FDE8F0] to-[#EEF8E4] rounded-3xl p-12">
    <h2 class="font-display text-4xl font-black text-[#2D2A3E] mb-4">
      Ready to help feed Ogden?
    </h2>
    <p class="text-[#2D2A3E]/70 max-w-md mx-auto mb-8">
      Whether you want to donate food, volunteer time, or just spread the word — every bit makes a difference.
    </p>
    <a href="/get-involved" class="px-8 py-4 rounded-full bg-[#7DC242] text-white font-bold text-lg hover:bg-[#5A9A2A] transition-colors shadow-lg inline-block">
      Get Involved 🍉
    </a>
  </div>
</section>
