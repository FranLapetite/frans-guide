import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TourPage.css';
import { tours } from '../data/tours';
import TourMap from './TourMap';

const PHOTOSHOOT = {
  en: {
    eyebrow: 'Also available',
    title: <>A photoshoot<br/><em>in Paris.</em></>,
    price: '120€',
    priceNote: 'flat rate · 1h · 20–40 edited photos',
    body: "A professional photoshoot at the most beautiful spots in Paris — iconic backdrops, natural light, and memories you'll keep forever.",
    features: [
      '20–40 edited photos delivered',
      'Iconic and hidden locations',
      'Solo, couple, or group',
      '+ 30€ to add a private guided tour',
    ],
    cta: 'Book a photoshoot',
    special: 'Special request?',
    specialLink: 'Contact me',
  },
  fr: {
    eyebrow: 'Aussi disponible',
    title: <>Une séance photo<br/><em>à Paris.</em></>,
    price: '120€',
    priceNote: 'forfait · 1h · 20–40 photos retouchées',
    body: 'Une séance photo professionnelle dans les plus beaux endroits de Paris — décors iconiques, lumière naturelle, et des souvenirs pour toujours.',
    features: [
      '20–40 photos retouchées livrées',
      'Lieux iconiques et cachés',
      'Solo, couple ou groupe',
      '+ 30€ pour ajouter une visite guidée privée',
    ],
    cta: 'Réserver une séance photo',
    special: 'Demande spéciale ?',
    specialLink: 'Contactez-moi',
  },
  pt: {
    eyebrow: 'Também disponível',
    title: <>Uma sessão de fotos<br/><em>em Paris.</em></>,
    price: '120€',
    priceNote: 'pacote · 1h · 20–40 fotos editadas',
    body: 'Uma sessão de fotos profissional nos lugares mais bonitos de Paris — cenários icônicos, luz natural e lembranças para sempre.',
    features: [
      '20–40 fotos editadas entregues',
      'Locais icônicos e escondidos',
      'Solo, casal ou grupo',
      '+ 30€ para adicionar um tour guiado privado',
    ],
    cta: 'Reservar uma sessão',
    special: 'Pedido especial?',
    specialLink: 'Fale comigo',
  },
  es: {
    eyebrow: 'También disponible',
    title: <>Una sesión de fotos<br/><em>en París.</em></>,
    price: '120€',
    priceNote: 'tarifa fija · 1h · 20–40 fotos editadas',
    body: 'Una sesión de fotos profesional en los lugares más bonitos de París — escenarios icónicos, luz natural y recuerdos para siempre.',
    features: [
      '20–40 fotos editadas entregadas',
      'Lugares icónicos y escondidos',
      'Solo, pareja o grupo',
      '+ 30€ para añadir un tour guiado privado',
    ],
    cta: 'Reservar una sesión',
    special: '¿Petición especial?',
    specialLink: 'Contáctame',
  },
};

