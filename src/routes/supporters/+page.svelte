<svelte:head>
  <title>Supporters — Weber Fridge</title>
</svelte:head>

<script>
  const supporters = [
    {
      name: 'Urban Prairie Agriculture',
      url: 'https://urbanprairieag.com/',
      description: 'Urban Prairie Agriculture graciously hosts the Weber Fridge at their property, making the whole operation possible. On top of that, they keep it stocked with seasonal produce grown right here in the Ogden area — a true pillar of our community.',
    },
    {
      name: 'Lost Texan BBQ',
      url: 'https://losttexanbbq.com/',
      description: 'A beloved BBQ spot in Pleasant View serving slow-smoked brisket, pulled pork, ribs, and more. Lost Texan BBQ has brought the heat to our community events and helped feed Ogden with some seriously good food.',
    },
    {
      name: 'USARA — Ogden Recovery Community Center',
      url: 'https://www.utahrecovers.org/locations/ogden/',
      description: 'Utah Support Advocates for Recovery Awareness (USARA) runs the Ogden Recovery Community Center, providing peer support, resources, and community for people in recovery. Their work and ours share a core belief: everyone deserves dignity, support, and access to what they need.',
    },
    {
      name: 'The House Cat Cafe',
      url: 'https://www.thehousecatcafe.com/',
      description: 'Ogden\'s cat cafe at 341 27th Street — scratch-made pastries, house-made chai, and a cozy lounge full of adoptable cats. An inclusive, welcoming space that has been a great friend to our community.',
    },
    {
      name: 'Project 777',
      url: null,
      description: 'A community partner helping us extend our reach and serve more people in Ogden.',
    },
    {
      name: 'Friends on Fire',
      url: null,
      description: 'A community partner whose support helps us keep the fridge stocked and our events running.',
    },
    {
      name: 'The Episcopal Church of the Good Shepherd',
      url: 'http://www.goodshepherdogden.org/',
      description: 'A historic and inclusive congregation at 2374 Grant Avenue in Ogden, worshiping in English and Spanish. The Good Shepherd has long been a cornerstone of community care in Weber County.',
    },
    {
      name: 'WasteLess Solutions',
      url: 'https://www.wastelesssolutions.org/',
      description: 'A Utah nonprofit that diverts surplus food from landfills to people facing food insecurity — saving millions of meals across Salt Lake, Box Elder, Summit, and Weber Counties. Their food rescue work aligns directly with ours.',
    },
    {
      name: 'Weber Human Services',
      url: 'https://www.weberhs.net/',
      description: 'The local authority for mental health, substance abuse, and senior services across Weber and Morgan Counties. Weber Human Services provides compassionate, accessible care to thousands of residents who need it most.',
    },
    {
      name: 'Youth Impact',
      url: 'https://youthimpactogden.org/',
      description: 'Serving Ogden\'s inner-city youth since 1992, Youth Impact provides a safe after-school haven with academic support, mentorship, arts, STEM, and life skills. They believe in the same thing we do: that every young person deserves a fair shot.',
    },
  ];
</script>

<section class="bg-gradient-to-br from-[#EEF8E4] to-[#FDE8F0] py-16">
  <div class="max-w-3xl mx-auto px-4 text-center">
    <h1 class="font-display text-5xl font-black text-[#2D2A3E] mb-4">Our Supporters</h1>
    <p class="text-lg text-[#2D2A3E]/70 italic font-display">The community behind the community fridge.</p>
  </div>
</section>

<section class="max-w-3xl mx-auto px-4 py-16 space-y-6">

  <p class="text-[#2D2A3E]/70 leading-relaxed mb-8">
    Weber Fridge doesn't run on its own. These organizations have shown up for us — lending food, time, partnership, and shared values. We're grateful for each of them.
  </p>

  {#each supporters as org}
    <div class="bg-white rounded-2xl p-7 shadow-sm border border-[#f0eef8]">
      <h2 class="font-display text-xl font-black text-[#E8538A] mb-2">{org.name}</h2>
      <p class="text-sm text-[#2D2A3E]/70 leading-relaxed mb-3">{org.description}</p>
      {#if org.url}
        <a
          href={org.url}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7DC242] hover:underline transition-colors"
        >
          Visit their website
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      {/if}
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
