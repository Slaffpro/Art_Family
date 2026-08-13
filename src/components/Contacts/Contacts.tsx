import './Contacts.css';
import { useState } from 'react'; 

type Contact = {
  label: string;
  value: string;
  href?: string;   // если это ссылка
  copy?: boolean;  // если true — клик копирует value
};

const contacts: Contact[] = [
  { label: 'Почта', value: 'w-graf@mail.ru', copy: true },
  { label: 'MAX', value: 'написать в мессенджер', href: 'https://max.ru/u/f9LHodD0cOJMzG4lZTGulL01QJDhkqmUoRjx8t0sS_uYdAxrPmkmReIWJrI' },
  { label: 'Telegram', value: 'написать в мессенджер', href: 'tg://resolve?domain=Slaffpro' },
  { label: 'ВКонтакте', value: 'наша страница', href: 'https://vk.ru/slavagraf' },
];

export default function Contacts() {
  const [copied, setCopied] = useState(false);

  const copyValue = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // запасной вариант, если браузер не дал доступ к clipboard
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="contacts" id="contacts">
      <h2 className="portfolio__title">Контакты</h2>

      <div className="contacts__inner">
        <p className="contacts__text">
          Пишите и звоните по любым вопросам: заказы, предложения или просто «где вас найти». Мы на связи каждый день.
        </p>

        <ul className="contacts__list">
          {contacts.map((c) => (
            <li className="contacts__item" key={c.label}>
              <span className="contacts__label">{c.label}</span>

              {c.copy ? (
                <button
                  type="button"
                  className={`contacts__value contacts__value--copy${copied ? ' is-copied' : ''}`}
                  onClick={() => copyValue(c.value)}
                  title="Нажми — адрес скопируется"
                >
                  {copied ? 'Скопировано ✓' : c.value}
                </button>
              ) : (
                <a
                  className="contacts__value"
                  href={c.href}
                  target={c.href?.startsWith('http') ? '_blank' : undefined}
                  rel="noopener"
                >
                  {c.value}
                </a>
              )}
            </li>
          ))}
        </ul>

        <p className="contacts__note">
          Мастерская — в  Саратове, принимаем по предварительной договорённости.
        </p>
      </div>
    </section>
  );
}