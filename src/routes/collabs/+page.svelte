<svelte:head>
  <title>Collaborators — Weber Fridge</title>
</svelte:head>

<script>
  const collabs = [
    // A
    { name: 'Ability Innovations', url: 'https://www.abilityinnovations.com/' },
    { name: 'Association For Utah Community Health (AUCH)', url: 'https://auch.org/' },

    // B
    { name: 'Beehive Meals', url: 'https://www.instagram.com/beehivemeals/' },
    { name: 'Big Deal Outlet', url: 'https://www.bigdealoutlet.com/' },
    { name: 'Boy Scouts of America', url: 'https://www.scouting.org/' },

    // C
    { name: 'Cache Fridge', url: null },
    { name: 'Cache Valley Mutual Aid', url: null },
    { name: 'Congregation Brith Sholem', url: null },
    { name: 'Cottages of Hope', url: 'https://www.cottagesofhope.org/' },
    { name: 'Community of Christ — Ogden', url: 'https://cofchrist.org/groupfinder/group-detail/164174/' },
    { name: 'Crepes For A Cause: Willard', url: null },

    // D
    { name: 'Division of Child & Family Services / CPS', url: null },
    { name: 'Do Good Today', url: 'https://dogoodtodayutah.org/' },

    // E
    { name: 'Earth Church', url: 'https://www.instagram.com/earthchurchutah/' },
    { name: 'Encircle Ogden', url: null },
    { name: 'The Episcopal Church of the Good Shepherd', url: 'http://www.goodshepherdogden.org/' },

    // F
    { name: 'Ferro Concepts', url: 'https://ferroconcepts.com/' },
    { name: 'Fiction Ogden', url: 'https://www.fictionogden.com/' },
    { name: 'The Flower Shop', url: 'https://theflowershopusa.com/ogden/' },
    { name: "Foley's MMA", url: 'https://www.foleysmma.com/' },
    { name: 'Foodscaping Utah', url: 'https://www.facebook.com/reel/1440726614012472/' },
    { name: 'Freedge.org', url: 'http://freedge.org' },
    { name: 'Friends on Fire', url: null },

    // G
    { name: "God's Place", url: null },

    // H
    { name: 'Highmark Charter School', url: 'https://www.highmarkhawks.com/' },
    { name: 'Homeless Veterans Fellowship', url: null },
    { name: 'Honey Bee Nature School', url: 'https://www.honeybeenatureschool.com/' },
    { name: 'House Cat Cafe and Pet Food Pantry', url: 'https://www.thehousecatcafe.com/' },
    { name: 'Hulking Boy Giant', url: 'https://www.facebook.com/HBGSLC' },

    // I
    { name: 'Indivisible Box Elder', url: null },
    { name: 'Indivisible Ogden', url: null },
    { name: 'Intermountain Health — McKay-Dee Hospital', url: 'https://intermountainhealthcare.org/locations/mckay-dee-hospital' },

    // J
    { name: "Jeremiah's Utah", url: 'https://www.jeremiahsutah.com/' },
    { name: 'Junior League of Ogden / Oasis Community Garden', url: 'https://ogden.jl.org/' },

    // K
    { name: 'Kamikazes', url: 'https://www.facebook.com/kamikazes.ogden' },
    { name: 'Kevin Lundell', url: null },

    // L
    { name: 'The Lab Utah', url: 'https://www.thelabutah.com/' },
    { name: 'Lifeline Direct Services', url: 'https://www.lifelinedirectservices.com/' },
    { name: 'Lost Texan BBQ', url: 'https://losttexanbbq.com/' },
    { name: 'Luxology Naturals', url: 'https://campsite.bio/luxologynaturals' },

    // M
    { name: 'Misfit Mushrooms', url: 'https://www.instagram.com/misfitmushrooms/' },
    { name: 'Morgan County Food Pantry', url: null },
    { name: 'My Hometown Ogden', url: null },

    // O
    { name: 'Ogden Botanical Gardens', url: null },
    { name: 'Ogden Farmers Market', url: null },
    { name: 'Ogden Fire Department — Mobile Outreach Clinic', url: 'https://www.ogdencity.gov/182/Fire-Department' },
    { name: 'Ogden Police Department', url: 'https://www.facebook.com/100064380801378/posts/pfbid0347xtJsMZ4ZbxQjMVXrpGW1bRMBtcMfJGecPxGc6BxMZTMvJP7yemx322QaPccuyRl/' },
    { name: 'Ogden Regional Medical Center', url: 'https://en.wikipedia.org/wiki/Ogden_Regional_Medical_Center' },
    { name: 'Ogden Rescue Mission', url: null },
    { name: 'OgdenCAN', url: null },
    { name: 'OWCAP', url: 'https://www.owcap.org/' },

    // P
    { name: 'Prince of Peace Lutheran Church', url: null },
    { name: 'Project 777', url: null },

    // R
    { name: 'Raven Studio / Scarlett Reign Tattoo', url: 'https://www.facebook.com/100087952752568/posts/186576304284127/' },
    { name: 'Reapers of The Sky', url: 'https://www.facebook.com/ReaperforaDay' },
    { name: 'Roads To Independence', url: 'https://rticil.org/' },

    // S
    { name: 'St. Annes / Lantern House', url: null },
    { name: 'St. Joseph Church (St. Vincent DePaul)', url: 'https://ssvpusa.org/' },
    { name: 'St. Joseph Elementary School', url: 'https://www.stjosephutah.com/' },
    { name: 'Salt Lake Community Mutual Aid', url: 'https://slcmutualaid.com/' },
    { name: 'Salt Lake DSA', url: 'http://saltlakedsa.org/' },
    { name: 'Salvation Army', url: 'https://maps.app.goo.gl/yf6AU8Gq2LhBKHmM9' },
    { name: 'The Smokey Sasquatch', url: null },

    // T
    { name: 'Topper Bakery', url: 'http://topperbakery.com/' },
    { name: 'Tri-City Exchange', url: 'https://www.facebook.com/tricityexchangeut/' },

    // U
    { name: 'Urban Prairie Agriculture', url: 'https://urbanprairieag.com/' },
    { name: 'Uptown Cheapskate', url: 'https://www.uptowncheapskate.com/' },
    { name: 'USARA — Ogden Recovery Community Center', url: 'https://www.utahrecovers.org/locations/ogden/' },

    // W
    { name: 'WasteLess Solutions', url: 'https://wastelesssolutions.org/' },
    { name: 'We The People\'s Movement', url: 'https://www.instagram.com/wethepeoplesmovement' },
    { name: 'Weber County Progressive Caucus', url: null },
    { name: 'Weber Human Services', url: 'https://www.weberhs.net/' },
    { name: 'Weber State University', url: 'https://www.weber.edu/' },
    { name: 'Weber-Morgan Health Department', url: 'https://www.webermorganhealth.gov/' },
    { name: 'WM Collective Studio', url: 'https://wmcollectivestudio.wixsite.com/wmstudio/blank-2' },

    // Y
    { name: 'YCC Family Crisis Center', url: 'https://www.yccogden.org/' },
    { name: 'The Yart Sale', url: 'https://www.instagram.com/theyartsale/' },
    { name: 'Youth Futures', url: null },
    { name: 'Youth Impact', url: 'https://youthimpactogden.org/' },

    // Z
    { name: 'Zaza', url: 'https://www.facebook.com/Zaza.Historia' },
  ];

  const total = collabs.length;
  const linked = collabs.filter(c => c.url).length;
