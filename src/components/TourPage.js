import React from 'react';
import { Link } from 'react-router-dom';
import './TourPage.css';
import { tours } from '../data/tours';

const LABELS = {
  en: {
    heroTitle: 'Private Paris Tours With You',
    pageTitle: 'Our Paris Tours',
    tagline: 'Handpicked walks, stories and photo moments ✨',
    price: 'Price',
    duration: 'Duration',
  },
  fr: {
    heroTitle: 'Visites privées de Paris avec vous',
    pageTitle: 'Mes visites à Paris',
    tagline: 'Balades, histoires et instants photo choisis avec soin ✨',
    price: 'Tarif',
    duration: 'Durée',
  },
  pt: {
    heroTitle: 'Tours privados em Paris com você',
    pageTitle: 'Meus tours em Paris',
    tagline: 'Passeios, histórias e momentos de foto selecionados ✨',
    price: 'Preço',
    duration: 'Duração',
  },
  es: {
    heroTitle: 'Tours privados por París contigo',
    pageTitle: 'Mis tours por París',
    tagline: 'Paseos, historias y momentos de foto seleccionados ✨',
    price: 'Precio',
    duration: 'Duración',
  },
};

const ToursSection = ({ language = 'en' }) => {
  const labels = LABELS[language] || LABELS.en;

  return (
    <div className="tour-page-container">
      <header className="hero-banner">
        {labels.heroTitle}
      </header>

      <h1 className="tour-page-title">
        {labels.pageTitle}
      </h1>

      <div className="divider-container">
        <p className="tour-tagline">
          {labels.tagline}
        </p>
        <hr className="tour-divider" />
      </div>

      <div className="tours-grid">
        {tours.map((tour, idx) => (
          <Link
            key={idx}
            to={`/tour/${idx}`}
            className="tour-link"
          >
            <article className="tour-card">
              <h2 className="tour-card-title">
                {tour.title}
              </h2>

              <div className="tour-meta">
                <span>
                  <strong>{labels.price}:</strong> {tour.price}
                </span>
                <span>
                  <strong>{labels.duration}:</strong> {tour.duration}
                </span>
              </div>

              <p className="tour-description">
                {tour.description}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ToursSection;