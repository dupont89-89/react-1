import React from 'react';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import PostsNew from './Posts_new';

const PostsNewContainer = (props) => {

    let state = props.store.getState().profilePage

    let addPosts = () => {
        props.store.dispatch( addPostActionCreator () );
        // updateNewPostTextActionCreator ('');
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator (text);
        props.store.dispatch(action);
    }

    return (
        <PostsNew newPosttext={state.newPosttext} addPosts={addPosts} updateNewPostText={onPostChange} />
    );
}

export default PostsNewContainer;