const ACTION_FOLLOW = 'ACTION_FOLLOW';
const ACTION_UN_FOLLOW = 'ACTION_UN_FOLLOW';
const ACTION_SET_USERS = 'ACTION_SET_USERS';

export const followActionCreator = (userId) => ({ type: ACTION_FOLLOW, userId })
export const unFollowActionCreator = (userId) => ({ type: ACTION_UN_FOLLOW, userId })
export const setUsersActionCreator = (users) => ({ type: ACTION_SET_USERS, users })

let initialState = {
    usersData: [
        {
            id: 0,
            name: 'Валентин',
            surname: 'Крошкин',
            avatar: 'https://www.film.ru/sites/default/files/filefield_paths/shrek.jpg',
            country: 'Россия',
            city: 'Иваново',
            status: 'Хей ребята. Я жду',
            followed: true
        },
        {
            id: 1,
            name: 'Татьяна',
            surname: 'Муравей',
            avatar: 'https://flomaster.club/uploads/posts/2022-06/1655870005_71-flomaster-club-p-portreti-printsess-disneya-krasivo-75.jpg',
            country: 'Россия',
            city: 'Нарва',
            status: 'Хей ребята. Я жду',
            followed: true,
        },
        {
            id: 2,
            name: 'Елена',
            surname: 'Букало',
            avatar: 'https://klike.net/uploads/posts/2022-08/1661862325_j-40.jpg',
            country: 'Россия',
            city: 'Сочи',
            status: 'Жара то стоит. Че делать. Не знаешь?',
            followed: false
        },
        {
            id: 3,
            name: 'Анна',
            surname: 'Тарантино',
            avatar: 'https://i.pinimg.com/originals/c8/53/bf/c853bf0f14a513e97f1031f0b6da096a.jpg',
            country: 'Россия',
            city: 'Плёс',
            status: 'Красотаа...лепота',
            followed: false
        },
        {
            id: 4,
            name: 'Павел',
            surname: 'Могучий',
            avatar: 'https://abrakadabra.fun/uploads/posts/2022-01/1642258489_1-abrakadabra-fun-p-tri-bogatirya-na-avu-1.jpg',
            country: 'Россия',
            city: 'Тула',
            status: 'Тульский пряник. Съем тебя.',
            followed: false
        },
        {
            id: 5,
            name: 'Костя',
            surname: 'Ложкин',
            avatar: 'https://mobimg.b-cdn.net/v3/fetch/bd/bd3446decb4f456f03ba2d8efb479423.jpeg',
            country: 'Россия',
            city: 'Волгоград',
            status: 'Сталинград же мы!!!',
            followed: true
        },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case ACTION_UN_FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case ACTION_SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state;
    }
}

export default usersReducer;