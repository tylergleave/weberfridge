<svelte:head>
  <title>Supporters — Weber Fridge</title>
</svelte:head>

<script>
  import { langStore } from '$lib/stores/lang.svelte.js';
  import { getT } from '$lib/i18n/index.js';

  const T = $derived(getT(langStore.current));

  const supporters = [
    {
      name: 'Urban Prairie Agriculture',
      url: 'https://urbanprairieag.com/',
      descEn: 'Urban Prairie Agriculture graciously hosts the Weber Fridge at their property, making the whole operation possible. On top of that, they keep it stocked with seasonal produce grown right here in the Ogden area — a true pillar of our community.',
      descEs: 'Urban Prairie Agriculture generosamente aloja el Weber Fridge en su propiedad, haciendo posible toda la operación. Además, lo mantienen abastecido con productos de temporada cultivados aquí mismo en el área de Ogden — un verdadero pilar de nuestra comunidad.',
    },
    {
      name: 'Lost Texan BBQ',
      url: 'https://losttexanbbq.com/',
      descEn: 'A beloved BBQ spot in Pleasant View serving slow-smoked brisket, pulled pork, ribs, and more. Lost Texan BBQ has brought the heat to our community events and helped feed Ogden with some seriously good food.',
      descEs: 'Un querido restaurante de BBQ en Pleasant View que sirve brisket ahumado lentamente, cerdo desmenuzado, costillas y más. Lost Texan BBQ ha traído el sabor a nuestros eventos comunitarios y ha ayudado a alimentar a Ogden con comida realmente deliciosa.',
    },
    {
      name: 'USARA — Ogden Recovery Community Center',
      url: 'https://www.utahrecovers.org/locations/ogden/',
      descEn: 'Utah Support Advocates for Recovery Awareness (USARA) runs the Ogden Recovery Community Center, providing peer support, resources, and community for people in recovery. Their work and ours share a core belief: everyone deserves dignity, support, and access to what they need.',
      descEs: 'Utah Support Advocates for Recovery Awareness (USARA) dirige el Centro Comunitario de Recuperación de Ogden, brindando apoyo entre pares, recursos y comunidad para personas en recuperación. Su trabajo y el nuestro comparten una creencia central: todos merecen dignidad, apoyo y acceso a lo que necesitan.',
    },
    {
      name: 'The House Cat Cafe',
      url: 'https://www.thehousecatcafe.com/',
      descEn: 'Ogden\'s cat cafe at 341 27th Street — scratch-made pastries, house-made chai, and a cozy lounge full of adoptable cats. An inclusive, welcoming space that has been a great friend to our community.',
      descEs: 'El café de gatos de Ogden en 341 27th Street — pasteles hechos desde cero, chai casero y un acogedor salón lleno de gatos adoptables. Un espacio inclusivo y acogedor que ha sido un gran amigo de nuestra comunidad.',
    },
    {
      name: 'The Episcopal Church of the Good Shepherd',
      url: 'http://www.goodshepherdogden.org/',
      descEn: 'A historic and inclusive congregation at 2374 Grant Avenue in Ogden, worshiping in English and Spanish. The Good Shepherd has long been a cornerstone of community care in Weber County.',
      descEs: 'Una congregación histórica e inclusiva en 2374 Grant Avenue en Ogden, que celebra el culto en inglés y español. La Iglesia del Buen Pastor ha sido durante mucho tiempo un pilar del cuidado comunitario en el Condado de Weber.',
    },
    {
      name: 'WasteLess Solutions',
      url: 'https://www.wastelesssolutions.org/',
      descEn: 'A Utah nonprofit that diverts surplus food from landfills to people facing food insecurity — saving millions of meals across Salt Lake, Box Elder, Summit, and Weber Counties. Their food rescue work aligns directly with ours.',
      descEs: 'Una organización sin fines de lucro de Utah que desvía alimentos excedentes de los vertederos a personas que enfrentan inseguridad alimentaria — salvando millones de comidas en los condados de Salt Lake, Box Elder, Summit y Weber. Su trabajo de rescate de alimentos se alinea directamente con el nuestro.',
    },
    {
      name: 'Weber Human Services',
      url: 'https://www.weberhs.net/',
      descEn: 'The local authority for mental health, substance abuse, and senior services across Weber and Morgan Counties. Weber Human Services provides compassionate, accessible care to thousands of residents who need it most.',
      descEs: 'La autoridad local para salud mental, abuso de sustancias y servicios para personas mayores en los condados de Weber y Morgan. Weber Human Services brinda atención compasiva y accesible a miles de residentes que más lo necesitan.',
    },
    {
      name: 'Youth Impact',
      url: 'https://youthimpactogden.org/',
      descEn: 'Serving Ogden\'s inner-city youth since 1992, Youth Impact provides a safe after-school haven with academic support, mentorship, arts, STEM, and life skills. They believe in the same thing we do: that every young person deserves a fair shot.',
      descEs: 'Sirviendo a la juventud del centro de Ogden desde 1992, Youth Impact ofrece un refugio seguro después de la escuela con apoyo académico, mentoría, artes, STEM y habilidades para la vida. Creen en lo mismo que nosotros: que cada joven merece una oportunidad justa.',
    },
  ];

  const collabs = [
    { name: 'Ability Innovations', url: 'https://www.abilityinnovations.com/' },
    { name: 'Association For Utah Community Health (AUCH)', url: 'https://auch.org/' },
    { name: 'Beehive Meals', url: 'https://www.instagram.com/beehivemeals/' },
    { name: 'Big Deal Outlet', url: 'https://www.bigdealoutlet.com/' },
    { name: 'Boy Scouts of America', url: 'https://www.scouting.org/' },
    { name: 'Cache Fridge', url: null },
    { name: 'Cache Valley Mutual Aid', url: null },
    { name: 'Congregation Brith Sholem', url: null },
    { name: 'Cottages of Hope', url: 'https://www.cottagesofhope.org/' },
    { name: 'Community of Christ — Ogden', url: 'https://cofchrist.org/groupfinder/group-detail/164174/' },
    { name: 'Crepes For A Cause: Willard', url: null },
    { name: 'Division of Child & Family Services / CPS', url: null },
    { name: 'Do Good Today', url: 'https://dogoodtodayutah.org/' },
    { name: 'Earth Church', url: 'https://www.instagram.com/earthchurchutah/' },
    { name: 'Encircle Ogden', url: null },
    { name: 'The Episcopal Church of the Good Shepherd', url: 'http://www.goodshepherdogden.org/' },
    { name: 'Ferro Concepts', url: 'https://ferroconcepts.com/' },
    { name: 'Fiction Ogden', url: 'https://www.fictionogden.com/' },
    { name: 'The Flower Shop', url: 'https://theflowershopusa.com/ogden/' },
    { name: "Foley's MMA", url: 'https://www.foleysmma.com/' },
    { name: 'Foodscaping Utah', url: 'https://www.facebook.com/reel/1440726614012472/' },
    { name: 'Freedge.org', url: 'http://freedge.org' },
    { name: 'Friends on Fire', url: null },
    { name: "God's Place", url: null },
    { name: 'Highmark Charter School', url: 'https://www.highmarkhawks.com/' },
    { name: 'Homeless Veterans Fellowship', url: null },
    { name: 'Honey Bee Nature School', url: 'https://www.honeybeenatureschool.com/' },
    { name: 'Hulking Boy Giant', url: 'https://www.facebook.com/HBGSLC' },
    { name: 'Indivisible Box Elder', url: null },
    { name: 'Indivisible Ogden', url: null },
    { name: 'Intermountain Health — McKay-Dee Hospital', url: 'https://intermountainhealthcare.org/locations/mckay-dee-hospital' },
    { name: "Jeremiah's Utah", url: 'https://www.jeremiahsutah.com/' },
    { name: 'Junior League of Ogden / Oasis Community Garden', url: 'https://ogden.jl.org/' },
    { name: 'Kamikazes', url: 'https://www.facebook.com/kamikazes.ogden' },
    { name: 'Kevin Lundell', url: null },
    { name: 'The Lab Utah', url: 'https://www.thelabutah.com/' },
    { name: 'Lifeline Direct Services', url: 'https://www.lifelinedirectservices.com/' },
    { name: 'Luxology Naturals', url: 'https://campsite.bio/luxologynaturals' },
    { name: 'Misfit Mushrooms', url: 'https://www.instagram.com/misfitmushrooms/' },
    { name: 'Morgan County Food Pantry', url: null },
    { name: 'My Hometown Ogden', url: null },
    { name: 'Ogden Botanical Gardens', url: null },
    { name: 'Ogden Farmers Market', url: null },
    { name: 'Ogden Fire Department — Mobile Outreach Clinic', url: 'https://www.ogdencity.gov/182/Fire-Department' },
    { name: 'Ogden Police Department', url: 'https://www.facebook.com/100064380801378/posts/pfbid0347xtJsMZ4ZbxQjMVXrpGW1bRMBtcMfJGecPxGc6BxMZTMvJP7yemx322QaPccuyRl/' },
    { name: 'Ogden Regional Medical Center', url: 'https://en.wikipedia.org/wiki/Ogden_Regional_Medical_Center' },
    { name: 'Ogden Rescue Mission', url: null },
    { name: 'OgdenCAN', url: null },
    { name: 'OWCAP', url: 'https://www.owcap.org/' },
    { name: 'Prince of Peace Lutheran Church', url: null },
    { name: 'Project 777', url: null },
    { name: 'Raven Studio / Scarlett Reign Tattoo', url: 'https://www.facebook.com/100087952752568/posts/186576304284127/' },
    { name: 'Reapers of The Sky', url: 'https://www.facebook.com/ReaperforaDay' },
    { name: 'Roads To Independence', url: 'https://rticil.org/' },
    { name: "St. Annes / Lantern House", url: null },
    { name: 'St. Joseph Church (St. Vincent DePaul)', url: 'https://ssvpusa.org/' },
    { name: 'St. Joseph Elementary School', url: 'https://www.stjosephutah.com/' },
    { name: 'Salt Lake Community Mutual Aid', url: 'https://slcmutualaid.com/' },
    { name: 'Salt Lake DSA', url: 'http://saltlakedsa.org/' },
    { name: 'Salvation Army', url: 'https://maps.app.goo.gl/yf6AU8Gq2LhBKHmM9' },
    { name: 'The Smokey Sasquatch', url: null },
    { name: 'Topper Bakery', url: 'http://topperbakery.com/' },
    { name: 'Tri-City Exchange', url: 'https://www.facebook.com/tricityexchangeut/' },
    { name: 'Uptown Cheapskate', url: 'https://www.uptowncheapskate.com/' },
    { name: "We The People's Movement", url: 'https://www.instagram.com/wethepeoplesmovement' },
    { name: 'Weber County Progressive Caucus', url: null },
    { name: 'Weber State University', url: 'https://www.weber.edu/' },
    { name: 'Weber-Morgan Health Department', url: 'https://www.webermorganhealth.gov/' },
    { name: 'WM Collective Studio', url: 'https://wmcollectivestudio.wixsite.com/wmstudio/blank-2' },
    { name: 'YCC Family Crisis Center', url: 'https://www.yccogden.org/' },
    { name: 'The Yart Sale', url: 'https://www.instagram.com/theyartsale/' },
    { name: 'Youth Futures', url: null },
    { name: 'Zaza', url: 'https://www.facebook.com/Zaza.Historia' },
  ];

  const total = collabs.length;
  const linked = collabs.filter(c => c.url).length;
