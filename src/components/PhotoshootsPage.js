import React from 'react';

const WHATSAPP_URL = "https://wa.me/33759752536?text=Hi! I saw your Paris photoshoots on Fran's Guide!! When is your next available photoshoot?";

const INCLUDED = [
  'Natural and guided photos around Paris',
  'Iconic and hidden locations',
  'Posing guidance if needed',
  'A warm, personal experience',
  '20–40 edited photos delivered',
];

const FOR = [
  'Couples in Paris',
  'Solo travelers',
  'Birthdays & special moments',
  'Content creation',
];

const samplePhotos = [
  { src: '/assets/images/photoshoots/photo-1.jpeg', alt: 'Paris couple photoshoot' },
  { src: '/assets/images/photoshoots/photo-3.jpeg', alt: 'Solo traveler photoshoot in Paris' },
  { src: '/assets/images/photoshoots/photo-2.jpeg', alt: 'Romantic Eiffel Tower photoshoot' },
  { src: '/assets/images/photoshoots/photo-4.jpeg', alt: 'Paris lifestyle photoshoot' },
  { src: '/assets/images/photoshoots/photo-5.jpeg', alt: 'Paris lifestyle photoshoot' },
  { src: '/assets/images/photoshoots/photo-6.jpeg', alt: 'Paris lifestyle photoshoot' },
];

export default function PhotoshootsPage() {
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
          display: flex;
          gap: 2px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .fg-photos-strip::-webkit-scrollbar { display: none; }
        .fg-photo-item {
          flex: 0 0 300px;
          scroll-snap-align: start;
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
          <p className="fg-photos-eyebrow">Paris Photoshoots</p>
          <h1 className="fg-photos-title">
            Your Paris moment,<br/><em>beautifully captured.</em>
          </h1>
          <p className="fg-photos-subtitle">
            Natural, elegant photos in the most beautiful corners of Paris — for couples, solo travelers, and anyone who wants to remember this city forever.
          </p>
        </div>

        {/* Photo strip */}
        <div className="fg-photos-strip-section">
          <p className="fg-photos-section-label">Past sessions</p>
          <div className="fg-photos-strip">
            {samplePhotos.map((p) => (
              <div key={p.src} className="fg-photo-item">
                <img src={p.src} alt={p.alt} />
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="fg-photos-details">
          <div className="fg-photos-col">
            <h2 className="fg-photos-col-title">What's included</h2>
            <ul className="fg-photos-list">
              {INCLUDED.map(i => <li key={i}>{i}</li>)}
            </ul>
          </div>
          <div className="fg-photos-col">
            <h2 className="fg-photos-col-title">Perfect for</h2>
            <ul className="fg-photos-list">
              {FOR.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="fg-photos-cta-section">
          <div className="fg-photos-cta-text">
            <h2 className="fg-photos-cta-title">
              Ready to create<br/><em>your Paris story?</em>
            </h2>
            <p className="fg-photos-cta-body">
              Message me directly to check availability, discuss locations, and design a photoshoot that fits your style.
            </p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="fg-btn-primary">
            Book on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
