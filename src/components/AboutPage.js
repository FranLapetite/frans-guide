import React from 'react';

const PHOTOS = [
  { src: '/340F836D-D5A7-4A46-B5A3-22BB799C5A81_1_105_c.jpeg', alt: 'Paris street' },
  { src: '/4487DEE2-9575-4694-B567-D32FB7607B3D_1_105_c.jpeg', alt: 'Paris café' },
  { src: '/E40AE426-E420-4EFA-9B0E-ACC5934A7A0D_1_105_c.jpeg', alt: 'Paris architecture' },
  { src: '/C4FE08AB-710F-4CB4-B427-6BAC0CF5657A_1_105_c.jpeg', alt: 'Parisian alley' },
  { src: '/E7577CDB-C4C5-412C-B322-17BC8E7DA8DF_1_105_c.jpeg', alt: 'Paris building' },
  { src: '/D329E9E2-F850-454B-BA06-CF5ECC250C57_1_105_c.jpeg', alt: 'Paris courtyard' },
];

const TEXTS = {
  en: {
    eyebrow: 'About Fran',
    heroTitle: <>Franco-Brazilian.<br/>Guide. Photographer.<br/><em>Engineer.</em></>,
    heroPara: 'Franco-Brazilian, based in Paris. Since 2022, I\'ve been guiding visitors through the city and capturing their moments — through private tours, photoshoots for couples, weddings and engagements, and the Fran\'s Guide app, which I designed and developed myself.',

    s1eyebrow: 'The beginning',
    s1title: <>A guide since<br/><em>2022.</em></>,
    s1body: [
      'I started guiding in Paris in 2022, and it immediately felt like the right thing. Walking with people through the streets I know by heart — sharing the stories, the hidden corners, the light at the right hour — turned out to be exactly the kind of work I\'d been looking for. Growing up between Brazil and France gave me a way of seeing the city that isn\'t quite local, isn\'t quite tourist — something in between, which turns out to be the best place to guide from.',
      'What began as private tours for couples and solo travelers grew into a full catalog: walking tours, photoshoots, audio experiences, morning rituals. Every route comes from real knowledge — streets I\'ve walked hundreds of times, stories collected across years of guiding and exploring the city on my own. Every tour is a conversation.',
    ],

    s2eyebrow: 'The other side',
    s2title: <>Computer science<br/><em>engineer.</em></>,
    s2body: [
      'Before guiding, I trained as a computer science engineer. That background never left — it just found a new purpose. When I wanted to offer audio tours, I didn\'t outsource the app: I built it myself.',
      'Fran\'s Guide is a React Native mobile app with GPS-guided audio tours, an interactive map, and AI-powered features. Designing and developing it has been one of the most satisfying projects of my life — a place where both sides of me finally converge.',
    ],

    s3eyebrow: 'The app',
    s3title: <>Built from<br/><em>scratch.</em></>,
    s3features: [
      'GPS-guided audio narration, stop by stop',
      'Interactive map — follow the route in real time',
      'AI-powered features built into the experience',
      'Available in English and French',
      'Built with React Native & Expo',
    ],
    s3body: 'Every route in the app comes from real experience — tours I\'ve led dozens of times, streets I\'ve walked hundreds of times. The scripts are written from memory and from love, not from a guidebook. The app is currently in beta for the Eiffel Tower and Notre-Dame tours, with more routes in development.',

    s4eyebrow: 'Photography',
    s4title: <>A passion since<br/><em>childhood.</em></>,
    s4body: [
      'Photography has been part of my life for as long as I can remember. Long before guiding, long before Paris — I was already drawn to the light, the moment, the story a single frame could hold.',
      'Being able to turn that lifelong passion into photoshoots for couples, weddings, engagements, solo travelers and special moments in Paris feels like a dream made real. Every session is different, every light is different — but the goal is always the same: photos you\'ll actually keep.',
    ],

    galleryEyebrow: 'Paris, through my lens',
    galleryTitle: <>Places that<br/><em>stay with you.</em></>,

    ctaEyebrow: 'Get in touch',
    ctaTitle: <>Ready to explore<br/><em>Paris with me?</em></>,
    ctaBody: 'Whether you\'re looking for a private tour, a photoshoot, or just want to know more about the app — I\'d love to hear from you.',
    ctaLink: 'Send a message',
  },
  fr: {
    eyebrow: 'À propos de Fran',
    heroTitle: <>Franco-brésilienne.<br/>Guide. Photographe.<br/><em>Ingénieure.</em></>,
    heroPara: 'Franco-brésilienne, installée à Paris. Depuis 2022, je guide des visiteurs et capture leurs moments dans cette ville — à travers des visites privées, des séances photo pour couples, mariages et fiançailles, et l\'application Fran\'s Guide, que j\'ai conçue et développée moi-même.',

    s1eyebrow: 'Le début',
    s1title: <>Guide depuis<br/><em>2022.</em></>,
    s1body: [
      'J\'ai commencé à guider à Paris en 2022, et c\'est immédiatement apparu comme une évidence. Marcher avec des gens dans des rues que je connais par cœur — partager des histoires, des coins cachés, la lumière au bon moment — c\'est exactement le travail que je cherchais. Avoir grandi entre le Brésil et la France m\'a donné une façon de voir la ville qui n\'est ni tout à fait locale, ni tout à fait touristique — quelque chose entre les deux, qui s\'avère être le meilleur endroit pour guider.',
      'Ce qui a commencé comme des visites privées pour des couples et des voyageurs solo s\'est transformé en un catalogue complet : balades à pied, séances photo, expériences audio, rituels matinaux. Chaque parcours vient d\'une connaissance réelle — des rues parcourues des centaines de fois, des histoires collectées au fil des années de visites guidées et d\'explorations personnelles de la ville. Chaque visite est une conversation.',
    ],

    s2eyebrow: 'L\'autre côté',
    s2title: <>Ingénieure en<br/><em>informatique.</em></>,
    s2body: [
      'Avant de guider, j\'ai suivi une formation d\'ingénieure en informatique. Ce bagage ne m\'a pas quittée — il a juste trouvé un nouveau terrain d\'expression. Quand j\'ai voulu proposer des visites audio, je n\'ai pas délégué l\'application : je l\'ai construite moi-même.',
      'Fran\'s Guide est une application mobile React Native avec des visites audio guidées par GPS, une carte interactive et des fonctionnalités basées sur l\'IA. Concevoir et développer cette application a été l\'un des projets les plus satisfaisants de ma vie.',
    ],

    s3eyebrow: 'L\'application',
    s3title: <>Construite de<br/><em>zéro.</em></>,
    s3features: [
      'Narration audio guidée par GPS, étape par étape',
      'Carte interactive — suivez le parcours en temps réel',
      'Fonctionnalités IA intégrées à l\'expérience',
      'Disponible en anglais et en français',
      'Développée avec React Native & Expo',
    ],
    s3body: 'Chaque parcours de l\'application vient d\'une expérience réelle — des visites que j\'ai menées des dizaines de fois, des rues que j\'ai parcourues des centaines de fois. Les scripts sont écrits de mémoire et d\'amour, pas d\'un guide touristique. L\'application est en bêta pour les visites Tour Eiffel et Notre-Dame, avec d\'autres parcours en développement.',

    s4eyebrow: 'Photographie',
    s4title: <>Une passion depuis<br/><em>toujours.</em></>,
    s4body: [
      'La photographie fait partie de ma vie depuis aussi longtemps que je m\'en souvienne. Bien avant le guidage, bien avant Paris — j\'étais déjà attirée par la lumière, l\'instant, l\'histoire qu\'une seule image peut raconter.',
      'Pouvoir transformer cette passion de toujours en séances photo pour des couples, des mariages, des fiançailles, des voyageurs solo et des moments spéciaux à Paris, c\'est un rêve qui se réalise. Chaque séance est unique, chaque lumière est différente — mais l\'objectif est toujours le même : des photos que vous garderez vraiment.',
    ],

    galleryEyebrow: 'Paris, à travers mon objectif',
    galleryTitle: <>Des endroits qui<br/><em>restent en vous.</em></>,

    ctaEyebrow: 'Me contacter',
    ctaTitle: <>Prêt·e à explorer<br/><em>Paris avec moi ?</em></>,
    ctaBody: 'Que vous cherchiez une visite privée, une séance photo ou simplement en savoir plus sur l\'application — je serais ravie de vous lire.',
    ctaLink: 'Envoyer un message',
  },
};

