import profileReducer, { addPosts } from "./profile-reducer";

test('test Profile reducer', () => {
    let action = addPosts('RE')
    let state = {
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
        newPosttext: '',
        usersDataProfile: [
        ],
        status: "",
    }
    
    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(6);
  });