import React from 'react';

// Editorial collage. Both photos are landscape-ish, so the main slot is square
// rather than portrait: it crops Fran's framing as little as possible.
const COLLAGE = {
  main: {
    src: '/assets/images/weddings/wedding-ceremony.jpeg',
    alt: 'Bride and groom during their civil ceremony at a Paris city hall',
  },
  side: {
    src: '/assets/images/weddings/wedding-confetti.jpeg',
    alt: 'Newlyweds walking under a shower of petals after their Paris wedding',
  },
};

const PACKAGES = [
  {
    id: 'mairie',
    name: {
      en: 'City Hall Essential',
      fr: "L'Essentiel Mairie",
      pt: 'Essencial na Prefeitura',
      es: 'Esencial en el Ayuntamiento',
    },
    price: '250€',
    featured: false,
    duration: {
      en: 'About 2 hours of coverage',
      fr: 'Environ 2 heures de présence',
      pt: 'Cerca de 2 horas de cobertura',
      es: 'Unas 2 horas de cobertura',
    },
    features: {
      en: [
        'Arrival before the ceremony',
        'Candid photos of your guests',
        'Full coverage of the civil ceremony',
        'City hall exit photos',
        'Quick family portraits',
        '100+ photos taken, 30 retouched in high resolution',
        'Private online gallery (Pixieset)',
        'Delivery within 7 to 10 days',
      ],
      fr: [
        'Arrivée avant la cérémonie',
        'Photos spontanées des invités',
        'Couverture complète de la cérémonie civile',
        'Photos de la sortie de mairie',
        'Portraits rapides avec la famille',
        '100+ photos prises, 30 retouchées en haute résolution',
        'Galerie privée en ligne (Pixieset)',
        'Livraison sous 7 à 10 jours',
      ],
      pt: [
        'Chegada antes da cerimônia',
        'Fotos espontâneas dos convidados',
        'Cobertura completa da cerimônia civil',
        'Fotos da saída da prefeitura',
        'Retratos rápidos com a família',
        '100+ fotos tiradas, 30 retocadas em alta resolução',
        'Galeria privada online (Pixieset)',
        'Entrega em 7 a 10 dias',
      ],
      es: [
        'Llegada antes de la ceremonia',
        'Fotos espontáneas de los invitados',
        'Cobertura completa de la ceremonia civil',
        'Fotos de la salida del ayuntamiento',
        'Retratos rápidos con la familia',
        '100+ fotos tomadas, 30 retocadas en alta resolución',
        'Galería privada online (Pixieset)',
        'Entrega en 7 a 10 días',
      ],
    },
  },
  {
    id: 'couple',
    name: {
      en: 'Paris Couple Session',
      fr: 'Séance Couple à Paris',
      pt: 'Ensaio de Casal em Paris',
      es: 'Sesión de Pareja en París',
    },
    price: '200€',
    featured: false,
    duration: {
      en: '1 hour session',
      fr: '1 heure de séance',
      pt: '1 hora de sessão',
      es: '1 hora de sesión',
    },
    features: {
      en: [
        '1 hour couple shoot',
        '1 to 2 locations of your choice (Eiffel Tower, Louvre, Montmartre...)',
        'Guided poses and natural moments',
        'Advice before the session',
        '40 retouched photos',
        'Private online gallery (Pixieset)',
      ],
      fr: [
        '1 heure de shooting couple',
        '1 à 2 lieux au choix (Tour Eiffel, Louvre, Montmartre...)',
        'Poses guidées et moments naturels',
        'Conseils avant la séance',
        '40 photos retouchées',
        'Galerie privée en ligne (Pixieset)',
      ],
      pt: [
        '1 hora de ensaio de casal',
        '1 a 2 locais à sua escolha (Torre Eiffel, Louvre, Montmartre...)',
        'Poses guiadas e momentos naturais',
        'Dicas antes da sessão',
        '40 fotos retocadas',
        'Galeria privada online (Pixieset)',
      ],
      es: [
        '1 hora de sesión de pareja',
        '1 a 2 lugares a elegir (Torre Eiffel, Louvre, Montmartre...)',
        'Poses guiadas y momentos naturales',
        'Consejos antes de la sesión',
        '40 fotos retocadas',
        'Galería privada online (Pixieset)',
      ],
    },
  },
  {
    id: 'dinner',
    name: {
      en: 'Dinner Memories',
      fr: 'Souvenirs du Dîner',
      pt: 'Memórias do Jantar',
      es: 'Recuerdos de la Cena',
    },
    price: '150€',
    featured: false,
    duration: {
      en: '1h30 of coverage',
      fr: '1h30 de présence',
      pt: '1h30 de cobertura',
      es: '1h30 de cobertura',
    },
    features: {
      en: [
        '1h30 at the restaurant',
        'Group photos',
        'Candid moments',
        'Decoration and ambiance details',
        'Guest portraits',
        '25 retouched photos',
        'Private online gallery (Pixieset)',
      ],
      fr: [
        '1h30 de présence au restaurant',
        'Photos de groupe',
        'Moments spontanés',
        'Détails de la décoration et de l\'ambiance',
        'Portraits des invités',
        '25 photos retouchées',
        'Galerie privée en ligne (Pixieset)',
      ],
      pt: [
        '1h30 de presença no restaurante',
        'Fotos de grupo',
        'Momentos espontâneos',
        'Detalhes da decoração e do ambiente',
        'Retratos dos convidados',
        '25 fotos retocadas',
        'Galeria privada online (Pixieset)',
      ],
      es: [
        '1h30 de presencia en el restaurante',
        'Fotos de grupo',
        'Momentos espontáneos',
        'Detalles de la decoración y el ambiente',
        'Retratos de los invitados',
        '25 fotos retocadas',
        'Galería privada online (Pixieset)',
      ],
    },
  },
  {
    id: 'fullday',
    name: {
      en: 'Full Civil Wedding Day',
      fr: 'Journée Complète Mariage Civil',
      pt: 'Dia Completo de Casamento Civil',
      es: 'Día Completo de Boda Civil',
    },
    price: '850€',
    featured: true,
    duration: {
      en: '8 to 10 hours of continuous coverage, the best value per hour',
      fr: '8 à 10 heures de présence en continu, le meilleur tarif à l\'heure',
      pt: '8 a 10 horas de cobertura contínua, o melhor valor por hora',
      es: '8 a 10 horas de cobertura continua, el mejor precio por hora',
    },
    features: {
      en: [
        'Arrival at the city hall',
        'Full civil ceremony coverage',
        'Family and guest photos',
        'Travel to several iconic Paris locations',
        'Premium couple shoot',
        'Dinner / reception coverage',
        'Candid moments throughout the day',
        '200+ edited photos, 80 premium retouched',
        'Premium private gallery (Pixieset), high resolution',
        'Priority delivery',
      ],
      fr: [
        'Arrivée à la mairie',
        'Couverture complète de la cérémonie civile',
        'Photos de famille et des invités',
        'Déplacement vers plusieurs lieux emblématiques de Paris',
        'Shooting couple premium',
        'Couverture du dîner / réception',
        'Moments spontanés tout au long de la journée',
        '200+ photos éditées, dont 80 retouchées premium',
        'Galerie premium privée (Pixieset), haute résolution',
        'Livraison prioritaire',
      ],
      pt: [
        'Chegada à prefeitura',
        'Cobertura completa da cerimônia civil',
        'Fotos da família e dos convidados',
        'Deslocamento a vários locais icônicos de Paris',
        'Ensaio de casal premium',
        'Cobertura do jantar / recepção',
        'Momentos espontâneos ao longo do dia',
        '200+ fotos editadas, sendo 80 retocadas premium',
        'Galeria premium privada (Pixieset), alta resolução',
        'Entrega prioritária',
      ],
      es: [
        'Llegada al ayuntamiento',
        'Cobertura completa de la ceremonia civil',
        'Fotos de la familia y los invitados',
        'Desplazamiento a varios lugares icónicos de París',
        'Sesión de pareja premium',
        'Cobertura de la cena / recepción',
        'Momentos espontáneos durante todo el día',
        '200+ fotos editadas, 80 retocadas premium',
        'Galería premium privada (Pixieset), alta resolución',
        'Entrega prioritaria',
      ],
    },
  },
];

