import React from 'react';
import s from './Posts.module.css';
import Posts_new from './Posts_new';
import Posts_old from './Posts_old';

const Posts = () => {
    return (
        <div className={s.wall}>
            <div className={s.posts}>
                <Posts_new />
                <Posts_old />
            </div>
        </div>
    );
}

export default Posts;