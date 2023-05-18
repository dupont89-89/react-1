import { authUser, loginUser } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_LOGIN_AUTH = 'SET_USER_LOGIN_AUTH';

export const setAuthUserData = (id, login, email) => ({
    type: SET_USER_DATA,
    data: { id, login, email }
})

export const setAuthUserLogin = (userId) => ({
    type: SET_USER_LOGIN_AUTH,
    messages: [],
    data: {
      userId: userId
    }
})

export const authUsersThunkCreator = () => {
    return (dispatch) => {
        authUser().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(response.data.data.id, response.data.data.login, response.data.data.email));
            }
        });
    }
}

export const loginUserThunkCreator = (formData) => {
    return (dispatch) => {
        loginUser(formData).then(response => {
            debugger;
            if (response.resultCode === 0) {
            dispatch (setAuthUserLogin(formData))
            }
        })
    }
}

let initialState = {
    data: [{
        id: null,
        login: null,
        email: null,
        isAuth: false,
    }],
    isAuth: false,
    login: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: action.data,
                isAuth: true,
            };
            case SET_USER_LOGIN_AUTH:
                return {
                    ...state,
                    login: action.userId,
                };
        default:
            return state;
    }

}
export default authReducer;