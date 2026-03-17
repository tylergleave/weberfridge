<script>
  // Placeholder events — replace with real data or a CMS
  const upcomingEvents = [
  ];

  const pastEvents = [
    {
      title: 'Weber Fridge 3rd Birthday',
      date: 'November 22, 2025',
      description: 'Three years of free food and community! We celebrated with hot food, cake, drinks, and a Really Really Free Market with winter gear.',
      emoji: '🎂',
    },
    {
      title: 'Weber Eats: Free Soup & Sandwiches (Valentine\'s)',
      date: 'February 14, 2025',
      description: 'A Valentine\'s Day community meal with the Ogden Mutual Aid crew. Soup, sandwiches, and solidarity.',
      emoji: '🍲',
    },
  ];
</script>

<svelte:head>
  <title>Events — Weber Fridge</title>
</svelte:head>

<section class="bg-gradient-to-br from-[#2D2A3E] to-[#4a3060] py-16">
  <div class="max-w-3xl mx-auto px-4 text-center">
    <h1 class="font-display text-5xl font-black text-white mb-4">Events</h1>
    <p class="text-gray-300 text-lg italic font-display">Come hungry. Leave full. Always free.</p>
  </div>
</section>

<section class="max-w-3xl mx-auto px-4 py-16">

  <h2 class="font-display text-3xl font-black text-[#E8538A] mb-8">Upcoming Events</h2>

  {#if upcomingEvents.length > 0}
    <div class="space-y-6 mb-16">
      {#each upcomingEvents as event}
        <div class="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#FDE8F0] flex flex-col sm:flex-row">
          <!-- Color sidebar -->
          <div class="sm:w-3 flex-shrink-0" style="background-color: {event.color};"></div>
          <div class="p-7 flex-1">
            <div class="flex flex-wrap gap-2 mb-3">
              {#each event.tags as tag}
                <span class="px-3 py-0.5 rounded-full text-xs font-semibold" style="background-color: {event.color}20; color: {event.color};">
                  {tag}
                </span>
              {/each}
            </div>
            <h3 class="font-display text-2xl font-black text-[#2D2A3E] mb-1">{event.title}</h3>
            <p class="text-sm text-[#2D2A3E]/60 mb-1">📅 {event.date} &nbsp;·&nbsp; ⏰ {event.time}</p>
            <p class="text-sm text-[#2D2A3E]/60 mb-4">📍 {event.location}</p>
            <p class="text-sm text-[#2D2A3E]/70 leading-relaxed">{event.description}</p>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <div class="text-center py-16 bg-white rounded-3xl border border-[#FDE8F0] mb-16">
      <p class="text-4xl mb-4">🍉</p>
      <p class="text-[#2D2A3E]/60 font-display italic">No events scheduled yet — check back soon!</p>
    </div>
  {/if}

  <!-- Divider -->
  <div class="flex items-center gap-4 mb-10">
    <div class="flex-1 h-px bg-[#FDE8F0]"></div>
    <span class="text-xl text-[#2D2A3E]/30 font-display font-bold">Past Events</span>
    <div class="flex-1 h-px bg-[#FDE8F0]"></div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
    {#each pastEvents as event}
      <div class="bg-[#FFF9F5] rounded-2xl p-6 border border-[#FDE8F0]">
        <div class="text-3xl mb-3">{event.emoji}</div>
        <h4 class="font-display font-bold text-[#2D2A3E] mb-1">{event.title}</h4>
        <p class="text-xs text-[#2D2A3E]/40 mb-3">{event.date}</p>
        <p class="text-sm text-[#2D2A3E]/65 leading-relaxed">{event.description}</p>
      </div>
    {/each}
  </div>

</section>

<!-- Stay in touch -->
<section class="bg-[#EEF8E4] py-14">
  <div class="max-w-3xl mx-auto px-4 text-center">
    <h2 class="font-display text-3xl font-black text-[#7DC242] mb-3">Stay in the loop</h2>
    <p class="text-[#2D2A3E]/65 mb-6">Follow us on Instagram or check our Linktree for the latest event announcements.</p>
    <div class="flex justify-center gap-4">
      <a href="https://www.instagram.com/weberfridge" target="_blank" rel="noopener noreferrer"
        class="px-6 py-3 rounded-full bg-[#E8538A] text-white font-bold hover:bg-[#c93d72] transition-colors shadow">
        Instagram
      </a>
      <a href="https://linktr.ee/weberfridge" target="_blank" rel="noopener noreferrer"
        class="px-6 py-3 rounded-full border-2 border-[#7DC242] text-[#5A9A2A] font-bold hover:bg-[#EEF8E4] transition-colors">
        Linktree
      </a>
    </div>
  </div>
</section>
