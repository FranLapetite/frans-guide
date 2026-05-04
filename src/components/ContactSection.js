import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const WHATSAPP_NUMBER = '33759752536'; // e.g. '33712345678' (no +, spaces, or leading zeros)

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
    <section className="fg-contact-page">
      <style>{`
        .fg-contact-page {
          padding-top: 80px;
          background: #fff;
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        /* ── Left panel ── */
        .fg-contact-left {
          padding: 80px 60px 80px 80px;
          background: #FAF8F5;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 24px;
          border-right: 1px solid #E8E3DC;
        }
        .fg-contact-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4A4845;
          font-weight: 400;
        }
        .fg-contact-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 52px);
          font-weight: 400;
          line-height: 1.1;
          color: #1C1C1C;
          margin: 0;
        }
        .fg-contact-title em {
          font-style: italic;
          color: #0F2C66;
        }
        .fg-contact-note {
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          line-height: 1.8;
          color: #4A4845;
          font-weight: 400;
          max-width: 360px;
        }
        .fg-contact-wa-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #0F2C66;
          font-weight: 500;
          border-bottom: 1px solid #E8E3DC;
          padding-bottom: 2px;
          text-decoration: none;
          align-self: flex-start;
          transition: border-color 0.2s;
        }
        .fg-contact-wa-link:hover { border-color: #0F2C66; color: #0F2C66; }

        /* ── Right panel (form) ── */
        .fg-contact-right {
          padding: 80px 80px 80px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .fg-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 480px;
        }
        .fg-form-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 400;
          color: #1C1C1C;
          margin: 0 0 4px;
        }
        .fg-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .fg-label {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #4A4845;
          font-weight: 400;
        }
        .fg-input,
        .fg-select,
        .fg-textarea {
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          color: #1C1C1C;
          font-weight: 400;
          background: transparent;
          border: none;
          border-bottom: 1px solid #E8E3DC;
          padding: 10px 0;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          transition: border-color 0.2s;
          appearance: none;
        }
        .fg-input:focus,
        .fg-select:focus,
        .fg-textarea:focus {
          border-bottom-color: #0F2C66;
        }
        .fg-textarea { resize: vertical; min-height: 100px; }
        .fg-form-error {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          color: #b33a3a;
          letter-spacing: 0.5px;
        }
        .fg-form-success {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          color: #0F2C66;
          letter-spacing: 0.5px;
        }
        .fg-form-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 4px;
        }
        .fg-submit-btn {
          background: #0F2C66;
          color: #fff;
          border: none;
          padding: 14px 32px;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 400;
          cursor: pointer;
          width: 100%;
          transition: opacity 0.2s;
        }
        .fg-submit-btn:hover:not(:disabled) { opacity: 0.85; }
        .fg-submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .fg-or-row {
          display: flex;
          align-items: center;
          gap: 16px;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          color: #4A4845;
          letter-spacing: 1px;
        }
        .fg-or-row::before, .fg-or-row::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #E8E3DC;
        }
        .fg-wa-btn {
          background: transparent;
          border: 1px solid #E8E3DC;
          color: #1C1C1C;
          padding: 13px 32px;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 400;
          cursor: pointer;
          width: 100%;
          transition: border-color 0.2s, color 0.2s;
        }
        .fg-wa-btn:hover { border-color: #0F2C66; color: #0F2C66; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .fg-contact-page { grid-template-columns: 1fr; }
          .fg-contact-left {
            padding: 60px 32px 48px;
            border-right: none;
            border-bottom: 1px solid #E8E3DC;
          }
          .fg-contact-right { padding: 48px 32px 64px; }
          .fg-form { max-width: 100%; }
        }
        @media (max-width: 480px) {
          .fg-contact-left { padding: 48px 24px 36px; }
          .fg-contact-right { padding: 36px 24px 56px; }
          .fg-contact-title { font-size: 36px; }
        }
      `}</style>

      {/* Left: headline */}
      <div className="fg-contact-left">
        <span className="fg-contact-eyebrow">{copy.pageTitle}</span>
        <h1 className="fg-contact-title">
          {language === 'fr' ? (
            <>Planifions votre<br/><em>Paris ensemble.</em></>
          ) : language === 'pt' ? (
            <>Vamos planejar<br/><em>seu Paris juntos.</em></>
          ) : language === 'es' ? (
            <>Planifiquemos<br/><em>tu París juntos.</em></>
          ) : (
            <>Let's plan your<br/><em>Paris together.</em></>
          )}
        </h1>
        <p className="fg-contact-note">{copy.contactNote}</p>
        <a
          href={`https://wa.me/33759752536?text=${encodeURIComponent(buildWhatsAppLink({name:'',email:'',tour:'',message:''}, language).split('text=')[1] || '')}`}
          target="_blank"
          rel="noreferrer"
          className="fg-contact-wa-link"
        >
          {copy.whatsappButton}
        </a>
      </div>

      {/* Right: form */}
      <div className="fg-contact-right">
        <form className="fg-form" onSubmit={handleSubmit} autoComplete="off" noValidate>
          <h2 className="fg-form-title">{copy.sectionTitle}</h2>

          <div className="fg-field">
            <label className="fg-label">{copy.nameLabel}</label>
            <input className="fg-input" type="text" name="name" value={form.name} onChange={handleChange} required disabled={submitting} autoComplete="off" />
          </div>

          <div className="fg-field">
            <label className="fg-label">{copy.emailLabel}</label>
            <input className="fg-input" type="email" name="email" value={form.email} onChange={handleChange} required disabled={submitting} autoComplete="off" />
          </div>

          <div className="fg-field">
            <label className="fg-label">{copy.tourLabel}</label>
            <select className="fg-select" name="tour" value={form.tour} onChange={handleChange} disabled={submitting}>
              {tourOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="fg-field">
            <label className="fg-label">{copy.messageLabel}</label>
            <textarea className="fg-textarea" name="message" value={form.message} onChange={handleChange} rows={4} required disabled={submitting} />
          </div>

          {error && <p className="fg-form-error" role="alert">{error}</p>}
          {success && <p className="fg-form-success" role="status">{success}</p>}

          <div className="fg-form-actions">
            <button className="fg-submit-btn" type="submit" disabled={submitting} aria-busy={submitting}>
              {submitting ? copy.submitSending : copy.submitIdle}
            </button>
            <div className="fg-or-row">{copy.orLabel}</div>
            <button
              type="button"
              className="fg-wa-btn"
              onClick={() => { window.open(buildWhatsAppLink(form, language), '_blank'); }}
              disabled={submitting}
            >
              {copy.whatsappButton}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;