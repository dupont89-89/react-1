import React from 'react';
import s from './Posts.module.css';
import { Link } from 'react-router-dom';
const Posts_one = (props) => {
    return (
        <div className={s.posts__block__otig}>
            <div className={s.wall__posts}>
                <img src="https://i.pinimg.com/originals/c3/dd/58/c3dd58e7e25e4c53f05930019b989221.png" alt="" />
                <div className={s.block__message}>
                    <p>{props.message}</p>
                    <div className={s.like}>
                    <span className={s.like__heart}>{props.number_like} ❤</span>
                    <Link to="#"><span>Нравится</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Posts_one;