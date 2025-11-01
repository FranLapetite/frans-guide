import React from 'react';

function About({ language }) {
  // NOTE: You will expand this component later with your personal story
  return (
    <section id="about" className="about-section fade-in">
      <div className="about-content">
        <h2 className="about-title fade-in" style={{ animationDelay: '0.2s' }}>Meet Fran – Your Traveling Guide</h2>
        <hr className="divider" />
        <div className="photo-container fade-in" aria-label="Portrait of Fran" style={{ animationDelay: '0.4s' }} />
        <p className="about-text fade-in" style={{ animationDelay: '0.6s' }}>
          {language === 'fr' ? (
            <>
              Ayant grandi fascinée par les rues intemporelles et les histoires cachées de Paris, ma passion pour cette ville est née très tôt. Après des années à explorer chaque arrondissement, j’ai transformé cette passion en métier — celui de partager l’âme de Paris avec chaque visiteur. Mon parcours est une aventure de curiosité, de dévouement et d’un profond désir de créer des expériences authentiques au-delà des lieux connus.
            </>
          ) : language === 'pt' ? (
            <>
              Cresci encantada pelas ruas atemporais e pelas histórias escondidas de Paris. Depois de anos explorando cada arrondissement, transformei essa paixão em profissão — compartilhar a alma de Paris com cada visitante. Minha jornada é de curiosidade, dedicação e o desejo sincero de conectar viajantes a experiências autênticas além dos pontos turísticos.
            </>
          ) : language === 'es' ? (
            <>
              Crecí fascinada por las calles atemporales y las historias escondidas de París. Después de años explorando cada distrito, convertí esa pasión en una profesión: compartir el alma de París con cada visitante. Mi camino es de curiosidad, dedicación y un profundo deseo de ofrecer experiencias auténticas más allá de los lugares habituales.
            </>
          ) : (
            <>
              Growing up enchanted by the timeless streets and hidden stories of Paris, Fran’s love for this city blossomed early. After years of exploring every arrondissement, she transformed her passion into a profession, becoming a guide who shares the soul of Paris with every visitor. Her journey is one of curiosity, dedication, and a heartfelt desire to connect travelers with authentic experiences beyond the usual sights.
            </>
          )}
        </p>
        <p className="signature fade-in" style={{ animationDelay: '0.8s' }}>
          À bientôt à Paris — Fran 💫
        </p>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins&family=Playfair+Display&display=swap');

        .about-section {
          background: #ffffff;
          display: flex;
          justify-content: center;
          padding: 6rem 1rem;
          color: #1E2A5E;
          font-family: 'Playfair Display', serif;
          text-align: center;
          align-items: center;
          min-height: 90vh;
          box-sizing: border-box;
        }
        .about-content {
          max-width: 620px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .about-title {
          font-weight: 700;
          font-size: 2.8rem;
          margin-bottom: 1rem;
          color: #1E2A5E;
          letter-spacing: 0.05em;
          font-family: 'Playfair Display', serif;
          opacity: 0;
          transform: translateY(10px);
          animation-fill-mode: forwards;
          animation-name: fadeInUp;
          animation-duration: 1s;
        }
        .divider {
          width: 70px;
          height: 0;
          border-top: 1px solid rgba(30,42,94,0.2);
          margin: 0 auto 2rem;
          border-radius: 0;
          box-shadow: none;
        }
        .about-text {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          font-style: normal;
          color: #333;
          font-family: 'Poppins', sans-serif;
          max-width: 540px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0;
          transform: translateY(10px);
          animation-fill-mode: forwards;
          animation-name: fadeInUp;
          animation-duration: 1s;
        }
        .photo-container {
          width: 200px;
          height: 200px;
          margin: 0 auto 2rem;
          border-radius: 50%;
          background-image: url('/fran.jpeg');
          background-size: cover;
          background-position: center;
          border: 3px solid rgba(30,42,94,0.15);
          transition: transform 0.4s ease;
          opacity: 0;
          transform: translateY(10px);
          animation-fill-mode: forwards;
          animation-name: fadeInUp;
          animation-duration: 1s;
          box-shadow: none;
        }
        .photo-container:hover {
          transform: scale(1.03);
          box-shadow: none;
        }
        .signature {
          margin-top: 1.5rem;
          font-style: italic;
          font-size: 1rem;
          color: rgba(30,42,94,0.7);
          letter-spacing: 0;
          user-select: none;
          opacity: 0;
          transform: translateY(10px);
          animation-fill-mode: forwards;
          animation-name: fadeInUp;
          animation-duration: 1s;
          font-family: inherit;
        }
        .fade-in {
          /* This class is kept for the section fade-in */
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default About;
