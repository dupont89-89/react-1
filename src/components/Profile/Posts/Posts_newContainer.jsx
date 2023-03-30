import React from 'react';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import Posts_new from './Posts_new';
// debugger;


const Posts_newContainer = (props) => {
    
    let state = props.store.getState();
    
    let addPosts = () => {
        props.store.dispatch( addPostActionCreator () );
        // updateNewPostTextActionCreator ('');
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator (text);
        props.store.dispatch(action);
    }

    return (
        <Posts_new newPosttext={state.profilePage.newPosttext} addPosts={addPosts} updateNewPostText={onPostChange} />
    );
}

export default Posts_newContainer;