const LABELS = {
  en: {
    eyebrow: 'Paris Tours',
    pageTitle: <>All the ways to<br/><em>discover Paris.</em></>,
    perPerson: '/ person',
    flatRate: 'flat rate',

    audioEyebrow: 'Audio Tours — The App',
    audioTitle: <>Listen. Walk.<br/><em>Discover.</em></>,
    audioTagline: 'Self-guided audio tours for your smartphone — explore Paris at your own pace, in English or French.',
    audioCta: 'Download the app',
    audioLearn: 'Learn more →',
    from: 'From',
    duration: 'Duration',
    distance: 'Distance',
    stops: 'stops',

    privateEyebrow: 'Private Tours with Fran',
    privateTitle: <>In person,<br/><em>with Fran.</em></>,
    privateTagline: 'Handpicked walks, stories and photo moments — every route built from years of guiding this city',
    discover: 'Discover →',
    showMore: 'See all tours',
    showLess: 'Show less',
  },
  fr: {
    eyebrow: 'Visites à Paris',
    pageTitle: <>Toutes les façons de<br/><em>découvrir Paris.</em></>,
    perPerson: '/ pers.',
    flatRate: 'forfait',

    audioEyebrow: 'Visites Audio — L\'Application',
    audioTitle: <>Écouter. Marcher.<br/><em>Découvrir.</em></>,
    audioTagline: 'Visites audio auto-guidées sur smartphone — explorez Paris à votre rythme, en anglais ou en français.',
    audioCta: 'Télécharger l\'application',
    audioLearn: 'En savoir plus →',
    from: 'À partir de',
    duration: 'Durée',
    distance: 'Distance',
    stops: 'étapes',

    privateEyebrow: 'Visites Privées avec Fran',
    privateTitle: <>En personne,<br/><em>avec Fran.</em></>,
    privateTagline: 'Balades, histoires et instants photo — chaque parcours construit à partir d\'années de visites guidées',
    discover: 'Découvrir →',
    showMore: 'Voir toutes les visites',
    showLess: 'Voir moins',
  },
  pt: {
    eyebrow: 'Tours em Paris',
    pageTitle: <>Todas as formas de<br/><em>descobrir Paris.</em></>,
    perPerson: '/ pessoa',
    flatRate: 'pacote',

    audioEyebrow: 'Tours de Áudio — O App',
    audioTitle: <>Ouvir. Caminhar.<br/><em>Descobrir.</em></>,
    audioTagline: 'Tours de áudio autoguiados no smartphone — explore Paris no seu ritmo, em inglês ou francês.',
    audioCta: 'Baixar o app',
    audioLearn: 'Saiba mais →',
    from: 'A partir de',
    duration: 'Duração',
    distance: 'Distância',
    stops: 'paradas',

    privateEyebrow: 'Tours Privados com a Fran',
    privateTitle: <>Presencial,<br/><em>com a Fran.</em></>,
    privateTagline: 'Passeios, histórias e momentos de foto — cada rota construída com anos de experiência',
    discover: 'Descobrir →',
    showMore: 'Ver todos os tours',
    showLess: 'Ver menos',
  },
  es: {
    eyebrow: 'Tours por París',
    pageTitle: <>Todas las formas de<br/><em>descubrir París.</em></>,
    perPerson: '/ persona',
    flatRate: 'tarifa fija',

    audioEyebrow: 'Tours de Audio — La App',
    audioTitle: <>Escuchar. Caminar.<br/><em>Descubrir.</em></>,
    audioTagline: 'Tours de audio autoguiados en tu smartphone — explora París a tu ritmo, en inglés o francés.',
    audioCta: 'Descargar la app',
    audioLearn: 'Saber más →',
    from: 'Desde',
    duration: 'Duración',
    distance: 'Distancia',
    stops: 'paradas',

    privateEyebrow: 'Tours Privados con Fran',
    privateTitle: <>En persona,<br/><em>con Fran.</em></>,
    privateTagline: 'Paseos, historias y momentos de foto — cada ruta construida con años de guiar esta ciudad',
    discover: 'Descubrir →',
    showMore: 'Ver todos los tours',
    showLess: 'Ver menos',
  },
};

const AUDIO_TOURS = [
  {
    id: 'eiffel-secrets',
    titleEn: 'Eiffel Secrets',
    subtitleEn: 'From the Trocadero to the foot of the Iron Lady',
    titleFr: 'Secrets de la Tour Eiffel',
    subtitleFr: 'Du Trocadéro au pied de la Dame de Fer',
    duration: '30 min',
    distance: '1.5 km',
    stops: 9,
    price: '€7,99',
    appUrl: 'https://apps.apple.com/fr/app/frans-guide/id6762883412?l=en-GB',
  },
  {
    id: 'notre-dame',
    titleEn: 'Notre-Dame & Quartier Latin',
    subtitleEn: 'From the Conciergerie to the Latin Quarter',
    titleFr: 'Notre-Dame & Quartier Latin',
    subtitleFr: 'De la Conciergerie au Quartier Latin',
    duration: '45 min',
    distance: '1.8 km',
    stops: 8,
    price: '€7,99',
    appUrl: 'https://apps.apple.com/fr/app/frans-guide/id6762883412?l=en-GB',
  },
];

function stripEmoji(str) {
  return str.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27FF}\u{2700}-\u{27BF}]/gu, '').trim();
}