</script>

<section class="bg-gradient-to-br from-[#EEF8E4] to-[#FDE8F0] py-16">
  <div class="max-w-3xl mx-auto px-4 text-center">
    <h1 class="font-display text-5xl font-black text-[#2D2A3E] mb-4">{T.supporters.title}</h1>
    <p class="text-lg text-[#2D2A3E]/70 italic font-display">{T.supporters.subtitle}</p>
  </div>
</section>

<!-- Premium supporters -->
<section class="max-w-3xl mx-auto px-4 py-16 space-y-6">

  <p class="text-[#2D2A3E]/70 leading-relaxed mb-8">
    {T.supporters.intro}
  </p>

  {#each supporters as org}
    <div class="bg-white rounded-2xl p-7 shadow-sm border border-[#f0eef8]">
      <h2 class="font-display text-xl font-black text-[#E8538A] mb-2">{org.name}</h2>
      <p class="text-sm text-[#2D2A3E]/70 leading-relaxed mb-3">
        {langStore.current === 'es' ? org.descEs : org.descEn}
      </p>
      {#if org.url}
        <a
          href={org.url}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7DC242] hover:underline transition-colors"
        >
          {T.supporters.visitWebsite}
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      {/if}
    </div>
  {/each}

</section>

<!-- Other Supporters -->
<section class="bg-[#faf9fc] border-t border-[#f0edf8] py-16">
  <div class="max-w-4xl mx-auto px-4">

    <h2 class="font-display text-3xl font-black text-[#2D2A3E] mb-2">{T.supporters.otherTitle}</h2>
    <p class="text-[#2D2A3E]/70 leading-relaxed mb-2">
      {T.supporters.otherText}
    </p>
    <p class="text-xs text-[#2D2A3E]/40 mb-10">{T.supporters.listingStats(total, linked)}</p>

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
      {T.supporters.missedNote} <a href="/contact" class="text-[#E8538A] hover:underline">{T.supporters.letUsKnow}</a>
    </p>

  </div>
</section>

<!-- CTA -->
<section class="max-w-3xl mx-auto px-4 py-12">
  <div class="bg-[#FDE8F0] rounded-3xl p-8 text-center">
    <p class="font-display text-xl font-black text-[#E8538A] mb-2">{T.supporters.ctaTitle}</p>
    <p class="text-sm text-[#2D2A3E]/65 mb-5">{T.supporters.ctaText}</p>
    <div class="flex flex-wrap justify-center gap-3">
      <a href="/get-involved" class="px-5 py-2.5 rounded-full bg-[#E8538A] text-white font-bold text-sm hover:bg-[#c93d72] transition-colors shadow">
        {T.supporters.ctaGetInvolved}
      </a>
      <a href="/contact" class="px-5 py-2.5 rounded-full border-2 border-[#E8538A] text-[#E8538A] font-bold text-sm hover:bg-[#FDE8F0] transition-colors">
        {T.supporters.ctaContact}
      </a>
    </div>
  </div>
</section>
