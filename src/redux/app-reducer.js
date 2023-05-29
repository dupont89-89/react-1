import { authUsersThunkCreator } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
})

export const initializedApp = () => {
    return (dispatch) => {
        let promise = dispatch(authUsersThunkCreator());
        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess());
        })
    }
}

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }

}

export default appReducer;