const ToursSection = ({ language = 'en' }) => {
  const l = LABELS[language] || LABELS.en;
  const ps = PHOTOSHOOT[language] || PHOTOSHOOT.en;
  const isFr = language === 'fr';
  const [showAll, setShowAll] = useState(false);
  const VISIBLE = 6;

  return (
    <div className="fg-tours-page">

      {/* ── Page header ── */}
      <div className="fg-tours-header">
        <p className="fg-tours-eyebrow">{l.eyebrow}</p>
        <h1 className="fg-tours-title">{l.pageTitle}</h1>
      </div>

      {/* ══════════════════════════════════════════
          AUDIO TOURS SECTION
      ══════════════════════════════════════════ */}
      <div className="fg-audio-section">
        <div className="fg-audio-intro">
          <p className="fg-tours-eyebrow">{l.audioEyebrow}</p>
          <h2 className="fg-audio-title">{l.audioTitle}</h2>
          <p className="fg-audio-tagline">{l.audioTagline}</p>
          <a href="https://apps.apple.com/fr/app/frans-guide/id6762883412?l=en-GB" target="_blank" rel="noreferrer" className="fg-btn-primary">
            {l.audioCta}
          </a>
        </div>

        <div className="fg-audio-cards">
          {AUDIO_TOURS.map((tour, idx) => (
            <div key={tour.id} className="fg-audio-card">
              <div className="fg-audio-card-top">
                <span className="fg-audio-badge">Audio</span>
                <span className="fg-audio-price">{tour.price}</span>
              </div>
              <h3 className="fg-audio-card-title">
                {isFr ? tour.titleFr : tour.titleEn}
              </h3>
              <p className="fg-audio-card-sub">
                {isFr ? tour.subtitleFr : tour.subtitleEn}
              </p>
              <div className="fg-audio-meta">
                <span>{tour.duration}</span>
                <span className="fg-meta-dot">·</span>
                <span>{tour.distance}</span>
                <span className="fg-meta-dot">·</span>
                <span>{tour.stops} {l.stops}</span>
              </div>
              <a href={tour.appUrl} target="_blank" rel="noreferrer" className="fg-tour-cta">
                {l.audioLearn}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          PHOTOSHOOT + TOUR CTA
      ══════════════════════════════════════════ */}
      <div className="fg-photoshoot-cta">
        <div className="fg-photoshoot-left">
          <span className="fg-photoshoot-eyebrow">{ps.eyebrow}</span>
          <h2 className="fg-photoshoot-title">{ps.title}</h2>
          <div className="fg-photoshoot-price-row">
            <span className="fg-photoshoot-price">{ps.price}</span>
            <span className="fg-photoshoot-price-note">{ps.priceNote}</span>
          </div>
          <p className="fg-photoshoot-body">{ps.body}</p>
        </div>
        <div className="fg-photoshoot-right">
          <div className="fg-photoshoot-features">
            {ps.features.map(f => (
              <div key={f} className="fg-photoshoot-feat">{f}</div>
            ))}
          </div>
          <a href="/photoshoots" className="fg-btn-light">{ps.cta}</a>
          <p className="fg-photoshoot-special">
            {ps.special} <a href="/contact" className="fg-photoshoot-special-link">{ps.specialLink}</a>
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          PRIVATE TOURS SECTION
      ══════════════════════════════════════════ */}
      <div className="fg-private-section">
        <div className="fg-private-header">
          <p className="fg-tours-eyebrow">{l.privateEyebrow}</p>
          <h2 className="fg-private-title">{l.privateTitle}</h2>
          <p className="fg-tours-tagline">{l.privateTagline}</p>
        </div>

        <div className="fg-tours-grid">
          {(showAll ? tours : tours.slice(0, VISIBLE)).map((tour, idx) => {
            const t = (language !== 'en' && tour[language]) ? tour[language] : {};
            const localTitle = t.title || tour.title;
            const localDesc = t.description || tour.description;
            return (
              <Link key={idx} to={`/tour/${idx}`} className="fg-tour-link">
                <article className="fg-tour-card">
                  <p className="fg-tour-num">{String(idx + 1).padStart(2, '0')}</p>
                  <h2 className="fg-tour-name">{stripEmoji(localTitle)}</h2>
                  <p className="fg-tour-dur">{tour.duration}</p>
                  <p className="fg-tour-desc">{localDesc}</p>
                  <div className="fg-tour-footer">
                    {tour.price && (
                      <span className="fg-tour-price">
                        {tour.price}
                        <span className="fg-tour-price-note">
                          {tour.flat ? ` ${l.flatRate}` : ` ${l.perPerson}`}
                        </span>
                      </span>
                    )}
                    <span className="fg-tour-cta">{l.discover}</span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
        {tours.length > VISIBLE && (
          <div style={{ textAlign: 'center', padding: '40px 0 0' }}>
            <button
              onClick={() => setShowAll(v => !v)}
              className="fg-btn-primary"
            >
              {showAll ? l.showLess : l.showMore}
            </button>
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════════
          MAP SECTION
      ══════════════════════════════════════════ */}
      <TourMap language={language} />

    </div>
  );
};

export default ToursSection;
