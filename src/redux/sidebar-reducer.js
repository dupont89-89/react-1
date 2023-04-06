let initialState = {
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
        { id: 'users', name: 'Пользователи' },
        { id: 'dialogs', name: 'Диалоги' },
        { id: 'music', name: 'Моя музыка' },
        { id: 'news', name: 'Новости' },
        { id: 'settings', name: 'Настройки' },

    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;