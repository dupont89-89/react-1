import React from 'react';
import s from './Posts.module.css';
import PostsOldContainer from './Posts_oldContainer';
import PostsNewContainer from './Posts_newContainer';

const Posts = (props) => {

    return (
        <div className={s.wall}>
            <div className={s.posts}>
                <PostsNewContainer/>
                <PostsOldContainer />
            </div>
        </div>
    );
}

export default Posts;