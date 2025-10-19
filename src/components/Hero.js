import React from "react";

export default function Hero({ title, subtitle, cta, tagline }) {
  const heroStyle = {
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1650&q=80')",
    backgroundColor: "#ffffff",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    color: "#1E2A5E",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    minHeight: "90vh",
    padding: "4rem 2rem",
    fontFamily: "'Poppins', sans-serif",
    position: "relative",
    overflow: "hidden",
  };

  return (
    <section id="hero" className="hero-section fade-in" style={heroStyle}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins&display=swap');
        .hero-section {
          overflow: hidden;
        }
        .hero-section h1 {
          font-family: 'Playfair Display', serif;
          font-size: 4rem;
          color: #ffffff;
          margin-bottom: 1rem;
          font-weight: bold;
          letter-spacing: 1.5px;
          line-height: 1.1;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }
        .hero-section p.subtitle {
          font-size: 1.4rem;
          color: #ffffff;
          margin-bottom: 1.5rem;
          font-weight: 300;
          letter-spacing: 0.7px;
          max-width: 600px;
          line-height: 1.4;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }
        .hero-section p.tagline {
          font-size: 1.1rem;
          color: #ffffff;
          font-style: italic;
          margin-bottom: 3rem;
          letter-spacing: 0.5px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }
        .cta-button {
          background: #1E2A5E;
          color: #ffffff;
          padding: 1.1rem 3.2rem;
          border-radius: 8px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: none;
          transition: all 0.3s ease;
          font-size: 1.25rem;
          letter-spacing: 1px;
        }
        .cta-button:hover {
          transform: translateY(-4px);
          background: #14204B;
          box-shadow: none;
        }
        @media (max-width: 768px) {
          .hero-section h1 { font-size: 3rem; }
          .hero-section p.subtitle { font-size: 1.2rem; max-width: 90%; }
          .hero-section p.tagline { font-size: 1rem; margin-bottom: 2rem; }
          .cta-button { font-size: 1rem; padding: 0.9rem 2.5rem; }
        }
      `}</style>

      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
      {tagline && <p className="tagline">{tagline}</p>}
      <a href="#tours" className="cta-button">
        {cta}
      </a>
    </section>
  );
}