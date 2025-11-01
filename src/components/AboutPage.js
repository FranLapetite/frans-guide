import React from 'react';

const AboutPage = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('journey-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#1E2A5E', maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          backgroundImage: "url('/D79A7894-ED03-4D95-ACE9-849DF200DCFC_1_105_c.jpeg')",
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
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', padding: '0 1rem' }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem', fontWeight: '700', lineHeight: '1.1', color: '#fff' }}>Meet Fran – The Full Story</h1>
          <p style={{ fontSize: '1.5rem', lineHeight: '1.6', marginTop: 0 }}>
            Discover the passion and journey behind Fran, your dedicated guide to the heart of Paris.
          </p>
        </div>
        <div
          onClick={scrollToNextSection}
          role="button"
          tabIndex={0}
          onKeyPress={e => { if (e.key === 'Enter') scrollToNextSection(); }}
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
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </section>

      <hr style={{ borderColor: '#ddd', margin: '4rem 0' }} />

      {/* The Journey So Far */}
      <section
        id="journey-section"
        style={{ backgroundColor: '#FAF5EB', textAlign: 'center', padding: '3rem 1rem', animation: 'fadeUp 1s ease forwards', opacity: 0, animationFillMode: 'forwards', animationDelay: '0.3s' }}
        className="fade-up"
      >
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '1.5rem', fontWeight: '700', color: '#1E2A5E' }}>The Journey So Far</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.125rem' }}>
          Growing up enchanted by the timeless streets and hidden stories of Paris, Fran’s love for this city blossomed early. After years of exploring every arrondissement, she transformed her passion into a profession, becoming a guide who shares the soul of Paris with every visitor. Her journey is one of curiosity, dedication, and a heartfelt desire to connect travelers with authentic experiences beyond the usual sights.
        </p>
      </section>

      <hr style={{ borderColor: '#ddd', margin: '4rem 0' }} />

      {/* Behind Every Tour */}
      <section
        style={{ backgroundColor: '#FFFFFF', textAlign: 'center', padding: '3rem 1rem', animation: 'fadeUp 1s ease forwards', opacity: 0, animationFillMode: 'forwards', animationDelay: '0.5s' }}
        className="fade-up"
      >
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '1.5rem', fontWeight: '700', color: '#1E2A5E' }}>Behind Every Tour</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.125rem' }}>
          Fran believes that every tour is a story waiting to be told. With authenticity, warmth, and a keen eye for detail, she crafts experiences that celebrate Paris’s culture, history, and charm. Her philosophy centers on meaningful connections — between people, places, and moments — ensuring each journey is personal, memorable, and inspiring.
        </p>
      </section>

      <hr style={{ borderColor: '#ddd', margin: '4rem 0' }} />

      {/* My Favorite Corners of Paris */}
      <section
        style={{ backgroundColor: '#FAF5EB', textAlign: 'center', padding: '3rem 1rem', animation: 'fadeUp 1s ease forwards', opacity: 0, animationFillMode: 'forwards', animationDelay: '0.7s' }}
        className="fade-up"
      >
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '1.5rem', fontWeight: '700', color: '#1E2A5E' }}>My Favorite Corners of Paris</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto 2rem', lineHeight: '1.7', fontSize: '1.125rem' }}>
          From quiet cobblestone alleys to sunlit cafés, these are the places that capture the essence of Paris for me — intimate, timeless, and full of stories.
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
              onFocus={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onBlur={e => e.currentTarget.style.transform = 'scale(1)'}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src={src}
                alt={alt}
                style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </section>

      <hr style={{ borderColor: '#ddd', margin: '4rem 0' }} />

      {/* Let's Connect */}
      <section
        style={{ backgroundColor: '#FFFFFF', textAlign: 'center', padding: '3rem 1rem', animation: 'fadeUp 1s ease forwards', opacity: 0, animationFillMode: 'forwards', animationDelay: '0.9s' }}
        className="fade-up"
      >
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '1.5rem', fontWeight: '700', color: '#1E2A5E' }}>Let’s Connect</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.7', fontSize: '1.125rem' }}>
          Ready to explore Paris with me? <a href="/contact" style={{ color: '#1E2A5E', textDecoration: 'underline', fontWeight: '600' }}>Get in touch</a> and let’s start planning your unforgettable journey.
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
