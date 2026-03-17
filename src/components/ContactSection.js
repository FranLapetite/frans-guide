import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const WHATSAPP_NUMBER = '33679304002'; // e.g. '33712345678' (no +, spaces, or leading zeros)

const buildWhatsAppLink = (form, language = 'en') => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;

  const intros = {
    en: 'Hello Fran, I’d like to get in touch regarding a tour.',
    fr: 'Bonjour Fran, je souhaite vous contacter à propos d’un tour.',
    pt: 'Olá Fran, gostaria de entrar em contato sobre um tour.',
    es: 'Hola Fran, me gustaría ponerme en contacto contigo sobre un tour.',
  };

  const templates = {
    en: {
      name: (name) => (name ? `My name is ${name}.` : ''),
      type: (type) => (type ? `Request type: ${type}.` : ''),
      message: (msg) => (msg ? `Message: ${msg}` : ''),
      email: (email) => (email ? `You can also reach me at ${email}.` : ''),
    },
    fr: {
      name: (name) => (name ? `Je m'appelle ${name}.` : ''),
      type: (type) => (type ? `Type de demande : ${type}.` : ''),
      message: (msg) => (msg ? `Message : ${msg}` : ''),
      email: (email) => (email ? `Vous pouvez aussi me joindre à l'adresse ${email}.` : ''),
    },
    pt: {
      name: (name) => (name ? `Meu nome é ${name}.` : ''),
      type: (type) => (type ? `Tipo de pedido: ${type}.` : ''),
      message: (msg) => (msg ? `Mensagem: ${msg}` : ''),
      email: (email) => (email ? `Você também pode falar comigo pelo e-mail ${email}.` : ''),
    },
    es: {
      name: (name) => (name ? `Me llamo ${name}.` : ''),
      type: (type) => (type ? `Tipo de consulta: ${type}.` : ''),
      message: (msg) => (msg ? `Mensaje: ${msg}` : ''),
      email: (email) => (email ? `También puedes contactarme en ${email}.` : ''),
    },
  };

  const intro = intros[language] || intros.en;
  const t = templates[language] || templates.en;

  const bodyParts = [
    t.name(form.name),
    t.type(form.tour),
    t.message(form.message),
    t.email(form.email),
  ].filter(Boolean);

  const text = encodeURIComponent([intro, ...bodyParts].join(' '));
  return `${base}?text=${text}`;
};

const detectLanguageFromContent = (content) => {
  if (!content) return 'en';
  switch (content.contactTitle) {
    case 'Contact & Booking':
      return 'en';
    case 'Contact & Réservation':
      return 'fr';
    case 'Contato & Reserva':
      return 'pt';
    case 'Contacto & Reserva':
      return 'es';
    default:
      return 'en';
  }
};

const getTourOptions = (language) => {
  switch (language) {
    case 'fr':
      return [
        { value: '', label: 'Sélectionnez un type de demande (optionnel)' },
        { value: 'Réservation', label: 'Réservation' },
        { value: 'Renseignements', label: 'Renseignements' },
        { value: 'Demande sur mesure', label: 'Demande sur mesure' },
      ];
    case 'pt':
      return [
        { value: '', label: 'Escolha o tipo de pedido (opcional)' },
        { value: 'Reserva', label: 'Reserva' },
        { value: 'Dúvida', label: 'Dúvida' },
        { value: 'Pedido personalizado', label: 'Pedido personalizado' },
      ];
    case 'es':
      return [
        { value: '', label: 'Elige el tipo de consulta (opcional)' },
        { value: 'Reserva', label: 'Reserva' },
        { value: 'Pregunta', label: 'Pregunta' },
        { value: 'Solicitud a medida', label: 'Solicitud a medida' },
      ];
    default:
      return [
        { value: '', label: 'Select request type (optional)' },
        { value: 'Booking', label: 'Booking' },
        { value: 'Question', label: 'Question' },
        { value: 'Custom request', label: 'Custom request' },
      ];
  }
};

