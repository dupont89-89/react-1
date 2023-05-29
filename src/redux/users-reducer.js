import { getUsers, unsubscribeUsers, subscribeAddUsers } from "../api/api";

const ACTION_FOLLOW = 'ACTION_FOLLOW';
const ACTION_UN_FOLLOW = 'ACTION_UN_FOLLOW';
const ACTION_SET_USERS = 'ACTION_SET_USERS';
const ACTION_SET_CURRENT_PAGE = 'ACTION_SET_CURRENT_PAGE';
const ACTION_SET_TOTAL_USER = 'ACTION_SET_TOTAL_USER';
const ISFETHING_USER_YES = 'ISFETHING_USER_YES';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

export const follow = (userId) => ({ type: ACTION_FOLLOW, userId })
export const unfollow = (userId) => ({ type: ACTION_UN_FOLLOW, userId })
export const setUsers = (usersData) => ({ type: ACTION_SET_USERS, usersData })
export const setCurrentPage = (currentPage) => ({ type: ACTION_SET_CURRENT_PAGE, currentPage })
export const setUsersTotal = (totalUser) => ({ type: ACTION_SET_TOTAL_USER, totalUser })
export const tooggleIsFetching = (e) => ({ type: ISFETHING_USER_YES, e })
export const tooggleInProgress = (progress, userId) => ({ type: FOLLOWING_IN_PROGRESS, progress, userId })

//thunk
export const getUsersThunkCreator = (currentPage, pageSize, p) => {
    return (dispatch) => {
        dispatch(tooggleIsFetching(true));
        dispatch(setCurrentPage(p));
        getUsers(currentPage, pageSize).then(response => {
            dispatch(tooggleIsFetching(false));
            dispatch(setUsers(response.data.items));
            dispatch(setUsersTotal(response.data.totalCount));
        });
    }
}

export const followUsersThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(tooggleInProgress(true, id));
        unsubscribeUsers(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(id))
            }
        dispatch(tooggleInProgress(false, id));
        });
    }
}

export const unfollowUsersThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(tooggleInProgress(true, id));
        subscribeAddUsers(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollow(id))
            }
        dispatch(tooggleInProgress(false, id));
        });
    }
}
//thunk

let initialState = {
    pageSize: 50,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    usersData: [

    ],
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
        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state, followingInProgress: action.progress
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id != action.userId)]
            }
        }
        default:
            return state;
    }
}

export default usersReducer;