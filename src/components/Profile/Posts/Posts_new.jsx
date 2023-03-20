import React from 'react';
import s from './Posts.module.css';
import { addPostActionCreator } from '../../../redux/state';
import { updateNewPostTextActionCreator } from '../../../redux/state';

const Posts_new = (props) => {

    let newPostsElement = React.createRef();

    let addPosts = () => {
        props.dispatch( addPostActionCreator () )
        props.updateNewPostText('');
    }

    let onPostChange = () => {
        let text = newPostsElement.current.value;
        props.dispatch( updateNewPostTextActionCreator (text) )
    }

    return (
        <div className={s.new__posts}>
            <textarea onChange={onPostChange} value={props.newPosttext} ref={newPostsElement} className={s.text__new__posts} />
            <button onClick={addPosts} className={s.btn__send__posts}>
                <span>Новая запись</span>
            </button>
        </div>
    );
}

export default Posts_new;