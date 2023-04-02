import React from 'react';
import s from './Posts.module.css';
import PostsOld from './Posts_old';
import PostsNewContainer from './Posts_newContainer';

const Posts = (props) => {
    
    return (
        <div className={s.wall}>
            <div className={s.posts}>
                <PostsNewContainer store={props.store} />
                <PostsOld store={props.store} />
            </div>
        </div>
    );
}

export default Posts;