/**
 * Generates a real index.html for every route after the CRA build.
 *
 * Why: GitHub Pages returns HTTP 404 for any path it has no file for, so
 * /weddings was answered with 404.html. Browsers recovered via the redirect
 * script, but crawlers just saw a 404 and skipped the page. Writing a file at
 * build/weddings/index.html makes GitHub Pages answer 200 instead.
 *
 * Each generated page also gets its own title, description and canonical URL,
 * otherwise every page would declare itself a duplicate of the homepage and
 * still not be indexed.
 */

const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '..', 'build');
const TEMPLATE = path.join(BUILD_DIR, 'index.html');
const TOURS_SRC = path.join(__dirname, '..', 'src', 'data', 'tours.js');
const SITE = 'https://fransguide.com';

const STATIC_ROUTES = [
  {
    route: 'tours',
    title: "Paris Walking Tours & Audio Guides | Fran's Guide",
    description:
      'Private guided walking tours across Paris in English, French, Portuguese and Spanish, plus GPS audio tours with a built-in AI guide.',
  },
  {
    route: 'weddings',
    title: "Wedding Photographer in Paris | Fran's Guide",
    description:
      'Civil ceremonies, religious weddings and couple sessions in Paris. Packages from 250€, with a private Pixieset gallery.',
  },
  {
    route: 'photoshoots',
    title: "Paris Photoshoots | Fran's Guide",
    description:
      'Natural, elegant photo sessions in the most beautiful corners of Paris. Couples, families, birthdays and bachelorette parties, from 120€.',
  },
  {
    route: 'about',
    title: "About Fran | Paris Guide & Photographer",
    description:
      'Franco-Brazilian guide, photographer and engineer based in Paris. Guiding since 2022 and the developer behind the Fran’s Guide app.',
  },
  {
    route: 'contact',
    title: "Contact | Fran's Guide",
    description:
      'Get in touch to book a private Paris tour, a photoshoot or a wedding, or just to ask a question. Fran usually replies quickly.',
  },
  {
    route: 'cgv',
    title: "Conditions Générales de Vente | Fran's Guide",
    description: 'Conditions générales de vente des prestations Fran’s Guide.',
  },
  {
    route: 'privacy',
    title: "Privacy Policy | Fran's Guide",
    description: 'How Fran’s Guide collects, uses and protects your personal data.',
  },
  {
    route: 'mentions-legales',
    title: "Mentions Légales | Fran's Guide",
    description: 'Mentions légales du site fransguide.com.',
  },
];

/** Pulls the English title of every tour, in order, from src/data/tours.js. */
function readTourTitles() {
  const src = fs.readFileSync(TOURS_SRC, 'utf8');
  // Top-level entries are indented by exactly four spaces; nested translations
  // are deeper, so this keeps the English titles only.
  const re = /^ {4}title:\s*(?:\n\s*)?(['"])([\s\S]*?)\1,/gm;
  const titles = [];
  let m;
  while ((m = re.exec(src)) !== null) {
    titles.push(m[2].replace(/\\(['"])/g, '$1'));
  }
  return titles;
}

const stripEmoji = (s) =>
  s.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu, '').trim();

const escapeAttr = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const escapeText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Rewrites the head of the built index.html for one route. */
function buildPage(template, { url, title, description }) {
  const t = escapeText(title);
  const a = escapeAttr(title);
  const d = escapeAttr(description);

  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${d}"/>`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${a}"/>`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${d}"/>`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}"/>`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}"/>`);
}

function writeRoute(template, route, meta) {
  const dir = path.join(BUILD_DIR, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), buildPage(template, meta));
}

function main() {
  if (!fs.existsSync(TEMPLATE)) {
    console.error('✖ build/index.html is missing. Run "npm run build" first.');
    process.exit(1);
  }
  const template = fs.readFileSync(TEMPLATE, 'utf8');

  // Fail loudly rather than shipping pages that all point at the homepage.
  if (!/<link rel="canonical"/.test(template)) {
    console.error('✖ No canonical tag found in build/index.html; aborting.');
    process.exit(1);
  }

  // Trailing slash: GitHub Pages serves these as directory indexes and 301s
  // /weddings to /weddings/, so the canonical must point at the slashed URL.
  for (const { route, title, description } of STATIC_ROUTES) {
    writeRoute(template, route, { url: `${SITE}/${route}/`, title, description });
  }

  const tourTitles = readTourTitles();
  tourTitles.forEach((rawTitle, i) => {
    const clean = stripEmoji(rawTitle);
    writeRoute(template, `tour/${i}`, {
      url: `${SITE}/tour/${i}/`,
      title: `${clean} | Fran's Guide`,
      description: `${clean}. A private guided walk in Paris with Fran, available in English, French, Portuguese and Spanish.`,
    });
  });

  const total = STATIC_ROUTES.length + tourTitles.length;
  console.log(`✓ Generated ${total} route pages (${STATIC_ROUTES.length} static, ${tourTitles.length} tours)`);
  if (tourTitles.length === 0) {
    console.warn('⚠ No tour titles found in src/data/tours.js; /tour/:id pages were skipped.');
  }
}

main();