// Fallback to EN for PT/ES
const getText = (lang) => TEXTS[lang] || TEXTS.en;

const AboutPage = ({ language = 'en' }) => {
  const t = getText(language);

  return (
    <>
      <style>{`
        .fg-about-page {
          padding-top: 80px;
          background: #fff;
          font-family: 'Jost', sans-serif;
        }

        /* ── Hero ── */
        .fg-ap-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 70vh;
          border-bottom: 1px solid #E8E3DC;
        }
        .fg-ap-hero-left {
          padding: 80px 60px 80px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 24px;
          background: #fff;
        }
        .fg-ap-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4A4845;
          font-weight: 400;
        }
        .fg-ap-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(44px, 5vw, 68px);
          font-weight: 400;
          line-height: 1.05;
          color: #1C1C1C;
          margin: 0;
        }
        .fg-ap-hero-title em { font-style: italic; color: #0F2C66; }
        .fg-ap-hero-para {
          font-size: 15px;
          line-height: 1.85;
          color: #4A4845;
          font-weight: 400;
          max-width: 400px;
        }
        .fg-ap-hero-right {
          position: relative;
          overflow: hidden;
          background: #F3EFE9;
          border-left: 1px solid #E8E3DC;
        }
        .fg-ap-hero-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.96) saturate(0.85);
          display: block;
        }

        /* ── Story sections ── */
        .fg-ap-story {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid #E8E3DC;
        }
        .fg-ap-story.reverse { direction: rtl; }
        .fg-ap-story.reverse > * { direction: ltr; }
        .fg-ap-story-text {
          padding: 80px 60px 80px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;
        }
        .fg-ap-story.reverse .fg-ap-story-text {
          padding: 80px 80px 80px 60px;
        }
        .fg-ap-story-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 52px);
          font-weight: 400;
          line-height: 1.1;
          color: #1C1C1C;
          margin: 0;
        }
        .fg-ap-story-title em { font-style: italic; color: #0F2C66; }
        .fg-ap-story-para {
          font-size: 14px;
          line-height: 1.9;
          color: #4A4845;
          font-weight: 400;
          max-width: 420px;
        }
        .fg-ap-story-img {
          background: #FAF8F5;
          border-left: 1px solid #E8E3DC;
          overflow: hidden;
          min-height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .fg-ap-story.reverse .fg-ap-story-img {
          border-left: none;
          border-right: 1px solid #E8E3DC;
        }
        .fg-ap-story-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.96) saturate(0.85);
          display: block;
        }

        /* ── App features ── */
        .fg-ap-app {
          padding: 80px 80px;
          border-bottom: 1px solid #E8E3DC;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
          background: #FAF8F5;
        }
        .fg-ap-app-left { display: flex; flex-direction: column; gap: 20px; }
        .fg-ap-app-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 52px);
          font-weight: 400;
          line-height: 1.1;
          color: #1C1C1C;
          margin: 0;
        }
        .fg-ap-app-title em { font-style: italic; color: #0F2C66; }
        .fg-ap-app-para {
          font-size: 14px;
          line-height: 1.9;
          color: #4A4845;
          font-weight: 400;
        }
        .fg-ap-app-right { display: flex; flex-direction: column; gap: 16px; padding-top: 16px; }
        .fg-ap-feature {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 14px;
          color: #1C1C1C;
          font-weight: 400;
        }
        .fg-ap-feature::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #0F2C66;
          flex-shrink: 0;
        }

        /* ── Gallery ── */
        .fg-ap-gallery {
          border-bottom: 1px solid #E8E3DC;
        }
        .fg-ap-gallery-header {
          padding: 64px 80px 40px;
        }
        .fg-ap-gallery-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 48px);
          font-weight: 400;
          line-height: 1.1;
          color: #1C1C1C;
          margin: 8px 0 0;
        }
        .fg-ap-gallery-title em { font-style: italic; color: #0F2C66; }
        .fg-ap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }
        .fg-ap-grid-item {
          overflow: hidden;
          aspect-ratio: 1;
        }
        .fg-ap-grid-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.97) saturate(0.85);
          transition: filter 0.3s, transform 0.4s;
        }
        .fg-ap-grid-item:hover img {
          filter: brightness(1) saturate(1);
          transform: scale(1.03);
        }

        /* ── CTA ── */
        .fg-ap-cta {
          padding: 100px 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .fg-ap-cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 52px);
          font-weight: 400;
          line-height: 1.1;
          color: #1C1C1C;
          margin: 8px 0 0;
        }
        .fg-ap-cta-title em { font-style: italic; color: #0F2C66; }
        .fg-ap-cta-right { display: flex; flex-direction: column; gap: 20px; }
        .fg-ap-cta-body {
          font-size: 15px;
          line-height: 1.85;
          color: #4A4845;
          font-weight: 400;
        }
        .fg-ap-cta-btn {
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
          align-self: flex-start;
          transition: opacity 0.2s;
        }
        .fg-ap-cta-btn:hover { opacity: 0.85; color: #fff; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .fg-ap-hero { grid-template-columns: 1fr; min-height: auto; }
          .fg-ap-hero-left { padding: 60px 32px 48px; }
          .fg-ap-hero-right { min-height: 50vw; border-left: none; border-top: 1px solid #E8E3DC; }
          .fg-ap-story { grid-template-columns: 1fr; direction: ltr !important; }
          .fg-ap-story-text { padding: 60px 32px 48px !important; }
          .fg-ap-story-img { min-height: 300px; border-left: none !important; border-right: none !important; border-top: 1px solid #E8E3DC; }
          .fg-ap-app { grid-template-columns: 1fr; padding: 60px 32px; gap: 40px; }
          .fg-ap-gallery-header { padding: 48px 32px 32px; }
          .fg-ap-grid { grid-template-columns: repeat(2, 1fr); }
          .fg-ap-cta { grid-template-columns: 1fr; padding: 60px 32px; gap: 36px; }
        }
        @media (max-width: 480px) {
          .fg-ap-hero-left { padding: 48px 24px 36px; }
          .fg-ap-story-text { padding: 48px 24px 36px !important; }
          .fg-ap-app { padding: 48px 24px; }
          .fg-ap-gallery-header { padding: 40px 24px 24px; }
          .fg-ap-grid { grid-template-columns: repeat(2, 1fr); }
          .fg-ap-cta { padding: 48px 24px; }
        }
      `}</style>

      <div className="fg-about-page">

        {/* ── Hero ── */}
        <div className="fg-ap-hero">
          <div className="fg-ap-hero-left">
            <span className="fg-ap-eyebrow">{t.eyebrow}</span>
            <h1 className="fg-ap-hero-title">{t.heroTitle}</h1>
            <p className="fg-ap-hero-para">{t.heroPara}</p>
          </div>
          <div className="fg-ap-hero-right">
            <img src="/fran.jpeg" alt="Fran in Paris" />
          </div>
        </div>

        {/* ── Section 1: Guide since 2022 ── */}
        <div className="fg-ap-story">
          <div className="fg-ap-story-text">
            <span className="fg-ap-eyebrow">{t.s1eyebrow}</span>
            <h2 className="fg-ap-story-title">{t.s1title}</h2>
            {t.s1body.map((p, i) => <p key={i} className="fg-ap-story-para">{p}</p>)}
          </div>
          <div className="fg-ap-story-img">
            <img src="/B6689E79-05BE-4DF4-BD2B-7054494F04AA_1_201_a.jpeg" alt="Paris tour" />
          </div>
        </div>

        {/* ── Section 2: Computer science engineer ── */}
        <div className="fg-ap-story reverse">
          <div className="fg-ap-story-img">
            <img src="/EC2D4464-9ED4-44AF-B995-CD8D753986BA_1_105_c.jpeg" alt="Paris" />
          </div>
          <div className="fg-ap-story-text">
            <span className="fg-ap-eyebrow">{t.s2eyebrow}</span>
            <h2 className="fg-ap-story-title">{t.s2title}</h2>
            {t.s2body.map((p, i) => <p key={i} className="fg-ap-story-para">{p}</p>)}
          </div>
        </div>

        {/* ── Section 3: The app ── */}
        <div className="fg-ap-app">
          <div className="fg-ap-app-left">
            <span className="fg-ap-eyebrow">{t.s3eyebrow}</span>
            <h2 className="fg-ap-app-title">{t.s3title}</h2>
            <p className="fg-ap-app-para">{t.s3body}</p>
          </div>
          <div className="fg-ap-app-right">
            {t.s3features.map((f, i) => (
              <div key={i} className="fg-ap-feature">{f}</div>
            ))}
          </div>
        </div>

        {/* ── Section 4: Photography ── */}
        <div className="fg-ap-story">
          <div className="fg-ap-story-text">
            <span className="fg-ap-eyebrow">{t.s4eyebrow}</span>
            <h2 className="fg-ap-story-title">{t.s4title}</h2>
            {t.s4body.map((p, i) => <p key={i} className="fg-ap-story-para">{p}</p>)}
          </div>
          <div className="fg-ap-story-img">
            <img src="/assets/images/photoshoots/photo-1.jpeg" alt="Paris photoshoot" />
          </div>
        </div>

        {/* ── Gallery ── */}
        <div className="fg-ap-gallery">
          <div className="fg-ap-gallery-header">
            <span className="fg-ap-eyebrow">{t.galleryEyebrow}</span>
            <h2 className="fg-ap-gallery-title">{t.galleryTitle}</h2>
          </div>
          <div className="fg-ap-grid">
            {PHOTOS.map(({ src, alt }) => (
              <div key={src} className="fg-ap-grid-item">
                <img src={src} alt={alt} />
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="fg-ap-cta">
          <div>
            <span className="fg-ap-eyebrow">{t.ctaEyebrow}</span>
            <h2 className="fg-ap-cta-title">{t.ctaTitle}</h2>
          </div>
          <div className="fg-ap-cta-right">
            <p className="fg-ap-cta-body">{t.ctaBody}</p>
            <a href="/contact" className="fg-ap-cta-btn">{t.ctaLink}</a>
          </div>
        </div>

      </div>
    </>
  );
};

export default AboutPage;
