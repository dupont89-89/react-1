import React from 'react';
import s from './Posts.module.css';

const Posts_new = (props) => {

    let newPostsElement = React.createRef();

    let addPosts = () => {
        let text = newPostsElement.current.value;
        props.addPost(text);
        newPostsElement.current.value = ('');
    }

    let onPostChange = () => {
        let text = newPostsElement.current.value;
        props.updateNewPostText(text);
        newPostsElement.current.value = ('');
    }


    return (
        <div className={s.new__posts}>
            <textarea onChange={onPostChange} value={props.value} ref={newPostsElement} className={s.text__new__posts} />
            <button onClick={addPosts} className={s.btn__send__posts}>
                <span>Новая запись</span>
            </button>
        </div>
    );
}

export default Posts_new;