const RELIGIOUS = {
  name: {
    en: 'Religious Wedding',
    fr: 'Mariage Religieux',
    pt: 'Casamento Religioso',
    es: 'Boda Religiosa',
  },
  price: '1 290€',
  duration: {
    en: 'Up to 10 hours of coverage',
    fr: 'Jusqu\'à 10 heures de présence',
    pt: 'Até 10 horas de cobertura',
    es: 'Hasta 10 horas de cobertura',
  },
  features: {
    en: [
      'Full day coverage, from getting ready to the party',
      'Religious ceremony coverage (church, synagogue, mosque...)',
      'Family and group photos',
      'Premium couple shoot at iconic Paris locations',
      'Reception coverage until the first dance',
      '300+ edited photos, 80 premium retouched',
      'Premium private gallery (Pixieset), high resolution',
      'Priority delivery',
      'Custom quote beyond 10 hours of coverage',
    ],
    fr: [
      'Journée complète, des préparatifs à la soirée',
      'Couverture de la cérémonie religieuse (église, synagogue, mosquée...)',
      'Photos de famille et de groupe',
      'Shooting couple premium dans les lieux emblématiques de Paris',
      'Couverture de la réception jusqu\'à l\'ouverture du bal',
      '300+ photos éditées, dont 80 retouchées premium',
      'Galerie premium privée (Pixieset), haute résolution',
      'Livraison prioritaire',
      'Devis personnalisé au-delà de 10 heures de présence',
    ],
    pt: [
      'Dia completo, dos preparativos à festa',
      'Cobertura da cerimônia religiosa (igreja, sinagoga, mesquita...)',
      'Fotos de família e de grupo',
      'Ensaio de casal premium nos locais icônicos de Paris',
      'Cobertura da recepção até a primeira dança',
      '300+ fotos editadas, sendo 80 retocadas premium',
      'Galeria premium privada (Pixieset), alta resolução',
      'Entrega prioritária',
      'Orçamento personalizado além de 10 horas de presença',
    ],
    es: [
      'Día completo, desde los preparativos hasta la fiesta',
      'Cobertura de la ceremonia religiosa (iglesia, sinagoga, mezquita...)',
      'Fotos de familia y de grupo',
      'Sesión de pareja premium en los lugares icónicos de París',
      'Cobertura de la recepción hasta el primer baile',
      '300+ fotos editadas, 80 retocadas premium',
      'Galería premium privada (Pixieset), alta resolución',
      'Entrega prioritaria',
      'Presupuesto personalizado más allá de 10 horas de presencia',
    ],
  },
};

