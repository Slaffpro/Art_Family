import { useEffect } from 'react';
import type { Work, ArtistId } from '../../data/artists';
import './Lightbox.css';

interface LightboxProps {
  works: Work[];      // все работы текущего артиста
  index: number;      // какая сейчас открыта
  theme: ArtistId;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ works, index, theme, onClose, onNavigate }: LightboxProps) {
  const work = works[index];
  const hasMany = works.length > 1;

  const prev = () => onNavigate((index - 1 + works.length) % works.length);
  const next = () => onNavigate((index + 1) % works.length);

  // Esc — закрыть, стрелки — листать; пока открыт, страница не скроллится
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (hasMany && e.key === 'ArrowLeft') onNavigate((index - 1 + works.length) % works.length);
      if (hasMany && e.key === 'ArrowRight') onNavigate((index + 1) % works.length);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, works.length, hasMany, onClose, onNavigate]);

  return (
    <div className={`lightbox lightbox--${theme}`} onClick={onClose}>
      {/* стрелка назад (закрыть) */}
      <button className="lightbox__back" onClick={onClose} aria-label="Назад">
        ←
      </button>

      {/* листание: предыдущая */}
      {hasMany && (
        <button
          className="lightbox__nav lightbox__nav--prev"
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="Предыдущая работа"
        >
          ‹
        </button>
      )}

      {/* key={work.id} — при листании заново проигрывается анимация появления */}
      <figure className="lightbox__content" key={work.id} onClick={(e) => e.stopPropagation()}>
        {work.src ? (
          <img className="lightbox__img" src={work.src} alt={work.title} />
        ) : (
          <div className={`lightbox__placeholder lightbox__placeholder--${theme}`}>
            <span className="lightbox__placeholder-icon">{theme === 'jeweler' ? '💍' : '🎨'}</span>
            <span className="lightbox__placeholder-text">Ваше фото</span>
          </div>
        )}
        {/* название снизу */}
        <figcaption className="lightbox__title">{work.title}</figcaption>
        {hasMany && (
          <span className="lightbox__counter">
            {index + 1} / {works.length}
          </span>
        )}
      </figure>

      {/* листание: следующая */}
      {hasMany && (
        <button
          className="lightbox__nav lightbox__nav--next"
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="Следующая работа"
        >
          ›
        </button>
      )}
    </div>
  );
}