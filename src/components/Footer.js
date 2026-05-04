import React from 'react';

const WHATSAPP_NUMBER = '33759752536';

function Footer({ language = 'en', content }) {
  const footerData = {
    en: {
      links: [
        { href: '/tours', label: 'Tours' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
        { href: '/mentions-legales', label: 'Legal' },
        { href: '/cgv', label: 'Terms' },
        { href: '/privacy', label: 'Privacy' },
      ],
      copy: 'All Rights Reserved.',
      whatsappText: "Hi Fran! I\u2019d love to plan a private tour in Paris. \u2728 When are you available?",
    },
    fr: {
      links: [
        { href: '/tours', label: 'Visites' },
        { href: '/about', label: '\u00c0 propos' },
        { href: '/contact', label: 'Contact' },
        { href: '/mentions-legales', label: 'Mentions l\u00e9gales' },
        { href: '/cgv', label: 'CGV' },
        { href: '/privacy', label: 'Confidentialit\u00e9' },
      ],
      copy: 'Tous droits r\u00e9serv\u00e9s.',
      whatsappText: "Bonjour Fran ! J\u2019aimerais organiser une visite priv\u00e9e \u00e0 Paris. \u2728",
    },
    pt: {
      links: [
        { href: '/tours', label: 'Tours' },
        { href: '/about', label: 'Sobre' },
        { href: '/contact', label: 'Contato' },
        { href: '/mentions-legales', label: 'Termos legais' },
        { href: '/cgv', label: 'CGV' },
        { href: '/privacy', label: 'Privacidade' },
      ],
      copy: 'Todos os direitos reservados.',
      whatsappText: "Oi Fran! Quero planejar um tour privado em Paris. \u2728",
    },
    es: {
      links: [
        { href: '/tours', label: 'Tours' },
        { href: '/about', label: 'Sobre m\u00ed' },
        { href: '/contact', label: 'Contacto' },
        { href: '/mentions-legales', label: 'Avisos legales' },
        { href: '/cgv', label: 'CGV' },
        { href: '/privacy', label: 'Privacidad' },
      ],
      copy: 'Todos los derechos reservados.',
      whatsappText: "\u00a1Hola Fran! Me gustar\u00eda organizar un tour privado en Par\u00eds. \u2728",
    },
  };

  const lang = footerData[language] ? language : 'en';
  const { links, copy, whatsappText } = footerData[lang];
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        .fg-footer {
          padding: 48px 80px;
          border-top: 1px solid #E8E3DC;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          background: #fff;
          flex-wrap: wrap;
        }
        .fg-footer-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 400;
          color: #0F2C66;
          text-decoration: none;
          letter-spacing: 1px;
          flex-shrink: 0;
        }
        .fg-footer-links {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
          align-items: center;
        }
        .fg-footer-links a {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #4A4845;
          text-decoration: none;
          font-weight: 400;
          transition: color 0.2s;
        }
        .fg-footer-links a:hover { color: #0F2C66; }
        .fg-footer-right {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-shrink: 0;
          flex-wrap: wrap;
        }
        .fg-footer-copy {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          color: #4A4845;
          letter-spacing: 1px;
          white-space: nowrap;
        }
        .fg-footer-wa {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #0F2C66;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid #E8E3DC;
          padding-bottom: 2px;
          white-space: nowrap;
          transition: border-color 0.2s;
        }
        .fg-footer-wa:hover { border-color: #0F2C66; }
        @media (max-width: 900px) {
          .fg-footer {
            padding: 40px 32px;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
        }
        @media (max-width: 480px) {
          .fg-footer { padding: 32px 24px; }
          .fg-footer-links { gap: 16px; }
        }
      `}</style>
      <footer className="fg-footer">
        <a href="/" className="fg-footer-logo">Fran's Guide</a>
        <nav className="fg-footer-links">
          {links.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="fg-footer-right">
          <span className="fg-footer-copy">&copy; {year} Fran's Guide. {copy}</span>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fg-footer-wa">
            WhatsApp
          </a>
          <a href="https://instagram.com/frans.guide" target="_blank" rel="noopener noreferrer" className="fg-footer-wa">
            Instagram
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
