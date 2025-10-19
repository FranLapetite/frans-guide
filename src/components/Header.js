import React, { useState, useEffect, useRef } from 'react';

export default function Header({ language, switchLanguage }) {
  const languages = ['en', 'fr', 'pt', 'es'];
  const logoSrc = 'logo_fran.png'; // place your logo file in public/brand/

  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const menuRef = useRef(null);
  const languageRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        languageRef.current &&
        !languageRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        setLanguageOpen(false);
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
          height: 80px;
          background-color: #F5F0E6;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.1);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
          z-index: 1000;
          padding: 0 2rem;
          box-sizing: border-box;
        }

        .header-inner {
          max-width: 1200px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .left-section,
        .center-section,
        .right-section {
          display: flex;
          align-items: center;
          min-width: 0;
        }

        .left-section {
          flex: 1;
        }

        .center-section {
          flex: 0 1 auto;
          justify-content: center;
          position: relative;
        }

        .right-section {
          flex: 1;
          justify-content: flex-end;
        }

        /* Hamburger Menu */
        .hamburger-menu {
          font-size: 28px;
          color: #1E2A5E;
          cursor: pointer;
          user-select: none;
          font-weight: 600;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: #E9EDF7;
          box-shadow: 0 1px 4px rgba(30, 42, 94, 0.1);
          transition: background-color 0.25s ease, box-shadow 0.25s ease;
        }
        .hamburger-menu:hover,
        .hamburger-menu:focus-visible {
          background-color: #D7E1FF;
          box-shadow: 0 0 8px rgba(30, 42, 94, 0.2);
          outline: none;
        }

        .menu-dropdown {
          position: absolute;
          top: 48px;
          left: 0;
          background: #F5F0E6;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;
          min-width: 140px;
          font-size: 1rem;
          font-weight: 600;
          color: #1E2A5E;
          z-index: 1001;
          user-select: none;
        }
        .menu-dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .menu-dropdown a {
          display: block;
          padding: 10px 16px;
          text-decoration: none;
          color: #1E2A5E;
          border-radius: 6px;
          transition: background-color 0.25s ease, color 0.25s ease;
        }
        .menu-dropdown a:hover,
        .menu-dropdown a:focus-visible {
          background-color: #D7E1FF;
          color: #334E8C;
          outline: none;
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
          height: 130px;
          width: auto;
          filter: drop-shadow(0 1px 3px rgba(30,42,94,0.1));
          transition: filter 0.3s ease;
          border-radius: 6px;
          display: block;
          margin-top: 15px;
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
          padding: 8px 14px;
          background: #E9EDF7;
          box-shadow: 0 1px 4px rgba(30,42,94,0.1);
          transition: background-color 0.25s ease, box-shadow 0.25s ease;
          position: relative;
        }
        .language-selector:hover,
        .language-selector:focus-visible {
          background: #D7E1FF;
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
          top: 42px;
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

        /* Responsive */
        @media (max-width: 600px) {
          .hamburger-menu {
            font-size: 24px;
            width: 36px;
            height: 36px;
          }
          .language-selector {
            padding: 6px 12px;
            font-size: 0.9rem;
          }
          .language-dropdown {
            min-width: 90px;
          }
          .logo img {
            height: 70px;
            margin-top: 4px;
          }
        }
      `}</style>
      <header className="site-header" role="banner" aria-label="Main header">
        <div className="header-inner">
          <div className="left-section">
            <div
              className="hamburger-menu"
              tabIndex="0"
              aria-haspopup="true"
              aria-expanded={menuOpen}
              aria-label="Main menu"
              onClick={() => setMenuOpen(!menuOpen)}
              ref={menuRef}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setMenuOpen(!menuOpen);
                }
              }}
            >
              &#9776;
              <nav className={`menu-dropdown${menuOpen ? ' open' : ''}`} aria-label="Primary Navigation">
                <a href="#tours">Tours</a>
                <a href="#about">About Fran</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>
          </div>
          <div className="center-section">
            <div className="logo" aria-label="Site Logo and Title">
              <img src={logoSrc} alt="Fran's Guide — logo" />
            </div>
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
              {language.toUpperCase()}
              <div className={`language-dropdown${languageOpen ? ' open' : ''}`} role="menu" aria-label="Select language">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => {
                      switchLanguage(lang);
                      setLanguageOpen(false);
                    }}
                    role="menuitem"
                    aria-current={lang === language ? 'true' : undefined}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
