import React from 'react';

const ABOUT_TEXTS = {
  en: {
    heroTitle: 'Meet Fran – The Full Story',
    heroSubtitle: 'Discover the journey and passion behind Fran, your dedicated guide to the heart of Paris.',
    journeyTitle: 'The Journey So Far',
    journeyBody:
      "Growing up enchanted by the timeless streets and hidden stories of Paris, Fran's love for this city blossomed early. After years of exploring each arrondissement, she turned that fascination into a vocation: guiding people through the Paris she truly loves, far beyond the usual postcards.",
    behindTitle: 'Behind Every Tour',
    behindBody:
      "For Fran, every tour is a story waiting to be lived. With authenticity, warmth, and a photographer’s eye for detail, she designs experiences that celebrate Paris’s culture, history, and everyday magic. Her approach is human-first: listening, adapting, and creating a space where every guest feels seen, welcomed, and at ease.",
    cornersTitle: 'My Favorite Corners of Paris',
    cornersIntro:
      'From quiet cobblestone alleys to sunlit cafés, these are the places that capture the essence of Paris for me — intimate, timeless, and full of stories.',
    connectTitle: "Let's Connect",
    connectIntro:
      "Ready to explore Paris with me? Let's talk about your ideas, your rhythm, and what would make this trip feel truly yours.",
    connectLinkText: 'Get in touch',
  },
  fr: {
    heroTitle: 'Rencontrez Fran – Toute l’Histoire',
    heroSubtitle:
      'Découvrez le parcours et la passion de Fran, votre guide dédiée au cœur de Paris.',
    journeyTitle: 'Mon Parcours',
    journeyBody:
      "Très jeune, Fran est tombée amoureuse des rues intemporelles et des histoires cachées de Paris. Au fil des années à explorer chaque arrondissement, cette fascination est devenue une évidence : elle voulait partager sa propre vision de la ville, bien au-delà des cartes postales.",
    behindTitle: 'Derrière Chaque Visite',
    behindBody:
      "Pour Fran, chaque visite est une histoire à vivre. Avec authenticité, chaleur et un regard de photographe, elle crée des expériences qui célèbrent la culture, l'histoire et la magie du quotidien parisien. Sa démarche est profondément humaine : écouter, s’adapter et offrir un espace où chacun se sent accueilli et en confiance.",
    cornersTitle: 'Mes Coins Préférés de Paris',
    cornersIntro:
      'Des ruelles pavées aux cafés baignés de lumière, ce sont les endroits qui résument Paris pour moi : intimes, intemporels et pleins d’histoires.',
    connectTitle: 'Restons en Contact',
    connectIntro:
      'Envie de découvrir Paris avec moi ? Parlons de vos envies, de votre rythme et de ce qui rendrait ce voyage vraiment à votre image.',
    connectLinkText: 'Écrivez-moi',
  },
  pt: {
    heroTitle: 'Conheça a Fran – A História Completa',
    heroSubtitle:
      'Descubra a trajetória e a paixão da Fran, sua guia dedicada ao coração de Paris.',
    journeyTitle: 'Minha Jornada Até Aqui',
    journeyBody:
      'Desde cedo, a Fran se encantou pelas ruas, luzes e cantinhos escondidos de Paris. Depois de anos explorando cada bairro, essa curiosidade virou vocação: acompanhar viajantes pela cidade que ela ama de verdade, para além dos pontos turísticos óbvios.',
    behindTitle: 'Por Trás de Cada Tour',
    behindBody:
      'Para a Fran, cada tour é uma história sendo vivida. Com autenticidade, acolhimento e um olhar fotográfico atento aos detalhes, ela cria experiências que celebram a cultura, a história e a magia do cotidiano parisiense. Seu jeito de guiar é, antes de tudo, humano: ouvir, adaptar e fazer cada pessoa se sentir à vontade, vista e bem-vinda.',
    cornersTitle: 'Meus Cantinhos Preferidos de Paris',
    cornersIntro:
      'De ruazinhas de pedra a cafés banhados de sol, são esses lugares que, para mim, traduzem a essência de Paris — íntima, atemporal e cheia de histórias.',
    connectTitle: 'Vamos Conversar',
    connectIntro:
      'Pronto(a) para explorar Paris comigo? Me conte suas ideias, seu ritmo e o que faria essa viagem ser realmente especial para você.',
    connectLinkText: 'Fale comigo',
  },
  es: {
    heroTitle: 'Conoce a Fran – Toda la Historia',
    heroSubtitle:
      'Descubre el camino y la pasión de Fran, tu guía dedicada al corazón de París.',
    journeyTitle: 'Mi Recorrido',
    journeyBody:
      'Desde muy joven, Fran se enamoró de las calles eternas y las historias escondidas de París. Tras años explorando cada barrio, esa fascinación se convirtió en vocación: acompañar a viajeros por la ciudad que ella ama de verdad, mucho más allá de las postales típicas.',
    behindTitle: 'Detrás de Cada Tour',
    behindBody:
      'Para Fran, cada tour es una historia que se vive en primera persona. Con autenticidad, calidez y una mirada fotográfica atenta, diseña experiencias que celebran la cultura, la historia y la magia cotidiana de París. Su manera de guiar es profundamente humana: escuchar, adaptarse y crear un espacio donde cada persona se sienta bienvenida y en confianza.',
    cornersTitle: 'Mis Rincones Favoritos de París',
    cornersIntro:
      'Desde callejones adoquinados hasta cafés bañados por el sol, estos son los lugares que, para mí, capturan la esencia de París: íntima, atemporal y llena de historias.',
    connectTitle: 'Conectemos',
    connectIntro:
      '¿Listo/a para descubrir París conmigo? Hablemos de tus ideas, tu ritmo y de lo que haría que este viaje se sienta verdaderamente tuyo.',
    connectLinkText: 'Escríbeme',
  },
};