</script>

<section class="bg-gradient-to-br from-[#2D2A3E] to-[#4a3060] py-16">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h1 class="font-display text-5xl font-black text-white mb-4">Collaborators</h1>
    <p class="text-gray-300 text-lg italic font-display">The broader network that makes this work possible.</p>
  </div>
</section>

<section class="max-w-4xl mx-auto px-4 py-12">

  <p class="text-[#2D2A3E]/70 leading-relaxed mb-2">
    Weber Fridge has been lifted up by an extraordinary network of organizations, businesses, churches, schools, and individuals across northern Utah and beyond. This page is our attempt to name and honor all of them.
  </p>
  <p class="text-xs text-[#2D2A3E]/40 mb-10">{total} collaborators listed &nbsp;·&nbsp; {linked} with links</p>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
    {#each collabs as org}
      {#if org.url}
        <a
          href={org.url}
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center justify-between gap-2 px-4 py-3 bg-white rounded-xl border border-[#f0edf8] hover:border-[#E8538A] hover:shadow-sm transition-all"
        >
          <span class="text-sm font-semibold text-[#2D2A3E] group-hover:text-[#E8538A] transition-colors leading-snug">{org.name}</span>
          <svg class="w-3.5 h-3.5 text-[#2D2A3E]/25 group-hover:text-[#E8538A] flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      {:else}
        <div class="flex items-center px-4 py-3 bg-[#faf9fc] rounded-xl border border-[#f0edf8]">
          <span class="text-sm font-semibold text-[#2D2A3E]/60 leading-snug">{org.name}</span>
        </div>
      {/if}
    {/each}
  </div>

  <p class="text-xs text-center text-[#2D2A3E]/35 mt-10">
    Know of someone we've missed? <a href="/contact" class="text-[#E8538A] hover:underline">Let us know.</a>
  </p>

</section>
