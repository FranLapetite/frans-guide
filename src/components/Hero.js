import React from "react";

export default function Hero({
  title,
  subtitle,
  cta,
  language = "en",
}) {
  const eyebrow = {
    en: "Paris Audio Tours",
    fr: "Visites Audio de Paris",
    pt: "Passeios de Áudio em Paris",
    es: "Tours de Audio por París",
  }[language] || "Paris Audio Tours";

  const secondCta = {
    en: "Learn more",
    fr: "En savoir plus",
    pt: "Saiba mais",
    es: "Saber más",
  }[language] || "Learn more";

  const badgeTitle = {
    en: "Audio & Private Tours",
    fr: "Visites Audio & Privées",
    pt: "Tours de Áudio & Privados",
    es: "Tours de Audio & Privados",
  }[language] || "Audio & Private Tours";

  const badgeSub = {
    en: "English & French · Any smartphone",
    fr: "Français & Anglais · Tout smartphone",
    pt: "Inglês & Francês · Qualquer smartphone",
    es: "Inglés & Francés · Cualquier smartphone",
  }[language] || "English & French · Any smartphone";

  return (
    <section className="fg-hero">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        .fg-hero {
          height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding-top: 80px;
          overflow: hidden;
        }
        .fg-hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 60px 80px 80px;
          gap: 28px;
          background: #fff;
        }
        .fg-hero-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4A4845;
          font-weight: 400;
        }
        .fg-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 5.5vw, 72px);
          line-height: 1.05;
          font-weight: 400;
          color: #1C1C1C;
          margin: 0;
        }
        .fg-hero-title em {
          font-style: italic;
          color: #0F2C66;
        }
        .fg-hero-subtitle {
          font-family: 'Jost', sans-serif;
          font-size: 15px;
          line-height: 1.8;
          color: #4A4845;
          max-width: 380px;
          font-weight: 400;
          margin: 0;
        }
        .fg-hero-actions {
          display: flex;
          align-items: center;
          gap: 32px;
          margin-top: 8px;
        }
        .fg-btn-primary {
          display: inline-block;
          background: #0F2C66;
          color: #fff;
          padding: 14px 32px;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 400;
          transition: opacity 0.2s;
        }
        .fg-btn-primary:hover { opacity: 0.85; color: #fff; }
        .fg-btn-ghost {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #1C1C1C;
          text-decoration: none;
          font-weight: 400;
          border-bottom: 1px solid #E8E3DC;
          padding-bottom: 2px;
          transition: border-color 0.2s;
        }
        .fg-btn-ghost:hover { border-color: #1C1C1C; color: #1C1C1C; }
        .fg-hero-right {
          position: relative;
          overflow: hidden;
          background: #F3EFE9;
        }
        .fg-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.95) saturate(0.9);
          display: block;
        }
        .fg-hero-badge {
          position: absolute;
          bottom: 40px;
          left: 40px;
          background: rgba(255,255,255,0.93);
          backdrop-filter: blur(8px);
          padding: 16px 22px;
          border-left: 2px solid #0F2C66;
        }
        .fg-hero-badge-text {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #0F2C66;
          font-weight: 500;
        }
        .fg-hero-badge-sub {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          color: #4A4845;
          margin-top: 3px;
        }

        /* ── Mobile ── */
        @media (max-width: 900px) {
          .fg-hero {
            grid-template-columns: 1fr;
            grid-template-rows: auto 50vw;
            height: auto;
            min-height: 100vh;
            padding-top: 72px;
          }
          .fg-hero-left {
            padding: 48px 32px;
            gap: 20px;
          }
          .fg-hero-title { font-size: clamp(40px, 10vw, 56px); }
          .fg-hero-right { min-height: 50vw; }
          .fg-hero-badge { bottom: 20px; left: 20px; }
        }
        @media (max-width: 480px) {
          .fg-hero-left { padding: 36px 24px; gap: 16px; }
          .fg-hero-title { font-size: 38px; }
          .fg-hero-subtitle { font-size: 14px; }
          .fg-hero-actions { gap: 20px; flex-wrap: wrap; }
          .fg-btn-primary { padding: 12px 24px; font-size: 11px; }
        }
      `}</style>

      {/* Left: text */}
      <div className="fg-hero-left">
        <span className="fg-hero-eyebrow">{eyebrow}</span>
        <h1 className="fg-hero-title">
          {language === "fr" ? (
            <>Découvrez Paris<br/><em>à votre rythme.</em></>
          ) : language === "pt" ? (
            <>Descubra Paris<br/><em>no seu ritmo.</em></>
          ) : language === "es" ? (
            <>Descubre París<br/><em>a tu ritmo.</em></>
          ) : (
            <>Discover Paris<br/><em>at your own</em><br/>pace.</>
          )}
        </h1>
        <p className="fg-hero-subtitle">{subtitle}</p>
        <div className="fg-hero-actions">
          <a href="/tours" className="fg-btn-primary">{cta}</a>
          <a href="/about" className="fg-btn-ghost">{secondCta}</a>
        </div>
      </div>

      {/* Right: photo */}
      <div className="fg-hero-right">
        <img
          src="/hero-paris.jpeg"
          alt="Paris"
          className="fg-hero-img"
        />
        <div className="fg-hero-badge">
          <div className="fg-hero-badge-text">{badgeTitle}</div>
          <div className="fg-hero-badge-sub">{badgeSub}</div>
        </div>
      </div>
    </section>
  );
}
