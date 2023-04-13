const ACTION_FOLLOW = 'ACTION_FOLLOW';
const ACTION_UN_FOLLOW = 'ACTION_UN_FOLLOW';
const ACTION_SET_USERS = 'ACTION_SET_USERS';
const ACTION_SET_CURRENT_PAGE = 'ACTION_SET_CURRENT_PAGE';
const ACTION_SET_TOTAL_USER = 'ACTION_SET_TOTAL_USER';
const ISFETHING_USER_YES = 'ISFETHING_USER_YES';

export const followActionCreator = (userId) => ({ type: ACTION_FOLLOW, userId })
export const unFollowActionCreator = (userId) => ({ type: ACTION_UN_FOLLOW, userId })
export const setUsersActionCreator = (usersData) => ({ type: ACTION_SET_USERS, usersData })
export const setCurrentPageActionCreator = (currentPage) => ({ type: ACTION_SET_CURRENT_PAGE, currentPage })
export const setUserTotalActionCreator = (totalUser) => ({ type: ACTION_SET_TOTAL_USER, totalUser })
export const isFetchingUserYesActionCreator = (e) => ({ type: ISFETHING_USER_YES, e })


let initialState = {
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: false,
    usersData: [

    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(usersData => {
                    if (usersData.id === action.userId) {
                        return { ...usersData, followed: false }
                    }
                    return usersData;
                })
            }
        case ACTION_UN_FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(usersData => {
                    if (usersData.id === action.userId) {
                        return { ...usersData, followed: true }
                    }
                    return usersData;
                })
            }
        case ACTION_SET_USERS: {
            return { ...state, usersData: action.usersData }
        }
        case ACTION_SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case ACTION_SET_TOTAL_USER: {
            return { ...state, totalUsersCount: action.totalUser }
        }
        case ISFETHING_USER_YES: {
            return { ...state, isFetching: action.e }
        }
        default:
            return state;
    }
}

export default usersReducer;

        // {
        //     id: 0,
        //     name: 'Валентин',
        //     surname: 'Крошкин',
        //     avatar: 'https://www.film.ru/sites/default/files/filefield_paths/shrek.jpg',
        //     country: 'Россия',
        //     city: 'Иваново',
        //     status: 'Хей ребята. Я жду',
        //     followed: true
        // },
        // {
        //     id: 1,
        //     name: 'Татьяна',
        //     surname: 'Муравей',
        //     avatar: 'https://flomaster.club/uploads/posts/2022-06/1655870005_71-flomaster-club-p-portreti-printsess-disneya-krasivo-75.jpg',
        //     country: 'Россия',
        //     city: 'Нарва',
        //     status: 'Хей ребята. Я жду',
        //     followed: true,
        // },
        // {
        //     id: 2,
        //     name: 'Елена',
        //     surname: 'Букало',
        //     avatar: 'https://klike.net/uploads/posts/2022-08/1661862325_j-40.jpg',
        //     country: 'Россия',
        //     city: 'Сочи',
        //     status: 'Жара то стоит. Че делать. Не знаешь?',
        //     followed: false
        // },
        // {
        //     id: 3,
        //     name: 'Анна',
        //     surname: 'Тарантино',
        //     avatar: 'https://i.pinimg.com/originals/c8/53/bf/c853bf0f14a513e97f1031f0b6da096a.jpg',
        //     country: 'Россия',
        //     city: 'Плёс',
        //     status: 'Красотаа...лепота',
        //     followed: false
        // },
        // {
        //     id: 4,
        //     name: 'Павел',
        //     surname: 'Могучий',
        //     avatar: 'https://abrakadabra.fun/uploads/posts/2022-01/1642258489_1-abrakadabra-fun-p-tri-bogatirya-na-avu-1.jpg',
        //     country: 'Россия',
        //     city: 'Тула',
        //     status: 'Тульский пряник. Съем тебя.',
        //     followed: false
        // },
        // {
        //     id: 5,
        //     name: 'Костя',
        //     surname: 'Ложкин',
        //     avatar: 'https://mobimg.b-cdn.net/v3/fetch/bd/bd3446decb4f456f03ba2d8efb479423.jpeg',
        //     country: 'Россия',
        //     city: 'Волгоград',
        //     status: 'Сталинград же мы!!!',
        //     followed: true
        // },