import React from 'react';
import s from './Posts.module.css';
import Posts_new from './Posts_new';
import Posts_old from './Posts_old';

const Posts = (props) => {

    let state = props.store.getState().profilePage

    return (
        <div className={s.wall}>
            <div className={s.posts}>
                <Posts_new newPosttext={state.newPosttext} dispatch={props.store.dispatch} />
                <Posts_old postData={state.postData} />
            </div>
        </div>
    );
}

export default Posts;