<script>
  // Compute next occurrence of a given weekday (0=Sun, 1=Mon, ...)
  // Returns a Date at midnight local time on or after today
  function nextWeekday(dayOfWeek) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diff = (dayOfWeek - today.getDay() + 7) % 7;
    const result = new Date(today);
    result.setDate(today.getDate() + diff);
    return result;
  }

  // Compute the next "first Sunday of the month" on or after today.
  // Only counts months April (3) through September (8).
  function nextFirstSundayInSeason() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    for (let i = 0; i < 12; i++) {
      const year = today.getFullYear();
      const month = (today.getMonth() + i) % 12;
      const yearOffset = Math.floor((today.getMonth() + i) / 12);

      // Only April–September (months 3–8)
      if (month < 3 || month > 8) continue;

      // Find first Sunday of this month
      const firstOfMonth = new Date(year + yearOffset, month, 1);
      const dayOffset = (7 - firstOfMonth.getDay()) % 7;
      const firstSunday = new Date(year + yearOffset, month, 1 + dayOffset);

      if (firstSunday >= today) return firstSunday;
    }
    return null;
  }

  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const DAYS   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  function formatDate(d) {
    return `${DAYS[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}`;
  }

  // Build the upcoming events list
  const nextSunday      = nextWeekday(0);
  const nextFirstSunday = nextFirstSundayInSeason();

  // The weekly breakfast always appears. If the next Sunday happens to also be
  // the first Sunday of the month (i.e. both events fall on the same day),
  // combine them into one card; otherwise show separately.
  const sameDay = nextFirstSunday &&
    nextFirstSunday.toDateString() === nextSunday.toDateString();

  const recurringEvents = [
    {
      title: sameDay ? 'Community Breakfast + Fridge Planning Meeting' : 'Community Breakfast',
      date: formatDate(nextSunday),
      time: '10:00 AM – 12:00 PM',
      location: '301 E 28th Street, Ogden UT',
      locationUrl: 'https://maps.app.goo.gl/SXxf1E9HAqBzCUpAA',
      description: sameDay? 'Join us this ' + formatDate(nextSunday) + ' for a free community breakfast. No sign-up, no requirements — just show up and eat. A warm meal and good company, every week. \n\n Because this is the first sunday of the month, we\'ll also be having our Fridge Planning meeting. We encourage you to join and share your ideas for how to improve the fridge.': 'Join us this Sunday morning for a free community breakfast. No sign-up, no requirements — just show up and eat. A warm meal and good company, every week.',
      tags: sameDay ? ['Breakfast Every Sunday', 'Fridge Planning Meeting this week'] : ['Recurring · Every Sunday'],
      color: '#7DC242',
    },
    ...(!sameDay && nextFirstSunday ? [{
      title: 'Community Meeting + Free Breakfast',
      date: formatDate(nextFirstSunday),
      time: '10:00 AM',
      location: '301 E 28th Street, Ogden UT',
      locationUrl: 'https://maps.app.goo.gl/SXxf1E9HAqBzCUpAA',
      description: 'Bring hunger, yourself, a friend, questions, or an idea to make the fridge better! Your voice matters, your presence counts. Runs April through September.',
      tags: ['Monthly · First Sunday'],
      color: '#E8538A',
    }] : []),
  ];

  // Sort recurring by date so the soonest comes first
  recurringEvents.sort((a, b) => {
    const da = new Date(a.date);
    const db = new Date(b.date);
    return da - db;
  });

  const upcomingEvents = [...recurringEvents];

  const pastEvents = [
    {
      title: 'Weber Fridge 3rd Birthday',
      date: 'November 22, 2025',
      description: 'Three years of free food and community! We celebrated with hot food, cake, drinks, and a Really Really Free Market with winter gear.',
      emoji: '🎂',
    },
    {
      title: "Weber Eats: Free Soup & Sandwiches (Valentine's)",
      date: 'February 14, 2026',
      description: "A Valentine's Day community meal with soup, sandwiches, and solidarity.",
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

  <div class="space-y-6 mb-16">
    {#each upcomingEvents as event}
      <div class="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#F0F0F0] flex flex-col sm:flex-row">
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
          <p class="text-sm text-[#2D2A3E]/60 mb-4">📍 <a href={event.locationUrl} target="_blank" rel="noopener noreferrer" class="hover:text-[#E8538A] transition-colors">{event.location}</a></p>
          <p class="text-sm text-[#2D2A3E]/70 leading-relaxed whitespace-pre-line">{event.description}</p>
        </div>
      </div>
    {/each}
  </div>

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
    <p class="text-[#2D2A3E]/65 mb-6">Follow us on Instagram or Facebook for the latest event announcements.</p>
    <div class="flex flex-wrap justify-center gap-4">
      <a href="https://www.instagram.com/weberfridge" target="_blank" rel="noopener noreferrer"
        class="px-6 py-3 rounded-full bg-[#E8538A] text-white font-bold hover:bg-[#c93d72] transition-colors shadow">
        Instagram
      </a>
      <a href="https://www.facebook.com/weberfridge/" target="_blank" rel="noopener noreferrer"
        class="px-6 py-3 rounded-full bg-[#1877F2] text-white font-bold hover:bg-[#1464d8] transition-colors shadow">
        Facebook
      </a>
      <a href="https://linktr.ee/weberfridge" target="_blank" rel="noopener noreferrer"
        class="px-6 py-3 rounded-full border-2 border-[#7DC242] text-[#5A9A2A] font-bold hover:bg-[#EEF8E4] transition-colors">
        Linktree
      </a>
    </div>
  </div>
</section>
