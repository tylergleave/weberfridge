export const translations = {
  en: {
    // ── Language toggle ──────────────────────────────────
    toggle: { label: 'Español', lang: 'es' },

    // ── Header / Nav ─────────────────────────────────────
    nav: {
      home: 'Home',
      about: 'About',
      events: 'Events',
      getInvolved: 'Get Involved',
      supporters: 'Supporters',
      contact: 'Contact',
      donate: 'Donate 🍉',
    },

    // ── Footer ───────────────────────────────────────────
    footer: {
      tagline: 'Free Food. No Stigma.',
      description: 'A community fridge in Ogden, UT — because everyone deserves to eat.',
      navigate: 'Navigate',
      findUs: 'Find Us',
      aboutUs: 'About Us',
      hours: 'Open 24/7 — no need to knock',
      withSupport: 'With support from',
    },

    // ── Home page ─────────────────────────────────────────
    home: {
      location: 'Ogden, Utah',
      tagline: 'Free Food. No Stigma.',
      heroText:
        'A community fridge at {address} — stocked and maintained by neighbors, for neighbors. Take what you need, leave what you can.',
      getInvolved: 'Get Involved',
      upcomingEvents: 'Upcoming Events',
      card1Title: 'Take What You Need',
      card1Text:
        'The fridge is always open. No questions, no applications, no shame. Grab a meal, some produce, or a snack whenever you need it.',
      card2Title: 'Leave What You Can',
      card2Text:
        'Home-cooked meals, garden produce, pantry surplus — if it\'s safe to eat, it belongs in the fridge. Help us keep it stocked for the community.',
      card3Title: 'Mutual Aid in Action',
      card3Text:
        'This fridge is run entirely by volunteers and community members. No bureaucracy — just neighbors helping neighbors.',
      galleryTitle: 'Community in Action',
      gallerySub: 'Real moments from the fridge and our events',
      eventsTitle: 'Community',
      eventsHighlight: 'Events',
      eventsText:
        'We host free community meals, really-really-free markets, and seasonal celebrations throughout the year. Everyone is welcome — always.',
      seeAllEvents: 'See All Events',
      partnersLabel: 'Community Partners',
      ctaTitle: 'Ready to help feed Ogden?',
      ctaText:
        'Whether you want to donate food, volunteer time, or just spread the word — every bit makes a difference.',
      ctaButton: 'Get Involved 🍉',
      ctaSignal: '📲 Volunteer Signal Chat',
      // alt text
      altLogo: 'Weber Fridge watermelon',
      altBreakfast: 'A volunteer serving coffee at a Weber Fridge community breakfast event',
      altPancakes: 'Pancakes cooking on the griddle at a Weber Fridge community breakfast',
      altFridge2: 'The exterior of the Weber Fridge with its colorful painted door',
      altFridge1: 'The Weber Fridge open and fully stocked with food and pantry items',
    },

    // ── About page ────────────────────────────────────────
    about: {
      title: 'About Weber Fridge',
      subtitle: 'Rooted in community. Fueled by mutual aid.',
      missionTitle: 'Our Mission',
      mission1:
        'Weber Fridge is a community-run, always-open refrigerator and pantry located in Ogden, Utah. We believe that access to food is a basic human right — not something anyone should have to earn, prove need for, or feel ashamed about.',
      mission2:
        'Our model is simple: take what you need, leave what you can. There are no applications, no eligibility requirements, no means testing. The fridge is open to everyone, always.',
      mission2Bold: 'take what you need, leave what you can',
      howTitle: 'How It Works',
      step1Title: 'Community stocks the fridge',
      step1Text:
        'Volunteers, local restaurants, home cooks, and gardeners bring food to the fridge throughout the week. Donations from our community partners keep it full year-round.',
      step2Title: 'Anyone can take what they need',
      step2Text: 'The fridge is unlocked and accessible 24/7. No sign-in, no questions asked. Grab what you need anytime.',
      step3Title: 'We host community events',
      step3Text:
        'From free soup-and-sandwich days to pancake breakfasts to really-really-free markets, we build community around food and mutual support.',
      partnersTitle: 'Our Partners',
      partner1Desc:
        'Urban Prairie graciously hosts the fridge at their property and keeps it stocked with fresh, locally grown produce.',
      partner2Desc: 'A local BBQ joint that has brought the heat to our community events and helped feed Ogden.',
      partner3Desc:
        'Utah Support Advocates for Recovery Awareness, running the Ogden Recovery Community Center.',
      findTitle: 'Find the Fridge',
      hours: 'Open 24/7 — no need to knock',
      altFridge2: 'The exterior of the Weber Fridge with its colorful painted door at 301 E 28th Street',
      altFridge1: 'The Weber Fridge open and stocked with food and pantry items',
    },

    // ── Events page ───────────────────────────────────────
    events: {
      title: 'Events',
      subtitle: 'Come hungry. Leave full. Always free.',
      upcomingTitle: 'Upcoming Events',
      pastTitle: 'Past Events',
      stayTitle: 'Stay in the loop',
      stayText: 'Follow us on Instagram or Facebook for the latest event announcements.',
      months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
      days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      formatDate: (d, months, days) => `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`,
      // recurring event content
      breakfastTitle: 'Community Breakfast',
      breakfastCombinedTitle: 'Community Breakfast + Fridge Planning Meeting',
      breakfastDesc: (dateStr) =>
        `Join us this Sunday morning for a free community breakfast. No sign-up, no requirements — just show up and eat. A warm meal and good company, every week.`,
      breakfastCombinedDesc: (dateStr) =>
        `Join us this ${dateStr} for a free community breakfast. No sign-up, no requirements — just show up and eat. A warm meal and good company, every week.\n\nBecause this is the first Sunday of the month, we'll also be having our Fridge Planning meeting. We encourage you to join and share your ideas for how to improve the fridge.`,
      breakfastTag: 'Breakfast Every Sunday',
      breakfastCombinedTag: 'Fridge Planning Meeting this week',
      recurringTag: 'Recurring · Every Sunday',
      planningTitle: 'Community Breakfast + Fridge Planning Meeting',
      planningDesc: 'Bring hunger, yourself, a friend, questions, or an idea to make the fridge better! Your voice matters, your presence counts. Runs April through September.',
      planningTag: 'Monthly · First Sunday',
      // one-time events
      weberEatsTitle: 'Weber Eats!',
      weberEatsDesc: 'Join us for a FREE summer lunch filled with great food, cold drinks, a Really Really Free Market, a craft station, and our Ogden community — presented by Weber Fridge!\n\nFree food, no stigma. Dress yourself in Pride! 🌈',
      weberEatsTag: 'Weber Eats',
      prideTag: 'Dress in Pride 🌈',
      freeFoodTag: 'Free Food',
      // past events
      birthdayTitle: 'Weber Fridge 3rd Birthday',
      birthdayDate: 'November 22, 2025',
      birthdayDesc: 'Three years of free food and community! We celebrated with hot food, cake, drinks, and a Really Really Free Market with winter gear.',
      valentinesTitle: "Weber Eats: Free Soup & Sandwiches (Valentine's)",
      valentinesDate: 'February 14, 2026',
      valentinesDesc: "A Valentine's Day community meal with soup, sandwiches, and solidarity.",
    },

    // ── Get Involved page ─────────────────────────────────
    getInvolved: {
      title: 'Get Involved',
      subtitle: 'Every bit of help keeps the fridge running.',
      donateFoodTitle: 'Donate Food',
      donateFoodText: 'You can drop off food directly at the fridge at {address}, any time of day or night. Here\'s what we can and can\'t accept:',
      goodTitle: '✅ Great donations',
      goodItems: [
        'Fresh fruits and vegetables',
        'Home-cooked meals (labelled and dated)',
        'Shelf-stable pantry items',
        'Dairy (check expiry)',
        'Bread and baked goods',
        'Non-food hygiene items',
      ],
      badTitle: '❌ Please don\'t bring',
      badItems: [
        'Clothes',
        'Expired food',
        'Opened or partially consumed items',
        'Unlabelled home-cooked meals',
        'Alcohol',
      ],
      donateMoneyTitle: 'Donate Money',
      donateMoneyText:
        'Financial donations help us cover maintenance, event supplies, grocery runs, and more. Every dollar goes directly to keeping the fridge running and our community fed.',
      waysToGive: 'Ways to give',
      donateNow: 'Donate Now 🍉',
      donateDisclosure: 'Donations are processed securely through HCB (Hack Club). We believe in full financial transparency —',
      donateFinances: 'view our public finances here',
      volunteerTitle: 'Volunteer',
      volunteerText: 'The fridge runs entirely on volunteer effort. Here are some of the ways you can pitch in:',
      vol1Title: 'Fridge maintenance',
      vol1Desc: 'Regular cleaning and restocking checks.',
      vol2Title: 'Cook & donate meals',
      vol2Desc: 'Make a big pot of something delicious and drop it off.',
      vol3Title: 'Spread the word',
      vol3Desc: 'Share on social media or with your neighbors.',
      vol4Title: 'Help at events',
      vol4Desc: 'Lend a hand at Weber Eats and free market days.',
      signalTitle: 'Join the volunteer Signal chat',
      signalText:
        'The best way to get plugged in is our volunteer group on Signal — that\'s where we coordinate restocking, events, and everything in between.',
      signalButton: 'Join Signal →',
      banner: 'Thank you for showing up',
      bannerHighlight: 'for each other.',
    },

    // ── Contact page ──────────────────────────────────────
    contact: {
      title: 'Contact Us',
      subtitle: 'Questions, ideas, or just want to say hi?',
      signalLabel: 'Volunteer Signal Chat',
      successTitle: 'Message sent!',
      successText: 'Thanks for reaching out — we\'ll get back to you as soon as we can.',
      backHome: 'Back to home',
      labelName: 'Name',
      labelEmail: 'Email',
      labelPhone: 'Phone',
      labelMessage: 'Message',
      optional: 'optional',
      required: '*',
      placeholderName: 'Your name',
      placeholderEmail: 'you@example.com',
      placeholderPhone: '(801) 555-0123',
      placeholderMessage: "What's on your mind?",
      submitButton: 'Send Message 🍉',
      footerNote: 'Or reach us directly via the links above.',
    },

    // ── Request Delivery page ─────────────────────────────
    requestDelivery: {
      title: 'Request a Delivery',
      subtitle: 'We\'ll bring fridge resources to you.',
      intro: 'If you\'re unable to visit the fridge in person, we can arrange to bring food and other items to you. This form is private — we will never share your information with anyone, and we do not ask about immigration status.',
      successTitle: 'Request received!',
      successText: 'Someone from Weber Fridge will be in touch soon to arrange your delivery.',
      backHome: 'Back to home',
      labelName: 'Name',
      labelAddress: 'Address or Nearest Intersection',
      labelEmail: 'Email',
      labelPhone: 'Phone',
      labelMessage: 'What do you need?',
      optional: 'optional',
      required: '*',
      placeholderName: 'Your name',
      placeholderAddress: 'e.g. 500 N 400 E, or near 25th & Washington',
      placeholderEmail: 'you@example.com',
      placeholderPhone: '(801) 555-0123',
      placeholderMessage: 'Tell us what you\'re looking for — food, hygiene items, anything else.',
      submitButton: 'Request Delivery 🍉',
      privacyNote: 'Your information is kept private and used only to coordinate your delivery. We do not share it with anyone.',
    },

    // ── Supporters page ───────────────────────────────────
    supporters: {
      title: 'Supporters',
      subtitle: 'The community behind the community fridge.',
      intro: 'Weber Fridge doesn\'t run on its own. These organizations have shown up for us — lending food, time, partnership, and shared values. We\'re grateful for each of them.',
      visitWebsite: 'Visit their website',
      otherTitle: 'Other Supporters & Collaborators',
      otherText:
        'Weber Fridge has been lifted up by an extraordinary network of organizations, businesses, churches, schools, and individuals across northern Utah and beyond.',
      listingStats: (total, linked) => `${total} collaborators listed · ${linked} with links`,
      missedNote: 'Know of someone we\'ve missed?',
      letUsKnow: 'Let us know.',
      ctaTitle: 'Want to support Weber Fridge?',
      ctaText: 'Whether you\'re a business, organization, or individual — there are lots of ways to get involved.',
      ctaGetInvolved: 'Get Involved',
      ctaContact: 'Contact Us',
    },
  },

  // ═══════════════════════════════════════════════════════
  //  SPANISH
  // ═══════════════════════════════════════════════════════
  es: {
    toggle: { label: 'English', lang: 'en' },

    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      events: 'Eventos',
      getInvolved: 'Participa',
      supporters: 'Colaboradores',
      contact: 'Contacto',
      donate: 'Donar 🍉',
    },

    footer: {
      tagline: 'Comida Gratis. Sin Prejuicios.',
      description: 'Un refrigerador comunitario en Ogden, UT — porque todos merecen comer.',
      navigate: 'Navegar',
      findUs: 'Encuéntranos',
      aboutUs: 'Nosotros',
      hours: 'Abierto 24/7 — sin necesidad de tocar',
      withSupport: 'Con el apoyo de',
    },

    home: {
      location: 'Ogden, Utah',
      tagline: 'Comida Gratis. Sin Prejuicios.',
      heroText:
        'Un refrigerador comunitario en {address} — abastecido y mantenido por vecinos, para vecinos. Toma lo que necesitas, deja lo que puedas.',
      getInvolved: 'Participa',
      upcomingEvents: 'Próximos Eventos',
      card1Title: 'Toma Lo Que Necesitas',
      card1Text:
        'El refrigerador siempre está abierto. Sin preguntas, sin solicitudes, sin vergüenza. Llévate una comida, algo de verdura o un bocadillo cuando lo necesites.',
      card2Title: 'Deja Lo Que Puedas',
      card2Text:
        'Comidas caseras, verduras del jardín, excedente de despensa — si es seguro comerlo, pertenece al refrigerador. Ayúdanos a mantenerlo abastecido para la comunidad.',
      card3Title: 'Ayuda Mutua en Acción',
      card3Text:
        'Este refrigerador es administrado íntegramente por voluntarios y miembros de la comunidad. Sin burocracia — solo vecinos ayudando a vecinos.',
      galleryTitle: 'Comunidad en Acción',
      gallerySub: 'Momentos reales del refrigerador y nuestros eventos',
      eventsTitle: 'Eventos',
      eventsHighlight: 'Comunitarios',
      eventsText:
        'Organizamos comidas comunitarias gratuitas, mercados completamente gratuitos y celebraciones de temporada durante todo el año. Todos son bienvenidos — siempre.',
      seeAllEvents: 'Ver Todos los Eventos',
      partnersLabel: 'Socios Comunitarios',
      ctaTitle: '¿Listo para ayudar a alimentar a Ogden?',
      ctaText:
        'Ya sea que quieras donar comida, tiempo de voluntariado o simplemente correr la voz — cada pequeño aporte hace la diferencia.',
      ctaButton: 'Participa 🍉',
      ctaSignal: '📲 Chat de Voluntarios en Signal',
      altLogo: 'Logo de sandía de Weber Fridge',
      altBreakfast: 'Un voluntario sirviendo café en un evento de desayuno comunitario de Weber Fridge',
      altPancakes: 'Hotcakes cocinándose en la plancha en un desayuno comunitario de Weber Fridge',
      altFridge2: 'El exterior del Weber Fridge con su colorida puerta pintada',
      altFridge1: 'El Weber Fridge abierto y completamente abastecido con comida y artículos de despensa',
    },

    about: {
      title: 'Acerca de Weber Fridge',
      subtitle: 'Arraigados en la comunidad. Impulsados por la ayuda mutua.',
      missionTitle: 'Nuestra Misión',
      mission1:
        'Weber Fridge es un refrigerador comunitario, siempre abierto, ubicado en Ogden, Utah. Creemos que el acceso a los alimentos es un derecho humano básico — no algo que nadie deba ganarse, justificar o de lo que deba avergonzarse.',
      mission2:
        'Nuestro modelo es simple: toma lo que necesitas, deja lo que puedas. No hay solicitudes, ni requisitos de elegibilidad, ni verificación de recursos. El refrigerador está abierto para todos, siempre.',
      mission2Bold: 'toma lo que necesitas, deja lo que puedas',
      howTitle: 'Cómo Funciona',
      step1Title: 'La comunidad abastece el refrigerador',
      step1Text:
        'Voluntarios, restaurantes locales, cocineros caseros y jardineros traen comida al refrigerador durante toda la semana. Las donaciones de nuestros socios comunitarios lo mantienen lleno todo el año.',
      step2Title: 'Cualquiera puede tomar lo que necesite',
      step2Text: 'El refrigerador está desbloqueado y accesible las 24 horas. Sin registro, sin preguntas. Llévate lo que necesites en cualquier momento.',
      step3Title: 'Organizamos eventos comunitarios',
      step3Text:
        'Desde días de sopa y sándwich gratis hasta desayunos de hotcakes y mercados completamente gratuitos, construimos comunidad alrededor de la comida y el apoyo mutuo.',
      partnersTitle: 'Nuestros Socios',
      partner1Desc:
        'Urban Prairie generosamente aloja el refrigerador en su propiedad y lo mantiene abastecido con productos frescos cultivados localmente.',
      partner2Desc: 'Un restaurante local de BBQ que ha traído el sabor a nuestros eventos comunitarios y ha ayudado a alimentar a Ogden.',
      partner3Desc:
        'Utah Support Advocates for Recovery Awareness, que dirige el Centro Comunitario de Recuperación de Ogden.',
      findTitle: 'Encuentra el Refrigerador',
      hours: 'Abierto 24/7 — sin necesidad de tocar',
      altFridge2: 'El exterior del Weber Fridge con su colorida puerta pintada en 301 E 28th Street',
      altFridge1: 'El Weber Fridge abierto y abastecido con comida y artículos de despensa',
    },

    events: {
      title: 'Eventos',
      subtitle: 'Ven con hambre. Sal satisfecho. Siempre gratis.',
      upcomingTitle: 'Próximos Eventos',
      pastTitle: 'Eventos Pasados',
      stayTitle: 'Mantente al día',
      stayText: 'Síguenos en Instagram o Facebook para los últimos anuncios de eventos.',
      months: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
      days: ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'],
      formatDate: (d, months, days) => `${days[d.getDay()]}, ${d.getDate()} de ${months[d.getMonth()]}`,
      breakfastTitle: 'Desayuno Comunitario',
      breakfastCombinedTitle: 'Desayuno Comunitario + Reunión de Planificación',
      breakfastDesc: (dateStr) =>
        `Únete a nosotros este domingo por la mañana para un desayuno comunitario gratuito. Sin registro, sin requisitos — solo preséntate y come. Una comida caliente y buena compañía, cada semana.`,
      breakfastCombinedDesc: (dateStr) =>
        `Únete a nosotros este ${dateStr} para un desayuno comunitario gratuito. Sin registro, sin requisitos — solo preséntate y come. Una comida caliente y buena compañía, cada semana.\n\nComo es el primer domingo del mes, también tendremos nuestra Reunión de Planificación. Te animamos a unirte y compartir tus ideas para mejorar el refrigerador.`,
      breakfastTag: 'Desayuno Todos los Domingos',
      breakfastCombinedTag: 'Reunión de Planificación esta semana',
      recurringTag: 'Recurrente · Cada Domingo',
      planningTitle: 'Desayuno Comunitario + Reunión de Planificación',
      planningDesc: '¡Trae hambre, a ti mismo, a un amigo, preguntas o una idea para mejorar el refrigerador! Tu voz importa, tu presencia cuenta. Se realiza de abril a septiembre.',
      planningTag: 'Mensual · Primer Domingo',
      weberEatsTitle: '¡Weber Come!',
      weberEatsDesc: '¡Únete a un almuerzo de verano GRATIS lleno de buena comida, bebidas frías, un Mercado Completamente Gratuito, una estación de manualidades y nuestra comunidad de Ogden — presentado por Weber Fridge!\n\nComida gratis, sin estigma. ¡Vístete con Orgullo! 🌈',
      weberEatsTag: 'Weber Come',
      prideTag: 'Vístete con Orgullo 🌈',
      freeFoodTag: 'Comida Gratis',
      birthdayTitle: '3er Cumpleaños de Weber Fridge',
      birthdayDate: '22 de noviembre de 2025',
      birthdayDesc: '¡Tres años de comida gratis y comunidad! Lo celebramos con comida caliente, pastel, bebidas y un Mercado Completamente Gratuito con ropa de invierno.',
      valentinesTitle: 'Weber Come: Sopa y Sándwiches Gratis (San Valentín)',
      valentinesDate: '14 de febrero de 2026',
      valentinesDesc: 'Una comida comunitaria de San Valentín con sopa, sándwiches y solidaridad.',
    },

    getInvolved: {
      title: 'Participa',
      subtitle: 'Cada pequeña ayuda mantiene el refrigerador funcionando.',
      donateFoodTitle: 'Dona Comida',
      donateFoodText: 'Puedes dejar comida directamente en el refrigerador en {address}, a cualquier hora del día o de la noche. Esto es lo que podemos y no podemos aceptar:',
      goodTitle: '✅ Buenas donaciones',
      goodItems: [
        'Frutas y verduras frescas',
        'Comidas caseras (etiquetadas y fechadas)',
        'Artículos de despensa no perecederos',
        'Lácteos (verificar fecha de vencimiento)',
        'Pan y productos horneados',
        'Artículos de higiene no alimenticios',
      ],
      badTitle: '❌ Por favor no traigas',
      badItems: [
        'Ropa',
        'Comida vencida',
        'Artículos abiertos o parcialmente consumidos',
        'Comidas caseras sin etiquetar',
        'Alcohol',
      ],
      donateMoneyTitle: 'Dona Dinero',
      donateMoneyText:
        'Las donaciones financieras nos ayudan a cubrir el mantenimiento, suministros para eventos, compras de alimentos y más. Cada dólar va directamente a mantener el refrigerador en funcionamiento y a nuestra comunidad alimentada.',
      waysToGive: 'Formas de donar',
      donateNow: 'Donar Ahora 🍉',
      donateDisclosure: 'Las donaciones se procesan de forma segura a través de HCB (Hack Club). Creemos en la plena transparencia financiera —',
      donateFinances: 'ver nuestras finanzas públicas aquí',
      volunteerTitle: 'Voluntariado',
      volunteerText: 'El refrigerador funciona íntegramente con esfuerzo voluntario. Aquí hay algunas formas en que puedes colaborar:',
      vol1Title: 'Mantenimiento del refrigerador',
      vol1Desc: 'Limpieza regular y verificaciones de reabastecimiento.',
      vol2Title: 'Cocina y dona comidas',
      vol2Desc: 'Prepara una olla grande de algo delicioso y entrégala.',
      vol3Title: 'Difunde la palabra',
      vol3Desc: 'Comparte en redes sociales o con tus vecinos.',
      vol4Title: 'Ayuda en eventos',
      vol4Desc: 'Da una mano en Weber Come y los días de mercado gratuito.',
      signalTitle: 'Únete al chat de voluntarios en Signal',
      signalText:
        'La mejor manera de conectarte es nuestro grupo de voluntarios en Signal — ahí es donde coordinamos el reabastecimiento, los eventos y todo lo demás.',
      signalButton: 'Unirse a Signal →',
      banner: 'Gracias por estar ahí',
      bannerHighlight: 'los unos por los otros.',
    },

    contact: {
      title: 'Contáctanos',
      subtitle: '¿Preguntas, ideas o simplemente quieres saludarnos?',
      signalLabel: 'Chat de Voluntarios en Signal',
      successTitle: '¡Mensaje enviado!',
      successText: 'Gracias por comunicarte — te responderemos lo antes posible.',
      backHome: 'Volver al inicio',
      labelName: 'Nombre',
      labelEmail: 'Correo electrónico',
      labelPhone: 'Teléfono',
      labelMessage: 'Mensaje',
      optional: 'opcional',
      required: '*',
      placeholderName: 'Tu nombre',
      placeholderEmail: 'tu@ejemplo.com',
      placeholderPhone: '(801) 555-0123',
      placeholderMessage: '¿Qué tienes en mente?',
      submitButton: 'Enviar Mensaje 🍉',
      footerNote: 'O contáctanos directamente a través de los enlaces de arriba.',
    },

    requestDelivery: {
      title: 'Solicitar una Entrega',
      subtitle: 'Te llevaremos recursos del refrigerador.',
      intro: 'Si no puedes visitar el refrigerador en persona, podemos organizar llevar comida y otros artículos a donde estás. Este formulario es privado — nunca compartiremos tu información con nadie, y no preguntamos sobre estatus migratorio.',
      successTitle: '¡Solicitud recibida!',
      successText: 'Alguien de Weber Fridge se pondrá en contacto pronto para coordinar tu entrega.',
      backHome: 'Volver al inicio',
      labelName: 'Nombre',
      labelAddress: 'Dirección o Intersección Más Cercana',
      labelEmail: 'Correo electrónico',
      labelPhone: 'Teléfono',
      labelMessage: '¿Qué necesitas?',
      optional: 'opcional',
      required: '*',
      placeholderName: 'Tu nombre',
      placeholderAddress: 'p. ej. 500 N 400 E, o cerca de 25th y Washington',
      placeholderEmail: 'tu@ejemplo.com',
      placeholderPhone: '(801) 555-0123',
      placeholderMessage: 'Cuéntanos qué estás buscando — comida, artículos de higiene, lo que sea.',
      submitButton: 'Solicitar Entrega 🍉',
      privacyNote: 'Tu información se mantiene privada y se usa únicamente para coordinar tu entrega. No la compartimos con nadie.',
    },

    supporters: {
      title: 'Colaboradores',
      subtitle: 'La comunidad detrás del refrigerador comunitario.',
      intro: 'Weber Fridge no funciona solo. Estas organizaciones han respondido por nosotros — prestando comida, tiempo, alianza y valores compartidos. Les estamos agradecidos a cada uno.',
      visitWebsite: 'Visitar su sitio web',
      otherTitle: 'Otros Colaboradores y Socios',
      otherText:
        'Weber Fridge ha sido apoyado por una red extraordinaria de organizaciones, empresas, iglesias, escuelas e individuos de todo el norte de Utah y más allá.',
      listingStats: (total, linked) => `${total} colaboradores listados · ${linked} con enlaces`,
      missedNote: '¿Conoces a alguien que nos hayamos perdido?',
      letUsKnow: 'Avísanos.',
      ctaTitle: '¿Quieres apoyar a Weber Fridge?',
      ctaText: 'Ya seas una empresa, organización o individuo — hay muchas formas de participar.',
      ctaGetInvolved: 'Participa',
      ctaContact: 'Contáctanos',
    },
  },
};

/**
 * Get translations for the given language, falling back to English.
 * @param {'en'|'es'} lang
 * @returns {typeof translations.en}
 */
export function getT(lang) {
  return translations[lang] ?? translations.en;
}
