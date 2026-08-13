import { artists } from '../../data/artists';
import type { ArtistId } from '../../data/artists';
import '../Hero/Hero.css';

interface HeroProps {
  activeId: ArtistId | null;
  onSelect: (id: ArtistId) => void;
}

export default function Hero({ activeId, onSelect }: HeroProps) {
  const jeweler = artists.jeweler;
  const painter = artists.painter;

  return (
    <section className="hero">
      {/* Половина ювелира */}
      <article className={`half half--jeweler ${activeId === 'jeweler' ? 'is-active' : ''}`}>
        <div className="half__top">
          {/* фото + кнопка под ним */}
          <div className="half__photo-col">
            <img className="half__avatar" src="/Art_Family/Slava.jpg" alt="Вячеслав" />
            <button className="btn btn--jeweler" onClick={() => onSelect('jeweler')}>
              Смотреть работы
            </button>
          </div>
          {/* справа от фото: имя, роль, небольшое описание */}
          <div className="half__intro">
            <h2 className="half__name">{jeweler.name}</h2>
            <p className="half__role">{jeweler.role}</p>
            <p className="half__desc">{jeweler.short}</p>
          </div>
        </div>
        {/* внизу — подробный текст, тоже влево */}
        <p className="half__text">{jeweler.about}</p>
      </article>

      {/* Половина художника */}
      <article className={`half half--painter ${activeId === 'painter' ? 'is-active' : ''}`}>
        <div className="half__top">
          <div className="half__photo-col">
             <img className="half__avatar" src="/Art_Family/Tany.jpg" alt="Вячеслав" />
            <button className="btn btn--painter" onClick={() => onSelect('painter')}>
              Смотреть работы
            </button>
          </div>
          <div className="half__intro">
            <h2 className="half__name">{painter.name}</h2>
            <p className="half__role">{painter.role}</p>
            <p className="half__desc">{painter.short}</p>
          </div>
        </div>
        <p className="half__text">{painter.about}</p>
      </article>
    </section>
  );
}