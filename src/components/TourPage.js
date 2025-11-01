import React from 'react';
import './TourPage.css';

const tours = [
  {
    title: '🗼 Eiffel Secrets — From the Streets to the Summit',
    price: '45 € + ticket',
    duration: '2 hours',
    description: 'Discover the hidden stories behind Paris’s most iconic landmark before reaching the top for breathtaking views.',
  },
  {
    title: '🎨 Montmartre Magic — Artists & Bohemians',
    price: '39 €',
    duration: '2.5 hours',
    description: 'Wander cobbled lanes, see where Picasso painted, and soak in the creative spirit of Paris’s most storied hill.',
  },
  {
    title: '🏰 Louvre Highlights — Masterpieces in Focus',
    price: '55 € + ticket',
    duration: '2 hours',
    description: 'Skip the line and dive into the Louvre’s most famous works, from Mona Lisa to Venus de Milo, with stories that bring art to life.',
  },
  {
    title: '⛪ Notre-Dame & Île de la Cité — Heart of Paris',
    price: '35 €',
    duration: '2 hours',
    description: 'Explore Paris’s medieval island, marvel at Notre-Dame’s façade, and uncover centuries-old secrets along the Seine.',
  },
  {
    title: '🌳 Hidden Gardens & Passages — Paris Off the Beaten Path',
    price: '32 €',
    duration: '2 hours',
    description: 'Step off the tourist track to discover secret gardens, covered passages, and tranquil courtyards loved by locals.',
  },
  {
    title: '🍷 Parisian Wine & Cheese Tasting Walk',
    price: '59 € (tastings included)',
    duration: '2.5 hours',
    description: 'Sample artisanal cheeses and wines as you stroll through historic neighborhoods with a true Parisian gourmand.',
  },
  {
    title: '🛍️ Shopping & Fashion — From Boutiques to Boulevards',
    price: '42 €',
    duration: '2.5 hours',
    description: 'Uncover Paris’s style secrets, from chic boutiques to grand department stores, and learn about the city’s fashion history.',
  },
  {
    title: '🚲 Paris by Bike — Highlights & Hidden Corners',
    price: '47 € (bike included)',
    duration: '3 hours',
    description: 'Pedal past monuments and along the Seine, discovering both iconic sights and charming side streets.',
  },
  {
    title: '🕯️ Latin Quarter Legends — Writers, Thinkers, Revolutionaries',
    price: '36 €',
    duration: '2 hours',
    description: 'Walk in the footsteps of Hemingway and Sartre, and uncover the revolutionary past of Paris’s oldest quarter.',
  },
  {
    title: '🍰 Sweet Paris — Pâtisserie & Chocolate Tour',
    price: '54 € (tastings included)',
    duration: '2 hours',
    description: 'Indulge your sweet tooth with the best pastries and chocolates, learning the secrets of Parisian desserts.',
  },
  {
    title: '🎭 Marais: Royals, Rebels & Renaissance',
    price: '38 €',
    duration: '2 hours',
    description: 'Explore a neighborhood of contrasts, from aristocratic mansions to Jewish bakeries, with fascinating tales at every turn.',
  },
  {
    title: '💡 Paris at Night — Illuminations Walk',
    price: '34 €',
    duration: '2 hours',
    description: 'Experience the City of Light after dark, with sparkling monuments and romantic riverside strolls.',
  },
  {
    title: '🚢 Seine River Stroll & Stories',
    price: '31 €',
    duration: '1.5 hours',
    description: 'Follow the river’s curves, hearing legends and seeing Paris’s most beautiful bridges and quays.',
  },
  {
    title: '🖼️ Orsay Museum Essentials',
    price: '52 € + ticket',
    duration: '2 hours',
    description: 'Dive into Impressionism and beyond in the stunning Musée d’Orsay, guided through masterpieces by Monet, Van Gogh, and more.',
  },
  {
    title: '⚜️ Versailles Gardens & Secrets',
    price: '48 € + ticket',
    duration: '2.5 hours',
    description: 'Escape to royal grounds, exploring Versailles’s spectacular gardens, fountains, and hidden groves.',
  },
  {
    title: '👑 Royal Paris — Palaces, Power & Intrigue',
    price: '37 €',
    duration: '2 hours',
    description: 'Discover the grandeur and drama of Paris’s royal past, from the Louvre to the Tuileries.',
  },
  {
    title: '🧑‍🎨 Street Art & Urban Culture',
    price: '33 €',
    duration: '2 hours',
    description: 'See Paris’s vibrant street art scene, learning about the artists and social movements behind the murals.',
  },
  {
    title: '🥐 Morning Markets & Foodie Finds',
    price: '44 € (tastings included)',
    duration: '2 hours',
    description: 'Start your day like a Parisian, exploring bustling markets and sampling fresh local delicacies.',
  },
  {
    title: '🎶 Music & Cabaret — Montmartre by Night',
    price: '43 €',
    duration: '2 hours',
    description: 'Experience the bohemian nightlife that inspired legends, from chanson to cabaret.',
  },
  {
    title: '📚 Literary Paris — Bookshops & Cafés',
    price: '35 €',
    duration: '2 hours',
    description: 'Visit famous bookshops and cafés that once hosted the world’s greatest writers and poets.',
  },
  {
    title: '⛲ Paris Parks — Green Oases of the City',
    price: '29 €',
    duration: '1.5 hours',
    description: 'Relax and recharge in the city’s most beautiful parks and gardens, learning about their history and design.',
  },
  {
    title: '🕍 Jewish Heritage in the Marais',
    price: '39 €',
    duration: '2 hours',
    description: 'Trace centuries of Jewish history, culture, and resilience in one of Paris’s most storied neighborhoods.',
  },
  {
    title: '🏛️ Revolution & Resistance — Paris in Turmoil',
    price: '36 €',
    duration: '2 hours',
    description: 'Walk through the dramatic events that shaped France, from the Revolution to WWII resistance.',
  },
  {
    title: '🏰 Day Trip: Giverny & Monet’s Gardens',
    price: '85 € + train',
    duration: '5 hours',
    description: 'Escape to the countryside to see Monet’s house and gardens in full bloom, a must for art and nature lovers.',
  },
];

