import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { tours } from '../data/tours';

// Custom numbered marker using DivIcon
function makeIcon(number) {
  return L.divIcon({
    className: '',
    html: `<div style="
      width: 32px;
      height: 32px;
      background: #0F2C66;
      color: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Jost', sans-serif;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.5px;
      border: 2px solid #fff;
      box-shadow: 0 2px 8px rgba(15,44,102,0.35);
      cursor: pointer;
    ">${number}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18],
  });
}

const LABELS = {
  en: { title: 'Where we explore', sub: 'Every pin is a starting point — click to discover the tour.', discover: 'Discover →' },
  fr: { title: 'Où on explore', sub: 'Chaque épingle est un point de départ — cliquez pour découvrir la visite.', discover: 'Découvrir →' },
  pt: { title: 'Onde exploramos', sub: 'Cada marcador é um ponto de partida — clique para descobrir o tour.', discover: 'Descobrir →' },
  es: { title: 'Dónde exploramos', sub: 'Cada marcador es un punto de partida — haz clic para descubrir el tour.', discover: 'Descubrir →' },
};

function stripEmoji(str) {
  return str.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27FF}\u{2700}-\u{27BF}]/gu, '').trim();
}

export default function TourMap({ language = 'en' }) {
  const l = LABELS[language] || LABELS.en;
  const center = [48.8600, 2.3350];

  // Filtered tours with coords
  const mapped = tours
    .map((tour, idx) => ({ tour, idx }))
    .filter(({ tour }) => tour.coords);

  return (
    <>
      <style>{`
        .fg-map-section {
          border-top: 1px solid #E8E3DC;
          border-bottom: 1px solid #E8E3DC;
        }
        .fg-map-header {
          padding: 64px 80px 48px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
        }
        .fg-map-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 400;
          line-height: 1.1;
          color: #1C1C1C;
          margin: 0 0 10px;
        }
        .fg-map-title em { font-style: italic; color: #0F2C66; }
        .fg-map-sub {
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          color: #4A4845;
          font-weight: 400;
          max-width: 420px;
          line-height: 1.7;
          margin: 0;
        }
        .fg-map-wrap {
          height: 520px;
          width: 100%;
        }
        .fg-map-wrap .leaflet-container {
          height: 100%;
          width: 100%;
          font-family: 'Jost', sans-serif;
        }
        /* Popup styles */
        .fg-map-wrap .leaflet-popup-content-wrapper {
          border-radius: 0;
          box-shadow: 0 4px 24px rgba(0,0,0,0.12);
          padding: 0;
          border: 1px solid #E8E3DC;
        }
        .fg-map-wrap .leaflet-popup-content {
          margin: 0;
          min-width: 200px;
        }
        .fg-map-wrap .leaflet-popup-tip-container { display: none; }
        .fg-map-popup {
          padding: 20px 22px;
        }
        .fg-map-popup-num {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          letter-spacing: 3px;
          color: #4A4845;
          margin-bottom: 6px;
          font-weight: 400;
        }
        .fg-map-popup-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 400;
          color: #1C1C1C;
          margin: 0 0 6px;
          line-height: 1.2;
        }
        .fg-map-popup-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 16px;
          color: #0F2C66;
          margin: 0 0 12px;
        }
        .fg-map-popup-link {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #0F2C66;
          text-decoration: none;
          border-bottom: 1px solid #E8E3DC;
          padding-bottom: 2px;
          font-weight: 400;
          display: inline-block;
        }
        .fg-map-popup-link:hover { border-color: #0F2C66; }
        @media (max-width: 900px) {
          .fg-map-header { padding: 48px 32px 36px; flex-direction: column; align-items: flex-start; }
          .fg-map-wrap { height: 400px; }
        }
        @media (max-width: 480px) {
          .fg-map-header { padding: 36px 24px 28px; }
          .fg-map-wrap { height: 320px; }
        }
      `}</style>

      <section className="fg-map-section">
        <div className="fg-map-header">
          <div>
            <h2 className="fg-map-title">Where we <em>explore.</em></h2>
            <p className="fg-map-sub">{l.sub}</p>
          </div>
        </div>

        <div className="fg-map-wrap">
          <MapContainer
            center={center}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
            zoomControl={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            {mapped.map(({ tour, idx }) => {
              const t = (language !== 'en' && tour[language]) ? tour[language] : {};
              const localTitle = t.title || tour.title;
              return (
                <Marker
                  key={idx}
                  position={tour.coords}
                  icon={makeIcon(idx + 1)}
                >
                  <Popup>
                    <div className="fg-map-popup">
                      <p className="fg-map-popup-num">{String(idx + 1).padStart(2, '0')}</p>
                      <h3 className="fg-map-popup-title">{stripEmoji(localTitle)}</h3>
                      {tour.price && (
                        <p className="fg-map-popup-price">{tour.price}</p>
                      )}
                      <Link to={`/tour/${idx}`} className="fg-map-popup-link">
                        {l.discover}
                      </Link>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
      </section>
    </>
  );
}
