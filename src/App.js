import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- Import component styles ---
import './styles/Header.css';
import './index.css';

// --- Import components ---
import Header from './components/Header';
import Hero from './components/Hero';
import ToursPage from './components/TourPage';
import About from './components/About';
import ContactSection from './components/ContactSection';
import PageFooter from './components/Footer';
import AboutPage from './components/AboutPage';
import MentionsLegales from './components/MentionsLegales';
import CGV from './components/CGV';
import PrivacyPolicy from './components/PrivacyPolicy';
import TourDetails from './components/TourDetails';
import PhotoshootsPage from './components/PhotoshootsPage.js';

// --- Stats Bar Component ---
function StatsBar({ language = 'en' }) {
  const labels = {
    en: ['Audio Tours', 'Private Tours', 'Languages', 'Stories to tell'],
    fr: ['Visites Audio', 'Visites Privées', 'Langues', 'Histoires à raconter'],
    pt: ['Tours de Áudio', 'Tours Privados', 'Idiomas', 'Histórias a contar'],
    es: ['Tours de Audio', 'Tours Privados', 'Idiomas', 'Historias que contar'],
  };
  const nums = ['2', '18', '4', '∞'];
  const l = labels[language] || labels.en;
  return (
    <>
      <style>{`
        .fg-stats {
          padding: 60px 80px;
          border-top: 1px solid #E8E3DC;
          display: flex;
          align-items: center;
          gap: 60px;
          background: #fff;
        }
        .fg-stat { text-align: center; flex-shrink: 0; }
        .fg-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px;
          font-weight: 300;
          color: #0F2C66;
          line-height: 1;
        }
        .fg-stat-label {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #8A8480;
          margin-top: 8px;
          font-weight: 400;
        }
        .fg-stat-line {
          flex: 1;
          height: 1px;
          background: #E8E3DC;
        }
        @media (max-width: 900px) {
          .fg-stats { padding: 40px 32px; gap: 32px; }
          .fg-stat-num { font-size: 36px; }
        }
        @media (max-width: 480px) {
          .fg-stats { padding: 32px 24px; gap: 20px; flex-wrap: wrap; justify-content: space-around; }
          .fg-stat-line { display: none; }
          .fg-stat-num { font-size: 32px; }
          .fg-stat-label { font-size: 10px; }
        }
      `}</style>
      <div className="fg-stats">
        {nums.map((n, i) => (
          <React.Fragment key={i}>
            <div className="fg-stat">
              <div className="fg-stat-num">{n}</div>
              <div className="fg-stat-label">{l[i]}</div>
            </div>
            {i < nums.length - 1 && <div className="fg-stat-line" />}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

// --- Multi-language content dictionary (kept and unchanged except for small fixes) ---
const TEXTS = {
  en: { 
    heroTitle: "Paris. With You.",
    heroSubtitle: "Your Multilingual Guide and Photographer to the City of Light.",
    cta: "Explore My Tours",
    toursTitle: "My Signature Tours",
    aboutTitle: "Meet Fran – Your Traveling Guide",
    aboutText1: "I'm Fran, a Paris-based multilingual guide and photographer who found my true calling in sharing the city through a personal and authentic lens. I discovered my passion by guiding visitors through my favourite places and capturing the magic of their unique moments.",
    aboutText2: "What inspires me the most is seeing that spark in my guests’ eyes as they explore Paris comfortably in the language of their choice. All my tours are available in French, English, Portuguese, and Spanish. My style is authentic, adaptable, and empathetic, creating a warm, personal experience for everyone.",
    tour1Title: "Architectural Gems & Hidden Alleys",
    tour1Description: "A curated walk revealing the stunning Parisian architecture, from the medieval core to the Grand Haussmann style. We focus on the aesthetic and cultural stories of the city's most beautiful spaces and hidden passages.",
    tour2Title: "Bossa Nova Paris: Food, Art, and Latin Flair",
    tour2Description: "A warm, curated tour through food, art, and Latin-influenced neighborhoods, emphasizing the shared culture between France and Brazil. Includes a gourmet stop to sample authentic French and Brazilian pastries.",
    tour3Title: "The Photo-Walk: Mastering Light and Angles",
    tour3Description: "Leverage Fran's photography skills to capture stunning, professional-quality images. We focus on composition, lighting, and finding the hidden perspectives that make Paris truly photogenic.",
    contactTitle: "Inquire or Book Your Tour", 
    contactName: "Your Name", 
    contactEmail: "Email Address", 
    contactTour: "Which tour interests you?", 
    contactMessage: "Your Message / Custom Request", 
    contactSubmit: "Send Inquiry", 
    contactSuccess: "Thank you! Your message has been sent.", 
    contactError: "Sorry, there was an error sending your message. Please try emailing directly.", 
    footerLinks: ["Tours", "About Fran", "Contact", "Legal Notices", "Terms of Sale"],
    footerCopy: "All Rights Reserved."
  },
  fr: { 
    heroTitle: "Paris. Avec Vous.",
    heroSubtitle: "Votre Guide Multilingue et Photographe de la Ville Lumière.",
    cta: "Découvrez Mes Visites",
    toursTitle: "Mes Visites Signature",
    aboutTitle: "Rencontrez Fran – Votre Guide Voyageuse",
    aboutText1: "Je suis Fran, guide et photographe installée à Paris, passionnée par l'art de faire découvrir la ville sous un angle personnel et authentique. J'ai trouvé ma voie en partageant mes endroits préférés et en capturant la magie des moments uniques.",
    aboutText2: "Ce qui me passionne, c'est de voir la lumière dans les yeux de mes visiteurs lorsqu'ils explorent Paris sans barrière, dans la langue de leur choix. Tous mes tours sont disponibles en français, anglais, portugais et espagnol. Mon style est authentique, adaptable et empreint d'empathie, pour offrir une expérience chaleureuse à chacun.",
    tour1Title: "Trésors Architecturaux & Passages Secrets",
    tour1Description: "Une promenade organisée révélant la magnifique architecture parisienne, du noyau médiéval au Grand Style Haussmannien. Nous nous concentrons sur les histoires esthétiques et culturelles des plus beaux espaces de la ville et de ses passages secrets.",
    tour2Title: "Paris Bossa Nova : Gastronomie, Art et Ambiance Latine",
    tour2Description: "Une visite chaleureuse et organisée à travers la nourriture, l'art et les quartiers d'influence latine, soulignant la culture partagée entre la France et le Brésil. Comprend une pause gourmande pour déguster d'authentiques pâtisseries françaises et brésiliennes.",
    tour3Title: "Le Photo-Walk : Maîtriser la Lumière et les Angles",
    tour3Description: "Tirez parti des compétences photographiques de Fran pour capturer des images époustouflantes de qualité professionnelle. Nous nous concentrons sur la composition, l'éclairage et la recherche des perspectives cachées qui rendent Paris si photogénique.",
    contactTitle: "Demande de Renseignements ou Réservation", 
    contactName: "Votre Nom", 
    contactEmail: "Adresse e-mail", 
    contactTour: "Quelle visite vous intéresse ?", 
    contactMessage: "Votre Message / Demande Personnalisée", 
    contactSubmit: "Envoyer la Demande", 
    contactSuccess: "Merci ! Votre message a bien été envoyé.", 
    contactError: "Désolé, une erreur s'est produite lors de l'envoi. Veuillez essayer d'envoyer un e-mail directement.", 
    footerLinks: ["Visites", "À Propos", "Contact", "Mentions Légales", "CGV"],
    footerCopy: "Tous droits réservés."
  },
  pt: { 
    heroTitle: "Paris. Com Você.",
    heroSubtitle: "Seu Guia Multilíngue e Fotógrafa da Cidade Luz.",
    cta: "Explore Meus Tours",
    toursTitle: "Meus Tours de Assinatura",
    aboutTitle: "Conheça Fran – Sua Guia Viajante",
    aboutText1: "Oii eu sou a Fran, guia e fotógrafa em Paris, que descobriu sua verdadeira vocação ao mostrar a cidade por um olhar pessoal e autêntico. Encontrei minha paixão ao acompanhar visitantes pelos meus lugares preferidos e registrar a magia de cada momento único.",
    aboutText2: "O que mais me inspira é ver o brilho nos olhos dos meus visitantes ao descobrirem Paris sem barreiras, no idioma que preferirem. Todos os meus tours estão disponíveis em francês, inglês, português e espanhol. Meu estilo é autêntico, acolhedor e adaptável, criando uma experiência calorosa e única para cada pessoa.",
    tour1Title: "Jóias Arquitetônicas e Becos Secretos",
    tour1Description: "Uma caminhada com curadoria que revela a arquitetura parisiense, desde o núcleo medieval até o Grand Estilo Haussmann. Focamos nas histórias estéticas e culturais dos espaços mais bonitos da cidade e de suas passagens ocultas.",
    tour2Title: "Bossa Nova Paris: Comida, Arte e Sabor Latino",
    tour2Description: "Um passeio caloroso e com curadoria por bairros com influência latina, comida e arte, enfatizando a cultura compartilhada entre a França e o Brasil. Inclui uma parada gourmet para provar doces autênticos franceses e brasileiros.",
    tour3Title: "O Photo-Walk: Dominando a Luz e os Ângulos",
    tour3Description: "Aproveite as habilidades fotográficas de Fran para capturar imagens impressionantes e de qualidade profissional. Focamos na composição, iluminação e descoberta das perspectivas ocultas que tornam Paris verdadeiramente fotogênica.",
    contactTitle: "Solicite ou Reserve Seu Tour", 
    contactName: "Seu Nome", 
    contactEmail: "Endereço de Email", 
    contactTour: "Qual tour lhe interessa?", 
    contactMessage: "Sua Mensagem / Pedido Personalizado", 
    contactSubmit: "Enviar Pedido", 
    contactSuccess: "Obrigado! Sua mensagem foi enviada com sucesso.", 
    contactError: "Desculpe, houve um erro ao enviar sua mensagem. Tente enviar um email diretamente.", 
    footerLinks: ["Tours", "Sobre Fran", "Contato", "Termos Legais", "CGV"],
    footerCopy: "Todos os Direitos Reservados."
  },
  es: { 
    heroTitle: "París. Contigo.",
    heroSubtitle: "Su Guía Multilingüe y Fotógrafa de la Ciudad de la Luz.",
    cta: "Explora Mis Tours",
    toursTitle: "Mis Tours de Autor",
    aboutTitle: "Conoce a Fran – Tu Guía Viajera",
    aboutText1: "Soy Fran, guía y fotógrafa en París, y descubrí mi verdadera vocación al mostrar la ciudad desde una mirada personal y auténtica. Encontré mi pasión guiando a visitantes por mis rincones favoritos y capturando la magia de sus momentos únicos.",
    aboutText2: "Lo que más me inspira es ver el brillo en los ojos de mis visitantes cuando descubren París sin barreras, en el idioma que elijan. Todos mis tours están disponibles en francés, inglés, portugués y español. Mi estilo es auténtico, empático y adaptable, creando una experiencia cálida y personal para cada persona.",
    tour1Title: "Gemas Arquitectónicas y Callejones Ocultos",
    tour1Description: "Un paseo curado que revela la impresionante arquitectura parisina, desde el núcleo medieval hasta el Grand Estilo Haussmann. Nos centramos en las historias estéticas y culturales de los espacios más bellos de la ciudad y sus pasajes secretos.",
    tour2Title: "París Bossa Nova: Comida, Arte y Estilo Latino",
    tour2Description: "Un tour cálido y curado a través de comida, arte y barrios de influencia latina, destacando la cultura compartida entre Francia y Brasil. Incluye una parada gourmet para degustar auténtica repostería francesa y brasileña.",
    tour3Title: "El Photo-Walk: Dominando la Luz y los Ángulos",
    tour3Description: "Aprovecha las habilidades fotográficas de Fran para capturar imágenes impresionantes de calidad profesional. Nos centramos en la composición, la iluminación y en encontrar las perspectivas ocultas que hacen que París sea verdaderamente fotogénica.",
    contactTitle: "Consulta o Reserva Tu Tour", 
    contactName: "Tu Nombre", 
    contactEmail: "Correo Electrónico", 
    contactTour: "¿Qué tour te interesa?", 
    contactMessage: "Tu Mensaje / Solicitud Personalizada", 
    contactSubmit: "Enviar Consulta", 
    contactSuccess: "¡Gracias! Tu mensaje ha sido enviado.", 
    contactError: "Lo sentimos, hubo un error al enviar tu mensaje. Por favor, intenta enviar un correo electrónico directamente.", 
    footerLinks: ["Tours", "Sobre Fran", "Contacto", "Avisos Legales", "CGV"],
    footerCopy: "Todos los derechos reservados."
  },
};




// --- Main Application Component ---
export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('fg_lang') || 'en');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollButtonRef = useRef(null);

  

  // --- GitHub Pages redirect handler ---
  if (window.location.search.includes('?p=')) {
    const newPath = window.location.search.replace('?p=', '');
    window.history.replaceState(null, '', newPath);
  }

  // --- Language switching logic (unchanged) ---
  const switchLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('fg_lang', lang);
  };

  // --- Multilingual content selection ---
  const content = TEXTS[language];

  // --- Fade-in on mount ---
  useEffect(() => {
    document.body.classList.add('fade-in');
    return () => {
      document.body.classList.remove('fade-in');
    };
  }, []);

  // --- Scroll-to-top button logic ---
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (scrollButtonRef.current) {
      scrollButtonRef.current.blur();
    }
  };

  return (
    <>
      {/* --- Meta tags and SEO --- */}
      <head>
        <title>Fran's Guide | Private Paris Tours & Photography</title>        <meta name="description" content="Multilingual boutique Paris tours and photography by Fran – French, English, Portuguese, Spanish. Discover hidden gems, stories, and stunning photos." />
        <meta name="language" content={language} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>

      {/* --- Main App Container with Fade-in and warm beige background --- */}
      <div className="FransGuideApp fade-in">     
        <Router>
          {/* --- Header and Language Switcher --- */}
          <Header
            language={language}
            switchLanguage={switchLanguage}
          />

          <Routes>
            <Route path="/" element={
              <>
                {/* --- Hero Section --- */}
                <Hero
                  title={content.heroTitle}
                  subtitle={content.heroSubtitle}
                  cta={content.cta}
                  language={language}
                />

                {/* --- Stats Bar --- */}
                <StatsBar language={language} />

                {/* --- About Fran Section --- */}
                <About content={content} language={language} />

                {/* --- Contact Section --- */}
                <ContactSection content={content} />
              </>
            } />
            <Route path="/tours" element={<ToursPage language={language} content={content} />} />
            <Route path="/photoshoots" element={<PhotoshootsPage language={language} />} />
            <Route path="/tour/:id" element={<TourDetails language={language} />} />
            <Route path="/about" element={<AboutPage language={language} />} />
            <Route path="/contact" element={<ContactSection content={content} />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>

          {/* --- Footer --- */}
          <PageFooter language={language} content={content} />
          {/* --- Scroll-to-Top Button --- */}
          {showScrollTop && (
            <button
              ref={scrollButtonRef}
              className="scroll-to-top"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                zIndex: 1000,
                background: '#0F2C66',
                border: 'none',
                borderRadius: '0',
                width: '44px',
                height: '44px',
                color: '#fff',
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                userSelect: 'none',
                fontFamily: "'Jost', sans-serif",
                letterSpacing: '1px',
              }}
            >
              ↑
            </button>
          )}
        </Router>
      </div>
      {/* --- Global fade-in --- */}
      <style>{`
        body {
          background: #fff;
          font-family: 'Jost', sans-serif;
        }
        .fade-in {
          animation: fadeInApp 0.8s ease both;
        }
        @keyframes fadeInApp {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}