import React, { useState } from 'react';

export default function PrivacyPolicy() {
  const [lang, setLang] = useState('fr');

  const content = {
    fr: {
      title: 'Politique de Confidentialité',
      updated: 'Dernière mise à jour : avril 2026',
      intro: "Fran's Guide s'engage à protéger vos données personnelles. Cette page explique quelles données nous collectons, comment nous les utilisons, et quels sont vos droits.",

      sections: [
        {
          title: '1. Responsable du traitement',
          body: `Françoise Lapetite, opérant sous le nom commercial Fran's Guide
Site web : fransguide.com
Application mobile : Fran's Guide (iOS & Android)
Contact : contact@fransguide.com`,
        },
        {
          title: '2. Données collectées',
          subsections: [
            {
              subtitle: 'Sur le site web (fransguide.com)',
              items: [
                'Formulaire de contact : nom, adresse e-mail, message — uniquement si vous choisissez de nous contacter.',
                'Préférence de langue : stockée localement dans votre navigateur (localStorage). Aucune donnée envoyée à nos serveurs.',
                'Aucun cookie de tracking, aucune publicité, aucun analytics tiers.',
              ],
            },
            {
              subtitle: "Sur l'application mobile (Fran's Guide)",
              items: [
                "Aucun compte utilisateur requis.",
                "Aucune donnée personnelle collectée par l'application.",
                "Localisation : utilisée uniquement localement sur votre appareil pour afficher votre position sur la carte, si vous l'autorisez. Elle n'est jamais transmise ni stockée par nos soins.",
                "Achats intégrés : traités directement par Apple (App Store) ou Google (Play Store), conformément à leurs propres politiques de confidentialité.",
              ],
            },
          ],
        },
        {
          title: '3. Finalité du traitement',
          body: `Les données du formulaire de contact sont utilisées uniquement pour :
• Répondre à votre demande ou votre question
• Organiser une visite ou une séance photo

Elles ne sont ni vendues, ni louées, ni partagées avec des tiers à des fins commerciales.`,
        },
        {
          title: '4. Services tiers',
          body: `• EmailJS (emailjs.com) : utilisé pour l'envoi des formulaires de contact. Vos données (nom, email, message) transitent par leurs serveurs. Politique de confidentialité : emailjs.com/legal/privacy-policy
• OpenStreetMap / CartoDB : utilisés pour l'affichage de la carte sur le site. Aucune donnée personnelle transmise.
• Apple App Store / Google Play Store : gestion des achats intégrés dans l'application, soumise à leurs propres conditions.`,
        },
        {
          title: '5. Durée de conservation',
          body: `Les messages reçus via le formulaire de contact sont conservés le temps nécessaire au traitement de votre demande, puis supprimés dans un délai de 12 mois maximum.`,
        },
        {
          title: '6. Vos droits (RGPD)',
          body: `Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
• Droit d'accès à vos données
• Droit de rectification
• Droit à l'effacement ("droit à l'oubli")
• Droit à la limitation du traitement
• Droit d'opposition

Pour exercer ces droits, contactez-nous à : contact@fransguide.com

Vous pouvez également introduire une réclamation auprès de la CNIL (cnil.fr).`,
        },
        {
          title: '7. Sécurité',
          body: `Nous mettons en œuvre les mesures techniques raisonnables pour protéger vos données contre tout accès non autorisé, perte ou divulgation.`,
        },
        {
          title: '8. Modifications',
          body: `Cette politique peut être mise à jour. La date de dernière modification est indiquée en haut de cette page. En continuant à utiliser le site ou l'application, vous acceptez les modifications.`,
        },
        {
          title: '9. Contact',
          body: `Pour toute question relative à cette politique :
E-mail : contact@fransguide.com
WhatsApp : +33 7 59 75 25 36`,
        },
      ],
    },

    en: {
      title: 'Privacy Policy',
      updated: 'Last updated: April 2026',
      intro: "Fran's Guide is committed to protecting your personal data. This page explains what data we collect, how we use it, and your rights.",

      sections: [
        {
          title: '1. Data Controller',
          body: `Françoise Lapetite, trading as Fran's Guide
Website: fransguide.com
Mobile app: Fran's Guide (iOS & Android)
Contact: contact@fransguide.com`,
        },
        {
          title: '2. Data We Collect',
          subsections: [
            {
              subtitle: 'On the website (fransguide.com)',
              items: [
                'Contact form: name, email address, message — only if you choose to contact us.',
                'Language preference: stored locally in your browser (localStorage). No data is sent to our servers.',
                'No tracking cookies, no advertising, no third-party analytics.',
              ],
            },
            {
              subtitle: "In the mobile app (Fran's Guide)",
              items: [
                'No user account required.',
                'No personal data collected by the app.',
                'Location: used locally on your device only to show your position on the map, if you grant permission. It is never transmitted or stored by us.',
                'In-app purchases: processed directly by Apple (App Store) or Google (Play Store), subject to their own privacy policies.',
              ],
            },
          ],
        },
        {
          title: '3. Purpose of Processing',
          body: `Contact form data is used solely to:
• Respond to your enquiry or question
• Organise a tour or photoshoot

It is never sold, rented, or shared with third parties for commercial purposes.`,
        },
        {
          title: '4. Third-Party Services',
          body: `• EmailJS (emailjs.com): used to process contact form submissions. Your data (name, email, message) passes through their servers. Privacy policy: emailjs.com/legal/privacy-policy
• OpenStreetMap / CartoDB: used to display the map on the website. No personal data transmitted.
• Apple App Store / Google Play Store: handles in-app purchases, subject to their own terms.`,
        },
        {
          title: '5. Data Retention',
          body: `Messages received via the contact form are kept for as long as necessary to handle your request, and deleted within a maximum of 12 months.`,
        },
        {
          title: '6. Your Rights (GDPR)',
          body: `Under the General Data Protection Regulation (GDPR), you have the following rights:
• Right of access to your data
• Right of rectification
• Right to erasure ("right to be forgotten")
• Right to restriction of processing
• Right to object

To exercise these rights, contact us at: contact@fransguide.com

You may also lodge a complaint with your local data protection authority (in France: cnil.fr).`,
        },
        {
          title: '7. Security',
          body: `We implement reasonable technical measures to protect your data against unauthorised access, loss, or disclosure.`,
        },
        {
          title: '8. Changes',
          body: `This policy may be updated. The date of the last modification is shown at the top of this page. By continuing to use the website or app, you accept any changes.`,
        },
        {
          title: '9. Contact',
          body: `For any questions about this policy:
Email: contact@fransguide.com
WhatsApp: +33 7 59 75 25 36`,
        },
      ],
    },
  };

  const c = content[lang];

  return (
    <>
      <style>{`
        .fg-privacy-page {
          padding-top: 80px;
          background: #fff;
          min-height: 100vh;
        }
        .fg-privacy-header {
          padding: 80px 80px 64px;
          border-bottom: 1px solid #E8E3DC;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 32px;
        }
        .fg-privacy-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4A4845;
          font-weight: 400;
          margin-bottom: 20px;
        }
        .fg-privacy-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 400;
          color: #1C1C1C;
          margin: 0 0 12px;
          line-height: 1.1;
        }
        .fg-privacy-updated {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          color: #4A4845;
          font-weight: 400;
        }
        .fg-privacy-lang-toggle {
          display: flex;
          gap: 0;
          border: 1px solid #E8E3DC;
          flex-shrink: 0;
          align-self: flex-start;
          margin-top: 8px;
        }
        .fg-privacy-lang-btn {
          padding: 8px 20px;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 400;
          cursor: pointer;
          border: none;
          background: transparent;
          color: #4A4845;
          transition: background 0.2s, color 0.2s;
        }
        .fg-privacy-lang-btn.active {
          background: #0F2C66;
          color: #fff;
        }
        .fg-privacy-body {
          max-width: 760px;
          padding: 64px 80px 80px;
        }
        .fg-privacy-intro {
          font-family: 'Jost', sans-serif;
          font-size: 15px;
          line-height: 1.85;
          color: #4A4845;
          margin: 0 0 48px;
        }
        .fg-privacy-section {
          margin-bottom: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid #E8E3DC;
        }
        .fg-privacy-section:last-child {
          border-bottom: none;
        }
        .fg-privacy-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 400;
          color: #1C1C1C;
          margin: 0 0 16px;
        }
        .fg-privacy-text {
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          line-height: 1.9;
          color: #4A4845;
          white-space: pre-line;
          margin: 0;
        }
        .fg-privacy-subsection {
          margin-top: 20px;
        }
        .fg-privacy-subsection-title {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #1C1C1C;
          font-weight: 500;
          margin: 0 0 12px;
        }
        .fg-privacy-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .fg-privacy-list li {
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          line-height: 1.75;
          color: #4A4845;
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .fg-privacy-list li::before {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: #0F2C66;
          flex-shrink: 0;
          margin-top: 11px;
        }
        @media (max-width: 900px) {
          .fg-privacy-header { padding: 60px 32px 48px; flex-direction: column; }
          .fg-privacy-body { padding: 48px 32px 64px; }
        }
        @media (max-width: 480px) {
          .fg-privacy-header { padding: 48px 24px 36px; }
          .fg-privacy-body { padding: 36px 24px 56px; }
        }
      `}</style>

      <div className="fg-privacy-page">
        <div className="fg-privacy-header">
          <div>
            <p className="fg-privacy-eyebrow">Legal</p>
            <h1 className="fg-privacy-title">{c.title}</h1>
            <p className="fg-privacy-updated">{c.updated}</p>
          </div>
          <div className="fg-privacy-lang-toggle">
            <button
              className={`fg-privacy-lang-btn${lang === 'fr' ? ' active' : ''}`}
              onClick={() => setLang('fr')}
            >FR</button>
            <button
              className={`fg-privacy-lang-btn${lang === 'en' ? ' active' : ''}`}
              onClick={() => setLang('en')}
            >EN</button>
          </div>
        </div>

        <div className="fg-privacy-body">
          <p className="fg-privacy-intro">{c.intro}</p>

          {c.sections.map((section, i) => (
            <div key={i} className="fg-privacy-section">
              <h2 className="fg-privacy-section-title">{section.title}</h2>
              {section.body && (
                <p className="fg-privacy-text">{section.body}</p>
              )}
              {section.subsections && section.subsections.map((sub, j) => (
                <div key={j} className="fg-privacy-subsection">
                  <p className="fg-privacy-subsection-title">{sub.subtitle}</p>
                  <ul className="fg-privacy-list">
                    {sub.items.map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
