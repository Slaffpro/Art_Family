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
      { id: 'j1', title: 'Кольца «Северное сияние»', src: '/Art_Family/kolca.png' },
      { id: 'j2', title: 'Серьги «Листья лотоса»', src: '/Art_Family/monsters.png' },
      { id: 'j3', title: 'Серьги «Астрал»', src: '/Art_Family/sergi1.png' },
      { id: 'j4', title: 'Кольцо «Змея»', src: '/Art_Family/ring_snake.png' },
      { id: 'p5', title: 'Браслет «Звездный»', src: '/Art_Family/Braslet.png' },
      { id: 'p6', title: 'Серьги «Листья»', src: '/Art_Family/podveska.png' },
      { id: 'p7', title: 'Кулон «Оберег»', src: '/Art_Family/kulon.png' },
      { id: 'p8', title: 'Серьги «Конго»', src: '/Art_Family/sergi2.png' },
      { id: 'p9', title: 'Серьги «Гранат»', src: '/Art_Family/sergi3.png' },
      { id: 'p10', title: 'Серьги «Хризантемы»', src: '/Art_Family/sergi_hrizantems.png' },
      { id: 'p11', title: 'Набор «Фантазия»', src: '/Art_Family/nabor.png' },
      { id: 'p12', title: 'Подвески «Перья»', src: '/Art_Family/podveska2.png' },
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
      { id: 'p1', title: '«Лиса»', src: '/Art_Family/fox.png' },
      { id: 'p2', title: '«Одуванчики»', src: '/Art_Family/flowers.png' },
      { id: 'p3', title: '«Горы»', src: '/Art_Family/Gora.png' },
      { id: 'p4', title: '«Абстракция 1»', src: '/Art_Family/abstrakcia.png' },
      { id: 'p5', title: '«Маяк»', src: '/Art_Family/moonhouse.png' },
      { id: 'p6', title: '«Волжский завтрак»', src: '/Art_Family/Dug.png' },
      { id: 'p7', title: '«Горы»', src: '/Art_Family/3gori.png' },
      { id: 'p8', title:  '«Будда»', src: '/Art_Family/budda.png' },
      { id: 'p9', title: '«Девочка в красном»', src: '/Art_Family/Girl.jpg' },
      { id: 'p10', title: '«Лиса в снегу', src: '/Art_Family/FoxSnow.png'},
      { id: 'p11', title: '«Воспоминание»', src: '/Art_Family/vospominaniya.png' },
      { id: 'p12', title: '«Красный парус»', src: '/Art_Family/parus.png' },
    ],
  },
};