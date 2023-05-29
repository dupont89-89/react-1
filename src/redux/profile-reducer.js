import { dataProfile, newStatusProfile, getUserStatusProfile } from "../api/api";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ACTION_SET_USERS_PROFILE = 'ACTION_SET_USERS_PROFILE';
const ACTION_SET_STATUS_PROFILE = 'ACTION_SET_STATUS_PROFILE';
const ACTION_UPDATE_STATUS_PROFILE = 'ACTION_UPDATE_STATUS_PROFILE';

export const addPosts = (newPostsText) => ({ type: ADD_POST, newPostsText })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUsersProfile = (usersDataProfile) => ({ type: ACTION_SET_USERS_PROFILE, usersDataProfile })
export const setStatusProfile = (status) => ({ type: ACTION_SET_STATUS_PROFILE, status })
export const updateStatusProfile = (status) => ({ type: ACTION_UPDATE_STATUS_PROFILE, status })

// export const addPostsThunkCreator = (newPost) => {
//     debugger;
//     return (dispatch) => {
//             dispatch(addPosts(newPost));
//     }
// }

// export const addPostsThunkCreator = (dispatch) => {
//     return dispatch(addPosts(newPost));
// }

export const dataProfileThunkCreator = (userId) => {
    return (dispatch) => {
        if (!userId) {
            userId = 28699;
          }
        dataProfile(userId).then(response => {
           dispatch(setUsersProfile(response.data));

        });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        getUserStatusProfile(userId).then(response => {
           dispatch(setStatusProfile(response.data));
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        newStatusProfile(status).then(response => {
            if (response.data.resultCode === 0) {
           dispatch(updateStatusProfile(status));
        }
        });
    }
}

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
    newPosttext: '',
    usersDataProfile: [
        
    ],
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                nameUser: 'Валентин Юдашкин',
                avatar: 'https://i2.wp.com/omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-12.jpg',
                number_like: 0,
                message: action.newPostsText
            }
            let stateCopy = { ...state };
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newPosttext = action.newText;
            return stateCopy;
        }
        case ACTION_SET_USERS_PROFILE: {
            return { ...state, usersDataProfile: action.usersDataProfile }
        }
        case ACTION_SET_STATUS_PROFILE: {
            debugger;
            return { ...state, status: action.status }
        }
        default:
            return state;
    }
}

export default profileReducer;