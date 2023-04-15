import React from 'react';
import s from './UsersContainer.module.css';
import usersNoAvatar from '../../assets/images/no-avatar.png'
import { NavLink } from 'react-router-dom';

const Users = (props) => {

        return (
            <div>
                <div className={s.pagination__block}>
                    {props.pages.map(p => {
                        return <a href="#" onClick={(e) => { props.onPageChange(p); }} className={props.currentPage === p && s.selected}>{p}</a>
                    })}
                </div>
                {
                    props.usersData.map(usersItem =>
                        <div id={usersItem.id} key={usersItem.id} className={s.users__item}>
                            <div className={s.img__user}>
                                <NavLink to={'/profile/' + usersItem.id}>
                                <img src={usersItem.photos.small != null ? usersItem.photos.small : usersNoAvatar} alt={usersItem.name} />
                                </NavLink>
                                {usersItem.followed ? <button onClick={() => { props.follow(usersItem.id) }}>Добавить в друзья</button>
                                    : <button onClick={() => { props.unfollow(usersItem.id) }}>В друзьях</button>}
                            </div>
                            <div className={s.info__user}>
                                <div className={s.info__user__name}>
                                    <p>{usersItem.name} {usersItem.surname}</p>
                                </div>
                                <div className={s.info__user__contry}>
                                    <p>{usersItem.country}, {usersItem.city}</p>
                                </div>
                                <div className={s.info__user__status}>
                                    <p>{usersItem.status}</p>
                                </div>
                            </div>
                        </div>
                    )

                }
            </div>
        )
    }

export default Users;