const getCopy = (language, content = {}) => {
  const pageTitles = {
    en: "Contact Fran’s Guide",
    fr: "Contactez Fran’s Guide",
    pt: "Contato Fran’s Guide",
    es: "Contacta con Fran’s Guide",
  };

  const sectionTitles = {
    en: 'Contact & Booking',
    fr: 'Contact & Réservation',
    pt: 'Contato & Reserva',
    es: 'Contacto & Reserva',
  };

  const orLabels = {
    en: 'or',
    fr: 'ou',
    pt: 'ou',
    es: 'o',
  };

  const whatsappLabels = {
    en: 'Chat on WhatsApp',
    fr: 'Discuter sur WhatsApp',
    pt: 'Conversar no WhatsApp',
    es: 'Chatear por WhatsApp',
  };

  const contactNotes = {
    en: "You can also reach me on Instagram @frans.guide — or tap the green button to chat on WhatsApp instantly.",
    fr: "Vous pouvez aussi me contacter sur Instagram @frans.guide — ou appuyer sur le bouton vert pour discuter instantanément sur WhatsApp.",
    pt: "Você também pode falar comigo pelo Instagram @frans.guide — ou tocar no botão verde para conversar comigo pelo WhatsApp.",
    es: "También puedes escribirme por Instagram @frans.guide — o tocar el botón verde para hablar conmigo por WhatsApp al instante.",
  };

  const validation = {
    en: {
      nameRequired: 'Please enter your name.',
      emailRequired: 'Please enter your email address.',
      emailInvalid: 'Please enter a valid email address.',
      messageRequired: 'Please enter your message.',
    },
    fr: {
      nameRequired: 'Veuillez indiquer votre nom.',
      emailRequired: 'Veuillez indiquer votre adresse e-mail.',
      emailInvalid: 'Veuillez saisir une adresse e-mail valide.',
      messageRequired: 'Veuillez écrire votre message.',
    },
    pt: {
      nameRequired: 'Por favor, escreva seu nome.',
      emailRequired: 'Por favor, informe seu e-mail.',
      emailInvalid: 'Por favor, informe um e-mail válido.',
      messageRequired: 'Por favor, escreva sua mensagem.',
    },
    es: {
      nameRequired: 'Por favor, escribe tu nombre.',
      emailRequired: 'Por favor, indica tu correo electrónico.',
      emailInvalid: 'Por favor, escribe un correo electrónico válido.',
      messageRequired: 'Por favor, escribe tu mensaje.',
    },
  };

  const submitLabels = {
    en: { idle: 'Send Message', sending: 'Sending...' },
    fr: { idle: 'Envoyer le message', sending: 'Envoi...' },
    pt: { idle: 'Enviar mensagem', sending: 'Enviando...' },
    es: { idle: 'Enviar mensaje', sending: 'Enviando...' },
  };

  const requestTypeLabels = {
    en: 'Type of request (optional)',
    fr: 'Type de demande (optionnel)',
    pt: 'Tipo de pedido (opcional)',
    es: 'Tipo de consulta (opcional)',
  };

  const lang = validation[language] ? language : 'en';

  return {
    pageTitle: pageTitles[lang],
    sectionTitle: sectionTitles[lang],
    nameLabel: content.contactName || (lang === 'fr' ? 'Nom' : lang === 'pt' ? 'Nome' : lang === 'es' ? 'Nombre' : 'Name'),
    emailLabel: content.contactEmail || (lang === 'fr' ? 'E-mail' : lang === 'pt' ? 'Email' : lang === 'es' ? 'Correo electrónico' : 'Email'),
    tourLabel: requestTypeLabels[lang],
    messageLabel: content.contactMessage || (lang === 'fr' ? 'Message' : lang === 'pt' ? 'Mensagem' : lang === 'es' ? 'Mensaje' : 'Message'),
    submitIdle: submitLabels[lang].idle,
    submitSending: submitLabels[lang].sending,
    successMessage: content.contactSuccess || (lang === 'fr' ? "Merci ! Votre message a bien été envoyé." : lang === 'pt' ? 'Obrigada! Sua mensagem foi enviada com sucesso.' : lang === 'es' ? '¡Gracias! Tu mensaje ha sido enviado.' : 'Thank you! Your message has been sent.'),
    errorMessage: content.contactError || (lang === 'fr' ? "Désolé, une erreur s'est produite lors de l'envoi. Veuillez essayer d'envoyer un e-mail directement." : lang === 'pt' ? 'Desculpe, houve um erro ao enviar sua mensagem. Tente enviar um email diretamente.' : lang === 'es' ? 'Lo sentimos, hubo un error al enviar tu mensaje. Por favor, intenta enviar un correo electrónico directamente.' : 'Sorry, there was an error sending your message. Please try emailing directly.'),
    orLabel: orLabels[lang],
    whatsappButton: whatsappLabels[lang],
    contactNote: contactNotes[lang],
    validation: validation[lang],
  };
};

