import React from 'react';

function MentionsLegales() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poppins&display=swap');

        .mentions-container {
          background-color: #FFFFFF;
          color: #1E2A5E;
          font-family: 'Poppins', sans-serif;
          max-width: 800px;
          margin: 2rem auto;
          padding: 2rem 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(30, 42, 94, 0.1);
        }
        h1, h2 {
          font-family: 'Playfair Display', serif;
          margin-bottom: 0.5rem;
          font-weight: 700;
          color: #1E2A5E;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        h2 {
          font-size: 1.75rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          border-bottom: 2px solid #1E2A5E;
          padding-bottom: 0.3rem;
        }
        p, ul {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        a {
          color: #1E2A5E;
          text-decoration: underline;
        }
        a:hover {
          text-decoration: none;
        }
      `}</style>

      <main className="mentions-container" role="main" aria-labelledby="mentions-title">
        <h1 id="mentions-title">Mentions Légales</h1>

        <h2>Éditeur du site</h2>
        <p><strong>Nom :</strong> Fran’s Guide</p>
        <p><strong>Statut :</strong> Auto-entrepreneur</p>
        <p><strong>Adresse :</strong> Paris, France</p>
        <p><strong>Email :</strong> <a href="mailto:contact@fransguide.com">contact@fransguide.com</a></p>
        <p><strong>Site :</strong> <a href="https://fransguide.com">https://fransguide.com</a></p>
        <p><strong>Responsable de la publication :</strong> Françoise Lapetite</p>
        <p><strong>SIRET :</strong> 932 037 823 00014</p>
        <p><strong>TVA intracommunautaire :</strong> TVA non applicable, article 293 B du CGI</p>

        <h2>Hébergement du site</h2>
        <p><strong>Hébergeur :</strong> GitHub Pages (GitHub, Inc.)</p>
        <p><strong>Adresse :</strong> 88 Colin P. Kelly Jr Street, San Francisco, CA 94107, États-Unis</p>
        <p><strong>Site :</strong> <a href="https://pages.github.com">https://pages.github.com</a></p>

        <h2>Propriété intellectuelle</h2>
        <p>Tous les éléments du site sont la propriété exclusive de Fran’s Guide. Pour plus de détails, veuillez consulter les Conditions Générales de Vente (CGV).</p>

        <h2>Protection des données personnelles (RGPD)</h2>
        <p>Pour une information complète sur la protection de vos données personnelles, veuillez vous référer aux Conditions Générales de Vente (CGV).</p>

        <h2>Informations complémentaires</h2>
        <p>Les droits des consommateurs, la médiation ainsi que les responsabilités sont détaillés dans les Conditions Générales de Vente (CGV).</p>

        <h2>Droit applicable</h2>
        <p>Les présentes mentions légales sont régies par le droit français.</p>
      </main>
    </>
  );
}

export default MentionsLegales;