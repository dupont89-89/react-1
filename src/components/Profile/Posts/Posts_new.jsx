import React from 'react';
import s from './Posts.module.css';

const PostsNew = (props) => {

    let newPostsElement = React.createRef();

    let addPosts = () => {
        props.addPosts();
    }

    let onPostChange = () => {
        let text = newPostsElement.current.value
        props.updateNewPostText(text);
    }


    return (
        <div className={s.new__posts}>
            <textarea placeholder='Напиши уже новый пост' onChange={onPostChange} value={props.newPosttext} ref={newPostsElement} className={s.text__new__posts} />
            <button onClick={addPosts} className={s.btn__send__posts}>
                <span>Новая запись</span>
            </button>
        </div>
    );
}

export default PostsNew;