const AboutPage = ({ language = 'en' }) => {
  const t = ABOUT_TEXTS[language] || ABOUT_TEXTS.en;

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('journey-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        color: '#1E2A5E',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 1rem',
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          backgroundImage:
            "url('/D79A7894-ED03-4D95-ACE9-849DF200DCFC_1_105_c.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          fontFamily: "'Playfair Display', serif",
          padding: '0 1rem',
          overflow: 'hidden',
        }}
        aria-label="Hero section with Paris background"
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(30, 42, 94, 0.5)',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '700px',
            padding: '0 1rem',
          }}
        >
          <h1
            style={{
              fontSize: '4rem',
              marginBottom: '1rem',
              fontWeight: '700',
              lineHeight: '1.1',
              color: '#fff',
            }}
          >
            {t.heroTitle}
          </h1>
          <p style={{ fontSize: '1.5rem', lineHeight: '1.6', marginTop: 0 }}>
            {t.heroSubtitle}
          </p>
        </div>
        <div
          onClick={scrollToNextSection}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter') scrollToNextSection();
          }}
          aria-label="Scroll down to next section"
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
            zIndex: 1,
            animation: 'bounce 2s infinite',
          }}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </section>

      <hr style={{ borderColor: '#ddd', margin: '4rem 0' }} />

      {/* The Journey So Far */}
      <section
        id="journey-section"
        style={{
          backgroundColor: '#FAF5EB',
          textAlign: 'center',
          padding: '3rem 1rem',
          animation: 'fadeUp 1s ease forwards',
          opacity: 0,
          animationFillMode: 'forwards',
          animationDelay: '0.3s',
        }}
        className="fade-up"
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '3rem',
            marginBottom: '1.5rem',
            fontWeight: '700',
            color: '#1E2A5E',
          }}
        >
          {t.journeyTitle}
        </h2>
        <p
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.8',
            fontSize: '1.125rem',
          }}
        >
          {t.journeyBody}
        </p>
      </section>

      <hr style={{ borderColor: '#ddd', margin: '4rem 0' }} />

      {/* Behind Every Tour */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          textAlign: 'center',
          padding: '3rem 1rem',
          animation: 'fadeUp 1s ease forwards',
          opacity: 0,
          animationFillMode: 'forwards',
          animationDelay: '0.5s',
        }}
        className="fade-up"
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '3rem',
            marginBottom: '1.5rem',
            fontWeight: '700',
            color: '#1E2A5E',
          }}
        >
          {t.behindTitle}
        </h2>
        <p
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.8',
            fontSize: '1.125rem',
          }}
        >
          {t.behindBody}
        </p>
      </section>

      <hr style={{ borderColor: '#ddd', margin: '4rem 0' }} />

      {/* My Favorite Corners of Paris */}
      <section
        style={{
          backgroundColor: '#FAF5EB',
          textAlign: 'center',
          padding: '3rem 1rem',
          animation: 'fadeUp 1s ease forwards',
          opacity: 0,
          animationFillMode: 'forwards',
          animationDelay: '0.7s',
        }}
        className="fade-up"
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '3rem',
            marginBottom: '1.5rem',
            fontWeight: '700',
            color: '#1E2A5E',
          }}
        >
          {t.cornersTitle}
        </h2>
        <p
          style={{
            maxWidth: '700px',
            margin: '0 auto 2rem',
            lineHeight: '1.7',
            fontSize: '1.125rem',
          }}
        >
          {t.cornersIntro}
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {[
            {
              src: '/340F836D-D5A7-4A46-B5A3-22BB799C5A81_1_105_c.jpeg',
              alt: 'Parisian cobblestone street',
            },
            {
              src: '/4487DEE2-9575-4694-B567-D32FB7607B3D_1_105_c.jpeg',
              alt: 'Sunlit café terrace in Paris',
            },
            {
              src: '/E40AE426-E420-4EFA-9B0E-ACC5934A7A0D_1_105_c.jpeg',
              alt: 'Historic Paris building facade',
            },
            {
              src: '/C4FE08AB-710F-4CB4-B427-6BAC0CF5657A_1_105_c.jpeg',
              alt: 'Quiet Parisian alley with flowers',
            },
            {
              src: '/E7577CDB-C4C5-412C-B322-17BC8E7DA8DF_1_105_c.jpeg',
              alt: 'Elegant Paris architecture',
            },
            {
              src: '/D329E9E2-F850-454B-BA06-CF5ECC250C57_1_105_c.jpeg',
              alt: 'Hidden Parisian courtyard',
            },
            {
              src: '/0647C617-8A07-473F-882D-B8CD7F16B445_1_105_c.jpeg',
              alt: 'Paris café with flowers',
            },
            {
              src: '/B6689E79-05BE-4DF4-BD2B-7054494F04AA_1_201_a.jpeg',
              alt: 'Bookstore on Paris street',
            },
            {
              src: '/EC2D4464-9ED4-44AF-B995-CD8D753986BA_1_105_c.jpeg',
              alt: 'Paris riverside at sunset',
            },
          ].map(({ src, alt }, idx) => (
            <div
              key={idx}
              style={{
                overflow: 'hidden',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(30, 42, 94, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, opacity 1s ease',
                opacity: 0,
                animation: `fadeInImage 1s ease forwards`,
                animationDelay: `${0.3 + idx * 0.3}s`,
              }}
              className="photo-card"
              tabIndex={0}
              aria-label={alt}
              onFocus={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onBlur={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src={src}
                alt={alt}
                style={{
                  width: '100%',
                  height: '220px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <hr style={{ borderColor: '#ddd', margin: '4rem 0' }} />

      {/* Let's Connect */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          textAlign: 'center',
          padding: '3rem 1rem',
          animation: 'fadeUp 1s ease forwards',
          opacity: 0,
          animationFillMode: 'forwards',
          animationDelay: '0.9s',
        }}
        className="fade-up"
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '3rem',
            marginBottom: '1.5rem',
            fontWeight: '700',
            color: '#1E2A5E',
          }}
        >
          {t.connectTitle}
        </h2>
        <p
          style={{
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: '1.7',
            fontSize: '1.125rem',
          }}
        >
          {t.connectIntro}{' '}
          <a
            href="/contact"
            style={{
              color: '#1E2A5E',
              textDecoration: 'underline',
              fontWeight: '600',
            }}
          >
            {t.connectLinkText}
          </a>{' '}
        </p>
      </section>

      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInImage {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
        .fade-up {
          animation-name: fadeUp;
          animation-duration: 1s;
          animation-fill-mode: forwards;
        }
        .photo-card:hover,
        .photo-card:focus {
          box-shadow: 0 8px 16px rgba(30, 42, 94, 0.2);
          outline: none;
        }
        @media (max-width: 600px) {
          h1 {
            font-size: 2.5rem !important;
          }
          h2 {
            font-size: 2rem !important;
          }
          img {
            height: 120px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
