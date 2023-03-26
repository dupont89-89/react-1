const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

let initialState = {
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
    newPosttext: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                nameUser: 'Валентин Юдашкин',
                avatar: 'https://i2.wp.com/omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-12.jpg',
                number_like: 0,
                message: state.newPosttext
            }
            state.postData.push(newPost);
            state.newPosttext = ('');
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPosttext = action.newText;
            return state;
        default:
            return state;
    }
}

export default profileReducer;