const T = {
  en: {
    whatsapp: "Hello Fran! I found your wedding photography on Fran's Guide. I'd love to know your availability!",
    eyebrow: 'Wedding Photography in Paris',
    title1: 'One day.',
    title2: 'A thousand memories.',
    subtitle: 'Civil ceremonies, religious weddings and couple sessions across Paris. Natural, elegant photos that tell the real story of your day.',
    portfolioLabel: 'Recent weddings',
    quote: 'Every love story deserves to be beautifully told.',
    packagesLabel: 'Packages',
    packagesTitle1: 'A package for',
    packagesTitle2: 'every celebration.',
    featuredBadge: 'Most popular',
    fromPrice: 'from',
    religiousNote: 'Every religious wedding is unique. The price adapts to your schedule, venues and party size. Contact me for a personalized quote.',
    optionsLabel: 'Options',
    optionsTitle1: 'Tailor',
    optionsTitle2: 'your package.',
    optionCards: [
      { label: 'Extra retouched photos', price: '8€', note: 'per photo' },
      { label: 'Express delivery', price: '+50€', note: 'in 48h · +80€ for full day packages' },
      { label: 'Extra hour', price: '+100€', note: 'per hour of coverage' },
      { label: 'Outside central Paris', price: 'On quote', note: 'travel fee' },
    ],
    bookingNote: 'A 30% deposit confirms your booking. The remaining balance is due on the day.',
    processLabel: 'How it works',
    processTitle1: 'From booking',
    processTitle2: 'to your gallery.',
    process: [
      { title: 'Book your date', text: 'Message me on WhatsApp or through the contact form. A 30% deposit secures your date.' },
      { title: 'Your day', text: 'I capture the real moments: the emotion, the details, the people you love, without ever being intrusive.' },
      { title: 'Careful editing', text: 'Each photo is selected and edited by hand, with premium retouching on the best ones.' },
      { title: 'Private Pixieset gallery', text: 'You receive a private online gallery, in high resolution, easy to download and share with your family.' },
    ],
    ctaTitle1: 'Ready to tell',
    ctaTitle2: 'your story?',
    ctaBody: 'Tell me about your day: date, venues, what you have planned. I usually reply within a few hours.',
    ctaBtn: 'Message on WhatsApp',
    ctaAlt: 'or use the contact form',
  },
  fr: {
    whatsapp: "Bonjour Fran ! J'ai vu vos photos de mariage sur Fran's Guide. J'aimerais connaître vos disponibilités !",
    eyebrow: 'Photographe de Mariage à Paris',
    title1: 'Un jour.',
    title2: 'Mille souvenirs.',
    subtitle: 'Cérémonies civiles, mariages religieux et séances couple dans tout Paris. Des photos naturelles et élégantes qui racontent la vraie histoire de votre journée.',
    portfolioLabel: 'Mariages récents',
    quote: 'Chaque histoire d\'amour mérite d\'être joliment racontée.',
    packagesLabel: 'Formules',
    packagesTitle1: 'Une formule pour',
    packagesTitle2: 'chaque célébration.',
    featuredBadge: 'La plus demandée',
    fromPrice: 'à partir de',
    religiousNote: 'Chaque mariage religieux est unique. Le prix s\'adapte à votre programme, vos lieux et la taille de votre fête. Contactez-moi pour un devis personnalisé.',
    optionsLabel: 'Options',
    optionsTitle1: 'Composez',
    optionsTitle2: 'votre formule.',
    optionCards: [
      { label: 'Photos retouchées en plus', price: '8€', note: 'par photo' },
      { label: 'Livraison express', price: '+50€', note: 'en 48h · +80€ formules journée complète' },
      { label: 'Heure supplémentaire', price: '+100€', note: 'par heure de présence' },
      { label: 'Hors Paris intra-muros', price: 'Sur devis', note: 'frais de déplacement' },
    ],
    bookingNote: 'Un acompte de 30% confirme votre réservation. Le solde est réglé le jour J.',
    processLabel: 'Comment ça marche',
    processTitle1: 'De la réservation',
    processTitle2: 'à votre galerie.',
    process: [
      { title: 'Réservez votre date', text: 'Écrivez-moi sur WhatsApp ou via le formulaire de contact. Un acompte de 30% bloque votre date.' },
      { title: 'Votre journée', text: 'Je capture les vrais moments : l\'émotion, les détails, les gens que vous aimez, sans jamais être intrusive.' },
      { title: 'Retouche soignée', text: 'Chaque photo est sélectionnée et éditée à la main, avec une retouche premium sur les plus belles.' },
      { title: 'Galerie privée Pixieset', text: 'Vous recevez une galerie privée en ligne, en haute résolution, facile à télécharger et à partager avec votre famille.' },
    ],
    ctaTitle1: 'Prêts à raconter',
    ctaTitle2: 'votre histoire ?',
    ctaBody: 'Parlez-moi de votre journée : la date, les lieux, ce que vous avez prévu. Je réponds généralement en quelques heures.',
    ctaBtn: 'M\'écrire sur WhatsApp',
    ctaAlt: 'ou via le formulaire de contact',
  },
  pt: {
    whatsapp: "Olá Fran! Vi suas fotos de casamento no Fran's Guide. Adoraria saber sua disponibilidade!",
    eyebrow: 'Fotógrafa de Casamento em Paris',
    title1: 'Um dia.',
    title2: 'Mil memórias.',
    subtitle: 'Cerimônias civis, casamentos religiosos e ensaios de casal por toda Paris. Fotos naturais e elegantes que contam a verdadeira história do seu dia.',
    portfolioLabel: 'Casamentos recentes',
    quote: 'Toda história de amor merece ser lindamente contada.',
    packagesLabel: 'Pacotes',
    packagesTitle1: 'Um pacote para',
    packagesTitle2: 'cada celebração.',
    featuredBadge: 'O mais pedido',
    fromPrice: 'a partir de',
    religiousNote: 'Cada casamento religioso é único. O preço se adapta ao seu programa, aos locais e ao tamanho da festa. Fale comigo para um orçamento personalizado.',
    optionsLabel: 'Opções',
    optionsTitle1: 'Monte',
    optionsTitle2: 'o seu pacote.',
    optionCards: [
      { label: 'Fotos retocadas extras', price: '8€', note: 'por foto' },
      { label: 'Entrega expressa', price: '+50€', note: 'em 48h · +80€ pacotes de dia completo' },
      { label: 'Hora extra', price: '+100€', note: 'por hora de presença' },
      { label: 'Fora do centro de Paris', price: 'Sob consulta', note: 'taxa de deslocamento' },
    ],
    bookingNote: 'Um sinal de 30% confirma a sua reserva. O restante é pago no dia.',
    processLabel: 'Como funciona',
    processTitle1: 'Da reserva',
    processTitle2: 'à sua galeria.',
    process: [
      { title: 'Reserve a sua data', text: 'Fale comigo pelo WhatsApp ou pelo formulário de contato. Um sinal de 30% garante a sua data.' },
      { title: 'O seu dia', text: 'Capturo os momentos reais: a emoção, os detalhes, as pessoas que você ama, sem nunca ser intrusiva.' },
      { title: 'Edição cuidadosa', text: 'Cada foto é selecionada e editada à mão, com retoque premium nas melhores.' },
      { title: 'Galeria privada Pixieset', text: 'Você recebe uma galeria privada online, em alta resolução, fácil de baixar e compartilhar com a família.' },
    ],
    ctaTitle1: 'Prontos para contar',
    ctaTitle2: 'a sua história?',
    ctaBody: 'Me conte sobre o seu dia: a data, os locais, o que vocês planejaram. Costumo responder em poucas horas.',
    ctaBtn: 'Falar no WhatsApp',
    ctaAlt: 'ou pelo formulário de contato',
  },
  es: {
    whatsapp: "¡Hola Fran! Vi tus fotos de boda en Fran's Guide. ¡Me encantaría saber tu disponibilidad!",
    eyebrow: 'Fotógrafa de Bodas en París',
    title1: 'Un día.',
    title2: 'Mil recuerdos.',
    subtitle: 'Ceremonias civiles, bodas religiosas y sesiones de pareja por todo París. Fotos naturales y elegantes que cuentan la verdadera historia de tu día.',
    portfolioLabel: 'Bodas recientes',
    quote: 'Cada historia de amor merece ser bellamente contada.',
    packagesLabel: 'Paquetes',
    packagesTitle1: 'Un paquete para',
    packagesTitle2: 'cada celebración.',
    featuredBadge: 'El más pedido',
    fromPrice: 'desde',
    religiousNote: 'Cada boda religiosa es única. El precio se adapta a tu programa, los lugares y el tamaño de la fiesta. Escríbeme para un presupuesto personalizado.',
    optionsLabel: 'Opciones',
    optionsTitle1: 'Personaliza',
    optionsTitle2: 'tu paquete.',
    optionCards: [
      { label: 'Fotos retocadas extra', price: '8€', note: 'por foto' },
      { label: 'Entrega exprés', price: '+50€', note: 'en 48h · +80€ paquetes de día completo' },
      { label: 'Hora extra', price: '+100€', note: 'por hora de presencia' },
      { label: 'Fuera del centro de París', price: 'A consultar', note: 'gastos de desplazamiento' },
    ],
    bookingNote: 'Una señal del 30% confirma tu reserva. El resto se paga el mismo día.',
    processLabel: 'Cómo funciona',
    processTitle1: 'De la reserva',
    processTitle2: 'a tu galería.',
    process: [
      { title: 'Reserva tu fecha', text: 'Escríbeme por WhatsApp o por el formulario de contacto. Una señal del 30% asegura tu fecha.' },
      { title: 'Tu día', text: 'Capturo los momentos reales: la emoción, los detalles, la gente que quieres, sin ser nunca intrusiva.' },
      { title: 'Edición cuidada', text: 'Cada foto se selecciona y edita a mano, con retoque premium en las mejores.' },
      { title: 'Galería privada Pixieset', text: 'Recibes una galería privada online, en alta resolución, fácil de descargar y compartir con tu familia.' },
    ],
    ctaTitle1: '¿Listos para contar',
    ctaTitle2: 'vuestra historia?',
    ctaBody: 'Cuéntame sobre tu día: la fecha, los lugares, lo que tenéis previsto. Suelo responder en pocas horas.',
    ctaBtn: 'Escribir por WhatsApp',
    ctaAlt: 'o por el formulario de contacto',
  },
};

