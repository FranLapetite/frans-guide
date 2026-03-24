import React, { useState, useEffect, useRef } from 'react';

export default function Header({ language, switchLanguage, content }) {
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'pt', label: 'Português' },
    { code: 'es', label: 'Español' },
  ];

  const logoSrc = 'logo_fran.png'; // place your logo file in public/brand/

  const [languageOpen, setLanguageOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const currentLanguageLabel = languages.find((langObj) => langObj.code === language)?.label || language.toUpperCase();

  const languageRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target)
      ) {
        setLanguageOpen(false);
      }
      if (
        !event.target.closest('.site-header') &&
        !event.target.closest('.mobile-nav')
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poppins&display=swap');

        .site-header {
          position: fixed;
          top: 0;
          width: 100%;
          height: 72px;
          background-color: #ffffff;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
          z-index: 1000;
          padding: 0 2.5rem;
          box-sizing: border-box;
        }

        .header-inner {
          max-width: 1200px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          gap: 1.5rem;
        }

        .left-section,
        .center-section,
        .right-section {
          display: flex;
          align-items: center;
          min-width: 0;
        }

        .left-section {
          flex: 0 0 auto;
          justify-content: flex-start;
        }

        .center-section {
          flex: 0 1 auto;
          justify-content: center;
          position: relative;
        }

        .right-section {
          flex: 0 0 auto;
          justify-content: flex-end;
        }

        .main-nav {
          display: flex;
          gap: 2.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.08em;
          text-transform: none;
        }
        .main-nav a {
          text-decoration: none;
          color: #1E2A5E;
          position: relative;
          padding-bottom: 3px;
          transition: color 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.13em;
        }
        .main-nav a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 1px;
          background-color: #D4AF7F;
          transition: width 0.25s ease;
        }
        .main-nav a:hover::after,
        .main-nav a:focus-visible::after {
          width: 100%;
        }
        .main-nav a:hover,
        .main-nav a:focus-visible {
          color: #334E8C;
          outline: none;
        }

        .mobile-nav {
          display: none;
        }

        /* Logo */
        .logo {
          font-family: 'Playfair Display', serif;
          user-select: none;
          cursor: default;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 80px;
          width: auto;
        }
        .logo img {
          height: 64px;
          width: auto;
          filter: drop-shadow(0 1px 3px rgba(30,42,94,0.1));
          transition: filter 0.3s ease;
          border-radius: 6px;
          display: block;
        }
        .logo img:hover,
        .logo img:focus-visible {
          filter: drop-shadow(0 3px 8px rgba(30,42,94,0.2));
          outline: none;
        }

        /* Language Selector */
        .language-selector {
          font-weight: 600;
          font-size: 0.95rem;
          color: #1E2A5E;
          cursor: pointer;
          user-select: none;
          font-family: 'Poppins', sans-serif;
          display: flex;
          align-items: center;
          border-radius: 20px;
          padding: 7px 14px;
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(15,23,42,0.12);
          transition: background-color 0.25s ease, box-shadow 0.25s ease;
          position: relative;
        }
        .language-selector:hover,
        .language-selector:focus-visible {
          background: #f2f4f8;
          color: #1E2A5E;
          box-shadow: 0 0 8px rgba(30,42,94,0.2);
          outline: none;
        }

        .language-selector::after {
          content: "▼";
          font-size: 0.65rem;
          margin-left: 6px;
          color: #1E2A5E;
          user-select: none;
          display: inline-block;
          transform: translateX(0);
        }

        .language-dropdown {
          position: absolute;
          top: 38px;
          right: 0;
          background: #F5F0E6;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;
          min-width: 100px;
          z-index: 1001;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          color: #1E2A5E;
          user-select: none;
        }
        .language-dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .language-dropdown button {
          width: 100%;
          background: none;
          border: none;
          padding: 10px 16px;
          text-align: left;
          cursor: pointer;
          color: #1E2A5E;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          border-radius: 6px;
          transition: background-color 0.25s ease, color 0.25s ease;
        }
        .language-dropdown button:hover,
        .language-dropdown button:focus-visible {
          background-color: #D7E1FF;
          color: #334E8C;
          outline: none;
        }

        .burger-button {
          display: none;
          width: 36px;
          height: 36px;
          border-radius: 999px;
          border: none;
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(15,23,42,0.12);
          display: none;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 0;
        }

        .burger-lines {
          width: 18px;
          height: 2px;
          background-color: #1E2A5E;
          position: relative;
          transition: transform 0.25s ease, background-color 0.25s ease;
        }

        .burger-lines::before,
        .burger-lines::after {
          content: "";
          position: absolute;
          left: 0;
          width: 18px;
          height: 2px;
          background-color: #1E2A5E;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .burger-lines::before {
          top: -6px;
        }

        .burger-lines::after {
          top: 6px;
        }

        .burger-button.open .burger-lines {
          transform: rotate(45deg);
        }

        .burger-button.open .burger-lines::before {
          transform: rotate(-90deg) translateX(-6px);
        }

        .burger-button.open .burger-lines::after {
          opacity: 0;
        }

        @media (max-width: 768px) {
          .site-header {
            height: 72px;
            padding: 0 1rem;
            background: #ffffff;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            width: 100%;
            left: 0;
          }

          .header-inner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 0.75rem;
            position: relative;
          }

          .left-section,
          .center-section,
          .right-section {
            flex: 0 0 auto;
            min-width: 0;
          }

          .left-section {
            justify-content: flex-start;
          }

          .center-section {
            display: none;
          }

          .right-section {
            justify-content: flex-end;
          }

          .logo {
            height: 72px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .logo img {
            height: 70px;
          }

          .language-selector {
            font-size: 0.8rem;
            padding: 5px 11px;
            box-shadow: 0 2px 6px rgba(15, 23, 42, 0.18);
          }

          .burger-button {
            display: flex;
          }

          .mobile-nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: #ffffff;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 5rem 1.5rem 2.5rem;
            gap: 1.3rem;
            overflow-y: auto;
            box-shadow: 4px 0 16px rgba(15,23,42,0.18);
            transform: translateX(-100%);
            opacity: 0;
            pointer-events: none;
            transition: transform 0.3s ease, opacity 0.3s ease;
            z-index: 900;
          }

          .mobile-nav.open {
            transform: translateX(0);
            opacity: 1;
            pointer-events: auto;
          }

          .mobile-nav a {
            font-size: 0.95rem;
            padding: 0.75rem 0;
            width: 100%;
            text-align: left;
            border-bottom: 1px solid rgba(15,23,42,0.08);
            white-space: nowrap;
          }
        }
      `}</style>
      <header className="site-header" role="banner" aria-label="Main header">
        <div className="header-inner">
          <div className="left-section">
            <button
              type="button"
              className={`burger-button${menuOpen ? ' open' : ''}`}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="burger-lines" />
            </button>
            <div className="logo" aria-label="Site Logo and Title">
              <a href="/" aria-label="Go to homepage">
                <img src={logoSrc} alt="Fran's Guide — logo" />
              </a>
            </div>
          </div>
          <div className="center-section">
            <nav className={`main-nav${menuOpen ? ' open' : ''}`} aria-label="Primary Navigation">
              <a href="/" onClick={() => setMenuOpen(false)}>{content?.navHome || 'Home'}</a>
              <a href="/tours" onClick={() => setMenuOpen(false)}>{content?.navTours || 'Tours'}</a>
              <a href="/about" onClick={() => setMenuOpen(false)}>{content?.navAbout || 'About Fran'}</a>
              <a href="/contact" onClick={() => setMenuOpen(false)}>{content?.navContact || 'Contact'}</a>
              <a href="/photoshoots" onClick={() => setMenuOpen(false)}>{content?.navPhotoshoots || 'Photos'}</a>
            </nav>
          </div>
          <div className="right-section">
            <div
              className="language-selector"
              tabIndex="0"
              aria-haspopup="true"
              aria-expanded={languageOpen}
              aria-label="Language selector"
              onClick={() => setLanguageOpen(!languageOpen)}
              ref={languageRef}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLanguageOpen(!languageOpen);
                }
              }}
            >
              {currentLanguageLabel}
              <div className={`language-dropdown${languageOpen ? ' open' : ''}`} role="menu" aria-label="Select language">
                {languages.map((langObj) => (
                  <button
                    key={langObj.code}
                    type="button"
                    onClick={() => {
                      switchLanguage(langObj.code);
                      setLanguageOpen(false);
                    }}
                    role="menuitem"
                    aria-current={langObj.code === language ? 'true' : undefined}
                  >
                    {langObj.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav
        className={`mobile-nav${menuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
      >
        <a href="/" onClick={() => setMenuOpen(false)}>{content?.navHome || 'Home'}</a>
        <a href="/tours" onClick={() => setMenuOpen(false)}>{content?.navTours || 'Tours'}</a>
        <a href="/about" onClick={() => setMenuOpen(false)}>{content?.navAbout || 'About Fran'}</a>
        <a href="/contact" onClick={() => setMenuOpen(false)}>{content?.navContact || 'Contact'}</a>
        <a href="/photoshoots" onClick={() => setMenuOpen(false)}>{content?.navPhotoshoots || 'Photos'}</a>
      </nav>
    </>
  );
}
