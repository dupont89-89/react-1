const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

const profileReducer = (state, action) => {
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