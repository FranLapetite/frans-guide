import React from 'react';

const WHATSAPP_NUMBER = '33759752536'; // no +, spaces, or leading zeros
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

function Footer({ language = 'en', content }) {
  const footerTextByLang = {
    en: {
      links: ['Tours', 'About', 'Contact', 'Legal Notices', 'Terms of Sale'],
      copy: "All Rights Reserved.",
      whatsappText: "Hi Fran! I\u2019d love to plan a private tour in Paris. \u2728 When are you available?"
    },
    fr: {
      links: ['Visites', '\u00c0 propos', 'Contact', 'Mentions l\u00e9gales', 'CGV'],
      copy: "Tous droits r\u00e9serv\u00e9s.",
      whatsappText: "Bonjour Fran ! J\u2019aimerais organiser une visite priv\u00e9e \u00e0 Paris. \u2728 Quelles sont vos disponibilit\u00e9s ?"
    },
    pt: {
      links: ['Tours', 'Sobre', 'Contato', 'Termos legais', 'CGV'],
      copy: "Todos os direitos reservados.",
      whatsappText: "Oi Fran! Quero planejar um tour privado em Paris. \u2728 Quais s\u00e3o suas disponibilidades?"
    },
    es: {
      links: ['Tours', 'Sobre m\u00ed', 'Contacto', 'Avisos legales', 'CGV'],
      copy: "Todos los derechos reservados.",
      whatsappText: "\u00a1Hola Fran! Me gustar\u00eda organizar un tour privado en Par\u00eds. \u2728 \u00bfCu\u00e1ndo est\u00e1s disponible?"
    },
  };

  const currentLang = footerTextByLang[language] ? language : 'en';
  const footerContent = footerTextByLang[currentLang];

  const links = content?.footerLinks || footerContent.links;
  const footerCopy = content?.footerCopy || footerContent.copy;

  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(footerContent.whatsappText)}`;

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
          background: linear-gradient(180deg, #F9F5F0 0%, #F2EAE1 100%);
          color: #3B2F22;
          padding: 1.5rem 1rem; /* reduced */
          font-family: 'Poppins', sans-serif;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-top: 1px solid rgba(59, 47, 34, 0.12);
        }
        .site-footer h2, .site-footer h3, .site-footer h4 {
          font-family: 'Playfair Display', serif;
          color: #3B2F22;
        }
        .footer-divider {
          width: 40px; /* smaller */
          height: 2px; /* thinner */
          background: rgba(59, 47, 34, 0.6);
          margin: 0 auto 0.75rem auto; /* tighter */
          border-radius: 2px;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1.25rem; /* tighter */
          margin-bottom: 0.75rem; /* tighter */
          flex-wrap: wrap;
        }
        .footer-links a {
          color: #3B2F22;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          padding-bottom: 2px;
          transition: color 0.25s ease;
          font-family: 'Poppins', sans-serif;
          opacity: 0.9;
        }
        .footer-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px; /* thinner */
          left: 0;
          bottom: 0;
          background: rgba(59, 47, 34, 0.6);
          transition: width 0.25s ease;
          border-radius: 1px;
        }
        .footer-links a:hover {
          color: #2C241A;
          opacity: 1;
        }
        .footer-links a:hover::after {
          width: 100%;
        }
        .copyright {
          font-size: 0.85rem; /* smaller */
          margin-bottom: 0.5rem; /* tighter */
          color: rgba(59, 47, 34, 0.9);
          font-family: 'Poppins', sans-serif;
        }
        .signature {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          color: rgba(59, 47, 34, 0.85);
          font-size: 0.95rem; /* slightly smaller */
          margin-top: 0.25rem; /* tighter */
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 0.75rem; /* tighter */
          font-size: 1.05rem; /* smaller */
          align-items: center;
          margin-bottom: 0.25rem; /* add small spacing */
        }
        .social-links a {
          color: #3B2F22;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          transition: filter 0.2s ease, transform 0.2s ease;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          opacity: 0.9;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
        }
        .social-links a:hover {
          filter: brightness(1.05);
          color: #3B2F22;
          transform: translateY(-1px);
          opacity: 1;
        }
        @media (max-width: 480px) {
          .site-footer {
            padding: 1.2rem 0.8rem;
          }

          .footer-links {
            flex-direction: column;
            gap: 0.6rem;
            margin-bottom: 1rem;
          }

          .footer-links a {
            font-size: 0.9rem;
          }

          .social-links {
            flex-direction: column;
            gap: 0.4rem;
            font-size: 0.95rem;
          }

          .signature {
            font-size: 0.85rem;
            margin-top: 0.5rem;
          }

          .footer-divider {
            margin-bottom: 1rem;
          }
        }
      `}</style>
      <footer className="site-footer fade-in">
        <div className="footer-divider" />
        <div className="footer-links">
          <a href="/tours">{links[0]}</a>
          <a href="/about">{links[1]}</a>
          <a href="/contact">{links[2]}</a>
          <a href="/mentions-legales">{links[3]}</a>
          <a href="/cgv">{links[4]}</a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Fran's Guide. {footerCopy}
        </p>
        <div className="social-links">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <span role="img" aria-hidden="true">💬</span> WhatsApp
          </a>
          <a href="https://instagram.com/frans.guide" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <span role="img" aria-hidden="true">📸</span> Instagram (@frans.guide)
          </a>
        </div>
        <p className="signature">✨ Crafted with love in Paris by Fran ✨</p>
      </footer>
    </>
  );
}

export default Footer;