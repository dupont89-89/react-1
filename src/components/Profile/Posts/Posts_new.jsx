import React from 'react';
import s from './Posts.module.css';

const Posts_new = () => {
    return (
        <div className={s.new__posts}>
            <textarea className={s.text__new__posts}></textarea>
            <button className={s.btn__send__posts}>
                <span>Новая запись</span>
            </button>
        </div>
    );
}

export default Posts_new;