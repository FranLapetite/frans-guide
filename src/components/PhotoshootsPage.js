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
    includedList: [
      'Natural and guided photos around Paris',
      'Iconic and hidden locations',
      'Posing guidance if needed',
      'A warm, personal experience',
      '20–40 edited photos delivered',
    ],
    forList: [
      'Couples in Paris',
      'Solo travelers',
      'Birthdays & special moments',
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
    includedList: [
      'Photos naturelles et guidées autour de Paris',
      'Lieux emblématiques et secrets',
      'Conseils de pose si besoin',
      'Une expérience chaleureuse et personnelle',
      '20 à 40 photos retouchées livrées',
    ],
    forList: [
      'Couples à Paris',
      'Voyageurs en solo',
      'Anniversaires et moments spéciaux',
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
    includedList: [
      'Fotos naturais e guiadas por Paris',
      'Locais icônicos e escondidos',
      'Orientações de pose se precisar',
      'Uma experiência calorosa e pessoal',
      '20 a 40 fotos editadas entregues',
    ],
    forList: [
      'Casais em Paris',
      'Viajantes solo',
      'Aniversários e momentos especiais',
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
    includedList: [
      'Fotos naturales y guiadas por París',
      'Lugares icónicos y escondidos',
      'Orientación de poses si lo necesitas',
      'Una experiencia cálida y personal',
      '20 a 40 fotos editadas entregadas',
    ],
    forList: [
      'Parejas en París',
      'Viajeros en solitario',
      'Cumpleaños y momentos especiales',
      'Creación de contenido',
    ],
  },
};

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
        }
        @media (max-width: 480px) {
          .fg-photos-header { padding: 48px 24px 36px; }
          .fg-photos-strip-section { padding: 48px 24px 36px; }
          .fg-photos-col { padding: 40px 24px; }
          .fg-photos-cta-section { padding: 48px 24px; }
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
