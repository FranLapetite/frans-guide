import React from 'react';

function About({ content, language = 'en' }) {
  const langPills = ['EN', 'FR', 'PT', 'ES'];

  const sectionLabel = {
    en: 'About Fran',
    fr: 'À propos',
    pt: 'Sobre a Fran',
    es: 'Sobre Fran',
  }[language] || 'About Fran';

  const quote = {
    en: <>Paris is<br/><em>my love letter</em><br/>to you.</>,
    fr: <>Paris est<br/><em>ma lettre d'amour</em><br/>pour vous.</>,
    pt: <>Paris é<br/><em>minha carta de amor</em><br/>para você.</>,
    es: <>París es<br/><em>mi carta de amor</em><br/>para ti.</>,
  }[language] || <>Paris is<br/><em>my love letter</em><br/>to you.</>;

  return (
    <section className="fg-about">
      <style>{`
        .fg-about {
          padding: 120px 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          background: #fff;
        }
        .fg-about-img-wrap {
          aspect-ratio: 4/5;
          overflow: hidden;
          background: linear-gradient(135deg, #E8E3DC, #D4C9BA);
        }
        .fg-about-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.97) saturate(0.85);
          display: block;
        }
        .fg-about-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .fg-about-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4A4845;
          font-weight: 400;
        }
        .fg-about-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 3.5vw, 46px);
          line-height: 1.15;
          font-weight: 400;
          color: #1C1C1C;
          margin: 0;
        }
        .fg-about-quote em {
          font-style: italic;
          color: #0F2C66;
        }
        .fg-about-text {
          font-family: 'Jost', sans-serif;
          font-size: 15px;
          line-height: 1.9;
          color: #4A4845;
          font-weight: 400;
          max-width: 440px;
        }
        .fg-about-sig {
          font-family: 'Cormorant Garamond', serif;
          font-size: 30px;
          font-style: italic;
          color: #0F2C66;
          font-weight: 400;
        }
        .fg-lang-pills {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 4px;
        }
        .fg-lang-pill {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: 1px solid #E8E3DC;
          padding: 6px 14px;
          border-radius: 2px;
          color: #4A4845;
          font-weight: 400;
        }

        @media (max-width: 900px) {
          .fg-about {
            grid-template-columns: 1fr;
            padding: 80px 32px;
            gap: 48px;
          }
          .fg-about-img-wrap {
            aspect-ratio: 3/2;
          }
          .fg-about-quote { font-size: 38px; }
        }
        @media (max-width: 480px) {
          .fg-about { padding: 60px 24px; gap: 36px; }
          .fg-about-quote { font-size: 32px; }
          .fg-about-text { font-size: 14px; }
        }
      `}</style>

      {/* Photo */}
      <div className="fg-about-img-wrap">
        <img src="/fran.jpeg" alt="Fran" />
      </div>

      {/* Content */}
      <div className="fg-about-content">
        <span className="fg-about-eyebrow">{sectionLabel}</span>
        <h2 className="fg-about-quote">{quote}</h2>
        <p className="fg-about-text">{content.aboutText1}</p>
        <p className="fg-about-text">{content.aboutText2}</p>
        <div className="fg-lang-pills">
          {langPills.map(l => (
            <span key={l} className="fg-lang-pill">{l}</span>
          ))}
        </div>
        <p className="fg-about-sig">— Fran</p>
      </div>
    </section>
  );
}

export default About;
