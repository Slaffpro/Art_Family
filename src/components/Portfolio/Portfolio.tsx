import { useState } from 'react';
import { artists } from '../../data/artists';
import type { ArtistId } from '../../data/artists';
import WorkCard from './WorkCard';
import Lightbox from './Lightbox';
import './Portfolio.css';

interface PortfolioProps {
  activeId: ArtistId | null;
  onSelect: (id: ArtistId) => void;
}

const PREVIEW_COUNT = 4;

export default function Portfolio({ activeId, onSelect }: PortfolioProps) {
  const jeweler = artists.jeweler;
  const painter = artists.painter;
  const active = activeId ? artists[activeId] : null;
  const other = active ? (active.id === 'jeweler' ? painter : jeweler) : null;
  // индекс открытой работы в лайтбоксе (null = закрыт)
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className={`portfolio ${active ? `portfolio--${active.theme}` : ''}`}>
      <h2 className="portfolio__title">Примеры Работ</h2>

      {/* Разделённый вид: первые 4 работы, клик не открывает лайтбокс */}
      {!active && (
        <div className="split" key="split">
          <div className="split__half split__half--jeweler">
            <h3 className="split__name split__name--jeweler">
              {jeweler.name} · {jeweler.role}
            </h3>
            <div className="grid grid--small">
              {jeweler.works.slice(0, PREVIEW_COUNT).map((w, i) => (
                <WorkCard key={w.id} work={w} theme="jeweler" index={i} />
              ))}
            </div>
            <button className="btn btn--jeweler" onClick={() => onSelect('jeweler')}>
              Смотреть работы
            </button>
          </div>

          <div className="split__half split__half--painter">
            <h3 className="split__name split__name--painter">
              {painter.name} · {painter.role}
            </h3>
            <div className="grid grid--small">
              {painter.works.slice(0, PREVIEW_COUNT).map((w, i) => (
                <WorkCard key={w.id} work={w} theme="painter" index={i} />
              ))}
            </div>
            <button className="btn btn--painter" onClick={() => onSelect('painter')}>
              Смотреть работы
            </button>
          </div>
        </div>
      )}

      {/* Развёрнутый вид: все работы, клик открывает лайтбокс */}
      {active && other && (
        <div className="focus" key={active.id}>
          <h3 className={`portfolio__head portfolio__head--${active.theme}`}>
            {active.name} — {active.role}
          </h3>
          <div className="grid">
            {active.works.map((w, i) => (
              <WorkCard
                key={w.id}
                work={w}
                theme={active.theme}
                index={i}
                onOpen={() => setOpenedIndex(i)}
              />
            ))}
          </div>
          <div className="portfolio__switch">
            <button className={`btn btn--${other.theme}`} onClick={() => onSelect(other.id)}>
              Посмотреть работы другого: {other.name}
            </button>
          </div>
        </div>
      )}

      {/* Поп-ап с листанием поверх всего */}
      {active && openedIndex !== null && (
        <Lightbox
          works={active.works}
          index={openedIndex}
          theme={active.theme}
          onClose={() => setOpenedIndex(null)}
          onNavigate={setOpenedIndex}
        />
      )}
    </section>
  );
}