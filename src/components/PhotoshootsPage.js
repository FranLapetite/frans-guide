import React, { useState } from 'react';

const T = {
  en: {
    whatsapp: "Hi! I saw your Paris photoshoots on Fran's Guide!! When is your next available photoshoot?",
    eyebrow: 'Paris Photoshoots',
    title1: 'Your Paris moment,',
    title2: 'beautifully captured.',
    subtitle: 'Natural, elegant photos in the most beautiful corners of Paris, for couples, solo travelers, and anyone who wants to remember this city forever.',
    pastSessions: 'Past sessions',
    included: 'What\'s included',
    perfectFor: 'Perfect for',
    ctaTitle1: 'Ready to create',
    ctaTitle2: 'your Paris story?',
    ctaBody: 'Message me directly to check availability, discuss locations, and design a photoshoot that fits your style.',
    bookBtn: 'Book on WhatsApp',
    packsLabel: 'Sessions & prices',
    packsTitle1: 'A session for',
    packsTitle2: 'every moment.',
    packsNote: 'All sessions include a private online gallery (Pixieset) with high resolution download.',
    wedEyebrow: 'Getting married in Paris?',
    wedTitle: 'Discover the wedding packages',
    wedBody: 'Civil ceremonies, religious weddings, couple sessions: dedicated coverage for your big day.',
    wedBtn: 'See wedding packages',
    includedList: [
      'Natural and guided photos around Paris',
      'Iconic and hidden locations',
      'Posing guidance if needed',
      'A warm, personal experience',
      '15 to 40 retouched photos depending on the session',
      'Private online gallery (Pixieset), high resolution',
    ],
    forList: [
      'Couples in Paris',
      'Solo travelers',
      'Families with kids',
      'Birthdays & special moments',
      'Bachelorette & bachelor parties',
      'Content creation',
    ],
  },
  fr: {
    whatsapp: "Bonjour ! J'ai vu vos séances photo à Paris sur Fran's Guide ! Quand est votre prochaine séance photo disponible ?",
    eyebrow: 'Séances Photo à Paris',
    title1: 'Votre moment parisien,',
    title2: 'magnifiquement capturé.',
    subtitle: 'Des photos naturelles et élégantes dans les plus beaux recoins de Paris, pour les couples, les voyageurs en solo et tous ceux qui veulent se souvenir de cette ville à jamais.',
    pastSessions: 'Séances précédentes',
    included: 'Ce qui est inclus',
    perfectFor: 'Parfait pour',
    ctaTitle1: 'Prête à créer',
    ctaTitle2: 'votre histoire parisienne ?',
    ctaBody: 'Contactez-moi directement pour vérifier les disponibilités, discuter des lieux et concevoir une séance photo adaptée à votre style.',
    bookBtn: 'Réserver sur WhatsApp',
    packsLabel: 'Séances & tarifs',
    packsTitle1: 'Une séance pour',
    packsTitle2: 'chaque moment.',
    packsNote: 'Toutes les séances incluent une galerie privée en ligne (Pixieset) avec téléchargement haute résolution.',
    wedEyebrow: 'Vous vous mariez à Paris ?',
    wedTitle: 'Découvrez les formules mariage',
    wedBody: 'Cérémonies civiles, mariages religieux, séances couple : une couverture dédiée pour votre grand jour.',
    wedBtn: 'Voir les formules mariage',
    includedList: [
      'Photos naturelles et guidées autour de Paris',
      'Lieux emblématiques et secrets',
      'Conseils de pose si besoin',
      'Une expérience chaleureuse et personnelle',
      '15 à 40 photos retouchées selon la séance',
      'Galerie privée en ligne (Pixieset), haute résolution',
    ],
    forList: [
      'Couples à Paris',
      'Voyageurs en solo',
      'Familles avec enfants',
      'Anniversaires et moments spéciaux',
      'EVJF & EVG',
      'Création de contenu',
    ],
  },
  pt: {
    whatsapp: "Olá! Vi seus ensaios fotográficos em Paris no Fran's Guide! Quando é o próximo horário disponível?",
    eyebrow: 'Ensaios Fotográficos em Paris',
    title1: 'O seu momento em Paris,',
    title2: 'lindamente registrado.',
    subtitle: 'Fotos naturais e elegantes nos cantos mais bonitos de Paris, para casais, viajantes solo e todos que querem lembrar desta cidade para sempre.',
    pastSessions: 'Sessões anteriores',
    included: 'O que está incluído',
    perfectFor: 'Perfeito para',
    ctaTitle1: 'Pronta para criar',
    ctaTitle2: 'a sua história em Paris?',
    ctaBody: 'Fale comigo diretamente para verificar disponibilidade, discutir locais e criar um ensaio que combine com o seu estilo.',
    bookBtn: 'Reservar pelo WhatsApp',
    packsLabel: 'Sessões & preços',
    packsTitle1: 'Uma sessão para',
    packsTitle2: 'cada momento.',
    packsNote: 'Todas as sessões incluem uma galeria privada online (Pixieset) com download em alta resolução.',
    wedEyebrow: 'Vai casar em Paris?',
    wedTitle: 'Conheça os pacotes de casamento',
    wedBody: 'Cerimônias civis, casamentos religiosos, ensaios de casal: uma cobertura dedicada para o seu grande dia.',
    wedBtn: 'Ver pacotes de casamento',
    includedList: [
      'Fotos naturais e guiadas por Paris',
      'Locais icônicos e escondidos',
      'Orientações de pose se precisar',
      'Uma experiência calorosa e pessoal',
      '15 a 40 fotos retocadas conforme a sessão',
      'Galeria privada online (Pixieset), alta resolução',
    ],
    forList: [
      'Casais em Paris',
      'Viajantes solo',
      'Famílias com crianças',
      'Aniversários e momentos especiais',
      'Despedidas de solteira & solteiro',
      'Criação de conteúdo',
    ],
  },
  es: {
    whatsapp: "¡Hola! Vi tus sesiones de fotos en París en Fran's Guide! ¿Cuándo tienes disponibilidad?",
    eyebrow: 'Sesiones de Fotos en París',
    title1: 'Tu momento en París,',
    title2: 'bellamente capturado.',
    subtitle: 'Fotos naturales y elegantes en los rincones más bellos de París, para parejas, viajeros en solitario y todos los que quieren recordar esta ciudad para siempre.',
    pastSessions: 'Sesiones anteriores',
    included: 'Qué incluye',
    perfectFor: 'Ideal para',
    ctaTitle1: 'Lista para crear',
    ctaTitle2: '¿tu historia en París?',
    ctaBody: 'Escríbeme directamente para ver disponibilidad, hablar de los lugares y diseñar una sesión que se adapte a tu estilo.',
    bookBtn: 'Reservar por WhatsApp',
    packsLabel: 'Sesiones & precios',
    packsTitle1: 'Una sesión para',
    packsTitle2: 'cada momento.',
    packsNote: 'Todas las sesiones incluyen una galería privada online (Pixieset) con descarga en alta resolución.',
    wedEyebrow: '¿Te casas en París?',
    wedTitle: 'Descubre los paquetes de boda',
    wedBody: 'Ceremonias civiles, bodas religiosas, sesiones de pareja: una cobertura dedicada para tu gran día.',
    wedBtn: 'Ver paquetes de boda',
    includedList: [
      'Fotos naturales y guiadas por París',
      'Lugares icónicos y escondidos',
      'Orientación de poses si lo necesitas',
      'Una experiencia cálida y personal',
      '15 a 40 fotos retocadas según la sesión',
      'Galería privada online (Pixieset), alta resolución',
    ],
    forList: [
      'Parejas en París',
      'Viajeros en solitario',
      'Familias con niños',
      'Cumpleaños y momentos especiales',
      'Despedidas de soltera & soltero',
      'Creación de contenido',
    ],
  },
};

