import React, { useState, useEffect } from 'react';

export default function Header({ language, switchLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { href: '/tours', label: language === 'fr' ? 'Visites' : 'Tours' },
    { href: '/about', label: language === 'fr' ? 'À propos' : 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/photoshoots', label: 'Photos' },
  ];

  return (
    <>
      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 60px;
          height: 80px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid ${scrolled ? '#E8E3DC' : 'transparent'};
          transition: border-color 0.3s ease !important;
        }
        .header-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          letter-spacing: 1px;
          color: #0F2C66;
          text-decoration: none;
          flex: 0 0 auto;
          transition: opacity 0.2s ease !important;
        }
        .header-logo:hover { opacity: 0.75; color: #0F2C66; }
        .header-nav-list {
          display: flex;
          gap: 40px;
          list-style: none;
          margin: 0;
          padding: 0;
          flex: 1;
          justify-content: center;
        }
        .header-nav-list a {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #1C1C1C;
          text-decoration: none;
          font-weight: 400;
          transition: color 0.2s ease !important;
        }
        .header-nav-list a:hover { color: #0F2C66; }
        .header-right {
          display: flex;
          align-items: center;
          gap: 20px;
          flex: 0 0 auto;
        }
        .lang-toggle {
          display: flex;
          gap: 2px;
          align-items: center;
        }
        .lang-btn {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 6px;
          color: #4A4845;
          font-weight: 400;
          transition: color 0.2s ease !important;
        }
        .lang-btn.active {
          color: #0F2C66;
          font-weight: 500;
        }
        .lang-btn:hover { color: #0F2C66; }
        .lang-sep {
          color: #E8E3DC;
          font-size: 11px;
          font-family: 'Jost', sans-serif;
        }
        .header-cta {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #0F2C66;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid #0F2C66;
          padding-bottom: 2px;
          transition: opacity 0.2s ease !important;
          white-space: nowrap;
        }
        .header-cta:hover { opacity: 0.7; color: #0F2C66; }
        .burger-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          z-index: 1100;
        }
        .burger-btn span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: #1C1C1C;
          transition: transform 0.25s ease !important, opacity 0.25s ease !important;
        }
        .burger-btn.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg) !important; }
        .burger-btn.open span:nth-child(2) { opacity: 0 !important; }
        .burger-btn.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg) !important; }
        .mobile-nav-overlay {
          display: none;
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: #fff;
          z-index: 999;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 80px 40px 40px;
          gap: 0;
          transform: translateX(-100%);
          transition: transform 0.3s ease !important;
        }
        .mobile-nav-overlay.open { transform: translateX(0) !important; }
        .mobile-nav-overlay a {
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          font-weight: 400;
          color: #1C1C1C;
          text-decoration: none;
          border-bottom: 1px solid #E8E3DC;
          width: 100%;
          padding: 16px 0;
          transition: color 0.2s ease !important;
        }
        .mobile-nav-overlay a:hover { color: #0F2C66; }
        .mobile-lang-row {
          display: flex;
          gap: 16px;
          margin-top: 28px;
        }
        .mobile-lang-row button {
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: none;
          border: none;
          cursor: pointer;
          color: #4A4845;
          font-weight: 400;
          padding: 0;
          transition: color 0.2s ease !important;
        }
        .mobile-lang-row button.active { color: #0F2C66; font-weight: 500; }
        .mobile-lang-row button:hover { color: #0F2C66; }
        @media (max-width: 900px) {
          .site-header { padding: 0 24px; }
          .header-nav-list { display: none; }
          .burger-btn { display: flex; }
          .mobile-nav-overlay { display: flex; }
          .header-cta { display: none; }
          .lang-toggle { display: none; }
        }
      `}</style>

      <header className="site-header" role="banner" aria-label="Main header">
        <a href="/" className="header-logo">Fran's Guide</a>

        <nav aria-label="Primary navigation">
          <ul className="header-nav-list">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-right">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button
              className={`lang-btn${language === 'en' ? ' active' : ''}`}
              onClick={() => switchLanguage('en')}
            >EN</button>
            <span className="lang-sep">/</span>
            <button
              className={`lang-btn${language === 'fr' ? ' active' : ''}`}
              onClick={() => switchLanguage('fr')}
            >FR</button>
          </div>
          <a href="/tours" className="header-cta">
            {language === 'fr' ? 'Réserver' : 'Book now'}
          </a>
        </div>

        <button
          className={`burger-btn${menuOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </header>

      <nav
        className={`mobile-nav-overlay${menuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map(link => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <div className="mobile-lang-row">
          <button
            className={language === 'en' ? 'active' : ''}
            onClick={() => { switchLanguage('en'); setMenuOpen(false); }}
          >EN</button>
          <button
            className={language === 'fr' ? 'active' : ''}
            onClick={() => { switchLanguage('fr'); setMenuOpen(false); }}
          >FR</button>
        </div>
      </nav>
    </>
  );
}
