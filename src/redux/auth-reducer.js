import { authUser } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

export const setAuthUserData = (id, login, email) => ({
    type: SET_USER_DATA,
    data: { id, login, email }
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

let initialState = {
    data: [{
        id: null,
        login: null,
        email: null,
        isAuth: false,
    }],
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: action.data,
                isAuth: true,
            };
        default:
            return state;
    }

}
export default authReducer;