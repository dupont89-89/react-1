import React from 'react';
import s from './Posts.module.css';
import PostsNew from './Posts_new';
import PostsOld from './Posts_old';

const Posts = (props) => {

    let state = props.store.getState().profilePage

    return (
        <div className={s.wall}>
            <div className={s.posts}>
                <PostsNew newPosttext={state.newPosttext} dispatch={props.store.dispatch} />
                <PostsOld postData={state.postData} />
            </div>
        </div>
    );
}

export default Posts;