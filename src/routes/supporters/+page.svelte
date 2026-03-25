<svelte:head>
  <title>Supporters — Weber Fridge</title>
</svelte:head>

<script>
  const supporters = [
    {
      name: 'Urban Prairie Agriculture',
      url: 'https://urbanprairieag.com/',
      emoji: '🌾',
      color: '#7DC242',
      border: '#EEF8E4',
      description: 'Urban Prairie Agriculture graciously hosts the Weber Fridge at their property, making the whole operation possible. On top of that, they keep it stocked with seasonal produce grown right here in the Ogden area — a true pillar of our community.',
    },
    {
      name: 'Lost Texan BBQ',
      url: 'https://losttexanbbq.com/',
      emoji: '🔥',
      color: '#E8538A',
      border: '#FDE8F0',
      description: 'A beloved BBQ spot in Pleasant View serving slow-smoked brisket, pulled pork, ribs, and more. Lost Texan BBQ has brought the heat to our community events and helped feed Ogden with some seriously good food.',
    },
    {
      name: 'USARA — Ogden Recovery Community Center',
      url: 'https://www.utahrecovers.org/locations/ogden/',
      emoji: '🤝',
      color: '#2D2A3E',
      border: '#e8e7ef',
      description: 'Utah Support Advocates for Recovery Awareness (USARA) runs the Ogden Recovery Community Center, providing peer support, resources, and community for people in recovery. Their work and ours share a core belief: everyone deserves dignity, support, and access to what they need.',
    },
  ];
</script>

<section class="bg-gradient-to-br from-[#EEF8E4] to-[#FDE8F0] py-16">
  <div class="max-w-3xl mx-auto px-4 text-center">
    <h1 class="font-display text-5xl font-black text-[#2D2A3E] mb-4">Our Supporters</h1>
    <p class="text-lg text-[#2D2A3E]/70 italic font-display">The community behind the community fridge.</p>
  </div>
</section>

<section class="max-w-3xl mx-auto px-4 py-16 space-y-8">

  <p class="text-[#2D2A3E]/70 leading-relaxed">
    Weber Fridge doesn't run on its own. These organizations have shown up for us — lending food, time, partnership, and shared values. We're grateful for each of them.
  </p>

  {#each supporters as org}
    <div class="bg-white rounded-3xl p-8 shadow-sm border flex flex-col sm:flex-row gap-6 items-start" style="border-color: {org.border};">
      <div
        class="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
        style="background-color: {org.color}18;"
      >
        {org.emoji}
      </div>
      <div class="flex-1">
        <h2 class="font-display text-2xl font-black mb-2" style="color: {org.color};">{org.name}</h2>
        <p class="text-sm text-[#2D2A3E]/70 leading-relaxed mb-4">{org.description}</p>
        <a
          href={org.url}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline transition-colors"
          style="color: {org.color};"
        >
          Visit their website
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  {/each}

  <div class="bg-[#FDE8F0] rounded-3xl p-8 text-center mt-4">
    <p class="font-display text-xl font-black text-[#E8538A] mb-2">Want to support Weber Fridge?</p>
    <p class="text-sm text-[#2D2A3E]/65 mb-5">Whether you're a business, organization, or individual — there are lots of ways to get involved.</p>
    <div class="flex flex-wrap justify-center gap-3">
      <a href="/get-involved" class="px-5 py-2.5 rounded-full bg-[#E8538A] text-white font-bold text-sm hover:bg-[#c93d72] transition-colors shadow">
        Get Involved
      </a>
      <a href="/contact" class="px-5 py-2.5 rounded-full border-2 border-[#E8538A] text-[#E8538A] font-bold text-sm hover:bg-[#FDE8F0] transition-colors">
        Contact Us
      </a>
    </div>
  </div>

</section>
