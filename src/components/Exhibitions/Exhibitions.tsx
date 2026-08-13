import './Exhibitions.css';

/* Список выставок — правь прямо здесь */
const events = [
  { city: 'Саратов', place: 'Фестиваль «Палитра ремёсел»' },
  { city: 'Пенза', place: 'Фестиваль «Канитель»' },
  { city: 'Урюпинск', place: '«Покровская ярмарка»' },
  { city: 'Аткарск', place: 'Фестиваль «Аткарские розы» ' },
  { city: 'Вольск', place: 'Ярмарка «День города» ' },
  { city: 'Хвалынск', place: 'Фестиваль «Хвалынские этюды» ' },
];

export default function Exhibitions() {
  return (
    <section className="exhibitions" id="exhibitions">
      <h2 className="portfolio__title">Выставки</h2>

      <div className="exhibitions__body">
        {/* верхний блюр-бокс с текстом (красный овал на скрине) */}
        <div className="exhibitions__intro">
          <p className="exhibitions__text">
            Мы не только работаем в мастерской — мы постоянно участвуем
            в ярмарках и выставках. Приходите знакомиться, смотреть работы
            вживую и общаться — нас легко найти:
          </p>
        </div>

        {/* нижний блюр с городами и выставками */}
        <div className="exhibitions__bottom">
          <ul className="exhibitions__list">
            {events.map((e) => (
              <li className="exhibitions__item" key={e.city}>
                <span className="exhibitions__city">{e.city}</span>
                <span className="exhibitions__place">{e.place}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}