import React from 'react';

export default function PhotoshootsPage() {
  const samplePhotos = [
    {
      src: '/assets/images/photoshoots/photo-1.jpeg',
      alt: 'Paris couple photoshoot',
    },
    {
      src: '/assets/images/photoshoots/photo-3.jpeg',
      alt: 'Solo traveler photoshoot in Paris',
    },
    {
      src: '/assets/images/photoshoots/photo-2.jpeg',
      alt: 'Romantic Eiffel Tower photoshoot',
    },
    {
      src: '/assets/images/photoshoots/photo-4.jpeg',
      alt: 'Paris lifestyle photoshoot',
    },
    {
      src: '/assets/images/photoshoots/photo-5.jpeg',
      alt: 'Paris lifestyle photoshoot',
    },
    {
      src: '/assets/images/photoshoots/photo-6.jpeg',
      alt: 'Paris lifestyle photoshoot',
    },
  ];
  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '4rem 1.5rem 5rem',
      }}
    >
      <div
        style={{
          background: 'rgba(255,255,255,0.92)',
          borderRadius: '28px',
          padding: '3rem 2rem',
          boxShadow: '0 12px 40px rgba(15,44,102,0.08)',
        }}
      >
        <p
          style={{
            color: '#0F2C66',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}
        >
          Fran’s Guide
        </p>

        <h1
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.3rem, 6vw, 4.4rem)',
            lineHeight: 1.05,
            color: '#3E2C23',
            marginBottom: '1rem',
          }}
        >
          Paris Photoshoots 📸
        </h1>

        <p
          style={{
            fontSize: '1.15rem',
            color: '#5b4b42',
            maxWidth: '760px',
            marginBottom: '1.25rem',
          }}
        >
          Natural, elegant photos in the most beautiful corners of Paris.
        </p>

        <p
          style={{
            fontSize: '1.02rem',
            color: '#5b4b42',
            maxWidth: '780px',
            marginBottom: '2rem',
          }}
        >
          Whether you are traveling solo, as a couple, or celebrating a special moment, I offer relaxed photoshoots designed to capture your Paris memories beautifully.
        </p>

        <div style={{ marginBottom: '2.5rem' }}>
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#3E2C23',
              marginBottom: '1rem',
              fontSize: '2rem',
            }}
          >
            Past photoshoots
          </h2>
          <p
            style={{
              color: '#5b4b42',
              marginBottom: '1rem',
              maxWidth: '760px',
            }}
          >
            A few examples of the kind of soft, natural moments we can create together in Paris.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              overflowX: 'auto',
              paddingBottom: '0.5rem',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {samplePhotos.map((photo) => (
              <div
                key={photo.src}
                style={{
                  minWidth: '280px',
                  flex: '0 0 280px',
                  scrollSnapAlign: 'start',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  background: '#fffaf6',
                  boxShadow: '0 10px 28px rgba(15,44,102,0.08)',
                  border: '1px solid rgba(15,44,102,0.06)',
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{
                    width: '100%',
                    height: '360px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              background: '#fffaf6',
              borderRadius: '22px',
              padding: '1.5rem',
              border: '1px solid rgba(15,44,102,0.08)',
            }}
          >
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                color: '#3E2C23',
                marginBottom: '1rem',
              }}
            >
              What’s included
            </h2>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#5b4b42', lineHeight: 1.8 }}>
              <li>Natural and guided photos around Paris</li>
              <li>Iconic and hidden locations</li>
              <li>Posing help if needed</li>
              <li>A warm, personal experience</li>
            </ul>
          </div>

          <div
            style={{
              background: '#fffaf6',
              borderRadius: '22px',
              padding: '1.5rem',
              border: '1px solid rgba(15,44,102,0.08)',
            }}
          >
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                color: '#3E2C23',
                marginBottom: '1rem',
              }}
            >
              Perfect for
            </h2>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#5b4b42', lineHeight: 1.8 }}>
              <li>Couples</li>
              <li>Solo travelers</li>
              <li>Birthdays & special moments</li>
              <li>Content creation</li>
            </ul>
          </div>
        </div>

        <div
          style={{
            background: 'linear-gradient(135deg, rgba(206,228,254,0.55), rgba(254,217,241,0.42))',
            borderRadius: '24px',
            padding: '1.75rem',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#3E2C23',
              marginBottom: '0.75rem',
            }}
          >
            Book your photoshoot on WhatsApp
          </h2>

          <p style={{ color: '#5b4b42', maxWidth: '700px', margin: '0 auto 1.2rem' }}>
            Message me directly to check availability, discuss locations, and create a photoshoot that fits your style.
          </p>

          <a
            href="https://wa.me/33759752536?text=Hi! I saw your Paris photoshoots on Fran’s Guide!! When is your next available photoshoot?"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.95rem 1.4rem',
              borderRadius: '999px',
              background: '#0F2C66',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 600,
              boxShadow: '0 10px 24px rgba(15,44,102,0.16)',
            }}
          >
            💬 Message me on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}