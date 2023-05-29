import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import { reducer as formReducer } from 'redux-form'
import ThunkMiddleware from "redux-thunk";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";

let reducers = combineReducers ({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
}); 

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store