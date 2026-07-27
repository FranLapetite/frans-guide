import React, { useState } from 'react';

const APP_STORE_URL = 'https://apps.apple.com/fr/app/frans-guide/id6762883412?l=en-GB';

const TEXTS = {
  en: {
    eyebrow: 'Good to know',
    title: <>Frequently asked<br/><em>questions.</em></>,
    faqs: [
      {
        q: "What tours does Fran's Guide offer in Paris?",
        a: "Fran's Guide offers private guided walking tours across Paris: the Eiffel Tower, Notre-Dame and the Latin Quarter, Montmartre, Le Marais, the Louvre and Tuileries, the Seine riverbanks and many more. Tours start at 40€ per person and are available in English, French, Portuguese, and Spanish.",
      },
      {
        q: "What is the Fran's Guide audio tour app?",
        a: "It's a mobile app with GPS-guided audio tours of Paris, written and narrated from real guiding experience. Walk at your own pace while the app tells you the stories behind each stop, with an interactive map that follows your route in real time. Tours include the Eiffel Tower, Notre-Dame, Le Marais and Montmartre, in English and French, from 7,99€.",
        appLink: true,
      },
      {
        q: "What makes Fran's Guide different from other audio guides?",
        a: "The AI guide built into the app. Classic audio guides only play a recording; Fran's Guide also lets you ask questions during your tour and answers them in real time, about the monument in front of you, the history of the neighborhood, or anything you're curious about. It's like having a real guide walking beside you, available at any moment of your visit.",
        appLink: true,
      },
      {
        q: 'Can I book a professional photoshoot in Paris?',
        a: "Yes! Fran is also a professional photographer. A photoshoot at the most beautiful spots in Paris costs 120€ (flat rate, 1 hour) and includes 20 to 40 edited photos, for couples, solo travelers, weddings, engagements, birthdays and content creation. You can also add a private guided tour to your session for 30€.",
      },
      {
        q: 'In which languages are the tours available?',
        a: 'All private tours are available in French, English, Portuguese, and Spanish. The audio tour app is available in English and French.',
      },
      {
        q: 'How do I book a tour or a photoshoot?',
        a: 'The fastest way is WhatsApp: tap any booking button on the site and your message is pre-filled. You can also use the contact form or reach out on Instagram @frans.guide. Fran usually replies quickly.',
      },
      {
        q: 'What happens if it rains on the day of my tour or photoshoot?',
        a: 'Tours run in most weather, and Paris under the rain has its own charm. In case of severe weather affecting safety or the experience, your tour or photoshoot can be rescheduled or refunded.',
      },
    ],
    appCta: 'Download the app',
  },
  fr: {
    eyebrow: 'Bon à savoir',
    title: <>Questions<br/><em>fréquentes.</em></>,
    faqs: [
      {
        q: "Quelles visites propose Fran's Guide à Paris ?",
        a: "Fran's Guide propose des visites guidées privées à pied dans tout Paris : Tour Eiffel, Notre-Dame et Quartier Latin, Montmartre, Le Marais, Louvre et Tuileries, bords de Seine et bien d'autres. Les visites démarrent à 40€ par personne et sont disponibles en français, anglais, portugais et espagnol.",
      },
      {
        q: "Qu'est-ce que l'application de visites audio Fran's Guide ?",
        a: "C'est une application mobile de visites audio guidées par GPS à Paris, écrites et racontées à partir d'une vraie expérience de guide. Marchez à votre rythme pendant que l'application vous raconte les histoires de chaque étape, avec une carte interactive qui suit votre parcours en temps réel. Les visites incluent la Tour Eiffel, Notre-Dame, Le Marais et Montmartre, en anglais et en français, à partir de 7,99€.",
        appLink: true,
      },
      {
        q: "Qu'est-ce qui différencie Fran's Guide des autres audioguides ?",
        a: "Le guide IA intégré à l'application. Les audioguides classiques se contentent de jouer un enregistrement ; avec Fran's Guide, vous pouvez aussi poser vos questions pendant la visite et obtenir une réponse en temps réel, sur le monument devant vous, l'histoire du quartier, ou tout ce qui vous intrigue. C'est comme avoir un vrai guide qui marche à vos côtés, disponible à chaque instant de votre visite.",
        appLink: true,
      },
      {
        q: 'Puis-je réserver une séance photo professionnelle à Paris ?',
        a: "Oui ! Fran est aussi photographe professionnelle. Une séance photo dans les plus beaux endroits de Paris coûte 120€ (forfait, 1 heure) et comprend 20 à 40 photos retouchées, pour les couples, voyageurs solo, mariages, fiançailles, anniversaires et création de contenu. Vous pouvez aussi ajouter une visite guidée privée à votre séance pour 30€.",
      },
      {
        q: 'Dans quelles langues les visites sont-elles disponibles ?',
        a: "Toutes les visites privées sont disponibles en français, anglais, portugais et espagnol. L'application de visites audio est disponible en anglais et en français.",
      },
      {
        q: 'Comment réserver une visite ou une séance photo ?',
        a: "Le plus rapide est WhatsApp : appuyez sur n'importe quel bouton de réservation du site et votre message est pré-rempli. Vous pouvez aussi utiliser le formulaire de contact ou écrire sur Instagram @frans.guide. Fran répond généralement rapidement.",
      },
      {
        q: "Que se passe-t-il s'il pleut le jour de ma visite ou de ma séance photo ?",
        a: 'Les visites ont lieu par presque tous les temps, et Paris sous la pluie a son propre charme. En cas de conditions météo sévères affectant la sécurité ou l\'expérience, votre visite ou séance photo peut être reportée ou remboursée.',
      },
    ],
    appCta: "Télécharger l'application",
  },
  pt: {
    eyebrow: 'Bom saber',
    title: <>Perguntas<br/><em>frequentes.</em></>,
    faqs: [
      {
        q: "Quais tours o Fran's Guide oferece em Paris?",
        a: "O Fran's Guide oferece tours guiados privados a pé por toda Paris: Torre Eiffel, Notre-Dame e Quartier Latin, Montmartre, Le Marais, Louvre e Tuileries, margens do Sena e muito mais. Os tours começam em 40€ por pessoa e estão disponíveis em português, francês, inglês e espanhol.",
      },
      {
        q: "O que é o aplicativo de tours de áudio Fran's Guide?",
        a: "É um aplicativo mobile com tours de áudio guiados por GPS em Paris, escritos e narrados a partir de experiência real como guia. Caminhe no seu ritmo enquanto o aplicativo conta as histórias de cada parada, com um mapa interativo que acompanha seu trajeto em tempo real. Os tours incluem a Torre Eiffel, Notre-Dame, Le Marais e Montmartre, em inglês e francês, a partir de 7,99€.",
        appLink: true,
      },
      {
        q: "O que torna o Fran's Guide diferente dos outros audioguias?",
        a: "O guia de IA integrado ao aplicativo. Audioguias comuns apenas tocam uma gravação; com o Fran's Guide, você também pode fazer perguntas durante o tour e receber respostas em tempo real, sobre o monumento à sua frente, a história do bairro, ou qualquer curiosidade. É como ter um guia de verdade caminhando ao seu lado, disponível a qualquer momento da sua visita.",
        appLink: true,
      },
      {
        q: 'Posso reservar um ensaio fotográfico profissional em Paris?',
        a: 'Sim! Fran também é fotógrafa profissional. Um ensaio nos lugares mais bonitos de Paris custa 120€ (pacote, 1 hora) e inclui de 20 a 40 fotos editadas, para casais, viajantes solo, casamentos, noivados, aniversários e criação de conteúdo. Você também pode adicionar um tour guiado privado à sua sessão por 30€.',
      },
      {
        q: 'Em quais idiomas os tours estão disponíveis?',
        a: 'Todos os tours privados estão disponíveis em português, francês, inglês e espanhol. O aplicativo de tours de áudio está disponível em inglês e francês.',
      },
      {
        q: 'Como reservo um tour ou um ensaio fotográfico?',
        a: 'O jeito mais rápido é o WhatsApp: toque em qualquer botão de reserva do site e sua mensagem já vem pronta. Você também pode usar o formulário de contato ou falar pelo Instagram @frans.guide. Fran costuma responder rápido.',
      },
      {
        q: 'O que acontece se chover no dia do meu tour ou ensaio?',
        a: 'Os tours acontecem em quase qualquer clima, e Paris na chuva tem seu próprio charme. Em caso de condições severas que afetem a segurança ou a experiência, seu tour ou ensaio pode ser remarcado ou reembolsado.',
      },
    ],
    appCta: 'Baixar o app',
  },
  es: {
    eyebrow: 'Bueno saberlo',
    title: <>Preguntas<br/><em>frecuentes.</em></>,
    faqs: [
      {
        q: "¿Qué tours ofrece Fran's Guide en París?",
        a: "Fran's Guide ofrece tours guiados privados a pie por todo París: Torre Eiffel, Notre-Dame y Barrio Latino, Montmartre, Le Marais, Louvre y Tuileries, orillas del Sena y muchos más. Los tours empiezan en 40€ por persona y están disponibles en español, francés, inglés y portugués.",
      },
      {
        q: "¿Qué es la app de tours de audio Fran's Guide?",
        a: "Es una app móvil con tours de audio guiados por GPS en París, escritos y narrados desde la experiencia real como guía. Camina a tu ritmo mientras la app te cuenta las historias de cada parada, con un mapa interactivo que sigue tu ruta en tiempo real. Los tours incluyen la Torre Eiffel, Notre-Dame, Le Marais y Montmartre, en inglés y francés, desde 7,99€.",
        appLink: true,
      },
      {
        q: "¿Qué hace diferente a Fran's Guide de otras audioguías?",
        a: "El guía de IA integrado en la app. Las audioguías clásicas solo reproducen una grabación; con Fran's Guide también puedes hacer preguntas durante tu tour y recibir respuestas en tiempo real, sobre el monumento frente a ti, la historia del barrio, o cualquier curiosidad. Es como tener un guía de verdad caminando a tu lado, disponible en cada momento de tu visita.",
        appLink: true,
      },
      {
        q: '¿Puedo reservar una sesión de fotos profesional en París?',
        a: '¡Sí! Fran también es fotógrafa profesional. Una sesión en los lugares más bonitos de París cuesta 120€ (tarifa fija, 1 hora) e incluye de 20 a 40 fotos editadas, para parejas, viajeros en solitario, bodas, compromisos, cumpleaños y creación de contenido. También puedes añadir un tour guiado privado a tu sesión por 30€.',
      },
      {
        q: '¿En qué idiomas están disponibles los tours?',
        a: 'Todos los tours privados están disponibles en español, francés, inglés y portugués. La app de tours de audio está disponible en inglés y francés.',
      },
      {
        q: '¿Cómo reservo un tour o una sesión de fotos?',
        a: 'Lo más rápido es WhatsApp: toca cualquier botón de reserva del sitio y tu mensaje ya está listo. También puedes usar el formulario de contacto o escribir por Instagram @frans.guide. Fran suele responder rápido.',
      },
      {
        q: '¿Qué pasa si llueve el día de mi tour o sesión de fotos?',
        a: 'Los tours se realizan con casi cualquier clima, y París bajo la lluvia tiene su propio encanto. En caso de condiciones severas que afecten la seguridad o la experiencia, tu tour o sesión puede reprogramarse o reembolsarse.',
      },
    ],
    appCta: 'Descargar la app',
  },
};

