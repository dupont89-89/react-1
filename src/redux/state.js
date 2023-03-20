const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let store = {
    _state: {
        profilePage: {
            postData: [
                {
                    id: 1,
                    nameUser: 'Валентин Юдашкин',
                    avatar: 'https://i2.wp.com/omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-12.jpg',
                    number_like: 7,
                    message: 'Привет, Валентина. Как твои дела?'
                },
                {
                    id: 2,
                    nameUser: 'Валентин Юдашкин',
                    avatar: 'https://i2.wp.com/omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-12.jpg',
                    number_like: 10,
                    message: 'Ирина. Как ты?'
                },
                {
                    id: 3,
                    nameUser: 'Валентин Юдашкин',
                    avatar: 'https://i2.wp.com/omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-12.jpg',
                    number_like: 120,
                    message: 'Описание свойства box-shadow. Примеры тени для блока (внешняя, внутренняя, с одной стороны), эффекты для тени при наведении, анимация тени. ... 2.19. CSS3-тень блока. Опубликовано: 9 ноября 2016 Обновлено: 31 декабря 2019 6 комментариев.'
                },
                {
                    id: 4,
                    nameUser: 'Валентин Юдашкин',
                    avatar: 'https://i2.wp.com/omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-12.jpg',
                    number_like: 18,
                    message: 'Вау, вау. ТЫ чего'
                },
                {
                    id: 5,
                    nameUser: 'Валентин Юдашкин',
                    avatar: 'https://i2.wp.com/omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-12.jpg',
                    number_like: 13,
                    message: 'CSS-свойство box-shadow добавляет тень к элементу. Через запятую можно задать несколько теней. Тень описывается смещениями по оси X и Y относительно'
                },
            ],
            newPosttext: 'Давай до свидания'
        },
        messagesPage: {
            dialogsData: [
                {
                    id: 3,
                    name: 'Валентин',
                    avatar: 'https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png',
                    group: 'Друзья'
                },
                {
                    id: 4,
                    name: 'Петя',
                    avatar: 'https://w7.pngwing.com/pngs/805/207/png-transparent-account-avatar-profile-user-avatars-icon.png',
                    group: 'Подписчики'
                },
                {
                    id: 5,
                    name: 'Костя',
                    avatar: 'https://w7.pngwing.com/pngs/450/288/png-transparent-account-avatar-profile-user-avatars-icon.png',
                    group: 'Слушатель'
                },
                {
                    id: 6,
                    name: 'Надя',
                    avatar: 'https://w7.pngwing.com/pngs/306/225/png-transparent-account-avatar-profile-user-avatars-icon.png',
                    group: 'Партнеры'
                },
                {
                    id: 7,
                    name: 'Кроха',
                    avatar: 'http://img2.3png.com/5ede474221aa06595201d090f7f7936d1ae2.png',
                    group: 'Коллеги'
                },
                {
                    id: 8,
                    name: 'Лука',
                    avatar: 'https://w7.pngwing.com/pngs/44/624/png-transparent-avatar-people-person-business-user-man-character-set-icon-portrait.png',
                    group: 'Теневая'
                },
                {
                    id: 9,
                    name: 'Костя',
                    avatar: 'https://w7.pngwing.com/pngs/638/710/png-transparent-avatar-female-girl-woman-avatars-xmas-giveaway-icon.png',
                    group: 'Друзья'
                }
            ],
            messagesData: [
                {
                    id: 1,
                    messagesRead: 'Прочитано',
                    message: 'Приветик это же ВАНЯ!. Привет, Валентина. Как твои дела?',
                    messageFriends: 'Да вроде как все отлично?'
                },
                {
                    id: 2,
                    messagesRead: 'Ожидает',
                    message: 'Напрямую сделать треугольник средствами CSS нельзя, поэтому доступны два метода, позволяющих его добавить — через border и transform. ... В примере 1 показано добавление треугольника к блоку через псевдоэлемент', messageFriends: 'Да я не знаю, как там это всё делать'
                },
                {
                    id: 3,
                    messagesRead: 'Читает',
                    message: 'Треугольники с рамкой. Примеры как сделать различные вариации треугольников с помощью CSS-свойства border. ... В продолжении первой части, примеры как добавить стрелки к блоку с рамкой. Используются оба псевдо-элемента', messageFriends: 'Фуух, я вообще не знал такого'
                },
                {
                    id: 4,
                    messagesRead: 'Прочитано',
                    message: 'ХАХ ХА АХ тф даешь',
                    messageFriends: 'Я то чего, нормально же ощались. Че ты'
                },
                {
                    id: 5,
                    messagesRead: 'Пишет',
                    message: 'Откуда берется треугольник? Все контейнеры в HTML изначально',
                    messageFriends: 'Оотуда где рак свисти всегда. Хаааа.'
                }
            ],
            newMessage: 'Напиши мне'
        },
        sidebar: {
            myFriends: [
                { id: 2, avatar__one__friends: 'https://pixelbox.ru/wp-content/uploads/2022/05/russia-avatar-pixelbox.ru-14.jpg', name__one__friends: "Валентин Стрыкало" },
                { id: 3, avatar__one__friends: "https://webmg.ru/wp-content/uploads/2022/10/i-168-22.jpeg", name__one__friends: "Григорий Распутин" },
                { id: 4, avatar__one__friends: "https://coolsen.ru/wp-content/uploads/2021/06/218-2.jpg", name__one__friends: "Кошкин Дом" },
                { id: 5, avatar__one__friends: "https://baback.club/uploads/posts/2022-11/1667909979_29-baback-club-p-prikolnie-risunki-dlya-malchikov-vkontakte-30.jpg", name__one__friends: "Владлен Татарский" },
                { id: 6, avatar__one__friends: "https://all-t-shirts.ru/goods_images/ru118946II000b592a90cad73026c82e7fc02f0738e35.jpg", name__one__friends: "Наталья Пугачева" },
                { id: 7, avatar__one__friends: "https://coolsen.ru/wp-content/uploads/2021/06/66-8.jpg", name__one__friends: "Мария Орейро" },
                { id: 8, avatar__one__friends: "https://sun9-2.userapi.com/s/v1/ig2/TmbiI7cif4WhFVytFEtJpDQ-y6xTZd-nYc5HDYcyY0KWZ7hxtBam0KhvLg0R9rU2ruzktKXfcUxe3vXyTRKDMfF7.jpg?size=400x400&quality=95&crop=270,270,539,539&ava=1", name__one__friends: "Людмила Воронина" }

            ],
            navSidebar: [
                { id: '/', name: 'Главная' },
                { id: 'profile', name: 'Профиль' },
                { id: 'dialogs', name: 'Диалоги' },
                { id: 'music', name: 'Моя музыка' },
                { id: 'news', name: 'Новости' },
                { id: 'settings', name: 'Настройки' }

            ]
        }
    },

    _callSubscriber() {
        console.log('Я просто для наличия');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    sendMessage() {
        let newMessage = {
            id: 6,
            messagesRead: 'Новое',
            message: this._state.messagesPage.newMessage,
            messageFriends: 'Я пока компонента, тупая'
        }
        this._state.messagesPage.messagesData.push(newMessage);
        this._state.messagesPage.newMessage = ('');
        this._callSubscriber(this._state);
    },

    sendNewMessage(newTextMessage) {
        this._state.messagesPage.newMessage = newTextMessage;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                nameUser: 'Валентин Юдашкин',
                avatar: 'https://i2.wp.com/omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-12.jpg',
                number_like: 0,
                message: this._state.profilePage.newPosttext
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPosttext = ('');
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPosttext = action.newText;
            this._callSubscriber(this._state);
        }

    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default store;

window.store = store;

