import React from 'react';
import s from './Posts.module.css';
import PostsNewContainer from './Posts_newContainer';
import PostsOldContainer from './Posts_oldContainer';

const Posts = (props) => {

    return (
        <div className={s.wall}>
            <div className={s.posts}>
                <PostsNewContainer />
                <PostsOldContainer />
            </div>
        </div>
    );
}

export default Posts;