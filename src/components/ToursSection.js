import React, { useState } from 'react';

export default function ToursSection({ content }) {
  const [selectedTour, setSelectedTour] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const mockTours = [
    {
      title: "Eiffel Secrets — From the Streets to the Summit",
      duration: "2 hours",
      price: "45 € + ticket",
      description:
        "Discover the hidden stories behind Paris’s most iconic landmark before reaching the top! We start with a guided walk through the Champ de Mars and Trocadéro area, uncovering fun facts, myths, and local legends about the Iron Lady. Then, enjoy skip-the-line access to the Eiffel Tower and climb to the summit for unforgettable views. Perfect for first-time visitors who want more than just photos — a real Parisian experience, full of storytelling and surprises.",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Legends of Notre-Dame & the Latin Quarter",
      duration: "2 hours",
      price: "45 €",
      description:
        "Step into the heart of Parisian history where Gothic towers, student cafés, and old cobblestone streets come alive. From the majestic Notre-Dame to the lively Quartier Latin, this walk blends history, art, and Parisian spirit. Follow in the footsteps of medieval scholars, writers, and revolutionaries — and discover hidden corners most tourists miss. A cultural journey through time, told with charm, humor, and a local touch.",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Royal Reflections — Louvre & Tuileries Walk",
      duration: "1h30–2h",
      price: "45 €",
      description:
        "Wander where kings once ruled and artists found inspiration. This walking tour takes you from the grand façades of the Louvre Palace through the elegant Tuileries Gardens, revealing stories of royal life, revolutions, and artistic genius. You’ll learn the secrets behind statues, fountains, and monuments — all while enjoying one of Paris’s most beautiful open-air museums.",
      image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1470&q=80",
    },
  ];

  const openModal = (tour) => {
    setSelectedTour(tour);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTour(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section
      id="tours"
      className="tours-section fade-in"
      style={{
        backgroundColor: "#ffffff",
        padding: "4rem 2rem",
        fontFamily: "'Poppins', sans-serif",
        color: "#1E2A5E",
      }}
    >
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: "700",
          fontSize: "2.5rem",
          marginBottom: "1rem",
          color: "#1E2A5E",
          textAlign: "center",
        }}
      >
        {content.toursTitle}
      </h2>
      <div
        className="section-divider"
        style={{
          width: "60px",
          height: "0",
          margin: "0 auto 3rem auto",
          borderTop: "1px solid rgba(30,42,94,0.2)",
          borderRadius: "1px",
        }}
      />
      <div
        className="tour-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        {mockTours.map((tour, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              color: "#1E2A5E",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
            }}
          >
            <img
              src={tour.image}
              alt={tour.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
            />
            <div style={{ padding: "1.5rem 1.5rem 2rem 1.5rem", flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: "700",
                  fontSize: "1.8rem",
                  marginBottom: "0.75rem",
                  color: "#1E2A5E",
                  lineHeight: "1.2",
                }}
              >
                {tour.title}
              </h3>
              <p
                style={{
                  fontWeight: "600",
                  marginBottom: "1rem",
                  fontSize: "0.95rem",
                  color: "#1E2A5E",
                }}
              >
                Duration: {tour.duration} | Price: {tour.price}
              </p>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  color: "#1E2A5E",
                  flexGrow: 1,
                  marginBottom: "1.5rem",
                }}
              >
                {tour.description}
              </p>
              <a
                href="#contact"
                style={{
                  alignSelf: "flex-start",
                  padding: "10px 24px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  backgroundColor: "#1E2A5E",
                  color: "#ffffff",
                  borderRadius: "6px",
                  textDecoration: "none",
                  boxShadow: "0 2px 6px rgba(30,42,94,0.3)",
                  transition: "background-color 0.3s ease",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  openModal(tour);
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#14204B";
                  e.currentTarget.style.boxShadow = "0 3px 8px rgba(20,32,75,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#1E2A5E";
                  e.currentTarget.style.boxShadow = "0 2px 6px rgba(30,42,94,0.3)";
                }}
              >
                Join This Journey
              </a>
            </div>
          </div>
        ))}
      </div>
      <p
        style={{
          marginTop: "4rem",
          fontStyle: "italic",
          color: "#1E2A5E",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "1rem",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Integrated booking calendar and full details coming soon!
      </p>

      {showModal && selectedTour && (
        <div
          onClick={handleOverlayClick}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            animation: "fadeIn 0.3s ease forwards",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(30,42,94,0.2)",
              maxWidth: "700px",
              width: "90%",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
              padding: "2rem",
              fontFamily: "'Poppins', sans-serif",
              color: "#1E2A5E",
              animation: "fadeIn 0.3s ease forwards",
            }}
          >
            <button
              onClick={closeModal}
              aria-label="Close modal"
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "none",
                border: "none",
                fontSize: "2rem",
                fontWeight: "700",
                color: "#1E2A5E",
                cursor: "pointer",
                lineHeight: "1",
                padding: 0,
                userSelect: "none",
              }}
            >
              ×
            </button>
            <img
              src={selectedTour.image}
              alt={selectedTour.title}
              style={{
                width: "100%",
                maxHeight: "300px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "1.5rem",
              }}
            />
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: "700",
                fontSize: "2rem",
                marginBottom: "1rem",
                color: "#1E2A5E",
              }}
            >
              {selectedTour.title}
            </h3>
            <p
              style={{
                fontWeight: "600",
                fontSize: "1rem",
                marginBottom: "0.5rem",
                color: "#1E2A5E",
              }}
            >
              Duration: {selectedTour.duration} | Price: {selectedTour.price}
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.6",
                marginBottom: "2rem",
                color: "#1E2A5E",
              }}
            >
              {selectedTour.description}
            </p>
            <button
              style={{
                padding: "12px 28px",
                fontSize: "1rem",
                fontWeight: "600",
                backgroundColor: "#1E2A5E",
                color: "#ffffff",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(30,42,94,0.3)",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#14204B";
                e.currentTarget.style.boxShadow = "0 3px 8px rgba(20,32,75,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1E2A5E";
                e.currentTarget.style.boxShadow = "0 2px 6px rgba(30,42,94,0.3)";
              }}
              onClick={() => alert('Booking functionality coming soon!')}
            >
              Book Now
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {opacity: 0;}
          to {opacity: 1;}
        }
      `}</style>
    </section>
  );
}