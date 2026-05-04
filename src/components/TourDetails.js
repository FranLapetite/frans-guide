import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { tours } from '../data/tours';

const LABELS = {
  en: {
    back: '← All tours',
    notFound: 'Tour not found.',
    duration: 'Duration',
    price: 'Price',
    perPerson: '/ person',
    flatRate: 'flat rate',
    booking: 'Booking',
    bookTitle: <>Ready to join?<br/><em>Let's talk.</em></>,
    bookText: 'Message me on WhatsApp to check availability, ask questions, and book your spot. I usually reply quickly.',
    bookButton: 'Message on WhatsApp',
    noBookingMessage: 'Please contact me directly.',
  },
  fr: {
    back: '← Toutes les visites',
    notFound: 'Visite introuvable.',
    duration: 'Durée',
    price: 'Tarif',
    perPerson: '/ pers.',
    flatRate: 'forfait',
    booking: 'Réservation',
    bookTitle: <>Prêt·e à rejoindre ?<br/><em>Parlons-en.</em></>,
    bookText: 'Envoie-moi un message sur WhatsApp pour vérifier les disponibilités, poser tes questions et réserver. Je réponds rapidement.',
    bookButton: 'M\'écrire sur WhatsApp',
    noBookingMessage: 'Contacte-moi directement.',
  },
  pt: {
    back: '← Todos os tours',
    notFound: 'Tour não encontrado.',
    duration: 'Duração',
    price: 'Preço',
    perPerson: '/ pessoa',
    flatRate: 'pacote',
    booking: 'Reserva',
    bookTitle: <>Pronto para participar?<br/><em>Vamos conversar.</em></>,
    bookText: 'Me mande uma mensagem no WhatsApp para ver disponibilidade, tirar dúvidas e reservar facilmente.',
    bookButton: 'Falar no WhatsApp',
    noBookingMessage: 'Fale comigo diretamente.',
  },
  es: {
    back: '← Todos los tours',
    notFound: 'Tour no encontrado.',
    duration: 'Duración',
    price: 'Precio',
    perPerson: '/ persona',
    flatRate: 'tarifa fija',
    booking: 'Reserva',
    bookTitle: <>¿Listo para unirte?<br/><em>Hablemos.</em></>,
    bookText: 'Escríbeme por WhatsApp para consultar disponibilidad, hacer preguntas y reservar fácilmente.',
    bookButton: 'Escribirme por WhatsApp',
    noBookingMessage: 'Contáctame directamente.',
  },
};

function stripEmoji(str) {
  return str.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27FF}\u{2700}-\u{27BF}]/gu, '').trim();
}

