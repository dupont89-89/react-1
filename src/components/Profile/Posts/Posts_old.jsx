import React from 'react';
import s from './Posts.module.css';
import Posts_one from './Posts_one';

const Posts_old = (props) => {

    let postsUser = props.postData
    .map( postsUserOld => <Posts_one id={postsUserOld.id} avatar={postsUserOld.avatar} nameUser={postsUserOld.nameUser} message={postsUserOld.message} number_like={postsUserOld.number_like} />);

    return (
        <div className={s.old__wall__posts}>
            {postsUser}
        </div>
    );
}

export default Posts_old;