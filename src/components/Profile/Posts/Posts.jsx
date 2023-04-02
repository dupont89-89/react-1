import React from 'react';
import s from './Posts.module.css';
import PostsOld from './Posts_old';
import PostsNewContainer from './Posts_newContainer';
import StoreContext from '../../../redux/store-context';

const Posts = (props) => {

    return (
        <StoreContext.Consumer>
            {store => (
                <div className={s.wall}>
                    <div className={s.posts}>
                        <PostsNewContainer store={store} />
                        <PostsOld store={store} />

                    </div>
                </div>
            )}
        </StoreContext.Consumer>
    );
}

export default Posts;