function FAQ({ language = 'en' }) {
  const t = TEXTS[language] || TEXTS.en;
  const [openIndex, setOpenIndex] = useState(0);

  // Structured data so Google can show these questions directly in search results
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  });

  return (
    <section className="fg-faq">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <style>{`
        .fg-faq {
          padding: 100px 80px;
          background: #fff;
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 80px;
          align-items: start;
        }
        .fg-faq-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4A4845;
          font-weight: 400;
          margin: 0 0 12px;
        }
        .fg-faq-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 3.5vw, 46px);
          font-weight: 400;
          line-height: 1.15;
          color: #1C1C1C;
          margin: 0;
        }
        .fg-faq-title em { font-style: italic; color: #0F2C66; }
        .fg-faq-list {
          display: flex;
          flex-direction: column;
        }
        .fg-faq-item {
          border-bottom: 1px solid #E8E3DC;
        }
        .fg-faq-item:first-child {
          border-top: 1px solid #E8E3DC;
        }
        .fg-faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          background: none;
          border: none;
          text-align: left;
          padding: 24px 0;
          cursor: pointer;
          font-family: 'Cormorant Garamond', serif;
          font-size: 21px;
          font-weight: 400;
          color: #1C1C1C;
          line-height: 1.3;
          transition: color 0.2s;
        }
        .fg-faq-question:hover { color: #0F2C66; }
        .fg-faq-icon {
          font-family: 'Jost', sans-serif;
          font-size: 20px;
          font-weight: 300;
          color: #0F2C66;
          flex-shrink: 0;
          line-height: 1;
          transition: transform 0.25s;
        }
        .fg-faq-item.open .fg-faq-icon { transform: rotate(45deg); }
        .fg-faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .fg-faq-item.open .fg-faq-answer { max-height: 400px; }
        .fg-faq-answer-inner {
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          line-height: 1.85;
          color: #4A4845;
          font-weight: 400;
          padding: 0 40px 24px 0;
        }
        .fg-faq-app-link {
          display: inline-block;
          margin-top: 12px;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #0F2C66;
          text-decoration: none;
          border-bottom: 1px solid #E8E3DC;
          padding-bottom: 2px;
          font-weight: 400;
          cursor: pointer;
          transition: border-color 0.2s;
        }
        .fg-faq-app-link:hover { border-color: #0F2C66; }
        @media (max-width: 900px) {
          .fg-faq { grid-template-columns: 1fr; padding: 72px 32px; gap: 40px; }
        }
        @media (max-width: 480px) {
          .fg-faq { padding: 56px 24px; }
          .fg-faq-question { font-size: 19px; padding: 20px 0; }
          .fg-faq-answer-inner { padding-right: 16px; }
        }
      `}</style>

      <div>
        <p className="fg-faq-eyebrow">{t.eyebrow}</p>
        <h2 className="fg-faq-title">{t.title}</h2>
      </div>

      <div className="fg-faq-list">
        {t.faqs.map((f, i) => (
          <div key={i} className={`fg-faq-item${openIndex === i ? ' open' : ''}`}>
            <button
              className="fg-faq-question"
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              aria-expanded={openIndex === i}
            >
              {f.q}
              <span className="fg-faq-icon">+</span>
            </button>
            <div className="fg-faq-answer">
              <div className="fg-faq-answer-inner">
                {f.a}
                {f.appLink && (
                  <>
                    <br/>
                    <a
                      href={APP_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fg-faq-app-link"
                    >
                      {t.appCta} →
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
