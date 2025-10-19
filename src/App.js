import React, { useState, useEffect, useRef } from 'react';

// --- Import component styles ---
import './styles/Header.css';
import './index.css';

// --- Import components ---
import Header from './components/Header';
import Hero from './components/Hero';
import ToursSection from './components/ToursSection';
import About from './components/About';
import ContactSection from './components/ContactSection';
import PageFooter from './components/Footer';

// --- Multi-language content dictionary (kept and unchanged except for small fixes) ---
const TEXTS = {
  en: { 
    heroTitle: "Paris. Understood.", 
    heroSubtitle: "Your Multilingual Guide and Photographer to the City of Light.",
    cta: "Explore My Tours",
    toursTitle: "My Signature Tours",
    aboutTitle: "Meet Fran – Your Traveling Guide",
    aboutText1: "I'm Fran, a travel professional and lifelong Francophile who believes the magic of Paris is best shared through personal stories and unforgettable views.",
    aboutText2: "I offer a unique blend of French precision, Brazilian warmth, and a keen, photographic eye. My private tours are available in four languages: French, English, Portuguese, and Spanish.",
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
    heroTitle: "Paris. Décrypté.", 
    heroSubtitle: "Votre Guide Multilingue et Photographe de la Ville Lumière.",
    cta: "Découvrez Mes Visites",
    toursTitle: "Mes Visites Signature",
    aboutTitle: "Rencontrez Fran – Votre Guide Voyageuse",
    aboutText1: "Je suis Fran, une professionnelle du voyage et Francophile de toujours qui croit que la magie de Paris se partage le mieux à travers des histoires personnelles et des vues inoubliables.",
    aboutText2: "J'offre un mélange unique de précision française, de chaleur brésilienne et d'un œil photographique aiguisé. Mes visites privées sont disponibles en quatre langues : Français, Anglais, Portugais et Espagnol.",
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
    heroTitle: "Paris. Compreendida.", 
    heroSubtitle: "Seu Guia Multilíngue e Fotógrafa da Cidade Luz.",
    cta: "Explore Meus Tours",
    toursTitle: "Meus Tours de Assinatura",
    aboutTitle: "Conheça Fran – Sua Guia Viajante",
    aboutText1: "Eu sou Fran, uma profissional de viagens e francófila de longa data que acredita que a magia de Paris é melhor compartilhada através de histórias pessoais e vistas inesquecíveis.",
    aboutText2: "Ofereço uma mistura única de precisão francesa, calor brasileiro e um olhar fotográfico aguçado. Meus tours privados estão disponíveis em quatro idiomas: Francês, Inglês, Português e Espanhol.",
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
    heroTitle: "París. Comprendida.", 
    heroSubtitle: "Su Guía Multilingüe y Fotógrafa de la Ciudad de la Luz.",
    cta: "Explora Mis Tours",
    toursTitle: "Mis Tours de Autor",
    aboutTitle: "Conoce a Fran – Tu Guía Viajera",
    aboutText1: "Soy Fran, una profesional de viajes y francófila de toda la vida que cree que la magia de París se comparte mejor a través de historias personales y vistas inolvidables.",
    aboutText2: "Ofrezco una mezcla única de precisión francesa, calidez brasileña y un ojo fotográfico agudo. Mis tours privados están disponibles en cuatro idiomas: francés, inglés, portugués y español.",
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
  const [language, setLanguage] = useState('en');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollButtonRef = useRef(null);

  // --- Language switching logic (unchanged) ---
  const switchLanguage = (lang) => {
    setLanguage(lang);
    console.log(`Language switched to: ${lang}`);
  };

  // --- Multilingual content selection ---
  const content = TEXTS[language];

  // --- Local hero images per language ---
  const heroImages = {
    en: '/assets/images/hero-paris-morning.jpg',
    fr: '/assets/images/hero-montmartre.jpg',
    pt: '/assets/images/hero-bossa-cafe.jpg',
    es: '/assets/images/hero-paris-sunset.jpg'
  };

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
        <title>Fran's Guide | Boutique Paris Tours & Photography</title>
        <meta name="description" content="Multilingual boutique Paris tours and photography by Fran – French, English, Portuguese, Spanish. Discover hidden gems, stories, and stunning photos." />
        <meta name="language" content={language} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>

      {/* --- Main App Container with Fade-in and warm beige background --- */}
      <div className="FransGuideApp fade-in" style={{ backgroundColor: '#F3E9DC' }}>

        {/* --- Header and Language Switcher --- */}
        <Header
          language={language}
          switchLanguage={switchLanguage}
        />

        {/* --- Main Content --- */}
        <main>
          {/* --- Hero Section --- */}
          <Hero
            title={content.heroTitle}
            subtitle={content.heroSubtitle}
            cta={content.cta}
            heroImage={heroImages[language]}
          />

          {/* --- Tours Section --- */}
          <ToursSection content={content} />

          {/* --- About Fran Section --- */}
          <About content={content} />

          {/* --- Contact Section --- */}
          <ContactSection content={content} />
        </main>

        {/* --- Footer --- */}
        <PageFooter content={content} />

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
              background: 'linear-gradient(135deg, #D4AF7F, #F7C59F)', // gold-rosé gradient
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              color: '#5B3A00',
              fontSize: '2rem',
              boxShadow: '0 4px 12px rgba(212,175,127,0.6)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              userSelect: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(212,175,127,0.9), 0 0 8px 2px rgba(247,197,159,0.7)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(212,175,127,0.6)';
            }}
          >
            ↑
          </button>
        )}
      </div>
      {/* --- Fade-in CSS and body background texture/gradient --- */}
      <style>{`
        body {
          background: linear-gradient(180deg, #F3E9DC 0%, #F9F1ED 100%);
          background-attachment: fixed;
          background-repeat: no-repeat;
          background-size: cover;
          font-family: 'Poppins', sans-serif;
        }
        .fade-in {
          animation: fadeInApp 1.8s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes fadeInApp {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .scroll-to-top:active,
        .scroll-to-top:focus {
          outline: 2px solid #F7C59F;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
}