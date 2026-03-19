import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { tours } from '../data/tours';

const LABELS = {
  en: {
    back: '← Back to all tours',
    notFound: 'Tour not found.',
    price: 'Price',
    duration: 'Duration',
    readyTitle: 'Text me on WhatsApp to join this tour',
    readyText:
      "Message me on WhatsApp to check availability, ask questions, and book your spot easily. I usually reply quickly 😊",
    bookButton: '💬 Message me on WhatsApp',
    noBookingMessage:
      "Online booking for this tour isn't configured yet. Please contact me directly 💌",
  },
  fr: {
    back: '← Retour aux visites',
    notFound: 'Visite introuvable.',
    price: 'Tarif',
    duration: 'Durée',
    readyTitle: 'Écris-moi sur WhatsApp pour rejoindre cette visite',
    readyText:
      "Envoie-moi un message sur WhatsApp pour vérifier les disponibilités, poser tes questions et réserver facilement. Je réponds rapidement 😊",
    bookButton: '💬 M’écrire sur WhatsApp',
    noBookingMessage:
      "La réservation en ligne pour cette visite n'est pas encore configurée. Vous pouvez me contacter directement 💌",
  },
  pt: {
    back: '← Voltar para todos os tours',
    notFound: 'Tour não encontrado.',
    price: 'Preço',
    duration: 'Duração',
    readyTitle: 'Fale comigo no WhatsApp para participar deste tour',
    readyText:
      "Me mande uma mensagem no WhatsApp para ver disponibilidade, tirar dúvidas e reservar facilmente. Eu respondo rápido 😊",
    bookButton: '💬 Falar no WhatsApp',
    noBookingMessage:
      'As reservas online para este tour ainda não estão configuradas. Fale comigo diretamente 💌',
  },
  es: {
    back: '← Volver a todos los tours',
    notFound: 'Tour no encontrado.',
    price: 'Precio',
    duration: 'Duración',
    readyTitle: 'Escríbeme por WhatsApp para unirte a este tour',
    readyText:
      "Envíame un mensaje por WhatsApp para consultar disponibilidad, hacer preguntas y reservar fácilmente. Suelo responder rápido 😊",
    bookButton: '💬 Escribirme por WhatsApp',
    noBookingMessage:
      'La reserva online para este tour aún no está configurada. Puedes contactarme directamente 💌',
  },
};

const TourDetails = ({ language = 'en' }) => {
  const labels = LABELS[language] || LABELS.en;
  const { id } = useParams();
  const navigate = useNavigate();
  const tourIndex = parseInt(id, 10);
  const tour = tours[tourIndex];

  if (!tour) {
    return (
      <div style={{ padding: '2rem' }}>
        <p>{labels.notFound}</p>
        <button onClick={() => navigate('/tours')}>{labels.back}</button>
      </div>
    );
  }

  const handleBookingClick = () => {
    if (tour.bookingUrl) {
      window.open(tour.bookingUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert(labels.noBookingMessage);
    }
  };

  return (
    <div
      className="tour-details-page"
      style={{
        background: 'linear-gradient(180deg, #FAF1E8 0%, #FFF9F4 40%, #FDF3EA 100%)',
        minHeight: '100vh',
        padding: '3rem 1.5rem',
        fontFamily: "'Georgia', serif",
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '880px',
          margin: '0 auto',
          background: 'rgba(255, 252, 247, 0.96)',
          borderRadius: '22px',
          boxShadow: '0 18px 45px rgba(196, 166, 136, 0.35)',
          padding: '2.7rem 2.4rem 2.4rem',
          border: '1px solid rgba(220, 195, 170, 0.45)',
        }}
      >
        <Link
          to="/tours"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.85rem',
            color: '#8A6C50',
            textDecoration: 'none',
            marginBottom: '1.8rem',
            padding: '0.25rem 0.75rem',
            borderRadius: '999px',
            backgroundColor: 'rgba(235, 214, 193, 0.45)',
          }}
        >
          {labels.back}
        </Link>

        <h1
          className="tour-title"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.7rem',
            color: '#3B2415',
            marginBottom: '0.6rem',
            lineHeight: 1.2,
            letterSpacing: '0.03em',
            textTransform: 'none',
            textShadow: '0 3px 12px rgba(80, 45, 20, 0.18)',
          }}
        >
          {tour.title}
        </h1>

        <div
          style={{
            width: '64px',
            height: '3px',
            borderRadius: '999px',
            background: 'linear-gradient(90deg, #D9B276, #F4D7A6)',
            marginBottom: '1.6rem',
          }}
        />

        <div
          className="tour-meta"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.1rem',
            marginBottom: '1.9rem',
            fontSize: '0.9rem',
            color: '#8C5B32',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          <span>
            <strong>{labels.price}:</strong> {tour.price}
          </span>
          <span>
            <strong>{labels.duration}:</strong> {tour.duration}
          </span>
        </div>

        <p
          style={{
            fontSize: '1rem',
            color: '#5A4534',
            lineHeight: 1.7,
            marginBottom: '2.2rem',
            whiteSpace: 'pre-line',
            fontWeight: '600'
          }}
        >
          {tour.details || tour.description}
        </p>

        <h2
          className="tour-subtitle"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.4rem',
            color: '#3B2A1C',
            marginBottom: '0.85rem',
          }}
        >
          {labels.readyTitle}
        </h2>

        <p
          style={{
            fontSize: '0.9rem',
            color: '#5A4534',
            lineHeight: 1.6,
            marginBottom: '1.6rem',
          }}
        >
          {labels.readyText}
        </p>

        <button
          type="button"
          onClick={handleBookingClick}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            background: 'linear-gradient(135deg, #DCA984, #C98A63)',
            color: 'white',
            border: 'none',
            borderRadius: '999px',
            padding: '0.85rem 2.3rem',
            fontSize: '0.98rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 10px 22px rgba(184, 132, 91, 0.45)',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease',
          }}
        >
          {labels.bookButton}
        </button>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .tour-details-page {
            padding: 2rem 1.1rem !important;
          }
          .tour-title {
            font-size: 2rem !important;
          }
          .tour-subtitle {
            font-size: 1.25rem !important;
          }
          .tour-details-page p {
            font-size: 0.96rem !important;
          }
          .tour-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TourDetails;