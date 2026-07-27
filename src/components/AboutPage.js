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
    heroPara: 'Franco-Brazilian, based in Paris. Since 2022, I\'ve been guiding visitors through the city and capturing their moments through private tours, photoshoots for couples, weddings and engagements, and the Fran\'s Guide app, which I designed and developed myself.',

    s1eyebrow: 'The beginning',
    s1title: <>A guide since<br/><em>2022.</em></>,
    s1body: [
      'I started guiding in Paris in 2022, and it immediately felt like the right thing. Walking with people through the streets I know by heart, sharing the stories, the hidden corners, the light at the right hour, turned out to be exactly the kind of work I\'d been looking for. Growing up between Brazil and France gave me a way of seeing the city that isn\'t quite local, isn\'t quite tourist: something in between, which turns out to be the best place to guide from.',
      'What began as private tours for couples and solo travelers grew into a full catalog: walking tours, photoshoots, audio experiences, morning rituals. Every route comes from real knowledge: streets I\'ve walked hundreds of times, stories collected across years of guiding and exploring the city on my own. Every tour is a conversation.',
    ],

    s2eyebrow: 'The other side',
    s2title: <>Computer science<br/><em>engineer.</em></>,
    s2body: [
      'Before guiding, I trained as a computer science engineer. That background never left. It just found a new purpose. When I wanted to offer audio tours, I didn\'t outsource the app: I built it myself.',
      'Fran\'s Guide is a React Native mobile app with GPS-guided audio tours, an interactive map, and AI-powered features. Designing and developing it has been one of the most satisfying projects of my life, a place where both sides of me finally converge.',
    ],

    s3eyebrow: 'The app',
    s3title: <>Built from<br/><em>scratch.</em></>,
    s3features: [
      'GPS-guided audio narration, stop by stop',
      'Interactive map that follows the route in real time',
      'AI-powered features built into the experience',
      'Available in English and French',
      'Built with React Native & Expo',
    ],
    s3body: 'Every route in the app comes from real experience: tours I\'ve led dozens of times, streets I\'ve walked hundreds of times. The scripts are written from memory and from love, not from a guidebook. The app is currently in beta for the Eiffel Tower and Notre-Dame tours, with more routes in development.',

    s4eyebrow: 'Photography',
    s4title: <>A passion since<br/><em>childhood.</em></>,
    s4body: [
      'Photography has been part of my life for as long as I can remember. Long before guiding, long before Paris, I was already drawn to the light, the moment, the story a single frame could hold.',
      'Being able to turn that lifelong passion into photoshoots for couples, weddings, engagements, solo travelers and special moments in Paris feels like a dream made real. Every session is different, every light is different, but the goal is always the same: photos you\'ll actually keep.',
    ],

    galleryEyebrow: 'Paris, through my lens',
    galleryTitle: <>Places that<br/><em>stay with you.</em></>,

    ctaEyebrow: 'Get in touch',
    ctaTitle: <>Ready to explore<br/><em>Paris with me?</em></>,
    ctaBody: 'Whether you\'re looking for a private tour, a photoshoot, or just want to know more about the app, I\'d love to hear from you.',
    ctaLink: 'Send a message',
  },
  fr: {
    eyebrow: 'À propos de Fran',
    heroTitle: <>Franco-brésilienne.<br/>Guide. Photographe.<br/><em>Ingénieure.</em></>,
    heroPara: 'Franco-brésilienne, installée à Paris. Depuis 2022, je guide des visiteurs et capture leurs moments dans cette ville, à travers des visites privées, des séances photo pour couples, mariages et fiançailles, et l\'application Fran\'s Guide, que j\'ai conçue et développée moi-même.',

    s1eyebrow: 'Le début',
    s1title: <>Guide depuis<br/><em>2022.</em></>,
    s1body: [
      'J\'ai commencé à guider à Paris en 2022, et c\'est immédiatement apparu comme une évidence. Marcher avec des gens dans des rues que je connais par cœur, partager des histoires, des coins cachés, la lumière au bon moment, c\'est exactement le travail que je cherchais. Avoir grandi entre le Brésil et la France m\'a donné une façon de voir la ville qui n\'est ni tout à fait locale, ni tout à fait touristique : quelque chose entre les deux, qui s\'avère être le meilleur endroit pour guider.',
      'Ce qui a commencé comme des visites privées pour des couples et des voyageurs solo s\'est transformé en un catalogue complet : balades à pied, séances photo, expériences audio, rituels matinaux. Chaque parcours vient d\'une connaissance réelle : des rues parcourues des centaines de fois, des histoires collectées au fil des années de visites guidées et d\'explorations personnelles de la ville. Chaque visite est une conversation.',
    ],

    s2eyebrow: 'L\'autre côté',
    s2title: <>Ingénieure en<br/><em>informatique.</em></>,
    s2body: [
      'Avant de guider, j\'ai suivi une formation d\'ingénieure en informatique. Ce bagage ne m\'a pas quittée. Il a juste trouvé un nouveau terrain d\'expression. Quand j\'ai voulu proposer des visites audio, je n\'ai pas délégué l\'application : je l\'ai construite moi-même.',
      'Fran\'s Guide est une application mobile React Native avec des visites audio guidées par GPS, une carte interactive et des fonctionnalités basées sur l\'IA. Concevoir et développer cette application a été l\'un des projets les plus satisfaisants de ma vie.',
    ],

    s3eyebrow: 'L\'application',
    s3title: <>Construite de<br/><em>zéro.</em></>,
    s3features: [
      'Narration audio guidée par GPS, étape par étape',
      'Carte interactive qui suit le parcours en temps réel',
      'Fonctionnalités IA intégrées à l\'expérience',
      'Disponible en anglais et en français',
      'Développée avec React Native & Expo',
    ],
    s3body: 'Chaque parcours de l\'application vient d\'une expérience réelle : des visites que j\'ai menées des dizaines de fois, des rues que j\'ai parcourues des centaines de fois. Les scripts sont écrits de mémoire et d\'amour, pas d\'un guide touristique. L\'application est en bêta pour les visites Tour Eiffel et Notre-Dame, avec d\'autres parcours en développement.',

    s4eyebrow: 'Photographie',
    s4title: <>Une passion depuis<br/><em>toujours.</em></>,
    s4body: [
      'La photographie fait partie de ma vie depuis aussi longtemps que je m\'en souvienne. Bien avant le guidage, bien avant Paris, j\'étais déjà attirée par la lumière, l\'instant, l\'histoire qu\'une seule image peut raconter.',
      'Pouvoir transformer cette passion de toujours en séances photo pour des couples, des mariages, des fiançailles, des voyageurs solo et des moments spéciaux à Paris, c\'est un rêve qui se réalise. Chaque séance est unique, chaque lumière est différente, mais l\'objectif est toujours le même : des photos que vous garderez vraiment.',
    ],

    galleryEyebrow: 'Paris, à travers mon objectif',
    galleryTitle: <>Des endroits qui<br/><em>restent en vous.</em></>,

    ctaEyebrow: 'Me contacter',
    ctaTitle: <>Prêt·e à explorer<br/><em>Paris avec moi ?</em></>,
    ctaBody: 'Que vous cherchiez une visite privée, une séance photo ou simplement en savoir plus sur l\'application, je serais ravie de vous lire.',
    ctaLink: 'Envoyer un message',
  },
  pt: {
    eyebrow: 'Sobre Fran',
    heroTitle: <>Franco-brasileira.<br/>Guia. Fotógrafa.<br/><em>Engenheira.</em></>,
    heroPara: 'Franco-brasileira, baseada em Paris. Desde 2022, guio visitantes pela cidade e capturo seus momentos através de tours privados, ensaios fotográficos para casais, casamentos e noivados, e o aplicativo Fran\'s Guide, que desenvolvi eu mesma.',
    s1eyebrow: 'O começo',
    s1title: <>Guia desde<br/><em>2022.</em></>,
    s1body: [
      'Comecei a guiar em Paris em 2022, e imediatamente pareceu a coisa certa. Caminhar com pessoas pelas ruas que conheço de cor, compartilhando histórias, cantos escondidos, a luz na hora certa, revelou ser exatamente o trabalho que eu estava procurando. Crescer entre o Brasil e a França me deu uma forma de ver a cidade que não é totalmente local, nem totalmente turística: algo entre os dois, que acaba sendo o melhor ponto de partida para guiar.',
      'O que começou como tours privados para casais e viajantes solo cresceu e se transformou em um catálogo completo: caminhadas, ensaios fotográficos, experiências de áudio, rituais matinais. Cada roteiro vem de um conhecimento real: ruas percorridas centenas de vezes, histórias coletadas ao longo de anos guiando e explorando a cidade. Cada tour é uma conversa.',
    ],
    s2eyebrow: 'O outro lado',
    s2title: <>Engenheira de<br/><em>computação.</em></>,
    s2body: [
      'Antes de guiar, me formei como engenheira de computação. Esse bagageiro nunca me abandonou. Apenas encontrou um novo propósito. Quando quis oferecer tours de áudio, não terceirizei o aplicativo: eu mesma o construí.',
      'Fran\'s Guide é um aplicativo mobile React Native com tours de áudio guiados por GPS, um mapa interativo e funcionalidades com IA. Projetar e desenvolver este aplicativo foi um dos projetos mais satisfatórios da minha vida, um lugar onde os dois lados de mim finalmente convergem.',
    ],
    s3eyebrow: 'O aplicativo',
    s3title: <>Construído do<br/><em>zero.</em></>,
    s3features: [
      'Narração de áudio guiada por GPS, passo a passo',
      'Mapa interativo que acompanha o roteiro em tempo real',
      'Funcionalidades com IA integradas à experiência',
      'Disponível em inglês e francês',
      'Desenvolvido com React Native & Expo',
    ],
    s3body: 'Cada roteiro no aplicativo vem de experiência real: tours que conduzi dezenas de vezes, ruas que percorri centenas de vezes. Os roteiros são escritos da memória e do amor, não de um guia turístico. O aplicativo está em beta para os tours da Torre Eiffel e Notre-Dame, com mais roteiros em desenvolvimento.',
    s4eyebrow: 'Fotografia',
    s4title: <>Uma paixão desde<br/><em>a infância.</em></>,
    s4body: [
      'A fotografia faz parte da minha vida desde que me lembro. Muito antes de guiar, muito antes de Paris, eu já era atraída pela luz, pelo momento, pela história que um único enquadramento pode contar.',
      'Poder transformar essa paixão de vida toda em ensaios fotográficos para casais, casamentos, noivados, viajantes solo e momentos especiais em Paris parece um sonho realizado. Cada sessão é diferente, cada luz é diferente, mas o objetivo é sempre o mesmo: fotos que você vai realmente guardar.',
    ],
    galleryEyebrow: 'Paris, através da minha lente',
    galleryTitle: <>Lugares que<br/><em>ficam com você.</em></>,
    ctaEyebrow: 'Entre em contato',
    ctaTitle: <>Pronta para explorar<br/><em>Paris comigo?</em></>,
    ctaBody: 'Seja você procurando um tour privado, um ensaio fotográfico ou apenas queira saber mais sobre o aplicativo, adoraria ouvir de você.',
    ctaLink: 'Enviar uma mensagem',
  },
  es: {
    eyebrow: 'Sobre Fran',
    heroTitle: <>Franco-brasileña.<br/>Guía. Fotógrafa.<br/><em>Ingeniera.</em></>,
    heroPara: 'Franco-brasileña, afincada en París. Desde 2022, guío visitantes por la ciudad y capturo sus momentos a través de tours privados, sesiones de fotos para parejas, bodas y compromisos, y la app Fran\'s Guide, que diseñé y desarrollé yo misma.',
    s1eyebrow: 'El comienzo',
    s1title: <>Guía desde<br/><em>2022.</em></>,
    s1body: [
      'Empecé a guiar en París en 2022, y de inmediato sentí que era lo correcto. Caminar con personas por las calles que conozco de memoria, compartiendo historias, rincones escondidos, la luz en el momento exacto, resultó ser exactamente el trabajo que buscaba. Crecer entre Brasil y Francia me dio una forma de ver la ciudad que no es del todo local ni del todo turística: algo intermedio, que resulta ser el mejor lugar desde el que guiar.',
      'Lo que comenzó como tours privados para parejas y viajeros en solitario creció hasta convertirse en un catálogo completo: rutas a pie, sesiones de fotos, experiencias de audio, rituales matutinos. Cada itinerario viene de un conocimiento real: calles recorridas cientos de veces, historias recopiladas a lo largo de años guiando y explorando la ciudad. Cada tour es una conversación.',
    ],
    s2eyebrow: 'El otro lado',
    s2title: <>Ingeniera en<br/><em>informática.</em></>,
    s2body: [
      'Antes de guiar, me formé como ingeniera en informática. Ese bagaje nunca me abandonó. Solo encontró un nuevo propósito. Cuando quise ofrecer tours de audio, no externalicé la app: la construí yo misma.',
      'Fran\'s Guide es una app mobile React Native con tours de audio guiados por GPS, un mapa interactivo y funciones con IA. Diseñar y desarrollar esta app ha sido uno de los proyectos más satisfactorios de mi vida, un lugar donde ambos lados de mí convergen por fin.',
    ],
    s3eyebrow: 'La app',
    s3title: <>Construida desde<br/><em>cero.</em></>,
    s3features: [
      'Narración de audio guiada por GPS, parada a parada',
      'Mapa interactivo que sigue la ruta en tiempo real',
      'Funciones con IA integradas en la experiencia',
      'Disponible en inglés y francés',
      'Desarrollada con React Native & Expo',
    ],
    s3body: 'Cada ruta de la app viene de la experiencia real: tours que he dirigido decenas de veces, calles que he recorrido cientos de veces. Los guiones están escritos desde la memoria y el amor, no desde una guía turística. La app está en beta para los tours de la Torre Eiffel y Notre-Dame, con más rutas en desarrollo.',
    s4eyebrow: 'Fotografía',
    s4title: <>Una pasión desde<br/><em>la infancia.</em></>,
    s4body: [
      'La fotografía ha formado parte de mi vida desde que recuerdo. Mucho antes de guiar, mucho antes de París, ya me atraían la luz, el momento, la historia que un solo encuadre puede contar.',
      'Poder convertir esa pasión de toda la vida en sesiones de fotos para parejas, bodas, compromisos, viajeros en solitario y momentos especiales en París se siente como un sueño hecho realidad. Cada sesión es diferente, cada luz es diferente, pero el objetivo es siempre el mismo: fotos que realmente vayas a guardar.',
    ],
    galleryEyebrow: 'París, a través de mi objetivo',
    galleryTitle: <>Lugares que<br/><em>se quedan contigo.</em></>,
    ctaEyebrow: 'Ponte en contacto',
    ctaTitle: <>¿Lista para explorar<br/><em>París conmigo?</em></>,
    ctaBody: 'Tanto si buscas un tour privado, una sesión de fotos o simplemente quieres saber más sobre la app, me encantaría saber de ti.',
    ctaLink: 'Enviar un mensaje',
  },
};

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
