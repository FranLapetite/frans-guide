import React from 'react';

function Footer({ language }) {
  // NOTE: Footer text can also be passed via the TEXTS dictionary in App.js
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poppins&display=swap');

        .fade-in {
          animation: fadeIn 1.5s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .site-footer {
          background: #ffffff;
          color: #1E2A5E;
          padding: 2rem 1.5rem;
          font-family: 'Poppins', sans-serif;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-top: 1px solid rgba(30, 42, 94, 0.1);
        }
        .site-footer h2, .site-footer h3, .site-footer h4 {
          font-family: 'Playfair Display', serif;
          color: #1E2A5E;
        }
        .footer-divider {
          width: 60px;
          height: 3px;
          background: #1E2A5E;
          margin: 0 auto 1.5rem auto;
          border-radius: 2px;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        .footer-links a {
          color: #1E2A5E;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          padding-bottom: 3px;
          transition: color 0.4s ease;
          font-family: 'Poppins', sans-serif;
        }
        .footer-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          left: 0;
          bottom: 0;
          background: #1E2A5E;
          transition: width 0.4s ease;
          border-radius: 1px;
        }
        .footer-links a:hover {
          color: #14204B;
        }
        .footer-links a:hover::after {
          width: 100%;
        }
        .copyright {
          font-size: 0.9rem;
          margin-bottom: 1rem;
          color: #1E2A5E;
          font-family: 'Poppins', sans-serif;
        }
        .signature {
          font-size: 0.9rem;
          color: #1E2A5E;
          font-family: 'Playfair Display', serif;
          margin-top: 0.5rem;
          font-style: italic;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          font-size: 1.25rem;
          align-items: center;
        }
        .social-links a {
          color: #1E2A5E;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: filter 0.3s ease;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
        }
        .social-links a:hover {
          filter: brightness(1.1);
          color: #1E2A5E;
        }
      `}</style>
      <footer className="site-footer fade-in">
        <div className="footer-divider" />
        <div className="footer-links">
          <a href="#tours">Tours</a>
          <a href="#about">About</a>
          <a href="/mentions-legales">Mentions Légales (FR)</a>
          <a href="/cgv">CGV (Terms)</a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Fran's Guide. All Rights Reserved.
        </p>
        <div className="social-links">
          <a href="https://instagram.com/fran.traveling" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <span role="img" aria-hidden="true">📸</span> Instagram (@fran.traveling)
          </a>
        </div>
        <p className="signature">Made with ❤️ in Paris</p>
      </footer>
    </>
  );
}

export default Footer;