const LIFESTYLE_PACKS = [
  {
    id: 'express',
    name: {
      en: 'Express Photoshoot',
      fr: 'Séance Express',
      pt: 'Ensaio Express',
      es: 'Sesión Exprés',
    },
    price: '120€',
    specs: {
      en: '30 min · 1 location · 15 retouched photos',
      fr: '30 min · 1 lieu · 15 photos retouchées',
      pt: '30 min · 1 local · 15 fotos retocadas',
      es: '30 min · 1 lugar · 15 fotos retocadas',
    },
    desc: {
      en: 'Short on time? A quick, beautiful session at one iconic spot.',
      fr: 'Peu de temps ? Une séance rapide et belle sur un lieu iconique.',
      pt: 'Pouco tempo? Uma sessão rápida e linda em um local icônico.',
      es: '¿Poco tiempo? Una sesión rápida y bonita en un lugar icónico.',
    },
  },
  {
    id: 'couple',
    name: {
      en: 'Couple Session',
      fr: 'Séance Couple',
      pt: 'Ensaio de Casal',
      es: 'Sesión de Pareja',
    },
    price: '200€',
    specs: {
      en: '1h · 1-2 locations · 40 retouched photos',
      fr: '1h · 1-2 lieux · 40 photos retouchées',
      pt: '1h · 1-2 locais · 40 fotos retocadas',
      es: '1h · 1-2 lugares · 40 fotos retocadas',
    },
    desc: {
      en: 'The classic Paris session: guided poses, natural moments, golden light.',
      fr: 'La séance parisienne classique : poses guidées, moments naturels, belle lumière.',
      pt: 'A sessão parisiense clássica: poses guiadas, momentos naturais, luz dourada.',
      es: 'La sesión parisina clásica: poses guiadas, momentos naturales, luz dorada.',
    },
  },
  {
    id: 'tour',
    name: {
      en: 'Photoshoot + Guided Tour',
      fr: 'Séance Photo + Visite Guidée',
      pt: 'Ensaio + Tour Guiado',
      es: 'Sesión + Tour Guiado',
    },
    price: '280€',
    specs: {
      en: '2h · private tour + shoot · 40 retouched photos',
      fr: '2h · visite privée + shooting · 40 photos retouchées',
      pt: '2h · tour privado + ensaio · 40 fotos retocadas',
      es: '2h · tour privado + sesión · 40 fotos retocadas',
    },
    desc: {
      en: 'My signature combo: one hour of stories and hidden corners, one hour of photos along the way.',
      fr: 'Mon combo signature : une heure d\'histoires et de coins cachés, une heure de photos sur le parcours.',
      pt: 'Meu combo exclusivo: uma hora de histórias e cantos escondidos, uma hora de fotos pelo caminho.',
      es: 'Mi combo estrella: una hora de historias y rincones escondidos, una hora de fotos por el camino.',
    },
  },
  {
    id: 'birthday',
    name: {
      en: 'Birthday Special',
      fr: 'Spécial Anniversaire',
      pt: 'Especial Aniversário',
      es: 'Especial Cumpleaños',
    },
    price: '240€',
    specs: {
      en: '1h30 · up to 8 people · 40 retouched photos',
      fr: '1h30 · jusqu\'à 8 personnes · 40 photos retouchées',
      pt: '1h30 · até 8 pessoas · 40 fotos retocadas',
      es: '1h30 · hasta 8 personas · 40 fotos retocadas',
    },
    desc: {
      en: 'Celebrate in style: group shots, candid laughs, props welcome.',
      fr: 'Fêtez ça en beauté : photos de groupe, fous rires spontanés, accessoires bienvenus.',
      pt: 'Comemore com estilo: fotos de grupo, risadas espontâneas, acessórios bem-vindos.',
      es: 'Celebra con estilo: fotos de grupo, risas espontáneas, accesorios bienvenidos.',
    },
  },
  {
    id: 'family',
    name: {
      en: 'Family Special',
      fr: 'Spécial Famille',
      pt: 'Especial Família',
      es: 'Especial Familia',
    },
    price: '230€',
    specs: {
      en: '1h · kid-friendly pace · 40 retouched photos',
      fr: '1h · au rythme des enfants · 40 photos retouchées',
      pt: '1h · no ritmo das crianças · 40 fotos retocadas',
      es: '1h · al ritmo de los niños · 40 fotos retocadas',
    },
    desc: {
      en: 'Relaxed family memories in Paris, with all the patience your kids need.',
      fr: 'Des souvenirs de famille détendus à Paris, avec toute la patience qu\'il faut pour les enfants.',
      pt: 'Memórias de família tranquilas em Paris, com toda a paciência que as crianças precisam.',
      es: 'Recuerdos familiares relajados en París, con toda la paciencia que necesitan los niños.',
    },
  },
  {
    id: 'evj',
    name: {
      en: 'Bachelorette & Bachelor Party',
      fr: 'Spécial EVJF / EVG',
      pt: 'Despedida de Solteira & Solteiro',
      es: 'Despedida de Soltera & Soltero',
    },
    price: '260€',
    specs: {
      en: '1h30 · up to 10 people · 40 retouched photos',
      fr: '1h30 · jusqu\'à 10 personnes · 40 photos retouchées',
      pt: '1h30 · até 10 pessoas · 40 fotos retocadas',
      es: '1h30 · hasta 10 personas · 40 fotos retocadas',
    },
    desc: {
      en: 'One last shoot before the big day: confetti, laughter and Paris as your backdrop.',
      fr: 'Un dernier shooting avant le grand jour : paillettes, fous rires et Paris en toile de fond.',
      pt: 'Um último ensaio antes do grande dia: confete, risadas e Paris como cenário.',
      es: 'Una última sesión antes del gran día: confeti, risas y París de telón de fondo.',
    },
  },
];

