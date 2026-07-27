import React from 'react';
import { reviews } from '../data/reviews';

// TODO(Fran): replace with your real Google Business review link once it's ready.
const GOOGLE_REVIEW_URL = 'https://g.page/r/REPLACE_WITH_YOUR_GOOGLE_REVIEW_LINK/review';

const TEXTS = {
  en: {
    eyebrow: 'Testimonials',
    title: <>What travelers<br/><em>say about Fran.</em></>,
    cta: 'Leave a review',
  },
  fr: {
    eyebrow: 'Témoignages',
    title: <>Ce que disent<br/><em>les voyageurs.</em></>,
    cta: 'Laisser un avis',
  },
  pt: {
    eyebrow: 'Depoimentos',
    title: <>O que dizem<br/><em>os viajantes.</em></>,
    cta: 'Deixar uma avaliação',
  },
  es: {
    eyebrow: 'Testimonios',
    title: <>Lo que dicen<br/><em>los viajeros.</em></>,
    cta: 'Dejar una reseña',
  },
};

function Stars({ rating }) {
  return (
    <div className="fg-review-stars" aria-label={`${rating} / 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= rating ? 'filled' : ''}>★</span>
      ))}
    </div>
  );
}

function Reviews({ language = 'en' }) {
  const t = TEXTS[language] || TEXTS.en;

  return (
    <section className="fg-reviews">
      <style>{`
        .fg-reviews {
          padding: 100px 80px;
          background: #FAF8F5;
          border-top: 1px solid #E8E3DC;
          border-bottom: 1px solid #E8E3DC;
        }
        .fg-reviews-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 56px;
        }
        .fg-reviews-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4A4845;
          font-weight: 400;
          margin: 0 0 12px;
        }
        .fg-reviews-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 3.5vw, 46px);
          font-weight: 400;
          line-height: 1.15;
          color: #1C1C1C;
          margin: 0;
        }
        .fg-reviews-title em { font-style: italic; color: #0F2C66; }
        .fg-reviews-cta {
          display: inline-block;
          background: #0F2C66;
          color: #fff;
          border: none;
          padding: 14px 32px;
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 400;
          border-radius: 2px;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          transition: opacity 0.2s, transform 0.15s;
        }
        .fg-reviews-cta:hover { opacity: 0.85; color: #fff; }
        .fg-reviews-cta:active { transform: scale(0.97); }
        .fg-reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .fg-review-card {
          background: #fff;
          border: 1px solid #E8E3DC;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .fg-review-stars {
          display: flex;
          gap: 3px;
          font-size: 15px;
          color: #E8E3DC;
        }
        .fg-review-stars .filled { color: #0F2C66; }
        .fg-review-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 19px;
          font-style: italic;
          line-height: 1.5;
          color: #1C1C1C;
          margin: 0;
          flex-grow: 1;
        }
        .fg-review-name {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #4A4845;
          font-weight: 400;
          margin: 0;
        }
        @media (max-width: 900px) {
          .fg-reviews { padding: 72px 32px; }
          .fg-reviews-head { flex-direction: column; align-items: flex-start; gap: 20px; margin-bottom: 40px; }
          .fg-reviews-grid { grid-template-columns: 1fr; gap: 16px; }
        }
        @media (max-width: 480px) {
          .fg-reviews { padding: 56px 24px; }
          .fg-review-card { padding: 26px 22px; }
          .fg-reviews-cta {
            width: 100%;
            text-align: center;
            padding: 15px 20px;
          }
        }
      `}</style>

      <div className="fg-reviews-head">
        <div>
          <p className="fg-reviews-eyebrow">{t.eyebrow}</p>
          <h2 className="fg-reviews-title">{t.title}</h2>
        </div>
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fg-reviews-cta"
        >
          {t.cta}
        </a>
      </div>

      <div className="fg-reviews-grid">
        {reviews.map((r) => (
          <div key={r.name} className="fg-review-card">
            <Stars rating={r.rating} />
            <p className="fg-review-text">&ldquo;{r.text}&rdquo;</p>
            <p className="fg-review-name">{r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