const ToursSection = () => (
  <div className="tour-page-container" style={{background: 'linear-gradient(180deg, #F9F5EF 0%, #FFF9F4 100%)', padding: '3rem 1.5rem'}}>
    <header className="hero-banner" style={{
      backgroundColor: '#E6DAD0',
      height: '280px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '2.8rem',
      fontWeight: '700',
      fontFamily: "'Playfair Display', serif",
      textShadow: '0 2px 8px rgba(0,0,0,0.5)',
      borderRadius: '12px',
      marginBottom: '2.5rem',
      userSelect: 'none',
    }}>
      Explore Paris With Me
    </header>

    <h1 style={{fontFamily: "'Playfair Display', serif", fontWeight: '700', fontSize: '2.8rem', color: '#4A3C31', marginBottom: '1.5rem', textAlign: 'center'}}>
      Our Paris Tours
    </h1>

    <div className="divider-container" style={{textAlign: 'center', marginBottom: '2rem'}}>
      <p style={{fontFamily: "'Georgia', serif", fontSize: '1rem', color: '#7A6F63', marginBottom: '0.3rem', fontStyle: 'italic'}}>
        Find your next adventure ✨
      </p>
      <hr style={{width: '6rem', borderTop: '2px solid #C9BBAE', margin: '0 auto', borderRadius: '2px'}} />
    </div>

    <div className="tours-grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      {tours.map((tour, idx) => (
        <article key={idx} className="tour-card" style={{
          backgroundColor: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          borderRadius: '12px',
          padding: '1.8rem 1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          cursor: 'default',
          animation: 'fadeInUp 0.6s ease forwards',
          animationDelay: `${idx * 0.07}s`,
          opacity: 0,
        }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-6px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.12)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
          }}
        >
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: '700',
            fontSize: '1.5rem',
            marginBottom: '0.25rem',
            color: '#3B2F22',
            lineHeight: '1.2',
          }}>
            {tour.title}
          </h2>
          <div style={{display: 'flex', gap: '1rem', marginBottom: '0.8rem', fontSize: '0.85rem', color: '#7A6F63', fontFamily: "'Georgia', serif"}}>
            <span><strong>Price:</strong> {tour.price}</span>
            <span><strong>Duration:</strong> {tour.duration}</span>
          </div>
          <p style={{fontFamily: "'Georgia', serif", fontSize: '1rem', color: '#5B5247', lineHeight: '1.45', flexGrow: 1}}>
            {tour.description}
          </p>
        </article>
      ))}
    </div>

    <style>{`
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(15px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @media (min-width: 768px) {
        .tours-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (min-width: 1024px) {
        .tours-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    `}</style>
  </div>
);

export default ToursSection;