const TourDetails = ({ language = 'en' }) => {
  const labels = LABELS[language] || LABELS.en;
  const { id } = useParams();
  const navigate = useNavigate();
  const tourIndex = parseInt(id, 10);
  const tour = tours[tourIndex];

  if (!tour) {
    return (
      <div style={{ padding: '6rem 2rem', fontFamily: "'Jost', sans-serif" }}>
        <p>{labels.notFound}</p>
        <button onClick={() => navigate('/tours')}>{labels.back}</button>
      </div>
    );
  }

  const handleBook = () => {
    if (tour.bookingUrl) {
      window.open(tour.bookingUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert(labels.noBookingMessage);
    }
  };

  // Pick translated content (falls back to English)
  const t = (language !== 'en' && tour[language]) ? tour[language] : {};
  const localTitle = t.title || tour.title;
  const localDetails = t.details || t.description || tour.details || tour.description;

  // Split details into paragraphs
  const paragraphs = localDetails
    .split('\n\n')
    .map(p => p.trim())
    .filter(Boolean);

  return (
    <>
      <style>{`
        .fg-td-page {
          padding-top: 80px;
          background: #fff;
          min-height: 100vh;
          font-family: 'Jost', sans-serif;
        }

        /* ── Header ── */
        .fg-td-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid #E8E3DC;
        }
        .fg-td-header-left {
          padding: 64px 60px 64px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;
        }
        .fg-td-back {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #4A4845;
          text-decoration: none;
          font-weight: 400;
          border-bottom: 1px solid #E8E3DC;
          padding-bottom: 2px;
          align-self: flex-start;
          transition: color 0.2s, border-color 0.2s;
        }
        .fg-td-back:hover { color: #0F2C66; border-color: #0F2C66; }
        .fg-td-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 4.5vw, 58px);
          font-weight: 400;
          line-height: 1.05;
          color: #1C1C1C;
          margin: 0;
        }
        .fg-td-meta {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .fg-td-meta-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .fg-td-meta-label {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #4A4845;
          font-weight: 400;
        }
        .fg-td-meta-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          color: #0F2C66;
        }
        .fg-td-header-right {
          background: #FAF8F5;
          border-left: 1px solid #E8E3DC;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 64px 60px;
          min-height: 280px;
        }
        .fg-td-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 120px;
          font-weight: 400;
          color: #E8E3DC;
          line-height: 1;
          user-select: none;
        }

        /* ── Body ── */
        .fg-td-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid #E8E3DC;
        }
        .fg-td-content {
          padding: 64px 60px 64px 80px;
          border-right: 1px solid #E8E3DC;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .fg-td-paragraph {
          font-size: 16px;
          line-height: 1.9;
          color: #1C1C1C;
          font-weight: 400;
          margin: 0 0 24px;
          max-width: 520px;
        }
        .fg-td-paragraph:last-child { margin-bottom: 0; }

        /* ── Booking panel ── */
        .fg-td-book {
          padding: 64px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 24px;
          background: #fff;
        }
        .fg-td-book-eyebrow {
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4A4845;
          font-weight: 400;
        }
        .fg-td-book-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 3.5vw, 44px);
          font-weight: 400;
          line-height: 1.1;
          color: #1C1C1C;
          margin: 0;
        }
        .fg-td-book-title em { font-style: italic; color: #0F2C66; }
        .fg-td-book-text {
          font-size: 15px;
          line-height: 1.85;
          color: #4A4845;
          font-weight: 400;
          max-width: 360px;
        }
        .fg-td-book-btn {
          display: inline-block;
          background: #0F2C66;
          color: #fff;
          padding: 14px 32px;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 400;
          border: none;
          cursor: pointer;
          align-self: flex-start;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .fg-td-book-btn:hover { opacity: 0.85; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .fg-td-header { grid-template-columns: 1fr; }
          .fg-td-header-left { padding: 56px 32px 48px; }
          .fg-td-header-right { display: none; }
          .fg-td-body { grid-template-columns: 1fr; }
          .fg-td-content { padding: 48px 32px; border-right: none; border-bottom: 1px solid #E8E3DC; }
          .fg-td-book { padding: 48px 32px 64px; }
        }
        @media (max-width: 480px) {
          .fg-td-header-left { padding: 40px 24px 36px; }
          .fg-td-title { font-size: 32px; }
          .fg-td-content { padding: 40px 24px; }
          .fg-td-paragraph { font-size: 15px; }
          .fg-td-book { padding: 40px 24px 56px; }
        }
      `}</style>

      <div className="fg-td-page">

        {/* ── Header ── */}
        <div className="fg-td-header">
          <div className="fg-td-header-left">
            <Link to="/tours" className="fg-td-back">{labels.back}</Link>
            <h1 className="fg-td-title">{stripEmoji(localTitle)}</h1>
            <div className="fg-td-meta">
              {tour.duration && (
                <div className="fg-td-meta-item">
                  <span className="fg-td-meta-label">{labels.duration}</span>
                  <span className="fg-td-meta-value">{tour.duration}</span>
                </div>
              )}
              {tour.price && (
                <div className="fg-td-meta-item">
                  <span className="fg-td-meta-label">{labels.price}</span>
                  <span className="fg-td-meta-value">
                    {tour.price}
                    <span style={{ fontSize: '13px', fontFamily: "'Jost', sans-serif", color: '#4A4845', marginLeft: '4px' }}>
                      {tour.flat ? labels.flatRate : labels.perPerson}
                    </span>
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="fg-td-header-right">
            <div className="fg-td-num">
              {String(tourIndex + 1).padStart(2, '0')}
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="fg-td-body">
          <div className="fg-td-content">
            {paragraphs.map((p, i) => (
              <p key={i} className="fg-td-paragraph">{p}</p>
            ))}
          </div>

          <div className="fg-td-book">
            <span className="fg-td-book-eyebrow">{labels.booking}</span>
            <h2 className="fg-td-book-title">{labels.bookTitle}</h2>
            <p className="fg-td-book-text">{labels.bookText}</p>
            <button className="fg-td-book-btn" onClick={handleBook}>
              {labels.bookButton}
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default TourDetails;
