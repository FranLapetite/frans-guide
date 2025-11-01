

import React from 'react';

function CGV() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500&display=swap');

        .cgv-container {
          background-color: #FFFFFF;
          color: #000000;
          font-family: 'Poppins', sans-serif;
          max-width: 1000px;
          margin: 0 auto 4rem;
          padding: 8rem 3rem 6rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          border-radius: 12px;
        }
        h1, h2 {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          text-transform: uppercase;
          color: #1E2A5E;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 2.5rem;
          text-align: center;
        }
        h2 {
          font-size: 2rem;
          margin-top: 3rem;
          margin-bottom: 1.25rem;
          border-bottom: 3px solid #1E2A5E;
          padding-bottom: 0.5rem;
        }
        p, li {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.25rem;
          color: #000000;
        }
        ul, ol {
          padding-left: 1.3rem;
          margin-bottom: 1.25rem;
        }
        .small {
          font-size: 0.95rem;
          color: #333;
        }
      `}</style>

      <main className="cgv-container" role="main" aria-labelledby="cgv-title">
        <h1 id="cgv-title">Conditions Générales de Vente (CGV)</h1>

        <p><strong>Éditeur / Vendeur&nbsp;:</strong> Fran’s Guide — Auto-entrepreneur — SIRET&nbsp;: 932&nbsp;037&nbsp;823&nbsp;00014 — Adresse&nbsp;: Paris, France — Email&nbsp;: <a href="mailto:contact@fransguide.com">contact@fransguide.com</a> — Responsable de la publication&nbsp;: Françoise Lapetite. TVA non applicable, article 293 B du CGI.</p>

        <h2>Objet</h2>
        <p>Les présentes Conditions Générales de Vente (ci-après «&nbsp;CGV&nbsp;») régissent les ventes de prestations de services de visites guidées et expériences culturelles proposées par Fran’s Guide (ci-après «&nbsp;le Vendeur&nbsp;») aux consommateurs (ci-après «&nbsp;le Client&nbsp;»).</p>

        <h2>Descriptions des prestations</h2>
        <p>Les prestations consistent en des visites guidées à Paris (privées ou en petits groupes), éventuellement thématiques (quartiers, musées, photographie, balades nocturnes, etc.). Le contenu détaillé, la durée, le lieu de rendez-vous, la langue et le niveau de marche sont indiqués sur la page de présentation de chaque visite ou communiqués par email.</p>

        <h2>Tarifs</h2>
        <p>Les prix sont exprimés en euros (EUR) et indiqués par visite. Fran’s Guide exerce sous le régime de l’auto‑entrepreneur&nbsp;: <strong>TVA non applicable (art. 293 B du CGI)</strong>. Les éventuels billets d’entrée (musées, monuments, transport, consommations) ne sont pas inclus sauf mention contraire.</p>

        <h2>Réservation — Conclusion du contrat</h2>
        <p>La réservation peut s’effectuer en ligne (via le site ou un lien de paiement), par email ou message. Le contrat est conclu à réception d’une confirmation écrite (email) et, le cas échéant, du paiement demandé (acompte ou totalité). Toute commande vaut acceptation sans réserve des présentes CGV.</p>

        <h2>Paiement</h2>
        <p>Les modalités de paiement acceptées sont précisées lors de la réservation (carte, virement, espèces, plateformes sécurisées). Sauf accord contraire, le paiement intégral est exigé au plus tard au début de la visite. En cas de paiement en devise étrangère, les frais de conversion/banque sont à la charge du Client.</p>

        <h2>Droit de rétractation</h2>
        <p>Conformément à l’article L221‑28, 12° du Code de la consommation, le droit de rétractation ne s’applique pas aux prestations de services d’activités de loisirs qui doivent être fournies à une date ou à une période déterminée. Les réservations de visites datées ne sont donc pas soumises au délai de 14 jours.</p>

        <h2>Annulation &amp; modifications</h2>
        <p><strong>Par le Client&nbsp;:</strong> toute demande d’annulation doit être formulée par écrit (email). Sauf mention spécifique sur la fiche de la visite, la politique suivante s’applique&nbsp;:</p>
        <ul>
          <li>Annulation ≥ 72h avant l’horaire de départ&nbsp;: remboursement intégral.</li>
          <li>Entre 24h et 72h&nbsp;: remboursement à 50%.</li>
          <li>&lt; 24h ou non‑présentation («&nbsp;no‑show&nbsp;») : non remboursable.</li>
        </ul>
        <p>Les demandes de changement d’horaire/date sont acceptées dans la limite des disponibilités et peuvent entraîner des frais.</p>
        <p><strong>Par le Vendeur&nbsp;:</strong> en cas d’annulation du fait de Fran’s Guide (empêchement, sécurité, indisponibilité), le Client est remboursé intégralement. Lorsque cela est possible, une date alternative ou une solution équivalente est proposée, avec l’accord du Client.</p>

        <h2>Retards, météo &amp; force majeure</h2>
        <p>Les visites se déroulent par tous les temps (pluie légère, froid, chaleur). En cas de conditions exceptionnelles affectant la sécurité ou la faisabilité (manifestations, intempéries sévères, fermeture exceptionnelle), la visite peut être reportée ou annulée avec remboursement.</p>
        <p>Une tolérance de retard raisonnable est appliquée (10 minutes pour les visites groupées, 15 minutes pour les privées). Au‑delà, la visite commence/continue afin de respecter les autres participants, et peut être considérée comme «&nbsp;no‑show&nbsp;» sans remboursement.</p>

        <h2>Obligations du Client</h2>
        <p>Le Client s’engage à disposer d’une condition physique compatible avec la marche annoncée, à respecter les consignes du guide et les règles en vigueur dans les lieux visités. Les mineurs doivent être accompagnés d’un adulte responsable. Le Client reste responsable de ses effets personnels.</p>

        <h2>Responsabilité</h2>
        <p>Fran’s Guide met tout en œuvre pour assurer la qualité et la sécurité des prestations. La responsabilité ne peut être engagée pour des faits imputables au Client, à un tiers étranger à la prestation, ou en cas de force majeure. Fran’s Guide n’est pas responsable des décisions des autorités/localités (fermetures, restrictions d’accès). Une assurance personnelle (santé/accident/RC) est recommandée.</p>

        <h2>Propriété intellectuelle</h2>
        <p>Les contenus remis ou présentés durant les visites (textes, itinéraires, supports, photos) sont protégés par le droit d’auteur. Toute reproduction ou diffusion sans autorisation est interdite. Sauf opposition expresse du Client, des prises de vue d’ambiance (sans identification directe) peuvent être utilisées à des fins de communication de Fran’s Guide.</p>

        <h2>Données personnelles</h2>
        <p>Les données collectées lors des réservations (nom, coordonnées, préférences) servent exclusivement au traitement de la demande et au suivi de la relation client. Elles sont conservées pour une durée maximale de 12 mois, puis supprimées ou anonymisées. Conformément au RGPD, vous disposez de droits d’accès, de rectification, d’opposition et d’effacement en écrivant à <a href="mailto:contact@fransguide.com">contact@fransguide.com</a>. Pour plus d’informations, se reporter à la page «&nbsp;Mentions Légales&nbsp;».</p>

        <h2>Médiation &amp; réclamations</h2>
        <p>En cas de litige, le Client s’adressera d’abord à Fran’s Guide pour une résolution amiable. À défaut, le Client peut saisir gratuitement un médiateur de la consommation&nbsp;: Médiation Tourisme et Voyage (MTV) — <a href="https://www.mtv.travel" target="_blank" rel="noopener noreferrer">www.mtv.travel</a>. Plateforme européenne de règlement en ligne des litiges (RLL)&nbsp;: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>.</p>

        <h2>Droit applicable &amp; juridiction</h2>
        <p>Les présentes CGV sont régies par le droit français. En l’absence d’accord amiable, les tribunaux français compétents seront saisis conformément aux règles de droit commun. Le consommateur peut, le cas échéant, saisir la juridiction de son lieu de domicile.</p>

        <p className="small"><em>Dernière mise à jour&nbsp;: 28/10/2025.</em></p>
      </main>
    </>
  );
}

export default CGV;