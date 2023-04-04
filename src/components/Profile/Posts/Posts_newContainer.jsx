import React from 'react';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import PostsNew from './Posts_new';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        newPosttext: state.profilePage.newPosttext
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPosts: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
}

const PostsNewContainer = connect(mapStateToProps, mapDispatchToProps)(PostsNew);

export default PostsNewContainer;