const samplePhotos = [
  { src: '/assets/images/photoshoots/photo-1.jpeg', alt: 'Paris couple photoshoot' },
  { src: '/assets/images/photoshoots/photo-3.jpeg', alt: 'Solo traveler photoshoot in Paris' },
  { src: '/assets/images/photoshoots/photo-2.jpeg', alt: 'Romantic Eiffel Tower photoshoot' },
  { src: '/assets/images/photoshoots/photo-4.jpeg', alt: 'Paris lifestyle photoshoot' },
  { src: '/assets/images/photoshoots/photo-5.jpeg', alt: 'Paris lifestyle photoshoot' },
  { src: '/assets/images/photoshoots/photo-6.jpeg', alt: 'Paris lifestyle photoshoot' },
];

export default function PhotoshootsPage({ language = 'en' }) {
  const t = T[language] || T.en;
  const whatsappUrl = `https://wa.me/33759752536?text=${encodeURIComponent(t.whatsapp)}`;
  const [isPaused, setIsPaused] = useState(false);
  const loopedPhotos = [...samplePhotos, ...samplePhotos];
  return (
    <>
      <style>{`
        .fg-photos-page {
          padding-top: 80px;
          background: #fff;
          min-height: 100vh;
        }

        /* ── Header ── */
        .fg-photos-header {
          padding: 80px 80px 64px;
          border-bottom: 1px solid #E8E3DC;
          max-width: 720px;
        }
        .fg-photos-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4A4845;
          font-weight: 400;
          margin-bottom: 20px;
        }
        .fg-photos-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 5vw, 62px);
          font-weight: 400;
          line-height: 1.05;
          color: #1C1C1C;
          margin: 0 0 20px;
        }
        .fg-photos-title em {
          font-style: italic;
          color: #0F2C66;
        }
        .fg-photos-subtitle {
          font-family: 'Jost', sans-serif;
          font-size: 15px;
          line-height: 1.8;
          color: #4A4845;
          font-weight: 400;
          max-width: 520px;
        }

        /* ── Photo strip ── */
        .fg-photos-strip-section {
          padding: 80px 80px 64px;
          border-bottom: 1px solid #E8E3DC;
        }
        .fg-photos-section-label {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4A4845;
          font-weight: 400;
          margin-bottom: 32px;
        }
        .fg-photos-strip {
          overflow: hidden;
          width: 100%;
        }
        .fg-photos-track {
          display: flex;
          gap: 2px;
          width: max-content;
          animation: fg-marquee 42s linear infinite;
        }
        .fg-photos-strip:hover .fg-photos-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .fg-photos-track { animation: none; }
        }
        @keyframes fg-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .fg-photo-item {
          flex: 0 0 300px;
          overflow: hidden;
        }
        .fg-photo-item img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          display: block;
          filter: brightness(0.97) saturate(0.9);
          transition: filter 0.3s;
        }
        .fg-photo-item:hover img {
          filter: brightness(1) saturate(1);
        }

        /* ── Sessions & prices ── */
        .fg-photos-packs {
          padding: 72px 80px;
          background: #FAF8F5;
          border-bottom: 1px solid #E8E3DC;
        }
        .fg-photos-packs-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 3.5vw, 46px);
          font-weight: 400;
          line-height: 1.15;
          color: #1C1C1C;
          margin: 0 0 40px;
        }
        .fg-photos-packs-title em { font-style: italic; color: #0F2C66; }
        .fg-photos-packs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .fg-photos-pack-card {
          background: #fff;
          border: 1px solid #E8E3DC;
          padding: 30px 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .fg-photos-pack-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 12px;
        }
        .fg-photos-pack-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          color: #1C1C1C;
          margin: 0;
          line-height: 1.2;
        }
        .fg-photos-pack-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          color: #0F2C66;
          white-space: nowrap;
        }
        .fg-photos-pack-specs {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #4A4845;
          margin: 0;
          padding-bottom: 12px;
          border-bottom: 1px solid #E8E3DC;
        }
        .fg-photos-pack-desc {
          font-family: 'Jost', sans-serif;
          font-size: 13.5px;
          line-height: 1.7;
          color: #4A4845;
          margin: 0;
          flex-grow: 1;
        }
        .fg-photos-pack-link {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #0F2C66;
          text-decoration: none;
          border-bottom: 1px solid #E8E3DC;
          padding-bottom: 2px;
          align-self: flex-start;
          cursor: pointer;
          transition: border-color 0.2s;
        }
        .fg-photos-pack-link:hover { border-color: #0F2C66; }
        .fg-photos-packs-note {
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-style: italic;
          color: #4A4845;
          margin: 28px 0 0;
        }

        /* ── Weddings banner ── */
        .fg-photos-wed-banner {
          padding: 56px 80px;
          background: #0F2C66;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
        }
        .fg-photos-wed-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #CEE4FE;
          margin: 0 0 12px;
        }
        .fg-photos-wed-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 400;
          color: #fff;
          margin: 0 0 10px;
          line-height: 1.2;
        }
        .fg-photos-wed-body {
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255,255,255,0.8);
          margin: 0;
          max-width: 480px;
        }
        .fg-photos-wed-btn {
          background: #fff !important;
          color: #0F2C66 !important;
        }

        /* ── Details section ── */
        .fg-photos-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid #E8E3DC;
        }
        .fg-photos-col {
          padding: 64px 80px;
          border-right: 1px solid #E8E3DC;
        }
        .fg-photos-col:last-child { border-right: none; }
        .fg-photos-col-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 400;
          color: #1C1C1C;
          margin: 0 0 28px;
        }
        .fg-photos-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .fg-photos-list li {
          display: flex;
          align-items: center;
          gap: 16px;
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          color: #1C1C1C;
          font-weight: 400;
        }
        .fg-photos-list li::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #0F2C66;
          flex-shrink: 0;
        }

        /* ── CTA section ── */
        .fg-photos-cta-section {
          padding: 80px 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
        }
        .fg-photos-cta-text {
          max-width: 480px;
        }
        .fg-photos-cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          font-weight: 400;
          line-height: 1.2;
          color: #1C1C1C;
          margin: 0 0 16px;
        }
        .fg-photos-cta-title em {
          font-style: italic;
          color: #0F2C66;
        }
        .fg-photos-cta-body {
          font-family: 'Jost', sans-serif;
          font-size: 15px;
          line-height: 1.8;
          color: #4A4845;
          font-weight: 400;
          margin: 0;
        }
        .fg-btn-primary {
          display: inline-block;
          background: #0F2C66;
          color: #fff;
          padding: 14px 36px;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 400;
          white-space: nowrap;
          flex-shrink: 0;
          transition: opacity 0.2s;
        }
        .fg-btn-primary:hover { opacity: 0.85; color: #fff; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .fg-photos-header { padding: 60px 32px 48px; }
          .fg-photos-strip-section { padding: 60px 32px 48px; }
          .fg-photos-details { grid-template-columns: 1fr; }
          .fg-photos-col { padding: 48px 32px; border-right: none; border-bottom: 1px solid #E8E3DC; }
          .fg-photos-col:last-child { border-bottom: none; }
          .fg-photos-cta-section { flex-direction: column; align-items: flex-start; padding: 60px 32px; }
          .fg-photos-packs { padding: 56px 32px; }
          .fg-photos-packs-grid { grid-template-columns: 1fr; gap: 16px; }
          .fg-photos-wed-banner { flex-direction: column; align-items: flex-start; padding: 48px 32px; }
        }
        @media (max-width: 480px) {
          .fg-photos-header { padding: 48px 24px 36px; }
          .fg-photos-strip-section { padding: 48px 24px 36px; }
          .fg-photos-col { padding: 40px 24px; }
          .fg-photos-cta-section { padding: 48px 24px; }
          .fg-photos-packs { padding: 48px 24px; }
          .fg-photos-pack-card { padding: 24px 20px; }
          .fg-photos-pack-head {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
          .fg-photos-pack-link { padding: 8px 0 2px; }
          .fg-photos-wed-banner { padding: 40px 24px; }
          .fg-photos-wed-btn { width: 100%; text-align: center; }
          .fg-photo-item { flex: 0 0 240px; }
          .fg-photo-item img { height: 320px; }
          .fg-photos-cta-title { font-size: 34px; }
        }
      `}</style>

      <div className="fg-photos-page">
        {/* Header */}
        <div className="fg-photos-header">
          <p className="fg-photos-eyebrow">{t.eyebrow}</p>
          <h1 className="fg-photos-title">
            {t.title1}<br/><em>{t.title2}</em>
          </h1>
          <p className="fg-photos-subtitle">{t.subtitle}</p>
        </div>

        {/* Photo strip */}
        <div className="fg-photos-strip-section">
          <p className="fg-photos-section-label">{t.pastSessions}</p>
          <div
            className="fg-photos-strip"
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            onTouchCancel={() => setIsPaused(false)}
          >
            <div
              className="fg-photos-track"
              style={isPaused ? { animationPlayState: 'paused' } : undefined}
            >
              {loopedPhotos.map((p, i) => (
                <div key={`${p.src}-${i}`} className="fg-photo-item">
                  <img src={p.src} alt={p.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sessions & prices */}
        <div className="fg-photos-packs">
          <p className="fg-photos-section-label">{t.packsLabel}</p>
          <h2 className="fg-photos-packs-title">
            {t.packsTitle1}<br/><em>{t.packsTitle2}</em>
          </h2>
          <div className="fg-photos-packs-grid">
            {LIFESTYLE_PACKS.map((pack) => (
              <div key={pack.id} className="fg-photos-pack-card">
                <div className="fg-photos-pack-head">
                  <h3 className="fg-photos-pack-name">{pack.name[language] || pack.name.en}</h3>
                  <span className="fg-photos-pack-price">{pack.price}</span>
                </div>
                <p className="fg-photos-pack-specs">{pack.specs[language] || pack.specs.en}</p>
                <p className="fg-photos-pack-desc">{pack.desc[language] || pack.desc.en}</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="fg-photos-pack-link">
                  {t.bookBtn} →
                </a>
              </div>
            ))}
          </div>
          <p className="fg-photos-packs-note">{t.packsNote}</p>
        </div>

        {/* Weddings banner */}
        <div className="fg-photos-wed-banner">
          <div>
            <p className="fg-photos-wed-eyebrow">{t.wedEyebrow}</p>
            <h2 className="fg-photos-wed-title">{t.wedTitle}</h2>
            <p className="fg-photos-wed-body">{t.wedBody}</p>
          </div>
          <a href="/weddings" className="fg-btn-primary fg-photos-wed-btn">{t.wedBtn}</a>
        </div>

        {/* Details */}
        <div className="fg-photos-details">
          <div className="fg-photos-col">
            <h2 className="fg-photos-col-title">{t.included}</h2>
            <ul className="fg-photos-list">
              {t.includedList.map(i => <li key={i}>{i}</li>)}
            </ul>
          </div>
          <div className="fg-photos-col">
            <h2 className="fg-photos-col-title">{t.perfectFor}</h2>
            <ul className="fg-photos-list">
              {t.forList.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="fg-photos-cta-section">
          <div className="fg-photos-cta-text">
            <h2 className="fg-photos-cta-title">
              {t.ctaTitle1}<br/><em>{t.ctaTitle2}</em>
            </h2>
            <p className="fg-photos-cta-body">{t.ctaBody}</p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="fg-btn-primary">
            {t.bookBtn}
          </a>
        </div>
      </div>
    </>
  );
}
