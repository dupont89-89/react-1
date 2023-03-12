import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let postData = [
  { id: 1, nameUser: 'Валентин Юдашкин', avatar: 'https://i2.wp.com/omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-12.jpg', number_like: 7, message: 'Привет, Валентина. Как твои дела?' },
  { id: 2, nameUser: 'Валентин Юдашкин', avatar: 'https://i2.wp.com/omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-12.jpg', number_like: 10, message: 'Ирина. Как ты?' },
  { id: 3, nameUser: 'Валентин Юдашкин', avatar: 'https://i2.wp.com/omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-12.jpg', number_like: 120, message: 'Описание свойства box-shadow. Примеры тени для блока (внешняя, внутренняя, с одной стороны), эффекты для тени при наведении, анимация тени. ... 2.19. CSS3-тень блока. Опубликовано: 9 ноября 2016 Обновлено: 31 декабря 2019 6 комментариев.' },
  { id: 4, nameUser: 'Валентин Юдашкин', avatar: 'https://i2.wp.com/omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-12.jpg', number_like: 18, message: 'Вау, вау. ТЫ чего' },
  { id: 5, nameUser: 'Валентин Юдашкин', avatar: 'https://i2.wp.com/omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-12.jpg', number_like: 13, message: 'CSS-свойство box-shadow добавляет тень к элементу. Через запятую можно задать несколько теней. Тень описывается смещениями по оси X и Y относительно' },
]

let dialogsData = [
  { id: 3, name: 'Валентин', avatar: 'https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png', group: 'Друзья' },
  { id: 4, name: 'Петя', avatar: 'https://w7.pngwing.com/pngs/805/207/png-transparent-account-avatar-profile-user-avatars-icon.png', group: 'Подписчики' },
  { id: 5, name: 'Костя', avatar: 'https://w7.pngwing.com/pngs/450/288/png-transparent-account-avatar-profile-user-avatars-icon.png', group: 'Слушатель' },
  { id: 6, name: 'Надя', avatar: 'https://w7.pngwing.com/pngs/306/225/png-transparent-account-avatar-profile-user-avatars-icon.png', group: 'Партнеры' },
  { id: 7, name: 'Кроха', avatar: 'http://img2.3png.com/5ede474221aa06595201d090f7f7936d1ae2.png', group: 'Коллеги' },
  { id: 8, name: 'Лука', avatar: 'https://w7.pngwing.com/pngs/44/624/png-transparent-avatar-people-person-business-user-man-character-set-icon-portrait.png', group: 'Теневая' },
  { id: 9, name: 'Костя', avatar: 'https://w7.pngwing.com/pngs/638/710/png-transparent-avatar-female-girl-woman-avatars-xmas-giveaway-icon.png', group: 'Друзья' }
]


let messagesData = [
  {id: 1, messagesRead: 'Прочитано', message: 'Приветик это же ВАНЯ!. Привет, Валентина. Как твои дела?'},
  {id: 2, messagesRead: 'Ожидает',  message: 'Напрямую сделать треугольник средствами CSS нельзя, поэтому доступны два метода, позволяющих его добавить — через border и transform. ... В примере 1 показано добавление треугольника к блоку через псевдоэлемент'},
  {id: 3, messagesRead: 'Читает',  message: 'Треугольники с рамкой. Примеры как сделать различные вариации треугольников с помощью CSS-свойства border. ... В продолжении первой части, примеры как добавить стрелки к блоку с рамкой. Используются оба псевдо-элемента'},
  {id: 4, messagesRead: 'Прочитано',  message: 'ХАХ ХА АХ тф даешь'},
  {id: 5, messagesRead: 'Пишет',  message: 'Откуда берется треугольник? Все контейнеры в HTML изначально'}
]

root.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
