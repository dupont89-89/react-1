import React from 'react';
import s from './Posts.module.css';
import PostsOne from './Posts_one';

const PostsOld = (props) => {

    let postsUser = props.store.getState().profilePage.postData
    .map( postsUserOld => <PostsOne id={postsUserOld.id} avatar={postsUserOld.avatar} nameUser={postsUserOld.nameUser} message={postsUserOld.message} number_like={postsUserOld.number_like} />);
    debugger;
    return (
        <div className={s.old__wall__posts}>
            {postsUser}
        </div>
    );
}

export default PostsOld;