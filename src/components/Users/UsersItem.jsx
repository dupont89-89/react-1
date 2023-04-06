import React from 'react';
import s from './UsersContainer.module.css';

const UsersItem = (props) => {

    const userSubscribre = () => {
        props.follow();

    }
    return (
        <div id={props.id} key={props.id} className={s.users__item}>
            <div className={s.img__user}>
                <img src={props.avatar} alt={props.name} />
                { props.followed ? <button onClick={userSubscribre}>Добавить в друзья</button> : <button onClick={userSubscribre}>В друзьях</button>}
            </div>
            <div className={s.info__user}>
                <div className={s.info__user__name}>
                    <p>{props.name} {props.surname}</p>
                </div>
                <div className={s.info__user__contry}>
                    <p>{props.country}, {props.city}</p>
                </div>
                <div className={s.info__user__status}>
                    <p>{props.status}</p>
                </div>
            </div>
        </div>
    );
}

export default UsersItem;