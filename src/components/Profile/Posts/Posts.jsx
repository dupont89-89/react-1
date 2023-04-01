import React from 'react';
import s from './Posts.module.css';
import PostsOld from './Posts_old';
import PostsNewContainer from './Posts_newContainer';

const Posts = (props) => {

    let state = props.store.getState().profilePage

    return (
        <div className={s.wall}>
            <div className={s.posts}>
                <PostsNewContainer newPosttext={state.newPosttext} dispatch={props.store.dispatch} />
                <PostsOld postData={state.postData} />
            </div>
        </div>
    );
}

export default Posts;