export default function WeddingsPage({ language = 'en' }) {
  const t = T[language] || T.en;
  const lang = T[language] ? language : 'en';
  const whatsappUrl = `https://wa.me/33759752536?text=${encodeURIComponent(t.whatsapp)}`;

  // Structured data so Google understands the wedding photography service
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Wedding photography',
    areaServed: 'Paris, France',
    provider: { '@type': 'LocalBusiness', name: "Fran's Guide", url: 'https://fransguide.com' },
    offers: [...PACKAGES, RELIGIOUS].map((p) => ({
      '@type': 'Offer',
      name: p.name.en,
      price: p.price.replace(/[^\d]/g, ''),
      priceCurrency: 'EUR',
    })),
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <style>{`
        .fg-wed-page {
          padding-top: 80px;
          background: #fff;
          min-height: 100vh;
          font-family: 'Jost', sans-serif;
        }
        .fg-wed-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4A4845;
          font-weight: 400;
          margin: 0 0 20px;
        }
        .fg-wed-header {
          padding: 96px 80px 72px;
          border-bottom: 1px solid #E8E3DC;
          text-align: center;
        }
        .fg-wed-header .fg-wed-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 18px;
        }
        .fg-wed-header .fg-wed-eyebrow::before,
        .fg-wed-header .fg-wed-eyebrow::after {
          content: '';
          display: block;
          width: 40px;
          height: 1px;
          background: #0F2C66;
        }
        .fg-wed-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(44px, 5.5vw, 72px);
          font-weight: 400;
          line-height: 1.08;
          color: #1C1C1C;
          margin: 0 0 24px;
        }
        .fg-wed-title em { font-style: italic; color: #0F2C66; }
        .fg-wed-subtitle {
          font-size: 15px;
          line-height: 1.8;
          color: #4A4845;
          font-weight: 400;
          max-width: 560px;
          margin: 0 auto;
        }

        .fg-wed-portfolio { border-bottom: 1px solid #E8E3DC; }
        .fg-wed-portfolio-label {
          padding: 56px 80px 32px;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4A4845;
          margin: 0;
        }
        .fg-wed-collage {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 24px;
          padding: 0 80px 72px;
          align-items: start;
        }
        /* No aspect-ratio and no object-fit anywhere in the collage: the photos
           are shown whole, in their own framing, and the page adapts to them. */
        .fg-wed-collage-main {
          overflow: hidden;
        }
        .fg-wed-collage-side {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-top: 56px;
        }
        .fg-wed-collage-img {
          overflow: hidden;
        }
        .fg-wed-collage img {
          width: 100%;
          height: auto;
          display: block;
          filter: brightness(0.97) saturate(0.88);
          transition: filter 0.3s, transform 0.4s;
        }
        .fg-wed-collage-main:hover img,
        .fg-wed-collage-img:hover img {
          filter: brightness(1) saturate(1);
          transform: scale(1.03);
        }
        .fg-wed-quote {
          background: #FAF8F5;
          border: 1px solid #E8E3DC;
          padding: 40px 36px;
        }
        .fg-wed-quote p {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(22px, 2.2vw, 28px);
          font-style: italic;
          line-height: 1.45;
          color: #0F2C66;
          margin: 0;
        }

        .fg-wed-packages {
          padding: 80px 80px;
          background: #FAF8F5;
          border-bottom: 1px solid #E8E3DC;
        }
        .fg-wed-packages-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 3.5vw, 46px);
          font-weight: 400;
          line-height: 1.15;
          color: #1C1C1C;
          margin: 0 0 48px;
        }
        .fg-wed-packages-title em { font-style: italic; color: #0F2C66; }
        .fg-wed-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .fg-wed-card {
          background: #fff;
          border: 1px solid #E8E3DC;
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
        }
        .fg-wed-card.featured { border: 1.5px solid #0F2C66; }
        .fg-wed-badge {
          position: absolute;
          top: -11px;
          left: 32px;
          background: #0F2C66;
          color: #fff;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 4px 14px;
          font-weight: 400;
        }
        .fg-wed-card-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          border-bottom: 1px solid #E8E3DC;
          padding-bottom: 18px;
        }
        .fg-wed-card-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 400;
          color: #1C1C1C;
          margin: 0;
          line-height: 1.2;
        }
        .fg-wed-card-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 30px;
          color: #0F2C66;
          white-space: nowrap;
        }
        .fg-wed-card-price small {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #4A4845;
          display: block;
          text-align: right;
        }
        .fg-wed-duration {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #0F2C66;
          margin: -6px 0 0;
        }
        .fg-wed-card.religious .fg-wed-duration { color: #CEE4FE; }
        .fg-wed-feats {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 11px;
          flex-grow: 1;
        }
        .fg-wed-feats li {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          font-size: 13.5px;
          line-height: 1.6;
          color: #1C1C1C;
        }
        .fg-wed-feats li::before {
          content: '';
          display: block;
          width: 18px;
          height: 1px;
          background: #0F2C66;
          flex-shrink: 0;
          margin-top: 10px;
        }
        .fg-wed-card-btn {
          display: inline-block;
          background: #0F2C66;
          color: #fff;
          padding: 13px 28px;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 400;
          align-self: flex-start;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
        }
        .fg-wed-card-btn:hover { opacity: 0.85; color: #fff; }
        .fg-wed-card-btn:active { transform: scale(0.97); }

        .fg-wed-card.religious {
          grid-column: 1 / -1;
          background: #0F2C66;
          border: none;
        }
        .fg-wed-card.religious .fg-wed-card-head { border-bottom-color: rgba(255,255,255,0.2); }
        .fg-wed-card.religious .fg-wed-card-name { color: #fff; }
        .fg-wed-card.religious .fg-wed-card-price { color: #CEE4FE; }
        .fg-wed-card.religious .fg-wed-card-price small { color: rgba(255,255,255,0.65); }
        .fg-wed-card.religious .fg-wed-feats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 11px 32px;
        }
        .fg-wed-card.religious .fg-wed-feats li { color: rgba(255,255,255,0.92); }
        .fg-wed-card.religious .fg-wed-feats li::before { background: #CEE4FE; }
        .fg-wed-card.religious .fg-wed-card-btn { background: #fff; color: #0F2C66; }
        .fg-wed-religious-note {
          font-size: 13px;
          line-height: 1.7;
          color: rgba(255,255,255,0.75);
          margin: 0;
        }

        .fg-wed-options {
          padding: 72px 80px;
          border-bottom: 1px solid #E8E3DC;
        }
        .fg-wed-options-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 400;
          line-height: 1.15;
          color: #1C1C1C;
          margin: 0 0 40px;
        }
        .fg-wed-options-title em { font-style: italic; color: #0F2C66; }
        .fg-wed-options-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .fg-wed-option-card {
          border: 1px solid #E8E3DC;
          padding: 28px 26px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .fg-wed-option-label {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #4A4845;
          margin: 0;
        }
        .fg-wed-option-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 400;
          color: #0F2C66;
          margin: 0;
          line-height: 1;
        }
        .fg-wed-option-note {
          font-family: 'Jost', sans-serif;
          font-size: 12.5px;
          line-height: 1.6;
          color: #4A4845;
          margin: 0;
        }
        .fg-wed-booking-note {
          margin: 36px 0 0;
          padding-top: 24px;
          border-top: 1px solid #E8E3DC;
          font-size: 13px;
          line-height: 1.7;
          color: #4A4845;
          font-style: italic;
          text-align: center;
        }

        .fg-wed-process {
          padding: 80px 80px;
          border-bottom: 1px solid #E8E3DC;
        }
        .fg-wed-process-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(30px, 3vw, 42px);
          font-weight: 400;
          line-height: 1.15;
          color: #1C1C1C;
          margin: 0 0 48px;
        }
        .fg-wed-process-title em { font-style: italic; color: #0F2C66; }
        .fg-wed-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        .fg-wed-step-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 40px;
          font-weight: 300;
          color: #0F2C66;
          line-height: 1;
          margin: 0 0 14px;
        }
        .fg-wed-step-title {
          font-size: 13px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #1C1C1C;
          font-weight: 500;
          margin: 0 0 10px;
        }
        .fg-wed-step-text {
          font-size: 13.5px;
          line-height: 1.75;
          color: #4A4845;
          margin: 0;
        }

        .fg-wed-cta {
          padding: 90px 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
        }
        .fg-wed-cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(34px, 4vw, 48px);
          font-weight: 400;
          line-height: 1.15;
          color: #1C1C1C;
          margin: 0 0 16px;
        }
        .fg-wed-cta-title em { font-style: italic; color: #0F2C66; }
        .fg-wed-cta-body {
          font-size: 15px;
          line-height: 1.8;
          color: #4A4845;
          margin: 0;
          max-width: 460px;
        }
        .fg-wed-cta-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
          flex-shrink: 0;
        }
        .fg-wed-cta-alt {
          font-size: 13px;
          color: #4A4845;
        }
        .fg-wed-cta-alt a { color: #0F2C66; }

        @media (max-width: 900px) {
          .fg-wed-header { padding: 60px 32px 48px; }
          .fg-wed-portfolio-label { padding: 44px 32px 24px; }
          .fg-wed-collage { grid-template-columns: 1fr; padding: 0 32px 56px; }
          .fg-wed-collage-side { padding-top: 0; }
          .fg-wed-packages { padding: 60px 32px; }
          .fg-wed-cards { grid-template-columns: 1fr; }
          .fg-wed-card.religious .fg-wed-feats { grid-template-columns: 1fr; }
          .fg-wed-options { padding: 48px 32px; }
          .fg-wed-options-grid { grid-template-columns: repeat(2, 1fr); }
          .fg-wed-process { padding: 60px 32px; }
          .fg-wed-steps { grid-template-columns: repeat(2, 1fr); }
          .fg-wed-cta { flex-direction: column; align-items: flex-start; padding: 60px 32px; }
        }
        @media (max-width: 480px) {
          .fg-wed-header { padding: 48px 24px 36px; }
          .fg-wed-collage { padding: 0 24px 44px; }
          .fg-wed-quote { padding: 28px 24px; }
          .fg-wed-packages { padding: 48px 24px; }
          .fg-wed-card { padding: 26px 22px; gap: 16px; }
          .fg-wed-card-head {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
            padding-bottom: 14px;
          }
          .fg-wed-card-price { font-size: 28px; }
          .fg-wed-card-price small { text-align: left; }
          .fg-wed-badge { left: 22px; }
          .fg-wed-card-btn {
            align-self: stretch;
            text-align: center;
            padding: 15px 20px;
          }
          .fg-wed-options { padding: 40px 24px; }
          .fg-wed-options-grid { grid-template-columns: 1fr; gap: 14px; }
          .fg-wed-option-card { padding: 22px 20px; }
          .fg-wed-process { padding: 48px 24px; }
          .fg-wed-steps { grid-template-columns: 1fr; gap: 28px; }
          .fg-wed-cta { padding: 48px 24px; }
          .fg-wed-cta-right { width: 100%; }
        }
      `}</style>

      <div className="fg-wed-page">

        {/* Header */}
        <div className="fg-wed-header">
          <p className="fg-wed-eyebrow">{t.eyebrow}</p>
          <h1 className="fg-wed-title">
            {t.title1}<br/><em>{t.title2}</em>
          </h1>
          <p className="fg-wed-subtitle">{t.subtitle}</p>
        </div>

        {/* Portfolio: editorial collage */}
        <div className="fg-wed-portfolio">
          <p className="fg-wed-portfolio-label">{t.portfolioLabel}</p>
          <div className="fg-wed-collage">
            <div className="fg-wed-collage-main">
              <img src={COLLAGE.main.src} alt={COLLAGE.main.alt} loading="lazy" />
            </div>
            <div className="fg-wed-collage-side">
              <div className="fg-wed-quote">
                <p>&ldquo;{t.quote}&rdquo;</p>
              </div>
              <div className="fg-wed-collage-img">
                <img src={COLLAGE.side.src} alt={COLLAGE.side.alt} loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className="fg-wed-packages">
          <p className="fg-wed-eyebrow">{t.packagesLabel}</p>
          <h2 className="fg-wed-packages-title">
            {t.packagesTitle1}<br/><em>{t.packagesTitle2}</em>
          </h2>
          <div className="fg-wed-cards">
            {PACKAGES.map((pack) => (
              <div key={pack.id} className={`fg-wed-card${pack.featured ? ' featured' : ''}`}>
                {pack.featured && <span className="fg-wed-badge">{t.featuredBadge}</span>}
                <div className="fg-wed-card-head">
                  <h3 className="fg-wed-card-name">{pack.name[lang] || pack.name.en}</h3>
                  <span className="fg-wed-card-price">{pack.price}</span>
                </div>
                <p className="fg-wed-duration">{pack.duration[lang] || pack.duration.en}</p>
                <ul className="fg-wed-feats">
                  {(pack.features[lang] || pack.features.en).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fg-wed-card-btn">
                  {t.ctaBtn}
                </a>
              </div>
            ))}

            {/* Religious wedding: full-width navy card */}
            <div className="fg-wed-card religious">
              <div className="fg-wed-card-head">
                <h3 className="fg-wed-card-name">{RELIGIOUS.name[lang] || RELIGIOUS.name.en}</h3>
                <span className="fg-wed-card-price">
                  <small>{t.fromPrice}</small>
                  {RELIGIOUS.price}
                </span>
              </div>
              <p className="fg-wed-duration">{RELIGIOUS.duration[lang] || RELIGIOUS.duration.en}</p>
              <ul className="fg-wed-feats">
                {(RELIGIOUS.features[lang] || RELIGIOUS.features.en).map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className="fg-wed-religious-note">{t.religiousNote}</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fg-wed-card-btn">
                {t.ctaBtn}
              </a>
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="fg-wed-options">
          <p className="fg-wed-eyebrow">{t.optionsLabel}</p>
          <h2 className="fg-wed-options-title">
            {t.optionsTitle1} <em>{t.optionsTitle2}</em>
          </h2>
          <div className="fg-wed-options-grid">
            {t.optionCards.map((o) => (
              <div key={o.label} className="fg-wed-option-card">
                <p className="fg-wed-option-label">{o.label}</p>
                <p className="fg-wed-option-price">{o.price}</p>
                <p className="fg-wed-option-note">{o.note}</p>
              </div>
            ))}
          </div>
          <p className="fg-wed-booking-note">{t.bookingNote}</p>
        </div>

        {/* Process */}
        <div className="fg-wed-process">
          <p className="fg-wed-eyebrow">{t.processLabel}</p>
          <h2 className="fg-wed-process-title">
            {t.processTitle1}<br/><em>{t.processTitle2}</em>
          </h2>
          <div className="fg-wed-steps">
            {t.process.map((step, i) => (
              <div key={step.title}>
                <p className="fg-wed-step-num">{String(i + 1).padStart(2, '0')}</p>
                <p className="fg-wed-step-title">{step.title}</p>
                <p className="fg-wed-step-text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="fg-wed-cta">
          <div>
            <h2 className="fg-wed-cta-title">
              {t.ctaTitle1}<br/><em>{t.ctaTitle2}</em>
            </h2>
            <p className="fg-wed-cta-body">{t.ctaBody}</p>
          </div>
          <div className="fg-wed-cta-right">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fg-wed-card-btn">
              {t.ctaBtn}
            </a>
            <span className="fg-wed-cta-alt">
              {t.ctaAlt.split(' ').slice(0, -1).join(' ')} <a href="/contact">{t.ctaAlt.split(' ').slice(-1)}</a>
            </span>
          </div>
        </div>

      </div>
    </>
  );
}
