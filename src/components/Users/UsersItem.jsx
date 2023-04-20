import React from 'react';
import s from './UsersContainer.module.css';

const UsersItem = (props) => {

    const userSubscribreFollow = () => {
        let userID = props.id
        props.follow(userID);

    }

    const userSubscribreUnFollow = () => {
        let userID = props.id
        props.unfollow(userID);

    }

    return (
        <div id={props.id} key={props.id} className={s.users__item}>
            <div className={s.img__user}>
                <img src={props.avatar} alt={props.name} />
                { props.followed ? <button onClick={userSubscribreFollow}>Добавить в друзья</button>
                 : <button onClick={userSubscribreUnFollow}>В друзьях</button>}
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