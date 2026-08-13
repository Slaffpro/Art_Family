import type { Work, ArtistId } from '../../data/artists';
import './WorkCard.css';

interface WorkCardProps {
  work: Work;
  theme: ArtistId;
  index: number;
  onOpen?: (work: Work) => void;
}

export default function WorkCard({ work, theme, index, onOpen }: WorkCardProps) {
  return (
    <figure
      className={`card card--${theme} ${onOpen ? 'card--clickable' : ''}`}
      style={{ animationDelay: `${index * 0.12}s` }}
      onClick={onOpen ? () => onOpen(work) : undefined}
    >
      {work.src ? (
        <img className="card__img" src={work.src} alt={work.title} />
      ) : (
        <div className="card__placeholder">
          <span className="card__placeholder-icon">{theme === 'jeweler' ? '💍' : '🎨'}</span>
          <span className="card__placeholder-text">Ваше фото</span>
        </div>
      )}
      <figcaption className="card__title">{work.title}</figcaption>
    </figure>
  );
}