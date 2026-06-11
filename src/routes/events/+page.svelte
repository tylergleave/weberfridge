<script>
  import { langStore } from '$lib/stores/lang.svelte.js';
  import { getT } from '$lib/i18n/index.js';

  const T = $derived(getT(langStore.current));

  // ── Date helpers (language-aware) ──────────────────────────

  function nextWeekday(dayOfWeek) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diff = (dayOfWeek - today.getDay() + 7) % 7;
    const result = new Date(today);
    result.setDate(today.getDate() + diff);
    return result;
  }

  function nextFirstSundayInSeason() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    for (let i = 0; i < 12; i++) {
      const year = today.getFullYear();
      const month = (today.getMonth() + i) % 12;
      const yearOffset = Math.floor((today.getMonth() + i) / 12);
      if (month < 3 || month > 8) continue;
      const firstOfMonth = new Date(year + yearOffset, month, 1);
      const dayOffset = (7 - firstOfMonth.getDay()) % 7;
      const firstSunday = new Date(year + yearOffset, month, 1 + dayOffset);
      if (firstSunday >= today) return firstSunday;
    }
    return null;
  }

  // Reactive event list — rebuilds whenever language changes.
  // Helper that builds the list given the current translations.
  function buildEvents(te, currentLang) {
    const fmt = (d) => te.formatDate(d, te.months, te.days);

    const nextSunday = nextWeekday(0);
    const nextFirstSunday = nextFirstSundayInSeason();
    const sameDay =
      nextFirstSunday &&
      nextFirstSunday.toDateString() === nextSunday.toDateString();

    const recurring = [
      {
        title: sameDay ? te.breakfastCombinedTitle : te.breakfastTitle,
        date: fmt(nextSunday),
        time: '10:00 AM – 12:00 PM',
        location: '301 E 28th Street, Ogden UT',
        locationUrl: 'https://maps.app.goo.gl/SXxf1E9HAqBzCUpAA',
        description: sameDay
          ? te.breakfastCombinedDesc(fmt(nextSunday))
          : te.breakfastDesc(fmt(nextSunday)),
        tags: sameDay
          ? [te.breakfastTag, te.breakfastCombinedTag]
          : [te.recurringTag],
        color: '#7DC242',
        sortDate: nextSunday,
      },
      ...(!sameDay && nextFirstSunday
        ? [
            {
              title: te.planningTitle,
              date: fmt(nextFirstSunday),
              time: '10:00 AM',
              location: '301 E 28th Street, Ogden UT',
              locationUrl: 'https://maps.app.goo.gl/SXxf1E9HAqBzCUpAA',
              description: te.planningDesc,
              tags: [te.planningTag],
              color: '#E8538A',
              sortDate: nextFirstSunday,
            },
          ]
        : []),
    ];

    const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    const oneTime = [
      {
        title: te.weberEatsTitle,
        date: currentLang === 'es' ? 'sábado, 13 de junio' : 'Saturday, June 13',
        time: '12:00 PM – 2:00 PM',
        location: '301 E 28th Street, Ogden UT',
        locationUrl: 'https://maps.app.goo.gl/SXxf1E9HAqBzCUpAA',
        description: te.weberEatsDesc,
        tags: [te.weberEatsTag, te.prideTag, te.freeFoodTag],
        color: '#E8538A',
        sortDate: new Date(2026, 5, 13),
      },
    ].filter((e) => e.sortDate >= today);

    return [...recurring, ...oneTime].sort((a, b) => a.sortDate - b.sortDate);
  }

  const upcomingEvents = $derived(buildEvents(T.events, langStore.current));

  const pastEvents = $derived([
    {
      title: T.events.birthdayTitle,
      date: T.events.birthdayDate,
      description: T.events.birthdayDesc,
      emoji: '🎂',
    },
    {
      title: T.events.valentinesTitle,
      date: T.events.valentinesDate,
      description: T.events.valentinesDesc,
      emoji: '🍲',
    },
  ]);
</script>

<svelte:head>
  <title>Events — Weber Fridge</title>
</svelte:head>

<section class="bg-gradient-to-br from-[#2D2A3E] to-[#4a3060] py-16">
  <div class="max-w-3xl mx-auto px-4 text-center">
    <h1 class="font-display text-5xl font-black text-white mb-4">{T.events.title}</h1>
    <p class="text-gray-300 text-lg italic font-display">{T.events.subtitle}</p>
  </div>
</section>

<section class="max-w-3xl mx-auto px-4 py-16">

  <h2 class="font-display text-3xl font-black text-[#E8538A] mb-8">{T.events.upcomingTitle}</h2>

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
    <span class="text-xl text-[#2D2A3E]/30 font-display font-bold">{T.events.pastTitle}</span>
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
    <h2 class="font-display text-3xl font-black text-[#7DC242] mb-3">{T.events.stayTitle}</h2>
    <p class="text-[#2D2A3E]/65 mb-6">{T.events.stayText}</p>
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
