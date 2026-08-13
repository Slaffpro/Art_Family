export type ArtistId = 'jeweler' | 'painter';

export interface Work {
  id: string;
  title: string;
  src: string;
}

export interface Artist {
  id: ArtistId;
  name: string;
  role: string;
  short: string; // небольшое описание справа от фото
  about: string; // подробный текст внизу
  theme: ArtistId;
  works: Work[];
}

export const artists: Record<ArtistId, Artist> = {
  jeweler: {
    id: 'jeweler',
    name: 'Вячеслав',
    role: 'Ювелир',
    short: 'Меня зовут Вячеслав, я мастер-ремесленник, промышленный дизайнер и инженер. Много лет я руководил бюро промышленного дизайна — это был бесценный опыт, который научил меня видеть объект целиком: от первой идеи до готового изделия, от эскиза до серийного воплощения.',
    about:
      'За плечами — 18 лет в полиграфии и дизайне, два высших образования: инженер-электроник и инженер робототехнических систем, а ещё газоэлектросварка 4 разряда. Звучит как набор разных профессий, но на самом деле всё это — одна история: я люблю создавать вещи руками и головой. Я дважды становился Ремесленником года в Саратовской области. В моих руках металл оживает: титан, мельхиор, бронза, латунь, медь, серебро и золото. Я владею всеми техниками — от газовой и электрохимической пайки до гальваники, гравировки, литья металлов и их обработки.',
    theme: 'jeweler',
    works: [
      { id: 'j1', title: 'Кольца «Северное сияние»', src: '/public/kolca.png' },
      { id: 'j2', title: 'Серьги «Листья лотоса»', src: '/public/monsters.png' },
      { id: 'j3', title: 'Серьги «Астрал»', src: '/public/sergi1.png' },
      { id: 'j4', title: 'Кольцо «Змея»', src: '/public/ring_snake.png' },
      { id: 'p5', title: 'Браслет «Звездный»', src: '/public/Braslet.png' },
      { id: 'p6', title: 'Серьги «Листья»', src: '/public/podveska.png' },
      { id: 'p7', title: 'Кулон «Оберег»', src: '/public/kulon.png' },
      { id: 'p8', title: 'Серьги «Конго»', src: '/public/sergi2.png' },
      { id: 'p9', title: 'Серьги «Гранат»', src: '/public/sergi3.png' },
      { id: 'p10', title: 'Серьги «Хризантемы»', src: '/public/sergi_hrizantems.png' },
      { id: 'p11', title: 'Набор «Фантазия»', src: '/public/nabor.png' },
      { id: 'p12', title: 'Подвески «Перья»', src: '/public/podveska2.png' },
    ],
  },
  painter: {
    id: 'painter',
    name: 'Татьяна',
    role: 'Художник',
    short: 'Меня зовут Татьяна, я профессиональный художник, дизайнер интерьера и преподаватель. Много лет работала в полиграфии, создавала современные интерьеры. Сейчас занимаюсь творчеством. Работаю со скульпутной пастой и акрилом: от тихих лирических пейзажей до смелых абстракций.',
    about:
      'За плечами — Саратовское художественное училище им. А.П. Боголюбова (Живопись) и ВШПиМ (бывш. МГУП им. И. Федерова) (Графика). Работаю в разных техниках и стилях: масло, акварель, темпера. Последнее время увлеклась структурной пастой, в направлении Интерьерная-живопись. Но портреты и пейзажи с натуры не забыты. Пишу на заказ. Преподаю живопись и рисунок взрослым и детям. Провожу мастер-классы.',
    theme: 'painter',
    works: [
      { id: 'p1', title: '«Лиса»', src: '/public/fox.png' },
      { id: 'p2', title: '«Одуванчики»', src: '/public/flowers.png' },
      { id: 'p3', title: '«Горы»', src: '/public/Gora.png' },
      { id: 'p4', title: '«Абстракция 1»', src: '/public/abstrakcia.png' },
      { id: 'p5', title: '«Маяк»', src: '/public/moonhouse.png' },
      { id: 'p6', title: '«Волжский завтрак»', src: '/public/Dug.png' },
      { id: 'p7', title: '«Горы»', src: '/public/3gori.png' },
      { id: 'p8', title:  '«Будда»', src: '/public/budda.png' },
      { id: 'p9', title: '«Девочка в красном»', src: '/public/Girl.jpg' },
      { id: 'p10', title: '«Лиса в снегу', src: '/public/FoxSnow.png'},
      { id: 'p11', title: '«Воспоминание»', src: '/public/vospominaniya.png' },
      { id: 'p12', title: '«Красный парус»', src: '/public/parus.png' },
    ],
  },
};