import React from 'react';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import PostsNew from './Posts_new';

const PostsNewContainer = (props) => {
    
    let addPosts = () => {
        props.dispatch( addPostActionCreator () );
        // updateNewPostTextActionCreator ('');
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator (text);
        props.dispatch(action);
    }

    return (
        <PostsNew newPosttext={props.newPosttext} addPosts={addPosts} updateNewPostText={onPostChange} />
    );
}

export default PostsNewContainer;