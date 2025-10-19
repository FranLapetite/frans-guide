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
              Née d’une riche fusion franco-brésilienne, je navigue entre quatre langues et cultures. Paris est mon terrain de jeu, où chaque ruelle raconte une histoire que je me réjouis de vous faire découvrir avec passion et regard technique.
            </>
          ) : language === 'pt' ? (
            <>
              Nascida de uma rica fusão franco-brasileira, navego por quatro línguas e culturas. Paris é meu playground, onde cada rua conta uma história que tenho prazer em compartilhar com paixão e olhar técnico.
            </>
          ) : language === 'es' ? (
            <>
              Nacida de una rica fusión franco-brasileña, navego entre cuatro idiomas y culturas. París es mi terreno de juego, donde cada calle cuenta una historia que me encanta compartir con pasión y mirada técnica.
            </>
          ) : (
            <>
              Born from a rich Franco-Brazilian blend, I navigate four languages and cultures. Paris is my playground, where every street tells a story I delight in sharing with passion and a technical eye.
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