function ContactSection({ content }) {
  const language = detectLanguageFromContent(content || {});
  const tourOptions = getTourOptions(language);
  const copy = getCopy(language, content || {});

  const [form, setForm] = useState({
    name: '',
    email: '',
    tour: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError('');
    setSuccess('');
  };

  const validate = () => {
    if (!form.name.trim()) return copy.validation.nameRequired;
    if (!form.email.trim()) return copy.validation.emailRequired;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return copy.validation.emailInvalid;
    if (!form.message.trim()) return copy.validation.messageRequired;
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setSuccess('');
      return;
    }
    setSubmitting(true);
    setError('');
    setSuccess('');
    const templateParams = {
      name: form.name,
      email: form.email,
      tour: form.tour || 'No tour selected',
      message: form.message,
      time: new Date().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short' }),
    };
    emailjs
      .send(
        'service_vq7gy4f',
        'template_tcbtep4',
        templateParams,
        '4w8bZ_pf2uI9qJWPj'
      )
      .then(
        () => {
          setSubmitting(false);
          setSuccess(copy.successMessage);
          setForm({ name: '', email: '', tour: '', message: '' });
        },
        (err) => {
          setSubmitting(false);
          setError(copy.errorMessage);
        }
      );
  };

  return (
    <section
      className="contact-page"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f9f3ed 100%)',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem 4rem',
        fontFamily: "'Poppins', sans-serif",
        color: '#4a5875',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
    >
      <style>{`
        @media (max-width: 480px) {
          h1.page-title {
            font-size: 2rem;
            margin-bottom: 1.1rem;
          }
          .form-container {
            padding: 2rem 1.4rem;
            border-radius: 12px;
          }
          h2 {
            font-size: 1.7rem;
          }
          label {
            font-size: 0.9rem;
          }
          .cta-button,
          .whatsapp-button {
            font-size: 1rem;
            padding: 0.75rem 1.6rem;
          }
          p.contact-note {
            font-size: 0.8rem;
            padding: 0 0.5rem 0.5rem;
          }
          .contact-page {
            padding: 1.5rem 1rem 3rem;
          }
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        h1.page-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.4rem;
          color: #1E2A5E;
          margin-bottom: 1.5rem;
          font-weight: 700;
          text-align: center;
          user-select: none;
        }
        .form-container {
          background: #ffffff;
          border-radius: 14px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.04);
          max-width: 520px;
          width: 100%;
          padding: 2.5rem 2.5rem;
          box-sizing: border-box;
          animation: fadeUp 1s ease forwards;
          font-family: 'Poppins', sans-serif;
          color: #4a5875;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          color: #1E2A5E;
          margin-bottom: 1.2rem;
          font-weight: 700;
          text-align: center;
        }
        label {
          display: block;
          width: 100%;
          margin-bottom: 1.25rem;
          font-weight: 600;
          color: #4a5875;
          font-family: 'Poppins', sans-serif;
          font-size: 0.95rem;
          user-select: none;
        }
        input[type="text"],
        input[type="email"],
        select,
        textarea {
          width: 100%;
          background: #f7f8fa;
          border: 1.5px solid transparent;
          border-radius: 10px;
          padding: 0.75rem 1rem;
          font-family: 'Poppins', sans-serif;
          font-size: 0.95rem;
          color: #4a5875;
          transition: border-color 0.3s ease;
          resize: vertical;
          box-sizing: border-box;
        }
        input[type="text"]:focus,
        input[type="email"]:focus,
        select:focus,
        textarea:focus {
          outline: none;
          border-color: #1E2A5E;
          background: #f7f8fa;
        }
        input[type="text"]:hover,
        input[type="email"]:hover,
        select:hover,
        textarea:hover {
          background-color: #f2f3f5;
        }
        .form-error {
          color: #b33a3a;
          background: #f9d6d6;
          border-radius: 8px;
          padding: 0.6rem 1rem;
          margin-bottom: 1rem;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          box-shadow: inset 0 1px 3px rgba(179, 58, 58, 0.2);
          width: 100%;
          text-align: center;
        }
        .form-success {
          color: #1E2A5E;
          background: #e6e9f0;
          border-radius: 8px;
          padding: 0.6rem 1rem;
          margin-bottom: 1rem;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          box-shadow: none;
          width: 100%;
          text-align: center;
        }
        .cta-button {
          background: #1E2A5E;
          border: none;
          border-radius: 8px;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 700;
          padding: 0.85rem 2.2rem;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
          font-family: 'Poppins', sans-serif;
          user-select: none;
          width: 100%;
          margin-top: 0.5rem;
          box-sizing: border-box;
          text-align: center;
          display: inline-block;
        }
        .cta-button:hover:not(:disabled) {
          background-color: #14204B;
          transform: translateY(-3px);
        }
        .cta-button:disabled {
          cursor: not-allowed;
          opacity: 0.7;
          background-color: #1E2A5E;
          transform: none;
        }
        p.contact-note {
          margin-top: 1rem;
          font-family: 'Poppins', sans-serif;
          font-size: 0.85rem;
          color: #5a5a5a;
          text-align: center;
          user-select: none;
          max-width: 600px;
          padding: 0 1rem;
        }
        @media (min-width: 651px) {
          .form-container {
            padding: 4rem 3rem;
          }
        }
        @media (max-width: 650px) {
          .form-container {
            padding: 2.5rem 2rem;
          }
        }
        .whatsapp-button {
          background: #25D366;
          border: none;
          border-radius: 8px;
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 700;
          padding: 0.8rem 2rem;
          cursor: pointer;
          transition: transform 0.2s ease, filter 0.2s ease;
          font-family: 'Poppins', sans-serif;
          user-select: none;
          width: 100%;
          margin-top: 0.75rem;
          box-sizing: border-box;
          text-align: center;
          display: inline-block;
        }
        .whatsapp-button:hover {
          filter: brightness(0.95);
          transform: translateY(-2px);
        }
        .or-divider {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin: 0.75rem 0 0.25rem;
          color: #7a889f;
          font-size: 0.85rem;
        }
        .or-divider::before,
        .or-divider::after {
          content: '';
          height: 1px;
          background: #e5e9f2;
          flex: 1;
        }
      `}</style>
      <h1 className="page-title">{copy.pageTitle}</h1>
      <div className="form-container">
        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off" noValidate>
          <h2>{copy.sectionTitle}</h2>
          <label>
            {copy.nameLabel}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              disabled={submitting}
              autoComplete="off"
            />
          </label>
          <label>
            {copy.emailLabel}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={submitting}
              autoComplete="off"
            />
          </label>
          <label>
            {copy.tourLabel}
            <select
              name="tour"
              value={form.tour}
              onChange={handleChange}
              disabled={submitting}
            >
              {tourOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            {copy.messageLabel}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              disabled={submitting}
            />
          </label>
          {error && <div className="form-error" role="alert">{error}</div>}
          {success && <div className="form-success" role="status">{success}</div>}
          <button
            className="cta-button"
            type="submit"
            disabled={submitting}
            aria-busy={submitting}
          >
            {submitting ? copy.submitSending : copy.submitIdle}
          </button>
          <div className="or-divider">{copy.orLabel}</div>
          <button
            type="button"
            className="whatsapp-button"
            onClick={() => {
              const link = buildWhatsAppLink(form, language);
              window.open(link, '_blank');
            }}
            disabled={submitting}
            aria-label={copy.whatsappButton}
          >
            {copy.whatsappButton}
          </button>
        </form>
      </div>
      <p className="contact-note">
        {copy.contactNote}
      </p>
    </section>
  );
}

export default ContactSection;